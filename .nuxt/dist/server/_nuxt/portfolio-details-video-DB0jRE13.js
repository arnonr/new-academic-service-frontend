import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import FooterFive from "./FooterFive-DzJ5Gud-.js";
import { P as PortfolioCommentArea } from "./PortfolioCommentArea-DyU097Z3.js";
import { P as PortfolioDetailsBreadcrumb } from "./PortfolioDetailsBreadcrumb-DYfeDjR5.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { resolveComponent, useSSRContext, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode } from "vue";
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { D as DetailsPortSlider } from "./DetailsPortSlider-DmJKk_u_.js";
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
import "vue3-carousel";
import "./portfolio-details-slider-3-C4_EA1HL.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const bg = "" + __buildAssetsURL("portfolio-breadcrumb-2.CV6dgP1_.jpg");
const _sfc_main$6 = {
  components: { VideoModal },
  data() {
    return { bg };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="breadcrumb__area breadcrumb__style-4 breadcrumb__spacing include-bg grey-bg-4" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"><div class="container"><div class="row justify-content-end"><div class="col-xl-7 col-lg-9"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__video mb-30"><a href="#" class="breadcrumb__video-btn popup-video"><svg width="14" height="18" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor"></path></svg></a></div><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span><a href="#">Business</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>Investment Trend Monitor: Top Trends in 2022 </span></div><h3 class="breadcrumb__title">Keep it Minimal, yet Expressive</h3></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/K0D4uPmKkqY"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/PortDetailsBreadcrumbTwo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PortDetailsBreadcrumbTwo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-70 pb-85" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-5 col-lg-5"><div class="portfolio__details-wrapper-2 mb-50"><span class="portfolio__details-subtitle">DESCRIPTION</span><h3 class="portfolio__details-title-3">About Project</h3><div class="portfolio__details-btn-2">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/",
    class: "tp-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Visit Website <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Visit Website "),
          (openBlock(), createBlock("svg", {
            width: "26",
            height: "9",
            viewBox: "0 0 26 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M21.6934 1L25 4.20003L21.6934 7.4",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            createVNode("path", {
              d: "M0.999999 4.19897H25",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-xl-7 col-lg-7"><div class="portfolio__details-wrapper-2"><div class="portfolio__details-content-2 mb-30"><p>We’ve created a unique visual system and strategy across the wide existing spectrum visible mobile applications and found yourself in a wide, straggling with wainscots.Lacus laoreet consequuntur a commodo voluptatibus venenatis vero leo cras?autem maiores adipiscing assumenda, nesciunt deleniti quaerat veritatis culpa dolores sollicitudin, dolorum inceptos? Convallis aut, nostra nonummy!</p></div><div class="portfolio__details-task portfolio__details-task-2 mb-50"><h3 class="portfolio__details-title-sm portfolio__details-title-sm-2">Task</h3><p>Rebuild a unified visual system for the advertising agency, made of steel which can change the world in a while.</p></div><div class="portfolio__details-meta flex-wrap d-flex align-items-center"><div class="portfolio__details-meta-item d-flex align-items-start"><div class="portfolio__details-meta-content"><h5>Client:</h5><span>Nature Planner</span></div></div><div class="portfolio__details-meta-item d-flex align-items-start"><div class="portfolio__details-meta-content"><h5>Awards:</h5><span>First Place</span></div></div><div class="portfolio__details-meta-item d-flex align-items-start"><div class="portfolio__details-meta-content"><h5>Category:</h5><span>Portfolio</span></div></div><div class="portfolio__details-meta-item d-flex align-items-start"><div class="portfolio__details-meta-content"><h5>Date:</h5><span>Ocober 3, 2021</span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/details-with-video/PortfolioVideoArea.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PortfolioVideoArea = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = "" + __buildAssetsURL("img-1.B_QPceJQ.jpg");
const _imports_1 = "" + __buildAssetsURL("img-2.DMJIN710.jpg");
const _imports_2 = "" + __buildAssetsURL("img-3.B1HVtpps.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "image__box-area" }, _attrs))}><div class="container"><div class="row"><div class="col-md-6"><div class="image__box-item w-img mb-30"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-md-6"><div class="image__box-item w-img mb-30"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="col-md-12"><div class="image__box-item w-img mb-30"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/details-with-video/PortfolioVideoImgBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PortfolioVideoImgBox = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "tp-section-style-area pt-60 pb-90" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-5"><div class="tp-section-wrapper"><span class="tp-section-subtitle">Our Process</span><h3 class="tp-section-title"> Creating a unique visual system and strategy. </h3></div></div><div class="col-xl-8 col-lg-7"><div class="tp-section-wrapper"><p> With more than 16+ years of experience, our team has become a leader in digital design and innovations. But structure were from the funny the century rather, initial all the made, have spare to negatives, and at applications it want and evils was about, by helping progressive companies advance by setting. </p></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/details-with-video/HeadingStyle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeadingStyle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features__area pb-60" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4 col-md-6"><div class="features__item-14 grey-bg-14 mb-60"><div class="features__icon-14"><span>01.</span></div><h3 class="features__title-14">Idea &amp; Concept</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!</p></div></div><div class="col-xl-4 col-lg-4 col-md-6"><div class="features__item-14 grey-bg-14 mb-60"><div class="features__icon-14"><span>02.</span></div><h3 class="features__title-14">Development</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!</p></div></div><div class="col-xl-4 col-lg-4 col-md-6"><div class="features__item-14 grey-bg-14 mb-60"><div class="features__icon-14"><span>03.</span></div><h3 class="features__title-14">Testing &amp; Support</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh.!</p></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/details-with-video/FeaturesArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FeaturesArea = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    PortfolioDetailsBreadcrumb,
    PortfolioCommentArea,
    PortDetailsBreadcrumbTwo,
    PortfolioVideoArea,
    PortfolioVideoImgBox,
    HeadingStyle,
    FeaturesArea,
    DetailsPortSlider
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_port_details_breadcrumb_two = resolveComponent("port-details-breadcrumb-two");
  const _component_portfolio_video_area = resolveComponent("portfolio-video-area");
  const _component_portfolio_video_img_box = resolveComponent("portfolio-video-img-box");
  const _component_heading_style = resolveComponent("heading-style");
  const _component_features_area = resolveComponent("features-area");
  const _component_details_port_slider = resolveComponent("details-port-slider");
  const _component_portfolio_navigation = resolveComponent("portfolio-navigation");
  const _component_portfolio_comment_area = resolveComponent("portfolio-comment-area");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_port_details_breadcrumb_two, null, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_video_area, null, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_video_img_box, null, null, _parent));
  _push(ssrRenderComponent(_component_heading_style, null, null, _parent));
  _push(ssrRenderComponent(_component_features_area, null, null, _parent));
  _push(ssrRenderComponent(_component_details_port_slider, { spacing: "130" }, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_navigation, null, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_comment_area, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/details-with-video/DetailsWithVideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DetailsWithVideo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderOne, FooterFive, DetailsWithVideo, BackToTop },
  setup() {
    useHead({
      title: "Portfolio Details Video - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_details_with_video = resolveComponent("details-with-video");
  const _component_footer_five = resolveComponent("footer-five");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_black: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_details_with_video, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_five, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio-details-video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolioDetailsVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  portfolioDetailsVideo as default
};
//# sourceMappingURL=portfolio-details-video-DB0jRE13.js.map
