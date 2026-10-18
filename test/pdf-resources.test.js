import { assert, fixture, html, waitUntil } from '@open-wc/testing';
import { component } from '@pionjs/pion';
import { createSandbox } from 'sinon';
import { useContent } from '../lib/hooks/use-content.js';
import { loadPdf, loadPdfThunks } from '../lib/pdf-loader.js';
import { create } from '../lib/pdf.js';

suite('PDF resource bounds', () => {
	let sandbox;
	let original;

	setup(async () => {
		sandbox = createSandbox();
		await import('pdfjs-dist');
		original = Object.getOwnPropertyDescriptor(
			globalThis,
			'pdfjs-dist/build/pdf',
		);
	});

	teardown(() => {
		sandbox.restore();
		if (original) {
			Object.defineProperty(globalThis, 'pdfjs-dist/build/pdf', original);
		} else {
			delete globalThis['pdfjs-dist/build/pdf'];
		}
	});
	const install = (getDocument) =>
		Object.defineProperty(globalThis, 'pdfjs-dist/build/pdf', {
			configurable: true,
			writable: true,
			value: { getDocument },
		});
	const documentTask = () => {
		const page = {
			getViewport: ({ scale }) => ({ width: 10 * scale, height: 14 * scale }),
			render: sandbox
				.stub()
				.returns({ promise: Promise.resolve(), cancel: sandbox.spy() }),
			cleanup: sandbox.spy(),
		};
		const getPage = sandbox.stub().resolves(page);
		const task = {
			promise: Promise.resolve({ numPages: 50, getPage }),
			destroy: sandbox.stub().resolves(),
		};
		return { task, page, getPage };
	};

	test('keeps pages lazy, releases canvases, and destroys a document only once', async () => {
		const { task, page, getPage } = documentTask();
		install(() => task);
		const controller = new AbortController();
		const pages = await loadPdfThunks('document.pdf', {}, controller.signal);
		assert.lengthOf(pages, 50);
		assert.isFalse(getPage.called);
		assert.match(await pages[12](), /^data:image\/png/u);
		assert.isTrue(getPage.calledOnceWith(13));
		const canvas = page.render.firstCall.args[0].canvasContext.canvas;
		assert.equal(canvas.width, 0);
		assert.equal(canvas.height, 0);
		assert.isTrue(page.cleanup.calledOnce);
		controller.abort();
		assert.isTrue(task.destroy.calledOnce);
	});

	test('destroys a pending load on abort and rejects the load', async () => {
		let reject;
		const task = {
			promise: new Promise((resolve, fail) => {
				reject = fail;
			}),
			destroy: sandbox.stub().callsFake(async () => {
				reject(new DOMException('Aborted', 'AbortError'));
			}),
		};
		const getDocument = sandbox.stub().returns(task);
		install(getDocument);
		const controller = new AbortController();
		const pending = loadPdf('pending.pdf', {}, controller.signal).catch(
			(error) => error,
		);
		await waitUntil(() => getDocument.calledOnce);
		controller.abort();
		assert.equal((await pending).name, 'AbortError');
		assert.isTrue(task.destroy.calledOnce);
	});

	test('cancels an individual render and frees its canvas', async () => {
		const { task, page } = documentTask();
		let reject;
		const cancel = sandbox.spy(() =>
			reject(new DOMException('Cancelled', 'AbortError')),
		);
		page.render.returns({
			promise: new Promise((resolve, fail) => {
				reject = fail;
			}),
			cancel,
		});
		install(() => task);
		const pdf = await loadPdf('render.pdf');
		const controller = new AbortController();
		const pending = pdf
			.getPageDataUrl(0, controller.signal)
			.catch((error) => error);
		await waitUntil(() => page.render.calledOnce);
		controller.abort();
		assert.equal((await pending).name, 'AbortError');
		assert.isTrue(cancel.calledOnce);
		const canvas = page.render.firstCall.args[0].canvasContext.canvas;
		assert.equal(canvas.width, 0);
		assert.equal(canvas.height, 0);
		assert.isTrue(page.cleanup.calledOnce);
		await pdf.destroy();
		await pdf.destroy();
		assert.isTrue(task.destroy.calledOnce);
	});

	test('cleans up a page loaded after its render was cancelled', async () => {
		const { task, page, getPage } = documentTask();
		let resolvePage;
		getPage.returns(
			new Promise((resolve) => {
				resolvePage = resolve;
			}),
		);
		install(() => task);
		const pdf = await loadPdf('cancelled-page.pdf');
		const controller = new AbortController();
		const pending = pdf
			.getPageDataUrl(0, controller.signal)
			.catch((error) => error);
		controller.abort();
		resolvePage(page);
		assert.equal((await pending).name, 'AbortError');
		assert.isFalse(page.render.called);
		assert.isTrue(page.cleanup.calledOnce);
		await pdf.destroy();
	});

	test('destroys the viewer document on source changes and unmount', async () => {
		const { task } = documentTask();
		const getDocument = sandbox.stub().returns(task);
		install(getDocument);
		customElements.define(
			'pdf-content-test',
			component((host) => {
				useContent(host.file);
				return html``;
			}),
		);
		const el = await fixture(
			html`<pdf-content-test .file=${{ pdf: 'one.pdf' }}></pdf-content-test>`,
		);
		await waitUntil(() => getDocument.calledOnce);
		el.file = { images: ['image.png'] };
		await waitUntil(() => task.destroy.calledOnce);
		el.file = { pdf: 'two.pdf' };
		await waitUntil(() => getDocument.calledTwice);
		el.remove();
		assert.isTrue(task.destroy.calledTwice);
	});

	test('does not start loading when already aborted', async () => {
		const getDocument = sandbox.spy();
		install(getDocument);
		const controller = new AbortController();
		controller.abort();
		const error = await loadPdf('unused.pdf', {}, controller.signal).catch(
			(error) => error,
		);
		assert.equal(error.name, 'AbortError');
		assert.isFalse(getDocument.called);
	});

	test('exports one page at a time and preserves the output page count', async () => {
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = 2;
		const image = await new Promise((resolve) => canvas.toBlob(resolve)).then(
			(blob) => blob.arrayBuffer(),
		);
		const releases = [];
		const fetcher = sandbox
			.stub(globalThis, 'fetch')
			.callsFake(
				() =>
					new Promise((resolve) =>
						releases.push(() => resolve(new Response(image))),
					),
			);
		const pending = create(['1.png', '2.png', '3.png'], true);
		for (let count = 1; count <= 3; count++) {
			await waitUntil(() => fetcher.callCount >= count);
			assert.equal(fetcher.callCount, count);
			assert.equal(fetcher.lastCall.args[1].credentials, 'include');
			releases.shift()();
		}
		const blob = await pending;
		assert.lengthOf((await blob.text()).match(/\/Type \/Page\b/gu), 3);
	});

	test('skips failed image responses and returns no PDF when no images load', async () => {
		sandbox
			.stub(globalThis, 'fetch')
			.resolves(new Response('', { status: 404 }));
		assert.isUndefined(await create(['missing.png'], false));
		assert.isUndefined(await create([], false));
	});
});
