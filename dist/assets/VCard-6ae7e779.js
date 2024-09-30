import{m,u as b,a as O}from"./VContainer-30abdced.js";import{l as g,ao as j,am as w,al as N,v as $,m as n,p as A,I as v,n as J,q as K,c as h,G as Q,H as U}from"./index-ac17ed97.js";import{i as P,V as k,m as W,a as X,F as Y,B as Z,C as ee,b as ae,k as te,g as ne,R as de,c as ie,l as le,n as se,d as re,G as ce,D as ue,E as oe,e as ve,p as me,L as ge,q as fe}from"./VBtn-4fbd5db1.js";import{V as I}from"./VAvatar-22c6ca72.js";import{m as ye,u as ke}from"./transition-9a3b17f2.js";import{V as be}from"./VImg-38705789.js";function p(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return g()({name:t??j(w(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...m()},setup(a,r){let{slots:d}=r;return()=>{var s;return N(a.tag,{class:[e,a.class],style:a.style},(s=d.default)==null?void 0:s.call(d))}}})}const pe=g()({name:"VCardActions",props:m(),setup(e,i){let{slots:t}=i;return $({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ce=p("v-card-subtitle"),Ve=p("v-card-title"),he=A({appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...m(),...P()},"VCardItem"),Ie=g()({name:"VCardItem",props:he(),setup(e,i){let{slots:t}=i;return b(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),r=!!(a||t.prepend),d=!!(e.appendAvatar||e.appendIcon),s=!!(d||t.append),f=!!(e.title||t.title),y=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[r&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[f&&n(Ve,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),y&&n(Ce,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),s&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):d&&n(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=p("v-card-text"),Pe=A({appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...W(),...m(),...P(),...ye(),...X(),...Y(),...Z(),...ee(),...ae(),...te(),...O(),...J(),...ne({variant:"elevated"})},"VCard"),Te=g()({name:"VCard",directives:{Ripple:de},props:Pe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:r}=K(e),{borderClasses:d}=ie(e),{colorClasses:s,colorStyles:f,variantClasses:y}=le(e),{densityClasses:c}=se(e),{dimensionStyles:l}=ke(e),{elevationClasses:S}=re(e),{loaderClasses:x}=ce(e),{locationStyles:_}=ue(e),{positionClasses:B}=oe(e),{roundedClasses:D}=ve(e),u=me(e,t),L=h(()=>e.link!==!1&&u.isLink.value),o=h(()=>!e.disabled&&e.link!==!1&&(e.link||u.isClickable.value));return b(()=>{const T=L.value?"a":e.tag,R=!!(a.title||e.title),E=!!(a.subtitle||e.subtitle),F=R||E,q=!!(a.append||e.appendAvatar||e.appendIcon),z=!!(a.prepend||e.prependAvatar||e.prependIcon),G=!!(a.image||e.image),H=F||z||q,M=!!(a.text||e.text);return Q(n(T,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":o.value},r.value,d.value,s.value,c.value,S.value,x.value,B.value,D.value,y.value,e.class],style:[f.value,l.value,_.value,e.style],href:u.href.value,onClick:o.value&&u.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[G&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),M&&n(Ae,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(pe,null,{default:a.actions}),fe(o.value,"v-card")]}}),[[U("ripple"),o.value&&e.ripple]])}),{}}});export{Ve as V,Ae as a,Te as b};
