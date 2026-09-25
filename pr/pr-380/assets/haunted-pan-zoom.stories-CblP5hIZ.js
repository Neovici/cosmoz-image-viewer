import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{g as t,h as n}from"./directive-helpers-pE8CwW2P.js";import{t as r}from"./cosmoz-image-viewer-C_U5wnz2.js";var i,a,o,s,c;function l(){return(l=e((()=>{t(),r(),i={title:`Pan Zoom`,component:`haunted-pan-zoom`},a=({disabled:e,height:t,zoomStiffness:r})=>n`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="${t};"
        ?disabled=${e}
        .zoomStiffness=${r}
    >
    </haunted-pan-zoom>
`,o=a.bind({}),o.args={disabled:!1,height:`height: 70vh;`,zoomStiffness:.3},s=({disabled:e,height:t,zoomStiffness:r})=>n`
    <haunted-pan-zoom
        src="stories/images/a_size.png"
        style="${t};"
        ?disabled=${e}
        .zoomStiffness=${r}
    >
        <div style="color: white; font-size: 14px;">
            <div
                style="position: absolute; top: 15%; left: 15%; background: rgba(0,0,0,0.5); padding: 8px 12px; border-radius: 4px; pointer-events: auto;"
            >
                Overlay text — select me! Drag to pan.
            </div>
        </div>
    </haunted-pan-zoom>
`,s.args={disabled:!1,height:`height: 70vh;`,zoomStiffness:.3},c=[`PanZoom`,`PanZoomWithOverlay`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
\``,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
\``,...s.parameters?.docs?.source}}}})))()}l();export{o as PanZoom,s as PanZoomWithOverlay,c as __namedExportsOrder,i as default};