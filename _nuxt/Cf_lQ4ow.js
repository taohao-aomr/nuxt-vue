import{_ as h}from"./BTsNhN3f.js";import{s as x,r as b,A as k,B as C,c as r,_ as d,o as i,a as l,b as n,w as o,d as c,C as y}from"./CKw10zg1.js";const T=Symbol.for("nuxt:client-only"),g=x({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(u,{slots:t,attrs:e}){const _=b(!1);return k(()=>{_.value=!0}),C(T,!0),a=>{var f;if(_.value)return(f=t.default)==null?void 0:f.call(t);const s=t.fallback||t.placeholder;if(s)return s();const m=a.fallback||a.placeholder||"",p=a.fallbackTag||a.placeholderTag||"span";return r(p,e,m)}}}),v={};function B(u,t){const e=h;return i(),r("ul",null,[l("li",null,[n(e,{to:"/111"},{default:o(()=>[c("111")]),_:1})]),l("li",null,[n(e,{to:"/222"},{default:o(()=>[c("222")]),_:1})]),l("li",null,[n(e,{to:"/333"},{default:o(()=>[c("333")]),_:1})]),l("li",null,[n(e,{to:"/444"},{default:o(()=>[c("444")]),_:1})]),l("li",null,[n(e,{to:"/555"},{default:o(()=>[c("555")]),_:1})]),l("li",null,[n(e,{to:"/666"},{default:o(()=>[c("666")]),_:1})])])}const N=d(v,[["render",B]]),O={},S=l("h1",null,"欢迎来到浩师傅的列表页面",-1);function V(u,t){const e=N,_=y("Comments"),a=g;return i(),r("div",null,[S,n(e),n(a,null,{default:o(()=>[n(_)]),_:1})])}const A=d(O,[["render",V]]);export{A as default};
