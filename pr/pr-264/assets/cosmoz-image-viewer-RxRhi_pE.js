const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-C8lXQ5JU.js","./preload-helper-PPVm8Dsz.js","./pdf-loader-BSiQZefA.js"])))=>i.map(i=>d[i]);
import{r as yi,D as bt,A as G,b as v,E as Y,p as bi,n as bn,M as vn,u as oe,v as Ce,h as Qe,j as wn}from"./iframe-DlRjkBWO.js";import{_ as ns}from"./preload-helper-PPVm8Dsz.js";let it,vi=0;function _s(t){it=t}function ys(){it=null,vi=0}function xn(){return vi++}const It=Symbol("haunted.phase"),et=Symbol("haunted.hook"),bs=Symbol("haunted.update"),vs=Symbol("haunted.commit"),ue=Symbol("haunted.effects"),Le=Symbol("haunted.layoutEffects"),Xt="haunted.context";class Sn{update;host;virtual;[et];[ue];[Le];constructor(e,s){this.update=e,this.host=s,this[et]=new Map,this[ue]=[],this[Le]=[]}run(e){_s(this);let s=e();return ys(),s}_runEffects(e){let s=this[e];_s(this);for(let i of s)i.call(this);ys()}runEffects(){this._runEffects(ue)}runLayoutEffects(){this._runEffects(Le)}teardown(){this[et].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Pn=Promise.resolve().then.bind(Promise.resolve());function wi(){let t=[],e;function s(){e=null;let i=t;t=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){t.push(i),e==null&&(e=Pn(s))}}const Cn=wi(),ws=wi();class En{renderer;host;state;[It];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new Sn(this.update.bind(this),s),this[It]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(Cn(()=>{let e=this.handlePhase(bs);ws(()=>{this.handlePhase(vs,e),ws(()=>{this.handlePhase(ue)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[It]=e,e){case vs:this.commit(s),this.runEffects(Le);return;case bs:return this.render();case ue:return this.runEffects(ue)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const rs=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},On=t=>t?.map(e=>typeof e=="string"?rs(e):e),$n=(t,...e)=>t.flatMap((s,i)=>[s,e[i]||""]).join(""),pe=$n,Tn=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function zn(t){class e extends En{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=t(n,this.frag)}}function s(i,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||n||{},h=On(i.styleSheets||u);class d extends o{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(i,this);else{const g=this.attachShadow({mode:"open",...c});h&&(g.adoptedStyleSheets=h),this._scheduler=new e(i,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,y,_){if(y===_)return;let w=_===""?!0:_;Reflect.set(this,Tn(g),w)}}function p(m){let g=m,y=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(_){y&&g===_||(y=!0,g=_,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,y,_){let w;return g in m?(w=Object.getOwnPropertyDescriptor(m,g),w&&w.set?(w.set.call(_,y),!0):(Reflect.set(m,g,y,_),!0)):(typeof g=="symbol"||g[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:y}:w=p(y),Object.defineProperty(_,g,w),w.set&&w.set.call(_,y),!0)}});return Object.setPrototypeOf(d.prototype,f),d}return s}class ee{id;state;constructor(e,s){this.id=e,this.state=s}}function Ln(t,...e){let s=xn(),i=it[et],n=i.get(s);return n||(n=new t(s,it,...e),i.set(s,n)),n.update(...e)}function te(t){return Ln.bind(null,t)}function xi(t){return te(class extends ee{callback;lastValues;values;_teardown;constructor(e,s,i,n){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function Si(t,e){t[ue].push(e)}const E=xi(Si),An=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Pi=te(class extends ee{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Si(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};An(this.state.host).dispatchEvent(new CustomEvent(Xt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=e;this.value=i?n:t.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function Rn(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Xt,this)}disconnectedCallback(){this.removeEventListener(Xt,this)}handleEvent(i){const{detail:n}=i;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:t(function({render:i}){const n=Pi(s);return i(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const I=te(class extends ee{value;values;constructor(t,e,s,i){super(t,e),this.value=s(),this.values=i}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),x=(t,e)=>I(()=>t,e);function kn(t,e){t[Le].push(e)}const nt=xi(kn),Q=te(class extends ee{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),He=te(class extends ee{reducer;currentState;constructor(t,e,s,i,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),Nn=/([A-Z])/gu,Ie=te(class extends ee{property;eventName;constructor(t,e,s,i){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(Nn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),xs=t=>e=>{e.preventDefault(),t(e.detail.value)};function In(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function le(t){return I(()=>In(t),[])}te(class extends ee{update(){return this.state.host}});function Mn({render:t}){const e=zn(t),s=Rn(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ne=t=>(...e)=>({_$litDirective$:t,values:e});let we=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),Ae(i,e);return!0},rt=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Ci=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),jn(e)}};function Dn(t){this._$AN!==void 0?(rt(this),this._$AM=t,Ci(this)):this._$AM=t}function Fn(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)Ae(i[r],!1),rt(i[r]);else i!=null&&(Ae(i,!1),rt(i));else Ae(this,t)}const jn=t=>{t.type==q.CHILD&&(t._$AP??=Fn,t._$AQ??=Dn)};class vt extends we{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Ci(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Ae(this,e),rt(this))}setValue(e){if(yi(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:X,createContext:Vn}=Mn({render:bt}),wt=(t,...e)=>t.flatMap((s,i)=>[s,e[i]??""]).join(""),os=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Mt=new WeakMap,xe=ne(class extends vt{render(t){return G}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),G}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Mt.get(e);s===void 0&&(s=new WeakMap,Mt.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Mt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Bn=({host:t,popoverRef:e,disabled:s,openOnHover:i,openOnFocus:n,open:r,close:o})=>{const a=le(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const h=e.current;i&&(t.matches(":hover")||h?.matches(":hover"))||t.matches(":focus-within")||h?.matches(":focus-within")||o()},100)},u=()=>{s||(l(),r())};return E(()=>{if(!(!i||s))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[i,s,t]),E(()=>{if(!(!n||s))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[n,s,t]),{scheduleClose:c,cancelClose:l}},Hn=t=>{if(t.newState!=="open")return;const i=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of i){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Un=pe`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
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
`,Yn=t=>{const{placement:e="bottom span-right",disabled:s,openOnHover:i,openOnFocus:n}=t,r=le(),[o,a]=Ie("opened",!1),l=x(()=>{s||(a(!0),r.current?.showPopover())},[s]),c=x(()=>{a(!1),r.current?.hidePopover()},[]),u=x(()=>{if(s)return;r.current?.matches(":popover-open")?c():l()},[s]);E(()=>{const m=r.current;m&&(o?m.showPopover():m.hidePopover())},[o]),E(()=>{t.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:h,cancelClose:d}=Bn({host:t,popoverRef:r,disabled:s,openOnHover:i,openOnFocus:n,open:l,close:c}),p=n?l:u,f=x(m=>{Hn(m),a(m.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return v`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${f}
			@select=${c}
			@focusout=${h}
			@focusin=${d}
			${xe(m=>m&&(r.current=m))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",X(Yn,{styleSheets:[Un],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t??G;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=ne(class extends we{constructor(t){if(super(t),t.type!==q.PROPERTY&&t.type!==q.ATTRIBUTE&&t.type!==q.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!yi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Y||e===G)return e;const s=t.element,i=t.name;if(t.type===q.PROPERTY){if(e===s[i])return Y}else if(t.type===q.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return Y}else if(t.type===q.ATTRIBUTE&&s.getAttribute(i)===e+"")return Y;return bi(t),e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(t,e,s){return t?e(t):s?.(t)}const Ei=(t,{label:e,invalid:s,errorMessage:i})=>v`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${k(e,()=>v`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${k(s&&i,()=>v`<div class="error" part="error">${i}</div>`)}
	`,Oi=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ss=wt`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,$i=wt`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
		cursor: text;
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
		cursor: text;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}

	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}

	:host(:focus-within) {
		${Ss}
	}
	@container style(--focused: focused) {
		${Ss}
	}
`,Xn=t=>I(()=>{if(t==null)return;const e=new RegExp(t,"u");return s=>{!s.defaultPrevented&&s.data&&!e.test(s.data)&&s.preventDefault()}},[t]),as=te(class extends ee{values;constructor(t,e,s,i){super(t,e),Object.assign(e.host,s),this.values=i}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),Se=te(class extends ee{update(){return this.state.host}}),Kn=/([A-Z])/gu,Kt=(t,e,s)=>{t[e]=s,t.dispatchEvent(new CustomEvent(e.replace(Kn,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},Jn=(t,e,s=[e])=>{const i=Se();E(()=>{Kt(i,t,e)},s)},Ti=t=>{const e=le(void 0),s=x(l=>e.current=l,[]),i=t.shadowRoot,n=x(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=x(l=>Kt(t,"value",l.target.value),[]),o=x(l=>Kt(t,"focused",l.type==="focus"),[]),a=x(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return as({validate:a},[a]),E(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return i.addEventListener("mousedown",l),()=>i.removeEventListener("mousedown",l)},[]),{onChange:n,onFocus:o,onInput:r,onRef:s}},Wn=({placeholder:t,noLabelFloat:e,label:s})=>(e?s:void 0)||t||" ",Gn=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Oi],qn=t=>{const{type:e="text",pattern:s,allowedPattern:i,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:h}=t,{onChange:d,onFocus:p,onInput:f,onRef:m}=Ti(t),g=Xn(i);return Ei(v`
			<input
				${xe(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${J(s)}
				autocomplete=${J(n)}
				placeholder=${Wn(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${xt(r??"")}
				maxlength=${J(h)}
				@beforeinput=${g}
				@input=${f}
				@change=${d}
				@focus=${p}
				@blur=${p}
				min=${J(l)}
				max=${J(c)}
				step=${J(u)}
			/>
		`,t)};customElements.define("cosmoz-input",X(qn,{observedAttributes:Gn,styleSheets:[rs($i)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ps=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Zn=(t,e=0)=>{if(e>0){const s=t.getAttribute("rows")??"",i=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=i,t.setAttribute("rows",s)}},Qn=t=>{const{value:e,maxRows:s}=t,i=I(()=>()=>t.shadowRoot.querySelector("#input"),[]);E(()=>Zn(i(),s),[s,i]),E(()=>Ps(i()),[i,e]),E(()=>{const n=i(),r=new ResizeObserver(()=>requestAnimationFrame(()=>Ps(n)));return r.observe(n),()=>r.unobserve(n)},[i])},er=["rows","placeholder",...Oi],tr=t=>{const{autocomplete:e,value:s,placeholder:i,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:h,onRef:d}=Ti(t);return Qn(t),Ei(v`
			<textarea id="input" part="input"
				${xe(d)}
				autocomplete=${J(e)}
				placeholder=${i||" "}
				rows=${o??1} cols=${J(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${xt(s??"")} maxlength=${J(l)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",X(tr,{observedAttributes:er,styleSheets:[rs($i)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const sr=t=>{const{label:e,value:s,disabled:i,error:n}=t,r=x(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${xt(!!s)}
			?disabled=${i}
			@change=${r}
		/>
		${k(e,()=>v`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${k(n,o=>v`<div class="failure">${o}</div>`)} `},ir=pe`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,nr=pe`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",X(sr,{styleSheets:[nr,ir],observedAttributes:["disabled"]}));const S=t=>typeof t=="string",Ee=()=>{let t,e;const s=new Promise((i,n)=>{t=i,e=n});return s.resolve=t,s.reject=e,s},Cs=t=>t==null?"":""+t,rr=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},or=/###/g,Es=t=>t&&t.indexOf("###")>-1?t.replace(or,"."):t,Os=t=>!t||S(t),Re=(t,e,s)=>{const i=S(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(Os(t))return{};const r=Es(i[n]);!t[r]&&s&&(t[r]=new s),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++n}return Os(t)?{}:{obj:t,k:Es(i[n])}},$s=(t,e,s)=>{const{obj:i,k:n}=Re(t,e,Object);if(i!==void 0||e.length===1){i[n]=s;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Re(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Re(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s},ar=(t,e,s,i)=>{const{obj:n,k:r}=Re(t,e,Object);n[r]=n[r]||[],n[r].push(s)},ot=(t,e)=>{const{obj:s,k:i}=Re(t,e);if(s)return s[i]},lr=(t,e,s)=>{const i=ot(t,s);return i!==void 0?i:ot(e,s)},zi=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?S(t[i])||t[i]instanceof String||S(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):zi(t[i],e[i],s):t[i]=e[i]);return t},_e=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var cr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ur=t=>S(t)?t.replace(/[&<>"'\/]/g,e=>cr[e]):t;class hr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const dr=[" ",",","?","!",";"],pr=new hr(20),fr=(t,e,s)=>{e=e||"",s=s||"";const i=dr.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const n=pr.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(t);if(!r){const o=t.indexOf(s);o>0&&!n.test(t.substring(0,o))&&(r=!0)}return r},Jt=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let n=t;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=s),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},at=t=>t&&t.replace("_","-"),mr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class lt{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||mr,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,n){return n&&!this.debug?null:(S(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new lt(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new lt(this.logger,e)}}var Z=new lt;class St{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(s)||0;this.observers[i].set(s,n+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class Ts extends St{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,s],i&&(Array.isArray(i)?a.push(...i):S(i)&&r?a.push(...i.split(r)):a.push(i)));const l=ot(this.data,a);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=a[0],s=a[1],i=a.slice(2).join(".")),l||!o||!S(i)?l:Jt(this.data&&this.data[e]&&this.data[e][s],i,r)}addResource(e,s,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,s];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),n=s,s=a[1]),this.addNamespaces(s),$s(this.data,a,n),r.silent||this.emit("added",e,s,i,n)}addResources(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(S(i[r])||Array.isArray(i[r]))&&this.addResource(e,s,r,i[r],{silent:!0});n.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,s];e.indexOf(".")>-1&&(a=e.split("."),n=i,i=s,s=a[1]),this.addNamespaces(s);let l=ot(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?zi(l,i,r):l={...l,...i},$s(this.data,a,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(n=>s[n]&&Object.keys(s[n]).length>0)}toJSON(){return this.data}}var Li={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,n){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,s,i,n))}),e}};const zs={};class ct extends St{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),rr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Z.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!fr(e,i,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:S(r)?[r]:r};const c=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:S(r)?[r]:r}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],s),l=a[a.length-1],c=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const P=s.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${P}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${P}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const h=this.resolve(e,s);let d=h&&h.res;const p=h&&h.usedKey||o,f=h&&h.exactUsedKey||o,m=Object.prototype.toString.apply(d),g=["[object Number]","[object Function]","[object RegExp]"],y=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,w=!S(d)&&typeof d!="boolean"&&typeof d!="number";if(_&&d&&w&&g.indexOf(m)<0&&!(S(y)&&Array.isArray(d))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const P=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...s,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(h.res=P,h.usedParams=this.getUsedParamsDetails(s),h):P}if(r){const P=Array.isArray(d),C=P?[]:{},$=P?f:p;for(const T in d)if(Object.prototype.hasOwnProperty.call(d,T)){const L=`${$}${r}${T}`;C[T]=this.translate(L,{...s,joinArrays:!1,ns:a}),C[T]===L&&(C[T]=d[T])}d=C}}else if(_&&S(y)&&Array.isArray(d))d=d.join(y),d&&(d=this.extendTranslation(d,e,s,i));else{let P=!1,C=!1;const $=s.count!==void 0&&!S(s.count),T=ct.hasDefaultValue(s),L=$?this.pluralResolver.getSuffix(c,s.count,s):"",A=s.ordinal&&$?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",F=$&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),M=F&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${L}`]||s[`defaultValue${A}`]||s.defaultValue;!this.isValidLookup(d)&&T&&(P=!0,d=M),this.isValidLookup(d)||(C=!0,d=o);const K=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&C?void 0:d,j=T&&M!==d&&this.options.updateMissing;if(C||P||j){if(this.logger.log(j?"updateKey":"missingKey",c,l,o,j?M:d),r){const b=this.resolve(o,{...s,keySeparator:!1});b&&b.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let V=[];const D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&D&&D[0])for(let b=0;b<D.length;b++)V.push(D[b]);else this.options.saveMissingTo==="all"?V=this.languageUtils.toResolveHierarchy(s.lng||this.language):V.push(s.lng||this.language);const se=(b,N,B)=>{const ie=T&&B!==d?B:K;this.options.missingKeyHandler?this.options.missingKeyHandler(b,l,N,ie,j,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(b,l,N,ie,j,s),this.emit("missingKey",b,l,N,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&$?V.forEach(b=>{const N=this.pluralResolver.getSuffixes(b,s);F&&s[`defaultValue${this.options.pluralSeparator}zero`]&&N.indexOf(`${this.options.pluralSeparator}zero`)<0&&N.push(`${this.options.pluralSeparator}zero`),N.forEach(B=>{se([b],o+B,s[`defaultValue${B}`]||M)})}):se(V,o,M))}d=this.extendTranslation(d,e,s,h,i),C&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(C||P)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,P?d:void 0):d=this.options.parseMissingKeyHandler(d))}return n?(h.res=d,h.usedParams=this.getUsedParamsDetails(s),h):d}extendTranslation(e,s,i,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=S(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const d=e.match(this.interpolator.nestingRegexp);u=d&&d.length}let h=i.replace&&!S(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,i.lng||this.language||n.usedLng,i),c){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;u<p&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),f=0;f<d;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${s[0]}`),null):o.translate(...p,s)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=S(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Li.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return S(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,s),u=c.key;n=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=s.count!==void 0&&!S(s.count),p=d&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),f=s.context!==void 0&&(S(s.context)||typeof s.context=="number")&&s.context!=="",m=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);h.forEach(g=>{this.isValidLookup(i)||(a=g,!zs[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(zs[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(y=>{if(this.isValidLookup(i))return;o=y;const _=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(_,u,y,g,s);else{let P;d&&(P=this.pluralResolver.getSuffix(y,s.count,s));const C=`${this.options.pluralSeparator}zero`,$=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(_.push(u+P),s.ordinal&&P.indexOf($)===0&&_.push(u+P.replace($,this.options.pluralSeparator)),p&&_.push(u+C)),f){const T=`${u}${this.options.contextSeparator}${s.context}`;_.push(T),d&&(_.push(T+P),s.ordinal&&P.indexOf($)===0&&_.push(T+P.replace($,this.options.pluralSeparator)),p&&_.push(T+C))}}let w;for(;w=_.pop();)this.isValidLookup(i)||(r=w,i=this.getResource(y,g,w,s))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,n):this.resourceStore.getResource(e,s,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!S(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of s)delete n[r]}return n}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const Dt=t=>t.charAt(0).toUpperCase()+t.slice(1);class Ls{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Z.create("languageUtils")}getScriptPartFromCode(e){if(e=at(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=at(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(S(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(e)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(n=>n.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Dt(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Dt(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=Dt(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(s=n)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return s=n;s=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),S(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return S(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):S(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let gr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],_r={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const yr=["v1","v2","v3"],br=["v4"],As={zero:0,one:1,two:2,few:3,many:4,other:5},vr=()=>{const t={};return gr.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:_r[e.fc]}})}),t};class wr{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=Z.create("pluralResolver"),(!this.options.compatibilityJSON||br.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=vr(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=at(e==="dev"?"en":e),n=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${s}${n}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((n,r)=>As[n]-As[r]).map(n=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n}`):i.numbers.map(n=>this.getSuffix(e,n,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(s)}`:this.getSuffixRetroCompatible(n,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let n=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!yr.includes(this.options.compatibilityJSON)}}const Rs=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=lr(t,e,s);return!r&&n&&S(s)&&(r=Jt(t,s,i),r===void 0&&(r=Jt(e,s,i))),r},Ft=t=>t.replace(/\$/g,"$$$$");class xr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Z.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:y,alwaysFormat:_}=e.interpolation;this.escape=s!==void 0?s:ur,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?_e(r):o||"{{",this.suffix=a?_e(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?_e(d):p||_e("$t("),this.nestingSuffix=f?_e(f):m||_e(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=y||1e3,this.alwaysFormat=_!==void 0?_:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const y=Rs(s,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,i,{...n,...s,interpolationkey:p}):y}const f=p.split(this.formatSeparator),m=f.shift().trim(),g=f.join(this.formatSeparator).trim();return this.format(Rs(s,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,i,{...n,...s,interpolationkey:m})};this.resetRegExp();const u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,h=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Ft(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Ft(this.escape(p)):Ft(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof u=="function"){const g=u(e,r,n);o=S(g)?g:""}else if(n&&Object.prototype.hasOwnProperty.call(n,f))o="";else if(h){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!S(o)&&!this.useRawValueToEscape&&(o=Cs(o));const m=p.safeValue(o);if(e=e.replace(r[0],m),h?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,o);const p=d.match(/'/g),f=d.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!S(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(h=>h.trim());n[1]=u.shift(),l=u,c=!0}if(r=s(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!S(r))return r;S(r)||(r=Cs(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,h)=>this.format(u,h,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const Sr=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?s.currency||(s.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?s.range||(s.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();s[u]||(s[u]=c),c==="false"&&(s[u]=!1),c==="true"&&(s[u]=!0),isNaN(c)||(s[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:s}},ye=t=>{const e={};return(s,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=t(at(i),n),e[o]=a),a(s)}};class Pr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Z.create("formatter"),this.options=e,this.formats={number:ye((s,i)=>{const n=new Intl.NumberFormat(s,{...i});return r=>n.format(r)}),currency:ye((s,i)=>{const n=new Intl.NumberFormat(s,{...i,style:"currency"});return r=>n.format(r)}),datetime:ye((s,i)=>{const n=new Intl.DateTimeFormat(s,{...i});return r=>n.format(r)}),relativetime:ye((s,i)=>{const n=new Intl.RelativeTimeFormat(s,{...i});return r=>n.format(r,i.range||"day")}),list:ye((s,i)=>{const n=new Intl.ListFormat(s,{...i});return r=>n.format(r)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=ye(s)}format(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Sr(l);if(this.formats[c]){let h=a;try{const d=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},p=d.locale||d.lng||n.locale||n.lng||i;h=this.formats[c](a,p,{...u,...n,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Cr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Er extends St{constructor(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=Z.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,n.backend,n)}queueLoad(e,s,i,n){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;s.forEach(h=>{const d=`${c}|${h}`;!i.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,u=!1,o[d]===void 0&&(o[d]=!0),r[d]===void 0&&(r[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const n=e.split("|"),r=n[0],o=n[1];s&&this.emit("failedLoading",r,o,s),!s&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{ar(l.loaded,[r],o),Cr(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{a[c][h]===void 0&&(a[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,s);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,s,a)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();S(e)&&(e=this.languageUtils.toResolveHierarchy(e)),S(s)&&(s=[s]);const r=this.queueLoad(e,s,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${s}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,s,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,s,i,n,l):u=c(e,s,i,n),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else c(e,s,i,n,a,l)}!e||!e[0]||this.store.addResource(e[0],s,i,n)}}}const ks=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),S(t[1])&&(e.defaultValue=t[1]),S(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ns=t=>(S(t.ns)&&(t.ns=[t.ns]),S(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),S(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Xe=()=>{},Or=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class Me extends St{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ns(e),this.services={},this.logger=Z,this.modules={external:[]},Or(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(S(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const n=ks();this.options={...n,...this.options,...Ns(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Z.init(r(this.modules.logger),this.options):Z.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Pr);const h=new Ls(this.options);this.store=new Ts(this.options.resources,this.options);const d=this.services;d.logger=Z,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new wr(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(d.formatter=r(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new xr(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Er(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];e.emit(p,...m)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new ct(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];e.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Xe),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Ee(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xe;const n=S(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,s,i){const n=Ee();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=Xe),this.services.backendConnector.reload(e,s,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Li.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const n=Ee();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=S(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,s,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const d=n.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${d}${f}`):p=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,n.t(p,l)};return S(e)?r.lng=e:r.lngs=e,r.ns=s,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const a=s.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!n||o(r,e)))}loadNamespaces(e,s){const i=Ee();return this.options.ns?(S(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),s&&s(n)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=Ee();S(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Ls(ks());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Me(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xe;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new Me(n);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new Ts(this.store.data,n),r.services.resourceStore=r.store),r.translator=new ct(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,s),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const z=Me.createInstance();z.createInstance=Me.createInstance;z.createInstance;z.dir;z.init;z.loadResources;z.reloadResources;z.use;z.changeLanguage;z.getFixedT;const $r=z.t;z.exists;z.setDefaultNamespace;z.hasLoadedNamespace;z.loadNamespaces;z.loadLanguages;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr={},ve=ne(class extends we{constructor(){super(...arguments),this.ot=Tr}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((i,n)=>i===this.ot[n]))return Y}else if(this.ot===e)return Y;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,s)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zr{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let Lr=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=t=>!bn(t)&&typeof t.then=="function",Ms=1073741823;let Ar=class extends vt{constructor(){super(...arguments),this._$Cwt=Ms,this._$Cbt=[],this._$CK=new zr(this),this._$CX=new Lr}render(...e){return e.find(s=>!Is(s))??Y}update(e,s){const i=this._$Cbt;let n=i.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!Is(l))return this._$Cwt=a,l;a<n&&l===i[a]||(this._$Cwt=Ms,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const h=u._$Cbt.indexOf(l);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}}))}return Y}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const De=ne(Ar);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},Ai=ne(class extends we{constructor(t){if(super(t),t.type!==q.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const n=[],r=[];let o=0;for(const a of t)n[o]=i?i(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const n=vn(t),{values:r,keys:o}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,h=0,d=n.length-1,p=0,f=r.length-1;for(;h<=d&&p<=f;)if(n[h]===null)h++;else if(n[d]===null)d--;else if(a[h]===o[p])l[p]=oe(n[h],r[p]),h++,p++;else if(a[d]===o[f])l[f]=oe(n[d],r[f]),d--,f--;else if(a[h]===o[f])l[f]=oe(n[h],r[f]),Ce(t,l[f+1],n[h]),h++,f--;else if(a[d]===o[p])l[p]=oe(n[d],r[p]),Ce(t,n[h],n[d]),d--,p++;else if(c===void 0&&(c=Ds(o,p,f),u=Ds(a,h,d)),c.has(a[h]))if(c.has(a[d])){const m=u.get(o[p]),g=m!==void 0?n[m]:null;if(g===null){const y=Ce(t,n[h]);oe(y,r[p]),l[p]=y}else l[p]=oe(g,r[p]),Ce(t,n[h],g),n[m]=null;p++}else Qe(n[d]),d--;else Qe(n[h]),h++;for(;p<=f;){const m=Ce(t,l[f+1]);oe(m,r[p]),l[p++]=m}for(;h<=d;){const m=n[h++];m!==null&&Qe(m)}return this.ut=o,bi(t,l),Y}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pt extends Event{constructor(e){super(Pt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Pt.eventName="rangeChanged";class Ct extends Event{constructor(e){super(Ct.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ct.eventName="visibilityChanged";class Et extends Event{constructor(){super(Et.eventName,{bubbles:!1})}}Et.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rr{constructor(e){this._element=null;const s=e??window;this._node=s,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class kr extends Rr{constructor(e,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,s){const i=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;this._scrollTo(i)}scrollBy(e,s){const i=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,s=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=s,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:s,left:i}=e;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,s,i){return this._scrollTo(e,s,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:s}=this;let{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(i-e),o=Math.abs(n-s);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Fs=typeof window<"u"?window.ResizeObserver:void 0;const Wt=Symbol("virtualizerRef"),Ke="virtualizer-sizer";let js;class Nr{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const s=e.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Fs(()=>this._hostElementSizeChanged()),this._childrenRO=new Fs(this._childrenSizeChanged.bind(this))}_initHostElement(e){const s=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),s[Wt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Dr(this._hostElement,e),this._scrollerController=new kr(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let s=e.querySelector(`[${Ke}]`);s||(s=document.createElement("div"),s.setAttribute(Ke,""),e.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(Ke,""),this._sizer=s}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const s=e.type||js;if(typeof s=="function"&&this._layout instanceof s){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let s,i;if(typeof e.type=="function"){i=e.type;const n={...e};delete n.type,s=n}else s=e;i===void 0&&(js=i=(await ns(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),s=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:n}}return null}_measureChildren(){const e={},s=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<s.length;n++){const r=s[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=i.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:s,height:i}=e.getBoundingClientRect();return Object.assign({width:s,height:i},Ir(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:s,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Et)}get _children(){const e=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(Ke)||e.push(s),s=s.nextElementSibling;return e}_updateView(){const e=this._hostElement,s=this._scrollerController?.element,i=this._layout;if(e&&s&&i){let n,r,o,a;const l=e.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(y=>y.getBoundingClientRect());c.unshift(l);for(const y of c)n=Math.max(n,y.top),r=Math.max(r,y.left),o=Math.min(o,y.bottom),a=Math.min(a,y.right);const u=s.getBoundingClientRect(),h={left:l.left-u.left,top:l.top-u.top},d={width:s.scrollWidth,height:s.scrollHeight},p=n-l.top+e.scrollTop,f=r-l.left+e.scrollLeft,m=Math.max(0,o-n),g=Math.max(0,a-r);i.viewportSize={width:g,height:m},i.viewportScroll={top:p,left:f},i.totalScrollSize=d,i.offsetWithinScroller=h}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:s,left:i,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${s}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:s,_last:i,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:s}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:s-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:s}=this._scrollIntoViewTarget||{};s&&e?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Pt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ct({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,s)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const s of e)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Ir(t){const e=window.getComputedStyle(t);return{marginTop:Je(e.marginTop),marginRight:Je(e.marginRight),marginBottom:Je(e.marginBottom),marginLeft:Je(e.marginLeft)}}function Je(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Vs(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Mr(t,e=!1){const s=[];let i=e?t:Vs(t);for(;i!==null;)s.push(i),i=Vs(i);return s}function Dr(t,e=!1){let s=!1;return Mr(t,e).filter(i=>{if(s)return!1;const n=getComputedStyle(i);return s=n.position==="fixed",n.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr=t=>t,jr=(t,e)=>v`${e}: ${JSON.stringify(t,null,2)}`;class Vr extends vt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,i)=>jr(s,i+this._first),this._keyFunction=(s,i)=>Fr(s,i+this._first),this._items=[],e.type!==q.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const s=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)s.push(this._items[i]);return Ai(s,this._keyFunction,this._renderItem)}update(e,[s]){this._setFunctions(s);const i=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(e,s):this._initialize(e,s),i?Y:this.render()}async _updateVirtualizerConfig(e,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,s)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:s,keyFunction:i}=e;s&&(this._renderItem=(n,r)=>s(n,r+this._first)),i&&(this._keyFunction=(n,r)=>i(n,r+this._first))}_makeVirtualizer(e,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:n,items:r}=s;this._virtualizer=new Nr({hostElement:e,layout:i,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,s){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Br=ne(Vr),Hr=(t,e)=>{if(!t||!e)return;const s=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(i=>s.includes(i)?[]:[[i,void 0]]))};class Ur extends we{_props;render(e){return Y}update(e,[s]){return this._props!==s&&Object.assign(e.element,Hr(this._props,s),this._props=s),Y}}const Yr=ne(Ur);function Xr(t){return()=>t}const Kr=Xr(),Ri=Kr,ut=t=>t,ls=(t,...e)=>typeof t=="function"?t(...e):t,Jr=t=>{const e=Se(),s=I(()=>new CSSStyleSheet,[]);E(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,s]},[]),E(()=>{s.replaceSync(t)},[t])};function tt(t){return t?e=>e?.[t]:ut}const Wr=t=>{const e=tt(t);return s=>typeof s=="string"?s:e(s)?.toString()||""},Gr=t=>e=>{const s={};for(const i in e)t.includes(i)&&(s[i]=e[i]);return s},qr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Zr=pe`
	:host {
		display: block;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(200, 200, 200, 0.25);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${qr}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Qr=({index:t,itemHeight:e,auto:s})=>pe`
	${k(!s,()=>pe`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${t||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,eo=t=>{const e=t==="auto",[s,i]=Q(e?40:t);return[s,n=>e?i(n):void 0]},ki=Vn(()=>Ri);customElements.define("cosmoz-keybinding-provider",ki.Provider);const cs=t=>{const e=I(()=>({}),[]);return I(()=>Object.assign(e,t),[e,...Object.values(t)])},ke=(t,e)=>{const s=Pi(ki),i=cs(t);E(()=>s(i),e)},to=Symbol("listbox.navigate.up"),so=Symbol("listbox.navigate.down"),io=Symbol("listbox.select"),no=({onUp:t,onDown:e,onEnter:s})=>{const i=Se();ke({activity:to,callback:t,element:()=>i},[]),ke({activity:so,callback:e,element:()=>i},[]),ke({activity:io,callback:s,element:()=>i},[])},ro=({items:t,onSelect:e,defaultIndex:s=0})=>{const[i,n]=Q({index:s}),{index:r}=i,{length:o}=t;return E(()=>{n({index:i.index<0?s:Math.min(i.index,t.length-1),scroll:!0})},[t,s]),no({onUp:x(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:x(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:x(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:i,highlight:x(a=>n({index:a}),[]),select:x(a=>e?.(a),[e])}},oo=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function ae(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:oo(t)?Array.from(t):[t]}const jt=(t,e=ut)=>s=>{const i=ae(t).map(e);return ae(s).filter(n=>!i.includes(e(n)))},ao=(t,e)=>e?s=>s!=null&&ae(t).find(i=>i[e]===s[e]):s=>s!=null&&ae(t).includes(s),lo=(t,e)=>{if(!e||!t)return t;const s=t.toLowerCase().indexOf(e.toLowerCase());if(s<0)return t;const i=s+e.length;return[t.slice(0,s),v`<mark>${t.slice(s,i)}</mark>`,t.slice(i)]},co=(t=ut)=>(e,s,{highlight:i,select:n,textual:r=ut,query:o,isSelected:a})=>{const l=r(e),c=lo(l,o),u=t(c,e,s);return v`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${s}
				@mouseenter=${()=>i(s)}
				@click=${()=>n(e)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},uo=({itemRenderer:t=co(),...e})=>{const s=cs(e);return x((i,n)=>t(i,n,s),[s,t])},ho=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],po=({value:t,valueProperty:e,items:s,onSelect:i,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=I(()=>ao(t,e),[t,e]),h=I(()=>s.slice(),[s,u]),{position:d,highlight:p,select:f}=ro({items:h,onSelect:i,defaultIndex:isNaN(n)?void 0:Number(n)}),[m,g]=eo(l);return{position:d,items:h,height:Math.min(c,h.length)*m,highlight:p,select:f,itemHeight:m,setItemHeight:g,renderItem:uo({itemRenderer:a,items:h,position:d,highlight:p,select:f,textual:o,query:r,isSelected:u})}},Bs=Ri,fo=t=>{const e=le(void 0),{position:s,items:i,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=po(t);return E(()=>{const l=e.current?.[Wt];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Bs)},[i]),E(()=>{if(!s.scroll)return;const l=e.current?.[Wt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(s.index)?.scrollIntoView({block:"nearest"}),Bs);return}l.element(s.index)?.scrollIntoView({block:"nearest"})}},[s]),Jr(Qr({...s,itemHeight:o,auto:t.itemHeight==="auto"})),v`<div
			class="items"
			style="min-height: ${r}px"
			${xe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Br({items:i,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",X(fo,{styleSheets:[os(Zr)]}));const mo=({multi:t,...e},s)=>v`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Yr(Gr(ho)(e))}
		>${s}</cosmoz-listbox
	>`,go=wt`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
	}

	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		margin-right: -4px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}

	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`,_o=v`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`,yo=({onClear:t,disabled:e})=>v`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${s=>s.preventDefault()}
	>
		<slot></slot>
	</div>
	${k(t&&!e,()=>v`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${s=>s.preventDefault()}
				@click=${t}
			>
				${_o}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",X(yo,{observedAttributes:["disabled"],styleSheets:[os(go)]}));const bo=({content:t,onClear:e,disabled:s,hidden:i,className:n="chip",slot:r})=>v`<cosmoz-autocomplete-chip
		class=${J(n)}
		slot=${J(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${s}
		?hidden=${i}
		.onClear=${e}
		title=${J(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,vo=({value:t,min:e=0,onDeselect:s,textual:i,disabled:n,chipRenderer:r=bo})=>[...t.filter(Boolean).map(o=>r({item:o,content:i(o),onClear:t.length>e&&(()=>s(o)),disabled:n,slot:"control"})),r({item:null,content:v`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],wo=pe`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",X(()=>G,{styleSheets:[wo]}));const xo=wt`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		color: var(--cosmoz-listbox-color, #101010);
	}
`,us=(t,e=()=>({}))=>{const s={type:t,toString(){return t}};return Object.assign((...n)=>Object.assign(e(...n),s),s)},Hs=t=>t.type||t.toString(),Us=t=>Array.isArray(t)?t:[t],So=(t,e)=>{const s=Us(e),i=(s.every(Array.isArray)?s:[s]).map(([n,r])=>({actions:Us(n).map(Hs),handle:r}));return(n=t,r)=>{const o=i.find(a=>a.actions.includes(Hs(r)));return o?o.handle(n,r):n}},he={pending:"pending",rejected:"rejected",resolved:"resolved"},Ni={error:void 0,result:void 0,state:he.pending},Ii=us(he.pending),Mi=us(he.resolved,t=>({result:t})),Di=us(he.rejected,t=>({error:t})),Po=So(Ni,[[Ii,()=>({error:void 0,result:void 0,state:he.pending})],[Mi,(t,{result:e})=>({error:void 0,result:e,state:he.resolved})],[Di,(t,{error:e})=>({error:e,result:void 0,state:he.rejected})]]),Fi=t=>{const[{error:e,result:s,state:i},n]=He(Po,Ni);return E(()=>{if(!t)return;let r=!1;return n(Ii()),t.then(o=>!r&&n(Mi(o)),o=>!r&&n(Di(o))),()=>{r=!0}},[t]),[s,e,i]},Co=Symbol("autocomplete.deselect.last"),Eo=Symbol("autocomplete.search.when.selected"),Ys=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Oo=(t,e,s)=>{if(!e)return t;const i=Ys(e.toLowerCase()),n=[];for(const r of t){const a=Ys(s(r).toLowerCase()).indexOf(i);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},$o=t=>t===!1||t==null?[]:t,To=(t,e,s)=>t.dispatchEvent(new CustomEvent(e,{detail:s})),Xs=[],zo=t=>(...e)=>{let s;const i=()=>{s&&cancelAnimationFrame(s)};return i(),s=requestAnimationFrame(()=>{s=void 0,t(...e)}),i},Lo=(t,e,s)=>x(i=>{e?.(i),t.dispatchEvent(new CustomEvent(s,{detail:i}))},[e]),Ao=({value:t,text:e,onChange:s,onText:i,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:h,keepQuery:d,preserveOrder:p,defaultIndex:f,externalSearch:m,disabled:g,lazyOpen:y})=>{const _=r!=null?Number(r):void 0,w=I(()=>(c??Wr)(l),[c,l]),P=Se(),[C,$]=Ie("opened",!1),T=!e,L=I(()=>e?.trim(),[e]),A=Lo(P,i,"text"),F=x(b=>{s?.(b,()=>$(!1)),To(P,"value",b)},[s]),[M,ge]=Q([]),K=!!(y&&!L),j=I(()=>K?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:L,active:C}):a).then($o),[a,C,L,K]),V=I(()=>ae(t),[t]);E(()=>j.then(ge),[j]),ke({activity:Co,callback:()=>{const b=ae(V);b.length>0&&F(b.slice(0,-1))},check:()=>!g&&T&&P.matches(":focus-within"),element:()=>P},[]),ke({activity:Eo,callback:b=>{const N=ae(V),B=_===1;N.length>0&&B&&b.key.length===1&&F(N.slice(0,-1))},allowDefault:!0,check:()=>!g&&T&&P.matches(":focus-within"),element:()=>P},[_]),E(()=>{!C&&!d&&A("")},[C,d]),E(()=>{P.toggleAttribute("opened",!!C)},[C]);const D=cs({onText:A,onChange:F,value:V,limit:_,min:o,keepQuery:d,keepOpened:h,setOpened:$,onSelect:n,valueProperty:u}),[,,se]=Fi(j);return{limit:_,opened:C,query:L,textual:w,value:V,source$:j,loading:se==="pending",items:I(()=>{if(!C||K)return Xs;const b=p?M:[...V,...jt(V,tt(u))(M)];return m?b:Oo(b,L,w)},[M,C,L,w,T,V,p,u,m,K]),onToggle:x(b=>{g||$(b.newState==="open")},[g]),onText:x(b=>{g||(A(b.target.value),$(!0))},[g,A,e,$]),onSelect:x(b=>{if(g)return;D.onSelect?.(b,D);const{onChange:N,onText:B,limit:ie,min:Lt,value:At,keepQuery:Rt,keepOpened:kt,setOpened:Nt,valueProperty:Pe}=D;Rt||B(""),kt||Nt(!1);const ce=ae(At),R=tt(Pe),Ue=ce.some(Ye=>R(Ye)===R(b));Ue&&ce.length===Lt||N((Ue?jt(b,R)(ce):[...ce,b]).slice(-ie))},[g,D]),onDeselect:x(b=>{g||D.onChange(jt(b,tt(D.valueProperty))(D.value))},[g,D]),defaultIndex:L!==void 0&&L?.length>0?0:f}},Ro=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),s=t.shadowRoot.querySelector(".badge");s.hidden=!0;for(const a of e)a.hidden=!1;const n=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=e.length-r;for(s.querySelector("span").textContent="+"+o.toString(),s.hidden=o<1;r<e.length;r++)e[r].hidden=!0},ko=({value:t,opened:e,wrap:s,limit:i})=>{const n=Se(),r=!(s||i===1),o=I(()=>zo(()=>Ro(n)),[]),[a,l]=Q(0);nt(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{l(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),nt(()=>r?o():void 0,[r,a,e,t])},No=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),Io=({opened:t,isSingle:e,showSingle:s,hasResultsOrQuery:i})=>!t||e&&!s?!1:i,Mo=t=>{const{opened:e,invalid:s,errorMessage:i,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:h,onToggle:d,onDeselect:p,value:f,limit:m,min:g,showSingle:y,items:_,source$:w,loading:P,chipRenderer:C}=t,$=m===1,T=$&&f?.[0]!=null,L=P||_.length>0||u!=null&&u.length>0;return v`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${o}
			.opened=${e}
			@dropdown-toggle=${d}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${n}
				.placeholder=${T?void 0:r}
				?no-label-float=${a}
				?always-float-label=${f?.length>0||l}
				?readonly=${T}
				?disabled=${o}
				?invalid=${ve([w,s],()=>De(w.then(()=>s,()=>!0),s))}
				.errorMessage=${ve([w,i],()=>De(w.then(()=>i,A=>A.message),i))}
				.value=${xt(u)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${No}
				?data-one=${$}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${vo({value:f,min:g,onDeselect:p,textual:c,disabled:o,chipRenderer:C})}
			</cosmoz-input>

			${k(Io({opened:e,isSingle:T,showSingle:y,hasResultsOrQuery:L}),()=>mo({...t,items:_,multi:!$},k(P,()=>v`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>k(u!=null&&u.length>0&&_.length===0,()=>v`<slot name="no-result">
											<p class="no-result">${$r("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},ji=t=>{const e={...t,...Ao(t)};return ko(e),Mo(e)},Vi=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Do=t=>{const{onChange:e,onText:s,...i}=t,[n,r]=Ie("value");return E(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),ji({...i,value:n,onChange:x((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:x(o=>{t.text=o,s?.(o)},[s])})},Bi=[os(xo)],Hi={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",X(ji,{observedAttributes:Vi,styleSheets:Bi,shadowRootInit:Hi}));customElements.define("cosmoz-autocomplete",X(Do,{observedAttributes:Vi,styleSheets:Bi,shadowRootInit:Hi}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui="important",Fo=" !"+Ui,Yi=ne(class extends we{constructor(t){if(super(t),t.type!==q.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const n=e[i];if(n!=null){this.ft.add(i);const r=typeof n=="string"&&n.endsWith(Fo);i.includes("-")||r?s.setProperty(i,r?n.slice(0,-11):n,r?Ui:""):s[i]=n}}return Y}});class jo extends Promise{constructor(e){const s={};super((i,n)=>Object.assign(s,{resolve:i,reject:n})),Object.assign(this,s),e?.(s.resolve,s.reject)}resolve=()=>{}}const Xi={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Vo=t=>{const{slide:e}=t,[s,i]=Q([]);return nt(()=>void Object.assign(t.style,Xi.host),[]),E(()=>{if(e==null)return;const n={animationEnd$:new jo,...e};i((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===n.id&&l!==!0);return o!==-1?[...r.slice(0,o),n,...r.slice(o+1,r.length)]:[...r,n]})},[e]),nt(async()=>{if(s.filter(l=>!l.out).length<2){const l=s[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const n=s[s.length-1],r=s[s.length-2],o=n.el,a=r.el;r.out=!0,o&&a&&await n.animation?.(o,a),i((l=[])=>l.filter(c=>c!==r))},[s]),{slides:s}},Bo=t=>v`<div
		${xe(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${Yi(Xi.slide)}
	>
		${ve([t],()=>t.content??t.render?.(t))}
	</div>`,Ho=({slides:t})=>ve([t],()=>Ai(t,({id:e})=>e,Bo)),Uo=t=>Ho(Vo(t));customElements.define("cosmoz-slider",X(Uo,{useShadowDOM:!1}));const We=(t,e)=>{const s=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},Yo=(t,e)=>{const s=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},Xo=()=>v`<style>
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
</style>`;customElements.define("cz-spinner",X(Xo));const Ko=te(class extends ee{constructor(t,e){super(t,e),this.dispatchEvent=(...s)=>{e.host.dispatchEvent.apply(e.host,s)}}update(){return this.dispatchEvent}}),Vt=(t,e=.08,s=.001)=>{const[i,n]=Q(null);return E(()=>{if(i==null){n(t);return}if(e>=1){n(t);return}const r=i;window.requestAnimationFrame(()=>{const o=t-r;n(Math.abs(o)<s?t:i+o*e)})},[i,n,t,e,s]),i},ht="dragging",Gt="init",Jo={status:Gt,deltaX:0,deltaY:0,lastX:0,lastY:0,timestamp:0},Wo=(t,e)=>{switch(t.status){case Gt:switch(e.type){case"start":return{...t,status:ht,lastX:e.x,lastY:e.y,timestamp:e.timestamp}}break;case ht:switch(e.type){case"stop":return{...t,status:Gt,deltaX:0,deltaY:0,timestamp:0};case"drag":return{...t,deltaX:e.x-t.lastX,deltaY:e.y-t.lastY,lastX:e.x,lastY:e.y,timestamp:e.timestamp}}}return t},Go=()=>{const t=Se(),[e,s]=He(Wo,Jo),i=x(o=>{o.stopPropagation(),s({type:"start",x:o.pageX,y:o.pageY,timestamp:o.timeStamp})},[s]),n=x(o=>s({type:"drag",x:o.pageX,y:o.pageY,timestamp:o.timeStamp}),[s]),r=x(()=>s({type:"stop"}),[s]);return E(()=>{if(e.status!==ht)return;const o={passive:!0};return t.ownerDocument.addEventListener("mousemove",n,o),t.ownerDocument.addEventListener("mouseup",r,o),()=>{t.ownerDocument.removeEventListener("mousemove",n,o),t.ownerDocument.removeEventListener("mouseup",r,o)}},[e.status,r,n]),[e.status,e.deltaX,e.deltaY,e.timestamp,i]},Fe=(t,e,s)=>Math.max(e,Math.min(s,t)),hs=(t,e,s,i)=>s/i<t/e?s/t:i/e,qo=(t,e,s,i)=>s/i>t/e?s/t:i/e,Zo=t=>t.reduce((s,i)=>[s[0]+i[0],s[1]+i[1]],[0,0]).map(s=>s/t.length),Qo=(t,e,s,i,n)=>{const r=hs(t,e,s,i),o=r*n,a=t*o,l=e*o,c=a<s?(-s+a)/2:(s-a)/2,u=a<s?(s-a)/2:(-s+a)/2,h=l<i?(-i+l)/2:(i-l)/2,d=l<i?(i-l)/2:(-i+l)/2;return{x:[c,u],y:[h,d]}},qt="init",dt="dragging",ea={status:qt,deltaX:0,deltaY:0,lastX:0,lastY:0,timestamp:0},ta=(t,e)=>{switch(t.status){case qt:switch(e.type){case"start":return{...t,status:dt,lastX:e.x,lastY:e.y,timestamp:e.timestamp}}break;case dt:switch(e.type){case"stop":return{...t,status:qt,deltaX:0,deltaY:0,timestamp:0};case"drag":return{...t,deltaX:e.x-t.lastX,deltaY:e.y-t.lastY,lastX:e.x,lastY:e.y,timestamp:e.timestamp};case"one-little-finger":return{...t,lastX:e.x,lastY:e.y}}}return t},Ge=t=>Zo(Array.from(t.touches).map(e=>[e.pageX,e.pageY])),sa=()=>{const[t,e]=He(ta,ea),s=x(o=>{if(o.touches.length>1)return;const[a,l]=Ge(o);e({type:"start",x:a,y:l,timestamp:o.timeStamp})},[e]),i=x(o=>{const[a,l]=Ge(o);e({type:"drag",x:a,y:l,timestamp:o.timeStamp})},[e]),n=x(o=>{if(o.touches.length===0){e({type:"stop"});return}const[a,l]=Ge(o);e({type:"one-little-finger",x:a,y:l})},[e]),r=x(o=>{const[a,l]=Ge(o);e({type:"one-little-finger",x:a,y:l})},[e]);return E(()=>{if(t.status!==dt)return;const o={passive:!0};return document.addEventListener("touchstart",r,o),document.addEventListener("touchmove",i,o),document.addEventListener("touchend",n,o),()=>{document.removeEventListener("touchstart",r,o),document.removeEventListener("touchmove",i,o),document.removeEventListener("touchend",n,o)}},[t.status,r,i,n]),[t.status,t.deltaX,t.deltaY,t.timestamp,s]},ia=(t,e)=>{"ResizeObserver"in window&&E(()=>{if(e==null)return;const s=new ResizeObserver(([{contentRect:i}])=>t(i));return s.observe(e),t(e.getBoundingClientRect()),()=>s.unobserve(e)},[t,e])},Ki="init",pt="pinching",Ji={status:Ki,lastDistance:0,delta:0,centerX:0,centerY:0},na=(t,e)=>{switch(t.status){case Ki:switch(e.type){case"start":return{...t,status:pt,lastDistance:e.initialDistance,delta:0,centerX:e.centerX,centerY:e.centerY}}break;case pt:switch(e.type){case"stop":return Ji;case"pinch":return{...t,delta:e.distance-t.lastDistance,lastDistance:e.distance,centerX:e.centerX,centerY:e.centerY}}}return t},Ks=(t,e)=>Math.hypot(e.pageX-t.pageX,e.pageY-t.pageY),Js=(t,e)=>[(t.pageX+e.pageX)/2,(t.pageY+e.pageY)/2],ra=()=>{const[t,e]=He(na,Ji),s=x(r=>{if(r.touches.length<2)return;const[o,a]=Js(r.touches[0],r.touches[1]);e({type:"start",initialDistance:Ks(r.touches[0],r.touches[1]),centerX:o,centerY:a})},[e]),i=x(r=>{if(r.touches.length<2)return;const[o,a]=Js(r.touches[0],r.touches[1]);e({type:"pinch",distance:Ks(r.touches[0],r.touches[1]),centerX:o,centerY:a})},[e]),n=x(r=>{r.touches.length>2||e({type:"stop"})},[e]);return E(()=>{if(t.status!==pt)return;const r={passive:!0};return document.addEventListener("touchmove",i,r),document.addEventListener("touchend",n,r),()=>{document.removeEventListener("touchmove",i,r),document.removeEventListener("touchend",n,r)}},[t.status,n,i]),[t.status,t.delta,s,t.centerX,t.centerY]},Wi="empty",Ot="loading",Gi="loaded",ds="error",oa={status:Wi,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0},aa=1.1,la=t=>aa/t,ca=t=>2*t,qi=(t,e,s,i)=>{const n=hs(t,e,s,i),r=qo(t*n,e*n,s,i);return Math.max(la(n),ca(r))},ua=(t,e,s,i,n)=>Fe(t,1,qi(e,s,i,n)),Ws=.2,Gs=(t,e,s,i)=>{if(s==null||i==null)return{panX:t.panX,panY:t.panY};const n=e/t.zoom;return{panX:s-(s-t.panX)*n,panY:i-(i-t.panY)*n}},qs=t=>{const e=Qo(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:Fe(t.panX,e.x[0],e.x[1]),panY:Fe(t.panY,e.y[0],e.y[1])}},ha=(t,e)=>{switch(e.type){case"load":return{...t,status:Ot};default:return t}},da=(t,e)=>{switch(e.type){case"loaded":return{...t,status:Gi,...e.dimensions};case"error":return{...t,status:ds};default:return t}},pa=(t,e)=>{switch(e.type){case"load":return{...t,status:Ot,panX:0,panY:0};case"zoom":{const s=ua(e.zoom,t.iw,t.ih,t.cw,t.ch),i=Gs(t,s,e.originX,e.originY);return qs({...t,zoom:s,...i})}case"zoomBy":{const s=qi(t.iw,t.ih,t.cw,t.ch),i=e.bounded?Fe(t.zoom+e.delta,1,s):Fe(t.zoom+e.delta,1-Ws,s*(1+Ws)),n=Gs(t,i,e.originX,e.originY);return{...t,zoom:i,...n}}case"pan":return{...t,panX:t.panX+e.dx,panY:t.panY+e.dy};case"panEnd":return qs(t);default:return t}},fa=(t,e)=>{switch(e.type){case"load":return{...t,status:Ot};default:return t}},ma=(t,e)=>{if(e.type==="resize")return{...t,cw:e.rect.width,ch:e.rect.height};switch(t.status){case Wi:return ha(t,e);case Ot:return da(t,e);case Gi:return pa(t,e);case ds:return fa(t,e);default:return t}},ga=(t,e,s,i)=>{const{iw:n=100,ih:r=100,cw:o=100,ch:a=100}=t,l=hs(n,r,o,a),c=l*e;return{position:"absolute",top:"50%",left:"50%",transform:["translate(-50%, -50%)",`translate(${s}px, ${i}px)`,`scale(${c})`].join(" ")}},Zs=(t,e,s)=>{const i=s.current?.getBoundingClientRect();return i?{originX:t-i.left-i.width/2,originY:e-i.top-i.height/2}:{}},_a=(t=.3,e=.08)=>{const[s,i]=He(ma,oa),n=x(()=>i({type:"load"}),[i]),r=x(b=>i({type:"loaded",dimensions:b}),[i]),o=x(()=>i({type:"error"}),[i]),a=x((b,N=!0,B,ie)=>i({type:"zoomBy",delta:b,bounded:N,originX:B,originY:ie}),[i]),l=x(b=>i({type:"zoom",zoom:b}),[i]),c=le(),u=x(b=>b&&i({type:"resize",rect:b}),[i]),h=x(()=>u(c.current&&c.current.getBoundingClientRect()),[u,c]);ia(u,c.current);const d=x(b=>r({iw:b.target.naturalWidth,ih:b.target.naturalHeight}),[r]),p=x(b=>{b.preventDefault();const{originX:N,originY:B}=Zs(b.clientX,b.clientY,c);a(-Math.sign(b.deltaY)*.8,!0,N,B)},[a,c]),[f,m,g,y,_]=ra(),w=f===pt;E(()=>{if(m===0)return;const{originX:b,originY:N}=Zs(y,_,c);a(m*.01*s.zoom,!1,b,N)},[m,a]),E(()=>!w&&a(0),[w,a]);const[P,C,$,T,L]=Go(),[A,F,M,ge,K]=sa(),j=P===ht||A===dt;I(()=>{(C!==0||$!==0)&&i({type:"pan",dx:C,dy:$})},[T]),I(()=>{(F!==0||M!==0)&&i({type:"pan",dx:F,dy:M})},[ge]),E(()=>{j||i({type:"panEnd"})},[j]);const V=Vt(s.panX,j?.9:t),D=Vt(s.panY,j?.9:t),se=Vt(s.zoom,w?.8:e);return{...s,load:n,loaded:r,error:o,zoomBy:a,zoomTo:l,resize:h,startMousePan:L,startTouchPan:K,startPinch:g,onImageLoad:d,onWheel:p,containerRef:c,style:ga(s,se,V,D)}},ya=({src:t,disabled:e,panStiffness:s,zoomStiffness:i})=>{const{status:n,zoom:r,load:o,error:a,zoomTo:l,resize:c,startMousePan:u,startTouchPan:h,startPinch:d,onImageLoad:p,onWheel:f,style:m,containerRef:g}=_a(s,i);if(E(o,[t]),as({zoomTo:l,resize:c,zoom:r},[l,c,r]),!t)return G;const y=Ko();E(()=>y(new CustomEvent("zoom-changed",{detail:{value:r}})),[y,r]),E(()=>y(new CustomEvent("status-changed",{detail:{value:n}})),[y,n]);const _=x(w=>{h(w),d(w)},[h,d]);return v`
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
				user-select: none;
			}
		</style>
		<div
			class="container ${n}"
			style="pointer-events: ${e?"none":"all"}"
			@wheel=${f}
			${xe(w=>g.current=w)}
		>
			${!t||n===ds?G:v`
						<img
							src=${t}
							draggable="false"
							@mousedown=${u}
							@touchstart=${_}
							@load=${p}
							@error=${a}
							style=${Yi(m)}
						/>
				  `}
		</div>
	`};class ba extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",X(ya,{observedAttributes:["src","disabled","pan-stiffness","zoom-stiffness"],baseElement:ba}));/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let va=/(url\()([^)]*)(\))/g,wa=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,qe,U;function Ne(t,e){if(t&&wa.test(t)||t==="//")return t;if(qe===void 0){qe=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",qe=s.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),qe)try{return new URL(t,e).href}catch{return t}return U||(U=document.implementation.createHTMLDocument("temp"),U.base=U.createElement("base"),U.head.appendChild(U.base),U.anchor=U.createElement("a"),U.body.appendChild(U.anchor)),U.base.href=e,U.anchor.href=t,U.anchor.href||t}function ps(t,e){return t.replace(va,function(s,i,n,r){return i+"'"+Ne(n.replace(/["']/g,""),e)+"'"+r})}function fs(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xa=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Sa=xa&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Pa=window.Polymer&&window.Polymer.rootPath||fs(document.baseURI||window.location.href),ft=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Zt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ca=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ea=window.Polymer&&window.Polymer.legacyOptimizations||!1,Oa=window.Polymer&&window.Polymer.legacyWarnings||!1,$a=window.Polymer&&window.Polymer.syncInitialRender||!1,Qt=window.Polymer&&window.Polymer.legacyUndefined||!1,Ta=window.Polymer&&window.Polymer.orderedComputed||!1,Qs=window.Polymer&&window.Polymer.removeNestedTemplates||!1,za=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let La=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Aa=0;const fe=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let s=Aa++;function i(n){let r=n.__mixinSet;if(r&&r[s])return n;let o=e,a=o.get(n);if(!a){a=t(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[s]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ms={},Zi={};function ei(t,e){ms[t]=Zi[t.toLowerCase()]=e}function ti(t){return ms[t]||Zi[t.toLowerCase()]}function Ra(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class je extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,s){if(e){let i=ti(e);return i&&s?i.querySelector(s):i}return null}attributeChangedCallback(e,s,i,n){s!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Ne(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=fs(s)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Zt&&ti(e)!==void 0)throw ei(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ei(e,this),Ra(this)}}}je.prototype.modules=ms;customElements.define("dom-module",je);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ka="link[rel=import][type~=css]",Na="include",si="shady-unscoped";function Qi(t){return je.import(t)}function ii(t){let e=t.body?t.body:t;const s=ps(e.textContent,t.baseURI),i=document.createElement("style");return i.textContent=s,i}function Ia(t){const e=t.trim().split(/\s+/),s=[];for(let i=0;i<e.length;i++)s.push(...Ma(e[i]));return s}function Ma(t){const e=Qi(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const s=[];s.push(...tn(e));const i=e.querySelector("template");i&&s.push(...en(i,e.assetpath)),e._styles=s}return e._styles}function en(t,e){if(!t._styles){const s=[],i=t.content.querySelectorAll("style");for(let n=0;n<i.length;n++){let r=i[n],o=r.getAttribute(Na);o&&s.push(...Ia(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=ps(r.textContent,e)),s.push(r)}t._styles=s}return t._styles}function Da(t){let e=Qi(t);return e?tn(e):[]}function tn(t){const e=[],s=t.querySelectorAll(ka);for(let i=0;i<s.length;i++){let n=s[i];if(n.import){const r=n.import,o=n.hasAttribute(si);if(o&&!r._unscopedStyle){const a=ii(r);a.setAttribute(si,""),r._unscopedStyle=a}else r._style||(r._style=ii(r));e.push(o?r._unscopedStyle:r._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const de=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function es(t){return t.indexOf(".")>=0}function me(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Fa(t,e){return t.indexOf(e+".")===0}function mt(t,e){return e.indexOf(t+".")===0}function gt(t,e,s){return e+s.slice(t.length)}function Te(t){if(Array.isArray(t)){let e=[];for(let s=0;s<t.length;s++){let i=t[s].toString().split(".");for(let n=0;n<i.length;n++)e.push(i[n])}return e.join(".")}else return t}function sn(t){return Array.isArray(t)?Te(t).split("."):t.toString().split(".")}function H(t,e,s){let i=t,n=sn(e);for(let r=0;r<n.length;r++){if(!i)return;let o=n[r];i=i[o]}return s&&(s.path=n.join(".")),i}function ni(t,e,s){let i=t,n=sn(e),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(i=i[a],!i)return}i[r]=s}else i[e]=s;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _t={},ja=/-[a-z]/g,Va=/([A-Z])/g;function nn(t){return _t[t]||(_t[t]=t.indexOf("-")<0?t:t.replace(ja,e=>e[1].toUpperCase()))}function $t(t){return _t[t]||(_t[t]=t.replace(Va,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ba=0,rn=0,be=[],Ha=0,ts=!1,on=document.createTextNode("");new window.MutationObserver(Ua).observe(on,{characterData:!0});function Ua(){ts=!1;const t=be.length;for(let e=0;e<t;e++){let s=be[e];if(s)try{s()}catch(i){setTimeout(()=>{throw i})}}be.splice(0,t),rn+=t}const Ya={run(t){return ts||(ts=!0,on.textContent=Ha++),be.push(t),Ba++},cancel(t){const e=t-rn;if(e>=0){if(!be[e])throw new Error("invalid async handle: "+t);be[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xa=Ya,an=fe(t=>{class e extends t{static createProperties(i){const n=this.prototype;for(let r in i)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,n){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,n))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[i];return n||(n=this.constructor.attributeNameForProperty(i),this.__dataAttributes[n]=i),n}_definePropertyAccessor(i,n){Object.defineProperty(this,i,{get(){return this.__data[i]},set:n?function(){}:function(r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,n){this._setPendingProperty(i,n)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,n,r){let o=this.__data[i],a=this._shouldPropertyChange(i,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=o),this.__data[i]=n,this.__dataPending[i]=n),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Xa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(i,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,n,r)),this.__dataCounter--}_shouldPropertiesChange(i,n,r){return!!n}_propertiesChanged(i,n,r){}_shouldPropertyChange(i,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(i,n,r,o){n!==r&&this._attributeToProperty(i,r),super.attributeChangedCallback&&super.attributeChangedCallback(i,n,r,o)}_attributeToProperty(i,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[i]||i;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,n,r){this.__serializing=!0,r=arguments.length<3?this[i]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(i=de(i)),o===void 0?i.removeAttribute(r):i.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i?.toString()}}_deserializeValue(i,n){switch(n){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ln={};let Ze=HTMLElement.prototype;for(;Ze;){let t=Object.getOwnPropertyNames(Ze);for(let e=0;e<t.length;e++)ln[t[e]]=!0;Ze=Object.getPrototypeOf(Ze)}const Ka=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Ja(t,e){if(!ln[e]){let s=t[e];s!==void 0&&(t.__data?t._setPendingProperty(e,s):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=s))}}const Wa=fe(t=>{const e=an(t);class s extends e{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(nn(n[r]))}static attributeNameForProperty(n){return $t(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Ka(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){Ja(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ga={"dom-if":!0,"dom-repeat":!0};let ri=!1,oi=!1;function qa(){if(!ri){ri=!0;const t=document.createElement("textarea");t.placeholder="a",oi=t.placeholder===t.textContent}return oi}function Za(t){qa()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Qa=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,s,i)=>{const n=s.getAttribute(i);if(t&&i.startsWith("on-")){e.setAttribute(i,t.createScript(n,i));return}e.setAttribute(i,n)}})();function el(t){let e=t.getAttribute("is");if(e&&Ga[e]){let s=t;for(s.removeAttribute("is"),t=s.ownerDocument.createElement(e),s.parentNode.replaceChild(t,s),t.appendChild(s);s.attributes.length;){const{name:i}=s.attributes[0];Qa(t,s,i),s.removeAttribute(i)}}return t}function cn(t,e){let s=e.parentInfo&&cn(t,e.parentInfo);if(s){for(let i=s.firstChild,n=0;i;i=i.nextSibling)if(e.parentIndex===n++)return i}else return t}function tl(t,e,s,i){i.id&&(e[i.id]=s)}function sl(t,e,s){if(s.events&&s.events.length)for(let i=0,n=s.events,r;i<n.length&&(r=n[i]);i++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function il(t,e,s,i){s.templateInfo&&(e._templateInfo=s.templateInfo,e._parentTemplateInfo=i)}function nl(t,e,s){return t=t._methodHost||t,function(n){t[s]?t[s](n,n.detail):console.warn("listener method `"+s+"` not defined")}}const rl=fe(t=>{class e extends t{static _parseTemplate(i,n){if(!i._templateInfo){let r=i._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,r,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,n,r){return this._parseTemplateNode(i.content,n,r)}static _parseTemplateNode(i,n,r){let o=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),Za(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(i,n,r){if(!(i.localName==="script"||i.localName==="style"))for(let o=i.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=el(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,i.removeChild(u),u=l;if(n.stripWhiteSpace&&!o.textContent.trim()){i.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(i,n,r){let o=i,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,n,r){let o=!1,a=Array.from(i.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(i,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(i,n,r,o,a){return o.slice(0,3)==="on-"?(i.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(i){let n=i._templateInfo;return n&&n.content||i.content}_stampTemplate(i,n){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),n=n||this.constructor._parseTemplate(i);let r=n.nodeInfoList,o=n.content||i.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,h;c<u&&(h=r[c]);c++){let d=l[c]=cn(a,h);tl(this,a.$,d,h),il(this,d,h,n),sl(this,d,h)}return a=a,a}_addMethodEventListenerToNode(i,n,r,o){o=o||i;let a=nl(o,n,r);return this._addEventListenerToNode(i,n,a),a}_addEventListenerToNode(i,n,r){i.addEventListener(n,r)}_removeEventListenerFromNode(i,n,r){i.removeEventListener(n,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ve=0;const Be=[],O={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},un="__computeInfo",ol=/[A-Z]/;function Bt(t,e,s){let i=t[e];if(!i)i=t[e]={};else if(!t.hasOwnProperty(e)&&(i=t[e]=Object.create(t[e]),s))for(let n in i){let r=i[n],o=i[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return i}function ze(t,e,s,i,n,r){if(e){let o=!1;const a=Ve++;for(let l in s){let c=n?me(l):l,u=e[c];if(u)for(let h=0,d=u.length,p;h<d&&(p=u[h]);h++)(!p.info||p.info.lastRun!==a)&&(!n||gs(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,s,i,p.info,n,r),o=!0)}return o}return!1}function al(t,e,s,i,n,r,o,a){let l=!1,c=o?me(i):i,u=e[c];if(u)for(let h=0,d=u.length,p;h<d&&(p=u[h]);h++)(!p.info||p.info.lastRun!==s)&&(!o||gs(i,p.trigger))&&(p.info&&(p.info.lastRun=s),p.fn(t,i,n,r,p.info,o,a),l=!0);return l}function gs(t,e){if(e){let s=e.name;return s==t||!!(e.structured&&Fa(s,t))||!!(e.wildcard&&mt(s,t))}else return!0}function ai(t,e,s,i,n){let r=typeof n.method=="string"?t[n.method]:n.method,o=n.property;r?r.call(t,t.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function ll(t,e,s,i,n){let r=t[O.NOTIFY],o,a=Ve++;for(let c in e)e[c]&&(r&&al(t,r,a,c,s,i,n)||n&&cl(t,c,s))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function cl(t,e,s){let i=me(e);if(i!==e){let n=$t(i)+"-changed";return hn(t,n,s[e],e),!0}return!1}function hn(t,e,s,i){let n={value:s,queueProperty:!0};i&&(n.path=i),de(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function ul(t,e,s,i,n,r){let a=(r?me(e):e)!=e?e:null,l=a?H(t,a):t.__data[e];a&&l===void 0&&(l=s[e]),hn(t,n.eventName,l,a)}function hl(t,e,s,i,n){let r,o=t.detail,a=o&&o.path;a?(i=gt(s,i,a),r=o&&o.value):r=t.currentTarget[s],r=n?!r:r,(!e[O.READ_ONLY]||!e[O.READ_ONLY][i])&&e._setPendingPropertyOrPath(i,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function dl(t,e,s,i,n){let r=t.__data[e];ft&&(r=ft(r,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,r)}function pl(t,e,s,i){let n=t[O.COMPUTE];if(n)if(Ta){Ve++;const r=ml(t),o=[];for(let l in e)li(l,n,o,r,i);let a;for(;a=o.shift();)dn(t,"",e,s,a)&&li(a.methodInfo,n,o,r,i);Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;ze(t,n,r,s,i);)Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const fl=(t,e,s)=>{let i=0,n=e.length-1,r=-1;for(;i<=n;){const o=i+n>>1,a=s.get(e[o].methodInfo)-s.get(t.methodInfo);if(a<0)i=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),e.splice(r,0,t)},li=(t,e,s,i,n)=>{const r=n?me(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ve&&(!n||gs(t,l.trigger))&&(l.info.lastRun=Ve,fl(l.info,s,i))}};function ml(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const s=t[O.COMPUTE];let{counts:i,ready:n,total:r}=gl(t),o;for(;o=n.shift();){e.set(o,e.size);const a=s[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--i[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function gl(t){const e=t[un],s={},i=t[O.COMPUTE],n=[];let r=0;for(let o in e){const a=e[o];r+=s[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in i)e[o]||n.push(o);return{counts:s,ready:n,total:r}}function dn(t,e,s,i,n){let r=ss(t,e,s,i,n);if(r===Be)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function _l(t,e,s){let i=t.__dataLinkedPaths;if(i){let n;for(let r in i){let o=i[r];mt(r,e)?(n=gt(r,o,e),t._setPendingPropertyOrPath(n,s,!0,!0)):mt(o,e)&&(n=gt(o,r,e),t._setPendingPropertyOrPath(n,s,!0,!0))}}}function Ht(t,e,s,i,n,r,o){s.bindings=s.bindings||[];let a={kind:i,target:n,parts:r,literal:o,isCompound:r.length!==1};if(s.bindings.push(a),xl(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||$t(n)+"-changed",a.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,yl(t,e,a,u,l)}}function yl(t,e,s,i,n){if(!i.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,o={index:n,binding:s,part:i,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=fn(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:bl,info:o,trigger:l})}}}function bl(t,e,s,i,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=s[e];e=gt(c.source,l.target,e),a._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(a)}else{let u=n.evaluator._evaluateBinding(t,c,e,s,i,r);u!==Be&&vl(t,a,l,c,u)}}function vl(t,e,s,i,n){if(n=wl(e,n,s,i),ft&&(n=ft(n,s.target,s.kind,e)),s.kind=="attribute")t._valueToNodeAttribute(e,n,s.target);else{let r=s.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[O.READ_ONLY]||!e[O.READ_ONLY][r])&&e._setPendingProperty(r,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,n)}}function wl(t,e,s,i){if(s.isCompound){let n=t.__dataCompoundStorage[s.target];n[i.compoundIndex]=e,e=n.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function xl(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Sl(t,e){let{nodeList:s,nodeInfoList:i}=e;if(i.length)for(let n=0;n<i.length;n++){let r=i[n],o=s[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Pl(o,c),Cl(o,t,c)}o.__dataHost=t}}function Pl(t,e){if(e.isCompound){let s=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,n=new Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o].literal;let r=e.target;s[r]=n,e.literal&&e.kind=="property"&&(r==="className"&&(t=de(t)),t[r]=e.literal)}}function Cl(t,e,s){if(s.listenerEvent){let i=s.parts[0];t.addEventListener(s.listenerEvent,function(n){hl(n,e,s.target,i.source,i.negate)})}}function ci(t,e,s,i,n,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,s,{fn:i,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,s,{fn:i,info:o}),o}function ss(t,e,s,i,n){let r=t._methodHost||t,o=r[n.methodName];if(o){let a=t._marshalArgs(n.args,e,s);return a===Be?Be:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const El=[],pn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ol="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",$l="(?:'(?:[^'\\\\]|\\\\.)*')",Tl='(?:"(?:[^"\\\\]|\\\\.)*")',zl="(?:"+$l+"|"+Tl+")",ui="(?:("+pn+"|"+Ol+"|"+zl+")\\s*)",Ll="(?:"+ui+"(?:,\\s*"+ui+")*)",Al="(?:\\(\\s*(?:"+Ll+"?)\\)\\s*)",Rl="("+pn+"\\s*"+Al+"?)",kl="(\\[\\[|{{)\\s*",Nl="(?:]]|}})",Il="(?:(!)\\s*)?",Ml=kl+Il+Rl+Nl,hi=new RegExp(Ml,"g");function di(t){let e="";for(let s=0;s<t.length;s++){let i=t[s].literal;e+=i||""}return e}function Ut(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let i={methodName:e[1],static:!0,args:El};if(e[2].trim()){let n=e[2].replace(/\\,/g,"&comma;").split(",");return Dl(n,i)}else return i}return null}function Dl(t,e){return e.args=t.map(function(s){let i=fn(s);return i.literal||(e.static=!1),i},this),e}function fn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:e,value:"",literal:!1},i=e[0];switch(i==="-"&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':s.value=e.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(e),s.literal=!0;break}return s.literal||(s.rootProperty=me(e),s.structured=es(e),s.structured&&(s.wildcard=e.slice(-2)==".*",s.wildcard&&(s.name=e.slice(0,-2)))),s}function pi(t,e,s){let i=H(t,s);return i===void 0&&(i=e[s]),i}function mn(t,e,s,i){const n={indexSplices:i};Qt&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(s+".splices",n),t.notifyPath(s+".length",e.length),Qt&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function Oe(t,e,s,i,n,r){mn(t,e,s,[{index:i,addedCount:n,removed:r,object:e,type:"splice"}])}function Fl(t){return t[0].toUpperCase()+t.substring(1)}const jl=fe(t=>{const e=rl(Wa(t));class s extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return O}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if($e.length){let n=$e[$e.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[O.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==O.READ_ONLY);let a=Bt(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=Bt(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,O.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,O.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,O.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,O.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||me(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=H(this,n);if(n=ni(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return _l(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=de(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&es(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[O.NOTIFY]&&this[O.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[O.READ_ONLY]||!this[O.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;pl(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),ze(this,this[O.REFLECT],r,o,a),ze(this,this[O.OBSERVE],r,o,a),l&&ll(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[O.PROPAGATE]&&ze(this,this[O.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,u)=>{ze(this,n.propertyEffects,c,o,u,n.nodeList);for(let h=n.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,c,o,u)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=Te(n),r=Te(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=Te(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=H(this,n,o);mn(this,a,o.path,r)}get(n,r){return H(r||this,n)}set(n,r,o){o?ni(o,n,r):(!this[O.READ_ONLY]||!this[O.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=H(this,n,o),l=a.length,c=a.push(...r);return r.length&&Oe(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=H(this,n,r),a=!!o.length,l=o.pop();return a&&Oe(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=H(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&Oe(this,c,l.path,r,a.length,u),u}shift(n){let r={path:""},o=H(this,n,r),a=!!o.length,l=o.shift();return a&&Oe(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=H(this,n,o),l=a.unshift(...r);return r.length&&Oe(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=H(this,n,a),o=a.path}else Array.isArray(n)?o=Te(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,O.READ_ONLY),r&&(this["_set"+Fl(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,O.OBSERVE,{fn:ai,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,O.OBSERVE,{fn:ai,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=Ut(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");ci(this,o,O.OBSERVE,ss,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,O.NOTIFY,{fn:ul,info:{eventName:$t(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,O.REFLECT,{fn:dl,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=Ut(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=ci(this,a,O.COMPUTE,dn,n,o);Bt(this,un)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,u=n.length;c<u;c++){let{name:h,structured:d,wildcard:p,value:f,literal:m}=n[c];if(!m)if(p){const g=mt(h,r),y=pi(a,o,g?r:h);f={path:g?r:h,value:y,base:g?H(a,h):y}}else f=d?pi(a,o,h):a[h];if(Qt&&!this._overrideLegacyUndefined&&f===void 0&&n.length>1)return Be;l[c]=f}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),$e.push(this);let o=super._stampTemplate(n,r);if($e.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Sl(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let h=c[u];de(de(h).parentNode).removeChild(h)}}static _parseTemplateNode(n,r,o){let a=e._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=di(l)||" ",Ht(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,h="property";ol.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let d=di(c);return d&&h=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(d+=" "+n.getAttribute(a)),n.setAttribute(a,d)),h=="attribute"&&u=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&u==="value"&&n.setAttribute(u,""),n.removeAttribute(u),h==="property"&&(a=nn(a)),Ht(this,r,o,h,a,c,d),!0}else return e._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=e._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,u=l.localName==="dom-if",h=l.localName==="dom-repeat";Qs&&(u||h)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let d=c.hostProps;if(za&&u)d&&(r.hostProps=Object.assign(r.hostProps||{},d),Qs||(o.parentInfo.noted=!0));else{let p="{";for(let f in d){let m=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Ht(this,r,o,"property","_host_"+f,m)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=hi.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],u=!!l[2],h=l[3].trim(),d=!1,p="",f=-1;c=="{"&&(f=h.indexOf("::"))>0&&(p=h.substring(f+2),h=h.substring(0,f),d=!0);let m=Ut(h),g=[];if(m){let{args:y,methodName:_}=m;for(let P=0;P<y.length;P++){let C=y[P];C.literal||g.push(C)}let w=r.dynamicFns;(w&&w[_]||m.static)&&(g.push(_),m.dynamicFn=!0)}else g.push(h);o.push({source:h,mode:c,negate:u,customEvent:d,signature:m,dependencies:g,event:p}),a=hi.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let u;return r.signature?u=ss(n,o,a,l,r.signature):o!=r.source?u=H(n,r.source):c&&es(o)?u=H(n,o):u=n.__data[o],r.negate&&(u=!u),u}}return s}),$e=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Vl(t){const e={};for(let s in t){const i=t[s];e[s]=typeof i=="function"?{type:i}:i}return e}const Bl=fe(t=>{const e=an(t);function s(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function i(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Vl(a))}r.__ownProperties=o}return r.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=s(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=i(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=s(this);this.__properties=Object.assign({},o&&o._properties,i(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Hl="3.5.1",fi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ul=fe(t=>{const e=Bl(jl(t));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let h=c[u];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=h)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,u,h){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,h)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,h[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,h){if(!fi){const d=c.content.querySelectorAll("style"),p=en(c),f=Da(u),m=c.content.firstElementChild;for(let y=0;y<f.length;y++){let _=f[y];_.textContent=l._processStyleText(_.textContent,h),c.content.insertBefore(_,m)}let g=0;for(let y=0;y<p.length;y++){let _=p[y],w=d[g];w!==_?(_=_.cloneNode(!0),w.parentNode.insertBefore(_,w)):g++,_.textContent=l._processStyleText(_.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),La&&fi&&Sa){const d=c.content.querySelectorAll("style");if(d){let p="";Array.from(d).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!Zt||Ca)&&(c=je.import(l,"template"),Zt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return Hl}static _finalizeClass(){e._finalizeClass.call(this);const c=i(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Ea||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)n(this.prototype,u,c[u],c)}static createObservers(c,u){const h=this.prototype;for(let d=0;d<c.length;d++)h._createMethodObserver(c[d],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=fs(c.url);else{const u=je.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Pa,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let h=c[u];if(this._canApplyPropertyDefault(u)){let d=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(u)?this._setPendingProperty(u,d,!0):this[u]=d}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return ps(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const h=this.importPath,d=h?Ne(h):"";r(this,u,c,d),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=de(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),$a&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Ne(this.importPath)),Ne(c,u)}static _parseTemplateContent(c,u,h){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,h)}static _addTemplatePropertyEffect(c,u,h){return Oa&&!(u in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yl=Ul(HTMLElement),st=[],Tt=()=>{z.isInitialized||z.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},zt=t=>t.reduce((e,s,i)=>(e.count===void 0&&typeof s=="number"&&(e.count=s),typeof s=="object"?{...e,...s}:(e[i]=s,e)),{}),W=function(t){Tt();const e=zt([...arguments].slice(1));return delete e.count,z.t(t,e)},Xl=function(t,e){Tt();const s=zt([...arguments].slice(2)),i=s.count;let n;delete s.count;const r=z.services.pluralResolver.getSuffix(z.language,i);return r?(s.defaultValue=e,n=t+r):(n=t,s.defaultValue=t),z.t(n,s)},Kl=function(t,e){Tt();const s=zt([...arguments].slice(2));return s.context=t,delete s.count,z.t(e,s)},Jl=function(t,e,s){Tt();const i=zt([...arguments].slice(3)),n=i.count,r=t?"_"+t:"";let o=e;delete i.count;const a=z.services.pluralResolver.getSuffix(z.language,n);return a?(i.defaultValue=s,o=e+r+a):(o=e,i.context=t),z.t(o,i)},Wl=(t,e,s)=>{z.init({resources:{}}),z.addResourceBundle(t,e,s)};fe(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(s=>s!==this.t)}_(){return W.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),st.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=st.indexOf(this);e>=0&&st.splice(e,1)}gettext(){return W.apply(null,this._filterT([...arguments]))}ngettext(){return Xl.apply(null,this._filterT([...arguments]))}pgettext(){return Kl.apply(null,this._filterT([...arguments]))}npgettext(){return Jl.apply(null,this._filterT([...arguments]))}});class Gl extends Yl{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(Wl(this.language,this.namespace,e),st.forEach(s=>s.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),z.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Gl);const mi=()=>document.createComment(""),ql=bt(G,new DocumentFragment).constructor;class Zl extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Zl);class Ql extends vt{_op;_outlet;_content;render(e,s=document.body){return v`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[s,i=document.body]){return this.updateOutlet(i,s),this.render(s,i)}updateOutlet(e,s){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const i=this._op??=new ql(e.appendChild(mi()),e.appendChild(mi()));oe(i,this._content=s)}clearOutlet(){const e=this._op;e&&(wn(e),Qe(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const ec=ne(Ql),tc=`:host {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    font-family: var(--cz-font-body);
    font-size: var(--cz-text-sm);
    min-height: 250px;
    touch-action: pan-y pinch-zoom;
}

:host([fullscreen]) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
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
    max-width: 250px;
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

img {
    background-color: gray;
    pointer-events: none;
    overflow: visible;
}

haunted-pan-zoom {
    flex: auto;
    display: flex;
    justify-content: center;
    background-color: black;
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
    background: var(--cz-color-bg-overlay);
}
`,sc=Symbol("memo"),gn=t=>{let e=sc,s;return function(i){if(e===i)return s;const n=t(i);return s=n,e=i,n}},ic=(t,e)=>{const s=t.width/t.height,i=e.width/e.height;return s>i?{width:e.width,height:t.height*(e.width/t.width)}:{width:t.width*(e.height/t.height),height:e.height}},nc=async(t,e)=>{const s={credentials:"include"},[{jsPDF:i},...n]=await Promise.all([ns(()=>import("./jspdf.es-C8lXQ5JU.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...t.map(async a=>{const l=await Promise.resolve(ls(a)),c=await fetch(l,s);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),r=n.filter(Boolean);if(r.length<1)return;const o=new i;return r.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:h}}=o,{width:d,height:p}=ic(o.getImageProperties(l),{width:h.getWidth()-4,height:h.getHeight()-4});c>0&&o.addPage(),o.addImage(l,a.split(".").pop().toUpperCase(),2,2,d,p)}),o.output("blob")},_n=(t,e)=>{const s=URL.createObjectURL(t),i=document.body.appendChild(document.createElement("a"));i.href=s,i.download=`${e}.pdf`,i.click(),document.body.removeChild(i),URL.revokeObjectURL(s)},rc=async(t,e,s)=>{const i=await nc(t);if(i)return _n(i,e),i},oc=async(t,e,s={})=>{const{httpHeaders:i,withCredentials:n=!0}=s,r=await fetch(t,{credentials:n?"include":"omit",headers:i});if(!r.ok)return;const o=await r.blob();return _n(o,e),o},ac=t=>Object.entries(t).map(([e,s])=>e+"="+s).join(",");let is=!1;const lc=({source:t,attachmentIndex:e,index:s,syncImageIndex:i,syncAttachmentIndex:n,title:r,loop:o,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",ac({height:700,width:800}));bt(v`<style>
				html {
					background: #000;
				}
			</style>
			<cosmoz-image-viewer
				fullscreen
				.source="${t}"
				.currentAttachmentIndex=${e}
				.currentImageIndex=${s}
				@current-image-index-changed=${i}
				@current-attachment-index-changed=${n}
				show-nav
				?show-zoom=${a}
				show-close
				?loop=${o}
				@close=${()=>u.close()}
			></cosmoz-image-viewer>`,u.document.body),u._onClose?.(),l(),is=!0,u._onClose=c,u.addEventListener("beforeunload",c),u.addEventListener("beforeunload",()=>is=!1),u.document.title=r??W("Cosmoz image viewer")},cc=t=>new Promise(e=>{const s=setInterval(()=>{t()&&(e(),clearInterval(s))},100)}),uc=({images:t})=>{const e=window.open(void 0,"czimgviewerprint");bt(v`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${t.map(s=>v`<img src="${De(Promise.resolve(ls(s)))}" />`)}`,e.document.body),cc(()=>Array.from(e.document.querySelectorAll("img")).every(s=>s.src&&s.complete)).then(()=>e.print()).then(()=>e.close())},gi=[],hc=t=>{const e=I(()=>typeof t=="function"?Promise.resolve(t()):void 0,[t]),[s,i,n]=Fi(e);return typeof t!="function"?{attachments:t??gi,loading:!1,error:void 0}:{attachments:s??gi,loading:n==="pending",error:i}},dc=50,pc=300,fc=(t,{onSwipeLeft:e,onSwipeRight:s,enabled:i})=>{const n=le(null);E(()=>{if(!i)return;const r=a=>{if(a.touches.length!==1)return;const l=a.touches[0];n.current={x:l.clientX,y:l.clientY,t:Date.now()}},o=a=>{if(!n.current)return;const l=a.changedTouches[0],c=l.clientX-n.current.x,u=l.clientY-n.current.y,h=Date.now()-n.current.t;n.current=null,!(h>pc)&&(Math.abs(c)<dc||Math.abs(c)<Math.abs(u)||(c<0?e?.():s?.()))};return t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),()=>{t.removeEventListener("touchstart",r),t.removeEventListener("touchend",o)}},[t,e,s,i])},yn=t=>{if(!t.currentTarget.parentElement)return;t.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),t.currentTarget.setAttribute("hidden",!0)},mc=t=>t.detail.value==="error"&&yn(t),gc=({src$:t,showZoom:e,isZoomed:s,_onZoomChanged:i})=>{const n=ve(t,()=>De(t));return[e?v`<haunted-pan-zoom
						.src=${n}
						?disabled=${!s}
						@zoom-changed=${i}
						@status-changed=${mc}
					></haunted-pan-zoom>`:v`<img
						.src=${n}
						style="width:100%"
						@error=${yn}
					/>`,ve(t,()=>De(t.then(()=>G),v`<cz-spinner></cz-spinner>`))]},_c=t=>v`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${t.image}</div>
			</div>
			${gc(t)}
		</div>`,yt=[],Yt=(t,e,s)=>Math.max(e,Math.min(s,t)),yc=(t,e,s)=>{const[i,n]=Q(yt),r=I(()=>gn(o=>ns(async()=>{const{loadPdfThunks:a}=await import("./pdf-loader-BSiQZefA.js");return{loadPdfThunks:a}},__vite__mapDeps([2,1]),import.meta.url).then(({loadPdfThunks:a})=>a(o,e))),[e]);return E(()=>{if(!t){n(yt);return}let o=!1;return r(t).then(a=>{o||n(a)}),()=>{o=!0}},[t,r]),t?i:s},_i=(t,e,s,i)=>{const n=t.length;for(let r=1;r<=n;r++){const o=(e+r*s+n)%n;if(!i&&s>0&&o<=e||!i&&s<0&&o>=e)return;const a=t[o];if((a.images?.length??0)>0||a.pdf)return o}},bc=t=>{const{showZoom:e,title:s,loop:i,detachedShowZoom:n}=t,{attachments:r,loading:o,error:a}=hc(t.source),[l,c]=Ie("currentAttachmentIndex",0),u=r.length>0?Yt(l??0,0,r.length-1):0,h=r[u],d=h?[h]:yt,p=x(R=>{const Ue=R.detail?.[0],Ye=r.indexOf(Ue);Ye>=0&&(M.current=We,c(Ye))},[r]),f=h?.pdf,m=h?.pdfOptions,g=h?.downloadFileName??"archive",y=h?.images??yt,_=yc(f,m,y),[w,P]=Q(!1),C=R=>P(R.detail.value>1),$=I(()=>gn(R=>Promise.resolve(ls(R))),[]),[T,L]=Ie("currentImageIndex",0),A=_.length>0?Yt(T??0,0,_.length-1):0,F=_[A],M=le(We),ge=I(()=>F==null?{id:Math.random(),content:G,animation:We}:{id:F,render:()=>_c({src$:$(F),showZoom:e,isZoomed:w,_onZoomChanged:C,image:F}),animation:M.current},[F,e,w,C]),K=le(!1),j=!i&&u===0&&A<=0,V=!i&&u===r.length-1&&A>=_.length-1,D=x(()=>{if(M.current=We,A<_.length-1)return L(A+1);const R=_i(r,u,1,i);R!=null&&(c(R),L(0))},[A,_.length,r,u,i]),se=x(()=>{if(M.current=Yo,A>0)return L(A-1);const R=_i(r,u,-1,i);R!=null&&(K.current=!0,c(R))},[A,r,u,i]);fc(t,{onSwipeLeft:D,onSwipeRight:se,enabled:!w});const[b,N]=Q(!1),[B,ie]=Q(!1),Lt=()=>ie(!0),At=()=>ie(!1),Rt=R=>N(R.detail.value),kt=R=>L(R.detail.value),Nt=R=>c(R.detail.value),Pe=x(()=>lc({source:r,attachmentIndex:u,index:A,syncImageIndex:kt,syncAttachmentIndex:Nt,title:s,loop:i,detachedShowZoom:n,onDetach:()=>N(!0),onClose:()=>N(!1)}),[r,u,A,s,i]),ce=x(()=>{is&&Pe()},[Pe]);return E(()=>{if(_.length===0)return;if(K.current){K.current=!1,L(_.length-1);return}const R=T??0;R>=_.length&&L(Yt(R,0,_.length-1))},[_]),E(()=>{const R=l??0;r.length>0&&R>=r.length&&c(0)},[r]),Jn("detached",b,[b]),E(()=>{t.toggleAttribute("hidden",b)},[b]),as({syncState:ce},[ce]),{host:t,isZoomed:w,currentSlide:ge,nextImage:D,previousImage:se,first:j,last:V,total:_.length,currentImageIndex:A,selectedImageNumber:A+1,onDownloadPdf:f?()=>oc(f,g,m):()=>rc(_,g),isFullscreen:B,openFullscreen:Lt,closeFullscreen:At,onPrintPdf:()=>uc({images:_}),detached:b,detach:Pe,syncDetachedState:Rt,setAttachmentIndex:c,setImageIndex:L,loading:o,error:a,attachments:r,selected:h,selectedIndex:u,value:d,onSelect:p,images:_}},vc=v`<svg
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
</svg>`,wc=v`<svg
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
</svg>`,xc=v`<svg
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
</svg>`,Sc=v`<svg
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
</svg>`,Pc=v`<svg
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
</svg>`,Cc=v`<svg
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
</svg>`,Ec=v`<svg
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
</svg>`,Oc=v`<svg
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
</svg>`,$c=v`<svg
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
</svg>`,Tc=t=>t?Cc:Ec,re=(t,e,s=1)=>t?e>=s:!1,zc=t=>{const e=t.target.getRootNode().querySelector("haunted-pan-zoom");if(e.zoom>1)return e.zoomTo(1);e.zoomTo(1.5)},Lc=({host:t,isZoomed:e,currentSlide:s,nextImage:i,previousImage:n,total:r,first:o,last:a,currentImageIndex:l,selectedImageNumber:c,onDownloadPdf:u,isFullscreen:h,openFullscreen:d,closeFullscreen:p,onPrintPdf:f,detach:m,detached:g,syncDetachedState:y,setAttachmentIndex:_,setImageIndex:w,loading:P,error:C,attachments:$,selected:T,selectedIndex:L,value:A,onSelect:F,images:M})=>v`
		<style>
			${tc}
		</style>

		${g?G:v`
					${k(P,()=>v`<div class="loading">
								<cz-spinner></cz-spinner>
							</div>`)}
					${k(C,()=>v`<div class="error">
								<h2>${W("Failed to load attachments.")}</h2>
								<div class="desc">
									${C?.message??C}
								</div>
							</div>`)}
					${k(!P&&!C,()=>v`
							${k(re(t.showPageNumber,r),()=>v` <div class="counter">
										${c}/${r}
									</div>`)}

							<div class="actions">
								${k(re(t.showNav,r,2)||$.length>1,()=>v`
										<button
											class="nav"
											name="prev"
											?disabled=${o}
											@click=${n}
										>
											${Pc}
										</button>
										<button
											class="nav"
											name="next"
											?disabled=${a}
											@click=${i}
										>
											${$c}
										</button>
									`)}
								${k($.length>1,()=>v`<cosmoz-autocomplete
											text-property="title"
											limit="1"
											.min=${1}
											show-single
											preserve-order
											.source=${$}
											.value=${A}
											@value=${F}
										></cosmoz-autocomplete>`)}
								<span style="flex:auto"></span>
								${k(re(t.showZoom,r),()=>v`<button
											class="nav"
											@click="${zc}"
											title="${W("Zoom image")}"
										>
											${Tc(e)}
										</button>`)}
								${k(re(t.showDetach,r),()=>v`<button
											class="nav"
											@click=${m}
											title="${W("Detach image to separate window")}"
										>
											${Sc}
										</button>`)}
								${k(re(!0,r),()=>v`<button
											class="nav"
											@click=${u}
											title="${W("Download images")}"
										>
											${wc}
										</button>`)}
								${k(re(!0,r),()=>v`<button
											class="nav"
											@click=${f}
											title="${W("Print images")}"
										>
											${Oc}
										</button>`)}
								${k(re(t.showFullscreen,r),()=>v`<button
											class="nav"
											@click="${d}"
											title="${W("Fullscreen image")}"
										>
											${xc}
										</button>`)}
								${k(re(t.showClose,r),()=>v` <button
											class="nav"
											@click="${()=>t.dispatchEvent(new CustomEvent("close"))}"
											title="${W("Close fullscreen")}"
										>
											${vc}
										</button>`)}
							</div>

							${k(r===0,()=>v`<p>
										${W("No image loaded.")}
									</p>`)}
							<cosmoz-slider
								id="slider"
								.slide="${s}"
							></cosmoz-slider>
						`)}
				`}

		${k(h,()=>ec(v`<cosmoz-image-viewer
					fullscreen
					.source=${$}
					.currentAttachmentIndex=${L}
					.currentImageIndex=${l}
					@current-attachment-index-changed=${xs(_)}
					@current-image-index-changed=${xs(w)}
					@detached-changed=${y}
					show-nav
					show-zoom
					show-close
					@close=${p}
					?show-detach=${t.showDetach}
					?loop=${t.loop}
				></cosmoz-image-viewer>`))}
	`,Ac=t=>Lc(bc(t));customElements.define("cosmoz-image-viewer",X(Ac,{observedAttributes:["show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"]}));
