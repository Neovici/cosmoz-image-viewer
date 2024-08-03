import{x as p}from"./lit-html-CuJYtJU3.js";import"./cosmoz-image-viewer-R5Bg3q3B.js";import"./directive-helpers-CE2IdeAx.js";import"./iframe-DS2aY6Zw.js";import"../sb-preview/runtime.js";const z={title:"Pan Zoom",component:"haunted-pan-zoom",tags:["autodocs"]},r=({disabled:t,height:a,zoomStiffness:i,panStiffness:m})=>p`
    <haunted-pan-zoom
        src="a_size.png"
        style="height: ${a}px;"
        ?disabled=${t}
        .zoomStiffness=${i}
        .panStiffness=${m}
    >
    </haunted-pan-zoom>
`,n=r.bind({});n.args={disabled:!1,height:400,zoomStiffness:.3,panStiffness:1};var o,s,e;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
  disabled,
  height,
  zoomStiffness,
  panStiffness
}) => html\`
    <haunted-pan-zoom
        src="a_size.png"
        style="height: \${height}px;"
        ?disabled=\${disabled}
        .zoomStiffness=\${zoomStiffness}
        .panStiffness=\${panStiffness}
    >
    </haunted-pan-zoom>
\``,...(e=(s=n.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};const u=["PanZoom"];export{n as PanZoom,u as __namedExportsOrder,z as default};
