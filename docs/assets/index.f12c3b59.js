import{c as m,a as _,r as p,o as f,b as h,d as v,e as y,f as g,i as E}from"./vendor.d3111314.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};L();const O="modulepreload",l={},b="./",a=function(r,c){return!c||c.length===0?r():Promise.all(c.map(o=>{if(o=`${b}${o}`,o in l)return;l[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":O,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((u,d)=>{n.addEventListener("load",u),n.addEventListener("error",d)})})).then(()=>r())},x={path:"/",name:"Index",component:()=>a(()=>import("./Index.ca8d10b0.js"),["assets/Index.ca8d10b0.js","assets/Index.f425454b.css","assets/vendor.d3111314.js","assets/plugin-vue_export-helper.21dcd24c.js"]),children:[{path:"/algorithm",name:"Algorithm",component:()=>a(()=>import("./index.5522dca2.js"),["assets/index.5522dca2.js","assets/index.25dadc91.css","assets/vendor.d3111314.js"])}]},P={path:"/home",name:"Home",component:()=>a(()=>import("./Home.ab0eea6b.js"),["assets/Home.ab0eea6b.js","assets/Home.d2652e44.css","assets/vendor.d3111314.js","assets/plugin-vue_export-helper.21dcd24c.js"])},T=[x,P],A=m({history:_(),routes:T});const I={setup(s){return(r,c)=>{const o=p("router-view");return f(),h(o)}}},S={count:10},k={SET_COUNT(s,r){s.count=r}},C={set_count({commit:s},r){s("SET_COUNT",r)}};var H={namespaced:!0,state:S,mutations:k,actions:C},N={Test:H};const R=v({modules:N,plugins:[y()]});const i=g(I);i.use(A);i.use(R);i.use(E);i.mount("#app");