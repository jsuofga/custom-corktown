import{Y as Le,Z as pe,_ as Te,L as Ae,M as ce,T as Ve,P as ue,U as Q,V as Be,p as z,r as H,$,A as ve,a0 as R,x as p,a1 as Je,c as P,a2 as ne,d as D,w as he,C as me,a3 as De,i as Re,a4 as Qe,g as ye,B as M,a5 as et,s as U,a6 as tt,o as Ie,a as Me,b as nt,y as ot,a7 as at,n as Fe,l as Ne,z as He,q as je,u as lt,t as st,m as f,a8 as rt,G as We,J as it,H as ct,K as ut,a9 as ft,aa as dt,R as vt,N as mt,O as L}from"./index-ac17ed97.js";import{m as yt,u as qe,V as gt}from"./VContainer-30abdced.js";import{V as oe,a as N}from"./VRow-c4bc6d28.js";import{t as be,v as ae,w as le,x as xe,y as Se,z as ht,A as bt,B as xt,C as St,b as wt,g as kt,D as Et,E as _t,l as Ot,e as Ct,q as Pt,V as Lt,r as pt}from"./VBtn-4fbd5db1.js";import{B as se,g as we,n as Tt,a as At,s as Vt,f as Bt}from"./forwardRefs-db20782f.js";import{u as Dt}from"./VIcon-16482994.js";import{m as Rt,a as It,u as Mt,M as Ft}from"./transition-9a3b17f2.js";const Z=new WeakMap;function Nt(e,t){Object.keys(t).forEach(n=>{if(Le(n)){const o=pe(n),a=Z.get(e);if(t[n]==null)a==null||a.forEach(l=>{const[s,r]=l;s===o&&(e.removeEventListener(o,r),a.delete(l))});else if(!a||![...a].some(l=>l[0]===o&&l[1]===t[n])){e.addEventListener(o,t[n]);const l=a||new Set;l.add([o,t[n]]),Z.has(e)||Z.set(e,l)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Ht(e,t){Object.keys(t).forEach(n=>{if(Le(n)){const o=pe(n),a=Z.get(e);a==null||a.forEach(l=>{const[s,r]=l;s===o&&(e.removeEventListener(o,r),a.delete(l))})}else e.removeAttribute(n)})}function ze(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Wt(e):ge(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ge(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Wt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function qt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const zt={name:"SourceTX",props:["txLabel","txID"],components:{},setup(){return{stateStore:Ae()}},data:()=>({}),methods:{selectTX(e){this.stateStore.switchRX(e),this.stateStore.snackbar=!0}}},$t={id:"tx-label"};function Xt(e,t,n,o,a,l){return ce(),Ve("button",{class:"button",onClick:t[0]||(t[0]=s=>l.selectTX(n.txID))},[ue(Q(n.txLabel)+" ",1),Be("div",$t,Q(n.txID),1)])}const Ut=Te(zt,[["render",Xt],["__scopeId","data-v-b8be1931"]]);function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Yt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ke(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:l},t)}return re({x:t.width/2,y:t.height/2},t)}const $e={static:Zt,connected:Qt},Gt=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in $e},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Kt(e,t){const n=H({}),o=H();$&&(ve(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var s,r;p(()=>e.locationStrategy,l),R(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:o.value=(r=$e[e.locationStrategy](t,e,n))==null?void 0:r.updateLocation}),window.addEventListener("resize",a,{passive:!0}),R(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(l){var s;(s=o.value)==null||s.call(o,l)}return{contentStyles:n,updateLocation:o}}function Zt(){}function Jt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=Tt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Qt(e,t,n){qt(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:l}=Je(()=>{const d=be(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?ae(d):be(t.origin,e.isRtl.value);return d.side===v.side&&d.align===le(v).align?{preferredAnchor:xe(d),preferredOrigin:xe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,c,m]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),u=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const h=new ResizeObserver(()=>{g&&_()});p([e.activatorEl,e.contentEl],(d,v)=>{let[w,E]=d,[S,i]=v;S&&h.unobserve(S),w&&h.observe(w),i&&h.unobserve(i),E&&h.observe(E)},{immediate:!0}),R(()=>{h.disconnect()});function _(){if(g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>g=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=Jt(e.contentEl.value,e.isRtl.value),w=ee(e.contentEl.value),E=12;w.length||(w.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=w.reduce((O,k)=>{const y=k.getBoundingClientRect(),x=new se({x:k===document.documentElement?0:y.x,y:k===document.documentElement?0:y.y,width:k.clientWidth,height:k.clientHeight});return O?new se({x:Math.max(O.left,x.left),y:Math.max(O.top,x.top),width:Math.min(O.right,x.right)-Math.max(O.left,x.left),height:Math.min(O.bottom,x.bottom)-Math.max(O.top,x.top)}):x},void 0);S.x+=E,S.y+=E,S.width-=E*2,S.height-=E*2;let i={anchor:a.value,origin:l.value};function A(O){const k=new se(v),y=ke(O.anchor,d),x=ke(O.origin,k);let{x:V,y:B}=Yt(y,x);switch(O.anchor.side){case"top":B-=u.value[0];break;case"bottom":B+=u.value[0];break;case"left":V-=u.value[0];break;case"right":V+=u.value[0];break}switch(O.anchor.align){case"top":B-=u.value[1];break;case"bottom":B+=u.value[1];break;case"left":V-=u.value[1];break;case"right":V+=u.value[1];break}return k.x+=V,k.y+=B,k.width=Math.min(k.width,c.value),k.height=Math.min(k.height,m.value),{overflows:we(k,S),x:V,y:B}}let F=0,j=0;const W={x:0,y:0},Y={x:!1,y:!1};let G=-1;for(;!(G++>10);){const{x:O,y:k,overflows:y}=A(i);F+=O,j+=k,v.x+=O,v.y+=k;{const x=Se(i.anchor),V=y.x.before||y.x.after,B=y.y.before||y.y.after;let X=!1;if(["x","y"].forEach(C=>{if(C==="x"&&V&&!Y.x||C==="y"&&B&&!Y.y){const b={anchor:{...i.anchor},origin:{...i.origin}},T=C==="x"?x==="y"?le:ae:x==="y"?ae:le;b.anchor=T(b.anchor),b.origin=T(b.origin);const{overflows:q}=A(b);(q[C].before<=y[C].before&&q[C].after<=y[C].after||q[C].before+q[C].after<(y[C].before+y[C].after)/2)&&(i=b,X=Y[C]=!0)}}),X)continue}y.x.before&&(F+=y.x.before,v.x+=y.x.before),y.x.after&&(F-=y.x.after,v.x-=y.x.after),y.y.before&&(j+=y.y.before,v.y+=y.y.before),y.y.after&&(j-=y.y.after,v.y-=y.y.after);{const x=we(v,S);W.x=S.width-x.x.before-x.x.after,W.y=S.height-x.y.before-x.y.after,F+=x.x.before,v.x+=x.x.before,j+=x.y.before,v.y+=x.y.before}break}const I=Se(i.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${i.anchor.side} ${i.anchor.align}`,transformOrigin:`${i.origin.side} ${i.origin.align}`,top:D(ie(j)),left:e.isRtl.value?void 0:D(ie(F)),right:e.isRtl.value?D(ie(-F)):void 0,minWidth:D(I==="y"?Math.min(s.value,d.width):s.value),maxWidth:D(Ee(he(W.x,s.value===1/0?0:s.value,c.value))),maxHeight:D(Ee(he(W.y,r.value===1/0?0:r.value,m.value)))}),{available:W,contentBox:v}}return p(()=>[a.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>_()),ne(()=>{const d=_();if(!d)return;const{available:v,contentBox:w}=d;w.height>v.y&&requestAnimationFrame(()=>{_(),requestAnimationFrame(()=>{_()})})}),{updateLocation:_}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let fe=!0;const te=[];function en(e){!fe||te.length?(te.push(e),de()):(fe=!1,e(),de())}let _e=-1;function de(){cancelAnimationFrame(_e),_e=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?de():fe=!0})}const J={none:null,close:on,block:an,reposition:ln},tn=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function nn(e,t){if(!$)return;let n;me(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=De(),await ne(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=J[e.scrollStrategy])==null||o.call(J,t,e,n)}))}),R(()=>{n==null||n.stop()})}function on(e){function t(n){e.isActive.value=!1}Xe(e.activatorEl.value??e.contentEl.value,t)}function an(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...ee(e.activatorEl.value,t.contained?n:void 0),...ee(e.contentEl.value,t.contained?n:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,l=(r=>ge(r)&&r)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",D(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",D(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",D(a)),r.classList.add("v-overlay-scroll-blocked")}),R(()=>{o.forEach((r,c)=>{const m=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-m,r.scrollTop=-u}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ln(e,t,n){let o=!1,a=-1,l=-1;function s(r){en(()=>{var u,g;const c=performance.now();(g=(u=e.updateLocation).value)==null||g.call(u,r),o=(performance.now()-c)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{n.run(()=>{Xe(e.activatorEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),R(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(a)})}function Xe(e,t){const n=[document,...ee(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),R(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const sn=Symbol.for("vuetify:v-menu"),rn=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function cn(e,t){const n={},o=a=>()=>{if(!$)return Promise.resolve(!0);const l=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const r=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(l),s(l)},r)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const un=z({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...rn()},"VOverlay-activator");function fn(e,t){let{isActive:n,isTop:o}=t;const a=H();let l=!1,s=!1,r=!0;const c=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),m=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:g}=cn(e,i=>{i===(e.openOnHover&&l||c.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==i&&(r=!0),n.value=i)}),h={onClick:i=>{i.stopPropagation(),a.value=i.currentTarget||i.target,n.value=!n.value},onMouseenter:i=>{var A;(A=i.sourceCapabilities)!=null&&A.firesTouchEvents||(l=!0,a.value=i.currentTarget||i.target,u())},onMouseleave:i=>{l=!1,g()},onFocus:i=>{et(i.target,":focus-visible")!==!1&&(s=!0,i.stopPropagation(),a.value=i.currentTarget||i.target,u())},onBlur:i=>{s=!1,i.stopPropagation(),g()}},_=P(()=>{const i={};return m.value&&(i.onClick=h.onClick),e.openOnHover&&(i.onMouseenter=h.onMouseenter,i.onMouseleave=h.onMouseleave),c.value&&(i.onFocus=h.onFocus,i.onBlur=h.onBlur),i}),d=P(()=>{const i={};if(e.openOnHover&&(i.onMouseenter=()=>{l=!0,u()},i.onMouseleave=()=>{l=!1,g()}),c.value&&(i.onFocusin=()=>{s=!0,u()},i.onFocusout=()=>{s=!1,g()}),e.closeOnContentClick){const A=Re(sn,null);i.onClick=()=>{n.value=!1,A==null||A.closeParents()}}return i}),v=P(()=>{const i={};return e.openOnHover&&(i.onMouseenter=()=>{r&&(l=!0,r=!1,u())},i.onMouseleave=()=>{l=!1,g()}),i});p(o,i=>{i&&(e.openOnHover&&!l&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!l))&&(n.value=!1)});const w=H();me(()=>{w.value&&ne(()=>{a.value=Qe(w.value)})});const E=ye("useActivator");let S;return p(()=>!!e.activator,i=>{i&&$?(S=De(),S.run(()=>{dn(e,E,{activatorEl:a,activatorEvents:_})})):S&&S.stop()},{flush:"post",immediate:!0}),R(()=>{S==null||S.stop()}),{activatorEl:a,activatorRef:w,activatorEvents:_,contentEvents:d,scrimEvents:v}}function dn(e,t,n){let{activatorEl:o,activatorEvents:a}=n;p(()=>e.activator,(c,m)=>{if(m&&c!==m){const u=r(m);u&&s(u)}c&&ne(()=>l())},{immediate:!0}),p(()=>e.activatorProps,()=>{l()}),R(()=>{s()});function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Nt(c,M(a.value,m))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Ht(c,M(a.value,m))}function r(){var u,g;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,m;if(c)if(c==="parent"){let h=(g=(u=t==null?void 0:t.proxy)==null?void 0:u.$el)==null?void 0:g.parentNode;for(;h!=null&&h.hasAttribute("data-no-activator");)h=h.parentNode;m=h}else typeof c=="string"?m=document.querySelector(c):"$el"in c?m=c.$el:m=c;return o.value=(m==null?void 0:m.nodeType)===Node.ELEMENT_NODE?m:null,o.value}}function vn(){if(!$)return U(!1);const{ssr:e}=tt();if(e){const t=U(!1);return Ie(()=>{t.value=!0}),t}else return U(!0)}const mn=z({eager:Boolean},"lazy");function yn(e,t){const n=U(!1),o=P(()=>n.value||e.eager||t.value);p(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function Ue(){const t=ye("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Oe=Symbol.for("vuetify:stack"),K=Me([]);function gn(e,t,n){const o=ye("useStack"),a=!n,l=Re(Oe,void 0),s=Me({activeChildren:new Set});nt(Oe,s);const r=U(+t.value);ve(e,()=>{var g;const u=(g=K.at(-1))==null?void 0:g[1];r.value=u?u+10:+t.value,a&&K.push([o.uid,r.value]),l==null||l.activeChildren.add(o.uid),R(()=>{if(a){const h=at(K).findIndex(_=>_[0]===o.uid);K.splice(h,1)}l==null||l.activeChildren.delete(o.uid)})});const c=U(!0);a&&me(()=>{var g;const u=((g=K.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>c.value=u)});const m=P(()=>!s.activeChildren.size);return{globalTop:ot(c),localTop:m,stackStyles:P(()=>({zIndex:r.value}))}}function hn(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!$)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function bn(){return!0}function Ye(e,t,n){if(!e||Ge(e,n)===!1)return!1;const o=ze(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(l=>l==null?void 0:l.contains(e.target))}function Ge(e,t){return(typeof t.value=="object"&&t.value.closeConditional||bn)(e)}function xn(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ye(e,t,n)&&setTimeout(()=>{Ge(e,n)&&o&&o(e)},0)}function Ce(e,t){const n=ze(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ke={mounted(e,t){const n=a=>xn(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Ye(a,e,t)};Ce(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Ce(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Sn(e){const{modelValue:t,color:n,...o}=e;return f(ft,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&f("div",M({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Ze=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...un(),...yt(),...Rt(),...mn(),...Gt(),...tn(),...Fe(),...It()},"VOverlay"),Pe=Ne()({name:"VOverlay",directives:{ClickOutside:Ke},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ze()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const l=He(e,"modelValue"),s=P({get:()=>l.value,set:b=>{b&&e.disabled||(l.value=b)}}),{teleportTarget:r}=hn(P(()=>e.attach||e.contained)),{themeClasses:c}=je(e),{rtlClasses:m,isRtl:u}=lt(),{hasContent:g,onAfterLeave:h}=yn(e,s),_=Dt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:w}=gn(s,st(e,"zIndex"),e._disableGlobalStack),{activatorEl:E,activatorRef:S,activatorEvents:i,contentEvents:A,scrimEvents:F}=fn(e,{isActive:s,isTop:v}),{dimensionStyles:j}=Mt(e),W=vn(),{scopeId:Y}=Ue();p(()=>e.disabled,b=>{b&&(s.value=!1)});const G=H(),I=H(),{contentStyles:O,updateLocation:k}=Kt(e,{isRtl:u,contentEl:I,activatorEl:E,isActive:s});nn(e,{root:G,contentEl:I,activatorEl:E,isActive:s,updateLocation:k});function y(b){a("click:outside",b),e.persistent?C():s.value=!1}function x(){return s.value&&d.value}$&&p(s,b=>{b?window.addEventListener("keydown",V):window.removeEventListener("keydown",V)},{immediate:!0});function V(b){var T,q;b.key==="Escape"&&d.value&&(e.persistent?C():(s.value=!1,(T=I.value)!=null&&T.contains(document.activeElement)&&((q=E.value)==null||q.focus())))}const B=ht();ve(()=>e.closeOnBack,()=>{bt(B,b=>{d.value&&s.value?(b(!1),e.persistent?C():s.value=!1):b()})});const X=H();p(()=>s.value&&(e.absolute||e.contained)&&r.value==null,b=>{if(b){const T=jt(G.value);T&&T!==document.scrollingElement&&(X.value=T.scrollTop)}});function C(){e.noClickAnimation||I.value&&At(I.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Vt})}return qe(()=>{var b;return f(ut,null,[(b=n.activator)==null?void 0:b.call(n,{isActive:s.value,props:M({ref:S},i.value,e.activatorProps)}),W.value&&g.value&&f(rt,{disabled:!r.value,to:r.value},{default:()=>[f("div",M({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,m.value,e.class],style:[w.value,{top:D(X.value)},e.style],ref:G},Y,o),[f(Sn,M({color:_,modelValue:s.value&&!!e.scrim},F.value),null),f(Ft,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterLeave:()=>{h(),a("afterLeave")}},{default:()=>{var T;return[We(f("div",M({ref:I,class:["v-overlay__content",e.contentClass],style:[j.value,O.value]},A.value,e.contentProps),[(T=n.default)==null?void 0:T.call(n,{isActive:s})]),[[it,s.value],[ct("click-outside"),{handler:y,closeConditional:x,include:()=>[E.value]}]])]}})])]})])}),{activatorEl:E,animateClick:C,contentEl:I,globalTop:d,localTop:v,updateLocation:k}}}),wn=z({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...xt({location:"bottom"}),...St(),...wt(),...kt(),...Fe(),...dt(Ze({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),kn=Ne()({name:"VSnackbar",props:wn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const o=He(e,"modelValue"),{locationStyles:a}=Et(e),{positionClasses:l}=_t(e),{scopeId:s}=Ue(),{themeClasses:r}=je(e),{colorClasses:c,colorStyles:m,variantClasses:u}=Ot(e),{roundedClasses:g}=Ct(e),h=H();p(o,d),p(()=>e.timeout,d),Ie(()=>{o.value&&d()});let _=-1;function d(){window.clearTimeout(_);const w=Number(e.timeout);!o.value||w===-1||(_=window.setTimeout(()=>{o.value=!1},w))}function v(){window.clearTimeout(_)}return qe(()=>{const[w]=Pe.filterProps(e);return f(Pe,M({ref:h,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},l.value,e.class],style:e.style},w,{modelValue:o.value,"onUpdate:modelValue":E=>o.value=E,contentProps:M({class:["v-snackbar__wrapper",r.value,c.value,g.value,u.value],style:[a.value,m.value],onPointerenter:v,onPointerleave:d},w.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},s),{default:()=>[Pt(!1,"v-snackbar"),n.default&&f("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&f(Lt,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[f("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),Bt({},h)}}),En={name:"Vault",components:{SourceTX:Ut},setup(){return{stateStore:Ae()}},data:()=>({active:!1}),methods:{onClickOutside(){this.$router.push(`/${this.stateStore.page}`),console.log("outside")}},created(){},beforeUnmount(){}},_n={id:"inner-div"};function On(e,t,n,o,a,l){const s=vt("SourceTX");return ce(),mt(gt,{class:"fill-height d-flex flex-column"},{default:L(()=>[We((ce(),Ve("div",_n,[f(oe,{id:"rx-label",class:"d-flex justify-center pa-9 myCol"},{default:L(()=>[ue(" Select Video for Display - "+Q(o.stateStore.rxSelectedLabel),1)]),_:1}),f(kn,{modelValue:o.stateStore.snackbar,"onUpdate:modelValue":t[0]||(t[0]=r=>o.stateStore.snackbar=r),timeout:3e3,color:"blue"},{default:L(()=>[ue(Q(` ${o.stateStore.rxSelectedLabel} to ${o.stateStore.sourceList[parseInt(o.stateStore.txSelected)-1]} `)+" ",1),Be("template",null,[f(pt,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),f(oe,{class:"myRow d-flex align-center"},{default:L(()=>[f(N,{class:"d-flex justify-center pl-0"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[0],txID:1},null,8,["txLabel"])]),_:1}),f(N,{class:"d-flex justify-center"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[1],txID:2},null,8,["txLabel"])]),_:1}),f(N,{class:"d-flex justify-center"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[2],txID:3},null,8,["txLabel"])]),_:1}),f(N,{class:"d-flex justify-center pr-0"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[3],txID:4},null,8,["txLabel"])]),_:1})]),_:1}),f(oe,{class:"myRow"},{default:L(()=>[f(N,{class:"d-flex justify-center pl-0"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[4],txID:5},null,8,["txLabel"])]),_:1}),f(N,{class:"d-flex justify-center"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[5],txID:6},null,8,["txLabel"])]),_:1}),f(N,{class:"d-flex justify-center"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[6],txID:7},null,8,["txLabel"])]),_:1}),f(N,{class:"d-flex justify-center pr-0"},{default:L(()=>[f(s,{txLabel:o.stateStore.sourceList[7],txID:8},null,8,["txLabel"])]),_:1})]),_:1})])),[[Ke,l.onClickOutside]])]),_:1})}const Bn=Te(En,[["render",On],["__scopeId","data-v-cfacdd73"]]);export{Bn as default};
