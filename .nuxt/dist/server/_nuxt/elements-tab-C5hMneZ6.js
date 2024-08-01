import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { P as PersonalPortFeature } from "./PersonalPortFeature-CcZU6heJ.js";
import { P as PhotographerServices } from "./PhotographerServices-yD7QvAgf.js";
import { S as StartUpFeatureList } from "./index-B4sDURB7.js";
import { P as PoliticianVision } from "./PoliticianVision-auPG9Y1w.js";
import { C as CommonFaq } from "./CommonFaq-CQBj1OmV.js";
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
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./components-BjLpLPVr.js";
import "./SingleTabItem-DsMnV-ax.js";
import "./SingleFaq-CsPiM7Uv.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    PersonalPortFeature,
    PhotographerServices,
    StartUpFeatureList,
    PoliticianVision,
    CommonFaq
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_personal_port_feature = resolveComponent("personal-port-feature");
  const _component_photographer_services = resolveComponent("photographer-services");
  const _component_start_up_feature_list = resolveComponent("start-up-feature-list");
  const _component_politician_vision = resolveComponent("politician-vision");
  const _component_common_faq = resolveComponent("common-faq");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our tab style",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_personal_port_feature, null, null, _parent));
  _push(ssrRenderComponent(_component_photographer_services, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_start_up_feature_list, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_politician_vision, null, null, _parent));
  _push(ssrRenderComponent(_component_common_faq, {
    padd: "100",
    padd_2: "120"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-tab/ElTabsMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElTabsMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElTabsMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Tab - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_el_tabs_main = resolveComponent("el-tabs-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_tabs_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-tab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsTab = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsTab as default
};
//# sourceMappingURL=elements-tab-C5hMneZ6.js.map
