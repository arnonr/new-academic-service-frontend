import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
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
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$1 = {
  components: { CommonBreadcrumb: TeamBreadcrumb }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our map styles",
    subtitle: "Elements"
  }, null, _parent));
  _push(`<section class="contact__map pt-110"><div class="container-fluid gx-0"><div class="row gx-0"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Contact Map</span><h3 class="tp-section-title-3">Classic Map</h3></div></div></div><div class="row gx-0"><div class="col-xl-12"><div class="contact__map-wrapper contact__map-height"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.658226631064!2d-74.0018723!3d40.7255397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c338f691d%3A0x6d5f394e7a1962cc!2s102%20Thompson%20St%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2sbd!4v1665805047384!5m2!1sen!2sbd"></iframe></div></div></div></div></section><section class="contact__M pt-110 pb-120"><div class="container-fluid gx-0"><div class="row gx-0"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Contact Map</span><h3 class="tp-section-title-3">Black Color Map</h3></div></div></div><div class="row gx-0"><div class="col-xl-12"><div class="contact__map-wrapper contact__map-height contact__map-black"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.658226631064!2d-74.0018723!3d40.7255397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c338f691d%3A0x6d5f394e7a1962cc!2s102%20Thompson%20St%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2sbd!4v1665805047384!5m2!1sen!2sbd"></iframe></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-map/ElementsMapMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsMapMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsMapMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Map - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_map_main = resolveComponent("elements-map-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_map_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsMap as default
};
//# sourceMappingURL=elements-map-DTVgci-Q.js.map
