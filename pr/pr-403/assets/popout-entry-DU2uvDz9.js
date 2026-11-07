const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./src-ChJ3es9P.js","./src-BHdEhQTS.js","./rolldown-runtime-sJBDdmOt.js","./src-8Hx4YAYX.css","./pdf-BtNs-ZLp.js","./pdf-D_pmx9tJ.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./preload-helper-2GovK0wV.js";import{g as r,h as i,p as a}from"./directive-helpers-CLwWXa9v.js";import{t as o}from"./cosmoz-image-viewer-BEePoClF.js";var s,c;function l(){return(l=e((async()=>{r(),o(),t(),s=import.meta.url;try{let{default:e}=await n(async()=>{let{default:e}=await import(`./src-ChJ3es9P.js`);return{default:e}},__vite__mapDeps([0,1,2,3]),import.meta.url);document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}catch{}if(c=window.__popoutState,c){try{let{GlobalWorkerOptions:e}=await n(async()=>{let{GlobalWorkerOptions:e}=await import(`./pdf-BtNs-ZLp.js`);return{GlobalWorkerOptions:e}},__vite__mapDeps([4,5,2]),import.meta.url);c.pdfWorkerSrc&&(e.workerSrc=c.pdfWorkerSrc)}catch{}let e=e=>i`<cosmoz-image-viewer
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