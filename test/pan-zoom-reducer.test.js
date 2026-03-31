import { assert } from '@open-wc/testing';
import { panZoomReducer, initState, LOADED, PINCHING, IDLE, PANNING } from '../lib/reducers/pan-zoom.js';

const makePointerdown = (id, x, y) => ({
		type: 'pointerdown',
		id,
		x,
		y,
	}),
	makePointermove = (id, x, y, containerOriginX = 0, containerOriginY = 0) => ({
		type: 'pointermove',
		id,
		x,
		y,
		containerOriginX,
		containerOriginY,
	}),
	makePointerup = (id, settleOriginX = 0, settleOriginY = 0) => ({
		type: 'pointerup',
		id,
		settleOriginX,
		settleOriginY,
	});

const createLoadedState = (iw, ih, cw, ch, zoom = 1) => ({
	...initState,
	status: LOADED,
	iw,
	ih,
	cw,
	ch,
	zoom,
});

const toOrigin = (clientX, clientY, containerCenterX, containerCenterY) => ({
	x: clientX - containerCenterX,
	y: clientY - containerCenterY,
});

suite('pan-zoom-reducer', () => {
	suite('pinch zoom', () => {
		test('basic pinch zoom increases zoom level', () => {
			const centerX = 200,
				centerY = 200;

			const state0 = createLoadedState(400, 400, 400, 400);

			let state = panZoomReducer(state0, makePointerdown(1, 100, 200));
			state = panZoomReducer(state, makePointerdown(2, 300, 200));
			assert.equal(state.interaction, PINCHING);

			const p1End = { x: 50, y: 200 },
				p2End = { x: 350, y: 200 },
				origin1 = toOrigin(p1End.x, p1End.y, centerX, centerY),
				origin2 = toOrigin(p2End.x, p2End.y, centerX, centerY);

			state = panZoomReducer(state, makePointermove(1, p1End.x, p1End.y, origin1.x, origin1.y));
			state = panZoomReducer(state, makePointermove(2, p2End.x, p2End.y, origin2.x, origin2.y));

			// Distance: 200 -> 300, scaleDiff = 1.5 expected
			assert.closeTo(state.zoom, 1.5, 0.1, 'zoom should be approximately 1.5');
		});

		test('pinch zoom past max cap uses rubber-band', () => {
			const state0 = createLoadedState(400, 400, 400, 400, 1.8);
			const maxZoom = 2.2,
				centerX = 200,
				centerY = 200;

			let state = panZoomReducer(state0, makePointerdown(1, 100, 200));
			state = panZoomReducer(state, makePointerdown(2, 300, 200));

			const p1End = { x: 0, y: 200 },
				p2End = { x: 400, y: 200 },
				origin1 = toOrigin(p1End.x, p1End.y, centerX, centerY),
				origin2 = toOrigin(p2End.x, p2End.y, centerX, centerY);

			state = panZoomReducer(state, makePointermove(1, p1End.x, p1End.y, origin1.x, origin1.y));
			state = panZoomReducer(state, makePointermove(2, p2End.x, p2End.y, origin2.x, origin2.y));

			// Raw zoom: 1.8 * 400/200 = 3.6, max is 2.2
			assert.isTrue(state.zoom > maxZoom, `zoom ${state.zoom} should be rubber-banded past max ${maxZoom}`);
			assert.isTrue(state.zoom < 3.6, 'zoom should be rubber-banded');
		});

		test('pinch release past max zoom clamps preserving focal point (MAIN BUG TEST)', () => {
			const state0 = createLoadedState(400, 400, 400, 400, 1.8);
			const maxZoom = 2.2,
				centerX = 200,
				centerY = 200;

			const p1 = { x: 100, y: 200 },
				p2 = { x: 300, y: 200 },
				focalX = 0,
				focalY = 0;

			let state = panZoomReducer(state0, makePointerdown(1, p1.x, p1.y));
			state = panZoomReducer(state, makePointerdown(2, p2.x, p2.y));

			const p1End = { x: 0, y: 200 },
				p2End = { x: 400, y: 200 },
				origin1 = toOrigin(p1End.x, p1End.y, centerX, centerY),
				origin2 = toOrigin(p2End.x, p2End.y, centerX, centerY);

			state = panZoomReducer(state, makePointermove(1, p1End.x, p1End.y, origin1.x, origin1.y));
			state = panZoomReducer(state, makePointermove(2, p2End.x, p2End.y, origin2.x, origin2.y));

			const zoomBeforeRelease = state.zoom,
				panXBeforeRelease = state.panX;

			state = panZoomReducer(state, makePointerup(1, focalX, focalY));

			assert.isAtMost(state.zoom, maxZoom + 0.01, 'zoom should be clamped to max');

			const expectedRatio = state.zoom / zoomBeforeRelease,
				expectedPanX = focalX + (panXBeforeRelease - focalX) * expectedRatio;

			assert.closeTo(state.panX, expectedPanX, 0.5, 'panX should adjust proportionally when zoom clamped');
		});

		test('rubber-banded zoom preserves focal point relationship', () => {
			const state0 = createLoadedState(400, 400, 400, 400, 2),
				centerX = 200,
				centerY = 200,
				maxZoom = 2.2;

			let state = panZoomReducer(state0, makePointerdown(1, 100, 200));
			state = panZoomReducer(state, makePointerdown(2, 300, 200));

			const p1End = { x: 50, y: 200 },
				p2End = { x: 350, y: 200 },
				origin1 = toOrigin(p1End.x, p1End.y, centerX, centerY),
				origin2 = toOrigin(p2End.x, p2End.y, centerX, centerY);

			state = panZoomReducer(state, makePointermove(1, p1End.x, p1End.y, origin1.x, origin1.y));
			state = panZoomReducer(state, makePointermove(2, p2End.x, p2End.y, origin2.x, origin2.y));

			assert.isAbove(state.zoom, 2, 'zoom should increase');
			assert.isTrue(state.zoom > maxZoom, 'zoom should exceed max and be rubber-banded');
		});

		test('midpoint origin is correctly computed from pointer origins', () => {
			const state0 = createLoadedState(400, 400, 400, 400);

			const p1 = { x: 100, y: 150 },
				p2 = { x: 300, y: 250 };

			let state = panZoomReducer(state0, makePointerdown(1, p1.x, p1.y));
			state = panZoomReducer(state, makePointerdown(2, p2.x, p2.y));

			const p1End = { x: 50, y: 100 },
				p2End = { x: 350, y: 300 },
				origin1 = toOrigin(p1End.x, p1End.y, 200, 200),
				origin2 = toOrigin(p2End.x, p2End.y, 200, 200);

			state = panZoomReducer(state, makePointermove(1, p1End.x, p1End.y, origin1.x, origin1.y));
			state = panZoomReducer(state, makePointermove(2, p2End.x, p2End.y, origin2.x, origin2.y));

			const expectedScaleDiff = Math.hypot(p2End.x - p1End.x, p2End.y - p1End.y) / Math.hypot(p2.x - p1.x, p2.y - p1.y);
			assert.closeTo(state.zoom, expectedScaleDiff, 0.1, 'zoom should match computed scale diff');
		});
	});

	suite('panning transitions', () => {
		test('single pointer starts panning', () => {
			let state = { ...initState, status: LOADED, iw: 100, ih: 100, cw: 200, ch: 200 };
			state = panZoomReducer(state, makePointerdown(1, 100, 100));
			assert.equal(state.interaction, PANNING);
		});

		test('second pointer transitions to pinching', () => {
			let state = { ...initState, status: LOADED, iw: 100, ih: 100, cw: 200, ch: 200 };
			state = panZoomReducer(state, makePointerdown(1, 100, 100));
			state = panZoomReducer(state, makePointerdown(2, 150, 100));
			assert.equal(state.interaction, PINCHING);
		});

		test('releasing one finger from pinch returns to panning', () => {
			let state = { ...initState, status: LOADED, iw: 100, ih: 100, cw: 200, ch: 200, zoom: 2 };
			state = panZoomReducer(state, makePointerdown(1, 100, 100));
			state = panZoomReducer(state, makePointerdown(2, 150, 100));
			state = panZoomReducer(state, makePointerup(1, 0, 0));
			assert.equal(state.interaction, PANNING);
			assert.equal(Object.keys(state.pointers).length, 1);
		});

		test('releasing all fingers returns to idle', () => {
			let state = { ...initState, status: LOADED, iw: 100, ih: 100, cw: 200, ch: 200 };
			state = panZoomReducer(state, makePointerdown(1, 100, 100));
			state = panZoomReducer(state, makePointerup(1, 0, 0));
			assert.equal(state.interaction, IDLE);
		});
	});
});