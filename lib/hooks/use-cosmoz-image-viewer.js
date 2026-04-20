import '@neovici/cosmoz-utils/elements/cz-spinner';

import { slideInLeft, slideInRight } from '@neovici/cosmoz-slider/animations';
import { invoke } from '@neovici/cosmoz-utils/function';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { memoize } from '@neovici/cosmoz-utils/memoize';
import {
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';
import { download, downloadUrl } from '../pdf';
import { hasWindow, popout } from '../popout';
import { print } from '../print';
import { useContent } from './use-content';
import { useSource } from './use-source';
import { useSwipe } from './use-swipe';

const empty = [],
	/**
	 * Convert old API (images/pdf props) to new source-based API.
	 * Supports backwards compatibility for tests and existing usage.
	 */
	toSource = (host) => {
		// New API: source prop takes precedence
		if (host.source != null) {
			return host.source;
		}
		// Old API: images/pdf props
		if (host.images != null || host.pdf != null) {
			return [
				{
					images: host.images ?? empty,
					pdf: host.pdf,
					pdfOptions: host.pdfOptions,
				},
			];
		}
		return empty;
	},
	onImageError = (e) => {
		if (!e.currentTarget.parentElement) {
			return;
		}

		const errorContainer =
			e.currentTarget.parentElement.querySelector('.error');
		errorContainer.removeAttribute('hidden');
		e.currentTarget.setAttribute('hidden', true);
	},
	onStatusChanged = (ev) => ev.detail.value === 'error' && onImageError(ev),
	renderImage = ({ src$, showZoom, isZoomed, _onZoomChanged }) => {
		const src = guard(src$, () => until(src$));

		return [
			showZoom
				? html`<haunted-pan-zoom
						.src=${src}
						?disabled=${!isZoomed}
						@zoom-changed=${_onZoomChanged}
						@status-changed=${onStatusChanged}
					></haunted-pan-zoom>`
				: html`<img .src=${src} style="width:100%" @error=${onImageError} />`,
			guard(src$, () =>
				until(
					src$.then(() => nothing),
					html`<cz-spinner></cz-spinner>`,
				),
			),
		];
	},
	renderSlide = (opts) =>
		html`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${opts.image}</div>
			</div>
			${renderImage(opts)}
		</div>`,
	clamp = (val, min, max) => Math.max(min, Math.min(max, val)),
	/**
	 * Find the next non-empty attachment index in a given direction.
	 * @param {Array} attachments
	 * @param {number} fromIndex - current attachment index
	 * @param {number} direction - +1 or -1
	 * @param {boolean} loop
	 * @returns {number|undefined}
	 */
	findAttachment = (attachments, fromIndex, direction, loop) => {
		const len = attachments.length;
		for (let i = 1; i <= len; i++) {
			const idx = (fromIndex + i * direction + len) % len;
			if (!loop && direction > 0 && idx <= fromIndex) return;
			if (!loop && direction < 0 && idx >= fromIndex) return;
			const att = attachments[idx];
			if ((att.images?.length ?? 0) > 0 || att.pdf) return idx;
		}
	},
	useCosmozImageViewer = (host) => {
		const { showZoom, title, loop, detachedShowZoom } = host,
			source = useMemo(
				() => toSource(host),
				[host.source, host.images, host.pdf, host.pdfOptions],
			),
			{ attachments, loading, error } = useSource(source),
			// --- Attachment selection (useProperty: host prop is the state) ---
			[attachmentIndex, setAttachmentIndex] = useProperty(
				'currentAttachmentIndex',
				0,
			),
			safeAttachmentIndex =
				attachments.length > 0
					? clamp(attachmentIndex ?? 0, 0, attachments.length - 1)
					: 0,
			selected = attachments[safeAttachmentIndex],
			value = selected ? [selected] : empty,
			// --- Animation direction (set by navigation callbacks) ---
			directionRef = useRef(slideInRight),
			onSelect = useCallback(
				(e) => {
					const sel = e.detail?.[0];
					const idx = attachments.indexOf(sel);
					if (idx >= 0) {
						directionRef.current = slideInRight;
						setAttachmentIndex(idx);
					}
				},
				[attachments],
			),
			// --- Content for current attachment (images or PDF) ---
			downloadFileName = selected?.downloadFileName ?? 'archive',
			{
				images,
				loading: contentLoading,
				error: contentError,
			} = useContent(selected),
			// --- Zoom ---
			[isZoomed, setIsZoomed] = useState(false),
			_onZoomChanged = (ev) => setIsZoomed(ev.detail.value > 1),
			_invoke = useMemo(
				() => memoize((image) => Promise.resolve(invoke(image))),
				[],
			),
			// --- Image index (useProperty: host prop is the state) ---
			[imageIndex, setImageIndex] = useProperty('currentImageIndex', 0),
			index =
				images.length > 0 ? clamp(imageIndex ?? 0, 0, images.length - 1) : 0,
			image = images[index],
			// --- Slide object for cosmoz-slider ---
			slide = useMemo(() => {
				if (image == null) {
					return {
						id: Math.random(),
						content: nothing,
						animation: slideInRight,
					};
				}
				return {
					id: image,
					render: () =>
						renderSlide({
							src$: _invoke(image),
							showZoom,
							isZoomed,
							_onZoomChanged,
							image,
						}),
					animation: directionRef.current,
				};
			}, [image, showZoom, isZoomed, _onZoomChanged]),
			// --- Cross-attachment navigation ---
			gotoLastRef = useRef(false),
			first = !loop && safeAttachmentIndex === 0 && index <= 0,
			last =
				!loop &&
				safeAttachmentIndex === attachments.length - 1 &&
				index >= images.length - 1,
			nextImage = useCallback(() => {
				directionRef.current = slideInRight;
				if (index < images.length - 1) {
					return setImageIndex(index + 1);
				}
				const nextIdx = findAttachment(
					attachments,
					safeAttachmentIndex,
					1,
					loop,
				);
				if (nextIdx != null) {
					setAttachmentIndex(nextIdx);
					setImageIndex(0);
				}
			}, [index, images.length, attachments, safeAttachmentIndex, loop]),
			previousImage = useCallback(() => {
				directionRef.current = slideInLeft;
				if (index > 0) {
					return setImageIndex(index - 1);
				}
				const prevIdx = findAttachment(
					attachments,
					safeAttachmentIndex,
					-1,
					loop,
				);
				if (prevIdx != null) {
					gotoLastRef.current = true;
					setAttachmentIndex(prevIdx);
				}
			}, [index, attachments, safeAttachmentIndex, loop]);

		// --- Swipe-to-navigate on touch devices ---
		useSwipe(host, {
			onSwipeLeft: nextImage,
			onSwipeRight: previousImage,
			enabled: !isZoomed,
		});

		const // --- Detached state (useState: child manages own state, parent listens) ---
			[detached, setDetached] = useState(false),
			// --- Fullscreen ---
			[isFullscreen, setIsFullscreen] = useState(false),
			openFullscreen = () => setIsFullscreen(true),
			closeFullscreen = () => setIsFullscreen(false),
			// --- Sync handlers ---
			syncDetachedState = (ev) => setDetached(ev.detail.value),
			// Popout needs manual sync handlers since it's a separate window
			popoutSyncImageIndex = (ev) => setImageIndex(ev.detail.value),
			popoutSyncAttachmentIndex = (ev) => setAttachmentIndex(ev.detail.value),
			detach = useCallback(
				() =>
					popout({
						source: attachments,
						attachmentIndex: safeAttachmentIndex,
						index,
						syncImageIndex: popoutSyncImageIndex,
						syncAttachmentIndex: popoutSyncAttachmentIndex,
						title,
						loop,
						detachedShowZoom,
						onDetach: () => setDetached(true),
						onClose: () => setDetached(false),
					}),
				[attachments, safeAttachmentIndex, index, title, loop],
			),
			syncState = useCallback(() => {
				if (!hasWindow()) return;
				detach();
			}, [detach]);

		// When images change (attachment switch), clamp index or goto last
		useEffect(() => {
			if (images.length === 0) return;
			if (gotoLastRef.current) {
				gotoLastRef.current = false;
				setImageIndex(images.length - 1);
				return;
			}
			const current = imageIndex ?? 0;
			if (current >= images.length) {
				setImageIndex(clamp(current, 0, images.length - 1));
			}
		}, [images]);

		// Clamp attachment index when attachments change
		useEffect(() => {
			const current = attachmentIndex ?? 0;
			if (attachments.length > 0 && current >= attachments.length) {
				setAttachmentIndex(0);
			}
		}, [attachments]);

		useNotifyProperty('detached', detached, [detached]);

		useEffect(() => {
			host.toggleAttribute('hidden', detached);
		}, [detached]);
		useImperativeApi({ syncState }, [syncState]);

		const navTotal =
			images.length +
			(attachments.length > 1
				? attachments.reduce(
						(sum, att, i) =>
							sum + (i === safeAttachmentIndex ? 0 : att.images?.length ?? 0),
						0,
					)
				: 0);

		return {
			host,
			isZoomed,
			currentSlide: slide,
			nextImage,
			previousImage,
			first,
			last,
			total: images.length,
			navTotal,
			currentImageIndex: index,
			selectedImageNumber: index + 1,
			onDownloadPdf: selected?.pdf
				? () => downloadUrl(selected.pdf, downloadFileName, selected.pdfOptions)
				: () => download(images, downloadFileName, true),

			isFullscreen,
			openFullscreen,
			closeFullscreen,

			onPrintPdf: () => print({ images }),
			detached,
			detach,
			syncDetachedState,
			setAttachmentIndex,
			setImageIndex,

			// source-related state
			loading: loading || contentLoading,
			error,
			contentError,
			attachments,
			selected,
			selectedIndex: safeAttachmentIndex,
			value,
			onSelect,
			images,
		};
	};

export { useCosmozImageViewer };
