"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[564],{826:(a,e,t)=>{t.d(e,{A:()=>s});const c=t.p+"static/media/avengers.95d3ba268aa1cf4beb2d.png",n=t.p+"static/media/avengers_logo.b2a62a190ebc3d0f79e1.png";var r=t(579);const s=()=>(0,r.jsx)("div",{className:"banner",children:(0,r.jsxs)("div",{className:"banner_wrapper",children:[(0,r.jsx)("img",{src:c,alt:"avengers",className:"banner_img"}),(0,r.jsxs)("div",{className:"banner_title",children:["New comics every week!",(0,r.jsx)("br",{}),"Stay tuned!"]}),(0,r.jsx)("img",{src:n,alt:"avengers logo",className:"banner_img"})]})})},835:(a,e,t)=>{t.d(e,{A:()=>r});const c=t.p+"static/media/error.42292aa12b6bc303ce99.gif";var n=t(579);const r=()=>(0,n.jsx)("img",{src:c,alt:"error",className:"error"})},190:(a,e,t)=>{t.r(e),t.d(e,{default:()=>u});var c=t(216),n=t(757),r=t(43),s=t(835),o=t(561),i=t(826),l=t(579);const u=a=>{let{Component:e,dataType:t}=a;const{id:u}=(0,c.g)(),[d,m]=(0,r.useState)(null),{loading:h,error:p,getComic:g,getCharacter:b,clearError:v}=(0,n.A)();(0,r.useEffect)((()=>{w()}),[u]);const f=a=>{m(a)},w=()=>{switch(v(),t){case"comic":g(u).then(f);break;case"character":b(u).then(f)}},y=p?(0,l.jsx)(s.A,{}):null,C=h?(0,l.jsx)(o.A,{}):null,j=h||p||!d?null:(0,l.jsx)(e,{data:d});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{}),y,C,j]})}},757:(a,e,t)=>{t.d(e,{A:()=>n});var c=t(43);const n=()=>{const{loading:a,request:e,error:t,clearError:n}=(()=>{const[a,e]=(0,c.useState)(!1),[t,n]=(0,c.useState)(null);return{loading:a,request:(0,c.useCallback)((async function(a){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"appliccatio/json"};e(!0);try{const n=await fetch(a,{method:t,body:c,headers:r});if(!n.ok)throw new Error("Could not fetch ".concat(a,", status: ").concat(n.status));const s=await n.json();return e(!1),s}catch(s){throw e(!1),n(s.message),s}}),[]),error:t,clearError:(0,c.useCallback)((()=>n(null)),[])}})(),r="https://gateway.marvel.com:443/v1/public/",s="apikey=d8d46a206e1d29c225cfc50d92cea400",o=a=>({id:a.id,name:a.name,description:a.description?"".concat(a.description.slice(0,210),"..."):"There is no description for this character",thumbnail:a.thumbnail.path+"."+a.thumbnail.extension,homepage:a.urls[0].url,wiki:a.urls[1].url,comics:a.comics.items}),i=a=>{var e;return{id:a.id,title:a.title,description:a.description||"There is no description",thumbnail:a.thumbnail.path+"."+a.thumbnail.extension,price:a.prices[0].price?"".concat(a.prices[0].price,"$"):"not available",pageCount:a.pageCount?"".concat(a.pageCount," p."):"No information about the number of pages",language:(null===(e=a.textObjects[0])||void 0===e?void 0:e.language)||"en-us"}};return{loading:a,error:t,getAllCharacters:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"characters?limit=9&offset=").concat(a,"&").concat(s))).data.results.map(o)},getCharacter:async a=>{const t=await e("".concat(r,"characters/").concat(a,"?").concat(s));return o(t.data.results[0])},clearError:n,getAllComics:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"comics?limit=8&offset=").concat(a,"&").concat(s))).data.results.map(i)},getComic:async a=>{const t=await e("".concat(r,"comics/").concat(a,"?").concat(s));return i(t.data.results[0])},getCharacterByName:async a=>(await e("".concat(r,"characters?name=").concat(a,"&").concat(s))).data.results.map(o)}}}}]);
//# sourceMappingURL=564.d038c669.chunk.js.map