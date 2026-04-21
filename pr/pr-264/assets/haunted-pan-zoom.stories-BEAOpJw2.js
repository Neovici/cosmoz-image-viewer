import{b as a}from"./iframe-CzmjBCKw.js";import"./cosmoz-image-viewer-CCuBuwUW.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Pan Zoom",component:"haunted-pan-zoom"},t=({disabled:e,height:s,zoomStiffness:n})=>a`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="${s};"
        ?disabled=${e}
        .zoomStiffness=${n}
    >
    </haunted-pan-zoom>
`,o=t.bind({});o.args={disabled:!1,height:"height: 70vh;",zoomStiffness:.3};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  disabled,
  height,
  zoomStiffness
}) => html\`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="\${height};"
        ?disabled=\${disabled}
        .zoomStiffness=\${zoomStiffness}
    >
    </haunted-pan-zoom>
\``,...o.parameters?.docs?.source}}};const p=["PanZoom"];export{o as PanZoom,p as __namedExportsOrder,d as default};
