/* eslint-disable multiline-ternary */
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { component, useCallback, useEffect } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { useDispatchEvent } from './hooks/use-dispatch-event';
import { ERROR, usePanZoom } from './hooks/use-pan-zoom';

// eslint-disable-next-line max-lines-per-function
const HauntedPanZoom = ({ src, disabled, panStiffness, zoomStiffness }) => {
	const {
		status,
		zoom,
		load,
		error,
		zoomTo,
		resize,
		startMousePan,
		startTouchPan,
		startPinch,
		onImageLoad,
		onWheel,
		style,
		containerRef,
	} = usePanZoom(panStiffness, zoomStiffness);

	// trigger load transition when src changes
	useEffect(load, [src]);

	// expose public api for interoperability
	useImperativeApi({ zoomTo, resize, zoom }, [zoomTo, resize, zoom]);

	// don't render anything if src is missing
	if (!src) {
		return nothing;
	}

	// polymer interop
	const dispatchEvent = useDispatchEvent();
	useEffect(
		() =>
			dispatchEvent(
				new CustomEvent('zoom-changed', { detail: { value: zoom } }),
			),
		[dispatchEvent, zoom],
	);
	useEffect(
		() =>
			dispatchEvent(
				new CustomEvent('status-changed', { detail: { value: status } }),
			),
		[dispatchEvent, status],
	);

	const onTouchStart = useCallback(
		(ev) => {
			startTouchPan(ev);
			startPinch(ev);
		},
		[startTouchPan, startPinch],
	);

	return html`
		<style>
			:host {
				display: block;
			}

			.container {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
				touch-action: none;
				user-select: none;
			}
		</style>
		<div
			class="container ${status}"
			style="pointer-events: ${disabled ? 'none' : 'all'}"
			@wheel=${onWheel}
			${ref((el) => (containerRef.current = el))}
		>
			${!src || status === ERROR
				? nothing
				: html`
						<img
							src=${src}
							draggable="false"
							@mousedown=${startMousePan}
							@touchstart=${onTouchStart}
							@load=${onImageLoad}
							@error=${error}
							style=${styleMap(style)}
						/>
				  `}
		</div>
	`;
};

// HACK: make sure that the public api is available immediately after an element is connected
// TODO: find a cleaner way to do this / remove the need for imperative methods entirely
class HauntedPanZoomElement extends HTMLElement {
	resize() {
		/* will be replaced by useImperativeApi */
	}
	zoomTo() {
		/* will be replaced by useImperativeApi */
	}
}

customElements.define(
	'haunted-pan-zoom',
	component(HauntedPanZoom, {
		observedAttributes: ['src', 'disabled', 'pan-stiffness', 'zoom-stiffness'],
		baseElement: HauntedPanZoomElement,
	}),
);
