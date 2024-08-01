"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[564],{826:(e,t,a)=>{a.d(t,{A:()=>n});const c=a.p+"static/media/avengers.95d3ba268aa1cf4beb2d.png",s=a.p+"static/media/avengers_logo.b2a62a190ebc3d0f79e1.png";var r=a(579);const n=()=>(0,r.jsx)("div",{className:"banner",children:(0,r.jsxs)("div",{className:"banner_wrapper",children:[(0,r.jsx)("img",{src:c,alt:"avengers",className:"banner_img"}),(0,r.jsxs)("div",{className:"banner_title",children:["New comics every week!",(0,r.jsx)("br",{}),"Stay tuned!"]}),(0,r.jsx)("img",{src:s,alt:"avengers logo",className:"banner_img"})]})})},835:(e,t,a)=>{a.d(t,{A:()=>r});const c=a.p+"static/media/error.42292aa12b6bc303ce99.gif";var s=a(579);const r=()=>(0,s.jsx)("img",{src:c,alt:"error",className:"error"})},190:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var c=a(216),s=a(757),r=a(43),n=a(594),o=a(826),i=a(579);const l=e=>{let{Component:t,dataType:a}=e;const{id:l}=(0,c.g)(),[d,u]=(0,r.useState)(null),{getComic:m,getCharacter:p,clearError:h,process:g,setProcess:b}=(0,s.A)();(0,r.useEffect)((()=>{f()}),[l]);const v=e=>{u(e)},f=()=>{switch(h(),a){case"comic":m(l).then(v).then((()=>b("confirmed")));break;case"character":p(l).then(v).then((()=>b("confirmed")));break;default:throw new Error("Unexpected process state")}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{}),(0,n.A)(g,t,d)]})}},757:(e,t,a)=>{a.d(t,{A:()=>s});var c=a(43);const s=()=>{const{request:e,clearError:t,process:a,setProcess:s}=(()=>{const[e,t]=(0,c.useState)("waiting");return{request:(0,c.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"appliccatio/json"};t("loading");try{const t=await fetch(e,{method:a,body:c,headers:s});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));return await t.json()}catch(r){throw t("error"),r}}),[]),clearError:(0,c.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),r="https://gateway.marvel.com:443/v1/public/",n="apikey=d8d46a206e1d29c225cfc50d92cea400",o=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",descriptionAll:e.description?e.description:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),i=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us"}};return{getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(n))).data.results.map(o)},getCharacter:async t=>{const a=await e("".concat(r,"characters/").concat(t,"?").concat(n));return o(a.data.results[0])},clearError:t,getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"comics?limit=8&offset=").concat(t,"&").concat(n))).data.results.map(i)},getComic:async t=>{const a=await e("".concat(r,"comics/").concat(t,"?").concat(n));return i(a.data.results[0])},getCharacterByName:async t=>(await e("".concat(r,"characters?name=").concat(t,"&").concat(n))).data.results.map(o),process:a,setProcess:s}}},594:(e,t,a)=>{a.d(t,{A:()=>o});var c=a(835),s=a(561),r=a(579);const n=()=>(0,r.jsxs)("div",{className:"sceleton",children:[(0,r.jsx)("div",{className:"sceleton_title",children:"Please select a character to see information"}),(0,r.jsxs)("div",{className:"sceleton_block",children:[(0,r.jsx)("div",{className:"sceleton_circle pulse"}),(0,r.jsx)("div",{className:"sceleton_rectangle_mini pulse"}),(0,r.jsx)("div",{className:"sceleton_rectangle_big pulse"}),(0,r.jsx)("div",{className:"sceleton_rectangle_big pulse"}),(0,r.jsx)("div",{className:"sceleton_rectangle_big pulse"})]})]}),o=(e,t,a)=>{switch(e){case"waiting":return(0,r.jsx)(n,{});case"loading":return(0,r.jsx)(s.A,{});case"confirmed":return(0,r.jsx)(t,{data:a});case"error":return(0,r.jsx)(c.A,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=564.fd2d2e29.chunk.js.map