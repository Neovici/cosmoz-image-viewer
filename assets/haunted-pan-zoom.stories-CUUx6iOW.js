import{b as a}from"./iframe-CI2Gkkkf.js";import"./cosmoz-image-viewer-eIWu-BB_.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Pan Zoom",component:"haunted-pan-zoom"},i=({disabled:s,height:n,zoomStiffness:t})=>a`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="${n};"
        ?disabled=${s}
        .zoomStiffness=${t}
    >
    </haunted-pan-zoom>
`,e=i.bind({});e.args={disabled:!1,height:"height: 70vh;",zoomStiffness:.3};const o=({disabled:s,height:n,zoomStiffness:t})=>a`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="${n};"
        ?disabled=${s}
        .zoomStiffness=${t}
    >
        <div style="color: white; font-size: 14px;">
            <div
                style="position: absolute; top: 15%; left: 15%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Overlay text — select me! Drag to pan.
            </div>
        </div>
    </haunted-pan-zoom>
`;o.args={disabled:!1,height:"height: 70vh;",zoomStiffness:.3};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
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
\``,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
        <div style="color: white; font-size: 14px;">
            <div
                style="position: absolute; top: 15%; left: 15%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Overlay text — select me! Drag to pan.
            </div>
        </div>
    </haunted-pan-zoom>
\``,...o.parameters?.docs?.source}}};const l=["PanZoom","PanZoomWithOverlay"];export{e as PanZoom,o as PanZoomWithOverlay,l as __namedExportsOrder,p as default};
