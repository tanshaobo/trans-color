import{s as f,c as x,R as v,a as h}from"./creatCtx.9eb29cab.js";import{_ as w}from"./index.4d65754c.js";import{y,B as g,o as b,c as j}from"./vendor.827e1304.js";const k={setup(B){const l=f(),r=y(null),_=h();return g(()=>{const n=x(r.value),o=e=>new Promise(s=>{setTimeout(()=>{n.clearRect(-250,-250,500,500);const c=[];for(let t=0;t<e.length;t++){const i=e[t],{cos:d,sin:u}=_[Math.floor(t/2)],m=i*d,p=i*u;c.push(new v(n,m,p,5,3))}c.forEach(t=>t.draw()),s("draw success")},10)});o(l),(async e=>{for(let s=1;s<e.length;s++){let c=e[s],t=s-1;for(;t>=0&&e[t]>c;)e[t+1]=e[t],t--;e[t+1]=c,await o(e)}return e})(l)}),(n,o)=>(b(),j("canvas",{id:"canvas",width:"500",height:"500",ref:(a,e)=>{e.canvas=a,r.value=a}},null,512))}};var E=w(k,[["__scopeId","data-v-1ddbba18"]]);export{E as default};
