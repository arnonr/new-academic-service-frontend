import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { i as inst_1, a as inst_2, b as inst_3, c as inst_4, d as inst_5, e as inst_6, f as inst_7, g as inst_8, S as SliderInstagram } from "./SliderInstagram-WOIMISNJ.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$3 = {
  data() {
    return {
      instagram_items: [
        { img: inst_1, link: "https://www.instagram.com/" },
        { img: inst_2, link: "https://www.instagram.com/" },
        { img: inst_3, link: "https://www.instagram.com/" },
        { img: inst_4, link: "https://www.instagram.com/" },
        { img: inst_5, link: "https://www.instagram.com/" },
        { img: inst_6, link: "https://www.instagram.com/" },
        { img: inst_7, link: "https://www.instagram.com/" },
        { img: inst_8, link: "https://www.instagram.com/" }
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "instagram__grid pb-90" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Instagram Grid Style</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.instagram_items, (item, i) => {
    _push(`<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6"><div class="instagram__item w-img mb-30"><img${ssrRenderAttr("src", item.img)} alt="ins img"><div class="instagram__btn"><a${ssrRenderAttr("href", item.link)} target="_blank" class="tp-instagram-btn popup-image"><i class="fa-brands fa-instagram"></i></a></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-instagram/InstagramGridEl.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const InstagramGridEl = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { SliderInstagram }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_slider_instagram = resolveComponent("slider-instagram");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "instagram__slider pt-120 pb-110 box-plr-15" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Instagram Slider Style</h3></div></div></div><div class="row"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_slider_instagram, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-instagram/SliderInstagramEl.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SliderInstagramEl = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { CommonBreadcrumb: TeamBreadcrumb, SliderInstagramEl, InstagramGridEl }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_slider_instagram_el = resolveComponent("slider-instagram-el");
  const _component_instagram_grid_el = resolveComponent("instagram-grid-el");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our instagram style",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_slider_instagram_el, null, null, _parent));
  _push(ssrRenderComponent(_component_instagram_grid_el, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-instagram/ElementsInstagramMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsInstagramMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsInstagramMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element instagram - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_instagram_main = resolveComponent("elements-instagram-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_instagram_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-instagram.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsInstagram = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsInstagram as default
};
//# sourceMappingURL=elements-instagram-DuLILB8J.js.map
