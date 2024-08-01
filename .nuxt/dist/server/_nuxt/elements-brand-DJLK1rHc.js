import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { A as AgencyBrands } from "./AgencyBrands-DAitA-64.js";
import { C as CreativeBrands } from "./CreativeBrands-BFRh7iS1.js";
import { P as PhotographerBrands } from "./PhotographerBrands-DikdFrxy.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { B as BrandSlider } from "./BrandSlider-DfDjinIV.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { A as AwardSliderItems } from "./AwardSliderItems-Dlg5iUQX.js";
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
import "swiper/vue";
import "swiper";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$3 = {
  components: { BrandSlider }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_brand_slider = resolveComponent("brand-slider");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "brand__area pt-110 pb-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Brand Style 1</h3></div></div></div><div class="brand__inner purple-bg"><div class="row justify-content-center"><div class="col-xxl-10 col-xl-9 col-xl-10 col-11"><div class="brand__area"><div class="brand__thumb-wrapper d-sm-flex align-items-center text-center text-sm-start"><h3 class="brand__title">Global Exparts:</h3>`);
  _push(ssrRenderComponent(_component_brand_slider, null, null, _parent));
  _push(`</div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-brands/BrandStyleOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BrandStyleOne = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { AwardSliderItems }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_award_slider_items = resolveComponent("award-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "award__area pb-90" }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-xl-4 col-xl-4 col-lg-4 col-md-4"><div class="award__wrapper-4"><div class="tp-section-wrapper-3 mb-30"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Brand Style 2</h3></div></div></div><div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8"><div class="award__slider">`);
  _push(ssrRenderComponent(_component_award_slider_items, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-brands/BrandStyleTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BrandStyleTwo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    BrandStyleOne,
    BrandStyleTwo,
    PhotographerBrands,
    AgencyBrands,
    CreativeBrands
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_brand_style_one = resolveComponent("brand-style-one");
  const _component_brand_style_two = resolveComponent("brand-style-two");
  const _component_photographer_brands = resolveComponent("photographer-brands");
  const _component_agency_brands = resolveComponent("agency-brands");
  const _component_creative_brands = resolveComponent("creative-brands");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our brand styles",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_brand_style_one, null, null, _parent));
  _push(ssrRenderComponent(_component_brand_style_two, null, null, _parent));
  _push(ssrRenderComponent(_component_photographer_brands, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_agency_brands, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_creative_brands, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_agency_brands, {
    el_style: true,
    square: "brand__style-square"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-brands/ElementsBrandsMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsBrandsMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    Footer,
    BackToTop,
    ElementsBrandsMain
  },
  setup() {
    useHead({
      title: "Element brands - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_brands_main = resolveComponent("elements-brands-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_brands_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-brand.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsBrand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsBrand as default
};
//# sourceMappingURL=elements-brand-DJLK1rHc.js.map
