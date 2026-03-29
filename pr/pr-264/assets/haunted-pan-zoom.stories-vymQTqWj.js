import{b as t}from"./iframe-DQgIwbi7.js";import"./cosmoz-image-viewer-BiFvb5gK.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Pan Zoom",component:"haunted-pan-zoom"},i=({disabled:n,height:e,zoomStiffness:o,panStiffness:a})=>t`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="${e};"
        ?disabled=${n}
        .zoomStiffness=${o}
        .panStiffness=${a}
    >
    </haunted-pan-zoom>
`,s=i.bind({});s.args={disabled:!1,height:"height: 70vh;",zoomStiffness:.3,panStiffness:1};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  disabled,
  height,
  zoomStiffness,
  panStiffness
}) => html\`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="\${height};"
        ?disabled=\${disabled}
        .zoomStiffness=\${zoomStiffness}
        .panStiffness=\${panStiffness}
    >
    </haunted-pan-zoom>
\``,...s.parameters?.docs?.source}}};const p=["PanZoom"];export{s as PanZoom,p as __namedExportsOrder,f as default};
