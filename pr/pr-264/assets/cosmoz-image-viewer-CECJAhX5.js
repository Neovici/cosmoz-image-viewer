const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-C8lXQ5JU.js","./preload-helper-PPVm8Dsz.js","./pdf-loader-BSiQZefA.js"])))=>i.map(i=>d[i]);
import{r as fs,D as _t,A as J,b as v,E as H,p as gs,n as _n,M as yn,u as oe,v as Ce,h as et,j as bn}from"./iframe-CMeK9S_P.js";import{_ as ii}from"./preload-helper-PPVm8Dsz.js";let nt,ms=0;function yi(t){nt=t}function bi(){nt=null,ms=0}function vn(){return ms++}const Rt=Symbol("haunted.phase"),tt=Symbol("haunted.hook"),vi=Symbol("haunted.update"),wi=Symbol("haunted.commit"),le=Symbol("haunted.effects"),Ae=Symbol("haunted.layoutEffects"),Ut="haunted.context";class wn{update;host;virtual;[tt];[le];[Ae];constructor(e,i){this.update=e,this.host=i,this[tt]=new Map,this[le]=[],this[Ae]=[]}run(e){yi(this);let i=e();return bi(),i}_runEffects(e){let i=this[e];yi(this);for(let s of i)s.call(this);bi()}runEffects(){this._runEffects(le)}runLayoutEffects(){this._runEffects(Ae)}teardown(){this[tt].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const xn=Promise.resolve().then.bind(Promise.resolve());function _s(){let t=[],e;function i(){e=null;let s=t;t=[];for(var n=0,r=s.length;n<r;n++)s[n]()}return function(s){t.push(s),e==null&&(e=xn(i))}}const Sn=_s(),xi=_s();class Pn{renderer;host;state;[Rt];_updateQueued;_active;constructor(e,i){this.renderer=e,this.host=i,this.state=new wn(this.update.bind(this),i),this[Rt]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(Sn(()=>{let e=this.handlePhase(vi);xi(()=>{this.handlePhase(wi,e),xi(()=>{this.handlePhase(le)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,i){switch(this[Rt]=e,e){case wi:this.commit(i),this.runEffects(Ae);return;case vi:return this.render();case le:return this.runEffects(le)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const si=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Cn=t=>t?.map(e=>typeof e=="string"?si(e):e),En=(t,...e)=>t.flatMap((i,s)=>[i,e[s]||""]).join(""),de=En,On=(t="")=>t.replace(/-+([a-z])?/g,(e,i)=>i?i.toUpperCase():"");function $n(t){class e extends Pn{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=t(n,this.frag)}}function i(s,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||n||{},d=Cn(s.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(s,this);else{const f=this.attachShadow({mode:"open",...c});d&&(f.adoptedStyleSheets=d),this._scheduler=new e(s,f,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(f,y,b){if(y===b)return;let S=b===""?!0:b;Reflect.set(this,On(f),S)}}function p(m){let f=m,y=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(b){y&&f===b||(y=!0,f=b,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,f,y,b){let S;return f in m?(S=Object.getOwnPropertyDescriptor(m,f),S&&S.set?(S.set.call(b,y),!0):(Reflect.set(m,f,y,b),!0)):(typeof f=="symbol"||f[0]==="_"?S={enumerable:!0,configurable:!0,writable:!0,value:y}:S=p(y),Object.defineProperty(b,f,S),S.set&&S.set.call(b,y),!0)}});return Object.setPrototypeOf(h.prototype,g),h}return i}class ee{id;state;constructor(e,i){this.id=e,this.state=i}}function zn(t,...e){let i=vn(),s=nt[tt],n=s.get(i);return n||(n=new t(i,nt,...e),s.set(i,n)),n.update(...e)}function te(t){return zn.bind(null,t)}function ys(t){return te(class extends ee{callback;lastValues;values;_teardown;constructor(e,i,s,n){super(e,i),t(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function bs(t,e){t[le].push(e)}const T=ys(bs),Tn=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,vs=te(class extends ee{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,bs(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Tn(this.state.host).dispatchEvent(new CustomEvent(Ut,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:n}=e;this.value=s?n:t.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ln(t){return e=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Ut,this)}disconnectedCallback(){this.removeEventListener(Ut,this)}handleEvent(s){const{detail:n}=s;n.Context===i&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let n of this.listeners)n(s)}get value(){return this._value}},Consumer:t(function({render:s}){const n=vs(i);return s(n)},{useShadowDOM:!1}),defaultValue:e};return i}}const I=te(class extends ee{value;values;constructor(t,e,i,s){super(t,e),this.value=i(),this.values=s}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),P=(t,e)=>I(()=>t,e);function An(t,e){t[Ae].push(e)}const rt=ys(An),Q=te(class extends ee{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),ws=te(class extends ee{reducer;currentState;constructor(t,e,i,s,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(s):s}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),Rn=/([A-Z])/gu,De=te(class extends ee{property;eventName;constructor(t,e,i,s){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(Rn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),Si=t=>e=>{e.preventDefault(),t(e.detail.value)};function kn(t){let e=t;return{get current(){return e},set current(i){e=i},get value(){return e},set value(i){e=i}}}function ie(t){return I(()=>kn(t),[])}te(class extends ee{update(){return this.state.host}});function Nn({render:t}){const e=$n(t),i=Ln(e);return{component:e,createContext:i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},se=t=>(...e)=>({_$litDirective$:t,values:e});let xe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),Re(s,e);return!0},ot=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},xs=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Dn(e)}};function In(t){this._$AN!==void 0?(ot(this),this._$AM=t,xs(this)):this._$AM=t}function Mn(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)Re(s[r],!1),ot(s[r]);else s!=null&&(Re(s,!1),ot(s));else Re(this,t)}const Dn=t=>{t.type==Z.CHILD&&(t._$AP??=Mn,t._$AQ??=In)};class yt extends xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),xs(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(Re(this,e),ot(this))}setValue(e){if(fs(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:U,createContext:Fn}=Nn({render:_t}),bt=(t,...e)=>t.flatMap((i,s)=>[i,e[s]??""]).join(""),ni=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},kt=new WeakMap,Se=se(class extends yt{render(t){return J}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=kt.get(e);i===void 0&&(i=new WeakMap,kt.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?kt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),jn=({host:t,popoverRef:e,disabled:i,openOnHover:s,openOnFocus:n,open:r,close:o})=>{const a=ie(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;s&&(t.matches(":hover")||d?.matches(":hover"))||t.matches(":focus-within")||d?.matches(":focus-within")||o()},100)},u=()=>{i||(l(),r())};return T(()=>{if(!(!s||i))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[s,i,t]),T(()=>{if(!(!n||i))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[n,i,t]),{scheduleClose:c,cancelClose:l}},Vn=t=>{if(t.newState!=="open")return;const s=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Bn=de`
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
`,Hn=t=>{const{placement:e="bottom span-right",disabled:i,openOnHover:s,openOnFocus:n}=t,r=ie(),[o,a]=De("opened",!1),l=P(()=>{i||(a(!0),r.current?.showPopover())},[i]),c=P(()=>{a(!1),r.current?.hidePopover()},[]),u=P(()=>{if(i)return;r.current?.matches(":popover-open")?c():l()},[i]);T(()=>{const m=r.current;m&&(o?m.showPopover():m.hidePopover())},[o]),T(()=>{t.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:d,cancelClose:h}=jn({host:t,popoverRef:r,disabled:i,openOnHover:s,openOnFocus:n,open:l,close:c}),p=n?l:u,g=P(m=>{Vn(m),a(m.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return v`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${g}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${Se(m=>m&&(r.current=m))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",U(Hn,{styleSheets:[Bn],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=t=>t??J;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=se(class extends xe{constructor(t){if(super(t),t.type!==Z.PROPERTY&&t.type!==Z.ATTRIBUTE&&t.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fs(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===J)return e;const i=t.element,s=t.name;if(t.type===Z.PROPERTY){if(e===i[s])return H}else if(t.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return H}else if(t.type===Z.ATTRIBUTE&&i.getAttribute(s)===e+"")return H;return gs(t),e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(t,e,i){return t?e(t):i?.(t)}const Ss=(t,{label:e,invalid:i,errorMessage:s})=>v`
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
		${k(i&&s,()=>v`<div class="error" part="error">${s}</div>`)}
	`,Ps=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Pi=bt`
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
`,Cs=bt`
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
		${Pi}
	}
	@container style(--focused: focused) {
		${Pi}
	}
`,Un=t=>I(()=>{if(t==null)return;const e=new RegExp(t,"u");return i=>{!i.defaultPrevented&&i.data&&!e.test(i.data)&&i.preventDefault()}},[t]),ri=te(class extends ee{values;constructor(t,e,i,s){super(t,e),Object.assign(e.host,i),this.values=s}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),Ye=te(class extends ee{update(){return this.state.host}}),Yn=/([A-Z])/gu,Yt=(t,e,i)=>{t[e]=i,t.dispatchEvent(new CustomEvent(e.replace(Yn,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},Xn=(t,e,i=[e])=>{const s=Ye();T(()=>{Yt(s,t,e)},i)},Es=t=>{const e=ie(void 0),i=P(l=>e.current=l,[]),s=t.shadowRoot,n=P(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=P(l=>Yt(t,"value",l.target.value),[]),o=P(l=>Yt(t,"focused",l.type==="focus"),[]),a=P(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return ri({validate:a},[a]),T(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return s.addEventListener("mousedown",l),()=>s.removeEventListener("mousedown",l)},[]),{onChange:n,onFocus:o,onInput:r,onRef:i}},Kn=({placeholder:t,noLabelFloat:e,label:i})=>(e?i:void 0)||t||" ",Jn=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ps],Wn=t=>{const{type:e="text",pattern:i,allowedPattern:s,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=t,{onChange:h,onFocus:p,onInput:g,onRef:m}=Es(t),f=Un(s);return Ss(v`
			<input
				${Se(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${Y(i)}
				autocomplete=${Y(n)}
				placeholder=${Kn(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${vt(r??"")}
				maxlength=${Y(d)}
				@beforeinput=${f}
				@input=${g}
				@change=${h}
				@focus=${p}
				@blur=${p}
				min=${Y(l)}
				max=${Y(c)}
				step=${Y(u)}
			/>
		`,t)};customElements.define("cosmoz-input",U(Wn,{observedAttributes:Jn,styleSheets:[si(Cs)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ci=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Gn=(t,e=0)=>{if(e>0){const i=t.getAttribute("rows")??"",s=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=s,t.setAttribute("rows",i)}},Zn=t=>{const{value:e,maxRows:i}=t,s=I(()=>()=>t.shadowRoot.querySelector("#input"),[]);T(()=>Gn(s(),i),[i,s]),T(()=>Ci(s()),[s,e]),T(()=>{const n=s(),r=new ResizeObserver(()=>requestAnimationFrame(()=>Ci(n)));return r.observe(n),()=>r.unobserve(n)},[s])},qn=["rows","placeholder",...Ps],Qn=t=>{const{autocomplete:e,value:i,placeholder:s,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:h}=Es(t);return Zn(t),Ss(v`
			<textarea id="input" part="input"
				${Se(h)}
				autocomplete=${Y(e)}
				placeholder=${s||" "}
				rows=${o??1} cols=${Y(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${vt(i??"")} maxlength=${Y(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",U(Qn,{observedAttributes:qn,styleSheets:[si(Cs)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const er=t=>{const{label:e,value:i,disabled:s,error:n}=t,r=P(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${vt(!!i)}
			?disabled=${s}
			@change=${r}
		/>
		${k(e,()=>v`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${k(n,o=>v`<div class="failure">${o}</div>`)} `},tr=de`
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
`,ir=de`
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
`;customElements.define("cosmoz-toggle",U(er,{styleSheets:[ir,tr],observedAttributes:["disabled"]}));const w=t=>typeof t=="string",Ee=()=>{let t,e;const i=new Promise((s,n)=>{t=s,e=n});return i.resolve=t,i.reject=e,i},Ei=t=>t==null?"":""+t,sr=(t,e,i)=>{t.forEach(s=>{e[s]&&(i[s]=e[s])})},nr=/###/g,Oi=t=>t&&t.indexOf("###")>-1?t.replace(nr,"."):t,$i=t=>!t||w(t),ke=(t,e,i)=>{const s=w(e)?e.split("."):e;let n=0;for(;n<s.length-1;){if($i(t))return{};const r=Oi(s[n]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++n}return $i(t)?{}:{obj:t,k:Oi(s[n])}},zi=(t,e,i)=>{const{obj:s,k:n}=ke(t,e,Object);if(s!==void 0||e.length===1){s[n]=i;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=ke(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=ke(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},rr=(t,e,i,s)=>{const{obj:n,k:r}=ke(t,e,Object);n[r]=n[r]||[],n[r].push(i)},at=(t,e)=>{const{obj:i,k:s}=ke(t,e);if(i)return i[s]},or=(t,e,i)=>{const s=at(t,i);return s!==void 0?s:at(e,i)},Os=(t,e,i)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in t?w(t[s])||t[s]instanceof String||w(e[s])||e[s]instanceof String?i&&(t[s]=e[s]):Os(t[s],e[s],i):t[s]=e[s]);return t},ye=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var ar={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const lr=t=>w(t)?t.replace(/[&<>"'\/]/g,e=>ar[e]):t;class cr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const ur=[" ",",","?","!",";"],dr=new cr(20),hr=(t,e,i)=>{e=e||"",i=i||"";const s=ur.filter(o=>e.indexOf(o)<0&&i.indexOf(o)<0);if(s.length===0)return!0;const n=dr.getRegExp(`(${s.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(t);if(!r){const o=t.indexOf(i);o>0&&!n.test(t.substring(0,o))&&(r=!0)}return r},Xt=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const s=e.split(i);let n=t;for(let r=0;r<s.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<s.length;++l)if(l!==r&&(a+=i),a+=s[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<s.length-1)continue;r+=l-r+1;break}n=o}return n},lt=t=>t&&t.replace("_","-"),pr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class ct{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||pr,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,s,n){return n&&!this.debug?null:(w(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new ct(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ct(this.logger,e)}}var q=new ct;class wt{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const n=this.observers[s].get(i)||0;this.observers[s].set(i,n+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...s])})}}class Ti extends wt{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,i],s&&(Array.isArray(s)?a.push(...s):w(s)&&r?a.push(...s.split(r)):a.push(s)));const l=at(this.data,a);return!l&&!i&&!s&&e.indexOf(".")>-1&&(e=a[0],i=a[1],s=a.slice(2).join(".")),l||!o||!w(s)?l:Xt(this.data&&this.data[e]&&this.data[e][i],s,r)}addResource(e,i,s,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,i];s&&(a=a.concat(o?s.split(o):s)),e.indexOf(".")>-1&&(a=e.split("."),n=i,i=a[1]),this.addNamespaces(i),zi(this.data,a,n),r.silent||this.emit("added",e,i,s,n)}addResources(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in s)(w(s[r])||Array.isArray(s[r]))&&this.addResource(e,i,r,s[r],{silent:!0});n.silent||this.emit("added",e,i,s)}addResourceBundle(e,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,i];e.indexOf(".")>-1&&(a=e.split("."),n=s,s=i,i=a[1]),this.addNamespaces(i);let l=at(this.data,a)||{};o.skipCopy||(s=JSON.parse(JSON.stringify(s))),n?Os(l,s,r):l={...l,...s},zi(this.data,a,l),o.silent||this.emit("added",e,i,s)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,i)}:this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(n=>i[n]&&Object.keys(i[n]).length>0)}toJSON(){return this.data}}var $s={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,s,n){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,i,s,n))}),e}};const Li={};class ut extends wt{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),sr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=q.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const s=this.resolve(e,i);return s&&s.res!==void 0}extractFromKey(e,i){let s=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const n=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=s&&e.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!hr(e,s,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:w(r)?[r]:r};const c=e.split(s);(s!==n||s===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:w(r)?[r]:r}}translate(e,i,s){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],i),l=a[a.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const x=i.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${x}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${x}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:o}const d=this.resolve(e,i);let h=d&&d.res;const p=d&&d.usedKey||o,g=d&&d.exactUsedKey||o,m=Object.prototype.toString.apply(h),f=["[object Number]","[object Function]","[object RegExp]"],y=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,S=!w(h)&&typeof h!="boolean"&&typeof h!="number";if(b&&h&&S&&f.indexOf(m)<0&&!(w(y)&&Array.isArray(h))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,h,{...i,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=x,d.usedParams=this.getUsedParamsDetails(i),d):x}if(r){const x=Array.isArray(h),E=x?[]:{},z=x?g:p;for(const _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){const C=`${z}${r}${_}`;E[_]=this.translate(C,{...i,joinArrays:!1,ns:a}),E[_]===C&&(E[_]=h[_])}h=E}}else if(b&&w(y)&&Array.isArray(h))h=h.join(y),h&&(h=this.extendTranslation(h,e,i,s));else{let x=!1,E=!1;const z=i.count!==void 0&&!w(i.count),_=ut.hasDefaultValue(i),C=z?this.pluralResolver.getSuffix(c,i.count,i):"",R=i.ordinal&&z?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",W=z&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),D=W&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${C}`]||i[`defaultValue${R}`]||i.defaultValue;!this.isValidLookup(h)&&_&&(x=!0,h=D),this.isValidLookup(h)||(E=!0,h=o);const G=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:h,V=_&&D!==h&&this.options.updateMissing;if(E||x||V){if(this.logger.log(V?"updateKey":"missingKey",c,l,o,V?D:h),r){const O=this.resolve(o,{...i,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const N=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&N&&N[0])for(let O=0;O<N.length;O++)M.push(N[O]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(i.lng||this.language):M.push(i.lng||this.language);const ne=(O,F,X)=>{const ge=_&&X!==h?X:G;this.options.missingKeyHandler?this.options.missingKeyHandler(O,l,F,ge,V,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(O,l,F,ge,V,i),this.emit("missingKey",O,l,F,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?M.forEach(O=>{const F=this.pluralResolver.getSuffixes(O,i);W&&i[`defaultValue${this.options.pluralSeparator}zero`]&&F.indexOf(`${this.options.pluralSeparator}zero`)<0&&F.push(`${this.options.pluralSeparator}zero`),F.forEach(X=>{ne([O],o+X,i[`defaultValue${X}`]||D)})}):ne(M,o,D))}h=this.extendTranslation(h,e,i,d,s),E&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(E||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,x?h:void 0):h=this.options.parseMissingKeyHandler(h))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(i),d):h}extendTranslation(e,i,s,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=w(e)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=e.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=s.replace&&!w(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,s.lng||this.language||n.usedLng,s),c){const h=e.match(this.interpolator.nestingRegexp),p=h&&h.length;u<p&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(s.lng=this.language||n.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,p=new Array(h),g=0;g<h;g++)p[g]=arguments[g];return r&&r[0]===p[0]&&!s.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${i[0]}`),null):o.translate(...p,i)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=w(a)?[a]:a;return e!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(e=$s.handle(l,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,n,r,o,a;return w(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,i),u=c.key;n=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=i.count!==void 0&&!w(i.count),p=h&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),g=i.context!==void 0&&(w(i.context)||typeof i.context=="number")&&i.context!=="",m=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(f=>{this.isValidLookup(s)||(a=f,!Li[`${m[0]}-${f}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Li[`${m[0]}-${f}`]=!0,this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(y=>{if(this.isValidLookup(s))return;o=y;const b=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(b,u,y,f,i);else{let x;h&&(x=this.pluralResolver.getSuffix(y,i.count,i));const E=`${this.options.pluralSeparator}zero`,z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(b.push(u+x),i.ordinal&&x.indexOf(z)===0&&b.push(u+x.replace(z,this.options.pluralSeparator)),p&&b.push(u+E)),g){const _=`${u}${this.options.contextSeparator}${i.context}`;b.push(_),h&&(b.push(_+x),i.ordinal&&x.indexOf(z)===0&&b.push(_+x.replace(z,this.options.pluralSeparator)),p&&b.push(_+E))}}let S;for(;S=b.pop();)this.isValidLookup(s)||(r=S,s=this.getResource(y,f,S,i))}))})}),{res:s,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,i,s,n):this.resourceStore.getResource(e,i,s,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!w(e.replace);let n=s?e.replace:e;if(s&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!s){n={...n};for(const r of i)delete n[r]}return n}static hasDefaultValue(e){const i="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&i===s.substring(0,i.length)&&e[s]!==void 0)return!0;return!1}}const Nt=t=>t.charAt(0).toUpperCase()+t.slice(1);class Ai{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=q.create("languageUtils")}getScriptPartFromCode(e){if(e=lt(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=lt(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(w(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(e)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let s=e.split("-");return this.options.lowerCaseLng?s=s.map(n=>n.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Nt(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Nt(s[1].toLowerCase())),i.indexOf(s[2].toLowerCase())>-1&&(s[2]=Nt(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(s=>{if(i)return;const n=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(n))&&(i=n)}),!i&&this.options.supportedLngs&&e.forEach(s=>{if(i)return;const n=this.getLanguagePartFromCode(s);if(this.isSupportedCode(n))return i=n;i=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),w(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let s=e[i];return s||(s=e[this.getScriptPartFromCode(i)]),s||(s=e[this.formatLanguageCode(i)]),s||(s=e[this.getLanguagePartFromCode(i)]),s||(s=e.default),s||[]}toResolveHierarchy(e,i){const s=this.getFallbackCodes(i||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return w(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):w(e)&&r(this.formatLanguageCode(e)),s.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let fr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],gr={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const mr=["v1","v2","v3"],_r=["v4"],Ri={zero:0,one:1,two:2,few:3,many:4,other:5},yr=()=>{const t={};return fr.forEach(e=>{e.lngs.forEach(i=>{t[i]={numbers:e.nr,plurals:gr[e.fc]}})}),t};class br{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=q.create("pluralResolver"),(!this.options.compatibilityJSON||_r.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=yr(),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=lt(e==="dev"?"en":e),n=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:s,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(s,{type:n})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,i);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,s).map(n=>`${i}${n}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,i);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((n,r)=>Ri[n]-Ri[r]).map(n=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n}`):s.numbers.map(n=>this.getSuffix(e,n,i)):[]}getSuffix(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,s);return n?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n.select(i)}`:this.getSuffixRetroCompatible(n,i):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,i){const s=e.noAbs?e.plurals(i):e.plurals(Math.abs(i));let n=e.numbers[s];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!mr.includes(this.options.compatibilityJSON)}}const ki=function(t,e,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=or(t,e,i);return!r&&n&&w(i)&&(r=Xt(t,i,s),r===void 0&&(r=Xt(e,i,s))),r},It=t=>t.replace(/\$/g,"$$$$");class vr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:s,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:m,nestingOptionsSeparator:f,maxReplaces:y,alwaysFormat:b}=e.interpolation;this.escape=i!==void 0?i:lr,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?ye(r):o||"{{",this.suffix=a?ye(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?ye(h):p||ye("$t("),this.nestingSuffix=g?ye(g):m||ye(")"),this.nestingOptionsSeparator=f||",",this.maxReplaces=y||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,s)=>i&&i.source===s?(i.lastIndex=0,i):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,s,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const y=ki(i,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,s,{...n,...i,interpolationkey:p}):y}const g=p.split(this.formatSeparator),m=g.shift().trim(),f=g.join(this.formatSeparator).trim();return this.format(ki(i,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),f,s,{...n,...i,interpolationkey:m})};this.resetRegExp();const u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>It(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?It(this.escape(p)):It(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const g=r[1].trim();if(o=c(g),o===void 0)if(typeof u=="function"){const f=u(e,r,n);o=w(f)?f:""}else if(n&&Object.prototype.hasOwnProperty.call(n,g))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),o="";else!w(o)&&!this.useRawValueToEscape&&(o=Ei(o));const m=p.safeValue(o);if(e=e.replace(r[0],m),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const p=h.match(/'/g),g=h.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...s},o=o.replace&&!w(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=u.shift(),l=u,c=!0}if(r=i(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!w(r))return r;w(r)||(r=Ei(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,s.lng,{...s,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const wr=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const s=t.split("(");e=s[0].toLowerCase().trim();const n=s[1].substring(0,s[1].length-1);e==="currency"&&n.indexOf(":")<0?i.currency||(i.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?i.range||(i.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();i[u]||(i[u]=c),c==="false"&&(i[u]=!1),c==="true"&&(i[u]=!0),isNaN(c)||(i[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:i}},be=t=>{const e={};return(i,s,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=s+JSON.stringify(r);let a=e[o];return a||(a=t(lt(s),n),e[o]=a),a(i)}};class xr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("formatter"),this.options=e,this.formats={number:be((i,s)=>{const n=new Intl.NumberFormat(i,{...s});return r=>n.format(r)}),currency:be((i,s)=>{const n=new Intl.NumberFormat(i,{...s,style:"currency"});return r=>n.format(r)}),datetime:be((i,s)=>{const n=new Intl.DateTimeFormat(i,{...s});return r=>n.format(r)}),relativetime:be((i,s)=>{const n=new Intl.RelativeTimeFormat(i,{...s});return r=>n.format(r,s.range||"day")}),list:be((i,s)=>{const n=new Intl.ListFormat(i,{...s});return r=>n.format(r)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=be(i)}format(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=wr(l);if(this.formats[c]){let d=a;try{const h=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},p=h.locale||h.lng||n.locale||n.lng||s;d=this.formats[c](a,p,{...u,...n,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Sr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Pr extends wt{constructor(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=s,this.languageUtils=s.languageUtils,this.options=n,this.logger=q.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,n.backend,n)}queueLoad(e,i,s,n){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;i.forEach(d=>{const h=`${c}|${d}`;!s.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,s){const n=e.split("|"),r=n[0],o=n[1];i&&this.emit("failedLoading",r,o,i),!i&&s&&this.store.addResourceBundle(r,o,s,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&s&&(this.state[e]=0);const a={};this.queue.forEach(l=>{rr(l.loaded,[r],o),Sr(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:s,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,s,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,i,a)}prepareLoading(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();w(e)&&(e=this.languageUtils.toResolveHierarchy(e)),w(i)&&(i=[i]);const r=this.queueLoad(e,i,s,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,i,s){this.prepareLoading(e,i,{},s)}reload(e,i,s){this.prepareLoading(e,i,{reload:!0},s)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=e.split("|"),n=s[0],r=s[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${s}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,i,s,n,l):u=c(e,i,s,n),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,i,s,n,a,l)}!e||!e[0]||this.store.addResource(e[0],i,s,n)}}}const Ni=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),w(t[1])&&(e.defaultValue=t[1]),w(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(s=>{e[s]=i[s]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ii=t=>(w(t.ns)&&(t.ns=[t.ns]),w(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),w(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Je=()=>{},Cr=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class Fe extends wt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ii(e),this.services={},this.logger=q,this.modules={external:[]},Cr(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(s=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(w(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const n=Ni();this.options={...n,...this.options,...Ii(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?q.init(r(this.modules.logger),this.options):q.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=xr);const d=new Ai(this.options);this.store=new Ti(this.options.resources,this.options);const h=this.services;h.logger=q,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new br(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new vr(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Pr(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(p){for(var g=arguments.length,m=new Array(g>1?g-1:0),f=1;f<g;f++)m[f-1]=arguments[f];e.emit(p,...m)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new ut(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,m=new Array(g>1?g-1:0),f=1;f<g;f++)m[f-1]=arguments[f];e.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Je),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Ee(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),s(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Je;const n=w(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(e,i,s){const n=Ee();return typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),s||(s=Je),this.services.backendConnector.reload(e,i,r=>{n.resolve(),s(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&$s.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const s=this.languages[i];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(e,i){var s=this;this.isLanguageChangingTo=e;const n=Ee();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return s.t(...arguments)}),i&&i(l,function(){return s.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=w(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,i,s){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||r.keyPrefix);const h=n.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(g=>`${l.keyPrefix}${h}${g}`):p=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(p,l)};return w(e)?r.lng=e:r.lngs=e,r.ns=i,r.keyPrefix=s,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=i.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(s,e)&&(!n||o(r,e)))}loadNamespaces(e,i){const s=Ee();return this.options.ns?(w(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{s.resolve(),i&&i(n)}),s):(i&&i(),Promise.resolve())}loadLanguages(e,i){const s=Ee();w(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{s.resolve(),i&&i(o)}),s):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Ai(Ni());return i.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Fe(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Je;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new Fe(n);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},s&&(r.store=new Ti(this.store.data,n),r.services.resourceStore=r.store),r.translator=new ut(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,i),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const L=Fe.createInstance();L.createInstance=Fe.createInstance;L.createInstance;L.dir;L.init;L.loadResources;L.reloadResources;L.use;L.changeLanguage;L.getFixedT;const Er=L.t;L.exists;L.setDefaultNamespace;L.hasLoadedNamespace;L.loadNamespaces;L.loadLanguages;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or={},we=se(class extends xe{constructor(){super(...arguments),this.ot=Or}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((s,n)=>s===this.ot[n]))return H}else if(this.ot===e)return H;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $r{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let zr=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=t=>!_n(t)&&typeof t.then=="function",Di=1073741823;let Tr=class extends yt{constructor(){super(...arguments),this._$Cwt=Di,this._$Cbt=[],this._$CK=new $r(this),this._$CX=new zr}render(...e){return e.find(i=>!Mi(i))??H}update(e,i){const s=this._$Cbt;let n=s.length;this._$Cbt=i;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!Mi(l))return this._$Cwt=a,l;a<n&&l===s[a]||(this._$Cwt=Di,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const je=se(Tr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},zs=se(class extends xe{constructor(t){if(super(t),t.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;i===void 0?i=e:e!==void 0&&(s=e);const n=[],r=[];let o=0;for(const a of t)n[o]=s?s(a,o):o,r[o]=i(a,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=yn(t),{values:r,keys:o}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=n.length-1,p=0,g=r.length-1;for(;d<=h&&p<=g;)if(n[d]===null)d++;else if(n[h]===null)h--;else if(a[d]===o[p])l[p]=oe(n[d],r[p]),d++,p++;else if(a[h]===o[g])l[g]=oe(n[h],r[g]),h--,g--;else if(a[d]===o[g])l[g]=oe(n[d],r[g]),Ce(t,l[g+1],n[d]),d++,g--;else if(a[h]===o[p])l[p]=oe(n[h],r[p]),Ce(t,n[d],n[h]),h--,p++;else if(c===void 0&&(c=Fi(o,p,g),u=Fi(a,d,h)),c.has(a[d]))if(c.has(a[h])){const m=u.get(o[p]),f=m!==void 0?n[m]:null;if(f===null){const y=Ce(t,n[d]);oe(y,r[p]),l[p]=y}else l[p]=oe(f,r[p]),Ce(t,n[d],f),n[m]=null;p++}else et(n[h]),h--;else et(n[d]),d++;for(;p<=g;){const m=Ce(t,l[g+1]);oe(m,r[p]),l[p++]=m}for(;d<=h;){const m=n[d++];m!==null&&et(m)}return this.ut=o,gs(t,l),H}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xt extends Event{constructor(e){super(xt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}xt.eventName="rangeChanged";class St extends Event{constructor(e){super(St.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}St.eventName="visibilityChanged";class Pt extends Event{constructor(){super(Pt.eventName,{bubbles:!1})}}Pt.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Lr{constructor(e){this._element=null;const i=e??window;this._node=i,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Ar extends Lr{constructor(e,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,i){const s=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;this._scrollTo(s)}scrollBy(e,i){const s=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,i=null,s=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=i,this._end=s):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:i,left:s}=e;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,i,s){return this._scrollTo(e,i,s),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:i}=this;let{top:s,left:n}=this._destination;s=Math.min(s||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(s-e),o=Math.abs(n-i);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ji=typeof window<"u"?window.ResizeObserver:void 0;const Kt=Symbol("virtualizerRef"),We="virtualizer-sizer";let Vi;class Rr{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const i=e.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ji(()=>this._hostElementSizeChanged()),this._childrenRO=new ji(this._childrenSizeChanged.bind(this))}_initHostElement(e){const i=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),i[Kt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Ir(this._hostElement,e),this._scrollerController=new Ar(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let i=e.querySelector(`[${We}]`);i||(i=document.createElement("div"),i.setAttribute(We,""),e.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(We,""),this._sizer=i}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const i=e.type||Vi;if(typeof i=="function"&&this._layout instanceof i){const s={...e};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(e){let i,s;if(typeof e.type=="function"){s=e.type;const n={...e};delete n.type,i=n}else i=e;s===void 0&&(Vi=s=(await ii(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new s(n=>this._handleLayoutMessage(n),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),i=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:n}}return null}_measureChildren(){const e={},i=this._children,s=this._measureChildOverride||this._measureChild;for(let n=0;n<i.length;n++){const r=i[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=s.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:i,height:s}=e.getBoundingClientRect();return Object.assign({width:i,height:s},kr(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:i,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Pt)}get _children(){const e=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(We)||e.push(i),i=i.nextElementSibling;return e}_updateView(){const e=this._hostElement,i=this._scrollerController?.element,s=this._layout;if(e&&i&&s){let n,r,o,a;const l=e.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(y=>y.getBoundingClientRect());c.unshift(l);for(const y of c)n=Math.max(n,y.top),r=Math.max(r,y.left),o=Math.min(o,y.bottom),a=Math.min(a,y.right);const u=i.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:i.scrollWidth,height:i.scrollHeight},p=n-l.top+e.scrollTop,g=r-l.left+e.scrollLeft,m=Math.max(0,o-n),f=Math.max(0,a-r);s.viewportSize={width:f,height:m},s.viewportScroll={top:p,left:g},s.totalScrollSize=h,s.offsetWithinScroller=d}}_sizeHostElement(e){const s=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=s?`${s}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:i,left:s,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${i}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:i,_last:s,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:i}=this._scrollerController,{top:s,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-s,left:i-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(e),{behavior:s}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:i}=this._scrollIntoViewTarget||{};i&&e?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new xt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new St({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,i)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function kr(t){const e=window.getComputedStyle(t);return{marginTop:Ge(e.marginTop),marginRight:Ge(e.marginRight),marginBottom:Ge(e.marginBottom),marginLeft:Ge(e.marginLeft)}}function Ge(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Bi(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Nr(t,e=!1){const i=[];let s=e?t:Bi(t);for(;s!==null;)i.push(s),s=Bi(s);return i}function Ir(t,e=!1){let i=!1;return Nr(t,e).filter(s=>{if(i)return!1;const n=getComputedStyle(s);return i=n.position==="fixed",n.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=t=>t,Dr=(t,e)=>v`${e}: ${JSON.stringify(t,null,2)}`;class Fr extends yt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,s)=>Dr(i,s+this._first),this._keyFunction=(i,s)=>Mr(i,s+this._first),this._items=[],e.type!==Z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const i=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)i.push(this._items[s]);return zs(i,this._keyFunction,this._renderItem)}update(e,[i]){this._setFunctions(i);const s=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(e,i):this._initialize(e,i),s?H:this.render()}async _updateVirtualizerConfig(e,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,i)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:i,keyFunction:s}=e;i&&(this._renderItem=(n,r)=>i(n,r+this._first)),s&&(this._keyFunction=(n,r)=>s(n,r+this._first))}_makeVirtualizer(e,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:n,items:r}=i;this._virtualizer=new Rr({hostElement:e,layout:s,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,i){const s=e.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(s,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const jr=se(Fr),Vr=(t,e)=>{if(!t||!e)return;const i=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(s=>i.includes(s)?[]:[[s,void 0]]))};class Br extends xe{_props;render(e){return H}update(e,[i]){return this._props!==i&&Object.assign(e.element,Vr(this._props,i),this._props=i),H}}const Hr=se(Br);function Ur(t){return()=>t}const Yr=Ur(),Ts=Yr,dt=t=>t,oi=(t,...e)=>typeof t=="function"?t(...e):t,Xr=t=>{const e=Ye(),i=I(()=>new CSSStyleSheet,[]);T(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,i]},[]),T(()=>{i.replaceSync(t)},[t])};function it(t){return t?e=>e?.[t]:dt}const Kr=t=>{const e=it(t);return i=>typeof i=="string"?i:e(i)?.toString()||""},Jr=t=>e=>{const i={};for(const s in e)t.includes(s)&&(i[s]=e[s]);return i},Wr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Gr=de`
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
`,Zr=({index:t,itemHeight:e,auto:i})=>de`
	${k(!i,()=>de`
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
`,qr=t=>{const e=t==="auto",[i,s]=Q(e?40:t);return[i,n=>e?s(n):void 0]},Ls=Fn(()=>Ts);customElements.define("cosmoz-keybinding-provider",Ls.Provider);const ai=t=>{const e=I(()=>({}),[]);return I(()=>Object.assign(e,t),[e,...Object.values(t)])},Ne=(t,e)=>{const i=vs(Ls),s=ai(t);T(()=>i(s),e)},Qr=Symbol("listbox.navigate.up"),eo=Symbol("listbox.navigate.down"),to=Symbol("listbox.select"),io=({onUp:t,onDown:e,onEnter:i})=>{const s=Ye();Ne({activity:Qr,callback:t,element:()=>s},[]),Ne({activity:eo,callback:e,element:()=>s},[]),Ne({activity:to,callback:i,element:()=>s},[])},so=({items:t,onSelect:e,defaultIndex:i=0})=>{const[s,n]=Q({index:i}),{index:r}=s,{length:o}=t;return T(()=>{n({index:s.index<0?i:Math.min(s.index,t.length-1),scroll:!0})},[t,i]),io({onUp:P(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:P(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:P(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:s,highlight:P(a=>n({index:a}),[]),select:P(a=>e?.(a),[e])}},no=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function ae(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:no(t)?Array.from(t):[t]}const Mt=(t,e=dt)=>i=>{const s=ae(t).map(e);return ae(i).filter(n=>!s.includes(e(n)))},ro=(t,e)=>e?i=>i!=null&&ae(t).find(s=>s[e]===i[e]):i=>i!=null&&ae(t).includes(i),oo=(t,e)=>{if(!e||!t)return t;const i=t.toLowerCase().indexOf(e.toLowerCase());if(i<0)return t;const s=i+e.length;return[t.slice(0,i),v`<mark>${t.slice(i,s)}</mark>`,t.slice(s)]},ao=(t=dt)=>(e,i,{highlight:s,select:n,textual:r=dt,query:o,isSelected:a})=>{const l=r(e),c=oo(l,o),u=t(c,e,i);return v`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${i}
				@mouseenter=${()=>s(i)}
				@click=${()=>n(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},lo=({itemRenderer:t=ao(),...e})=>{const i=ai(e);return P((s,n)=>t(s,n,i),[i,t])},co=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],uo=({value:t,valueProperty:e,items:i,onSelect:s,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=I(()=>ro(t,e),[t,e]),d=I(()=>i.slice(),[i,u]),{position:h,highlight:p,select:g}=so({items:d,onSelect:s,defaultIndex:isNaN(n)?void 0:Number(n)}),[m,f]=qr(l);return{position:h,items:d,height:Math.min(c,d.length)*m,highlight:p,select:g,itemHeight:m,setItemHeight:f,renderItem:lo({itemRenderer:a,items:d,position:h,highlight:p,select:g,textual:o,query:r,isSelected:u})}},Hi=Ts,ho=t=>{const e=ie(void 0),{position:i,items:s,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=uo(t);return T(()=>{const l=e.current?.[Kt];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Hi)},[s]),T(()=>{if(!i.scroll)return;const l=e.current?.[Kt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),Hi);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),Xr(Zr({...i,itemHeight:o,auto:t.itemHeight==="auto"})),v`<div
			class="items"
			style="min-height: ${r}px"
			${Se(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${jr({items:s,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",U(ho,{styleSheets:[ni(Gr)]}));const po=({multi:t,...e},i)=>v`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Hr(Jr(co)(e))}
		>${i}</cosmoz-listbox
	>`,fo=bt`
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
`,go=v`
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
`,mo=({onClear:t,disabled:e})=>v`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${i=>i.preventDefault()}
	>
		<slot></slot>
	</div>
	${k(t&&!e,()=>v`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${t}
			>
				${go}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",U(mo,{observedAttributes:["disabled"],styleSheets:[ni(fo)]}));const _o=({content:t,onClear:e,disabled:i,hidden:s,className:n="chip",slot:r})=>v`<cosmoz-autocomplete-chip
		class=${Y(n)}
		slot=${Y(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${s}
		.onClear=${e}
		title=${Y(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,yo=({value:t,min:e=0,onDeselect:i,textual:s,disabled:n,chipRenderer:r=_o})=>[...t.filter(Boolean).map(o=>r({item:o,content:s(o),onClear:t.length>e&&(()=>i(o)),disabled:n,slot:"control"})),r({item:null,content:v`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],bo=de`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",U(()=>J,{styleSheets:[bo]}));const vo=bt`
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
`,li=(t,e=()=>({}))=>{const i={type:t,toString(){return t}};return Object.assign((...n)=>Object.assign(e(...n),i),i)},Ui=t=>t.type||t.toString(),Yi=t=>Array.isArray(t)?t:[t],wo=(t,e)=>{const i=Yi(e),s=(i.every(Array.isArray)?i:[i]).map(([n,r])=>({actions:Yi(n).map(Ui),handle:r}));return(n=t,r)=>{const o=s.find(a=>a.actions.includes(Ui(r)));return o?o.handle(n,r):n}},ce={pending:"pending",rejected:"rejected",resolved:"resolved"},As={error:void 0,result:void 0,state:ce.pending},Rs=li(ce.pending),ks=li(ce.resolved,t=>({result:t})),Ns=li(ce.rejected,t=>({error:t})),xo=wo(As,[[Rs,()=>({error:void 0,result:void 0,state:ce.pending})],[ks,(t,{result:e})=>({error:void 0,result:e,state:ce.resolved})],[Ns,(t,{error:e})=>({error:e,result:void 0,state:ce.rejected})]]),Is=t=>{const[{error:e,result:i,state:s},n]=ws(xo,As);return T(()=>{if(!t)return;let r=!1;return n(Rs()),t.then(o=>!r&&n(ks(o)),o=>!r&&n(Ns(o))),()=>{r=!0}},[t]),[i,e,s]},So=Symbol("autocomplete.deselect.last"),Po=Symbol("autocomplete.search.when.selected"),Xi=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Co=(t,e,i)=>{if(!e)return t;const s=Xi(e.toLowerCase()),n=[];for(const r of t){const a=Xi(i(r).toLowerCase()).indexOf(s);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},Eo=t=>t===!1||t==null?[]:t,Oo=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{detail:i})),Ki=[],$o=t=>(...e)=>{let i;const s=()=>{i&&cancelAnimationFrame(i)};return s(),i=requestAnimationFrame(()=>{i=void 0,t(...e)}),s},zo=(t,e,i)=>P(s=>{e?.(s),t.dispatchEvent(new CustomEvent(i,{detail:s}))},[e]),To=({value:t,text:e,onChange:i,onText:s,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:p,defaultIndex:g,externalSearch:m,disabled:f,lazyOpen:y})=>{const b=r!=null?Number(r):void 0,S=I(()=>(c??Kr)(l),[c,l]),x=Ye(),[E,z]=De("opened",!1),_=!e,C=I(()=>e?.trim(),[e]),R=zo(x,s,"text"),W=P(O=>{i?.(O,()=>z(!1)),Oo(x,"value",O)},[i]),[D,fe]=Q([]),G=!!(y&&!C),V=I(()=>G?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:C,active:E}):a).then(Eo),[a,E,C,G]),M=I(()=>ae(t),[t]);T(()=>V.then(fe),[V]),Ne({activity:So,callback:()=>{const O=ae(M);O.length>0&&W(O.slice(0,-1))},check:()=>!f&&_&&x.matches(":focus-within"),element:()=>x},[]),Ne({activity:Po,callback:O=>{const F=ae(M),X=b===1;F.length>0&&X&&O.key.length===1&&W(F.slice(0,-1))},allowDefault:!0,check:()=>!f&&_&&x.matches(":focus-within"),element:()=>x},[b]),T(()=>{!E&&!h&&R("")},[E,h]),T(()=>{x.toggleAttribute("opened",!!E)},[E]);const N=ai({onText:R,onChange:W,value:M,limit:b,min:o,keepQuery:h,keepOpened:d,setOpened:z,onSelect:n,valueProperty:u}),[,,ne]=Is(V);return{limit:b,opened:E,query:C,textual:S,value:M,source$:V,loading:ne==="pending",items:I(()=>{if(!E||G)return Ki;const O=p?D:[...M,...Mt(M,it(u))(D)];return m?O:Co(O,C,S)},[D,E,C,S,_,M,p,u,m,G]),onToggle:P(O=>{f||z(O.newState==="open")},[f]),onText:P(O=>{f||(R(O.target.value),z(!0))},[f,R,e,z]),onSelect:P(O=>{if(f)return;N.onSelect?.(O,N);const{onChange:F,onText:X,limit:ge,min:Tt,value:Lt,keepQuery:At,keepOpened:Pe,setOpened:Ke,valueProperty:A}=N;At||X(""),Pe||Ke(!1);const me=ae(Lt),_e=it(A),_i=me.some(mn=>_e(mn)===_e(O));_i&&me.length===Tt||F((_i?Mt(O,_e)(me):[...me,O]).slice(-ge))},[f,N]),onDeselect:P(O=>{f||N.onChange(Mt(O,it(N.valueProperty))(N.value))},[f,N]),defaultIndex:C!==void 0&&C?.length>0?0:g}},Lo=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),i=t.shadowRoot.querySelector(".badge");i.hidden=!0;for(const a of e)a.hidden=!1;const n=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=e.length-r;for(i.querySelector("span").textContent="+"+o.toString(),i.hidden=o<1;r<e.length;r++)e[r].hidden=!0},Ao=({value:t,opened:e,wrap:i,limit:s})=>{const n=Ye(),r=!(i||s===1),o=I(()=>$o(()=>Lo(n)),[]),[a,l]=Q(0);rt(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),rt(()=>r?o():void 0,[r,a,e,t])},Ro=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),ko=({opened:t,isSingle:e,showSingle:i,hasResultsOrQuery:s})=>!t||e&&!i?!1:s,No=t=>{const{opened:e,invalid:i,errorMessage:s,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:h,onDeselect:p,value:g,limit:m,min:f,showSingle:y,items:b,source$:S,loading:x,chipRenderer:E}=t,z=m===1,_=z&&g?.[0]!=null,C=x||b.length>0||u!=null&&u.length>0;return v`<cosmoz-dropdown-next
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
				.placeholder=${_?void 0:r}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${_}
				?disabled=${o}
				?invalid=${we([S,i],()=>je(S.then(()=>i,()=>!0),i))}
				.errorMessage=${we([S,s],()=>je(S.then(()=>s,R=>R.message),s))}
				.value=${vt(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${Ro}
				?data-one=${z}
				?data-single=${_}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${yo({value:g,min:f,onDeselect:p,textual:c,disabled:o,chipRenderer:E})}
			</cosmoz-input>

			${k(ko({opened:e,isSingle:_,showSingle:y,hasResultsOrQuery:C}),()=>po({...t,items:b,multi:!z},k(x,()=>v`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>k(u!=null&&u.length>0&&b.length===0,()=>v`<slot name="no-result">
											<p class="no-result">${Er("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ms=t=>{const e={...t,...To(t)};return Ao(e),No(e)},Ds=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Io=t=>{const{onChange:e,onText:i,...s}=t,[n,r]=De("value");return T(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ms({...s,value:n,onChange:P((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:P(o=>{t.text=o,i?.(o)},[i])})},Fs=[ni(vo)],js={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",U(Ms,{observedAttributes:Ds,styleSheets:Fs,shadowRootInit:js}));customElements.define("cosmoz-autocomplete",U(Io,{observedAttributes:Ds,styleSheets:Fs,shadowRootInit:js}));/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs="important",Mo=" !"+Vs,Bs=se(class extends xe{constructor(t){if(super(t),t.type!==Z.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const n=e[s];if(n!=null){this.ft.add(s);const r=typeof n=="string"&&n.endsWith(Mo);s.includes("-")||r?i.setProperty(s,r?n.slice(0,-11):n,r?Vs:""):i[s]=n}}return H}});class Do extends Promise{constructor(e){const i={};super((s,n)=>Object.assign(i,{resolve:s,reject:n})),Object.assign(this,i),e?.(i.resolve,i.reject)}resolve=()=>{}}const Hs={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Fo=t=>{const{slide:e}=t,[i,s]=Q([]);return rt(()=>void Object.assign(t.style,Hs.host),[]),T(()=>{if(e==null)return;const n={animationEnd$:new Do,...e};s((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===n.id&&l!==!0);return o!==-1?[...r.slice(0,o),n,...r.slice(o+1,r.length)]:[...r,n]})},[e]),rt(async()=>{if(i.filter(l=>!l.out).length<2){const l=i[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const n=i[i.length-1],r=i[i.length-2],o=n.el,a=r.el;r.out=!0,o&&a&&await n.animation?.(o,a),s((l=[])=>l.filter(c=>c!==r))},[i]),{slides:i}},jo=t=>v`<div
		${Se(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${Bs(Hs.slide)}
	>
		${we([t],()=>t.content??t.render?.(t))}
	</div>`,Vo=({slides:t})=>we([t],()=>zs(t,({id:e})=>e,jo)),Bo=t=>Vo(Fo(t));customElements.define("cosmoz-slider",U(Bo,{useShadowDOM:!1}));const Ze=(t,e)=>{const i=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([i.finished,s.finished])},Ho=(t,e)=>{const i=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([i.finished,s.finished])},Uo=()=>v`<style>
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
</style>`;customElements.define("cz-spinner",U(Uo));const Yo=te(class extends ee{constructor(t,e){super(t,e),this.dispatchEvent=(...i)=>{e.host.dispatchEvent.apply(e.host,i)}}update(){return this.dispatchEvent}}),Dt=(t,e=.08,i=.001)=>{const[s,n]=Q(null);return T(()=>{if(s==null){n(t);return}if(e>=1){n(t);return}const r=s;window.requestAnimationFrame(()=>{const o=t-r;n(Math.abs(o)<i?t:s+o*e)})},[s,n,t,e,i]),s},Xo=(t,e)=>{"ResizeObserver"in window&&T(()=>{if(e==null)return;const i=new ResizeObserver(([{contentRect:s}])=>t(s));return i.observe(e),t(e.getBoundingClientRect()),()=>i.unobserve(e)},[t,e])},ht=(t,e,i)=>Math.max(e,Math.min(i,t)),ci=(t,e,i,s)=>i/s<t/e?i/t:s/e,Ko=(t,e,i,s)=>i/s>t/e?i/t:s/e,Us=(t,e,i,s,n)=>{const r=ci(t,e,i,s),o=r*n,a=t*o,l=e*o,c=a<i?(-i+a)/2:(i-a)/2,u=a<i?(i-a)/2:(-i+a)/2,d=l<s?(-s+l)/2:(s-l)/2,h=l<s?(s-l)/2:(-s+l)/2;return{x:[c,u],y:[d,h]}},Ys="empty",Ct="loading",Xs="loaded",ui="error",Xe="idle",Et="panning",Ie="pinching",Jo=1.1,Wo=t=>Jo/t,Go=t=>2*t,di=(t,e,i,s)=>{const n=ci(t,e,i,s),r=Ko(t*n,e*n,i,s);return Math.max(Wo(n),Go(r))},Zo={status:Ys,interaction:Xe,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},Ks=(t,e)=>{const i={...t};return delete i[e],i},Ji=t=>{const e=Object.keys(t);if(e.length<2)return null;const i=t[e[0]],s=t[e[1]];return{midX:(i.x+s.x)/2,midY:(i.y+s.y)/2,distance:Math.hypot(s.x-i.x,s.y-i.y)}},Ve=t=>{const e=Us(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:ht(t.panX,e.x[0],e.x[1]),panY:ht(t.panY,e.y[0],e.y[1])}},Jt=(t,e,i,s=2)=>t<e?e-(e-t)/s:t>i?i+(t-i)/s:t,Js=t=>{const e=Us(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:Jt(t.panX,e.x[0],e.x[1]),panY:Jt(t.panY,e.y[0],e.y[1])}},Ws=(t,{dPanX:e=0,dPanY:i=0,scaleDiff:s=1,originX:n=0,originY:r=0})=>{const o=t.zoom*s;return{...t,zoom:o,panX:e+n+(t.panX-n)*s,panY:i+r+(t.panY-r)*s}},hi=(t,e,i)=>{const s=di(t.iw,t.ih,t.cw,t.ch),n=ht(t.zoom,1,s);if(n===t.zoom)return t;const r=n/t.zoom;return{...t,zoom:n,panX:e+(t.panX-e)*r,panY:i+(t.panY-i)*r}},qo=(t,e)=>{switch(e.type){case"load":return{...t,status:Ct};default:return t}},Qo=(t,e)=>{switch(e.type){case"loaded":return{...t,status:Xs,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...t,status:ui};default:return t}},ea=(t,e)=>{switch(e.type){case"load":return{...t,status:Ct};default:return t}},ta=(t,e)=>{switch(e.type){case"pointerdown":return{...t,interaction:Et,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}};default:return t}},ia=(t,e)=>{switch(e.type){case"pointerdown":{const i={...t.pointers,[e.id]:{x:e.x,y:e.y}};return{...t,interaction:Ie,pointers:i}}case"pointermove":{const i=t.pointers[e.id];if(!i)return t;const s=e.x-i.x,n=e.y-i.y;return Js({...t,panX:t.panX+s,panY:t.panY+n,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}})}case"pointerup":{const i=Ks(t.pointers,e.id);if(Object.keys(i).length===0){const s=hi({...t,pointers:i},e.settleOriginX??0,e.settleOriginY??0);return Ve({...s,interaction:Xe})}return{...t,pointers:i}}default:return t}},sa=(t,e)=>{switch(e.type){case"pointermove":{if(!t.pointers[e.id])return t;const s=Ji(t.pointers),n={...t.pointers,[e.id]:{x:e.x,y:e.y}},r=Ji(n);if(!s||!r)return{...t,pointers:n};const o=s.distance?r.distance/s.distance:1,a=r.midX-s.midX,l=r.midY-s.midY,c=e.containerOriginX+(r.midX-e.x),u=e.containerOriginY+(r.midY-e.y),d=Ws({...t,pointers:n},{dPanX:a,dPanY:l,scaleDiff:o,originX:c,originY:u}),h=di(t.iw,t.ih,t.cw,t.ch),p=Jt(d.zoom,1,h),g=p/d.zoom,m=c+(d.panX-c)*g,f=u+(d.panY-u)*g;return Js({...d,zoom:p,panX:m,panY:f})}case"pointerup":{const i=Ks(t.pointers,e.id);if(Object.keys(i).length<=1){const s=Ve(hi({...t,pointers:i},e.settleOriginX??0,e.settleOriginY??0));return Object.keys(i).length===1?{...s,interaction:Et}:{...s,interaction:Xe}}return{...t,pointers:i}}default:return t}},na=(t,e)=>{switch(t.interaction){case Xe:return ta(t,e);case Et:return ia(t,e);case Ie:return sa(t,e);default:return t}},ra=(t,e)=>{switch(e.type){case"load":return{...t,status:Ct,interaction:Xe,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const i=di(t.iw,t.ih,t.cw,t.ch),s=ht(e.zoom,1,i);return Ve({...t,zoom:s})}case"wheel":{const{delta:i,originX:s,originY:n}=e,r=1+i,o=Ws(t,{scaleDiff:r,originX:s,originY:n});return Ve(hi(o,s,n))}case"pointerdown":case"pointermove":case"pointerup":return na(t,e);default:return t}},oa=(t,e)=>{if(e.type==="resize")return Ve({...t,cw:e.rect.width,ch:e.rect.height});switch(t.status){case Ys:return qo(t,e);case Ct:return Qo(t,e);case Xs:return ra(t,e);case ui:return ea(t,e);default:return t}},aa=(t,e,i,s)=>{const{iw:n=100,ih:r=100,cw:o=100,ch:a=100}=t,l=ci(n,r,o,a),c=l*e;return{position:"absolute",top:"50%",left:"50%",transform:["translate(-50%, -50%)",`translate(${i}px, ${s}px)`,`scale(${c})`].join(" ")}},Ft=(t,e,i)=>{const s=i.current?.getBoundingClientRect();return s?{originX:t-s.left-s.width/2,originY:e-s.top-s.height/2}:{originX:0,originY:0}},la=(t,e=.08)=>{const[i,s]=ws(oa,Zo),n=ie(),r=P(()=>s({type:"load"}),[s]),o=P(_=>s({type:"loaded",dimensions:_}),[s]),a=P(()=>s({type:"error"}),[s]),l=P(_=>s({type:"zoom",zoom:_}),[s]),c=P(_=>_&&s({type:"resize",rect:_}),[s]),u=P(()=>c(n.current&&n.current.getBoundingClientRect()),[c]);Xo(c,n.current);const d=P(_=>o({iw:_.target.naturalWidth,ih:_.target.naturalHeight}),[o]),h=P(_=>{n.current?.setPointerCapture(_.pointerId),s({type:"pointerdown",id:_.pointerId,x:_.clientX,y:_.clientY})},[s]),p=P(_=>{const{originX:C,originY:R}=Ft(_.clientX,_.clientY,n);s({type:"pointermove",id:_.pointerId,x:_.clientX,y:_.clientY,containerOriginX:C,containerOriginY:R})},[s]),g=ie({x:0,y:0});I(()=>{if(i.interaction!==Ie)return;const _=Object.keys(i.pointers);if(_.length>=2){const C=i.pointers[_[0]],R=i.pointers[_[1]],W=(C.x+R.x)/2,D=(C.y+R.y)/2,{originX:fe,originY:G}=Ft(W,D,n);g.current={x:fe,y:G}}},[i.pointers,i.interaction]);const m=P(_=>{try{n.current?.releasePointerCapture(_.pointerId)}catch{}s({type:"pointerup",id:_.pointerId,settleOriginX:g.current.x,settleOriginY:g.current.y})},[s]),f=P(_=>{_.preventDefault();const{originX:C,originY:R}=Ft(_.clientX,_.clientY,n);s({type:"wheel",delta:-Math.sign(_.deltaY)*.8,originX:C,originY:R})},[s]),y=i.interaction===Ie,b=i.interaction===Et||i.interaction===Ie;let S=e;y?S=.8:b&&(S=.9);const x=Dt(i.zoom,S),E=Dt(i.panX,S),z=Dt(i.panY,S);return{...i,load:r,loaded:o,error:a,zoomTo:l,resize:u,onPointerDown:h,onPointerMove:p,onPointerUp:m,onImageLoad:d,onWheel:f,containerRef:n,style:aa(i,x,E,z)}},ca=({src:t,disabled:e,panStiffness:i,zoomStiffness:s})=>{const{status:n,zoom:r,load:o,error:a,zoomTo:l,resize:c,onPointerDown:u,onPointerMove:d,onPointerUp:h,onImageLoad:p,onWheel:g,style:m,containerRef:f}=la(i,s);if(T(o,[t]),ri({zoomTo:l,resize:c,zoom:r},[l,c,r]),!t)return J;const y=Yo();return T(()=>y(new CustomEvent("zoom-changed",{detail:{value:r}})),[y,r]),T(()=>y(new CustomEvent("status-changed",{detail:{value:n}})),[y,n]),v`
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
			@wheel=${g}
			@pointerdown=${u}
			@pointermove=${d}
			@pointerup=${h}
			@pointercancel=${h}
			${Se(b=>f.current=b)}
		>
			${!t||n===ui?J:v`
						<img
							src=${t}
							draggable="false"
							@load=${p}
							@error=${a}
							style=${Bs(m)}
						/>
				  `}
		</div>
	`};class ua extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",U(ca,{observedAttributes:["src","disabled","pan-stiffness","zoom-stiffness"],baseElement:ua}));/**
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
*/let da=/(url\()([^)]*)(\))/g,ha=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,qe,B;function Me(t,e){if(t&&ha.test(t)||t==="//")return t;if(qe===void 0){qe=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",qe=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),qe)try{return new URL(t,e).href}catch{return t}return B||(B=document.implementation.createHTMLDocument("temp"),B.base=B.createElement("base"),B.head.appendChild(B.base),B.anchor=B.createElement("a"),B.body.appendChild(B.anchor)),B.base.href=e,B.anchor.href=t,B.anchor.href||t}function pi(t,e){return t.replace(da,function(i,s,n,r){return s+"'"+Me(n.replace(/["']/g,""),e)+"'"+r})}function fi(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pa=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const fa=pa&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let ga=window.Polymer&&window.Polymer.rootPath||fi(document.baseURI||window.location.href),pt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Wt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ma=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,_a=window.Polymer&&window.Polymer.legacyOptimizations||!1,ya=window.Polymer&&window.Polymer.legacyWarnings||!1,ba=window.Polymer&&window.Polymer.syncInitialRender||!1,Gt=window.Polymer&&window.Polymer.legacyUndefined||!1,va=window.Polymer&&window.Polymer.orderedComputed||!1,Wi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,wa=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let xa=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Sa=0;const he=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Sa++;function s(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=e,a=o.get(n);if(!a){a=t(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gi={},Gs={};function Gi(t,e){gi[t]=Gs[t.toLowerCase()]=e}function Zi(t){return gi[t]||Gs[t.toLowerCase()]}function Pa(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Be extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let s=Zi(e);return s&&i?s.querySelector(i):s}return null}attributeChangedCallback(e,i,s,n){i!==s&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Me(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=fi(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Wt&&Zi(e)!==void 0)throw Gi(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Gi(e,this),Pa(this)}}}Be.prototype.modules=gi;customElements.define("dom-module",Be);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ca="link[rel=import][type~=css]",Ea="include",qi="shady-unscoped";function Zs(t){return Be.import(t)}function Qi(t){let e=t.body?t.body:t;const i=pi(e.textContent,t.baseURI),s=document.createElement("style");return s.textContent=i,s}function Oa(t){const e=t.trim().split(/\s+/),i=[];for(let s=0;s<e.length;s++)i.push(...$a(e[s]));return i}function $a(t){const e=Zs(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...Qs(e));const s=e.querySelector("template");s&&i.push(...qs(s,e.assetpath)),e._styles=i}return e._styles}function qs(t,e){if(!t._styles){const i=[],s=t.content.querySelectorAll("style");for(let n=0;n<s.length;n++){let r=s[n],o=r.getAttribute(Ea);o&&i.push(...Oa(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=pi(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function za(t){let e=Zs(t);return e?Qs(e):[]}function Qs(t){const e=[],i=t.querySelectorAll(Ca);for(let s=0;s<i.length;s++){let n=i[s];if(n.import){const r=n.import,o=n.hasAttribute(qi);if(o&&!r._unscopedStyle){const a=Qi(r);a.setAttribute(qi,""),r._unscopedStyle=a}else r._style||(r._style=Qi(r));e.push(o?r._unscopedStyle:r._style)}}return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ue=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zt(t){return t.indexOf(".")>=0}function pe(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Ta(t,e){return t.indexOf(e+".")===0}function ft(t,e){return e.indexOf(t+".")===0}function gt(t,e,i){return e+i.slice(t.length)}function Te(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let s=t[i].toString().split(".");for(let n=0;n<s.length;n++)e.push(s[n])}return e.join(".")}else return t}function en(t){return Array.isArray(t)?Te(t).split("."):t.toString().split(".")}function j(t,e,i){let s=t,n=en(e);for(let r=0;r<n.length;r++){if(!s)return;let o=n[r];s=s[o]}return i&&(i.path=n.join(".")),s}function es(t,e,i){let s=t,n=en(e),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(s=s[a],!s)return}s[r]=i}else s[e]=i;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mt={},La=/-[a-z]/g,Aa=/([A-Z])/g;function tn(t){return mt[t]||(mt[t]=t.indexOf("-")<0?t:t.replace(La,e=>e[1].toUpperCase()))}function Ot(t){return mt[t]||(mt[t]=t.replace(Aa,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ra=0,sn=0,ve=[],ka=0,qt=!1,nn=document.createTextNode("");new window.MutationObserver(Na).observe(nn,{characterData:!0});function Na(){qt=!1;const t=ve.length;for(let e=0;e<t;e++){let i=ve[e];if(i)try{i()}catch(s){setTimeout(()=>{throw s})}}ve.splice(0,t),sn+=t}const Ia={run(t){return qt||(qt=!0,nn.textContent=ka++),ve.push(t),Ra++},cancel(t){const e=t-sn;if(e>=0){if(!ve[e])throw new Error("invalid async handle: "+t);ve[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ma=Ia,rn=he(t=>{class e extends t{static createProperties(s){const n=this.prototype;for(let r in s)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,n){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,n))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[s];return n||(n=this.constructor.attributeNameForProperty(s),this.__dataAttributes[n]=s),n}_definePropertyAccessor(s,n){Object.defineProperty(this,s,{get(){return this.__data[s]},set:n?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,n){this._setPendingProperty(s,n)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,n,r){let o=this.__data[s],a=this._shouldPropertyChange(s,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=o),this.__data[s]=n,this.__dataPending[s]=n),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ma.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,n,r)),this.__dataCounter--}_shouldPropertiesChange(s,n,r){return!!n}_propertiesChanged(s,n,r){}_shouldPropertyChange(s,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(s,n,r,o){n!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,n,r,o)}_attributeToProperty(s,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[s]||s;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,n,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(s=ue(s)),o===void 0?s.removeAttribute(r):s.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s?.toString()}}_deserializeValue(s,n){switch(n){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const on={};let Qe=HTMLElement.prototype;for(;Qe;){let t=Object.getOwnPropertyNames(Qe);for(let e=0;e<t.length;e++)on[t[e]]=!0;Qe=Object.getPrototypeOf(Qe)}const Da=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Fa(t,e){if(!on[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const ja=he(t=>{const e=rn(t);class i extends e{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(tn(n[r]))}static attributeNameForProperty(n){return Ot(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(Da(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){Fa(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Va={"dom-if":!0,"dom-repeat":!0};let ts=!1,is=!1;function Ba(){if(!ts){ts=!0;const t=document.createElement("textarea");t.placeholder="a",is=t.placeholder===t.textContent}return is}function Ha(t){Ba()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Ua=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,s)=>{const n=i.getAttribute(s);if(t&&s.startsWith("on-")){e.setAttribute(s,t.createScript(n,s));return}e.setAttribute(s,n)}})();function Ya(t){let e=t.getAttribute("is");if(e&&Va[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:s}=i.attributes[0];Ua(t,i,s),i.removeAttribute(s)}}return t}function an(t,e){let i=e.parentInfo&&an(t,e.parentInfo);if(i){for(let s=i.firstChild,n=0;s;s=s.nextSibling)if(e.parentIndex===n++)return s}else return t}function Xa(t,e,i,s){s.id&&(e[s.id]=i)}function Ka(t,e,i){if(i.events&&i.events.length)for(let s=0,n=i.events,r;s<n.length&&(r=n[s]);s++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function Ja(t,e,i,s){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=s)}function Wa(t,e,i){return t=t._methodHost||t,function(n){t[i]?t[i](n,n.detail):console.warn("listener method `"+i+"` not defined")}}const Ga=he(t=>{class e extends t{static _parseTemplate(s,n){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,n,r){return this._parseTemplateNode(s.content,n,r)}static _parseTemplateNode(s,n,r){let o=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),Ha(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(s,n,r){if(!(s.localName==="script"||s.localName==="style"))for(let o=s.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Ya(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,s.removeChild(u),u=l;if(n.stripWhiteSpace&&!o.textContent.trim()){s.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(s,n,r){let o=s,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,n,r){let o=!1,a=Array.from(s.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(s,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(s,n,r,o,a){return o.slice(0,3)==="on-"?(s.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let n=s._templateInfo;return n&&n.content||s.content}_stampTemplate(s,n){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),n=n||this.constructor._parseTemplate(s);let r=n.nodeInfoList,o=n.content||s.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=an(a,d);Xa(this,a.$,h,d),Ja(this,h,d,n),Ka(this,h,d)}return a=a,a}_addMethodEventListenerToNode(s,n,r,o){o=o||s;let a=Wa(o,n,r);return this._addEventListenerToNode(s,n,a),a}_addEventListenerToNode(s,n,r){s.addEventListener(n,r)}_removeEventListenerFromNode(s,n,r){s.removeEventListener(n,r)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let He=0;const Ue=[],$={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ln="__computeInfo",Za=/[A-Z]/;function jt(t,e,i){let s=t[e];if(!s)s=t[e]={};else if(!t.hasOwnProperty(e)&&(s=t[e]=Object.create(t[e]),i))for(let n in s){let r=s[n],o=s[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return s}function Le(t,e,i,s,n,r){if(e){let o=!1;const a=He++;for(let l in i){let c=n?pe(l):l,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==a)&&(!n||mi(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,i,s,p.info,n,r),o=!0)}return o}return!1}function qa(t,e,i,s,n,r,o,a){let l=!1,c=o?pe(s):s,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==i)&&(!o||mi(s,p.trigger))&&(p.info&&(p.info.lastRun=i),p.fn(t,s,n,r,p.info,o,a),l=!0);return l}function mi(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&Ta(i,t))||!!(e.wildcard&&ft(i,t))}else return!0}function ss(t,e,i,s,n){let r=typeof n.method=="string"?t[n.method]:n.method,o=n.property;r?r.call(t,t.__data[o],s[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Qa(t,e,i,s,n){let r=t[$.NOTIFY],o,a=He++;for(let c in e)e[c]&&(r&&qa(t,r,a,c,i,s,n)||n&&el(t,c,i))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function el(t,e,i){let s=pe(e);if(s!==e){let n=Ot(s)+"-changed";return cn(t,n,i[e],e),!0}return!1}function cn(t,e,i,s){let n={value:i,queueProperty:!0};s&&(n.path=s),ue(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function tl(t,e,i,s,n,r){let a=(r?pe(e):e)!=e?e:null,l=a?j(t,a):t.__data[e];a&&l===void 0&&(l=i[e]),cn(t,n.eventName,l,a)}function il(t,e,i,s,n){let r,o=t.detail,a=o&&o.path;a?(s=gt(i,s,a),r=o&&o.value):r=t.currentTarget[i],r=n?!r:r,(!e[$.READ_ONLY]||!e[$.READ_ONLY][s])&&e._setPendingPropertyOrPath(s,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function sl(t,e,i,s,n){let r=t.__data[e];pt&&(r=pt(r,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,r)}function nl(t,e,i,s){let n=t[$.COMPUTE];if(n)if(va){He++;const r=ol(t),o=[];for(let l in e)ns(l,n,o,r,s);let a;for(;a=o.shift();)un(t,"",e,i,a)&&ns(a.methodInfo,n,o,r,s);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Le(t,n,r,i,s);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const rl=(t,e,i)=>{let s=0,n=e.length-1,r=-1;for(;s<=n;){const o=s+n>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)s=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),e.splice(r,0,t)},ns=(t,e,i,s,n)=>{const r=n?pe(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==He&&(!n||mi(t,l.trigger))&&(l.info.lastRun=He,rl(l.info,i,s))}};function ol(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[$.COMPUTE];let{counts:s,ready:n,total:r}=al(t),o;for(;o=n.shift();){e.set(o,e.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--s[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function al(t){const e=t[ln],i={},s=t[$.COMPUTE],n=[];let r=0;for(let o in e){const a=e[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in s)e[o]||n.push(o);return{counts:i,ready:n,total:r}}function un(t,e,i,s,n){let r=Qt(t,e,i,s,n);if(r===Ue)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function ll(t,e,i){let s=t.__dataLinkedPaths;if(s){let n;for(let r in s){let o=s[r];ft(r,e)?(n=gt(r,o,e),t._setPendingPropertyOrPath(n,i,!0,!0)):ft(o,e)&&(n=gt(o,r,e),t._setPendingPropertyOrPath(n,i,!0,!0))}}}function Vt(t,e,i,s,n,r,o){i.bindings=i.bindings||[];let a={kind:s,target:n,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),pl(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Ot(n)+"-changed",a.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,cl(t,e,a,u,l)}}function cl(t,e,i,s,n){if(!s.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,o={index:n,binding:i,part:s,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=hn(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:ul,info:o,trigger:l})}}}function ul(t,e,i,s,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=i[e];e=gt(c.source,l.target,e),a._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(a)}else{let u=n.evaluator._evaluateBinding(t,c,e,i,s,r);u!==Ue&&dl(t,a,l,c,u)}}function dl(t,e,i,s,n){if(n=hl(e,n,i,s),pt&&(n=pt(n,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,n,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[$.READ_ONLY]||!e[$.READ_ONLY][r])&&e._setPendingProperty(r,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,n)}}function hl(t,e,i,s){if(i.isCompound){let n=t.__dataCompoundStorage[i.target];n[s.compoundIndex]=e,e=n.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function pl(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function fl(t,e){let{nodeList:i,nodeInfoList:s}=e;if(s.length)for(let n=0;n<s.length;n++){let r=s[n],o=i[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];gl(o,c),ml(o,t,c)}o.__dataHost=t}}function gl(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,n=new Array(s.length);for(let o=0;o<s.length;o++)n[o]=s[o].literal;let r=e.target;i[r]=n,e.literal&&e.kind=="property"&&(r==="className"&&(t=ue(t)),t[r]=e.literal)}}function ml(t,e,i){if(i.listenerEvent){let s=i.parts[0];t.addEventListener(i.listenerEvent,function(n){il(n,e,i.target,s.source,s.negate)})}}function rs(t,e,i,s,n,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:s,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,i,{fn:s,info:o}),o}function Qt(t,e,i,s,n){let r=t._methodHost||t,o=r[n.methodName];if(o){let a=t._marshalArgs(n.args,e,i);return a===Ue?Ue:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const _l=[],dn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",yl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",bl="(?:'(?:[^'\\\\]|\\\\.)*')",vl='(?:"(?:[^"\\\\]|\\\\.)*")',wl="(?:"+bl+"|"+vl+")",os="(?:("+dn+"|"+yl+"|"+wl+")\\s*)",xl="(?:"+os+"(?:,\\s*"+os+")*)",Sl="(?:\\(\\s*(?:"+xl+"?)\\)\\s*)",Pl="("+dn+"\\s*"+Sl+"?)",Cl="(\\[\\[|{{)\\s*",El="(?:]]|}})",Ol="(?:(!)\\s*)?",$l=Cl+Ol+Pl+El,as=new RegExp($l,"g");function ls(t){let e="";for(let i=0;i<t.length;i++){let s=t[i].literal;e+=s||""}return e}function Bt(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let s={methodName:e[1],static:!0,args:_l};if(e[2].trim()){let n=e[2].replace(/\\,/g,"&comma;").split(",");return zl(n,s)}else return s}return null}function zl(t,e){return e.args=t.map(function(i){let s=hn(i);return s.literal||(e.static=!1),s},this),e}function hn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},s=e[0];switch(s==="-"&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=pe(e),i.structured=Zt(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function cs(t,e,i){let s=j(t,i);return s===void 0&&(s=e[i]),s}function pn(t,e,i,s){const n={indexSplices:s};Gt&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(i+".splices",n),t.notifyPath(i+".length",e.length),Gt&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function Oe(t,e,i,s,n,r){pn(t,e,i,[{index:s,addedCount:n,removed:r,object:e,type:"splice"}])}function Tl(t){return t[0].toUpperCase()+t.substring(1)}const Ll=he(t=>{const e=Ga(ja(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if($e.length){let n=$e[$e.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[$.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==$.READ_ONLY);let a=jt(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=jt(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,$.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,$.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,$.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,$.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||pe(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=j(this,n);if(n=es(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return ll(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=ue(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&Zt(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[$.NOTIFY]&&this[$.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[$.READ_ONLY]||!this[$.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;nl(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Le(this,this[$.REFLECT],r,o,a),Le(this,this[$.OBSERVE],r,o,a),l&&Qa(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[$.PROPAGATE]&&Le(this,this[$.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,u)=>{Le(this,n.propertyEffects,c,o,u,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=Te(n),r=Te(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=Te(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=j(this,n,o);pn(this,a,o.path,r)}get(n,r){return j(r||this,n)}set(n,r,o){o?es(o,n,r):(!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=j(this,n,o),l=a.length,c=a.push(...r);return r.length&&Oe(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=j(this,n,r),a=!!o.length,l=o.pop();return a&&Oe(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=j(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&Oe(this,c,l.path,r,a.length,u),u}shift(n){let r={path:""},o=j(this,n,r),a=!!o.length,l=o.shift();return a&&Oe(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=j(this,n,o),l=a.unshift(...r);return r.length&&Oe(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=j(this,n,a),o=a.path}else Array.isArray(n)?o=Te(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,$.READ_ONLY),r&&(this["_set"+Tl(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,$.OBSERVE,{fn:ss,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,$.OBSERVE,{fn:ss,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=Bt(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");rs(this,o,$.OBSERVE,Qt,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,$.NOTIFY,{fn:tl,info:{eventName:Ot(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,$.REFLECT,{fn:sl,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=Bt(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=rs(this,a,$.COMPUTE,un,n,o);jt(this,ln)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,u=n.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:g,literal:m}=n[c];if(!m)if(p){const f=ft(d,r),y=cs(a,o,f?r:d);g={path:f?r:d,value:y,base:f?j(a,d):y}}else g=h?cs(a,o,d):a[d];if(Gt&&!this._overrideLegacyUndefined&&g===void 0&&n.length>1)return Ue;l[c]=g}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),$e.push(this);let o=super._stampTemplate(n,r);if($e.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,fl(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];ue(ue(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,r,o){let a=e._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=ls(l)||" ",Vt(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";Za.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=ls(c);return h&&d=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(h+=" "+n.getAttribute(a)),n.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&u==="value"&&n.setAttribute(u,""),n.removeAttribute(u),d==="property"&&(a=tn(a)),Vt(this,r,o,d,a,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=e._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";Wi&&(u||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(wa&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),Wi||(o.parentInfo.noted=!0));else{let p="{";for(let g in h){let m=[{mode:p,source:g,dependencies:[g],hostProp:!0}];Vt(this,r,o,"property","_host_"+g,m)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=as.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",g=-1;c=="{"&&(g=d.indexOf("::"))>0&&(p=d.substring(g+2),d=d.substring(0,g),h=!0);let m=Bt(d),f=[];if(m){let{args:y,methodName:b}=m;for(let x=0;x<y.length;x++){let E=y[x];E.literal||f.push(E)}let S=r.dynamicFns;(S&&S[b]||m.static)&&(f.push(b),m.dynamicFn=!0)}else f.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:m,dependencies:f,event:p}),a=as.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let u;return r.signature?u=Qt(n,o,a,l,r.signature):o!=r.source?u=j(n,r.source):c&&Zt(o)?u=j(n,o):u=n.__data[o],r.negate&&(u=!u),u}}return i}),$e=[];/**
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
*/function Al(t){const e={};for(let i in t){const s=t[i];e[i]=typeof s=="function"?{type:s}:s}return e}const Rl=he(t=>{const e=rn(t);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Al(a))}r.__ownProperties=o}return r.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=s(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,s(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const kl="3.5.1",us=window.ShadyCSS&&window.ShadyCSS.cssBuild,Nl=he(t=>{const e=Rl(Ll(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!us){const h=c.content.querySelectorAll("style"),p=qs(c),g=za(u),m=c.content.firstElementChild;for(let y=0;y<g.length;y++){let b=g[y];b.textContent=l._processStyleText(b.textContent,d),c.content.insertBefore(b,m)}let f=0;for(let y=0;y<p.length;y++){let b=p[y],S=h[f];S!==b?(b=b.cloneNode(!0),S.parentNode.insertBefore(b,S)):f++,b.textContent=l._processStyleText(b.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),xa&&us&&fa){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(g=>{p+=g.textContent,g.parentNode.removeChild(g)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!Wt||ma)&&(c=Be.import(l,"template"),Wt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return kl}static _finalizeClass(){e._finalizeClass.call(this);const c=s(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):_a||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)n(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=fi(c.url);else{const u=Be.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ga,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return pi(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Me(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=ue(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ba&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Me(this.importPath)),Me(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return ya&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return a});/**
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
*/const Il=Nl(HTMLElement),st=[],$t=()=>{L.isInitialized||L.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},zt=t=>t.reduce((e,i,s)=>(e.count===void 0&&typeof i=="number"&&(e.count=i),typeof i=="object"?{...e,...i}:(e[s]=i,e)),{}),K=function(t){$t();const e=zt([...arguments].slice(1));return delete e.count,L.t(t,e)},Ml=function(t,e){$t();const i=zt([...arguments].slice(2)),s=i.count;let n;delete i.count;const r=L.services.pluralResolver.getSuffix(L.language,s);return r?(i.defaultValue=e,n=t+r):(n=t,i.defaultValue=t),L.t(n,i)},Dl=function(t,e){$t();const i=zt([...arguments].slice(2));return i.context=t,delete i.count,L.t(e,i)},Fl=function(t,e,i){$t();const s=zt([...arguments].slice(3)),n=s.count,r=t?"_"+t:"";let o=e;delete s.count;const a=L.services.pluralResolver.getSuffix(L.language,n);return a?(s.defaultValue=i,o=e+r+a):(o=e,s.context=t),L.t(o,s)},jl=(t,e,i)=>{L.init({resources:{}}),L.addResourceBundle(t,e,i)};he(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(i=>i!==this.t)}_(){return K.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),st.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=st.indexOf(this);e>=0&&st.splice(e,1)}gettext(){return K.apply(null,this._filterT([...arguments]))}ngettext(){return Ml.apply(null,this._filterT([...arguments]))}pgettext(){return Dl.apply(null,this._filterT([...arguments]))}npgettext(){return Fl.apply(null,this._filterT([...arguments]))}});class Vl extends Il{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(jl(this.language,this.namespace,e),st.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),L.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Vl);const ds=()=>document.createComment(""),Bl=_t(J,new DocumentFragment).constructor;class Hl extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Hl);class Ul extends yt{_op;_outlet;_content;render(e,i=document.body){return v`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[i,s=document.body]){return this.updateOutlet(s,i),this.render(i,s)}updateOutlet(e,i){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const s=this._op??=new Bl(e.appendChild(ds()),e.appendChild(ds()));oe(s,this._content=i)}clearOutlet(){const e=this._op;e&&(bn(e),et(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Yl=se(Ul),Xl=`:host {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    font-family: var(--cz-font-body);
    font-size: var(--cz-text-sm);
    min-height: 250px;
    touch-action: pan-y pinch-zoom;
    container-type: inline-size;
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

/* Narrow container layout: wrap attachment dropdown to second row */
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
`,Kl=Symbol("memo"),Jl=t=>{let e=Kl,i;return function(s){if(e===s)return i;const n=t(s);return i=n,e=s,n}},Wl=(t,e)=>{const i=t.width/t.height,s=e.width/e.height;return i>s?{width:e.width,height:t.height*(e.width/t.width)}:{width:t.width*(e.height/t.height),height:e.height}},Gl=async(t,e)=>{const i={credentials:"include"},[{jsPDF:s},...n]=await Promise.all([ii(()=>import("./jspdf.es-C8lXQ5JU.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...t.map(async a=>{const l=await Promise.resolve(oi(a)),c=await fetch(l,i);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),r=n.filter(Boolean);if(r.length<1)return;const o=new s({compress:!0});return r.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:d}}=o,{width:h,height:p}=Wl(o.getImageProperties(l),{width:d.getWidth()-4,height:d.getHeight()-4});c>0&&o.addPage(),o.addImage(l,a.split(".").pop().toUpperCase(),2,2,h,p)}),o.output("blob")},fn=(t,e)=>{const i=URL.createObjectURL(t),s=document.body.appendChild(document.createElement("a"));s.href=i,s.download=`${e}.pdf`,s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)},Zl=async(t,e,i)=>{const s=await Gl(t);if(s)return fn(s,e),s},ql=async(t,e,i={})=>{const{httpHeaders:s,withCredentials:n=!0}=i,r=await fetch(t,{credentials:n?"include":"omit",headers:s});if(!r.ok)return;const o=await r.blob();return fn(o,e),o},Ql=t=>Object.entries(t).map(([e,i])=>e+"="+i).join(",");let ei=!1;const ec=({source:t,attachmentIndex:e,index:i,syncImageIndex:s,syncAttachmentIndex:n,title:r,loop:o,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",Ql({height:700,width:800}));_t(v`<style>
				html {
					background: #000;
				}
			</style>
			<cosmoz-image-viewer
				fullscreen
				.source="${t}"
				.currentAttachmentIndex=${e}
				.currentImageIndex=${i}
				@current-image-index-changed=${s}
				@current-attachment-index-changed=${n}
				show-nav
				?show-zoom=${a}
				show-close
				?loop=${o}
				@close=${()=>u.close()}
			></cosmoz-image-viewer>`,u.document.body),u._onClose?.(),l(),ei=!0,u._onClose=c,u.addEventListener("beforeunload",c),u.addEventListener("beforeunload",()=>ei=!1),u.document.title=r??K("Cosmoz image viewer")},tc=t=>new Promise(e=>{const i=setInterval(()=>{t()&&(e(),clearInterval(i))},100)}),ic=({images:t})=>{const e=window.open(void 0,"czimgviewerprint");_t(v`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${t.map(i=>v`<img src="${je(Promise.resolve(oi(i)))}" />`)}`,e.document.body),tc(()=>Array.from(e.document.querySelectorAll("img")).every(i=>i.src&&i.complete)).then(()=>e.print()).then(()=>e.close())},hs=[],sc=t=>{const e=I(()=>typeof t=="function"?Promise.resolve(t()):void 0,[t]),[i,s,n]=Is(e);return typeof t!="function"?{attachments:t??hs,loading:!1,error:void 0}:{attachments:i??hs,loading:n==="pending",error:s}},ze=[],nc=t=>{const[e,i]=Q({images:ze,loading:!1});return T(()=>{if(!t){i({images:ze,loading:!1});return}const s=t.pdf,n=t.images??ze;if(!s){i({images:n,loading:!1});return}i({images:ze,loading:!0});let r=!1;return ii(async()=>{const{loadPdfThunks:o}=await import("./pdf-loader-BSiQZefA.js");return{loadPdfThunks:o}},__vite__mapDeps([2,1]),import.meta.url).then(({loadPdfThunks:o})=>o(s,t.pdfOptions)).then(o=>{r||i({images:o,loading:!1})}).catch(()=>{r||i({images:ze,loading:!1})}),()=>{r=!0}},[t]),e},rc=50,oc=300,ac=(t,{onSwipeLeft:e,onSwipeRight:i,enabled:s})=>{const n=ie(null);T(()=>{if(!s)return;const r=a=>{if(a.touches.length!==1)return;const l=a.touches[0];n.current={x:l.clientX,y:l.clientY,t:Date.now()}},o=a=>{if(!n.current)return;const l=a.changedTouches[0],c=l.clientX-n.current.x,u=l.clientY-n.current.y,d=Date.now()-n.current.t;n.current=null,!(d>oc)&&(Math.abs(c)<rc||Math.abs(c)<Math.abs(u)||(c<0?e?.():i?.()))};return t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),()=>{t.removeEventListener("touchstart",r),t.removeEventListener("touchend",o)}},[t,e,i,s])},ti=[],lc=t=>t.source!=null?t.source:t.images!=null||t.pdf!=null?[{images:t.images??ti,pdf:t.pdf,pdfOptions:t.pdfOptions}]:ti,gn=t=>{if(!t.currentTarget.parentElement)return;t.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),t.currentTarget.setAttribute("hidden",!0)},cc=t=>t.detail.value==="error"&&gn(t),uc=({src$:t,showZoom:e,isZoomed:i,_onZoomChanged:s})=>{const n=we(t,()=>je(t));return[e?v`<haunted-pan-zoom
						.src=${n}
						?disabled=${!i}
						@zoom-changed=${s}
						@status-changed=${cc}
					></haunted-pan-zoom>`:v`<img
						.src=${n}
						style="width:100%"
						@error=${gn}
					/>`,we(t,()=>je(t.then(()=>J),v`<cz-spinner></cz-spinner>`))]},dc=t=>v`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${t.image}</div>
			</div>
			${uc(t)}
		</div>`,Ht=(t,e,i)=>Math.max(e,Math.min(i,t)),ps=(t,e,i,s)=>{const n=t.length;for(let r=1;r<=n;r++){const o=(e+r*i+n)%n;if(!s&&i>0&&o<=e||!s&&i<0&&o>=e)return;const a=t[o];if((a.images?.length??0)>0||a.pdf)return o}},hc=t=>{const{showZoom:e,title:i,loop:s,detachedShowZoom:n}=t,{attachments:r,loading:o,error:a}=sc(lc(t)),[l,c]=De("currentAttachmentIndex",0),u=r.length>0?Ht(l??0,0,r.length-1):0,d=r[u],h=d?[d]:ti,p=ie(Ze),g=P(A=>{const me=A.detail?.[0],_e=r.indexOf(me);_e>=0&&(p.current=Ze,c(_e))},[r]),m=d?.downloadFileName??"archive",{images:f,loading:y}=nc(d),[b,S]=Q(!1),x=A=>S(A.detail.value>1),E=I(()=>Jl(A=>Promise.resolve(oi(A))),[]),[z,_]=De("currentImageIndex",0),C=f.length>0?Ht(z??0,0,f.length-1):0,R=f[C],W=I(()=>R==null?{id:Math.random(),content:J,animation:Ze}:{id:R,render:()=>dc({src$:E(R),showZoom:e,isZoomed:b,_onZoomChanged:x,image:R}),animation:p.current},[R,e,b,x]),D=ie(!1),fe=!s&&u===0&&C<=0,G=!s&&u===r.length-1&&C>=f.length-1,V=P(()=>{if(p.current=Ze,C<f.length-1)return _(C+1);const A=ps(r,u,1,s);A!=null&&(c(A),_(0))},[C,f.length,r,u,s]),M=P(()=>{if(p.current=Ho,C>0)return _(C-1);const A=ps(r,u,-1,s);A!=null&&(D.current=!0,c(A))},[C,r,u,s]);ac(t,{onSwipeLeft:V,onSwipeRight:M,enabled:!b});const[N,ne]=Q(!1),[O,F]=Q(!1),X=()=>F(!0),ge=()=>F(!1),Tt=A=>ne(A.detail.value),Lt=A=>_(A.detail.value),At=A=>c(A.detail.value),Pe=P(()=>ec({source:r,attachmentIndex:u,index:C,syncImageIndex:Lt,syncAttachmentIndex:At,title:i,loop:s,detachedShowZoom:n,onDetach:()=>ne(!0),onClose:()=>ne(!1)}),[r,u,C,i,s]),Ke=P(()=>{ei&&Pe()},[Pe]);return T(()=>{if(f.length===0)return;if(D.current){D.current=!1,_(f.length-1);return}const A=z??0;A>=f.length&&_(Ht(A,0,f.length-1))},[f]),T(()=>{const A=l??0;r.length>0&&A>=r.length&&c(0)},[r]),Xn("detached",N,[N]),T(()=>{t.toggleAttribute("hidden",N)},[N]),ri({syncState:Ke},[Ke]),{host:t,isZoomed:b,currentSlide:W,nextImage:V,previousImage:M,first:fe,last:G,total:f.length,currentImageIndex:C,selectedImageNumber:C+1,onDownloadPdf:d?.pdf?()=>ql(d.pdf,m,d.pdfOptions):()=>Zl(f,m),isFullscreen:O,openFullscreen:X,closeFullscreen:ge,onPrintPdf:()=>ic({images:f}),detached:N,detach:Pe,syncDetachedState:Tt,setAttachmentIndex:c,setImageIndex:_,loading:o||y,error:a,attachments:r,selected:d,selectedIndex:u,value:h,onSelect:g,images:f}},pc=v`<svg
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
</svg>`,fc=v`<svg
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
</svg>`,gc=v`<svg
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
</svg>`,mc=v`<svg
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
</svg>`,_c=v`<svg
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
</svg>`,yc=v`<svg
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
</svg>`,bc=v`<svg
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
</svg>`,vc=v`<svg
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
</svg>`,wc=v`<svg
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
</svg>`,xc=t=>t?yc:bc,re=(t,e,i=1)=>t?e>=i:!1,Sc=t=>{const e=t.target.getRootNode().querySelector("haunted-pan-zoom");if(e.zoom>1)return e.zoomTo(1);e.zoomTo(1.5)},Pc=({host:t,isZoomed:e,currentSlide:i,nextImage:s,previousImage:n,total:r,first:o,last:a,currentImageIndex:l,selectedImageNumber:c,onDownloadPdf:u,isFullscreen:d,openFullscreen:h,closeFullscreen:p,onPrintPdf:g,detach:m,detached:f,syncDetachedState:y,setAttachmentIndex:b,setImageIndex:S,loading:x,error:E,attachments:z,selectedIndex:_,value:C,onSelect:R})=>v`
		<style>
			${Xl}
		</style>

		${f?J:v`
					${k(x,()=>v`<div class="loading">
								<cz-spinner></cz-spinner>
							</div>`)}
					${k(E,()=>v`<div class="error">
								<h2>${K("Failed to load attachments.")}</h2>
								<div class="desc">
									${E?.message??E}
								</div>
							</div>`)}
					${k(!x&&!E,()=>v`
							${k(re(t.showPageNumber,r),()=>v` <div class="counter">
										${c}/${r}
									</div>`)}

							<div class="actions">
								${k(re(t.showNav,r,2)||z.length>1,()=>v`
										<button
											class="nav"
											name="prev"
											?disabled=${o}
											@click=${n}
										>
											${_c}
										</button>
										<button
											class="nav"
											name="next"
											?disabled=${a}
											@click=${s}
										>
											${wc}
										</button>
									`)}
								${k(z.length>1,()=>v`<cosmoz-autocomplete
											text-property="title"
											limit="1"
											.min=${1}
											show-single
											preserve-order
											.source=${z}
											.value=${C}
											@value=${R}
										></cosmoz-autocomplete>`)}
								<span style="flex:auto"></span>
								${k(re(t.showZoom,r),()=>v`<button
											class="nav"
											@click="${Sc}"
											title="${K("Zoom image")}"
										>
											${xc(e)}
										</button>`)}
								${k(re(t.showDetach,r),()=>v`<button
											class="nav"
											@click=${m}
											title="${K("Detach image to separate window")}"
										>
											${mc}
										</button>`)}
								${k(re(!0,r),()=>v`<button
											class="nav"
											@click=${u}
											title="${K("Download images")}"
										>
											${fc}
										</button>`)}
								${k(re(!0,r),()=>v`<button
											class="nav"
											@click=${g}
											title="${K("Print images")}"
										>
											${vc}
										</button>`)}
								${k(re(t.showFullscreen,r),()=>v`<button
											class="nav"
											@click="${h}"
											title="${K("Fullscreen image")}"
										>
											${gc}
										</button>`)}
								${k(re(t.showClose,r),()=>v` <button
											class="nav"
											@click="${()=>t.dispatchEvent(new CustomEvent("close"))}"
											title="${K("Close fullscreen")}"
										>
											${pc}
										</button>`)}
							</div>

							${k(r===0,()=>v`<p>
										${K("No image loaded.")}
									</p>`)}
							<cosmoz-slider
								id="slider"
								.slide="${i}"
							></cosmoz-slider>
						`)}
				`}

		${k(d,()=>Yl(v`<cosmoz-image-viewer
					fullscreen
					.source=${z}
					.currentAttachmentIndex=${_}
					.currentImageIndex=${l}
					@current-attachment-index-changed=${Si(b)}
					@current-image-index-changed=${Si(S)}
					@detached-changed=${y}
					show-nav
					show-zoom
					show-close
					@close=${p}
					?show-detach=${t.showDetach}
					?loop=${t.loop}
				></cosmoz-image-viewer>`))}
	`,Cc=t=>Pc(hc(t));customElements.define("cosmoz-image-viewer",U(Cc,{observedAttributes:["source","download-file-name","pdf","show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"]}));
