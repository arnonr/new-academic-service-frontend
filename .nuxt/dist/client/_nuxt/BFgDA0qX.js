import{g as R,f as j,n as A,j as I}from"./DxzZJF1W.js";import{c as B}from"./CFABdoD6.js";function U({swiper:l,extendParams:x,on:d,emit:g}){const y=R();let b=!1,C=null,v=null,p,n,i,h;x({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),l.scrollbar={el:null,dragEl:null};function u(){if(!l.params.scrollbar.el||!l.scrollbar.el)return;const{scrollbar:a,rtlTranslate:r}=l,{dragEl:t,el:s}=a,e=l.params.scrollbar,c=l.params.loop?l.progressLoop:l.progress;let f=n,o=(i-n)*c;r?(o=-o,o>0?(f=n-o,o=0):-o+n>i&&(f=i+o)):o<0?(f=n+o,o=0):o+n>i&&(f=i-o),l.isHorizontal()?(t.style.transform=`translate3d(${o}px, 0, 0)`,t.style.width=`${f}px`):(t.style.transform=`translate3d(0px, ${o}px, 0)`,t.style.height=`${f}px`),e.hide&&(clearTimeout(C),s.style.opacity=1,C=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function k(a){!l.params.scrollbar.el||!l.scrollbar.el||(l.scrollbar.dragEl.style.transitionDuration=`${a}ms`)}function m(){if(!l.params.scrollbar.el||!l.scrollbar.el)return;const{scrollbar:a}=l,{dragEl:r,el:t}=a;r.style.width="",r.style.height="",i=l.isHorizontal()?t.offsetWidth:t.offsetHeight,h=l.size/(l.virtualSize+l.params.slidesOffsetBefore-(l.params.centeredSlides?l.snapGrid[0]:0)),l.params.scrollbar.dragSize==="auto"?n=i*h:n=parseInt(l.params.scrollbar.dragSize,10),l.isHorizontal()?r.style.width=`${n}px`:r.style.height=`${n}px`,h>=1?t.style.display="none":t.style.display="",l.params.scrollbar.hide&&(t.style.opacity=0),l.params.watchOverflow&&l.enabled&&a.el.classList[l.isLocked?"add":"remove"](l.params.scrollbar.lockClass)}function E(a){return l.isHorizontal()?a.clientX:a.clientY}function S(a){const{scrollbar:r,rtlTranslate:t}=l,{el:s}=r;let e;e=(E(a)-I(s)[l.isHorizontal()?"left":"top"]-(p!==null?p:n/2))/(i-n),e=Math.max(Math.min(e,1),0),t&&(e=1-e);const c=l.minTranslate()+(l.maxTranslate()-l.minTranslate())*e;l.updateProgress(c),l.setTranslate(c),l.updateActiveIndex(),l.updateSlidesClasses()}function H(a){const r=l.params.scrollbar,{scrollbar:t,wrapperEl:s}=l,{el:e,dragEl:c}=t;b=!0,p=a.target===c?E(a)-a.target.getBoundingClientRect()[l.isHorizontal()?"left":"top"]:null,a.preventDefault(),a.stopPropagation(),s.style.transitionDuration="100ms",c.style.transitionDuration="100ms",S(a),clearTimeout(v),e.style.transitionDuration="0ms",r.hide&&(e.style.opacity=1),l.params.cssMode&&(l.wrapperEl.style["scroll-snap-type"]="none"),g("scrollbarDragStart",a)}function P(a){const{scrollbar:r,wrapperEl:t}=l,{el:s,dragEl:e}=r;b&&(a.preventDefault?a.preventDefault():a.returnValue=!1,S(a),t.style.transitionDuration="0ms",s.style.transitionDuration="0ms",e.style.transitionDuration="0ms",g("scrollbarDragMove",a))}function $(a){const r=l.params.scrollbar,{scrollbar:t,wrapperEl:s}=l,{el:e}=t;b&&(b=!1,l.params.cssMode&&(l.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),r.hide&&(clearTimeout(v),v=A(()=>{e.style.opacity=0,e.style.transitionDuration="400ms"},1e3)),g("scrollbarDragEnd",a),r.snapOnRelease&&l.slideToClosest())}function T(a){const{scrollbar:r,params:t}=l,s=r.el;if(!s)return;const e=s,c=t.passiveListeners?{passive:!1,capture:!1}:!1,f=t.passiveListeners?{passive:!0,capture:!1}:!1;if(!e)return;const o=a==="on"?"addEventListener":"removeEventListener";e[o]("pointerdown",H,c),y[o]("pointermove",P,c),y[o]("pointerup",$,f)}function M(){!l.params.scrollbar.el||!l.scrollbar.el||T("on")}function O(){!l.params.scrollbar.el||!l.scrollbar.el||T("off")}function D(){const{scrollbar:a,el:r}=l;l.params.scrollbar=B(l,l.originalParams.scrollbar,l.params.scrollbar,{el:"swiper-scrollbar"});const t=l.params.scrollbar;if(!t.el)return;let s;typeof t.el=="string"&&l.isElement&&(s=l.el.shadowRoot.querySelector(t.el)),!s&&typeof t.el=="string"?s=y.querySelectorAll(t.el):s||(s=t.el),l.params.uniqueNavElements&&typeof t.el=="string"&&s.length>1&&r.querySelectorAll(t.el).length===1&&(s=r.querySelector(t.el)),s.length>0&&(s=s[0]),s.classList.add(l.isHorizontal()?t.horizontalClass:t.verticalClass);let e;s&&(e=s.querySelector(`.${l.params.scrollbar.dragClass}`),e||(e=j("div",l.params.scrollbar.dragClass),s.append(e))),Object.assign(a,{el:s,dragEl:e}),t.draggable&&M(),s&&s.classList[l.enabled?"remove":"add"](l.params.scrollbar.lockClass)}function z(){const a=l.params.scrollbar,r=l.scrollbar.el;r&&r.classList.remove(l.isHorizontal()?a.horizontalClass:a.verticalClass),O()}d("init",()=>{l.params.scrollbar.enabled===!1?L():(D(),m(),u())}),d("update resize observerUpdate lock unlock",()=>{m()}),d("setTranslate",()=>{u()}),d("setTransition",(a,r)=>{k(r)}),d("enable disable",()=>{const{el:a}=l.scrollbar;a&&a.classList[l.enabled?"remove":"add"](l.params.scrollbar.lockClass)}),d("destroy",()=>{z()});const q=()=>{l.el.classList.remove(l.params.scrollbar.scrollbarDisabledClass),l.scrollbar.el&&l.scrollbar.el.classList.remove(l.params.scrollbar.scrollbarDisabledClass),D(),m(),u()},L=()=>{l.el.classList.add(l.params.scrollbar.scrollbarDisabledClass),l.scrollbar.el&&l.scrollbar.el.classList.add(l.params.scrollbar.scrollbarDisabledClass),z()};Object.assign(l.scrollbar,{enable:q,disable:L,updateSize:m,setTranslate:u,init:D,destroy:z})}export{U as S};
