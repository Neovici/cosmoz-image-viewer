import { component } from 'haunted';
import { html } from 'lit-html';

import { useCarousel, ANIMATING, PREPARING } from './hooks/use-carousel';
import { usePublicAPI } from './hooks/use-public-api';
import { useDispatchEvent } from './hooks/use-dispatch-event';

// eslint-disable-next-line max-lines-per-function
const HauntedImageViewer = ({ images = [] }) => {
	const { next, animationDone, current, inIndex, status } = useCarousel();

	usePublicAPI(() => ({next}), [next]);

	const dispatch = useDispatchEvent();
	dispatch(new CustomEvent('render'));

	const outClasses = (() => {
		switch (status) {
		case ANIMATING:
			return 'out animating';
		}
		return 'out';
	})();

	const inClasses = (() => {
		switch (status) {
		case PREPARING:
			return 'in';
		case ANIMATING:
			return 'in animating';
		}
		return 'in hidden';
	})();

	return html`
		<style>
			:host {
				display: block;
			}

			div {
				position: relative;
				width: 200px;
				overflow: hidden
			}

			img { width: 200px; }

			.hidden {
				display: none;
			}

			.in {
				position: absolute;
				left: 0;
				top: 0;

				transform: translateX(200px);
			}

			.animating {
				transform: translateX(0);
				transition: transform 200ms ease;
			}

			.out.animating {
				transform: translateX(-200px);
				transition: transform 200ms ease;
			}
		</style>

		<button @click=${next}>Next</button>

		<div>
			<img class="${outClasses}" src="${images[current]}"/>
			<img class="${inClasses}" src="${images[inIndex]}" @transitionend=${animationDone}/>
		</div>

	`;
};

HauntedImageViewer.observedAttributes = ['images'];

customElements.define('haunted-image-viewer', component(HauntedImageViewer));
