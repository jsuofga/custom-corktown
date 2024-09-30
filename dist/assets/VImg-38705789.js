import{p as N,l as C,m as n,c as b,ap as O,s as _,r as A,x as z,ag as L,a2 as U,G as k,H as G,K as J,B as K,d as Q,J as X}from"./index-ac17ed97.js";import{m as W,u as j}from"./VContainer-30abdced.js";import{m as Y,u as Z,a as p,M as y}from"./transition-9a3b17f2.js";function ee(e){return{aspectStyles:b(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const F=N({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...Y()},"VResponsive"),B=C()({name:"VResponsive",props:F(),setup(e,u){let{slots:i}=u;const{aspectStyles:r}=ee(e),{dimensionStyles:m}=Z(e);return j(()=>{var a;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[m.value,e.style]},[n("div",{class:"v-responsive__sizer",style:r.value},null),(a=i.additional)==null?void 0:a.call(i),i.default&&n("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function te(e,u){if(!O)return;const i=u.modifiers||{},r=u.value,{handler:m,options:a}=typeof r=="object"?r:{handler:r,options:{}},l=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const s=(f=e._observe)==null?void 0:f[u.instance.$.uid];if(!s)return;const c=v.some(S=>S.isIntersecting);m&&(!i.quiet||s.init)&&(!i.once||c||s.init)&&m(c,v,g),c&&i.once?x(e,u):s.init=!0},a);e._observe=Object(e._observe),e._observe[u.instance.$.uid]={init:!1,observer:l},l.observe(e)}function x(e,u){var r;const i=(r=e._observe)==null?void 0:r[u.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[u.instance.$.uid])}const ne={mounted:te,unmounted:x},re=ne,ae=N({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...F(),...W(),...p()},"VImg"),ue=C()({name:"VImg",directives:{intersect:re},props:ae(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:i,slots:r}=u;const m=_(""),a=A(),l=_(e.eager?"loading":"idle"),v=_(),g=_(),s=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),c=b(()=>s.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{f(l.value!=="idle")}),z(c,(t,o)=>{!t&&o&&a.value&&h(a.value)}),L(()=>f());function f(t){if(!(e.eager&&t)&&!(O&&!t&&!e.eager)){if(l.value="loading",s.value.lazySrc){const o=new Image;o.src=s.value.lazySrc,h(o,null)}s.value.src&&U(()=>{var o,d;if(i("loadstart",((o=a.value)==null?void 0:o.currentSrc)||s.value.src),(d=a.value)!=null&&d.complete){if(a.value.naturalWidth||I(),l.value==="error")return;c.value||h(a.value,null),S()}else c.value||h(a.value),R()})}}function S(){var t;R(),l.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||s.value.src)}function I(){var t;l.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||s.value.src)}function R(){const t=a.value;t&&(m.value=t.currentSrc||t.src)}let V=-1;function h(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(V);const{naturalHeight:T,naturalWidth:$}=t;T||$?(v.value=$,g.value=T):!t.complete&&l.value==="loading"&&o!=null?V=window.setTimeout(d,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};d()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var d;if(!s.value.src||l.value==="idle")return null;const t=n("img",{class:["v-img__img",w.value],src:s.value.src,srcset:s.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:S,onError:I},null),o=(d=r.sources)==null?void 0:d.call(r);return n(y,{transition:e.transition,appear:!0},{default:()=>[k(o?n("picture",{class:"v-img__picture"},[o,t]):t,[[X,l.value==="loaded"]])]})},E=()=>n(y,{transition:e.transition},{default:()=>[s.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",w.value],src:s.value.lazySrc,alt:e.alt},null)]}),H=()=>r.placeholder?n(y,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!r.error)&&n("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,M=()=>r.error?n(y,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[r.error()])]}):null,q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,P=_(!1);{const t=z(c,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{P.value=!0})}),t())})}return j(()=>{const[t]=B.filterProps(e);return k(n(B,K({class:["v-img",{"v-img--booting":!P.value},e.class],style:[{width:Q(e.width==="auto"?v.value:e.width)},e.style]},t,{aspectRatio:c.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(J,null,[n(D,null,null),n(E,null,null),n(q,null,null),n(H,null,null),n(M,null,null)]),default:r.default}),[[G("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:m,image:a,state:l,naturalWidth:v,naturalHeight:g}}});export{re as I,ue as V};