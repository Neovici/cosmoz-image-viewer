import{x as p}from"./lit-html-CuJYtJU3.js";import"./cosmoz-image-viewer-594xMIeL.js";import"./directive-helpers-CE2IdeAx.js";import"./iframe-COMQx1JQ.js";import"../sb-preview/runtime.js";const z={title:"Pan Zoom",component:"haunted-pan-zoom"},r=({disabled:t,height:a,zoomStiffness:i,panStiffness:m})=>p`
    <haunted-pan-zoom
        src="a_size.png"
        style="height: ${a}px;"
        ?disabled=${t}
        .zoomStiffness=${i}
        .panStiffness=${m}
    >
    </haunted-pan-zoom>
`,n=r.bind({});n.args={disabled:!1,height:400,zoomStiffness:.3,panStiffness:1};var e,o,s;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
\``,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const S=["PanZoom"];export{n as PanZoom,S as __namedExportsOrder,z as default};
