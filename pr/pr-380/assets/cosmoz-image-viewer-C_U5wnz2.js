const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./flow-BcvU3Oud.js","./rolldown-runtime-DkW27tQK.js","./jspdf.es-_lcH_yW5.js","./preload-helper-wdlQj8DP.js","./typeof-BDgK788K.js","./popout-entry-BpcIv4WY.js","./directive-helpers-pE8CwW2P.js","./pdf-loader-CcDbPhwt.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./preload-helper-wdlQj8DP.js";import{_ as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v}from"./directive-helpers-pE8CwW2P.js";function y(e){S=e}function b(){S=null,C=0}function x(){return C++}var S,C;function w(){return(w=e((()=>{C=0})))()}var T,E,D,ee,O,k,te;function A(){return(A=e((()=>{T=Symbol(`haunted.phase`),E=Symbol(`haunted.hook`),D=Symbol(`haunted.update`),ee=Symbol(`haunted.commit`),O=Symbol(`haunted.effects`),k=Symbol(`haunted.layoutEffects`),te=`haunted.context`})))()}var ne;function re(){return(re=e((()=>{w(),A(),ne=class{update;host;virtual;[E];[O];[k];constructor(e,t){this.update=e,this.host=t,this[E]=new Map,this[O]=[],this[k]=[]}run(e){y(this);let t=e();return b(),t}_runEffects(e){let t=this[e];y(this);for(let e of t)e.call(this);b()}runEffects(){this._runEffects(O)}runLayoutEffects(){this._runEffects(k)}teardown(){this[E].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var j;function ie(){return(ie=e((()=>{j=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function ae(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=se(n)}}var oe,se,ce,le,ue;function de(){return(de=e((()=>{re(),A(),ie(),oe=100,se=Promise.resolve().then.bind(Promise.resolve()),ce=ae(),le=ae(),ue=class e{renderer;host;state;[T];_updateQueued;_active;_updateCount;_processing;static maxUpdates=oe;constructor(e,t){this.renderer=e,this.host=t,this.state=new ne(this.update.bind(this),t),this[T]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new j(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,ce(()=>{let e=this.handlePhase(D);le(()=>{this.handlePhase(ee,e),le(()=>{this.handlePhase(O),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[T]=e,e){case ee:this.commit(t),this.runEffects(k);return;case D:return this.render();case O:return this.runEffects(O)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var fe,pe,me,M;function he(){return(he=e((()=>{fe=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},pe=e=>e?.map(e=>typeof e==`string`?fe(e):e),me=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),M=me})))()}function ge(e){class t extends ue{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=pe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,_e(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var _e;function ve(){return(ve=e((()=>{de(),he(),_e=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function ye(e,...t){let n=x(),r=S[E],i=r.get(n);return i||(i=new e(n,S,...t),r.set(n,i)),i.update(...t)}function N(e){return ye.bind(null,e)}var P;function be(){return(be=e((()=>{w(),A(),P=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function xe(e){return N(class extends P{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function Se(){return(Se=e((()=>{be()})))()}function Ce(e,t){e[O].push(t)}var F;function we(){return(we=e((()=>{A(),Se(),F=xe(Ce)})))()}var Te,Ee;function De(){return(De=e((()=>{be(),A(),we(),Te=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ee=N(class extends P{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ce(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Te(this.state.host).dispatchEvent(new CustomEvent(te,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Oe(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ee(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function ke(){return(ke=e((()=>{A(),De()})))()}var I;function Ae(){return(Ae=e((()=>{be(),I=N(class extends P{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var L;function je(){return(je=e((()=>{Ae(),L=(e,t)=>I(()=>e,t)})))()}function Me(e,t){e[k].push(t)}var Ne;function Pe(){return(Pe=e((()=>{A(),Se(),Ne=xe(Me)})))()}var R;function Fe(){return(Fe=e((()=>{be(),R=N(class extends P{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}var Ie;function Le(){return(Le=e((()=>{be(),Ie=N(class extends P{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Re,ze,Be;function Ve(){return(Ve=e((()=>{be(),Re=/([A-Z])/gu,ze=N(class extends P{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Re,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}}),Be=e=>t=>{t.preventDefault(),e(t.detail.updater??t.detail.value)}})))()}function He(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function z(e){return I(()=>He(e),[])}function Ue(){return(Ue=e((()=>{Ae()})))()}function We(){return(We=e((()=>{be(),N(class extends P{update(){return this.state.host}})})))()}function Ge({render:e}){let t=ge(e);return{component:t,createContext:Oe(t)}}function Ke(){return(Ke=e((()=>{ve(),ke(),je(),we(),Pe(),Fe(),Le(),Ae(),De(),Ve(),Ue(),We(),be(),de()})))()}var B,qe,Je;function V(){return(V=e((()=>{B={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=e=>(...t)=>({_$litDirective$:e,values:t}),Je=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function Ye(e){this._$AN===void 0?this._$AM=e:(Qe(this),this._$AM=e,$e(this))}function Xe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Ze(r[e],!1),Qe(r[e]);else r!=null&&(Ze(r,!1),Qe(r))}else Ze(this,e)}}var Ze,Qe,$e,et,tt;function nt(){return(nt=e((()=>{h(),V(),Ze=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Ze(e,t);return!0},Qe=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},$e=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),et(t)}},et=e=>{e.type==B.CHILD&&(e._$AP??=Xe,e._$AQ??=Ye)},tt=class extends Je{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),$e(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ze(this,e),Qe(this))}setValue(e){if(i(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function rt(){return(rt=e((()=>{V(),s(),nt(),de(),Array.prototype.includes})))()}var H,it;function at(){return(at=e((()=>{s(),Ke(),rt(),{component:H,createContext:it}=Ge({render:m})})))()}function U(){return(U=e((()=>{at(),Ke(),he()})))()}function ot(){return(ot=e((()=>{U()})))()}var st;function ct(){return(ct=e((()=>{st=(e,...t)=>e.flatMap((e,n)=>[e,t[n]??``]).join(``)})))()}var lt;function ut(){return(ut=e((()=>{lt=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t}})))()}function dt(){return(dt=e((()=>{ot(),ct(),ut()})))()}var ft,W;function pt(){return(pt=e((()=>{s(),nt(),V(),ft=new WeakMap,W=qe(class extends tt{render(e){return o}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ft.get(t);n===void 0&&(n=new WeakMap,ft.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?ft.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var mt;function ht(){return(ht=e((()=>{U(),mt=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=z(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return F(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),F(()=>{if(i&&!n)return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})))()}var gt,_t,vt;function yt(){return(yt=e((()=>{U(),s(),pt(),ht(),gt=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},_t=M`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,vt=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=z(),[s,l]=ze(`opened`,!1),u=L(()=>{n||(l(!0),o.current?.showPopover?.())},[n]),d=L(()=>{l(!1),o.current?.hidePopover?.()},[]),f=L(()=>{n||(o.current?.matches(`:popover-open`)?d():u())},[n]);F(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),F(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:p,cancelClose:m}=mt({host:e,popoverRef:o,disabled:n,openOnHover:i,openOnFocus:a,open:u,close:d}),h=a?u:f,g=L(t=>{gt(t),l(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c`
		<slot name="button" @click=${h}></slot>
		${n&&r?c`<slot></slot>`:c`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${W(e=>e&&(o.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,H(vt,{styleSheets:[_t],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var G;function K(){return(K=e((()=>{s(),G=e=>e??o})))()}function q(e,t,n){return e?t(e):n?.(e)}function bt(){return(bt=e((()=>{s(),K()})))()}function xt(){return(xt=e((()=>{s(),K()})))()}function St(){return(St=e((()=>{s(),K()})))()}function Ct(){return(Ct=e((()=>{s(),K()})))()}function wt(){return(wt=e((()=>{s(),K()})))()}function Tt(){return(Tt=e((()=>{s(),K()})))()}function Et(){return(Et=e((()=>{s(),K()})))()}function Dt(){return(Dt=e((()=>{s(),K()})))()}function Ot(){return(Ot=e((()=>{s(),K()})))()}function kt(){return(kt=e((()=>{s(),K()})))()}function At(){return(At=e((()=>{s(),K()})))()}function jt(){return(jt=e((()=>{s(),K()})))()}function Mt(){return(Mt=e((()=>{s(),K()})))()}function Nt(){return(Nt=e((()=>{s(),K()})))()}function Pt(){return(Pt=e((()=>{s(),K()})))()}function Ft(){return(Ft=e((()=>{s(),K()})))()}function It(){return(It=e((()=>{s(),K()})))()}function Lt(){return(Lt=e((()=>{s(),K()})))()}function Rt(){return(Rt=e((()=>{s(),K()})))()}function zt(){return(zt=e((()=>{s(),K()})))()}function Bt(){return(Bt=e((()=>{s(),K()})))()}function Vt(){return(Vt=e((()=>{s(),K()})))()}function Ht(){return(Ht=e((()=>{s(),K()})))()}function Ut(){return(Ut=e((()=>{s(),K()})))()}function Wt(){return(Wt=e((()=>{s(),K()})))()}function Gt(){return(Gt=e((()=>{s(),K()})))()}function Kt(){return(Kt=e((()=>{s(),K()})))()}function qt(){return(qt=e((()=>{s(),K()})))()}function Jt(){return(Jt=e((()=>{s(),K()})))()}function Yt(){return(Yt=e((()=>{s(),K()})))()}function Xt(){return(Xt=e((()=>{s(),K()})))()}function Zt(){return(Zt=e((()=>{s(),K()})))()}function Qt(){return(Qt=e((()=>{s(),K()})))()}function $t(){return($t=e((()=>{s(),K()})))()}function en(){return(en=e((()=>{s(),K()})))()}function tn(){return(tn=e((()=>{s(),K()})))()}function nn(){return(nn=e((()=>{s(),K()})))()}function rn(){return(rn=e((()=>{s(),K()})))()}function an(){return(an=e((()=>{s(),K()})))()}function on(){return(on=e((()=>{s(),K()})))()}function sn(){return(sn=e((()=>{s(),K()})))()}function cn(){return(cn=e((()=>{s(),K()})))()}function ln(){return(ln=e((()=>{s(),K()})))()}function un(){return(un=e((()=>{s(),K()})))()}function dn(){return(dn=e((()=>{s(),K()})))()}function fn(){return(fn=e((()=>{s(),K()})))()}function pn(){return(pn=e((()=>{s(),K()})))()}function mn(){return(mn=e((()=>{s(),K()})))()}function hn(){return(hn=e((()=>{s(),K()})))()}function gn(){return(gn=e((()=>{s(),K()})))()}function _n(){return(_n=e((()=>{s(),K()})))()}function vn(){return(vn=e((()=>{s(),K()})))()}function yn(){return(yn=e((()=>{s(),K()})))()}function bn(){return(bn=e((()=>{s(),K()})))()}function xn(){return(xn=e((()=>{s(),K()})))()}function Sn(){return(Sn=e((()=>{s(),K()})))()}function Cn(){return(Cn=e((()=>{s(),K()})))()}function wn(){return(wn=e((()=>{s(),K()})))()}function Tn(){return(Tn=e((()=>{s(),K()})))()}function En(){return(En=e((()=>{s(),K()})))()}function Dn(){return(Dn=e((()=>{s(),K()})))()}function On(){return(On=e((()=>{s(),K()})))()}function kn(){return(kn=e((()=>{s(),K()})))()}function An(){return(An=e((()=>{s(),K()})))()}function jn(){return(jn=e((()=>{s(),K()})))()}function Mn(){return(Mn=e((()=>{s(),K()})))()}function Nn(){return(Nn=e((()=>{s(),K()})))()}function Pn(){return(Pn=e((()=>{s(),K()})))()}function Fn(){return(Fn=e((()=>{s(),K()})))()}function In(){return(In=e((()=>{s(),K()})))()}function Ln(){return(Ln=e((()=>{s(),K()})))()}function Rn(){return(Rn=e((()=>{s(),K()})))()}function zn(){return(zn=e((()=>{s(),K()})))()}function Bn(){return(Bn=e((()=>{s(),K()})))()}function Vn(){return(Vn=e((()=>{s(),K()})))()}function Hn(){return(Hn=e((()=>{s(),K()})))()}function Un(){return(Un=e((()=>{s(),K()})))()}function Wn(){return(Wn=e((()=>{s(),K()})))()}function Gn(){return(Gn=e((()=>{s(),K()})))()}function Kn(){return(Kn=e((()=>{s(),K()})))()}function qn(){return(qn=e((()=>{s(),K()})))()}function Jn(){return(Jn=e((()=>{s(),K()})))()}function Yn(){return(Yn=e((()=>{s(),K()})))()}function Xn(){return(Xn=e((()=>{s(),K()})))()}function Zn(){return(Zn=e((()=>{s(),K()})))()}function Qn(){return(Qn=e((()=>{s(),K()})))()}function $n(){return($n=e((()=>{s(),K()})))()}function er(){return(er=e((()=>{s(),K()})))()}function tr(){return(tr=e((()=>{s(),K()})))()}function nr(){return(nr=e((()=>{s(),K()})))()}function rr(){return(rr=e((()=>{s(),K()})))()}function ir(){return(ir=e((()=>{s(),K()})))()}function ar(){return(ar=e((()=>{s(),K()})))()}function or(){return(or=e((()=>{s(),K()})))()}function sr(){return(sr=e((()=>{s(),K()})))()}function cr(){return(cr=e((()=>{s(),K()})))()}function lr(){return(lr=e((()=>{s(),K()})))()}function ur(){return(ur=e((()=>{s(),K()})))()}function dr(){return(dr=e((()=>{s(),K()})))()}function fr(){return(fr=e((()=>{s(),K()})))()}function pr(){return(pr=e((()=>{s(),K()})))()}function mr(){return(mr=e((()=>{s(),K()})))()}function hr(){return(hr=e((()=>{s(),K()})))()}function gr(){return(gr=e((()=>{s(),K()})))()}function _r(){return(_r=e((()=>{s(),K()})))()}function vr(){return(vr=e((()=>{s(),K()})))()}function yr(){return(yr=e((()=>{s(),K()})))()}function br(){return(br=e((()=>{s(),K()})))()}function xr(){return(xr=e((()=>{s(),K()})))()}function Sr(){return(Sr=e((()=>{s(),K()})))()}function Cr(){return(Cr=e((()=>{s(),K()})))()}function wr(){return(wr=e((()=>{s(),K()})))()}function Tr(){return(Tr=e((()=>{s(),K()})))()}function Er(){return(Er=e((()=>{s(),K()})))()}function Dr(){return(Dr=e((()=>{s(),K()})))()}function Or(){return(Or=e((()=>{s(),K()})))()}function kr(){return(kr=e((()=>{s(),K()})))()}function Ar(){return(Ar=e((()=>{s(),K()})))()}function jr(){return(jr=e((()=>{s(),K()})))()}function Mr(){return(Mr=e((()=>{s(),K()})))()}function Nr(){return(Nr=e((()=>{s(),K()})))()}function Pr(){return(Pr=e((()=>{s(),K()})))()}function Fr(){return(Fr=e((()=>{s(),K()})))()}function Ir(){return(Ir=e((()=>{s(),K()})))()}function Lr(){return(Lr=e((()=>{s(),K()})))()}function Rr(){return(Rr=e((()=>{s(),K()})))()}function zr(){return(zr=e((()=>{s(),K()})))()}function Br(){return(Br=e((()=>{s(),K()})))()}function Vr(){return(Vr=e((()=>{s(),K()})))()}function Hr(){return(Hr=e((()=>{s(),K()})))()}function Ur(){return(Ur=e((()=>{s(),K()})))()}function Wr(){return(Wr=e((()=>{s(),K()})))()}function Gr(){return(Gr=e((()=>{s(),K()})))()}function Kr(){return(Kr=e((()=>{s(),K()})))()}function qr(){return(qr=e((()=>{s(),K()})))()}function Jr(){return(Jr=e((()=>{s(),K()})))()}function Yr(){return(Yr=e((()=>{s(),K()})))()}function Xr(){return(Xr=e((()=>{s(),K()})))()}function Zr(){return(Zr=e((()=>{s(),K()})))()}function Qr(){return(Qr=e((()=>{s(),K()})))()}function $r(){return($r=e((()=>{s(),K()})))()}function ei(){return(ei=e((()=>{s(),K()})))()}function ti(){return(ti=e((()=>{s(),K()})))()}function ni(){return(ni=e((()=>{s(),K()})))()}function ri(){return(ri=e((()=>{s(),K()})))()}function ii(){return(ii=e((()=>{s(),K()})))()}function ai(){return(ai=e((()=>{s(),K()})))()}function oi(){return(oi=e((()=>{s(),K()})))()}function si(){return(si=e((()=>{s(),K()})))()}function ci(){return(ci=e((()=>{s(),K()})))()}function li(){return(li=e((()=>{s(),K()})))()}function ui(){return(ui=e((()=>{s(),K()})))()}function di(){return(di=e((()=>{s(),K()})))()}function fi(){return(fi=e((()=>{s(),K()})))()}function pi(){return(pi=e((()=>{s(),K()})))()}function mi(){return(mi=e((()=>{s(),K()})))()}function hi(){return(hi=e((()=>{s(),K()})))()}function gi(){return(gi=e((()=>{s(),K()})))()}function _i(){return(_i=e((()=>{s(),K()})))()}function vi(){return(vi=e((()=>{s(),K()})))()}function yi(){return(yi=e((()=>{s(),K()})))()}function bi(){return(bi=e((()=>{s(),K()})))()}function xi(){return(xi=e((()=>{s(),K()})))()}function Si(){return(Si=e((()=>{s(),K()})))()}function Ci(){return(Ci=e((()=>{s(),K()})))()}function wi(){return(wi=e((()=>{s(),K()})))()}function Ti(){return(Ti=e((()=>{s(),K()})))()}function Ei(){return(Ei=e((()=>{s(),K()})))()}function Di(){return(Di=e((()=>{s(),K()})))()}function Oi(){return(Oi=e((()=>{s(),K()})))()}function ki(){return(ki=e((()=>{s(),K()})))()}function Ai(){return(Ai=e((()=>{s(),K()})))()}function ji(){return(ji=e((()=>{s(),K()})))()}function Mi(){return(Mi=e((()=>{s(),K()})))()}function Ni(){return(Ni=e((()=>{s(),K()})))()}function Pi(){return(Pi=e((()=>{s(),K()})))()}function Fi(){return(Fi=e((()=>{s(),K()})))()}function Ii(){return(Ii=e((()=>{s(),K()})))()}function Li(){return(Li=e((()=>{s(),K()})))()}function Ri(){return(Ri=e((()=>{s(),K()})))()}function zi(){return(zi=e((()=>{s(),K()})))()}function Bi(){return(Bi=e((()=>{s(),K()})))()}function Vi(){return(Vi=e((()=>{s(),K()})))()}function Hi(){return(Hi=e((()=>{s(),K()})))()}function Ui(){return(Ui=e((()=>{s(),K()})))()}function Wi(){return(Wi=e((()=>{s(),K()})))()}function Gi(){return(Gi=e((()=>{s(),K()})))()}function Ki(){return(Ki=e((()=>{s(),K()})))()}function qi(){return(qi=e((()=>{s(),K()})))()}function Ji(){return(Ji=e((()=>{s(),K()})))()}function Yi(){return(Yi=e((()=>{s(),K()})))()}function Xi(){return(Xi=e((()=>{s(),K()})))()}function Zi(){return(Zi=e((()=>{s(),K()})))()}function Qi(){return(Qi=e((()=>{s(),K()})))()}function $i(){return($i=e((()=>{s(),K()})))()}function ea(){return(ea=e((()=>{s(),K()})))()}function ta(){return(ta=e((()=>{s(),K()})))()}function na(){return(na=e((()=>{s(),K()})))()}function ra(){return(ra=e((()=>{s(),K()})))()}function ia(){return(ia=e((()=>{s(),K()})))()}function aa(){return(aa=e((()=>{s(),K()})))()}function oa(){return(oa=e((()=>{s(),K()})))()}function sa(){return(sa=e((()=>{s(),K()})))()}function ca(){return(ca=e((()=>{s(),K()})))()}function la(){return(la=e((()=>{s(),K()})))()}function ua(){return(ua=e((()=>{s(),K()})))()}function da(){return(da=e((()=>{s(),K()})))()}function fa(){return(fa=e((()=>{s(),K()})))()}function pa(){return(pa=e((()=>{s(),K()})))()}function ma(){return(ma=e((()=>{s(),K()})))()}function ha(){return(ha=e((()=>{s(),K()})))()}function ga(){return(ga=e((()=>{s(),K()})))()}function _a(){return(_a=e((()=>{s(),K()})))()}function va(){return(va=e((()=>{s(),K()})))()}function ya(){return(ya=e((()=>{s(),K()})))()}function ba(){return(ba=e((()=>{s(),K()})))()}function xa(){return(xa=e((()=>{s(),K()})))()}function Sa(){return(Sa=e((()=>{s(),K()})))()}function Ca(){return(Ca=e((()=>{s(),K()})))()}function wa(){return(wa=e((()=>{s(),K()})))()}function Ta(){return(Ta=e((()=>{s(),K()})))()}function Ea(){return(Ea=e((()=>{s(),K()})))()}function Da(){return(Da=e((()=>{s(),K()})))()}function Oa(){return(Oa=e((()=>{s(),K()})))()}function ka(){return(ka=e((()=>{s(),K()})))()}function Aa(){return(Aa=e((()=>{s(),K()})))()}function ja(){return(ja=e((()=>{s(),K()})))()}function Ma(){return(Ma=e((()=>{s(),K()})))()}function Na(){return(Na=e((()=>{s(),K()})))()}var Pa;function Fa(){return(Fa=e((()=>{s(),K(),Pa=({slot:e,title:t,className:n,width:i=`24`,height:a=`24`,styles:o}={})=>c`
  <svg
    slot=${G(e)}
    class=${`chevron-down-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${a}
    style=${G(o)}
  >
    ${q(t,()=>r`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})))()}function Ia(){return(Ia=e((()=>{s(),K()})))()}function La(){return(La=e((()=>{s(),K()})))()}function Ra(){return(Ra=e((()=>{s(),K()})))()}function za(){return(za=e((()=>{s(),K()})))()}function Ba(){return(Ba=e((()=>{s(),K()})))()}function Va(){return(Va=e((()=>{s(),K()})))()}function Ha(){return(Ha=e((()=>{s(),K()})))()}function Ua(){return(Ua=e((()=>{s(),K()})))()}function Wa(){return(Wa=e((()=>{s(),K()})))()}function Ga(){return(Ga=e((()=>{s(),K()})))()}function Ka(){return(Ka=e((()=>{s(),K()})))()}function qa(){return(qa=e((()=>{s(),K()})))()}function Ja(){return(Ja=e((()=>{s(),K()})))()}function Ya(){return(Ya=e((()=>{s(),K()})))()}function Xa(){return(Xa=e((()=>{s(),K()})))()}function Za(){return(Za=e((()=>{s(),K()})))()}function Qa(){return(Qa=e((()=>{s(),K()})))()}function $a(){return($a=e((()=>{s(),K()})))()}function eo(){return(eo=e((()=>{s(),K()})))()}function to(){return(to=e((()=>{s(),K()})))()}function no(){return(no=e((()=>{s(),K()})))()}function ro(){return(ro=e((()=>{s(),K()})))()}function io(){return(io=e((()=>{s(),K()})))()}function ao(){return(ao=e((()=>{s(),K()})))()}function oo(){return(oo=e((()=>{s(),K()})))()}function so(){return(so=e((()=>{s(),K()})))()}function co(){return(co=e((()=>{s(),K()})))()}function lo(){return(lo=e((()=>{s(),K()})))()}function uo(){return(uo=e((()=>{s(),K()})))()}function fo(){return(fo=e((()=>{s(),K()})))()}function po(){return(po=e((()=>{s(),K()})))()}function mo(){return(mo=e((()=>{s(),K()})))()}function ho(){return(ho=e((()=>{s(),K()})))()}function go(){return(go=e((()=>{s(),K()})))()}function _o(){return(_o=e((()=>{s(),K()})))()}function vo(){return(vo=e((()=>{s(),K()})))()}function yo(){return(yo=e((()=>{s(),K()})))()}function bo(){return(bo=e((()=>{s(),K()})))()}function xo(){return(xo=e((()=>{s(),K()})))()}function So(){return(So=e((()=>{s(),K()})))()}function Co(){return(Co=e((()=>{s(),K()})))()}function wo(){return(wo=e((()=>{s(),K()})))()}function To(){return(To=e((()=>{s(),K()})))()}function Eo(){return(Eo=e((()=>{s(),K()})))()}function Do(){return(Do=e((()=>{s(),K()})))()}function Oo(){return(Oo=e((()=>{s(),K()})))()}function ko(){return(ko=e((()=>{s(),K()})))()}function Ao(){return(Ao=e((()=>{s(),K()})))()}function jo(){return(jo=e((()=>{s(),K()})))()}function Mo(){return(Mo=e((()=>{s(),K()})))()}function No(){return(No=e((()=>{s(),K()})))()}function Po(){return(Po=e((()=>{s(),K()})))()}function Fo(){return(Fo=e((()=>{s(),K()})))()}function Io(){return(Io=e((()=>{s(),K()})))()}function Lo(){return(Lo=e((()=>{s(),K()})))()}function Ro(){return(Ro=e((()=>{s(),K()})))()}function zo(){return(zo=e((()=>{s(),K()})))()}function Bo(){return(Bo=e((()=>{s(),K()})))()}function Vo(){return(Vo=e((()=>{s(),K()})))()}function Ho(){return(Ho=e((()=>{s(),K()})))()}function Uo(){return(Uo=e((()=>{s(),K()})))()}function Wo(){return(Wo=e((()=>{s(),K()})))()}function Go(){return(Go=e((()=>{s(),K()})))()}function Ko(){return(Ko=e((()=>{s(),K()})))()}function qo(){return(qo=e((()=>{s(),K()})))()}function Jo(){return(Jo=e((()=>{s(),K()})))()}function Yo(){return(Yo=e((()=>{s(),K()})))()}function Xo(){return(Xo=e((()=>{s(),K()})))()}function Zo(){return(Zo=e((()=>{s(),K()})))()}function Qo(){return(Qo=e((()=>{s(),K()})))()}function $o(){return($o=e((()=>{s(),K()})))()}function es(){return(es=e((()=>{s(),K()})))()}function ts(){return(ts=e((()=>{s(),K()})))()}function ns(){return(ns=e((()=>{s(),K()})))()}function rs(){return(rs=e((()=>{s(),K()})))()}function is(){return(is=e((()=>{s(),K()})))()}function as(){return(as=e((()=>{s(),K()})))()}function os(){return(os=e((()=>{s(),K()})))()}function ss(){return(ss=e((()=>{s(),K()})))()}function cs(){return(cs=e((()=>{s(),K()})))()}function ls(){return(ls=e((()=>{s(),K()})))()}function us(){return(us=e((()=>{s(),K()})))()}function ds(){return(ds=e((()=>{s(),K()})))()}function fs(){return(fs=e((()=>{s(),K()})))()}function ps(){return(ps=e((()=>{s(),K()})))()}function ms(){return(ms=e((()=>{s(),K()})))()}function hs(){return(hs=e((()=>{s(),K()})))()}function gs(){return(gs=e((()=>{s(),K()})))()}function _s(){return(_s=e((()=>{s(),K()})))()}function vs(){return(vs=e((()=>{s(),K()})))()}function ys(){return(ys=e((()=>{s(),K()})))()}function bs(){return(bs=e((()=>{s(),K()})))()}function xs(){return(xs=e((()=>{s(),K()})))()}function Ss(){return(Ss=e((()=>{s(),K()})))()}function Cs(){return(Cs=e((()=>{s(),K()})))()}function ws(){return(ws=e((()=>{s(),K()})))()}function Ts(){return(Ts=e((()=>{s(),K()})))()}function Es(){return(Es=e((()=>{s(),K()})))()}function Ds(){return(Ds=e((()=>{s(),K()})))()}function Os(){return(Os=e((()=>{s(),K()})))()}function ks(){return(ks=e((()=>{s(),K()})))()}function As(){return(As=e((()=>{s(),K()})))()}function js(){return(js=e((()=>{s(),K()})))()}function Ms(){return(Ms=e((()=>{s(),K()})))()}function Ns(){return(Ns=e((()=>{s(),K()})))()}function Ps(){return(Ps=e((()=>{s(),K()})))()}function Fs(){return(Fs=e((()=>{s(),K()})))()}function Is(){return(Is=e((()=>{s(),K()})))()}function Ls(){return(Ls=e((()=>{s(),K()})))()}function Rs(){return(Rs=e((()=>{s(),K()})))()}function zs(){return(zs=e((()=>{s(),K()})))()}function Bs(){return(Bs=e((()=>{s(),K()})))()}function Vs(){return(Vs=e((()=>{s(),K()})))()}function Hs(){return(Hs=e((()=>{s(),K()})))()}function Us(){return(Us=e((()=>{s(),K()})))()}function Ws(){return(Ws=e((()=>{s(),K()})))()}function Gs(){return(Gs=e((()=>{s(),K()})))()}function Ks(){return(Ks=e((()=>{s(),K()})))()}function qs(){return(qs=e((()=>{s(),K()})))()}function Js(){return(Js=e((()=>{s(),K()})))()}function Ys(){return(Ys=e((()=>{s(),K()})))()}function Xs(){return(Xs=e((()=>{s(),K()})))()}function Zs(){return(Zs=e((()=>{s(),K()})))()}function Qs(){return(Qs=e((()=>{s(),K()})))()}function $s(){return($s=e((()=>{s(),K()})))()}function ec(){return(ec=e((()=>{s(),K()})))()}function tc(){return(tc=e((()=>{s(),K()})))()}function nc(){return(nc=e((()=>{s(),K()})))()}function rc(){return(rc=e((()=>{s(),K()})))()}function ic(){return(ic=e((()=>{s(),K()})))()}function ac(){return(ac=e((()=>{s(),K()})))()}function oc(){return(oc=e((()=>{s(),K()})))()}function sc(){return(sc=e((()=>{s(),K()})))()}function cc(){return(cc=e((()=>{s(),K()})))()}function lc(){return(lc=e((()=>{s(),K()})))()}function uc(){return(uc=e((()=>{s(),K()})))()}function dc(){return(dc=e((()=>{s(),K()})))()}function fc(){return(fc=e((()=>{s(),K()})))()}function pc(){return(pc=e((()=>{s(),K()})))()}function mc(){return(mc=e((()=>{s(),K()})))()}function hc(){return(hc=e((()=>{s(),K()})))()}function gc(){return(gc=e((()=>{s(),K()})))()}function _c(){return(_c=e((()=>{s(),K()})))()}function vc(){return(vc=e((()=>{s(),K()})))()}function yc(){return(yc=e((()=>{s(),K()})))()}function bc(){return(bc=e((()=>{s(),K()})))()}function xc(){return(xc=e((()=>{s(),K()})))()}function Sc(){return(Sc=e((()=>{s(),K()})))()}function Cc(){return(Cc=e((()=>{s(),K()})))()}function wc(){return(wc=e((()=>{s(),K()})))()}function Tc(){return(Tc=e((()=>{s(),K()})))()}function Ec(){return(Ec=e((()=>{s(),K()})))()}function Dc(){return(Dc=e((()=>{s(),K()})))()}function Oc(){return(Oc=e((()=>{s(),K()})))()}function kc(){return(kc=e((()=>{s(),K()})))()}function Ac(){return(Ac=e((()=>{s(),K()})))()}function jc(){return(jc=e((()=>{s(),K()})))()}function Mc(){return(Mc=e((()=>{s(),K()})))()}function Nc(){return(Nc=e((()=>{s(),K()})))()}function Pc(){return(Pc=e((()=>{s(),K()})))()}function Fc(){return(Fc=e((()=>{s(),K()})))()}function Ic(){return(Ic=e((()=>{s(),K()})))()}function Lc(){return(Lc=e((()=>{s(),K()})))()}function Rc(){return(Rc=e((()=>{s(),K()})))()}function zc(){return(zc=e((()=>{s(),K()})))()}function Bc(){return(Bc=e((()=>{s(),K()})))()}function Vc(){return(Vc=e((()=>{s(),K()})))()}function Hc(){return(Hc=e((()=>{s(),K()})))()}function Uc(){return(Uc=e((()=>{s(),K()})))()}function Wc(){return(Wc=e((()=>{s(),K()})))()}function Gc(){return(Gc=e((()=>{s(),K()})))()}function Kc(){return(Kc=e((()=>{s(),K()})))()}function qc(){return(qc=e((()=>{s(),K()})))()}function Jc(){return(Jc=e((()=>{s(),K()})))()}function Yc(){return(Yc=e((()=>{s(),K()})))()}function Xc(){return(Xc=e((()=>{s(),K()})))()}function Zc(){return(Zc=e((()=>{s(),K()})))()}function Qc(){return(Qc=e((()=>{s(),K()})))()}function $c(){return($c=e((()=>{s(),K()})))()}function el(){return(el=e((()=>{s(),K()})))()}function tl(){return(tl=e((()=>{s(),K()})))()}function nl(){return(nl=e((()=>{s(),K()})))()}function rl(){return(rl=e((()=>{s(),K()})))()}function il(){return(il=e((()=>{s(),K()})))()}function al(){return(al=e((()=>{s(),K()})))()}function ol(){return(ol=e((()=>{s(),K()})))()}function sl(){return(sl=e((()=>{s(),K()})))()}function cl(){return(cl=e((()=>{s(),K()})))()}function ll(){return(ll=e((()=>{s(),K()})))()}function ul(){return(ul=e((()=>{s(),K()})))()}function dl(){return(dl=e((()=>{s(),K()})))()}function fl(){return(fl=e((()=>{s(),K()})))()}function pl(){return(pl=e((()=>{s(),K()})))()}function ml(){return(ml=e((()=>{s(),K()})))()}function hl(){return(hl=e((()=>{s(),K()})))()}function gl(){return(gl=e((()=>{s(),K()})))()}function _l(){return(_l=e((()=>{s(),K()})))()}function vl(){return(vl=e((()=>{s(),K()})))()}function yl(){return(yl=e((()=>{s(),K()})))()}function bl(){return(bl=e((()=>{s(),K()})))()}function xl(){return(xl=e((()=>{s(),K()})))()}function Sl(){return(Sl=e((()=>{s(),K()})))()}function Cl(){return(Cl=e((()=>{s(),K()})))()}function wl(){return(wl=e((()=>{s(),K()})))()}function Tl(){return(Tl=e((()=>{s(),K()})))()}function El(){return(El=e((()=>{s(),K()})))()}function Dl(){return(Dl=e((()=>{s(),K()})))()}function Ol(){return(Ol=e((()=>{s(),K()})))()}function kl(){return(kl=e((()=>{s(),K()})))()}function Al(){return(Al=e((()=>{s(),K()})))()}function jl(){return(jl=e((()=>{s(),K()})))()}function Ml(){return(Ml=e((()=>{s(),K()})))()}function Nl(){return(Nl=e((()=>{s(),K()})))()}function Pl(){return(Pl=e((()=>{s(),K()})))()}function Fl(){return(Fl=e((()=>{s(),K()})))()}function Il(){return(Il=e((()=>{s(),K()})))()}function Ll(){return(Ll=e((()=>{s(),K()})))()}function Rl(){return(Rl=e((()=>{s(),K()})))()}function zl(){return(zl=e((()=>{s(),K()})))()}function Bl(){return(Bl=e((()=>{s(),K()})))()}function Vl(){return(Vl=e((()=>{s(),K()})))()}function Hl(){return(Hl=e((()=>{s(),K()})))()}function Ul(){return(Ul=e((()=>{s(),K()})))()}function Wl(){return(Wl=e((()=>{s(),K()})))()}function Gl(){return(Gl=e((()=>{s(),K()})))()}function Kl(){return(Kl=e((()=>{s(),K()})))()}function ql(){return(ql=e((()=>{s(),K()})))()}function Jl(){return(Jl=e((()=>{s(),K()})))()}function Yl(){return(Yl=e((()=>{s(),K()})))()}function Xl(){return(Xl=e((()=>{s(),K()})))()}function Zl(){return(Zl=e((()=>{s(),K()})))()}function Ql(){return(Ql=e((()=>{s(),K()})))()}function $l(){return($l=e((()=>{s(),K()})))()}function eu(){return(eu=e((()=>{s(),K()})))()}function tu(){return(tu=e((()=>{s(),K()})))()}function nu(){return(nu=e((()=>{s(),K()})))()}function ru(){return(ru=e((()=>{s(),K()})))()}function iu(){return(iu=e((()=>{s(),K()})))()}function au(){return(au=e((()=>{s(),K()})))()}function ou(){return(ou=e((()=>{s(),K()})))()}function su(){return(su=e((()=>{s(),K()})))()}function cu(){return(cu=e((()=>{s(),K()})))()}function lu(){return(lu=e((()=>{s(),K()})))()}function uu(){return(uu=e((()=>{s(),K()})))()}function du(){return(du=e((()=>{s(),K()})))()}function fu(){return(fu=e((()=>{s(),K()})))()}function pu(){return(pu=e((()=>{s(),K()})))()}function mu(){return(mu=e((()=>{s(),K()})))()}function hu(){return(hu=e((()=>{s(),K()})))()}function gu(){return(gu=e((()=>{s(),K()})))()}function _u(){return(_u=e((()=>{s(),K()})))()}function vu(){return(vu=e((()=>{s(),K()})))()}function yu(){return(yu=e((()=>{s(),K()})))()}function bu(){return(bu=e((()=>{s(),K()})))()}function xu(){return(xu=e((()=>{s(),K()})))()}function Su(){return(Su=e((()=>{s(),K()})))()}function Cu(){return(Cu=e((()=>{s(),K()})))()}function wu(){return(wu=e((()=>{s(),K()})))()}function Tu(){return(Tu=e((()=>{s(),K()})))()}function Eu(){return(Eu=e((()=>{s(),K()})))()}function Du(){return(Du=e((()=>{s(),K()})))()}function Ou(){return(Ou=e((()=>{s(),K()})))()}function ku(){return(ku=e((()=>{s(),K()})))()}function Au(){return(Au=e((()=>{s(),K()})))()}function ju(){return(ju=e((()=>{s(),K()})))()}function Mu(){return(Mu=e((()=>{s(),K()})))()}function Nu(){return(Nu=e((()=>{s(),K()})))()}function Pu(){return(Pu=e((()=>{s(),K()})))()}function Fu(){return(Fu=e((()=>{s(),K()})))()}function Iu(){return(Iu=e((()=>{s(),K()})))()}function Lu(){return(Lu=e((()=>{s(),K()})))()}function Ru(){return(Ru=e((()=>{s(),K()})))()}function zu(){return(zu=e((()=>{s(),K()})))()}function Bu(){return(Bu=e((()=>{s(),K()})))()}function Vu(){return(Vu=e((()=>{s(),K()})))()}function Hu(){return(Hu=e((()=>{s(),K()})))()}function Uu(){return(Uu=e((()=>{s(),K()})))()}function Wu(){return(Wu=e((()=>{s(),K()})))()}function Gu(){return(Gu=e((()=>{s(),K()})))()}function Ku(){return(Ku=e((()=>{s(),K()})))()}function qu(){return(qu=e((()=>{s(),K()})))()}function Ju(){return(Ju=e((()=>{s(),K()})))()}function Yu(){return(Yu=e((()=>{s(),K()})))()}function Xu(){return(Xu=e((()=>{s(),K()})))()}function Zu(){return(Zu=e((()=>{s(),K()})))()}function Qu(){return(Qu=e((()=>{s(),K()})))()}function $u(){return($u=e((()=>{s(),K()})))()}function ed(){return(ed=e((()=>{s(),K()})))()}function td(){return(td=e((()=>{s(),K()})))()}function nd(){return(nd=e((()=>{s(),K()})))()}function rd(){return(rd=e((()=>{s(),K()})))()}function id(){return(id=e((()=>{s(),K()})))()}function ad(){return(ad=e((()=>{s(),K()})))()}function od(){return(od=e((()=>{s(),K()})))()}function sd(){return(sd=e((()=>{s(),K()})))()}function cd(){return(cd=e((()=>{s(),K()})))()}function ld(){return(ld=e((()=>{s(),K()})))()}function ud(){return(ud=e((()=>{s(),K()})))()}function dd(){return(dd=e((()=>{s(),K()})))()}function fd(){return(fd=e((()=>{s(),K()})))()}function pd(){return(pd=e((()=>{s(),K()})))()}function md(){return(md=e((()=>{s(),K()})))()}function hd(){return(hd=e((()=>{s(),K()})))()}function gd(){return(gd=e((()=>{s(),K()})))()}function _d(){return(_d=e((()=>{s(),K()})))()}function vd(){return(vd=e((()=>{s(),K()})))()}function yd(){return(yd=e((()=>{s(),K()})))()}function bd(){return(bd=e((()=>{s(),K()})))()}function xd(){return(xd=e((()=>{s(),K()})))()}function Sd(){return(Sd=e((()=>{s(),K()})))()}function Cd(){return(Cd=e((()=>{s(),K()})))()}function wd(){return(wd=e((()=>{s(),K()})))()}function Td(){return(Td=e((()=>{s(),K()})))()}function Ed(){return(Ed=e((()=>{s(),K()})))()}function Dd(){return(Dd=e((()=>{s(),K()})))()}function Od(){return(Od=e((()=>{s(),K()})))()}function kd(){return(kd=e((()=>{s(),K()})))()}function Ad(){return(Ad=e((()=>{s(),K()})))()}function jd(){return(jd=e((()=>{s(),K()})))()}function Md(){return(Md=e((()=>{s(),K()})))()}function Nd(){return(Nd=e((()=>{s(),K()})))()}function Pd(){return(Pd=e((()=>{s(),K()})))()}function Fd(){return(Fd=e((()=>{s(),K()})))()}function Id(){return(Id=e((()=>{s(),K()})))()}function Ld(){return(Ld=e((()=>{s(),K()})))()}function Rd(){return(Rd=e((()=>{s(),K()})))()}function zd(){return(zd=e((()=>{s(),K()})))()}function Bd(){return(Bd=e((()=>{s(),K()})))()}function Vd(){return(Vd=e((()=>{s(),K()})))()}function Hd(){return(Hd=e((()=>{s(),K()})))()}function Ud(){return(Ud=e((()=>{s(),K()})))()}function Wd(){return(Wd=e((()=>{s(),K()})))()}function Gd(){return(Gd=e((()=>{s(),K()})))()}function Kd(){return(Kd=e((()=>{s(),K()})))()}function qd(){return(qd=e((()=>{s(),K()})))()}function Jd(){return(Jd=e((()=>{s(),K()})))()}function Yd(){return(Yd=e((()=>{s(),K()})))()}function Xd(){return(Xd=e((()=>{s(),K()})))()}function Zd(){return(Zd=e((()=>{s(),K()})))()}function Qd(){return(Qd=e((()=>{s(),K()})))()}function $d(){return($d=e((()=>{s(),K()})))()}function ef(){return(ef=e((()=>{s(),K()})))()}function tf(){return(tf=e((()=>{s(),K()})))()}function nf(){return(nf=e((()=>{s(),K()})))()}function rf(){return(rf=e((()=>{s(),K()})))()}function af(){return(af=e((()=>{s(),K()})))()}function of(){return(of=e((()=>{s(),K()})))()}function sf(){return(sf=e((()=>{s(),K()})))()}function cf(){return(cf=e((()=>{s(),K()})))()}function lf(){return(lf=e((()=>{s(),K()})))()}function uf(){return(uf=e((()=>{s(),K()})))()}function df(){return(df=e((()=>{s(),K()})))()}function ff(){return(ff=e((()=>{s(),K()})))()}function pf(){return(pf=e((()=>{s(),K()})))()}function mf(){return(mf=e((()=>{s(),K()})))()}function hf(){return(hf=e((()=>{s(),K()})))()}function gf(){return(gf=e((()=>{s(),K()})))()}function _f(){return(_f=e((()=>{s(),K()})))()}function vf(){return(vf=e((()=>{s(),K()})))()}function yf(){return(yf=e((()=>{s(),K()})))()}function bf(){return(bf=e((()=>{s(),K()})))()}function xf(){return(xf=e((()=>{s(),K()})))()}function Sf(){return(Sf=e((()=>{s(),K()})))()}function Cf(){return(Cf=e((()=>{s(),K()})))()}function wf(){return(wf=e((()=>{s(),K()})))()}function Tf(){return(Tf=e((()=>{s(),K()})))()}function Ef(){return(Ef=e((()=>{s(),K()})))()}function Df(){return(Df=e((()=>{s(),K()})))()}function Of(){return(Of=e((()=>{s(),K()})))()}function kf(){return(kf=e((()=>{s(),K()})))()}function Af(){return(Af=e((()=>{s(),K()})))()}function jf(){return(jf=e((()=>{s(),K()})))()}function Mf(){return(Mf=e((()=>{s(),K()})))()}function Nf(){return(Nf=e((()=>{s(),K()})))()}function Pf(){return(Pf=e((()=>{s(),K()})))()}function Ff(){return(Ff=e((()=>{s(),K()})))()}function If(){return(If=e((()=>{s(),K()})))()}function Lf(){return(Lf=e((()=>{s(),K()})))()}function Rf(){return(Rf=e((()=>{s(),K()})))()}function zf(){return(zf=e((()=>{s(),K()})))()}function Bf(){return(Bf=e((()=>{s(),K()})))()}function Vf(){return(Vf=e((()=>{s(),K()})))()}function Hf(){return(Hf=e((()=>{s(),K()})))()}function Uf(){return(Uf=e((()=>{s(),K()})))()}function Wf(){return(Wf=e((()=>{s(),K()})))()}function Gf(){return(Gf=e((()=>{s(),K()})))()}function Kf(){return(Kf=e((()=>{s(),K()})))()}function qf(){return(qf=e((()=>{s(),K()})))()}function Jf(){return(Jf=e((()=>{s(),K()})))()}function Yf(){return(Yf=e((()=>{s(),K()})))()}function Xf(){return(Xf=e((()=>{s(),K()})))()}function Zf(){return(Zf=e((()=>{s(),K()})))()}function Qf(){return(Qf=e((()=>{s(),K()})))()}function $f(){return($f=e((()=>{s(),K()})))()}function ep(){return(ep=e((()=>{s(),K()})))()}function tp(){return(tp=e((()=>{s(),K()})))()}function np(){return(np=e((()=>{s(),K()})))()}var rp;function ip(){return(ip=e((()=>{s(),K(),rp=({slot:e,title:t,className:n,width:i=`24`,height:a=`24`,styles:o}={})=>c`
  <svg
    slot=${G(e)}
    class=${`info-circle-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${a}
    style=${G(o)}
  >
    ${q(t,()=>r`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`})))()}function ap(){return(ap=e((()=>{s(),K()})))()}function op(){return(op=e((()=>{s(),K()})))()}function sp(){return(sp=e((()=>{s(),K()})))()}function cp(){return(cp=e((()=>{s(),K()})))()}function lp(){return(lp=e((()=>{s(),K()})))()}function up(){return(up=e((()=>{s(),K()})))()}function dp(){return(dp=e((()=>{s(),K()})))()}function fp(){return(fp=e((()=>{s(),K()})))()}function pp(){return(pp=e((()=>{s(),K()})))()}function mp(){return(mp=e((()=>{s(),K()})))()}function hp(){return(hp=e((()=>{s(),K()})))()}function gp(){return(gp=e((()=>{s(),K()})))()}function _p(){return(_p=e((()=>{s(),K()})))()}function vp(){return(vp=e((()=>{s(),K()})))()}function yp(){return(yp=e((()=>{s(),K()})))()}function bp(){return(bp=e((()=>{s(),K()})))()}function xp(){return(xp=e((()=>{s(),K()})))()}function Sp(){return(Sp=e((()=>{s(),K()})))()}function Cp(){return(Cp=e((()=>{s(),K()})))()}function wp(){return(wp=e((()=>{s(),K()})))()}function Tp(){return(Tp=e((()=>{s(),K()})))()}function Ep(){return(Ep=e((()=>{s(),K()})))()}function Dp(){return(Dp=e((()=>{s(),K()})))()}function Op(){return(Op=e((()=>{s(),K()})))()}function kp(){return(kp=e((()=>{s(),K()})))()}function Ap(){return(Ap=e((()=>{s(),K()})))()}function jp(){return(jp=e((()=>{s(),K()})))()}function Mp(){return(Mp=e((()=>{s(),K()})))()}function Np(){return(Np=e((()=>{s(),K()})))()}function Pp(){return(Pp=e((()=>{s(),K()})))()}function Fp(){return(Fp=e((()=>{s(),K()})))()}function Ip(){return(Ip=e((()=>{s(),K()})))()}function Lp(){return(Lp=e((()=>{s(),K()})))()}function Rp(){return(Rp=e((()=>{s(),K()})))()}function zp(){return(zp=e((()=>{s(),K()})))()}function Bp(){return(Bp=e((()=>{s(),K()})))()}function Vp(){return(Vp=e((()=>{s(),K()})))()}function Hp(){return(Hp=e((()=>{s(),K()})))()}function Up(){return(Up=e((()=>{s(),K()})))()}function Wp(){return(Wp=e((()=>{s(),K()})))()}function Gp(){return(Gp=e((()=>{s(),K()})))()}function Kp(){return(Kp=e((()=>{s(),K()})))()}function qp(){return(qp=e((()=>{s(),K()})))()}function Jp(){return(Jp=e((()=>{s(),K()})))()}function Yp(){return(Yp=e((()=>{s(),K()})))()}function Xp(){return(Xp=e((()=>{s(),K()})))()}function Zp(){return(Zp=e((()=>{s(),K()})))()}function Qp(){return(Qp=e((()=>{s(),K()})))()}function $p(){return($p=e((()=>{s(),K()})))()}function em(){return(em=e((()=>{s(),K()})))()}function tm(){return(tm=e((()=>{s(),K()})))()}function nm(){return(nm=e((()=>{s(),K()})))()}function rm(){return(rm=e((()=>{s(),K()})))()}function im(){return(im=e((()=>{s(),K()})))()}function am(){return(am=e((()=>{s(),K()})))()}function om(){return(om=e((()=>{s(),K()})))()}function sm(){return(sm=e((()=>{s(),K()})))()}function cm(){return(cm=e((()=>{s(),K()})))()}function lm(){return(lm=e((()=>{s(),K()})))()}function um(){return(um=e((()=>{s(),K()})))()}function dm(){return(dm=e((()=>{s(),K()})))()}function fm(){return(fm=e((()=>{s(),K()})))()}function pm(){return(pm=e((()=>{s(),K()})))()}function mm(){return(mm=e((()=>{s(),K()})))()}function hm(){return(hm=e((()=>{s(),K()})))()}function gm(){return(gm=e((()=>{s(),K()})))()}function _m(){return(_m=e((()=>{s(),K()})))()}function vm(){return(vm=e((()=>{s(),K()})))()}function ym(){return(ym=e((()=>{s(),K()})))()}function bm(){return(bm=e((()=>{s(),K()})))()}function xm(){return(xm=e((()=>{s(),K()})))()}function Sm(){return(Sm=e((()=>{s(),K()})))()}function Cm(){return(Cm=e((()=>{s(),K()})))()}function wm(){return(wm=e((()=>{s(),K()})))()}function Tm(){return(Tm=e((()=>{s(),K()})))()}function Em(){return(Em=e((()=>{s(),K()})))()}function Dm(){return(Dm=e((()=>{s(),K()})))()}function Om(){return(Om=e((()=>{s(),K()})))()}function km(){return(km=e((()=>{s(),K()})))()}function Am(){return(Am=e((()=>{s(),K()})))()}function jm(){return(jm=e((()=>{s(),K()})))()}function Mm(){return(Mm=e((()=>{s(),K()})))()}function Nm(){return(Nm=e((()=>{s(),K()})))()}function Pm(){return(Pm=e((()=>{s(),K()})))()}function Fm(){return(Fm=e((()=>{s(),K()})))()}function Im(){return(Im=e((()=>{s(),K()})))()}function Lm(){return(Lm=e((()=>{s(),K()})))()}function Rm(){return(Rm=e((()=>{s(),K()})))()}function zm(){return(zm=e((()=>{s(),K()})))()}function Bm(){return(Bm=e((()=>{s(),K()})))()}function Vm(){return(Vm=e((()=>{s(),K()})))()}function Hm(){return(Hm=e((()=>{s(),K()})))()}function Um(){return(Um=e((()=>{s(),K()})))()}function Wm(){return(Wm=e((()=>{s(),K()})))()}function Gm(){return(Gm=e((()=>{s(),K()})))()}function Km(){return(Km=e((()=>{s(),K()})))()}function qm(){return(qm=e((()=>{s(),K()})))()}function Jm(){return(Jm=e((()=>{s(),K()})))()}function Ym(){return(Ym=e((()=>{s(),K()})))()}function Xm(){return(Xm=e((()=>{s(),K()})))()}function Zm(){return(Zm=e((()=>{s(),K()})))()}function Qm(){return(Qm=e((()=>{s(),K()})))()}function $m(){return($m=e((()=>{s(),K()})))()}function eh(){return(eh=e((()=>{s(),K()})))()}function th(){return(th=e((()=>{s(),K()})))()}function nh(){return(nh=e((()=>{s(),K()})))()}function rh(){return(rh=e((()=>{s(),K()})))()}function ih(){return(ih=e((()=>{s(),K()})))()}function ah(){return(ah=e((()=>{s(),K()})))()}function oh(){return(oh=e((()=>{s(),K()})))()}function sh(){return(sh=e((()=>{s(),K()})))()}function ch(){return(ch=e((()=>{s(),K()})))()}function lh(){return(lh=e((()=>{s(),K()})))()}function uh(){return(uh=e((()=>{s(),K()})))()}function dh(){return(dh=e((()=>{s(),K()})))()}function fh(){return(fh=e((()=>{s(),K()})))()}function ph(){return(ph=e((()=>{s(),K()})))()}function mh(){return(mh=e((()=>{s(),K()})))()}function hh(){return(hh=e((()=>{s(),K()})))()}function gh(){return(gh=e((()=>{s(),K()})))()}function _h(){return(_h=e((()=>{s(),K()})))()}function vh(){return(vh=e((()=>{s(),K()})))()}function yh(){return(yh=e((()=>{s(),K()})))()}function bh(){return(bh=e((()=>{s(),K()})))()}function xh(){return(xh=e((()=>{s(),K()})))()}function Sh(){return(Sh=e((()=>{s(),K()})))()}function Ch(){return(Ch=e((()=>{s(),K()})))()}function wh(){return(wh=e((()=>{s(),K()})))()}function Th(){return(Th=e((()=>{s(),K()})))()}function Eh(){return(Eh=e((()=>{s(),K()})))()}function Dh(){return(Dh=e((()=>{s(),K()})))()}function Oh(){return(Oh=e((()=>{s(),K()})))()}function kh(){return(kh=e((()=>{s(),K()})))()}function Ah(){return(Ah=e((()=>{s(),K()})))()}function jh(){return(jh=e((()=>{s(),K()})))()}function Mh(){return(Mh=e((()=>{s(),K()})))()}function Nh(){return(Nh=e((()=>{s(),K()})))()}function Ph(){return(Ph=e((()=>{s(),K()})))()}function Fh(){return(Fh=e((()=>{s(),K()})))()}function Ih(){return(Ih=e((()=>{s(),K()})))()}function Lh(){return(Lh=e((()=>{s(),K()})))()}function Rh(){return(Rh=e((()=>{s(),K()})))()}function zh(){return(zh=e((()=>{s(),K()})))()}function Bh(){return(Bh=e((()=>{s(),K()})))()}function Vh(){return(Vh=e((()=>{s(),K()})))()}function Hh(){return(Hh=e((()=>{s(),K()})))()}function Uh(){return(Uh=e((()=>{s(),K()})))()}function Wh(){return(Wh=e((()=>{s(),K()})))()}function Gh(){return(Gh=e((()=>{s(),K()})))()}function Kh(){return(Kh=e((()=>{s(),K()})))()}function qh(){return(qh=e((()=>{s(),K()})))()}function Jh(){return(Jh=e((()=>{s(),K()})))()}function Yh(){return(Yh=e((()=>{s(),K()})))()}function Xh(){return(Xh=e((()=>{s(),K()})))()}function Zh(){return(Zh=e((()=>{s(),K()})))()}function Qh(){return(Qh=e((()=>{s(),K()})))()}function $h(){return($h=e((()=>{s(),K()})))()}function eg(){return(eg=e((()=>{s(),K()})))()}function tg(){return(tg=e((()=>{s(),K()})))()}function ng(){return(ng=e((()=>{s(),K()})))()}function rg(){return(rg=e((()=>{s(),K()})))()}function ig(){return(ig=e((()=>{s(),K()})))()}function ag(){return(ag=e((()=>{s(),K()})))()}function og(){return(og=e((()=>{s(),K()})))()}function sg(){return(sg=e((()=>{s(),K()})))()}function cg(){return(cg=e((()=>{s(),K()})))()}function lg(){return(lg=e((()=>{s(),K()})))()}function ug(){return(ug=e((()=>{s(),K()})))()}function dg(){return(dg=e((()=>{s(),K()})))()}function fg(){return(fg=e((()=>{s(),K()})))()}function pg(){return(pg=e((()=>{s(),K()})))()}function mg(){return(mg=e((()=>{s(),K()})))()}function hg(){return(hg=e((()=>{s(),K()})))()}function gg(){return(gg=e((()=>{s(),K()})))()}function _g(){return(_g=e((()=>{s(),K()})))()}function vg(){return(vg=e((()=>{s(),K()})))()}function yg(){return(yg=e((()=>{s(),K()})))()}function bg(){return(bg=e((()=>{s(),K()})))()}function xg(){return(xg=e((()=>{s(),K()})))()}function Sg(){return(Sg=e((()=>{s(),K()})))()}function Cg(){return(Cg=e((()=>{s(),K()})))()}function wg(){return(wg=e((()=>{s(),K()})))()}function Tg(){return(Tg=e((()=>{s(),K()})))()}function Eg(){return(Eg=e((()=>{s(),K()})))()}function Dg(){return(Dg=e((()=>{s(),K()})))()}function Og(){return(Og=e((()=>{s(),K()})))()}function kg(){return(kg=e((()=>{s(),K()})))()}function Ag(){return(Ag=e((()=>{s(),K()})))()}function jg(){return(jg=e((()=>{s(),K()})))()}function Mg(){return(Mg=e((()=>{s(),K()})))()}function Ng(){return(Ng=e((()=>{s(),K()})))()}function Pg(){return(Pg=e((()=>{s(),K()})))()}function Fg(){return(Fg=e((()=>{s(),K()})))()}function Ig(){return(Ig=e((()=>{s(),K()})))()}function Lg(){return(Lg=e((()=>{s(),K()})))()}function Rg(){return(Rg=e((()=>{s(),K()})))()}function zg(){return(zg=e((()=>{s(),K()})))()}function Bg(){return(Bg=e((()=>{s(),K()})))()}function Vg(){return(Vg=e((()=>{s(),K()})))()}function Hg(){return(Hg=e((()=>{s(),K()})))()}function Ug(){return(Ug=e((()=>{s(),K()})))()}function Wg(){return(Wg=e((()=>{s(),K()})))()}function Gg(){return(Gg=e((()=>{s(),K()})))()}function Kg(){return(Kg=e((()=>{s(),K()})))()}function qg(){return(qg=e((()=>{s(),K()})))()}function Jg(){return(Jg=e((()=>{s(),K()})))()}function Yg(){return(Yg=e((()=>{s(),K()})))()}function Xg(){return(Xg=e((()=>{s(),K()})))()}function Zg(){return(Zg=e((()=>{s(),K()})))()}function Qg(){return(Qg=e((()=>{s(),K()})))()}function $g(){return($g=e((()=>{s(),K()})))()}function e_(){return(e_=e((()=>{s(),K()})))()}function t_(){return(t_=e((()=>{s(),K()})))()}function n_(){return(n_=e((()=>{s(),K()})))()}function r_(){return(r_=e((()=>{s(),K()})))()}function i_(){return(i_=e((()=>{s(),K()})))()}function a_(){return(a_=e((()=>{s(),K()})))()}function o_(){return(o_=e((()=>{s(),K()})))()}function s_(){return(s_=e((()=>{s(),K()})))()}function c_(){return(c_=e((()=>{s(),K()})))()}function l_(){return(l_=e((()=>{s(),K()})))()}function u_(){return(u_=e((()=>{s(),K()})))()}function d_(){return(d_=e((()=>{s(),K()})))()}function f_(){return(f_=e((()=>{s(),K()})))()}function p_(){return(p_=e((()=>{s(),K()})))()}function m_(){return(m_=e((()=>{s(),K()})))()}function h_(){return(h_=e((()=>{s(),K()})))()}function g_(){return(g_=e((()=>{s(),K()})))()}function __(){return(__=e((()=>{s(),K()})))()}function v_(){return(v_=e((()=>{s(),K()})))()}function y_(){return(y_=e((()=>{s(),K()})))()}function b_(){return(b_=e((()=>{s(),K()})))()}function x_(){return(x_=e((()=>{s(),K()})))()}function S_(){return(S_=e((()=>{s(),K()})))()}function C_(){return(C_=e((()=>{s(),K()})))()}function w_(){return(w_=e((()=>{s(),K()})))()}function T_(){return(T_=e((()=>{s(),K()})))()}function E_(){return(E_=e((()=>{s(),K()})))()}function D_(){return(D_=e((()=>{s(),K()})))()}function O_(){return(O_=e((()=>{s(),K()})))()}function k_(){return(k_=e((()=>{s(),K()})))()}function A_(){return(A_=e((()=>{s(),K()})))()}function j_(){return(j_=e((()=>{s(),K()})))()}function M_(){return(M_=e((()=>{s(),K()})))()}function N_(){return(N_=e((()=>{s(),K()})))()}function P_(){return(P_=e((()=>{s(),K()})))()}function F_(){return(F_=e((()=>{s(),K()})))()}function I_(){return(I_=e((()=>{s(),K()})))()}function L_(){return(L_=e((()=>{s(),K()})))()}function R_(){return(R_=e((()=>{s(),K()})))()}function z_(){return(z_=e((()=>{s(),K()})))()}function B_(){return(B_=e((()=>{s(),K()})))()}function V_(){return(V_=e((()=>{s(),K()})))()}function H_(){return(H_=e((()=>{s(),K()})))()}function U_(){return(U_=e((()=>{s(),K()})))()}function W_(){return(W_=e((()=>{s(),K()})))()}function G_(){return(G_=e((()=>{s(),K()})))()}function K_(){return(K_=e((()=>{s(),K()})))()}function q_(){return(q_=e((()=>{s(),K()})))()}function J_(){return(J_=e((()=>{s(),K()})))()}function Y_(){return(Y_=e((()=>{s(),K()})))()}function X_(){return(X_=e((()=>{s(),K()})))()}function Z_(){return(Z_=e((()=>{s(),K()})))()}function Q_(){return(Q_=e((()=>{s(),K()})))()}function $_(){return($_=e((()=>{s(),K()})))()}function ev(){return(ev=e((()=>{s(),K()})))()}function tv(){return(tv=e((()=>{s(),K()})))()}function nv(){return(nv=e((()=>{s(),K()})))()}function rv(){return(rv=e((()=>{s(),K()})))()}function iv(){return(iv=e((()=>{s(),K()})))()}function av(){return(av=e((()=>{s(),K()})))()}function ov(){return(ov=e((()=>{s(),K()})))()}function sv(){return(sv=e((()=>{s(),K()})))()}function cv(){return(cv=e((()=>{s(),K()})))()}function lv(){return(lv=e((()=>{s(),K()})))()}function uv(){return(uv=e((()=>{s(),K()})))()}function dv(){return(dv=e((()=>{s(),K()})))()}function fv(){return(fv=e((()=>{s(),K()})))()}function pv(){return(pv=e((()=>{s(),K()})))()}function mv(){return(mv=e((()=>{s(),K()})))()}function hv(){return(hv=e((()=>{s(),K()})))()}function gv(){return(gv=e((()=>{s(),K()})))()}function _v(){return(_v=e((()=>{s(),K()})))()}function vv(){return(vv=e((()=>{s(),K()})))()}function yv(){return(yv=e((()=>{s(),K()})))()}function bv(){return(bv=e((()=>{s(),K()})))()}function xv(){return(xv=e((()=>{s(),K()})))()}function Sv(){return(Sv=e((()=>{s(),K()})))()}function Cv(){return(Cv=e((()=>{s(),K()})))()}function wv(){return(wv=e((()=>{s(),K()})))()}function Tv(){return(Tv=e((()=>{s(),K()})))()}function Ev(){return(Ev=e((()=>{s(),K()})))()}function Dv(){return(Dv=e((()=>{s(),K()})))()}function Ov(){return(Ov=e((()=>{s(),K()})))()}function kv(){return(kv=e((()=>{s(),K()})))()}function Av(){return(Av=e((()=>{s(),K()})))()}function jv(){return(jv=e((()=>{s(),K()})))()}function Mv(){return(Mv=e((()=>{s(),K()})))()}function Nv(){return(Nv=e((()=>{s(),K()})))()}function Pv(){return(Pv=e((()=>{s(),K()})))()}function Fv(){return(Fv=e((()=>{s(),K()})))()}function Iv(){return(Iv=e((()=>{s(),K()})))()}function Lv(){return(Lv=e((()=>{s(),K()})))()}function Rv(){return(Rv=e((()=>{s(),K()})))()}function zv(){return(zv=e((()=>{s(),K()})))()}function Bv(){return(Bv=e((()=>{s(),K()})))()}function Vv(){return(Vv=e((()=>{s(),K()})))()}function Hv(){return(Hv=e((()=>{s(),K()})))()}function Uv(){return(Uv=e((()=>{s(),K()})))()}function Wv(){return(Wv=e((()=>{s(),K()})))()}function Gv(){return(Gv=e((()=>{s(),K()})))()}function Kv(){return(Kv=e((()=>{s(),K()})))()}function qv(){return(qv=e((()=>{s(),K()})))()}function Jv(){return(Jv=e((()=>{s(),K()})))()}function Yv(){return(Yv=e((()=>{s(),K()})))()}function Xv(){return(Xv=e((()=>{s(),K()})))()}function Zv(){return(Zv=e((()=>{s(),K()})))()}function Qv(){return(Qv=e((()=>{s(),K()})))()}function $v(){return($v=e((()=>{s(),K()})))()}function ey(){return(ey=e((()=>{s(),K()})))()}function ty(){return(ty=e((()=>{s(),K()})))()}function ny(){return(ny=e((()=>{s(),K()})))()}function ry(){return(ry=e((()=>{s(),K()})))()}function iy(){return(iy=e((()=>{s(),K()})))()}function ay(){return(ay=e((()=>{s(),K()})))()}function oy(){return(oy=e((()=>{s(),K()})))()}function sy(){return(sy=e((()=>{s(),K()})))()}function cy(){return(cy=e((()=>{s(),K()})))()}function ly(){return(ly=e((()=>{s(),K()})))()}function uy(){return(uy=e((()=>{s(),K()})))()}function dy(){return(dy=e((()=>{s(),K()})))()}function fy(){return(fy=e((()=>{s(),K()})))()}function py(){return(py=e((()=>{s(),K()})))()}function my(){return(my=e((()=>{s(),K()})))()}function hy(){return(hy=e((()=>{s(),K()})))()}function gy(){return(gy=e((()=>{s(),K()})))()}function _y(){return(_y=e((()=>{s(),K()})))()}function vy(){return(vy=e((()=>{s(),K()})))()}function yy(){return(yy=e((()=>{s(),K()})))()}function by(){return(by=e((()=>{s(),K()})))()}function xy(){return(xy=e((()=>{s(),K()})))()}function Sy(){return(Sy=e((()=>{s(),K()})))()}function Cy(){return(Cy=e((()=>{s(),K()})))()}function wy(){return(wy=e((()=>{s(),K()})))()}function Ty(){return(Ty=e((()=>{s(),K()})))()}function Ey(){return(Ey=e((()=>{s(),K()})))()}function Dy(){return(Dy=e((()=>{s(),K()})))()}function Oy(){return(Oy=e((()=>{s(),K()})))()}function ky(){return(ky=e((()=>{s(),K()})))()}function Ay(){return(Ay=e((()=>{s(),K()})))()}function jy(){return(jy=e((()=>{s(),K()})))()}function My(){return(My=e((()=>{s(),K()})))()}function Ny(){return(Ny=e((()=>{s(),K()})))()}function Py(){return(Py=e((()=>{s(),K()})))()}function Fy(){return(Fy=e((()=>{s(),K()})))()}function Iy(){return(Iy=e((()=>{s(),K()})))()}function Ly(){return(Ly=e((()=>{s(),K()})))()}function Ry(){return(Ry=e((()=>{s(),K()})))()}function zy(){return(zy=e((()=>{s(),K()})))()}function By(){return(By=e((()=>{s(),K()})))()}function Vy(){return(Vy=e((()=>{s(),K()})))()}function Hy(){return(Hy=e((()=>{s(),K()})))()}function Uy(){return(Uy=e((()=>{s(),K()})))()}function Wy(){return(Wy=e((()=>{s(),K()})))()}function Gy(){return(Gy=e((()=>{s(),K()})))()}function Ky(){return(Ky=e((()=>{s(),K()})))()}function qy(){return(qy=e((()=>{s(),K()})))()}function Jy(){return(Jy=e((()=>{s(),K()})))()}function Yy(){return(Yy=e((()=>{s(),K()})))()}function Xy(){return(Xy=e((()=>{s(),K()})))()}function Zy(){return(Zy=e((()=>{s(),K()})))()}function Qy(){return(Qy=e((()=>{s(),K()})))()}function $y(){return($y=e((()=>{s(),K()})))()}function eb(){return(eb=e((()=>{s(),K()})))()}function tb(){return(tb=e((()=>{s(),K()})))()}function nb(){return(nb=e((()=>{s(),K()})))()}function rb(){return(rb=e((()=>{s(),K()})))()}function ib(){return(ib=e((()=>{s(),K()})))()}function ab(){return(ab=e((()=>{s(),K()})))()}function ob(){return(ob=e((()=>{s(),K()})))()}function sb(){return(sb=e((()=>{s(),K()})))()}function cb(){return(cb=e((()=>{s(),K()})))()}function lb(){return(lb=e((()=>{s(),K()})))()}function ub(){return(ub=e((()=>{s(),K()})))()}function db(){return(db=e((()=>{s(),K()})))()}function fb(){return(fb=e((()=>{s(),K()})))()}function pb(){return(pb=e((()=>{s(),K()})))()}function mb(){return(mb=e((()=>{s(),K()})))()}function hb(){return(hb=e((()=>{s(),K()})))()}function gb(){return(gb=e((()=>{s(),K()})))()}function _b(){return(_b=e((()=>{s(),K()})))()}function vb(){return(vb=e((()=>{s(),K()})))()}function yb(){return(yb=e((()=>{s(),K()})))()}function bb(){return(bb=e((()=>{s(),K()})))()}function xb(){return(xb=e((()=>{s(),K()})))()}function Sb(){return(Sb=e((()=>{s(),K()})))()}function Cb(){return(Cb=e((()=>{s(),K()})))()}function wb(){return(wb=e((()=>{s(),K()})))()}function Tb(){return(Tb=e((()=>{s(),K()})))()}function Eb(){return(Eb=e((()=>{s(),K()})))()}function Db(){return(Db=e((()=>{s(),K()})))()}function Ob(){return(Ob=e((()=>{s(),K()})))()}function kb(){return(kb=e((()=>{s(),K()})))()}function Ab(){return(Ab=e((()=>{s(),K()})))()}function jb(){return(jb=e((()=>{s(),K()})))()}function Mb(){return(Mb=e((()=>{s(),K()})))()}function Nb(){return(Nb=e((()=>{s(),K()})))()}function Pb(){return(Pb=e((()=>{s(),K()})))()}function Fb(){return(Fb=e((()=>{s(),K()})))()}function Ib(){return(Ib=e((()=>{s(),K()})))()}function Lb(){return(Lb=e((()=>{s(),K()})))()}function Rb(){return(Rb=e((()=>{s(),K()})))()}function zb(){return(zb=e((()=>{s(),K()})))()}function Bb(){return(Bb=e((()=>{s(),K()})))()}function Vb(){return(Vb=e((()=>{s(),K()})))()}function Hb(){return(Hb=e((()=>{s(),K()})))()}function Ub(){return(Ub=e((()=>{s(),K()})))()}function Wb(){return(Wb=e((()=>{s(),K()})))()}function Gb(){return(Gb=e((()=>{s(),K()})))()}function Kb(){return(Kb=e((()=>{s(),K()})))()}function qb(){return(qb=e((()=>{s(),K()})))()}function Jb(){return(Jb=e((()=>{s(),K()})))()}function Yb(){return(Yb=e((()=>{s(),K()})))()}function Xb(){return(Xb=e((()=>{s(),K()})))()}function Zb(){return(Zb=e((()=>{s(),K()})))()}function Qb(){return(Qb=e((()=>{s(),K()})))()}function $b(){return($b=e((()=>{s(),K()})))()}function ex(){return(ex=e((()=>{s(),K()})))()}function tx(){return(tx=e((()=>{s(),K()})))()}function nx(){return(nx=e((()=>{s(),K()})))()}function rx(){return(rx=e((()=>{s(),K()})))()}function ix(){return(ix=e((()=>{s(),K()})))()}function ax(){return(ax=e((()=>{s(),K()})))()}function ox(){return(ox=e((()=>{s(),K()})))()}function sx(){return(sx=e((()=>{s(),K()})))()}function cx(){return(cx=e((()=>{s(),K()})))()}function lx(){return(lx=e((()=>{s(),K()})))()}function ux(){return(ux=e((()=>{s(),K()})))()}function dx(){return(dx=e((()=>{s(),K()})))()}function fx(){return(fx=e((()=>{s(),K()})))()}function px(){return(px=e((()=>{s(),K()})))()}function mx(){return(mx=e((()=>{s(),K()})))()}function hx(){return(hx=e((()=>{s(),K()})))()}function gx(){return(gx=e((()=>{s(),K()})))()}function _x(){return(_x=e((()=>{s(),K()})))()}function vx(){return(vx=e((()=>{s(),K()})))()}function yx(){return(yx=e((()=>{s(),K()})))()}function bx(){return(bx=e((()=>{s(),K()})))()}function xx(){return(xx=e((()=>{s(),K()})))()}function Sx(){return(Sx=e((()=>{s(),K()})))()}function Cx(){return(Cx=e((()=>{s(),K()})))()}function wx(){return(wx=e((()=>{s(),K()})))()}function Tx(){return(Tx=e((()=>{s(),K()})))()}function Ex(){return(Ex=e((()=>{s(),K()})))()}function Dx(){return(Dx=e((()=>{s(),K()})))()}function Ox(){return(Ox=e((()=>{s(),K()})))()}function kx(){return(kx=e((()=>{s(),K()})))()}function Ax(){return(Ax=e((()=>{s(),K()})))()}function jx(){return(jx=e((()=>{s(),K()})))()}function Mx(){return(Mx=e((()=>{s(),K()})))()}function Nx(){return(Nx=e((()=>{s(),K()})))()}function Px(){return(Px=e((()=>{s(),K()})))()}function Fx(){return(Fx=e((()=>{s(),K()})))()}function Ix(){return(Ix=e((()=>{s(),K()})))()}function Lx(){return(Lx=e((()=>{s(),K()})))()}function Rx(){return(Rx=e((()=>{s(),K()})))()}function zx(){return(zx=e((()=>{s(),K()})))()}function Bx(){return(Bx=e((()=>{s(),K()})))()}function Vx(){return(Vx=e((()=>{s(),K()})))()}function Hx(){return(Hx=e((()=>{s(),K()})))()}function Ux(){return(Ux=e((()=>{s(),K()})))()}function Wx(){return(Wx=e((()=>{s(),K()})))()}function Gx(){return(Gx=e((()=>{s(),K()})))()}function Kx(){return(Kx=e((()=>{s(),K()})))()}function qx(){return(qx=e((()=>{s(),K()})))()}function Jx(){return(Jx=e((()=>{s(),K()})))()}function Yx(){return(Yx=e((()=>{s(),K()})))()}function Xx(){return(Xx=e((()=>{s(),K()})))()}function Zx(){return(Zx=e((()=>{s(),K()})))()}function Qx(){return(Qx=e((()=>{s(),K()})))()}function $x(){return($x=e((()=>{s(),K()})))()}function eS(){return(eS=e((()=>{s(),K()})))()}function tS(){return(tS=e((()=>{s(),K()})))()}function nS(){return(nS=e((()=>{s(),K()})))()}function rS(){return(rS=e((()=>{s(),K()})))()}function iS(){return(iS=e((()=>{s(),K()})))()}function aS(){return(aS=e((()=>{s(),K()})))()}function oS(){return(oS=e((()=>{s(),K()})))()}function sS(){return(sS=e((()=>{s(),K()})))()}function cS(){return(cS=e((()=>{s(),K()})))()}function lS(){return(lS=e((()=>{s(),K()})))()}function uS(){return(uS=e((()=>{s(),K()})))()}function dS(){return(dS=e((()=>{s(),K()})))()}function fS(){return(fS=e((()=>{s(),K()})))()}function pS(){return(pS=e((()=>{s(),K()})))()}function mS(){return(mS=e((()=>{s(),K()})))()}function hS(){return(hS=e((()=>{s(),K()})))()}function gS(){return(gS=e((()=>{s(),K()})))()}function _S(){return(_S=e((()=>{s(),K()})))()}function vS(){return(vS=e((()=>{s(),K()})))()}function yS(){return(yS=e((()=>{s(),K()})))()}function bS(){return(bS=e((()=>{s(),K()})))()}function xS(){return(xS=e((()=>{s(),K()})))()}function SS(){return(SS=e((()=>{s(),K()})))()}function CS(){return(CS=e((()=>{s(),K()})))()}function wS(){return(wS=e((()=>{s(),K()})))()}function TS(){return(TS=e((()=>{s(),K()})))()}function ES(){return(ES=e((()=>{s(),K()})))()}function DS(){return(DS=e((()=>{s(),K()})))()}function OS(){return(OS=e((()=>{s(),K()})))()}function kS(){return(kS=e((()=>{s(),K()})))()}function AS(){return(AS=e((()=>{s(),K()})))()}function jS(){return(jS=e((()=>{s(),K()})))()}function MS(){return(MS=e((()=>{s(),K()})))()}function NS(){return(NS=e((()=>{s(),K()})))()}function PS(){return(PS=e((()=>{s(),K()})))()}function FS(){return(FS=e((()=>{s(),K()})))()}function IS(){return(IS=e((()=>{s(),K()})))()}function LS(){return(LS=e((()=>{s(),K()})))()}function RS(){return(RS=e((()=>{s(),K()})))()}function zS(){return(zS=e((()=>{s(),K()})))()}function BS(){return(BS=e((()=>{s(),K()})))()}function VS(){return(VS=e((()=>{s(),K()})))()}function HS(){return(HS=e((()=>{s(),K()})))()}function US(){return(US=e((()=>{s(),K()})))()}function WS(){return(WS=e((()=>{s(),K()})))()}function GS(){return(GS=e((()=>{s(),K()})))()}function KS(){return(KS=e((()=>{s(),K()})))()}function qS(){return(qS=e((()=>{s(),K()})))()}function JS(){return(JS=e((()=>{s(),K()})))()}function YS(){return(YS=e((()=>{s(),K()})))()}function XS(){return(XS=e((()=>{s(),K()})))()}function ZS(){return(ZS=e((()=>{s(),K()})))()}function QS(){return(QS=e((()=>{s(),K()})))()}function $S(){return($S=e((()=>{s(),K()})))()}var eC;function tC(){return(tC=e((()=>{s(),K(),eC=({slot:e,title:t,className:n,width:i=`24`,height:a=`24`,styles:o}={})=>c`
  <svg
    slot=${G(e)}
    class=${`x-close-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${a}
    style=${G(o)}
  >
    ${q(t,()=>r`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})))()}function nC(){return(nC=e((()=>{s(),K()})))()}function rC(){return(rC=e((()=>{s(),K()})))()}function iC(){return(iC=e((()=>{s(),K()})))()}function aC(){return(aC=e((()=>{s(),K()})))()}function oC(){return(oC=e((()=>{s(),K()})))()}function sC(){return(sC=e((()=>{s(),K()})))()}function cC(){return(cC=e((()=>{s(),K()})))()}function lC(){return(lC=e((()=>{s(),K()})))()}function uC(){return(uC=e((()=>{s(),K()})))()}function dC(){return(dC=e((()=>{bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC()})))()}var fC;function pC(){return(pC=e((()=>{s(),V(),h(),fC=qe(class extends Je{constructor(e){if(super(e),e.type!==B.PROPERTY&&e.type!==B.ATTRIBUTE&&e.type!==B.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!i(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===d||t===o)return t;let n=e.element,r=e.name;if(e.type===B.PROPERTY){if(t===n[r])return d}else if(e.type===B.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return d}else if(e.type===B.ATTRIBUTE&&n.getAttribute(r)===t+``)return d;return g(e),t}})})))()}var mC;function hC(){return(hC=e((()=>{U(),mC=fe(M`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})))()}var gC;function _C(){return(_C=e((()=>{hC(),U(),s(),gC=M`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,H(()=>c`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[mC,gC]}))})))()}var vC;function yC(){return(yC=e((()=>{U(),vC=fe(M`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})))()}var bC,xC;function SC(){return(SC=e((()=>{U(),s(),_C(),yC(),bC=(e,t,n)=>m(c`<cosmoz-tooltip-content>
			${q(t,()=>c`<strong slot="heading">${t}</strong>`)}
			${q(n,()=>c`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),xC=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=z(),l=!!(r||i)&&!s;F(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(vC)||(t.adoptedStyleSheets=[...u,vC]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,bC(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),F(()=>{n&&c.current&&bC(c.current,r,i)},[r,i,n]),F(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var CC;function wC(){return(wC=e((()=>{U(),CC=e=>{let[t,n]=R(!1);return F(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var TC,EC;function DC(){return(DC=e((()=>{hC(),U(),s(),pt(),_C(),yC(),SC(),wC(),TC=M`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,EC=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:a=300,disabled:s=!1}=e,l=z(),u=z(),d=z(),f=CC(d),p=!!(t||n||f)&&!s,m=L(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},a))},[a,p]);F(()=>{s&&(clearTimeout(u.current),l.current?.hidePopover())},[s]);let h=L(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return F(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[r,m,h]),xC(e,{for:r,heading:t,description:n,placement:i,delay:a,disabled:s}),r?o:p?c`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${W(l)}
		>
			<cosmoz-tooltip-content>
				${q(t,()=>c`<strong slot="heading">${t}</strong>`)}
				${q(n,()=>c`<p slot="description">${n}</p>`)}
				<slot name="content" ${W(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:c`
			<slot></slot>
			<slot name="content" ${W(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,H(EC,{styleSheets:[mC,vC,TC],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function OC(){return(OC=e((()=>{DC()})))()}var kC,AC;function jC(){return(jC=e((()=>{dC(),OC(),s(),kC=(e,{hint:t,label:n,invalid:r,errorMessage:i,compact:a,required:o})=>c`
		<!-- label: hidden in compact mode -->
		${q(!a&&n,()=>c`<label for="input" part="label"
					>${n}
					${q(o,()=>c`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${q(a&&r&&i,()=>c`<cosmoz-tooltip
						placement="top"
						description=${i}
						delay="300"
					>
						${rp({width:`16px`,height:`16px`})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${q(!a&&t&&!r,()=>c`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${q(!a&&r&&i,()=>c`<span class="error" part="error">${i}</span>`)}
	`,AC=[`autocomplete`,`readonly`,`disabled`,`maxlength`,`invalid`]})))()}var MC;function NC(){return(NC=e((()=>{dt(),MC=st`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		margin-bottom: calc(var(--cz-spacing) * 6);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		cursor: not-allowed;
	}

	:host([invalid]) {
		caret-color: var(--cz-color-text-error);
	}

	:host([invalid]) .required,
	.error {
		color: var(--cz-color-text-error);
	}

	/* === Layout === */

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: var(--cz-radius-md);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
		transition-duration: 0.1s;
		transition-timing-function: linear;
		transition-property: box-shadow, background;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: inset 0 0 0 1px var(--cz-color-border-error);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error);
	}

	.control {
		flex: 1;
		position: relative;
	}

	/* === Input === */

	#input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
		color: var(--cz-color-text-primary);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	.error {
		font-size: var(--cz-text-xs);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	/* === Tooltip (fluid error indicator) === */

	cosmoz-tooltip {
		display: flex;
		align-items: center;
		margin-right: calc(var(--cz-spacing) * 2);
	}

	:host([invalid]) cosmoz-tooltip {
		color: var(--cz-color-text-error);
	}

	:host([variant='inline']) cosmoz-tooltip {
		display: none;
	}

	/* === Slots === */

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	/* === Variant: inline === */
	:host([variant='inline']) {
		margin-bottom: 0;
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		box-shadow: none;
		padding-inline: 0;
	}

	:host([variant='inline']) .wrap:has(#input:focus) {
		box-shadow: none;
	}

	:host([variant='inline']) .hint,
	:host([variant='inline']) .error {
		display: none;
	}
	:host([variant='inline'][disabled]) label {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host([variant='inline']) label {
		position: absolute;
		top: 25%;
		left: 0;
		width: 100%;
		pointer-events: none;
		transform-origin: left;
		transition:
			transform 0.25s,
			width 0.25s;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}

	:host([variant='inline']:focus-within) label,
	:host([variant='inline'][has-value]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([variant='inline']) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(0);
		}
	}

	/* === Variant: cell === */

	:host([variant='cell']) {
		margin-bottom: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host([variant='cell']) .wrap:has(#input) {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap:has(#input) {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
		left: calc(var(--cz-spacing) * 3);
		bottom: 50%;
		transform: translateY(50%);
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: calc(100% - calc(var(--cz-spacing) * 6));
	}

	:host([variant='cell']:focus-within) .error,
	:host([variant='cell'][has-value]) .error {
		visibility: hidden;
	}

	/* === No spinner === */

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* === Autosize === */

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		--_pad: calc(var(--cz-spacing) * 12);
		min-width: calc(2ch + var(--_pad));
		width: calc(var(--chars) + var(--_pad));
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px + var(--_pad));
		min-width: calc(2ch + 0.25em + 15px + var(--_pad));
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: calc(var(--width) + var(--_pad));
		min-width: calc(2ch + 0.25em + var(--_pad));
	}
	slot[name='prefix']::slotted(*) {
		padding-inline-start: calc(var(--cz-spacing) * 2);
	}

	slot[name='suffix']::slotted(*) {
		padding-inline-end: calc(var(--cz-spacing) * 2);
	}
`})))()}var PC;function FC(){return(FC=e((()=>{U(),PC=e=>I(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var IC;function LC(){return(LC=e((()=>{U(),IC=N(class extends P{values;constructor(e,t,n,r){super(e,t),Object.assign(t.host,n),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var RC;function zC(){return(zC=e((()=>{U(),RC=N(class extends P{update(){return this.state.host}})})))()}var BC,VC,HC;function UC(){return(UC=e((()=>{U(),zC(),BC=/([A-Z])/gu,VC=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(BC,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},HC=(e,t,n=[t])=>{let r=RC();F(()=>{VC(r,e,t)},n)}})))()}var WC;function GC(){return(GC=e((()=>{LC(),UC(),U(),WC=e=>{let t=z(void 0),n=L(e=>t.current=e,[]),r=e.shadowRoot,i=L(t=>e.dispatchEvent(new Event(t.type,{bubbles:t.bubbles})),[]),a=L(t=>VC(e,`value`,t.target.value),[]),o=L(t=>VC(e,`focused`,t.type===`focus`),[]),s=L(()=>{let n=t.current?.checkValidity();return e.toggleAttribute(`invalid`,!n),n},[]);return IC({validate:s},[s]),F(()=>{let e=e=>{e.composedPath()[0]?.closest?.(`input, textarea, label`)||(e.preventDefault(),t.current?.focus())};return r.addEventListener(`mousedown`,e),()=>r.removeEventListener(`mousedown`,e)},[]),{onChange:i,onFocus:o,onInput:a,onRef:n}}})))()}var KC,qC;function JC(){return(JC=e((()=>{KC=({placeholder:e})=>e||` `,qC=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var YC,XC;function ZC(){return(ZC=e((()=>{U(),s(),K(),pC(),pt(),jC(),NC(),FC(),GC(),JC(),YC=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...AC],XC=e=>{let{type:t=`text`,pattern:n,allowedPattern:r,autocomplete:i,value:a,readonly:o,disabled:s,min:l,max:u,step:d,maxlength:f,required:p}=e,{onChange:m,onFocus:h,onInput:g,onRef:_}=WC(e),v=PC(r);return e.toggleAttribute(`has-value`,!!a),kC(c`
			<input
				${W(_)}
				style="--chars: ${a?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${G(n)}
				autocomplete=${G(i)}
				placeholder=${KC({placeholder:e.placeholder})}
				?readonly=${o}
				aria-disabled=${s?`true`:`false`}
				?disabled=${s}
				?required=${p}
				.value=${fC(a??``)}
				maxlength=${G(f)}
				@beforeinput=${v}
				@input=${g}
				@change=${m}
				@focus=${h}
				@blur=${h}
				min=${G(l)}
				max=${G(qC(t,u))}
				step=${G(d)}
			/>
		`,e)},customElements.define(`cosmoz-input`,H(XC,{observedAttributes:YC,styleSheets:[fe(MC)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var QC,$C,ew;function tw(){return(tw=e((()=>{U(),QC=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},$C=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},ew=e=>{let{value:t,maxRows:n}=e,r=I(()=>()=>e.shadowRoot.querySelector(`#input`),[]);F(()=>$C(r(),n),[n,r]),F(()=>QC(r()),[r,t]),F(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>QC(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})))()}var nw,rw;function iw(){return(iw=e((()=>{s(),K(),pC(),pt(),U(),jC(),NC(),tw(),GC(),nw=[`rows`,`placeholder`,`label`,`hint`,`required`,...AC],rw=e=>{let{autocomplete:t,value:n,placeholder:r,readonly:i,disabled:a,rows:o,cols:s,maxlength:l}=e,{onChange:u,onFocus:d,onInput:f,onRef:p}=WC(e);return ew(e),kC(c`
			<textarea id="input" part="input"
				${W(p)}
				autocomplete=${G(t)}
				placeholder=${r||` `}
				rows=${o??1} cols=${G(s)}
				?readonly=${i} ?aria-disabled=${a} ?disabled=${a}
				.value=${fC(n??``)} maxlength=${G(l)} @input=${f}
				@change=${u} @focus=${d} @blur=${d}>`,e)},customElements.define(`cosmoz-textarea`,H(rw,{observedAttributes:nw,styleSheets:[fe(MC)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var aw,ow,sw;function cw(){return(cw=e((()=>{U(),pC(),aw=e=>{let{label:t,value:n,disabled:r,error:i}=e,a=L(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return c`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${fC(!!n)}
			?disabled=${r}
			@change=${a}
		/>
		${q(t,()=>c`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${q(i,e=>c`<div class="failure">${e}</div>`)} `},ow=M`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,sw=M`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: calc(var(--cz-spacing) * 1);
	}
`,customElements.define(`cosmoz-toggle`,H(aw,{styleSheets:[sw,ow],observedAttributes:[`label`,`disabled`,`error`]}))})))()}function lw(){return(lw=e((()=>{ZC(),iw(),cw(),GC(),jC(),NC()})))()}function uw(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===Rw?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function dw(e,t){let{[Rw]:n}=e(uw()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var J,fw,pw,mw,hw,gw,_w,vw,yw,bw,xw,Sw,Cw,ww,Tw,Ew,Dw,Ow,kw,Aw,jw,Mw,Nw,Pw,Y,Fw,Iw,Lw,Rw,zw,Bw,Vw,Hw,Uw,Ww,Gw,Kw,qw,Jw,Yw,Xw,Zw,Qw,$w,eT,tT,nT,rT,iT,X,Z;function aT(){return(aT=e((()=>{J=e=>typeof e==`string`,fw=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},pw=e=>e==null?``:String(e),mw=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},hw=/###/g,gw=e=>e&&e.includes(`###`)?e.replace(hw,`.`):e,_w=e=>!e||J(e),vw=(e,t,n)=>{let r=J(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(_w(e))return{};let t=gw(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return _w(e)?{}:{obj:e,k:gw(r[i])}},yw=(e,t,n)=>{let{obj:r,k:i}=vw(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=vw(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=vw(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},bw=(e,t,n,r)=>{let{obj:i,k:a}=vw(e,t,Object);i[a]=i[a]||[],i[a].push(n)},xw=(e,t)=>{let{obj:n,k:r}=vw(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},Sw=(e,t,n)=>{let r=xw(e,n);return r===void 0?xw(t,n):r},Cw=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?J(e[r])||e[r]instanceof String||J(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Cw(e[r],t[r],n):e[r]=t[r]);return e},ww=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),Tw={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},Ew=e=>J(e)?e.replace(/[&<>"'\/]/g,e=>Tw[e]):e,Dw=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},Ow=[` `,`,`,`?`,`!`,`;`],kw=new Dw(20),Aw=(e,t,n)=>{t||=``,n||=``;let r=Ow.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=kw.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},jw=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},Mw=e=>e?.replace(/_/g,`-`),Nw={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},Pw=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||Nw,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>J(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),J(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Y=new Pw,Fw=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},Iw=class extends Fw{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):J(n)&&i?o.push(...n.split(i)):o.push(n)));let s=xw(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!J(n)?s:jw(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),yw(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(J(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=xw(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?Cw(s,n,i):s={...s,...n},yw(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},Lw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},Rw=Symbol(`i18next/PATH_KEY`),zw=e=>!J(e)&&typeof e!=`boolean`&&typeof e!=`number`,Bw=class e extends Fw{constructor(e,t={}){super(),mw([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=Y.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=zw(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Aw(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:J(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:J(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=dw(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?dw(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!J(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=zw(E),ee=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(ee)&&!(J(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;t[e]=x&&!m?this.translate(r,{...i,defaultValue:zw(T)?T[e]:void 0,joinArrays:!1,ns:c}):this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&J(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=J(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!J(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=J(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=Lw.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return J(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?dw(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!J(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(J(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!J(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},Vw=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Y.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=Mw(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=Mw(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(J(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),J(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||J(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=J(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return J(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):J(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{l.includes(e)||u(this.formatLanguageCode(e))}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},Hw={zero:0,one:1,two:2,few:3,many:4,other:5},Uw={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},Ww=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Y.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=Mw(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),Uw;if(!e.match(/-|_/))return Uw;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>Hw[e]-Hw[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},Gw=(e,t,n,r=`.`,i=!0)=>{let a=Sw(e,t,n);return!a&&i&&J(n)&&(a=jw(e,n,r),a===void 0&&(a=jw(t,n,r))),a},Kw=e=>e.replace(/\$/g,`$$$$`),qw=class{constructor(e={}){this.logger=Y.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?Ew:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?ww(i):a||`{{`,this.suffix=o?ww(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?ww(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?ww(l):``,this.nestingPrefix=d?ww(d):f||ww(`$t(`),this.nestingSuffix=p?ww(p):m||ww(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=Gw(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Gw(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0){if(typeof l==`function`){let t=l(e,i,r);a=J(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``}else!J(a)&&!this.useRawValueToEscape&&(a=pw(a));let s=t.safeValue(a);if(e=e.replace(i[0],Kw(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${ww(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!J(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!J(i))return i;J(i)||(i=pw(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],Kw(pw(i))),this.regexp.lastIndex=0}return e}},Jw=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},Yw=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(Mw(r),i),t[o]=s),s(n)}},Xw=e=>(t,n,r)=>e(Mw(n),r)(t),Zw=class{constructor(e={}){this.logger=Y.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?Yw:Xw;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Yw(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=Jw(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},Qw=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},$w=class extends Fw{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Y.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{bw(n.loaded,[i],a),Qw(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();J(e)&&(e=this.languageUtils.toResolveHierarchy(e)),J(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(n!=null&&n!==``){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}},eT=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),J(e[1])&&(t.defaultValue=e[1]),J(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),tT=e=>(J(e.ns)&&(e.ns=[e.ns]),J(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),J(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),nT=()=>{},rT=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},iT=class e extends Fw{constructor(e={},t){if(super(),this.options=tT(e),this.services={},this.logger=Y,this.modules={external:[]},rT(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(J(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=eT();this.options={...n,...this.options,...tT(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?Y.init(r(this.modules.logger),this.options):Y.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:Zw;let t=new Vw(this.options);this.store=new Iw(this.options.resources,this.options);let n=this.services;n.logger=Y,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new Ww(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new qw(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new $w(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new Bw(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=nT,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=fw(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=nT){let n=t,r=J(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=fw();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=nT,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&Lw.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=fw();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=J(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(J(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=dw(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=dw(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=dw(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return J(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=fw();return this.options.ns?(J(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=fw();J(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new Vw(eT());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=nT){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r){let e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});a.store=new Iw(e,i),a.services.resourceStore=a.store}if(t.interpolation){let e={...eT().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new qw(n)}return a.translator=new Bw(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},X=iT.createInstance(),X.createInstance,X.dir,X.init,X.loadResources,X.reloadResources,X.use,X.changeLanguage,X.getFixedT,Z=X.t,X.exists,X.setDefaultNamespace,X.hasLoadedNamespace,X.loadNamespaces,X.loadLanguages})))()}var oT,sT;function cT(){return(cT=e((()=>{s(),V(),oT={},sT=qe(class extends Je{constructor(){super(...arguments),this.ot=oT}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return d}else if(this.ot===t)return d;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})))()}var lT,uT;function dT(){return(dT=e((()=>{lT=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},uT=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})))()}var fT,pT,mT,hT;function gT(){return(gT=e((()=>{s(),h(),nt(),dT(),V(),fT=e=>!p(e)&&typeof e.then==`function`,pT=1073741823,mT=class extends tt{constructor(){super(...arguments),this._$Cwt=pT,this._$Cbt=[],this._$CK=new lT(this),this._$CX=new uT}render(...e){return e.find(e=>!fT(e))??d}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let o=t[e];if(!fT(o))return this._$Cwt=e,o;e<r&&o===n[e]||(this._$Cwt=pT,r=0,Promise.resolve(o).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(t!==void 0){let n=t._$Cbt.indexOf(o);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return d}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},hT=qe(mT)})))()}function _T(){return(_T=e((()=>{nt()})))()}var vT,yT;function bT(){return(bT=e((()=>{s(),V(),h(),vT=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},yT=qe(class extends Je{constructor(e){if(super(e),e.type!==B.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=_(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,p,m=0,h=i.length-1,y=0,b=a.length-1;for(;m<=h&&y<=b;)if(i[m]===null)m++;else if(i[h]===null)h--;else if(s[m]===o[y])c[y]=u(i[m],a[y]),m++,y++;else if(s[h]===o[b])c[b]=u(i[h],a[b]),h--,b--;else if(s[m]===o[b])c[b]=u(i[m],a[b]),v(e,c[b+1],i[m]),m++,b--;else if(s[h]===o[y])c[y]=u(i[h],a[y]),v(e,i[m],i[h]),h--,y++;else if(l===void 0&&(l=vT(o,y,b),p=vT(s,m,h)),l.has(s[m])){if(l.has(s[h])){let t=p.get(o[y]),n=t===void 0?null:i[t];if(n===null){let t=v(e,i[m]);u(t,a[y]),c[y]=t}else c[y]=u(n,a[y]),v(e,i[m],n),i[t]=null;y++}else f(i[h]),h--}else f(i[m]),m++;for(;y<=b;){let t=v(e,c[b+1]);u(t,a[y]),c[y++]=t}for(;m<=h;){let e=i[m++];e!==null&&f(e)}return this.ut=o,g(e,c),d}})})))()}function xT(){return(xT=e((()=>{bT()})))()}var ST,CT,wT;function TT(){return(TT=e((()=>{ST=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},ST.eventName=`rangeChanged`,CT=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}},CT.eventName=`visibilityChanged`,wT=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}},wT.eventName=`unpinned`})))()}var ET,DT;function OT(){return(OT=e((()=>{ET=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},DT=class extends ET{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}}})))()}function kT(e){let t=window.getComputedStyle(e);return{marginTop:AT(t.marginTop),marginRight:AT(t.marginRight),marginBottom:AT(t.marginBottom),marginLeft:AT(t.marginLeft)}}function AT(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function jT(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function MT(e,t=!1){let n=[],r=t?e:jT(e);for(;r!==null;)n.push(r),r=jT(r);return n}function NT(e,t=!1){let n=!1;return MT(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var PT,FT,IT,LT,RT;function zT(){return(zT=e((()=>{TT(),OT(),t(),PT=typeof window<`u`?window.ResizeObserver:void 0,FT=Symbol(`virtualizerRef`),IT=`virtualizer-sizer`,RT=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new PT(()=>this._hostElementSizeChanged()),this._childrenRO=new PT(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[FT]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=NT(this._hostElement,e),this._scrollerController=new DT(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${IT}]`);t||(t=document.createElement(`div`),t.setAttribute(IT,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(IT,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||LT;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type==`function`){r=e.type;let n={...e};delete n.type,t=n}else t=e;r===void 0&&(LT=r=(await n(async()=>{let{FlowLayout:e}=await import(`./flow-BcvU3Oud.js`);return{FlowLayout:e}},__vite__mapDeps([0,1]),import.meta.url)).FlowLayout),this._layout=new r(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},kT(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new wT)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(IT)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new ST({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new CT({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}})))()}var BT,VT,HT,UT;function WT(){return(WT=e((()=>{a(),V(),_T(),xT(),zT(),BT=e=>e,VT=(e,t)=>c`${t}: ${JSON.stringify(e,null,2)}`,HT=class extends tt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>VT(e,t+this._first),this._keyFunction=(e,t)=>BT(e,t+this._first),this._items=[],e.type!==B.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return yT(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?d:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new RT({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}},UT=qe(HT)})))()}var GT,KT,qT;function JT(){return(JT=e((()=>{s(),V(),GT=(e,t)=>{if(!e||!t)return;let n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(e=>n.includes(e)?[]:[[e,void 0]]))},KT=class extends Je{_props;render(e){return d}update(e,[t]){return this._props!==t&&Object.assign(e.element,GT(this._props,t),this._props=t),d}},qT=qe(KT)})))()}function YT(e){return()=>e}var XT,ZT,QT,$T;function Q(){return(Q=e((()=>{XT=YT(),ZT=XT,QT=e=>e,$T=(e,...t)=>typeof e==`function`?e(...t):e})))()}var eE;function tE(){return(tE=e((()=>{U(),zC(),eE=e=>{let t=RC(),n=I(()=>new CSSStyleSheet,[]);F(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),F(()=>{n.replaceSync(e)},[e])}})))()}function nE(e){return e?t=>typeof t==`object`&&t?t[e]:t:QT}var rE,iE;function aE(){return(aE=e((()=>{Q(),rE=e=>{let t=nE(e);return e=>typeof e==`string`?e:t(e)?.toString()||``},iE=e=>t=>{let n={};for(let r in t)e.includes(r)&&(n[r]=t[r]);return n}})))()}var oE,sE;function cE(){return(cE=e((()=>{U(),oE=M`
	:host {
		display: block;
		font-family: var(--cz-font-body);
		background: var(--cz-color-bg-primary);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		padding-block: var(--cz-spacing);
	}
	.items {
		position: relative;
		overflow-y: auto;
		scrollbar-width: thin;
		contain: layout paint !important;
		padding-inline: calc(var(--cz-spacing) * 1.5);
		min-width: calc(var(--cz-spacing) * 20);
	}
	:host(:focus-within) {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	.items:focus-visible {
		outline: none;
	}
	.item {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		box-sizing: border-box;
		border-radius: var(--cz-radius-sm);
		width: calc(100% - var(--cz-spacing) * 3);
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.25s;
		color: var(--cz-color-text-primary);
		overflow: hidden;
		padding-inline: calc(var(--cz-spacing) * 2);
		margin-block: 1px;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 calc(var(--cz-spacing) * 5);
		overflow: hidden;
		max-width: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host(:not([multi])) .item[aria-selected] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.25)
		);
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: calc(var(--cz-spacing) * 2);
		margin-right: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-tertiary);
		border: 1px solid var(--cz-color-bg-quaternary);
		border-radius: var(--cz-radius-xs);
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: var(--cz-color-bg-brand-solid);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,sE=({index:e,itemHeight:t,auto:n})=>M`
	${q(!n,()=>M`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}
	.item[data-index='${e||`0`}'] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.15)
		);
	}
	.item[data-index='${e||`0`}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`})))()}var lE;function uE(){return(uE=e((()=>{U(),lE=e=>{let t=e===`auto`,[n,r]=R(t?40:e);return[n,e=>t?r(e):void 0]}})))()}function dE(){return(dE=e((()=>{})))()}var fE;function pE(){return(pE=e((()=>{U(),Q(),fE=it(()=>ZT),customElements.define(`cosmoz-keybinding-provider`,fE.Provider)})))()}var mE;function hE(){return(hE=e((()=>{U(),mE=e=>{let t=I(()=>({}),[]);return I(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var gE;function _E(){return(_E=e((()=>{U(),pE(),hE(),gE=(e,t)=>{let n=Ee(fE),r=mE(e);F(()=>n(r),t)}})))()}function vE(){return(vE=e((()=>{U(),hE()})))()}function yE(){return(yE=e((()=>{dE(),pE(),_E(),vE()})))()}var bE,xE,SE,CE;function wE(){return(wE=e((()=>{bE=Symbol(`listbox.navigate.up`),xE=Symbol(`listbox.navigate.down`),SE=Symbol(`listbox.select`),CE=[[{key:`ArrowUp`},[bE],{title:`Navigate up`,description:`Move to previous listbox item`},{allowInEditable:!0}],[{key:`ArrowDown`},[xE],{title:`Navigate down`,description:`Move to next listbox item`},{allowInEditable:!0}],[{key:`Enter`},[SE],{title:`Select`,description:`Select current listbox item`},{allowInEditable:!0}]]})))()}var TE;function EE(){return(EE=e((()=>{zC(),yE(),wE(),TE=({onUp:e,onDown:t,onEnter:n})=>{let r=RC();gE({activity:bE,callback:e,element:()=>r},[]),gE({activity:xE,callback:t,element:()=>r},[]),gE({activity:SE,callback:n,element:()=>r},[])}})))()}var DE;function OE(){return(OE=e((()=>{U(),EE(),DE=({items:e,onSelect:t,defaultIndex:n=0})=>{let[r,i]=R({index:n}),{index:a}=r,{length:o}=e;return F(()=>{i({index:r.index<0?n:Math.min(r.index,e.length-1),scroll:!0})},[e,n]),TE({onUp:L(()=>i(e=>({index:e.index>0?e.index-1:o-1,scroll:!0})),[o]),onDown:L(()=>i(e=>({index:e.index<o-1?e.index+1:0,scroll:!0})),[o]),onEnter:L(()=>a>-1&&a<o&&t?.(e[a],a),[a,e,t])}),{position:r,highlight:L(e=>i({index:e}),[]),select:L(e=>t?.(e),[t])}}})))()}function kE(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:AE(e)?Array.from(e):[e]}var AE,jE;function ME(){return(ME=e((()=>{Q(),AE=e=>typeof e==`object`&&!!e&&Symbol.iterator in e,jE=(e,t=QT)=>n=>{let r=kE(e).map(t);return kE(n).filter(e=>!r.includes(t(e)))}})))()}var NE,PE;function FE(){return(FE=e((()=>{ME(),s(),NE=(e,t)=>t?n=>n!=null&&kE(e).find(e=>e[t]===n[t]):t=>t!=null&&kE(e).includes(t),PE=(e,t)=>{if(!t||!e)return e;let n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;let r=n+t.length;return[e.slice(0,n),c`<mark>${e.slice(n,r)}</mark>`,e.slice(r)]}})))()}var IE;function LE(){return(LE=e((()=>{Q(),s(),FE(),IE=(e=QT)=>(t,n,{highlight:r,select:i,textual:a=QT,query:o,isSelected:s})=>{let l=a(t),u=e(PE(l,o),t,n);return c`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${s(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},IE()})))()}var RE;function zE(){return(zE=e((()=>{hE(),U(),LE(),RE=({itemRenderer:e=IE(),...t})=>{let n=mE(t);return L((t,r)=>e(t,r,n),[n,e])}})))()}var BE,VE;function HE(){return(HE=e((()=>{U(),uE(),OE(),zE(),FE(),BE=[`query`,`items`,`onSelect`,`textual`,`anchor`,`itemHeight`,`itemLimit`,`itemRenderer`,`defaultIndex`,`value`,`valueProperty`,`loading`],VE=({value:e,valueProperty:t,items:n,onSelect:r,defaultIndex:i,query:a,textual:o,itemRenderer:s,itemHeight:c=40,itemLimit:l=5})=>{let u=I(()=>NE(e,t),[e,t]),d=I(()=>n.slice(),[n,u]),{position:f,highlight:p,select:m}=DE({items:d,onSelect:r,defaultIndex:isNaN(i)?void 0:Number(i)}),[h,g]=lE(c);return{position:f,items:d,height:Math.min(l,d.length)*h,highlight:p,select:m,itemHeight:h,setItemHeight:g,renderItem:RE({itemRenderer:s,items:d,position:f,highlight:p,select:m,textual:o,query:a,isSelected:u})}}})))()}var UE,WE,GE;function KE(){return(KE=e((()=>{WT(),dt(),JT(),Q(),tE(),aE(),U(),pt(),cE(),HE(),UE=ZT,WE=e=>{let t=z(void 0),{position:n,items:r,renderItem:i,height:a,itemHeight:o,setItemHeight:s}=VE(e);return F(()=>{let n=t.current?.[FT];n&&n.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent(`layout-complete`));let{averageChildSize:t,averageMarginSize:r}=n._layout._metricsCache;return s(t+r*2)},UE)},[r]),F(()=>{if(!n.scroll)return;let e=t.current?.[FT];if(e){if(!e?._layout){e.layoutComplete.then(()=>e.element(n.index)?.scrollIntoView({block:`nearest`}),UE);return}e.element(n.index)?.scrollIntoView({block:`nearest`})}},[n]),eE(sE({...n,itemHeight:o,auto:e.itemHeight===`auto`})),c`<div
			class="items"
			style="min-height: ${a}px"
			${W(e=>t.current=e)}
		>
			<div virtualizer-sizer></div>
			${UT({items:r,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`},customElements.define(`cosmoz-listbox`,H(WE,{styleSheets:[lt(oE)]})),GE=({multi:e,...t},n)=>c`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${qT(iE(BE)(t))}
		>${n}</cosmoz-listbox
	>`})))()}var $,qE;function JE(){return(JE=e((()=>{U(),$=e=>`calc(var(--cz-spacing) * ${e})`,qE=M`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${$(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${$(.5)} ${$(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-brand-50);
		color: var(--cz-color-brand-800);
		border-color: var(--cz-color-brand-300);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
	}

	:host([color='processing']) .badge {
		background-color: var(--cz-color-indigo-100);
		color: var(--cz-color-indigo-800);
		border-color: var(--cz-color-indigo-300);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${$(.5)} ${$(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${$(.5)} ${$(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${$(1)};
	}

	:host([size='lg']) .badge {
		padding: ${$(1)} ${$(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${$(.5)} ${$(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${$(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${$(1)} ${$(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${$(2)};
		height: ${$(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) .dot {
		background-color: var(--cz-color-indigo-800);
	}
	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${$(.5)} ${$(2.5)} ${$(.5)} ${$(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${$(.5)} ${$(2)} ${$(.5)} ${$(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${$(1)} ${$(3)} ${$(1)} ${$(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${$(.5)} ${$(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${$(.5)} ${$(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${$(1)} ${$(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${$(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${$(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${$(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${$(4)};
		height: ${$(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${$(3)};
		height: ${$(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${$(5)};
		height: ${$(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${$(3)};
		height: ${$(3)};
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) ::slotted(svg) {
		color: var(--cz-color-indigo-800);
	}
`})))()}var YE;function XE(){return(XE=e((()=>{hC(),U(),JE(),YE=()=>c`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`,customElements.define(`cosmoz-badge`,H(YE,{styleSheets:[mC,qE]}))})))()}function ZE(){return(ZE=e((()=>{XE()})))()}var QE,$E;function eD(){return(eD=e((()=>{U(),QE=e=>`calc(var(--cz-spacing) * ${e})`,$E=M`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	.close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition: opacity 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;
	}

	.close:hover {
		opacity: 1;
	}

	.close:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${QE(2.5)};
		height: ${QE(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${QE(3)};
		height: ${QE(3)};
	}

	:host([size='lg']) .close svg {
		width: ${QE(3.5)};
		height: ${QE(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${QE(3.5)};
		height: ${QE(3.5)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`})))()}var tD;function nD(){return(nD=e((()=>{ZE(),dC(),hC(),U(),K(),eD(),tD=e=>{let{color:t,size:n,disabled:r,removable:i}=e,a=()=>{r||e.dispatchEvent(new CustomEvent(`remove`))};return c`<cosmoz-badge
		color=${G(t)}
		size=${G(n)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${q(i,()=>c` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${e=>e.preventDefault()}
					@click=${a}
				>
					${eC()}
				</button>`)}
	</cosmoz-badge>`},customElements.define(`cosmoz-tag`,H(tD,{observedAttributes:[`color`,`size`,`disabled`,`removable`],styleSheets:[mC,$E]}))})))()}function rD(){return(rD=e((()=>{nD()})))()}var iD;function aD(){return(aD=e((()=>{rD(),U(),K(),iD=({content:e,onClear:t,disabled:n,className:r=`chip`,hidden:i,slot:a})=>c`<cosmoz-tag
		class=${G(r)}
		slot=${G(a)}
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		?removable=${!!t&&!n}
		@remove=${t}
		title=${G(typeof e==`string`?e:void 0)}
		>${e}</cosmoz-tag
	>`})))()}var oD;function sD(){return(sD=e((()=>{s(),aD(),oD=({value:e,min:t=0,onDeselect:n,textual:r,disabled:i,chipRenderer:a=iD})=>[...e.filter(Boolean).map(o=>a({item:o,content:r(o),onClear:e.length>t&&(()=>n(o)),disabled:i,slot:`control`})),a({item:null,content:c`<span></span>`,className:`badge`,disabled:!0,slot:`control`,hidden:!0})]})))()}var cD;function lD(){return(lD=e((()=>{U(),s(),cD=M`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`,customElements.define(`cosmoz-autocomplete-skeleton-span`,H(()=>o,{styleSheets:[cD]}))})))()}var uD;function dD(){return(dD=e((()=>{dt(),uD=st`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag:not([hidden]))::part(
			label
		) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input[data-one] cosmoz-tag {
		max-width: calc(100% - 16px);
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`})))()}var fD,pD;function mD(){return(mD=e((()=>{fD=(e,t=()=>({}))=>{let n={type:e,toString(){return e}};return Object.assign((...e)=>Object.assign(t(...e),n),n)},pD=e=>e.type||e.toString()})))()}var hD,gD;function _D(){return(_D=e((()=>{mD(),hD=e=>Array.isArray(e)?e:[e],gD=(e,t)=>{let n=hD(t),r=(n.every(Array.isArray)?n:[n]).map(([e,t])=>({actions:hD(e).map(pD),handle:t}));return(t=e,n)=>{let i=r.find(e=>e.actions.includes(pD(n)));return i?i.handle(t,n):t}}})))()}var vD,yD,bD,xD,SD,CD,wD;function TD(){return(TD=e((()=>{U(),_D(),mD(),vD={pending:`pending`,rejected:`rejected`,resolved:`resolved`},yD={error:void 0,result:void 0,state:vD.pending},bD=fD(vD.pending),xD=fD(vD.resolved,e=>({result:e})),SD=fD(vD.rejected,e=>({error:e})),CD=gD(yD,[[bD,()=>({error:void 0,result:void 0,state:vD.pending})],[xD,(e,{result:t})=>({error:void 0,result:t,state:vD.resolved})],[SD,(e,{error:t})=>({error:t,result:void 0,state:vD.rejected})]]),wD=e=>{let[{error:t,result:n,state:r},i]=Ie(CD,yD);return F(()=>{if(!e)return;let t=!1;return i(bD()),e.then(e=>!t&&i(xD(e)),e=>!t&&i(SD(e))),()=>{t=!0}},[e]),[n,t,r]}})))()}var ED,DD;function OD(){return(OD=e((()=>{yE(),wE(),ED=Symbol(`autocomplete.deselect.last`),DD=Symbol(`autocomplete.search.when.selected`),[...CE]})))()}var kD,AD,jD,MD,ND,PD;function FD(){return(FD=e((()=>{kD=e=>e.normalize(`NFD`).replace(/[\u0300-\u036f]/gu,``),AD=(e,t,n)=>{if(!t)return e;let r=kD(t.toLowerCase()),i=[];for(let t of e){let e=kD(n(t).toLowerCase()).indexOf(r);e<0||i.push({item:t,index:e})}return i.sort((e,t)=>e.index-t.index).map(({item:e})=>e)},jD=e=>e===!1||e==null?[]:e,MD=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),ND=[],PD=e=>(...t)=>{let n,r=()=>{n&&cancelAnimationFrame(n)};return r(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),r}})))()}var ID,LD;function RD(){return(RD=e((()=>{ME(),zC(),hE(),TD(),yE(),aE(),U(),OD(),FD(),ID=(e,t,n)=>L(r=>{t?.(r),e.dispatchEvent(new CustomEvent(n,{detail:r}))},[t]),LD=({value:e,text:t,mode:n,onChange:r,onText:i,onSelect:a,limit:o,min:s,source:c,textProperty:l,textual:u,valueProperty:d,keepOpened:f,keepQuery:p,preserveOrder:m,defaultIndex:h,externalSearch:g,disabled:_,lazyOpen:v})=>{let y=o==null?void 0:Number(o),b=s==null?void 0:Number(s),x=n===`select`,S=I(()=>(u??rE)(l),[u,l]),C=RC(),[w,T]=ze(`opened`,!1),E=!t,D=I(()=>t?.trim(),[t]),ee=ID(C,i,`text`),O=L(e=>{r?.(e,()=>T(!1));let t=x?e[0]:e;MD(C,`value`,t)},[r]),[k,te]=R([]),A=!(!v||D),ne=I(()=>A?Promise.resolve([]):Promise.resolve(typeof c==`function`?c({query:D,active:w}):c).then(jD),[c,w,D,A]),re=I(()=>kE(e),[e]);F(()=>ne.then(te),[ne]),gE({activity:ED,callback:()=>{let e=kE(re);e.length>(b??0)&&O(e.slice(0,-1))},check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[]),gE({activity:DD,callback:e=>{let t=kE(re),n=y===1;t.length>0&&n&&e.key.length===1&&O(t.slice(0,-1))},allowDefault:!0,check:()=>!_&&E&&C.matches(`:focus-within`),element:()=>C},[y]),F(()=>{!w&&!p&&ee(``)},[w,p]),F(()=>{C.toggleAttribute(`opened`,!!w)},[w]);let j=mE({onText:ee,onChange:O,value:re,limit:y,min:b,keepQuery:p,keepOpened:f,setOpened:T,onSelect:a,valueProperty:d}),[,,ie]=wD(ne);return{limit:y,opened:w,query:D,textual:S,value:re,source$:ne,loading:ie===`pending`,items:I(()=>{if(!w||A)return ND;let e=m?k:[...re,...jE(re,nE(d))(k)];return g?e:AD(e,D,S)},[k,w,D,S,E,re,m,d,g,A]),onToggle:L(e=>{_||T(e.newState===`open`)},[_]),onText:L(e=>{_||(ee(e.target.value),T(!0))},[_,ee,t,T]),onSelect:L(e=>{if(_)return;j.onSelect?.(e,j);let{onChange:t,onText:n,limit:r,min:i,value:a,keepQuery:o,keepOpened:s,setOpened:c,valueProperty:l}=j;o||n(``),s||c(!1);let u=kE(a),d=nE(l),f=u.some(t=>d(t)===d(e));f&&u.length===i||t((f?jE(e,d)(u):[...u,e]).slice(-r))},[_,j]),onDeselect:L(e=>{_||j.onChange(jE(e,nE(j.valueProperty))(j.value))},[_,j]),defaultIndex:D!==void 0&&D?.length>0?0:h}}})))()}var zD,BD;function VD(){return(VD=e((()=>{zC(),U(),FD(),zD=e=>{let t=e.shadowRoot.querySelectorAll(`.chip`),n=e.shadowRoot.querySelector(`.badge`);if(!n)return;n.hidden=!0;for(let e of t)e.hidden=!1;let r=e.shadowRoot.querySelector(`cosmoz-input`).shadowRoot?.querySelector(`.control`)?.getBoundingClientRect(),i=0;for(;i<t.length;i++){let e=t[i].getBoundingClientRect();if(!(e.x+e.width<=r.x+r.width-24))break}let a=t.length-i;for(n.querySelector(`span`).textContent=`+`+a.toString(),n.hidden=a<1;i<t.length;i++)t[i].hidden=!0},BD=({value:e,opened:t,wrap:n,limit:r})=>{let i=RC(),a=!(n||r===1)&&e.length>0,o=I(()=>PD(()=>zD(i)),[]),[s,c]=R(0);Ne(()=>{if(!a)return;let e=i.shadowRoot.querySelector(`cosmoz-input`),t=new ResizeObserver(e=>{c(e[0].contentRect.width)});return t.observe(e),()=>t.disconnect()},[a]),Ne(()=>a?o():void 0,[a,s,t,e])}})))()}var HD,UD,WD,GD,KD;function qD(){return(qD=e((()=>{yt(),dC(),lw(),aT(),s(),cT(),K(),pC(),gT(),KE(),sD(),lD(),dD(),RD(),VD(),HD=[`input`,`control`,`label`,`line`,`error`,`wrap`].map(e=>`${e}: input-${e}`).join(),UD=({opened:e,isSingle:t,showSingle:n,hasResultsOrQuery:r})=>!e||t&&!n?!1:r,WD=e=>{let{variant:t,opened:n,invalid:r,errorMessage:i,hint:a,label:o,placeholder:s,required:l,disabled:u,textual:d,text:f,onText:p,onToggle:m,onDeselect:h,value:g,limit:_,min:v,showSingle:y,items:b,source$:x,loading:S,chipRenderer:C,mode:w}=e,T=_===1,E=T&&g?.[0]!=null,D=S||b.length>0||f!=null&&f.length>0;return c`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${u}
			.opened=${n}
			@dropdown-toggle=${m}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${o}
				.placeholder=${E?void 0:s}
				hint=${G(a)}
				variant=${G(t)}
				?readonly=${E}
				?disabled=${u}
				?required=${l}
				?invalid=${sT([x,r],()=>hT(x.then(()=>r,()=>!0),r))}
				.errorMessage=${sT([x,i],()=>hT(x.then(()=>i,e=>e.message),i))}
				.value=${fC(f)}
				@value-changed=${p}
				autocomplete="off"
				exportparts=${HD}
				?data-one=${T}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${q(w===`select`,()=>Pa({styles:`margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);`,width:`16`,height:`16`}))}
				</slot>
				${oD({value:g,min:v,isOne:T,onDeselect:h,textual:d,disabled:u,chipRenderer:C})}
			</cosmoz-input>

			${q(UD({opened:n,isSingle:E,showSingle:y,hasResultsOrQuery:D}),()=>GE({...e,items:b,multi:!T},q(S,()=>c`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>q(f!=null&&f.length>0&&b.length===0,()=>c`<slot name="no-result">
											<span class="no-result">${Z(`No results found`)}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},GD=e=>{let t={...e,...LD(e)};return BD(t),WD(t)},KD=[`variant`,`disabled`,`invalid`,`required`,`hint`,`text-property`,`value-property`,`limit`,`min`,`show-single`,`preserve-order`,`keep-opened`,`keep-query`,`default-index`,`external-search`,`item-height`,`item-limit`,`wrap`,`lazy-open`,`mode`]})))()}var JD,YD,XD;function ZD(){return(ZD=e((()=>{dt(),U(),qD(),JD=e=>{let{onChange:t,onText:n,mode:r,...i}=e,a=r===`select`,[o,s]=ze(`value`);return F(()=>{e.onChange!=null&&console.warn(`onChange is deprecated; use value-changed and lift instead`)},[]),GD({...i,...a&&{limit:1,min:1,showSingle:!0},mode:r,value:o,onChange:L((e,...n)=>{s(a?e[0]:e),t?.(e,...n)},[t,a]),onText:L(t=>{e.text=t,n?.(t)},[n])})},YD=[lt(uD)],XD={mode:`open`,delegatesFocus:!0},customElements.define(`cosmoz-autocomplete-ui`,H(GD,{observedAttributes:KD,styleSheets:YD,shadowRootInit:XD})),customElements.define(`cosmoz-autocomplete`,H(JD,{observedAttributes:KD,styleSheets:YD,shadowRootInit:XD}))})))()}var QD;function $D(){return($D=e((()=>{U(),QD=M`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${`data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`})))()}var eO,tO;function nO(){return(nO=e((()=>{eO=e=>({item:e,excluded:!1}),tO=e=>e.item})))()}var rO;function iO(){return(iO=e((()=>{Q(),U(),ZD(),nO(),rO=e=>{let[t,n]=ze(e);return{value:t,setExcludingValue:L(e=>n(t=>{let n=$T(e,t?.map(tO));if(!n)return;if(!t)return n.map(eO);let r=t.reduce((e,t)=>n.includes(t.item)?[...e,t]:t.excluded?e:[...e,{...t,excluded:!0}],[]),i=n.filter(e=>!t.some(t=>t.item===e)).map(eO);return[...r,...i]}),[]),setValue:n}}})))()}var aO,oO,sO,cO,lO;function uO(){return(uO=e((()=>{rD(),U(),K(),ZD(),qD(),$D(),iO(),nO(),aO=(e,t)=>e?.some(e=>e.item===t&&e.excluded),oO=(e,t)=>t&&aO(e,t)?`error`:`gray`,sO=e=>(t,n,{highlight:r,select:i,textual:a,isSelected:o})=>{let s=a(t);return c`<div
				class="item"
				role="option"
				part="option ${oO(e,t)}"
				?aria-selected=${o(t)}
				data-index=${n}
				@mouseenter=${()=>r(n)}
				@click=${()=>i(t)}
				@mousedown=${e=>e.preventDefault()}
			>
				${s}
			</div>
			<div class="sizer" virtualizer-sizer>${s}</div>`},cO=(e,t)=>({item:n,content:r,disabled:i,hidden:a,className:o=`chip`,slot:s})=>c`<cosmoz-tag
			class=${G(o)}
			slot=${G(s)}
			exportparts="chip-text, chip-clear"
			color=${oO(e,n)}
			?disabled=${i}
			?hidden=${a}
			?removable=${!!n}
			@remove=${()=>t(n)}
			title=${G(typeof r==`string`?r:void 0)}
		>
			${r}
		</cosmoz-tag>`,lO=e=>{let{value:t,setValue:n,setExcludingValue:r}=rO(`value`),[i,a]=ze(`text`),o=L(e=>n(t=>t?.filter(t=>t.item!==e)),[]);return GD({...e,value:I(()=>t?.map(tO),[t]),onChange:L(e=>{r(e)},[]),text:i,onText:L(e=>{a(e)},[]),itemRenderer:I(()=>sO(t),[t]),chipRenderer:I(()=>cO(t,o),[t,o])})},customElements.define(`cosmoz-autocomplete-excluding`,H(lO,{observedAttributes:KD,styleSheets:[uD,QD],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function dO(){return(dO=e((()=>{ZD(),uO(),OD()})))()}var fO,pO,mO;function hO(){return(hO=e((()=>{s(),V(),fO=`important`,pO=` !`+fO,mO=qe(class extends Je{constructor(e){if(super(e),e.type!==B.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(pO);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?fO:``):n[e]=r}}return d}})})))()}var gO;function _O(){return(_O=e((()=>{Q(),gO=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})))()}var vO,yO,bO,xO;function SO(){return(SO=e((()=>{U(),bT(),pt(),hO(),cT(),_O(),vO={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},yO=e=>{let{slide:t}=e,[n,r]=R([]);return Ne(()=>void Object.assign(e.style,vO.host),[]),F(()=>{if(t==null)return;let e={animationEnd$:new gO,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),Ne(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},bO=e=>c`<div
		${W(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${mO(vO.slide)}
	>
		${sT([e],()=>e.content??e.render?.(e))}
	</div>`,xO=({slides:e})=>sT([e],()=>yT(e,({id:e})=>e,bO))})))()}var CO;function wO(){return(wO=e((()=>{U(),SO(),CO=e=>xO(yO(e)),customElements.define(`cosmoz-slider`,H(CO,{useShadowDOM:!1}))})))()}var TO,EO;function DO(){return(DO=e((()=>{TO=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},EO=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})))()}function OO(){return(OO=e((()=>{U(),s()})))()}function kO(){return(kO=e((()=>{wO(),OO(),SO()})))()}var AO;function jO(){return(jO=e((()=>{U(),AO=()=>c`<style>
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
	}
</style>`,customElements.define(`cz-spinner`,H(AO))})))()}var MO;function NO(){return(NO=e((()=>{U(),MO=N(class extends P{constructor(e,t){super(e,t),this.dispatchEvent=(...e)=>{t.host.dispatchEvent.apply(t.host,e)}}update(){return this.dispatchEvent}})})))()}var PO,FO,IO,LO,RO;function zO(){return(zO=e((()=>{PO=(e,t,n)=>Math.max(t,Math.min(n,e)),FO=PO,IO=(e,t,n,r)=>n/r<e/t?n/e:r/t,LO=(e,t,n,r)=>n/r>e/t?n/e:r/t,RO=(e,t,n,r,i)=>{let a=IO(e,t,n,r)*i,o=e*a,s=t*a,c=o<n?(-n+o)/2:(n-o)/2,l=o<n?(n-o)/2:(-n+o)/2,u=s<r?(-r+s)/2:(r-s)/2,d=s<r?(r-s)/2:(-r+s)/2;return{x:[c,l],y:[u,d]}}})))()}var BO,VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO,QO,$O,ek,tk,nk,rk,ik,ak,ok,sk,ck,lk,uk,dk,fk,pk;function mk(){return(mk=e((()=>{zO(),BO=`empty`,VO=`loading`,HO=`loaded`,UO=`error`,WO=`idle`,GO=`panning`,KO=`pinching`,qO=1.1,JO=e=>qO/e,YO=e=>2*e,XO=(e,t,n,r)=>{let i=IO(e,t,n,r),a=LO(e*i,t*i,n,r);return Math.max(JO(i),YO(a))},ZO={status:BO,interaction:WO,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},QO=(e,t)=>{let n={...e};return delete n[t],n},$O=e=>{let t=Object.keys(e);if(t.length<2)return null;let n=e[t[0]],r=e[t[1]];return{midX:(n.x+r.x)/2,midY:(n.y+r.y)/2,distance:Math.hypot(r.x-n.x,r.y-n.y)}},ek=e=>{let t=RO(e.iw,e.ih,e.cw,e.ch,e.zoom);return{...e,panX:FO(e.panX,t.x[0],t.x[1]),panY:FO(e.panY,t.y[0],t.y[1])}},tk=(e,t,n,r=2)=>e<t?t-(t-e)/r:e>n?n+(e-n)/r:e,nk=e=>{let t=RO(e.iw,e.ih,e.cw,e.ch,e.zoom);return{...e,panX:tk(e.panX,t.x[0],t.x[1]),panY:tk(e.panY,t.y[0],t.y[1])}},rk=(e,{dPanX:t=0,dPanY:n=0,scaleDiff:r=1,originX:i=0,originY:a=0})=>{let o=e.zoom*r;return{...e,zoom:o,panX:t+i+(e.panX-i)*r,panY:n+a+(e.panY-a)*r}},ik=(e,t,n)=>{let r=XO(e.iw,e.ih,e.cw,e.ch),i=FO(e.zoom,1,r);if(i===e.zoom)return e;let a=i/e.zoom;return{...e,zoom:i,panX:t+(e.panX-t)*a,panY:n+(e.panY-n)*a}},ak=(e,t)=>{switch(t.type){case`load`:return{...e,status:VO};default:return e}},ok=(e,t)=>{switch(t.type){case`loaded`:return{...e,status:HO,...t.dimensions,panX:0,panY:0,zoom:1};case`error`:return{...e,status:UO};default:return e}},sk=(e,t)=>{switch(t.type){case`load`:return{...e,status:VO};default:return e}},ck=(e,t)=>{switch(t.type){case`pointerdown`:return{...e,interaction:GO,pointers:{...e.pointers,[t.id]:{x:t.x,y:t.y}}};default:return e}},lk=(e,t)=>{switch(t.type){case`pointerdown`:{let n={...e.pointers,[t.id]:{x:t.x,y:t.y}};return{...e,interaction:KO,pointers:n}}case`pointermove`:{let n=e.pointers[t.id];if(!n)return e;let r=t.x-n.x,i=t.y-n.y;return nk({...e,panX:e.panX+r,panY:e.panY+i,pointers:{...e.pointers,[t.id]:{x:t.x,y:t.y}}})}case`pointerup`:{let n=QO(e.pointers,t.id);if(Object.keys(n).length===0){let r=ik({...e,pointers:n},t.settleOriginX??0,t.settleOriginY??0);return ek({...r,interaction:WO})}return{...e,pointers:n}}default:return e}},uk=(e,t)=>{switch(t.type){case`pointermove`:{if(!e.pointers[t.id])return e;let n=$O(e.pointers),r={...e.pointers,[t.id]:{x:t.x,y:t.y}},i=$O(r);if(!n||!i)return{...e,pointers:r};let a=n.distance?i.distance/n.distance:1,o=i.midX-n.midX,s=i.midY-n.midY,c=t.containerOriginX+(i.midX-t.x),l=t.containerOriginY+(i.midY-t.y),u=rk({...e,pointers:r},{dPanX:o,dPanY:s,scaleDiff:a,originX:c,originY:l}),d=XO(e.iw,e.ih,e.cw,e.ch),f=tk(u.zoom,1,d),p=f/u.zoom,m=c+(u.panX-c)*p,h=l+(u.panY-l)*p;return nk({...u,zoom:f,panX:m,panY:h})}case`pointerup`:{let n=QO(e.pointers,t.id);if(Object.keys(n).length<=1){let r=ek(ik({...e,pointers:n},t.settleOriginX??0,t.settleOriginY??0));return Object.keys(n).length===1?{...r,interaction:GO}:{...r,interaction:WO}}return{...e,pointers:n}}default:return e}},dk=(e,t)=>{switch(e.interaction){case WO:return ck(e,t);case GO:return lk(e,t);case KO:return uk(e,t);default:return e}},fk=(e,t)=>{switch(t.type){case`load`:return{...e,status:VO,interaction:WO,panX:0,panY:0,zoom:1,pointers:{}};case`zoom`:{let n=XO(e.iw,e.ih,e.cw,e.ch),r=FO(t.zoom,1,n);return ek({...e,zoom:r})}case`wheel`:{let{delta:n,originX:r,originY:i}=t,a=1+n,o=rk(e,{scaleDiff:a,originX:r,originY:i});return ek(ik(o,r,i))}case`pointerdown`:case`pointermove`:case`pointerup`:return dk(e,t);default:return e}},pk=(e,t)=>{if(t.type===`resize`)return ek({...e,cw:t.rect.width,ch:t.rect.height});switch(e.status){case BO:return ak(e,t);case VO:return ok(e,t);case HO:return fk(e,t);case UO:return sk(e,t);default:return e}}})))()}var hk;function gk(){return(gk=e((()=>{U(),hk=(e,t)=>{`ResizeObserver`in window&&F(()=>{if(t==null)return;let n=new ResizeObserver(([{contentRect:t}])=>e(t));return n.observe(t),e(t.getBoundingClientRect()),()=>n.unobserve(t)},[e,t])}})))()}var _k;function vk(){return(vk=e((()=>{U(),_k=(e,t=.08,n=.001)=>{let[r,i]=R(null);return F(()=>{if(r==null){i(e);return}if(t>=1){i(e);return}let a=r;window.requestAnimationFrame(()=>{let o=e-a;i(Math.abs(o)<n?e:r+o*t)})},[r,i,e,t,n]),r}})))()}var yk,bk,xk;function Sk(){return(Sk=e((()=>{U(),mk(),zO(),gk(),vk(),yk=(e,t,n,r)=>{let{iw:i=100,ih:a=100,cw:o=100,ch:s=100}=e,c=IO(i,a,o,s)*t;return{transform:[`translate(-50%, -50%)`,`translate(${n}px, ${r}px)`,`scale(${c})`].join(` `)}},bk=(e,t,n)=>{let r=n.current?.getBoundingClientRect();return r?{originX:e-r.left-r.width/2,originY:t-r.top-r.height/2}:{originX:0,originY:0}},xk=(e=.08)=>{let[t,n]=Ie(pk,ZO),r=z(),i=z(null),a=z(null),o=L(()=>n({type:`load`}),[n]),s=L(e=>n({type:`loaded`,dimensions:e}),[n]),c=L(()=>n({type:`error`}),[n]),l=L(e=>n({type:`zoom`,zoom:e}),[n]),u=L(e=>e&&n({type:`resize`,rect:e}),[n]),d=L(()=>u(r.current&&r.current.getBoundingClientRect()),[u]);hk(u,r.current);let f=L(e=>s({iw:e.target.naturalWidth,ih:e.target.naturalHeight}),[s]),p=L(e=>{if(e.pointerType===`mouse`||e.pointerType===`pen`){let t=e.composedPath()[0],i=r.current;(t===i||t===i?.querySelector(`.transform-group`))&&(r.current?.setPointerCapture(e.pointerId),n({type:`pointerdown`,id:e.pointerId,x:e.clientX,y:e.clientY}));return}if(i.current){clearTimeout(a.current),a.current=null,r.current?.setPointerCapture(i.current.id),n({type:`pointerdown`,id:i.current.id,x:i.current.x,y:i.current.y}),i.current=null,r.current?.setPointerCapture(e.pointerId),n({type:`pointerdown`,id:e.pointerId,x:e.clientX,y:e.clientY});return}i.current={id:e.pointerId,x:e.clientX,y:e.clientY},a.current=setTimeout(()=>{a.current=null,i.current=null},200)},[n]),m=L(e=>{if(a.current!=null&&i.current?.id===e.pointerId){let t=i.current;if(Math.hypot(e.clientX-t.x,e.clientY-t.y)>10)clearTimeout(a.current),a.current=null,r.current?.setPointerCapture(t.id),n({type:`pointerdown`,id:t.id,x:t.x,y:t.y}),i.current=null;else return}let{originX:t,originY:o}=bk(e.clientX,e.clientY,r);n({type:`pointermove`,id:e.pointerId,x:e.clientX,y:e.clientY,containerOriginX:t,containerOriginY:o})},[n]),h=z({x:0,y:0});F(()=>{if(t.interaction!==`pinching`)return;let e=Object.keys(t.pointers);if(e.length>=2){let n=t.pointers[e[0]],i=t.pointers[e[1]],a=(n.x+i.x)/2,o=(n.y+i.y)/2,{originX:s,originY:c}=bk(a,o,r);h.current={x:s,y:c}}},[t.pointers,t.interaction]);let g=L(e=>{if(i.current?.id===e.pointerId){clearTimeout(a.current),a.current=null,i.current=null;return}try{r.current?.releasePointerCapture(e.pointerId)}catch{}n({type:`pointerup`,id:e.pointerId,settleOriginX:h.current.x,settleOriginY:h.current.y})},[n]),_=L(e=>{e.preventDefault();let{originX:t,originY:i}=bk(e.clientX,e.clientY,r);n({type:`wheel`,delta:-Math.sign(e.deltaY)*.8,originX:t,originY:i})},[n]),v=t.interaction===KO,y=t.interaction===`panning`||t.interaction===`pinching`,b=e;v?b=.8:y&&(b=.9);let x=_k(t.zoom,b),S=_k(t.panX,b),C=_k(t.panY,b);return{...t,load:o,loaded:s,error:c,zoomTo:l,resize:d,onPointerDown:p,onPointerMove:m,onPointerUp:g,onImageLoad:f,onWheel:_,containerRef:r,style:yk(t,x,S,C)}}})))()}var Ck,wk;function Tk(){return(Tk=e((()=>{LC(),U(),s(),pt(),hO(),NO(),Sk(),Ck=({src:e,disabled:t,zoomStiffness:n})=>{let{status:r,zoom:i,load:a,error:s,zoomTo:l,resize:u,onPointerDown:d,onPointerMove:f,onPointerUp:p,onImageLoad:m,onWheel:h,style:g,containerRef:_}=xk(n);if(F(a,[e]),IC({zoomTo:l,resize:u,zoom:i},[l,u,i]),!e)return o;let v=MO();return F(()=>v(new CustomEvent(`zoom-changed`,{detail:{value:i}})),[v,i]),F(()=>v(new CustomEvent(`status-changed`,{detail:{value:r}})),[v,r]),c`
		<style>
			:host {
				display: block;
			}

			.container {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
				touch-action: none;
			}

			.transform-group {
				position: absolute;
				top: 50%;
				left: 50%;
				user-select: none;
			}

			.transform-group img {
				display: block;
				pointer-events: none;
			}

			.transform-group ::slotted(*) {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				pointer-events: none;
				user-select: text;
				touch-action: auto;
			}
		</style>
		<div
			class="container ${r}"
			style="pointer-events: ${t?`none`:`all`}"
			@wheel=${h}
			@pointerdown=${d}
			@pointermove=${f}
			@pointerup=${p}
			@pointercancel=${p}
			${W(e=>_.current=e)}
		>
			${!e||r===`error`?o:c`
						<div class="transform-group" style=${mO(g)}>
							<img
								src=${e}
								draggable="false"
								@load=${m}
								@error=${s}
							/>
							<slot></slot>
						</div>
					`}
		</div>
	`},wk=class extends HTMLElement{resize(){}zoomTo(){}},customElements.define(`haunted-pan-zoom`,H(Ck,{observedAttributes:[`src`,`disabled`,`zoom-stiffness`],baseElement:wk}))})))()}var Ek;function Dk(){return(Dk=e((()=>{he(),Ek=fe`:host {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    font-family: var(--cz-font-body);
    font-size: var(--cz-text-sm);
    min-height: 250px;
    touch-action: pan-y pinch-zoom;
    container-type: inline-size;
    background: var(--cz-color-bg-primary);
}

:host([fullscreen]) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--cz-color-bg-primary);
    z-index: 1000;
}

.actions {
    position: absolute;
    left: 0;
    right: 0;
    margin: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.counter {
    position: absolute;
    left: calc(50% - 32px);
    margin: 22px 3px 3px;
    width: 40px;
    padding: 4px 10px;
    text-align: center;
    font-weight: 100;
    z-index: 1;
    color: var(--cz-color-fg-white);
    background-color: rgba(0, 0, 0, 0.44);
    border-radius: var(--cz-radius-full);
    fill: var(--cz-color-fg-white);
}

.nav {
    z-index: 1;
    color: var(--cz-color-fg-white);
    background-color: rgba(0, 0, 0, 0.44);
    border-radius: var(--cz-radius-full);
    margin: 3px;
    fill: var(--cz-color-fg-white);
    border: none;
    width: 40px;
    height: 40px;
    transition: background-color 100ms;
}

.nav:not([disabled]) {
    cursor: pointer;
}

.nav[disabled] {
    opacity: 0.5;
}

.nav:active:not([disabled]) {
    background-color: rgba(0, 0, 0, 0.60);
}

.nav:not(:hover) {
    visibility: hidden;
}

:host(:hover) .nav {
    visibility: visible;
}

cosmoz-autocomplete {
    visibility: hidden;
    position: relative;
    z-index: 1;
    max-width: 180px;
    --cosmoz-input-padding: 0;
    --cosmoz-input-float-display: none;
    --cosmoz-autocomplete-chip-translate-y: 0;
    --cosmoz-autocomplete-chip-bg-color: transparent;
    --cosmoz-autocomplete-chip-color: var(--cz-color-fg-white);
    --cosmoz-autocomplete-chip-text-font-size: 0.875rem;
    --cosmoz-autocomplete-chip-text-font-weight: 400;
    --cosmoz-autocomplete-chip-clear-display: none;
    --cosmoz-autocomplete-chip-clear-bg-color: transparent;
}

:host(:hover) cosmoz-autocomplete {
    visibility: visible;
}

cosmoz-autocomplete::part(chip) {
    flex: none;
}

cosmoz-autocomplete::part(input-wrap) {
    padding: 0 12px;
    height: 40px;
    background: rgba(0, 0, 0, 0.44);
    border: none;
    border-radius: var(--cz-radius-full);
    font-family: inherit;
    color: var(--cz-color-fg-white);
    cursor: pointer;
    box-shadow: none;
}

cosmoz-autocomplete::part(input-wrap):focus-within {
    box-shadow: none;
}

cosmoz-autocomplete::part(input-line) {
    display: none;
}

cosmoz-autocomplete::part(input-input) {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--cz-color-fg-white);
    font-weight: 400;
    width: 100%;
    min-width: 0;
    flex: 1;
}

cosmoz-autocomplete::part(input-control) {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Narrow container layout: wrap file dropdown to second row */
@container (max-width: 500px) {
    .actions {
        flex-wrap: wrap;
        row-gap: 8px;
    }

    cosmoz-autocomplete {
        order: 1;
        flex: 1 1 100%;
        max-width: none;
    }
}

img {
    background-color: gray;
    pointer-events: none;
    overflow: visible;
}

.image-container {
    position: relative;
}

.image-container img {
    width: 100%;
    display: block;
    user-select: none;
}

.image-container ::slotted(*) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

haunted-pan-zoom {
    flex: auto;
    display: flex;
    justify-content: center;
    background-color: var(--cz-color-bg-primary);
    height: 100vh;
}

.error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--cz-color-text-error);
    z-index: 2;
    text-align: center;
    background: var(--cz-color-bg-error);
    padding: 20px;
    border-radius: var(--cz-radius-md, 8px);
}

.error .desc {
    padding-top: 1em;
    opacity: 0.8;
    font-size: 0.8em;
}

/* overflow: hidden is set inline by cosmoz-slider host styles */
cosmoz-slider {
    min-height: 150px;
    overflow-y: auto !important;
    height: 100%;
}

cz-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}

.loading {
    position: absolute;
    inset: 0;
    z-index: 2;
}`})))()}var Ok,kk,Ak,jk,Mk;function Nk(){return(Nk=e((()=>{Q(),t(),Ok=(e,t)=>e.width/e.height>t.width/t.height?{width:t.width,height:e.height*(t.width/e.width)}:{width:e.width*(t.height/e.height),height:t.height},kk=async(e,t)=>{let r={credentials:t?`include`:`omit`},[{jsPDF:i},...a]=await Promise.all([n(()=>import(`./jspdf.es-_lcH_yW5.js`),__vite__mapDeps([2,1,3,4]),import.meta.url),...e.map(async e=>{let t=await Promise.resolve($T(e)),n=await fetch(t,r);return n.ok?{url:t,data:new Uint8Array(await n.arrayBuffer())}:void 0})]),o=a.filter(Boolean);if(o.length<1)return;let s=new i({compress:!0});return o.filter(Boolean).forEach(({url:e,data:t},n)=>{let{internal:{pageSize:r}}=s,{width:i,height:a}=Ok(s.getImageProperties(t),{width:r.getWidth()-4,height:r.getHeight()-4});n>0&&s.addPage(),s.addImage(t,e.split(`.`).pop().toUpperCase(),2,2,i,a)}),s.output(`blob`)},Ak=(e,t)=>{let n=URL.createObjectURL(e),r=document.body.appendChild(document.createElement(`a`));r.href=n,r.download=`${t}.pdf`,r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},jk=async(e,t,n)=>{let r=await kk(e,n);if(r)return Ak(r,t),r},Mk=async(e,t,n={})=>{let{httpHeaders:r,withCredentials:i=!0}=n,a=await fetch(e,{credentials:i?`include`:`omit`,headers:r});if(!a.ok)return;let o=await a.blob();return Ak(o,t),o}})))()}var Pk,Fk,Ik,Lk,Rk,zk,Bk;function Vk(){return(Vk=e((()=>{aT(),t(),Fk=async()=>Pk??=(await n(async()=>{let{url:e}=await import(`./popout-entry-BpcIv4WY.js`);return{url:e}},__vite__mapDeps([5,1,3,6]),import.meta.url)).url,Ik=e=>Object.entries(e).map(([e,t])=>e+`=`+t).join(`,`),Lk=null,Rk=()=>Lk!=null&&!Lk.closed,zk=(e,{entryUrl:t,state:n,sync:r,title:i,onDetach:a,onClose:o})=>{e.__popoutState=n,e.__popoutSync=r,e.__popoutReady=a,e._onClose=o;let s=e.document;s.open(),s.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${i??Z(`Cosmoz image viewer`)}</title>
</head>
<body>
	<script type="module" src="${t}"><\/script>
</body>
</html>`),s.close(),Lk=e,e.addEventListener(`beforeunload`,()=>e._onClose?.()),e.addEventListener(`beforeunload`,()=>Lk=null)},Bk=async({source:e,fileIndex:t,index:n,syncImageIndex:r,syncFileIndex:i,title:a,loop:o,detachedShowZoom:s,onDetach:c,onClose:l})=>{let u=window.open(void 0,`czimgviewer`,Ik({height:700,width:800})),d={source:e,fileIndex:t,index:n,detachedShowZoom:s,loop:o,title:a,pdfWorkerSrc:globalThis[`pdfjs-dist/build/pdf`]?.GlobalWorkerOptions?.workerSrc??globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc},f={imageIndex:e=>r({detail:{value:e}}),fileIndex:e=>i({detail:{value:e}})};if(Rk()&&u.__popoutUpdate){u._onClose?.(),u.__popoutUpdate(d),u.__popoutSync=f,u._onClose=l,c();return}let p=await Fk();zk(u,{entryUrl:p,state:d,sync:f,title:a,onDetach:c,onClose:l})}})))()}var Hk,Uk;function Wk(){return(Wk=e((()=>{Q(),s(),gT(),Hk=e=>new Promise(t=>{let n=setInterval(()=>{e()&&(t(),clearInterval(n))},100)}),Uk=({images:e})=>{let t=window.open(void 0,`czimgviewerprint`);m(c`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${e.map(e=>c`<img src="${hT(Promise.resolve($T(e)))}" />`)}`,t.document.body),Hk(()=>Array.from(t.document.querySelectorAll(`img`)).every(e=>e.src&&e.complete)).then(()=>t.print()).then(()=>t.close())}})))()}var Gk;function Kk(){return(Kk=e((()=>{U(),Vk(),Gk=({files:e,safeFileIndex:t,imageIndex:n,title:r,loop:i,detachedShowZoom:a,setImageIndex:o,setFileIndex:s})=>{let[c,l]=R(!1),u=L(e=>o(e.detail.value),[o]),d=L(e=>s(e.detail.value),[s]);return{detached:c,detach:L(()=>Bk({source:e,fileIndex:t,index:n,syncImageIndex:u,syncFileIndex:d,title:r,loop:i,detachedShowZoom:a,onDetach:()=>l(!0),onClose:()=>l(!1)}),[e,t,n,r,i,a]),syncDetachedState:e=>l(e.detail.value)}}})))()}var qk,Jk;function Yk(){return(Yk=e((()=>{qk=[],Jk=({source:e,images:t,pdf:n,pdfOptions:r})=>e??(t!=null||n!=null?[{images:t??qk,pdf:n,pdfOptions:r}]:qk)})))()}var Xk,Zk;function Qk(){return(Qk=e((()=>{Q(),TD(),U(),Xk=[],Zk=e=>{let t=I(()=>Promise.resolve($T(e)),[e]),[n,r,i]=wD(t);return{files:n??Xk,loading:i===`pending`,error:r}}})))()}var $k,eA;function tA(){return(tA=e((()=>{DO(),U(),Yk(),zO(),Qk(),$k=[],eA=e=>{let t=I(()=>Jk({source:e.source,images:e.images,pdf:e.pdf,pdfOptions:e.pdfOptions}),[e.source,e.images,e.pdf,e.pdfOptions]),{files:n,loading:r,error:i}=Zk(t),[a,o]=ze(`currentFileIndex`,0),s=n.length>0?PO(a??0,0,n.length-1):0,c=n[s],l=c?[c]:$k,u=z(TO),d=L(e=>{let t=e.detail?.[0],r=n.indexOf(t);r>=0&&(u.current=TO,o(r))},[n]);return F(()=>{let e=a??0;n.length>0&&e>=n.length&&o(0)},[n]),{files:n,loading:r,error:i,fileIndex:a,setFileIndex:o,safeFileIndex:s,selectedFile:c,value:l,onSelect:d,directionRef:u}}})))()}var nA;function rA(){return(rA=e((()=>{U(),nA=()=>{let[e,t]=R(!1);return{isFullscreen:e,openFullscreen:()=>t(!0),closeFullscreen:()=>t(!1)}}})))()}var iA;function aA(){return(aA=e((()=>{iA=(e,t,n,r)=>{let i=e.length,a=1;for(;a<=i;){let o=(t+a*n+i)%i;if(!r&&(n>0&&o<=t||n<0&&o>=t))return null;let s=e[o];if(s.images?.length||s.pdf)return o;a++}return null}})))()}var oA,sA;function cA(){return(cA=e((()=>{U(),t(),oA=[],sA=e=>{let[t,r]=R({images:oA,loading:!1,error:void 0});return F(()=>{if(!e){r({images:oA,loading:!1,error:void 0});return}let t=e.pdf,i=e.images??oA;if(!t){r({images:i,loading:!1,error:void 0});return}r({images:oA,loading:!0,error:void 0});let a=!1;return n(async()=>{let{loadPdfThunks:e}=await import(`./pdf-loader-CcDbPhwt.js`);return{loadPdfThunks:e}},__vite__mapDeps([7,1,3]),import.meta.url).then(({loadPdfThunks:n})=>n(t,e.pdfOptions)).then(e=>{a||r({images:e,loading:!1,error:void 0})}).catch(e=>{a||r({images:oA,loading:!1,error:e})}),()=>{a=!0}},[e]),t}})))()}var lA;function uA(){return(uA=e((()=>{DO(),U(),aA(),zO(),cA(),lA=({files:e,safeFileIndex:t,loop:n,setFileIndex:r,directionRef:i})=>{let[a,o]=ze(`currentImageIndex`,0),s=e[t],{images:c,loading:l,error:u}=sA(s),d=c.length>0?PO(a??0,0,c.length-1):0,f=c[d],p=!n&&t===0&&d<=0,m=!n&&t===e.length-1&&d>=c.length-1,h=z(!1),g=L(()=>{if(i.current=TO,d<c.length-1)return o(d+1);let a=iA(e,t,1,n);a!=null&&(r(a),o(0))},[d,c.length,e,t,n]),_=L(()=>{if(i.current=EO,d>0)return o(d-1);let a=iA(e,t,-1,n);a!=null&&(a===t?o(c.length-1):(h.current=!0,r(a)))},[d,e,t,n,c.length]);return F(()=>{if(c.length===0)return;if(h.current){h.current=!1,o(c.length-1);return}let e=a??0;e>=c.length&&o(PO(e,0,c.length-1))},[c]),{imageIndex:a,setImageIndex:o,nextImage:g,previousImage:_,first:p,last:m,index:d,image:f,images:c,contentLoading:l,contentError:u,downloadFileName:s?.downloadFileName??`archive`}}})))()}var dA,fA;function pA(){return(pA=e((()=>{dA=Symbol(`memo`),fA=e=>{let t=dA,n;return function(r){if(t===r)return n;let i=e(r);return n=i,t=r,i}}})))()}var mA,hA,gA,_A,vA;function yA(){return(yA=e((()=>{jO(),s(),cT(),gT(),mA=e=>{let{currentTarget:t}=e;if(!t.isConnected)return;let n=(t.parentElement?.parentElement)?.querySelector(`.error`);n&&n.removeAttribute(`hidden`),t.setAttribute(`hidden`,!0)},hA=e=>{let{currentTarget:t}=e;if(!t.isConnected)return;let n=t.parentElement?.querySelector(`.error`);n&&n.removeAttribute(`hidden`),t.setAttribute(`hidden`,!0)},gA=e=>e.detail.value===`error`&&hA(e),_A=({src$:e,showZoom:t,isZoomed:n,index:r})=>{let i=sT(e,()=>hT(e));return[t?c`<haunted-pan-zoom
					.src=${i}
					?disabled=${!n}
					@status-changed=${gA}
				>
					${r==null?o:c`<slot name="overlay-page-${r}"></slot>`}
				</haunted-pan-zoom>`:c`<div class="image-container">
					<img .src=${i} @error=${mA} />
					${r==null?o:c`<slot name="overlay-page-${r}"></slot>`}
				</div>`,sT(e,()=>hT(e.then(()=>o),c`<cz-spinner></cz-spinner>`))]},vA=e=>c`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${e.image}</div>
		</div>
		${_A(e)}
	</div>`})))()}var bA;function xA(){return(xA=e((()=>{DO(),Q(),pA(),U(),s(),yA(),bA=({image:e,showZoom:t,isZoomed:n,directionRef:r,index:i})=>{let a=I(()=>fA(e=>Promise.resolve($T(e))),[]);return I(()=>e==null?{id:Math.random(),content:o,animation:TO}:{id:e,render:()=>vA({src$:a(e),showZoom:t,isZoomed:n,image:e,index:i}),animation:r.current},[e,t,n,i])}})))()}var SA,CA,wA;function TA(){return(TA=e((()=>{U(),SA=50,CA=300,wA=(e,{onSwipeLeft:t,onSwipeRight:n,enabled:r})=>{let i=z(null);F(()=>{if(!r)return;let a=e=>{if(e.touches.length!==1)return;let t=e.touches[0];i.current={x:t.clientX,y:t.clientY,t:Date.now()}},o=e=>{if(!i.current)return;let r=e.changedTouches[0],a=r.clientX-i.current.x,o=r.clientY-i.current.y,s=Date.now()-i.current.t;i.current=null,!(s>CA)&&(Math.abs(a)<SA||Math.abs(a)<Math.abs(o)||(a<0?t?.():n?.()))};return e.addEventListener(`touchstart`,a,{passive:!0}),e.addEventListener(`touchend`,o,{passive:!0}),()=>{e.removeEventListener(`touchstart`,a),e.removeEventListener(`touchend`,o)}},[e,t,n,r])}})))()}var EA;function DA(){return(DA=e((()=>{U(),EA=()=>{let[e,t]=R(!1);return{isZoomed:e,toggleZoom:L(()=>(t(e=>!e),e?1:1.5),[e])}}})))()}var OA;function kA(){return(kA=e((()=>{Nk(),Vk(),Wk(),Kk(),tA(),rA(),uA(),xA(),TA(),DA(),LC(),UC(),U(),OA=e=>{let{showZoom:t,showPageNumber:n,showNav:r,showDetach:i,showFullscreen:a,showClose:o,title:s,loop:c,detachedShowZoom:l}=e,{files:u,loading:d,error:f,setFileIndex:p,safeFileIndex:m,selectedFile:h,value:g,onSelect:_,directionRef:v}=eA(e),{setImageIndex:y,nextImage:b,previousImage:x,first:S,last:C,index:w,image:T,images:E,contentLoading:D,contentError:ee,downloadFileName:O}=lA({files:u,safeFileIndex:m,loop:c,setFileIndex:p,directionRef:v}),{isZoomed:k,toggleZoom:te}=EA();wA(e,{enabled:!k,onSwipeLeft:b,onSwipeRight:x});let A=bA({image:T,showZoom:t,isZoomed:k,directionRef:v,index:w}),{isFullscreen:ne,openFullscreen:re,closeFullscreen:j}=nA(),{detached:ie,detach:ae,syncDetachedState:oe}=Gk({files:u,safeFileIndex:m,imageIndex:w,title:s,loop:c,detachedShowZoom:l,setImageIndex:y,setFileIndex:p}),se=L(()=>{Rk()&&ae()},[ae]);HC(`detached`,ie,[ie]),F(()=>{e.toggleAttribute(`hidden`,ie)},[ie]),IC({syncState:se},[se]);let ce=u.length>1||E.length>=2,le=I(()=>h?.pdf?()=>Mk(h.pdf,O,h.pdfOptions):()=>jk(E,O,!0),[h,O,E]),ue=L(()=>Uk({images:E}),[E]);return{host:e,isZoomed:k,toggleZoom:te,currentSlide:A,nextImage:b,previousImage:x,first:S,last:C,total:E.length,hasNav:ce,currentImageIndex:w,selectedImageNumber:w+1,onDownloadPdf:le,isFullscreen:ne,openFullscreen:re,closeFullscreen:j,onPrintPdf:ue,detached:ie,detach:ae,syncDetachedState:oe,setFileIndex:p,setImageIndex:y,loading:d||D,error:f,contentError:ee,files:u,selectedFile:h,selectedIndex:m,value:g,onSelect:_,images:E,showPageNumber:n,showNav:r,showZoom:t,showDetach:i,showFullscreen:a,showClose:o}}})))()}var AA,jA,MA,NA,PA;function FA(){return(FA=e((()=>{s(),nt(),h(),AA=()=>document.createComment(``),jA=m(o,new DocumentFragment).constructor,MA=class extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}},customElements.define(`disconnect-observer`,MA),NA=class extends tt{_op;_outlet;_content;render(e,t=document.body){return c`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[t,n=document.body]){return this.updateOutlet(n,t),this.render(t,n)}updateOutlet(e,t){this._outlet!==e&&this.clearOutlet(),this._outlet=e;let n=this._op??=new jA(e.appendChild(AA()),e.appendChild(AA()));u(n,this._content=t)}clearOutlet(){let e=this._op;e&&(l(e),f(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}},PA=qe(NA)})))()}var IA;function LA(){return(LA=e((()=>{s(),IA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="currentColor"
		></path>
	</g>
</svg>`})))()}var RA;function zA(){return(zA=e((()=>{s(),RA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
			fill="currentColor"
		></path>
	</g>
</svg>`})))()}var BA;function VA(){return(VA=e((()=>{s(),BA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
			fill="currentColor"
		></path>
	</g>
</svg>`})))()}var HA;function UA(){return(UA=e((()=>{s(),HA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			fill="currentColor"
			d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
		></path>
	</g>
</svg>`})))()}var WA;function GA(){return(GA=e((()=>{s(),WA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<path
		d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
		fill="currentColor"
	></path>
</svg>`})))()}var KA;function qA(){return(qA=e((()=>{s(),KA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
			fill="currentColor"
		></path>
	</g>
</svg>`})))()}var JA;function YA(){return(YA=e((()=>{s(),JA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"
			fill="currentColor"
		></path>
	</g>
</svg>`})))()}var XA;function ZA(){return(ZA=e((()=>{s(),XA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<g>
		<path
			d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"
			fill="currentColor"
		></path>
	</g>
</svg>`})))()}var QA;function $A(){return($A=e((()=>{s(),QA=c`<svg
	viewBox="0 0 24 24"
	preserveAspectRatio="xMidYMid meet"
	focusable="false"
	width="24"
	height="24"
>
	<path
		d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
		fill="currentColor"
	></path>
</svg>`})))()}var ej,tj,nj,rj,ij,aj,oj,sj,cj,lj,uj,dj,fj,pj,mj,hj,gj;function _j(){return(_j=e((()=>{FA(),U(),aT(),LA(),zA(),VA(),UA(),GA(),qA(),YA(),ZA(),$A(),ej=e=>e?KA:JA,tj=()=>c`<div class="loading"><cz-spinner></cz-spinner></div>`,nj=e=>c`<div class="error">
		<h2>${Z(`Failed to load files.`)}</h2>
		<div class="desc">${e?.message??e}</div>
	</div>`,rj=(e,t)=>c`<div class="counter">${e}/${t}</div>`,ij=({hasNav:e,first:t,last:n,previousImage:r,nextImage:i})=>q(e,()=>c`
			<button
				class="nav"
				name="prev"
				?disabled=${t}
				@click=${r}
			>
				${WA}
			</button>
			<button class="nav" name="next" ?disabled=${n} @click=${i}>
				${QA}
			</button>
		`),aj=({files:e,value:t,onSelect:n})=>q(e.length>1,()=>c`<cosmoz-autocomplete
				text-property="title"
				limit="1"
				.min=${1}
				show-single
				preserve-order
				.source=${e}
				.value=${t}
				@value=${n}
			></cosmoz-autocomplete>`),oj=({showZoom:e,total:t,isZoomed:n,toggleZoom:r})=>q(e&&t,()=>c`<button
				class="nav"
				@click=${e=>e.target.getRootNode().querySelector(`haunted-pan-zoom`).zoomTo(r())}
				title="${Z(`Zoom image`)}"
			>
				${ej(n)}
			</button>`),sj=({showDetach:e,total:t,detach:n})=>q(e&&t,()=>c`<button
				class="nav"
				@click=${n}
				title="${Z(`Detach image to separate window`)}"
			>
				${HA}
			</button>`),cj=({total:e,onDownloadPdf:t})=>q(e,()=>c`<button
				class="nav"
				@click=${t}
				title="${Z(`Download images`)}"
			>
				${RA}
			</button>`),lj=({total:e,onPrintPdf:t})=>q(e,()=>c`<button
				class="nav"
				@click=${t}
				title="${Z(`Print images`)}"
			>
				${XA}
			</button>`),uj=({showFullscreen:e,total:t,openFullscreen:n})=>q(e&&t,()=>c`<button
				class="nav"
				@click=${n}
				title="${Z(`Fullscreen image`)}"
			>
				${BA}
			</button>`),dj=({showClose:e,total:t,host:n})=>q(e&&t,()=>c`<button
				class="nav"
				@click=${()=>n.dispatchEvent(new CustomEvent(`close`))}
				title="${Z(`Close fullscreen`)}"
			>
				${IA}
			</button>`),fj=e=>c`<div class="actions">
		${[ij(e),aj(e),c`<span style="flex:auto"></span>`,oj(e),sj(e),cj(e),lj(e),uj(e),dj(e)]}
	</div>`,pj=(e,t)=>q(e,()=>c`<p class="error">${Z(`Failed to load PDF.`)}</p>`,()=>q(!t,()=>c`<p>${Z(`No image loaded.`)}</p>`)),mj=e=>q(!e.loading&&!e.error,()=>c`
			${q(e.showPageNumber&&e.total,()=>rj(e.selectedImageNumber,e.total))}
			${fj(e)}
			${pj(e.contentError,e.total)}
			<cosmoz-slider id="slider" .slide=${e.currentSlide}></cosmoz-slider>
		`),hj=({files:e,selectedIndex:t,currentImageIndex:n,setFileIndex:r,setImageIndex:i,syncDetachedState:a,closeFullscreen:o,host:s})=>PA(c`<cosmoz-image-viewer
			fullscreen
			.source=${e}
			.currentFileIndex=${t}
			.currentImageIndex=${n}
			@current-file-index-changed=${Be(r)}
			@current-image-index-changed=${Be(i)}
			@detached-changed=${a}
			show-nav
			show-zoom
			show-close
			@close=${o}
			?show-detach=${s.showDetach}
			?loop=${s.loop}
		></cosmoz-image-viewer>`),gj=e=>[q(!e.detached,()=>[q(e.loading,tj),q(e.error,()=>nj(e.error)),mj(e)]),q(e.isFullscreen,()=>hj(e))]})))()}var vj;function yj(){return(yj=e((()=>{dO(),kO(),jO(),Tk(),U(),Dk(),kA(),_j(),vj=e=>gj(OA(e)),customElements.define(`cosmoz-image-viewer`,H(vj,{observedAttributes:[`download-file-name`,`pdf`,`show-close`,`show-detach`,`show-fullscreen`,`show-nav`,`show-page-number`,`show-zoom`,`detached-show-zoom`,`loop`,`title`],styleSheets:[Ek]}))})))()}export{yj as t};