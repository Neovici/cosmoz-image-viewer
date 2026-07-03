const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-DO3-IKk8.js","./preload-helper-PPVm8Dsz.js","./popout-entry-DFoo9tWP.js","./iframe-WJ8-Z_xu.js","./iframe-CFLCX_cf.css","./pdf-loader-B_xPwwqY.js"])))=>i.map(i=>d[i]);
import{r as bn,D as _t,A as U,b,E as H,p as vn,n as os,M as rs,u as se,v as fe,h as Ae,j as as}from"./iframe-WJ8-Z_xu.js";import{_ as We}from"./preload-helper-PPVm8Dsz.js";let Ne,yn=0;function Tt(n){Ne=n}function Nt(){Ne=null,yn=0}function ls(){return yn++}const ut=Symbol("haunted.phase"),Ie=Symbol("haunted.hook"),Mt=Symbol("haunted.update"),Ft=Symbol("haunted.commit"),re=Symbol("haunted.effects"),be=Symbol("haunted.layoutEffects"),bt="haunted.context";class cs{update;host;virtual;[Ie];[re];[be];constructor(e,t){this.update=e,this.host=t,this[Ie]=new Map,this[re]=[],this[be]=[]}run(e){Tt(this);let t=e();return Nt(),t}_runEffects(e){let t=this[e];Tt(this);for(let s of t)s.call(this);Nt()}runEffects(){this._runEffects(re)}runLayoutEffects(){this._runEffects(be)}teardown(){this[Ie].forEach(t=>{typeof t.teardown=="function"&&t.teardown(!0)})}}class us extends Error{constructor(e){const t=e?` <${e}>`:"";super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const ds=100,hs=Promise.resolve().then.bind(Promise.resolve());function xn(){let n=[],e;function t(){e=null;let s=n;n=[];for(var i=0,o=s.length;i<o;i++)s[i]()}return function(s){n.push(s),e==null&&(e=hs(t))}}const ps=xn(),Dt=xn();class St{renderer;host;state;[ut];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ds;constructor(e,t){this.renderer=e,this.host=t,this.state=new cs(this.update.bind(this),t),this[ut]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>St.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new us(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ps(()=>{let e=this.handlePhase(Mt);Dt(()=>{this.handlePhase(Ft,e),Dt(()=>{this.handlePhase(re),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,t){switch(this[ut]=e,e){case Ft:this.commit(t),this.runEffects(be);return;case Mt:return this.render();case re:return this.runEffects(re)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}const Ze=(...n)=>{const e=new CSSStyleSheet;return e.replaceSync(n.join("")),e},fs=n=>n?.map(e=>typeof e=="string"?Ze(e):e),gs=(n,...e)=>n.flatMap((t,s)=>[t,e[s]||""]).join(""),oe=gs,ms=(n="")=>n.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():"");function bs(n){class e extends St{frag;renderResult;constructor(i,o,r){super(i,r||o),this.frag=o}commit(i){this.renderResult=n(i,this.frag)}}function t(s,i,o){const r=(o||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=o||i||{},h=fs(s.styleSheets||u);class d extends r{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(s,this);else{const m=this.attachShadow({mode:"open",...c});h&&(m.adoptedStyleSheets=h),this._scheduler=new e(s,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,w,y){if(w===y)return;let z=y===""?!0:y;Reflect.set(this,ms(m),z)}}function p(f){let m=f,w=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){w&&m===y||(w=!0,m=y,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(r.prototype,{getPrototypeOf(f){return f},set(f,m,w,y){let z;return m in f?(z=Object.getOwnPropertyDescriptor(f,m),z&&z.set?(z.set.call(y,w),!0):(Reflect.set(f,m,w,y),!0)):(typeof m=="symbol"||m[0]==="_"?z={enumerable:!0,configurable:!0,writable:!0,value:w}:z=p(w),Object.defineProperty(y,m,z),z.set&&z.set.call(y,w),!0)}});return Object.setPrototypeOf(d.prototype,g),d}return t}class J{id;state;constructor(e,t){this.id=e,this.state=t}}function vs(n,...e){let t=ls(),s=Ne[Ie],i=s.get(t);return i||(i=new n(t,Ne,...e),s.set(t,i)),i.update(...e)}function q(n){return vs.bind(null,n)}function wn(n){return q(class extends J{callback;lastValues;values;_teardown;constructor(e,t,s,i){super(e,t),n(t,this)}update(e,t){this.callback=e,this.values=t}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function _n(n,e){n[re].push(e)}const $=wn(_n),ys=n=>n instanceof Element?n:n.startNode||n.endNode||n.parentNode,Sn=q(class extends J{Context;value;_ranEffect;_unsubscribe;constructor(n,e,t){super(n,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,_n(e,this)}update(n){return this.Context!==n&&(this._subscribe(n),this.Context=n),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(n){this.value=n,this.state.update()}_subscribe(n){const e={Context:n,callback:this._updater};ys(this.state.host).dispatchEvent(new CustomEvent(bt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:i}=e;this.value=s?i:n.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function xs(n){return e=>{const t={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(bt,this)}disconnectedCallback(){this.removeEventListener(bt,this)}handleEvent(s){const{detail:i}=s;i.Context===t&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let i of this.listeners)i(s)}get value(){return this._value}},Consumer:n(function({render:s}){const i=Sn(t);return s(i)},{useShadowDOM:!1}),defaultValue:e};return t}}const A=q(class extends J{value;values;constructor(n,e,t,s){super(n,e),this.value=t(),this.values=s}update(n,e){return this.hasChanged(e)&&(this.values=e,this.value=n()),this.value}hasChanged(n=[]){return n.some((e,t)=>this.values[t]!==e)}}),x=(n,e)=>A(()=>n,e);function ws(n,e){n[be].push(e)}const Me=wn(ws),Q=q(class extends J{args;constructor(n,e,t){super(n,e),this.updater=this.updater.bind(this),typeof t=="function"&&(t=t()),this.makeArgs(t)}update(){return this.args}updater(n){const[e]=this.args;typeof n=="function"&&(n=n(e)),!Object.is(e,n)&&(this.makeArgs(n),this.state.update())}makeArgs(n){this.args=Object.freeze([n,this.updater])}}),$n=q(class extends J{reducer;currentState;constructor(n,e,t,s,i){super(n,e),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(s):s}update(n){return this.reducer=n,[this.currentState,this.dispatch]}dispatch(n){this.currentState=this.reducer(this.currentState,n),this.state.update()}}),_s=/([A-Z])/gu,le=q(class extends J{property;eventName;constructor(n,e,t,s){if(super(n,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=t,this.eventName=t.replace(_s,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updater(s))}update(n,e){return[this.state.host[this.property],this.updater]}resolve(n){const e=this.state.host[this.property],t=typeof n=="function"?n:void 0,s=t?t(e):n;return[e,s,t]}notify(n,e){const t=new CustomEvent(this.eventName,{detail:{value:n,updater:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}updater(n){const[e,t,s]=this.resolve(n);this.notify(t,s).defaultPrevented||Object.is(e,t)||(this.state.host[this.property]=t)}}),Vt=n=>e=>{e.preventDefault(),n(e.detail.updater??e.detail.value)};function Ss(n){let e=n;return{get current(){return e},set current(t){e=t},get value(){return e},set value(t){e=t}}}function X(n){return A(()=>Ss(n),[])}q(class extends J{update(){return this.state.host}});function $s({render:n}){const e=bs(n),t=xs(e);return{component:e,createContext:t}}const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},te=n=>(...e)=>({_$litDirective$:n,values:e});let he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ve=(n,e)=>{const t=n._$AN;if(t===void 0)return!1;for(const s of t)s._$AO?.(e,!1),ve(s,e);return!0},Fe=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while(t?.size===0)},Cn=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),Es(e)}};function Cs(n){this._$AN!==void 0?(Fe(this),this._$AM=n,Cn(this)):this._$AM=n}function zs(n,e=!1,t=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(s))for(let o=t;o<s.length;o++)ve(s[o],!1),Fe(s[o]);else s!=null&&(ve(s,!1),Fe(s));else ve(this,n)}const Es=n=>{n.type==Z.CHILD&&(n._$AP??=zs,n._$AQ??=Cs)};class Ge extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),Cn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ve(this,e),Fe(this))}setValue(e){if(bn(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const{component:j,createContext:Ls}=$s({render:_t}),Je=(n,...e)=>n.flatMap((t,s)=>[t,e[s]??""]).join(""),$t=(...n)=>{const e=new CSSStyleSheet;return e.replaceSync(n.join("")),e},dt=new WeakMap,pe=te(class extends Ge{render(n){return U}update(n,[e]){const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=n.options?.host,this.rt(this.ct=n.element)),U}rt(n){if(this.isConnected||(n=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=dt.get(e);t===void 0&&(t=new WeakMap,dt.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,n),n!==void 0&&this.G.call(this.ht,n)}else this.G.value=n}get lt(){return typeof this.G=="function"?dt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ks=({host:n,popoverRef:e,disabled:t,openOnHover:s,openOnFocus:i,open:o,close:r})=>{const a=X(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const h=e.current;s&&(n.matches(":hover")||h?.matches(":hover"))||n.matches(":focus-within")||h?.matches(":focus-within")||r()},100)},u=()=>{t||(l(),o())};return $(()=>{if(!(!s||t))return n.addEventListener("pointerenter",u),n.addEventListener("pointerleave",c),()=>{l(),n.removeEventListener("pointerenter",u),n.removeEventListener("pointerleave",c)}},[s,t,n]),$(()=>{if(!(!i||t))return n.addEventListener("focusin",u),n.addEventListener("focusout",c),()=>{l(),n.removeEventListener("focusin",u),n.removeEventListener("focusout",c)}},[i,t,n]),{scheduleClose:c,cancelClose:l}},Os=n=>{if(n.newState!=="open")return;const s=n.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of s){const o=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},Rs=oe`
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
`,Ps=n=>{const{placement:e="bottom span-right",disabled:t,openOnHover:s,openOnFocus:i}=n,o=X(),[r,a]=le("opened",!1),l=x(()=>{t||(a(!0),o.current?.showPopover())},[t]),c=x(()=>{a(!1),o.current?.hidePopover()},[]),u=x(()=>{if(t)return;o.current?.matches(":popover-open")?c():l()},[t]);$(()=>{const f=o.current;f&&(r?f.showPopover():f.hidePopover())},[r]),$(()=>{n.toggleAttribute("opened",!!r)},[r]);const{scheduleClose:h,cancelClose:d}=ks({host:n,popoverRef:o,disabled:t,openOnHover:s,openOnFocus:i,open:l,close:c}),p=i?l:u,g=x(f=>{Os(f),a(f.newState==="open"),n.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:f.newState,oldState:f.oldState,composed:!0}))},[]);return b`
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
	`};customElements.define("cosmoz-dropdown-next",j(Ps,{styleSheets:[Rs],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const F=n=>n??U;const qe=te(class extends he{constructor(n){if(super(n),n.type!==Z.PROPERTY&&n.type!==Z.ATTRIBUTE&&n.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!bn(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[e]){if(e===H||e===U)return e;const t=n.element,s=n.name;if(n.type===Z.PROPERTY){if(e===t[s])return H}else if(n.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return H}else if(n.type===Z.ATTRIBUTE&&t.getAttribute(s)===e+"")return H;return vn(n),e}});function R(n,e,t){return n?e(n):t?.(n)}const zn=(n,{label:e,invalid:t,errorMessage:s})=>b`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${n}
				${R(e,()=>b`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${R(t&&s,()=>b`<div class="error" part="error">${s}</div>`)}
	`,En=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],jt=Je`
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
`,Ln=Je`
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
		${jt}
	}
	@container style(--focused: focused) {
		${jt}
	}
`,As=n=>A(()=>{if(n==null)return;const e=new RegExp(n,"u");return t=>{!t.defaultPrevented&&t.data&&!e.test(t.data)&&t.preventDefault()}},[n]),Ct=q(class extends J{values;constructor(n,e,t,s){super(n,e),Object.assign(e.host,t),this.values=s}update(n,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,n))}hasChanged(n=[]){return n.some((e,t)=>this.values[t]!==e)}}),Ce=q(class extends J{update(){return this.state.host}}),Is=/([A-Z])/gu,vt=(n,e,t)=>{n[e]=t,n.dispatchEvent(new CustomEvent(e.replace(Is,"-$1").toLowerCase()+"-changed",{detail:{value:t}}))},Ts=(n,e,t=[e])=>{const s=Ce();$(()=>{vt(s,n,e)},t)},kn=n=>{const e=X(void 0),t=x(l=>e.current=l,[]),s=n.shadowRoot,i=x(l=>n.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),o=x(l=>vt(n,"value",l.target.value),[]),r=x(l=>vt(n,"focused",l.type==="focus"),[]),a=x(()=>{const l=e.current?.checkValidity();return n.toggleAttribute("invalid",!l),l},[]);return Ct({validate:a},[a]),$(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return s.addEventListener("mousedown",l),()=>s.removeEventListener("mousedown",l)},[]),{onChange:i,onFocus:r,onInput:o,onRef:t}},Ns=({placeholder:n,noLabelFloat:e,label:t})=>(e?t:void 0)||n||" ",Ms=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...En],Fs=n=>{const{type:e="text",pattern:t,allowedPattern:s,autocomplete:i,value:o,readonly:r,disabled:a,min:l,max:c,step:u,maxlength:h}=n,{onChange:d,onFocus:p,onInput:g,onRef:f}=kn(n),m=As(s);return zn(b`
			<input
				${pe(f)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${F(t)}
				autocomplete=${F(i)}
				placeholder=${Ns(n)}
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
		`,n)};customElements.define("cosmoz-input",j(Fs,{observedAttributes:Ms,styleSheets:[Ze(Ln)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Bt=n=>{n.style.height="",n.style.height=`${n.scrollHeight}px`},Ds=(n,e=0)=>{if(e>0){const t=n.getAttribute("rows")??"",s=n.style.height;n.style.height="",n.setAttribute("rows",e),n.style.maxHeight=n.getBoundingClientRect().height+"px",n.style.height=s,n.setAttribute("rows",t)}},Vs=n=>{const{value:e,maxRows:t}=n,s=A(()=>()=>n.shadowRoot.querySelector("#input"),[]);$(()=>Ds(s(),t),[t,s]),$(()=>Bt(s()),[s,e]),$(()=>{const i=s(),o=new ResizeObserver(()=>requestAnimationFrame(()=>Bt(i)));return o.observe(i),()=>o.unobserve(i)},[s])},js=["rows","placeholder",...En],Bs=n=>{const{autocomplete:e,value:t,placeholder:s,readonly:i,disabled:o,rows:r,cols:a,maxlength:l}=n,{onChange:c,onFocus:u,onInput:h,onRef:d}=kn(n);return Vs(n),zn(b`
			<textarea id="input" part="input"
				${pe(d)}
				autocomplete=${F(e)}
				placeholder=${s||" "}
				rows=${r??1} cols=${F(a)}
				?readonly=${i} ?aria-disabled=${o} ?disabled=${o}
				.value=${qe(t??"")} maxlength=${F(l)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,n)};customElements.define("cosmoz-textarea",j(Bs,{observedAttributes:js,styleSheets:[Ze(Ln)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Hs=n=>{const{label:e,value:t,disabled:s,error:i}=n,o=x(r=>n.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return b`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${qe(!!t)}
			?disabled=${s}
			@change=${o}
		/>
		${R(e,()=>b`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${R(i,r=>b`<div class="failure">${r}</div>`)} `},Us=oe`
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
`,Ys=oe`
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
`;customElements.define("cosmoz-toggle",j(Hs,{styleSheets:[Ys,Us],observedAttributes:["disabled"]}));const _=n=>typeof n=="string",ge=()=>{let n,e;const t=new Promise((s,i)=>{n=s,e=i});return t.resolve=n,t.reject=e,t},Ht=n=>n==null?"":""+n,Xs=(n,e,t)=>{n.forEach(s=>{e[s]&&(t[s]=e[s])})},Ks=/###/g,Ut=n=>n&&n.indexOf("###")>-1?n.replace(Ks,"."):n,Yt=n=>!n||_(n),ye=(n,e,t)=>{const s=_(e)?e.split("."):e;let i=0;for(;i<s.length-1;){if(Yt(n))return{};const o=Ut(s[i]);!n[o]&&t&&(n[o]=new t),Object.prototype.hasOwnProperty.call(n,o)?n=n[o]:n={},++i}return Yt(n)?{}:{obj:n,k:Ut(s[i])}},Xt=(n,e,t)=>{const{obj:s,k:i}=ye(n,e,Object);if(s!==void 0||e.length===1){s[i]=t;return}let o=e[e.length-1],r=e.slice(0,e.length-1),a=ye(n,r,Object);for(;a.obj===void 0&&r.length;)o=`${r[r.length-1]}.${o}`,r=r.slice(0,r.length-1),a=ye(n,r,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=t},Ws=(n,e,t,s)=>{const{obj:i,k:o}=ye(n,e,Object);i[o]=i[o]||[],i[o].push(t)},De=(n,e)=>{const{obj:t,k:s}=ye(n,e);if(t)return t[s]},Zs=(n,e,t)=>{const s=De(n,t);return s!==void 0?s:De(e,t)},On=(n,e,t)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in n?_(n[s])||n[s]instanceof String||_(e[s])||e[s]instanceof String?t&&(n[s]=e[s]):On(n[s],e[s],t):n[s]=e[s]);return n},ce=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Gs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Js=n=>_(n)?n.replace(/[&<>"'\/]/g,e=>Gs[e]):n;class qs{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const Qs=[" ",",","?","!",";"],ei=new qs(20),ti=(n,e,t)=>{e=e||"",t=t||"";const s=Qs.filter(r=>e.indexOf(r)<0&&t.indexOf(r)<0);if(s.length===0)return!0;const i=ei.getRegExp(`(${s.map(r=>r==="?"?"\\?":r).join("|")})`);let o=!i.test(n);if(!o){const r=n.indexOf(t);r>0&&!i.test(n.substring(0,r))&&(o=!0)}return o},yt=function(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!n)return;if(n[e])return n[e];const s=e.split(t);let i=n;for(let o=0;o<s.length;){if(!i||typeof i!="object")return;let r,a="";for(let l=o;l<s.length;++l)if(l!==o&&(a+=t),a+=s[l],r=i[a],r!==void 0){if(["string","number","boolean"].indexOf(typeof r)>-1&&l<s.length-1)continue;o+=l-o+1;break}i=r}return i},Ve=n=>n&&n.replace("_","-"),ni={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,e){console&&console[n]&&console[n].apply(console,e)}};class je{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||ni,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,s,i){return i&&!this.debug?null:(_(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new je(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new je(this.logger,e)}}var G=new je;class Qe{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const i=this.observers[s].get(t)||0;this.observers[s].set(t,i+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a.apply(a,[e,...s])})}}class Kt extends Qe{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,r=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],s&&(Array.isArray(s)?a.push(...s):_(s)&&o?a.push(...s.split(o)):a.push(s)));const l=De(this.data,a);return!l&&!t&&!s&&e.indexOf(".")>-1&&(e=a[0],t=a[1],s=a.slice(2).join(".")),l||!r||!_(s)?l:yt(this.data&&this.data[e]&&this.data[e][t],s,o)}addResource(e,t,s,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,t];s&&(a=a.concat(r?s.split(r):s)),e.indexOf(".")>-1&&(a=e.split("."),i=t,t=a[1]),this.addNamespaces(t),Xt(this.data,a,i),o.silent||this.emit("added",e,t,s,i)}addResources(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in s)(_(s[o])||Array.isArray(s[o]))&&this.addResource(e,t,o,s[o],{silent:!0});i.silent||this.emit("added",e,t,s)}addResourceBundle(e,t,s,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),i=s,s=t,t=a[1]),this.addNamespaces(t);let l=De(this.data,a)||{};r.skipCopy||(s=JSON.parse(JSON.stringify(s))),i?On(l,s,o):l={...l,...s},Xt(this.data,a,l),r.silent||this.emit("added",e,t,s)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(i=>t[i]&&Object.keys(t[i]).length>0)}toJSON(){return this.data}}var Rn={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,e,t,s,i){return n.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,t,s,i))}),e}};const Wt={};class Be extends Qe{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Xs(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=G.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const s=this.resolve(e,t);return s&&s.res!==void 0}extractFromKey(e,t){let s=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const i=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const r=s&&e.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!ti(e,s,i);if(r&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:_(o)?[o]:o};const c=e.split(s);(s!==i||s===i&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(i)}return{key:e,namespaces:_(o)?[o]:o}}translate(e,t,s){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const i=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:r,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const S=t.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${S}${r}`,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${S}${r}`}return i?{res:r,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:r}const h=this.resolve(e,t);let d=h&&h.res;const p=h&&h.usedKey||r,g=h&&h.exactUsedKey||r,f=Object.prototype.toString.apply(d),m=["[object Number]","[object Function]","[object RegExp]"],w=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,z=!_(d)&&typeof d!="boolean"&&typeof d!="number";if(y&&d&&z&&m.indexOf(f)<0&&!(_(w)&&Array.isArray(d))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...t,ns:a}):`key '${r} (${this.language})' returned an object instead of string.`;return i?(h.res=S,h.usedParams=this.getUsedParamsDetails(t),h):S}if(o){const S=Array.isArray(d),k=S?[]:{},L=S?g:p;for(const E in d)if(Object.prototype.hasOwnProperty.call(d,E)){const v=`${L}${o}${E}`;k[E]=this.translate(v,{...t,joinArrays:!1,ns:a}),k[E]===v&&(k[E]=d[E])}d=k}}else if(y&&_(w)&&Array.isArray(d))d=d.join(w),d&&(d=this.extendTranslation(d,e,t,s));else{let S=!1,k=!1;const L=t.count!==void 0&&!_(t.count),E=Be.hasDefaultValue(t),v=L?this.pluralResolver.getSuffix(c,t.count,t):"",P=t.ordinal&&L?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",O=L&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),I=O&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${v}`]||t[`defaultValue${P}`]||t.defaultValue;!this.isValidLookup(d)&&E&&(S=!0,d=I),this.isValidLookup(d)||(k=!0,d=r);const ee=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&k?void 0:d,N=E&&I!==d&&this.options.updateMissing;if(k||S||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,r,N?I:d),o){const T=this.resolve(r,{...t,keySeparator:!1});T&&T.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Y=[];const V=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&V&&V[0])for(let T=0;T<V.length;T++)Y.push(V[T]);else this.options.saveMissingTo==="all"?Y=this.languageUtils.toResolveHierarchy(t.lng||this.language):Y.push(t.lng||this.language);const B=(T,C,M)=>{const W=E&&M!==d?M:ee;this.options.missingKeyHandler?this.options.missingKeyHandler(T,l,C,W,N,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(T,l,C,W,N,t),this.emit("missingKey",T,l,C,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?Y.forEach(T=>{const C=this.pluralResolver.getSuffixes(T,t);O&&t[`defaultValue${this.options.pluralSeparator}zero`]&&C.indexOf(`${this.options.pluralSeparator}zero`)<0&&C.push(`${this.options.pluralSeparator}zero`),C.forEach(M=>{B([T],r+M,t[`defaultValue${M}`]||I)})}):B(Y,r,I))}d=this.extendTranslation(d,e,t,h,s),k&&d===r&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${r}`),(k||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${r}`:r,S?d:void 0):d=this.options.parseMissingKeyHandler(d))}return i?(h.res=d,h.usedParams=this.getUsedParamsDetails(t),h):d}extendTranslation(e,t,s,i,o){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=_(e)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const d=e.match(this.interpolator.nestingRegexp);u=d&&d.length}let h=s.replace&&!_(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,s.lng||this.language||i.usedLng,s),c){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;u<p&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(s.lng=this.language||i.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),g=0;g<d;g++)p[g]=arguments[g];return o&&o[0]===p[0]&&!s.context?(r.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):r.translate(...p,t)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=_(a)?[a]:a;return e!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(e=Rn.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,i,o,r,a;return _(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,t),u=c.key;i=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=t.count!==void 0&&!_(t.count),p=d&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),g=t.context!==void 0&&(_(t.context)||typeof t.context=="number")&&t.context!=="",f=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);h.forEach(m=>{this.isValidLookup(s)||(a=m,!Wt[`${f[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Wt[`${f[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${f.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(w=>{if(this.isValidLookup(s))return;r=w;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,w,m,t);else{let S;d&&(S=this.pluralResolver.getSuffix(w,t.count,t));const k=`${this.options.pluralSeparator}zero`,L=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(y.push(u+S),t.ordinal&&S.indexOf(L)===0&&y.push(u+S.replace(L,this.options.pluralSeparator)),p&&y.push(u+k)),g){const E=`${u}${this.options.contextSeparator}${t.context}`;y.push(E),d&&(y.push(E+S),t.ordinal&&S.indexOf(L)===0&&y.push(E+S.replace(L,this.options.pluralSeparator)),p&&y.push(E+k))}}let z;for(;z=y.pop();)this.isValidLookup(s)||(o=z,s=this.getResource(w,m,z,t))}))})}),{res:s,usedKey:i,exactUsedKey:o,usedLng:r,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,s,i):this.resourceStore.getResource(e,t,s,i)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!_(e.replace);let i=s?e.replace:e;if(s&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!s){i={...i};for(const o of t)delete i[o]}return i}static hasDefaultValue(e){const t="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t===s.substring(0,t.length)&&e[s]!==void 0)return!0;return!1}}const ht=n=>n.charAt(0).toUpperCase()+n.slice(1);class Zt{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=G.create("languageUtils")}getScriptPartFromCode(e){if(e=Ve(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ve(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(_(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(e)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let s=e.split("-");return this.options.lowerCaseLng?s=s.map(i=>i.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),t.indexOf(s[1].toLowerCase())>-1&&(s[1]=ht(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),t.indexOf(s[1].toLowerCase())>-1&&(s[1]=ht(s[1].toLowerCase())),t.indexOf(s[2].toLowerCase())>-1&&(s[2]=ht(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(s=>{if(t)return;const i=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(i))&&(t=i)}),!t&&this.options.supportedLngs&&e.forEach(s=>{if(t)return;const i=this.getLanguagePartFromCode(s);if(this.isSupportedCode(i))return t=i;t=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),_(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let s=e[t];return s||(s=e[this.getScriptPartFromCode(t)]),s||(s=e[this.formatLanguageCode(t)]),s||(s=e[this.getLanguagePartFromCode(t)]),s||(s=e.default),s||[]}toResolveHierarchy(e,t){const s=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],o=r=>{r&&(this.isSupportedCode(r)?i.push(r):this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))};return _(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):_(e)&&o(this.formatLanguageCode(e)),s.forEach(r=>{i.indexOf(r)<0&&o(this.formatLanguageCode(r))}),i}}let si=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ii={1:n=>+(n>1),2:n=>+(n!=1),3:n=>0,4:n=>n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2,5:n=>n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5,6:n=>n==1?0:n>=2&&n<=4?1:2,7:n=>n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2,8:n=>n==1?0:n==2?1:n!=8&&n!=11?2:3,9:n=>+(n>=2),10:n=>n==1?0:n==2?1:n<7?2:n<11?3:4,11:n=>n==1||n==11?0:n==2||n==12?1:n>2&&n<20?2:3,12:n=>+(n%10!=1||n%100==11),13:n=>+(n!==0),14:n=>n==1?0:n==2?1:n==3?2:3,15:n=>n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2,16:n=>n%10==1&&n%100!=11?0:n!==0?1:2,17:n=>n==1||n%10==1&&n%100!=11?0:1,18:n=>n==0?0:n==1?1:2,19:n=>n==1?0:n==0||n%100>1&&n%100<11?1:n%100>10&&n%100<20?2:3,20:n=>n==1?0:n==0||n%100>0&&n%100<20?1:2,21:n=>n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0,22:n=>n==1?0:n==2?1:(n<0||n>10)&&n%10==0?2:3};const oi=["v1","v2","v3"],ri=["v4"],Gt={zero:0,one:1,two:2,few:3,many:4,other:5},ai=()=>{const n={};return si.forEach(e=>{e.lngs.forEach(t=>{n[t]={numbers:e.nr,plurals:ii[e.fc]}})}),n};class li{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=G.create("pluralResolver"),(!this.options.compatibilityJSON||ri.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ai(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=Ve(e==="dev"?"en":e),i=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:s,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let r;try{r=new Intl.PluralRules(s,{type:i})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(l,t)}return this.pluralRulesCache[o]=r,r}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,t);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,s).map(i=>`${t}${i}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,t);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((i,o)=>Gt[i]-Gt[o]).map(i=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${i}`):s.numbers.map(i=>this.getSuffix(e,i,t)):[]}getSuffix(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}`:this.getSuffixRetroCompatible(i,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const s=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let i=e.numbers[s];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!oi.includes(this.options.compatibilityJSON)}}const Jt=function(n,e,t){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Zs(n,e,t);return!o&&i&&_(t)&&(o=yt(n,t,s),o===void 0&&(o=yt(e,t,s))),o},pt=n=>n.replace(/\$/g,"$$$$");class ci{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=G.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:s,useRawValueToEscape:i,prefix:o,prefixEscaped:r,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:f,nestingOptionsSeparator:m,maxReplaces:w,alwaysFormat:y}=e.interpolation;this.escape=t!==void 0?t:Js,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?ce(o):r||"{{",this.suffix=a?ce(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?ce(d):p||ce("$t("),this.nestingSuffix=g?ce(g):f||ce(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=w||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,s)=>t&&t.source===s?(t.lastIndex=0,t):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,s,i){let o,r,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const w=Jt(t,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(w,void 0,s,{...i,...t,interpolationkey:p}):w}const g=p.split(this.formatSeparator),f=g.shift().trim(),m=g.join(this.formatSeparator).trim();return this.format(Jt(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure),m,s,{...i,...t,interpolationkey:f})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,h=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>pt(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?pt(this.escape(p)):pt(p)}].forEach(p=>{for(a=0;o=p.regex.exec(e);){const g=o[1].trim();if(r=c(g),r===void 0)if(typeof u=="function"){const m=u(e,o,i);r=_(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,g))r="";else if(h){r=o[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),r="";else!_(r)&&!this.useRawValueToEscape&&(r=Ht(r));const f=p.safeValue(r);if(e=e.replace(o[0],f),h?(p.regex.lastIndex+=r.length,p.regex.lastIndex-=o[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,r;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,r);const p=d.match(/'/g),g=d.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(d=d.replace(/'/g,'"'));try{r=JSON.parse(d),c&&(r={...c,...r})}catch(f){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,f),`${l}${u}${d}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,l};for(;i=this.nestingRegexp.exec(e);){let l=[];r={...s},r=r.replace&&!_(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(h=>h.trim());i[1]=u.shift(),l=u,c=!0}if(o=t(a.call(this,i[1].trim(),r),r),o&&i[0]===e&&!_(o))return o;_(o)||(o=Ht(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),o=""),c&&(o=l.reduce((u,h)=>this.format(u,h,s.lng,{...s,interpolationkey:i[1].trim()}),o.trim())),e=e.replace(i[0],o),this.regexp.lastIndex=0}return e}}const ui=n=>{let e=n.toLowerCase().trim();const t={};if(n.indexOf("(")>-1){const s=n.split("(");e=s[0].toLowerCase().trim();const i=s[1].substring(0,s[1].length-1);e==="currency"&&i.indexOf(":")<0?t.currency||(t.currency=i.trim()):e==="relativetime"&&i.indexOf(":")<0?t.range||(t.range=i.trim()):i.split(";").forEach(r=>{if(r){const[a,...l]=r.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();t[u]||(t[u]=c),c==="false"&&(t[u]=!1),c==="true"&&(t[u]=!0),isNaN(c)||(t[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},ue=n=>{const e={};return(t,s,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const r=s+JSON.stringify(o);let a=e[r];return a||(a=n(Ve(s),i),e[r]=a),a(t)}};class di{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=G.create("formatter"),this.options=e,this.formats={number:ue((t,s)=>{const i=new Intl.NumberFormat(t,{...s});return o=>i.format(o)}),currency:ue((t,s)=>{const i=new Intl.NumberFormat(t,{...s,style:"currency"});return o=>i.format(o)}),datetime:ue((t,s)=>{const i=new Intl.DateTimeFormat(t,{...s});return o=>i.format(o)}),relativetime:ue((t,s)=>{const i=new Intl.RelativeTimeFormat(t,{...s});return o=>i.format(o,s.range||"day")}),list:ue((t,s)=>{const i=new Intl.ListFormat(t,{...s});return o=>i.format(o)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=ue(t)}format(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:u}=ui(l);if(this.formats[c]){let h=a;try{const d=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},p=d.locale||d.lng||i.locale||i.lng||s;h=this.formats[c](a,p,{...u,...i,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const hi=(n,e)=>{n.pending[e]!==void 0&&(delete n.pending[e],n.pendingCount--)};class pi extends Qe{constructor(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=s,this.languageUtils=s.languageUtils,this.options=i,this.logger=G.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,i.backend,i)}queueLoad(e,t,s,i){const o={},r={},a={},l={};return e.forEach(c=>{let u=!0;t.forEach(h=>{const d=`${c}|${h}`;!s.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?r[d]===void 0&&(r[d]=!0):(this.state[d]=1,u=!1,r[d]===void 0&&(r[d]=!0),o[d]===void 0&&(o[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(a[c]=!0)}),(Object.keys(o).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(r),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,s){const i=e.split("|"),o=i[0],r=i[1];t&&this.emit("failedLoading",o,r,t),!t&&s&&this.store.addResourceBundle(o,r,s,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&s&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Ws(l.loaded,[o],r),hi(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{a[c][h]===void 0&&(a[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:s,tried:i,wait:o,callback:r});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,s,i+1,o*2,r)},o);return}r(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();_(e)&&(e=this.languageUtils.toResolveHierarchy(e)),_(t)&&(t=[t]);const o=this.queueLoad(e,t,s,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(r=>{this.loadOne(r)})}load(e,t,s){this.prepareLoading(e,t,{},s)}reload(e,t,s){this.prepareLoading(e,t,{reload:!0},s)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=e.split("|"),i=s[0],o=s[1];this.read(i,o,"read",void 0,void 0,(r,a)=>{r&&this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`,r),!r&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${i}`,a),this.loaded(e,r,a)})}saveMissing(e,t,s,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...r,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,t,s,i,l):u=c(e,t,s,i),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else c(e,t,s,i,a,l)}!e||!e[0]||this.store.addResource(e[0],t,s,i)}}}const qt=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let e={};if(typeof n[1]=="object"&&(e=n[1]),_(n[1])&&(e.defaultValue=n[1]),_(n[2])&&(e.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const t=n[3]||n[2];Object.keys(t).forEach(s=>{e[s]=t[s]})}return e},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Qt=n=>(_(n.ns)&&(n.ns=[n.ns]),_(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),_(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),n.supportedLngs&&n.supportedLngs.indexOf("cimode")<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),n),Oe=()=>{},fi=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(t=>{typeof n[t]=="function"&&(n[t]=n[t].bind(n))})};class _e extends Qe{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Qt(e),this.services={},this.logger=G,this.modules={external:[]},fi(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(s=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(_(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const i=qt();this.options={...i,...this.options,...Qt(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const o=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?G.init(o(this.modules.logger),this.options):G.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=di);const h=new Zt(this.options);this.store=new Kt(this.options.resources,this.options);const d=this.services;d.logger=G,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new li(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(d.formatter=o(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new ci(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new pi(o(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var g=arguments.length,f=new Array(g>1?g-1:0),m=1;m<g;m++)f[m-1]=arguments[m];e.emit(p,...f)}),this.modules.languageDetector&&(d.languageDetector=o(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=o(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Be(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,f=new Array(g>1?g-1:0),m=1;m<g;m++)f[m-1]=arguments[m];e.emit(p,...f)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,s||(s=Oe),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=ge(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),s(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe;const i=_(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const o=[],r=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};i?r(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>r(l)),this.options.preload&&this.options.preload.forEach(a=>r(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(e,t,s){const i=ge();return typeof e=="function"&&(s=e,e=void 0),typeof t=="function"&&(s=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),s||(s=Oe),this.services.backendConnector.reload(e,t,o=>{i.resolve(),s(o)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Rn.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const s=this.languages[t];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(e,t){var s=this;this.isLanguageChangingTo=e;const i=ge();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},r=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return s.t(...arguments)}),t&&t(l,function(){return s.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=_(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{r(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,t,s){var i=this;const o=function(r,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=i.options.overloadTranslationOptionHandler([r,a].concat(u))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||o.keyPrefix);const d=i.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(r)?p=r.map(g=>`${l.keyPrefix}${d}${g}`):p=l.keyPrefix?`${l.keyPrefix}${d}${r}`:r,i.t(p,l)};return _(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=s,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=t.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const r=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,r);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||r(s,e)&&(!i||r(o,e)))}loadNamespaces(e,t){const s=ge();return this.options.ns?(_(e)&&(e=[e]),e.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{s.resolve(),t&&t(i)}),s):(t&&t(),Promise.resolve())}loadLanguages(e,t){const s=ge();_(e)&&(e=[e]);const i=this.options.preload||[],o=e.filter(r=>i.indexOf(r)<0&&this.services.languageUtils.isSupportedCode(r));return o.length?(this.options.preload=i.concat(o),this.loadResources(r=>{s.resolve(),t&&t(r)}),s):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Zt(qt());return t.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new _e(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oe;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},o=new _e(i);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},s&&(o.store=new Kt(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Be(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];o.emit(a,...c)}),o.init(i,t),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const D=_e.createInstance();D.createInstance=_e.createInstance;D.createInstance;D.dir;D.init;D.loadResources;D.reloadResources;D.use;D.changeLanguage;D.getFixedT;const K=D.t;D.exists;D.setDefaultNamespace;D.hasLoadedNamespace;D.loadNamespaces;D.loadLanguages;const gi={},de=te(class extends he{constructor(){super(...arguments),this.ot=gi}render(n,e){return e()}update(n,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((s,i)=>s===this.ot[i]))return H}else if(this.ot===e)return H;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});class mi{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let bi=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const en=n=>!os(n)&&typeof n.then=="function",tn=1073741823;let vi=class extends Ge{constructor(){super(...arguments),this._$Cwt=tn,this._$Cbt=[],this._$CK=new mi(this),this._$CX=new bi}render(...e){return e.find(t=>!en(t))??H}update(e,t){const s=this._$Cbt;let i=s.length;this._$Cbt=t;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const l=t[a];if(!en(l))return this._$Cwt=a,l;a<i&&l===s[a]||(this._$Cwt=tn,i=0,Promise.resolve(l).then(async c=>{for(;r.get();)await r.get();const u=o.deref();if(u!==void 0){const h=u._$Cbt.indexOf(l);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}}))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Se=te(vi);const nn=(n,e,t)=>{const s=new Map;for(let i=e;i<=t;i++)s.set(n[i],i);return s},Pn=te(class extends he{constructor(n){if(super(n),n.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const i=[],o=[];let r=0;for(const a of n)i[r]=s?s(a,r):r,o[r]=t(a,r),r++;return{values:o,keys:i}}render(n,e,t){return this.dt(n,e,t).values}update(n,[e,t,s]){const i=rs(n),{values:o,keys:r}=this.dt(e,t,s);if(!Array.isArray(i))return this.ut=r,o;const a=this.ut??=[],l=[];let c,u,h=0,d=i.length-1,p=0,g=o.length-1;for(;h<=d&&p<=g;)if(i[h]===null)h++;else if(i[d]===null)d--;else if(a[h]===r[p])l[p]=se(i[h],o[p]),h++,p++;else if(a[d]===r[g])l[g]=se(i[d],o[g]),d--,g--;else if(a[h]===r[g])l[g]=se(i[h],o[g]),fe(n,l[g+1],i[h]),h++,g--;else if(a[d]===r[p])l[p]=se(i[d],o[p]),fe(n,i[h],i[d]),d--,p++;else if(c===void 0&&(c=nn(r,p,g),u=nn(a,h,d)),c.has(a[h]))if(c.has(a[d])){const f=u.get(r[p]),m=f!==void 0?i[f]:null;if(m===null){const w=fe(n,i[h]);se(w,o[p]),l[p]=w}else l[p]=se(m,o[p]),fe(n,i[h],m),i[f]=null;p++}else Ae(i[d]),d--;else Ae(i[h]),h++;for(;p<=g;){const f=fe(n,l[g+1]);se(f,o[p]),l[p++]=f}for(;h<=d;){const f=i[h++];f!==null&&Ae(f)}return this.ut=r,vn(n,l),H}});class et extends Event{constructor(e){super(et.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}et.eventName="rangeChanged";class tt extends Event{constructor(e){super(tt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}tt.eventName="visibilityChanged";class nt extends Event{constructor(){super(nt.eventName,{bubbles:!1})}}nt.eventName="unpinned";class yi{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class xi extends yi{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const s=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(s)}scrollBy(e,t){const s=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,s=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=s):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:s}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,s){return this._scrollTo(e,t,s),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:s,left:i}=this._destination;s=Math.min(s||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const o=Math.abs(s-e),r=Math.abs(i-t);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let sn=typeof window<"u"?window.ResizeObserver:void 0;const xt=Symbol("virtualizerRef"),Re="virtualizer-sizer";let on;class wi{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new sn(()=>this._hostElementSizeChanged()),this._childrenRO=new sn(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[xt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=$i(this._hostElement,e),this._scrollerController=new xi(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${Re}]`);t||(t=document.createElement("div"),t.setAttribute(Re,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(Re,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||on;if(typeof t=="function"&&this._layout instanceof t){const s={...e};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(e){let t,s;if(typeof e.type=="function"){s=e.type;const i={...e};delete i.type,t=i}else t=e;s===void 0&&(on=s=(await We(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(i=>this._handleLayoutMessage(i),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:i}}return null}_measureChildren(){const e={},t=this._children,s=this._measureChildOverride||this._measureChild;for(let i=0;i<t.length;i++){const o=t[i],r=this._first+i;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[r]=s.call(this,o,this._items[r]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:s}=e.getBoundingClientRect();return Object.assign({width:t,height:s},_i(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new nt)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(Re)||e.push(t),t=t.nextElementSibling;return e}_updateView(){const e=this._hostElement,t=this._scrollerController?.element,s=this._layout;if(e&&t&&s){let i,o,r,a;const l=e.getBoundingClientRect();i=0,o=0,r=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(w=>w.getBoundingClientRect());c.unshift(l);for(const w of c)i=Math.max(i,w.top),o=Math.max(o,w.left),r=Math.min(r,w.bottom),a=Math.min(a,w.right);const u=t.getBoundingClientRect(),h={left:l.left-u.left,top:l.top-u.top},d={width:t.scrollWidth,height:t.scrollHeight},p=i-l.top+e.scrollTop,g=o-l.left+e.scrollLeft,f=Math.max(0,r-i),m=Math.max(0,a-o);s.viewportSize={width:m,height:f},s.viewportScroll={top:p,left:g},s.totalScrollSize=d,s.offsetWithinScroller=h}}_sizeHostElement(e){const s=e&&e.width!==null?Math.min(82e5,e.width):0,i=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${i}px)`;else{const o=this._hostElement.style;o.minWidth=s?`${s}px`:"100%",o.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:s,width:i,height:o,xOffset:r,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${t}px)`,i!==void 0&&(c.style.width=i+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:s,_firstVisible:i,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:s,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-s,left:t-i})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:s}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new et({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new tt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function _i(n){const e=window.getComputedStyle(n);return{marginTop:Pe(e.marginTop),marginRight:Pe(e.marginRight),marginBottom:Pe(e.marginBottom),marginLeft:Pe(e.marginLeft)}}function Pe(n){const e=n?parseFloat(n):NaN;return Number.isNaN(e)?0:e}function rn(n){if(n.assignedSlot!==null)return n.assignedSlot;if(n.parentElement!==null)return n.parentElement;const e=n.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Si(n,e=!1){const t=[];let s=e?n:rn(n);for(;s!==null;)t.push(s),s=rn(s);return t}function $i(n,e=!1){let t=!1;return Si(n,e).filter(s=>{if(t)return!1;const i=getComputedStyle(s);return t=i.position==="fixed",i.overflow!=="visible"})}const Ci=n=>n,zi=(n,e)=>b`${e}: ${JSON.stringify(n,null,2)}`;class Ei extends Ge{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,s)=>zi(t,s+this._first),this._keyFunction=(t,s)=>Ci(t,s+this._first),this._items=[],e.type!==Z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)t.push(this._items[s]);return Pn(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const s=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),s?H:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const i=e.parentNode;this._makeVirtualizer(i,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:s}=e;t&&(this._renderItem=(i,o)=>t(i,o+this._first)),s&&(this._keyFunction=(i,o)=>s(i,o+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:i,items:o}=t;this._virtualizer=new wi({hostElement:e,layout:s,scroller:i}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,t){const s=e.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(s,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Li=te(Ei),ki=(n,e)=>{if(!n||!e)return;const t=Object.keys(e);return Object.fromEntries(Object.keys(n).flatMap(s=>t.includes(s)?[]:[[s,void 0]]))};class Oi extends he{_props;render(e){return H}update(e,[t]){return this._props!==t&&Object.assign(e.element,ki(this._props,t),this._props=t),H}}const Ri=te(Oi);function Pi(n){return()=>n}const Ai=Pi(),An=Ai,He=n=>n,ze=(n,...e)=>typeof n=="function"?n(...e):n,Ii=n=>{const e=Ce(),t=A(()=>new CSSStyleSheet,[]);$(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),$(()=>{t.replaceSync(n)},[n])};function Te(n){return n?e=>e?.[n]:He}const Ti=n=>{const e=Te(n);return t=>typeof t=="string"?t:e(t)?.toString()||""},Ni=n=>e=>{const t={};for(const s in e)n.includes(s)&&(t[s]=e[s]);return t},Mi="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Fi=oe`
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
		background: url("${Mi}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Di=({index:n,itemHeight:e,auto:t})=>oe`
	${R(!t,()=>oe`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${n||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Vi=n=>{const e=n==="auto",[t,s]=Q(e?40:n);return[t,i=>e?s(i):void 0]},In=Ls(()=>An);customElements.define("cosmoz-keybinding-provider",In.Provider);const zt=n=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,n),[e,...Object.values(n)])},xe=(n,e)=>{const t=Sn(In),s=zt(n);$(()=>t(s),e)},ji=Symbol("listbox.navigate.up"),Bi=Symbol("listbox.navigate.down"),Hi=Symbol("listbox.select"),Ui=({onUp:n,onDown:e,onEnter:t})=>{const s=Ce();xe({activity:ji,callback:n,element:()=>s},[]),xe({activity:Bi,callback:e,element:()=>s},[]),xe({activity:Hi,callback:t,element:()=>s},[])},Yi=({items:n,onSelect:e,defaultIndex:t=0})=>{const[s,i]=Q({index:t}),{index:o}=s,{length:r}=n;return $(()=>{i({index:s.index<0?t:Math.min(s.index,n.length-1),scroll:!0})},[n,t]),Ui({onUp:x(()=>i(a=>({index:a.index>0?a.index-1:r-1,scroll:!0})),[r]),onDown:x(()=>i(a=>({index:a.index<r-1?a.index+1:0,scroll:!0})),[r]),onEnter:x(()=>o>-1&&o<r&&e?.(n[o],o),[o,n,e])}),{position:s,highlight:x(a=>i({index:a}),[]),select:x(a=>e?.(a),[e])}},Xi=n=>typeof n=="object"&&n!==null&&Symbol.iterator in n;function ie(n){return n==null?[]:Array.isArray(n)?n:typeof n=="string"?[n]:Xi(n)?Array.from(n):[n]}const ft=(n,e=He)=>t=>{const s=ie(n).map(e);return ie(t).filter(i=>!s.includes(e(i)))},Ki=(n,e)=>e?t=>t!=null&&ie(n).find(s=>s[e]===t[e]):t=>t!=null&&ie(n).includes(t),Wi=(n,e)=>{if(!e||!n)return n;const t=n.toLowerCase().indexOf(e.toLowerCase());if(t<0)return n;const s=t+e.length;return[n.slice(0,t),b`<mark>${n.slice(t,s)}</mark>`,n.slice(s)]},Zi=(n=He)=>(e,t,{highlight:s,select:i,textual:o=He,query:r,isSelected:a})=>{const l=o(e),c=Wi(l,r),u=n(c,e,t);return b`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${t}
				@mouseenter=${()=>s(t)}
				@click=${()=>i(e)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Gi=({itemRenderer:n=Zi(),...e})=>{const t=zt(e);return x((s,i)=>n(s,i,t),[t,n])},Ji=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],qi=({value:n,valueProperty:e,items:t,onSelect:s,defaultIndex:i,query:o,textual:r,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=A(()=>Ki(n,e),[n,e]),h=A(()=>t.slice(),[t,u]),{position:d,highlight:p,select:g}=Yi({items:h,onSelect:s,defaultIndex:isNaN(i)?void 0:Number(i)}),[f,m]=Vi(l);return{position:d,items:h,height:Math.min(c,h.length)*f,highlight:p,select:g,itemHeight:f,setItemHeight:m,renderItem:Gi({itemRenderer:a,items:h,position:d,highlight:p,select:g,textual:r,query:o,isSelected:u})}},an=An,Qi=n=>{const e=X(void 0),{position:t,items:s,renderItem:i,height:o,itemHeight:r,setItemHeight:a}=qi(n);return $(()=>{const l=e.current?.[xt];l&&l.layoutComplete.then(()=>{n.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},an)},[s]),$(()=>{if(!t.scroll)return;const l=e.current?.[xt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(t.index)?.scrollIntoView({block:"nearest"}),an);return}l.element(t.index)?.scrollIntoView({block:"nearest"})}},[t]),Ii(Di({...t,itemHeight:r,auto:n.itemHeight==="auto"})),b`<div
			class="items"
			style="min-height: ${o}px"
			${pe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Li({items:s,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",j(Qi,{styleSheets:[$t(Fi)]}));const eo=({multi:n,...e},t)=>b`<cosmoz-listbox
		part="listbox"
		?multi=${n}
		...=${Ri(Ni(Ji)(e))}
		>${t}</cosmoz-listbox
	>`,to=Je`
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
`,no=b`
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
`,so=({onClear:n,disabled:e})=>b`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${t=>t.preventDefault()}
	>
		<slot></slot>
	</div>
	${R(n&&!e,()=>b`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${t=>t.preventDefault()}
				@click=${n}
			>
				${no}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",j(so,{observedAttributes:["disabled"],styleSheets:[$t(to)]}));const io=({content:n,onClear:e,disabled:t,hidden:s,className:i="chip",slot:o})=>b`<cosmoz-autocomplete-chip
		class=${F(i)}
		slot=${F(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${t}
		?hidden=${s}
		.onClear=${e}
		title=${F(typeof n=="string"?n:void 0)}
		>${n}</cosmoz-autocomplete-chip
	>`,oo=({value:n,min:e=0,onDeselect:t,textual:s,disabled:i,chipRenderer:o=io})=>[...n.filter(Boolean).map(r=>o({item:r,content:s(r),onClear:n.length>e&&(()=>t(r)),disabled:i,slot:"control"})),o({item:null,content:b`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],ro=oe`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",j(()=>U,{styleSheets:[ro]}));const Tn=Je`
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
`,Et=(n,e=()=>({}))=>{const t={type:n,toString(){return n}};return Object.assign((...i)=>Object.assign(e(...i),t),t)},ln=n=>n.type||n.toString(),cn=n=>Array.isArray(n)?n:[n],ao=(n,e)=>{const t=cn(e),s=(t.every(Array.isArray)?t:[t]).map(([i,o])=>({actions:cn(i).map(ln),handle:o}));return(i=n,o)=>{const r=s.find(a=>a.actions.includes(ln(o)));return r?r.handle(i,o):i}},ae={pending:"pending",rejected:"rejected",resolved:"resolved"},Nn={error:void 0,result:void 0,state:ae.pending},Mn=Et(ae.pending),Fn=Et(ae.resolved,n=>({result:n})),Dn=Et(ae.rejected,n=>({error:n})),lo=ao(Nn,[[Mn,()=>({error:void 0,result:void 0,state:ae.pending})],[Fn,(n,{result:e})=>({error:void 0,result:e,state:ae.resolved})],[Dn,(n,{error:e})=>({error:e,result:void 0,state:ae.rejected})]]),Vn=n=>{const[{error:e,result:t,state:s},i]=$n(lo,Nn);return $(()=>{if(!n)return;let o=!1;return i(Mn()),n.then(r=>!o&&i(Fn(r)),r=>!o&&i(Dn(r))),()=>{o=!0}},[n]),[t,e,s]},co=Symbol("autocomplete.deselect.last"),uo=Symbol("autocomplete.search.when.selected"),un=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),ho=(n,e,t)=>{if(!e)return n;const s=un(e.toLowerCase()),i=[];for(const o of n){const a=un(t(o).toLowerCase()).indexOf(s);a<0||i.push({item:o,index:a})}return i.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},po=n=>n===!1||n==null?[]:n,fo=(n,e,t)=>n.dispatchEvent(new CustomEvent(e,{detail:t})),dn=[],go=n=>(...e)=>{let t;const s=()=>{t&&cancelAnimationFrame(t)};return s(),t=requestAnimationFrame(()=>{t=void 0,n(...e)}),s},mo=(n,e,t)=>x(s=>{e?.(s),n.dispatchEvent(new CustomEvent(t,{detail:s}))},[e]),bo=({value:n,text:e,onChange:t,onText:s,onSelect:i,limit:o,min:r,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:h,keepQuery:d,preserveOrder:p,defaultIndex:g,externalSearch:f,disabled:m,lazyOpen:w})=>{const y=o!=null?Number(o):void 0,z=r!=null?Number(r):void 0,S=A(()=>(c??Ti)(l),[c,l]),k=Ce(),[L,E]=le("opened",!1),v=!e,P=A(()=>e?.trim(),[e]),O=mo(k,s,"text"),I=x(C=>{t?.(C,()=>E(!1)),fo(k,"value",C)},[t]),[ne,ee]=Q([]),N=!!(w&&!P),Y=A(()=>N?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:P,active:L}):a).then(po),[a,L,P,N]),V=A(()=>ie(n),[n]);$(()=>Y.then(ee),[Y]),xe({activity:co,callback:()=>{const C=ie(V);C.length>(z??0)&&I(C.slice(0,-1))},check:()=>!m&&v&&k.matches(":focus-within"),element:()=>k},[]),xe({activity:uo,callback:C=>{const M=ie(V),W=y===1;M.length>0&&W&&C.key.length===1&&I(M.slice(0,-1))},allowDefault:!0,check:()=>!m&&v&&k.matches(":focus-within"),element:()=>k},[y]),$(()=>{!L&&!d&&O("")},[L,d]),$(()=>{k.toggleAttribute("opened",!!L)},[L]);const B=zt({onText:O,onChange:I,value:V,limit:y,min:z,keepQuery:d,keepOpened:h,setOpened:E,onSelect:i,valueProperty:u}),[,,T]=Vn(Y);return{limit:y,opened:L,query:P,textual:S,value:V,source$:Y,loading:T==="pending",items:A(()=>{if(!L||N)return dn;const C=p?ne:[...V,...ft(V,Te(u))(ne)];return f?C:ho(C,P,S)},[ne,L,P,S,v,V,p,u,f,N]),onToggle:x(C=>{m||E(C.newState==="open")},[m]),onText:x(C=>{m||(O(C.target.value),E(!0))},[m,O,e,E]),onSelect:x(C=>{if(m)return;B.onSelect?.(C,B);const{onChange:M,onText:W,limit:ot,min:Le,value:rt,keepQuery:at,keepOpened:lt,setOpened:ns,valueProperty:ss}=B;at||W(""),lt||ns(!1);const ke=ie(rt),ct=Te(ss),It=ke.some(is=>ct(is)===ct(C));It&&ke.length===Le||M((It?ft(C,ct)(ke):[...ke,C]).slice(-ot))},[m,B]),onDeselect:x(C=>{m||B.onChange(ft(C,Te(B.valueProperty))(B.value))},[m,B]),defaultIndex:P!==void 0&&P?.length>0?0:g}},vo=n=>{const e=n.shadowRoot.querySelectorAll(".chip"),t=n.shadowRoot.querySelector(".badge");t.hidden=!0;for(const a of e)a.hidden=!1;const i=n.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<e.length;o++){const l=e[o].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const r=e.length-o;for(t.querySelector("span").textContent="+"+r.toString(),t.hidden=r<1;o<e.length;o++)e[o].hidden=!0},yo=({value:n,opened:e,wrap:t,limit:s})=>{const i=Ce(),o=!(t||s===1),r=A(()=>go(()=>vo(i)),[]),[a,l]=Q(0);Me(()=>{if(!o)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{l(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),Me(()=>o?r():void 0,[o,a,e,n])},xo=["input","control","label","line","error","wrap"].map(n=>`${n}: input-${n}`).join(),wo=({opened:n,isSingle:e,showSingle:t,hasResultsOrQuery:s})=>!n||e&&!t?!1:s,_o=n=>{const{opened:e,invalid:t,errorMessage:s,label:i,placeholder:o,disabled:r,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:h,onToggle:d,onDeselect:p,value:g,limit:f,min:m,showSingle:w,items:y,source$:z,loading:S,chipRenderer:k}=n,L=f===1,E=L&&g?.[0]!=null,v=S||y.length>0||u!=null&&u.length>0;return b`<cosmoz-dropdown-next
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
				?invalid=${de([z,t],()=>Se(z.then(()=>t,()=>!0),t))}
				.errorMessage=${de([z,s],()=>Se(z.then(()=>s,P=>P.message),s))}
				.value=${qe(u)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${xo}
				?data-one=${L}
				?data-single=${E}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${oo({value:g,min:m,onDeselect:p,textual:c,disabled:r,chipRenderer:k})}
			</cosmoz-input>

			${R(wo({opened:e,isSingle:E,showSingle:w,hasResultsOrQuery:v}),()=>eo({...n,items:y,multi:!L},R(S,()=>b`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>R(u!=null&&u.length>0&&y.length===0,()=>b`<slot name="no-result">
											<p class="no-result">${K("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Lt=n=>{const e={...n,...bo(n)};return yo(e),_o(e)},kt=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],So=n=>{const{onChange:e,onText:t,...s}=n,[i,o]=le("value");return $(()=>{n.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Lt({...s,value:i,onChange:x((r,...a)=>{o(r),e?.(r,...a)},[e]),onText:x(r=>{n.text=r,t?.(r)},[t])})},jn=[$t(Tn)],Bn={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",j(Lt,{observedAttributes:kt,styleSheets:jn,shadowRootInit:Bn}));customElements.define("cosmoz-autocomplete",j(So,{observedAttributes:kt,styleSheets:jn,shadowRootInit:Bn}));const $o="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",Co=oe`
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
		background: url("${$o}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,hn=n=>({item:n,excluded:!1}),Hn=n=>n.item,zo=n=>{const[e,t]=le(n),s=x(i=>t(o=>{const r=ze(i,o?.map(Hn));if(!r)return;if(!o)return r.map(hn);const a=o.reduce((c,u)=>r.includes(u.item)?[...c,u]:u.excluded?c:[...c,{...u,excluded:!0}],[]),l=r.filter(c=>!o.some(u=>u.item===c)).map(hn);return[...a,...l]}),[]);return{value:e,setExcludingValue:s,setValue:t}},Eo=(n,e)=>n?.some(t=>t.item===e&&t.excluded),Un=(n,e)=>e&&Eo(n,e)?"excluded":U,Lo=n=>(e,t,{highlight:s,select:i,textual:o,isSelected:r})=>{const a=o(e);return b`<div
				class="item"
				role="option"
				part="option ${Un(n,e)}"
				?aria-selected=${r(e)}
				data-index=${t}
				@mouseenter=${()=>s(t)}
				@click=${()=>i(e)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},ko=(n,e)=>({item:t,content:s,disabled:i,hidden:o,className:r="chip",slot:a})=>b`<cosmoz-autocomplete-chip
			class=${F(r)}
			slot=${F(a)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${Un(n,t)}
			?disabled=${i}
			?hidden=${o}
			.onClear=${()=>e(t)}
			title=${F(typeof s=="string"?s:void 0)}
		>
			${s}
		</cosmoz-autocomplete-chip>`,Oo=n=>{const{value:e,setValue:t,setExcludingValue:s}=zo("value"),[i,o]=le("text"),r=x(a=>t(l=>l?.filter(c=>c.item!==a)),[]);return Lt({...n,value:A(()=>e?.map(Hn),[e]),onChange:x(a=>{s(a)},[]),text:i,onText:x(a=>{o(a)},[]),itemRenderer:A(()=>Lo(e),[e]),chipRenderer:A(()=>ko(e,r),[e,r])})},Ro={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",j(Oo,{observedAttributes:kt,styleSheets:[Tn,Co],shadowRootInit:Ro}));const Yn="important",Po=" !"+Yn,Xn=te(class extends he{constructor(n){if(super(n),n.type!==Z.ATTRIBUTE||n.name!=="style"||n.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((e,t)=>{const s=n[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(n,[e]){const{style:t}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(Po);s.includes("-")||o?t.setProperty(s,o?i.slice(0,-11):i,o?Yn:""):t[s]=i}}return H}});class Ao extends Promise{constructor(e){const t={};super((s,i)=>Object.assign(t,{resolve:s,reject:i})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}const Kn={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Io=n=>{const{slide:e}=n,[t,s]=Q([]);return Me(()=>{Object.assign(n.style,Kn.host)},[]),$(()=>{if(e==null)return;const i={animationEnd$:new Ao,...e};s((o=[])=>{const r=o.findIndex(({id:a,out:l})=>a===i.id&&l!==!0);return r!==-1?[...o.slice(0,r),i,...o.slice(r+1,o.length)]:[...o,i]})},[e]),Me(async()=>{if(t.filter(l=>!l.out).length<2){const l=t[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const i=t[t.length-1],o=t[t.length-2],r=i.el,a=o.el;o.out=!0,r&&a&&await i.animation?.(r,a),s((l=[])=>l.filter(c=>c!==o))},[t]),{slides:t}},To=n=>b`<div
		${pe(e=>Object.assign(n,{el:e}))}
		class="slide"
		style=${Xn(Kn.slide)}
	>
		${de([n],()=>n.content??n.render?.(n))}
	</div>`,No=({slides:n})=>de([n],()=>Pn(n,({id:e})=>e,To)),Mo=n=>No(Io(n));customElements.define("cosmoz-slider",j(Mo,{useShadowDOM:!1}));const Ue=(n,e)=>{const t=n.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([t.finished,s.finished])},Fo=(n,e)=>{const t=n.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([t.finished,s.finished])},Do=()=>b`<style>
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
</style>`;customElements.define("cz-spinner",j(Do));const Vo=q(class extends J{constructor(n,e){super(n,e),this.dispatchEvent=(...t)=>{e.host.dispatchEvent.apply(e.host,t)}}update(){return this.dispatchEvent}}),Ye=(n,e,t)=>Math.max(e,Math.min(t,n)),Xe=Ye,Ot=(n,e,t,s)=>t/s<n/e?t/n:s/e,jo=(n,e,t,s)=>t/s>n/e?t/n:s/e,Wn=(n,e,t,s,i)=>{const o=Ot(n,e,t,s),r=o*i,a=n*r,l=e*r,c=a<t?(-t+a)/2:(t-a)/2,u=a<t?(t-a)/2:(-t+a)/2,h=l<s?(-s+l)/2:(s-l)/2,d=l<s?(s-l)/2:(-s+l)/2;return{x:[c,u],y:[h,d]}},Zn="empty",st="loading",Gn="loaded",Rt="error",Ee="idle",it="panning",we="pinching",Bo=1.1,Ho=n=>Bo/n,Uo=n=>2*n,Pt=(n,e,t,s)=>{const i=Ot(n,e,t,s),o=jo(n*i,e*i,t,s);return Math.max(Ho(i),Uo(o))},Yo={status:Zn,interaction:Ee,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},Jn=(n,e)=>{const t={...n};return delete t[e],t},pn=n=>{const e=Object.keys(n);if(e.length<2)return null;const t=n[e[0]],s=n[e[1]];return{midX:(t.x+s.x)/2,midY:(t.y+s.y)/2,distance:Math.hypot(s.x-t.x,s.y-t.y)}},$e=n=>{const e=Wn(n.iw,n.ih,n.cw,n.ch,n.zoom);return{...n,panX:Xe(n.panX,e.x[0],e.x[1]),panY:Xe(n.panY,e.y[0],e.y[1])}},wt=(n,e,t,s=2)=>n<e?e-(e-n)/s:n>t?t+(n-t)/s:n,qn=n=>{const e=Wn(n.iw,n.ih,n.cw,n.ch,n.zoom);return{...n,panX:wt(n.panX,e.x[0],e.x[1]),panY:wt(n.panY,e.y[0],e.y[1])}},Qn=(n,{dPanX:e=0,dPanY:t=0,scaleDiff:s=1,originX:i=0,originY:o=0})=>{const r=n.zoom*s;return{...n,zoom:r,panX:e+i+(n.panX-i)*s,panY:t+o+(n.panY-o)*s}},At=(n,e,t)=>{const s=Pt(n.iw,n.ih,n.cw,n.ch),i=Xe(n.zoom,1,s);if(i===n.zoom)return n;const o=i/n.zoom;return{...n,zoom:i,panX:e+(n.panX-e)*o,panY:t+(n.panY-t)*o}},Xo=(n,e)=>e.type==="load"?{...n,status:st}:n,Ko=(n,e)=>{switch(e.type){case"loaded":return{...n,status:Gn,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...n,status:Rt};default:return n}},Wo=(n,e)=>e.type==="load"?{...n,status:st}:n,Zo=(n,e)=>e.type==="pointerdown"?{...n,interaction:it,pointers:{...n.pointers,[e.id]:{x:e.x,y:e.y}}}:n,Go=(n,e)=>{switch(e.type){case"pointerdown":{const t={...n.pointers,[e.id]:{x:e.x,y:e.y}};return{...n,interaction:we,pointers:t}}case"pointermove":{const t=n.pointers[e.id];if(!t)return n;const s=e.x-t.x,i=e.y-t.y;return qn({...n,panX:n.panX+s,panY:n.panY+i,pointers:{...n.pointers,[e.id]:{x:e.x,y:e.y}}})}case"pointerup":{const t=Jn(n.pointers,e.id);if(Object.keys(t).length===0){const s=At({...n,pointers:t},e.settleOriginX??0,e.settleOriginY??0);return $e({...s,interaction:Ee})}return{...n,pointers:t}}default:return n}},Jo=(n,e)=>{switch(e.type){case"pointermove":{if(!n.pointers[e.id])return n;const s=pn(n.pointers),i={...n.pointers,[e.id]:{x:e.x,y:e.y}},o=pn(i);if(!s||!o)return{...n,pointers:i};const r=s.distance?o.distance/s.distance:1,a=o.midX-s.midX,l=o.midY-s.midY,c=e.containerOriginX+(o.midX-e.x),u=e.containerOriginY+(o.midY-e.y),h=Qn({...n,pointers:i},{dPanX:a,dPanY:l,scaleDiff:r,originX:c,originY:u}),d=Pt(n.iw,n.ih,n.cw,n.ch),p=wt(h.zoom,1,d),g=p/h.zoom,f=c+(h.panX-c)*g,m=u+(h.panY-u)*g;return qn({...h,zoom:p,panX:f,panY:m})}case"pointerup":{const t=Jn(n.pointers,e.id);if(Object.keys(t).length<=1){const s=$e(At({...n,pointers:t},e.settleOriginX??0,e.settleOriginY??0));return Object.keys(t).length===1?{...s,interaction:it}:{...s,interaction:Ee}}return{...n,pointers:t}}default:return n}},qo=(n,e)=>{switch(n.interaction){case Ee:return Zo(n,e);case it:return Go(n,e);case we:return Jo(n,e);default:return n}},Qo=(n,e)=>{switch(e.type){case"load":return{...n,status:st,interaction:Ee,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const t=Pt(n.iw,n.ih,n.cw,n.ch),s=Xe(e.zoom,1,t);return $e({...n,zoom:s})}case"wheel":{const{delta:t,originX:s,originY:i}=e,o=1+t,r=Qn(n,{scaleDiff:o,originX:s,originY:i});return $e(At(r,s,i))}case"pointerdown":case"pointermove":case"pointerup":return qo(n,e);default:return n}},er=(n,e)=>{if(e.type==="resize")return $e({...n,cw:e.rect.width,ch:e.rect.height});switch(n.status){case Zn:return Xo(n,e);case st:return Ko(n,e);case Gn:return Qo(n,e);case Rt:return Wo(n,e);default:return n}},tr=(n,e)=>{"ResizeObserver"in window&&$(()=>{if(e==null)return;const t=new ResizeObserver(([{contentRect:s}])=>n(s));return t.observe(e),n(e.getBoundingClientRect()),()=>t.unobserve(e)},[n,e])},gt=(n,e=.08,t=.001)=>{const[s,i]=Q(null);return $(()=>{if(s==null){i(n);return}if(e>=1){i(n);return}const o=s;window.requestAnimationFrame(()=>{const r=n-o;i(Math.abs(r)<t?n:s+r*e)})},[s,i,n,e,t]),s},nr=(n,e,t,s)=>{const{iw:i=100,ih:o=100,cw:r=100,ch:a=100}=n,l=Ot(i,o,r,a),c=l*e;return{transform:["translate(-50%, -50%)",`translate(${t}px, ${s}px)`,`scale(${c})`].join(" ")}},mt=(n,e,t)=>{const s=t.current?.getBoundingClientRect();return s?{originX:n-s.left-s.width/2,originY:e-s.top-s.height/2}:{originX:0,originY:0}},sr=(n=.08)=>{const[e,t]=$n(er,Yo),s=X(),i=X(null),o=X(null),r=x(()=>t({type:"load"}),[t]),a=x(v=>t({type:"loaded",dimensions:v}),[t]),l=x(()=>t({type:"error"}),[t]),c=x(v=>t({type:"zoom",zoom:v}),[t]),u=x(v=>v&&t({type:"resize",rect:v}),[t]),h=x(()=>u(s.current&&s.current.getBoundingClientRect()),[u]);tr(u,s.current);const d=x(v=>a({iw:v.target.naturalWidth,ih:v.target.naturalHeight}),[a]),p=x(v=>{if(v.pointerType==="mouse"||v.pointerType==="pen"){const P=v.composedPath()[0],O=s.current;(P===O||P===O?.querySelector(".transform-group"))&&(s.current?.setPointerCapture(v.pointerId),t({type:"pointerdown",id:v.pointerId,x:v.clientX,y:v.clientY}));return}if(i.current){clearTimeout(o.current),o.current=null,s.current?.setPointerCapture(i.current.id),t({type:"pointerdown",id:i.current.id,x:i.current.x,y:i.current.y}),i.current=null,s.current?.setPointerCapture(v.pointerId),t({type:"pointerdown",id:v.pointerId,x:v.clientX,y:v.clientY});return}i.current={id:v.pointerId,x:v.clientX,y:v.clientY},o.current=setTimeout(()=>{o.current=null,i.current=null},200)},[t]),g=x(v=>{if(o.current!=null&&i.current?.id===v.pointerId){const I=i.current;if(Math.hypot(v.clientX-I.x,v.clientY-I.y)>10)clearTimeout(o.current),o.current=null,s.current?.setPointerCapture(I.id),t({type:"pointerdown",id:I.id,x:I.x,y:I.y}),i.current=null;else return}const{originX:P,originY:O}=mt(v.clientX,v.clientY,s);t({type:"pointermove",id:v.pointerId,x:v.clientX,y:v.clientY,containerOriginX:P,containerOriginY:O})},[t]),f=X({x:0,y:0});$(()=>{if(e.interaction!==we)return;const v=Object.keys(e.pointers);if(v.length>=2){const P=e.pointers[v[0]],O=e.pointers[v[1]],I=(P.x+O.x)/2,ne=(P.y+O.y)/2,{originX:ee,originY:N}=mt(I,ne,s);f.current={x:ee,y:N}}},[e.pointers,e.interaction]);const m=x(v=>{if(i.current?.id===v.pointerId){clearTimeout(o.current),o.current=null,i.current=null;return}try{s.current?.releasePointerCapture(v.pointerId)}catch{}t({type:"pointerup",id:v.pointerId,settleOriginX:f.current.x,settleOriginY:f.current.y})},[t]),w=x(v=>{v.preventDefault();const{originX:P,originY:O}=mt(v.clientX,v.clientY,s);t({type:"wheel",delta:-Math.sign(v.deltaY)*.8,originX:P,originY:O})},[t]),y=e.interaction===we,z=e.interaction===it||e.interaction===we;let S=n;y?S=.8:z&&(S=.9);const k=gt(e.zoom,S),L=gt(e.panX,S),E=gt(e.panY,S);return{...e,load:r,loaded:a,error:l,zoomTo:c,resize:h,onPointerDown:p,onPointerMove:g,onPointerUp:m,onImageLoad:d,onWheel:w,containerRef:s,style:nr(e,k,L,E)}},ir=({src:n,disabled:e,zoomStiffness:t})=>{const{status:s,zoom:i,load:o,error:r,zoomTo:a,resize:l,onPointerDown:c,onPointerMove:u,onPointerUp:h,onImageLoad:d,onWheel:p,style:g,containerRef:f}=sr(t);if($(o,[n]),Ct({zoomTo:a,resize:l,zoom:i},[a,l,i]),!n)return U;const m=Vo();return $(()=>m(new CustomEvent("zoom-changed",{detail:{value:i}})),[m,i]),$(()=>m(new CustomEvent("status-changed",{detail:{value:s}})),[m,s]),b`
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
			${!n||s===Rt?U:b`
						<div class="transform-group" style=${Xn(g)}>
							<img
								src=${n}
								draggable="false"
								@load=${d}
								@error=${r}
							/>
							<slot></slot>
						</div>
					`}
		</div>
	`};class or extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",j(ir,{observedAttributes:["src","disabled","zoom-stiffness"],baseElement:or}));const rr=Ze`:host {
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
}`,ar=(n,e)=>{const t=n.width/n.height,s=e.width/e.height;return t>s?{width:e.width,height:n.height*(e.width/n.width)}:{width:n.width*(e.height/n.height),height:e.height}},lr=async(n,e)=>{const t={credentials:"include"},[{jsPDF:s},...i]=await Promise.all([We(()=>import("./jspdf.es-DO3-IKk8.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...n.map(async a=>{const l=await Promise.resolve(ze(a)),c=await fetch(l,t);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),o=i.filter(Boolean);if(o.length<1)return;const r=new s({compress:!0});return o.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:h}}=r,{width:d,height:p}=ar(r.getImageProperties(l),{width:h.getWidth()-4,height:h.getHeight()-4});c>0&&r.addPage(),r.addImage(l,a.split(".").pop().toUpperCase(),2,2,d,p)}),r.output("blob")},es=(n,e)=>{const t=URL.createObjectURL(n),s=document.body.appendChild(document.createElement("a"));s.href=t,s.download=`${e}.pdf`,s.click(),document.body.removeChild(s),URL.revokeObjectURL(t)},cr=async(n,e,t)=>{const s=await lr(n);if(s)return es(s,e),s},ur=async(n,e,t={})=>{const{httpHeaders:s,withCredentials:i=!0}=t,o=await fetch(n,{credentials:i?"include":"omit",headers:s});if(!o.ok)return;const r=await o.blob();return es(r,e),r};let dr;const hr=async()=>dr??=(await We(async()=>{const{url:n}=await import("./popout-entry-DFoo9tWP.js");return{url:n}},__vite__mapDeps([2,1,3,4]),import.meta.url)).url,pr=n=>Object.entries(n).map(([e,t])=>e+"="+t).join(",");let Ke=null;const ts=()=>Ke!=null&&!Ke.closed,fr=(n,{entryUrl:e,state:t,sync:s,title:i,onDetach:o,onClose:r})=>{n.__popoutState=t,n.__popoutSync=s,n.__popoutReady=o,n._onClose=r;const a=n.document;a.open(),a.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${i??K("Cosmoz image viewer")}</title>
</head>
<body>
	<script type="module" src="${e}"><\/script>
</body>
</html>`),a.close(),Ke=n,n.addEventListener("beforeunload",()=>n._onClose?.()),n.addEventListener("beforeunload",()=>Ke=null)},gr=async({source:n,fileIndex:e,index:t,syncImageIndex:s,syncFileIndex:i,title:o,loop:r,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",pr({height:700,width:800})),h=globalThis["pdfjs-dist/build/pdf"]?.GlobalWorkerOptions?.workerSrc??globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc,d={source:n,fileIndex:e,index:t,detachedShowZoom:a,loop:r,title:o,pdfWorkerSrc:h},p={imageIndex:f=>s({detail:{value:f}}),fileIndex:f=>i({detail:{value:f}})};if(ts()&&u.__popoutUpdate){u._onClose?.(),u.__popoutUpdate(d),u.__popoutSync=p,u._onClose=c,l();return}const g=await hr();fr(u,{entryUrl:g,state:d,sync:p,title:o,onDetach:l,onClose:c})},mr=n=>new Promise(e=>{const t=setInterval(()=>{n()&&(e(),clearInterval(t))},100)}),br=({images:n})=>{const e=window.open(void 0,"czimgviewerprint");_t(b`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${n.map(t=>b`<img src="${Se(Promise.resolve(ze(t)))}" />`)}`,e.document.body),mr(()=>Array.from(e.document.querySelectorAll("img")).every(t=>t.src&&t.complete)).then(()=>e.print()).then(()=>e.close())},vr=({files:n,safeFileIndex:e,imageIndex:t,title:s,loop:i,detachedShowZoom:o,setImageIndex:r,setFileIndex:a})=>{const[l,c]=Q(!1),u=x(p=>r(p.detail.value),[r]),h=x(p=>a(p.detail.value),[a]),d=x(()=>gr({source:n,fileIndex:e,index:t,syncImageIndex:u,syncFileIndex:h,title:s,loop:i,detachedShowZoom:o,onDetach:()=>c(!0),onClose:()=>c(!1)}),[n,e,t,s,i,o]);return{detached:l,detach:d,syncDetachedState:p=>c(p.detail.value)}},fn=[],yr=({source:n,images:e,pdf:t,pdfOptions:s})=>n??(e!=null||t!=null?[{images:e??fn,pdf:t,pdfOptions:s}]:fn),xr=[],wr=n=>{const e=A(()=>Promise.resolve(ze(n)),[n]),[t,s,i]=Vn(e);return{files:t??xr,loading:i==="pending",error:s}},_r=[],Sr=n=>{const e=A(()=>yr({source:n.source,images:n.images,pdf:n.pdf,pdfOptions:n.pdfOptions}),[n.source,n.images,n.pdf,n.pdfOptions]),{files:t,loading:s,error:i}=wr(e),[o,r]=le("currentFileIndex",0),a=t.length>0?Ye(o??0,0,t.length-1):0,l=t[a],c=l?[l]:_r,u=X(Ue),h=x(d=>{const p=d.detail?.[0],g=t.indexOf(p);g>=0&&(u.current=Ue,r(g))},[t]);return $(()=>{const d=o??0;t.length>0&&d>=t.length&&r(0)},[t]),{files:t,loading:s,error:i,fileIndex:o,setFileIndex:r,safeFileIndex:a,selectedFile:l,value:c,onSelect:h,directionRef:u}},$r=()=>{const[n,e]=Q(!1);return{isFullscreen:n,openFullscreen:()=>e(!0),closeFullscreen:()=>e(!1)}},gn=(n,e,t,s)=>{const i=n.length;let o=1;for(;o<=i;){const r=(e+o*t+i)%i;if(!s&&(t>0&&r<=e||t<0&&r>=e))return null;const a=n[r];if(a.images?.length||a.pdf)return r;o++}return null},me=[],Cr=n=>{const[e,t]=Q({images:me,loading:!1,error:void 0});return $(()=>{if(!n){t({images:me,loading:!1,error:void 0});return}const s=n.pdf,i=n.images??me;if(!s){t({images:i,loading:!1,error:void 0});return}t({images:me,loading:!0,error:void 0});let o=!1;return We(async()=>{const{loadPdfThunks:r}=await import("./pdf-loader-B_xPwwqY.js");return{loadPdfThunks:r}},__vite__mapDeps([5,1]),import.meta.url).then(({loadPdfThunks:r})=>r(s,n.pdfOptions)).then(r=>{o||t({images:r,loading:!1,error:void 0})}).catch(r=>{o||t({images:me,loading:!1,error:r})}),()=>{o=!0}},[n]),e},zr=({files:n,safeFileIndex:e,loop:t,setFileIndex:s,directionRef:i})=>{const[o,r]=le("currentImageIndex",0),a=n[e],{images:l,loading:c,error:u}=Cr(a),h=l.length>0?Ye(o??0,0,l.length-1):0,d=l[h],p=!t&&e===0&&h<=0,g=!t&&e===n.length-1&&h>=l.length-1,f=X(!1),m=x(()=>{if(i.current=Ue,h<l.length-1)return r(h+1);const y=gn(n,e,1,t);y!=null&&(s(y),r(0))},[h,l.length,n,e,t]),w=x(()=>{if(i.current=Fo,h>0)return r(h-1);const y=gn(n,e,-1,t);y!=null&&(y===e?r(l.length-1):(f.current=!0,s(y)))},[h,n,e,t,l.length]);return $(()=>{if(l.length===0)return;if(f.current){f.current=!1,r(l.length-1);return}const y=o??0;y>=l.length&&r(Ye(y,0,l.length-1))},[l]),{imageIndex:o,setImageIndex:r,nextImage:m,previousImage:w,first:p,last:g,index:h,image:d,images:l,contentLoading:c,contentError:u,downloadFileName:a?.downloadFileName??"archive"}},Er=Symbol("memo"),Lr=n=>{let e=Er,t;return function(s){if(e===s)return t;const i=n(s);return t=i,e=s,i}},kr=n=>{const{currentTarget:e}=n;if(!e.isConnected)return;const s=e.parentElement?.parentElement?.querySelector(".error");s&&s.removeAttribute("hidden"),e.setAttribute("hidden",!0)},Or=n=>{if(n.detail.value!=="error")return;const{currentTarget:e}=n;if(!e.isConnected)return;const t=e.parentElement?.querySelector(".error");t&&t.removeAttribute("hidden"),e.setAttribute("hidden",!0)},Rr=({src$:n,showZoom:e,isZoomed:t,index:s})=>{const i=de(n,()=>Se(n));return[e?b`<haunted-pan-zoom
					.src=${i}
					?disabled=${!t}
					@status-changed=${Or}
				>
					${s!=null?b`<slot name="overlay-page-${s}"></slot>`:U}
				</haunted-pan-zoom>`:b`<div class="image-container">
					<img .src=${i} @error=${kr} />
					${s!=null?b`<slot name="overlay-page-${s}"></slot>`:U}
				</div>`,de(n,()=>Se(n.then(()=>U),b`<cz-spinner></cz-spinner>`))]},Pr=n=>b`<div>
		<div hidden class="error">
			<h2>An error occurred while loading the image.</h2>
			<div class="desc">${n.image}</div>
		</div>
		${Rr(n)}
	</div>`,Ar=({image:n,showZoom:e,isZoomed:t,directionRef:s,index:i})=>{const o=A(()=>Lr(r=>Promise.resolve(ze(r))),[]);return A(()=>n==null?{id:Math.random(),content:U,animation:Ue}:{id:n,render:()=>Pr({src$:o(n),showZoom:e,isZoomed:t,image:n,index:i}),animation:s.current},[n,e,t,i])},Ir=50,Tr=300,Nr=(n,{onSwipeLeft:e,onSwipeRight:t,enabled:s})=>{const i=X(null);$(()=>{if(!s)return;const o=a=>{if(a.touches.length!==1)return;const l=a.touches[0];i.current={x:l.clientX,y:l.clientY,t:Date.now()}},r=a=>{if(!i.current)return;const l=a.changedTouches[0],c=l.clientX-i.current.x,u=l.clientY-i.current.y,h=Date.now()-i.current.t;i.current=null,!(h>Tr)&&(Math.abs(c)<Ir||Math.abs(c)<Math.abs(u)||(c<0?e?.():t?.()))};return n.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("touchend",r,{passive:!0}),()=>{n.removeEventListener("touchstart",o),n.removeEventListener("touchend",r)}},[n,e,t,s])},Mr=()=>{const[n,e]=Q(!1),t=x(()=>(e(s=>!s),n?1:1.5),[n]);return{isZoomed:n,toggleZoom:t}},Fr=n=>{const{showZoom:e,showPageNumber:t,showNav:s,showDetach:i,showFullscreen:o,showClose:r,title:a,loop:l,detachedShowZoom:c}=n,{files:u,loading:h,error:d,setFileIndex:p,safeFileIndex:g,selectedFile:f,value:m,onSelect:w,directionRef:y}=Sr(n),{setImageIndex:z,nextImage:S,previousImage:k,first:L,last:E,index:v,image:P,images:O,contentLoading:I,contentError:ne,downloadFileName:ee}=zr({files:u,safeFileIndex:g,loop:l,setFileIndex:p,directionRef:y}),{isZoomed:N,toggleZoom:Y}=Mr();Nr(n,{enabled:!N,onSwipeLeft:S,onSwipeRight:k});const V=Ar({image:P,showZoom:e,isZoomed:N,directionRef:y,index:v}),{isFullscreen:B,openFullscreen:T,closeFullscreen:C}=$r(),{detached:M,detach:W,syncDetachedState:ot}=vr({files:u,safeFileIndex:g,imageIndex:v,title:a,loop:l,detachedShowZoom:c,setImageIndex:z,setFileIndex:p}),Le=x(()=>{ts()&&W()},[W]);Ts("detached",M,[M]),$(()=>{n.toggleAttribute("hidden",M)},[M]),Ct({syncState:Le},[Le]);const rt=u.length>1||O.length>=2,at=A(()=>f?.pdf?()=>ur(f.pdf,ee,f.pdfOptions):()=>cr(O,ee),[f,ee,O]),lt=x(()=>br({images:O}),[O]);return{host:n,isZoomed:N,toggleZoom:Y,currentSlide:V,nextImage:S,previousImage:k,first:L,last:E,total:O.length,hasNav:rt,currentImageIndex:v,selectedImageNumber:v+1,onDownloadPdf:at,isFullscreen:B,openFullscreen:T,closeFullscreen:C,onPrintPdf:lt,detached:M,detach:W,syncDetachedState:ot,setFileIndex:p,setImageIndex:z,loading:h||I,error:d,contentError:ne,files:u,selectedFile:f,selectedIndex:g,value:m,onSelect:w,images:O,showPageNumber:t,showNav:s,showZoom:e,showDetach:i,showFullscreen:o,showClose:r}},mn=()=>document.createComment(""),Dr=_t(U,new DocumentFragment).constructor;class Vr extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Vr);class jr extends Ge{_op;_outlet;_content;render(e,t=document.body){return b`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[t,s=document.body]){return this.updateOutlet(s,t),this.render(t,s)}updateOutlet(e,t){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const s=this._op??=new Dr(e.appendChild(mn()),e.appendChild(mn()));se(s,this._content=t)}clearOutlet(){const e=this._op;e&&(as(e),Ae(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Br=te(jr),Hr=b`<svg
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
</svg>`,Ur=b`<svg
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
</svg>`,Yr=b`<svg
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
</svg>`,Xr=b`<svg
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
</svg>`,Kr=b`<svg
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
</svg>`,Wr=b`<svg
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
</svg>`,Zr=b`<svg
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
</svg>`,Gr=b`<svg
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
</svg>`,Jr=b`<svg
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
</svg>`,qr=n=>n?Wr:Zr,Qr=()=>b`<div class="loading"><cz-spinner></cz-spinner></div>`,ea=n=>b`<div class="error">
		<h2>${K("Failed to load files.")}</h2>
		<div class="desc">${n?.message??n}</div>
	</div>`,ta=(n,e)=>b`<div class="counter">${n}/${e}</div>`,na=({hasNav:n,first:e,last:t,previousImage:s,nextImage:i})=>R(n,()=>b`
			<button
				class="nav"
				name="prev"
				?disabled=${e}
				@click=${s}
			>
				${Kr}
			</button>
			<button class="nav" name="next" ?disabled=${t} @click=${i}>
				${Jr}
			</button>
		`),sa=({files:n,value:e,onSelect:t})=>R(n.length>1,()=>b`<cosmoz-autocomplete
				text-property="title"
				limit="1"
				.min=${1}
				show-single
				preserve-order
				.source=${n}
				.value=${e}
				@value=${t}
			></cosmoz-autocomplete>`),ia=({showZoom:n,total:e,isZoomed:t,toggleZoom:s})=>R(n&&e,()=>b`<button
				class="nav"
				@click=${i=>i.target.getRootNode().querySelector("haunted-pan-zoom").zoomTo(s())}
				title="${K("Zoom image")}"
			>
				${qr(t)}
			</button>`),oa=({showDetach:n,total:e,detach:t})=>R(n&&e,()=>b`<button
				class="nav"
				@click=${t}
				title="${K("Detach image to separate window")}"
			>
				${Xr}
			</button>`),ra=({total:n,onDownloadPdf:e})=>R(n,()=>b`<button
				class="nav"
				@click=${e}
				title="${K("Download images")}"
			>
				${Ur}
			</button>`),aa=({total:n,onPrintPdf:e})=>R(n,()=>b`<button
				class="nav"
				@click=${e}
				title="${K("Print images")}"
			>
				${Gr}
			</button>`),la=({showFullscreen:n,total:e,openFullscreen:t})=>R(n&&e,()=>b`<button
				class="nav"
				@click=${t}
				title="${K("Fullscreen image")}"
			>
				${Yr}
			</button>`),ca=({showClose:n,total:e,host:t})=>R(n&&e,()=>b`<button
				class="nav"
				@click=${()=>t.dispatchEvent(new CustomEvent("close"))}
				title="${K("Close fullscreen")}"
			>
				${Hr}
			</button>`),ua=n=>b`<div class="actions">
		${[na(n),sa(n),b`<span style="flex:auto"></span>`,ia(n),oa(n),ra(n),aa(n),la(n),ca(n)]}
	</div>`,da=(n,e)=>R(n,()=>b`<p class="error">${K("Failed to load PDF.")}</p>`,()=>R(!e,()=>b`<p>${K("No image loaded.")}</p>`)),ha=n=>R(!n.loading&&!n.error,()=>b`
			${R(n.showPageNumber&&n.total,()=>ta(n.selectedImageNumber,n.total))}
			${ua(n)}
			${da(n.contentError,n.total)}
			<cosmoz-slider id="slider" .slide=${n.currentSlide}></cosmoz-slider>
		`),pa=({files:n,selectedIndex:e,currentImageIndex:t,setFileIndex:s,setImageIndex:i,syncDetachedState:o,closeFullscreen:r,host:a})=>Br(b`<cosmoz-image-viewer
			fullscreen
			.source=${n}
			.currentFileIndex=${e}
			.currentImageIndex=${t}
			@current-file-index-changed=${Vt(s)}
			@current-image-index-changed=${Vt(i)}
			@detached-changed=${o}
			show-nav
			show-zoom
			show-close
			@close=${r}
			?show-detach=${a.showDetach}
			?loop=${a.loop}
		></cosmoz-image-viewer>`),fa=n=>[R(!n.detached,()=>[R(n.loading,Qr),R(n.error,()=>ea(n.error)),ha(n)]),R(n.isFullscreen,()=>pa(n))],ga=n=>fa(Fr(n));customElements.define("cosmoz-image-viewer",j(ga,{observedAttributes:["download-file-name","pdf","show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"],styleSheets:[rr]}));
