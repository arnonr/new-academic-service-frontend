import{_ as u,o as s,c as a,b as t,n as g,F as n,d as l,e as c,w as r,q as f,D as _,E as v,a as x,p as b}from"./OmrnE3d5.js";import{t as w}from"./D69PSW11.js";import{S as k}from"./2AyXStO6.js";const y=""+new URL("team-bg-1.b89jcq5M.png",import.meta.url).href,S={mixins:[w,k],data(){return{bg:y}}},B={class:"team__area team__border p-relative black-bg-12 pt-110 pb-100"},F={class:"container"},A=x('<div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-8 text-center mb-70"><span class="section__title-pre-8">Meet Our Team</span><h3 class="section__title-8"> Professional &amp; <span class="section__title-highlight-8">Friendly <svg width="246" height="26" viewBox="0 0 246 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 23C56.25 15.2537 162.375 -17.8439 243 23" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span></h3></div></div></div>',1),D={class:"row"},M={class:"team__item-8 text-center black-bg-14 mb-30","data-sal":"slide-up","data-sal-delay":"130","data-sal-duration":"1000"},N={class:"team__thumb-8 mb-45"},V=["src"],$={class:"team__content-8"},C={class:"team__title-8"},T={class:"team__designation-8"},j={class:"team__social-8 d-flex flex-wrap align-items-center justify-content-center"},q=["href","target"];function z(d,E,L,I,m,O){const o=b;return s(),a("section",B,[t("div",{class:"team__bg-8",style:g({backgroundImage:`url(${m.bg})`})},null,4),t("div",F,[A,t("div",D,[(s(!0),a(n,null,l(d.teamData.filter(e=>e.home_architecture),(e,h)=>(s(),a("div",{key:h,class:"col-xxl-3 col-xl-3 col-lg-3 col-md-6"},[t("div",M,[t("div",N,[c(o,{href:"/team-details"},{default:r(()=>[t("img",{src:e.img,alt:""},null,8,V)]),_:2},1024)]),t("div",$,[t("h3",C,[c(o,{href:"/team-details"},{default:r(()=>[f(_(e.name),1)]),_:2},1024)]),t("span",T,_(e.title),1),t("div",j,[(s(!0),a(n,null,l(e.social_links,(i,p)=>(s(),a("a",{key:p,href:i.link,target:i.target},[t("i",{class:v(i.icon)},null,2)],8,q))),128))])])])]))),128))])])])}const G=u(S,[["render",z]]);export{G as A};