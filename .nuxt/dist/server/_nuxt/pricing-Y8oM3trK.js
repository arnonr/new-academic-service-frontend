import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { S as StartUpPricing } from "./index-Bu_9HrqE.js";
import { P as PricingTestimonial } from "./PricingTestimonial-BcsmJleN.js";
import { C as CommonFaq } from "./CommonFaq-CQBj1OmV.js";
import { A as AboutCta } from "./AboutCta-BKFRSas-.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./SingleFaq-CsPiM7Uv.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main = {
  components: {
    HeaderOne,
    StartUpPricing,
    PricingTestimonial,
    FooterSix,
    AboutCta,
    BackToTop,
    CommonFaq
  },
  setup() {
    useHead({
      title: "Pricing - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_start_up_pricing = resolveComponent("start-up-pricing");
  const _component_pricing_testimonial = resolveComponent("pricing-testimonial");
  const _component_common_faq = resolveComponent("common-faq");
  const _component_about_cta = resolveComponent("about-cta");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_start_up_pricing, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_testimonial, null, null, _parent));
  _push(ssrRenderComponent(_component_common_faq, { padd: "120" }, null, _parent));
  _push(ssrRenderComponent(_component_about_cta, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  pricing as default
};
//# sourceMappingURL=pricing-Y8oM3trK.js.map
