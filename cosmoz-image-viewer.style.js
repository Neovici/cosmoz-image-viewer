export const style = `:host {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
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
}

.nav.counter {
    position: absolute;
    left: calc(50% - 32px);
    margin-top: 22px;
    width: 40px;
    padding: 4px 10px;
    border-radius: 30px;
    text-align: center;
    font-weight: 100;
    font-size: 1em;
}

.nav {
    z-index: +1;
    opacity: 0.5;
    color: rgba(255, 255, 255, 0.87);
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.44);
    border-radius: 20px;
    margin: 3px;
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
    /* Needed to override Chrome 73+ handling of iron-image overflow hidden */
    overflow: visible;
    @apply --cosmoz-image-viewer-image;
}

.image-zoom {
    flex: auto;
    display: flex;
    justify-content: center;
    background-color: black;
    height: 100vh;
    @apply --cosmoz-image-viewer-image-zoom;
}

.error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: +1;
    text-align: center;
    @apply --cosmoz-image-viewer-error;
}

.error .desc {
    padding-top: 1em;
    opacity: 0.8;
    font-size: 0.8em;
}

cosmoz-slider { 
    min-height: 150px;
    // overflow-y: auto !important;
    height:100%;
    overflow-y: hidden;
}`;
