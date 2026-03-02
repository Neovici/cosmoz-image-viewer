import{x as w}from"./iframe-D0zZY896.js";import{GlobalWorkerOptions as c}from"./pdf-UA8D4yGl.js";import"./cosmoz-image-viewer-CYEjxmpH.js";const g=["stories/images/stockholm.jpg","this-is-a-loading-error.jpg",()=>"stories/images/a_size.png",()=>new Promise(e=>setTimeout(()=>e("stories/images/strasbourg.jpg"),500))];c.workerSrc=new URL(""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href,import.meta.url).href;const d={title:"Cosmoz Image Viewer",component:"cosmoz-image-viewer"},r=({showDetach:e,showFullscreen:s,showPageNumber:a,showNav:o,loop:m,showZoom:i,detachedShowZoom:t})=>w`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${s}
        ?show-page-number=${a}
        ?show-nav=${o}
        ?loop=${m}
        ?show-zoom=${i}
        ?detached-show-zoom=${t}
        .images=${g}
    ></cosmoz-image-viewer>

    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${s}
        ?show-page-number=${a}
        ?show-nav=${o}
        ?loop=${m}
        ?show-zoom=${i}
        ?detached-show-zoom=${t}
        .images=${["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"]}
    ></cosmoz-image-viewer>
`;r.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const n=({showDetach:e,showFullscreen:s,showPageNumber:a,showNav:o,loop:m,showZoom:i,detachedShowZoom:t})=>w`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${s}
        ?show-page-number=${a}
        ?show-nav=${o}
        ?loop=${m}
        ?show-zoom=${i}
        ?detached-show-zoom=${t}
        pdf="stories/images/sample.pdf"
    ></cosmoz-image-viewer>
`;n.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const h=()=>{const e=["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"],s=["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"];return w`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .images=${e}
        ></cosmoz-image-viewer>
        <button
            @click=${a=>{const o=a.target.previousElementSibling,m=o.images===e?s:e;return o.images=m,!1}}
        >
            Switch images
        </button>
    `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  showDetach,
  showFullscreen,
  showPageNumber,
  showNav,
  loop,
  showZoom,
  detachedShowZoom
}) => html\`
    <cosmoz-image-viewer
        ?show-detach=\${showDetach}
        ?show-fullscreen=\${showFullscreen}
        ?show-page-number=\${showPageNumber}
        ?show-nav=\${showNav}
        ?loop=\${loop}
        ?show-zoom=\${showZoom}
        ?detached-show-zoom=\${detachedShowZoom}
        .images=\${images}
    ></cosmoz-image-viewer>

    <cosmoz-image-viewer
        ?show-detach=\${showDetach}
        ?show-fullscreen=\${showFullscreen}
        ?show-page-number=\${showPageNumber}
        ?show-nav=\${showNav}
        ?loop=\${loop}
        ?show-zoom=\${showZoom}
        ?detached-show-zoom=\${detachedShowZoom}
        .images=\${['stories/images/cosmos1.jpg', 'stories/images/cosmos2.jpg']}
    ></cosmoz-image-viewer>
\``,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  showDetach,
  showFullscreen,
  showPageNumber,
  showNav,
  loop,
  showZoom,
  detachedShowZoom
}) => html\`
    <cosmoz-image-viewer
        ?show-detach=\${showDetach}
        ?show-fullscreen=\${showFullscreen}
        ?show-page-number=\${showPageNumber}
        ?show-nav=\${showNav}
        ?loop=\${loop}
        ?show-zoom=\${showZoom}
        ?detached-show-zoom=\${detachedShowZoom}
        pdf="stories/images/sample.pdf"
    ></cosmoz-image-viewer>
\``,...n.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const images1 = ['stories/images/stockholm.jpg', 'stories/images/strasbourg.jpg'],
    images2 = ['stories/images/cosmos1.jpg', 'stories/images/cosmos2.jpg'];
  return html\`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .images=\${images1}
        ></cosmoz-image-viewer>
        <button
            @click=\${e => {
    const ciw = e.target.previousElementSibling,
      newImages = ciw.images === images1 ? images2 : images1;
    ciw.images = newImages;
    return false;
  }}
        >
            Switch images
        </button>
    \`;
}`,...h.parameters?.docs?.source}}};const $=["Basic","Pdf","Issue21"];export{r as Basic,h as Issue21,n as Pdf,$ as __namedExportsOrder,d as default};
