import{_ as L,f as k,g as j,s as q,i as w,t as B,u as E,c,b as s,l as e,e as n,w as o,D as r,x as b,q as d,F as y,m as F,ab as I,p as G,o as i,d as M,G as N,H as O,I as R}from"./OmrnE3d5.js";import{_ as z}from"./B-r68-ay.js";import{a as P,S as T}from"./DxzZJF1W.js";import{N as J}from"./B7LnlEtV.js";import{P as K}from"./4w4g0O59.js";import{S as Q}from"./BFgDA0qX.js";import{A as U}from"./DRypW5s4.js";import{f as W,T as X}from"./CnhZG9AX.js";import{I as Y}from"./BaKbGmUB.js";import"./CFABdoD6.js";const p=u=>(O("data-v-ca6e19c5"),u=u(),R(),u),Z={class:"breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"},ss={class:"container"},es={class:"row"},ts={key:0,class:"col-xxl-12"},as={class:"breadcrumb__content p-relative z-index-1"},os={class:"postbox__category"},is={class:"breadcrumb__list"},ls={class:"breadcrumb-item-1"},ns=p(()=>s("span",{class:"dvdr breadcrumb-item-1"},[s("i",{class:"fa-solid fa-circle-small"})],-1)),cs={class:"breadcrumb-item-1"},_s=p(()=>s("span",{class:"dvdr breadcrumb-item-1"},[s("i",{class:"fa-solid fa-circle-small"})],-1)),rs={class:"postbox__area pt-40 pb-120"},ds={class:"container"},ps={class:"row"},us={class:"col-xxl-12"},ms={key:0,class:"postbox__wrapper"},hs={class:"postbox__main"},ws={class:"row"},fs={class:"col-lg-12"},bs={class:"postbox__main-wrapper"},ys={class:"postbox__details-content-wrapper"},vs=p(()=>s("hr",null,null,-1)),xs={class:"postbox__meta-wrapper d-flex align-items-center flex-wrap"},gs={class:"postbox__meta-item"},Ss={class:"postbox__meta-content"},ks={class:"postbox__meta-type"},Bs=p(()=>s("i",{class:"fa-regular fa-calendar"},null,-1)),Is={class:"postbox__meta-item"},Ms={class:"postbox__meta-content"},Ns={class:"postbox__meta-type"},Ps=p(()=>s("i",{class:"fa-regular fa-tag"},null,-1)),Ts={class:"postbox__thumb m-img mt-20"},Vs={key:0,class:"news_gallery mt-2"},$s={class:"container"},Cs={class:"row justify-content-center"},Ds={class:"col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 mx-auto"},As={class:"portfolio__slider-6"},Hs=["src"],Ls=["src"],js={class:"postbox__details-content-wrapper mt-60"},qs=["innerHTML"],Es={__name:"[id]",async setup(u){let a,m;k.extend(j);const V=F(),{apiBase:v}=V.public,x=q(),g=[U,W,J,K,Q,X],$=w(null),_=w([]),S=w(null),t=w(null),C=h=>{S.value=h},{data:D}=([a,m]=B(async()=>I("news-gallery",async()=>await $fetch(`${v}/news-gallery`,{params:{is_publish:1,news_id:x.params.id}}))),a=await a,m(),a);_.value=[...D.value.data];const{data:A}=([a,m]=B(async()=>I("news",async()=>await $fetch(`${v}/news/${x.params.id}`))),a=await a,m(),a);return t.value=A.value.data,E({title:t.value.title}),(h,Fs)=>{const f=G,H=z;return i(),c(y,null,[s("section",Z,[s("div",ss,[s("div",es,[e(t)!=null?(i(),c("div",ts,[s("div",as,[s("div",os,[n(f,{to:{path:"/news",query:{news_type_id:e(t).news_type_id}},style:{padding:"10px"}},{default:o(()=>[d(r(e(t).news_type.name),1)]),_:1},8,["to"])]),s("div",is,[s("span",ls,[n(f,{to:{path:"/"}},{default:o(()=>[d(" หน้าหลัก ")]),_:1})]),ns,s("span",cs,[n(f,{href:"/news"},{default:o(()=>[d(" ข่าวทั้งหมด")]),_:1})]),_s,s("span",null,r(e(t).title),1)])])])):b("",!0)])])]),s("section",rs,[s("div",ds,[s("div",ps,[s("div",us,[e(t)?(i(),c("div",ms,[s("div",hs,[s("div",ws,[s("div",fs,[s("div",bs,[s("div",ys,[s("h3",null,r(e(t).title),1),vs]),s("div",xs,[s("div",gs,[s("div",Ss,[s("span",ks,[Bs,d(" "+r(e(k)(e(t).created_news).locale("th").format("DD MMM BB")),1)])])]),s("div",Is,[s("div",Ms,[s("span",Ns,[Ps,d(" "+r(e(t).news_type?e(t).news_type.name:""),1)])])])]),s("div",Ts,[e(_).length!=0?(i(),c("div",Vs,[s("div",$s,[s("div",Cs,[s("div",Ds,[s("div",As,[n(H,null,{default:o(()=>[n(e(P),{slidesPerView:1,spaceBetween:10,loop:!0,thumbs:{swiper:e(S)},navigation:!0,modules:g,speed:5e3,autoplay:{delay:5e3,disableOnInteraction:!0},class:"mySwiper2 mb-10"},{default:o(()=>[(i(!0),c(y,null,M(e(_),l=>(i(),N(e(T),{key:l.id},{default:o(()=>[s("img",{src:l.news_gallery_file,style:{width:"100%"}},null,8,Hs)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),n(e(P),{onSwiper:C,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:g,class:"mySwiper"},{default:o(()=>[(i(!0),c(y,null,M(e(_),l=>(i(),N(e(T),{key:l.id},{default:o(()=>[s("img",{src:l.news_gallery_file,style:{width:"100%",cursor:"pointer"}},null,8,Ls)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])]),_:1})])])])])])):b("",!0)]),s("div",js,[s("div",{innerHTML:e(t).detail==null?"":e(t).detail},null,8,qs)])])])])])])):b("",!0)])])]),n(Y,{ref_key:"image_popup",ref:$,images:e(_).map(l=>l.news_gallery_file)},null,8,["images"])])],64)}}},Ys=L(Es,[["__scopeId","data-v-ca6e19c5"]]);export{Ys as default};