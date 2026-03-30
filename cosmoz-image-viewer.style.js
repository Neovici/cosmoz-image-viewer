export const style = `:host {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    font-family: var(--cz-font-body);
    font-size: var(--cz-text-sm);
    min-height: 250px;
}

:host([fullscreen]) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    z-index: 1000;
}

.flex { flex: auto; }

#imageContainer {
    height: 100%;
    overflow-y: auto;
}

.actions {
    position: absolute;
    left: 0;
    right: 0;
    margin: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.nav.counter {
    position: absolute;
    left: calc(50% - 32px);
    margin-top: 22px;
    width: 40px;
    padding: 4px 10px;
    border-radius: var(--cz-radius-full);
    text-align: center;
    font-weight: 100;
    font-size: 1em;
}

.nav {
    z-index: +1;
    color: var(--cz-color-fg-white);
    background-color: rgba(0, 0, 0, 0.44);
    border-radius: var(--cz-radius-full);
    margin: 3px;
    fill: var(--cz-color-fg-white);
}

button.nav {
    border: none;
    width: 40px;
    height: 40px;
    transition: background-color 100ms;
}

button.nav:not([disabled]) {
    cursor: pointer;
}

button.nav[disabled] {
    opacity: 0.5;
}

button.nav:active:not([disabled]) {
    background-color: rgba(0, 0, 0, 0.60);
}

.nav:not(:hover) {
    visibility: hidden;
}

:host(:hover) .nav {
    visibility: visible;
}

.image {
    background-color: gray;
    pointer-events: none;
    overflow: visible;
}

.image-zoom {
    flex: auto;
    display: flex;
    justify-content: center;
    background-color: black;
    height: 100vh;
}

.error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--cz-color-text-error);
    z-index: +1;
    text-align: center;
    background: var(--cz-color-bg-error);
    padding: 20px;
}

.error .desc {
    padding-top: 1em;
    opacity: 0.8;
    font-size: 0.8em;
}

cosmoz-slider {
    min-height: 150px;
    overflow-y: auto !important;
    height: 100%;
}

cz-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}

/* Loading overlay */
.loading-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: var(--cz-color-bg-overlay);
}

/* Source-level error */
.source-error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--cz-color-text-error);
    z-index: 2;
    text-align: center;
    background: var(--cz-color-bg-error);
    padding: 20px;
    border-radius: var(--cz-radius-md, 8px);
}

.source-error .desc {
    padding-top: 1em;
    opacity: 0.8;
    font-size: 0.8em;
}

/* Attachment selector dropdown - contour style */
.attachment-select {
    visibility: hidden;
    max-width: 250px;
    --cosmoz-input-color: #aeacac;
    --cosmoz-input-border-radius: var(--cz-radius-full);
    --cosmoz-input-wrap-padding: 0 12px;
    --cosmoz-input-padding: 14px 0px;
    --cosmoz-input-line-display: none;
    --cosmoz-input-contour-size: 1px;
    --cosmoz-input-label-translate-y: 8px;
    --cosmoz-input-float-display: none;
    --cosmoz-autocomplete-chip-translate-y: 0;
    --cosmoz-autocomplete-chip-border-radius: 4px;
    --cosmoz-autocomplete-chip-bg-color: transparent;
    --cosmoz-autocomplete-chip-color: var(--cz-color-fg-white);
    --cosmoz-autocomplete-chip-text-font-size: 0.875rem;
    --cosmoz-autocomplete-chip-text-font-weight: 400;
    --cosmoz-autocomplete-chip-clear-display: none;
    --cosmoz-autocomplete-chip-clear-bg-color: transparent;
}

:host(:hover) .attachment-select {
    visibility: visible;
}

.attachment-select::part(chip) {
    flex: none;
}

.attachment-select::part(input-wrap) {
    padding: 0 12px;
    height: 40px;
    background: rgba(0, 0, 0, 0.44);
    border: none;
    border-radius: var(--cz-radius-full);
    font-family: inherit;
    color: var(--cz-color-fg-white);
    cursor: pointer;
    box-shadow: none;
}

.attachment-select::part(input-wrap):focus-within {
    box-shadow: none;
}

.attachment-select::part(input-line) {
    display: none;
}

.attachment-select::part(input-input) {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--cz-color-fg-white);
    font-weight: 400;
    width: 100%;
    min-width: 0;
    flex: 1;
}

.attachment-select::part(input-control) {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}
`;
