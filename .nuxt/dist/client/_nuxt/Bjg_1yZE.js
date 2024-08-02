import{_ as p,o as f,c as v,b as t,e as s,w as i,q as a,E as _,F as k,p as w,ad as $,Z as y,k as S,v as M,a as C,r as m}from"./OmrnE3d5.js";import{u as b}from"./CW57vPoJ.js";import{O as V}from"./DDx3tMbt.js";import{c as L,p as j,a as B}from"./DR37Xn3y.js";import{_ as O}from"./DPfdXt1F.js";import"./DR6FnRwu.js";import"./DeDvjckw.js";const Z=""+new URL("empty-cart.DmZv89Qe.png",import.meta.url).href,H={data(){return{isOpen:!1}},methods:{},setup(){return{utils:b()}}},q={class:"cartmini__wrapper d-flex justify-content-between flex-column"},N={class:"cartmini__top-wrapper"},T={class:"cartmini__top p-relative"},E=t("div",{class:"cartmini__title"},[t("h4",null,"Shopping cart")],-1),U={class:"cartmini__close"},D=t("i",{class:"fal fa-times"},null,-1),F=[D],Y={class:"cartmini__widget"},z={class:"cartmini__widget-item"},G={class:"cartmini__thumb"},I=t("img",{src:L,alt:""},null,-1),K={class:"cartmini__content"},P=t("div",{class:"cartmini__price-wrapper"},[t("span",{class:"cartmini__price"},"$46.00"),t("span",{class:"cartmini__quantity"},"x2")],-1),Q=t("button",{class:"cartmini__del"},[t("i",{class:"fal fa-times"})],-1),R={class:"cartmini__widget-item"},A={class:"cartmini__thumb"},J=t("img",{src:j,alt:""},null,-1),W={class:"cartmini__content"},X=t("div",{class:"cartmini__price-wrapper"},[t("span",{class:"cartmini__price"},"$78.00"),t("span",{class:"cartmini__quantity"},"x1")],-1),tt=t("button",{class:"cartmini__del"},[t("i",{class:"fal fa-times"})],-1),st={class:"cartmini__widget-item"},et={class:"cartmini__thumb"},ot=t("img",{src:B,alt:""},null,-1),it={class:"cartmini__content"},nt=t("div",{class:"cartmini__price-wrapper"},[t("span",{class:"cartmini__price"},"$98.00"),t("span",{class:"cartmini__quantity"},"x3")],-1),lt=t("button",{class:"cartmini__del"},[t("i",{class:"fal fa-times"})],-1),at={class:"cartmini__empty text-center d-none"},rt=t("img",{src:Z,alt:""},null,-1),ct=t("p",null,"Your Cart is empty",-1),_t={class:"cartmini__checkout"},dt=t("div",{class:"cartmini__checkout-title mb-30"},[t("h4",null,"Subtotal:"),t("span",null,"$113.00")],-1),ht={class:"cartmini__checkout-btn"},ut=t("span",null,null,-1),mt=t("span",null,null,-1);function pt(d,e,h,n,c,r){const o=w;return f(),v(k,null,[t("div",{class:_(`cartmini__area ${n.utils.isCartMiniOpen?"cartmini-opened":""}`)},[t("div",q,[t("div",N,[t("div",T,[E,t("div",U,[t("button",{onClick:e[0]||(e[0]=u=>n.utils.closeCartMini()),type:"button",class:"cartmini__close-btn cartmini-close-btn"},F)])]),t("div",Y,[t("div",z,[t("div",G,[s(o,{href:"/product-details"},{default:i(()=>[I]),_:1})]),t("div",K,[t("h5",null,[s(o,{href:"/product-details"},{default:i(()=>[a("Level Bolt Smart Lock")]),_:1})]),P]),Q]),t("div",R,[t("div",A,[s(o,{href:"/product-details"},{default:i(()=>[J]),_:1})]),t("div",W,[t("h5",null,[s(o,{href:"/product-details"},{default:i(()=>[a("Trademil for younger")]),_:1})]),X]),tt]),t("div",st,[t("div",et,[s(o,{href:"/product-details"},{default:i(()=>[ot]),_:1})]),t("div",it,[t("h5",null,[s(o,{href:"/product-details"},{default:i(()=>[a("ViewSonic VP2756-2K")]),_:1})]),nt]),lt])]),t("div",at,[rt,ct,s(o,{href:"/shop",class:"tp-btn"},{default:i(()=>[a("Go to Shop")]),_:1})])]),t("div",_t,[dt,t("div",ht,[s(o,{href:"/cart",class:"tp-btn mb-10 w-100"},{default:i(()=>[ut,a(" view cart ")]),_:1}),s(o,{href:"/checkout",class:"tp-btn-border w-100"},{default:i(()=>[mt,a(" checkout ")]),_:1})])])])],2),t("div",{onClick:e[1]||(e[1]=u=>n.utils.closeCartMini()),class:_(`body-overlay ${n.utils.isCartMiniOpen?"opened":""}`)},null,2)],64)}const ft=p(H,[["render",pt]]),vt={components:{menus:$,CartMiniSidebar:ft,OffCanvasSix:V},props:{style_2:{type:Boolean,default:!1}},data(){return{isSticky:!1,formValue:""}},methods:{handleSticky(){window.scrollY>80?this.isSticky=!0:this.isSticky=!1},handleOpenSidebar(){this.$refs.off_canvas.openOffcanvas()},handleSubmit(){console.log(this.formValue),this.formValue=""}},setup(){return{utils:b()}},mounted(){window.addEventListener("scroll",this.handleSticky)}},kt={class:"container-fluid"},wt={class:"mega-menu-wrapper p-relative"},Ct={class:"row align-items-center"},bt={class:"col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-sm-5 col-8"},gt={class:"logo"},xt=t("img",{src:O,alt:"logo"},null,-1),$t={class:"col-xxl-6 col-xl-7 d-none d-xl-block"},yt={class:"main-menu main-menu-13 pl-45 main-menu-ff-space"},St={id:"mobile-menu-3"},Mt={class:"col-xxl-5 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4"},Vt={class:"header__bottom-right-13 d-flex justify-content-end align-items-center pl-30"},Lt={class:"header__search-13"},jt={class:"header__search-input-13 d-none d-xxl-block"},Bt=t("button",{type:"submit"},[t("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M8.12492 15.2498C12.0599 15.2498 15.2498 12.0599 15.2498 8.12492C15.2498 4.18994 12.0599 1 8.12492 1C4.18994 1 1 4.18994 1 8.12492C1 12.0599 4.18994 15.2498 8.12492 15.2498Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M15.9999 16L14.4999 14.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Ot={class:"header__action-13 d-none d-md-block"},Zt=C('<li class="d-xxl-none"><a href="#"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12492 15.2498C12.0599 15.2498 15.2498 12.0599 15.2498 8.12492C15.2498 4.18994 12.0599 1 8.12492 1C4.18994 1 1 4.18994 1 8.12492C1 12.0599 4.18994 15.2498 8.12492 15.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9999 16L14.4999 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li>',1),Ht=t("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M17.0001 19V17C17.0001 15.9391 16.5787 14.9217 15.8285 14.1716C15.0784 13.4214 14.061 13 13.0001 13H5.00012C3.93926 13 2.92184 13.4214 2.17169 14.1716C1.42155 14.9217 1.00012 15.9391 1.00012 17V19",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M9.00012 9C11.2093 9 13.0001 7.20914 13.0001 5C13.0001 2.79086 11.2093 1 9.00012 1C6.79098 1 5.00012 2.79086 5.00012 5C5.00012 7.20914 6.79098 9 9.00012 9Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),qt=t("svg",{width:"23",height:"20",viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M20.0461 2.59133C19.5419 2.08683 18.9431 1.68663 18.2842 1.41358C17.6252 1.14054 16.9189 1 16.2056 1C15.4923 1 14.786 1.14054 14.127 1.41358C13.468 1.68663 12.8693 2.08683 12.365 2.59133L11.3185 3.63785L10.272 2.59133C9.25342 1.57276 7.87194 1.00053 6.43146 1.00053C4.99098 1.00053 3.6095 1.57276 2.59092 2.59133C1.57235 3.6099 1.00012 4.99139 1.00012 6.43187C1.00012 7.87235 1.57235 9.25383 2.59092 10.2724L3.63745 11.3189L11.3185 19L18.9996 11.3189L20.0461 10.2724C20.5506 9.76814 20.9508 9.16942 21.2239 8.51045C21.4969 7.85148 21.6374 7.14517 21.6374 6.43187C21.6374 5.71857 21.4969 5.01225 21.2239 4.35328C20.9508 3.69431 20.5506 3.09559 20.0461 2.59133V2.59133Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Nt=t("span",{class:"tp-item-count"},"7",-1),Tt=C('<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.85739 19C8.33077 19 8.71453 18.6163 8.71453 18.1429C8.71453 17.6695 8.33077 17.2857 7.85739 17.2857C7.384 17.2857 7.00024 17.6695 7.00024 18.1429C7.00024 18.6163 7.384 19 7.85739 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.286 19C17.7594 19 18.1431 18.6163 18.1431 18.1429C18.1431 17.6695 17.7594 17.2857 17.286 17.2857C16.8126 17.2857 16.4288 17.6695 16.4288 18.1429C16.4288 18.6163 16.8126 19 17.286 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.00012 1H4.42869L6.72584 12.4771C6.80422 12.8718 7.0189 13.2263 7.3323 13.4785C7.64571 13.7308 8.03786 13.8649 8.44012 13.8571H16.7716C17.1738 13.8649 17.566 13.7308 17.8794 13.4785C18.1928 13.2263 18.4075 12.8718 18.4858 12.4771L19.8573 5.28571H5.28584" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="tp-item-count">3</span>',2),Et=[Tt],Ut={class:"header__hamburger ml-30 d-xl-none"},Dt=t("span",null,null,-1),Ft=t("span",null,null,-1),Yt=t("span",null,null,-1),zt=[Dt,Ft,Yt];function Gt(d,e,h,n,c,r){const o=w,u=m("menus"),g=m("cart-mini-sidebar"),x=m("off-canvas-six");return f(),v(k,null,[t("header",null,[t("div",{class:_(`header__area ${h.style_2?"":"header__transparent"}`)},[t("div",{class:_(`header__bottom-13 header__padding-7 header__black-3 header__bottom-border-4
      ${h.style_2?"header__bottom-13-white":"grey-bg-17"} header__sticky ${c.isSticky?"header-sticky":""}`),id:"header-sticky"},[t("div",kt,[t("div",wt,[t("div",Ct,[t("div",bt,[t("div",gt,[s(o,{href:"/"},{default:i(()=>[xt]),_:1})])]),t("div",$t,[t("div",yt,[t("nav",St,[s(u)])])]),t("div",Mt,[t("div",Vt,[t("div",Lt,[t("form",{onSubmit:e[1]||(e[1]=y((...l)=>r.handleSubmit&&r.handleSubmit(...l),["prevent"]))},[t("div",jt,[S(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>c.formValue=l),type:"text",placeholder:"Search for products..."},null,512),[[M,c.formValue]]),Bt])],32)]),t("div",Ot,[t("ul",null,[Zt,t("li",null,[s(o,{href:"/login"},{default:i(()=>[Ht]),_:1})]),t("li",null,[s(o,{href:"/wishlist"},{default:i(()=>[qt,Nt]),_:1})]),t("li",null,[t("button",{onClick:e[2]||(e[2]=l=>n.utils.setIsCartMiniOpen()),class:"cartmini-open-btn"},Et)])])]),t("div",Ut,[t("button",{onClick:e[3]||(e[3]=(...l)=>r.handleOpenSidebar&&r.handleOpenSidebar(...l)),type:"button",class:"hamburger-btn hamburger-btn-black offcanvas-open-btn"},zt)])])])])])])],2)],2)]),s(g),s(x,{ref:"off_canvas"},null,512)],64)}const Wt=p(vt,[["render",Gt]]);export{Wt as default};