import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { IronOverlayBehavior } from '@polymer/iron-overlay-behavior';

import './cosmoz-image-viewer.js';

class CosmozImageViewerOverlay extends mixinBehaviors([IronOverlayBehavior], PolymerElement) {
	static get template() {
		return html`
				<style>
						:host {
								background: rgb(0, 0, 0);
								height: 100vh;
								width: 100vw;
						}
				</style>
				<cosmoz-image-viewer
					on-track="_trackHandler" on-close-tapped="close"
					images="[[images]]" sizing="contain"
					credentials="[[credentials]]" current-image-index="[[currentImageIndex]]"
					show-nav show-zoom show-close show-detach="[[showDetach]]" loop="[[loop]]">
				</cosmoz-image-viewer>
`;
	}

	static get is() {
		return 'cosmoz-image-viewer-overlay';
	}

	static get properties() {
		return {
			images: {
				type: Array
			},
			currentImageIndex: {
				type: Number
			},
			showDetach: {
				type: Boolean
			},
			loop: {
				type: Boolean
			},
			credentials: {
				type: Boolean
			}
		};
	}

	connectedCallback() {
		super.connectedCallback();
		this.noCancelOnOutsideClick = true;
	}

	_trackHandler(e) {
		if (e.detail.state !== 'end') {
			return;
		}
		// Swipe down to close
		if (e.detail.dy > window.innerHeight * 0.4) {
			this.close();
		}
	}
}
window.customElements.define(CosmozImageViewerOverlay.is, CosmozImageViewerOverlay);
