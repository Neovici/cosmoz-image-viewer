import{x as u}from"./lit-html-CuJYtJU3.js";import"./cosmoz-image-viewer-BymX94oz.js";import"./directive-helpers-CE2IdeAx.js";import"./iframe-DC_Ex_ws.js";import"../sb-preview/runtime.js";const $=["stockholm.jpg","this-is-a-loading-error.jpg",()=>"a_size.png",()=>new Promise(o=>setTimeout(()=>o("strasbourg.jpg"),500))],f={title:"Cosmoz Image Viewer",component:"cosmoz-image-viewer"},s=({showDetach:o,showFullscreen:m,showPageNumber:a,showNav:e,loop:n,showZoom:c,detachedShowZoom:i})=>u`
    <cosmoz-image-viewer
        ?show-detach=${o}
        ?show-fullscreen=${m}
        ?show-page-number=${a}
        ?show-nav=${e}
        ?loop=${n}
        ?show-zoom=${c}
        ?detached-show-zoom=${i}
        .images=${$}
    ></cosmoz-image-viewer>

    <cosmoz-image-viewer
        ?show-detach=${o}
        ?show-fullscreen=${m}
        ?show-page-number=${a}
        ?show-nav=${e}
        ?loop=${n}
        ?show-zoom=${c}
        ?detached-show-zoom=${i}
        .images=${["cosmos1.jpg","cosmos2.jpg"]}
    ></cosmoz-image-viewer>
`;s.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const r=()=>{const o=["stockholm.jpg","strasbourg.jpg"],m=["cosmos1.jpg","cosmos2.jpg"];return u`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .images=${o}
        ></cosmoz-image-viewer>
        <button
            @click=${a=>{const e=a.target.previousElementSibling,n=e.images===o?m:o;return e.images=n,!1}}
        >
            Switch images
        </button>
    `};var t,g,w;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
        .images=\${['cosmos1.jpg', 'cosmos2.jpg']}
    ></cosmoz-image-viewer>
\``,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var h,p,l;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const images1 = ['stockholm.jpg', 'strasbourg.jpg'],
    images2 = ['cosmos1.jpg', 'cosmos2.jpg'];
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
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["Basic","Issue21"];export{s as Basic,r as Issue21,S as __namedExportsOrder,f as default};
