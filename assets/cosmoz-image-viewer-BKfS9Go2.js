const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-DO3-IKk8.js","./preload-helper-PPVm8Dsz.js","./popout-entry-DGK1WVAM.js","./iframe-DPkPoBvf.js","./iframe-CFLCX_cf.css","./pdf-loader-B_xPwwqY.js"])))=>i.map(i=>d[i]);
import{r as Ys,D as Mt,A as J,b as v,E as W,p as Xs,n as Dn,M as Hn,u as ce,v as Se,h as Ue,j as Bn}from"./iframe-DPkPoBvf.js";import{_ as ot}from"./preload-helper-PPVm8Dsz.js";let Xe,Ws=0;function qt(s){Xe=s}function Qt(){Xe=null,Ws=0}function Un(){return Ws++}const wt=Symbol("haunted.phase"),Ke=Symbol("haunted.hook"),es=Symbol("haunted.update"),ts=Symbol("haunted.commit"),he=Symbol("haunted.effects"),Le=Symbol("haunted.layoutEffects"),kt="haunted.context";class Kn{update;host;virtual;[Ke];[he];[Le];constructor(e,t){this.update=e,this.host=t,this[Ke]=new Map,this[he]=[],this[Le]=[]}run(e){qt(this);let t=e();return Qt(),t}_runEffects(e){let t=this[e];qt(this);for(let n of t)n.call(this);Qt()}runEffects(){this._runEffects(he)}runLayoutEffects(){this._runEffects(Le)}teardown(){this[Ke].forEach(t=>{typeof t.teardown=="function"&&t.teardown(!0)})}}class Yn extends Error{constructor(e){const t=e?` <${e}>`:"";super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Xn=100,Wn=Promise.resolve().then.bind(Promise.resolve());function Js(){let s=[],e;function t(){e=null;let n=s;s=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){s.push(n),e==null&&(e=Wn(t))}}const Jn=Js(),ss=Js();class Vt{renderer;host;state;[wt];_updateQueued;_active;_updateCount;_processing;static maxUpdates=Xn;constructor(e,t){this.renderer=e,this.host=t,this.state=new Kn(this.update.bind(this),t),this[wt]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Vt.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Yn(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Jn(()=>{let e=this.handlePhase(es);ss(()=>{this.handlePhase(ts,e),ss(()=>{this.handlePhase(he),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,t){switch(this[wt]=e,e){case ts:this.commit(t),this.runEffects(Le);return;case es:return this.render();case he:return this.runEffects(he)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const at=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},Zn=s=>s?.map(e=>typeof e=="string"?at(e):e),Gn=(s,...e)=>s.flatMap((t,n)=>[t,e[n]||""]).join(""),de=Gn,qn=(s="")=>s.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():"");function Qn(s){class e extends Vt{frag;renderResult;constructor(i,r,o){super(i,o||r),this.frag=r}commit(i){this.renderResult=s(i,this.frag)}}function t(n,i,r){const o=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=Zn(n.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new e(n,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,x,b){if(x===b)return;let C=b===""?!0:b;Reflect.set(this,qn(m),C)}}function f(g){let m=g,x=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(b){x&&m===b||(x=!0,m=b,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,x,b){let C;return m in g?(C=Object.getOwnPropertyDescriptor(g,m),C&&C.set?(C.set.call(b,x),!0):(Reflect.set(g,m,x,b),!0)):(typeof m=="symbol"||m[0]==="_"?C={enumerable:!0,configurable:!0,writable:!0,value:x}:C=f(x),Object.defineProperty(b,m,C),C.set&&C.set.call(b,x),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return t}class ie{id;state;constructor(e,t){this.id=e,this.state=t}}function ei(s,...e){let t=Un(),n=Xe[Ke],i=n.get(t);return i||(i=new s(t,Xe,...e),n.set(t,i)),i.update(...e)}function re(s){return ei.bind(null,s)}function Zs(s){return re(class extends ie{callback;lastValues;values;_teardown;constructor(e,t,n,i){super(e,t),s(t,this)}update(e,t){this.callback=e,this.values=t}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function Gs(s,e){s[he].push(e)}const P=Zs(Gs),ti=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,qs=re(class extends ie{Context;value;_ranEffect;_unsubscribe;constructor(s,e,t){super(s,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Gs(e,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const e={Context:s,callback:this._updater};ti(this.state.host).dispatchEvent(new CustomEvent(kt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=e;this.value=n?i:s.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function si(s){return e=>{const t={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(kt,this)}disconnectedCallback(){this.removeEventListener(kt,this)}handleEvent(n){const{detail:i}=n;i.Context===t&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:s(function({render:n}){const i=qs(t);return n(i)},{useShadowDOM:!1}),defaultValue:e};return t}}const V=re(class extends ie{value;values;constructor(s,e,t,n){super(s,e),this.value=t(),this.values=n}update(s,e){return this.hasChanged(e)&&(this.values=e,this.value=s()),this.value}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),S=(s,e)=>V(()=>s,e);function ni(s,e){s[Le].push(e)}const We=Zs(ni),oe=re(class extends ie{args;constructor(s,e,t){super(s,e),this.updater=this.updater.bind(this),typeof t=="function"&&(t=t()),this.makeArgs(t)}update(){return this.args}updater(s){const[e]=this.args;typeof s=="function"&&(s=s(e)),!Object.is(e,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}}),Qs=re(class extends ie{reducer;currentState;constructor(s,e,t,n,i){super(s,e),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}}),ii=/([A-Z])/gu,pe=re(class extends ie{property;eventName;constructor(s,e,t,n){if(super(s,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=t,this.eventName=t.replace(ii,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updater(n))}update(s,e){return[this.state.host[this.property],this.updater]}resolve(s){const e=this.state.host[this.property],t=typeof s=="function"?s:void 0,n=t?t(e):s;return[e,n,t]}notify(s,e){const t=new CustomEvent(this.eventName,{detail:{value:s,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}updater(s){const[e,t,n]=this.resolve(s);this.notify(t,n).defaultPrevented||Object.is(e,t)||(this.state.host[this.property]=t)}}),ns=s=>e=>{e.preventDefault(),s(e.detail.updater??e.detail.value)};function ri(s){let e=s;return{get current(){return e},set current(t){e=t},get value(){return e},set value(t){e=t}}}function G(s){return V(()=>ri(s),[])}re(class extends ie{update(){return this.state.host}});function oi({render:s}){const e=Qn(s),t=si(e);return{component:e,createContext:t}}const ee={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},le=s=>(...e)=>({_$litDirective$:s,values:e});let xe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const Ee=(s,e)=>{const t=s._$AN;if(t===void 0)return!1;for(const n of t)n._$AO?.(e,!1),Ee(n,e);return!0},Je=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while(t?.size===0)},en=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ci(e)}};function ai(s){this._$AN!==void 0?(Je(this),this._$AM=s,en(this)):this._$AM=s}function li(s,e=!1,t=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let r=t;r<n.length;r++)Ee(n[r],!1),Je(n[r]);else n!=null&&(Ee(n,!1),Je(n));else Ee(this,s)}const ci=s=>{s.type==ee.CHILD&&(s._$AP??=li,s._$AQ??=ai)};class lt extends xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),en(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ee(this,e),Je(this))}setValue(e){if(Ys(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const{component:Y,createContext:ui}=oi({render:Mt}),ct=(s,...e)=>s.flatMap((t,n)=>[t,e[n]??""]).join(""),Dt=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},St=new WeakMap,we=le(class extends lt{render(s){return J}update(s,[e]){const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=s.options?.host,this.rt(this.ct=s.element)),J}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=St.get(e);t===void 0&&(t=new WeakMap,St.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?St.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),di=({host:s,popoverRef:e,disabled:t,openOnHover:n,openOnFocus:i,open:r,close:o})=>{const a=G(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;n&&(s.matches(":hover")||d?.matches(":hover"))||s.matches(":focus-within")||d?.matches(":focus-within")||o()},100)},u=()=>{t||(l(),r())};return P(()=>{if(!(!n||t))return s.addEventListener("pointerenter",u),s.addEventListener("pointerleave",c),()=>{l(),s.removeEventListener("pointerenter",u),s.removeEventListener("pointerleave",c)}},[n,t,s]),P(()=>{if(!(!i||t))return s.addEventListener("focusin",u),s.addEventListener("focusout",c),()=>{l(),s.removeEventListener("focusin",u),s.removeEventListener("focusout",c)}},[i,t,s]),{scheduleClose:c,cancelClose:l}},hi=s=>{if(s.newState!=="open")return;const n=s.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of n){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},fi=de`
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
`,pi=s=>{const{placement:e="bottom span-right",disabled:t,openOnHover:n,openOnFocus:i}=s,r=G(),[o,a]=pe("opened",!1),l=S(()=>{t||(a(!0),r.current?.showPopover())},[t]),c=S(()=>{a(!1),r.current?.hidePopover()},[]),u=S(()=>{if(t)return;r.current?.matches(":popover-open")?c():l()},[t]);P(()=>{const g=r.current;g&&(o?g.showPopover():g.hidePopover())},[o]),P(()=>{s.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:d,cancelClose:h}=di({host:s,popoverRef:r,disabled:t,openOnHover:n,openOnFocus:i,open:l,close:c}),f=i?l:u,p=S(g=>{hi(g),a(g.newState==="open"),s.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return v`
		<slot name="button" @click=${f}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${p}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${we(g=>g&&(r.current=g))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",Y(pi,{styleSheets:[fi],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const U=s=>s??J;const ut=le(class extends xe{constructor(s){if(super(s),s.type!==ee.PROPERTY&&s.type!==ee.ATTRIBUTE&&s.type!==ee.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ys(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===W||e===J)return e;const t=s.element,n=s.name;if(s.type===ee.PROPERTY){if(e===t[n])return W}else if(s.type===ee.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return W}else if(s.type===ee.ATTRIBUTE&&t.getAttribute(n)===e+"")return W;return Xs(s),e}});function I(s,e,t){return s?e(s):t?.(s)}const tn=(s,{label:e,invalid:t,errorMessage:n})=>v`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${I(e,()=>v`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${I(t&&n,()=>v`<div class="error" part="error">${n}</div>`)}
	`,sn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],is=ct`
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
`,nn=ct`
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
		${is}
	}
	@container style(--focused: focused) {
		${is}
	}
`,gi=s=>V(()=>{if(s==null)return;const e=new RegExp(s,"u");return t=>{!t.defaultPrevented&&t.data&&!e.test(t.data)&&t.preventDefault()}},[s]),Ht=re(class extends ie{values;constructor(s,e,t,n){super(s,e),Object.assign(e.host,t),this.values=n}update(s,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),Te=re(class extends ie{update(){return this.state.host}}),mi=/([A-Z])/gu,Pt=(s,e,t)=>{s[e]=t,s.dispatchEvent(new CustomEvent(e.replace(mi,"-$1").toLowerCase()+"-changed",{detail:{value:t}}))},bi=(s,e,t=[e])=>{const n=Te();P(()=>{Pt(n,s,e)},t)},rn=s=>{const e=G(void 0),t=S(l=>e.current=l,[]),n=s.shadowRoot,i=S(l=>s.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=S(l=>Pt(s,"value",l.target.value),[]),o=S(l=>Pt(s,"focused",l.type==="focus"),[]),a=S(()=>{const l=e.current?.checkValidity();return s.toggleAttribute("invalid",!l),l},[]);return Ht({validate:a},[a]),P(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return n.addEventListener("mousedown",l),()=>n.removeEventListener("mousedown",l)},[]),{onChange:i,onFocus:o,onInput:r,onRef:t}},yi=({placeholder:s,noLabelFloat:e,label:t})=>(e?t:void 0)||s||" ",vi=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...sn],xi=s=>{const{type:e="text",pattern:t,allowedPattern:n,autocomplete:i,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=s,{onChange:h,onFocus:f,onInput:p,onRef:g}=rn(s),m=gi(n);return tn(v`
			<input
				${we(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${U(t)}
				autocomplete=${U(i)}
				placeholder=${yi(s)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${ut(r??"")}
				maxlength=${U(d)}
				@beforeinput=${m}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${U(l)}
				max=${U(c)}
				step=${U(u)}
			/>
		`,s)};customElements.define("cosmoz-input",Y(xi,{observedAttributes:vi,styleSheets:[at(nn)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const rs=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},wi=(s,e=0)=>{if(e>0){const t=s.getAttribute("rows")??"",n=s.style.height;s.style.height="",s.setAttribute("rows",e),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=n,s.setAttribute("rows",t)}},Si=s=>{const{value:e,maxRows:t}=s,n=V(()=>()=>s.shadowRoot.querySelector("#input"),[]);P(()=>wi(n(),t),[t,n]),P(()=>rs(n()),[n,e]),P(()=>{const i=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>rs(i)));return r.observe(i),()=>r.unobserve(i)},[n])},_i=["rows","placeholder",...sn],$i=s=>{const{autocomplete:e,value:t,placeholder:n,readonly:i,disabled:r,rows:o,cols:a,maxlength:l}=s,{onChange:c,onFocus:u,onInput:d,onRef:h}=rn(s);return Si(s),tn(v`
			<textarea id="input" part="input"
				${we(h)}
				autocomplete=${U(e)}
				placeholder=${n||" "}
				rows=${o??1} cols=${U(a)}
				?readonly=${i} ?aria-disabled=${r} ?disabled=${r}
				.value=${ut(t??"")} maxlength=${U(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,s)};customElements.define("cosmoz-textarea",Y($i,{observedAttributes:_i,styleSheets:[at(nn)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ci=s=>{const{label:e,value:t,disabled:n,error:i}=s,r=S(o=>s.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ut(!!t)}
			?disabled=${n}
			@change=${r}
		/>
		${I(e,()=>v`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${I(i,o=>v`<div class="failure">${o}</div>`)} `},Li=de`
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
`,Ei=de`
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
`;customElements.define("cosmoz-toggle",Y(Ci,{styleSheets:[Ei,Li],observedAttributes:["disabled"]}));const $=s=>typeof s=="string",_e=()=>{let s,e;const t=new Promise((n,i)=>{s=n,e=i});return t.resolve=s,t.reject=e,t},os=s=>s==null?"":""+s,Oi=(s,e,t)=>{s.forEach(n=>{e[n]&&(t[n]=e[n])})},zi=/###/g,as=s=>s&&s.indexOf("###")>-1?s.replace(zi,"."):s,ls=s=>!s||$(s),Oe=(s,e,t)=>{const n=$(e)?e.split("."):e;let i=0;for(;i<n.length-1;){if(ls(s))return{};const r=as(n[i]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++i}return ls(s)?{}:{obj:s,k:as(n[i])}},cs=(s,e,t)=>{const{obj:n,k:i}=Oe(s,e,Object);if(n!==void 0||e.length===1){n[i]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Oe(s,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Oe(s,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},Ri=(s,e,t,n)=>{const{obj:i,k:r}=Oe(s,e,Object);i[r]=i[r]||[],i[r].push(t)},Ze=(s,e)=>{const{obj:t,k:n}=Oe(s,e);if(t)return t[n]},ki=(s,e,t)=>{const n=Ze(s,t);return n!==void 0?n:Ze(e,t)},on=(s,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in s?$(s[n])||s[n]instanceof String||$(e[n])||e[n]instanceof String?t&&(s[n]=e[n]):on(s[n],e[n],t):s[n]=e[n]);return s},me=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Pi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ni=s=>$(s)?s.replace(/[&<>"'\/]/g,e=>Pi[e]):s;let Ai=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}};const Ii=[" ",",","?","!",";"],Ti=new Ai(20),Fi=(s,e,t)=>{e=e||"",t=t||"";const n=Ii.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(n.length===0)return!0;const i=Ti.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(s);if(!r){const o=s.indexOf(t);o>0&&!i.test(s.substring(0,o))&&(r=!0)}return r},Nt=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const n=e.split(t);let i=s;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=t),a+=n[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<n.length-1)continue;r+=l-r+1;break}i=o}return i},Ge=s=>s&&s.replace("_","-"),ji={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};let Mi=class At{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||ji,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,i){return i&&!this.debug?null:($(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new At(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new At(this.logger,e)}};var te=new Mi;let dt=class{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(t)||0;this.observers[n].set(t,i+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...n])})}},us=class extends dt{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],n&&(Array.isArray(n)?a.push(...n):$(n)&&r?a.push(...n.split(r)):a.push(n)));const l=Ze(this.data,a);return!l&&!t&&!n&&e.indexOf(".")>-1&&(e=a[0],t=a[1],n=a.slice(2).join(".")),l||!o||!$(n)?l:Nt(this.data&&this.data[e]&&this.data[e][t],n,r)}addResource(e,t,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];n&&(a=a.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(a=e.split("."),i=t,t=a[1]),this.addNamespaces(t),cs(this.data,a,i),r.silent||this.emit("added",e,t,n,i)}addResources(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in n)($(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),i=n,n=t,t=a[1]),this.addNamespaces(t);let l=Ze(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?on(l,n,r):l={...l,...n},cs(this.data,a,l),o.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(i=>t[i]&&Object.keys(t[i]).length>0)}toJSON(){return this.data}};var an={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,n,i){return s.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,t,n,i))}),e}};const ds={};let hs=class ln extends dt{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Oi(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=te.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=n&&e.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Fi(e,n,i);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:$(r)?[r]:r};const c=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(i)}return{key:e,namespaces:$(r)?[r]:r}}translate(e,t,n){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=t.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${w}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:o}const d=this.resolve(e,t);let h=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],x=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,C=!$(h)&&typeof h!="boolean"&&typeof h!="number";if(b&&h&&C&&m.indexOf(g)<0&&!($(x)&&Array.isArray(h))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...t,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=w,d.usedParams=this.getUsedParamsDetails(t),d):w}if(r){const w=Array.isArray(h),L=w?[]:{},O=w?p:f;for(const E in h)if(Object.prototype.hasOwnProperty.call(h,E)){const y=`${O}${r}${E}`;L[E]=this.translate(y,{...t,joinArrays:!1,ns:a}),L[E]===y&&(L[E]=h[E])}h=L}}else if(b&&$(x)&&Array.isArray(h))h=h.join(x),h&&(h=this.extendTranslation(h,e,t,n));else{let w=!1,L=!1;const O=t.count!==void 0&&!$(t.count),E=ln.hasDefaultValue(t),y=O?this.pluralResolver.getSuffix(c,t.count,t):"",k=t.ordinal&&O?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",z=O&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),D=z&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${y}`]||t[`defaultValue${k}`]||t.defaultValue;!this.isValidLookup(h)&&E&&(w=!0,h=D),this.isValidLookup(h)||(L=!0,h=o);const T=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&L?void 0:h,N=E&&D!==h&&this.options.updateMissing;if(L||w||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,o,N?D:h),r){const M=this.resolve(o,{...t,keySeparator:!1});M&&M.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const A=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&A&&A[0])for(let M=0;M<A.length;M++)B.push(A[M]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(t.lng||this.language):B.push(t.lng||this.language);const F=(M,R,H)=>{const j=E&&H!==h?H:T;this.options.missingKeyHandler?this.options.missingKeyHandler(M,l,R,j,N,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(M,l,R,j,N,t),this.emit("missingKey",M,l,R,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?B.forEach(M=>{const R=this.pluralResolver.getSuffixes(M,t);z&&t[`defaultValue${this.options.pluralSeparator}zero`]&&R.indexOf(`${this.options.pluralSeparator}zero`)<0&&R.push(`${this.options.pluralSeparator}zero`),R.forEach(H=>{F([M],o+H,t[`defaultValue${H}`]||D)})}):F(B,o,D))}h=this.extendTranslation(h,e,t,d,n),L&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(L||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(t),d):h}extendTranslation(e,t,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=$(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=e.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=n.replace&&!$(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,n.lng||this.language||i.usedLng,n),c){const h=e.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!n.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`),null):o.translate(...f,t)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=$(a)?[a]:a;return e!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(e=an.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,r,o,a;return $(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,t),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=t.count!==void 0&&!$(t.count),f=h&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),p=t.context!==void 0&&($(t.context)||typeof t.context=="number")&&t.context!=="",g=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(a=m,!ds[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(ds[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(x=>{if(this.isValidLookup(n))return;o=x;const b=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(b,u,x,m,t);else{let w;h&&(w=this.pluralResolver.getSuffix(x,t.count,t));const L=`${this.options.pluralSeparator}zero`,O=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(b.push(u+w),t.ordinal&&w.indexOf(O)===0&&b.push(u+w.replace(O,this.options.pluralSeparator)),f&&b.push(u+L)),p){const E=`${u}${this.options.contextSeparator}${t.context}`;b.push(E),h&&(b.push(E+w),t.ordinal&&w.indexOf(O)===0&&b.push(E+w.replace(O,this.options.pluralSeparator)),f&&b.push(E+L))}}let C;for(;C=b.pop();)this.isValidLookup(n)||(r=C,n=this.getResource(x,m,C,t))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!$(e.replace);let i=n?e.replace:e;if(n&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of t)delete i[r]}return i}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}};const _t=s=>s.charAt(0).toUpperCase()+s.slice(1);let fs=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=te.create("languageUtils")}getScriptPartFromCode(e){if(e=Ge(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ge(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if($(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let n=e.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=_t(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=_t(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=_t(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return t=i;t=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),$(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return $(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):$(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}},Vi=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Di={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const Hi=["v1","v2","v3"],Bi=["v4"],ps={zero:0,one:1,two:2,few:3,many:4,other:5},Ui=()=>{const s={};return Vi.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:Di[e.fc]}})}),s};let Ki=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=te.create("pluralResolver"),(!this.options.compatibilityJSON||Bi.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Ui(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Ge(e==="dev"?"en":e),i=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(i=>`${t}${i}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,r)=>ps[i]-ps[r]).map(i=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(e,i,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}`:this.getSuffixRetroCompatible(i,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let i=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Hi.includes(this.options.compatibilityJSON)}};const gs=function(s,e,t){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=ki(s,e,t);return!r&&i&&$(t)&&(r=Nt(s,t,n),r===void 0&&(r=Nt(e,t,n))),r},$t=s=>s.replace(/\$/g,"$$$$");let Yi=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=te.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:x,alwaysFormat:b}=e.interpolation;this.escape=t!==void 0?t:Ni,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?me(r):o||"{{",this.suffix=a?me(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?me(h):f||me("$t("),this.nestingSuffix=p?me(p):g||me(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=x||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t&&t.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,i){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const x=gs(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(x,void 0,n,{...i,...t,interpolationkey:f}):x}const p=f.split(this.formatSeparator),g=p.shift().trim(),m=p.join(this.formatSeparator).trim();return this.format(gs(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...i,...t,interpolationkey:g})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>$t(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?$t(this.escape(f)):$t(f)}].forEach(f=>{for(a=0;r=f.regex.exec(e);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const m=u(e,r,i);o=$(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!$(o)&&!this.useRawValueToEscape&&(o=os(o));const g=f.safeValue(o);if(e=e.replace(r[0],g),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];o={...n},o=o.replace&&!$(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(r=t(a.call(this,i[1].trim(),o),o),r&&i[0]===e&&!$(r))return r;$(r)||(r=os(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),e=e.replace(i[0],r),this.regexp.lastIndex=0}return e}};const Xi=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const n=s.split("(");e=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);e==="currency"&&i.indexOf(":")<0?t.currency||(t.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?t.range||(t.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},be=s=>{const e={};return(t,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=e[o];return a||(a=s(Ge(n),i),e[o]=a),a(t)}};let Wi=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=te.create("formatter"),this.options=e,this.formats={number:be((t,n)=>{const i=new Intl.NumberFormat(t,{...n});return r=>i.format(r)}),currency:be((t,n)=>{const i=new Intl.NumberFormat(t,{...n,style:"currency"});return r=>i.format(r)}),datetime:be((t,n)=>{const i=new Intl.DateTimeFormat(t,{...n});return r=>i.format(r)}),relativetime:be((t,n)=>{const i=new Intl.RelativeTimeFormat(t,{...n});return r=>i.format(r,n.range||"day")}),list:be((t,n)=>{const i=new Intl.ListFormat(t,{...n});return r=>i.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=be(t)}format(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Xi(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||n;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}};const Ji=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};let Zi=class extends dt{constructor(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=te.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(e,t,n,i){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;t.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),!t&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Ri(l.loaded,[r],o),Ji(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,i+1,r*2,o)},r);return}o(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();$(e)&&(e=this.languageUtils.toResolveHierarchy(e)),$(t)&&(t=[t]);const r=this.queueLoad(e,t,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=e.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${i}`,a),this.loaded(e,o,a)})}saveMissing(e,t,n,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,t,n,i,l):u=c(e,t,n,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,t,n,i,a,l)}!e||!e[0]||this.store.addResource(e[0],t,n,i)}}};const ms=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),$(s[1])&&(e.defaultValue=s[1]),$(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),bs=s=>($(s.ns)&&(s.ns=[s.ns]),$(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),$(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),Ve=()=>{},Gi=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};let cn=class It extends dt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=bs(e),this.services={},this.logger=te,this.modules={external:[]},Gi(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&($(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=ms();this.options={...i,...this.options,...bs(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?te.init(r(this.modules.logger),this.options):te.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Wi);const d=new fs(this.options);this.store=new us(this.options.resources,this.options);const h=this.services;h.logger=te,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new Ki(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Yi(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Zi(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];e.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new hs(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];e.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Ve),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=_e(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),n(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve;const i=$(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(e,t,n){const i=_e();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=Ve),this.services.backendConnector.reload(e,t,r=>{i.resolve(),n(r)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&an.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const i=_e();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),t&&t(l,function(){return n.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=$(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,t,n){var i=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||r.keyPrefix);const h=i.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,i.t(f,l)};return $(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!i||o(r,e)))}loadNamespaces(e,t){const n=_e();return this.options.ns?($(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),t&&t(i)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=_e();$(e)&&(e=[e]);const i=this.options.preload||[],r=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),t&&t(o)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new fs(ms());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new It(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},r=new It(i);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n&&(r.store=new us(this.store.data,i),r.services.resourceStore=r.store),r.translator=new hs(r.services,i),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(i,t),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}};const K=cn.createInstance();K.createInstance=cn.createInstance;K.createInstance;K.dir;K.init;K.loadResources;K.reloadResources;K.use;K.changeLanguage;K.getFixedT;const qi=K.t;K.exists;K.setDefaultNamespace;K.hasLoadedNamespace;K.loadNamespaces;K.loadLanguages;const Qi={},ve=le(class extends xe{constructor(){super(...arguments),this.ot=Qi}render(s,e){return e()}update(s,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,i)=>n===this.ot[i]))return W}else if(this.ot===e)return W;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});class er{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let tr=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const ys=s=>!Dn(s)&&typeof s.then=="function",vs=1073741823;let sr=class extends lt{constructor(){super(...arguments),this._$Cwt=vs,this._$Cbt=[],this._$CK=new er(this),this._$CX=new tr}render(...e){return e.find(t=>!ys(t))??W}update(e,t){const n=this._$Cbt;let i=n.length;this._$Cbt=t;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const l=t[a];if(!ys(l))return this._$Cwt=a,l;a<i&&l===n[a]||(this._$Cwt=vs,i=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return W}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ne=le(sr);const xs=(s,e,t)=>{const n=new Map;for(let i=e;i<=t;i++)n.set(s[i],i);return n},un=le(class extends xe{constructor(s){if(super(s),s.type!==ee.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const i=[],r=[];let o=0;for(const a of s)i[o]=n?n(a,o):o,r[o]=t(a,o),o++;return{values:r,keys:i}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,n]){const i=Hn(s),{values:r,keys:o}=this.dt(e,t,n);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=r.length-1;for(;d<=h&&f<=p;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[f])l[f]=ce(i[d],r[f]),d++,f++;else if(a[h]===o[p])l[p]=ce(i[h],r[p]),h--,p--;else if(a[d]===o[p])l[p]=ce(i[d],r[p]),Se(s,l[p+1],i[d]),d++,p--;else if(a[h]===o[f])l[f]=ce(i[h],r[f]),Se(s,i[d],i[h]),h--,f++;else if(c===void 0&&(c=xs(o,f,p),u=xs(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(o[f]),m=g!==void 0?i[g]:null;if(m===null){const x=Se(s,i[d]);ce(x,r[f]),l[f]=x}else l[f]=ce(m,r[f]),Se(s,i[d],m),i[g]=null;f++}else Ue(i[h]),h--;else Ue(i[d]),d++;for(;f<=p;){const g=Se(s,l[p+1]);ce(g,r[f]),l[f++]=g}for(;d<=h;){const g=i[d++];g!==null&&Ue(g)}return this.ut=o,Xs(s,l),W}});class ht extends Event{constructor(e){super(ht.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}ht.eventName="rangeChanged";class ft extends Event{constructor(e){super(ft.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}ft.eventName="visibilityChanged";class pt extends Event{constructor(){super(pt.eventName,{bubbles:!1})}}pt.eventName="unpinned";class nr{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ir extends nr{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const n=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){const n=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:n,left:i}=this._destination;n=Math.min(n||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const r=Math.abs(n-e),o=Math.abs(i-t);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ws=typeof window<"u"?window.ResizeObserver:void 0;const Tt=Symbol("virtualizerRef"),De="virtualizer-sizer";let Ss;class rr{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ws(()=>this._hostElementSizeChanged()),this._childrenRO=new ws(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[Tt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=lr(this._hostElement,e),this._scrollerController=new ir(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${De}]`);t||(t=document.createElement("div"),t.setAttribute(De,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(De,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||Ss;if(typeof t=="function"&&this._layout instanceof t){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let t,n;if(typeof e.type=="function"){n=e.type;const i={...e};delete i.type,t=i}else t=e;n===void 0&&(Ss=n=(await ot(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(i=>this._handleLayoutMessage(i),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:i}}return null}_measureChildren(){const e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<t.length;i++){const r=t[i],o=this._first+i;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=n.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},or(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new pt)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(De)||e.push(t),t=t.nextElementSibling;return e}_updateView(){const e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let i,r,o,a;const l=e.getBoundingClientRect();i=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(x=>x.getBoundingClientRect());c.unshift(l);for(const x of c)i=Math.max(i,x.top),r=Math.max(r,x.left),o=Math.min(o,x.bottom),a=Math.min(a,x.right);const u=t.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:t.scrollWidth,height:t.scrollHeight},f=i-l.top+e.scrollTop,p=r-l.left+e.scrollLeft,g=Math.max(0,o-i),m=Math.max(0,a-r);n.viewportSize={width:m,height:g},n.viewportScroll={top:f,left:p},n.totalScrollSize=h,n.offsetWithinScroller=d}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,i=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${i}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:n,width:i,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${t}px)`,i!==void 0&&(c.style.width=i+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:n,_firstVisible:i,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-i})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new ht({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new ft({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function or(s){const e=window.getComputedStyle(s);return{marginTop:He(e.marginTop),marginRight:He(e.marginRight),marginBottom:He(e.marginBottom),marginLeft:He(e.marginLeft)}}function He(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function _s(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function ar(s,e=!1){const t=[];let n=e?s:_s(s);for(;n!==null;)t.push(n),n=_s(n);return t}function lr(s,e=!1){let t=!1;return ar(s,e).filter(n=>{if(t)return!1;const i=getComputedStyle(n);return t=i.position==="fixed",i.overflow!=="visible"})}const cr=s=>s,ur=(s,e)=>v`${e}: ${JSON.stringify(s,null,2)}`;class dr extends lt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,n)=>ur(t,n+this._first),this._keyFunction=(t,n)=>cr(t,n+this._first),this._items=[],e.type!==ee.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)t.push(this._items[n]);return un(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const n=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),n?W:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const i=e.parentNode;this._makeVirtualizer(i,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(i,r)=>t(i,r+this._first)),n&&(this._keyFunction=(i,r)=>n(i,r+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:i,items:r}=t;this._virtualizer=new rr({hostElement:e,layout:n,scroller:i}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const hr=le(dr),fr=(s,e)=>{if(!s||!e)return;const t=Object.keys(e);return Object.fromEntries(Object.keys(s).flatMap(n=>t.includes(n)?[]:[[n,void 0]]))};class pr extends xe{_props;render(e){return W}update(e,[t]){return this._props!==t&&Object.assign(e.element,fr(this._props,t),this._props=t),W}}const gr=le(pr);function mr(s){return()=>s}const br=mr(),dn=br,qe=s=>s,Fe=(s,...e)=>typeof s=="function"?s(...e):s,yr=s=>{const e=Te(),t=V(()=>new CSSStyleSheet,[]);P(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),P(()=>{t.replaceSync(s)},[s])};function Ye(s){return s?e=>e?.[s]:qe}const vr=s=>{const e=Ye(s);return t=>typeof t=="string"?t:e(t)?.toString()||""},xr=s=>e=>{const t={};for(const n in e)s.includes(n)&&(t[n]=e[n]);return t},wr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Sr=de`
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
		background: url("${wr}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,_r=({index:s,itemHeight:e,auto:t})=>de`
	${I(!t,()=>de`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${s||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,$r=s=>{const e=s==="auto",[t,n]=oe(e?40:s);return[t,i=>e?n(i):void 0]},hn=ui(()=>dn);customElements.define("cosmoz-keybinding-provider",hn.Provider);const Bt=s=>{const e=V(()=>({}),[]);return V(()=>Object.assign(e,s),[e,...Object.values(s)])},ze=(s,e)=>{const t=qs(hn),n=Bt(s);P(()=>t(n),e)},Cr=Symbol("listbox.navigate.up"),Lr=Symbol("listbox.navigate.down"),Er=Symbol("listbox.select"),Or=({onUp:s,onDown:e,onEnter:t})=>{const n=Te();ze({activity:Cr,callback:s,element:()=>n},[]),ze({activity:Lr,callback:e,element:()=>n},[]),ze({activity:Er,callback:t,element:()=>n},[])},zr=({items:s,onSelect:e,defaultIndex:t=0})=>{const[n,i]=oe({index:t}),{index:r}=n,{length:o}=s;return P(()=>{i({index:n.index<0?t:Math.min(n.index,s.length-1),scroll:!0})},[s,t]),Or({onUp:S(()=>i(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:S(()=>i(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:S(()=>r>-1&&r<o&&e?.(s[r],r),[r,s,e])}),{position:n,highlight:S(a=>i({index:a}),[]),select:S(a=>e?.(a),[e])}},Rr=s=>typeof s=="object"&&s!==null&&Symbol.iterator in s;function ue(s){return s==null?[]:Array.isArray(s)?s:typeof s=="string"?[s]:Rr(s)?Array.from(s):[s]}const Ct=(s,e=qe)=>t=>{const n=ue(s).map(e);return ue(t).filter(i=>!n.includes(e(i)))},kr=(s,e)=>e?t=>t!=null&&ue(s).find(n=>n[e]===t[e]):t=>t!=null&&ue(s).includes(t),Pr=(s,e)=>{if(!e||!s)return s;const t=s.toLowerCase().indexOf(e.toLowerCase());if(t<0)return s;const n=t+e.length;return[s.slice(0,t),v`<mark>${s.slice(t,n)}</mark>`,s.slice(n)]},Nr=(s=qe)=>(e,t,{highlight:n,select:i,textual:r=qe,query:o,isSelected:a})=>{const l=r(e),c=Pr(l,o),u=s(c,e,t);return v`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${t}
				@mouseenter=${()=>n(t)}
				@click=${()=>i(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Ar=({itemRenderer:s=Nr(),...e})=>{const t=Bt(e);return S((n,i)=>s(n,i,t),[t,s])},Ir=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Tr=({value:s,valueProperty:e,items:t,onSelect:n,defaultIndex:i,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=V(()=>kr(s,e),[s,e]),d=V(()=>t.slice(),[t,u]),{position:h,highlight:f,select:p}=zr({items:d,onSelect:n,defaultIndex:isNaN(i)?void 0:Number(i)}),[g,m]=$r(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:f,select:p,itemHeight:g,setItemHeight:m,renderItem:Ar({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:o,query:r,isSelected:u})}},$s=dn,Fr=s=>{const e=G(void 0),{position:t,items:n,renderItem:i,height:r,itemHeight:o,setItemHeight:a}=Tr(s);return P(()=>{const l=e.current?.[Tt];l&&l.layoutComplete.then(()=>{s.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},$s)},[n]),P(()=>{if(!t.scroll)return;const l=e.current?.[Tt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(t.index)?.scrollIntoView({block:"nearest"}),$s);return}l.element(t.index)?.scrollIntoView({block:"nearest"})}},[t]),yr(_r({...t,itemHeight:o,auto:s.itemHeight==="auto"})),v`<div
			class="items"
			style="min-height: ${r}px"
			${we(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${hr({items:n,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Y(Fr,{styleSheets:[Dt(Sr)]}));const jr=({multi:s,...e},t)=>v`<cosmoz-listbox
		part="listbox"
		?multi=${s}
		...=${gr(xr(Ir)(e))}
		>${t}</cosmoz-listbox
	>`,Mr=ct`
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
`,Vr=v`
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
`,Dr=({onClear:s,disabled:e})=>v`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${t=>t.preventDefault()}
	>
		<slot></slot>
	</div>
	${I(s&&!e,()=>v`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${t=>t.preventDefault()}
				@click=${s}
			>
				${Vr}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",Y(Dr,{observedAttributes:["disabled"],styleSheets:[Dt(Mr)]}));const Hr=({content:s,onClear:e,disabled:t,hidden:n,className:i="chip",slot:r})=>v`<cosmoz-autocomplete-chip
		class=${U(i)}
		slot=${U(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${t}
		?hidden=${n}
		.onClear=${e}
		title=${U(typeof s=="string"?s:void 0)}
		>${s}</cosmoz-autocomplete-chip
	>`,Br=({value:s,min:e=0,onDeselect:t,textual:n,disabled:i,chipRenderer:r=Hr})=>[...s.filter(Boolean).map(o=>r({item:o,content:n(o),onClear:s.length>e&&(()=>t(o)),disabled:i,slot:"control"})),r({item:null,content:v`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Ur=de`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",Y(()=>J,{styleSheets:[Ur]}));const fn=ct`
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
`,Ut=(s,e=()=>({}))=>{const t={type:s,toString(){return s}};return Object.assign((...i)=>Object.assign(e(...i),t),t)},Cs=s=>s.type||s.toString(),Ls=s=>Array.isArray(s)?s:[s],Kr=(s,e)=>{const t=Ls(e),n=(t.every(Array.isArray)?t:[t]).map(([i,r])=>({actions:Ls(i).map(Cs),handle:r}));return(i=s,r)=>{const o=n.find(a=>a.actions.includes(Cs(r)));return o?o.handle(i,r):i}},fe={pending:"pending",rejected:"rejected",resolved:"resolved"},pn={error:void 0,result:void 0,state:fe.pending},gn=Ut(fe.pending),mn=Ut(fe.resolved,s=>({result:s})),bn=Ut(fe.rejected,s=>({error:s})),Yr=Kr(pn,[[gn,()=>({error:void 0,result:void 0,state:fe.pending})],[mn,(s,{result:e})=>({error:void 0,result:e,state:fe.resolved})],[bn,(s,{error:e})=>({error:e,result:void 0,state:fe.rejected})]]),yn=s=>{const[{error:e,result:t,state:n},i]=Qs(Yr,pn);return P(()=>{if(!s)return;let r=!1;return i(gn()),s.then(o=>!r&&i(mn(o)),o=>!r&&i(bn(o))),()=>{r=!0}},[s]),[t,e,n]},Xr=Symbol("autocomplete.deselect.last"),Wr=Symbol("autocomplete.search.when.selected"),Es=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Jr=(s,e,t)=>{if(!e)return s;const n=Es(e.toLowerCase()),i=[];for(const r of s){const a=Es(t(r).toLowerCase()).indexOf(n);a<0||i.push({item:r,index:a})}return i.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},Zr=s=>s===!1||s==null?[]:s,Gr=(s,e,t)=>s.dispatchEvent(new CustomEvent(e,{detail:t})),Os=[],qr=s=>(...e)=>{let t;const n=()=>{t&&cancelAnimationFrame(t)};return n(),t=requestAnimationFrame(()=>{t=void 0,s(...e)}),n},Qr=(s,e,t)=>S(n=>{e?.(n),s.dispatchEvent(new CustomEvent(t,{detail:n}))},[e]),eo=({value:s,text:e,onChange:t,onText:n,onSelect:i,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:g,disabled:m,lazyOpen:x})=>{const b=r!=null?Number(r):void 0,C=o!=null?Number(o):void 0,w=V(()=>(c??vr)(l),[c,l]),L=Te(),[O,E]=pe("opened",!1),y=!e,k=V(()=>e?.trim(),[e]),z=Qr(L,n,"text"),D=S(R=>{t?.(R,()=>E(!1)),Gr(L,"value",R)},[t]),[q,T]=oe([]),N=!!(x&&!k),B=V(()=>N?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:k,active:O}):a).then(Zr),[a,O,k,N]),A=V(()=>ue(s),[s]);P(()=>B.then(T),[B]),ze({activity:Xr,callback:()=>{const R=ue(A);R.length>(C??0)&&D(R.slice(0,-1))},check:()=>!m&&y&&L.matches(":focus-within"),element:()=>L},[]),ze({activity:Wr,callback:R=>{const H=ue(A),j=b===1;H.length>0&&j&&R.key.length===1&&D(H.slice(0,-1))},allowDefault:!0,check:()=>!m&&y&&L.matches(":focus-within"),element:()=>L},[b]),P(()=>{!O&&!h&&z("")},[O,h]),P(()=>{L.toggleAttribute("opened",!!O)},[O]);const F=Bt({onText:z,onChange:D,value:A,limit:b,min:C,keepQuery:h,keepOpened:d,setOpened:E,onSelect:i,valueProperty:u}),[,,M]=yn(B);return{limit:b,opened:O,query:k,textual:w,value:A,source$:B,loading:M==="pending",items:V(()=>{if(!O||N)return Os;const R=f?q:[...A,...Ct(A,Ye(u))(q)];return g?R:Jr(R,k,w)},[q,O,k,w,y,A,f,u,g,N]),onToggle:S(R=>{m||E(R.newState==="open")},[m]),onText:S(R=>{m||(z(R.target.value),E(!0))},[m,z,e,E]),onSelect:S(R=>{if(m)return;F.onSelect?.(R,F);const{onChange:H,onText:j,limit:Z,min:Q,value:ge,keepQuery:yt,keepOpened:vt,setOpened:jn,valueProperty:Mn}=F;yt||j(""),vt||jn(!1);const Me=ue(ge),xt=Ye(Mn),Gt=Me.some(Vn=>xt(Vn)===xt(R));Gt&&Me.length===Q||H((Gt?Ct(R,xt)(Me):[...Me,R]).slice(-Z))},[m,F]),onDeselect:S(R=>{m||F.onChange(Ct(R,Ye(F.valueProperty))(F.value))},[m,F]),defaultIndex:k!==void 0&&k?.length>0?0:p}},to=s=>{const e=s.shadowRoot.querySelectorAll(".chip"),t=s.shadowRoot.querySelector(".badge");t.hidden=!0;for(const a of e)a.hidden=!1;const i=s.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const o=e.length-r;for(t.querySelector("span").textContent="+"+o.toString(),t.hidden=o<1;r<e.length;r++)e[r].hidden=!0},so=({value:s,opened:e,wrap:t,limit:n})=>{const i=Te(),r=!(t||n===1),o=V(()=>qr(()=>to(i)),[]),[a,l]=oe(0);We(()=>{if(!r)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),We(()=>r?o():void 0,[r,a,e,s])},no=["input","control","label","line","error","wrap"].map(s=>`${s}: input-${s}`).join(),io=({opened:s,isSingle:e,showSingle:t,hasResultsOrQuery:n})=>!s||e&&!t?!1:n,ro=s=>{const{opened:e,invalid:t,errorMessage:n,label:i,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:h,onDeselect:f,value:p,limit:g,min:m,showSingle:x,items:b,source$:C,loading:w,chipRenderer:L}=s,O=g===1,E=O&&p?.[0]!=null,y=w||b.length>0||u!=null&&u.length>0;return v`<cosmoz-dropdown-next
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
				.label=${i}
				.placeholder=${E?void 0:r}
				?no-label-float=${a}
				?always-float-label=${p?.length>0||l}
				?readonly=${E}
				?disabled=${o}
				?invalid=${ve([C,t],()=>Ne(C.then(()=>t,()=>!0),t))}
				.errorMessage=${ve([C,n],()=>Ne(C.then(()=>n,k=>k.message),n))}
				.value=${ut(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${no}
				?data-one=${O}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Br({value:p,min:m,onDeselect:f,textual:c,disabled:o,chipRenderer:L})}
			</cosmoz-input>

			${I(io({opened:e,isSingle:E,showSingle:x,hasResultsOrQuery:y}),()=>jr({...s,items:b,multi:!O},I(w,()=>v`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>I(u!=null&&u.length>0&&b.length===0,()=>v`<slot name="no-result">
											<p class="no-result">${qi("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Kt=s=>{const e={...s,...eo(s)};return so(e),ro(e)},Yt=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],oo=s=>{const{onChange:e,onText:t,...n}=s,[i,r]=pe("value");return P(()=>{s.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Kt({...n,value:i,onChange:S((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:S(o=>{s.text=o,t?.(o)},[t])})},vn=[Dt(fn)],xn={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",Y(Kt,{observedAttributes:Yt,styleSheets:vn,shadowRootInit:xn}));customElements.define("cosmoz-autocomplete",Y(oo,{observedAttributes:Yt,styleSheets:vn,shadowRootInit:xn}));const ao="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",lo=de`
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
		background: url("${ao}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,zs=s=>({item:s,excluded:!1}),wn=s=>s.item,co=s=>{const[e,t]=pe(s),n=S(i=>t(r=>{const o=Fe(i,r?.map(wn));if(!o)return;if(!r)return o.map(zs);const a=r.reduce((c,u)=>o.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),l=o.filter(c=>!r.some(u=>u.item===c)).map(zs);return[...a,...l]}),[]);return{value:e,setExcludingValue:n,setValue:t}},uo=(s,e)=>s?.some(t=>t.item===e&&t.excluded),Sn=(s,e)=>e&&uo(s,e)?"excluded":J,ho=s=>(e,t,{highlight:n,select:i,textual:r,isSelected:o})=>{const a=r(e);return v`<div
				class="item"
				role="option"
				part="option ${Sn(s,e)}"
				?aria-selected=${o(e)}
				data-index=${t}
				@mouseenter=${()=>n(t)}
				@click=${()=>i(e)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},fo=(s,e)=>({item:t,content:n,disabled:i,hidden:r,className:o="chip",slot:a})=>v`<cosmoz-autocomplete-chip
			class=${U(o)}
			slot=${U(a)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${Sn(s,t)}
			?disabled=${i}
			?hidden=${r}
			.onClear=${()=>e(t)}
			title=${U(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-autocomplete-chip>`,po=s=>{const{value:e,setValue:t,setExcludingValue:n}=co("value"),[i,r]=pe("text"),o=S(a=>t(l=>l?.filter(c=>c.item!==a)),[]);return Kt({...s,value:V(()=>e?.map(wn),[e]),onChange:S(a=>{n(a)},[]),text:i,onText:S(a=>{r(a)},[]),itemRenderer:V(()=>ho(e),[e]),chipRenderer:V(()=>fo(e,o),[e,o])})},go={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",Y(po,{observedAttributes:Yt,styleSheets:[fn,lo],shadowRootInit:go}));const _n="important",mo=" !"+_n,$n=le(class extends xe{constructor(s){if(super(s),s.type!==ee.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const n=s[t];return n==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(mo);n.includes("-")||r?t.setProperty(n,r?i.slice(0,-11):i,r?_n:""):t[n]=i}}return W}});class bo extends Promise{constructor(e){const t={};super((n,i)=>Object.assign(t,{resolve:n,reject:i})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}const Cn={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},yo=s=>{const{slide:e}=s,[t,n]=oe([]);return We(()=>{Object.assign(s.style,Cn.host)},[]),P(()=>{if(e==null)return;const i={animationEnd$:new bo,...e};n((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===i.id&&l!==!0);return o!==-1?[...r.slice(0,o),i,...r.slice(o+1,r.length)]:[...r,i]})},[e]),We(async()=>{if(t.filter(l=>!l.out).length<2){const l=t[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const i=t[t.length-1],r=t[t.length-2],o=i.el,a=r.el;r.out=!0,o&&a&&await i.animation?.(o,a),n((l=[])=>l.filter(c=>c!==r))},[t]),{slides:t}},vo=s=>v`<div
		${we(e=>Object.assign(s,{el:e}))}
		class="slide"
		style=${$n(Cn.slide)}
	>
		${ve([s],()=>s.content??s.render?.(s))}
	</div>`,xo=({slides:s})=>ve([s],()=>un(s,({id:e})=>e,vo)),wo=s=>xo(yo(s));customElements.define("cosmoz-slider",Y(wo,{useShadowDOM:!1}));const Qe=(s,e)=>{const t=s.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),n=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([t.finished,n.finished])},So=(s,e)=>{const t=s.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),n=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([t.finished,n.finished])},_o=()=>v`<style>
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
</style>`;customElements.define("cz-spinner",Y(_o));const $o=re(class extends ie{constructor(s,e){super(s,e),this.dispatchEvent=(...t)=>{e.host.dispatchEvent.apply(e.host,t)}}update(){return this.dispatchEvent}}),et=(s,e,t)=>Math.max(e,Math.min(t,s)),tt=et,Xt=(s,e,t,n)=>t/n<s/e?t/s:n/e,Co=(s,e,t,n)=>t/n>s/e?t/s:n/e,Ln=(s,e,t,n,i)=>{const r=Xt(s,e,t,n),o=r*i,a=s*o,l=e*o,c=a<t?(-t+a)/2:(t-a)/2,u=a<t?(t-a)/2:(-t+a)/2,d=l<n?(-n+l)/2:(n-l)/2,h=l<n?(n-l)/2:(-n+l)/2;return{x:[c,u],y:[d,h]}},En="empty",gt="loading",On="loaded",Wt="error",je="idle",mt="panning",Re="pinching",Lo=1.1,Eo=s=>Lo/s,Oo=s=>2*s,Jt=(s,e,t,n)=>{const i=Xt(s,e,t,n),r=Co(s*i,e*i,t,n);return Math.max(Eo(i),Oo(r))},zo={status:En,interaction:je,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},zn=(s,e)=>{const t={...s};return delete t[e],t},Rs=s=>{const e=Object.keys(s);if(e.length<2)return null;const t=s[e[0]],n=s[e[1]];return{midX:(t.x+n.x)/2,midY:(t.y+n.y)/2,distance:Math.hypot(n.x-t.x,n.y-t.y)}},Ae=s=>{const e=Ln(s.iw,s.ih,s.cw,s.ch,s.zoom);return{...s,panX:tt(s.panX,e.x[0],e.x[1]),panY:tt(s.panY,e.y[0],e.y[1])}},Ft=(s,e,t,n=2)=>s<e?e-(e-s)/n:s>t?t+(s-t)/n:s,Rn=s=>{const e=Ln(s.iw,s.ih,s.cw,s.ch,s.zoom);return{...s,panX:Ft(s.panX,e.x[0],e.x[1]),panY:Ft(s.panY,e.y[0],e.y[1])}},kn=(s,{dPanX:e=0,dPanY:t=0,scaleDiff:n=1,originX:i=0,originY:r=0})=>{const o=s.zoom*n;return{...s,zoom:o,panX:e+i+(s.panX-i)*n,panY:t+r+(s.panY-r)*n}},Zt=(s,e,t)=>{const n=Jt(s.iw,s.ih,s.cw,s.ch),i=tt(s.zoom,1,n);if(i===s.zoom)return s;const r=i/s.zoom;return{...s,zoom:i,panX:e+(s.panX-e)*r,panY:t+(s.panY-t)*r}},Ro=(s,e)=>e.type==="load"?{...s,status:gt}:s,ko=(s,e)=>{switch(e.type){case"loaded":return{...s,status:On,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...s,status:Wt};default:return s}},Po=(s,e)=>e.type==="load"?{...s,status:gt}:s,No=(s,e)=>e.type==="pointerdown"?{...s,interaction:mt,pointers:{...s.pointers,[e.id]:{x:e.x,y:e.y}}}:s,Ao=(s,e)=>{switch(e.type){case"pointerdown":{const t={...s.pointers,[e.id]:{x:e.x,y:e.y}};return{...s,interaction:Re,pointers:t}}case"pointermove":{const t=s.pointers[e.id];if(!t)return s;const n=e.x-t.x,i=e.y-t.y;return Rn({...s,panX:s.panX+n,panY:s.panY+i,pointers:{...s.pointers,[e.id]:{x:e.x,y:e.y}}})}case"pointerup":{const t=zn(s.pointers,e.id);if(Object.keys(t).length===0){const n=Zt({...s,pointers:t},e.settleOriginX??0,e.settleOriginY??0);return Ae({...n,interaction:je})}return{...s,pointers:t}}default:return s}},Io=(s,e)=>{switch(e.type){case"pointermove":{if(!s.pointers[e.id])return s;const n=Rs(s.pointers),i={...s.pointers,[e.id]:{x:e.x,y:e.y}},r=Rs(i);if(!n||!r)return{...s,pointers:i};const o=n.distance?r.distance/n.distance:1,a=r.midX-n.midX,l=r.midY-n.midY,c=e.containerOriginX+(r.midX-e.x),u=e.containerOriginY+(r.midY-e.y),d=kn({...s,pointers:i},{dPanX:a,dPanY:l,scaleDiff:o,originX:c,originY:u}),h=Jt(s.iw,s.ih,s.cw,s.ch),f=Ft(d.zoom,1,h),p=f/d.zoom,g=c+(d.panX-c)*p,m=u+(d.panY-u)*p;return Rn({...d,zoom:f,panX:g,panY:m})}case"pointerup":{const t=zn(s.pointers,e.id);if(Object.keys(t).length<=1){const n=Ae(Zt({...s,pointers:t},e.settleOriginX??0,e.settleOriginY??0));return Object.keys(t).length===1?{...n,interaction:mt}:{...n,interaction:je}}return{...s,pointers:t}}default:return s}},To=(s,e)=>{switch(s.interaction){case je:return No(s,e);case mt:return Ao(s,e);case Re:return Io(s,e);default:return s}},Fo=(s,e)=>{switch(e.type){case"load":return{...s,status:gt,interaction:je,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const t=Jt(s.iw,s.ih,s.cw,s.ch),n=tt(e.zoom,1,t);return Ae({...s,zoom:n})}case"wheel":{const{delta:t,originX:n,originY:i}=e,r=1+t,o=kn(s,{scaleDiff:r,originX:n,originY:i});return Ae(Zt(o,n,i))}case"pointerdown":case"pointermove":case"pointerup":return To(s,e);default:return s}},jo=(s,e)=>{if(e.type==="resize")return Ae({...s,cw:e.rect.width,ch:e.rect.height});switch(s.status){case En:return Ro(s,e);case gt:return ko(s,e);case On:return Fo(s,e);case Wt:return Po(s,e);default:return s}},Mo=(s,e)=>{"ResizeObserver"in window&&P(()=>{if(e==null)return;const t=new ResizeObserver(([{contentRect:n}])=>s(n));return t.observe(e),s(e.getBoundingClientRect()),()=>t.unobserve(e)},[s,e])},Lt=(s,e=.08,t=.001)=>{const[n,i]=oe(null);return P(()=>{if(n==null){i(s);return}if(e>=1){i(s);return}const r=n;window.requestAnimationFrame(()=>{const o=s-r;i(Math.abs(o)<t?s:n+o*e)})},[n,i,s,e,t]),n},Vo=(s,e,t,n)=>{const{iw:i=100,ih:r=100,cw:o=100,ch:a=100}=s,l=Xt(i,r,o,a),c=l*e;return{transform:["translate(-50%, -50%)",`translate(${t}px, ${n}px)`,`scale(${c})`].join(" ")}},Et=(s,e,t)=>{const n=t.current?.getBoundingClientRect();return n?{originX:s-n.left-n.width/2,originY:e-n.top-n.height/2}:{originX:0,originY:0}},Do=(s=.08)=>{const[e,t]=Qs(jo,zo),n=G(),i=G(null),r=G(null),o=S(()=>t({type:"load"}),[t]),a=S(y=>t({type:"loaded",dimensions:y}),[t]),l=S(()=>t({type:"error"}),[t]),c=S(y=>t({type:"zoom",zoom:y}),[t]),u=S(y=>y&&t({type:"resize",rect:y}),[t]),d=S(()=>u(n.current&&n.current.getBoundingClientRect()),[u]);Mo(u,n.current);const h=S(y=>a({iw:y.target.naturalWidth,ih:y.target.naturalHeight}),[a]),f=S(y=>{if(y.pointerType==="mouse"||y.pointerType==="pen"){const k=y.composedPath()[0],z=n.current;(k===z||k===z?.querySelector(".transform-group"))&&(n.current?.setPointerCapture(y.pointerId),t({type:"pointerdown",id:y.pointerId,x:y.clientX,y:y.clientY}));return}if(i.current){clearTimeout(r.current),r.current=null,n.current?.setPointerCapture(i.current.id),t({type:"pointerdown",id:i.current.id,x:i.current.x,y:i.current.y}),i.current=null,n.current?.setPointerCapture(y.pointerId),t({type:"pointerdown",id:y.pointerId,x:y.clientX,y:y.clientY});return}i.current={id:y.pointerId,x:y.clientX,y:y.clientY},r.current=setTimeout(()=>{r.current=null,i.current=null},200)},[t]),p=S(y=>{if(r.current!=null&&i.current?.id===y.pointerId){const D=i.current;if(Math.hypot(y.clientX-D.x,y.clientY-D.y)>10)clearTimeout(r.current),r.current=null,n.current?.setPointerCapture(D.id),t({type:"pointerdown",id:D.id,x:D.x,y:D.y}),i.current=null;else return}const{originX:k,originY:z}=Et(y.clientX,y.clientY,n);t({type:"pointermove",id:y.pointerId,x:y.clientX,y:y.clientY,containerOriginX:k,containerOriginY:z})},[t]),g=G({x:0,y:0});P(()=>{if(e.interaction!==Re)return;const y=Object.keys(e.pointers);if(y.length>=2){const k=e.pointers[y[0]],z=e.pointers[y[1]],D=(k.x+z.x)/2,q=(k.y+z.y)/2,{originX:T,originY:N}=Et(D,q,n);g.current={x:T,y:N}}},[e.pointers,e.interaction]);const m=S(y=>{if(i.current?.id===y.pointerId){clearTimeout(r.current),r.current=null,i.current=null;return}try{n.current?.releasePointerCapture(y.pointerId)}catch{}t({type:"pointerup",id:y.pointerId,settleOriginX:g.current.x,settleOriginY:g.current.y})},[t]),x=S(y=>{y.preventDefault();const{originX:k,originY:z}=Et(y.clientX,y.clientY,n);t({type:"wheel",delta:-Math.sign(y.deltaY)*.8,originX:k,originY:z})},[t]),b=e.interaction===Re,C=e.interaction===mt||e.interaction===Re;let w=s;b?w=.8:C&&(w=.9);const L=Lt(e.zoom,w),O=Lt(e.panX,w),E=Lt(e.panY,w);return{...e,load:o,loaded:a,error:l,zoomTo:c,resize:d,onPointerDown:f,onPointerMove:p,onPointerUp:m,onImageLoad:h,onWheel:x,containerRef:n,style:Vo(e,L,O,E)}},Ho=({src:s,disabled:e,zoomStiffness:t})=>{const{status:n,zoom:i,load:r,error:o,zoomTo:a,resize:l,onPointerDown:c,onPointerMove:u,onPointerUp:d,onImageLoad:h,onWheel:f,style:p,containerRef:g}=Do(t);if(P(r,[s]),Ht({zoomTo:a,resize:l,zoom:i},[a,l,i]),!s)return J;const m=$o();return P(()=>m(new CustomEvent("zoom-changed",{detail:{value:i}})),[m,i]),P(()=>m(new CustomEvent("status-changed",{detail:{value:n}})),[m,n]),v`
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
			class="container ${n}"
			style="pointer-events: ${e?"none":"all"}"
			@wheel=${f}
			@pointerdown=${c}
			@pointermove=${u}
			@pointerup=${d}
			@pointercancel=${d}
			${we(x=>g.current=x)}
		>
			${!s||n===Wt?J:v`
						<div class="transform-group" style=${$n(p)}>
							<img
								src=${s}
								draggable="false"
								@load=${h}
								@error=${o}
							/>
							<slot></slot>
						</div>
					`}
		</div>
	`};class Bo extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",Y(Ho,{observedAttributes:["src","disabled","zoom-stiffness"],baseElement:Bo}));const Uo=at`:host {
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
}`,Ko=(s,e)=>{const t=s.width/s.height,n=e.width/e.height;return t>n?{width:e.width,height:s.height*(e.width/s.width)}:{width:s.width*(e.height/s.height),height:e.height}},Yo=async(s,e)=>{const t={credentials:"include"},[{jsPDF:n},...i]=await Promise.all([ot(()=>import("./jspdf.es-DO3-IKk8.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...s.map(async a=>{const l=await Promise.resolve(Fe(a)),c=await fetch(l,t);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),r=i.filter(Boolean);if(r.length<1)return;const o=new n({compress:!0});return r.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:d}}=o,{width:h,height:f}=Ko(o.getImageProperties(l),{width:d.getWidth()-4,height:d.getHeight()-4});c>0&&o.addPage(),o.addImage(l,a.split(".").pop().toUpperCase(),2,2,h,f)}),o.output("blob")},Pn=(s,e)=>{const t=URL.createObjectURL(s),n=document.body.appendChild(document.createElement("a"));n.href=t,n.download=`${e}.pdf`,n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)},Xo=async(s,e,t)=>{const n=await Yo(s);if(n)return Pn(n,e),n},Wo=async(s,e,t={})=>{const{httpHeaders:n,withCredentials:i=!0}=t,r=await fetch(s,{credentials:i?"include":"omit",headers:n});if(!r.ok)return;const o=await r.blob();return Pn(o,e),o},_=s=>typeof s=="string",$e=()=>{let s,e;const t=new Promise((n,i)=>{s=n,e=i});return t.resolve=s,t.reject=e,t},ks=s=>s==null?"":String(s),Jo=(s,e,t)=>{s.forEach(n=>{e[n]&&(t[n]=e[n])})},Zo=/###/g,Ps=s=>s&&s.includes("###")?s.replace(Zo,"."):s,Ns=s=>!s||_(s),ke=(s,e,t)=>{const n=_(e)?e.split("."):e;let i=0;for(;i<n.length-1;){if(Ns(s))return{};const r=Ps(n[i]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++i}return Ns(s)?{}:{obj:s,k:Ps(n[i])}},As=(s,e,t)=>{const{obj:n,k:i}=ke(s,e,Object);if(n!==void 0||e.length===1){n[i]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=ke(s,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=ke(s,o,Object),a?.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},Go=(s,e,t,n)=>{const{obj:i,k:r}=ke(s,e,Object);i[r]=i[r]||[],i[r].push(t)},st=(s,e)=>{const{obj:t,k:n}=ke(s,e);if(t&&Object.prototype.hasOwnProperty.call(t,n))return t[n]},qo=(s,e,t)=>{const n=st(s,t);return n!==void 0?n:st(e,t)},Nn=(s,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in s?_(s[n])||s[n]instanceof String||_(e[n])||e[n]instanceof String?t&&(s[n]=e[n]):Nn(s[n],e[n],t):s[n]=e[n]);return s},ae=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Qo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},ea=s=>_(s)?s.replace(/[&<>"'\/]/g,e=>Qo[e]):s;class ta{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const sa=[" ",",","?","!",";"],na=new ta(20),ia=(s,e,t)=>{e=e||"",t=t||"";const n=sa.filter(o=>!e.includes(o)&&!t.includes(o));if(n.length===0)return!0;const i=na.getRegExp(`(${n.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(s);if(!r){const o=s.indexOf(t);o>0&&!i.test(s.substring(0,o))&&(r=!0)}return r},jt=(s,e,t=".")=>{if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const n=e.split(t);let i=s;for(let r=0;r<n.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=r;l<n.length;++l)if(l!==r&&(a+=t),a+=n[l],o=i[a],o!==void 0){if(["string","number","boolean"].includes(typeof o)&&l<n.length-1)continue;r+=l-r+1;break}i=o}return i},Ie=s=>s?.replace(/_/g,"-"),ra={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console?.[s]?.apply?.(console,e)}};class nt{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||ra,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,i){return i&&!this.debug?null:(e=e.map(r=>_(r)?r.replace(/[\r\n\x00-\x1F\x7F]/g," "):r),_(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new nt(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new nt(this.logger,e)}}var se=new nt;class bt{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(t)||0;this.observers[n].set(t,i+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([i,r])=>{for(let o=0;o<r;o++)i(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([i,r])=>{for(let o=0;o<r;o++)i(e,...t)})}}class Is extends bt{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,i={}){const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.includes(".")?a=e.split("."):(a=[e,t],n&&(Array.isArray(n)?a.push(...n):_(n)&&r?a.push(...n.split(r)):a.push(n)));const l=st(this.data,a);return!l&&!t&&!n&&e.includes(".")&&(e=a[0],t=a[1],n=a.slice(2).join(".")),l||!o||!_(n)?l:jt(this.data?.[e]?.[t],n,r)}addResource(e,t,n,i,r={silent:!1}){const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];n&&(a=a.concat(o?n.split(o):n)),e.includes(".")&&(a=e.split("."),i=t,t=a[1]),this.addNamespaces(t),As(this.data,a,i),r.silent||this.emit("added",e,t,n,i)}addResources(e,t,n,i={silent:!1}){for(const r in n)(_(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,i,r,o={silent:!1,skipCopy:!1}){let a=[e,t];e.includes(".")&&(a=e.split("."),i=n,n=t,t=a[1]),this.addNamespaces(t);let l=st(this.data,a)||{};o.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?Nn(l,n,r):l={...l,...n},As(this.data,a,l),o.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(i=>t[i]&&Object.keys(t[i]).length>0)}toJSON(){return this.data}}var An={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,n,i){return s.forEach(r=>{e=this.processors[r]?.process(e,t,n,i)??e}),e}};const In=Symbol("i18next/PATH_KEY");function oa(){const s=[],e=Object.create(null);let t;return e.get=(n,i)=>(t?.revoke?.(),i===In?s:(s.push(i),t=Proxy.revocable(n,e),t.proxy)),Proxy.revocable(Object.create(null),e).proxy}function ye(s,e){const{[In]:t}=s(oa()),n=e?.keySeparator??".",i=e?.nsSeparator??":",r=e?.enableSelector==="strict";if(t.length>1&&i){const o=e?.ns,a=r?Array.isArray(o)?o:o?[o]:null:Array.isArray(o)?o:null;if(a&&(r?a:a.length>1?a.slice(1):[]).includes(t[0]))return`${t[0]}${i}${t.slice(1).join(n)}`}return t.join(n)}const Ot=s=>!_(s)&&typeof s!="boolean"&&typeof s!="number";class it extends bt{constructor(e,t={}){super(),Jo(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=se.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const n={...t};if(e==null)return!1;const i=this.resolve(e,n);if(i?.res===void 0)return!1;const r=Ot(i.res);return!(n.returnObjects===!1&&r)}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=n&&e.includes(n),a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!ia(e,n,i);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:_(r)?[r]:r};const c=e.split(n);(n!==i||n===i&&this.options.ns.includes(c[0]))&&(r=c.shift()),e=c.join(i)}return{key:e,namespaces:_(r)?[r]:r}}translate(e,t,n){let i=typeof t=="object"?{...t}:t;if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";typeof e=="function"&&(e=ye(e,{...this.options,...i})),Array.isArray(e)||(e=[String(e)]),e=e.map(T=>typeof T=="function"?ye(T,{...this.options,...i}):String(T));const r=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],i),c=l[l.length-1];let u=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;u===void 0&&(u=":");const d=i.lng||this.language,h=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()==="cimode")return h?r?{res:`${c}${u}${a}`,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(i)}:`${c}${u}${a}`:r?{res:a,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(i)}:a;const f=this.resolve(e,i);let p=f?.res;const g=f?.usedKey||a,m=f?.exactUsedKey||a,x=["[object Number]","[object Function]","[object RegExp]"],b=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,C=!this.i18nFormat||this.i18nFormat.handleAsObject,w=i.count!==void 0&&!_(i.count),L=it.hasDefaultValue(i),O=w?this.pluralResolver.getSuffix(d,i.count,i):"",E=i.ordinal&&w?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):"",y=w&&!i.ordinal&&i.count===0,k=y&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${O}`]||i[`defaultValue${E}`]||i.defaultValue;let z=p;C&&!p&&L&&(z=k);const D=Ot(z),q=Object.prototype.toString.apply(z);if(C&&z&&D&&!x.includes(q)&&!(_(b)&&Array.isArray(z))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const T=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,z,{...i,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(f.res=T,f.usedParams=this.getUsedParamsDetails(i),f):T}if(o){const T=Array.isArray(z),N=T?[]:{},B=T?m:g;for(const A in z)if(Object.prototype.hasOwnProperty.call(z,A)){const F=`${B}${o}${A}`;L&&!p?N[A]=this.translate(F,{...i,defaultValue:Ot(k)?k[A]:void 0,joinArrays:!1,ns:l}):N[A]=this.translate(F,{...i,joinArrays:!1,ns:l}),N[A]===F&&(N[A]=z[A])}p=N}}else if(C&&_(b)&&Array.isArray(p))p=p.join(b),p&&(p=this.extendTranslation(p,e,i,n));else{let T=!1,N=!1;!this.isValidLookup(p)&&L&&(T=!0,p=k),this.isValidLookup(p)||(N=!0,p=a);const A=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&N?void 0:p,F=L&&k!==p&&this.options.updateMissing;if(N||T||F){if(this.logger.log(F?"updateKey":"missingKey",d,c,w&&!F?`${a}${this.pluralResolver.getSuffix(d,i.count,i)}`:a,F?k:p),o){const j=this.resolve(a,{...i,keySeparator:!1});j&&j.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const R=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&R&&R[0])for(let j=0;j<R.length;j++)M.push(R[j]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(i.lng||this.language):M.push(i.lng||this.language);const H=(j,Z,Q)=>{const ge=L&&Q!==p?Q:A;this.options.missingKeyHandler?this.options.missingKeyHandler(j,c,Z,ge,F,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(j,c,Z,ge,F,i),this.emit("missingKey",j,c,Z,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&w?M.forEach(j=>{const Z=this.pluralResolver.getSuffixes(j,i);y&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!Z.includes(`${this.options.pluralSeparator}zero`)&&Z.push(`${this.options.pluralSeparator}zero`),Z.forEach(Q=>{H([j],a+Q,i[`defaultValue${Q}`]||k)})}):H(M,a,k))}p=this.extendTranslation(p,e,i,f,n),N&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${c}${u}${a}`),(N||T)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${u}${a}`:a,T?p:void 0,i))}return r?(f.res=p,f.usedParams=this.getUsedParamsDetails(i),f):p}extendTranslation(e,t,n,i,r){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const l=_(e)&&(n?.interpolation?.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const d=e.match(this.interpolator.nestingRegexp);c=d&&d.length}let u=n.replace&&!_(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,n.lng||this.language||i.usedLng,n),l){const d=e.match(this.interpolator.nestingRegexp),h=d&&d.length;c<h&&(n.nest=!1)}!n.lng&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...d)=>r?.[0]===d[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${t[0]}`),null):this.translate(...d,t),n)),n.interpolation&&this.interpolator.reset()}const o=n.postProcess||this.options.postProcess,a=_(o)?[o]:o;return e!=null&&a?.length&&n.applyPostProcessor!==!1&&(e=An.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,i,r,o,a;return _(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?ye(l,{...this.options,...t}):l)),e.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,t),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=t.count!==void 0&&!_(t.count),f=h&&!t.ordinal&&t.count===0,p=t.context!==void 0&&(_(t.context)||typeof t.context=="number")&&t.context!=="",g=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(a=m,!this.checkedLoadedFor[`${g[0]}-${m}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(a)&&(this.checkedLoadedFor[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(x=>{if(this.isValidLookup(n))return;o=x;const b=[u];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(b,u,x,m,t);else{let w;h&&(w=this.pluralResolver.getSuffix(x,t.count,t));const L=`${this.options.pluralSeparator}zero`,O=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(t.ordinal&&w.startsWith(O)&&b.push(u+w.replace(O,this.options.pluralSeparator)),b.push(u+w),f&&b.push(u+L)),p){const E=`${u}${this.options.contextSeparator||"_"}${t.context}`;b.push(E),h&&(t.ordinal&&w.startsWith(O)&&b.push(E+w.replace(O,this.options.pluralSeparator)),b.push(E+w),f&&b.push(E+L))}}let C;for(;C=b.pop();)this.isValidLookup(n)||(r=C,n=this.getResource(x,m,C,t))}))})}),{res:n,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n,i={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!_(e.replace);let i=n?e.replace:e;if(n&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const r of t)delete i[r]}return i}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&n.startsWith(t)&&e[n]!==void 0)return!0;return!1}}class Ts{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=se.create("languageUtils")}getScriptPartFromCode(e){if(e=Ie(e),!e||!e.includes("-"))return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ie(e),!e||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(_(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const i=this.getScriptPartFromCode(n);if(this.isSupportedCode(i))return t=i;const r=this.getLanguagePartFromCode(n);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(o=>o===r?!0:!o.includes("-")&&!r.includes("-")?!1:!!(o.includes("-")&&!r.includes("-")&&o.slice(0,o.indexOf("-"))===r||o.startsWith(r)&&r.length>1))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),_(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return _(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):_(e)&&r(this.formatLanguageCode(e)),n.forEach(o=>{i.includes(o)||r(this.formatLanguageCode(o))}),i}}const Fs={zero:0,one:1,two:2,few:3,many:4,other:5},js={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class aa{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=se.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const n=Ie(e==="dev"?"en":e),i=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:n,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(n,{type:i})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),js;if(!e.match(/-|_/))return js;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}needsPlural(e,t={}){let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(i=>`${t}${i}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((i,r)=>Fs[i]-Fs[r]).map(i=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${i}`):[]}getSuffix(e,t,n={}){const i=this.getRule(e,n);return i?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const Ms=(s,e,t,n=".",i=!0)=>{let r=qo(s,e,t);return!r&&i&&_(t)&&(r=jt(s,t,n),r===void 0&&(r=jt(e,t,n))),r},zt=s=>s.replace(/\$/g,"$$$$");class Vs{constructor(e={}){this.logger=se.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(t=>t),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:x,alwaysFormat:b}=e.interpolation;this.escape=t!==void 0?t:ea,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?ae(r):o||"{{",this.suffix=a?ae(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d?ae(d):"-",this.unescapeSuffix=this.unescapePrefix?"":u?ae(u):"",this.nestingPrefix=h?ae(h):f||ae("$t("),this.nestingSuffix=p?ae(p):g||ae(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=x||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>t?.source===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,i){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(!f.includes(this.formatSeparator)){const x=Ms(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(x,void 0,n,{...i,...t,interpolationkey:f}):x}const p=f.split(this.formatSeparator),g=p.shift().trim(),m=p.join(this.formatSeparator).trim();return this.format(Ms(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...i,...t,interpolationkey:g})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const u=i?.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i?.interpolation?.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>zt(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?zt(this.escape(f)):zt(f)}].forEach(f=>{for(a=0;r=f.regex.exec(e);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof u=="function"){const m=u(e,r,i);o=_(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!_(o)&&!this.useRawValueToEscape&&(o=ks(o));const g=f.safeValue(o);if(e=e.replace(r[0],g),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,n={}){let i,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(!l.includes(u))return l;const d=l.split(new RegExp(`${ae(u)}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const f=h.match(/'/g),p=h.match(/"/g);((f?.length??0)%2===0&&!p||(p?.length??0)%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.includes(this.prefix)&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];o={...n},o=o.replace&&!_(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const c=/{.*}/.test(i[1])?i[1].lastIndexOf("}")+1:i[1].indexOf(this.formatSeparator);if(c!==-1&&(l=i[1].slice(c).split(this.formatSeparator).map(u=>u.trim()).filter(Boolean),i[1]=i[1].slice(0,c)),r=t(a.call(this,i[1].trim(),o),o),r&&i[0]===e&&!_(r))return r;_(r)||(r=ks(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:i[1].trim()}),r.trim())),e=e.replace(i[0],r),this.regexp.lastIndex=0}return e}}const la=s=>{let e=s.toLowerCase().trim();const t={};if(s.includes("(")){const n=s.split("(");e=n[0].toLowerCase().trim();const i=n[1].slice(0,-1);e==="currency"&&!i.includes(":")?t.currency||(t.currency=i.trim()):e==="relativetime"&&!i.includes(":")?t.range||(t.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Ds=s=>{const e={};return(t,n,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=n+JSON.stringify(r);let a=e[o];return a||(a=s(Ie(n),i),e[o]=a),a(t)}},ca=s=>(e,t,n)=>s(Ie(t),n)(e);class ua{constructor(e={}){this.logger=se.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?Ds:ca;this.formats={number:n((i,r)=>{const o=new Intl.NumberFormat(i,{...r});return a=>o.format(a)}),currency:n((i,r)=>{const o=new Intl.NumberFormat(i,{...r,style:"currency"});return a=>o.format(a)}),datetime:n((i,r)=>{const o=new Intl.DateTimeFormat(i,{...r});return a=>o.format(a)}),relativetime:n((i,r)=>{const o=new Intl.RelativeTimeFormat(i,{...r});return a=>o.format(a,r.range||"day")}),list:n((i,r)=>{const o=new Intl.ListFormat(i,{...r});return a=>o.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ds(t)}format(e,t,n,i={}){if(!t||e==null)return e;const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&!r[0].includes(")")&&r.find(a=>a.includes(")"))){const a=r.findIndex(l=>l.includes(")"));r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=la(l);if(this.formats[c]){let d=a;try{const h=i?.formatParams?.[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||n;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const da=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class ha extends bt{constructor(e,t,n,i={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=se.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,i.backend,i)}queueLoad(e,t,n,i){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;t.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,n){const i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),!t&&n&&this.store.addResourceBundle(r,o,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Go(l.loaded,[r],o),da(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,n,i=0,r=this.retryTimeout,o){if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:i,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read(e,t,n,i+1,r*2,o)},r);return}o(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t,n={},i){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();_(e)&&(e=this.languageUtils.toResolveHierarchy(e)),_(t)&&(t=[t]);const r=this.queueLoad(e,t,n,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=""){const n=e.split("|"),i=n[0],r=n[1];this.read(i,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${i}`,a),this.loaded(e,o,a)})}saveMissing(e,t,n,i,r,o={},a=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend?.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,t,n,i,l):u=c(e,t,n,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,t,n,i,a,l)}!e||!e[0]||this.store.addResource(e[0],t,n,i)}}}const Rt=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),_(s[1])&&(e.defaultValue=s[1]),_(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Hs=s=>(_(s.ns)&&(s.ns=[s.ns]),_(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),_(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&!s.supportedLngs.includes("cimode")&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),Be=()=>{},fa=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Pe extends bt{constructor(e={},t){if(super(),this.options=Hs(e),this.services={},this.logger=se,this.modules={external:[]},fa(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(_(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const n=Rt();this.options={...n,...this.options,...Hs(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);const i=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?se.init(i(this.modules.logger),this.options):se.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=ua;const u=new Ts(this.options);this.store=new Is(this.options.resources,this.options);const d=this.services;d.logger=se,d.resourceStore=this.store,d.languageUtils=u,d.pluralResolver=new aa(u,{prepend:this.options.pluralSeparator}),c&&(d.formatter=i(c),d.formatter.init&&d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Vs(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new ha(i(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",(h,...f)=>{this.emit(h,...f)}),this.modules.languageDetector&&(d.languageDetector=i(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=i(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new it(this.services,this.options),this.translator.on("*",(h,...f)=>{this.emit(h,...f)}),this.modules.external.forEach(h=>{h.init&&h.init(this)})}if(this.format=this.options.interpolation.format,t||(t=Be),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...u)=>this.store[c](...u)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...u)=>(this.store[c](...u),this)});const a=$e(),l=()=>{const c=(u,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(d),t(u,d)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=Be){let n=t;const i=_(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&(r.includes(c)||r.push(c))})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload?.forEach?.(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(e,t,n){const i=$e();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=Be),this.services.backendConnector.reload(e,t,r=>{i.resolve(),n(r)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&An.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!["cimode","dev"].includes(n)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const n=$e();this.emit("languageChanging",e);const i=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},r=(a,l)=>{l?this.isLanguageChangingTo===e&&(i(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,n.resolve((...c)=>this.t(...c)),t&&t(a,(...c)=>this.t(...c))},o=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const l=_(a)?a:a&&a[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(_(a)?[a]:a);c&&(this.language||i(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector?.cacheUserLanguage?.(c)),this.loadResources(c,u=>{r(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),n}getFixedT(e,t,n,i){const r=i?.scopeNs,o=(a,l,...c)=>{let u;typeof l!="object"?u=this.options.overloadTranslationOptionHandler([a,l].concat(c)):u={...l},u.lng=u.lng||o.lng,u.lngs=u.lngs||o.lngs;const d=u.ns!==void 0&&u.ns!==null;u.ns=u.ns||o.ns,u.keyPrefix!==""&&(u.keyPrefix=u.keyPrefix||n||o.keyPrefix);const h={...this.options,...u};Array.isArray(r)&&!d&&(h.ns=r),typeof u.keyPrefix=="function"&&(u.keyPrefix=ye(u.keyPrefix,h));const f=this.options.keySeparator||".";let p;return u.keyPrefix&&Array.isArray(a)?p=a.map(g=>(typeof g=="function"&&(g=ye(g,h)),`${u.keyPrefix}${f}${g}`)):(typeof a=="function"&&(a=ye(a,h)),p=u.keyPrefix?`${u.keyPrefix}${f}${a}`:a),this.t(p,u)};return _(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=n,o}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(n,e)&&(!i||o(r,e)))}loadNamespaces(e,t){const n=$e();return this.options.ns?(_(e)&&(e=[e]),e.forEach(i=>{this.options.ns.includes(i)||this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),t&&t(i)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=$e();_(e)&&(e=[e]);const i=this.options.preload||[],r=e.filter(o=>!i.includes(o)&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{n.resolve(),t&&t(o)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const i=new Intl.Locale(e);if(i&&i.getTextInfo){const r=i.getTextInfo();if(r&&r.direction)return r.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services?.languageUtils||new Ts(Rt());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const n=new Pe(e,t);return n.createInstance=Pe.createInstance,n}cloneInstance(e={},t=Be){const n=e.forkResourceStore;n&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},r=new Pe(i);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},n){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((u,d)=>(u[d]={...l[c][d]},u),l[c]),l),{});r.store=new Is(a,i),r.services.resourceStore=r.store}if(e.interpolation){const l={...Rt().interpolation,...this.options.interpolation,...e.interpolation},c={...i,interpolation:l};r.services.interpolator=new Vs(c)}return r.translator=new it(r.services,i),r.translator.on("*",(a,...l)=>{r.emit(a,...l)}),r.init(i,t),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const X=Pe.createInstance();X.createInstance;X.dir;X.init;X.loadResources;X.reloadResources;X.use;X.changeLanguage;X.getFixedT;const ne=X.t;X.exists;X.setDefaultNamespace;X.hasLoadedNamespace;X.loadNamespaces;X.loadLanguages;let pa;const ga=async()=>pa??=(await ot(async()=>{const{url:s}=await import("./popout-entry-DGK1WVAM.js");return{url:s}},__vite__mapDeps([2,1,3,4]),import.meta.url)).url,ma=s=>Object.entries(s).map(([e,t])=>e+"="+t).join(",");let rt=null;const Tn=()=>rt!=null&&!rt.closed,ba=(s,{entryUrl:e,state:t,sync:n,title:i,onDetach:r,onClose:o})=>{s.__popoutState=t,s.__popoutSync=n,s.__popoutReady=r,s._onClose=o;const a=s.document;a.open(),a.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${i??ne("Cosmoz image viewer")}</title>
</head>
<body>
	<script type="module" src="${e}"><\/script>
</body>
</html>`),a.close(),rt=s,s.addEventListener("beforeunload",()=>s._onClose?.()),s.addEventListener("beforeunload",()=>rt=null)},ya=async({source:s,fileIndex:e,index:t,syncImageIndex:n,syncFileIndex:i,title:r,loop:o,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",ma({height:700,width:800})),d=globalThis["pdfjs-dist/build/pdf"]?.GlobalWorkerOptions?.workerSrc??globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc,h={source:s,fileIndex:e,index:t,detachedShowZoom:a,loop:o,title:r,pdfWorkerSrc:d},f={imageIndex:g=>n({detail:{value:g}}),fileIndex:g=>i({detail:{value:g}})};if(Tn()&&u.__popoutUpdate){u._onClose?.(),u.__popoutUpdate(h),u.__popoutSync=f,u._onClose=c,l();return}const p=await ga();ba(u,{entryUrl:p,state:h,sync:f,title:r,onDetach:l,onClose:c})},va=s=>new Promise(e=>{const t=setInterval(()=>{s()&&(e(),clearInterval(t))},100)}),xa=({images:s})=>{const e=window.open(void 0,"czimgviewerprint");Mt(v`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${s.map(t=>v`<img src="${Ne(Promise.resolve(Fe(t)))}" />`)}`,e.document.body),va(()=>Array.from(e.document.querySelectorAll("img")).every(t=>t.src&&t.complete)).then(()=>e.print()).then(()=>e.close())},wa=({files:s,safeFileIndex:e,imageIndex:t,title:n,loop:i,detachedShowZoom:r,setImageIndex:o,setFileIndex:a})=>{const[l,c]=oe(!1),u=S(f=>o(f.detail.value),[o]),d=S(f=>a(f.detail.value),[a]),h=S(()=>ya({source:s,fileIndex:e,index:t,syncImageIndex:u,syncFileIndex:d,title:n,loop:i,detachedShowZoom:r,onDetach:()=>c(!0),onClose:()=>c(!1)}),[s,e,t,n,i,r]);return{detached:l,detach:h,syncDetachedState:f=>c(f.detail.value)}},Bs=[],Sa=({source:s,images:e,pdf:t,pdfOptions:n})=>s??(e!=null||t!=null?[{images:e??Bs,pdf:t,pdfOptions:n}]:Bs),_a=[],$a=s=>{const e=V(()=>Promise.resolve(Fe(s)),[s]),[t,n,i]=yn(e);return{files:t??_a,loading:i==="pending",error:n}},Ca=[],La=s=>{const e=V(()=>Sa({source:s.source,images:s.images,pdf:s.pdf,pdfOptions:s.pdfOptions}),[s.source,s.images,s.pdf,s.pdfOptions]),{files:t,loading:n,error:i}=$a(e),[r,o]=pe("currentFileIndex",0),a=t.length>0?et(r??0,0,t.length-1):0,l=t[a],c=l?[l]:Ca,u=G(Qe),d=S(h=>{const f=h.detail?.[0],p=t.indexOf(f);p>=0&&(u.current=Qe,o(p))},[t]);return P(()=>{const h=r??0;t.length>0&&h>=t.length&&o(0)},[t]),{files:t,loading:n,error:i,fileIndex:r,setFileIndex:o,safeFileIndex:a,selectedFile:l,value:c,onSelect:d,directionRef:u}},Ea=()=>{const[s,e]=oe(!1);return{isFullscreen:s,openFullscreen:()=>e(!0),closeFullscreen:()=>e(!1)}},Us=(s,e,t,n)=>{const i=s.length;let r=1;for(;r<=i;){const o=(e+r*t+i)%i;if(!n&&(t>0&&o<=e||t<0&&o>=e))return null;const a=s[o];if(a.images?.length||a.pdf)return o;r++}return null},Ce=[],Oa=s=>{const[e,t]=oe({images:Ce,loading:!1,error:void 0});return P(()=>{if(!s){t({images:Ce,loading:!1,error:void 0});return}const n=s.pdf,i=s.images??Ce;if(!n){t({images:i,loading:!1,error:void 0});return}t({images:Ce,loading:!0,error:void 0});let r=!1;return ot(async()=>{const{loadPdfThunks:o}=await import("./pdf-loader-B_xPwwqY.js");return{loadPdfThunks:o}},__vite__mapDeps([5,1]),import.meta.url).then(({loadPdfThunks:o})=>o(n,s.pdfOptions)).then(o=>{r||t({images:o,loading:!1,error:void 0})}).catch(o=>{r||t({images:Ce,loading:!1,error:o})}),()=>{r=!0}},[s]),e},za=({files:s,safeFileIndex:e,loop:t,setFileIndex:n,directionRef:i})=>{const[r,o]=pe("currentImageIndex",0),a=s[e],{images:l,loading:c,error:u}=Oa(a),d=l.length>0?et(r??0,0,l.length-1):0,h=l[d],f=!t&&e===0&&d<=0,p=!t&&e===s.length-1&&d>=l.length-1,g=G(!1),m=S(()=>{if(i.current=Qe,d<l.length-1)return o(d+1);const b=Us(s,e,1,t);b!=null&&(n(b),o(0))},[d,l.length,s,e,t]),x=S(()=>{if(i.current=So,d>0)return o(d-1);const b=Us(s,e,-1,t);b!=null&&(b===e?o(l.length-1):(g.current=!0,n(b)))},[d,s,e,t,l.length]);return P(()=>{if(l.length===0)return;if(g.current){g.current=!1,o(l.length-1);return}const b=r??0;b>=l.length&&o(et(b,0,l.length-1))},[l]),{imageIndex:r,setImageIndex:o,nextImage:m,previousImage:x,first:f,last:p,index:d,image:h,images:l,contentLoading:c,contentError:u,downloadFileName:a?.downloadFileName??"archive"}},Ra=Symbol("memo"),ka=s=>{let e=Ra,t;return function(n){if(e===n)return t;const i=s(n);return t=i,e=n,i}},Fn=s=>{if(!s.currentTarget.parentElement)return;s.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),s.currentTarget.setAttribute("hidden",!0)},Pa=s=>s.detail.value==="error"&&Fn(s),Na=({src$:s,showZoom:e,isZoomed:t,index:n})=>{const i=ve(s,()=>Ne(s));return[e?v`<haunted-pan-zoom
					.src=${i}
					?disabled=${!t}
					@status-changed=${Pa}
				>
					${n!=null?v`<slot name="overlay-page-${n}"></slot>`:J}
				</haunted-pan-zoom>`:v`<div class="image-container">
					<img .src=${i} @error=${Fn} />
					${n!=null?v`<slot name="overlay-page-${n}"></slot>`:J}
				</div>`,ve(s,()=>Ne(s.then(()=>J),v`<cz-spinner></cz-spinner>`))]},Aa=s=>v`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${s.image}</div>
		</div>
		${Na(s)}
	</div>`,Ia=({image:s,showZoom:e,isZoomed:t,directionRef:n,index:i})=>{const r=V(()=>ka(o=>Promise.resolve(Fe(o))),[]);return V(()=>s==null?{id:Math.random(),content:J,animation:Qe}:{id:s,render:()=>Aa({src$:r(s),showZoom:e,isZoomed:t,image:s,index:i}),animation:n.current},[s,e,t,i])},Ta=50,Fa=300,ja=(s,{onSwipeLeft:e,onSwipeRight:t,enabled:n})=>{const i=G(null);P(()=>{if(!n)return;const r=a=>{if(a.touches.length!==1)return;const l=a.touches[0];i.current={x:l.clientX,y:l.clientY,t:Date.now()}},o=a=>{if(!i.current)return;const l=a.changedTouches[0],c=l.clientX-i.current.x,u=l.clientY-i.current.y,d=Date.now()-i.current.t;i.current=null,!(d>Fa)&&(Math.abs(c)<Ta||Math.abs(c)<Math.abs(u)||(c<0?e?.():t?.()))};return s.addEventListener("touchstart",r,{passive:!0}),s.addEventListener("touchend",o,{passive:!0}),()=>{s.removeEventListener("touchstart",r),s.removeEventListener("touchend",o)}},[s,e,t,n])},Ma=()=>{const[s,e]=oe(!1),t=S(()=>(e(n=>!n),s?1:1.5),[s]);return{isZoomed:s,toggleZoom:t}},Va=s=>{const{showZoom:e,showPageNumber:t,showNav:n,showDetach:i,showFullscreen:r,showClose:o,title:a,loop:l,detachedShowZoom:c}=s,{files:u,loading:d,error:h,setFileIndex:f,safeFileIndex:p,selectedFile:g,value:m,onSelect:x,directionRef:b}=La(s),{setImageIndex:C,nextImage:w,previousImage:L,first:O,last:E,index:y,image:k,images:z,contentLoading:D,contentError:q,downloadFileName:T}=za({files:u,safeFileIndex:p,loop:l,setFileIndex:f,directionRef:b}),{isZoomed:N,toggleZoom:B}=Ma();ja(s,{enabled:!N,onSwipeLeft:w,onSwipeRight:L});const A=Ia({image:k,showZoom:e,isZoomed:N,directionRef:b,index:y}),{isFullscreen:F,openFullscreen:M,closeFullscreen:R}=Ea(),{detached:H,detach:j,syncDetachedState:Z}=wa({files:u,safeFileIndex:p,imageIndex:y,title:a,loop:l,detachedShowZoom:c,setImageIndex:C,setFileIndex:f}),Q=S(()=>{Tn()&&j()},[j]);bi("detached",H,[H]),P(()=>{s.toggleAttribute("hidden",H)},[H]),Ht({syncState:Q},[Q]);const ge=u.length>1||z.length>=2,yt=V(()=>g?.pdf?()=>Wo(g.pdf,T,g.pdfOptions):()=>Xo(z,T),[g,T,z]),vt=S(()=>xa({images:z}),[z]);return{host:s,isZoomed:N,toggleZoom:B,currentSlide:A,nextImage:w,previousImage:L,first:O,last:E,total:z.length,hasNav:ge,currentImageIndex:y,selectedImageNumber:y+1,onDownloadPdf:yt,isFullscreen:F,openFullscreen:M,closeFullscreen:R,onPrintPdf:vt,detached:H,detach:j,syncDetachedState:Z,setFileIndex:f,setImageIndex:C,loading:d||D,error:h,contentError:q,files:u,selectedFile:g,selectedIndex:p,value:m,onSelect:x,images:z,showPageNumber:t,showNav:n,showZoom:e,showDetach:i,showFullscreen:r,showClose:o}},Ks=()=>document.createComment(""),Da=Mt(J,new DocumentFragment).constructor;class Ha extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Ha);class Ba extends lt{_op;_outlet;_content;render(e,t=document.body){return v`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[t,n=document.body]){return this.updateOutlet(n,t),this.render(t,n)}updateOutlet(e,t){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const n=this._op??=new Da(e.appendChild(Ks()),e.appendChild(Ks()));ce(n,this._content=t)}clearOutlet(){const e=this._op;e&&(Bn(e),Ue(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Ua=le(Ba),Ka=v`<svg
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
</svg>`,Ya=v`<svg
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
</svg>`,Xa=v`<svg
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
</svg>`,Wa=v`<svg
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
</svg>`,Ja=v`<svg
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
</svg>`,Za=v`<svg
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
</svg>`,Ga=v`<svg
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
</svg>`,qa=v`<svg
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
</svg>`,Qa=v`<svg
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
</svg>`,el=s=>s?Za:Ga,tl=()=>v`<div class="loading"><cz-spinner></cz-spinner></div>`,sl=s=>v`<div class="error">
		<h2>${ne("Failed to load files.")}</h2>
		<div class="desc">${s?.message??s}</div>
	</div>`,nl=(s,e)=>v`<div class="counter">${s}/${e}</div>`,il=({hasNav:s,first:e,last:t,previousImage:n,nextImage:i})=>I(s,()=>v`
			<button
				class="nav"
				name="prev"
				?disabled=${e}
				@click=${n}
			>
				${Ja}
			</button>
			<button class="nav" name="next" ?disabled=${t} @click=${i}>
				${Qa}
			</button>
		`),rl=({files:s,value:e,onSelect:t})=>I(s.length>1,()=>v`<cosmoz-autocomplete
				text-property="title"
				limit="1"
				.min=${1}
				show-single
				preserve-order
				.source=${s}
				.value=${e}
				@value=${t}
			></cosmoz-autocomplete>`),ol=({showZoom:s,total:e,isZoomed:t,toggleZoom:n})=>I(s&&e,()=>v`<button
				class="nav"
				@click=${i=>i.target.getRootNode().querySelector("haunted-pan-zoom").zoomTo(n())}
				title="${ne("Zoom image")}"
			>
				${el(t)}
			</button>`),al=({showDetach:s,total:e,detach:t})=>I(s&&e,()=>v`<button
				class="nav"
				@click=${t}
				title="${ne("Detach image to separate window")}"
			>
				${Wa}
			</button>`),ll=({total:s,onDownloadPdf:e})=>I(s,()=>v`<button
				class="nav"
				@click=${e}
				title="${ne("Download images")}"
			>
				${Ya}
			</button>`),cl=({total:s,onPrintPdf:e})=>I(s,()=>v`<button
				class="nav"
				@click=${e}
				title="${ne("Print images")}"
			>
				${qa}
			</button>`),ul=({showFullscreen:s,total:e,openFullscreen:t})=>I(s&&e,()=>v`<button
				class="nav"
				@click=${t}
				title="${ne("Fullscreen image")}"
			>
				${Xa}
			</button>`),dl=({showClose:s,total:e,host:t})=>I(s&&e,()=>v`<button
				class="nav"
				@click=${()=>t.dispatchEvent(new CustomEvent("close"))}
				title="${ne("Close fullscreen")}"
			>
				${Ka}
			</button>`),hl=s=>v`<div class="actions">
		${[il(s),rl(s),v`<span style="flex:auto"></span>`,ol(s),al(s),ll(s),cl(s),ul(s),dl(s)]}
	</div>`,fl=(s,e)=>I(s,()=>v`<p class="error">${ne("Failed to load PDF.")}</p>`,()=>I(!e,()=>v`<p>${ne("No image loaded.")}</p>`)),pl=s=>I(!s.loading&&!s.error,()=>v`
			${I(s.showPageNumber&&s.total,()=>nl(s.selectedImageNumber,s.total))}
			${hl(s)}
			${fl(s.contentError,s.total)}
			<cosmoz-slider id="slider" .slide=${s.currentSlide}></cosmoz-slider>
		`),gl=({files:s,selectedIndex:e,currentImageIndex:t,setFileIndex:n,setImageIndex:i,syncDetachedState:r,closeFullscreen:o,host:a})=>Ua(v`<cosmoz-image-viewer
			fullscreen
			.source=${s}
			.currentFileIndex=${e}
			.currentImageIndex=${t}
			@current-file-index-changed=${ns(n)}
			@current-image-index-changed=${ns(i)}
			@detached-changed=${r}
			show-nav
			show-zoom
			show-close
			@close=${o}
			?show-detach=${a.showDetach}
			?loop=${a.loop}
		></cosmoz-image-viewer>`),ml=s=>[I(!s.detached,()=>[I(s.loading,tl),I(s.error,()=>sl(s.error)),pl(s)]),I(s.isFullscreen,()=>gl(s))],bl=s=>ml(Va(s));customElements.define("cosmoz-image-viewer",Y(bl,{observedAttributes:["download-file-name","pdf","show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"],styleSheets:[Uo]}));
