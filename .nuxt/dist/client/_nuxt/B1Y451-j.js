import{_ as r,ad as h,c as m,b as e,E as f,e as s,w as n,F as u,a as p,p as v,r as l,o as b,q as k}from"./OmrnE3d5.js";import{O as x}from"./Tv4KVx5U.js";import{_ as g}from"./BQsWh4nP.js";import"./DR6FnRwu.js";import"./DeDvjckw.js";const w={components:{menus:h,OffCanvasFive:x},data(){return{isSticky:!1}},methods:{handleSticky(){window.scrollY>80?this.isSticky=!0:this.isSticky=!1},handleOpenSidebar(){this.$refs.off_canvas.openOffcanvas()}},mounted(){window.addEventListener("scroll",this.handleSticky)}},y={class:"header__area"},S={class:"container-fluid"},O={class:"mega-menu-wrapper p-relative"},C={class:"row align-items-center"},F={class:"col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8"},N={class:"logo"},V=e("img",{src:g,alt:"logo"},null,-1),B={class:"col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block"},E={class:"main-menu main-menu-2 main-menu-3 main-menu-ff-space"},$={id:"mobile-menu"},j={class:"col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"},q={class:"header__bottom-right d-flex justify-content-end align-items-center pl-30"},z=p('<div class="header__social d-none d-xl-block"><ul><li><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li></ul></div>',1),H={class:"header__btn d-none d-lg-block"},L={class:"header__hamburger ml-50 d-lg-none"},T=e("span",null,null,-1),Y=e("span",null,null,-1),A=e("span",null,null,-1),D=[T,Y,A];function G(I,t,J,K,c,o){const a=v,i=l("menus"),d=l("off-canvas-five");return b(),m(u,null,[e("header",null,[e("div",y,[e("div",{class:f(`header__bottom header__bottom-3 header__border-3 header-box-plr-245 header__sticky 
        header__sticky-black ${c.isSticky?"header-sticky":""}`),id:"header-sticky"},[e("div",S,[e("div",O,[e("div",C,[e("div",F,[e("div",N,[s(a,{href:"/"},{default:n(()=>[V]),_:1})])]),e("div",B,[e("div",E,[e("nav",$,[s(i)])])]),e("div",j,[e("div",q,[z,e("div",H,[s(a,{href:"/contact",class:"tp-header-btn"},{default:n(()=>[k("contact")]),_:1})]),e("div",L,[e("button",{onClick:t[0]||(t[0]=(..._)=>o.handleOpenSidebar&&o.handleOpenSidebar(..._)),type:"button",class:"hamburger-btn offcanvas-open-btn"},D)])])])])])])],2)])]),s(d,{ref:"off_canvas"},null,512)],64)}const W=r(w,[["render",G]]);export{W as default};