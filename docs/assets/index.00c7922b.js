import"./index.e0fbebee.js";import{_ as b}from"./index.267a6178.js";import{y as _,B as g,o as y,c as v}from"./vendor.827e1304.js";import"./deleteObjectKeys.ddff79e9.js";class j{constructor(n,u,a,d,h){this.ctx=n,this.x=u,this.y=a,this.width=d,this.height=h}draw(){this.ctx.beginPath(),this.ctx.fillRect(this.x,this.y,this.width,this.height),this.ctx.closePath()}}const M={setup(f){let n=[];(()=>{for(let c=0;c<4;c++){const s=[...Array(180).keys()],o=[];for(;s.length;){const t=Math.random()*s.length-1;o.push(s.splice(t,1)[0])}n=[...n,...o]}})();const a=_(null),d=c=>{const s=c.value.getContext("2d");return s.fillStyle="white",s.translate(250,250),s},h=[];for(let c=0;c<360;c++){const s=c/180*Math.PI;h.push({cos:Math.cos(s),sin:Math.sin(s)})}return g(()=>{const c=d(a),s=t=>new Promise(l=>{setTimeout(()=>{c.clearRect(-250,-250,500,500);const i=[];for(let e=0;e<t.length;e++){const r=t[e],{cos:x,sin:m}=h[Math.floor(e/2)],p=r*x,w=r*m;i.push(new j(c,p,w,5,3))}i.forEach(e=>e.draw()),l("draw success")},10)});s(n),(async t=>{let l=t.length;for(let i=0;i<l;i++){for(let e=0;e<l-1-i;e++)if(t[e]>t[e+1]){let r=t[e+1];t[e+1]=t[e],t[e]=r}await s(t)}return t})(n)}),(c,s)=>(y(),v("canvas",{id:"canvas",width:"500",height:"500",ref:(o,t)=>{t.canvas=o,a.value=o}},null,512))}};var C=b(M,[["__scopeId","data-v-0f3cbf5c"]]);export{C as default};
