import{k as p,n as y,o as b,l as _,m as f,F as k}from"./vendor.d3111314.js";class S{constructor(c,d,i,u,l){this.ctx=c,this.x=d,this.y=i,this.width=u,this.height=l}draw(){this.ctx.beginPath(),this.ctx.fillRect(this.x,this.y,this.width,this.height),this.ctx.closePath()}}const C={setup(x){let c=[];(()=>{for(let n=0;n<4;n++){const t=[...Array(180).keys()],o=[];for(;t.length;){const s=Math.random()*t.length-1;o.push(t.splice(s,1)[0])}c=[...c,...o]}})();const i=p(null),u=n=>{const t=n.value.getContext("2d");return t.fillStyle="white",t.translate(250,250),t},l=[];for(let n=0;n<360;n++){const t=n/180*Math.PI;l.push({cos:Math.cos(t),sin:Math.sin(t)})}return y(()=>{const n=u(i),t=s=>new Promise(h=>{setTimeout(()=>{n.clearRect(-250,-250,500,500);const a=[];for(let e=0;e<s.length;e++){const r=s[e],{cos:m,sin:v}=l[Math.floor(e/2)],w=r*m,g=r*v;a.push(new S(n,w,g,5,3))}a.forEach(e=>e.draw()),h("draw success")},10)});t(c),(async s=>{for(var h=s.length,a=0;a<h;a++){for(var e=0;e<h-1-a;e++)if(s[e]>s[e+1]){var r=s[e+1];s[e+1]=s[e],s[e]=r}await t(s)}return s})(c)}),(n,t)=>(b(),_(k,null,[f("button",{onClick:t[0]||(t[0]=(...o)=>n.Start&&n.Start(...o))},"\u5F00\u59CB\u6392\u5E8F"),f("canvas",{id:"canvas",width:"500",height:"500",ref:(o,s)=>{s.canvas=o,i.value=o}},null,512)],64))}};export{C as default};