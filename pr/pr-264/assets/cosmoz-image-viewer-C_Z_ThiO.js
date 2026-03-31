const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-C8lXQ5JU.js","./preload-helper-PPVm8Dsz.js","./pdf-loader-BSiQZefA.js"])))=>i.map(i=>d[i]);
import{r as gi,D as yt,A as W,b,E as Y,p as mi,n as yn,M as bn,u as oe,v as Oe,h as tt,j as vn}from"./iframe-D8d8XJa6.js";import{_ as is}from"./preload-helper-PPVm8Dsz.js";let rt,_i=0;function ys(t){rt=t}function bs(){rt=null,_i=0}function wn(){return _i++}const It=Symbol("haunted.phase"),st=Symbol("haunted.hook"),vs=Symbol("haunted.update"),ws=Symbol("haunted.commit"),de=Symbol("haunted.effects"),Re=Symbol("haunted.layoutEffects"),Kt="haunted.context";class xn{update;host;virtual;[st];[de];[Re];constructor(e,s){this.update=e,this.host=s,this[st]=new Map,this[de]=[],this[Re]=[]}run(e){ys(this);let s=e();return bs(),s}_runEffects(e){let s=this[e];ys(this);for(let i of s)i.call(this);bs()}runEffects(){this._runEffects(de)}runLayoutEffects(){this._runEffects(Re)}teardown(){this[st].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Sn=Promise.resolve().then.bind(Promise.resolve());function yi(){let t=[],e;function s(){e=null;let i=t;t=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){t.push(i),e==null&&(e=Sn(s))}}const Pn=yi(),xs=yi();class Cn{renderer;host;state;[It];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new xn(this.update.bind(this),s),this[It]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(Pn(()=>{let e=this.handlePhase(vs);xs(()=>{this.handlePhase(ws,e),xs(()=>{this.handlePhase(de)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[It]=e,e){case ws:this.commit(s),this.runEffects(Re);return;case vs:return this.render();case de:return this.runEffects(de)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const ns=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},En=t=>t?.map(e=>typeof e=="string"?ns(e):e),On=(t,...e)=>t.flatMap((s,i)=>[s,e[i]||""]).join(""),fe=On,$n=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function zn(t){class e extends Cn{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=t(n,this.frag)}}function s(i,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||n||{},d=En(i.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(i,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new e(i,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,_,y){if(_===y)return;let v=y===""?!0:y;Reflect.set(this,$n(m),v)}}function p(g){let m=g,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){_&&m===y||(_=!0,m=y,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,_,y){let v;return m in g?(v=Object.getOwnPropertyDescriptor(g,m),v&&v.set?(v.set.call(y,_),!0):(Reflect.set(g,m,_,y),!0)):(typeof m=="symbol"||m[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:_}:v=p(_),Object.defineProperty(y,m,v),v.set&&v.set.call(y,_),!0)}});return Object.setPrototypeOf(h.prototype,f),h}return s}class te{id;state;constructor(e,s){this.id=e,this.state=s}}function Tn(t,...e){let s=wn(),i=rt[st],n=i.get(s);return n||(n=new t(s,rt,...e),i.set(s,n)),n.update(...e)}function se(t){return Tn.bind(null,t)}function bi(t){return se(class extends te{callback;lastValues;values;_teardown;constructor(e,s,i,n){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function vi(t,e){t[de].push(e)}const z=bi(vi),Ln=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,wi=se(class extends te{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,vi(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Ln(this.state.host).dispatchEvent(new CustomEvent(Kt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=e;this.value=i?n:t.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function An(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Kt,this)}disconnectedCallback(){this.removeEventListener(Kt,this)}handleEvent(i){const{detail:n}=i;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:t(function({render:i}){const n=wi(s);return i(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const D=se(class extends te{value;values;constructor(t,e,s,i){super(t,e),this.value=s(),this.values=i}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),C=(t,e)=>D(()=>t,e);function Rn(t,e){t[Re].push(e)}const ot=bi(Rn),Q=se(class extends te{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),xi=se(class extends te{reducer;currentState;constructor(t,e,s,i,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),kn=/([A-Z])/gu,Fe=se(class extends te{property;eventName;constructor(t,e,s,i){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(kn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),Ss=t=>e=>{e.preventDefault(),t(e.detail.value)};function Nn(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function ee(t){return D(()=>Nn(t),[])}se(class extends te{update(){return this.state.host}});function In({render:t}){const e=zn(t),s=An(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ne=t=>(...e)=>({_$litDirective$:t,values:e});let Se=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(e,!1),ke(i,e);return!0},at=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},Si=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Fn(e)}};function Mn(t){this._$AN!==void 0?(at(this),this._$AM=t,Si(this)):this._$AM=t}function Dn(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)ke(i[r],!1),at(i[r]);else i!=null&&(ke(i,!1),at(i));else ke(this,t)}const Fn=t=>{t.type==G.CHILD&&(t._$AP??=Dn,t._$AQ??=Mn)};class bt extends Se{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Si(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(ke(this,e),at(this))}setValue(e){if(gi(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:X,createContext:jn}=In({render:yt}),vt=(t,...e)=>t.flatMap((s,i)=>[s,e[i]??""]).join(""),rs=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Mt=new WeakMap,Pe=ne(class extends bt{render(t){return W}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),W}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Mt.get(e);s===void 0&&(s=new WeakMap,Mt.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Mt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Vn=({host:t,popoverRef:e,disabled:s,openOnHover:i,openOnFocus:n,open:r,close:o})=>{const a=ee(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;i&&(t.matches(":hover")||d?.matches(":hover"))||t.matches(":focus-within")||d?.matches(":focus-within")||o()},100)},u=()=>{s||(l(),r())};return z(()=>{if(!(!i||s))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[i,s,t]),z(()=>{if(!(!n||s))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[n,s,t]),{scheduleClose:c,cancelClose:l}},Hn=t=>{if(t.newState!=="open")return;const i=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of i){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Bn=fe`
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
`,Un=t=>{const{placement:e="bottom span-right",disabled:s,openOnHover:i,openOnFocus:n}=t,r=ee(),[o,a]=Fe("opened",!1),l=C(()=>{s||(a(!0),r.current?.showPopover())},[s]),c=C(()=>{a(!1),r.current?.hidePopover()},[]),u=C(()=>{if(s)return;r.current?.matches(":popover-open")?c():l()},[s]);z(()=>{const g=r.current;g&&(o?g.showPopover():g.hidePopover())},[o]),z(()=>{t.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:d,cancelClose:h}=Vn({host:t,popoverRef:r,disabled:s,openOnHover:i,openOnFocus:n,open:l,close:c}),p=n?l:u,f=C(g=>{Hn(g),a(g.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return b`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${f}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${Pe(g=>g&&(r.current=g))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",X(Un,{styleSheets:[Bn],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=t=>t??W;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=ne(class extends Se{constructor(t){if(super(t),t.type!==G.PROPERTY&&t.type!==G.ATTRIBUTE&&t.type!==G.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!gi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Y||e===W)return e;const s=t.element,i=t.name;if(t.type===G.PROPERTY){if(e===s[i])return Y}else if(t.type===G.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(i))return Y}else if(t.type===G.ATTRIBUTE&&s.getAttribute(i)===e+"")return Y;return mi(t),e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(t,e,s){return t?e(t):s?.(t)}const Pi=(t,{label:e,invalid:s,errorMessage:i})=>b`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${N(e,()=>b`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${N(s&&i,()=>b`<div class="error" part="error">${i}</div>`)}
	`,Ci=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ps=vt`
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
`,Ei=vt`
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
		${Ps}
	}
	@container style(--focused: focused) {
		${Ps}
	}
`,Yn=t=>D(()=>{if(t==null)return;const e=new RegExp(t,"u");return s=>{!s.defaultPrevented&&s.data&&!e.test(s.data)&&s.preventDefault()}},[t]),os=se(class extends te{values;constructor(t,e,s,i){super(t,e),Object.assign(e.host,s),this.values=i}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),Xe=se(class extends te{update(){return this.state.host}}),Xn=/([A-Z])/gu,Zt=(t,e,s)=>{t[e]=s,t.dispatchEvent(new CustomEvent(e.replace(Xn,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},Kn=(t,e,s=[e])=>{const i=Xe();z(()=>{Zt(i,t,e)},s)},Oi=t=>{const e=ee(void 0),s=C(l=>e.current=l,[]),i=t.shadowRoot,n=C(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=C(l=>Zt(t,"value",l.target.value),[]),o=C(l=>Zt(t,"focused",l.type==="focus"),[]),a=C(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return os({validate:a},[a]),z(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return i.addEventListener("mousedown",l),()=>i.removeEventListener("mousedown",l)},[]),{onChange:n,onFocus:o,onInput:r,onRef:s}},Zn=({placeholder:t,noLabelFloat:e,label:s})=>(e?s:void 0)||t||" ",Jn=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ci],Wn=t=>{const{type:e="text",pattern:s,allowedPattern:i,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=t,{onChange:h,onFocus:p,onInput:f,onRef:g}=Oi(t),m=Yn(i);return Pi(b`
			<input
				${Pe(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${K(s)}
				autocomplete=${K(n)}
				placeholder=${Zn(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${wt(r??"")}
				maxlength=${K(d)}
				@beforeinput=${m}
				@input=${f}
				@change=${h}
				@focus=${p}
				@blur=${p}
				min=${K(l)}
				max=${K(c)}
				step=${K(u)}
			/>
		`,t)};customElements.define("cosmoz-input",X(Wn,{observedAttributes:Jn,styleSheets:[ns(Ei)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Cs=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Gn=(t,e=0)=>{if(e>0){const s=t.getAttribute("rows")??"",i=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=i,t.setAttribute("rows",s)}},qn=t=>{const{value:e,maxRows:s}=t,i=D(()=>()=>t.shadowRoot.querySelector("#input"),[]);z(()=>Gn(i(),s),[s,i]),z(()=>Cs(i()),[i,e]),z(()=>{const n=i(),r=new ResizeObserver(()=>requestAnimationFrame(()=>Cs(n)));return r.observe(n),()=>r.unobserve(n)},[i])},Qn=["rows","placeholder",...Ci],er=t=>{const{autocomplete:e,value:s,placeholder:i,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:h}=Oi(t);return qn(t),Pi(b`
			<textarea id="input" part="input"
				${Pe(h)}
				autocomplete=${K(e)}
				placeholder=${i||" "}
				rows=${o??1} cols=${K(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${wt(s??"")} maxlength=${K(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",X(er,{observedAttributes:Qn,styleSheets:[ns(Ei)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const tr=t=>{const{label:e,value:s,disabled:i,error:n}=t,r=C(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return b`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${wt(!!s)}
			?disabled=${i}
			@change=${r}
		/>
		${N(e,()=>b`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${N(n,o=>b`<div class="failure">${o}</div>`)} `},sr=fe`
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
`,ir=fe`
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
`;customElements.define("cosmoz-toggle",X(tr,{styleSheets:[ir,sr],observedAttributes:["disabled"]}));const S=t=>typeof t=="string",$e=()=>{let t,e;const s=new Promise((i,n)=>{t=i,e=n});return s.resolve=t,s.reject=e,s},Es=t=>t==null?"":""+t,nr=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},rr=/###/g,Os=t=>t&&t.indexOf("###")>-1?t.replace(rr,"."):t,$s=t=>!t||S(t),Ne=(t,e,s)=>{const i=S(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if($s(t))return{};const r=Os(i[n]);!t[r]&&s&&(t[r]=new s),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++n}return $s(t)?{}:{obj:t,k:Os(i[n])}},zs=(t,e,s)=>{const{obj:i,k:n}=Ne(t,e,Object);if(i!==void 0||e.length===1){i[n]=s;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Ne(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Ne(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=s},or=(t,e,s,i)=>{const{obj:n,k:r}=Ne(t,e,Object);n[r]=n[r]||[],n[r].push(s)},lt=(t,e)=>{const{obj:s,k:i}=Ne(t,e);if(s)return s[i]},ar=(t,e,s)=>{const i=lt(t,s);return i!==void 0?i:lt(e,s)},$i=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?S(t[i])||t[i]instanceof String||S(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):$i(t[i],e[i],s):t[i]=e[i]);return t},ye=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var lr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const cr=t=>S(t)?t.replace(/[&<>"'\/]/g,e=>lr[e]):t;class ur{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const dr=[" ",",","?","!",";"],hr=new ur(20),pr=(t,e,s)=>{e=e||"",s=s||"";const i=dr.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const n=hr.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(t);if(!r){const o=t.indexOf(s);o>0&&!n.test(t.substring(0,o))&&(r=!0)}return r},Jt=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let n=t;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=s),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},ct=t=>t&&t.replace("_","-"),fr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class ut{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||fr,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,n){return n&&!this.debug?null:(S(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new ut(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ut(this.logger,e)}}var q=new ut;class xt{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(s)||0;this.observers[i].set(s,n+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class Ts extends xt{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,s],i&&(Array.isArray(i)?a.push(...i):S(i)&&r?a.push(...i.split(r)):a.push(i)));const l=lt(this.data,a);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=a[0],s=a[1],i=a.slice(2).join(".")),l||!o||!S(i)?l:Jt(this.data&&this.data[e]&&this.data[e][s],i,r)}addResource(e,s,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,s];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),n=s,s=a[1]),this.addNamespaces(s),zs(this.data,a,n),r.silent||this.emit("added",e,s,i,n)}addResources(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(S(i[r])||Array.isArray(i[r]))&&this.addResource(e,s,r,i[r],{silent:!0});n.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,s];e.indexOf(".")>-1&&(a=e.split("."),n=i,i=s,s=a[1]),this.addNamespaces(s);let l=lt(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?$i(l,i,r):l={...l,...i},zs(this.data,a,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(n=>s[n]&&Object.keys(s[n]).length>0)}toJSON(){return this.data}}var zi={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,n){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,s,i,n))}),e}};const Ls={};class dt extends xt{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),nr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=q.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!pr(e,i,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:S(r)?[r]:r};const c=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:S(r)?[r]:r}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],s),l=a[a.length-1],c=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=s.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${w}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const d=this.resolve(e,s);let h=d&&d.res;const p=d&&d.usedKey||o,f=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],_=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!S(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&v&&m.indexOf(g)<0&&!(S(_)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,h,{...s,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=w,d.usedParams=this.getUsedParamsDetails(s),d):w}if(r){const w=Array.isArray(h),E=w?[]:{},T=w?f:p;for(const O in h)if(Object.prototype.hasOwnProperty.call(h,O)){const k=`${T}${r}${O}`;E[O]=this.translate(k,{...s,joinArrays:!1,ns:a}),E[O]===k&&(E[O]=h[O])}h=E}}else if(y&&S(_)&&Array.isArray(h))h=h.join(_),h&&(h=this.extendTranslation(h,e,s,i));else{let w=!1,E=!1;const T=s.count!==void 0&&!S(s.count),O=dt.hasDefaultValue(s),k=T?this.pluralResolver.getSuffix(c,s.count,s):"",M=s.ordinal&&T?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",R=T&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),H=R&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${k}`]||s[`defaultValue${M}`]||s.defaultValue;!this.isValidLookup(h)&&O&&(w=!0,h=H),this.isValidLookup(h)||(E=!0,h=o);const x=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:h,F=O&&H!==h&&this.options.updateMissing;if(E||w||F){if(this.logger.log(F?"updateKey":"missingKey",c,l,o,F?H:h),r){const P=this.resolve(o,{...s,keySeparator:!1});P&&P.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&j&&j[0])for(let P=0;P<j.length;P++)I.push(j[P]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(s.lng||this.language):I.push(s.lng||this.language);const ie=(P,V,Z)=>{const ce=O&&Z!==h?Z:x;this.options.missingKeyHandler?this.options.missingKeyHandler(P,l,V,ce,F,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(P,l,V,ce,F,s),this.emit("missingKey",P,l,V,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?I.forEach(P=>{const V=this.pluralResolver.getSuffixes(P,s);R&&s[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(Z=>{ie([P],o+Z,s[`defaultValue${Z}`]||H)})}):ie(I,o,H))}h=this.extendTranslation(h,e,s,d,i),E&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(E||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?h:void 0):h=this.options.parseMissingKeyHandler(h))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(s),d):h}extendTranslation(e,s,i,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=S(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=e.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=i.replace&&!S(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,i.lng||this.language||n.usedLng,i),c){const h=e.match(this.interpolator.nestingRegexp),p=h&&h.length;u<p&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,p=new Array(h),f=0;f<h;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${s[0]}`),null):o.translate(...p,s)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=S(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=zi.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return S(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,s),u=c.key;n=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=s.count!==void 0&&!S(s.count),p=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),f=s.context!==void 0&&(S(s.context)||typeof s.context=="number")&&s.context!=="",g=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);d.forEach(m=>{this.isValidLookup(i)||(a=m,!Ls[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Ls[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(_=>{if(this.isValidLookup(i))return;o=_;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,_,m,s);else{let w;h&&(w=this.pluralResolver.getSuffix(_,s.count,s));const E=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+w),s.ordinal&&w.indexOf(T)===0&&y.push(u+w.replace(T,this.options.pluralSeparator)),p&&y.push(u+E)),f){const O=`${u}${this.options.contextSeparator}${s.context}`;y.push(O),h&&(y.push(O+w),s.ordinal&&w.indexOf(T)===0&&y.push(O+w.replace(T,this.options.pluralSeparator)),p&&y.push(O+E))}}let v;for(;v=y.pop();)this.isValidLookup(i)||(r=v,i=this.getResource(_,m,v,s))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,n):this.resourceStore.getResource(e,s,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!S(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of s)delete n[r]}return n}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const Dt=t=>t.charAt(0).toUpperCase()+t.slice(1);class As{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=q.create("languageUtils")}getScriptPartFromCode(e){if(e=ct(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=ct(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(S(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(e)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(n=>n.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Dt(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Dt(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=Dt(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(s=n)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return s=n;s=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),S(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return S(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):S(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let gr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],mr={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const _r=["v1","v2","v3"],yr=["v4"],Rs={zero:0,one:1,two:2,few:3,many:4,other:5},br=()=>{const t={};return gr.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:mr[e.fc]}})}),t};class vr{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=q.create("pluralResolver"),(!this.options.compatibilityJSON||yr.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=br(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=ct(e==="dev"?"en":e),n=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${s}${n}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((n,r)=>Rs[n]-Rs[r]).map(n=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n}`):i.numbers.map(n=>this.getSuffix(e,n,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(s)}`:this.getSuffixRetroCompatible(n,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let n=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!_r.includes(this.options.compatibilityJSON)}}const ks=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=ar(t,e,s);return!r&&n&&S(s)&&(r=Jt(t,s,i),r===void 0&&(r=Jt(e,s,i))),r},Ft=t=>t.replace(/\$/g,"$$$$");class wr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:_,alwaysFormat:y}=e.interpolation;this.escape=s!==void 0?s:cr,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?ye(r):o||"{{",this.suffix=a?ye(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?ye(h):p||ye("$t("),this.nestingSuffix=f?ye(f):g||ye(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=_||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const _=ks(s,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,i,{...n,...s,interpolationkey:p}):_}const f=p.split(this.formatSeparator),g=f.shift().trim(),m=f.join(this.formatSeparator).trim();return this.format(ks(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,i,{...n,...s,interpolationkey:g})};this.resetRegExp();const u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Ft(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Ft(this.escape(p)):Ft(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof u=="function"){const m=u(e,r,n);o=S(m)?m:""}else if(n&&Object.prototype.hasOwnProperty.call(n,f))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!S(o)&&!this.useRawValueToEscape&&(o=Es(o));const g=p.safeValue(o);if(e=e.replace(r[0],g),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const p=h.match(/'/g),f=h.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!S(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=u.shift(),l=u,c=!0}if(r=s(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!S(r))return r;S(r)||(r=Es(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const xr=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?s.currency||(s.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?s.range||(s.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();s[u]||(s[u]=c),c==="false"&&(s[u]=!1),c==="true"&&(s[u]=!0),isNaN(c)||(s[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:s}},be=t=>{const e={};return(s,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=t(ct(i),n),e[o]=a),a(s)}};class Sr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("formatter"),this.options=e,this.formats={number:be((s,i)=>{const n=new Intl.NumberFormat(s,{...i});return r=>n.format(r)}),currency:be((s,i)=>{const n=new Intl.NumberFormat(s,{...i,style:"currency"});return r=>n.format(r)}),datetime:be((s,i)=>{const n=new Intl.DateTimeFormat(s,{...i});return r=>n.format(r)}),relativetime:be((s,i)=>{const n=new Intl.RelativeTimeFormat(s,{...i});return r=>n.format(r,i.range||"day")}),list:be((s,i)=>{const n=new Intl.ListFormat(s,{...i});return r=>n.format(r)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=be(s)}format(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=xr(l);if(this.formats[c]){let d=a;try{const h=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},p=h.locale||h.lng||n.locale||n.lng||i;d=this.formats[c](a,p,{...u,...n,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Pr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Cr extends xt{constructor(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=q.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,n.backend,n)}queueLoad(e,s,i,n){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;s.forEach(d=>{const h=`${c}|${d}`;!i.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const n=e.split("|"),r=n[0],o=n[1];s&&this.emit("failedLoading",r,o,s),!s&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{or(l.loaded,[r],o),Pr(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,s);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,s,a)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();S(e)&&(e=this.languageUtils.toResolveHierarchy(e)),S(s)&&(s=[s]);const r=this.queueLoad(e,s,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${s}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,s,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,s,i,n,l):u=c(e,s,i,n),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,s,i,n,a,l)}!e||!e[0]||this.store.addResource(e[0],s,i,n)}}}const Ns=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),S(t[1])&&(e.defaultValue=t[1]),S(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Is=t=>(S(t.ns)&&(t.ns=[t.ns]),S(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),S(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Je=()=>{},Er=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class je extends xt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Is(e),this.services={},this.logger=q,this.modules={external:[]},Er(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(S(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const n=Ns();this.options={...n,...this.options,...Is(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?q.init(r(this.modules.logger),this.options):q.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Sr);const d=new As(this.options);this.store=new Ts(this.options.resources,this.options);const h=this.services;h.logger=q,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new vr(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new wr(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Cr(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new dt(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Je),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=$e(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Je;const n=S(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,s,i){const n=$e();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=Je),this.services.backendConnector.reload(e,s,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&zi.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const n=$e();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=S(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,s,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const h=n.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${h}${f}`):p=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(p,l)};return S(e)?r.lng=e:r.lngs=e,r.ns=s,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const a=s.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!n||o(r,e)))}loadNamespaces(e,s){const i=$e();return this.options.ns?(S(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),s&&s(n)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=$e();S(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new As(Ns());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new je(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Je;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new je(n);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new Ts(this.store.data,n),r.services.resourceStore=r.store),r.translator=new dt(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,s),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const L=je.createInstance();L.createInstance=je.createInstance;L.createInstance;L.dir;L.init;L.loadResources;L.reloadResources;L.use;L.changeLanguage;L.getFixedT;const Or=L.t;L.exists;L.setDefaultNamespace;L.hasLoadedNamespace;L.loadNamespaces;L.loadLanguages;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $r={},we=ne(class extends Se{constructor(){super(...arguments),this.ot=$r}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((i,n)=>i===this.ot[n]))return Y}else if(this.ot===e)return Y;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,s)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zr{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let Tr=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=t=>!yn(t)&&typeof t.then=="function",Ds=1073741823;let Lr=class extends bt{constructor(){super(...arguments),this._$Cwt=Ds,this._$Cbt=[],this._$CK=new zr(this),this._$CX=new Tr}render(...e){return e.find(s=>!Ms(s))??Y}update(e,s){const i=this._$Cbt;let n=i.length;this._$Cbt=s;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<s.length&&!(a>this._$Cwt);a++){const l=s[a];if(!Ms(l))return this._$Cwt=a,l;a<n&&l===i[a]||(this._$Cwt=Ds,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return Y}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ve=ne(Lr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},Ti=ne(class extends Se{constructor(t){if(super(t),t.type!==G.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const n=[],r=[];let o=0;for(const a of t)n[o]=i?i(a,o):o,r[o]=s(a,o),o++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const n=bn(t),{values:r,keys:o}=this.dt(e,s,i);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=n.length-1,p=0,f=r.length-1;for(;d<=h&&p<=f;)if(n[d]===null)d++;else if(n[h]===null)h--;else if(a[d]===o[p])l[p]=oe(n[d],r[p]),d++,p++;else if(a[h]===o[f])l[f]=oe(n[h],r[f]),h--,f--;else if(a[d]===o[f])l[f]=oe(n[d],r[f]),Oe(t,l[f+1],n[d]),d++,f--;else if(a[h]===o[p])l[p]=oe(n[h],r[p]),Oe(t,n[d],n[h]),h--,p++;else if(c===void 0&&(c=Fs(o,p,f),u=Fs(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(o[p]),m=g!==void 0?n[g]:null;if(m===null){const _=Oe(t,n[d]);oe(_,r[p]),l[p]=_}else l[p]=oe(m,r[p]),Oe(t,n[d],m),n[g]=null;p++}else tt(n[h]),h--;else tt(n[d]),d++;for(;p<=f;){const g=Oe(t,l[f+1]);oe(g,r[p]),l[p++]=g}for(;d<=h;){const g=n[d++];g!==null&&tt(g)}return this.ut=o,mi(t,l),Y}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class St extends Event{constructor(e){super(St.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}St.eventName="rangeChanged";class Pt extends Event{constructor(e){super(Pt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Pt.eventName="visibilityChanged";class Ct extends Event{constructor(){super(Ct.eventName,{bubbles:!1})}}Ct.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ar{constructor(e){this._element=null;const s=e??window;this._node=s,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Rr extends Ar{constructor(e,s){super(s),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,s){const i=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;this._scrollTo(i)}scrollBy(e,s){const i=typeof e=="number"&&typeof s=="number"?{left:e,top:s}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,s=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=s,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:s,left:i}=e;return s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&s===this._destination.top?!1:(this.__destination={top:s,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,s,i){return this._scrollTo(e,s,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:s}=this;let{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(i-e),o=Math.abs(n-s);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let js=typeof window<"u"?window.ResizeObserver:void 0;const Wt=Symbol("virtualizerRef"),We="virtualizer-sizer";let Vs;class kr{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const s=e.layout||{};this._layoutInitialized=this._initLayout(s)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new js(()=>this._hostElementSizeChanged()),this._childrenRO=new js(this._childrenSizeChanged.bind(this))}_initHostElement(e){const s=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),s[Wt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Mr(this._hostElement,e),this._scrollerController=new Rr(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const s=this._hostElement.style;s.display=s.display||"block",s.position=s.position||"relative",s.contain=s.contain||"size layout",this._isScroller&&(s.overflow=s.overflow||"auto",s.minHeight=s.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let s=e.querySelector(`[${We}]`);s||(s=document.createElement("div"),s.setAttribute(We,""),e.appendChild(s)),Object.assign(s.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),s.textContent="&nbsp;",s.setAttribute(We,""),this._sizer=s}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const s=e.type||Vs;if(typeof s=="function"&&this._layout instanceof s){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let s,i;if(typeof e.type=="function"){i=e.type;const n={...e};delete n.type,s=n}else s=e;i===void 0&&(Vs=i=(await is(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),s),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),s=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:s,virtualizationTime:n}}return null}_measureChildren(){const e={},s=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<s.length;n++){const r=s[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=i.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:s,height:i}=e.getBoundingClientRect();return Object.assign({width:s,height:i},Nr(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:s,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(s||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Ct)}get _children(){const e=[];let s=this._hostElement.firstElementChild;for(;s;)s.hasAttribute(We)||e.push(s),s=s.nextElementSibling;return e}_updateView(){const e=this._hostElement,s=this._scrollerController?.element,i=this._layout;if(e&&s&&i){let n,r,o,a;const l=e.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)n=Math.max(n,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const u=s.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:s.scrollWidth,height:s.scrollHeight},p=n-l.top+e.scrollTop,f=r-l.left+e.scrollLeft,g=Math.max(0,o-n),m=Math.max(0,a-r);i.viewportSize={width:m,height:g},i.viewportScroll={top:p,left:f},i.totalScrollSize=h,i.offsetWithinScroller=d}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:s,left:i,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${s}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:s,_last:i,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==s||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:s}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:s-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const s=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(s,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:s}=this._scrollIntoViewTarget||{};s&&e?.has(s)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new St({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Pt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,s)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=s})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const s of e)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Nr(t){const e=window.getComputedStyle(t);return{marginTop:Ge(e.marginTop),marginRight:Ge(e.marginRight),marginBottom:Ge(e.marginBottom),marginLeft:Ge(e.marginLeft)}}function Ge(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Hs(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Ir(t,e=!1){const s=[];let i=e?t:Hs(t);for(;i!==null;)s.push(i),i=Hs(i);return s}function Mr(t,e=!1){let s=!1;return Ir(t,e).filter(i=>{if(s)return!1;const n=getComputedStyle(i);return s=n.position==="fixed",n.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=t=>t,Fr=(t,e)=>b`${e}: ${JSON.stringify(t,null,2)}`;class jr extends bt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(s,i)=>Fr(s,i+this._first),this._keyFunction=(s,i)=>Dr(s,i+this._first),this._items=[],e.type!==G.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const s=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)s.push(this._items[i]);return Ti(s,this._keyFunction,this._renderItem)}update(e,[s]){this._setFunctions(s);const i=this._items!==s.items;return this._items=s.items||[],this._virtualizer?this._updateVirtualizerConfig(e,s):this._initialize(e,s),i?Y:this.render()}async _updateVirtualizerConfig(e,s){if(!await this._virtualizer.updateLayoutConfig(s.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,s)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:s,keyFunction:i}=e;s&&(this._renderItem=(n,r)=>s(n,r+this._first)),i&&(this._keyFunction=(n,r)=>i(n,r+this._first))}_makeVirtualizer(e,s){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:n,items:r}=s;this._virtualizer=new kr({hostElement:e,layout:i,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,s){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,s))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Vr=ne(jr),Hr=(t,e)=>{if(!t||!e)return;const s=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(i=>s.includes(i)?[]:[[i,void 0]]))};class Br extends Se{_props;render(e){return Y}update(e,[s]){return this._props!==s&&Object.assign(e.element,Hr(this._props,s),this._props=s),Y}}const Ur=ne(Br);function Yr(t){return()=>t}const Xr=Yr(),Li=Xr,ht=t=>t,as=(t,...e)=>typeof t=="function"?t(...e):t,Kr=t=>{const e=Xe(),s=D(()=>new CSSStyleSheet,[]);z(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,s]},[]),z(()=>{s.replaceSync(t)},[t])};function it(t){return t?e=>e?.[t]:ht}const Zr=t=>{const e=it(t);return s=>typeof s=="string"?s:e(s)?.toString()||""},Jr=t=>e=>{const s={};for(const i in e)t.includes(i)&&(s[i]=e[i]);return s},Wr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Gr=fe`
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
		background: url("${Wr}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,qr=({index:t,itemHeight:e,auto:s})=>fe`
	${N(!s,()=>fe`
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
`,Qr=t=>{const e=t==="auto",[s,i]=Q(e?40:t);return[s,n=>e?i(n):void 0]},Ai=jn(()=>Li);customElements.define("cosmoz-keybinding-provider",Ai.Provider);const ls=t=>{const e=D(()=>({}),[]);return D(()=>Object.assign(e,t),[e,...Object.values(t)])},Ie=(t,e)=>{const s=wi(Ai),i=ls(t);z(()=>s(i),e)},eo=Symbol("listbox.navigate.up"),to=Symbol("listbox.navigate.down"),so=Symbol("listbox.select"),io=({onUp:t,onDown:e,onEnter:s})=>{const i=Xe();Ie({activity:eo,callback:t,element:()=>i},[]),Ie({activity:to,callback:e,element:()=>i},[]),Ie({activity:so,callback:s,element:()=>i},[])},no=({items:t,onSelect:e,defaultIndex:s=0})=>{const[i,n]=Q({index:s}),{index:r}=i,{length:o}=t;return z(()=>{n({index:i.index<0?s:Math.min(i.index,t.length-1),scroll:!0})},[t,s]),io({onUp:C(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:C(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:C(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:i,highlight:C(a=>n({index:a}),[]),select:C(a=>e?.(a),[e])}},ro=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function ae(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:ro(t)?Array.from(t):[t]}const jt=(t,e=ht)=>s=>{const i=ae(t).map(e);return ae(s).filter(n=>!i.includes(e(n)))},oo=(t,e)=>e?s=>s!=null&&ae(t).find(i=>i[e]===s[e]):s=>s!=null&&ae(t).includes(s),ao=(t,e)=>{if(!e||!t)return t;const s=t.toLowerCase().indexOf(e.toLowerCase());if(s<0)return t;const i=s+e.length;return[t.slice(0,s),b`<mark>${t.slice(s,i)}</mark>`,t.slice(i)]},lo=(t=ht)=>(e,s,{highlight:i,select:n,textual:r=ht,query:o,isSelected:a})=>{const l=r(e),c=ao(l,o),u=t(c,e,s);return b`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${s}
				@mouseenter=${()=>i(s)}
				@click=${()=>n(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},co=({itemRenderer:t=lo(),...e})=>{const s=ls(e);return C((i,n)=>t(i,n,s),[s,t])},uo=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],ho=({value:t,valueProperty:e,items:s,onSelect:i,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=D(()=>oo(t,e),[t,e]),d=D(()=>s.slice(),[s,u]),{position:h,highlight:p,select:f}=no({items:d,onSelect:i,defaultIndex:isNaN(n)?void 0:Number(n)}),[g,m]=Qr(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:p,select:f,itemHeight:g,setItemHeight:m,renderItem:co({itemRenderer:a,items:d,position:h,highlight:p,select:f,textual:o,query:r,isSelected:u})}},Bs=Li,po=t=>{const e=ee(void 0),{position:s,items:i,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=ho(t);return z(()=>{const l=e.current?.[Wt];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Bs)},[i]),z(()=>{if(!s.scroll)return;const l=e.current?.[Wt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(s.index)?.scrollIntoView({block:"nearest"}),Bs);return}l.element(s.index)?.scrollIntoView({block:"nearest"})}},[s]),Kr(qr({...s,itemHeight:o,auto:t.itemHeight==="auto"})),b`<div
			class="items"
			style="min-height: ${r}px"
			${Pe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Vr({items:i,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",X(po,{styleSheets:[rs(Gr)]}));const fo=({multi:t,...e},s)=>b`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Ur(Jr(uo)(e))}
		>${s}</cosmoz-listbox
	>`,go=vt`
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
`,mo=b`
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
`,_o=({onClear:t,disabled:e})=>b`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${s=>s.preventDefault()}
	>
		<slot></slot>
	</div>
	${N(t&&!e,()=>b`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${s=>s.preventDefault()}
				@click=${t}
			>
				${mo}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",X(_o,{observedAttributes:["disabled"],styleSheets:[rs(go)]}));const yo=({content:t,onClear:e,disabled:s,hidden:i,className:n="chip",slot:r})=>b`<cosmoz-autocomplete-chip
		class=${K(n)}
		slot=${K(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${s}
		?hidden=${i}
		.onClear=${e}
		title=${K(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,bo=({value:t,min:e=0,onDeselect:s,textual:i,disabled:n,chipRenderer:r=yo})=>[...t.filter(Boolean).map(o=>r({item:o,content:i(o),onClear:t.length>e&&(()=>s(o)),disabled:n,slot:"control"})),r({item:null,content:b`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],vo=fe`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",X(()=>W,{styleSheets:[vo]}));const wo=vt`
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
`,cs=(t,e=()=>({}))=>{const s={type:t,toString(){return t}};return Object.assign((...n)=>Object.assign(e(...n),s),s)},Us=t=>t.type||t.toString(),Ys=t=>Array.isArray(t)?t:[t],xo=(t,e)=>{const s=Ys(e),i=(s.every(Array.isArray)?s:[s]).map(([n,r])=>({actions:Ys(n).map(Us),handle:r}));return(n=t,r)=>{const o=i.find(a=>a.actions.includes(Us(r)));return o?o.handle(n,r):n}},he={pending:"pending",rejected:"rejected",resolved:"resolved"},Ri={error:void 0,result:void 0,state:he.pending},ki=cs(he.pending),Ni=cs(he.resolved,t=>({result:t})),Ii=cs(he.rejected,t=>({error:t})),So=xo(Ri,[[ki,()=>({error:void 0,result:void 0,state:he.pending})],[Ni,(t,{result:e})=>({error:void 0,result:e,state:he.resolved})],[Ii,(t,{error:e})=>({error:e,result:void 0,state:he.rejected})]]),Mi=t=>{const[{error:e,result:s,state:i},n]=xi(So,Ri);return z(()=>{if(!t)return;let r=!1;return n(ki()),t.then(o=>!r&&n(Ni(o)),o=>!r&&n(Ii(o))),()=>{r=!0}},[t]),[s,e,i]},Po=Symbol("autocomplete.deselect.last"),Co=Symbol("autocomplete.search.when.selected"),Xs=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Eo=(t,e,s)=>{if(!e)return t;const i=Xs(e.toLowerCase()),n=[];for(const r of t){const a=Xs(s(r).toLowerCase()).indexOf(i);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},Oo=t=>t===!1||t==null?[]:t,$o=(t,e,s)=>t.dispatchEvent(new CustomEvent(e,{detail:s})),Ks=[],zo=t=>(...e)=>{let s;const i=()=>{s&&cancelAnimationFrame(s)};return i(),s=requestAnimationFrame(()=>{s=void 0,t(...e)}),i},To=(t,e,s)=>C(i=>{e?.(i),t.dispatchEvent(new CustomEvent(s,{detail:i}))},[e]),Lo=({value:t,text:e,onChange:s,onText:i,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:p,defaultIndex:f,externalSearch:g,disabled:m,lazyOpen:_})=>{const y=r!=null?Number(r):void 0,v=D(()=>(c??Zr)(l),[c,l]),w=Xe(),[E,T]=Fe("opened",!1),O=!e,k=D(()=>e?.trim(),[e]),M=To(w,i,"text"),R=C(P=>{s?.(P,()=>T(!1)),$o(w,"value",P)},[s]),[H,_e]=Q([]),x=!!(_&&!k),F=D(()=>x?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:k,active:E}):a).then(Oo),[a,E,k,x]),I=D(()=>ae(t),[t]);z(()=>F.then(_e),[F]),Ie({activity:Po,callback:()=>{const P=ae(I);P.length>0&&R(P.slice(0,-1))},check:()=>!m&&O&&w.matches(":focus-within"),element:()=>w},[]),Ie({activity:Co,callback:P=>{const V=ae(I),Z=y===1;V.length>0&&Z&&P.key.length===1&&R(V.slice(0,-1))},allowDefault:!0,check:()=>!m&&O&&w.matches(":focus-within"),element:()=>w},[y]),z(()=>{!E&&!h&&M("")},[E,h]),z(()=>{w.toggleAttribute("opened",!!E)},[E]);const j=ls({onText:M,onChange:R,value:I,limit:y,min:o,keepQuery:h,keepOpened:d,setOpened:T,onSelect:n,valueProperty:u}),[,,ie]=Mi(F);return{limit:y,opened:E,query:k,textual:v,value:I,source$:F,loading:ie==="pending",items:D(()=>{if(!E||x)return Ks;const P=p?H:[...I,...jt(I,it(u))(H)];return g?P:Eo(P,k,v)},[H,E,k,v,O,I,p,u,g,x]),onToggle:C(P=>{m||T(P.newState==="open")},[m]),onText:C(P=>{m||(M(P.target.value),T(!0))},[m,M,e,T]),onSelect:C(P=>{if(m)return;j.onSelect?.(P,j);const{onChange:V,onText:Z,limit:ce,min:Lt,value:At,keepQuery:Rt,keepOpened:kt,setOpened:Nt,valueProperty:Ee}=j;Rt||Z(""),kt||Nt(!1);const ue=ae(At),A=it(Ee),Ke=ue.some(Ze=>A(Ze)===A(P));Ke&&ue.length===Lt||V((Ke?jt(P,A)(ue):[...ue,P]).slice(-ce))},[m,j]),onDeselect:C(P=>{m||j.onChange(jt(P,it(j.valueProperty))(j.value))},[m,j]),defaultIndex:k!==void 0&&k?.length>0?0:f}},Ao=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),s=t.shadowRoot.querySelector(".badge");s.hidden=!0;for(const a of e)a.hidden=!1;const n=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=e.length-r;for(s.querySelector("span").textContent="+"+o.toString(),s.hidden=o<1;r<e.length;r++)e[r].hidden=!0},Ro=({value:t,opened:e,wrap:s,limit:i})=>{const n=Xe(),r=!(s||i===1),o=D(()=>zo(()=>Ao(n)),[]),[a,l]=Q(0);ot(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),ot(()=>r?o():void 0,[r,a,e,t])},ko=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),No=({opened:t,isSingle:e,showSingle:s,hasResultsOrQuery:i})=>!t||e&&!s?!1:i,Io=t=>{const{opened:e,invalid:s,errorMessage:i,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:h,onDeselect:p,value:f,limit:g,min:m,showSingle:_,items:y,source$:v,loading:w,chipRenderer:E}=t,T=g===1,O=T&&f?.[0]!=null,k=w||y.length>0||u!=null&&u.length>0;return b`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${o}
			.opened=${e}
			@dropdown-toggle=${h}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${n}
				.placeholder=${O?void 0:r}
				?no-label-float=${a}
				?always-float-label=${f?.length>0||l}
				?readonly=${O}
				?disabled=${o}
				?invalid=${we([v,s],()=>Ve(v.then(()=>s,()=>!0),s))}
				.errorMessage=${we([v,i],()=>Ve(v.then(()=>i,M=>M.message),i))}
				.value=${wt(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${ko}
				?data-one=${T}
				?data-single=${O}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${bo({value:f,min:m,onDeselect:p,textual:c,disabled:o,chipRenderer:E})}
			</cosmoz-input>

			${N(No({opened:e,isSingle:O,showSingle:_,hasResultsOrQuery:k}),()=>fo({...t,items:y,multi:!T},N(w,()=>b`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>N(u!=null&&u.length>0&&y.length===0,()=>b`<slot name="no-result">
											<p class="no-result">${Or("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Di=t=>{const e={...t,...Lo(t)};return Ro(e),Io(e)},Fi=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Mo=t=>{const{onChange:e,onText:s,...i}=t,[n,r]=Fe("value");return z(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Di({...i,value:n,onChange:C((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:C(o=>{t.text=o,s?.(o)},[s])})},ji=[rs(wo)],Vi={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",X(Di,{observedAttributes:Fi,styleSheets:ji,shadowRootInit:Vi}));customElements.define("cosmoz-autocomplete",X(Mo,{observedAttributes:Fi,styleSheets:ji,shadowRootInit:Vi}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi="important",Do=" !"+Hi,Bi=ne(class extends Se{constructor(t){if(super(t),t.type!==G.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const i=t[s];return i==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in e){const n=e[i];if(n!=null){this.ft.add(i);const r=typeof n=="string"&&n.endsWith(Do);i.includes("-")||r?s.setProperty(i,r?n.slice(0,-11):n,r?Hi:""):s[i]=n}}return Y}});class Fo extends Promise{constructor(e){const s={};super((i,n)=>Object.assign(s,{resolve:i,reject:n})),Object.assign(this,s),e?.(s.resolve,s.reject)}resolve=()=>{}}const Ui={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},jo=t=>{const{slide:e}=t,[s,i]=Q([]);return ot(()=>void Object.assign(t.style,Ui.host),[]),z(()=>{if(e==null)return;const n={animationEnd$:new Fo,...e};i((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===n.id&&l!==!0);return o!==-1?[...r.slice(0,o),n,...r.slice(o+1,r.length)]:[...r,n]})},[e]),ot(async()=>{if(s.filter(l=>!l.out).length<2){const l=s[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const n=s[s.length-1],r=s[s.length-2],o=n.el,a=r.el;r.out=!0,o&&a&&await n.animation?.(o,a),i((l=[])=>l.filter(c=>c!==r))},[s]),{slides:s}},Vo=t=>b`<div
		${Pe(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${Bi(Ui.slide)}
	>
		${we([t],()=>t.content??t.render?.(t))}
	</div>`,Ho=({slides:t})=>we([t],()=>Ti(t,({id:e})=>e,Vo)),Bo=t=>Ho(jo(t));customElements.define("cosmoz-slider",X(Bo,{useShadowDOM:!1}));const qe=(t,e)=>{const s=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},Uo=(t,e)=>{const s=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),i=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([s.finished,i.finished])},Yo=()=>b`<style>
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
</style>`;customElements.define("cz-spinner",X(Yo));const Xo=se(class extends te{constructor(t,e){super(t,e),this.dispatchEvent=(...s)=>{e.host.dispatchEvent.apply(e.host,s)}}update(){return this.dispatchEvent}}),Vt=(t,e=.08,s=.001)=>{const[i,n]=Q(null);return z(()=>{if(i==null){n(t);return}if(e>=1){n(t);return}const r=i;window.requestAnimationFrame(()=>{const o=t-r;n(Math.abs(o)<s?t:i+o*e)})},[i,n,t,e,s]),i},Ko=(t,e)=>{"ResizeObserver"in window&&z(()=>{if(e==null)return;const s=new ResizeObserver(([{contentRect:i}])=>t(i));return s.observe(e),t(e.getBoundingClientRect()),()=>s.unobserve(e)},[t,e])},He=(t,e,s)=>Math.max(e,Math.min(s,t)),us=(t,e,s,i)=>s/i<t/e?s/t:i/e,Zo=(t,e,s,i)=>s/i>t/e?s/t:i/e,Jo=(t,e,s,i,n)=>{const r=us(t,e,s,i),o=r*n,a=t*o,l=e*o,c=a<s?(-s+a)/2:(s-a)/2,u=a<s?(s-a)/2:(-s+a)/2,d=l<i?(-i+l)/2:(i-l)/2,h=l<i?(i-l)/2:(-i+l)/2;return{x:[c,u],y:[d,h]}},Yi="empty",Et="loading",Xi="loaded",ds="error",Ce="idle",xe="panning",Me="pinching",hs="settling",Wo=1.1,Go=t=>Wo/t,qo=t=>2*t,Ot=(t,e,s,i)=>{const n=us(t,e,s,i),r=Zo(t*n,e*n,s,i);return Math.max(Go(n),qo(r))},Zs=.2,Qo={status:Yi,interaction:Ce,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{},settleStartZoom:1,settleStartPanX:0,settleStartPanY:0,settleOriginX:0,settleOriginY:0,settleTargetZoom:1},ea=t=>Object.keys(t.pointers).length,ps=(t,e)=>{const s={...t};return delete s[e],s},Js=t=>{const e=Object.keys(t);if(e.length<2)return null;const s=t[e[0]],i=t[e[1]];return{midX:(s.x+i.x)/2,midY:(s.y+i.y)/2,distance:Math.hypot(i.x-s.x,i.y-s.y)}},le=t=>{const e=Jo(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:He(t.panX,e.x[0],e.x[1]),panY:He(t.panY,e.y[0],e.y[1])}},Ki=(t,{dPanX:e=0,dPanY:s=0,scaleDiff:i=1,originX:n=0,originY:r=0})=>{const o=t.zoom*i;return{...t,zoom:o,panX:e+n+(t.panX-n)*i,panY:s+r+(t.panY-r)*i}},Zi=(t,e)=>{const s=Ot(t.iw,t.ih,t.cw,t.ch),i=e?1:1-Zs,n=e?s:s*(1+Zs);return{...t,zoom:He(t.zoom,i,n)}},Ji=(t,e,s)=>{const i=Ot(t.iw,t.ih,t.cw,t.ch),n=He(t.zoom,1,i);return{...t,interaction:hs,settleStartZoom:t.zoom,settleStartPanX:t.panX,settleStartPanY:t.panY,settleOriginX:e,settleOriginY:s,settleTargetZoom:n}},Wi=t=>{const e=Ot(t.iw,t.ih,t.cw,t.ch);return t.zoom<1||t.zoom>e},ta=(t,e)=>{switch(e.type){case"load":return{...t,status:Et};default:return t}},sa=(t,e)=>{switch(e.type){case"loaded":return{...t,status:Xi,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...t,status:ds};default:return t}},ia=(t,e)=>{switch(e.type){case"load":return{...t,status:Et};default:return t}},na=(t,e)=>{switch(e.type){case"pointerdown":return{...t,interaction:xe,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}};default:return t}},ra=(t,e)=>{switch(e.type){case"pointerdown":{const s={...t.pointers,[e.id]:{x:e.x,y:e.y}};return{...t,interaction:Me,pointers:s}}case"pointermove":{const s=t.pointers[e.id];if(!s)return t;const i=e.x-s.x,n=e.y-s.y;return{...t,panX:t.panX+i,panY:t.panY+n,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}}}case"pointerup":{const s=ps(t.pointers,e.id),i={...t,pointers:s};return Object.keys(s).length===0?Wi(i)?Ji(i,e.settleOriginX??0,e.settleOriginY??0):le({...i,interaction:Ce}):i}default:return t}},oa=(t,e)=>{switch(e.type){case"pointermove":{if(!t.pointers[e.id])return t;const i=Js(t.pointers),n={...t.pointers,[e.id]:{x:e.x,y:e.y}},r=Js(n);if(!i||!r)return{...t,pointers:n};const o=i.distance?r.distance/i.distance:1,a=r.midX-i.midX,l=r.midY-i.midY,c=Ki({...t,pointers:n},{dPanX:a,dPanY:l,scaleDiff:o,originX:e.containerOriginX,originY:e.containerOriginY});return Zi(c,!1)}case"pointerup":{const s=ps(t.pointers,e.id),i={...t,pointers:s};return Object.keys(s).length<=1?Wi(i)?Ji(i,e.settleOriginX??0,e.settleOriginY??0):Object.keys(s).length===1?le({...i,interaction:xe}):le({...i,interaction:Ce}):i}default:return t}},aa=(t,e)=>{switch(e.type){case"settled":{const s=t.settleTargetZoom/t.settleStartZoom,i=t.settleOriginX+(t.settleStartPanX-t.settleOriginX)*s,n=t.settleOriginY+(t.settleStartPanY-t.settleOriginY)*s,r={...t,zoom:t.settleTargetZoom,panX:i,panY:n};return ea(t)>0?le({...r,interaction:xe}):le({...r,interaction:Ce})}case"pointerup":{const s=ps(t.pointers,e.id);return{...t,pointers:s}}case"pointerdown":{const s=e.currentZoom??t.settleTargetZoom,i=t.settleStartZoom!==0?s/t.settleStartZoom:1,n=t.settleOriginX+(t.settleStartPanX-t.settleOriginX)*i,r=t.settleOriginY+(t.settleStartPanY-t.settleOriginY)*i,o={...t.pointers,[e.id]:{x:e.x,y:e.y}};return{...t,zoom:s,panX:n,panY:r,interaction:xe,pointers:o}}default:return t}},la=(t,e)=>{switch(t.interaction){case Ce:return na(t,e);case xe:return ra(t,e);case Me:return oa(t,e);case hs:return aa(t,e);default:return t}},ca=(t,e)=>{switch(e.type){case"load":return{...t,status:Et,interaction:Ce,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const s=Ot(t.iw,t.ih,t.cw,t.ch),i=He(e.zoom,1,s);return le({...t,zoom:i})}case"wheel":{const{delta:s,originX:i,originY:n}=e,r=1+s,o=Ki(t,{scaleDiff:r,originX:i,originY:n});return le(Zi(o,!0))}case"pointerdown":case"pointermove":case"pointerup":case"settled":return la(t,e);default:return t}},ua=(t,e)=>{if(e.type==="resize")return le({...t,cw:e.rect.width,ch:e.rect.height});switch(t.status){case Yi:return ta(t,e);case Et:return sa(t,e);case Xi:return ca(t,e);case ds:return ia(t,e);default:return t}},da=(t,e,s,i)=>{const{iw:n=100,ih:r=100,cw:o=100,ch:a=100}=t,l=us(n,r,o,a),c=l*e;return{position:"absolute",top:"50%",left:"50%",transform:["translate(-50%, -50%)",`translate(${s}px, ${i}px)`,`scale(${c})`].join(" ")}},Ht=(t,e,s)=>{const i=s.current?.getBoundingClientRect();return i?{originX:t-i.left-i.width/2,originY:e-i.top-i.height/2}:{originX:0,originY:0}},ha=(t=.3,e=.08)=>{const[s,i]=xi(ua,Qo),n=ee(),r=C(()=>i({type:"load"}),[i]),o=C(x=>i({type:"loaded",dimensions:x}),[i]),a=C(()=>i({type:"error"}),[i]),l=C(x=>i({type:"zoom",zoom:x}),[i]),c=C(x=>x&&i({type:"resize",rect:x}),[i]),u=C(()=>c(n.current&&n.current.getBoundingClientRect()),[c]);Ko(c,n.current);const d=C(x=>o({iw:x.target.naturalWidth,ih:x.target.naturalHeight}),[o]),h=ee(1),p=C(x=>{n.current?.setPointerCapture(x.pointerId),i({type:"pointerdown",id:x.pointerId,x:x.clientX,y:x.clientY,currentZoom:h.current})},[i]),f=C(x=>{const{originX:F,originY:I}=Ht(x.clientX,x.clientY,n);i({type:"pointermove",id:x.pointerId,x:x.clientX,y:x.clientY,containerOriginX:F,containerOriginY:I})},[i]),g=ee({x:0,y:0});D(()=>{if(s.interaction!==Me)return;const x=Object.keys(s.pointers);if(x.length>=2){const F=s.pointers[x[0]],I=s.pointers[x[1]],j=(F.x+I.x)/2,ie=(F.y+I.y)/2,{originX:P,originY:V}=Ht(j,ie,n);g.current={x:P,y:V}}},[s.pointers,s.interaction]);const m=C(x=>{try{n.current?.releasePointerCapture(x.pointerId)}catch{}i({type:"pointerup",id:x.pointerId,settleOriginX:g.current.x,settleOriginY:g.current.y})},[i]),_=C(x=>{x.preventDefault();const{originX:F,originY:I}=Ht(x.clientX,x.clientY,n);i({type:"wheel",delta:-Math.sign(x.deltaY)*.8,originX:F,originY:I})},[i]),y=s.interaction===hs,v=s.interaction===Me,w=s.interaction===xe||s.interaction===Me,E=y?s.settleTargetZoom:s.zoom,O=Vt(E,v?.8:e);h.current=O;let k=s.panX,M=s.panY;if(y&&s.settleStartZoom!==0){const x=O/s.settleStartZoom;k=s.settleOriginX+(s.settleStartPanX-s.settleOriginX)*x,M=s.settleOriginY+(s.settleStartPanY-s.settleOriginY)*x}let R=t;y?R=1:w&&(R=.9);const H=Vt(k,R),_e=Vt(M,R);return y&&Math.abs(O-s.settleTargetZoom)<.001&&i({type:"settled"}),{...s,load:r,loaded:o,error:a,zoomTo:l,resize:u,onPointerDown:p,onPointerMove:f,onPointerUp:m,onImageLoad:d,onWheel:_,containerRef:n,style:da(s,O,H,_e)}},pa=({src:t,disabled:e,panStiffness:s,zoomStiffness:i})=>{const{status:n,zoom:r,load:o,error:a,zoomTo:l,resize:c,onPointerDown:u,onPointerMove:d,onPointerUp:h,onImageLoad:p,onWheel:f,style:g,containerRef:m}=ha(s,i);if(z(o,[t]),os({zoomTo:l,resize:c,zoom:r},[l,c,r]),!t)return W;const _=Xo();return z(()=>_(new CustomEvent("zoom-changed",{detail:{value:r}})),[_,r]),z(()=>_(new CustomEvent("status-changed",{detail:{value:n}})),[_,n]),b`
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
			@pointerdown=${u}
			@pointermove=${d}
			@pointerup=${h}
			@pointercancel=${h}
			${Pe(y=>m.current=y)}
		>
			${!t||n===ds?W:b`
						<img
							src=${t}
							draggable="false"
							@load=${p}
							@error=${a}
							style=${Bi(g)}
						/>
				  `}
		</div>
	`};class fa extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",X(pa,{observedAttributes:["src","disabled","pan-stiffness","zoom-stiffness"],baseElement:fa}));/**
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
*/let ga=/(url\()([^)]*)(\))/g,ma=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Qe,U;function De(t,e){if(t&&ma.test(t)||t==="//")return t;if(Qe===void 0){Qe=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",Qe=s.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Qe)try{return new URL(t,e).href}catch{return t}return U||(U=document.implementation.createHTMLDocument("temp"),U.base=U.createElement("base"),U.head.appendChild(U.base),U.anchor=U.createElement("a"),U.body.appendChild(U.anchor)),U.base.href=e,U.anchor.href=t,U.anchor.href||t}function fs(t,e){return t.replace(ga,function(s,i,n,r){return i+"'"+De(n.replace(/["']/g,""),e)+"'"+r})}function gs(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _a=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const ya=_a&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let ba=window.Polymer&&window.Polymer.rootPath||gs(document.baseURI||window.location.href),pt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Gt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,va=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,wa=window.Polymer&&window.Polymer.legacyOptimizations||!1,xa=window.Polymer&&window.Polymer.legacyWarnings||!1,Sa=window.Polymer&&window.Polymer.syncInitialRender||!1,qt=window.Polymer&&window.Polymer.legacyUndefined||!1,Pa=window.Polymer&&window.Polymer.orderedComputed||!1,Ws=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ca=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ea=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Oa=0;const ge=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let s=Oa++;function i(n){let r=n.__mixinSet;if(r&&r[s])return n;let o=e,a=o.get(n);if(!a){a=t(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[s]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ms={},Gi={};function Gs(t,e){ms[t]=Gi[t.toLowerCase()]=e}function qs(t){return ms[t]||Gi[t.toLowerCase()]}function $a(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Be extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,s){if(e){let i=qs(e);return i&&s?i.querySelector(s):i}return null}attributeChangedCallback(e,s,i,n){s!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=De(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=gs(s)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Gt&&qs(e)!==void 0)throw Gs(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Gs(e,this),$a(this)}}}Be.prototype.modules=ms;customElements.define("dom-module",Be);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const za="link[rel=import][type~=css]",Ta="include",Qs="shady-unscoped";function qi(t){return Be.import(t)}function ei(t){let e=t.body?t.body:t;const s=fs(e.textContent,t.baseURI),i=document.createElement("style");return i.textContent=s,i}function La(t){const e=t.trim().split(/\s+/),s=[];for(let i=0;i<e.length;i++)s.push(...Aa(e[i]));return s}function Aa(t){const e=qi(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const s=[];s.push(...en(e));const i=e.querySelector("template");i&&s.push(...Qi(i,e.assetpath)),e._styles=s}return e._styles}function Qi(t,e){if(!t._styles){const s=[],i=t.content.querySelectorAll("style");for(let n=0;n<i.length;n++){let r=i[n],o=r.getAttribute(Ta);o&&s.push(...La(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=fs(r.textContent,e)),s.push(r)}t._styles=s}return t._styles}function Ra(t){let e=qi(t);return e?en(e):[]}function en(t){const e=[],s=t.querySelectorAll(za);for(let i=0;i<s.length;i++){let n=s[i];if(n.import){const r=n.import,o=n.hasAttribute(Qs);if(o&&!r._unscopedStyle){const a=ei(r);a.setAttribute(Qs,""),r._unscopedStyle=a}else r._style||(r._style=ei(r));e.push(o?r._unscopedStyle:r._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Qt(t){return t.indexOf(".")>=0}function me(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function ka(t,e){return t.indexOf(e+".")===0}function ft(t,e){return e.indexOf(t+".")===0}function gt(t,e,s){return e+s.slice(t.length)}function Le(t){if(Array.isArray(t)){let e=[];for(let s=0;s<t.length;s++){let i=t[s].toString().split(".");for(let n=0;n<i.length;n++)e.push(i[n])}return e.join(".")}else return t}function tn(t){return Array.isArray(t)?Le(t).split("."):t.toString().split(".")}function B(t,e,s){let i=t,n=tn(e);for(let r=0;r<n.length;r++){if(!i)return;let o=n[r];i=i[o]}return s&&(s.path=n.join(".")),i}function ti(t,e,s){let i=t,n=tn(e),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(i=i[a],!i)return}i[r]=s}else i[e]=s;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mt={},Na=/-[a-z]/g,Ia=/([A-Z])/g;function sn(t){return mt[t]||(mt[t]=t.indexOf("-")<0?t:t.replace(Na,e=>e[1].toUpperCase()))}function $t(t){return mt[t]||(mt[t]=t.replace(Ia,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ma=0,nn=0,ve=[],Da=0,es=!1,rn=document.createTextNode("");new window.MutationObserver(Fa).observe(rn,{characterData:!0});function Fa(){es=!1;const t=ve.length;for(let e=0;e<t;e++){let s=ve[e];if(s)try{s()}catch(i){setTimeout(()=>{throw i})}}ve.splice(0,t),nn+=t}const ja={run(t){return es||(es=!0,rn.textContent=Da++),ve.push(t),Ma++},cancel(t){const e=t-nn;if(e>=0){if(!ve[e])throw new Error("invalid async handle: "+t);ve[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Va=ja,on=ge(t=>{class e extends t{static createProperties(i){const n=this.prototype;for(let r in i)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,n){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,n))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[i];return n||(n=this.constructor.attributeNameForProperty(i),this.__dataAttributes[n]=i),n}_definePropertyAccessor(i,n){Object.defineProperty(this,i,{get(){return this.__data[i]},set:n?function(){}:function(r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,n){this._setPendingProperty(i,n)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,n,r){let o=this.__data[i],a=this._shouldPropertyChange(i,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=o),this.__data[i]=n,this.__dataPending[i]=n),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Va.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(i,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,n,r)),this.__dataCounter--}_shouldPropertiesChange(i,n,r){return!!n}_propertiesChanged(i,n,r){}_shouldPropertyChange(i,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(i,n,r,o){n!==r&&this._attributeToProperty(i,r),super.attributeChangedCallback&&super.attributeChangedCallback(i,n,r,o)}_attributeToProperty(i,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[i]||i;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,n,r){this.__serializing=!0,r=arguments.length<3?this[i]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(i=pe(i)),o===void 0?i.removeAttribute(r):i.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i?.toString()}}_deserializeValue(i,n){switch(n){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const an={};let et=HTMLElement.prototype;for(;et;){let t=Object.getOwnPropertyNames(et);for(let e=0;e<t.length;e++)an[t[e]]=!0;et=Object.getPrototypeOf(et)}const Ha=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Ba(t,e){if(!an[e]){let s=t[e];s!==void 0&&(t.__data?t._setPendingProperty(e,s):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=s))}}const Ua=ge(t=>{const e=on(t);class s extends e{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(sn(n[r]))}static attributeNameForProperty(n){return $t(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Ha(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){Ba(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ya={"dom-if":!0,"dom-repeat":!0};let si=!1,ii=!1;function Xa(){if(!si){si=!0;const t=document.createElement("textarea");t.placeholder="a",ii=t.placeholder===t.textContent}return ii}function Ka(t){Xa()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Za=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,s,i)=>{const n=s.getAttribute(i);if(t&&i.startsWith("on-")){e.setAttribute(i,t.createScript(n,i));return}e.setAttribute(i,n)}})();function Ja(t){let e=t.getAttribute("is");if(e&&Ya[e]){let s=t;for(s.removeAttribute("is"),t=s.ownerDocument.createElement(e),s.parentNode.replaceChild(t,s),t.appendChild(s);s.attributes.length;){const{name:i}=s.attributes[0];Za(t,s,i),s.removeAttribute(i)}}return t}function ln(t,e){let s=e.parentInfo&&ln(t,e.parentInfo);if(s){for(let i=s.firstChild,n=0;i;i=i.nextSibling)if(e.parentIndex===n++)return i}else return t}function Wa(t,e,s,i){i.id&&(e[i.id]=s)}function Ga(t,e,s){if(s.events&&s.events.length)for(let i=0,n=s.events,r;i<n.length&&(r=n[i]);i++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function qa(t,e,s,i){s.templateInfo&&(e._templateInfo=s.templateInfo,e._parentTemplateInfo=i)}function Qa(t,e,s){return t=t._methodHost||t,function(n){t[s]?t[s](n,n.detail):console.warn("listener method `"+s+"` not defined")}}const el=ge(t=>{class e extends t{static _parseTemplate(i,n){if(!i._templateInfo){let r=i._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,r,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,n,r){return this._parseTemplateNode(i.content,n,r)}static _parseTemplateNode(i,n,r){let o=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),Ka(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(i,n,r){if(!(i.localName==="script"||i.localName==="style"))for(let o=i.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Ja(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,i.removeChild(u),u=l;if(n.stripWhiteSpace&&!o.textContent.trim()){i.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(i,n,r){let o=i,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,n,r){let o=!1,a=Array.from(i.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(i,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(i,n,r,o,a){return o.slice(0,3)==="on-"?(i.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(i){let n=i._templateInfo;return n&&n.content||i.content}_stampTemplate(i,n){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),n=n||this.constructor._parseTemplate(i);let r=n.nodeInfoList,o=n.content||i.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=ln(a,d);Wa(this,a.$,h,d),qa(this,h,d,n),Ga(this,h,d)}return a=a,a}_addMethodEventListenerToNode(i,n,r,o){o=o||i;let a=Qa(o,n,r);return this._addEventListenerToNode(i,n,a),a}_addEventListenerToNode(i,n,r){i.addEventListener(n,r)}_removeEventListenerFromNode(i,n,r){i.removeEventListener(n,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ue=0;const Ye=[],$={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},cn="__computeInfo",tl=/[A-Z]/;function Bt(t,e,s){let i=t[e];if(!i)i=t[e]={};else if(!t.hasOwnProperty(e)&&(i=t[e]=Object.create(t[e]),s))for(let n in i){let r=i[n],o=i[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return i}function Ae(t,e,s,i,n,r){if(e){let o=!1;const a=Ue++;for(let l in s){let c=n?me(l):l,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==a)&&(!n||_s(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,s,i,p.info,n,r),o=!0)}return o}return!1}function sl(t,e,s,i,n,r,o,a){let l=!1,c=o?me(i):i,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==s)&&(!o||_s(i,p.trigger))&&(p.info&&(p.info.lastRun=s),p.fn(t,i,n,r,p.info,o,a),l=!0);return l}function _s(t,e){if(e){let s=e.name;return s==t||!!(e.structured&&ka(s,t))||!!(e.wildcard&&ft(s,t))}else return!0}function ni(t,e,s,i,n){let r=typeof n.method=="string"?t[n.method]:n.method,o=n.property;r?r.call(t,t.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function il(t,e,s,i,n){let r=t[$.NOTIFY],o,a=Ue++;for(let c in e)e[c]&&(r&&sl(t,r,a,c,s,i,n)||n&&nl(t,c,s))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function nl(t,e,s){let i=me(e);if(i!==e){let n=$t(i)+"-changed";return un(t,n,s[e],e),!0}return!1}function un(t,e,s,i){let n={value:s,queueProperty:!0};i&&(n.path=i),pe(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function rl(t,e,s,i,n,r){let a=(r?me(e):e)!=e?e:null,l=a?B(t,a):t.__data[e];a&&l===void 0&&(l=s[e]),un(t,n.eventName,l,a)}function ol(t,e,s,i,n){let r,o=t.detail,a=o&&o.path;a?(i=gt(s,i,a),r=o&&o.value):r=t.currentTarget[s],r=n?!r:r,(!e[$.READ_ONLY]||!e[$.READ_ONLY][i])&&e._setPendingPropertyOrPath(i,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function al(t,e,s,i,n){let r=t.__data[e];pt&&(r=pt(r,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,r)}function ll(t,e,s,i){let n=t[$.COMPUTE];if(n)if(Pa){Ue++;const r=ul(t),o=[];for(let l in e)ri(l,n,o,r,i);let a;for(;a=o.shift();)dn(t,"",e,s,a)&&ri(a.methodInfo,n,o,r,i);Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Ae(t,n,r,s,i);)Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const cl=(t,e,s)=>{let i=0,n=e.length-1,r=-1;for(;i<=n;){const o=i+n>>1,a=s.get(e[o].methodInfo)-s.get(t.methodInfo);if(a<0)i=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),e.splice(r,0,t)},ri=(t,e,s,i,n)=>{const r=n?me(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ue&&(!n||_s(t,l.trigger))&&(l.info.lastRun=Ue,cl(l.info,s,i))}};function ul(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const s=t[$.COMPUTE];let{counts:i,ready:n,total:r}=dl(t),o;for(;o=n.shift();){e.set(o,e.size);const a=s[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--i[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function dl(t){const e=t[cn],s={},i=t[$.COMPUTE],n=[];let r=0;for(let o in e){const a=e[o];r+=s[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in i)e[o]||n.push(o);return{counts:s,ready:n,total:r}}function dn(t,e,s,i,n){let r=ts(t,e,s,i,n);if(r===Ye)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function hl(t,e,s){let i=t.__dataLinkedPaths;if(i){let n;for(let r in i){let o=i[r];ft(r,e)?(n=gt(r,o,e),t._setPendingPropertyOrPath(n,s,!0,!0)):ft(o,e)&&(n=gt(o,r,e),t._setPendingPropertyOrPath(n,s,!0,!0))}}}function Ut(t,e,s,i,n,r,o){s.bindings=s.bindings||[];let a={kind:i,target:n,parts:r,literal:o,isCompound:r.length!==1};if(s.bindings.push(a),_l(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||$t(n)+"-changed",a.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,pl(t,e,a,u,l)}}function pl(t,e,s,i,n){if(!i.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,o={index:n,binding:s,part:i,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=pn(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:fl,info:o,trigger:l})}}}function fl(t,e,s,i,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=s[e];e=gt(c.source,l.target,e),a._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(a)}else{let u=n.evaluator._evaluateBinding(t,c,e,s,i,r);u!==Ye&&gl(t,a,l,c,u)}}function gl(t,e,s,i,n){if(n=ml(e,n,s,i),pt&&(n=pt(n,s.target,s.kind,e)),s.kind=="attribute")t._valueToNodeAttribute(e,n,s.target);else{let r=s.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[$.READ_ONLY]||!e[$.READ_ONLY][r])&&e._setPendingProperty(r,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,n)}}function ml(t,e,s,i){if(s.isCompound){let n=t.__dataCompoundStorage[s.target];n[i.compoundIndex]=e,e=n.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function _l(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function yl(t,e){let{nodeList:s,nodeInfoList:i}=e;if(i.length)for(let n=0;n<i.length;n++){let r=i[n],o=s[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];bl(o,c),vl(o,t,c)}o.__dataHost=t}}function bl(t,e){if(e.isCompound){let s=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,n=new Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o].literal;let r=e.target;s[r]=n,e.literal&&e.kind=="property"&&(r==="className"&&(t=pe(t)),t[r]=e.literal)}}function vl(t,e,s){if(s.listenerEvent){let i=s.parts[0];t.addEventListener(s.listenerEvent,function(n){ol(n,e,s.target,i.source,i.negate)})}}function oi(t,e,s,i,n,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,s,{fn:i,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,s,{fn:i,info:o}),o}function ts(t,e,s,i,n){let r=t._methodHost||t,o=r[n.methodName];if(o){let a=t._marshalArgs(n.args,e,s);return a===Ye?Ye:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const wl=[],hn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",xl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Sl="(?:'(?:[^'\\\\]|\\\\.)*')",Pl='(?:"(?:[^"\\\\]|\\\\.)*")',Cl="(?:"+Sl+"|"+Pl+")",ai="(?:("+hn+"|"+xl+"|"+Cl+")\\s*)",El="(?:"+ai+"(?:,\\s*"+ai+")*)",Ol="(?:\\(\\s*(?:"+El+"?)\\)\\s*)",$l="("+hn+"\\s*"+Ol+"?)",zl="(\\[\\[|{{)\\s*",Tl="(?:]]|}})",Ll="(?:(!)\\s*)?",Al=zl+Ll+$l+Tl,li=new RegExp(Al,"g");function ci(t){let e="";for(let s=0;s<t.length;s++){let i=t[s].literal;e+=i||""}return e}function Yt(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let i={methodName:e[1],static:!0,args:wl};if(e[2].trim()){let n=e[2].replace(/\\,/g,"&comma;").split(",");return Rl(n,i)}else return i}return null}function Rl(t,e){return e.args=t.map(function(s){let i=pn(s);return i.literal||(e.static=!1),i},this),e}function pn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:e,value:"",literal:!1},i=e[0];switch(i==="-"&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':s.value=e.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(e),s.literal=!0;break}return s.literal||(s.rootProperty=me(e),s.structured=Qt(e),s.structured&&(s.wildcard=e.slice(-2)==".*",s.wildcard&&(s.name=e.slice(0,-2)))),s}function ui(t,e,s){let i=B(t,s);return i===void 0&&(i=e[s]),i}function fn(t,e,s,i){const n={indexSplices:i};qt&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(s+".splices",n),t.notifyPath(s+".length",e.length),qt&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function ze(t,e,s,i,n,r){fn(t,e,s,[{index:i,addedCount:n,removed:r,object:e,type:"splice"}])}function kl(t){return t[0].toUpperCase()+t.substring(1)}const Nl=ge(t=>{const e=el(Ua(t));class s extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Te.length){let n=Te[Te.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[$.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==$.READ_ONLY);let a=Bt(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=Bt(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,$.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,$.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,$.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,$.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||me(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=B(this,n);if(n=ti(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return hl(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=pe(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&Qt(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[$.NOTIFY]&&this[$.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[$.READ_ONLY]||!this[$.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ll(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Ae(this,this[$.REFLECT],r,o,a),Ae(this,this[$.OBSERVE],r,o,a),l&&il(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[$.PROPAGATE]&&Ae(this,this[$.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,u)=>{Ae(this,n.propertyEffects,c,o,u,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=Le(n),r=Le(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=Le(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=B(this,n,o);fn(this,a,o.path,r)}get(n,r){return B(r||this,n)}set(n,r,o){o?ti(o,n,r):(!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=B(this,n,o),l=a.length,c=a.push(...r);return r.length&&ze(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=B(this,n,r),a=!!o.length,l=o.pop();return a&&ze(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=B(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&ze(this,c,l.path,r,a.length,u),u}shift(n){let r={path:""},o=B(this,n,r),a=!!o.length,l=o.shift();return a&&ze(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=B(this,n,o),l=a.unshift(...r);return r.length&&ze(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=B(this,n,a),o=a.path}else Array.isArray(n)?o=Le(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,$.READ_ONLY),r&&(this["_set"+kl(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,$.OBSERVE,{fn:ni,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,$.OBSERVE,{fn:ni,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=Yt(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");oi(this,o,$.OBSERVE,ts,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,$.NOTIFY,{fn:rl,info:{eventName:$t(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,$.REFLECT,{fn:al,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=Yt(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=oi(this,a,$.COMPUTE,dn,n,o);Bt(this,cn)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,u=n.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:f,literal:g}=n[c];if(!g)if(p){const m=ft(d,r),_=ui(a,o,m?r:d);f={path:m?r:d,value:_,base:m?B(a,d):_}}else f=h?ui(a,o,d):a[d];if(qt&&!this._overrideLegacyUndefined&&f===void 0&&n.length>1)return Ye;l[c]=f}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),Te.push(this);let o=super._stampTemplate(n,r);if(Te.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,yl(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];pe(pe(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,r,o){let a=e._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=ci(l)||" ",Ut(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";tl.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=ci(c);return h&&d=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(h+=" "+n.getAttribute(a)),n.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&u==="value"&&n.setAttribute(u,""),n.removeAttribute(u),d==="property"&&(a=sn(a)),Ut(this,r,o,d,a,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=e._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";Ws&&(u||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Ca&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),Ws||(o.parentInfo.noted=!0));else{let p="{";for(let f in h){let g=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Ut(this,r,o,"property","_host_"+f,g)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=li.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),h=!0);let g=Yt(d),m=[];if(g){let{args:_,methodName:y}=g;for(let w=0;w<_.length;w++){let E=_[w];E.literal||m.push(E)}let v=r.dynamicFns;(v&&v[y]||g.static)&&(m.push(y),g.dynamicFn=!0)}else m.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:m,event:p}),a=li.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let u;return r.signature?u=ts(n,o,a,l,r.signature):o!=r.source?u=B(n,r.source):c&&Qt(o)?u=B(n,o):u=n.__data[o],r.negate&&(u=!u),u}}return s}),Te=[];/**
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
*/function Il(t){const e={};for(let s in t){const i=t[s];e[s]=typeof i=="function"?{type:i}:i}return e}const Ml=ge(t=>{const e=on(t);function s(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function i(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Il(a))}r.__ownProperties=o}return r.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=s(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=i(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=s(this);this.__properties=Object.assign({},o&&o._properties,i(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Dl="3.5.1",di=window.ShadyCSS&&window.ShadyCSS.cssBuild,Fl=ge(t=>{const e=Ml(Nl(t));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!di){const h=c.content.querySelectorAll("style"),p=Qi(c),f=Ra(u),g=c.content.firstElementChild;for(let _=0;_<f.length;_++){let y=f[_];y.textContent=l._processStyleText(y.textContent,d),c.content.insertBefore(y,g)}let m=0;for(let _=0;_<p.length;_++){let y=p[_],v=h[m];v!==y?(y=y.cloneNode(!0),v.parentNode.insertBefore(y,v)):m++,y.textContent=l._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Ea&&di&&ya){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!Gt||va)&&(c=Be.import(l,"template"),Gt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return Dl}static _finalizeClass(){e._finalizeClass.call(this);const c=i(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):wa||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)n(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=gs(c.url);else{const u=Be.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ba,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return fs(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?De(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=pe(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Sa&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=De(this.importPath)),De(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return xa&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return a});/**
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
*/const jl=Fl(HTMLElement),nt=[],zt=()=>{L.isInitialized||L.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},Tt=t=>t.reduce((e,s,i)=>(e.count===void 0&&typeof s=="number"&&(e.count=s),typeof s=="object"?{...e,...s}:(e[i]=s,e)),{}),J=function(t){zt();const e=Tt([...arguments].slice(1));return delete e.count,L.t(t,e)},Vl=function(t,e){zt();const s=Tt([...arguments].slice(2)),i=s.count;let n;delete s.count;const r=L.services.pluralResolver.getSuffix(L.language,i);return r?(s.defaultValue=e,n=t+r):(n=t,s.defaultValue=t),L.t(n,s)},Hl=function(t,e){zt();const s=Tt([...arguments].slice(2));return s.context=t,delete s.count,L.t(e,s)},Bl=function(t,e,s){zt();const i=Tt([...arguments].slice(3)),n=i.count,r=t?"_"+t:"";let o=e;delete i.count;const a=L.services.pluralResolver.getSuffix(L.language,n);return a?(i.defaultValue=s,o=e+r+a):(o=e,i.context=t),L.t(o,i)},Ul=(t,e,s)=>{L.init({resources:{}}),L.addResourceBundle(t,e,s)};ge(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(s=>s!==this.t)}_(){return J.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),nt.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=nt.indexOf(this);e>=0&&nt.splice(e,1)}gettext(){return J.apply(null,this._filterT([...arguments]))}ngettext(){return Vl.apply(null,this._filterT([...arguments]))}pgettext(){return Hl.apply(null,this._filterT([...arguments]))}npgettext(){return Bl.apply(null,this._filterT([...arguments]))}});class Yl extends jl{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(Ul(this.language,this.namespace,e),nt.forEach(s=>s.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),L.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Yl);const hi=()=>document.createComment(""),Xl=yt(W,new DocumentFragment).constructor;class Kl extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Kl);class Zl extends bt{_op;_outlet;_content;render(e,s=document.body){return b`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[s,i=document.body]){return this.updateOutlet(i,s),this.render(s,i)}updateOutlet(e,s){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const i=this._op??=new Xl(e.appendChild(hi()),e.appendChild(hi()));oe(i,this._content=s)}clearOutlet(){const e=this._op;e&&(vn(e),tt(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Jl=ne(Zl),Wl=`:host {
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
`,Gl=Symbol("memo"),gn=t=>{let e=Gl,s;return function(i){if(e===i)return s;const n=t(i);return s=n,e=i,n}},ql=(t,e)=>{const s=t.width/t.height,i=e.width/e.height;return s>i?{width:e.width,height:t.height*(e.width/t.width)}:{width:t.width*(e.height/t.height),height:e.height}},Ql=async(t,e)=>{const s={credentials:"include"},[{jsPDF:i},...n]=await Promise.all([is(()=>import("./jspdf.es-C8lXQ5JU.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...t.map(async a=>{const l=await Promise.resolve(as(a)),c=await fetch(l,s);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),r=n.filter(Boolean);if(r.length<1)return;const o=new i;return r.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:d}}=o,{width:h,height:p}=ql(o.getImageProperties(l),{width:d.getWidth()-4,height:d.getHeight()-4});c>0&&o.addPage(),o.addImage(l,a.split(".").pop().toUpperCase(),2,2,h,p)}),o.output("blob")},mn=(t,e)=>{const s=URL.createObjectURL(t),i=document.body.appendChild(document.createElement("a"));i.href=s,i.download=`${e}.pdf`,i.click(),document.body.removeChild(i),URL.revokeObjectURL(s)},ec=async(t,e,s)=>{const i=await Ql(t);if(i)return mn(i,e),i},tc=async(t,e,s={})=>{const{httpHeaders:i,withCredentials:n=!0}=s,r=await fetch(t,{credentials:n?"include":"omit",headers:i});if(!r.ok)return;const o=await r.blob();return mn(o,e),o},sc=t=>Object.entries(t).map(([e,s])=>e+"="+s).join(",");let ss=!1;const ic=({source:t,attachmentIndex:e,index:s,syncImageIndex:i,syncAttachmentIndex:n,title:r,loop:o,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",sc({height:700,width:800}));yt(b`<style>
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
			></cosmoz-image-viewer>`,u.document.body),u._onClose?.(),l(),ss=!0,u._onClose=c,u.addEventListener("beforeunload",c),u.addEventListener("beforeunload",()=>ss=!1),u.document.title=r??J("Cosmoz image viewer")},nc=t=>new Promise(e=>{const s=setInterval(()=>{t()&&(e(),clearInterval(s))},100)}),rc=({images:t})=>{const e=window.open(void 0,"czimgviewerprint");yt(b`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${t.map(s=>b`<img src="${Ve(Promise.resolve(as(s)))}" />`)}`,e.document.body),nc(()=>Array.from(e.document.querySelectorAll("img")).every(s=>s.src&&s.complete)).then(()=>e.print()).then(()=>e.close())},pi=[],oc=t=>{const e=D(()=>typeof t=="function"?Promise.resolve(t()):void 0,[t]),[s,i,n]=Mi(e);return typeof t!="function"?{attachments:t??pi,loading:!1,error:void 0}:{attachments:s??pi,loading:n==="pending",error:i}},ac=50,lc=300,cc=(t,{onSwipeLeft:e,onSwipeRight:s,enabled:i})=>{const n=ee(null);z(()=>{if(!i)return;const r=a=>{if(a.touches.length!==1)return;const l=a.touches[0];n.current={x:l.clientX,y:l.clientY,t:Date.now()}},o=a=>{if(!n.current)return;const l=a.changedTouches[0],c=l.clientX-n.current.x,u=l.clientY-n.current.y,d=Date.now()-n.current.t;n.current=null,!(d>lc)&&(Math.abs(c)<ac||Math.abs(c)<Math.abs(u)||(c<0?e?.():s?.()))};return t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),()=>{t.removeEventListener("touchstart",r),t.removeEventListener("touchend",o)}},[t,e,s,i])},_n=t=>{if(!t.currentTarget.parentElement)return;t.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),t.currentTarget.setAttribute("hidden",!0)},uc=t=>t.detail.value==="error"&&_n(t),dc=({src$:t,showZoom:e,isZoomed:s,_onZoomChanged:i})=>{const n=we(t,()=>Ve(t));return[e?b`<haunted-pan-zoom
						.src=${n}
						?disabled=${!s}
						@zoom-changed=${i}
						@status-changed=${uc}
					></haunted-pan-zoom>`:b`<img
						.src=${n}
						style="width:100%"
						@error=${_n}
					/>`,we(t,()=>Ve(t.then(()=>W),b`<cz-spinner></cz-spinner>`))]},hc=t=>b`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${t.image}</div>
			</div>
			${dc(t)}
		</div>`,_t=[],Xt=(t,e,s)=>Math.max(e,Math.min(s,t)),pc=(t,e,s)=>{const[i,n]=Q(_t),r=D(()=>gn(o=>is(async()=>{const{loadPdfThunks:a}=await import("./pdf-loader-BSiQZefA.js");return{loadPdfThunks:a}},__vite__mapDeps([2,1]),import.meta.url).then(({loadPdfThunks:a})=>a(o,e))),[e]);return z(()=>{if(!t){n(_t);return}let o=!1;return r(t).then(a=>{o||n(a)}),()=>{o=!0}},[t,r]),t?i:s},fi=(t,e,s,i)=>{const n=t.length;for(let r=1;r<=n;r++){const o=(e+r*s+n)%n;if(!i&&s>0&&o<=e||!i&&s<0&&o>=e)return;const a=t[o];if((a.images?.length??0)>0||a.pdf)return o}},fc=t=>{const{showZoom:e,title:s,loop:i,detachedShowZoom:n}=t,{attachments:r,loading:o,error:a}=oc(t.source),[l,c]=Fe("currentAttachmentIndex",0),u=r.length>0?Xt(l??0,0,r.length-1):0,d=r[u],h=d?[d]:_t,p=ee(qe),f=C(A=>{const Ke=A.detail?.[0],Ze=r.indexOf(Ke);Ze>=0&&(p.current=qe,c(Ze))},[r]),g=d?.pdf,m=d?.pdfOptions,_=d?.downloadFileName??"archive",y=d?.images??_t,v=pc(g,m,y),[w,E]=Q(!1),T=A=>E(A.detail.value>1),O=D(()=>gn(A=>Promise.resolve(as(A))),[]),[k,M]=Fe("currentImageIndex",0),R=v.length>0?Xt(k??0,0,v.length-1):0,H=v[R],_e=D(()=>H==null?{id:Math.random(),content:W,animation:qe}:{id:H,render:()=>hc({src$:O(H),showZoom:e,isZoomed:w,_onZoomChanged:T,image:H}),animation:p.current},[H,e,w,T]),x=ee(!1),F=!i&&u===0&&R<=0,I=!i&&u===r.length-1&&R>=v.length-1,j=C(()=>{if(p.current=qe,R<v.length-1)return M(R+1);const A=fi(r,u,1,i);A!=null&&(c(A),M(0))},[R,v.length,r,u,i]),ie=C(()=>{if(p.current=Uo,R>0)return M(R-1);const A=fi(r,u,-1,i);A!=null&&(x.current=!0,c(A))},[R,r,u,i]);cc(t,{onSwipeLeft:j,onSwipeRight:ie,enabled:!w});const[P,V]=Q(!1),[Z,ce]=Q(!1),Lt=()=>ce(!0),At=()=>ce(!1),Rt=A=>V(A.detail.value),kt=A=>M(A.detail.value),Nt=A=>c(A.detail.value),Ee=C(()=>ic({source:r,attachmentIndex:u,index:R,syncImageIndex:kt,syncAttachmentIndex:Nt,title:s,loop:i,detachedShowZoom:n,onDetach:()=>V(!0),onClose:()=>V(!1)}),[r,u,R,s,i]),ue=C(()=>{ss&&Ee()},[Ee]);return z(()=>{if(v.length===0)return;if(x.current){x.current=!1,M(v.length-1);return}const A=k??0;A>=v.length&&M(Xt(A,0,v.length-1))},[v]),z(()=>{const A=l??0;r.length>0&&A>=r.length&&c(0)},[r]),Kn("detached",P,[P]),z(()=>{t.toggleAttribute("hidden",P)},[P]),os({syncState:ue},[ue]),{host:t,isZoomed:w,currentSlide:_e,nextImage:j,previousImage:ie,first:F,last:I,total:v.length,currentImageIndex:R,selectedImageNumber:R+1,onDownloadPdf:g?()=>tc(g,_,m):()=>ec(v,_),isFullscreen:Z,openFullscreen:Lt,closeFullscreen:At,onPrintPdf:()=>rc({images:v}),detached:P,detach:Ee,syncDetachedState:Rt,setAttachmentIndex:c,setImageIndex:M,loading:o,error:a,attachments:r,selected:d,selectedIndex:u,value:h,onSelect:f,images:v}},gc=b`<svg
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
</svg>`,mc=b`<svg
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
</svg>`,_c=b`<svg
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
</svg>`,yc=b`<svg
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
</svg>`,bc=b`<svg
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
</svg>`,vc=b`<svg
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
</svg>`,wc=b`<svg
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
</svg>`,xc=b`<svg
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
</svg>`,Sc=b`<svg
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
</svg>`,Pc=t=>t?vc:wc,re=(t,e,s=1)=>t?e>=s:!1,Cc=t=>{const e=t.target.getRootNode().querySelector("haunted-pan-zoom");if(e.zoom>1)return e.zoomTo(1);e.zoomTo(1.5)},Ec=({host:t,isZoomed:e,currentSlide:s,nextImage:i,previousImage:n,total:r,first:o,last:a,currentImageIndex:l,selectedImageNumber:c,onDownloadPdf:u,isFullscreen:d,openFullscreen:h,closeFullscreen:p,onPrintPdf:f,detach:g,detached:m,syncDetachedState:_,setAttachmentIndex:y,setImageIndex:v,loading:w,error:E,attachments:T,selectedIndex:O,value:k,onSelect:M})=>b`
		<style>
			${Wl}
		</style>

		${m?W:b`
					${N(w,()=>b`<div class="loading">
								<cz-spinner></cz-spinner>
							</div>`)}
					${N(E,()=>b`<div class="error">
								<h2>${J("Failed to load attachments.")}</h2>
								<div class="desc">
									${E?.message??E}
								</div>
							</div>`)}
					${N(!w&&!E,()=>b`
							${N(re(t.showPageNumber,r),()=>b` <div class="counter">
										${c}/${r}
									</div>`)}

							<div class="actions">
								${N(re(t.showNav,r,2)||T.length>1,()=>b`
										<button
											class="nav"
											name="prev"
											?disabled=${o}
											@click=${n}
										>
											${bc}
										</button>
										<button
											class="nav"
											name="next"
											?disabled=${a}
											@click=${i}
										>
											${Sc}
										</button>
									`)}
								${N(T.length>1,()=>b`<cosmoz-autocomplete
											text-property="title"
											limit="1"
											.min=${1}
											show-single
											preserve-order
											.source=${T}
											.value=${k}
											@value=${M}
										></cosmoz-autocomplete>`)}
								<span style="flex:auto"></span>
								${N(re(t.showZoom,r),()=>b`<button
											class="nav"
											@click="${Cc}"
											title="${J("Zoom image")}"
										>
											${Pc(e)}
										</button>`)}
								${N(re(t.showDetach,r),()=>b`<button
											class="nav"
											@click=${g}
											title="${J("Detach image to separate window")}"
										>
											${yc}
										</button>`)}
								${N(re(!0,r),()=>b`<button
											class="nav"
											@click=${u}
											title="${J("Download images")}"
										>
											${mc}
										</button>`)}
								${N(re(!0,r),()=>b`<button
											class="nav"
											@click=${f}
											title="${J("Print images")}"
										>
											${xc}
										</button>`)}
								${N(re(t.showFullscreen,r),()=>b`<button
											class="nav"
											@click="${h}"
											title="${J("Fullscreen image")}"
										>
											${_c}
										</button>`)}
								${N(re(t.showClose,r),()=>b` <button
											class="nav"
											@click="${()=>t.dispatchEvent(new CustomEvent("close"))}"
											title="${J("Close fullscreen")}"
										>
											${gc}
										</button>`)}
							</div>

							${N(r===0,()=>b`<p>
										${J("No image loaded.")}
									</p>`)}
							<cosmoz-slider
								id="slider"
								.slide="${s}"
							></cosmoz-slider>
						`)}
				`}

		${N(d,()=>Jl(b`<cosmoz-image-viewer
					fullscreen
					.source=${T}
					.currentAttachmentIndex=${O}
					.currentImageIndex=${l}
					@current-attachment-index-changed=${Ss(y)}
					@current-image-index-changed=${Ss(v)}
					@detached-changed=${_}
					show-nav
					show-zoom
					show-close
					@close=${p}
					?show-detach=${t.showDetach}
					?loop=${t.loop}
				></cosmoz-image-viewer>`))}
	`,Oc=t=>Ec(fc(t));customElements.define("cosmoz-image-viewer",X(Oc,{observedAttributes:["show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"]}));
