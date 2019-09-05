/* eslint-disable multiline-ternary */
import { component, html } from 'haunted';

const HauntedPanZoom = ({ src }) => {
	return html`<img src="${src}"/>`;
};

customElements.define('haunted-pan-zoom', component(HauntedPanZoom, {
	observedAttributes: ['src']
}));
