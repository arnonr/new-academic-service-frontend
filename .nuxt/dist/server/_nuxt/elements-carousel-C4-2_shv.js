import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { A as AboutGallery } from "./AboutGallery-6wBMkzJo.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { a as agency_port_1, b as agency_port_2, c as agency_port_3, d as agency_port_4, e as agency_port_5, f as agency_port_6 } from "./portfolio-6-C9VyC7tr.js";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { i as img_1, a as img_2, b as img_3, c as img_4, d as img_5 } from "./portfolio-metro-5-PaQEgo7_.js";
import { i as img_1$1, a as img_2$1, b as img_3$1 } from "./portfolio-details-slider-3-C4_EA1HL.js";
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
const _sfc_main$4 = {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      slider_data: [agency_port_1, agency_port_2, agency_port_3, agency_port_4, agency_port_5, agency_port_6]
    };
  },
  methods: {
    handlePrev() {
      var _a;
      (_a = this.$refs.detailsSlider) == null ? void 0 : _a.prev();
    },
    handleNext() {
      var _a;
      (_a = this.$refs.detailsSlider) == null ? void 0 : _a.next();
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_pagination = resolveComponent("pagination");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "elements__carousel-area pt-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel Grid With Controls</h3></div></div></div><div class="row"><div class="col-xl-12"><div class="elements__carousel p-relative">`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "detailsSlider",
    "items-to-show": 3,
    "wrap-around": true,
    snapAlign: "center",
    breakpoints: {
      992: {
        itemsToShow: 3
      },
      700: {
        itemsToShow: 2
      },
      0: {
        itemsToShow: 1
      }
    },
    class: "elements__carousel-active"
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_data, (img, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "elements__carousel-item w-img"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", img)} alt="slider img"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: img,
                    alt: "slider img"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_data, (img, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "elements__carousel-item w-img"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: img,
                  alt: "slider img"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="elements-arrow"><button type="button" class="elements-button-prev slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button><button type="button" class="elements-button-next slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-carousel-main/CarouselGridControls.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CarouselGridControls = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      carousel_images: [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5
      ]
    };
  },
  methods: {
    handlePrev() {
      var _a;
      (_a = this.$refs.detailsSlider) == null ? void 0 : _a.prev();
    },
    handleNext() {
      var _a;
      (_a = this.$refs.detailsSlider) == null ? void 0 : _a.next();
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_pagination = resolveComponent("pagination");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "elements__carousel-area pt-110 pb-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel With Controls</h3></div></div></div><div class="row"><div class="col-xl-6"><div class="elements__carousel elements__carousel-img p-relative fix">`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "detailsSlider",
    "items-to-show": 1,
    "wrap-around": true,
    snapAlign: "center",
    class: "elements__carousel-img-active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.carousel_images, (img, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "elements__carousel-item w-img"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", img)} alt="slider img"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: img,
                    alt: "slider img"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.carousel_images, (img, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "elements__carousel-item w-img"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: img,
                  alt: "slider img"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="elements-img-arrow"><button type="button" class="elements-img-button-prev slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button><button type="button" class="elements-img-button-next slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button></div></div></div><div class="col-xl-6"><div class="elements__carousel elements__carousel-img-dot p-relative fix">`);
  _push(ssrRenderComponent(_component_Carousel, {
    "items-to-show": 1,
    "wrap-around": true,
    snapAlign: "center",
    class: "elements__carousel-img-dot-active"
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.carousel_images, (img, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "elements__carousel-item w-img"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", img)} alt="slider img"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: img,
                    alt: "slider img"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.carousel_images, (img, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "elements__carousel-item w-img"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: img,
                  alt: "slider img"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-carousel-main/CarouselWithControls.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CarouselWithControls = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      images: [img_1$1, img_2$1, img_3$1, img_2$1, img_1$1]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_pagination = resolveComponent("pagination");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pb-60 fix" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel With Dots</h3></div></div></div><div class="row justify-content-center"><div class="col-xl-12"><div class="portfolio__details-slider p-relative pl-50 pr-50">`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "detailsSlider",
    "items-to-show": 1,
    "wrap-around": true,
    snapAlign: "center",
    breakpoints: {
      992: {
        itemsToShow: 1
      },
      700: {
        itemsToShow: 1
      },
      0: {
        itemsToShow: 1
      }
    },
    class: "portfolio__details-slider-active"
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.images, (img, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "portfolio__details-slider-item"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", img)} alt="slider img"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: img,
                    alt: "slider img"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.images, (img, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "portfolio__details-slider-item"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: img,
                  alt: "slider img"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="portfolio-details-slider-dot tp-swiper-dot-2 text-center mt-45"></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-carousel-main/SliderWithDots.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SliderWithDots = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    AboutGallery,
    SliderWithDots,
    CarouselGridControls,
    CarouselWithControls
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_about_gallery = resolveComponent("about-gallery");
  const _component_slider_with_dots = resolveComponent("slider-with-dots");
  const _component_carousel_grid_controls = resolveComponent("carousel-grid-controls");
  const _component_carousel_with_controls = resolveComponent("carousel-with-controls");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our carousel",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_about_gallery, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_slider_with_dots, null, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_carousel_grid_controls, null, null, _parent));
  _push(ssrRenderComponent(_component_carousel_with_controls, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-carousel-main/ElementsCarouselMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsCarouselMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsCarouselMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Carousel - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_carousel_main = resolveComponent("elements-carousel-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_carousel_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsCarousel as default
};
//# sourceMappingURL=elements-carousel-C4-2_shv.js.map
