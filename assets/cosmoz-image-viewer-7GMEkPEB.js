const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-CKFOE4aL.js","./preload-helper-PPVm8Dsz.js","./popout-entry-CK7vMIDf.js","./iframe-BhFMLENB.js","./iframe-CFLCX_cf.css","./pdf-loader-B_xPwwqY.js"])))=>i.map(i=>d[i]);
import{r as mn,D as _t,A as U,b,E as H,p as bn,n as os,M as rs,u as se,v as fe,h as Ae,j as as}from"./iframe-BhFMLENB.js";import{_ as We}from"./preload-helper-PPVm8Dsz.js";let Ne,vn=0;function It(t){Ne=t}function Tt(){Ne=null,vn=0}function ls(){return vn++}const ut=Symbol("haunted.phase"),Ie=Symbol("haunted.hook"),Nt=Symbol("haunted.update"),Mt=Symbol("haunted.commit"),re=Symbol("haunted.effects"),be=Symbol("haunted.layoutEffects"),bt="haunted.context";class cs{update;host;virtual;[Ie];[re];[be];constructor(e,n){this.update=e,this.host=n,this[Ie]=new Map,this[re]=[],this[be]=[]}run(e){It(this);let n=e();return Tt(),n}_runEffects(e){let n=this[e];It(this);for(let s of n)s.call(this);Tt()}runEffects(){this._runEffects(re)}runLayoutEffects(){this._runEffects(be)}teardown(){this[Ie].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const us=Promise.resolve().then.bind(Promise.resolve());function yn(){let t=[],e;function n(){e=null;let s=t;t=[];for(var i=0,o=s.length;i<o;i++)s[i]()}return function(s){t.push(s),e==null&&(e=us(n))}}const ds=yn(),Ft=yn();class hs{renderer;host;state;[ut];_updateQueued;_active;constructor(e,n){this.renderer=e,this.host=n,this.state=new cs(this.update.bind(this),n),this[ut]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(ds(()=>{let e=this.handlePhase(Nt);Ft(()=>{this.handlePhase(Mt,e),Ft(()=>{this.handlePhase(re)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[ut]=e,e){case Mt:this.commit(n),this.runEffects(be);return;case Nt:return this.render();case re:return this.runEffects(re)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Ze=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ps=t=>t?.map(e=>typeof e=="string"?Ze(e):e),fs=(t,...e)=>t.flatMap((n,s)=>[n,e[s]||""]).join(""),oe=fs,gs=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function ms(t){class e extends hs{frag;renderResult;constructor(i,o,r){super(i,r||o),this.frag=o}commit(i){this.renderResult=t(i,this.frag)}}function n(s,i,o){const r=(o||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=o||i||{},h=ps(s.styleSheets||u);class d extends r{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(s,this);else{const m=this.attachShadow({mode:"open",...c});h&&(m.adoptedStyleSheets=h),this._scheduler=new e(s,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,w,y){if(w===y)return;let z=y===""?!0:y;Reflect.set(this,gs(m),z)}}function p(f){let m=f,w=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){w&&m===y||(w=!0,m=y,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(r.prototype,{getPrototypeOf(f){return f},set(f,m,w,y){let z;return m in f?(z=Object.getOwnPropertyDescriptor(f,m),z&&z.set?(z.set.call(y,w),!0):(Reflect.set(f,m,w,y),!0)):(typeof m=="symbol"||m[0]==="_"?z={enumerable:!0,configurable:!0,writable:!0,value:w}:z=p(w),Object.defineProperty(y,m,z),z.set&&z.set.call(y,w),!0)}});return Object.setPrototypeOf(d.prototype,g),d}return n}class J{id;state;constructor(e,n){this.id=e,this.state=n}}function bs(t,...e){let n=ls(),s=Ne[Ie],i=s.get(n);return i||(i=new t(n,Ne,...e),s.set(n,i)),i.update(...e)}function q(t){return bs.bind(null,t)}function xn(t){return q(class extends J{callback;lastValues;values;_teardown;constructor(e,n,s,i){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function wn(t,e){t[re].push(e)}const $=xn(wn),vs=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,_n=q(class extends J{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,wn(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};vs(this.state.host).dispatchEvent(new CustomEvent(bt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:i}=e;this.value=s?i:t.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function ys(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(bt,this)}disconnectedCallback(){this.removeEventListener(bt,this)}handleEvent(s){const{detail:i}=s;i.Context===n&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let i of this.listeners)i(s)}get value(){return this._value}},Consumer:t(function({render:s}){const i=_n(n);return s(i)},{useShadowDOM:!1}),defaultValue:e};return n}}const A=q(class extends J{value;values;constructor(t,e,n,s){super(t,e),this.value=n(),this.values=s}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),x=(t,e)=>A(()=>t,e);function xs(t,e){t[be].push(e)}const Me=xn(xs),Q=q(class extends J{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),Sn=q(class extends J{reducer;currentState;constructor(t,e,n,s,i){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(s):s}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),ws=/([A-Z])/gu,le=q(class extends J{property;eventName;constructor(t,e,n,s){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ws,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),Dt=t=>e=>{e.preventDefault(),t(e.detail.value)};function _s(t){let e=t;return{get current(){return e},set current(n){e=n},get value(){return e},set value(n){e=n}}}function X(t){return A(()=>_s(t),[])}q(class extends J{update(){return this.state.host}});function Ss({render:t}){const e=ms(t),n=ys(e);return{component:e,createContext:n}}const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},te=t=>(...e)=>({_$litDirective$:t,values:e});let he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,s){this._$Ct=e,this._$AM=n,this._$Ci=s}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const ve=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(e,!1),ve(s,e);return!0},Fe=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},$n=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),zs(e)}};function $s(t){this._$AN!==void 0?(Fe(this),this._$AM=t,$n(this)):this._$AM=t}function Cs(t,e=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let o=n;o<s.length;o++)ve(s[o],!1),Fe(s[o]);else s!=null&&(ve(s,!1),Fe(s));else ve(this,t)}const zs=t=>{t.type==Z.CHILD&&(t._$AP??=Cs,t._$AQ??=$s)};class Ge extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,s){super._$AT(e,n,s),$n(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(ve(this,e),Fe(this))}setValue(e){if(mn(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:j,createContext:Es}=Ss({render:_t}),Je=(t,...e)=>t.flatMap((n,s)=>[n,e[s]??""]).join(""),St=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},dt=new WeakMap,pe=te(class extends Ge{render(t){return U}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),U}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=dt.get(e);n===void 0&&(n=new WeakMap,dt.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?dt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ls=({host:t,popoverRef:e,disabled:n,openOnHover:s,openOnFocus:i,open:o,close:r})=>{const a=X(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const h=e.current;s&&(t.matches(":hover")||h?.matches(":hover"))||t.matches(":focus-within")||h?.matches(":focus-within")||r()},100)},u=()=>{n||(l(),o())};return $(()=>{if(!(!s||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[s,n,t]),$(()=>{if(!(!i||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[i,n,t]),{scheduleClose:c,cancelClose:l}},ks=t=>{if(t.newState!=="open")return;const s=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const o=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},Os=oe`
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
`,Rs=t=>{const{placement:e="bottom span-right",disabled:n,openOnHover:s,openOnFocus:i}=t,o=X(),[r,a]=le("opened",!1),l=x(()=>{n||(a(!0),o.current?.showPopover())},[n]),c=x(()=>{a(!1),o.current?.hidePopover()},[]),u=x(()=>{if(n)return;o.current?.matches(":popover-open")?c():l()},[n]);$(()=>{const f=o.current;f&&(r?f.showPopover():f.hidePopover())},[r]),$(()=>{t.toggleAttribute("opened",!!r)},[r]);const{scheduleClose:h,cancelClose:d}=Ls({host:t,popoverRef:o,disabled:n,openOnHover:s,openOnFocus:i,open:l,close:c}),p=i?l:u,g=x(f=>{ks(f),a(f.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:f.newState,oldState:f.oldState,composed:!0}))},[]);return b`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${g}
			@select=${c}
			@focusout=${h}
			@focusin=${d}
			${pe(f=>f&&(o.current=f))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",j(Rs,{styleSheets:[Os],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const F=t=>t??U;const qe=te(class extends he{constructor(t){if(super(t),t.type!==Z.PROPERTY&&t.type!==Z.ATTRIBUTE&&t.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!mn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===U)return e;const n=t.element,s=t.name;if(t.type===Z.PROPERTY){if(e===n[s])return H}else if(t.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(s))return H}else if(t.type===Z.ATTRIBUTE&&n.getAttribute(s)===e+"")return H;return bn(t),e}});function R(t,e,n){return t?e(t):n?.(t)}const Cn=(t,{label:e,invalid:n,errorMessage:s})=>b`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${R(e,()=>b`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${R(n&&s,()=>b`<div class="error" part="error">${s}</div>`)}
	`,zn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Vt=Je`
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
`,En=Je`
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
		${Vt}
	}
	@container style(--focused: focused) {
		${Vt}
	}
`,Ps=t=>A(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]),$t=q(class extends J{values;constructor(t,e,n,s){super(t,e),Object.assign(e.host,n),this.values=s}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),Ce=q(class extends J{update(){return this.state.host}}),As=/([A-Z])/gu,vt=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(As,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},Is=(t,e,n=[e])=>{const s=Ce();$(()=>{vt(s,t,e)},n)},Ln=t=>{const e=X(void 0),n=x(l=>e.current=l,[]),s=t.shadowRoot,i=x(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),o=x(l=>vt(t,"value",l.target.value),[]),r=x(l=>vt(t,"focused",l.type==="focus"),[]),a=x(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return $t({validate:a},[a]),$(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return s.addEventListener("mousedown",l),()=>s.removeEventListener("mousedown",l)},[]),{onChange:i,onFocus:r,onInput:o,onRef:n}},Ts=({placeholder:t,noLabelFloat:e,label:n})=>(e?n:void 0)||t||" ",Ns=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...zn],Ms=t=>{const{type:e="text",pattern:n,allowedPattern:s,autocomplete:i,value:o,readonly:r,disabled:a,min:l,max:c,step:u,maxlength:h}=t,{onChange:d,onFocus:p,onInput:g,onRef:f}=Ln(t),m=Ps(s);return Cn(b`
			<input
				${pe(f)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${F(n)}
				autocomplete=${F(i)}
				placeholder=${Ts(t)}
				?readonly=${r}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${qe(o??"")}
				maxlength=${F(h)}
				@beforeinput=${m}
				@input=${g}
				@change=${d}
				@focus=${p}
				@blur=${p}
				min=${F(l)}
				max=${F(c)}
				step=${F(u)}
			/>
		`,t)};customElements.define("cosmoz-input",j(Ms,{observedAttributes:Ns,styleSheets:[Ze(En)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const jt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Fs=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",s=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=s,t.setAttribute("rows",n)}},Ds=t=>{const{value:e,maxRows:n}=t,s=A(()=>()=>t.shadowRoot.querySelector("#input"),[]);$(()=>Fs(s(),n),[n,s]),$(()=>jt(s()),[s,e]),$(()=>{const i=s(),o=new ResizeObserver(()=>requestAnimationFrame(()=>jt(i)));return o.observe(i),()=>o.unobserve(i)},[s])},Vs=["rows","placeholder",...zn],js=t=>{const{autocomplete:e,value:n,placeholder:s,readonly:i,disabled:o,rows:r,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:h,onRef:d}=Ln(t);return Ds(t),Cn(b`
			<textarea id="input" part="input"
				${pe(d)}
				autocomplete=${F(e)}
				placeholder=${s||" "}
				rows=${r??1} cols=${F(a)}
				?readonly=${i} ?aria-disabled=${o} ?disabled=${o}
				.value=${qe(n??"")} maxlength=${F(l)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",j(js,{observedAttributes:Vs,styleSheets:[Ze(En)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Bs=t=>{const{label:e,value:n,disabled:s,error:i}=t,o=x(r=>t.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return b`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${qe(!!n)}
			?disabled=${s}
			@change=${o}
		/>
		${R(e,()=>b`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${R(i,r=>b`<div class="failure">${r}</div>`)} `},Hs=oe`
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
`,Us=oe`
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
`;customElements.define("cosmoz-toggle",j(Bs,{styleSheets:[Us,Hs],observedAttributes:["disabled"]}));const _=t=>typeof t=="string",ge=()=>{let t,e;const n=new Promise((s,i)=>{t=s,e=i});return n.resolve=t,n.reject=e,n},Bt=t=>t==null?"":""+t,Ys=(t,e,n)=>{t.forEach(s=>{e[s]&&(n[s]=e[s])})},Xs=/###/g,Ht=t=>t&&t.indexOf("###")>-1?t.replace(Xs,"."):t,Ut=t=>!t||_(t),ye=(t,e,n)=>{const s=_(e)?e.split("."):e;let i=0;for(;i<s.length-1;){if(Ut(t))return{};const o=Ht(s[i]);!t[o]&&n&&(t[o]=new n),Object.prototype.hasOwnProperty.call(t,o)?t=t[o]:t={},++i}return Ut(t)?{}:{obj:t,k:Ht(s[i])}},Yt=(t,e,n)=>{const{obj:s,k:i}=ye(t,e,Object);if(s!==void 0||e.length===1){s[i]=n;return}let o=e[e.length-1],r=e.slice(0,e.length-1),a=ye(t,r,Object);for(;a.obj===void 0&&r.length;)o=`${r[r.length-1]}.${o}`,r=r.slice(0,r.length-1),a=ye(t,r,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=n},Ks=(t,e,n,s)=>{const{obj:i,k:o}=ye(t,e,Object);i[o]=i[o]||[],i[o].push(n)},De=(t,e)=>{const{obj:n,k:s}=ye(t,e);if(n)return n[s]},Ws=(t,e,n)=>{const s=De(t,n);return s!==void 0?s:De(e,n)},kn=(t,e,n)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in t?_(t[s])||t[s]instanceof String||_(e[s])||e[s]instanceof String?n&&(t[s]=e[s]):kn(t[s],e[s],n):t[s]=e[s]);return t},ce=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Zs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Gs=t=>_(t)?t.replace(/[&<>"'\/]/g,e=>Zs[e]):t;class Js{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const qs=[" ",",","?","!",";"],Qs=new Js(20),ei=(t,e,n)=>{e=e||"",n=n||"";const s=qs.filter(r=>e.indexOf(r)<0&&n.indexOf(r)<0);if(s.length===0)return!0;const i=Qs.getRegExp(`(${s.map(r=>r==="?"?"\\?":r).join("|")})`);let o=!i.test(t);if(!o){const r=t.indexOf(n);r>0&&!i.test(t.substring(0,r))&&(o=!0)}return o},yt=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const s=e.split(n);let i=t;for(let o=0;o<s.length;){if(!i||typeof i!="object")return;let r,a="";for(let l=o;l<s.length;++l)if(l!==o&&(a+=n),a+=s[l],r=i[a],r!==void 0){if(["string","number","boolean"].indexOf(typeof r)>-1&&l<s.length-1)continue;o+=l-o+1;break}i=r}return i},Ve=t=>t&&t.replace("_","-"),ti={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class je{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||ti,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,s,i){return i&&!this.debug?null:(_(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new je(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new je(this.logger,e)}}var G=new je;class Qe{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const i=this.observers[s].get(n)||0;this.observers[s].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a.apply(a,[e,...s])})}}class Xt extends Qe{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,r=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],s&&(Array.isArray(s)?a.push(...s):_(s)&&o?a.push(...s.split(o)):a.push(s)));const l=De(this.data,a);return!l&&!n&&!s&&e.indexOf(".")>-1&&(e=a[0],n=a[1],s=a.slice(2).join(".")),l||!r||!_(s)?l:yt(this.data&&this.data[e]&&this.data[e][n],s,o)}addResource(e,n,s,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,n];s&&(a=a.concat(r?s.split(r):s)),e.indexOf(".")>-1&&(a=e.split("."),i=n,n=a[1]),this.addNamespaces(n),Yt(this.data,a,i),o.silent||this.emit("added",e,n,s,i)}addResources(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in s)(_(s[o])||Array.isArray(s[o]))&&this.addResource(e,n,o,s[o],{silent:!0});i.silent||this.emit("added",e,n,s)}addResourceBundle(e,n,s,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),i=s,s=n,n=a[1]),this.addNamespaces(n);let l=De(this.data,a)||{};r.skipCopy||(s=JSON.parse(JSON.stringify(s))),i?kn(l,s,o):l={...l,...s},Yt(this.data,a,l),r.silent||this.emit("added",e,n,s)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var On={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,s,i){return t.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,n,s,i))}),e}};const Kt={};class Be extends Qe{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ys(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=G.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const s=this.resolve(e,n);return s&&s.res!==void 0}extractFromKey(e,n){let s=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const r=s&&e.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!ei(e,s,i);if(r&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:_(o)?[o]:o};const c=e.split(s);(s!==i||s===i&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(i)}return{key:e,namespaces:_(o)?[o]:o}}translate(e,n,s){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:r,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],c=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const S=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${S}${r}`,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${S}${r}`}return i?{res:r,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:r}const h=this.resolve(e,n);let d=h&&h.res;const p=h&&h.usedKey||r,g=h&&h.exactUsedKey||r,f=Object.prototype.toString.apply(d),m=["[object Number]","[object Function]","[object RegExp]"],w=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,z=!_(d)&&typeof d!="boolean"&&typeof d!="number";if(y&&d&&z&&m.indexOf(f)<0&&!(_(w)&&Array.isArray(d))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...n,ns:a}):`key '${r} (${this.language})' returned an object instead of string.`;return i?(h.res=S,h.usedParams=this.getUsedParamsDetails(n),h):S}if(o){const S=Array.isArray(d),k=S?[]:{},L=S?g:p;for(const E in d)if(Object.prototype.hasOwnProperty.call(d,E)){const v=`${L}${o}${E}`;k[E]=this.translate(v,{...n,joinArrays:!1,ns:a}),k[E]===v&&(k[E]=d[E])}d=k}}else if(y&&_(w)&&Array.isArray(d))d=d.join(w),d&&(d=this.extendTranslation(d,e,n,s));else{let S=!1,k=!1;const L=n.count!==void 0&&!_(n.count),E=Be.hasDefaultValue(n),v=L?this.pluralResolver.getSuffix(c,n.count,n):"",P=n.ordinal&&L?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",O=L&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),I=O&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${v}`]||n[`defaultValue${P}`]||n.defaultValue;!this.isValidLookup(d)&&E&&(S=!0,d=I),this.isValidLookup(d)||(k=!0,d=r);const ee=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&k?void 0:d,N=E&&I!==d&&this.options.updateMissing;if(k||S||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,r,N?I:d),o){const T=this.resolve(r,{...n,keySeparator:!1});T&&T.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Y=[];const V=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&V&&V[0])for(let T=0;T<V.length;T++)Y.push(V[T]);else this.options.saveMissingTo==="all"?Y=this.languageUtils.toResolveHierarchy(n.lng||this.language):Y.push(n.lng||this.language);const B=(T,C,M)=>{const W=E&&M!==d?M:ee;this.options.missingKeyHandler?this.options.missingKeyHandler(T,l,C,W,N,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(T,l,C,W,N,n),this.emit("missingKey",T,l,C,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?Y.forEach(T=>{const C=this.pluralResolver.getSuffixes(T,n);O&&n[`defaultValue${this.options.pluralSeparator}zero`]&&C.indexOf(`${this.options.pluralSeparator}zero`)<0&&C.push(`${this.options.pluralSeparator}zero`),C.forEach(M=>{B([T],r+M,n[`defaultValue${M}`]||I)})}):B(Y,r,I))}d=this.extendTranslation(d,e,n,h,s),k&&d===r&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${r}`),(k||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${r}`:r,S?d:void 0):d=this.options.parseMissingKeyHandler(d))}return i?(h.res=d,h.usedParams=this.getUsedParamsDetails(n),h):d}extendTranslation(e,n,s,i,o){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=_(e)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const d=e.match(this.interpolator.nestingRegexp);u=d&&d.length}let h=s.replace&&!_(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,s.lng||this.language||i.usedLng,s),c){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;u<p&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(s.lng=this.language||i.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return o&&o[0]===p[0]&&!s.context?(r.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):r.translate(...p,n)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=_(a)?[a]:a;return e!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(e=On.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,i,o,r,a;return _(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,n),u=c.key;i=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=n.count!==void 0&&!_(n.count),p=d&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),g=n.context!==void 0&&(_(n.context)||typeof n.context=="number")&&n.context!=="",f=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(m=>{this.isValidLookup(s)||(a=m,!Kt[`${f[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Kt[`${f[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(w=>{if(this.isValidLookup(s))return;r=w;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,w,m,n);else{let S;d&&(S=this.pluralResolver.getSuffix(w,n.count,n));const k=`${this.options.pluralSeparator}zero`,L=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(y.push(u+S),n.ordinal&&S.indexOf(L)===0&&y.push(u+S.replace(L,this.options.pluralSeparator)),p&&y.push(u+k)),g){const E=`${u}${this.options.contextSeparator}${n.context}`;y.push(E),d&&(y.push(E+S),n.ordinal&&S.indexOf(L)===0&&y.push(E+S.replace(L,this.options.pluralSeparator)),p&&y.push(E+k))}}let z;for(;z=y.pop();)this.isValidLookup(s)||(o=z,s=this.getResource(w,m,z,n))}))})}),{res:s,usedKey:i,exactUsedKey:o,usedLng:r,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,s,i):this.resourceStore.getResource(e,n,s,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!_(e.replace);let i=s?e.replace:e;if(s&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!s){i={...i};for(const o of n)delete i[o]}return i}static hasDefaultValue(e){const n="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&n===s.substring(0,n.length)&&e[s]!==void 0)return!0;return!1}}const ht=t=>t.charAt(0).toUpperCase()+t.slice(1);class Wt{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=G.create("languageUtils")}getScriptPartFromCode(e){if(e=Ve(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=Ve(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(_(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let s=e.split("-");return this.options.lowerCaseLng?s=s.map(i=>i.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),n.indexOf(s[1].toLowerCase())>-1&&(s[1]=ht(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),n.indexOf(s[1].toLowerCase())>-1&&(s[1]=ht(s[1].toLowerCase())),n.indexOf(s[2].toLowerCase())>-1&&(s[2]=ht(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(s=>{if(n)return;const i=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(s=>{if(n)return;const i=this.getLanguagePartFromCode(s);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),_(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let s=e[n];return s||(s=e[this.getScriptPartFromCode(n)]),s||(s=e[this.formatLanguageCode(n)]),s||(s=e[this.getLanguagePartFromCode(n)]),s||(s=e.default),s||[]}toResolveHierarchy(e,n){const s=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],o=r=>{r&&(this.isSupportedCode(r)?i.push(r):this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))};return _(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):_(e)&&o(this.formatLanguageCode(e)),s.forEach(r=>{i.indexOf(r)<0&&o(this.formatLanguageCode(r))}),i}}let ni=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],si={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const ii=["v1","v2","v3"],oi=["v4"],Zt={zero:0,one:1,two:2,few:3,many:4,other:5},ri=()=>{const t={};return ni.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:si[e.fc]}})}),t};class ai{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=G.create("pluralResolver"),(!this.options.compatibilityJSON||oi.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ri(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=Ve(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:s,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let r;try{r=new Intl.PluralRules(s,{type:i})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(l,n)}return this.pluralRulesCache[o]=r,r}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,n);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,s).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,n);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((i,o)=>Zt[i]-Zt[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):s.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const s=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[s];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!ii.includes(this.options.compatibilityJSON)}}const Gt=function(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Ws(t,e,n);return!o&&i&&_(n)&&(o=yt(t,n,s),o===void 0&&(o=yt(e,n,s))),o},pt=t=>t.replace(/\$/g,"$$$$");class li{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=G.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:s,useRawValueToEscape:i,prefix:o,prefixEscaped:r,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:f,nestingOptionsSeparator:m,maxReplaces:w,alwaysFormat:y}=e.interpolation;this.escape=n!==void 0?n:Gs,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?ce(o):r||"{{",this.suffix=a?ce(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?ce(d):p||ce("$t("),this.nestingSuffix=g?ce(g):f||ce(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=w||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,s)=>n&&n.source===s?(n.lastIndex=0,n):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,s,i){let o,r,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const w=Gt(n,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(w,void 0,s,{...i,...n,interpolationkey:p}):w}const g=p.split(this.formatSeparator),f=g.shift().trim(),m=g.join(this.formatSeparator).trim();return this.format(Gt(n,l,f,this.options.keySeparator,this.options.ignoreJSONStructure),m,s,{...i,...n,interpolationkey:f})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>pt(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?pt(this.escape(p)):pt(p)}].forEach(p=>{for(a=0;o=p.regex.exec(e);){const g=o[1].trim();if(r=c(g),r===void 0)if(typeof u=="function"){const m=u(e,o,i);r=_(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,g))r="";else if(h){r=o[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),r="";else!_(r)&&!this.useRawValueToEscape&&(r=Bt(r));const f=p.safeValue(r);if(e=e.replace(o[0],f),h?(p.regex.lastIndex+=r.length,p.regex.lastIndex-=o[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,r;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,r);const p=d.match(/'/g),g=d.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(d=d.replace(/'/g,'"'));try{r=JSON.parse(d),c&&(r={...c,...r})}catch(f){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,f),`${l}${u}${d}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];r={...s},r=r.replace&&!_(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=u.shift(),l=u,c=!0}if(o=n(a.call(this,i[1].trim(),r),r),o&&i[0]===e&&!_(o))return o;_(o)||(o=Bt(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),o=""),c&&(o=l.reduce((u,h)=>this.format(u,h,s.lng,{...s,interpolationkey:i[1].trim()}),o.trim())),e=e.replace(i[0],o),this.regexp.lastIndex=0}return e}}const ci=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const s=t.split("(");e=s[0].toLowerCase().trim();const i=s[1].substring(0,s[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(r=>{if(r){const[a,...l]=r.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();n[u]||(n[u]=c),c==="false"&&(n[u]=!1),c==="true"&&(n[u]=!0),isNaN(c)||(n[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},ue=t=>{const e={};return(n,s,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const r=s+JSON.stringify(o);let a=e[r];return a||(a=t(Ve(s),i),e[r]=a),a(n)}};class ui{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=G.create("formatter"),this.options=e,this.formats={number:ue((n,s)=>{const i=new Intl.NumberFormat(n,{...s});return o=>i.format(o)}),currency:ue((n,s)=>{const i=new Intl.NumberFormat(n,{...s,style:"currency"});return o=>i.format(o)}),datetime:ue((n,s)=>{const i=new Intl.DateTimeFormat(n,{...s});return o=>i.format(o)}),relativetime:ue((n,s)=>{const i=new Intl.RelativeTimeFormat(n,{...s});return o=>i.format(o,s.range||"day")}),list:ue((n,s)=>{const i=new Intl.ListFormat(n,{...s});return o=>i.format(o)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=ue(n)}format(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=n.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:u}=ci(l);if(this.formats[c]){let h=a;try{const d=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},p=d.locale||d.lng||i.locale||i.lng||s;h=this.formats[c](a,p,{...u,...i,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const di=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class hi extends Qe{constructor(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=s,this.languageUtils=s.languageUtils,this.options=i,this.logger=G.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,i.backend,i)}queueLoad(e,n,s,i){const o={},r={},a={},l={};return e.forEach(c=>{let u=!0;n.forEach(h=>{const d=`${c}|${h}`;!s.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?r[d]===void 0&&(r[d]=!0):(this.state[d]=1,u=!1,r[d]===void 0&&(r[d]=!0),o[d]===void 0&&(o[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(a[c]=!0)}),(Object.keys(o).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(r),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,s){const i=e.split("|"),o=i[0],r=i[1];n&&this.emit("failedLoading",o,r,n),!n&&s&&this.store.addResourceBundle(o,r,s,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&s&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Ks(l.loaded,[o],r),di(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{a[c][h]===void 0&&(a[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:s,tried:i,wait:o,callback:r});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,s,i+1,o*2,r)},o);return}r(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,n,a)}prepareLoading(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();_(e)&&(e=this.languageUtils.toResolveHierarchy(e)),_(n)&&(n=[n]);const o=this.queueLoad(e,n,s,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(r=>{this.loadOne(r)})}load(e,n,s){this.prepareLoading(e,n,{},s)}reload(e,n,s){this.prepareLoading(e,n,{reload:!0},s)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=e.split("|"),i=s[0],o=s[1];this.read(i,o,"read",void 0,void 0,(r,a)=>{r&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,r),!r&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(e,r,a)})}saveMissing(e,n,s,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${s}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...r,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,n,s,i,l):u=c(e,n,s,i),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else c(e,n,s,i,a,l)}!e||!e[0]||this.store.addResource(e[0],n,s,i)}}}const Jt=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),_(t[1])&&(e.defaultValue=t[1]),_(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(s=>{e[s]=n[s]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),qt=t=>(_(t.ns)&&(t.ns=[t.ns]),_(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),_(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Oe=()=>{},pi=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class _e extends Qe{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=qt(e),this.services={},this.logger=G,this.modules={external:[]},pi(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(s=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(_(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Jt();this.options={...i,...this.options,...qt(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const o=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?G.init(o(this.modules.logger),this.options):G.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=ui);const h=new Wt(this.options);this.store=new Xt(this.options.resources,this.options);const d=this.services;d.logger=G,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new ai(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(d.formatter=o(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new li(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new hi(o(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var g=arguments.length,f=new Array(g>1?g-1:0),m=1;m<g;m++)f[m-1]=arguments[m];e.emit(p,...f)}),this.modules.languageDetector&&(d.languageDetector=o(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=o(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Be(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,f=new Array(g>1?g-1:0),m=1;m<g;m++)f[m-1]=arguments[m];e.emit(p,...f)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Oe),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=ge(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),s(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe;const i=_(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const o=[],r=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};i?r(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>r(l)),this.options.preload&&this.options.preload.forEach(a=>r(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(e,n,s){const i=ge();return typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),s||(s=Oe),this.services.backendConnector.reload(e,n,o=>{i.resolve(),s(o)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&On.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const s=this.languages[n];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(e,n){var s=this;this.isLanguageChangingTo=e;const i=ge();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},r=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return s.t(...arguments)}),n&&n(l,function(){return s.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=_(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{r(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,n,s){var i=this;const o=function(r,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=i.options.overloadTranslationOptionHandler([r,a].concat(u))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||o.keyPrefix);const d=i.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(r)?p=r.map(g=>`${l.keyPrefix}${d}${g}`):p=l.keyPrefix?`${l.keyPrefix}${d}${r}`:r,i.t(p,l)};return _(e)?o.lng=e:o.lngs=e,o.ns=n,o.keyPrefix=s,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const r=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,r);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||r(s,e)&&(!i||r(o,e)))}loadNamespaces(e,n){const s=ge();return this.options.ns?(_(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{s.resolve(),n&&n(i)}),s):(n&&n(),Promise.resolve())}loadLanguages(e,n){const s=ge();_(e)&&(e=[e]);const i=this.options.preload||[],o=e.filter(r=>i.indexOf(r)<0&&this.services.languageUtils.isSupportedCode(r));return o.length?(this.options.preload=i.concat(o),this.loadResources(r=>{s.resolve(),n&&n(r)}),s):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Wt(Jt());return n.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new _e(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},o=new _e(i);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},s&&(o.store=new Xt(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Be(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];o.emit(a,...c)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const D=_e.createInstance();D.createInstance=_e.createInstance;D.createInstance;D.dir;D.init;D.loadResources;D.reloadResources;D.use;D.changeLanguage;D.getFixedT;const K=D.t;D.exists;D.setDefaultNamespace;D.hasLoadedNamespace;D.loadNamespaces;D.loadLanguages;const fi={},de=te(class extends he{constructor(){super(...arguments),this.ot=fi}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((s,i)=>s===this.ot[i]))return H}else if(this.ot===e)return H;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});class gi{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let mi=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const Qt=t=>!os(t)&&typeof t.then=="function",en=1073741823;let bi=class extends Ge{constructor(){super(...arguments),this._$Cwt=en,this._$Cbt=[],this._$CK=new gi(this),this._$CX=new mi}render(...e){return e.find(n=>!Qt(n))??H}update(e,n){const s=this._$Cbt;let i=s.length;this._$Cbt=n;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<n.length&&!(a>this._$Cwt);a++){const l=n[a];if(!Qt(l))return this._$Cwt=a,l;a<i&&l===s[a]||(this._$Cwt=en,i=0,Promise.resolve(l).then(async c=>{for(;r.get();)await r.get();const u=o.deref();if(u!==void 0){const h=u._$Cbt.indexOf(l);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}}))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Se=te(bi);const tn=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},Rn=te(class extends he{constructor(t){if(super(t),t.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let s;n===void 0?n=e:e!==void 0&&(s=e);const i=[],o=[];let r=0;for(const a of t)i[r]=s?s(a,r):r,o[r]=n(a,r),r++;return{values:o,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,s]){const i=rs(t),{values:o,keys:r}=this.dt(e,n,s);if(!Array.isArray(i))return this.ut=r,o;const a=this.ut??=[],l=[];let c,u,h=0,d=i.length-1,p=0,g=o.length-1;for(;h<=d&&p<=g;)if(i[h]===null)h++;else if(i[d]===null)d--;else if(a[h]===r[p])l[p]=se(i[h],o[p]),h++,p++;else if(a[d]===r[g])l[g]=se(i[d],o[g]),d--,g--;else if(a[h]===r[g])l[g]=se(i[h],o[g]),fe(t,l[g+1],i[h]),h++,g--;else if(a[d]===r[p])l[p]=se(i[d],o[p]),fe(t,i[h],i[d]),d--,p++;else if(c===void 0&&(c=tn(r,p,g),u=tn(a,h,d)),c.has(a[h]))if(c.has(a[d])){const f=u.get(r[p]),m=f!==void 0?i[f]:null;if(m===null){const w=fe(t,i[h]);se(w,o[p]),l[p]=w}else l[p]=se(m,o[p]),fe(t,i[h],m),i[f]=null;p++}else Ae(i[d]),d--;else Ae(i[h]),h++;for(;p<=g;){const f=fe(t,l[g+1]);se(f,o[p]),l[p++]=f}for(;h<=d;){const f=i[h++];f!==null&&Ae(f)}return this.ut=r,bn(t,l),H}});class et extends Event{constructor(e){super(et.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}et.eventName="rangeChanged";class tt extends Event{constructor(e){super(tt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}tt.eventName="visibilityChanged";class nt extends Event{constructor(){super(nt.eventName,{bubbles:!1})}}nt.eventName="unpinned";class vi{constructor(e){this._element=null;const n=e??window;this._node=n,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class yi extends vi{constructor(e,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,n){const s=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;this._scrollTo(s)}scrollBy(e,n){const s=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,n=null,s=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=n,this._end=s):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:n,left:s}=e;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,n,s){return this._scrollTo(e,n,s),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:n}=this;let{top:s,left:i}=this._destination;s=Math.min(s||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const o=Math.abs(s-e),r=Math.abs(i-n);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let nn=typeof window<"u"?window.ResizeObserver:void 0;const xt=Symbol("virtualizerRef"),Re="virtualizer-sizer";let sn;class xi{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const n=e.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new nn(()=>this._hostElementSizeChanged()),this._childrenRO=new nn(this._childrenSizeChanged.bind(this))}_initHostElement(e){const n=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),n[xt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Si(this._hostElement,e),this._scrollerController=new yi(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let n=e.querySelector(`[${Re}]`);n||(n=document.createElement("div"),n.setAttribute(Re,""),e.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(Re,""),this._sizer=n}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const n=e.type||sn;if(typeof n=="function"&&this._layout instanceof n){const s={...e};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(e){let n,s;if(typeof e.type=="function"){s=e.type;const i={...e};delete i.type,n=i}else n=e;s===void 0&&(sn=s=(await We(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(i=>this._handleLayoutMessage(i),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),n=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:i}}return null}_measureChildren(){const e={},n=this._children,s=this._measureChildOverride||this._measureChild;for(let i=0;i<n.length;i++){const o=n[i],r=this._first+i;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[r]=s.call(this,o,this._items[r]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:n,height:s}=e.getBoundingClientRect();return Object.assign({width:n,height:s},wi(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:n,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new nt)}get _children(){const e=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(Re)||e.push(n),n=n.nextElementSibling;return e}_updateView(){const e=this._hostElement,n=this._scrollerController?.element,s=this._layout;if(e&&n&&s){let i,o,r,a;const l=e.getBoundingClientRect();i=0,o=0,r=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(w=>w.getBoundingClientRect());c.unshift(l);for(const w of c)i=Math.max(i,w.top),o=Math.max(o,w.left),r=Math.min(r,w.bottom),a=Math.min(a,w.right);const u=n.getBoundingClientRect(),h={left:l.left-u.left,top:l.top-u.top},d={width:n.scrollWidth,height:n.scrollHeight},p=i-l.top+e.scrollTop,g=o-l.left+e.scrollLeft,f=Math.max(0,r-i),m=Math.max(0,a-o);s.viewportSize={width:m,height:f},s.viewportScroll={top:p,left:g},s.totalScrollSize=d,s.offsetWithinScroller=h}}_sizeHostElement(e){const s=e&&e.width!==null?Math.min(82e5,e.width):0,i=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${i}px)`;else{const o=this._hostElement.style;o.minWidth=s?`${s}px`:"100%",o.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:n,left:s,width:i,height:o,xOffset:r,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${n}px)`,i!==void 0&&(c.style.width=i+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:n,_last:s,_firstVisible:i,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:n}=this._scrollerController,{top:s,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-s,left:n-i})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(e),{behavior:s}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:n}=this._scrollIntoViewTarget||{};n&&e?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new et({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new tt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,n)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const n of e)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function wi(t){const e=window.getComputedStyle(t);return{marginTop:Pe(e.marginTop),marginRight:Pe(e.marginRight),marginBottom:Pe(e.marginBottom),marginLeft:Pe(e.marginLeft)}}function Pe(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function on(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function _i(t,e=!1){const n=[];let s=e?t:on(t);for(;s!==null;)n.push(s),s=on(s);return n}function Si(t,e=!1){let n=!1;return _i(t,e).filter(s=>{if(n)return!1;const i=getComputedStyle(s);return n=i.position==="fixed",i.overflow!=="visible"})}const $i=t=>t,Ci=(t,e)=>b`${e}: ${JSON.stringify(t,null,2)}`;class zi extends Ge{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,s)=>Ci(n,s+this._first),this._keyFunction=(n,s)=>$i(n,s+this._first),this._items=[],e.type!==Z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const n=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)n.push(this._items[s]);return Rn(n,this._keyFunction,this._renderItem)}update(e,[n]){this._setFunctions(n);const s=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(e,n):this._initialize(e,n),s?H:this.render()}async _updateVirtualizerConfig(e,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const i=e.parentNode;this._makeVirtualizer(i,n)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:n,keyFunction:s}=e;n&&(this._renderItem=(i,o)=>n(i,o+this._first)),s&&(this._keyFunction=(i,o)=>s(i,o+this._first))}_makeVirtualizer(e,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:i,items:o}=n;this._virtualizer=new xi({hostElement:e,layout:s,scroller:i}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,n){const s=e.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(s,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Ei=te(zi),Li=(t,e)=>{if(!t||!e)return;const n=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(s=>n.includes(s)?[]:[[s,void 0]]))};class ki extends he{_props;render(e){return H}update(e,[n]){return this._props!==n&&Object.assign(e.element,Li(this._props,n),this._props=n),H}}const Oi=te(ki);function Ri(t){return()=>t}const Pi=Ri(),Pn=Pi,He=t=>t,ze=(t,...e)=>typeof t=="function"?t(...e):t,Ai=t=>{const e=Ce(),n=A(()=>new CSSStyleSheet,[]);$(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,n]},[]),$(()=>{n.replaceSync(t)},[t])};function Te(t){return t?e=>e?.[t]:He}const Ii=t=>{const e=Te(t);return n=>typeof n=="string"?n:e(n)?.toString()||""},Ti=t=>e=>{const n={};for(const s in e)t.includes(s)&&(n[s]=e[s]);return n},Ni="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Mi=oe`
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
		background: url("${Ni}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Fi=({index:t,itemHeight:e,auto:n})=>oe`
	${R(!n,()=>oe`
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
`,Di=t=>{const e=t==="auto",[n,s]=Q(e?40:t);return[n,i=>e?s(i):void 0]},An=Es(()=>Pn);customElements.define("cosmoz-keybinding-provider",An.Provider);const Ct=t=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,t),[e,...Object.values(t)])},xe=(t,e)=>{const n=_n(An),s=Ct(t);$(()=>n(s),e)},Vi=Symbol("listbox.navigate.up"),ji=Symbol("listbox.navigate.down"),Bi=Symbol("listbox.select"),Hi=({onUp:t,onDown:e,onEnter:n})=>{const s=Ce();xe({activity:Vi,callback:t,element:()=>s},[]),xe({activity:ji,callback:e,element:()=>s},[]),xe({activity:Bi,callback:n,element:()=>s},[])},Ui=({items:t,onSelect:e,defaultIndex:n=0})=>{const[s,i]=Q({index:n}),{index:o}=s,{length:r}=t;return $(()=>{i({index:s.index<0?n:Math.min(s.index,t.length-1),scroll:!0})},[t,n]),Hi({onUp:x(()=>i(a=>({index:a.index>0?a.index-1:r-1,scroll:!0})),[r]),onDown:x(()=>i(a=>({index:a.index<r-1?a.index+1:0,scroll:!0})),[r]),onEnter:x(()=>o>-1&&o<r&&e?.(t[o],o),[o,t,e])}),{position:s,highlight:x(a=>i({index:a}),[]),select:x(a=>e?.(a),[e])}},Yi=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function ie(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:Yi(t)?Array.from(t):[t]}const ft=(t,e=He)=>n=>{const s=ie(t).map(e);return ie(n).filter(i=>!s.includes(e(i)))},Xi=(t,e)=>e?n=>n!=null&&ie(t).find(s=>s[e]===n[e]):n=>n!=null&&ie(t).includes(n),Ki=(t,e)=>{if(!e||!t)return t;const n=t.toLowerCase().indexOf(e.toLowerCase());if(n<0)return t;const s=n+e.length;return[t.slice(0,n),b`<mark>${t.slice(n,s)}</mark>`,t.slice(s)]},Wi=(t=He)=>(e,n,{highlight:s,select:i,textual:o=He,query:r,isSelected:a})=>{const l=o(e),c=Ki(l,r),u=t(c,e,n);return b`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${n}
				@mouseenter=${()=>s(n)}
				@click=${()=>i(e)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Zi=({itemRenderer:t=Wi(),...e})=>{const n=Ct(e);return x((s,i)=>t(s,i,n),[n,t])},Gi=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Ji=({value:t,valueProperty:e,items:n,onSelect:s,defaultIndex:i,query:o,textual:r,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=A(()=>Xi(t,e),[t,e]),h=A(()=>n.slice(),[n,u]),{position:d,highlight:p,select:g}=Ui({items:h,onSelect:s,defaultIndex:isNaN(i)?void 0:Number(i)}),[f,m]=Di(l);return{position:d,items:h,height:Math.min(c,h.length)*f,highlight:p,select:g,itemHeight:f,setItemHeight:m,renderItem:Zi({itemRenderer:a,items:h,position:d,highlight:p,select:g,textual:r,query:o,isSelected:u})}},rn=Pn,qi=t=>{const e=X(void 0),{position:n,items:s,renderItem:i,height:o,itemHeight:r,setItemHeight:a}=Ji(t);return $(()=>{const l=e.current?.[xt];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},rn)},[s]),$(()=>{if(!n.scroll)return;const l=e.current?.[xt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(n.index)?.scrollIntoView({block:"nearest"}),rn);return}l.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Ai(Fi({...n,itemHeight:r,auto:t.itemHeight==="auto"})),b`<div
			class="items"
			style="min-height: ${o}px"
			${pe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Ei({items:s,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",j(qi,{styleSheets:[St(Mi)]}));const Qi=({multi:t,...e},n)=>b`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Oi(Ti(Gi)(e))}
		>${n}</cosmoz-listbox
	>`,eo=Je`
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
`,to=b`
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
`,no=({onClear:t,disabled:e})=>b`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${n=>n.preventDefault()}
	>
		<slot></slot>
	</div>
	${R(t&&!e,()=>b`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${t}
			>
				${to}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",j(no,{observedAttributes:["disabled"],styleSheets:[St(eo)]}));const so=({content:t,onClear:e,disabled:n,hidden:s,className:i="chip",slot:o})=>b`<cosmoz-autocomplete-chip
		class=${F(i)}
		slot=${F(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${s}
		.onClear=${e}
		title=${F(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,io=({value:t,min:e=0,onDeselect:n,textual:s,disabled:i,chipRenderer:o=so})=>[...t.filter(Boolean).map(r=>o({item:r,content:s(r),onClear:t.length>e&&(()=>n(r)),disabled:i,slot:"control"})),o({item:null,content:b`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],oo=oe`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",j(()=>U,{styleSheets:[oo]}));const In=Je`
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
`,zt=(t,e=()=>({}))=>{const n={type:t,toString(){return t}};return Object.assign((...i)=>Object.assign(e(...i),n),n)},an=t=>t.type||t.toString(),ln=t=>Array.isArray(t)?t:[t],ro=(t,e)=>{const n=ln(e),s=(n.every(Array.isArray)?n:[n]).map(([i,o])=>({actions:ln(i).map(an),handle:o}));return(i=t,o)=>{const r=s.find(a=>a.actions.includes(an(o)));return r?r.handle(i,o):i}},ae={pending:"pending",rejected:"rejected",resolved:"resolved"},Tn={error:void 0,result:void 0,state:ae.pending},Nn=zt(ae.pending),Mn=zt(ae.resolved,t=>({result:t})),Fn=zt(ae.rejected,t=>({error:t})),ao=ro(Tn,[[Nn,()=>({error:void 0,result:void 0,state:ae.pending})],[Mn,(t,{result:e})=>({error:void 0,result:e,state:ae.resolved})],[Fn,(t,{error:e})=>({error:e,result:void 0,state:ae.rejected})]]),Dn=t=>{const[{error:e,result:n,state:s},i]=Sn(ao,Tn);return $(()=>{if(!t)return;let o=!1;return i(Nn()),t.then(r=>!o&&i(Mn(r)),r=>!o&&i(Fn(r))),()=>{o=!0}},[t]),[n,e,s]},lo=Symbol("autocomplete.deselect.last"),co=Symbol("autocomplete.search.when.selected"),cn=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),uo=(t,e,n)=>{if(!e)return t;const s=cn(e.toLowerCase()),i=[];for(const o of t){const a=cn(n(o).toLowerCase()).indexOf(s);a<0||i.push({item:o,index:a})}return i.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},ho=t=>t===!1||t==null?[]:t,po=(t,e,n)=>t.dispatchEvent(new CustomEvent(e,{detail:n})),un=[],fo=t=>(...e)=>{let n;const s=()=>{n&&cancelAnimationFrame(n)};return s(),n=requestAnimationFrame(()=>{n=void 0,t(...e)}),s},go=(t,e,n)=>x(s=>{e?.(s),t.dispatchEvent(new CustomEvent(n,{detail:s}))},[e]),mo=({value:t,text:e,onChange:n,onText:s,onSelect:i,limit:o,min:r,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:h,keepQuery:d,preserveOrder:p,defaultIndex:g,externalSearch:f,disabled:m,lazyOpen:w})=>{const y=o!=null?Number(o):void 0,z=r!=null?Number(r):void 0,S=A(()=>(c??Ii)(l),[c,l]),k=Ce(),[L,E]=le("opened",!1),v=!e,P=A(()=>e?.trim(),[e]),O=go(k,s,"text"),I=x(C=>{n?.(C,()=>E(!1)),po(k,"value",C)},[n]),[ne,ee]=Q([]),N=!!(w&&!P),Y=A(()=>N?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:P,active:L}):a).then(ho),[a,L,P,N]),V=A(()=>ie(t),[t]);$(()=>Y.then(ee),[Y]),xe({activity:lo,callback:()=>{const C=ie(V);C.length>(z??0)&&I(C.slice(0,-1))},check:()=>!m&&v&&k.matches(":focus-within"),element:()=>k},[]),xe({activity:co,callback:C=>{const M=ie(V),W=y===1;M.length>0&&W&&C.key.length===1&&I(M.slice(0,-1))},allowDefault:!0,check:()=>!m&&v&&k.matches(":focus-within"),element:()=>k},[y]),$(()=>{!L&&!d&&O("")},[L,d]),$(()=>{k.toggleAttribute("opened",!!L)},[L]);const B=Ct({onText:O,onChange:I,value:V,limit:y,min:z,keepQuery:d,keepOpened:h,setOpened:E,onSelect:i,valueProperty:u}),[,,T]=Dn(Y);return{limit:y,opened:L,query:P,textual:S,value:V,source$:Y,loading:T==="pending",items:A(()=>{if(!L||N)return un;const C=p?ne:[...V,...ft(V,Te(u))(ne)];return f?C:uo(C,P,S)},[ne,L,P,S,v,V,p,u,f,N]),onToggle:x(C=>{m||E(C.newState==="open")},[m]),onText:x(C=>{m||(O(C.target.value),E(!0))},[m,O,e,E]),onSelect:x(C=>{if(m)return;B.onSelect?.(C,B);const{onChange:M,onText:W,limit:ot,min:Le,value:rt,keepQuery:at,keepOpened:lt,setOpened:ns,valueProperty:ss}=B;at||W(""),lt||ns(!1);const ke=ie(rt),ct=Te(ss),At=ke.some(is=>ct(is)===ct(C));At&&ke.length===Le||M((At?ft(C,ct)(ke):[...ke,C]).slice(-ot))},[m,B]),onDeselect:x(C=>{m||B.onChange(ft(C,Te(B.valueProperty))(B.value))},[m,B]),defaultIndex:P!==void 0&&P?.length>0?0:g}},bo=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),n=t.shadowRoot.querySelector(".badge");n.hidden=!0;for(const a of e)a.hidden=!1;const i=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<e.length;o++){const l=e[o].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const r=e.length-o;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;o<e.length;o++)e[o].hidden=!0},vo=({value:t,opened:e,wrap:n,limit:s})=>{const i=Ce(),o=!(n||s===1),r=A(()=>fo(()=>bo(i)),[]),[a,l]=Q(0);Me(()=>{if(!o)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{l(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),Me(()=>o?r():void 0,[o,a,e,t])},yo=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),xo=({opened:t,isSingle:e,showSingle:n,hasResultsOrQuery:s})=>!t||e&&!n?!1:s,wo=t=>{const{opened:e,invalid:n,errorMessage:s,label:i,placeholder:o,disabled:r,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:h,onToggle:d,onDeselect:p,value:g,limit:f,min:m,showSingle:w,items:y,source$:z,loading:S,chipRenderer:k}=t,L=f===1,E=L&&g?.[0]!=null,v=S||y.length>0||u!=null&&u.length>0;return b`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${r}
			.opened=${e}
			@dropdown-toggle=${d}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${i}
				.placeholder=${E?void 0:o}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${E}
				?disabled=${r}
				?invalid=${de([z,n],()=>Se(z.then(()=>n,()=>!0),n))}
				.errorMessage=${de([z,s],()=>Se(z.then(()=>s,P=>P.message),s))}
				.value=${qe(u)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${yo}
				?data-one=${L}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${io({value:g,min:m,onDeselect:p,textual:c,disabled:r,chipRenderer:k})}
			</cosmoz-input>

			${R(xo({opened:e,isSingle:E,showSingle:w,hasResultsOrQuery:v}),()=>Qi({...t,items:y,multi:!L},R(S,()=>b`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>R(u!=null&&u.length>0&&y.length===0,()=>b`<slot name="no-result">
											<p class="no-result">${K("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Et=t=>{const e={...t,...mo(t)};return vo(e),wo(e)},Lt=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],_o=t=>{const{onChange:e,onText:n,...s}=t,[i,o]=le("value");return $(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Et({...s,value:i,onChange:x((r,...a)=>{o(r),e?.(r,...a)},[e]),onText:x(r=>{t.text=r,n?.(r)},[n])})},Vn=[St(In)],jn={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",j(Et,{observedAttributes:Lt,styleSheets:Vn,shadowRootInit:jn}));customElements.define("cosmoz-autocomplete",j(_o,{observedAttributes:Lt,styleSheets:Vn,shadowRootInit:jn}));const So="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",$o=oe`
	.chip[data-state='excluded'] {
		background: var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54));
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(content) {
		color: var(--cosmoz-autocomplete-excluded-chip-color, #fff);
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(clear) {
		background-color: var(
			--cosmoz-autocomplete-excluded-chip-clear-bg-color,
			#fff
		);
		stroke: var(
			--cosmoz-autocomplete-excluded-chip-clear-stroke,
			var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54))
		);
	}

	cosmoz-listbox::part(excluded)::before {
		border-color: var(
			--cosmoz-autocomplete-excluded-bg-color,
			rgb(244, 67, 54)
		);
		/* prettier-ignore */
		background: url("${So}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,dn=t=>({item:t,excluded:!1}),Bn=t=>t.item,Co=t=>{const[e,n]=le(t),s=x(i=>n(o=>{const r=ze(i,o?.map(Bn));if(!r)return;if(!o)return r.map(dn);const a=o.reduce((c,u)=>r.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),l=r.filter(c=>!o.some(u=>u.item===c)).map(dn);return[...a,...l]}),[]);return{value:e,setExcludingValue:s,setValue:n}},zo=(t,e)=>t?.some(n=>n.item===e&&n.excluded),Hn=(t,e)=>e&&zo(t,e)?"excluded":U,Eo=t=>(e,n,{highlight:s,select:i,textual:o,isSelected:r})=>{const a=o(e);return b`<div
				class="item"
				role="option"
				part="option ${Hn(t,e)}"
				?aria-selected=${r(e)}
				data-index=${n}
				@mouseenter=${()=>s(n)}
				@click=${()=>i(e)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},Lo=(t,e)=>({item:n,content:s,disabled:i,hidden:o,className:r="chip",slot:a})=>b`<cosmoz-autocomplete-chip
			class=${F(r)}
			slot=${F(a)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${Hn(t,n)}
			?disabled=${i}
			?hidden=${o}
			.onClear=${()=>e(n)}
			title=${F(typeof s=="string"?s:void 0)}
		>
			${s}
		</cosmoz-autocomplete-chip>`,ko=t=>{const{value:e,setValue:n,setExcludingValue:s}=Co("value"),[i,o]=le("text"),r=x(a=>n(l=>l?.filter(c=>c.item!==a)),[]);return Et({...t,value:A(()=>e?.map(Bn),[e]),onChange:x(a=>{s(a)},[]),text:i,onText:x(a=>{o(a)},[]),itemRenderer:A(()=>Eo(e),[e]),chipRenderer:A(()=>Lo(e,r),[e,r])})},Oo={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",j(ko,{observedAttributes:Lt,styleSheets:[In,$o],shadowRootInit:Oo}));const Un="important",Ro=" !"+Un,Yn=te(class extends he{constructor(t){if(super(t),t.type!==Z.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return s==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?n.removeProperty(s):n[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(Ro);s.includes("-")||o?n.setProperty(s,o?i.slice(0,-11):i,o?Un:""):n[s]=i}}return H}});class Po extends Promise{constructor(e){const n={};super((s,i)=>Object.assign(n,{resolve:s,reject:i})),Object.assign(this,n),e?.(n.resolve,n.reject)}resolve=()=>{}}const Xn={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Ao=t=>{const{slide:e}=t,[n,s]=Q([]);return Me(()=>{Object.assign(t.style,Xn.host)},[]),$(()=>{if(e==null)return;const i={animationEnd$:new Po,...e};s((o=[])=>{const r=o.findIndex(({id:a,out:l})=>a===i.id&&l!==!0);return r!==-1?[...o.slice(0,r),i,...o.slice(r+1,o.length)]:[...o,i]})},[e]),Me(async()=>{if(n.filter(l=>!l.out).length<2){const l=n[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const i=n[n.length-1],o=n[n.length-2],r=i.el,a=o.el;o.out=!0,r&&a&&await i.animation?.(r,a),s((l=[])=>l.filter(c=>c!==o))},[n]),{slides:n}},Io=t=>b`<div
		${pe(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${Yn(Xn.slide)}
	>
		${de([t],()=>t.content??t.render?.(t))}
	</div>`,To=({slides:t})=>de([t],()=>Rn(t,({id:e})=>e,Io)),No=t=>To(Ao(t));customElements.define("cosmoz-slider",j(No,{useShadowDOM:!1}));const Ue=(t,e)=>{const n=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([n.finished,s.finished])},Mo=(t,e)=>{const n=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([n.finished,s.finished])},Fo=()=>b`<style>
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
</style>`;customElements.define("cz-spinner",j(Fo));const Do=q(class extends J{constructor(t,e){super(t,e),this.dispatchEvent=(...n)=>{e.host.dispatchEvent.apply(e.host,n)}}update(){return this.dispatchEvent}}),Ye=(t,e,n)=>Math.max(e,Math.min(n,t)),Xe=Ye,kt=(t,e,n,s)=>n/s<t/e?n/t:s/e,Vo=(t,e,n,s)=>n/s>t/e?n/t:s/e,Kn=(t,e,n,s,i)=>{const o=kt(t,e,n,s),r=o*i,a=t*r,l=e*r,c=a<n?(-n+a)/2:(n-a)/2,u=a<n?(n-a)/2:(-n+a)/2,h=l<s?(-s+l)/2:(s-l)/2,d=l<s?(s-l)/2:(-s+l)/2;return{x:[c,u],y:[h,d]}},Wn="empty",st="loading",Zn="loaded",Ot="error",Ee="idle",it="panning",we="pinching",jo=1.1,Bo=t=>jo/t,Ho=t=>2*t,Rt=(t,e,n,s)=>{const i=kt(t,e,n,s),o=Vo(t*i,e*i,n,s);return Math.max(Bo(i),Ho(o))},Uo={status:Wn,interaction:Ee,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},Gn=(t,e)=>{const n={...t};return delete n[e],n},hn=t=>{const e=Object.keys(t);if(e.length<2)return null;const n=t[e[0]],s=t[e[1]];return{midX:(n.x+s.x)/2,midY:(n.y+s.y)/2,distance:Math.hypot(s.x-n.x,s.y-n.y)}},$e=t=>{const e=Kn(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:Xe(t.panX,e.x[0],e.x[1]),panY:Xe(t.panY,e.y[0],e.y[1])}},wt=(t,e,n,s=2)=>t<e?e-(e-t)/s:t>n?n+(t-n)/s:t,Jn=t=>{const e=Kn(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:wt(t.panX,e.x[0],e.x[1]),panY:wt(t.panY,e.y[0],e.y[1])}},qn=(t,{dPanX:e=0,dPanY:n=0,scaleDiff:s=1,originX:i=0,originY:o=0})=>{const r=t.zoom*s;return{...t,zoom:r,panX:e+i+(t.panX-i)*s,panY:n+o+(t.panY-o)*s}},Pt=(t,e,n)=>{const s=Rt(t.iw,t.ih,t.cw,t.ch),i=Xe(t.zoom,1,s);if(i===t.zoom)return t;const o=i/t.zoom;return{...t,zoom:i,panX:e+(t.panX-e)*o,panY:n+(t.panY-n)*o}},Yo=(t,e)=>e.type==="load"?{...t,status:st}:t,Xo=(t,e)=>{switch(e.type){case"loaded":return{...t,status:Zn,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...t,status:Ot};default:return t}},Ko=(t,e)=>e.type==="load"?{...t,status:st}:t,Wo=(t,e)=>e.type==="pointerdown"?{...t,interaction:it,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}}:t,Zo=(t,e)=>{switch(e.type){case"pointerdown":{const n={...t.pointers,[e.id]:{x:e.x,y:e.y}};return{...t,interaction:we,pointers:n}}case"pointermove":{const n=t.pointers[e.id];if(!n)return t;const s=e.x-n.x,i=e.y-n.y;return Jn({...t,panX:t.panX+s,panY:t.panY+i,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}})}case"pointerup":{const n=Gn(t.pointers,e.id);if(Object.keys(n).length===0){const s=Pt({...t,pointers:n},e.settleOriginX??0,e.settleOriginY??0);return $e({...s,interaction:Ee})}return{...t,pointers:n}}default:return t}},Go=(t,e)=>{switch(e.type){case"pointermove":{if(!t.pointers[e.id])return t;const s=hn(t.pointers),i={...t.pointers,[e.id]:{x:e.x,y:e.y}},o=hn(i);if(!s||!o)return{...t,pointers:i};const r=s.distance?o.distance/s.distance:1,a=o.midX-s.midX,l=o.midY-s.midY,c=e.containerOriginX+(o.midX-e.x),u=e.containerOriginY+(o.midY-e.y),h=qn({...t,pointers:i},{dPanX:a,dPanY:l,scaleDiff:r,originX:c,originY:u}),d=Rt(t.iw,t.ih,t.cw,t.ch),p=wt(h.zoom,1,d),g=p/h.zoom,f=c+(h.panX-c)*g,m=u+(h.panY-u)*g;return Jn({...h,zoom:p,panX:f,panY:m})}case"pointerup":{const n=Gn(t.pointers,e.id);if(Object.keys(n).length<=1){const s=$e(Pt({...t,pointers:n},e.settleOriginX??0,e.settleOriginY??0));return Object.keys(n).length===1?{...s,interaction:it}:{...s,interaction:Ee}}return{...t,pointers:n}}default:return t}},Jo=(t,e)=>{switch(t.interaction){case Ee:return Wo(t,e);case it:return Zo(t,e);case we:return Go(t,e);default:return t}},qo=(t,e)=>{switch(e.type){case"load":return{...t,status:st,interaction:Ee,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const n=Rt(t.iw,t.ih,t.cw,t.ch),s=Xe(e.zoom,1,n);return $e({...t,zoom:s})}case"wheel":{const{delta:n,originX:s,originY:i}=e,o=1+n,r=qn(t,{scaleDiff:o,originX:s,originY:i});return $e(Pt(r,s,i))}case"pointerdown":case"pointermove":case"pointerup":return Jo(t,e);default:return t}},Qo=(t,e)=>{if(e.type==="resize")return $e({...t,cw:e.rect.width,ch:e.rect.height});switch(t.status){case Wn:return Yo(t,e);case st:return Xo(t,e);case Zn:return qo(t,e);case Ot:return Ko(t,e);default:return t}},er=(t,e)=>{"ResizeObserver"in window&&$(()=>{if(e==null)return;const n=new ResizeObserver(([{contentRect:s}])=>t(s));return n.observe(e),t(e.getBoundingClientRect()),()=>n.unobserve(e)},[t,e])},gt=(t,e=.08,n=.001)=>{const[s,i]=Q(null);return $(()=>{if(s==null){i(t);return}if(e>=1){i(t);return}const o=s;window.requestAnimationFrame(()=>{const r=t-o;i(Math.abs(r)<n?t:s+r*e)})},[s,i,t,e,n]),s},tr=(t,e,n,s)=>{const{iw:i=100,ih:o=100,cw:r=100,ch:a=100}=t,l=kt(i,o,r,a),c=l*e;return{transform:["translate(-50%, -50%)",`translate(${n}px, ${s}px)`,`scale(${c})`].join(" ")}},mt=(t,e,n)=>{const s=n.current?.getBoundingClientRect();return s?{originX:t-s.left-s.width/2,originY:e-s.top-s.height/2}:{originX:0,originY:0}},nr=(t=.08)=>{const[e,n]=Sn(Qo,Uo),s=X(),i=X(null),o=X(null),r=x(()=>n({type:"load"}),[n]),a=x(v=>n({type:"loaded",dimensions:v}),[n]),l=x(()=>n({type:"error"}),[n]),c=x(v=>n({type:"zoom",zoom:v}),[n]),u=x(v=>v&&n({type:"resize",rect:v}),[n]),h=x(()=>u(s.current&&s.current.getBoundingClientRect()),[u]);er(u,s.current);const d=x(v=>a({iw:v.target.naturalWidth,ih:v.target.naturalHeight}),[a]),p=x(v=>{if(v.pointerType==="mouse"||v.pointerType==="pen"){const P=v.composedPath()[0],O=s.current;(P===O||P===O?.querySelector(".transform-group"))&&(s.current?.setPointerCapture(v.pointerId),n({type:"pointerdown",id:v.pointerId,x:v.clientX,y:v.clientY}));return}if(i.current){clearTimeout(o.current),o.current=null,s.current?.setPointerCapture(i.current.id),n({type:"pointerdown",id:i.current.id,x:i.current.x,y:i.current.y}),i.current=null,s.current?.setPointerCapture(v.pointerId),n({type:"pointerdown",id:v.pointerId,x:v.clientX,y:v.clientY});return}i.current={id:v.pointerId,x:v.clientX,y:v.clientY},o.current=setTimeout(()=>{o.current=null,i.current=null},200)},[n]),g=x(v=>{if(o.current!=null&&i.current?.id===v.pointerId){const I=i.current;if(Math.hypot(v.clientX-I.x,v.clientY-I.y)>10)clearTimeout(o.current),o.current=null,s.current?.setPointerCapture(I.id),n({type:"pointerdown",id:I.id,x:I.x,y:I.y}),i.current=null;else return}const{originX:P,originY:O}=mt(v.clientX,v.clientY,s);n({type:"pointermove",id:v.pointerId,x:v.clientX,y:v.clientY,containerOriginX:P,containerOriginY:O})},[n]),f=X({x:0,y:0});$(()=>{if(e.interaction!==we)return;const v=Object.keys(e.pointers);if(v.length>=2){const P=e.pointers[v[0]],O=e.pointers[v[1]],I=(P.x+O.x)/2,ne=(P.y+O.y)/2,{originX:ee,originY:N}=mt(I,ne,s);f.current={x:ee,y:N}}},[e.pointers,e.interaction]);const m=x(v=>{if(i.current?.id===v.pointerId){clearTimeout(o.current),o.current=null,i.current=null;return}try{s.current?.releasePointerCapture(v.pointerId)}catch{}n({type:"pointerup",id:v.pointerId,settleOriginX:f.current.x,settleOriginY:f.current.y})},[n]),w=x(v=>{v.preventDefault();const{originX:P,originY:O}=mt(v.clientX,v.clientY,s);n({type:"wheel",delta:-Math.sign(v.deltaY)*.8,originX:P,originY:O})},[n]),y=e.interaction===we,z=e.interaction===it||e.interaction===we;let S=t;y?S=.8:z&&(S=.9);const k=gt(e.zoom,S),L=gt(e.panX,S),E=gt(e.panY,S);return{...e,load:r,loaded:a,error:l,zoomTo:c,resize:h,onPointerDown:p,onPointerMove:g,onPointerUp:m,onImageLoad:d,onWheel:w,containerRef:s,style:tr(e,k,L,E)}},sr=({src:t,disabled:e,zoomStiffness:n})=>{const{status:s,zoom:i,load:o,error:r,zoomTo:a,resize:l,onPointerDown:c,onPointerMove:u,onPointerUp:h,onImageLoad:d,onWheel:p,style:g,containerRef:f}=nr(n);if($(o,[t]),$t({zoomTo:a,resize:l,zoom:i},[a,l,i]),!t)return U;const m=Do();return $(()=>m(new CustomEvent("zoom-changed",{detail:{value:i}})),[m,i]),$(()=>m(new CustomEvent("status-changed",{detail:{value:s}})),[m,s]),b`
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
			class="container ${s}"
			style="pointer-events: ${e?"none":"all"}"
			@wheel=${p}
			@pointerdown=${c}
			@pointermove=${u}
			@pointerup=${h}
			@pointercancel=${h}
			${pe(w=>f.current=w)}
		>
			${!t||s===Ot?U:b`
						<div class="transform-group" style=${Yn(g)}>
							<img
								src=${t}
								draggable="false"
								@load=${d}
								@error=${r}
							/>
							<slot></slot>
						</div>
					`}
		</div>
	`};class ir extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",j(sr,{observedAttributes:["src","disabled","zoom-stiffness"],baseElement:ir}));const or=Ze`:host {
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
}`,rr=(t,e)=>{const n=t.width/t.height,s=e.width/e.height;return n>s?{width:e.width,height:t.height*(e.width/t.width)}:{width:t.width*(e.height/t.height),height:e.height}},ar=async(t,e)=>{const n={credentials:"include"},[{jsPDF:s},...i]=await Promise.all([We(()=>import("./jspdf.es-CKFOE4aL.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...t.map(async a=>{const l=await Promise.resolve(ze(a)),c=await fetch(l,n);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),o=i.filter(Boolean);if(o.length<1)return;const r=new s({compress:!0});return o.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:h}}=r,{width:d,height:p}=rr(r.getImageProperties(l),{width:h.getWidth()-4,height:h.getHeight()-4});c>0&&r.addPage(),r.addImage(l,a.split(".").pop().toUpperCase(),2,2,d,p)}),r.output("blob")},Qn=(t,e)=>{const n=URL.createObjectURL(t),s=document.body.appendChild(document.createElement("a"));s.href=n,s.download=`${e}.pdf`,s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)},lr=async(t,e,n)=>{const s=await ar(t);if(s)return Qn(s,e),s},cr=async(t,e,n={})=>{const{httpHeaders:s,withCredentials:i=!0}=n,o=await fetch(t,{credentials:i?"include":"omit",headers:s});if(!o.ok)return;const r=await o.blob();return Qn(r,e),r};let ur;const dr=async()=>ur??=(await We(async()=>{const{url:t}=await import("./popout-entry-CK7vMIDf.js");return{url:t}},__vite__mapDeps([2,1,3,4]),import.meta.url)).url,hr=t=>Object.entries(t).map(([e,n])=>e+"="+n).join(",");let Ke=null;const es=()=>Ke!=null&&!Ke.closed,pr=(t,{entryUrl:e,state:n,sync:s,title:i,onDetach:o,onClose:r})=>{t.__popoutState=n,t.__popoutSync=s,t.__popoutReady=o,t._onClose=r;const a=t.document;a.open(),a.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${i??K("Cosmoz image viewer")}</title>
</head>
<body>
	<script type="module" src="${e}"><\/script>
</body>
</html>`),a.close(),Ke=t,t.addEventListener("beforeunload",()=>t._onClose?.()),t.addEventListener("beforeunload",()=>Ke=null)},fr=async({source:t,fileIndex:e,index:n,syncImageIndex:s,syncFileIndex:i,title:o,loop:r,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",hr({height:700,width:800})),h=globalThis["pdfjs-dist/build/pdf"]?.GlobalWorkerOptions?.workerSrc??globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc,d={source:t,fileIndex:e,index:n,detachedShowZoom:a,loop:r,title:o,pdfWorkerSrc:h},p={imageIndex:f=>s({detail:{value:f}}),fileIndex:f=>i({detail:{value:f}})};if(es()&&u.__popoutUpdate){u._onClose?.(),u.__popoutUpdate(d),u.__popoutSync=p,u._onClose=c,l();return}const g=await dr();pr(u,{entryUrl:g,state:d,sync:p,title:o,onDetach:l,onClose:c})},gr=t=>new Promise(e=>{const n=setInterval(()=>{t()&&(e(),clearInterval(n))},100)}),mr=({images:t})=>{const e=window.open(void 0,"czimgviewerprint");_t(b`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${t.map(n=>b`<img src="${Se(Promise.resolve(ze(n)))}" />`)}`,e.document.body),gr(()=>Array.from(e.document.querySelectorAll("img")).every(n=>n.src&&n.complete)).then(()=>e.print()).then(()=>e.close())},br=({files:t,safeFileIndex:e,imageIndex:n,title:s,loop:i,detachedShowZoom:o,setImageIndex:r,setFileIndex:a})=>{const[l,c]=Q(!1),u=x(p=>r(p.detail.value),[r]),h=x(p=>a(p.detail.value),[a]),d=x(()=>fr({source:t,fileIndex:e,index:n,syncImageIndex:u,syncFileIndex:h,title:s,loop:i,detachedShowZoom:o,onDetach:()=>c(!0),onClose:()=>c(!1)}),[t,e,n,s,i,o]);return{detached:l,detach:d,syncDetachedState:p=>c(p.detail.value)}},pn=[],vr=({source:t,images:e,pdf:n,pdfOptions:s})=>t??(e!=null||n!=null?[{images:e??pn,pdf:n,pdfOptions:s}]:pn),yr=[],xr=t=>{const e=A(()=>Promise.resolve(ze(t)),[t]),[n,s,i]=Dn(e);return{files:n??yr,loading:i==="pending",error:s}},wr=[],_r=t=>{const e=A(()=>vr({source:t.source,images:t.images,pdf:t.pdf,pdfOptions:t.pdfOptions}),[t.source,t.images,t.pdf,t.pdfOptions]),{files:n,loading:s,error:i}=xr(e),[o,r]=le("currentFileIndex",0),a=n.length>0?Ye(o??0,0,n.length-1):0,l=n[a],c=l?[l]:wr,u=X(Ue),h=x(d=>{const p=d.detail?.[0],g=n.indexOf(p);g>=0&&(u.current=Ue,r(g))},[n]);return $(()=>{const d=o??0;n.length>0&&d>=n.length&&r(0)},[n]),{files:n,loading:s,error:i,fileIndex:o,setFileIndex:r,safeFileIndex:a,selectedFile:l,value:c,onSelect:h,directionRef:u}},Sr=()=>{const[t,e]=Q(!1);return{isFullscreen:t,openFullscreen:()=>e(!0),closeFullscreen:()=>e(!1)}},fn=(t,e,n,s)=>{const i=t.length;let o=1;for(;o<=i;){const r=(e+o*n+i)%i;if(!s&&(n>0&&r<=e||n<0&&r>=e))return null;const a=t[r];if(a.images?.length||a.pdf)return r;o++}return null},me=[],$r=t=>{const[e,n]=Q({images:me,loading:!1,error:void 0});return $(()=>{if(!t){n({images:me,loading:!1,error:void 0});return}const s=t.pdf,i=t.images??me;if(!s){n({images:i,loading:!1,error:void 0});return}n({images:me,loading:!0,error:void 0});let o=!1;return We(async()=>{const{loadPdfThunks:r}=await import("./pdf-loader-B_xPwwqY.js");return{loadPdfThunks:r}},__vite__mapDeps([5,1]),import.meta.url).then(({loadPdfThunks:r})=>r(s,t.pdfOptions)).then(r=>{o||n({images:r,loading:!1,error:void 0})}).catch(r=>{o||n({images:me,loading:!1,error:r})}),()=>{o=!0}},[t]),e},Cr=({files:t,safeFileIndex:e,loop:n,setFileIndex:s,directionRef:i})=>{const[o,r]=le("currentImageIndex",0),a=t[e],{images:l,loading:c,error:u}=$r(a),h=l.length>0?Ye(o??0,0,l.length-1):0,d=l[h],p=!n&&e===0&&h<=0,g=!n&&e===t.length-1&&h>=l.length-1,f=X(!1),m=x(()=>{if(i.current=Ue,h<l.length-1)return r(h+1);const y=fn(t,e,1,n);y!=null&&(s(y),r(0))},[h,l.length,t,e,n]),w=x(()=>{if(i.current=Mo,h>0)return r(h-1);const y=fn(t,e,-1,n);y!=null&&(y===e?r(l.length-1):(f.current=!0,s(y)))},[h,t,e,n,l.length]);return $(()=>{if(l.length===0)return;if(f.current){f.current=!1,r(l.length-1);return}const y=o??0;y>=l.length&&r(Ye(y,0,l.length-1))},[l]),{imageIndex:o,setImageIndex:r,nextImage:m,previousImage:w,first:p,last:g,index:h,image:d,images:l,contentLoading:c,contentError:u,downloadFileName:a?.downloadFileName??"archive"}},zr=Symbol("memo"),Er=t=>{let e=zr,n;return function(s){if(e===s)return n;const i=t(s);return n=i,e=s,i}},ts=t=>{if(!t.currentTarget.parentElement)return;t.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),t.currentTarget.setAttribute("hidden",!0)},Lr=t=>t.detail.value==="error"&&ts(t),kr=({src$:t,showZoom:e,isZoomed:n,index:s})=>{const i=de(t,()=>Se(t));return[e?b`<haunted-pan-zoom
					.src=${i}
					?disabled=${!n}
					@status-changed=${Lr}
				>
					${s!=null?b`<slot name="overlay-page-${s}"></slot>`:U}
				</haunted-pan-zoom>`:b`<div class="image-container">
					<img .src=${i} @error=${ts} />
					${s!=null?b`<slot name="overlay-page-${s}"></slot>`:U}
				</div>`,de(t,()=>Se(t.then(()=>U),b`<cz-spinner></cz-spinner>`))]},Or=t=>b`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${t.image}</div>
		</div>
		${kr(t)}
	</div>`,Rr=({image:t,showZoom:e,isZoomed:n,directionRef:s,index:i})=>{const o=A(()=>Er(r=>Promise.resolve(ze(r))),[]);return A(()=>t==null?{id:Math.random(),content:U,animation:Ue}:{id:t,render:()=>Or({src$:o(t),showZoom:e,isZoomed:n,image:t,index:i}),animation:s.current},[t,e,n,i])},Pr=50,Ar=300,Ir=(t,{onSwipeLeft:e,onSwipeRight:n,enabled:s})=>{const i=X(null);$(()=>{if(!s)return;const o=a=>{if(a.touches.length!==1)return;const l=a.touches[0];i.current={x:l.clientX,y:l.clientY,t:Date.now()}},r=a=>{if(!i.current)return;const l=a.changedTouches[0],c=l.clientX-i.current.x,u=l.clientY-i.current.y,h=Date.now()-i.current.t;i.current=null,!(h>Ar)&&(Math.abs(c)<Pr||Math.abs(c)<Math.abs(u)||(c<0?e?.():n?.()))};return t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchend",r,{passive:!0}),()=>{t.removeEventListener("touchstart",o),t.removeEventListener("touchend",r)}},[t,e,n,s])},Tr=()=>{const[t,e]=Q(!1),n=x(()=>(e(s=>!s),t?1:1.5),[t]);return{isZoomed:t,toggleZoom:n}},Nr=t=>{const{showZoom:e,showPageNumber:n,showNav:s,showDetach:i,showFullscreen:o,showClose:r,title:a,loop:l,detachedShowZoom:c}=t,{files:u,loading:h,error:d,setFileIndex:p,safeFileIndex:g,selectedFile:f,value:m,onSelect:w,directionRef:y}=_r(t),{setImageIndex:z,nextImage:S,previousImage:k,first:L,last:E,index:v,image:P,images:O,contentLoading:I,contentError:ne,downloadFileName:ee}=Cr({files:u,safeFileIndex:g,loop:l,setFileIndex:p,directionRef:y}),{isZoomed:N,toggleZoom:Y}=Tr();Ir(t,{enabled:!N,onSwipeLeft:S,onSwipeRight:k});const V=Rr({image:P,showZoom:e,isZoomed:N,directionRef:y,index:v}),{isFullscreen:B,openFullscreen:T,closeFullscreen:C}=Sr(),{detached:M,detach:W,syncDetachedState:ot}=br({files:u,safeFileIndex:g,imageIndex:v,title:a,loop:l,detachedShowZoom:c,setImageIndex:z,setFileIndex:p}),Le=x(()=>{es()&&W()},[W]);Is("detached",M,[M]),$(()=>{t.toggleAttribute("hidden",M)},[M]),$t({syncState:Le},[Le]);const rt=u.length>1||O.length>=2,at=A(()=>f?.pdf?()=>cr(f.pdf,ee,f.pdfOptions):()=>lr(O,ee),[f,ee,O]),lt=x(()=>mr({images:O}),[O]);return{host:t,isZoomed:N,toggleZoom:Y,currentSlide:V,nextImage:S,previousImage:k,first:L,last:E,total:O.length,hasNav:rt,currentImageIndex:v,selectedImageNumber:v+1,onDownloadPdf:at,isFullscreen:B,openFullscreen:T,closeFullscreen:C,onPrintPdf:lt,detached:M,detach:W,syncDetachedState:ot,setFileIndex:p,setImageIndex:z,loading:h||I,error:d,contentError:ne,files:u,selectedFile:f,selectedIndex:g,value:m,onSelect:w,images:O,showPageNumber:n,showNav:s,showZoom:e,showDetach:i,showFullscreen:o,showClose:r}},gn=()=>document.createComment(""),Mr=_t(U,new DocumentFragment).constructor;class Fr extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Fr);class Dr extends Ge{_op;_outlet;_content;render(e,n=document.body){return b`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[n,s=document.body]){return this.updateOutlet(s,n),this.render(n,s)}updateOutlet(e,n){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const s=this._op??=new Mr(e.appendChild(gn()),e.appendChild(gn()));se(s,this._content=n)}clearOutlet(){const e=this._op;e&&(as(e),Ae(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Vr=te(Dr),jr=b`<svg
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
</svg>`,Br=b`<svg
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
</svg>`,Hr=b`<svg
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
</svg>`,Ur=b`<svg
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
</svg>`,Yr=b`<svg
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
</svg>`,Xr=b`<svg
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
</svg>`,Kr=b`<svg
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
</svg>`,Wr=b`<svg
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
</svg>`,Zr=b`<svg
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
</svg>`,Gr=t=>t?Xr:Kr,Jr=()=>b`<div class="loading"><cz-spinner></cz-spinner></div>`,qr=t=>b`<div class="error">
		<h2>${K("Failed to load files.")}</h2>
		<div class="desc">${t?.message??t}</div>
	</div>`,Qr=(t,e)=>b`<div class="counter">${t}/${e}</div>`,ea=({hasNav:t,first:e,last:n,previousImage:s,nextImage:i})=>R(t,()=>b`
			<button
				class="nav"
				name="prev"
				?disabled=${e}
				@click=${s}
			>
				${Yr}
			</button>
			<button class="nav" name="next" ?disabled=${n} @click=${i}>
				${Zr}
			</button>
		`),ta=({files:t,value:e,onSelect:n})=>R(t.length>1,()=>b`<cosmoz-autocomplete
				text-property="title"
				limit="1"
				.min=${1}
				show-single
				preserve-order
				.source=${t}
				.value=${e}
				@value=${n}
			></cosmoz-autocomplete>`),na=({showZoom:t,total:e,isZoomed:n,toggleZoom:s})=>R(t&&e,()=>b`<button
				class="nav"
				@click=${i=>i.target.getRootNode().querySelector("haunted-pan-zoom").zoomTo(s())}
				title="${K("Zoom image")}"
			>
				${Gr(n)}
			</button>`),sa=({showDetach:t,total:e,detach:n})=>R(t&&e,()=>b`<button
				class="nav"
				@click=${n}
				title="${K("Detach image to separate window")}"
			>
				${Ur}
			</button>`),ia=({total:t,onDownloadPdf:e})=>R(t,()=>b`<button
				class="nav"
				@click=${e}
				title="${K("Download images")}"
			>
				${Br}
			</button>`),oa=({total:t,onPrintPdf:e})=>R(t,()=>b`<button
				class="nav"
				@click=${e}
				title="${K("Print images")}"
			>
				${Wr}
			</button>`),ra=({showFullscreen:t,total:e,openFullscreen:n})=>R(t&&e,()=>b`<button
				class="nav"
				@click=${n}
				title="${K("Fullscreen image")}"
			>
				${Hr}
			</button>`),aa=({showClose:t,total:e,host:n})=>R(t&&e,()=>b`<button
				class="nav"
				@click=${()=>n.dispatchEvent(new CustomEvent("close"))}
				title="${K("Close fullscreen")}"
			>
				${jr}
			</button>`),la=t=>b`<div class="actions">
		${[ea(t),ta(t),b`<span style="flex:auto"></span>`,na(t),sa(t),ia(t),oa(t),ra(t),aa(t)]}
	</div>`,ca=(t,e)=>R(t,()=>b`<p class="error">${K("Failed to load PDF.")}</p>`,()=>R(!e,()=>b`<p>${K("No image loaded.")}</p>`)),ua=t=>R(!t.loading&&!t.error,()=>b`
			${R(t.showPageNumber&&t.total,()=>Qr(t.selectedImageNumber,t.total))}
			${la(t)}
			${ca(t.contentError,t.total)}
			<cosmoz-slider id="slider" .slide=${t.currentSlide}></cosmoz-slider>
		`),da=({files:t,selectedIndex:e,currentImageIndex:n,setFileIndex:s,setImageIndex:i,syncDetachedState:o,closeFullscreen:r,host:a})=>Vr(b`<cosmoz-image-viewer
			fullscreen
			.source=${t}
			.currentFileIndex=${e}
			.currentImageIndex=${n}
			@current-file-index-changed=${Dt(s)}
			@current-image-index-changed=${Dt(i)}
			@detached-changed=${o}
			show-nav
			show-zoom
			show-close
			@close=${r}
			?show-detach=${a.showDetach}
			?loop=${a.loop}
		></cosmoz-image-viewer>`),ha=t=>[R(!t.detached,()=>[R(t.loading,Jr),R(t.error,()=>qr(t.error)),ua(t)]),R(t.isFullscreen,()=>da(t))],pa=t=>ha(Nr(t));customElements.define("cosmoz-image-viewer",j(pa,{observedAttributes:["download-file-name","pdf","show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"],styleSheets:[or]}));
