import{_ as f,r as s,o as a,c as p,b as e,e as n,w as r,F as h,d as $,G as b,a as w,u as T}from"./OmrnE3d5.js";import N from"./CxfpdtQ1.js";import{A as P}from"./4dwmw_VB.js";import{T as A}from"./SOpPrfBa.js";import{C as x,S as C,P as k}from"./BaKSCP9g.js";import{a as B,b as D,c as F,d as W,e as E,f as G}from"./Cdo4OgCQ.js";import{i as M,a as V,b as H,c as O,d as j}from"./BWG9koi6.js";import{i as S,a as y,b as L}from"./azBxXXLy.js";import q from"./BKHhJyk6.js";import z from"./BHh0UZVu.js";import"./DiqBaI2Q.js";import"./B8mv32cn.js";import"./is6aRU74.js";import"./BQsWh4nP.js";import"./CW57vPoJ.js";import"./DwwnFRzY.js";import"./DR6FnRwu.js";import"./DeDvjckw.js";import"./DDx3tMbt.js";import"./DPfdXt1F.js";import"./I6A_oj8C.js";import"./CGJk4CRR.js";import"./D-HlV6Uy.js";import"./BaKbGmUB.js";const I={components:{Carousel:x,Slide:C,Pagination:k},data(){return{slider_data:[B,D,F,W,E,G]}},methods:{handlePrev(){var o;(o=this.$refs.detailsSlider)==null||o.prev()},handleNext(){var o;(o=this.$refs.detailsSlider)==null||o.next()}}},J={class:"elements__carousel-area pt-110"},K={class:"container"},Q=w('<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel Grid With Controls</h3></div></div></div>',1),R={class:"row"},U={class:"col-xl-12"},X={class:"elements__carousel p-relative"},Y=["src"],Z={class:"elements-arrow"},ee=e("i",{class:"fa-solid fa-angle-left"},null,-1),te=[ee],se=e("i",{class:"fa-solid fa-angle-right"},null,-1),oe=[se];function ne(o,i,g,v,u,l){const c=s("Slide"),_=s("pagination"),d=s("Carousel");return a(),p("section",J,[e("div",K,[Q,e("div",R,[e("div",U,[e("div",X,[n(d,{ref:"detailsSlider","items-to-show":3,"wrap-around":!0,snapAlign:"center",breakpoints:{992:{itemsToShow:3},700:{itemsToShow:2},0:{itemsToShow:1}},class:"elements__carousel-active"},{addons:r(()=>[n(_)]),default:r(()=>[(a(!0),p(h,null,$(u.slider_data,(t,m)=>(a(),b(c,{key:m,class:"elements__carousel-item w-img"},{default:r(()=>[e("img",{src:t,alt:"slider img"},null,8,Y)]),_:2},1024))),128))]),_:1},512),e("div",Z,[e("button",{onClick:i[0]||(i[0]=(...t)=>l.handlePrev&&l.handlePrev(...t)),type:"button",class:"elements-button-prev slick-prev slick-arrow"},te),e("button",{onClick:i[1]||(i[1]=(...t)=>l.handleNext&&l.handleNext(...t)),type:"button",class:"elements-button-next slick-next slick-arrow"},oe)])])])])])])}const ae=f(I,[["render",ne]]),ie={components:{Carousel:x,Slide:C,Pagination:k},data(){return{carousel_images:[M,V,H,O,j]}},methods:{handlePrev(){var o;(o=this.$refs.detailsSlider)==null||o.prev()},handleNext(){var o;(o=this.$refs.detailsSlider)==null||o.next()}}},le={class:"elements__carousel-area pt-110 pb-110"},re={class:"container"},ce=w('<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel With Controls</h3></div></div></div>',1),_e={class:"row"},de={class:"col-xl-6"},me={class:"elements__carousel elements__carousel-img p-relative fix"},pe=["src"],ue={class:"elements-img-arrow"},he=e("i",{class:"fa-solid fa-angle-left"},null,-1),fe=[he],ge=e("i",{class:"fa-solid fa-angle-right"},null,-1),ve=[ge],$e={class:"col-xl-6"},be={class:"elements__carousel elements__carousel-img-dot p-relative fix"},we=["src"];function xe(o,i,g,v,u,l){const c=s("Slide"),_=s("Carousel"),d=s("pagination");return a(),p("section",le,[e("div",re,[ce,e("div",_e,[e("div",de,[e("div",me,[n(_,{ref:"detailsSlider","items-to-show":1,"wrap-around":!0,snapAlign:"center",class:"elements__carousel-img-active"},{default:r(()=>[(a(!0),p(h,null,$(u.carousel_images,(t,m)=>(a(),b(c,{key:m,class:"elements__carousel-item w-img"},{default:r(()=>[e("img",{src:t,alt:"slider img"},null,8,pe)]),_:2},1024))),128))]),_:1},512),e("div",ue,[e("button",{onClick:i[0]||(i[0]=(...t)=>l.handlePrev&&l.handlePrev(...t)),type:"button",class:"elements-img-button-prev slick-prev slick-arrow"},fe),e("button",{onClick:i[1]||(i[1]=(...t)=>l.handleNext&&l.handleNext(...t)),type:"button",class:"elements-img-button-next slick-next slick-arrow"},ve)])])]),e("div",$e,[e("div",be,[n(_,{"items-to-show":1,"wrap-around":!0,snapAlign:"center",class:"elements__carousel-img-dot-active"},{addons:r(()=>[n(d)]),default:r(()=>[(a(!0),p(h,null,$(u.carousel_images,(t,m)=>(a(),b(c,{key:m,class:"elements__carousel-item w-img"},{default:r(()=>[e("img",{src:t,alt:"slider img"},null,8,we)]),_:2},1024))),128))]),_:1})])])])])])}const Ce=f(ie,[["render",xe]]),ke={components:{Carousel:x,Slide:C,Pagination:k},data(){return{images:[S,y,L,y,S]}}},Se={class:"portfolio__area pb-60 fix"},ye={class:"container"},Te=w('<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel With Dots</h3></div></div></div>',1),Ne={class:"row justify-content-center"},Pe={class:"col-xl-12"},Ae={class:"portfolio__details-slider p-relative pl-50 pr-50"},Be=["src"],De=e("div",{class:"portfolio-details-slider-dot tp-swiper-dot-2 text-center mt-45"},null,-1);function Fe(o,i,g,v,u,l){const c=s("Slide"),_=s("pagination"),d=s("Carousel");return a(),p("section",Se,[e("div",ye,[Te,e("div",Ne,[e("div",Pe,[e("div",Ae,[n(d,{ref:"detailsSlider","items-to-show":1,"wrap-around":!0,snapAlign:"center",breakpoints:{992:{itemsToShow:1},700:{itemsToShow:1},0:{itemsToShow:1}},class:"portfolio__details-slider-active"},{addons:r(()=>[n(_)]),default:r(()=>[(a(!0),p(h,null,$(u.images,(t,m)=>(a(),b(c,{key:m,class:"portfolio__details-slider-item"},{default:r(()=>[e("img",{src:t,alt:"slider img"},null,8,Be)]),_:2},1024))),128))]),_:1},512),De])])])])])}const We=f(ke,[["render",Fe]]),Ee={components:{CommonBreadcrumb:A,AboutGallery:P,SliderWithDots:We,CarouselGridControls:ae,CarouselWithControls:Ce}},Ge=e("div",{class:"tp-separator"},null,-1);function Me(o,i,g,v,u,l){const c=s("common-breadcrumb"),_=s("about-gallery"),d=s("slider-with-dots"),t=s("carousel-grid-controls"),m=s("carousel-with-controls");return a(),p(h,null,[n(c,{title:"Have a look to our carousel",subtitle:"Elements"}),n(_,{el_style:!0}),n(d),Ge,n(t),n(m)],64)}const Ve=f(Ee,[["render",Me]]),He={components:{HeaderOne:N,ElementsCarouselMain:Ve,Footer:z,BackToTop:q},setup(){T({title:"Element Carousel - Creative Agency & Portfolio Vue Nuxt 3 Template"})}};function Oe(o,i,g,v,u,l){const c=s("header-one"),_=s("elements-carousel-main"),d=s("Footer"),t=s("back-to-top");return a(),p("div",null,[n(c,{top_bar:!1,commonOffcanvas:!0}),n(_),n(d),n(t)])}const dt=f(He,[["render",Oe]]);export{dt as default};
