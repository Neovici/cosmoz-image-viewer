/* eslint-disable multiline-ternary */
import { component, useEffect, useCallback } from 'haunted';
import { html, nothing } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map';
import { usePublicAPI } from './hooks/use-public-api';
import { usePanZoom, ERROR } from './hooks/use-pan-zoom';
import { ref } from './directives/ref';
import { useDispatchEvent } from './hooks/use-dispatch-event';

const HauntedPanZoom = ({ src, disabled, panStiffness, zoomStiffness }) => {
	const {
		status, zoom,
		load, error, zoomTo, resize,
		startMousePan, startTouchPan, startPinch,
		onImageLoad, onWheel,
		style,
		containerRef
	} = usePanZoom(panStiffness, zoomStiffness);

	useEffect(load, [src]);
	usePublicAPI(() => ({ zoomTo, resize }), [zoomTo, resize]);
	usePublicAPI(() => ({ zoom }), [zoom]);

	if (!src) {
		return nothing;
	}

	const dispatchEvent = useDispatchEvent();
	useEffect(() => dispatchEvent(new CustomEvent('zoom-changed', {detail: {value: zoom}})), [dispatchEvent, zoom]);
	useEffect(() => dispatchEvent(new CustomEvent('status-changed', {detail: {value: status}})), [dispatchEvent, status]);

	const onTouchStart = useCallback(ev => {
		startTouchPan(ev);
		startPinch(ev);
	}, [startTouchPan, startPinch]);

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
		<div class="container ${status}"
			style="pointer-events: ${disabled ? 'none' : 'all'}"
			@wheel=${onWheel}>
			${ref(containerRef)}
			${!src || status === ERROR ? nothing : html`
				<img src="${src}" draggable="false"
					@mousedown=${startMousePan}
					@touchstart=${onTouchStart}
					@load=${onImageLoad} @error=${error}
					style=${styleMap(style)}/>
			`}
		</div>
	`;
};

// HACK: make sure that the public api is available immediately after an element is connected
// TODO: find a cleaner way to do this / remove the need for imperative methods entirely
class HauntedPanZoomElement extends HTMLElement {
	resize() { /* will be replaced by usePublicAPI */ }
	zoomTo() { /* will be replaced by usePublicAPI */ }
}

customElements.define('haunted-pan-zoom', component(HauntedPanZoom, {
	observedAttributes: ['src', 'disabled', 'pan-stiffness', 'zoom-stiffness'],
	baseElement: HauntedPanZoomElement
}));
