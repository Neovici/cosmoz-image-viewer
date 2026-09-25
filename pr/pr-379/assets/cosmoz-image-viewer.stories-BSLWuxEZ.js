import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{g as t,h as n}from"./directive-helpers-pE8CwW2P.js";import{t as r}from"./cosmoz-image-viewer-C_U5wnz2.js";import{J as i,m as a}from"./pdf-D1QFqxOv.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{o=[`stories/images/stockholm.jpg`,`this-is-a-loading-error.jpg`,()=>`stories/images/a_size.png`,()=>new Promise(e=>setTimeout(()=>e(`stories/images/strasbourg.jpg`),500))],s=[{title:`Stockholm photos`,images:o}],c=[{title:`Stockholm photos`,images:[`stories/images/stockholm.jpg`,`stories/images/strasbourg.jpg`]},{title:`Cosmos photos`,images:[`stories/images/cosmos1.jpg`,`stories/images/cosmos2.jpg`]}],l=[{title:`Sample PDF`,pdf:`stories/images/sample.pdf`}],u=()=>new Promise(e=>setTimeout(()=>e(c),1500)),d=()=>new Promise((e,t)=>setTimeout(()=>t(Error(`Network error`)),1e3))})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),i(),r(),f(),a.workerSrc=new URL(``+new URL(`pdf.worker.min-Dswkl-cV.mjs`,import.meta.url).href,``+import.meta.url).href,p={title:`Cosmoz Image Viewer`,component:`cosmoz-image-viewer`},m=({showDetach:e,showFullscreen:t,showPageNumber:r,showNav:i,loop:a,showZoom:o,detachedShowZoom:c})=>n`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${t}
        ?show-page-number=${r}
        ?show-nav=${i}
        ?loop=${a}
        ?show-zoom=${o}
        ?detached-show-zoom=${c}
        .source=${s}
    ></cosmoz-image-viewer>
`,m.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1},h=({showDetach:e,showFullscreen:t,showPageNumber:r,showNav:i,loop:a,showZoom:o,detachedShowZoom:s})=>n`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${t}
        ?show-page-number=${r}
        ?show-nav=${i}
        ?loop=${a}
        ?show-zoom=${o}
        ?detached-show-zoom=${s}
        .source=${c}
    ></cosmoz-image-viewer>
`,h.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1},g=({showDetach:e,showFullscreen:t,showPageNumber:r,showNav:i,loop:a,showZoom:o,detachedShowZoom:s})=>n`
    <cosmoz-image-viewer
        ?show-detach=${e}
        ?show-fullscreen=${t}
        ?show-page-number=${r}
        ?show-nav=${i}
        ?loop=${a}
        ?show-zoom=${o}
        ?detached-show-zoom=${s}
        .source=${l}
    ></cosmoz-image-viewer>
`,g.args={showDetach:!0,showFullscreen:!0,showPageNumber:!0,showNav:!0,loop:!0,showZoom:!1,detachedShowZoom:!1},_=()=>n`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=${u}
    ></cosmoz-image-viewer>
`,v=()=>n`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=${d}
    ></cosmoz-image-viewer>
`,y=({showZoom:e,showNav:t,showPageNumber:r})=>n`
    <cosmoz-image-viewer
        ?show-zoom=${e}
        ?show-nav=${t}
        ?show-page-number=${r}
        .source=${[{title:`With overlay`,images:[`stories/images/stockholm.jpg`,`stories/images/strasbourg.jpg`]}]}
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
`,y.args={showZoom:!0,showNav:!0,showPageNumber:!0},b=()=>{let e=[{title:`Set 1`,images:[`stories/images/stockholm.jpg`,`stories/images/strasbourg.jpg`]}],t=[{title:`Set 2`,images:[`stories/images/cosmos1.jpg`,`stories/images/cosmos2.jpg`]}];return n`
        <cosmoz-image-viewer
            show-detach
            show-fullscreen
            show-page-number
            show-nav
            loop
            .source=${e}
        ></cosmoz-image-viewer>
        <button
            @click=${n=>{let r=n.target.previousElementSibling;return r.source=r.source===e?t:e,!1}}
        >
            Switch source
        </button>
    `},x=[`Basic`,`MultiFile`,`Pdf`,`Loading`,`Error`,`OverlaySlots`,`Issue21`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
\``,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
\``,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
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
\``,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=\${lazySource}
    ></cosmoz-image-viewer>
\``,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-image-viewer
        show-detach
        show-fullscreen
        show-page-number
        show-nav
        loop
        .source=\${failingSource}
    ></cosmoz-image-viewer>
\``,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
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
\``,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{m as Basic,v as Error,b as Issue21,_ as Loading,h as MultiFile,y as OverlaySlots,g as Pdf,x as __namedExportsOrder,p as default};