const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jspdf.es-CKFOE4aL.js","./preload-helper-PPVm8Dsz.js","./popout-entry-By2K-PfT.js","./iframe-Bf1O2fT1.js","./iframe-Bv8SCm1X.css","./pdf-loader-B_xPwwqY.js"])))=>i.map(i=>d[i]);
import{r as ms,D as ri,A as W,b as v,E as H,p as _s,n as bn,M as vn,u as re,v as Ee,h as tt,j as wn}from"./iframe-Bf1O2fT1.js";import{_ as bt}from"./preload-helper-PPVm8Dsz.js";let rt,ys=0;function vi(t){rt=t}function wi(){rt=null,ys=0}function xn(){return ys++}const Mt=Symbol("haunted.phase"),it=Symbol("haunted.hook"),xi=Symbol("haunted.update"),Si=Symbol("haunted.commit"),ue=Symbol("haunted.effects"),Re=Symbol("haunted.layoutEffects"),Jt="haunted.context";class Sn{update;host;virtual;[it];[ue];[Re];constructor(e,i){this.update=e,this.host=i,this[it]=new Map,this[ue]=[],this[Re]=[]}run(e){vi(this);let i=e();return wi(),i}_runEffects(e){let i=this[e];vi(this);for(let s of i)s.call(this);wi()}runEffects(){this._runEffects(ue)}runLayoutEffects(){this._runEffects(Re)}teardown(){this[it].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const Pn=Promise.resolve().then.bind(Promise.resolve());function bs(){let t=[],e;function i(){e=null;let s=t;t=[];for(var n=0,r=s.length;n<r;n++)s[n]()}return function(s){t.push(s),e==null&&(e=Pn(i))}}const Cn=bs(),Pi=bs();class En{renderer;host;state;[Mt];_updateQueued;_active;constructor(e,i){this.renderer=e,this.host=i,this.state=new Sn(this.update.bind(this),i),this[Mt]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(Cn(()=>{let e=this.handlePhase(xi);Pi(()=>{this.handlePhase(Si,e),Pi(()=>{this.handlePhase(ue)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,i){switch(this[Mt]=e,e){case Si:this.commit(i),this.runEffects(Re);return;case xi:return this.render();case ue:return this.runEffects(ue)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const oi=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},On=t=>t?.map(e=>typeof e=="string"?oi(e):e),$n=(t,...e)=>t.flatMap((i,s)=>[i,e[s]||""]).join(""),pe=$n,zn=(t="")=>t.replace(/-+([a-z])?/g,(e,i)=>i?i.toUpperCase():"");function Tn(t){class e extends En{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=t(n,this.frag)}}function i(s,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||n||{},d=On(s.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return s.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(s,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new e(s,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,_,b){if(_===b)return;let C=b===""?!0:b;Reflect.set(this,zn(m),C)}}function p(g){let m=g,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(b){_&&m===b||(_=!0,m=b,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,_,b){let C;return m in g?(C=Object.getOwnPropertyDescriptor(g,m),C&&C.set?(C.set.call(b,_),!0):(Reflect.set(g,m,_,b),!0)):(typeof m=="symbol"||m[0]==="_"?C={enumerable:!0,configurable:!0,writable:!0,value:_}:C=p(_),Object.defineProperty(b,m,C),C.set&&C.set.call(b,_),!0)}});return Object.setPrototypeOf(h.prototype,f),h}return i}class ee{id;state;constructor(e,i){this.id=e,this.state=i}}function Ln(t,...e){let i=xn(),s=rt[it],n=s.get(i);return n||(n=new t(i,rt,...e),s.set(i,n)),n.update(...e)}function te(t){return Ln.bind(null,t)}function vs(t){return te(class extends ee{callback;lastValues;values;_teardown;constructor(e,i,s,n){super(e,i),t(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function ws(t,e){t[ue].push(e)}const z=vs(ws),An=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,xs=te(class extends ee{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ws(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};An(this.state.host).dispatchEvent(new CustomEvent(Jt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s=null,value:n}=e;this.value=s?n:t.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});function Rn(t){return e=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Jt,this)}disconnectedCallback(){this.removeEventListener(Jt,this)}handleEvent(s){const{detail:n}=s;n.Context===i&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),s.stopPropagation())}unsubscribe(s){this.listeners.delete(s)}set value(s){this._value=s;for(let n of this.listeners)n(s)}get value(){return this._value}},Consumer:t(function({render:s}){const n=xs(i);return s(n)},{useShadowDOM:!1}),defaultValue:e};return i}}const M=te(class extends ee{value;values;constructor(t,e,i,s){super(t,e),this.value=i(),this.values=s}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),P=(t,e)=>M(()=>t,e);function kn(t,e){t[Re].push(e)}const ot=vs(kn),Q=te(class extends ee{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),Ss=te(class extends ee{reducer;currentState;constructor(t,e,i,s,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(s):s}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),Nn=/([A-Z])/gu,Fe=te(class extends ee{property;eventName;constructor(t,e,i,s){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(Nn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof s=="function"&&(s=s()),s!=null&&this.updateProp(s))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),Ci=t=>e=>{e.preventDefault(),t(e.detail.value)};function In(t){let e=t;return{get current(){return e},set current(i){e=i},get value(){return e},set value(i){e=i}}}function ie(t){return M(()=>In(t),[])}te(class extends ee{update(){return this.state.host}});function Mn({render:t}){const e=Tn(t),i=Rn(e);return{component:e,createContext:i}}const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},se=t=>(...e)=>({_$litDirective$:t,values:e});let we=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const ke=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),ke(s,e);return!0},at=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Ps=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),jn(e)}};function Dn(t){this._$AN!==void 0?(at(this),this._$AM=t,Ps(this)):this._$AM=t}function Fn(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)ke(s[r],!1),at(s[r]);else s!=null&&(ke(s,!1),at(s));else ke(this,t)}const jn=t=>{t.type==Z.CHILD&&(t._$AP??=Fn,t._$AQ??=Dn)};class vt extends we{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Ps(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(ke(this,e),at(this))}setValue(e){if(ms(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:U,createContext:Vn}=Mn({render:ri}),wt=(t,...e)=>t.flatMap((i,s)=>[i,e[s]??""]).join(""),ai=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Dt=new WeakMap,xe=se(class extends vt{render(t){return W}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),W}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Dt.get(e);i===void 0&&(i=new WeakMap,Dt.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Dt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Bn=({host:t,popoverRef:e,disabled:i,openOnHover:s,openOnFocus:n,open:r,close:o})=>{const a=ie(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;s&&(t.matches(":hover")||d?.matches(":hover"))||t.matches(":focus-within")||d?.matches(":focus-within")||o()},100)},u=()=>{i||(l(),r())};return z(()=>{if(!(!s||i))return t.addEventListener("pointerenter",u),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",u),t.removeEventListener("pointerleave",c)}},[s,i,t]),z(()=>{if(!(!n||i))return t.addEventListener("focusin",u),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",u),t.removeEventListener("focusout",c)}},[n,i,t]),{scheduleClose:c,cancelClose:l}},Hn=t=>{if(t.newState!=="open")return;const s=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of s){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Un=pe`
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
`,Yn=t=>{const{placement:e="bottom span-right",disabled:i,openOnHover:s,openOnFocus:n}=t,r=ie(),[o,a]=Fe("opened",!1),l=P(()=>{i||(a(!0),r.current?.showPopover())},[i]),c=P(()=>{a(!1),r.current?.hidePopover()},[]),u=P(()=>{if(i)return;r.current?.matches(":popover-open")?c():l()},[i]);z(()=>{const g=r.current;g&&(o?g.showPopover():g.hidePopover())},[o]),z(()=>{t.toggleAttribute("opened",!!o)},[o]);const{scheduleClose:d,cancelClose:h}=Bn({host:t,popoverRef:r,disabled:i,openOnHover:s,openOnFocus:n,open:l,close:c}),p=n?l:u,f=P(g=>{Hn(g),a(g.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return v`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${f}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${xe(g=>g&&(r.current=g))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",U(Yn,{styleSheets:[Un],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const K=t=>t??W;const xt=se(class extends we{constructor(t){if(super(t),t.type!==Z.PROPERTY&&t.type!==Z.ATTRIBUTE&&t.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ms(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===W)return e;const i=t.element,s=t.name;if(t.type===Z.PROPERTY){if(e===i[s])return H}else if(t.type===Z.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return H}else if(t.type===Z.ATTRIBUTE&&i.getAttribute(s)===e+"")return H;return _s(t),e}});function k(t,e,i){return t?e(t):i?.(t)}const Cs=(t,{label:e,invalid:i,errorMessage:s})=>v`
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
	`,Es=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ei=wt`
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
`,Os=wt`
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
		${Ei}
	}
	@container style(--focused: focused) {
		${Ei}
	}
`,Xn=t=>M(()=>{if(t==null)return;const e=new RegExp(t,"u");return i=>{!i.defaultPrevented&&i.data&&!e.test(i.data)&&i.preventDefault()}},[t]),li=te(class extends ee{values;constructor(t,e,i,s){super(t,e),Object.assign(e.host,i),this.values=s}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),Xe=te(class extends ee{update(){return this.state.host}}),Kn=/([A-Z])/gu,Wt=(t,e,i)=>{t[e]=i,t.dispatchEvent(new CustomEvent(e.replace(Kn,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},Jn=(t,e,i=[e])=>{const s=Xe();z(()=>{Wt(s,t,e)},i)},$s=t=>{const e=ie(void 0),i=P(l=>e.current=l,[]),s=t.shadowRoot,n=P(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=P(l=>Wt(t,"value",l.target.value),[]),o=P(l=>Wt(t,"focused",l.type==="focus"),[]),a=P(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return li({validate:a},[a]),z(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return s.addEventListener("mousedown",l),()=>s.removeEventListener("mousedown",l)},[]),{onChange:n,onFocus:o,onInput:r,onRef:i}},Wn=({placeholder:t,noLabelFloat:e,label:i})=>(e?i:void 0)||t||" ",Gn=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Es],Zn=t=>{const{type:e="text",pattern:i,allowedPattern:s,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:u,maxlength:d}=t,{onChange:h,onFocus:p,onInput:f,onRef:g}=$s(t),m=Xn(s);return Cs(v`
			<input
				${xe(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${K(i)}
				autocomplete=${K(n)}
				placeholder=${Wn(t)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${xt(r??"")}
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
		`,t)};customElements.define("cosmoz-input",U(Zn,{observedAttributes:Gn,styleSheets:[oi(Os)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Oi=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},qn=(t,e=0)=>{if(e>0){const i=t.getAttribute("rows")??"",s=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=s,t.setAttribute("rows",i)}},Qn=t=>{const{value:e,maxRows:i}=t,s=M(()=>()=>t.shadowRoot.querySelector("#input"),[]);z(()=>qn(s(),i),[i,s]),z(()=>Oi(s()),[s,e]),z(()=>{const n=s(),r=new ResizeObserver(()=>requestAnimationFrame(()=>Oi(n)));return r.observe(n),()=>r.unobserve(n)},[s])},er=["rows","placeholder",...Es],tr=t=>{const{autocomplete:e,value:i,placeholder:s,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=t,{onChange:c,onFocus:u,onInput:d,onRef:h}=$s(t);return Qn(t),Cs(v`
			<textarea id="input" part="input"
				${xe(h)}
				autocomplete=${K(e)}
				placeholder=${s||" "}
				rows=${o??1} cols=${K(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${xt(i??"")} maxlength=${K(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",U(tr,{observedAttributes:er,styleSheets:[oi(Os)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ir=t=>{const{label:e,value:i,disabled:s,error:n}=t,r=P(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${xt(!!i)}
			?disabled=${s}
			@change=${r}
		/>
		${k(e,()=>v`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${k(n,o=>v`<div class="failure">${o}</div>`)} `},sr=pe`
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
`;customElements.define("cosmoz-toggle",U(ir,{styleSheets:[nr,sr],observedAttributes:["disabled"]}));const x=t=>typeof t=="string",Oe=()=>{let t,e;const i=new Promise((s,n)=>{t=s,e=n});return i.resolve=t,i.reject=e,i},$i=t=>t==null?"":""+t,rr=(t,e,i)=>{t.forEach(s=>{e[s]&&(i[s]=e[s])})},or=/###/g,zi=t=>t&&t.indexOf("###")>-1?t.replace(or,"."):t,Ti=t=>!t||x(t),Ne=(t,e,i)=>{const s=x(e)?e.split("."):e;let n=0;for(;n<s.length-1;){if(Ti(t))return{};const r=zi(s[n]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++n}return Ti(t)?{}:{obj:t,k:zi(s[n])}},Li=(t,e,i)=>{const{obj:s,k:n}=Ne(t,e,Object);if(s!==void 0||e.length===1){s[n]=i;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=Ne(t,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=Ne(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},ar=(t,e,i,s)=>{const{obj:n,k:r}=Ne(t,e,Object);n[r]=n[r]||[],n[r].push(i)},lt=(t,e)=>{const{obj:i,k:s}=Ne(t,e);if(i)return i[s]},lr=(t,e,i)=>{const s=lt(t,i);return s!==void 0?s:lt(e,i)},zs=(t,e,i)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in t?x(t[s])||t[s]instanceof String||x(e[s])||e[s]instanceof String?i&&(t[s]=e[s]):zs(t[s],e[s],i):t[s]=e[s]);return t},_e=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var cr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const ur=t=>x(t)?t.replace(/[&<>"'\/]/g,e=>cr[e]):t;class dr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const hr=[" ",",","?","!",";"],pr=new dr(20),fr=(t,e,i)=>{e=e||"",i=i||"";const s=hr.filter(o=>e.indexOf(o)<0&&i.indexOf(o)<0);if(s.length===0)return!0;const n=pr.getRegExp(`(${s.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(t);if(!r){const o=t.indexOf(i);o>0&&!n.test(t.substring(0,o))&&(r=!0)}return r},Gt=function(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const s=e.split(i);let n=t;for(let r=0;r<s.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<s.length;++l)if(l!==r&&(a+=i),a+=s[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<s.length-1)continue;r+=l-r+1;break}n=o}return n},ct=t=>t&&t.replace("_","-"),gr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class ut{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,i)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=e||gr,this.options=i,this.debug=i.debug}log(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"log","",!0)}warn(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"warn","",!0)}error(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"error","")}deprecate(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,s,n){return n&&!this.debug?null:(x(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new ut(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ut(this.logger,e)}}var q=new ut;class St{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const n=this.observers[s].get(i)||0;this.observers[s].set(i,n+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}emit(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...s)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...s])})}}class Ai extends St{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,i],s&&(Array.isArray(s)?a.push(...s):x(s)&&r?a.push(...s.split(r)):a.push(s)));const l=lt(this.data,a);return!l&&!i&&!s&&e.indexOf(".")>-1&&(e=a[0],i=a[1],s=a.slice(2).join(".")),l||!o||!x(s)?l:Gt(this.data&&this.data[e]&&this.data[e][i],s,r)}addResource(e,i,s,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,i];s&&(a=a.concat(o?s.split(o):s)),e.indexOf(".")>-1&&(a=e.split("."),n=i,i=a[1]),this.addNamespaces(i),Li(this.data,a,n),r.silent||this.emit("added",e,i,s,n)}addResources(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in s)(x(s[r])||Array.isArray(s[r]))&&this.addResource(e,i,r,s[r],{silent:!0});n.silent||this.emit("added",e,i,s)}addResourceBundle(e,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,i];e.indexOf(".")>-1&&(a=e.split("."),n=s,s=i,i=a[1]),this.addNamespaces(i);let l=lt(this.data,a)||{};o.skipCopy||(s=JSON.parse(JSON.stringify(s))),n?zs(l,s,r):l={...l,...s},Li(this.data,a,l),o.silent||this.emit("added",e,i,s)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,i)}:this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(n=>i[n]&&Object.keys(i[n]).length>0)}toJSON(){return this.data}}var Ts={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,s,n){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,i,s,n))}),e}};const Ri={};class dt extends St{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),rr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=q.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const s=this.resolve(e,i);return s&&s.res!==void 0}extractFromKey(e,i){let s=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const n=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const o=s&&e.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!fr(e,s,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:x(r)?[r]:r};const c=e.split(s);(s!==n||s===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:x(r)?[r]:r}}translate(e,i,s){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],i),l=a[a.length-1],c=i.lng||this.language,u=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const w=i.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${w}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:o}const d=this.resolve(e,i);let h=d&&d.res;const p=d&&d.usedKey||o,f=d&&d.exactUsedKey||o,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],_=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,C=!x(h)&&typeof h!="boolean"&&typeof h!="number";if(b&&h&&C&&m.indexOf(g)<0&&!(x(_)&&Array.isArray(h))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,h,{...i,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=w,d.usedParams=this.getUsedParamsDetails(i),d):w}if(r){const w=Array.isArray(h),E=w?[]:{},y=w?f:p;for(const O in h)if(Object.prototype.hasOwnProperty.call(h,O)){const T=`${y}${r}${O}`;E[O]=this.translate(T,{...i,joinArrays:!1,ns:a}),E[O]===T&&(E[O]=h[O])}h=E}}else if(b&&x(_)&&Array.isArray(h))h=h.join(_),h&&(h=this.extendTranslation(h,e,i,s));else{let w=!1,E=!1;const y=i.count!==void 0&&!x(i.count),O=dt.hasDefaultValue(i),T=y?this.pluralResolver.getSuffix(c,i.count,i):"",N=i.ordinal&&y?this.pluralResolver.getSuffix(c,i.count,{ordinal:!1}):"",R=y&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),I=R&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${T}`]||i[`defaultValue${N}`]||i.defaultValue;!this.isValidLookup(h)&&O&&(w=!0,h=I),this.isValidLookup(h)||(E=!0,h=o);const G=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:h,Y=O&&I!==h&&this.options.updateMissing;if(E||w||Y){if(this.logger.log(Y?"updateKey":"missingKey",c,l,o,Y?I:h),r){const S=this.resolve(o,{...i,keySeparator:!1});S&&S.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let j=[];const D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&D&&D[0])for(let S=0;S<D.length;S++)j.push(D[S]);else this.options.saveMissingTo==="all"?j=this.languageUtils.toResolveHierarchy(i.lng||this.language):j.push(i.lng||this.language);const ae=(S,F,J)=>{const le=O&&J!==h?J:G;this.options.missingKeyHandler?this.options.missingKeyHandler(S,l,F,le,Y,i):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(S,l,F,le,Y,i),this.emit("missingKey",S,l,F,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&y?j.forEach(S=>{const F=this.pluralResolver.getSuffixes(S,i);R&&i[`defaultValue${this.options.pluralSeparator}zero`]&&F.indexOf(`${this.options.pluralSeparator}zero`)<0&&F.push(`${this.options.pluralSeparator}zero`),F.forEach(J=>{ae([S],o+J,i[`defaultValue${J}`]||I)})}):ae(j,o,I))}h=this.extendTranslation(h,e,i,d,s),E&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(E||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?h:void 0):h=this.options.parseMissingKeyHandler(h))}return n?(d.res=h,d.usedParams=this.getUsedParamsDetails(i),d):h}extendTranslation(e,i,s,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const c=x(e)&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=e.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=s.replace&&!x(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,s.lng||this.language||n.usedLng,s),c){const h=e.match(this.interpolator.nestingRegexp),p=h&&h.length;u<p&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(s.lng=this.language||n.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,p=new Array(h),f=0;f<h;f++)p[f]=arguments[f];return r&&r[0]===p[0]&&!s.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${i[0]}`),null):o.translate(...p,i)},s)),s.interpolation&&this.interpolator.reset()}const a=s.postProcess||this.options.postProcess,l=x(a)?[a]:a;return e!=null&&l&&l.length&&s.applyPostProcessor!==!1&&(e=Ts.handle(l,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s,n,r,o,a;return x(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,i),u=c.key;n=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=i.count!==void 0&&!x(i.count),p=h&&!i.ordinal&&i.count===0&&this.pluralResolver.shouldUseIntlApi(),f=i.context!==void 0&&(x(i.context)||typeof i.context=="number")&&i.context!=="",g=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);d.forEach(m=>{this.isValidLookup(s)||(a=m,!Ri[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Ri[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(_=>{if(this.isValidLookup(s))return;o=_;const b=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(b,u,_,m,i);else{let w;h&&(w=this.pluralResolver.getSuffix(_,i.count,i));const E=`${this.options.pluralSeparator}zero`,y=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(b.push(u+w),i.ordinal&&w.indexOf(y)===0&&b.push(u+w.replace(y,this.options.pluralSeparator)),p&&b.push(u+E)),f){const O=`${u}${this.options.contextSeparator}${i.context}`;b.push(O),h&&(b.push(O+w),i.ordinal&&w.indexOf(y)===0&&b.push(O+w.replace(y,this.options.pluralSeparator)),p&&b.push(O+E))}}let C;for(;C=b.pop();)this.isValidLookup(s)||(r=C,s=this.getResource(_,m,C,i))}))})}),{res:s,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,i,s,n):this.resourceStore.getResource(e,i,s,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!x(e.replace);let n=s?e.replace:e;if(s&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!s){n={...n};for(const r of i)delete n[r]}return n}static hasDefaultValue(e){const i="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&i===s.substring(0,i.length)&&e[s]!==void 0)return!0;return!1}}const Ft=t=>t.charAt(0).toUpperCase()+t.slice(1);class ki{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=q.create("languageUtils")}getScriptPartFromCode(e){if(e=ct(e),!e||e.indexOf("-")<0)return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=ct(e),!e||e.indexOf("-")<0)return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(x(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(e)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const i=["hans","hant","latn","cyrl","cans","mong","arab"];let s=e.split("-");return this.options.lowerCaseLng?s=s.map(n=>n.toLowerCase()):s.length===2?(s[0]=s[0].toLowerCase(),s[1]=s[1].toUpperCase(),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ft(s[1].toLowerCase()))):s.length===3&&(s[0]=s[0].toLowerCase(),s[1].length===2&&(s[1]=s[1].toUpperCase()),s[0]!=="sgn"&&s[2].length===2&&(s[2]=s[2].toUpperCase()),i.indexOf(s[1].toLowerCase())>-1&&(s[1]=Ft(s[1].toLowerCase())),i.indexOf(s[2].toLowerCase())>-1&&(s[2]=Ft(s[2].toLowerCase()))),s.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(s=>{if(i)return;const n=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(n))&&(i=n)}),!i&&this.options.supportedLngs&&e.forEach(s=>{if(i)return;const n=this.getLanguagePartFromCode(s);if(this.isSupportedCode(n))return i=n;i=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),x(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let s=e[i];return s||(s=e[this.getScriptPartFromCode(i)]),s||(s=e[this.formatLanguageCode(i)]),s||(s=e[this.getLanguagePartFromCode(i)]),s||(s=e.default),s||[]}toResolveHierarchy(e,i){const s=this.getFallbackCodes(i||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return x(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):x(e)&&r(this.formatLanguageCode(e)),s.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let mr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],_r={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const yr=["v1","v2","v3"],br=["v4"],Ni={zero:0,one:1,two:2,few:3,many:4,other:5},vr=()=>{const t={};return mr.forEach(e=>{e.lngs.forEach(i=>{t[i]={numbers:e.nr,plurals:_r[e.fc]}})}),t};class wr{constructor(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=i,this.logger=q.create("pluralResolver"),(!this.options.compatibilityJSON||br.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=vr(),this.pluralRulesCache={}}addRule(e,i){this.rules[e]=i}clearCache(){this.pluralRulesCache={}}getRule(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const s=ct(e==="dev"?"en":e),n=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:s,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(s,{type:n})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,i)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,i);return this.shouldUseIntlApi()?s&&s.resolvedOptions().pluralCategories.length>1:s&&s.numbers.length>1}getPluralFormsOfKey(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,s).map(n=>`${i}${n}`)}getSuffixes(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=this.getRule(e,i);return s?this.shouldUseIntlApi()?s.resolvedOptions().pluralCategories.sort((n,r)=>Ni[n]-Ni[r]).map(n=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n}`):s.numbers.map(n=>this.getSuffix(e,n,i)):[]}getSuffix(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,s);return n?this.shouldUseIntlApi()?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n.select(i)}`:this.getSuffixRetroCompatible(n,i):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,i){const s=e.noAbs?e.plurals(i):e.plurals(Math.abs(i));let n=e.numbers[s];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString()}shouldUseIntlApi(){return!yr.includes(this.options.compatibilityJSON)}}const Ii=function(t,e,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=lr(t,e,i);return!r&&n&&x(i)&&(r=Gt(t,i,s),r===void 0&&(r=Gt(e,i,s))),r},jt=t=>t.replace(/\$/g,"$$$$");class xr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:s,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:p,nestingSuffix:f,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:_,alwaysFormat:b}=e.interpolation;this.escape=i!==void 0?i:ur,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?_e(r):o||"{{",this.suffix=a?_e(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?_e(h):p||_e("$t("),this.nestingSuffix=f?_e(f):g||_e(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=_||1e3,this.alwaysFormat=b!==void 0?b:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,s)=>i&&i.source===s?(i.lastIndex=0,i):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,i,s,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const _=Ii(i,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,s,{...n,...i,interpolationkey:p}):_}const f=p.split(this.formatSeparator),g=f.shift().trim(),m=f.join(this.formatSeparator).trim();return this.format(Ii(i,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,s,{...n,...i,interpolationkey:g})};this.resetRegExp();const u=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>jt(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?jt(this.escape(p)):jt(p)}].forEach(p=>{for(a=0;r=p.regex.exec(e);){const f=r[1].trim();if(o=c(f),o===void 0)if(typeof u=="function"){const m=u(e,r,n);o=x(m)?m:""}else if(n&&Object.prototype.hasOwnProperty.call(n,f))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`),o="";else!x(o)&&!this.useRawValueToEscape&&(o=$i(o));const g=p.safeValue(o);if(e=e.replace(r[0],g),d?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=r[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,o);const p=h.match(/'/g),f=h.match(/"/g);(p&&p.length%2===0&&!f||f.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...s},o=o.replace&&!x(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const u=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=u.shift(),l=u,c=!0}if(r=i(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!x(r))return r;x(r)||(r=$i(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((u,d)=>this.format(u,d,s.lng,{...s,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const Sr=t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const s=t.split("(");e=s[0].toLowerCase().trim();const n=s[1].substring(0,s[1].length-1);e==="currency"&&n.indexOf(":")<0?i.currency||(i.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?i.range||(i.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();i[u]||(i[u]=c),c==="false"&&(i[u]=!1),c==="true"&&(i[u]=!0),isNaN(c)||(i[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:i}},ye=t=>{const e={};return(i,s,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=s+JSON.stringify(r);let a=e[o];return a||(a=t(ct(s),n),e[o]=a),a(i)}};class Pr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=q.create("formatter"),this.options=e,this.formats={number:ye((i,s)=>{const n=new Intl.NumberFormat(i,{...s});return r=>n.format(r)}),currency:ye((i,s)=>{const n=new Intl.NumberFormat(i,{...s,style:"currency"});return r=>n.format(r)}),datetime:ye((i,s)=>{const n=new Intl.DateTimeFormat(i,{...s});return r=>n.format(r)}),relativetime:ye((i,s)=>{const n=new Intl.RelativeTimeFormat(i,{...s});return r=>n.format(r,s.range||"day")}),list:ye((i,s)=>{const n=new Intl.ListFormat(i,{...s});return r=>n.format(r)})},this.init(e)}init(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=ye(i)}format(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Sr(l);if(this.formats[c]){let d=a;try{const h=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},p=h.locale||h.lng||n.locale||n.lng||s;d=this.formats[c](a,p,{...u,...n,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Cr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Er extends St{constructor(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=i,this.services=s,this.languageUtils=s.languageUtils,this.options=n,this.logger=q.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(s,n.backend,n)}queueLoad(e,i,s,n){const r={},o={},a={},l={};return e.forEach(c=>{let u=!0;i.forEach(d=>{const h=`${c}|${d}`;!s.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,u=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,s){const n=e.split("|"),r=n[0],o=n[1];i&&this.emit("failedLoading",r,o,i),!i&&s&&this.store.addResourceBundle(r,o,s,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&s&&(this.state[e]=0);const a={};this.queue.forEach(l=>{ar(l.loaded,[r],o),Cr(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,s){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:s,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,i,s,n+1,r*2,o)},r);return}o(c,u)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,i,a)}prepareLoading(e,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();x(e)&&(e=this.languageUtils.toResolveHierarchy(e)),x(i)&&(i=[i]);const r=this.queueLoad(e,i,s,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,i,s){this.prepareLoading(e,i,{},s)}reload(e,i,s){this.prepareLoading(e,i,{reload:!0},s)}loadOne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const s=e.split("|"),n=s[0],r=s[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${i}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,i,s,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${s}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,i,s,n,l):u=c(e,i,s,n),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(e,i,s,n,a,l)}!e||!e[0]||this.store.addResource(e[0],i,s,n)}}}const Mi=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),x(t[1])&&(e.defaultValue=t[1]),x(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(s=>{e[s]=i[s]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Di=t=>(x(t.ns)&&(t.ns=[t.ns]),x(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),x(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),We=()=>{},Or=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(i=>{typeof t[i]=="function"&&(t[i]=t[i].bind(t))})};class je extends St{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Di(e),this.services={},this.logger=q,this.modules={external:[]},Or(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(){var e=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(s=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(x(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const n=Mi();this.options={...n,...this.options,...Di(i)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?q.init(r(this.modules.logger),this.options):q.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=Pr);const d=new ki(this.options);this.store=new Ai(this.options.resources,this.options);const h=this.services;h.logger=q,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new wr(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(h.formatter=r(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new xr(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Er(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new dt(this.services,this.options),this.translator.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];e.emit(p,...g)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,s||(s=We),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Oe(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),s(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:We;const n=x(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(e,i,s){const n=Oe();return typeof e=="function"&&(s=e,e=void 0),typeof i=="function"&&(s=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),s||(s=We),this.services.backendConnector.reload(e,i,r=>{n.resolve(),s(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Ts.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let i=0;i<this.languages.length;i++){const s=this.languages[i];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}changeLanguage(e,i){var s=this;this.isLanguageChangingTo=e;const n=Oe();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return s.t(...arguments)}),i&&i(l,function(){return s.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=x(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,i,s){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||r.keyPrefix);const h=n.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(f=>`${l.keyPrefix}${h}${f}`):p=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,n.t(p,l)};return x(e)?r.lng=e:r.lngs=e,r.ns=i,r.keyPrefix=s,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=i.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(s,e)&&(!n||o(r,e)))}loadNamespaces(e,i){const s=Oe();return this.options.ns?(x(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{s.resolve(),i&&i(n)}),s):(i&&i(),Promise.resolve())}loadLanguages(e,i){const s=Oe();x(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{s.resolve(),i&&i(o)}),s):(i&&i(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new ki(Mi());return i.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new je(e,i)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:We;const s=e.forkResourceStore;s&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new je(n);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},s&&(r.store=new Ai(this.store.data,n),r.services.resourceStore=r.store),r.translator=new dt(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];r.emit(a,...c)}),r.init(n,i),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const L=je.createInstance();L.createInstance=je.createInstance;L.createInstance;L.dir;L.init;L.loadResources;L.reloadResources;L.use;L.changeLanguage;L.getFixedT;const $r=L.t;L.exists;L.setDefaultNamespace;L.hasLoadedNamespace;L.loadNamespaces;L.loadLanguages;const zr={},ve=se(class extends we{constructor(){super(...arguments),this.ot=zr}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((s,n)=>s===this.ot[n]))return H}else if(this.ot===e)return H;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});class Tr{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let Lr=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const Fi=t=>!bn(t)&&typeof t.then=="function",ji=1073741823;let Ar=class extends vt{constructor(){super(...arguments),this._$Cwt=ji,this._$Cbt=[],this._$CK=new Tr(this),this._$CX=new Lr}render(...e){return e.find(i=>!Fi(i))??H}update(e,i){const s=this._$Cbt;let n=s.length;this._$Cbt=i;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){const l=i[a];if(!Fi(l))return this._$Cwt=a,l;a<n&&l===s[a]||(this._$Cwt=ji,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return H}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Ve=se(Ar);const Vi=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},Ls=se(class extends we{constructor(t){if(super(t),t.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;i===void 0?i=e:e!==void 0&&(s=e);const n=[],r=[];let o=0;for(const a of t)n[o]=s?s(a,o):o,r[o]=i(a,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){const n=vn(t),{values:r,keys:o}=this.dt(e,i,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,u,d=0,h=n.length-1,p=0,f=r.length-1;for(;d<=h&&p<=f;)if(n[d]===null)d++;else if(n[h]===null)h--;else if(a[d]===o[p])l[p]=re(n[d],r[p]),d++,p++;else if(a[h]===o[f])l[f]=re(n[h],r[f]),h--,f--;else if(a[d]===o[f])l[f]=re(n[d],r[f]),Ee(t,l[f+1],n[d]),d++,f--;else if(a[h]===o[p])l[p]=re(n[h],r[p]),Ee(t,n[d],n[h]),h--,p++;else if(c===void 0&&(c=Vi(o,p,f),u=Vi(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(o[p]),m=g!==void 0?n[g]:null;if(m===null){const _=Ee(t,n[d]);re(_,r[p]),l[p]=_}else l[p]=re(m,r[p]),Ee(t,n[d],m),n[g]=null;p++}else tt(n[h]),h--;else tt(n[d]),d++;for(;p<=f;){const g=Ee(t,l[f+1]);re(g,r[p]),l[p++]=g}for(;d<=h;){const g=n[d++];g!==null&&tt(g)}return this.ut=o,_s(t,l),H}});class Pt extends Event{constructor(e){super(Pt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Pt.eventName="rangeChanged";class Ct extends Event{constructor(e){super(Ct.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ct.eventName="visibilityChanged";class Et extends Event{constructor(){super(Et.eventName,{bubbles:!1})}}Et.eventName="unpinned";class Rr{constructor(e){this._element=null;const i=e??window;this._node=i,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class kr extends Rr{constructor(e,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,i){const s=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;this._scrollTo(s)}scrollBy(e,i){const s=typeof e=="number"&&typeof i=="number"?{left:e,top:i}:e;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,i=null,s=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=i,this._end=s):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:i,left:s}=e;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,i,s){return this._scrollTo(e,i,s),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:i}=this;let{top:s,left:n}=this._destination;s=Math.min(s||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(s-e),o=Math.abs(n-i);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Bi=typeof window<"u"?window.ResizeObserver:void 0;const Zt=Symbol("virtualizerRef"),Ge="virtualizer-sizer";let Hi;class Nr{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const i=e.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Bi(()=>this._hostElementSizeChanged()),this._childrenRO=new Bi(this._childrenSizeChanged.bind(this))}_initHostElement(e){const i=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),i[Zt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Dr(this._hostElement,e),this._scrollerController=new kr(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let i=e.querySelector(`[${Ge}]`);i||(i=document.createElement("div"),i.setAttribute(Ge,""),e.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(Ge,""),this._sizer=i}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const i=e.type||Hi;if(typeof i=="function"&&this._layout instanceof i){const s={...e};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(e){let i,s;if(typeof e.type=="function"){s=e.type;const n={...e};delete n.type,i=n}else i=e;s===void 0&&(Hi=s=(await bt(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(n=>this._handleLayoutMessage(n),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),i=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:n}}return null}_measureChildren(){const e={},i=this._children,s=this._measureChildOverride||this._measureChild;for(let n=0;n<i.length;n++){const r=i[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=s.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:i,height:s}=e.getBoundingClientRect();return Object.assign({width:i,height:s},Ir(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:i,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Et)}get _children(){const e=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(Ge)||e.push(i),i=i.nextElementSibling;return e}_updateView(){const e=this._hostElement,i=this._scrollerController?.element,s=this._layout;if(e&&i&&s){let n,r,o,a;const l=e.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(_=>_.getBoundingClientRect());c.unshift(l);for(const _ of c)n=Math.max(n,_.top),r=Math.max(r,_.left),o=Math.min(o,_.bottom),a=Math.min(a,_.right);const u=i.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:i.scrollWidth,height:i.scrollHeight},p=n-l.top+e.scrollTop,f=r-l.left+e.scrollLeft,g=Math.max(0,o-n),m=Math.max(0,a-r);s.viewportSize={width:m,height:g},s.viewportScroll={top:p,left:f},s.totalScrollSize=h,s.offsetWithinScroller=d}}_sizeHostElement(e){const s=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=s?`${s}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:i,left:s,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${i}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:i,_last:s,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:i}=this._scrollerController,{top:s,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-s,left:i-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(e),{behavior:s}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:i}=this._scrollIntoViewTarget||{};i&&e?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Pt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ct({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,i)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Ir(t){const e=window.getComputedStyle(t);return{marginTop:Ze(e.marginTop),marginRight:Ze(e.marginRight),marginBottom:Ze(e.marginBottom),marginLeft:Ze(e.marginLeft)}}function Ze(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Ui(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Mr(t,e=!1){const i=[];let s=e?t:Ui(t);for(;s!==null;)i.push(s),s=Ui(s);return i}function Dr(t,e=!1){let i=!1;return Mr(t,e).filter(s=>{if(i)return!1;const n=getComputedStyle(s);return i=n.position==="fixed",n.overflow!=="visible"})}const Fr=t=>t,jr=(t,e)=>v`${e}: ${JSON.stringify(t,null,2)}`;class Vr extends vt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,s)=>jr(i,s+this._first),this._keyFunction=(i,s)=>Fr(i,s+this._first),this._items=[],e.type!==Z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const i=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)i.push(this._items[s]);return Ls(i,this._keyFunction,this._renderItem)}update(e,[i]){this._setFunctions(i);const s=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(e,i):this._initialize(e,i),s?H:this.render()}async _updateVirtualizerConfig(e,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,i)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:i,keyFunction:s}=e;i&&(this._renderItem=(n,r)=>i(n,r+this._first)),s&&(this._keyFunction=(n,r)=>s(n,r+this._first))}_makeVirtualizer(e,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:n,items:r}=i;this._virtualizer=new Nr({hostElement:e,layout:s,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,i){const s=e.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(s,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Br=se(Vr),Hr=(t,e)=>{if(!t||!e)return;const i=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(s=>i.includes(s)?[]:[[s,void 0]]))};class Ur extends we{_props;render(e){return H}update(e,[i]){return this._props!==i&&Object.assign(e.element,Hr(this._props,i),this._props=i),H}}const Yr=se(Ur);function Xr(t){return()=>t}const Kr=Xr(),As=Kr,ht=t=>t,ci=(t,...e)=>typeof t=="function"?t(...e):t,Jr=t=>{const e=Xe(),i=M(()=>new CSSStyleSheet,[]);z(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,i]},[]),z(()=>{i.replaceSync(t)},[t])};function st(t){return t?e=>e?.[t]:ht}const Wr=t=>{const e=st(t);return i=>typeof i=="string"?i:e(i)?.toString()||""},Gr=t=>e=>{const i={};for(const s in e)t.includes(s)&&(i[s]=e[s]);return i},Zr="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",qr=pe`
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
		background: url("${Zr}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Qr=({index:t,itemHeight:e,auto:i})=>pe`
	${k(!i,()=>pe`
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
`,eo=t=>{const e=t==="auto",[i,s]=Q(e?40:t);return[i,n=>e?s(n):void 0]},Rs=Vn(()=>As);customElements.define("cosmoz-keybinding-provider",Rs.Provider);const ui=t=>{const e=M(()=>({}),[]);return M(()=>Object.assign(e,t),[e,...Object.values(t)])},Ie=(t,e)=>{const i=xs(Rs),s=ui(t);z(()=>i(s),e)},to=Symbol("listbox.navigate.up"),io=Symbol("listbox.navigate.down"),so=Symbol("listbox.select"),no=({onUp:t,onDown:e,onEnter:i})=>{const s=Xe();Ie({activity:to,callback:t,element:()=>s},[]),Ie({activity:io,callback:e,element:()=>s},[]),Ie({activity:so,callback:i,element:()=>s},[])},ro=({items:t,onSelect:e,defaultIndex:i=0})=>{const[s,n]=Q({index:i}),{index:r}=s,{length:o}=t;return z(()=>{n({index:s.index<0?i:Math.min(s.index,t.length-1),scroll:!0})},[t,i]),no({onUp:P(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:P(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:P(()=>r>-1&&r<o&&e?.(t[r],r),[r,t,e])}),{position:s,highlight:P(a=>n({index:a}),[]),select:P(a=>e?.(a),[e])}},oo=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function oe(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:oo(t)?Array.from(t):[t]}const Vt=(t,e=ht)=>i=>{const s=oe(t).map(e);return oe(i).filter(n=>!s.includes(e(n)))},ao=(t,e)=>e?i=>i!=null&&oe(t).find(s=>s[e]===i[e]):i=>i!=null&&oe(t).includes(i),lo=(t,e)=>{if(!e||!t)return t;const i=t.toLowerCase().indexOf(e.toLowerCase());if(i<0)return t;const s=i+e.length;return[t.slice(0,i),v`<mark>${t.slice(i,s)}</mark>`,t.slice(s)]},co=(t=ht)=>(e,i,{highlight:s,select:n,textual:r=ht,query:o,isSelected:a})=>{const l=r(e),c=lo(l,o),u=t(c,e,i);return v`<div
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
			<div class="sizer" virtualizer-sizer>${u}</div>`},uo=({itemRenderer:t=co(),...e})=>{const i=ui(e);return P((s,n)=>t(s,n,i),[i,t])},ho=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],po=({value:t,valueProperty:e,items:i,onSelect:s,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=M(()=>ao(t,e),[t,e]),d=M(()=>i.slice(),[i,u]),{position:h,highlight:p,select:f}=ro({items:d,onSelect:s,defaultIndex:isNaN(n)?void 0:Number(n)}),[g,m]=eo(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:p,select:f,itemHeight:g,setItemHeight:m,renderItem:uo({itemRenderer:a,items:d,position:h,highlight:p,select:f,textual:o,query:r,isSelected:u})}},Yi=As,fo=t=>{const e=ie(void 0),{position:i,items:s,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=po(t);return z(()=>{const l=e.current?.[Zt];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},Yi)},[s]),z(()=>{if(!i.scroll)return;const l=e.current?.[Zt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(i.index)?.scrollIntoView({block:"nearest"}),Yi);return}l.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),Jr(Qr({...i,itemHeight:o,auto:t.itemHeight==="auto"})),v`<div
			class="items"
			style="min-height: ${r}px"
			${xe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Br({items:s,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",U(fo,{styleSheets:[ai(qr)]}));const go=({multi:t,...e},i)=>v`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Yr(Gr(ho)(e))}
		>${i}</cosmoz-listbox
	>`,mo=wt`
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
				${_o}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",U(yo,{observedAttributes:["disabled"],styleSheets:[ai(mo)]}));const bo=({content:t,onClear:e,disabled:i,hidden:s,className:n="chip",slot:r})=>v`<cosmoz-autocomplete-chip
		class=${K(n)}
		slot=${K(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${s}
		.onClear=${e}
		title=${K(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,vo=({value:t,min:e=0,onDeselect:i,textual:s,disabled:n,chipRenderer:r=bo})=>[...t.filter(Boolean).map(o=>r({item:o,content:s(o),onClear:t.length>e&&(()=>i(o)),disabled:n,slot:"control"})),r({item:null,content:v`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],wo=pe`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",U(()=>W,{styleSheets:[wo]}));const xo=wt`
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
`,di=(t,e=()=>({}))=>{const i={type:t,toString(){return t}};return Object.assign((...n)=>Object.assign(e(...n),i),i)},Xi=t=>t.type||t.toString(),Ki=t=>Array.isArray(t)?t:[t],So=(t,e)=>{const i=Ki(e),s=(i.every(Array.isArray)?i:[i]).map(([n,r])=>({actions:Ki(n).map(Xi),handle:r}));return(n=t,r)=>{const o=s.find(a=>a.actions.includes(Xi(r)));return o?o.handle(n,r):n}},de={pending:"pending",rejected:"rejected",resolved:"resolved"},ks={error:void 0,result:void 0,state:de.pending},Ns=di(de.pending),Is=di(de.resolved,t=>({result:t})),Ms=di(de.rejected,t=>({error:t})),Po=So(ks,[[Ns,()=>({error:void 0,result:void 0,state:de.pending})],[Is,(t,{result:e})=>({error:void 0,result:e,state:de.resolved})],[Ms,(t,{error:e})=>({error:e,result:void 0,state:de.rejected})]]),Ds=t=>{const[{error:e,result:i,state:s},n]=Ss(Po,ks);return z(()=>{if(!t)return;let r=!1;return n(Ns()),t.then(o=>!r&&n(Is(o)),o=>!r&&n(Ms(o))),()=>{r=!0}},[t]),[i,e,s]},Co=Symbol("autocomplete.deselect.last"),Eo=Symbol("autocomplete.search.when.selected"),Ji=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Oo=(t,e,i)=>{if(!e)return t;const s=Ji(e.toLowerCase()),n=[];for(const r of t){const a=Ji(i(r).toLowerCase()).indexOf(s);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},$o=t=>t===!1||t==null?[]:t,zo=(t,e,i)=>t.dispatchEvent(new CustomEvent(e,{detail:i})),Wi=[],To=t=>(...e)=>{let i;const s=()=>{i&&cancelAnimationFrame(i)};return s(),i=requestAnimationFrame(()=>{i=void 0,t(...e)}),s},Lo=(t,e,i)=>P(s=>{e?.(s),t.dispatchEvent(new CustomEvent(i,{detail:s}))},[e]),Ao=({value:t,text:e,onChange:i,onText:s,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:p,defaultIndex:f,externalSearch:g,disabled:m,lazyOpen:_})=>{const b=r!=null?Number(r):void 0,C=M(()=>(c??Wr)(l),[c,l]),w=Xe(),[E,y]=Fe("opened",!1),O=!e,T=M(()=>e?.trim(),[e]),N=Lo(w,s,"text"),R=P(S=>{i?.(S,()=>y(!1)),zo(w,"value",S)},[i]),[I,me]=Q([]),G=!!(_&&!T),Y=M(()=>G?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:T,active:E}):a).then($o),[a,E,T,G]),j=M(()=>oe(t),[t]);z(()=>Y.then(me),[Y]),Ie({activity:Co,callback:()=>{const S=oe(j);S.length>0&&R(S.slice(0,-1))},check:()=>!m&&O&&w.matches(":focus-within"),element:()=>w},[]),Ie({activity:Eo,callback:S=>{const F=oe(j),J=b===1;F.length>0&&J&&S.key.length===1&&R(F.slice(0,-1))},allowDefault:!0,check:()=>!m&&O&&w.matches(":focus-within"),element:()=>w},[b]),z(()=>{!E&&!h&&N("")},[E,h]),z(()=>{w.toggleAttribute("opened",!!E)},[E]);const D=ui({onText:N,onChange:R,value:j,limit:b,min:o,keepQuery:h,keepOpened:d,setOpened:y,onSelect:n,valueProperty:u}),[,,ae]=Ds(Y);return{limit:b,opened:E,query:T,textual:C,value:j,source$:Y,loading:ae==="pending",items:M(()=>{if(!E||G)return Wi;const S=p?I:[...j,...Vt(j,st(u))(I)];return g?S:Oo(S,T,C)},[I,E,T,C,O,j,p,u,g,G]),onToggle:P(S=>{m||y(S.newState==="open")},[m]),onText:P(S=>{m||(N(S.target.value),y(!0))},[m,N,e,y]),onSelect:P(S=>{if(m)return;D.onSelect?.(S,D);const{onChange:F,onText:J,limit:le,min:At,value:Rt,keepQuery:kt,keepOpened:Nt,setOpened:It,valueProperty:Se}=D;kt||J(""),Nt||It(!1);const ce=oe(Rt),Pe=st(Se),A=ce.some(Ce=>Pe(Ce)===Pe(S));A&&ce.length===At||F((A?Vt(S,Pe)(ce):[...ce,S]).slice(-le))},[m,D]),onDeselect:P(S=>{m||D.onChange(Vt(S,st(D.valueProperty))(D.value))},[m,D]),defaultIndex:T!==void 0&&T?.length>0?0:f}},Ro=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),i=t.shadowRoot.querySelector(".badge");i.hidden=!0;for(const a of e)a.hidden=!1;const n=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=e.length-r;for(i.querySelector("span").textContent="+"+o.toString(),i.hidden=o<1;r<e.length;r++)e[r].hidden=!0},ko=({value:t,opened:e,wrap:i,limit:s})=>{const n=Xe(),r=!(i||s===1),o=M(()=>To(()=>Ro(n)),[]),[a,l]=Q(0);ot(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[r]),ot(()=>r?o():void 0,[r,a,e,t])},No=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),Io=({opened:t,isSingle:e,showSingle:i,hasResultsOrQuery:s})=>!t||e&&!i?!1:s,Mo=t=>{const{opened:e,invalid:i,errorMessage:s,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onToggle:h,onDeselect:p,value:f,limit:g,min:m,showSingle:_,items:b,source$:C,loading:w,chipRenderer:E}=t,y=g===1,O=y&&f?.[0]!=null,T=w||b.length>0||u!=null&&u.length>0;return v`<cosmoz-dropdown-next
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
				?invalid=${ve([C,i],()=>Ve(C.then(()=>i,()=>!0),i))}
				.errorMessage=${ve([C,s],()=>Ve(C.then(()=>s,N=>N.message),s))}
				.value=${xt(u)}
				@value-changed=${d}
				autocomplete="off"
				exportparts=${No}
				?data-one=${y}
				?data-single=${O}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${vo({value:f,min:m,onDeselect:p,textual:c,disabled:o,chipRenderer:E})}
			</cosmoz-input>

			${k(Io({opened:e,isSingle:O,showSingle:_,hasResultsOrQuery:T}),()=>go({...t,items:b,multi:!y},k(w,()=>v`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>k(u!=null&&u.length>0&&b.length===0,()=>v`<slot name="no-result">
											<p class="no-result">${$r("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Fs=t=>{const e={...t,...Ao(t)};return ko(e),Mo(e)},js=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Do=t=>{const{onChange:e,onText:i,...s}=t,[n,r]=Fe("value");return z(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Fs({...s,value:n,onChange:P((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:P(o=>{t.text=o,i?.(o)},[i])})},Vs=[ai(xo)],Bs={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",U(Fs,{observedAttributes:js,styleSheets:Vs,shadowRootInit:Bs}));customElements.define("cosmoz-autocomplete",U(Do,{observedAttributes:js,styleSheets:Vs,shadowRootInit:Bs}));const Hs="important",Fo=" !"+Hs,Us=se(class extends we{constructor(t){if(super(t),t.type!==Z.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const n=e[s];if(n!=null){this.ft.add(s);const r=typeof n=="string"&&n.endsWith(Fo);s.includes("-")||r?i.setProperty(s,r?n.slice(0,-11):n,r?Hs:""):i[s]=n}}return H}});class jo extends Promise{constructor(e){const i={};super((s,n)=>Object.assign(i,{resolve:s,reject:n})),Object.assign(this,i),e?.(i.resolve,i.reject)}resolve=()=>{}}const Ys={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Vo=t=>{const{slide:e}=t,[i,s]=Q([]);return ot(()=>{Object.assign(t.style,Ys.host)},[]),z(()=>{if(e==null)return;const n={animationEnd$:new jo,...e};s((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===n.id&&l!==!0);return o!==-1?[...r.slice(0,o),n,...r.slice(o+1,r.length)]:[...r,n]})},[e]),ot(async()=>{if(i.filter(l=>!l.out).length<2){const l=i[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const n=i[i.length-1],r=i[i.length-2],o=n.el,a=r.el;r.out=!0,o&&a&&await n.animation?.(o,a),s((l=[])=>l.filter(c=>c!==r))},[i]),{slides:i}},Bo=t=>v`<div
		${xe(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${Us(Ys.slide)}
	>
		${ve([t],()=>t.content??t.render?.(t))}
	</div>`,Ho=({slides:t})=>ve([t],()=>Ls(t,({id:e})=>e,Bo)),Uo=t=>Ho(Vo(t));customElements.define("cosmoz-slider",U(Uo,{useShadowDOM:!1}));const qe=(t,e)=>{const i=t.animate([{position:"absolute",transform:"translateX(100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(-100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([i.finished,s.finished])},Yo=(t,e)=>{const i=t.animate([{position:"absolute",transform:"translateX(-100%)"},{transform:"translateX(0%)"}],{duration:200,fill:"none",easing:"ease-in-out"}),s=e.animate([{},{position:"absolute",transform:"translateX(100%)"}],{duration:200,fill:"none",easing:"ease-in-out"});return Promise.all([i.finished,s.finished])},Xo=()=>v`<style>
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
</style>`;customElements.define("cz-spinner",U(Xo));const Ko=te(class extends ee{constructor(t,e){super(t,e),this.dispatchEvent=(...i)=>{e.host.dispatchEvent.apply(e.host,i)}}update(){return this.dispatchEvent}}),pt=(t,e,i)=>Math.max(e,Math.min(i,t)),hi=(t,e,i,s)=>i/s<t/e?i/t:s/e,Jo=(t,e,i,s)=>i/s>t/e?i/t:s/e,Xs=(t,e,i,s,n)=>{const r=hi(t,e,i,s),o=r*n,a=t*o,l=e*o,c=a<i?(-i+a)/2:(i-a)/2,u=a<i?(i-a)/2:(-i+a)/2,d=l<s?(-s+l)/2:(s-l)/2,h=l<s?(s-l)/2:(-s+l)/2;return{x:[c,u],y:[d,h]}},Ks="empty",Ot="loading",Js="loaded",pi="error",Ke="idle",$t="panning",Me="pinching",Wo=1.1,Go=t=>Wo/t,Zo=t=>2*t,fi=(t,e,i,s)=>{const n=hi(t,e,i,s),r=Jo(t*n,e*n,i,s);return Math.max(Go(n),Zo(r))},qo={status:Ks,interaction:Ke,iw:100,ih:100,cw:100,ch:100,zoom:1,panX:0,panY:0,pointers:{}},Ws=(t,e)=>{const i={...t};return delete i[e],i},Gi=t=>{const e=Object.keys(t);if(e.length<2)return null;const i=t[e[0]],s=t[e[1]];return{midX:(i.x+s.x)/2,midY:(i.y+s.y)/2,distance:Math.hypot(s.x-i.x,s.y-i.y)}},Be=t=>{const e=Xs(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:pt(t.panX,e.x[0],e.x[1]),panY:pt(t.panY,e.y[0],e.y[1])}},qt=(t,e,i,s=2)=>t<e?e-(e-t)/s:t>i?i+(t-i)/s:t,Gs=t=>{const e=Xs(t.iw,t.ih,t.cw,t.ch,t.zoom);return{...t,panX:qt(t.panX,e.x[0],e.x[1]),panY:qt(t.panY,e.y[0],e.y[1])}},Zs=(t,{dPanX:e=0,dPanY:i=0,scaleDiff:s=1,originX:n=0,originY:r=0})=>{const o=t.zoom*s;return{...t,zoom:o,panX:e+n+(t.panX-n)*s,panY:i+r+(t.panY-r)*s}},gi=(t,e,i)=>{const s=fi(t.iw,t.ih,t.cw,t.ch),n=pt(t.zoom,1,s);if(n===t.zoom)return t;const r=n/t.zoom;return{...t,zoom:n,panX:e+(t.panX-e)*r,panY:i+(t.panY-i)*r}},Qo=(t,e)=>e.type==="load"?{...t,status:Ot}:t,ea=(t,e)=>{switch(e.type){case"loaded":return{...t,status:Js,...e.dimensions,panX:0,panY:0,zoom:1};case"error":return{...t,status:pi};default:return t}},ta=(t,e)=>e.type==="load"?{...t,status:Ot}:t,ia=(t,e)=>e.type==="pointerdown"?{...t,interaction:$t,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}}:t,sa=(t,e)=>{switch(e.type){case"pointerdown":{const i={...t.pointers,[e.id]:{x:e.x,y:e.y}};return{...t,interaction:Me,pointers:i}}case"pointermove":{const i=t.pointers[e.id];if(!i)return t;const s=e.x-i.x,n=e.y-i.y;return Gs({...t,panX:t.panX+s,panY:t.panY+n,pointers:{...t.pointers,[e.id]:{x:e.x,y:e.y}}})}case"pointerup":{const i=Ws(t.pointers,e.id);if(Object.keys(i).length===0){const s=gi({...t,pointers:i},e.settleOriginX??0,e.settleOriginY??0);return Be({...s,interaction:Ke})}return{...t,pointers:i}}default:return t}},na=(t,e)=>{switch(e.type){case"pointermove":{if(!t.pointers[e.id])return t;const s=Gi(t.pointers),n={...t.pointers,[e.id]:{x:e.x,y:e.y}},r=Gi(n);if(!s||!r)return{...t,pointers:n};const o=s.distance?r.distance/s.distance:1,a=r.midX-s.midX,l=r.midY-s.midY,c=e.containerOriginX+(r.midX-e.x),u=e.containerOriginY+(r.midY-e.y),d=Zs({...t,pointers:n},{dPanX:a,dPanY:l,scaleDiff:o,originX:c,originY:u}),h=fi(t.iw,t.ih,t.cw,t.ch),p=qt(d.zoom,1,h),f=p/d.zoom,g=c+(d.panX-c)*f,m=u+(d.panY-u)*f;return Gs({...d,zoom:p,panX:g,panY:m})}case"pointerup":{const i=Ws(t.pointers,e.id);if(Object.keys(i).length<=1){const s=Be(gi({...t,pointers:i},e.settleOriginX??0,e.settleOriginY??0));return Object.keys(i).length===1?{...s,interaction:$t}:{...s,interaction:Ke}}return{...t,pointers:i}}default:return t}},ra=(t,e)=>{switch(t.interaction){case Ke:return ia(t,e);case $t:return sa(t,e);case Me:return na(t,e);default:return t}},oa=(t,e)=>{switch(e.type){case"load":return{...t,status:Ot,interaction:Ke,panX:0,panY:0,zoom:1,pointers:{}};case"zoom":{const i=fi(t.iw,t.ih,t.cw,t.ch),s=pt(e.zoom,1,i);return Be({...t,zoom:s})}case"wheel":{const{delta:i,originX:s,originY:n}=e,r=1+i,o=Zs(t,{scaleDiff:r,originX:s,originY:n});return Be(gi(o,s,n))}case"pointerdown":case"pointermove":case"pointerup":return ra(t,e);default:return t}},aa=(t,e)=>{if(e.type==="resize")return Be({...t,cw:e.rect.width,ch:e.rect.height});switch(t.status){case Ks:return Qo(t,e);case Ot:return ea(t,e);case Js:return oa(t,e);case pi:return ta(t,e);default:return t}},la=(t,e)=>{"ResizeObserver"in window&&z(()=>{if(e==null)return;const i=new ResizeObserver(([{contentRect:s}])=>t(s));return i.observe(e),t(e.getBoundingClientRect()),()=>i.unobserve(e)},[t,e])},Bt=(t,e=.08,i=.001)=>{const[s,n]=Q(null);return z(()=>{if(s==null){n(t);return}if(e>=1){n(t);return}const r=s;window.requestAnimationFrame(()=>{const o=t-r;n(Math.abs(o)<i?t:s+o*e)})},[s,n,t,e,i]),s},ca=(t,e,i,s)=>{const{iw:n=100,ih:r=100,cw:o=100,ch:a=100}=t,l=hi(n,r,o,a),c=l*e;return{position:"absolute",top:"50%",left:"50%",transform:["translate(-50%, -50%)",`translate(${i}px, ${s}px)`,`scale(${c})`].join(" ")}},Ht=(t,e,i)=>{const s=i.current?.getBoundingClientRect();return s?{originX:t-s.left-s.width/2,originY:e-s.top-s.height/2}:{originX:0,originY:0}},ua=(t=.08)=>{const[e,i]=Ss(aa,qo),s=ie(),n=P(()=>i({type:"load"}),[i]),r=P(y=>i({type:"loaded",dimensions:y}),[i]),o=P(()=>i({type:"error"}),[i]),a=P(y=>i({type:"zoom",zoom:y}),[i]),l=P(y=>y&&i({type:"resize",rect:y}),[i]),c=P(()=>l(s.current&&s.current.getBoundingClientRect()),[l]);la(l,s.current);const u=P(y=>r({iw:y.target.naturalWidth,ih:y.target.naturalHeight}),[r]),d=P(y=>{s.current?.setPointerCapture(y.pointerId),i({type:"pointerdown",id:y.pointerId,x:y.clientX,y:y.clientY})},[i]),h=P(y=>{const{originX:O,originY:T}=Ht(y.clientX,y.clientY,s);i({type:"pointermove",id:y.pointerId,x:y.clientX,y:y.clientY,containerOriginX:O,containerOriginY:T})},[i]),p=ie({x:0,y:0});z(()=>{if(e.interaction!==Me)return;const y=Object.keys(e.pointers);if(y.length>=2){const O=e.pointers[y[0]],T=e.pointers[y[1]],N=(O.x+T.x)/2,R=(O.y+T.y)/2,{originX:I,originY:me}=Ht(N,R,s);p.current={x:I,y:me}}},[e.pointers,e.interaction]);const f=P(y=>{try{s.current?.releasePointerCapture(y.pointerId)}catch{}i({type:"pointerup",id:y.pointerId,settleOriginX:p.current.x,settleOriginY:p.current.y})},[i]),g=P(y=>{y.preventDefault();const{originX:O,originY:T}=Ht(y.clientX,y.clientY,s);i({type:"wheel",delta:-Math.sign(y.deltaY)*.8,originX:O,originY:T})},[i]),m=e.interaction===Me,_=e.interaction===$t||e.interaction===Me;let b=t;m?b=.8:_&&(b=.9);const C=Bt(e.zoom,b),w=Bt(e.panX,b),E=Bt(e.panY,b);return{...e,load:n,loaded:r,error:o,zoomTo:a,resize:c,onPointerDown:d,onPointerMove:h,onPointerUp:f,onImageLoad:u,onWheel:g,containerRef:s,style:ca(e,C,w,E)}},da=({src:t,disabled:e,zoomStiffness:i})=>{const{status:s,zoom:n,load:r,error:o,zoomTo:a,resize:l,onPointerDown:c,onPointerMove:u,onPointerUp:d,onImageLoad:h,onWheel:p,style:f,containerRef:g}=ua(i);if(z(r,[t]),li({zoomTo:a,resize:l,zoom:n},[a,l,n]),!t)return W;const m=Ko();return z(()=>m(new CustomEvent("zoom-changed",{detail:{value:n}})),[m,n]),z(()=>m(new CustomEvent("status-changed",{detail:{value:s}})),[m,s]),v`
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
			class="container ${s}"
			style="pointer-events: ${e?"none":"all"}"
			@wheel=${p}
			@pointerdown=${c}
			@pointermove=${u}
			@pointerup=${d}
			@pointercancel=${d}
			${xe(_=>g.current=_)}
		>
			${!t||s===pi?W:v`
						<img
							src=${t}
							draggable="false"
							@load=${h}
							@error=${o}
							style=${Us(f)}
						/>
					`}
		</div>
	`};class ha extends HTMLElement{resize(){}zoomTo(){}}customElements.define("haunted-pan-zoom",U(da,{observedAttributes:["src","disabled","zoom-stiffness"],baseElement:ha}));window.JSCompiler_renameProperty=function(t,e){return t};let pa=/(url\()([^)]*)(\))/g,fa=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Qe,B;function De(t,e){if(t&&fa.test(t)||t==="//")return t;if(Qe===void 0){Qe=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Qe=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Qe)try{return new URL(t,e).href}catch{return t}return B||(B=document.implementation.createHTMLDocument("temp"),B.base=B.createElement("base"),B.head.appendChild(B.base),B.anchor=B.createElement("a"),B.body.appendChild(B.anchor)),B.base.href=e,B.anchor.href=t,B.anchor.href||t}function mi(t,e){return t.replace(pa,function(i,s,n,r){return s+"'"+De(n.replace(/["']/g,""),e)+"'"+r})}function _i(t){return t.substring(0,t.lastIndexOf("/")+1)}const ga=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const ma=ga&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let _a=window.Polymer&&window.Polymer.rootPath||_i(document.baseURI||window.location.href),ft=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Qt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ya=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ba=window.Polymer&&window.Polymer.legacyOptimizations||!1,va=window.Polymer&&window.Polymer.legacyWarnings||!1,wa=window.Polymer&&window.Polymer.syncInitialRender||!1,ei=window.Polymer&&window.Polymer.legacyUndefined||!1,xa=window.Polymer&&window.Polymer.orderedComputed||!1,Zi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Sa=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Pa=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Ca=0;const fe=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=Ca++;function s(n){let r=n.__mixinSet;if(r&&r[i])return n;let o=e,a=o.get(n);if(!a){a=t(n),o.set(n,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return s};let yi={},qs={};function qi(t,e){yi[t]=qs[t.toLowerCase()]=e}function Qi(t){return yi[t]||qs[t.toLowerCase()]}function Ea(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class He extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let s=Qi(e);return s&&i?s.querySelector(i):s}return null}attributeChangedCallback(e,i,s,n){i!==s&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=De(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=_i(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Qt&&Qi(e)!==void 0)throw qi(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,qi(e,this),Ea(this)}}}He.prototype.modules=yi;customElements.define("dom-module",He);const Oa="link[rel=import][type~=css]",$a="include",es="shady-unscoped";function Qs(t){return He.import(t)}function ts(t){let e=t.body?t.body:t;const i=mi(e.textContent,t.baseURI),s=document.createElement("style");return s.textContent=i,s}function za(t){const e=t.trim().split(/\s+/),i=[];for(let s=0;s<e.length;s++)i.push(...Ta(e[s]));return i}function Ta(t){const e=Qs(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...tn(e));const s=e.querySelector("template");s&&i.push(...en(s,e.assetpath)),e._styles=i}return e._styles}function en(t,e){if(!t._styles){const i=[],s=t.content.querySelectorAll("style");for(let n=0;n<s.length;n++){let r=s[n],o=r.getAttribute($a);o&&i.push(...za(o).filter(function(a,l,c){return c.indexOf(a)===l})),e&&(r.textContent=mi(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function La(t){let e=Qs(t);return e?tn(e):[]}function tn(t){const e=[],i=t.querySelectorAll(Oa);for(let s=0;s<i.length;s++){let n=i[s];if(n.import){const r=n.import,o=n.hasAttribute(es);if(o&&!r._unscopedStyle){const a=ts(r);a.setAttribute(es,""),r._unscopedStyle=a}else r._style||(r._style=ts(r));e.push(o?r._unscopedStyle:r._style)}}return e}const he=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function ti(t){return t.indexOf(".")>=0}function ge(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function Aa(t,e){return t.indexOf(e+".")===0}function gt(t,e){return e.indexOf(t+".")===0}function mt(t,e,i){return e+i.slice(t.length)}function Le(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let s=t[i].toString().split(".");for(let n=0;n<s.length;n++)e.push(s[n])}return e.join(".")}else return t}function sn(t){return Array.isArray(t)?Le(t).split("."):t.toString().split(".")}function V(t,e,i){let s=t,n=sn(e);for(let r=0;r<n.length;r++){if(!s)return;let o=n[r];s=s[o]}return i&&(i.path=n.join(".")),s}function is(t,e,i){let s=t,n=sn(e),r=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++){let a=n[o];if(s=s[a],!s)return}s[r]=i}else s[e]=i;return n.join(".")}const _t={},Ra=/-[a-z]/g,ka=/([A-Z])/g;function nn(t){return _t[t]||(_t[t]=t.indexOf("-")<0?t:t.replace(Ra,e=>e[1].toUpperCase()))}function zt(t){return _t[t]||(_t[t]=t.replace(ka,"-$1").toLowerCase())}let Na=0,rn=0,be=[],Ia=0,ii=!1,on=document.createTextNode("");new window.MutationObserver(Ma).observe(on,{characterData:!0});function Ma(){ii=!1;const t=be.length;for(let e=0;e<t;e++){let i=be[e];if(i)try{i()}catch(s){setTimeout(()=>{throw s})}}be.splice(0,t),rn+=t}const Da={run(t){return ii||(ii=!0,on.textContent=Ia++),be.push(t),Na++},cancel(t){const e=t-rn;if(e>=0){if(!be[e])throw new Error("invalid async handle: "+t);be[e]=null}}};const Fa=Da,an=fe(t=>{class e extends t{static createProperties(s){const n=this.prototype;for(let r in s)r in n||n._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,n){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,n))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[s];return n||(n=this.constructor.attributeNameForProperty(s),this.__dataAttributes[n]=s),n}_definePropertyAccessor(s,n){Object.defineProperty(this,s,{get(){return this.__data[s]},set:n?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,n){this._setPendingProperty(s,n)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,n,r){let o=this.__data[s],a=this._shouldPropertyChange(s,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=o),this.__data[s]=n,this.__dataPending[s]=n),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Fa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,n=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,n,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,n,r)),this.__dataCounter--}_shouldPropertiesChange(s,n,r){return!!n}_propertiesChanged(s,n,r){}_shouldPropertyChange(s,n,r){return r!==n&&(r===r||n===n)}attributeChangedCallback(s,n,r,o){n!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,n,r,o)}_attributeToProperty(s,n,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[s]||s;this[a]=this._deserializeValue(n,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,n,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,n||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,n,r){const o=this._serializeValue(n);(r==="class"||r==="name"||r==="slot")&&(s=he(s)),o===void 0?s.removeAttribute(r):s.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(s){return typeof s==="boolean"?s?"":void 0:s?.toString()}_deserializeValue(s,n){switch(n){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return e});const ln={};let et=HTMLElement.prototype;for(;et;){let t=Object.getOwnPropertyNames(et);for(let e=0;e<t.length;e++)ln[t[e]]=!0;et=Object.getPrototypeOf(et)}const ja=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function Va(t,e){if(!ln[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const Ba=fe(t=>{const e=an(t);class i extends e{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let r=0;r<n.length;r++)this.prototype._createPropertyAccessor(nn(n[r]))}static attributeNameForProperty(n){return zt(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let r in n)this._setProperty(r,n[r])}_ensureAttribute(n,r){const o=this;o.hasAttribute(n)||this._valueToNodeAttribute(o,r,n)}_serializeValue(n){switch(typeof n){case"object":if(n instanceof Date)return n.toString();if(n){if(ja(n))return n;try{return JSON.stringify(n)}catch{return""}}default:return super._serializeValue(n)}}_deserializeValue(n,r){let o;switch(r){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,r);break}return o}_definePropertyAccessor(n,r){Va(this,n),super._definePropertyAccessor(n,r)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return!!(this.__dataPending&&n in this.__dataPending)}}return i});const Ha={"dom-if":!0,"dom-repeat":!0};let ss=!1,ns=!1;function Ua(){if(!ss){ss=!0;const t=document.createElement("textarea");t.placeholder="a",ns=t.placeholder===t.textContent}return ns}function Ya(t){Ua()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Xa=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,s)=>{const n=i.getAttribute(s);if(t&&s.startsWith("on-")){e.setAttribute(s,t.createScript(n,s));return}e.setAttribute(s,n)}})();function Ka(t){let e=t.getAttribute("is");if(e&&Ha[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:s}=i.attributes[0];Xa(t,i,s),i.removeAttribute(s)}}return t}function cn(t,e){let i=e.parentInfo&&cn(t,e.parentInfo);if(i){for(let s=i.firstChild,n=0;s;s=s.nextSibling)if(e.parentIndex===n++)return s}else return t}function Ja(t,e,i,s){s.id&&(e[s.id]=i)}function Wa(t,e,i){if(i.events&&i.events.length)for(let s=0,n=i.events,r;s<n.length&&(r=n[s]);s++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function Ga(t,e,i,s){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=s)}function Za(t,e,i){return t=t._methodHost||t,function(n){t[i]?t[i](n,n.detail):console.warn("listener method `"+i+"` not defined")}}const qa=fe(t=>{class e extends t{static _parseTemplate(s,n){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!n,r.stripWhiteSpace=n&&n.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,n,r){return this._parseTemplateNode(s.content,n,r)}static _parseTemplateNode(s,n,r){let o=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,n,r)||o:a.localName==="slot"&&(n.hasInsertionPoint=!0),Ya(a),a.firstChild&&this._parseTemplateChildNodes(a,n,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,r)||o),o||r.noted}static _parseTemplateChildNodes(s,n,r){if(!(s.localName==="script"||s.localName==="style"))for(let o=s.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Ka(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,s.removeChild(u),u=l;if(n.stripWhiteSpace&&!o.textContent.trim()){s.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,n,c)&&(c.infoIndex=n.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(s,n,r){let o=s,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,n,r){let o=!1,a=Array.from(s.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(s,n,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(s,n,r,o,a){return o.slice(0,3)==="on-"?(s.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let n=s._templateInfo;return n&&n.content||s.content}_stampTemplate(s,n){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),n=n||this.constructor._parseTemplate(s);let r=n.nodeInfoList,o=n.content||s.content,a=document.importNode(o,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=cn(a,d);Ja(this,a.$,h,d),Ga(this,h,d,n),Wa(this,h,d)}return a=a,a}_addMethodEventListenerToNode(s,n,r,o){o=o||s;let a=Za(o,n,r);return this._addEventListenerToNode(s,n,a),a}_addEventListenerToNode(s,n,r){s.addEventListener(n,r)}_removeEventListenerFromNode(s,n,r){s.removeEventListener(n,r)}}return e});let Ue=0;const Ye=[],$={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},un="__computeInfo",Qa=/[A-Z]/;function Ut(t,e,i){let s=t[e];if(!s)s=t[e]={};else if(!t.hasOwnProperty(e)&&(s=t[e]=Object.create(t[e]),i))for(let n in s){let r=s[n],o=s[n]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return s}function Ae(t,e,i,s,n,r){if(e){let o=!1;const a=Ue++;for(let l in i){let c=n?ge(l):l,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==a)&&(!n||bi(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(t,l,i,s,p.info,n,r),o=!0)}return o}return!1}function el(t,e,i,s,n,r,o,a){let l=!1,c=o?ge(s):s,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==i)&&(!o||bi(s,p.trigger))&&(p.info&&(p.info.lastRun=i),p.fn(t,s,n,r,p.info,o,a),l=!0);return l}function bi(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&Aa(i,t))||!!(e.wildcard&&gt(i,t))}else return!0}function rs(t,e,i,s,n){let r=typeof n.method=="string"?t[n.method]:n.method,o=n.property;r?r.call(t,t.__data[o],s[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function tl(t,e,i,s,n){let r=t[$.NOTIFY],o,a=Ue++;for(let c in e)e[c]&&(r&&el(t,r,a,c,i,s,n)||n&&il(t,c,i))&&(o=!0);let l;o&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function il(t,e,i){let s=ge(e);if(s!==e){let n=zt(s)+"-changed";return dn(t,n,i[e],e),!0}return!1}function dn(t,e,i,s){let n={value:i,queueProperty:!0};s&&(n.path=s),he(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function sl(t,e,i,s,n,r){let a=(r?ge(e):e)!=e?e:null,l=a?V(t,a):t.__data[e];a&&l===void 0&&(l=i[e]),dn(t,n.eventName,l,a)}function nl(t,e,i,s,n){let r,o=t.detail,a=o&&o.path;a?(s=mt(i,s,a),r=o&&o.value):r=t.currentTarget[i],r=n?!r:r,(!e[$.READ_ONLY]||!e[$.READ_ONLY][s])&&e._setPendingPropertyOrPath(s,r,!0,!!a)&&(!o||!o.queueProperty)&&e._invalidateProperties()}function rl(t,e,i,s,n){let r=t.__data[e];ft&&(r=ft(r,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,r)}function ol(t,e,i,s){let n=t[$.COMPUTE];if(n)if(xa){Ue++;const r=ll(t),o=[];for(let l in e)os(l,n,o,r,s);let a;for(;a=o.shift();)hn(t,"",e,i,a)&&os(a.methodInfo,n,o,r,s);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;Ae(t,n,r,i,s);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const al=(t,e,i)=>{let s=0,n=e.length-1,r=-1;for(;s<=n;){const o=s+n>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)s=o+1;else if(a>0)n=o-1;else{r=o;break}}r<0&&(r=n+1),e.splice(r,0,t)},os=(t,e,i,s,n)=>{const r=n?ge(t):t,o=e[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==Ue&&(!n||bi(t,l.trigger))&&(l.info.lastRun=Ue,al(l.info,i,s))}};function ll(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[$.COMPUTE];let{counts:s,ready:n,total:r}=cl(t),o;for(;o=n.shift();){e.set(o,e.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--s[c]===0&&n.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function cl(t){const e=t[un],i={},s=t[$.COMPUTE],n=[];let r=0;for(let o in e){const a=e[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in s)e[o]||n.push(o);return{counts:i,ready:n,total:r}}function hn(t,e,i,s,n){let r=si(t,e,i,s,n);if(r===Ye)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function ul(t,e,i){let s=t.__dataLinkedPaths;if(s){let n;for(let r in s){let o=s[r];gt(r,e)?(n=mt(r,o,e),t._setPendingPropertyOrPath(n,i,!0,!0)):gt(o,e)&&(n=mt(o,r,e),t._setPendingPropertyOrPath(n,i,!0,!0))}}}function Yt(t,e,i,s,n,r,o){i.bindings=i.bindings||[];let a={kind:s,target:n,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),gl(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||zt(n)+"-changed",a.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,dl(t,e,a,u,l)}}function dl(t,e,i,s,n){if(!s.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,o={index:n,binding:i,part:s,evaluator:t};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=fn(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:hl,info:o,trigger:l})}}}function hl(t,e,i,s,n,r,o){let a=o[n.index],l=n.binding,c=n.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=i[e];e=mt(c.source,l.target,e),a._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(a)}else{let u=n.evaluator._evaluateBinding(t,c,e,i,s,r);u!==Ye&&pl(t,a,l,c,u)}}function pl(t,e,i,s,n){if(n=fl(e,n,i,s),ft&&(n=ft(n,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,n,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[$.READ_ONLY]||!e[$.READ_ONLY][r])&&e._setPendingProperty(r,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,n)}}function fl(t,e,i,s){if(i.isCompound){let n=t.__dataCompoundStorage[i.target];n[s.compoundIndex]=e,e=n.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function gl(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function ml(t,e){let{nodeList:i,nodeInfoList:s}=e;if(s.length)for(let n=0;n<s.length;n++){let r=s[n],o=i[n],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];_l(o,c),yl(o,t,c)}o.__dataHost=t}}function _l(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,n=new Array(s.length);for(let o=0;o<s.length;o++)n[o]=s[o].literal;let r=e.target;i[r]=n,e.literal&&e.kind=="property"&&(r==="className"&&(t=he(t)),t[r]=e.literal)}}function yl(t,e,i){if(i.listenerEvent){let s=i.parts[0];t.addEventListener(i.listenerEvent,function(n){nl(n,e,i.target,s.source,s.negate)})}}function as(t,e,i,s,n,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:r};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:s,info:o,trigger:l});return r&&t._addPropertyEffect(e.methodName,i,{fn:s,info:o}),o}function si(t,e,i,s,n){let r=t._methodHost||t,o=r[n.methodName];if(o){let a=t._marshalArgs(n.args,e,i);return a===Ye?Ye:o.apply(r,a)}else n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const bl=[],pn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",vl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",wl="(?:'(?:[^'\\\\]|\\\\.)*')",xl='(?:"(?:[^"\\\\]|\\\\.)*")',Sl="(?:"+wl+"|"+xl+")",ls="(?:("+pn+"|"+vl+"|"+Sl+")\\s*)",Pl="(?:"+ls+"(?:,\\s*"+ls+")*)",Cl="(?:\\(\\s*(?:"+Pl+"?)\\)\\s*)",El="("+pn+"\\s*"+Cl+"?)",Ol="(\\[\\[|{{)\\s*",$l="(?:]]|}})",zl="(?:(!)\\s*)?",Tl=Ol+zl+El+$l,cs=new RegExp(Tl,"g");function us(t){let e="";for(let i=0;i<t.length;i++){let s=t[i].literal;e+=s||""}return e}function Xt(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let s={methodName:e[1],static:!0,args:bl};if(e[2].trim()){let n=e[2].replace(/\\,/g,"&comma;").split(",");return Ll(n,s)}else return s}return null}function Ll(t,e){return e.args=t.map(function(i){let s=fn(i);return s.literal||(e.static=!1),s},this),e}function fn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},s=e[0];switch(s==="-"&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=ge(e),i.structured=ti(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function ds(t,e,i){let s=V(t,i);return s===void 0&&(s=e[i]),s}function gn(t,e,i,s){const n={indexSplices:s};ei&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(i+".splices",n),t.notifyPath(i+".length",e.length),ei&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function $e(t,e,i,s,n,r){gn(t,e,i,[{index:s,addedCount:n,removed:r,object:e,type:"splice"}])}function Al(t){return t[0].toUpperCase()+t.substring(1)}const Rl=fe(t=>{const e=qa(Ba(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ze.length){let n=ze[ze.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let r=this[$.READ_ONLY];for(let o in n)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,r,o){this._createPropertyAccessor(n,r==$.READ_ONLY);let a=Ut(this,r,!0)[n];a||(a=this[r][n]=[]),a.push(o)}_removePropertyEffect(n,r,o){let a=Ut(this,r,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,r){let o=this[r];return!!(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,$.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,$.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,$.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,$.COMPUTE)}_setPendingPropertyOrPath(n,r,o,a){if(a||ge(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=V(this,n);if(n=is(this,n,r),!n||!super._shouldPropertyChange(n,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,r,o))return ul(this,n,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,r,o);this[n]=r}return!1}_setUnmanagedPropertyToNode(n,r,o){(o!==n[r]||typeof o=="object")&&(r==="className"&&(n=he(n)),n[r]=o)}_setPendingProperty(n,r,o){let a=this.__dataHasPaths&&ti(n),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(n,r,l[n])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=r:this.__data[n]=r,this.__dataPending[n]=r,(a||this[$.NOTIFY]&&this[$.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0):!1}_setProperty(n,r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let r=0;r<n.length;r++){let o=n[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,r){for(let o in n)(r||!this[$.READ_ONLY]||!this[$.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ol(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Ae(this,this[$.REFLECT],r,o,a),Ae(this,this[$.OBSERVE],r,o,a),l&&tl(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(n,r,o){this[$.PROPAGATE]&&Ae(this,this[$.PROPAGATE],n,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,r,o)}_runEffectsForTemplate(n,r,o,a){const l=(c,u)=>{Ae(this,n.propertyEffects,c,o,u,n.nodeList);for(let d=n.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};n.runEffects?n.runEffects(l,r,a):l(r,a)}linkPaths(n,r){n=Le(n),r=Le(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=r}unlinkPaths(n){n=Le(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,r){let o={path:""},a=V(this,n,o);gn(this,a,o.path,r)}get(n,r){return V(r||this,n)}set(n,r,o){o?is(o,n,r):(!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r,!0)&&this._invalidateProperties()}push(n,...r){let o={path:""},a=V(this,n,o),l=a.length,c=a.push(...r);return r.length&&$e(this,a,o.path,l,r.length,[]),c}pop(n){let r={path:""},o=V(this,n,r),a=!!o.length,l=o.pop();return a&&$e(this,o,r.path,o.length,0,[l]),l}splice(n,r,o,...a){let l={path:""},c=V(this,n,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&$e(this,c,l.path,r,a.length,u),u}shift(n){let r={path:""},o=V(this,n,r),a=!!o.length,l=o.shift();return a&&$e(this,o,r.path,0,0,[l]),l}unshift(n,...r){let o={path:""},a=V(this,n,o),l=a.unshift(...r);return r.length&&$e(this,a,o.path,0,r.length,[]),l}notifyPath(n,r){let o;if(arguments.length==1){let a={path:""};r=V(this,n,a),o=a.path}else Array.isArray(n)?o=Le(n):o=n;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,r){this._addPropertyEffect(n,$.READ_ONLY),r&&(this["_set"+Al(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,r,o){let a={property:n,method:r,dynamicFn:!!o};this._addPropertyEffect(n,$.OBSERVE,{fn:rs,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(r,$.OBSERVE,{fn:rs,info:a,trigger:{name:r}})}_createMethodObserver(n,r){let o=Xt(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");as(this,o,$.OBSERVE,si,null,r)}_createNotifyingProperty(n){this._addPropertyEffect(n,$.NOTIFY,{fn:sl,info:{eventName:zt(n)+"-changed",property:n}})}_createReflectedProperty(n){let r=this.constructor.attributeNameForProperty(n);r[0]==="-"?console.warn("Property "+n+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,$.REFLECT,{fn:rl,info:{attrName:r}})}_createComputedProperty(n,r,o){let a=Xt(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=as(this,a,$.COMPUTE,hn,n,o);Ut(this,un)[n]=l}_marshalArgs(n,r,o){const a=this.__data,l=[];for(let c=0,u=n.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:f,literal:g}=n[c];if(!g)if(p){const m=gt(d,r),_=ds(a,o,m?r:d);f={path:m?r:d,value:_,base:m?V(a,d):_}}else f=h?ds(a,o,d):a[d];if(ei&&!this._overrideLegacyUndefined&&f===void 0&&n.length>1)return Ye;l[c]=f}return l}static addPropertyEffect(n,r,o){this.prototype._addPropertyEffect(n,r,o)}static createPropertyObserver(n,r,o){this.prototype._createPropertyObserver(n,r,o)}static createMethodObserver(n,r){this.prototype._createMethodObserver(n,r)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,r){this.prototype._createReadOnlyProperty(n,r)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,r,o){this.prototype._createComputedProperty(n,r,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,r){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=n._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,r,o){let a=n.hostProps=n.hostProps||{};a[r]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(n,r){r=r||this._bindTemplate(n,!0),ze.push(this);let o=super._stampTemplate(n,r);if(ze.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,ml(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const r=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];he(he(d).parentNode).removeChild(d)}}static _parseTemplateNode(n,r,o){let a=e._parseTemplateNode.call(this,n,r,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,r);l&&(n.textContent=us(l)||" ",Yt(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";Qa.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=us(c);return h&&d=="attribute"&&(a=="class"&&n.hasAttribute("class")&&(h+=" "+n.getAttribute(a)),n.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&n.setAttribute(a,""),n.localName==="input"&&u==="value"&&n.setAttribute(u,""),n.removeAttribute(u),d==="property"&&(a=nn(a)),Yt(this,r,o,d,a,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,n,r,o,a,l)}static _parseTemplateNestedTemplate(n,r,o){let a=e._parseTemplateNestedTemplate.call(this,n,r,o);const l=n.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";Zi&&(u||d)&&(l.removeChild(n),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Sa&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),Zi||(o.parentInfo.noted=!0));else{let p="{";for(let f in h){let g=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Yt(this,r,o,"property","_host_"+f,g)}}return a}static _parseBindings(n,r){let o=[],a=0,l;for(;(l=cs.exec(n))!==null;){l.index>a&&o.push({literal:n.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),h=!0);let g=Xt(d),m=[];if(g){let{args:_,methodName:b}=g;for(let w=0;w<_.length;w++){let E=_[w];E.literal||m.push(E)}let C=r.dynamicFns;(C&&C[b]||g.static)&&(m.push(b),g.dynamicFn=!0)}else m.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:m,event:p}),a=cs.lastIndex}if(a&&a<n.length){let c=n.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(n,r,o,a,l,c){let u;return r.signature?u=si(n,o,a,l,r.signature):o!=r.source?u=V(n,r.source):c&&ti(o)?u=V(n,o):u=n.__data[o],r.negate&&(u=!u),u}}return i}),ze=[];function kl(t){const e={};for(let i in t){const s=t[i];e[i]=typeof s=="function"?{type:s}:s}return e}const Nl=fe(t=>{const e=an(t);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof n?o:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=kl(a))}r.__ownProperties=o}return r.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=s(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,s(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});const Il="3.5.1",hs=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ml=fe(t=>{const e=Nl(Rl(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function n(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!hs){const h=c.content.querySelectorAll("style"),p=en(c),f=La(u),g=c.content.firstElementChild;for(let _=0;_<f.length;_++){let b=f[_];b.textContent=l._processStyleText(b.textContent,d),c.content.insertBefore(b,g)}let m=0;for(let _=0;_<p.length;_++){let b=p[_],C=h[m];C!==b?(b=b.cloneNode(!0),C.parentNode.insertBefore(b,C)):m++,b.textContent=l._processStyleText(b.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Pa&&hs&&ma){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!Qt||ya)&&(c=He.import(l,"template"),Qt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends e{static get polymerElementVersion(){return Il}static _finalizeClass(){e._finalizeClass.call(this);const c=s(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):ba||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)n(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=_i(c.url);else{const u=He.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=_a,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return mi(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?De(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=he(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),wa&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=De(this.importPath)),De(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return va&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return a});window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});const Dl=Ml(HTMLElement),nt=[],Tt=()=>{L.isInitialized||L.init({lng:"en",resStore:{en:{}},fallbackLng:!1})},Lt=t=>t.reduce((e,i,s)=>(e.count===void 0&&typeof i=="number"&&(e.count=i),typeof i=="object"?{...e,...i}:(e[s]=i,e)),{}),X=function(t){Tt();const e=Lt([...arguments].slice(1));return delete e.count,L.t(t,e)},Fl=function(t,e){Tt();const i=Lt([...arguments].slice(2)),s=i.count;let n;delete i.count;const r=L.services.pluralResolver.getSuffix(L.language,s);return r?(i.defaultValue=e,n=t+r):(n=t,i.defaultValue=t),L.t(n,i)},jl=function(t,e){Tt();const i=Lt([...arguments].slice(2));return i.context=t,delete i.count,L.t(e,i)},Vl=function(t,e,i){Tt();const s=Lt([...arguments].slice(3)),n=s.count,r=t?"_"+t:"";let o=e;delete s.count;const a=L.services.pluralResolver.getSuffix(L.language,n);return a?(s.defaultValue=i,o=e+r+a):(o=e,s.context=t),L.t(o,s)},Bl=(t,e,i)=>{L.init({resources:{}}),L.addResourceBundle(t,e,i)};fe(t=>class extends t{static get properties(){return{t:{type:Object,value(){return{}}}}}_filterT(e){return e.filter(i=>i!==this.t)}_(){return X.apply(null,this._filterT([...arguments]))}connectedCallback(){super.connectedCallback(),nt.push(this)}disconnectedCallback(){super.disconnectedCallback();const e=nt.indexOf(this);e>=0&&nt.splice(e,1)}gettext(){return X.apply(null,this._filterT([...arguments]))}ngettext(){return Fl.apply(null,this._filterT([...arguments]))}pgettext(){return jl.apply(null,this._filterT([...arguments]))}npgettext(){return Vl.apply(null,this._filterT([...arguments]))}});class Hl extends Dl{static get properties(){return{compatibilityJSON:{type:String,value:"v3"},domain:{type:String,value:"messages"},interpolationPrefix:{type:String,value:"__"},interpolationSuffix:{type:String,value:"__"},language:{type:String,value:"en"},namespace:{type:String,value:"translation"},translations:{type:Object,observer(e){e!=null&&(Bl(this.language,this.namespace,e),nt.forEach(i=>i.set("t",{})))}},keySeparator:{type:String,value:"."},nsSeparator:{type:String,value:":"}}}ready(){super.ready(),L.init({compatibilityJSON:this.compatibilityJSON,interpolation:{escapeValue:!1,prefix:this.interpolationPrefix,suffix:this.interpolationSuffix},keySeparator:this.keySeparator,lng:this.language,nsSeparator:this.nsSeparator,resStore:{}})}}customElements.define("cosmoz-i18next",Hl);const ps=()=>document.createComment(""),Ul=ri(W,new DocumentFragment).constructor;class Yl extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Yl);class Xl extends vt{_op;_outlet;_content;render(e,i=document.body){return v`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[i,s=document.body]){return this.updateOutlet(s,i),this.render(i,s)}updateOutlet(e,i){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const s=this._op??=new Ul(e.appendChild(ps()),e.appendChild(ps()));re(s,this._content=i)}clearOutlet(){const e=this._op;e&&(wn(e),tt(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Kl=se(Xl),Jl=`:host {
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
}
`,Wl=Symbol("memo"),Gl=t=>{let e=Wl,i;return function(s){if(e===s)return i;const n=t(s);return i=n,e=s,n}},Zl=(t,e)=>{const i=t.width/t.height,s=e.width/e.height;return i>s?{width:e.width,height:t.height*(e.width/t.width)}:{width:t.width*(e.height/t.height),height:e.height}},ql=async(t,e)=>{const i={credentials:"include"},[{jsPDF:s},...n]=await Promise.all([bt(()=>import("./jspdf.es-CKFOE4aL.js").then(a=>a.j),__vite__mapDeps([0,1]),import.meta.url),...t.map(async a=>{const l=await Promise.resolve(ci(a)),c=await fetch(l,i);return c.ok?{url:l,data:new Uint8Array(await c.arrayBuffer())}:void 0})]),r=n.filter(Boolean);if(r.length<1)return;const o=new s({compress:!0});return r.filter(Boolean).forEach(({url:a,data:l},c)=>{const{internal:{pageSize:d}}=o,{width:h,height:p}=Zl(o.getImageProperties(l),{width:d.getWidth()-4,height:d.getHeight()-4});c>0&&o.addPage(),o.addImage(l,a.split(".").pop().toUpperCase(),2,2,h,p)}),o.output("blob")},mn=(t,e)=>{const i=URL.createObjectURL(t),s=document.body.appendChild(document.createElement("a"));s.href=i,s.download=`${e}.pdf`,s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)},Ql=async(t,e,i)=>{const s=await ql(t);if(s)return mn(s,e),s},ec=async(t,e,i={})=>{const{httpHeaders:s,withCredentials:n=!0}=i,r=await fetch(t,{credentials:n?"include":"omit",headers:s});if(!r.ok)return;const o=await r.blob();return mn(o,e),o};let tc;const ic=async()=>tc??=(await bt(async()=>{const{url:t}=await import("./popout-entry-By2K-PfT.js");return{url:t}},__vite__mapDeps([2,1,3,4]),import.meta.url)).url,sc=t=>Object.entries(t).map(([e,i])=>e+"="+i).join(",");let yt=null;const _n=()=>yt!=null&&!yt.closed,nc=(t,{entryUrl:e,state:i,sync:s,title:n,onDetach:r,onClose:o})=>{t.__popoutState=i,t.__popoutSync=s,t.__popoutReady=r,t._onClose=o;const a=t.document;a.open(),a.write(`<!DOCTYPE html>
<html>
<head>
	<style>html { background: #000; }</style>
	<title>${n??X("Cosmoz image viewer")}</title>
</head>
<body>
	<script type="module" src="${e}"><\/script>
</body>
</html>`),a.close(),yt=t,t.addEventListener("beforeunload",()=>t._onClose?.()),t.addEventListener("beforeunload",()=>yt=null)},rc=async({source:t,attachmentIndex:e,index:i,syncImageIndex:s,syncAttachmentIndex:n,title:r,loop:o,detachedShowZoom:a,onDetach:l,onClose:c})=>{const u=window.open(void 0,"czimgviewer",sc({height:700,width:800})),d=globalThis["pdfjs-dist/build/pdf"]?.GlobalWorkerOptions?.workerSrc??globalThis.pdfjsLib?.GlobalWorkerOptions?.workerSrc,h={source:t,attachmentIndex:e,index:i,detachedShowZoom:a,loop:o,title:r,pdfWorkerSrc:d},p={imageIndex:g=>s({detail:{value:g}}),attachmentIndex:g=>n({detail:{value:g}})};if(_n()&&u.__popoutUpdate){u._onClose?.(),u.__popoutUpdate(h),u.__popoutSync=p,u._onClose=c,l();return}const f=await ic();nc(u,{entryUrl:f,state:h,sync:p,title:r,onDetach:l,onClose:c})},oc=t=>new Promise(e=>{const i=setInterval(()=>{t()&&(e(),clearInterval(i))},100)}),ac=({images:t})=>{const e=window.open(void 0,"czimgviewerprint");ri(v`<style>
				img {
					display: block;
					page-break-inside: avoid;
					page-break-after: always;
					max-height: 100%;
					width: 100%;
				}
			</style>
			${t.map(i=>v`<img src="${Ve(Promise.resolve(ci(i)))}" />`)}`,e.document.body),oc(()=>Array.from(e.document.querySelectorAll("img")).every(i=>i.src&&i.complete)).then(()=>e.print()).then(()=>e.close())},Te=[],lc=t=>{const[e,i]=Q({images:Te,loading:!1,error:void 0});return z(()=>{if(!t){i({images:Te,loading:!1,error:void 0});return}const s=t.pdf,n=t.images??Te;if(!s){i({images:n,loading:!1,error:void 0});return}i({images:Te,loading:!0,error:void 0});let r=!1;return bt(async()=>{const{loadPdfThunks:o}=await import("./pdf-loader-B_xPwwqY.js");return{loadPdfThunks:o}},__vite__mapDeps([5,1]),import.meta.url).then(({loadPdfThunks:o})=>o(s,t.pdfOptions)).then(o=>{r||i({images:o,loading:!1,error:void 0})}).catch(o=>{r||i({images:Te,loading:!1,error:o})}),()=>{r=!0}},[t]),e},fs=[],cc=t=>{const e=M(()=>typeof t=="function"?Promise.resolve(t()):void 0,[t]),[i,s,n]=Ds(e);return typeof t!="function"?{attachments:t??fs,loading:!1,error:void 0}:{attachments:i??fs,loading:n==="pending",error:s}},uc=50,dc=300,hc=(t,{onSwipeLeft:e,onSwipeRight:i,enabled:s})=>{const n=ie(null);z(()=>{if(!s)return;const r=a=>{if(a.touches.length!==1)return;const l=a.touches[0];n.current={x:l.clientX,y:l.clientY,t:Date.now()}},o=a=>{if(!n.current)return;const l=a.changedTouches[0],c=l.clientX-n.current.x,u=l.clientY-n.current.y,d=Date.now()-n.current.t;n.current=null,!(d>dc)&&(Math.abs(c)<uc||Math.abs(c)<Math.abs(u)||(c<0?e?.():i?.()))};return t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),()=>{t.removeEventListener("touchstart",r),t.removeEventListener("touchend",o)}},[t,e,i,s])},ni=[],pc=t=>t.source!=null?t.source:t.images!=null||t.pdf!=null?[{images:t.images??ni,pdf:t.pdf,pdfOptions:t.pdfOptions}]:ni,yn=t=>{if(!t.currentTarget.parentElement)return;t.currentTarget.parentElement.querySelector(".error").removeAttribute("hidden"),t.currentTarget.setAttribute("hidden",!0)},fc=t=>t.detail.value==="error"&&yn(t),gc=({src$:t,showZoom:e,isZoomed:i,_onZoomChanged:s})=>{const n=ve(t,()=>Ve(t));return[e?v`<haunted-pan-zoom
						.src=${n}
						?disabled=${!i}
						@zoom-changed=${s}
						@status-changed=${fc}
					></haunted-pan-zoom>`:v`<img .src=${n} style="width:100%" @error=${yn} />`,ve(t,()=>Ve(t.then(()=>W),v`<cz-spinner></cz-spinner>`))]},mc=t=>v`<div>
			<div hidden class="error">
				<h2>An error occurred while loading the image.</h2>
				<div class="desc">${t.image}</div>
			</div>
			${gc(t)}
		</div>`,Kt=(t,e,i)=>Math.max(e,Math.min(i,t)),gs=(t,e,i,s)=>{const n=t.length;for(let r=1;r<=n;r++){const o=(e+r*i+n)%n;if(!s&&i>0&&o<=e||!s&&i<0&&o>=e)return;const a=t[o];if((a.images?.length??0)>0||a.pdf)return o}},_c=t=>{const{showZoom:e,title:i,loop:s,detachedShowZoom:n}=t,r=M(()=>pc(t),[t.source,t.images,t.pdf,t.pdfOptions]),{attachments:o,loading:a,error:l}=cc(r),[c,u]=Fe("currentAttachmentIndex",0),d=o.length>0?Kt(c??0,0,o.length-1):0,h=o[d],p=h?[h]:ni,f=ie(qe),g=P(A=>{const Ce=A.detail?.[0],Je=o.indexOf(Ce);Je>=0&&(f.current=qe,u(Je))},[o]),m=h?.downloadFileName??"archive",{images:_,loading:b,error:C}=lc(h),[w,E]=Q(!1),y=A=>E(A.detail.value>1),O=M(()=>Gl(A=>Promise.resolve(ci(A))),[]),[T,N]=Fe("currentImageIndex",0),R=_.length>0?Kt(T??0,0,_.length-1):0,I=_[R],me=M(()=>I==null?{id:Math.random(),content:W,animation:qe}:{id:I,render:()=>mc({src$:O(I),showZoom:e,isZoomed:w,_onZoomChanged:y,image:I}),animation:f.current},[I,e,w,y]),G=ie(!1),Y=!s&&d===0&&R<=0,j=!s&&d===o.length-1&&R>=_.length-1,D=P(()=>{if(f.current=qe,R<_.length-1)return N(R+1);const A=gs(o,d,1,s);A!=null&&(u(A),N(0))},[R,_.length,o,d,s]),ae=P(()=>{if(f.current=Yo,R>0)return N(R-1);const A=gs(o,d,-1,s);A!=null&&(G.current=!0,u(A))},[R,o,d,s]);hc(t,{onSwipeLeft:D,onSwipeRight:ae,enabled:!w});const[S,F]=Q(!1),[J,le]=Q(!1),At=()=>le(!0),Rt=()=>le(!1),kt=A=>F(A.detail.value),Nt=A=>N(A.detail.value),It=A=>u(A.detail.value),Se=P(()=>rc({source:o,attachmentIndex:d,index:R,syncImageIndex:Nt,syncAttachmentIndex:It,title:i,loop:s,detachedShowZoom:n,onDetach:()=>F(!0),onClose:()=>F(!1)}),[o,d,R,i,s]),ce=P(()=>{_n()&&Se()},[Se]);z(()=>{if(_.length===0)return;if(G.current){G.current=!1,N(_.length-1);return}const A=T??0;A>=_.length&&N(Kt(A,0,_.length-1))},[_]),z(()=>{const A=c??0;o.length>0&&A>=o.length&&u(0)},[o]),Jn("detached",S,[S]),z(()=>{t.toggleAttribute("hidden",S)},[S]),li({syncState:ce},[ce]);const Pe=_.length+(o.length>1?o.reduce((A,Ce,Je)=>A+(Je===d?0:Ce.images?.length??0),0):0);return{host:t,isZoomed:w,currentSlide:me,nextImage:D,previousImage:ae,first:Y,last:j,total:_.length,navTotal:Pe,currentImageIndex:R,selectedImageNumber:R+1,onDownloadPdf:h?.pdf?()=>ec(h.pdf,m,h.pdfOptions):()=>Ql(_,m),isFullscreen:J,openFullscreen:At,closeFullscreen:Rt,onPrintPdf:()=>ac({images:_}),detached:S,detach:Se,syncDetachedState:kt,setAttachmentIndex:u,setImageIndex:N,loading:a||b,error:l,contentError:C,attachments:o,selected:h,selectedIndex:d,value:p,onSelect:g,images:_}},yc=v`<svg
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
</svg>`,bc=v`<svg
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
</svg>`,vc=v`<svg
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
</svg>`,wc=v`<svg
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
</svg>`,xc=v`<svg
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
</svg>`,Sc=v`<svg
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
</svg>`,Pc=v`<svg
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
</svg>`,Cc=v`<svg
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
</svg>`,Ec=v`<svg
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
</svg>`,Oc=t=>t?Sc:Pc,ne=(t,e,i=1)=>t?e>=i:!1,$c=t=>{const e=t.target.getRootNode().querySelector("haunted-pan-zoom");if(e.zoom>1)return e.zoomTo(1);e.zoomTo(1.5)},zc=({host:t,isZoomed:e,currentSlide:i,nextImage:s,previousImage:n,total:r,navTotal:o,first:a,last:l,currentImageIndex:c,selectedImageNumber:u,onDownloadPdf:d,isFullscreen:h,openFullscreen:p,closeFullscreen:f,onPrintPdf:g,detach:m,detached:_,syncDetachedState:b,setAttachmentIndex:C,setImageIndex:w,loading:E,error:y,contentError:O,attachments:T,selectedIndex:N,value:R,onSelect:I})=>v`
	<style>
		${Jl}
	</style>

	${_?W:v`
				${k(E,()=>v`<div class="loading">
							<cz-spinner></cz-spinner>
						</div>`)}
				${k(y,()=>v`<div class="error">
							<h2>${X("Failed to load attachments.")}</h2>
							<div class="desc">${y?.message??y}</div>
						</div>`)}
				${k(!E&&!y,()=>v`
						${k(ne(t.showPageNumber,r),()=>v` <div class="counter">
									${u}/${r}
								</div>`)}

						<div class="actions">
							${k(ne(t.showNav,o,2),()=>v`
									<button
										class="nav"
										name="prev"
										?disabled=${a}
										@click=${n}
									>
										${xc}
									</button>
									<button
										class="nav"
										name="next"
										?disabled=${l}
										@click=${s}
									>
										${Ec}
									</button>
								`)}
							${k(T.length>1,()=>v`<cosmoz-autocomplete
										text-property="title"
										limit="1"
										.min=${1}
										show-single
										preserve-order
										.source=${T}
										.value=${R}
										@value=${I}
									></cosmoz-autocomplete>`)}
							<span style="flex:auto"></span>
							${k(ne(t.showZoom,r),()=>v`<button
										class="nav"
										@click="${$c}"
										title="${X("Zoom image")}"
									>
										${Oc(e)}
									</button>`)}
							${k(ne(t.showDetach,r),()=>v`<button
										class="nav"
										@click=${m}
										title="${X("Detach image to separate window")}"
									>
										${wc}
									</button>`)}
							${k(ne(!0,r),()=>v`<button
										class="nav"
										@click=${d}
										title="${X("Download images")}"
									>
										${bc}
									</button>`)}
							${k(ne(!0,r),()=>v`<button
										class="nav"
										@click=${g}
										title="${X("Print images")}"
									>
										${Cc}
									</button>`)}
							${k(ne(t.showFullscreen,r),()=>v`<button
										class="nav"
										@click="${p}"
										title="${X("Fullscreen image")}"
									>
										${vc}
									</button>`)}
							${k(ne(t.showClose,r),()=>v` <button
										class="nav"
										@click="${()=>t.dispatchEvent(new CustomEvent("close"))}"
										title="${X("Close fullscreen")}"
									>
										${yc}
									</button>`)}
						</div>

						${k(O,()=>v`<p class="error">${X("Failed to load PDF.")}</p>`,()=>k(r===0,()=>v`<p>${X("No image loaded.")}</p>`))}
						<cosmoz-slider id="slider" .slide="${i}"></cosmoz-slider>
					`)}
			`}
	${k(h,()=>Kl(v`<cosmoz-image-viewer
				fullscreen
				.source=${T}
				.currentAttachmentIndex=${N}
				.currentImageIndex=${c}
				@current-attachment-index-changed=${Ci(C)}
				@current-image-index-changed=${Ci(w)}
				@detached-changed=${b}
				show-nav
				show-zoom
				show-close
				@close=${f}
				?show-detach=${t.showDetach}
				?loop=${t.loop}
			></cosmoz-image-viewer>`))}
`,Tc=t=>zc(_c(t));customElements.define("cosmoz-image-viewer",U(Tc,{observedAttributes:["source","download-file-name","pdf","show-close","show-detach","show-fullscreen","show-nav","show-page-number","show-zoom","detached-show-zoom","loop","title"]}));
