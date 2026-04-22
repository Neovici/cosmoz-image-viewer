import{b as n}from"./iframe-MhL8K36A.js";import{GlobalWorkerOptions as p}from"./pdf-C4heYEAT.js";import"./cosmoz-image-viewer-D4ZyE79z.js";import"./preload-helper-PPVm8Dsz.js";const d=["stories/images/stockholm.jpg","this-is-a-loading-error.jpg",()=>"stories/images/a_size.png",()=>new Promise(e=>setTimeout(()=>e("stories/images/strasbourg.jpg"),500))],$=[{title:"Stockholm photos",images:d}],g=[{title:"Stockholm photos",images:["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"]},{title:"Cosmos photos",images:["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"]}],v=[{title:"Sample PDF",pdf:"stories/images/sample.pdf"}],z=()=>new Promise(e=>setTimeout(()=>e(g),1500)),b=()=>new Promise((e,o)=>setTimeout(()=>o(new Error("Network error")),1e3));p.workerSrc=new URL(""+new URL("pdf.worker.min-FHbmGBN0.mjs",import.meta.url).href,import.meta.url).href;const Z={title:"Cosmoz Image Viewer",component:"cosmoz-image-viewer"},t=({showDetach:e,showFullscreen:o,showPageNumber:r,showNav:s,loop:a,showZoom:m,detachedShowZoom:c})=>n`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${o}
        ?show-page-number=${r}
        ?show-nav=${s}
        ?loop=${a}
        ?show-zoom=${m}
        ?detached-show-zoom=${c}
        .source=${$}
    ></cosmoz-image-viewer>
`;t.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const h=({showDetach:e,showFullscreen:o,showPageNumber:r,showNav:s,loop:a,showZoom:m,detachedShowZoom:c})=>n`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${o}
        ?show-page-number=${r}
        ?show-nav=${s}
        ?loop=${a}
        ?show-zoom=${m}
        ?detached-show-zoom=${c}
        .source=${g}
    ></cosmoz-image-viewer>
`;h.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const i=({showDetach:e,showFullscreen:o,showPageNumber:r,showNav:s,loop:a,showZoom:m,detachedShowZoom:c})=>n`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${o}
        ?show-page-number=${r}
        ?show-nav=${s}
        ?loop=${a}
        ?show-zoom=${m}
        ?detached-show-zoom=${c}
        .source=${v}
    ></cosmoz-image-viewer>
`;i.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const w=()=>n`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=${z}
    ></cosmoz-image-viewer>
`,u=()=>n`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=${b}
    ></cosmoz-image-viewer>
`,l=()=>{const e=[{title:"Set 1",images:["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"]}],o=[{title:"Set 2",images:["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"]}];return n`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .source=${e}
        ></cosmoz-image-viewer>
        <button
            @click=${r=>{const s=r.target.previousElementSibling,a=s.source===e?o:e;return s.source=a,!1}}
        >
            Switch source
        </button>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
        .source=\${singleFile}
    ></cosmoz-image-viewer>
\``,...t.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
        .source=\${multipleFiles}
    ></cosmoz-image-viewer>
\``,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
        .source=\${pdfFile}
    ></cosmoz-image-viewer>
\``,...i.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=\${lazySource}
    ></cosmoz-image-viewer>
\``,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=\${failingSource}
    ></cosmoz-image-viewer>
\``,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const source1 = [{
      title: 'Set 1',
      images: ['stories/images/stockholm.jpg', 'stories/images/strasbourg.jpg']
    }],
    source2 = [{
      title: 'Set 2',
      images: ['stories/images/cosmos1.jpg', 'stories/images/cosmos2.jpg']
    }];
  return html\`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .source=\${source1}
        ></cosmoz-image-viewer>
        <button
            @click=\${e => {
    const ciw = e.target.previousElementSibling,
      newSource = ciw.source === source1 ? source2 : source1;
    ciw.source = newSource;
    return false;
  }}
        >
            Switch source
        </button>
    \`;
}`,...l.parameters?.docs?.source}}};const j=["Basic","MultiFile","Pdf","Loading","Error","Issue21"];export{t as Basic,u as Error,l as Issue21,w as Loading,h as MultiFile,i as Pdf,j as __namedExportsOrder,Z as default};
