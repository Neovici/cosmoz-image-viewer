const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./src-GRfyn6yW.js","./src-QFLhPsnW.js","./rolldown-runtime-DkW27tQK.js","./src-8Hx4YAYX.css","./pdf-fbpoxAFy.js","./pdf-GH2uvQdV.js","./preload-helper-BVscJdOD.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-BVscJdOD.js";import{g as r,h as i,p as a}from"./directive-helpers-BJbJgf_T.js";import{t as o}from"./cosmoz-image-viewer-UMzNrbyX.js";var s,c;function l(){return(l=e((async()=>{r(),o(),t(),s=import.meta.url;try{let{default:e}=await n(async()=>{let{default:e}=await import(`./src-GRfyn6yW.js`);return{default:e}},__vite__mapDeps([0,1,2,3]),import.meta.url);document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}catch{}if(c=window.__popoutState,c){try{let{GlobalWorkerOptions:e}=await n(async()=>{let{GlobalWorkerOptions:e}=await import(`./pdf-fbpoxAFy.js`);return{GlobalWorkerOptions:e}},__vite__mapDeps([4,5,2,6]),import.meta.url);c.pdfWorkerSrc&&(e.workerSrc=c.pdfWorkerSrc)}catch{}let e=e=>i`<cosmoz-image-viewer
			fullscreen
			.source="${e.source}"
			.currentFileIndex=${e.fileIndex}
			.currentImageIndex=${e.index}
			@current-image-index-changed=${e=>window.__popoutSync.imageIndex(e.detail.value)}
			@current-file-index-changed=${e=>window.__popoutSync.fileIndex(e.detail.value)}
			show-nav
			show-page-number
			?show-zoom=${e.detachedShowZoom}
			show-close
			?loop=${e.loop}
			@close=${()=>window.close()}
		></cosmoz-image-viewer>`;a(e(c),document.body),window.__popoutUpdate=t=>{Object.assign(c,t),a(e(c),document.body)},window.__popoutReady?.()}})))()}await l();export{s as url};