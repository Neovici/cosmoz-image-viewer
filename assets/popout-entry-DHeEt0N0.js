const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-6nZftXJF.js","./preload-helper-PPVm8Dsz.js","./iframe-Bv8SCm1X.css"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{D as n,b as d}from"./iframe-6nZftXJF.js";import"./cosmoz-image-viewer-BrS6RyRg.js";const u=import.meta.url;try{const{default:r}=await i(async()=>{const{default:e}=await import("./iframe-6nZftXJF.js").then(o=>o.i);return{default:e}},__vite__mapDeps([0,1,2]),import.meta.url);document.adoptedStyleSheets=[...document.adoptedStyleSheets,r]}catch{}const t=window.__popoutState;if(t){try{const{GlobalWorkerOptions:e}=await i(async()=>{const{GlobalWorkerOptions:o}=await import("./pdf-C4heYEAT.js");return{GlobalWorkerOptions:o}},[],import.meta.url);t.pdfWorkerSrc&&(e.workerSrc=t.pdfWorkerSrc)}catch{}const r=e=>d`<cosmoz-image-viewer
			fullscreen
			.source="${e.source}"
			.currentFileIndex=${e.fileIndex}
			.currentImageIndex=${e.index}
			@current-image-index-changed=${o=>window.__popoutSync.imageIndex(o.detail.value)}
			@current-file-index-changed=${o=>window.__popoutSync.fileIndex(o.detail.value)}
			show-nav
			?show-zoom=${e.detachedShowZoom}
			show-close
			?loop=${e.loop}
			@close=${()=>window.close()}
		></cosmoz-image-viewer>`;n(r(t),document.body),window.__popoutUpdate=e=>{Object.assign(t,e),n(r(t),document.body)},window.__popoutReady?.()}export{u as url};
