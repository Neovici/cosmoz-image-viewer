import{b as t}from"./iframe-DH9-CiRf.js";import{GlobalWorkerOptions as d}from"./pdf-C4heYEAT.js";import"./cosmoz-image-viewer-BmuIK4w0.js";import"./preload-helper-PPVm8Dsz.js";const v=["stories/images/stockholm.jpg","this-is-a-loading-error.jpg",()=>"stories/images/a_size.png",()=>new Promise(e=>setTimeout(()=>e("stories/images/strasbourg.jpg"),500))],$=[{title:"Stockholm photos",images:v}],p=[{title:"Stockholm photos",images:["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"]},{title:"Cosmos photos",images:["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"]}],b=[{title:"Sample PDF",pdf:"stories/images/sample.pdf"}],z=()=>new Promise(e=>setTimeout(()=>e(p),1500)),f=()=>new Promise((e,o)=>setTimeout(()=>o(new Error("Network error")),1e3));d.workerSrc=new URL(""+new URL("pdf.worker.min-FHbmGBN0.mjs",import.meta.url).href,import.meta.url).href;const P={title:"Cosmoz Image Viewer",component:"cosmoz-image-viewer"},m=({showDetach:e,showFullscreen:o,showPageNumber:s,showNav:r,loop:a,showZoom:n,detachedShowZoom:i})=>t`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${o}
        ?show-page-number=${s}
        ?show-nav=${r}
        ?loop=${a}
        ?show-zoom=${n}
        ?detached-show-zoom=${i}
        .source=${$}
    ></cosmoz-image-viewer>
`;m.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const c=({showDetach:e,showFullscreen:o,showPageNumber:s,showNav:r,loop:a,showZoom:n,detachedShowZoom:i})=>t`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${o}
        ?show-page-number=${s}
        ?show-nav=${r}
        ?loop=${a}
        ?show-zoom=${n}
        ?detached-show-zoom=${i}
        .source=${p}
    ></cosmoz-image-viewer>
`;c.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const h=({showDetach:e,showFullscreen:o,showPageNumber:s,showNav:r,loop:a,showZoom:n,detachedShowZoom:i})=>t`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${o}
        ?show-page-number=${s}
        ?show-nav=${r}
        ?loop=${a}
        ?show-zoom=${n}
        ?detached-show-zoom=${i}
        .source=${b}
    ></cosmoz-image-viewer>
`;h.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1};const l=()=>t`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=${z}
    ></cosmoz-image-viewer>
`,u=()=>t`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=${f}
    ></cosmoz-image-viewer>
`,w=({showZoom:e,showNav:o,showPageNumber:s})=>t`
    <cosmoz-image-viewer
        ?show-zoom=${e}
        ?show-nav=${o}
        ?show-page-number=${s}
        .source=${[{title:"With overlay",images:["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"]}]}
    >
        <div slot="overlay-page-0" style="color: white; font-size: 14px;">
            <div
                style="position: absolute; top: 10%; left: 10%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Page 0 overlay — select this text!
            </div>
        </div>
        <div slot="overlay-page-1" style="color: white; font-size: 14px;">
            <div
                style="position: absolute; bottom: 10%; right: 10%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Page 1 overlay — select this text!
            </div>
        </div>
    </cosmoz-image-viewer>
`;w.args={showZoom:!0,showNav:!0,showPageNumber:!0};const g=()=>{const e=[{title:"Set 1",images:["stories/images/stockholm.jpg","stories/images/strasbourg.jpg"]}],o=[{title:"Set 2",images:["stories/images/cosmos1.jpg","stories/images/cosmos2.jpg"]}];return t`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .source=${e}
        ></cosmoz-image-viewer>
        <button
            @click=${s=>{const r=s.target.previousElementSibling,a=r.source===e?o:e;return r.source=a,!1}}
        >
            Switch source
        </button>
    `};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
\``,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
\``,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
\``,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=\${lazySource}
    ></cosmoz-image-viewer>
\``,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=\${failingSource}
    ></cosmoz-image-viewer>
\``,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
  showZoom,
  showNav,
  showPageNumber
}) => html\`
    <cosmoz-image-viewer
        ?show-zoom=\${showZoom}
        ?show-nav=\${showNav}
        ?show-page-number=\${showPageNumber}
        .source=\${[{
  title: 'With overlay',
  images: ['stories/images/stockholm.jpg', 'stories/images/strasbourg.jpg']
}]}
    >
        <div slot="overlay-page-0" style="color: white; font-size: 14px;">
            <div
                style="position: absolute; top: 10%; left: 10%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Page 0 overlay — select this text!
            </div>
        </div>
        <div slot="overlay-page-1" style="color: white; font-size: 14px;">
            <div
                style="position: absolute; bottom: 10%; right: 10%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Page 1 overlay — select this text!
            </div>
        </div>
    </cosmoz-image-viewer>
\``,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};const Z=["Basic","MultiFile","Pdf","Loading","Error","OverlaySlots","Issue21"];export{m as Basic,u as Error,g as Issue21,l as Loading,c as MultiFile,w as OverlaySlots,h as Pdf,Z as __namedExportsOrder,P as default};
