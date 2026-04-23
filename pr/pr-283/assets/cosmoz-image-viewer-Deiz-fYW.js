const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-CKFOE4aL.js","./preload-helper-PPVm8Dsz.js","./popout-entry-D2qgJmNL.js","./iframe-C3xDermh.js","./iframe-Bv8SCm1X.css","./pdf-loader-B_xPwwqY.js"])))=>i.map(i=>d[i]);
import{r as hs,D as tn,A as G,b as v,E as U,p as ps,n as mi,M as _i,u as ie,v as ve,h as We,j as yi}from"./iframe-C3xDermh.js";import{_ as gt}from"./preload-helper-PPVm8Dsz.js";let Qe,fs=0;function mn(t){Qe=t}function _n(){Qe=null,fs=0}function bi(){return fs++}const Nt=Symbol("haunted.phase"),Ge=Symbol("haunted.hook"),yn=Symbol("haunted.update"),bn=Symbol("haunted.commit"),oe=Symbol("haunted.effects"),Oe=Symbol("haunted.layoutEffects"),Yt="haunted.context";class vi{update;host;virtual;[Ge];[oe];[Oe];constructor(e,n){this.update=e,this.host=n,this[Ge]=new Map,this[oe]=[],this[Oe]=[]}run(e){mn(this);let n=e();return _n(),n}_runEffects(e){let n=this[e];mn(this);for(let s of n)s.call(this);_n()}runEffects(){this._runEffects(oe)}runLayoutEffects(){this._runEffects(Oe)}teardown(){this[Ge].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const wi=Promise.resolve().then.bind(Promise.resolve());function gs(){let t=[],e;function n(){e=null;let s=t;t=[];for(var i=0,r=s.length;i<r;i++)s[i]()}return function(s){t.push(s),e==null&&(e=wi(n))}}const xi=gs(),vn=gs();class Si{renderer;host;state;[Nt];_updateQueued;_active;constructor(e,n){this.renderer=e,this.host=n,this.state=new vi(this.update.bind(this),n),this[Nt]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(xi(()=>{let e=this.handlePhase(yn);vn(()=>{this.handlePhase(bn,e),vn(()=>{this.handlePhase(oe)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,n){switch(this[Nt]=e,e){case bn:this.commit(n),this.runEffects(Oe);return;case yn:return this.render();case oe:return this.runEffects(oe)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const mt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Pi=t=>t?.map(e=>typeof e=="string"?mt(e):e),Ci=(t,...e)=>t.flatMap((n,s)=>[n,e[s]||""]).join(""),ce=Ci,Ei=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Oi(t){class e extends Si{frag;renderResult;constructor(i,r,o){super(i,o||r),this.frag=r}commit(i){this.renderResult=t(i,this.frag)}}function n(s,i,r){const o=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=Pi(s.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(s,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new e(s,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,b,y){if(b===y)return;let P=y===""?!0:y;Reflect.set(this,Ei(m),P)}}function p(g){let m=g,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){b&&m===y||(b=!0,m=y,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,b,y){let P;return m in g?(P=Object.getOwnPropertyDescriptor(g,m),P&&P.set?(P.set.call(y,b),!0):(Reflect.set(g,m,b,y),!0)):(typeof m=="symbol"||m[0]==="_"?P={enumerable:!0,configurable:!0,writable:!0,value:b}:P=p(b),Object.defineProperty(y,m,P),P.set&&P.set.call(y,b),!0)}});return Object.setPrototypeOf(h.prototype,f),h}return n}class Q{id;state;constructor(e,n){this.id=e,this.state=n}}function $i(t,...e){let n=bi(),s=Qe[Ge],i=s.get(n);return i||(i=new t(n,Qe,...e),s.set(n,i)),i.update(...e)}function ee(t){return $i.bind(null,t)}function ms(t){return ee(class extends Q{callback;lastValues;values;_teardown;constructor(e,n,s,i){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function _s(t,e){t[oe].push(e)}const $=ms(_s),zi=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ys=ee(class extends Q{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,_s(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};zi(this.state.host).dispatchEvent(new CustomEvent(Yt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:i}=e;this.value=s?i:t.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ti(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Yt,this)}disconnectedCallback(){this.removeEventListener(Yt,this)}handleEvent(s){const{detail:i}=s;i.Context===n&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let i of this.listeners)i(s)}get value(){return this._value}},Consumer:t(function({render:s}){const i=ys(n);return s(i)},{useShadowDOM:!1}),defaultValue:e};return n}}const N=ee(class extends Q{value;values;constructor(t,e,n,s){super(t,e),this.value=n(),this.values=s}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),S=(t,e)=>N(()=>t,e);function Li(t,e){t[Oe].push(e)}const et=ms(Li),te=ee(class extends Q{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),bs=ee(class extends Q{reducer;currentState;constructor(t,e,n,s,i){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(s):s}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),Ai=/([A-Z])/gu,Fe=ee(class extends Q{property;eventName;constructor(t,e,n,s){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ai,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),wn=t=>e=>{e.preventDefault(),t(e.detail.value)};function Ri(t){let e=t;return{get current(){return e},set current(n){e=n},get value(){return e},set value(n){e=n}}}function W(t){return N(()=>Ri(t),[])}ee(class extends Q{update(){return this.state.host}});function ki({render:t}){const e=Oi(t),n=Ti(e);return{component:e,createContext:n}}const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ne=t=>(...e)=>({_$litDirective$:t,values:e});let ye=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,s){this._$Ct=e,this._$AM=n,this._$Ci=s}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};const $e=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(e,!1),$e(s,e);return!0},tt=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},vs=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Mi(e)}};function Ni(t){this._$AN!==void 0?(tt(this),this._$AM=t,vs(this)):this._$AM=t}function Ii(t,e=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let r=n;r<s.length;r++)$e(s[r],!1),tt(s[r]);else s!=null&&($e(s,!1),tt(s));else $e(this,t)}const Mi=t=>{t.type==Z.CHILD&&(t._$AP??=Ii,t._$AQ??=Ni)};class _t extends ye{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,s){super._$AT(e,n,s),vs(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&($e(this,e),tt(this))}setValue(e){if(hs(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:Y,createContext:Di}=ki({render:tn}),yt=(t,...e)=>t.flatMap((n,s)=>[n,e[s]??""]).join(""),nn=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},It=new WeakMap,be=ne(class extends _t{render(t){return G}update(t,[e]){const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),G}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let n=It.get(e);n===void 0&&(n=new WeakMap,It.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?It.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Fi=({host:t,popoverRef:e,disabled:n,openOnHover:s,openOnFocus:i,open:r,close:o})=>{const a=W(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;s&&(t.matches(":hover")||d?.matches(":hover"))||t.matches(":focus-within")||d?.matches(":focus-within")||o()},100)},u=()=>{n||(l(),r())};return $(()=>{if(!(!s||n))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[s,n,t]),$(()=>{if(!(!i||n))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[i,n,t]),{scheduleClose:c,cancelClose:l}},ji=t=>{if(t.newState!=="open")return;const s=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Vi=ce`
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
`,Bi=t=>{const{placement:e="bottom span-right",disabled:n,openOnHover:s,openOnFocus:i}=t,r=W(),[o,a]=Fe("opened",!1),l=S(()=>{n||(a(!0),r.current?.showPopover())},[n]),c=S(()=>{a(!1),r.current?.hidePopover()},[]),u=S(()=>{if(n)return;r.current?.matches(":popover-open")?c():l()},[n]);$(()=>{const g=r.current;g&&(o?g.showPopover():g.hidePopover())},[o]),$(()=>{t.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:d,cancelClose:h}=Fi({host:t,popoverRef:r,disabled:n,openOnHover:s,openOnFocus:i,open:l,close:c}),p=i?l:u,f=S(g=>{ji(g),a(g.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return v`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${f}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${be(g=>g&&(r.current=g))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",Y(Bi,{styleSheets:[Vi],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const K=t=>t??G;const bt=ne(class extends ye{constructor(t){if(super(t),t.type!==Z.PROPERTY&&t.type!==Z.ATTRIBUTE&&t.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!hs(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===U||e===G)return e;const n=t.element,s=t.name;if(t.type===Z.PROPERTY){if(e===n[s])return U}else if(t.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(s))return U}else if(t.type===Z.ATTRIBUTE&&n.getAttribute(s)===e+"")return U;return ps(t),e}});function A(t,e,n){return t?e(t):n?.(t)}const ws=(t,{label:e,invalid:n,errorMessage:s})=>v`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${A(e,()=>v`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${A(n&&s,()=>v`<div class="error" part="error">${s}</div>`)}
	`,xs=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],xn=yt`
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
`,Ss=yt`
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
		${xn}
	}
	@container style(--focused: focused) {
		${xn}
	}
`,Hi=t=>N(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]),sn=ee(class extends Q{values;constructor(t,e,n,s){super(t,e),Object.assign(e.host,n),this.values=s}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),je=ee(class extends Q{update(){return this.state.host}}),Ui=/([A-Z])/gu,Xt=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(Ui,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},Yi=(t,e,n=[e])=>{const s=je();$(()=>{Xt(s,t,e)},n)},Ps=t=>{const e=W(void 0),n=S(l=>e.current=l,[]),s=t.shadowRoot,i=S(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=S(l=>Xt(t,"value",l.target.value),[]),o=S(l=>Xt(t,"focused",l.type==="focus"),[]),a=S(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return sn({validate:a},[a]),$(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return s.addEventListener("mousedown",l),()=>s.removeEventListener("mousedown",l)},[]),{onChange:i,onFocus:o,onInput:r,onRef:n}},Xi=({placeholder:t,noLabelFloat:e,label:n})=>(e?n:void 0)||t||" ",Ki=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...xs],Ji=t=>{const{type:e="text",pattern:n,allowedPattern:s,autocomplete:i,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=t,{onChange:h,onFocus:p,onInput:f,onRef:g}=Ps(t),m=Hi(s);return ws(v`
			<input
				${be(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${K(n)}
				autocomplete=${K(i)}
				placeholder=${Xi(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${bt(r??"")}
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
		`,t)};customElements.define("cosmoz-input",Y(Ji,{observedAttributes:Ki,styleSheets:[mt(Ss)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Sn=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Wi=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",s=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=s,t.setAttribute("rows",n)}},Gi=t=>{const{value:e,maxRows:n}=t,s=N(()=>()=>t.shadowRoot.querySelector("#input"),[]);$(()=>Wi(s(),n),[n,s]),$(()=>Sn(s()),[s,e]),$(()=>{const i=s(),r=new ResizeObserver(()=>requestAnimationFrame(()=>Sn(i)));return r.observe(i),()=>r.unobserve(i)},[s])},Zi=["rows","placeholder",...xs],qi=t=>{const{autocomplete:e,value:n,placeholder:s,readonly:i,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:h}=Ps(t);return Gi(t),ws(v`
			<textarea id="input" part="input"
				${be(h)}
				autocomplete=${K(e)}
				placeholder=${s||" "}
				rows=${o??1} cols=${K(a)}
				?readonly=${i} ?aria-disabled=${r} ?disabled=${r}
				.value=${bt(n??"")} maxlength=${K(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",Y(qi,{observedAttributes:Zi,styleSheets:[mt(Ss)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Qi=t=>{const{label:e,value:n,disabled:s,error:i}=t,r=S(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${bt(!!n)}
			?disabled=${s}
			@change=${r}
		/>
		${A(e,()=>v`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${A(i,o=>v`<div class="failure">${o}</div>`)} `},er=ce`
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
`,tr=ce`
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
`;customElements.define("cosmoz-toggle",Y(Qi,{styleSheets:[tr,er],observedAttributes:["disabled"]}));const x=t=>typeof t=="string",we=()=>{let t,e;const n=new Promise((s,i)=>{t=s,e=i});return n.resolve=t,n.reject=e,n},Pn=t=>t==null?"":""+t,nr=(t,e,n)=>{t.forEach(s=>{e[s]&&(n[s]=e[s])})},sr=/###/g,Cn=t=>t&&t.indexOf("###")>-1?t.replace(sr,"."):t,En=t=>!t||x(t),ze=(t,e,n)=>{const s=x(e)?e.split("."):e;let i=0;for(;i<s.length-1;){if(En(t))return{};const r=Cn(s[i]);!t[r]&&n&&(t[r]=new n),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++i}return En(t)?{}:{obj:t,k:Cn(s[i])}},On=(t,e,n)=>{const{obj:s,k:i}=ze(t,e,Object);if(s!==void 0||e.length===1){s[i]=n;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=ze(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=ze(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=n},ir=(t,e,n,s)=>{const{obj:i,k:r}=ze(t,e,Object);i[r]=i[r]||[],i[r].push(n)},nt=(t,e)=>{const{obj:n,k:s}=ze(t,e);if(n)return n[s]},rr=(t,e,n)=>{const s=nt(t,n);return s!==void 0?s:nt(e,n)},Cs=(t,e,n)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in t?x(t[s])||t[s]instanceof String||x(e[s])||e[s]instanceof String?n&&(t[s]=e[s]):Cs(t[s],e[s],n):t[s]=e[s]);return t},fe=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var or={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ar=t=>x(t)?t.replace(/[&<>"'\/]/g,e=>or[e]):t;class lr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const cr=[" ",",","?","!",";"],ur=new lr(20),dr=(t,e,n)=>{e=e||"",n=n||"";const s=cr.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(s.length===0)return!0;const i=ur.getRegExp(`(${s.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!i.test(t);if(!r){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(r=!0)}return r},Kt=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const s=e.split(n);let i=t;for(let r=0;r<s.length;){if(!i||typeof i!="object")return;let o,a="";for(let l=r;l<s.length;++l)if(l!==r&&(a+=n),a+=s[l],o=i[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<s.length-1)continue;r+=l-r+1;break}i=o}return i},st=t=>t&&t.replace("_","-"),hr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class it{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||hr,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,s,i){return i&&!this.debug?null:(x(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new it(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new it(this.logger,e)}}var q=new it;class vt{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const i=this.observers[s].get(n)||0;this.observers[s].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...s])})}}class $n extends vt{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],s&&(Array.isArray(s)?a.push(...s):x(s)&&r?a.push(...s.split(r)):a.push(s)));const l=nt(this.data,a);return!l&&!n&&!s&&e.indexOf(".")>-1&&(e=a[0],n=a[1],s=a.slice(2).join(".")),l||!o||!x(s)?l:Kt(this.data&&this.data[e]&&this.data[e][n],s,r)}addResource(e,n,s,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,n];s&&(a=a.concat(o?s.split(o):s)),e.indexOf(".")>-1&&(a=e.split("."),i=n,n=a[1]),this.addNamespaces(n),On(this.data,a,i),r.silent||this.emit("added",e,n,s,i)}addResources(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in s)(x(s[r])||Array.isArray(s[r]))&&this.addResource(e,n,r,s[r],{silent:!0});i.silent||this.emit("added",e,n,s)}addResourceBundle(e,n,s,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),i=s,s=n,n=a[1]),this.addNamespaces(n);let l=nt(this.data,a)||{};o.skipCopy||(s=JSON.parse(JSON.stringify(s))),i?Cs(l,s,r):l={...l,...s},On(this.data,a,l),o.silent||this.emit("added",e,n,s)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var Es={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,s,i){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,n,s,i))}),e}};const zn={};class rt extends vt{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),nr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=q.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const s=this.resolve(e,n);return s&&s.res!==void 0}extractFromKey(e,n){let s=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let r=n.ns||this.options.defaultNS||[];const o=s&&e.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!dr(e,s,i);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:x(r)?[r]:r};const c=e.split(s);(s!==i||s===i&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(i)}return{key:e,namespaces:x(r)?[r]:r}}translate(e,n,s){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],c=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${w}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const d=this.resolve(e,n);let h=d&&d.res;const p=d&&d.usedKey||o,f=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],b=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,P=!x(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&P&&m.indexOf(g)<0&&!(x(b)&&Array.isArray(h))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,h,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=w,d.usedParams=this.getUsedParamsDetails(n),d):w}if(r){const w=Array.isArray(h),E=w?[]:{},L=w?f:p;for(const z in h)if(Object.prototype.hasOwnProperty.call(h,z)){const _=`${L}${r}${z}`;E[z]=this.translate(_,{...n,joinArrays:!1,ns:a}),E[z]===_&&(E[z]=h[z])}h=E}}else if(y&&x(b)&&Array.isArray(h))h=h.join(b),h&&(h=this.extendTranslation(h,e,n,s));else{let w=!1,E=!1;const L=n.count!==void 0&&!x(n.count),z=rt.hasDefaultValue(n),_=L?this.pluralResolver.getSuffix(c,n.count,n):"",I=n.ordinal&&L?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",R=L&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),k=R&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${_}`]||n[`defaultValue${I}`]||n.defaultValue;!this.isValidLookup(h)&&z&&(w=!0,h=k),this.isValidLookup(h)||(E=!0,h=o);const X=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:h,M=z&&k!==h&&this.options.updateMissing;if(E||w||M){if(this.logger.log(M?"updateKey":"missingKey",c,l,o,M?k:h),r){const C=this.resolve(o,{...n,keySeparator:!1});C&&C.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let D=[];const F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&F&&F[0])for(let C=0;C<F.length;C++)D.push(F[C]);else this.options.saveMissingTo==="all"?D=this.languageUtils.toResolveHierarchy(n.lng||this.language):D.push(n.lng||this.language);const pe=(C,V,j)=>{const se=z&&j!==h?j:X;this.options.missingKeyHandler?this.options.missingKeyHandler(C,l,V,se,M,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(C,l,V,se,M,n),this.emit("missingKey",C,l,V,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?D.forEach(C=>{const V=this.pluralResolver.getSuffixes(C,n);R&&n[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(j=>{pe([C],o+j,n[`defaultValue${j}`]||k)})}):pe(D,o,k))}h=this.extendTranslation(h,e,n,d,s),E&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(E||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(n),d):h}extendTranslation(e,n,s,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=x(e)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=e.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=s.replace&&!x(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,s.lng||this.language||i.usedLng,s),c){const h=e.match(this.interpolator.nestingRegexp),p=h&&h.length;u<p&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(s.lng=this.language||i.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,p=new Array(h),f=0;f<h;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!s.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):o.translate(...p,n)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=x(a)?[a]:a;return e!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(e=Es.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,i,r,o,a;return x(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,n),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=n.count!==void 0&&!x(n.count),p=h&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),f=n.context!==void 0&&(x(n.context)||typeof n.context=="number")&&n.context!=="",g=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(m=>{this.isValidLookup(s)||(a=m,!zn[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(zn[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(b=>{if(this.isValidLookup(s))return;o=b;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,b,m,n);else{let w;h&&(w=this.pluralResolver.getSuffix(b,n.count,n));const E=`${this.options.pluralSeparator}zero`,L=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+w),n.ordinal&&w.indexOf(L)===0&&y.push(u+w.replace(L,this.options.pluralSeparator)),p&&y.push(u+E)),f){const z=`${u}${this.options.contextSeparator}${n.context}`;y.push(z),h&&(y.push(z+w),n.ordinal&&w.indexOf(L)===0&&y.push(z+w.replace(L,this.options.pluralSeparator)),p&&y.push(z+E))}}let P;for(;P=y.pop();)this.isValidLookup(s)||(r=P,s=this.getResource(b,m,P,n))}))})}),{res:s,usedKey:i,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,s,i):this.resourceStore.getResource(e,n,s,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!x(e.replace);let i=s?e.replace:e;if(s&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!s){i={...i};for(const r of n)delete i[r]}return i}static hasDefaultValue(e){const n="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&n===s.substring(0,n.length)&&e[s]!==void 0)return!0;return!1}}const Mt=t=>t.charAt(0).toUpperCase()+t.slice(1);class Tn{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=q.create("languageUtils")}getScriptPartFromCode(e){if(e=st(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=st(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(x(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let s=e.split("-");return this.options.lowerCaseLng?s=s.map(i=>i.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),n.indexOf(s[1].toLowerCase())>-1&&(s[1]=Mt(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),n.indexOf(s[1].toLowerCase())>-1&&(s[1]=Mt(s[1].toLowerCase())),n.indexOf(s[2].toLowerCase())>-1&&(s[2]=Mt(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(s=>{if(n)return;const i=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(s=>{if(n)return;const i=this.getLanguagePartFromCode(s);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(r=>{if(r===i)return r;if(!(r.indexOf("-")<0&&i.indexOf("-")<0)&&(r.indexOf("-")>0&&i.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===i||r.indexOf(i)===0&&i.length>1))return r})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),x(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let s=e[n];return s||(s=e[this.getScriptPartFromCode(n)]),s||(s=e[this.formatLanguageCode(n)]),s||(s=e[this.getLanguagePartFromCode(n)]),s||(s=e.default),s||[]}toResolveHierarchy(e,n){const s=this.getFallbackCodes(n||this.options.fallbackLng||[],e),i=[],r=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):x(e)&&r(this.formatLanguageCode(e)),s.forEach(o=>{i.indexOf(o)<0&&r(this.formatLanguageCode(o))}),i}}let pr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],fr={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const gr=["v1","v2","v3"],mr=["v4"],Ln={zero:0,one:1,two:2,few:3,many:4,other:5},_r=()=>{const t={};return pr.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:fr[e.fc]}})}),t};class yr{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=q.create("pluralResolver"),(!this.options.compatibilityJSON||mr.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=_r(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=st(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:s,type:i});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(s,{type:i})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,n)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,n);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,s).map(i=>`${n}${i}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,n);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((i,r)=>Ln[i]-Ln[r]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):s.numbers.map(i=>this.getSuffix(e,i,n)):[]}getSuffix(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const s=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let i=e.numbers[s];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const r=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!gr.includes(this.options.compatibilityJSON)}}const An=function(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=rr(t,e,n);return!r&&i&&x(n)&&(r=Kt(t,n,s),r===void 0&&(r=Kt(e,n,s))),r},Dt=t=>t.replace(/\$/g,"$$$$");class br{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:s,useRawValueToEscape:i,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:b,alwaysFormat:y}=e.interpolation;this.escape=n!==void 0?n:ar,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=r?fe(r):o||"{{",this.suffix=a?fe(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?fe(h):p||fe("$t("),this.nestingSuffix=f?fe(f):g||fe(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=b||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,s)=>n&&n.source===s?(n.lastIndex=0,n):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,s,i){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const b=An(n,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(b,void 0,s,{...i,...n,interpolationkey:p}):b}const f=p.split(this.formatSeparator),g=f.shift().trim(),m=f.join(this.formatSeparator).trim();return this.format(An(n,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,s,{...i,...n,interpolationkey:g})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Dt(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Dt(this.escape(p)):Dt(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof u=="function"){const m=u(e,r,i);o=x(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,f))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=Pn(o));const g=p.safeValue(o);if(e=e.replace(r[0],g),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const p=h.match(/'/g),f=h.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];o={...s},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(r=n(a.call(this,i[1].trim(),o),o),r&&i[0]===e&&!x(r))return r;x(r)||(r=Pn(r)),r||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,s.lng,{...s,interpolationkey:i[1].trim()}),r.trim())),e=e.replace(i[0],r),this.regexp.lastIndex=0}return e}}const vr=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const s=t.split("(");e=s[0].toLowerCase().trim();const i=s[1].substring(0,s[1].length-1);e==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();n[u]||(n[u]=c),c==="false"&&(n[u]=!1),c==="true"&&(n[u]=!0),isNaN(c)||(n[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},ge=t=>{const e={};return(n,s,i)=>{let r=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(r={...r,[i.interpolationkey]:void 0});const o=s+JSON.stringify(r);let a=e[o];return a||(a=t(st(s),i),e[o]=a),a(n)}};class wr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("formatter"),this.options=e,this.formats={number:ge((n,s)=>{const i=new Intl.NumberFormat(n,{...s});return r=>i.format(r)}),currency:ge((n,s)=>{const i=new Intl.NumberFormat(n,{...s,style:"currency"});return r=>i.format(r)}),datetime:ge((n,s)=>{const i=new Intl.DateTimeFormat(n,{...s});return r=>i.format(r)}),relativetime:ge((n,s)=>{const i=new Intl.RelativeTimeFormat(n,{...s});return r=>i.format(r,s.range||"day")}),list:ge((n,s)=>{const i=new Intl.ListFormat(n,{...s});return r=>i.format(r)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=ge(n)}format(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=vr(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},p=h.locale||h.lng||i.locale||i.lng||s;d=this.formats[c](a,p,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const xr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Sr extends vt{constructor(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=s,this.languageUtils=s.languageUtils,this.options=i,this.logger=q.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,i.backend,i)}queueLoad(e,n,s,i){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;n.forEach(d=>{const h=`${c}|${d}`;!s.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,s){const i=e.split("|"),r=i[0],o=i[1];n&&this.emit("failedLoading",r,o,n),!n&&s&&this.store.addResourceBundle(r,o,s,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&s&&(this.state[e]=0);const a={};this.queue.forEach(l=>{ir(l.loaded,[r],o),xr(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:s,tried:i,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,s,i+1,r*2,o)},r);return}o(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,n,a)}prepareLoading(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();x(e)&&(e=this.languageUtils.toResolveHierarchy(e)),x(n)&&(n=[n]);const r=this.queueLoad(e,n,s,i);if(!r.toLoad.length)return r.pending.length||i(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,s){this.prepareLoading(e,n,{},s)}reload(e,n,s){this.prepareLoading(e,n,{reload:!0},s)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=e.split("|"),i=s[0],r=s[1];this.read(i,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${r} for language ${i} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${r} for language ${i}`,a),this.loaded(e,o,a)})}saveMissing(e,n,s,i,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${s}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,n,s,i,l):u=c(e,n,s,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,n,s,i,a,l)}!e||!e[0]||this.store.addResource(e[0],n,s,i)}}}const Rn=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),x(t[1])&&(e.defaultValue=t[1]),x(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(s=>{e[s]=n[s]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),kn=t=>(x(t.ns)&&(t.ns=[t.ns]),x(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),x(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Ue=()=>{},Pr=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class Re extends vt{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=kn(e),this.services={},this.logger=q,this.modules={external:[]},Pr(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(s=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(x(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=Rn();this.options={...i,...this.options,...kn(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?q.init(r(this.modules.logger),this.options):q.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=wr);const d=new Tn(this.options);this.store=new $n(this.options.resources,this.options);const h=this.services;h.logger=q,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new yr(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new br(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Sr(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new rt(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Ue),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=we(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),s(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ue;const i=x(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};i?o(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(e,n,s){const i=we();return typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),s||(s=Ue),this.services.backendConnector.reload(e,n,r=>{i.resolve(),s(r)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Es.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const s=this.languages[n];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(e,n){var s=this;this.isLanguageChangingTo=e;const i=we();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return s.t(...arguments)}),n&&n(l,function(){return s.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,n,s){var i=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||r.keyPrefix);const h=i.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${h}${f}`):p=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,i.t(p,l)};return x(e)?r.lng=e:r.lngs=e,r.ns=n,r.keyPrefix=s,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(s,e)&&(!i||o(r,e)))}loadNamespaces(e,n){const s=we();return this.options.ns?(x(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{s.resolve(),n&&n(i)}),s):(n&&n(),Promise.resolve())}loadLanguages(e,n){const s=we();x(e)&&(e=[e]);const i=this.options.preload||[],r=e.filter(o=>i.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=i.concat(r),this.loadResources(o=>{s.resolve(),n&&n(o)}),s):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Tn(Rn());return n.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Re(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ue;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},r=new Re(i);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},s&&(r.store=new $n(this.store.data,i),r.services.resourceStore=r.store),r.translator=new rt(r.services,i),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(i,n),r.translator.options=i,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const T=Re.createInstance();T.createInstance=Re.createInstance;T.createInstance;T.dir;T.init;T.loadResources;T.reloadResources;T.use;T.changeLanguage;T.getFixedT;const Cr=T.t;T.exists;T.setDefaultNamespace;T.hasLoadedNamespace;T.loadNamespaces;T.loadLanguages;const Er={},_e=ne(class extends ye{constructor(){super(...arguments),this.ot=Er}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((s,i)=>s===this.ot[i]))return U}else if(this.ot===e)return U;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}});class Or{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let $r=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const Nn=t=>!mi(t)&&typeof t.then=="function",In=1073741823;let zr=class extends _t{constructor(){super(...arguments),this._$Cwt=In,this._$Cbt=[],this._$CK=new Or(this),this._$CX=new $r}render(...e){return e.find(n=>!Nn(n))??U}update(e,n){const s=this._$Cbt;let i=s.length;this._$Cbt=n;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<n.length&&!(a>this._$Cwt);a++){const l=n[a];if(!Nn(l))return this._$Cwt=a,l;a<i&&l===s[a]||(this._$Cwt=In,i=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return U}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ke=ne(zr);const Mn=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},Os=ne(class extends ye{constructor(t){if(super(t),t.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let s;n===void 0?n=e:e!==void 0&&(s=e);const i=[],r=[];let o=0;for(const a of t)i[o]=s?s(a,o):o,r[o]=n(a,o),o++;return{values:r,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,s]){const i=_i(t),{values:r,keys:o}=this.dt(e,n,s);if(!Array.isArray(i))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,p=0,f=r.length-1;for(;d<=h&&p<=f;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===o[p])l[p]=ie(i[d],r[p]),d++,p++;else if(a[h]===o[f])l[f]=ie(i[h],r[f]),h--,f--;else if(a[d]===o[f])l[f]=ie(i[d],r[f]),ve(t,l[f+1],i[d]),d++,f--;else if(a[h]===o[p])l[p]=ie(i[h],r[p]),ve(t,i[d],i[h]),h--,p++;else if(c===void 0&&(c=Mn(o,p,f),u=Mn(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(o[p]),m=g!==void 0?i[g]:null;if(m===null){const b=ve(t,i[d]);ie(b,r[p]),l[p]=b}else l[p]=ie(m,r[p]),ve(t,i[d],m),i[g]=null;p++}else We(i[h]),h--;else We(i[d]),d++;for(;p<=f;){const g=ve(t,l[f+1]);ie(g,r[p]),l[p++]=g}for(;d<=h;){const g=i[d++];g!==null&&We(g)}return this.ut=o,ps(t,l),U}});class wt extends Event{constructor(e){super(wt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}wt.eventName="rangeChanged";class xt extends Event{constructor(e){super(xt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}xt.eventName="visibilityChanged";class St extends Event{constructor(){super(St.eventName,{bubbles:!1})}}St.eventName="unpinned";class Tr{constructor(e){this._element=null;const n=e??window;this._node=n,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Lr extends Tr{constructor(e,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,n){const s=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;this._scrollTo(s)}scrollBy(e,n){const s=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,n=null,s=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=n,this._end=s):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:n,left:s}=e;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,n,s){return this._scrollTo(e,n,s),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:n}=this;let{top:s,left:i}=this._destination;s=Math.min(s||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const r=Math.abs(s-e),o=Math.abs(i-n);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Dn=typeof window<"u"?window.ResizeObserver:void 0;const Jt=Symbol("virtualizerRef"),Ye="virtualizer-sizer";let Fn;class Ar{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const n=e.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Dn(()=>this._hostElementSizeChanged()),this._childrenRO=new Dn(this._childrenSizeChanged.bind(this))}_initHostElement(e){const n=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),n[Jt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Nr(this._hostElement,e),this._scrollerController=new Lr(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let n=e.querySelector(`[${Ye}]`);n||(n=document.createElement("div"),n.setAttribute(Ye,""),e.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(Ye,""),this._sizer=n}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const n=e.type||Fn;if(typeof n=="function"&&this._layout instanceof n){const s={...e};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(e){let n,s;if(typeof e.type=="function"){s=e.type;const i={...e};delete i.type,n=i}else n=e;s===void 0&&(Fn=s=(await gt(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(i=>this._handleLayoutMessage(i),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),n=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:i}}return null}_measureChildren(){const e={},n=this._children,s=this._measureChildOverride||this._measureChild;for(let i=0;i<n.length;i++){const r=n[i],o=this._first+i;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=s.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:n,height:s}=e.getBoundingClientRect();return Object.assign({width:n,height:s},Rr(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:n,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new St)}get _children(){const e=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(Ye)||e.push(n),n=n.nextElementSibling;return e}_updateView(){const e=this._hostElement,n=this._scrollerController?.element,s=this._layout;if(e&&n&&s){let i,r,o,a;const l=e.getBoundingClientRect();i=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(b=>b.getBoundingClientRect());c.unshift(l);for(const b of c)i=Math.max(i,b.top),r=Math.max(r,b.left),o=Math.min(o,b.bottom),a=Math.min(a,b.right);const u=n.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:n.scrollWidth,height:n.scrollHeight},p=i-l.top+e.scrollTop,f=r-l.left+e.scrollLeft,g=Math.max(0,o-i),m=Math.max(0,a-r);s.viewportSize={width:m,height:g},s.viewportScroll={top:p,left:f},s.totalScrollSize=h,s.offsetWithinScroller=d}}_sizeHostElement(e){const s=e&&e.width!==null?Math.min(82e5,e.width):0,i=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${i}px)`;else{const r=this._hostElement.style;r.minWidth=s?`${s}px`:"100%",r.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:n,left:s,width:i,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${n}px)`,i!==void 0&&(c.style.width=i+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:n,_last:s,_firstVisible:i,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:n}=this._scrollerController,{top:s,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-s,left:n-i})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(e),{behavior:s}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:n}=this._scrollIntoViewTarget||{};n&&e?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new wt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new xt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,n)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const n of e)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Rr(t){const e=window.getComputedStyle(t);return{marginTop:Xe(e.marginTop),marginRight:Xe(e.marginRight),marginBottom:Xe(e.marginBottom),marginLeft:Xe(e.marginLeft)}}function Xe(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function jn(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function kr(t,e=!1){const n=[];let s=e?t:jn(t);for(;s!==null;)n.push(s),s=jn(s);return n}function Nr(t,e=!1){let n=!1;return kr(t,e).filter(s=>{if(n)return!1;const i=getComputedStyle(s);return n=i.position==="fixed",i.overflow!=="visible"})}const Ir=t=>t,Mr=(t,e)=>v`${e}: ${JSON.stringify(t,null,2)}`;class Dr extends _t{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,s)=>Mr(n,s+this._first),this._keyFunction=(n,s)=>Ir(n,s+this._first),this._items=[],e.type!==Z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const n=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)n.push(this._items[s]);return Os(n,this._keyFunction,this._renderItem)}update(e,[n]){this._setFunctions(n);const s=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(e,n):this._initialize(e,n),s?U:this.render()}async _updateVirtualizerConfig(e,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const i=e.parentNode;this._makeVirtualizer(i,n)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:n,keyFunction:s}=e;n&&(this._renderItem=(i,r)=>n(i,r+this._first)),s&&(this._keyFunction=(i,r)=>s(i,r+this._first))}_makeVirtualizer(e,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:i,items:r}=n;this._virtualizer=new Ar({hostElement:e,layout:s,scroller:i}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,n){const s=e.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(s,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Fr=ne(Dr),jr=(t,e)=>{if(!t||!e)return;const n=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(s=>n.includes(s)?[]:[[s,void 0]]))};class Vr extends ye{_props;render(e){return U}update(e,[n]){return this._props!==n&&Object.assign(e.element,jr(this._props,n),this._props=n),U}}const Br=ne(Vr);function Hr(t){return()=>t}const Ur=Hr(),$s=Ur,ot=t=>t,Pt=(t,...e)=>typeof t=="function"?t(...e):t,Yr=t=>{const e=je(),n=N(()=>new CSSStyleSheet,[]);$(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,n]},[]),$(()=>{n.replaceSync(t)},[t])};function Ze(t){return t?e=>e?.[t]:ot}const Xr=t=>{const e=Ze(t);return n=>typeof n=="string"?n:e(n)?.toString()||""},Kr=t=>e=>{const n={};for(const s in e)t.includes(s)&&(n[s]=e[s]);return n},Jr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Wr=ce`
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
		background: url("${Jr}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Gr=({index:t,itemHeight:e,auto:n})=>ce`
	${A(!n,()=>ce`
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
`,Zr=t=>{const e=t==="auto",[n,s]=te(e?40:t);return[n,i=>e?s(i):void 0]},zs=Di(()=>$s);customElements.define("cosmoz-keybinding-provider",zs.Provider);const rn=t=>{const e=N(()=>({}),[]);return N(()=>Object.assign(e,t),[e,...Object.values(t)])},Te=(t,e)=>{const n=ys(zs),s=rn(t);$(()=>n(s),e)},qr=Symbol("listbox.navigate.up"),Qr=Symbol("listbox.navigate.down"),eo=Symbol("listbox.select"),to=({onUp:t,onDown:e,onEnter:n})=>{const s=je();Te({activity:qr,callback:t,element:()=>s},[]),Te({activity:Qr,callback:e,element:()=>s},[]),Te({activity:eo,callback:n,element:()=>s},[])},no=({items:t,onSelect:e,defaultIndex:n=0})=>{const[s,i]=te({index:n}),{index:r}=s,{length:o}=t;return $(()=>{i({index:s.index<0?n:Math.min(s.index,t.length-1),scroll:!0})},[t,n]),to({onUp:S(()=>i(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:S(()=>i(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:S(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:s,highlight:S(a=>i({index:a}),[]),select:S(a=>e?.(a),[e])}},so=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function re(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:so(t)?Array.from(t):[t]}const Ft=(t,e=ot)=>n=>{const s=re(t).map(e);return re(n).filter(i=>!s.includes(e(i)))},io=(t,e)=>e?n=>n!=null&&re(t).find(s=>s[e]===n[e]):n=>n!=null&&re(t).includes(n),ro=(t,e)=>{if(!e||!t)return t;const n=t.toLowerCase().indexOf(e.toLowerCase());if(n<0)return t;const s=n+e.length;return[t.slice(0,n),v`<mark>${t.slice(n,s)}</mark>`,t.slice(s)]},oo=(t=ot)=>(e,n,{highlight:s,select:i,textual:r=ot,query:o,isSelected:a})=>{const l=r(e),c=ro(l,o),u=t(c,e,n);return v`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${n}
				@mouseenter=${()=>s(n)}
				@click=${()=>i(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},ao=({itemRenderer:t=oo(),...e})=>{const n=rn(e);return S((s,i)=>t(s,i,n),[n,t])},lo=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],co=({value:t,valueProperty:e,items:n,onSelect:s,defaultIndex:i,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=N(()=>io(t,e),[t,e]),d=N(()=>n.slice(),[n,u]),{position:h,highlight:p,select:f}=no({items:d,onSelect:s,defaultIndex:isNaN(i)?void 0:Number(i)}),[g,m]=Zr(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:p,select:f,itemHeight:g,setItemHeight:m,renderItem:ao({itemRenderer:a,items:d,position:h,highlight:p,select:f,textual:o,query:r,isSelected:u})}},Vn=$s,uo=t=>{const e=W(void 0),{position:n,items:s,renderItem:i,height:r,itemHeight:o,setItemHeight:a}=co(t);return $(()=>{const l=e.current?.[Jt];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Vn)},[s]),$(()=>{if(!n.scroll)return;const l=e.current?.[Jt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(n.index)?.scrollIntoView({block:"nearest"}),Vn);return}l.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Yr(Gr({...n,itemHeight:o,auto:t.itemHeight==="auto"})),v`<div
			class="items"
			style="min-height: ${r}px"
			${be(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Fr({items:s,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Y(uo,{styleSheets:[nn(Wr)]}));const ho=({multi:t,...e},n)=>v`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Br(Kr(lo)(e))}
		>${n}</cosmoz-listbox
	>`,po=yt`
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
`,fo=v`
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
`,go=({onClear:t,disabled:e})=>v`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${n=>n.preventDefault()}
	>
		<slot></slot>
	</div>
	${A(t&&!e,()=>v`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${t}
			>
				${fo}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",Y(go,{observedAttributes:["disabled"],styleSheets:[nn(po)]}));const mo=({content:t,onClear:e,disabled:n,hidden:s,className:i="chip",slot:r})=>v`<cosmoz-autocomplete-chip
		class=${K(i)}
		slot=${K(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${s}
		.onClear=${e}
		title=${K(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,_o=({value:t,min:e=0,onDeselect:n,textual:s,disabled:i,chipRenderer:r=mo})=>[...t.filter(Boolean).map(o=>r({item:o,content:s(o),onClear:t.length>e&&(()=>n(o)),disabled:i,slot:"control"})),r({item:null,content:v`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],yo=ce`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",Y(()=>G,{styleSheets:[yo]}));const bo=yt`
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
`,on=(t,e=()=>({}))=>{const n={type:t,toString(){return t}};return Object.assign((...i)=>Object.assign(e(...i),n),n)},Bn=t=>t.type||t.toString(),Hn=t=>Array.isArray(t)?t:[t],vo=(t,e)=>{const n=Hn(e),s=(n.every(Array.isArray)?n:[n]).map(([i,r])=>({actions:Hn(i).map(Bn),handle:r}));return(i=t,r)=>{const o=s.find(a=>a.actions.includes(Bn(r)));return o?o.handle(i,r):i}},ae={pending:"pending",rejected:"rejected",resolved:"resolved"},Ts={error:void 0,result:void 0,state:ae.pending},Ls=on(ae.pending),As=on(ae.resolved,t=>({result:t})),Rs=on(ae.rejected,t=>({error:t})),wo=vo(Ts,[[Ls,()=>({error:void 0,result:void 0,state:ae.pending})],[As,(t,{result:e})=>({error:void 0,result:e,state:ae.resolved})],[Rs,(t,{error:e})=>({error:e,result:void 0,state:ae.rejected})]]),ks=t=>{const[{error:e,result:n,state:s},i]=bs(wo,Ts);return $(()=>{if(!t)return;let r=!1;return i(Ls()),t.then(o=>!r&&i(As(o)),o=>!r&&i(Rs(o))),()=>{r=!0}},[t]),[n,e,s]},xo=Symbol("autocomplete.deselect.last"),So=Symbol("autocomplete.search.when.selected"),Un=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Po=(t,e,n)=>{if(!e)return t;const s=Un(e.toLowerCase()),i=[];for(const r of t){const a=Un(n(r).toLowerCase()).indexOf(s);a<0||i.push({item:r,index:a})}return i.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},Co=t=>t===!1||t==null?[]:t,Eo=(t,e,n)=>t.dispatchEvent(new CustomEvent(e,{detail:n})),Yn=[],Oo=t=>(...e)=>{let n;const s=()=>{n&&cancelAnimationFrame(n)};return s(),n=requestAnimationFrame(()=>{n=void 0,t(...e)}),s},$o=(t,e,n)=>S(s=>{e?.(s),t.dispatchEvent(new CustomEvent(n,{detail:s}))},[e]),zo=({value:t,text:e,onChange:n,onText:s,onSelect:i,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:p,defaultIndex:f,externalSearch:g,disabled:m,lazyOpen:b})=>{const y=r!=null?Number(r):void 0,P=N(()=>(c??Xr)(l),[c,l]),w=je(),[E,L]=Fe("opened",!1),z=!e,_=N(()=>e?.trim(),[e]),I=$o(w,s,"text"),R=S(C=>{n?.(C,()=>L(!1)),Eo(w,"value",C)},[n]),[k,he]=te([]),X=!!(b&&!_),M=N(()=>X?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:_,active:E}):a).then(Co),[a,E,_,X]),D=N(()=>re(t),[t]);$(()=>M.then(he),[M]),Te({activity:xo,callback:()=>{const C=re(D);C.length>0&&R(C.slice(0,-1))},check:()=>!m&&z&&w.matches(":focus-within"),element:()=>w},[]),Te({activity:So,callback:C=>{const V=re(D),j=y===1;V.length>0&&j&&C.key.length===1&&R(V.slice(0,-1))},allowDefault:!0,check:()=>!m&&z&&w.matches(":focus-within"),element:()=>w},[y]),$(()=>{!E&&!h&&I("")},[E,h]),$(()=>{w.toggleAttribute("opened",!!E)},[E]);const F=rn({onText:I,onChange:R,value:D,limit:y,min:o,keepQuery:h,keepOpened:d,setOpened:L,onSelect:i,valueProperty:u}),[,,pe]=ks(M);return{limit:y,opened:E,query:_,textual:P,value:D,source$:M,loading:pe==="pending",items:N(()=>{if(!E||X)return Yn;const C=p?k:[...D,...Ft(D,Ze(u))(k)];return g?C:Po(C,_,P)},[k,E,_,P,z,D,p,u,g,X]),onToggle:S(C=>{m||L(C.newState==="open")},[m]),onText:S(C=>{m||(I(C.target.value),L(!0))},[m,I,e,L]),onSelect:S(C=>{if(m)return;F.onSelect?.(C,F);const{onChange:V,onText:j,limit:se,min:Tt,value:Be,keepQuery:Lt,keepOpened:At,setOpened:Rt,valueProperty:fi}=F;Lt||j(""),At||Rt(!1);const He=re(Be),kt=Ze(fi),gn=He.some(gi=>kt(gi)===kt(C));gn&&He.length===Tt||V((gn?Ft(C,kt)(He):[...He,C]).slice(-se))},[m,F]),onDeselect:S(C=>{m||F.onChange(Ft(C,Ze(F.valueProperty))(F.value))},[m,F]),defaultIndex:_!==void 0&&_?.length>0?0:f}},To=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),n=t.shadowRoot.querySelector(".badge");n.hidden=!0;for(const a of e)a.hidden=!1;const i=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const o=e.length-r;for(n.querySelector("span").textContent="+"+o.toString(),n.hidden=o<1;r<e.length;r++)e[r].hidden=!0},Lo=({value:t,opened:e,wrap:n,limit:s})=>{const i=je(),r=!(n||s===1),o=N(()=>Oo(()=>To(i)),[]),[a,l]=te(0);et(()=>{if(!r)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),et(()=>r?o():void 0,[r,a,e,t])},Ao=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),Ro=({opened:t,isSingle:e,showSingle:n,hasResultsOrQuery:s})=>!t||e&&!n?!1:s,ko=t=>{const{opened:e,invalid:n,errorMessage:s,label:i,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:h,onDeselect:p,value:f,limit:g,min:m,showSingle:b,items:y,source$:P,loading:w,chipRenderer:E}=t,L=g===1,z=L&&f?.[0]!=null,_=w||y.length>0||u!=null&&u.length>0;return v`<cosmoz-dropdown-next
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
				.placeholder=${z?void 0:r}
				?no-label-float=${a}
				?always-float-label=${f?.length>0||l}
				?readonly=${z}
				?disabled=${o}
				?invalid=${_e([P,n],()=>ke(P.then(()=>n,()=>!0),n))}
				.errorMessage=${_e([P,s],()=>ke(P.then(()=>s,I=>I.message),s))}
				.value=${bt(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${Ao}
				?data-one=${L}
				?data-single=${z}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${_o({value:f,min:m,onDeselect:p,textual:c,disabled:o,chipRenderer:E})}
			</cosmoz-input>

			${A(Ro({opened:e,isSingle:z,showSingle:b,hasResultsOrQuery:_}),()=>ho({...t,items:y,multi:!L},A(w,()=>v`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>A(u!=null&&u.length>0&&y.length===0,()=>v`<slot name="no-result">
											<p class="no-result">${Cr("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ns=t=>{const e={...t,...zo(t)};return Lo(e),ko(e)},Is=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],No=t=>{const{onChange:e,onText:n,...s}=t,[i,r]=Fe("value");return $(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ns({...s,value:i,onChange:S((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:S(o=>{t.text=o,n?.(o)},[n])})},Ms=[nn(bo)],Ds={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",Y(Ns,{observedAttributes:Is,styleSheets:Ms,shadowRootInit:Ds}));customElements.define("cosmoz-autocomplete",Y(No,{observedAttributes:Is,styleSheets:Ms,shadowRootInit:Ds}));const Fs="important",Io=" !"+Fs,js=ne(class extends ye{constructor(t){if(super(t),t.type!==Z.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return s==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?n.removeProperty(s):n[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const r=typeof i=="string"&&i.endsWith(Io);s.includes("-")||r?n.setProperty(s,r?i.slice(0,-11):i,r?Fs:""):n[s]=i}}return U}});class Mo extends Promise{constructor(e){const n={};super((s,i)=>Object.assign(n,{resolve:s,reject:i})),Object.assign(this,n),e?.(n.resolve,n.reject)}resolve=()=>{}}const Vs={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Do=t=>{const{slide:e}=t,[n,s]=te([]);return et(()=>{Object.assign(t.style,Vs.host)},[]),$(()=>{if(e==null)return;const i={animationEnd$:new Mo,...e};s((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===i.id&&l!==!0);return o!==-1?[...r.slice(0,o),i,...r.slice(o+1,r.length)]:[...r,i]})},[e]),et(async()=>{if(n.filter(l=>!l.out).length<2){const l=n[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const i=n[n.length-1],r=n[n.length-2],o=i.el,a=r.el;r.out=!0,o&&a&&await i.animation?.(o,a),s((l=[])=>l.filter(c=>c!==r))},[n]),{slides:n}},Fo=t=>v`<div
		${be(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${js(Vs.slide)}
	>
		${_e([t],()=>t.content??t.render?.(t))}
	</div>`,jo=({slides:t})=>_e([t],()=>Os(t,({id:e})=>e,Fo)),Vo=t=>jo(Do(t));customElements.define("cosmoz-slider",Y(Vo,{useShadowDOM:!1}));const at=(t,e)=>{const n=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([n.finished,s.finished])},Bo=(t,e)=>{const n=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([n.finished,s.finished])},Ho=()=>v`<style>
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
</style>`;customElements.define("cz-spinner",Y(Ho));const Uo=ee(class extends Q{constructor(t,e){super(t,e),this.dispatchEvent=(...n)=>{e.host.dispatchEvent.apply(e.host,n)}}update(){return this.dispatchEvent}}),lt=(t,e,n)=>Math.max(e,Math.min(n,t)),ct=lt,an=(t,e,n,s)=>n/s<t/e?n/t:s/e,Yo=(t,e,n,s)=>n/s>t/e?n/t:s/e,Bs=(t,e,n,s,i)=>{const r=an(t,e,n,s),o=r*i,a=t*o,l=e*o,c=a<n?(-n+a)/2:(n-a)/2,u=a<n?(n-a)/2:(-n+a)/2,d=l<s?(-s+l)/2:(s-l)/2,h=l<s?(s-l)/2:(-s+l)/2;return{x:[c,u],y:[d,h]}},Hs="empty",Ct="loading",Us="loaded",ln="error",Ve="idle",Et="panning",Le="pinching",Xo=1.1,Ko=t=>Xo/t,Jo=t=>2*t,cn=(t,e,n,s)=>{const i=an(t,e,n,s),r=Yo(t*i,e*i,n,s);return Math.max(Ko(i),Jo(r))},Wo={status:Hs,interaction:Ve,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},Ys=(t,e)=>{const n={...t};return delete n[e],n},Xn=t=>{const e=Object.keys(t);if(e.length<2)return null;const n=t[e[0]],s=t[e[1]];return{midX:(n.x+s.x)/2,midY:(n.y+s.y)/2,distance:Math.hypot(s.x-n.x,s.y-n.y)}},Ne=t=>{const e=Bs(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:ct(t.panX,e.x[0],e.x[1]),panY:ct(t.panY,e.y[0],e.y[1])}},Wt=(t,e,n,s=2)=>t<e?e-(e-t)/s:t>n?n+(t-n)/s:t,Xs=t=>{const e=Bs(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:Wt(t.panX,e.x[0],e.x[1]),panY:Wt(t.panY,e.y[0],e.y[1])}},Ks=(t,{dPanX:e=0,dPanY:n=0,scaleDiff:s=1,originX:i=0,originY:r=0})=>{const o=t.zoom*s;return{...t,zoom:o,panX:e+i+(t.panX-i)*s,panY:n+r+(t.panY-r)*s}},un=(t,e,n)=>{const s=cn(t.iw,t.ih,t.cw,t.ch),i=ct(t.zoom,1,s);if(i===t.zoom)return t;const r=i/t.zoom;return{...t,zoom:i,panX:e+(t.panX-e)*r,panY:n+(t.panY-n)*r}},Go=(t,e)=>e.type==="load"?{...t,status:Ct}:t,Zo=(t,e)=>{switch(e.type){case"loaded":return{...t,status:Us,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...t,status:ln};default:return t}},qo=(t,e)=>e.type==="load"?{...t,status:Ct}:t,Qo=(t,e)=>e.type==="pointerdown"?{...t,interaction:Et,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}}:t,ea=(t,e)=>{switch(e.type){case"pointerdown":{const n={...t.pointers,[e.id]:{x:e.x,y:e.y}};return{...t,interaction:Le,pointers:n}}case"pointermove":{const n=t.pointers[e.id];if(!n)return t;const s=e.x-n.x,i=e.y-n.y;return Xs({...t,panX:t.panX+s,panY:t.panY+i,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}})}case"pointerup":{const n=Ys(t.pointers,e.id);if(Object.keys(n).length===0){const s=un({...t,pointers:n},e.settleOriginX??0,e.settleOriginY??0);return Ne({...s,interaction:Ve})}return{...t,pointers:n}}default:return t}},ta=(t,e)=>{switch(e.type){case"pointermove":{if(!t.pointers[e.id])return t;const s=Xn(t.pointers),i={...t.pointers,[e.id]:{x:e.x,y:e.y}},r=Xn(i);if(!s||!r)return{...t,pointers:i};const o=s.distance?r.distance/s.distance:1,a=r.midX-s.midX,l=r.midY-s.midY,c=e.containerOriginX+(r.midX-e.x),u=e.containerOriginY+(r.midY-e.y),d=Ks({...t,pointers:i},{dPanX:a,dPanY:l,scaleDiff:o,originX:c,originY:u}),h=cn(t.iw,t.ih,t.cw,t.ch),p=Wt(d.zoom,1,h),f=p/d.zoom,g=c+(d.panX-c)*f,m=u+(d.panY-u)*f;return Xs({...d,zoom:p,panX:g,panY:m})}case"pointerup":{const n=Ys(t.pointers,e.id);if(Object.keys(n).length<=1){const s=Ne(un({...t,pointers:n},e.settleOriginX??0,e.settleOriginY??0));return Object.keys(n).length===1?{...s,interaction:Et}:{...s,interaction:Ve}}return{...t,pointers:n}}default:return t}},na=(t,e)=>{switch(t.interaction){case Ve:return Qo(t,e);case Et:return ea(t,e);case Le:return ta(t,e);default:return t}},sa=(t,e)=>{switch(e.type){case"load":return{...t,status:Ct,interaction:Ve,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const n=cn(t.iw,t.ih,t.cw,t.ch),s=ct(e.zoom,1,n);return Ne({...t,zoom:s})}case"wheel":{const{delta:n,originX:s,originY:i}=e,r=1+n,o=Ks(t,{scaleDiff:r,originX:s,originY:i});return Ne(un(o,s,i))}case"pointerdown":case"pointermove":case"pointerup":return na(t,e);default:return t}},ia=(t,e)=>{if(e.type==="resize")return Ne({...t,cw:e.rect.width,ch:e.rect.height});switch(t.status){case Hs:return Go(t,e);case Ct:return Zo(t,e);case Us:return sa(t,e);case ln:return qo(t,e);default:return t}},ra=(t,e)=>{"ResizeObserver"in window&&$(()=>{if(e==null)return;const n=new ResizeObserver(([{contentRect:s}])=>t(s));return n.observe(e),t(e.getBoundingClientRect()),()=>n.unobserve(e)},[t,e])},jt=(t,e=.08,n=.001)=>{const[s,i]=te(null);return $(()=>{if(s==null){i(t);return}if(e>=1){i(t);return}const r=s;window.requestAnimationFrame(()=>{const o=t-r;i(Math.abs(o)<n?t:s+o*e)})},[s,i,t,e,n]),s},oa=(t,e,n,s)=>{const{iw:i=100,ih:r=100,cw:o=100,ch:a=100}=t,l=an(i,r,o,a),c=l*e;return{transform:["translate(-50%, -50%)",`translate(${n}px, ${s}px)`,`scale(${c})`].join(" ")}},Vt=(t,e,n)=>{const s=n.current?.getBoundingClientRect();return s?{originX:t-s.left-s.width/2,originY:e-s.top-s.height/2}:{originX:0,originY:0}},aa=(t=.08)=>{const[e,n]=bs(ia,Wo),s=W(),i=W(null),r=W(null),o=S(()=>n({type:"load"}),[n]),a=S(_=>n({type:"loaded",dimensions:_}),[n]),l=S(()=>n({type:"error"}),[n]),c=S(_=>n({type:"zoom",zoom:_}),[n]),u=S(_=>_&&n({type:"resize",rect:_}),[n]),d=S(()=>u(s.current&&s.current.getBoundingClientRect()),[u]);ra(u,s.current);const h=S(_=>a({iw:_.target.naturalWidth,ih:_.target.naturalHeight}),[a]),p=S(_=>{if(!(_.pointerType==="mouse"&&!_.ctrlKey)){if(_.pointerType==="mouse"||_.pointerType==="pen"){s.current?.setPointerCapture(_.pointerId),n({type:"pointerdown",id:_.pointerId,x:_.clientX,y:_.clientY});return}if(i.current){clearTimeout(r.current),r.current=null,s.current?.setPointerCapture(i.current.id),n({type:"pointerdown",id:i.current.id,x:i.current.x,y:i.current.y}),i.current=null,s.current?.setPointerCapture(_.pointerId),n({type:"pointerdown",id:_.pointerId,x:_.clientX,y:_.clientY});return}i.current={id:_.pointerId,x:_.clientX,y:_.clientY},r.current=setTimeout(()=>{r.current=null,i.current=null},200)}},[n]),f=S(_=>{if(r.current!=null&&i.current?.id===_.pointerId){const k=i.current;if(Math.hypot(_.clientX-k.x,_.clientY-k.y)>10)clearTimeout(r.current),r.current=null,s.current?.setPointerCapture(k.id),n({type:"pointerdown",id:k.id,x:k.x,y:k.y}),i.current=null;else return}const{originX:I,originY:R}=Vt(_.clientX,_.clientY,s);n({type:"pointermove",id:_.pointerId,x:_.clientX,y:_.clientY,containerOriginX:I,containerOriginY:R})},[n]),g=W({x:0,y:0});$(()=>{if(e.interaction!==Le)return;const _=Object.keys(e.pointers);if(_.length>=2){const I=e.pointers[_[0]],R=e.pointers[_[1]],k=(I.x+R.x)/2,he=(I.y+R.y)/2,{originX:X,originY:M}=Vt(k,he,s);g.current={x:X,y:M}}},[e.pointers,e.interaction]);const m=S(_=>{if(i.current?.id===_.pointerId){clearTimeout(r.current),r.current=null,i.current=null;return}try{s.current?.releasePointerCapture(_.pointerId)}catch{}n({type:"pointerup",id:_.pointerId,settleOriginX:g.current.x,settleOriginY:g.current.y})},[n]),b=S(_=>{_.preventDefault();const{originX:I,originY:R}=Vt(_.clientX,_.clientY,s);n({type:"wheel",delta:-Math.sign(_.deltaY)*.8,originX:I,originY:R})},[n]),y=e.interaction===Le,P=e.interaction===Et||e.interaction===Le;let w=t;y?w=.8:P&&(w=.9);const E=jt(e.zoom,w),L=jt(e.panX,w),z=jt(e.panY,w);return{...e,load:o,loaded:a,error:l,zoomTo:c,resize:d,onPointerDown:p,onPointerMove:f,onPointerUp:m,onImageLoad:h,onWheel:b,containerRef:s,style:oa(e,E,L,z)}},la=({src:t,disabled:e,zoomStiffness:n})=>{const{status:s,zoom:i,load:r,error:o,zoomTo:a,resize:l,onPointerDown:c,onPointerMove:u,onPointerUp:d,onImageLoad:h,onWheel:p,style:f,containerRef:g}=aa(n);if($(r,[t]),sn({zoomTo:a,resize:l,zoom:i},[a,l,i]),!t)return G;const m=Uo();return $(()=>m(new CustomEvent("zoom-changed",{detail:{value:i}})),[m,i]),$(()=>m(new CustomEvent("status-changed",{detail:{value:s}})),[m,s]),v`
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

			.transform-group {
				position: absolute;
				top: 50%;
				left: 50%;
			}

			.transform-group img {
				display: block;
				pointer-events: none;
				user-select: none;
			}

			.transform-group ::slotted(*) {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		</style>
		<div
			class="container ${s}"
			style="pointer-events: ${e?"none":"all"}"
			@wheel=${p}
			@pointerdown=${c}
			@pointermove=${u}
			@pointerup=${d}
			@pointercancel=${d}
			${be(b=>g.current=b)}
		>
			${!t||s===ln?G:v`
						<div class="transform-group" style=${js(f)}>
							<img
								src=${t}
								draggable="false"
								@load=${h}
								@error=${o}
							/>
							<slot></slot>
						</div>
					`}
		</div>
	`};class ca extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",Y(la,{observedAttributes:["src","disabled","zoom-stiffness"],baseElement:ca}));const ua=mt`:host {
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
}`,da=(t,e)=>{const n=t.width/t.height,s=e.width/e.height;return n>s?{width:e.width,height:t.height*(e.width/t.width)}:{width:t.width*(e.height/t.height),height:e.height}},ha=async(t,e)=>{const n={credentials:"include"},[{jsPDF:s},...i]=await Promise.all([gt(()=>import("./jspdf.es-CKFOE4aL.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...t.map(async a=>{const l=await Promise.resolve(Pt(a)),c=await fetch(l,n);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),r=i.filter(Boolean);if(r.length<1)return;const o=new s({compress:!0});return r.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:d}}=o,{width:h,height:p}=da(o.getImageProperties(l),{width:d.getWidth()-4,height:d.getHeight()-4});c>0&&o.addPage(),o.addImage(l,a.split(".").pop().toUpperCase(),2,2,h,p)}),o.output("blob")},Js=(t,e)=>{const n=URL.createObjectURL(t),s=document.body.appendChild(document.createElement("a"));s.href=n,s.download=`${e}.pdf`,s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)},pa=async(t,e,n)=>{const s=await ha(t);if(s)return Js(s,e),s},fa=async(t,e,n={})=>{const{httpHeaders:s,withCredentials:i=!0}=n,r=await fetch(t,{credentials:i?"include":"omit",headers:s});if(!r.ok)return;const o=await r.blob();return Js(o,e),o};window.JSCompiler_renameProperty=function(t,e){return t};let ga=/(url\()([^)]*)(\))/g,ma=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ke,H;function Ae(t,e){if(t&&ma.test(t)||t==="//")return t;if(Ke===void 0){Ke=!1;try{const n=new URL("b","http://a");n.pathname="c%20d",Ke=n.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Ke)try{return new URL(t,e).href}catch{return t}return H||(H=document.implementation.createHTMLDocument("temp"),H.base=H.createElement("base"),H.head.appendChild(H.base),H.anchor=H.createElement("a"),H.body.appendChild(H.anchor)),H.base.href=e,H.anchor.href=t,H.anchor.href||t}function dn(t,e){return t.replace(ga,function(n,s,i,r){return s+"'"+Ae(i.replace(/["']/g,""),e)+"'"+r})}function hn(t){return t.substring(0,t.lastIndexOf("/")+1)}const _a=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const ya=_a&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let ba=window.Polymer&&window.Polymer.rootPath||hn(document.baseURI||window.location.href),ut=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Gt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,va=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,wa=window.Polymer&&window.Polymer.legacyOptimizations||!1,xa=window.Polymer&&window.Polymer.legacyWarnings||!1,Sa=window.Polymer&&window.Polymer.syncInitialRender||!1,Zt=window.Polymer&&window.Polymer.legacyUndefined||!1,Pa=window.Polymer&&window.Polymer.orderedComputed||!1,Kn=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ca=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ea=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Oa=0;const ue=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=Oa++;function s(i){let r=i.__mixinSet;if(r&&r[n])return i;let o=e,a=o.get(i);if(!a){a=t(i),o.set(i,a);let l=Object.create(a.__mixinSet||r||null);l[n]=!0,a.__mixinSet=l}return a}return s};let pn={},Ws={};function Jn(t,e){pn[t]=Ws[t.toLowerCase()]=e}function Wn(t){return pn[t]||Ws[t.toLowerCase()]}function $a(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Ie extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,n){if(e){let s=Wn(e);return s&&n?s.querySelector(n):s}return null}attributeChangedCallback(e,n,s,i){n!==s&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,n=Ae(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=hn(n)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Gt&&Wn(e)!==void 0)throw Jn(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Jn(e,this),$a(this)}}}Ie.prototype.modules=pn;customElements.define("dom-module",Ie);const za="link[rel=import][type~=css]",Ta="include",Gn="shady-unscoped";function Gs(t){return Ie.import(t)}function Zn(t){let e=t.body?t.body:t;const n=dn(e.textContent,t.baseURI),s=document.createElement("style");return s.textContent=n,s}function La(t){const e=t.trim().split(/\s+/),n=[];for(let s=0;s<e.length;s++)n.push(...Aa(e[s]));return n}function Aa(t){const e=Gs(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const n=[];n.push(...qs(e));const s=e.querySelector("template");s&&n.push(...Zs(s,e.assetpath)),e._styles=n}return e._styles}function Zs(t,e){if(!t._styles){const n=[],s=t.content.querySelectorAll("style");for(let i=0;i<s.length;i++){let r=s[i],o=r.getAttribute(Ta);o&&n.push(...La(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=dn(r.textContent,e)),n.push(r)}t._styles=n}return t._styles}function Ra(t){let e=Gs(t);return e?qs(e):[]}function qs(t){const e=[],n=t.querySelectorAll(za);for(let s=0;s<n.length;s++){let i=n[s];if(i.import){const r=i.import,o=i.hasAttribute(Gn);if(o&&!r._unscopedStyle){const a=Zn(r);a.setAttribute(Gn,""),r._unscopedStyle=a}else r._style||(r._style=Zn(r));e.push(o?r._unscopedStyle:r._style)}}return e}const le=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function qt(t){return t.indexOf(".")>=0}function de(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function ka(t,e){return t.indexOf(e+".")===0}function dt(t,e){return e.indexOf(t+".")===0}function ht(t,e,n){return e+n.slice(t.length)}function Ce(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let s=t[n].toString().split(".");for(let i=0;i<s.length;i++)e.push(s[i])}return e.join(".")}else return t}function Qs(t){return Array.isArray(t)?Ce(t).split("."):t.toString().split(".")}function B(t,e,n){let s=t,i=Qs(e);for(let r=0;r<i.length;r++){if(!s)return;let o=i[r];s=s[o]}return n&&(n.path=i.join(".")),s}function qn(t,e,n){let s=t,i=Qs(e),r=i[i.length-1];if(i.length>1){for(let o=0;o<i.length-1;o++){let a=i[o];if(s=s[a],!s)return}s[r]=n}else s[e]=n;return i.join(".")}const pt={},Na=/-[a-z]/g,Ia=/([A-Z])/g;function ei(t){return pt[t]||(pt[t]=t.indexOf("-")<0?t:t.replace(Na,e=>e[1].toUpperCase()))}function Ot(t){return pt[t]||(pt[t]=t.replace(Ia,"-$1").toLowerCase())}let Ma=0,ti=0,me=[],Da=0,Qt=!1,ni=document.createTextNode("");new window.MutationObserver(Fa).observe(ni,{characterData:!0});function Fa(){Qt=!1;const t=me.length;for(let e=0;e<t;e++){let n=me[e];if(n)try{n()}catch(s){setTimeout(()=>{throw s})}}me.splice(0,t),ti+=t}const ja={run(t){return Qt||(Qt=!0,ni.textContent=Da++),me.push(t),Ma++},cancel(t){const e=t-ti;if(e>=0){if(!me[e])throw new Error("invalid async handle: "+t);me[e]=null}}};const Va=ja,si=ue(t=>{class e extends t{static createProperties(s){const i=this.prototype;for(let r in s)r in i||i._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,i){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,i))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[s];return i||(i=this.constructor.attributeNameForProperty(s),this.__dataAttributes[i]=s),i}_definePropertyAccessor(s,i){Object.defineProperty(this,s,{get(){return this.__data[s]},set:i?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,i){this._setPendingProperty(s,i)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,i,r){let o=this.__data[s],a=this._shouldPropertyChange(s,i,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=o),this.__data[s]=i,this.__dataPending[s]=i),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Va.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,i=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,i,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,i,r)),this.__dataCounter--}_shouldPropertiesChange(s,i,r){return!!i}_propertiesChanged(s,i,r){}_shouldPropertyChange(s,i,r){return r!==i&&(r===r||i===i)}attributeChangedCallback(s,i,r,o){i!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,i,r,o)}_attributeToProperty(s,i,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[s]||s;this[a]=this._deserializeValue(i,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,i,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,i||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,i,r){const o=this._serializeValue(i);(r==="class"||r==="name"||r==="slot")&&(s=le(s)),o===void 0?s.removeAttribute(r):s.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(s){return typeof s==="boolean"?s?"":void 0:s?.toString()}_deserializeValue(s,i){switch(i){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return e});const ii={};let Je=HTMLElement.prototype;for(;Je;){let t=Object.getOwnPropertyNames(Je);for(let e=0;e<t.length;e++)ii[t[e]]=!0;Je=Object.getPrototypeOf(Je)}const Ba=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Ha(t,e){if(!ii[e]){let n=t[e];n!==void 0&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}const Ua=ue(t=>{const e=si(t);class n extends e{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let r=0;r<i.length;r++)this.prototype._createPropertyAccessor(ei(i[r]))}static attributeNameForProperty(i){return Ot(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let r in i)this._setProperty(r,i[r])}_ensureAttribute(i,r){const o=this;o.hasAttribute(i)||this._valueToNodeAttribute(o,r,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(Ba(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,r){let o;switch(r){case Object:try{o=JSON.parse(i)}catch{o=i}break;case Array:try{o=JSON.parse(i)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:o=isNaN(i)?String(i):Number(i),o=new Date(o);break;default:o=super._deserializeValue(i,r);break}return o}_definePropertyAccessor(i,r){Ha(this,i),super._definePropertyAccessor(i,r)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return n});const Ya={"dom-if":!0,"dom-repeat":!0};let Qn=!1,es=!1;function Xa(){if(!Qn){Qn=!0;const t=document.createElement("textarea");t.placeholder="a",es=t.placeholder===t.textContent}return es}function Ka(t){Xa()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Ja=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,n,s)=>{const i=n.getAttribute(s);if(t&&s.startsWith("on-")){e.setAttribute(s,t.createScript(i,s));return}e.setAttribute(s,i)}})();function Wa(t){let e=t.getAttribute("is");if(e&&Ya[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;){const{name:s}=n.attributes[0];Ja(t,n,s),n.removeAttribute(s)}}return t}function ri(t,e){let n=e.parentInfo&&ri(t,e.parentInfo);if(n){for(let s=n.firstChild,i=0;s;s=s.nextSibling)if(e.parentIndex===i++)return s}else return t}function Ga(t,e,n,s){s.id&&(e[s.id]=n)}function Za(t,e,n){if(n.events&&n.events.length)for(let s=0,i=n.events,r;s<i.length&&(r=i[s]);s++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function qa(t,e,n,s){n.templateInfo&&(e._templateInfo=n.templateInfo,e._parentTemplateInfo=s)}function Qa(t,e,n){return t=t._methodHost||t,function(i){t[n]?t[n](i,i.detail):console.warn("listener method `"+n+"` not defined")}}const el=ue(t=>{class e extends t{static _parseTemplate(s,i){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!i,r.stripWhiteSpace=i&&i.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,i,r){return this._parseTemplateNode(s.content,i,r)}static _parseTemplateNode(s,i,r){let o=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,i,r)||o:a.localName==="slot"&&(i.hasInsertionPoint=!0),Ka(a),a.firstChild&&this._parseTemplateChildNodes(a,i,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,i,r)||o),o||r.noted}static _parseTemplateChildNodes(s,i,r){if(!(s.localName==="script"||s.localName==="style"))for(let o=s.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Wa(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,s.removeChild(u),u=l;if(i.stripWhiteSpace&&!o.textContent.trim()){s.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(s,i,r){let o=s,a=this._parseTemplate(o,i);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,i,r){let o=!1,a=Array.from(s.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(s,i,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(s,i,r,o,a){return o.slice(0,3)==="on-"?(s.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let i=s._templateInfo;return i&&i.content||s.content}_stampTemplate(s,i){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),i=i||this.constructor._parseTemplate(s);let r=i.nodeInfoList,o=i.content||s.content,a=document.importNode(o,!0);a.__noInsertionPoint=!i.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=ri(a,d);Ga(this,a.$,h,d),qa(this,h,d,i),Za(this,h,d)}return a=a,a}_addMethodEventListenerToNode(s,i,r,o){o=o||s;let a=Qa(o,i,r);return this._addEventListenerToNode(s,i,a),a}_addEventListenerToNode(s,i,r){s.addEventListener(i,r)}_removeEventListenerFromNode(s,i,r){s.removeEventListener(i,r)}}return e});let Me=0;const De=[],O={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},oi="__computeInfo",tl=/[A-Z]/;function Bt(t,e,n){let s=t[e];if(!s)s=t[e]={};else if(!t.hasOwnProperty(e)&&(s=t[e]=Object.create(t[e]),n))for(let i in s){let r=s[i],o=s[i]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return s}function Ee(t,e,n,s,i,r){if(e){let o=!1;const a=Me++;for(let l in n){let c=i?de(l):l,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==a)&&(!i||fn(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,n,s,p.info,i,r),o=!0)}return o}return!1}function nl(t,e,n,s,i,r,o,a){let l=!1,c=o?de(s):s,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==n)&&(!o||fn(s,p.trigger))&&(p.info&&(p.info.lastRun=n),p.fn(t,s,i,r,p.info,o,a),l=!0);return l}function fn(t,e){if(e){let n=e.name;return n==t||!!(e.structured&&ka(n,t))||!!(e.wildcard&&dt(n,t))}else return!0}function ts(t,e,n,s,i){let r=typeof i.method=="string"?t[i.method]:i.method,o=i.property;r?r.call(t,t.__data[o],s[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function sl(t,e,n,s,i){let r=t[O.NOTIFY],o,a=Me++;for(let c in e)e[c]&&(r&&nl(t,r,a,c,n,s,i)||i&&il(t,c,n))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function il(t,e,n){let s=de(e);if(s!==e){let i=Ot(s)+"-changed";return ai(t,i,n[e],e),!0}return!1}function ai(t,e,n,s){let i={value:n,queueProperty:!0};s&&(i.path=s),le(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function rl(t,e,n,s,i,r){let a=(r?de(e):e)!=e?e:null,l=a?B(t,a):t.__data[e];a&&l===void 0&&(l=n[e]),ai(t,i.eventName,l,a)}function ol(t,e,n,s,i){let r,o=t.detail,a=o&&o.path;a?(s=ht(n,s,a),r=o&&o.value):r=t.currentTarget[n],r=i?!r:r,(!e[O.READ_ONLY]||!e[O.READ_ONLY][s])&&e._setPendingPropertyOrPath(s,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function al(t,e,n,s,i){let r=t.__data[e];ut&&(r=ut(r,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,r)}function ll(t,e,n,s){let i=t[O.COMPUTE];if(i)if(Pa){Me++;const r=ul(t),o=[];for(let l in e)ns(l,i,o,r,s);let a;for(;a=o.shift();)li(t,"",e,n,a)&&ns(a.methodInfo,i,o,r,s);Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Ee(t,i,r,n,s);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const cl=(t,e,n)=>{let s=0,i=e.length-1,r=-1;for(;s<=i;){const o=s+i>>1,a=n.get(e[o].methodInfo)-n.get(t.methodInfo);if(a<0)s=o+1;else if(a>0)i=o-1;else{r=o;break}}r<0&&(r=i+1),e.splice(r,0,t)},ns=(t,e,n,s,i)=>{const r=i?de(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Me&&(!i||fn(t,l.trigger))&&(l.info.lastRun=Me,cl(l.info,n,s))}};function ul(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const n=t[O.COMPUTE];let{counts:s,ready:i,total:r}=dl(t),o;for(;o=i.shift();){e.set(o,e.size);const a=n[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--s[c]===0&&i.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function dl(t){const e=t[oi],n={},s=t[O.COMPUTE],i=[];let r=0;for(let o in e){const a=e[o];r+=n[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in s)e[o]||i.push(o);return{counts:n,ready:i,total:r}}function li(t,e,n,s,i){let r=en(t,e,n,s,i);if(r===De)return!1;let o=i.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function hl(t,e,n){let s=t.__dataLinkedPaths;if(s){let i;for(let r in s){let o=s[r];dt(r,e)?(i=ht(r,o,e),t._setPendingPropertyOrPath(i,n,!0,!0)):dt(o,e)&&(i=ht(o,r,e),t._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ht(t,e,n,s,i,r,o){n.bindings=n.bindings||[];let a={kind:s,target:i,parts:r,literal:o,isCompound:r.length!==1};if(n.bindings.push(a),_l(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Ot(i)+"-changed",a.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,pl(t,e,a,u,l)}}function pl(t,e,n,s,i){if(!s.literal)if(n.kind==="attribute"&&n.target[0]==="-")console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,o={index:i,binding:n,part:s,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=ui(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:fl,info:o,trigger:l})}}}function fl(t,e,n,s,i,r,o){let a=o[i.index],l=i.binding,c=i.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=n[e];e=ht(c.source,l.target,e),a._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(a)}else{let u=i.evaluator._evaluateBinding(t,c,e,n,s,r);u!==De&&gl(t,a,l,c,u)}}function gl(t,e,n,s,i){if(i=ml(e,i,n,s),ut&&(i=ut(i,n.target,n.kind,e)),n.kind=="attribute")t._valueToNodeAttribute(e,i,n.target);else{let r=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[O.READ_ONLY]||!e[O.READ_ONLY][r])&&e._setPendingProperty(r,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,i)}}function ml(t,e,n,s){if(n.isCompound){let i=t.__dataCompoundStorage[n.target];i[s.compoundIndex]=e,e=i.join("")}return n.kind!=="attribute"&&(n.target==="textContent"||n.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function _l(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function yl(t,e){let{nodeList:n,nodeInfoList:s}=e;if(s.length)for(let i=0;i<s.length;i++){let r=s[i],o=n[i],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];bl(o,c),vl(o,t,c)}o.__dataHost=t}}function bl(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,i=new Array(s.length);for(let o=0;o<s.length;o++)i[o]=s[o].literal;let r=e.target;n[r]=i,e.literal&&e.kind=="property"&&(r==="className"&&(t=le(t)),t[r]=e.literal)}}function vl(t,e,n){if(n.listenerEvent){let s=n.parts[0];t.addEventListener(n.listenerEvent,function(i){ol(i,e,n.target,s.source,s.negate)})}}function ss(t,e,n,s,i,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,n,{fn:s,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,n,{fn:s,info:o}),o}function en(t,e,n,s,i){let r=t._methodHost||t,o=r[i.methodName];if(o){let a=t._marshalArgs(i.args,e,n);return a===De?De:o.apply(r,a)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const wl=[],ci="(?:[a-zA-Z_$][\\w.:$\\-*]*)",xl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Sl="(?:'(?:[^'\\\\]|\\\\.)*')",Pl='(?:"(?:[^"\\\\]|\\\\.)*")',Cl="(?:"+Sl+"|"+Pl+")",is="(?:("+ci+"|"+xl+"|"+Cl+")\\s*)",El="(?:"+is+"(?:,\\s*"+is+")*)",Ol="(?:\\(\\s*(?:"+El+"?)\\)\\s*)",$l="("+ci+"\\s*"+Ol+"?)",zl="(\\[\\[|{{)\\s*",Tl="(?:]]|}})",Ll="(?:(!)\\s*)?",Al=zl+Ll+$l+Tl,rs=new RegExp(Al,"g");function os(t){let e="";for(let n=0;n<t.length;n++){let s=t[n].literal;e+=s||""}return e}function Ut(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let s={methodName:e[1],static:!0,args:wl};if(e[2].trim()){let i=e[2].replace(/\\,/g,"&comma;").split(",");return Rl(i,s)}else return s}return null}function Rl(t,e){return e.args=t.map(function(n){let s=ui(n);return s.literal||(e.static=!1),s},this),e}function ui(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},s=e[0];switch(s==="-"&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0;break}return n.literal||(n.rootProperty=de(e),n.structured=qt(e),n.structured&&(n.wildcard=e.slice(-2)==".*",n.wildcard&&(n.name=e.slice(0,-2)))),n}function as(t,e,n){let s=B(t,n);return s===void 0&&(s=e[n]),s}function di(t,e,n,s){const i={indexSplices:s};Zt&&!t._overrideLegacyUndefined&&(e.splices=i),t.notifyPath(n+".splices",i),t.notifyPath(n+".length",e.length),Zt&&!t._overrideLegacyUndefined&&(i.indexSplices=[])}function xe(t,e,n,s,i,r){di(t,e,n,[{index:s,addedCount:i,removed:r,object:e,type:"splice"}])}function kl(t){return t[0].toUpperCase()+t.substring(1)}const Nl=ue(t=>{const e=el(Ua(t));class n extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return O}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Se.length){let i=Se[Se.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let r=this[O.READ_ONLY];for(let o in i)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=i[o])}_addPropertyEffect(i,r,o){this._createPropertyAccessor(i,r==O.READ_ONLY);let a=Bt(this,r,!0)[i];a||(a=this[r][i]=[]),a.push(o)}_removePropertyEffect(i,r,o){let a=Bt(this,r,!0)[i],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(i,r){let o=this[r];return!!(o&&o[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,O.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,O.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,O.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,O.COMPUTE)}_setPendingPropertyOrPath(i,r,o,a){if(a||de(Array.isArray(i)?i[0]:i)!==i){if(!a){let l=B(this,i);if(i=qn(this,i,r),!i||!super._shouldPropertyChange(i,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,r,o))return hl(this,i,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,r,o);this[i]=r}return!1}_setUnmanagedPropertyToNode(i,r,o){(o!==i[r]||typeof o=="object")&&(r==="className"&&(i=le(i)),i[r]=o)}_setPendingProperty(i,r,o){let a=this.__dataHasPaths&&qt(i),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,r,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),a?this.__dataTemp[i]=r:this.__data[i]=r,this.__dataPending[i]=r,(a||this[O.NOTIFY]&&this[O.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=o),!0):!1}_setProperty(i,r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let r=0;r<i.length;r++){let o=i[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,r){for(let o in i)(r||!this[O.READ_ONLY]||!this[O.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,i[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ll(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Ee(this,this[O.REFLECT],r,o,a),Ee(this,this[O.OBSERVE],r,o,a),l&&sl(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,r,o){this[O.PROPAGATE]&&Ee(this,this[O.PROPAGATE],i,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,r,o)}_runEffectsForTemplate(i,r,o,a){const l=(c,u)=>{Ee(this,i.propertyEffects,c,o,u,i.nodeList);for(let d=i.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};i.runEffects?i.runEffects(l,r,a):l(r,a)}linkPaths(i,r){i=Ce(i),r=Ce(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=r}unlinkPaths(i){i=Ce(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,r){let o={path:""},a=B(this,i,o);di(this,a,o.path,r)}get(i,r){return B(r||this,i)}set(i,r,o){o?qn(o,i,r):(!this[O.READ_ONLY]||!this[O.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,r,!0)&&this._invalidateProperties()}push(i,...r){let o={path:""},a=B(this,i,o),l=a.length,c=a.push(...r);return r.length&&xe(this,a,o.path,l,r.length,[]),c}pop(i){let r={path:""},o=B(this,i,r),a=!!o.length,l=o.pop();return a&&xe(this,o,r.path,o.length,0,[l]),l}splice(i,r,o,...a){let l={path:""},c=B(this,i,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&xe(this,c,l.path,r,a.length,u),u}shift(i){let r={path:""},o=B(this,i,r),a=!!o.length,l=o.shift();return a&&xe(this,o,r.path,0,0,[l]),l}unshift(i,...r){let o={path:""},a=B(this,i,o),l=a.unshift(...r);return r.length&&xe(this,a,o.path,0,r.length,[]),l}notifyPath(i,r){let o;if(arguments.length==1){let a={path:""};r=B(this,i,a),o=a.path}else Array.isArray(i)?o=Ce(i):o=i;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,r){this._addPropertyEffect(i,O.READ_ONLY),r&&(this["_set"+kl(i)]=function(o){this._setProperty(i,o)})}_createPropertyObserver(i,r,o){let a={property:i,method:r,dynamicFn:!!o};this._addPropertyEffect(i,O.OBSERVE,{fn:ts,info:a,trigger:{name:i}}),o&&this._addPropertyEffect(r,O.OBSERVE,{fn:ts,info:a,trigger:{name:r}})}_createMethodObserver(i,r){let o=Ut(i);if(!o)throw new Error("Malformed observer expression '"+i+"'");ss(this,o,O.OBSERVE,en,null,r)}_createNotifyingProperty(i){this._addPropertyEffect(i,O.NOTIFY,{fn:rl,info:{eventName:Ot(i)+"-changed",property:i}})}_createReflectedProperty(i){let r=this.constructor.attributeNameForProperty(i);r[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,O.REFLECT,{fn:al,info:{attrName:r}})}_createComputedProperty(i,r,o){let a=Ut(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=ss(this,a,O.COMPUTE,li,i,o);Bt(this,oi)[i]=l}_marshalArgs(i,r,o){const a=this.__data,l=[];for(let c=0,u=i.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:f,literal:g}=i[c];if(!g)if(p){const m=dt(d,r),b=as(a,o,m?r:d);f={path:m?r:d,value:b,base:m?B(a,d):b}}else f=h?as(a,o,d):a[d];if(Zt&&!this._overrideLegacyUndefined&&f===void 0&&i.length>1)return De;l[c]=f}return l}static addPropertyEffect(i,r,o){this.prototype._addPropertyEffect(i,r,o)}static createPropertyObserver(i,r,o){this.prototype._createPropertyObserver(i,r,o)}static createMethodObserver(i,r){this.prototype._createMethodObserver(i,r)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,r){this.prototype._createReadOnlyProperty(i,r)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,r,o){this.prototype._createComputedProperty(i,r,o)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,r){let o=this.constructor._parseTemplate(i),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(i,r,o){let a=i.hostProps=i.hostProps||{};a[r]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(i,r){r=r||this._bindTemplate(i,!0),Se.push(this);let o=super._stampTemplate(i,r);if(Se.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,yl(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(i){const r=i.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];le(le(d).parentNode).removeChild(d)}}static _parseTemplateNode(i,r,o){let a=e._parseTemplateNode.call(this,i,r,o);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,r);l&&(i.textContent=os(l)||" ",Ht(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(i,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";tl.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=os(c);return h&&d=="attribute"&&(a=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(a)),i.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&i.setAttribute(a,""),i.localName==="input"&&u==="value"&&i.setAttribute(u,""),i.removeAttribute(u),d==="property"&&(a=ei(a)),Ht(this,r,o,d,a,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,i,r,o,a,l)}static _parseTemplateNestedTemplate(i,r,o){let a=e._parseTemplateNestedTemplate.call(this,i,r,o);const l=i.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";Kn&&(u||d)&&(l.removeChild(i),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Ca&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),Kn||(o.parentInfo.noted=!0));else{let p="{";for(let f in h){let g=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Ht(this,r,o,"property","_host_"+f,g)}}return a}static _parseBindings(i,r){let o=[],a=0,l;for(;(l=rs.exec(i))!==null;){l.index>a&&o.push({literal:i.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),h=!0);let g=Ut(d),m=[];if(g){let{args:b,methodName:y}=g;for(let w=0;w<b.length;w++){let E=b[w];E.literal||m.push(E)}let P=r.dynamicFns;(P&&P[y]||g.static)&&(m.push(y),g.dynamicFn=!0)}else m.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:m,event:p}),a=rs.lastIndex}if(a&&a<i.length){let c=i.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(i,r,o,a,l,c){let u;return r.signature?u=en(i,o,a,l,r.signature):o!=r.source?u=B(i,r.source):c&&qt(o)?u=B(i,o):u=i.__data[o],r.negate&&(u=!u),u}}return n}),Se=[];function Il(t){const e={};for(let n in t){const s=t[n];e[n]=typeof s=="function"?{type:s}:s}return e}const Ml=ue(t=>{const e=si(t);function n(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof i?o:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=Il(a))}r.__ownProperties=o}return r.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=n(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=s(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=n(this);this.__properties=Object.assign({},o&&o._properties,s(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});const Dl="3.5.1",ls=window.ShadyCSS&&window.ShadyCSS.cssBuild,Fl=ue(t=>{const e=Ml(Nl(t));function n(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!ls){const h=c.content.querySelectorAll("style"),p=Zs(c),f=Ra(u),g=c.content.firstElementChild;for(let b=0;b<f.length;b++){let y=f[b];y.textContent=l._processStyleText(y.textContent,d),c.content.insertBefore(y,g)}let m=0;for(let b=0;b<p.length;b++){let y=p[b],P=h[m];P!==y?(y=y.cloneNode(!0),P.parentNode.insertBefore(y,P)):m++,y.textContent=l._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Ea&&ls&&ya){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!Gt||va)&&(c=Ie.import(l,"template"),Gt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return Dl}static _finalizeClass(){e._finalizeClass.call(this);const c=s(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):wa||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)i(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=hn(c.url);else{const u=Ie.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ba,this.importPath=this.constructor.importPath;let c=n(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return dn(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Ae(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=le(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Sa&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Ae(this.importPath)),Ae(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return xa&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return a});window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});const jl=Fl(HTMLElement),qe=[],$t=()=>{T.isInitialized||T.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},zt=t=>t.reduce((e,n,s)=>(e.count===void 0&&typeof n=="number"&&(e.count=n),typeof n=="object"?{...e,...n}:(e[s]=n,e)),{}),J=function(t){$t();const e=zt([...arguments].slice(1));return delete e.count,T.t(t,e)},Vl=function(t,e){$t();const n=zt([...arguments].slice(2)),s=n.count;let i;delete n.count;const r=T.services.pluralResolver.getSuffix(T.language,s);return r?(n.defaultValue=e,i=t+r):(i=t,n.defaultValue=t),T.t(i,n)},Bl=function(t,e){$t();const n=zt([...arguments].slice(2));return n.context=t,delete n.count,T.t(e,n)},Hl=function(t,e,n){$t();const s=zt([...arguments].slice(3)),i=s.count,r=t?"_"+t:"";let o=e;delete s.count;const a=T.services.pluralResolver.getSuffix(T.language,i);return a?(s.defaultValue=n,o=e+r+a):(o=e,s.context=t),T.t(o,s)},Ul=(t,e,n)=>{T.init({resources:{}}),T.addResourceBundle(t,e,n)};ue(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(n=>n!==this.t)}_(){return J.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),qe.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=qe.indexOf(this);e>=0&&qe.splice(e,1)}gettext(){return J.apply(null,this._filterT([...arguments]))}ngettext(){return Vl.apply(null,this._filterT([...arguments]))}pgettext(){return Bl.apply(null,this._filterT([...arguments]))}npgettext(){return Hl.apply(null,this._filterT([...arguments]))}});class Yl extends jl{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(Ul(this.language,this.namespace,e),qe.forEach(n=>n.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),T.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Yl);let Xl;const Kl=async()=>Xl??=(await gt(async()=>{const{url:t}=await import("./popout-entry-D2qgJmNL.js");return{url:t}},__vite__mapDeps([2,1,3,4]),import.meta.url)).url,Jl=t=>Object.entries(t).map(([e,n])=>e+"="+n).join(",");let ft=null;const hi=()=>ft!=null&&!ft.closed,Wl=(t,{entryUrl:e,state:n,sync:s,title:i,onDetach:r,onClose:o})=>{t.__popoutState=n,t.__popoutSync=s,t.__popoutReady=r,t._onClose=o;const a=t.document;a.open(),a.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${i??J("Cosmoz image viewer")}</title>
</head>
<body>
	<script type="module" src="${e}"><\/script>
</body>
</html>`),a.close(),ft=t,t.addEventListener("beforeunload",()=>t._onClose?.()),t.addEventListener("beforeunload",()=>ft=null)},Gl=async({source:t,fileIndex:e,index:n,syncImageIndex:s,syncFileIndex:i,title:r,loop:o,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",Jl({height:700,width:800})),d=globalThis["pdfjs-dist/build/pdf"]?.GlobalWorkerOptions?.workerSrc??globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc,h={source:t,fileIndex:e,index:n,detachedShowZoom:a,loop:o,title:r,pdfWorkerSrc:d},p={imageIndex:g=>s({detail:{value:g}}),fileIndex:g=>i({detail:{value:g}})};if(hi()&&u.__popoutUpdate){u._onClose?.(),u.__popoutUpdate(h),u.__popoutSync=p,u._onClose=c,l();return}const f=await Kl();Wl(u,{entryUrl:f,state:h,sync:p,title:r,onDetach:l,onClose:c})},Zl=t=>new Promise(e=>{const n=setInterval(()=>{t()&&(e(),clearInterval(n))},100)}),ql=({images:t})=>{const e=window.open(void 0,"czimgviewerprint");tn(v`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${t.map(n=>v`<img src="${ke(Promise.resolve(Pt(n)))}" />`)}`,e.document.body),Zl(()=>Array.from(e.document.querySelectorAll("img")).every(n=>n.src&&n.complete)).then(()=>e.print()).then(()=>e.close())},Ql=({files:t,safeFileIndex:e,imageIndex:n,title:s,loop:i,detachedShowZoom:r,setImageIndex:o,setFileIndex:a})=>{const[l,c]=te(!1),u=S(p=>o(p.detail.value),[o]),d=S(p=>a(p.detail.value),[a]),h=S(()=>Gl({source:t,fileIndex:e,index:n,syncImageIndex:u,syncFileIndex:d,title:s,loop:i,detachedShowZoom:r,onDetach:()=>c(!0),onClose:()=>c(!1)}),[t,e,n,s,i,r]);return{detached:l,detach:h,syncDetachedState:p=>c(p.detail.value)}},cs=[],ec=({source:t,images:e,pdf:n,pdfOptions:s})=>t??(e!=null||n!=null?[{images:e??cs,pdf:n,pdfOptions:s}]:cs),tc=[],nc=t=>{const e=N(()=>Promise.resolve(Pt(t)),[t]),[n,s,i]=ks(e);return{files:n??tc,loading:i==="pending",error:s}},sc=[],ic=t=>{const e=N(()=>ec({source:t.source,images:t.images,pdf:t.pdf,pdfOptions:t.pdfOptions}),[t.source,t.images,t.pdf,t.pdfOptions]),{files:n,loading:s,error:i}=nc(e),[r,o]=Fe("currentFileIndex",0),a=n.length>0?lt(r??0,0,n.length-1):0,l=n[a],c=l?[l]:sc,u=W(at),d=S(h=>{const p=h.detail?.[0],f=n.indexOf(p);f>=0&&(u.current=at,o(f))},[n]);return $(()=>{const h=r??0;n.length>0&&h>=n.length&&o(0)},[n]),{files:n,loading:s,error:i,fileIndex:r,setFileIndex:o,safeFileIndex:a,selectedFile:l,value:c,onSelect:d,directionRef:u}},rc=()=>{const[t,e]=te(!1);return{isFullscreen:t,openFullscreen:()=>e(!0),closeFullscreen:()=>e(!1)}},us=(t,e,n,s)=>{const i=t.length;let r=1;for(;r<=i;){const o=(e+r*n+i)%i;if(!s&&(n>0&&o<=e||n<0&&o>=e))return null;const a=t[o];if(a.images?.length||a.pdf)return o;r++}return null},Pe=[],oc=t=>{const[e,n]=te({images:Pe,loading:!1,error:void 0});return $(()=>{if(!t){n({images:Pe,loading:!1,error:void 0});return}const s=t.pdf,i=t.images??Pe;if(!s){n({images:i,loading:!1,error:void 0});return}n({images:Pe,loading:!0,error:void 0});let r=!1;return gt(async()=>{const{loadPdfThunks:o}=await import("./pdf-loader-B_xPwwqY.js");return{loadPdfThunks:o}},__vite__mapDeps([5,1]),import.meta.url).then(({loadPdfThunks:o})=>o(s,t.pdfOptions)).then(o=>{r||n({images:o,loading:!1,error:void 0})}).catch(o=>{r||n({images:Pe,loading:!1,error:o})}),()=>{r=!0}},[t]),e},ac=({files:t,safeFileIndex:e,loop:n,setFileIndex:s,directionRef:i})=>{const[r,o]=Fe("currentImageIndex",0),a=t[e],{images:l,loading:c,error:u}=oc(a),d=l.length>0?lt(r??0,0,l.length-1):0,h=l[d],p=!n&&e===0&&d<=0,f=!n&&e===t.length-1&&d>=l.length-1,g=W(!1),m=S(()=>{if(i.current=at,d<l.length-1)return o(d+1);const y=us(t,e,1,n);y!=null&&(s(y),o(0))},[d,l.length,t,e,n]),b=S(()=>{if(i.current=Bo,d>0)return o(d-1);const y=us(t,e,-1,n);y!=null&&(g.current=!0,s(y))},[d,t,e,n]);return $(()=>{if(l.length===0)return;if(g.current){g.current=!1,o(l.length-1);return}const y=r??0;y>=l.length&&o(lt(y,0,l.length-1))},[l]),{imageIndex:r,setImageIndex:o,nextImage:m,previousImage:b,first:p,last:f,index:d,image:h,images:l,contentLoading:c,contentError:u,downloadFileName:a?.downloadFileName??"archive"}},lc=Symbol("memo"),cc=t=>{let e=lc,n;return function(s){if(e===s)return n;const i=t(s);return n=i,e=s,i}},pi=t=>{if(!t.currentTarget.parentElement)return;t.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),t.currentTarget.setAttribute("hidden",!0)},uc=t=>t.detail.value==="error"&&pi(t),dc=({src$:t,showZoom:e,isZoomed:n,pageIndex:s})=>{const i=_e(t,()=>ke(t));return[e?v`<haunted-pan-zoom
					.src=${i}
					?disabled=${!n}
					@status-changed=${uc}
				>
					${s!=null?v`<slot name="overlay-page-${s}"></slot>`:G}
				</haunted-pan-zoom>`:v`<img .src=${i} style="width:100%" @error=${pi} />`,_e(t,()=>ke(t.then(()=>G),v`<cz-spinner></cz-spinner>`))]},hc=t=>v`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${t.image}</div>
		</div>
		${dc(t)}
	</div>`,pc=({image:t,showZoom:e,isZoomed:n,directionRef:s,pageIndex:i})=>{const r=N(()=>cc(o=>Promise.resolve(Pt(o))),[]);return N(()=>t==null?{id:Math.random(),content:G,animation:at}:{id:t,render:()=>hc({src$:r(t),showZoom:e,isZoomed:n,image:t,pageIndex:i}),animation:s.current},[t,e,n,i])},fc=50,gc=300,mc=(t,{onSwipeLeft:e,onSwipeRight:n,enabled:s})=>{const i=W(null);$(()=>{if(!s)return;const r=a=>{if(a.touches.length!==1)return;const l=a.touches[0];i.current={x:l.clientX,y:l.clientY,t:Date.now()}},o=a=>{if(!i.current)return;const l=a.changedTouches[0],c=l.clientX-i.current.x,u=l.clientY-i.current.y,d=Date.now()-i.current.t;i.current=null,!(d>gc)&&(Math.abs(c)<fc||Math.abs(c)<Math.abs(u)||(c<0?e?.():n?.()))};return t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),()=>{t.removeEventListener("touchstart",r),t.removeEventListener("touchend",o)}},[t,e,n,s])},_c=()=>{const[t,e]=te(!1),n=S(()=>(e(s=>!s),t?1:1.5),[t]);return{isZoomed:t,toggleZoom:n}},yc=t=>{const{showZoom:e,showPageNumber:n,showNav:s,showDetach:i,showFullscreen:r,showClose:o,title:a,loop:l,detachedShowZoom:c}=t,{files:u,loading:d,error:h,setFileIndex:p,safeFileIndex:f,selectedFile:g,value:m,onSelect:b,directionRef:y}=ic(t),{setImageIndex:P,nextImage:w,previousImage:E,first:L,last:z,index:_,image:I,images:R,contentLoading:k,contentError:he,downloadFileName:X}=ac({files:u,safeFileIndex:f,loop:l,setFileIndex:p,directionRef:y}),{isZoomed:M,toggleZoom:D}=_c();mc(t,{enabled:!M,onSwipeLeft:w,onSwipeRight:E});const F=pc({image:I,showZoom:e,isZoomed:M,directionRef:y,pageIndex:_}),{isFullscreen:pe,openFullscreen:C,closeFullscreen:V}=rc(),{detached:j,detach:se,syncDetachedState:Tt}=Ql({files:u,safeFileIndex:f,imageIndex:_,title:a,loop:l,detachedShowZoom:c,setImageIndex:P,setFileIndex:p}),Be=S(()=>{hi()&&se()},[se]);Yi("detached",j,[j]),$(()=>{t.toggleAttribute("hidden",j)},[j]),sn({syncState:Be},[Be]);const Lt=u.length>1||R.length>=2,At=N(()=>g?.pdf?()=>fa(g.pdf,X,g.pdfOptions):()=>pa(R,X),[g,X,R]),Rt=S(()=>ql({images:R}),[R]);return{host:t,isZoomed:M,toggleZoom:D,currentSlide:F,nextImage:w,previousImage:E,first:L,last:z,total:R.length,hasNav:Lt,currentImageIndex:_,selectedImageNumber:_+1,onDownloadPdf:At,isFullscreen:pe,openFullscreen:C,closeFullscreen:V,onPrintPdf:Rt,detached:j,detach:se,syncDetachedState:Tt,setFileIndex:p,setImageIndex:P,loading:d||k,error:h,contentError:he,files:u,selectedFile:g,selectedIndex:f,value:m,onSelect:b,images:R,showPageNumber:n,showNav:s,showZoom:e,showDetach:i,showFullscreen:r,showClose:o}},ds=()=>document.createComment(""),bc=tn(G,new DocumentFragment).constructor;class vc extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",vc);class wc extends _t{_op;_outlet;_content;render(e,n=document.body){return v`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[n,s=document.body]){return this.updateOutlet(s,n),this.render(n,s)}updateOutlet(e,n){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const s=this._op??=new bc(e.appendChild(ds()),e.appendChild(ds()));ie(s,this._content=n)}clearOutlet(){const e=this._op;e&&(yi(e),We(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const xc=ne(wc),Sc=v`<svg
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
</svg>`,Pc=v`<svg
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
</svg>`,Cc=v`<svg
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
</svg>`,Ec=v`<svg
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
</svg>`,Oc=v`<svg
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
</svg>`,$c=v`<svg
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
</svg>`,zc=v`<svg
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
</svg>`,Tc=v`<svg
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
</svg>`,Lc=v`<svg
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
</svg>`,Ac=t=>t?$c:zc,Rc=()=>v`<div class="loading"><cz-spinner></cz-spinner></div>`,kc=t=>v`<div class="error">
		<h2>${J("Failed to load files.")}</h2>
		<div class="desc">${t?.message??t}</div>
	</div>`,Nc=(t,e)=>v`<div class="counter">${t}/${e}</div>`,Ic=({hasNav:t,first:e,last:n,previousImage:s,nextImage:i})=>A(t,()=>v`
			<button
				class="nav"
				name="prev"
				?disabled=${e}
				@click=${s}
			>
				${Oc}
			</button>
			<button
				class="nav"
				name="next"
				?disabled=${n}
				@click=${i}
			>
				${Lc}
			</button>
		`),Mc=({files:t,value:e,onSelect:n})=>A(t.length>1,()=>v`<cosmoz-autocomplete
				text-property="title"
				limit="1"
				.min=${1}
				show-single
				preserve-order
				.source=${t}
				.value=${e}
				@value=${n}
			></cosmoz-autocomplete>`),Dc=({showZoom:t,total:e,isZoomed:n,toggleZoom:s})=>A(t&&e,()=>v`<button
				class="nav"
				@click=${i=>i.target.getRootNode().querySelector("haunted-pan-zoom").zoomTo(s())}
				title="${J("Zoom image")}"
			>
				${Ac(n)}
			</button>`),Fc=({showDetach:t,total:e,detach:n})=>A(t&&e,()=>v`<button
				class="nav"
				@click=${n}
				title="${J("Detach image to separate window")}"
			>
				${Ec}
			</button>`),jc=({total:t,onDownloadPdf:e})=>A(t,()=>v`<button
				class="nav"
				@click=${e}
				title="${J("Download images")}"
			>
				${Pc}
			</button>`),Vc=({total:t,onPrintPdf:e})=>A(t,()=>v`<button
				class="nav"
				@click=${e}
				title="${J("Print images")}"
			>
				${Tc}
			</button>`),Bc=({showFullscreen:t,total:e,openFullscreen:n})=>A(t&&e,()=>v`<button
				class="nav"
				@click=${n}
				title="${J("Fullscreen image")}"
			>
				${Cc}
			</button>`),Hc=({showClose:t,total:e,host:n})=>A(t&&e,()=>v`<button
				class="nav"
				@click=${()=>n.dispatchEvent(new CustomEvent("close"))}
				title="${J("Close fullscreen")}"
			>
				${Sc}
			</button>`),Uc=t=>v`<div class="actions">
		${[Ic(t),Mc(t),v`<span style="flex:auto"></span>`,Dc(t),Fc(t),jc(t),Vc(t),Bc(t),Hc(t)]}
	</div>`,Yc=(t,e)=>A(t,()=>v`<p class="error">${J("Failed to load PDF.")}</p>`,()=>A(!e,()=>v`<p>${J("No image loaded.")}</p>`)),Xc=t=>A(!t.loading&&!t.error,()=>v`
			${A(t.showPageNumber&&t.total,()=>Nc(t.selectedImageNumber,t.total))}
			${Uc(t)}
			${Yc(t.contentError,t.total)}
			<cosmoz-slider id="slider" .slide=${t.currentSlide}></cosmoz-slider>
		`),Kc=({files:t,selectedIndex:e,currentImageIndex:n,setFileIndex:s,setImageIndex:i,syncDetachedState:r,closeFullscreen:o,host:a})=>xc(v`<cosmoz-image-viewer
			fullscreen
			.source=${t}
			.currentFileIndex=${e}
			.currentImageIndex=${n}
			@current-file-index-changed=${wn(s)}
			@current-image-index-changed=${wn(i)}
			@detached-changed=${r}
			show-nav
			show-zoom
			show-close
			@close=${o}
			?show-detach=${a.showDetach}
			?loop=${a.loop}
		></cosmoz-image-viewer>`),Jc=t=>[A(!t.detached,()=>[A(t.loading,Rc),A(t.error,()=>kc(t.error)),Xc(t)]),A(t.isFullscreen,()=>Kc(t))],Wc=t=>Jc(yc(t));customElements.define("cosmoz-image-viewer",Y(Wc,{observedAttributes:["download-file-name","pdf","show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"],styleSheets:[ua]}));
