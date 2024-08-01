import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { P as PersonalPortServices } from "./PersonalPortServices-Dr9wNU-b.js";
import { A as AboutGallery } from "./AboutGallery-6wBMkzJo.js";
import { P as PersonalPortAwards } from "./PersonalPortAwards-9bhyWO1r.js";
import { A as AboutFaqs } from "./AboutFaqs-B3_2OXWY.js";
import { H as HomeTeams } from "./HomeTeams-C-PAF4jB.js";
import { A as AgencyBrands } from "./AgencyBrands-DAitA-64.js";
import { A as AboutCta } from "./AboutCta-BKFRSas-.js";
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
import "sal.js";
import "vue3-carousel";
import "./SingleFaq-CsPiM7Uv.js";
import "./VideoModal-yOQUjk9s.js";
import "swiper/vue";
import "swiper";
import "./teamData-RHm96bod.js";
import "./SingleTeam-DtY4GY80.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const bg = "" + __buildAssetsURL("about-breadcrumb.BvB1EgOI.jpg");
const _sfc_main$2 = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about__heading about__heading-overlay about__spacing include-bg jarallax",
    style: { backgroundImage: `url(${$data.bg})` }
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xl-8 col-lg-10"><div class="about__heading-content text-center p-relative z-index-1"><span class="about__heading-subtitle">About us</span><h3 class="about__heading-title"> Need a design expert? You found one. </h3></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/about-page-com/AboutTopBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AboutTopBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  mixins: [SalScrollAnimationMixin]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about__text pt-115 pb-100" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4"><div class="about__text-wrapper" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><h3 class="about__text-title"> It started with a <br> bang now we&#39;re here. </h3></div></div><div class="col-xl-8 col-lg-8"><div class="about__text" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"><p> Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula </p><p> Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.! </p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/about-page-com/AboutTextArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutTextArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    BackToTop,
    AboutTopBar,
    AboutTextArea,
    PersonalPortServices,
    AboutGallery,
    PersonalPortAwards,
    AboutFaqs,
    HomeTeams,
    AgencyBrands,
    AboutCta,
    FooterSix
  },
  setup() {
    useHead({
      title: "About - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_about_top_bar = resolveComponent("about-top-bar");
  const _component_about_text_area = resolveComponent("about-text-area");
  const _component_personal_port_services = resolveComponent("personal-port-services");
  const _component_about_gallery = resolveComponent("about-gallery");
  const _component_personal_port_awards = resolveComponent("personal-port-awards");
  const _component_about_faqs = resolveComponent("about-faqs");
  const _component_home_teams = resolveComponent("home-teams");
  const _component_agency_brands = resolveComponent("agency-brands");
  const _component_about_cta = resolveComponent("about-cta");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_about_top_bar, null, null, _parent));
  _push(ssrRenderComponent(_component_about_text_area, null, null, _parent));
  _push(ssrRenderComponent(_component_personal_port_services, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_about_gallery, null, null, _parent));
  _push(ssrRenderComponent(_component_personal_port_awards, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_about_faqs, null, null, _parent));
  _push(ssrRenderComponent(_component_home_teams, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_agency_brands, {
    spacing: true,
    style_2: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_about_cta, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-DEYx341Q.js.map
