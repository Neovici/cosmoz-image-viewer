const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-DwPysnSw.js","./preload-helper-PPVm8Dsz.js","./iframe-Bv8SCm1X.css"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper-PPVm8Dsz.js";import{D as n,b as c}from"./iframe-DwPysnSw.js";import"./cosmoz-image-viewer-CbbPDILh.js";const u=import.meta.url;try{const{default:r}=await a(async()=>{const{default:e}=await import("./iframe-DwPysnSw.js").then(o=>o.i);return{default:e}},__vite__mapDeps([0,1,2]),import.meta.url);document.adoptedStyleSheets=[...document.adoptedStyleSheets,r]}catch{}const t=window.__popoutState;if(t){try{const{GlobalWorkerOptions:e}=await a(async()=>{const{GlobalWorkerOptions:o}=await import("./pdf-C4heYEAT.js");return{GlobalWorkerOptions:o}},[],import.meta.url);t.pdfWorkerSrc&&(e.workerSrc=t.pdfWorkerSrc)}catch{}const r=e=>c`<cosmoz-image-viewer
			fullscreen
			.source="${e.source}"
			.currentAttachmentIndex=${e.attachmentIndex}
			.currentImageIndex=${e.index}
			@current-image-index-changed=${o=>window.__popoutSync.imageIndex(o.detail.value)}
			@current-attachment-index-changed=${o=>window.__popoutSync.attachmentIndex(o.detail.value)}
			show-nav
			?show-zoom=${e.detachedShowZoom}
			show-close
			?loop=${e.loop}
			@close=${()=>window.close()}
		></cosmoz-image-viewer>`;n(r(t),document.body),window.__popoutUpdate=e=>{Object.assign(t,e),n(r(t),document.body)},window.__popoutReady?.()}export{u as url};
