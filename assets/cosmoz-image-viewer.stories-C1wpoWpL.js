import{x as g}from"./iframe-8HIp0nS9.js";import"./cosmoz-image-viewer-ZTTfSyIf.js";const c=["stories/images/stockholm.jpg","this-is-a-loading-error.jpg",()=>"stories/images/a_size.png",()=>new Promise(e=>setTimeout(()=>e("stories/images/strasbourg.jpg"),500))],l={title:"Cosmoz Image Viewer",component:"cosmoz-image-viewer"},o=({showDetach:e,showFullscreen:a,showPageNumber:m,showNav:s,loop:i,showZoom:n,detachedShowZoom:t})=>g`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${a}
        ?show-page-number=${m}
        ?show-nav=${s}
        ?loop=${i}
        ?show-zoom=${n}
        ?detached-show-zoom=${t}
        .images=${c}
    ></cosmoz-image-viewer>

    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${a}
        ?show-page-number=${m}
        ?show-nav=${s}
        ?loop=${i}
        ?show-zoom=${n}
        ?detached-show-zoom=${t}
        .images=${["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"]}
    ></cosmoz-image-viewer>
`;o.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const r=()=>{const e=["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"],a=["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"];return g`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .images=${e}
        ></cosmoz-image-viewer>
        <button
            @click=${m=>{const s=m.target.previousElementSibling,i=s.images===e?a:e;return s.images=i,!1}}
        >
            Switch images
        </button>
    `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
\``,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const p=["Basic","Issue21"];export{o as Basic,r as Issue21,p as __namedExportsOrder,l as default};
