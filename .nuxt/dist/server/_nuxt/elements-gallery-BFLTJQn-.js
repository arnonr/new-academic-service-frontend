import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { C as CreativePortfolio } from "./CreativePortfolio-Dj2oL06v.js";
import { H as HomePortfolio } from "./HomePortfolio-lhyEoGzG.js";
import { C as ClassicSingleItem, i as img_1, a as img_2, b as img_3 } from "./ClassicSingleItem-D5QKGL0S.js";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { A as ArchitecturePortSliderItems } from "./ArchitecturePortSliderItems-BE6P2G4Z.js";
import { P as PhotographySliderItems } from "./PhotographySliderItems-CsVqvgTJ.js";
import { M as MasonrySingleItem, i as img_1$1, a as img_2$1, b as img_3$1, c as img_8, d as img_5, e as img_6, f as img_7, g as img_4 } from "./MasonrySingleItem-BJgN510q.js";
import { A as AgencySliderItems } from "./AgencySliderItems-BOPI6xWQ.js";
import { P as PersonalPortSliderItems } from "./PersonalPortSliderItems-BF0WYz0g.js";
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
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
import "./portfolio-3-DvsWHYw2.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./VideoModal-yOQUjk9s.js";
import "vue3-carousel";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$7 = {
  components: { ClassicSingleItem },
  data() {
    return {
      portfolio_data: [
        {
          id: "1",
          img: img_1,
          title: "Magazine Cover",
          category: "Apps"
        },
        {
          id: "2",
          img: img_2,
          title: "Logo Mockups",
          category: "Apps"
        },
        {
          id: "3",
          img: img_3,
          title: "Pattern Inspired",
          category: "Apps"
        }
      ]
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_classic_single_item = resolveComponent("classic-single-item");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-110 pb-75 p-relative fix" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Gallery Grid Style</h3></div></div></div><div class="row tp-gx-4"><!--[-->`);
  ssrRenderList($data.portfolio_data, (item, i) => {
    _push(`<div class="col-xl-4 col-lg-4 col-md-6 tp-portfolio grid-item">`);
    _push(ssrRenderComponent(_component_classic_single_item, {
      item,
      index: i,
      images: $data.portfolio_data.map((item2) => item2.img)
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElGalleryStyleFive.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ElGalleryStyleFive = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: { ArchitecturePortSliderItems }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_architecture_port_slider_items = resolveComponent("architecture-port-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio_area pt-110" }, _attrs))}><div class="container-fluid gx-0"><div class="row gx-0"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Slider with hover effect</h3></div></div></div><div class="row gx-0"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_architecture_port_slider_items, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElGalleryStyleFour.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ElGalleryStyleFour = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: { PhotographySliderItems }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_photography_slider_items = resolveComponent("photography-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area p-relative portfolio__overlay pt-110 pb-90 fix" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Gallery With Slider</h3></div></div></div><div class="row"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_photography_slider_items, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElGalleryStyleOne.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ElGalleryStyleOne = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: { MasonrySingleItem },
  data() {
    return {
      portfolio_data: [
        {
          id: "1",
          img: img_1$1,
          title: "Magazine Cover",
          category: "Apps"
        },
        {
          id: "2",
          img: img_2$1,
          title: "Logo Mockups",
          category: "Apps"
        },
        {
          id: "3",
          img: img_3$1,
          title: "Pattern Inspired",
          category: "Apps"
        },
        {
          id: "4",
          img: img_8,
          title: "Product Design",
          category: "Branding"
        },
        {
          id: "5",
          img: img_5,
          title: "Branding Design",
          category: "Branding"
        },
        {
          id: "6",
          img: img_6,
          title: "Original Coffee",
          category: "Creative",
          video: true,
          video_id: "1gyTUHP6ne8"
        },
        {
          id: "7",
          img: img_7,
          title: "Visual Identity",
          category: "Creative"
        },
        {
          id: "8",
          img: img_4,
          title: "UX Web Design",
          category: "Creative",
          video: true,
          video_id: "ty8Y0hCJIYw"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_masonry_wall = resolveComponent("masonry-wall");
  const _component_masonry_single_item = resolveComponent("masonry-single-item");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pb-90 pt-20 p-relative fix" }, _attrs))}><div class="container-fluid tp-gx-20"><div class="row tp-gx-20"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Gallery Masonry</h3></div></div></div><div class="row tp-gx-20 grid">`);
  _push(ssrRenderComponent(_component_masonry_wall, {
    items: $data.portfolio_data,
    gap: 20
  }, {
    default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_masonry_single_item, { item }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_masonry_single_item, { item }, null, 8, ["item"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElGalleryStyleSix.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ElGalleryStyleSix = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: { AgencySliderItems }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_agency_slider_items = resolveComponent("agency-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area portfolio__overlay-5 pt-60 pb-120 p-relative z-index-1" }, _attrs))}><div class="container-fluid g-0"><div class="row gx-0"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Slider With Arrow</h3></div></div></div><div class="row gx-0"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_agency_slider_items, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElGalleryStyleThree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ElGalleryStyleThree = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { PersonalPortSliderItems }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_personal_port_slider_items = resolveComponent("personal-port-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area portfolio__overlay-9 pt-110 fix" }, _attrs))}><div class="container-fluid gx-0"><div class="row gx-0"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Slider With Scrollbar</h3></div></div></div><div class="row gx-0"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_personal_port_slider_items, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElGalleryStyleTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ElGalleryStyleTwo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    ElGalleryStyleOne,
    HomePortfolio,
    ElGalleryStyleTwo,
    ElGalleryStyleThree,
    CreativePortfolio,
    ElGalleryStyleFour,
    ElGalleryStyleFive,
    ElGalleryStyleSix
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_el_gallery_style_one = resolveComponent("el-gallery-style-one");
  const _component_home_portfolio = resolveComponent("home-portfolio");
  const _component_el_gallery_style_two = resolveComponent("el-gallery-style-two");
  const _component_el_gallery_style_three = resolveComponent("el-gallery-style-three");
  const _component_creative_portfolio = resolveComponent("creative-portfolio");
  const _component_el_gallery_style_four = resolveComponent("el-gallery-style-four");
  const _component_el_gallery_style_five = resolveComponent("el-gallery-style-five");
  const _component_el_gallery_style_six = resolveComponent("el-gallery-style-six");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our Gallery Style",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_gallery_style_one, null, null, _parent));
  _push(ssrRenderComponent(_component_home_portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_el_gallery_style_two, null, null, _parent));
  _push(ssrRenderComponent(_component_el_gallery_style_three, null, null, _parent));
  _push(ssrRenderComponent(_component_creative_portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_el_gallery_style_four, null, null, _parent));
  _push(ssrRenderComponent(_component_el_gallery_style_five, null, null, _parent));
  _push(ssrRenderComponent(_component_el_gallery_style_six, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-gallery/ElementsGalleryMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsGalleryMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsGalleryMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Gallery - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_gallery_main = resolveComponent("elements-gallery-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_gallery_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsGallery as default
};
//# sourceMappingURL=elements-gallery-BFLTJQn-.js.map
