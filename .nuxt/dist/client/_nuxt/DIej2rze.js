import{C as f,S as g}from"./BaKSCP9g.js";import{_ as v}from"./D1SgFtEg.js";import{u as b}from"./DTqaWeuG.js";import{u as C}from"./C8tfO-u5.js";import{u as w}from"./BPgolF6k.js";import{S as y}from"./2AyXStO6.js";import{_ as I,K as S,r as c,o as i,c as l,b as t,e as _,w as n,F as p,d as h,G as A,D as d,H as k,I as B}from"./OmrnE3d5.js";const x=""+new URL("testimonial-bg-1.DQd9tTgH.png",import.meta.url).href,F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgBrZaBUcMwDEV/MgGdgI5QNjAbsAGwQTcII7ACG7BBsgHZoN4AmMBIjSg+N1yt7767nOM0epEV106HFVJKN9JsrRu7rvuCE8ohQUGOMZ2j13aogHbIj0O6zHDh4ZyjMvCXx4aHnzuks00+PtPyfq/i6OUI8KGB++JagI+TQxOomlwF5WugHb1l40VLfpv1aYcmEMGxyc4jODaawASOvOwTOHa9rFBTg+BIi6O39hl8GdHiOCYgI4jS3OP/Ueg6/l5ci3mHdXTlXTIzA5b/tc7ybzlmC9R3Pma33slDZ6zgcaCWtGwyp5UMBGuOHhwz2pm9CYTs/A0cgXZIyQ5WugNI1hxVFZCAJ/x93VCjpx221TaNnnbonp0FKu5dj3ZY4EcWuIcT2mElywNf4IRyWMZDWj6ZkrUPcNDkkBtfs4xHHQWcNDmsbBoUQOJ1/AC05beuGt9++gAAAABJRU5ErkJggg==",N=S({components:{Carousel:f,Slide:g},mixins:[y],data(){return{currentSlide:1,testimonial_items:[{id:1,desc:"“Thank you guys for your excellent efforts and commitment in assisting us in our project! I would like to express my thanks for the work you have done!”",name:"Cody Fisher",designation:"Fonder of Incredible"},{id:2,desc:"“There are many variations passages Lorem Ipsum available the   majority suffered alteration in some form by injected humour look embarrassing in middle”",name:"Cody Fisher",designation:"Fonder of Incredible"},{id:3,desc:"“Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore est aliquid repellat.”",name:"Cody Fisher",designation:"Fonder of Incredible"},{id:4,desc:"“Quia dolore eosaut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.”",name:"Cody Fisher",designation:"Fonder of Incredible"}],testimonial_thumbs:[{id:0,thumb:v},{id:1,thumb:b},{id:2,thumb:C},{id:3,thumb:w}]}},methods:{slideTo(e){this.currentSlide=e},handlePrev(){var e;(e=this.$refs.slider_1)==null||e.prev()},handleNext(){var e;(e=this.$refs.slider_1)==null||e.next()}}}),a=e=>(k("data-v-b6c61f96"),e=e(),B(),e),T={class:"testimonial__area black-bg-12 pt-145 pb-100"},U={class:"container"},V={class:"row justify-content-center"},j={class:"col-xxl-12"},H={class:"testimonial__wrapper-8 z-index-1 p-relative pl-200 pr-200"},O=a(()=>t("div",{class:"testimonial__shape"},[t("img",{class:"testimonial__shape-8",src:x,alt:""})],-1)),Q={class:"testimonial__slider p-relative","data-sal":"slide-up","data-sal-delay":"130","data-sal-duration":"1000"},E={class:"testimonial__slider-active-8 swiper-container"},G={class:"testimonial__content-8 text-center"},D=a(()=>t("div",{class:"testimonial__shape-quote-8"},[t("img",{src:F,alt:""})],-1)),M={class:"testimonial__avater-info-8"},Z={class:"testimonial__avater-title-8"},q={class:"testimonial__avater-designation-8"},R=["onClick"],W=["src"],P=a(()=>t("div",{class:"testimonial-slider-dot-8 tp-swiper-dot tp-swiper-dot-2 text-center d-md-none"},null,-1)),$={class:"testimonial__slider-arrow-8 d-none d-md-block"},z=a(()=>t("i",{class:"fa-regular fa-chevron-left"},null,-1)),J=[z],X=a(()=>t("i",{class:"fa-regular fa-chevron-right"},null,-1)),Y=[X];function K(e,o,L,ee,te,se){const m=c("Slide"),u=c("Carousel");return i(),l("section",T,[t("div",U,[t("div",V,[t("div",j,[t("div",H,[O,t("div",Q,[t("div",E,[_(u,{ref:"slider_1",id:"gallery","items-to-show":1,"wrap-around":!0,modelValue:e.currentSlide,"onUpdate:modelValue":o[0]||(o[0]=s=>e.currentSlide=s)},{default:n(()=>[(i(!0),l(p,null,h(e.testimonial_items,(s,r)=>(i(),A(m,{key:r,class:"testimonial__item-8"},{default:n(()=>[t("div",G,[D,t("p",null,d(s.desc),1),t("div",M,[t("h3",Z,d(s.name),1),t("span",q,d(s.designation),1)])])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_(u,{id:"thumbnails","items-to-show":3,"wrap-around":!0,modelValue:e.currentSlide,"onUpdate:modelValue":o[1]||(o[1]=s=>e.currentSlide=s),ref:"carousel",class:"testimonial__slider-8-thumb"},{default:n(()=>[(i(!0),l(p,null,h(e.testimonial_thumbs,(s,r)=>(i(),A(m,{key:r,class:"testimonial__avater-8 text-center"},{default:n(()=>[t("div",{onClick:oe=>e.slideTo(s.id),class:"testimonial__avater-thumb-8"},[t("img",{src:s.thumb,alt:"thumb"},null,8,W)],8,R)]),_:2},1024))),128))]),_:1},8,["modelValue"]),P]),t("div",$,[t("button",{onClick:o[2]||(o[2]=(...s)=>e.handlePrev&&e.handlePrev(...s)),class:"testimonial-8-button-prev"},J),t("button",{onClick:o[3]||(o[3]=(...s)=>e.handleNext&&e.handleNext(...s)),class:"testimonial-8-button-next"},Y)])])])])])])}const ue=I(N,[["render",K],["__scopeId","data-v-b6c61f96"]]);export{ue as A};
