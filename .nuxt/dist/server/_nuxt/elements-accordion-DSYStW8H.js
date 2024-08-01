import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { A as AboutFaqs } from "./AboutFaqs-B3_2OXWY.js";
import { C as CommonFaq } from "./CommonFaq-CQBj1OmV.js";
import { F as FaqArea } from "./FaqArea-BonSw-10.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { c as commonFaq } from "./commonFaq-BjwOp-Jz.js";
import { T as TabContent } from "./TabContent-C8LU6M_9.js";
import { S as SingleFaq } from "./SingleFaq-CsPiM7Uv.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import Footer from "./Footer-85SZoxrw.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "klona";
import "devalue";
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./VideoModal-yOQUjk9s.js";
import "sal.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$5 = {
  mixins: [SalScrollAnimationMixin]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq__area faq__style-3 p-relative z-index-1 pt-105 pb-115" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="faq__wrapper" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="section__title-wrapper-7 mb-60"><span class="section__title-pre-7">Tab Accordion</span><h3 class="section__title-7">Accordion <br><span class="section__title-7-highlight"> square bordered <svg width="240" height="22" viewBox="0 0 240 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="#2CAE76"></path></svg></span></h3></div><div class="faq__tab tp-tab pr-200"><nav><div class="nav nav-tabs flex-column" id="nav-tab-2" role="tablist"><button class="nav-link active" id="nav-general-2-tab" data-bs-toggle="tab" data-bs-target="#nav-general-2" type="button" role="tab" aria-controls="nav-general-2" aria-selected="true"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.318 1.74134L2.467 5.52653C1.657 6.1574 1 7.50024 1 8.51863V15.1968C1 17.2877 2.701 19 4.789 19H15.211C17.299 19 19 17.2877 19 15.2058V8.6448C19 7.55431 18.271 6.1574 17.38 5.53554L11.818 1.63319C10.558 0.749983 8.533 0.795045 7.318 1.74134Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 15.3951V12.6914" stroke="currentColor" opacity=".4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> General Questions </button><button class="nav-link" id="nav-community-2-tab" data-bs-toggle="tab" data-bs-target="#nav-community-2" type="button" role="tab" aria-controls="nav-community-2" aria-selected="false"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M4 17C5.65685 17 7 15.6569 7 14C7 12.3431 5.65685 11 4 11C2.34315 11 1 12.3431 1 14C1 15.6569 2.34315 17 4 17Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 5.65685 12.3431 7 14 7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> Community </button><button class="nav-link" id="nav-support-2-tab" data-bs-toggle="tab" data-bs-target="#nav-support-2" type="button" role="tab" aria-controls="nav-support-2" aria-selected="false"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.822 14.3465L16.173 17.1903C16.2629 17.9373 15.462 18.4593 14.823 18.0723L11.0522 15.8314C10.6382 15.8314 10.2332 15.8044 9.83721 15.7504C10.5032 14.9675 10.8992 13.9775 10.8992 12.9065C10.8992 10.3506 8.68525 8.28073 5.94936 8.28073C4.9054 8.28073 3.94244 8.5777 3.14148 9.09968C3.11448 8.87469 3.10547 8.64969 3.10547 8.4157C3.10547 4.32086 6.66033 1 11.0522 1C15.444 1 18.9988 4.32086 18.9988 8.4157C18.9988 10.8456 17.7479 12.9965 15.822 14.3465Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M10.8996 12.907C10.8996 13.978 10.5036 14.968 9.83765 15.7509C8.94669 16.8309 7.53374 17.5238 5.9498 17.5238L3.6009 18.9188C3.20491 19.1618 2.70093 18.8288 2.75493 18.3698L2.97992 16.5969C1.77397 15.7599 1 14.419 1 12.907C1 11.3231 1.84597 9.92816 3.14192 9.10019C3.94289 8.57821 4.90584 8.28125 5.9498 8.28125C8.68569 8.28125 10.8996 10.3511 10.8996 12.907Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> Support </button></div></nav></div></div></div><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="faq__tab-content tp-accordion" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"><div class="tab-content" id="nav-tabContent"><div class="tab-pane fade show active" id="nav-general-2" role="tabpanel" aria-labelledby="nav-general-2-tab"><div class="accordion" id="general_accordion_2"><div class="accordion-item"><h2 class="accordion-header" id="headingOne2_1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2_1" aria-expanded="true" aria-controls="collapseOne2_1"> Global search engine optimization </button></h2><div id="collapseOne2_1" class="accordion-collapse collapse show" aria-labelledby="headingOne2_1" data-bs-parent="#general_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo2_1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2_1" aria-expanded="false" aria-controls="collapseTwo2_1"> Complete Social Media Integration </button></h2><div id="collapseTwo2_1" class="accordion-collapse collapse" aria-labelledby="headingTwo2_1" data-bs-parent="#general_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree2_1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2_1" aria-expanded="false" aria-controls="collapseThree2_1"> Branding Strategy for startups </button></h2><div id="collapseThree2_1" class="accordion-collapse collapse" aria-labelledby="headingThree2_1" data-bs-parent="#general_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour2_1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2_1" aria-expanded="false" aria-controls="collapseFour2_1"> How long do I get support &amp; updates? </button></h2><div id="collapseFour2_1" class="accordion-collapse collapse" aria-labelledby="headingFour2_1" data-bs-parent="#general_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div><div class="tab-pane fade" id="nav-community-2" role="tabpanel" aria-labelledby="nav-community-2-tab"><div class="accordion" id="community_accordion_2"><div class="accordion-item"><h2 class="accordion-header" id="headingOne1_2"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1_2" aria-expanded="true" aria-controls="collapseOne1_2"> What kind of marketing efforts do you specialize in? </button></h2><div id="collapseOne1_2" class="accordion-collapse collapse show" aria-labelledby="headingOne1_2" data-bs-parent="#community_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo2_2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2_2" aria-expanded="false" aria-controls="collapseTwo2_2"> What is video marketing and why do I need it? </button></h2><div id="collapseTwo2_2" class="accordion-collapse collapse" aria-labelledby="headingTwo2_2" data-bs-parent="#community_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree2_2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2_2" aria-expanded="false" aria-controls="collapseThree2_2"> Does my business really need digital marketing? </button></h2><div id="collapseThree2_2" class="accordion-collapse collapse" aria-labelledby="headingThree2_2" data-bs-parent="#community_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour2_2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2_2" aria-expanded="false" aria-controls="collapseFour2_2"> Do you offer startup packages? </button></h2><div id="collapseFour2_2" class="accordion-collapse collapse" aria-labelledby="headingFour2_2" data-bs-parent="#community_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div><div class="tab-pane fade" id="nav-support-2" role="tabpanel" aria-labelledby="nav-support-2-tab"><div class="accordion" id="support_accordion_2"><div class="accordion-item"><h2 class="accordion-header" id="headingOne3_2"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3_2"> Who is the typical Curious client? </button></h2><div id="collapseOne3_2" class="accordion-collapse collapse show" aria-labelledby="headingOne3_2" data-bs-parent="#support_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo3_2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3_2" aria-expanded="false" aria-controls="collapseTwo3_2"> What are your typical timelines? </button></h2><div id="collapseTwo3_2" class="accordion-collapse collapse" aria-labelledby="headingTwo3_2" data-bs-parent="#support_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree3_2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3_2" aria-expanded="false" aria-controls="collapseThree3_2"> Do you offer flexible payment terms? </button></h2><div id="collapseThree3_2" class="accordion-collapse collapse" aria-labelledby="headingThree3_2" data-bs-parent="#support_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour3_2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour3_2" aria-expanded="false" aria-controls="collapseFour3_2"> Do you trade services for equity? </button></h2><div id="collapseFour3_2" class="accordion-collapse collapse" aria-labelledby="headingFour3_2" data-bs-parent="#support_accordion_2"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-accordion/AccordionSquaredBorder.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AccordionSquaredBorder = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  mixins: [commonFaq]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accordion__area faq__style-3 pt-110 pb-105" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-65 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Bordered Accordion</h3></div></div></div><div class="row"><div class="col-xl-12"><div class="faq__tab-content tp-accordion"><div class="accordion" id="general_accordion_p"><div class="accordion-item"><h2 class="accordion-header" id="headingOne_p"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne_p" aria-expanded="true" aria-controls="collapseOne_p"> Can I cancel my account at any time? </button></h2><div id="collapseOne_p" class="accordion-collapse collapse show" aria-labelledby="headingOne_p" data-bs-parent="#general_accordion_p"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo_p"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo_p" aria-expanded="false" aria-controls="collapseTwo_p"> What happens after the license expires? </button></h2><div id="collapseTwo_p" class="accordion-collapse collapse" aria-labelledby="headingTwo_p" data-bs-parent="#general_accordion_p"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree_p"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree_p" aria-expanded="false" aria-controls="collapseThree_p"> Does Harry have any documentations? </button></h2><div id="collapseThree_p" class="accordion-collapse collapse" aria-labelledby="headingThree_p" data-bs-parent="#general_accordion_p"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour_p"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour_p" aria-expanded="false" aria-controls="collapseFour_p"> How long do I get support &amp; updates? </button></h2><div id="collapseFour_p" class="accordion-collapse collapse" aria-labelledby="headingFour_p" data-bs-parent="#general_accordion_p"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-accordion/BorderedAccordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BorderedAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: { TabContent },
  mixins: [commonFaq]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq__area p-relative z-index-1 pt-120 pb-105" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="faq__wrapper"><div class="section__title-wrapper-7 mb-60"><span class="section__title-pre-7">Tab Accordion</span><h3 class="section__title-7">Accordion <br> with <span class="section__title-7-highlight"> rounded tab <svg width="240" height="22" viewBox="0 0 240 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="#2CAE76"></path></svg></span></h3></div><div class="faq__tab tp-tab pr-200"><nav><div class="nav nav-tabs flex-column" id="nav-tab" role="tablist"><button class="nav-link active" id="nav-general-tab-2" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="true"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.318 1.74134L2.467 5.52653C1.657 6.1574 1 7.50024 1 8.51863V15.1968C1 17.2877 2.701 19 4.789 19H15.211C17.299 19 19 17.2877 19 15.2058V8.6448C19 7.55431 18.271 6.1574 17.38 5.53554L11.818 1.63319C10.558 0.749983 8.533 0.795045 7.318 1.74134Z" stroke="#525258" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 15.3951V12.6914" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> General Questions </button><button class="nav-link" id="nav-community-tab-2" data-bs-toggle="tab" data-bs-target="#nav-community" type="button" role="tab" aria-controls="nav-community" aria-selected="false"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke="#525258" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon-color-theme" d="M4 17C5.65685 17 7 15.6569 7 14C7 12.3431 5.65685 11 4 11C2.34315 11 1 12.3431 1 14C1 15.6569 2.34315 17 4 17Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z" stroke="#525258" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon-color-theme" d="M14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 5.65685 12.3431 7 14 7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> Community </button><button class="nav-link" id="nav-support-tab-2" data-bs-toggle="tab" data-bs-target="#nav-support" type="button" role="tab" aria-controls="nav-support" aria-selected="false"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.822 14.3465L16.173 17.1903C16.2629 17.9373 15.462 18.4593 14.823 18.0723L11.0522 15.8314C10.6382 15.8314 10.2332 15.8044 9.83721 15.7504C10.5032 14.9675 10.8992 13.9775 10.8992 12.9065C10.8992 10.3506 8.68525 8.28073 5.94936 8.28073C4.9054 8.28073 3.94244 8.5777 3.14148 9.09968C3.11448 8.87469 3.10547 8.64969 3.10547 8.4157C3.10547 4.32086 6.66033 1 11.0522 1C15.444 1 18.9988 4.32086 18.9988 8.4157C18.9988 10.8456 17.7479 12.9965 15.822 14.3465Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon-color-theme" d="M10.8996 12.907C10.8996 13.978 10.5036 14.968 9.83765 15.7509C8.94669 16.8309 7.53374 17.5238 5.9498 17.5238L3.6009 18.9188C3.20491 19.1618 2.70093 18.8288 2.75493 18.3698L2.97992 16.5969C1.77397 15.7599 1 14.419 1 12.907C1 11.3231 1.84597 9.92816 3.14192 9.10019C3.94289 8.57821 4.90584 8.28125 5.9498 8.28125C8.68569 8.28125 10.8996 10.3511 10.8996 12.907Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> Support </button></div></nav></div></div></div><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="faq__tab-content tp-accordion"><div class="tab-content" id="nav-tabContent-2"><div class="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab-2"><div class="accordion" id="general_accordion"><div class="accordion-item"><h2 class="accordion-header" id="search"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesearch" aria-expanded="true" aria-controls="collapsesearch"> Global search engine optimization </button></h2><div id="collapsesearch" class="accordion-collapse collapse show" aria-labelledby="search" data-bs-parent="#general_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="social"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesocial" aria-expanded="false" aria-controls="collapsesocial"> Complete Social Media Integration </button></h2><div id="collapsesocial" class="accordion-collapse collapse" aria-labelledby="social" data-bs-parent="#general_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="branding"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsebranding" aria-expanded="false" aria-controls="collapsebranding"> Branding Strategy for startups </button></h2><div id="collapsebranding" class="accordion-collapse collapse" aria-labelledby="branding" data-bs-parent="#general_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="long"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapselong" aria-expanded="false" aria-controls="collapselong"> How long do I get support &amp; updates? </button></h2><div id="collapselong" class="accordion-collapse collapse" aria-labelledby="long" data-bs-parent="#general_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div><div class="tab-pane fade" id="nav-community" role="tabpanel" aria-labelledby="nav-community-tab-2"><div class="accordion" id="community_accordion"><div class="accordion-item"><h2 class="accordion-header" id="headingOne1"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1"> What kind of marketing efforts do you specialize in? </button></h2><div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#community_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2"> What is video marketing and why do I need it? </button></h2><div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#community_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2"> Does my business really need digital marketing? </button></h2><div id="collapseThree2" class="accordion-collapse collapse" aria-labelledby="headingThree2" data-bs-parent="#community_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2"> Do you offer startup packages? </button></h2><div id="collapseFour2" class="accordion-collapse collapse" aria-labelledby="headingFour2" data-bs-parent="#community_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div><div class="tab-pane fade" id="nav-support" role="tabpanel" aria-labelledby="nav-support-tab-2"><div class="accordion" id="support_accordion"><div class="accordion-item"><h2 class="accordion-header" id="headingOne3"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3"> Who is the typical Curious client? </button></h2><div id="collapseOne3" class="accordion-collapse collapse show" aria-labelledby="headingOne3" data-bs-parent="#support_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo3"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3"> What are your typical timelines? </button></h2><div id="collapseTwo3" class="accordion-collapse collapse" aria-labelledby="headingTwo3" data-bs-parent="#support_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree3"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3"> Do you offer flexible payment terms? </button></h2><div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#support_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour3"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour3" aria-expanded="false" aria-controls="collapseFour3"> Do you trade services for equity? </button></h2><div id="collapseFour3" class="accordion-collapse collapse" aria-labelledby="headingFour3" data-bs-parent="#support_accordion"><div class="accordion-body"><p>A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...</p></div></div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-accordion/TabAccordion.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TabAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { SingleFaq },
  mixins: [commonFaq]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_faq = resolveComponent("single-faq");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "accordion__area pt-110 pb-85" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-30 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Underline Accordion</h3></div></div></div><div class="row"><div class="col-xl-12"><div class="faq__wrapper tp-accordion"><div class="accordion" id="faqaccordion"><!--[-->`);
  ssrRenderList(_ctx.faq_items, (item, i) => {
    _push(ssrRenderComponent(_component_single_faq, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-accordion/UnderlineAccordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UnderlineAccordion = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    UnderlineAccordion,
    TabAccordion,
    AboutFaqs,
    CommonFaq,
    BorderedAccordion,
    FaqArea,
    AccordionSquaredBorder
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_underline_accordion = resolveComponent("underline-accordion");
  const _component_tab_accordion = resolveComponent("tab-accordion");
  const _component_about_faqs = resolveComponent("about-faqs");
  const _component_accordion_squared_border = resolveComponent("accordion-squared-border");
  const _component_bordered_accordion = resolveComponent("bordered-accordion");
  const _component_faq_area = resolveComponent("faq-area");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our accordion",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_underline_accordion, null, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_tab_accordion, null, null, _parent));
  _push(ssrRenderComponent(_component_about_faqs, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_accordion_squared_border, null, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_bordered_accordion, null, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_faq_area, { el_style: true }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-accordion/ElementsAccordionMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsAccordionMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsAccordionMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Accordion - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_accordion_main = resolveComponent("elements-accordion-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_accordion_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsAccordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsAccordion as default
};
//# sourceMappingURL=elements-accordion-DSYStW8H.js.map
