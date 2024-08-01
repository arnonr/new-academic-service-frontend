import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { F as FaqArea } from "./FaqArea-BonSw-10.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
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
import "./SingleFaq-CsPiM7Uv.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-8 p-relative include-bg pt-110 pb-50" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-10"><div class="breadcrumb__content text-center p-relative z-index-1"><h3 class="breadcrumb__title">Frequently Asked Questions</h3><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>Frequently Asked Questions</span></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/FaqBreadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FaqBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + __buildAssetsURL("faq-img-2.Dme90Pad.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq__thumb-area" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="faq__thumb w-img"><img${ssrRenderAttr("src", _imports_0)} alt="faq img"></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faqs/FaqThumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FaqThumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    FaqBreadcrumb,
    FaqThumb,
    FaqArea,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Faq - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_faq_breadcrumb = resolveComponent("faq-breadcrumb");
  const _component_faq_thumb = resolveComponent("faq-thumb");
  const _component_faq_area = resolveComponent("faq-area");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_faq_breadcrumb, null, null, _parent));
  _push(ssrRenderComponent(_component_faq_thumb, null, null, _parent));
  _push(ssrRenderComponent(_component_faq_area, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  faq as default
};
//# sourceMappingURL=faq-DZ5NiMmZ.js.map
