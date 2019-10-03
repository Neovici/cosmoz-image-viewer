import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { CosmozImageViewerBasic } from './cosmoz-image-viewer-basic';

class CosmozImageViewerExternal extends PolymerElement {
	static get template() {
		return html`
      <!--style>:host { display: none; }</style-->
      <slot id="stage"></slot>
      </div>
    `;
	}

	static get is() {
		return 'cosmoz-image-viewer-external';
	}

	static get properties() {
		return {
			window: {
				type: Object,
				observer(window) {
					if (!window) {
						return;
					}

					const nodes = this.$.stage.assignedNodes();
					console.log(CosmozImageViewerBasic.is, CosmozImageViewerBasic);
					window.customElements.define(CosmozImageViewerBasic.is, CosmozImageViewerBasic);

					nodes.forEach(node => {
						window.document.body.appendChild(node);
					});

					window.addEventListener('beforeunload', () => {
						nodes.forEach(node => {
							this.appendChild(node);
						});
					});
				}
			}
		};
	}
}
window.customElements.define(CosmozImageViewerExternal.is, CosmozImageViewerExternal);
