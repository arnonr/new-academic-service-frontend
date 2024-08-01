import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { A as AboutCta } from "./AboutCta-BKFRSas-.js";
import { A as AgencyCta } from "./AgencyCta-By1nB82S.js";
import { C as CreativeCtaTwo } from "./CreativeCtaTwo-DLDNjFGv.js";
import { F as FreelancerCta } from "./FreelancerCta-InhucgAG.js";
import { S as ShopCta } from "./ShopCta-CDlI831p.js";
import { S as StartUpCta } from "./StartUpCta-BrbT3hsd.js";
import { S as ServicesSubscribe } from "./ServicesSubscribe-83MMWA9M.js";
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
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    FreelancerCta,
    AgencyCta,
    ServicesSubscribe,
    StartUpCta,
    AboutCta,
    CreativeCtaTwo,
    ShopCta
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_freelancer_cta = resolveComponent("freelancer-cta");
  const _component_agency_cta = resolveComponent("agency-cta");
  const _component_services_subscribe = resolveComponent("services-subscribe");
  const _component_start_up_cta = resolveComponent("start-up-cta");
  const _component_about_cta = resolveComponent("about-cta");
  const _component_creative_cta_two = resolveComponent("creative-cta-two");
  const _component_shop_cta = resolveComponent("shop-cta");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our Call To Action",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_freelancer_cta, null, null, _parent));
  _push(ssrRenderComponent(_component_agency_cta, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_services_subscribe, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_start_up_cta, null, null, _parent));
  _push(ssrRenderComponent(_component_about_cta, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_start_up_cta, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_creative_cta_two, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_shop_cta, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-cta/ElementsCtaMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsCtaMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsCtaMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Cta - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_cta_main = resolveComponent("elements-cta-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_cta_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-cta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsCta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsCta as default
};
//# sourceMappingURL=elements-cta-DP2qGTAM.js.map
