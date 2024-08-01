import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import layout from "./LayoutTwelve-DT-8v2sS.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper";
import { S as ShopCategory } from "./ShopCategory-Ie9P3AON.js";
import { S as SingleProduct, p as productData } from "./productData-D-fZVTZg.js";
import { S as ShopFeatures } from "./ShopFeatures-CN3dWQQq.js";
import { S as ShopCta } from "./ShopCta-CDlI831p.js";
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
import "./HeaderTwelve-loT0VF7e.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./product-3-BNor14_6.js";
import "./logo-black-DNxRSU5J.js";
import "./FooterEleven-DjayW-oB.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
const slider_img = "" + __buildAssetsURL("slider-1.CNPLvsiU.png");
const _sfc_main$3 = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slider_data: [
        {
          id: 1,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img
        },
        {
          id: 2,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img
        },
        {
          id: 3,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img
        },
        {
          id: 4,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img
        }
      ]
    };
  },
  setup() {
    return {
      modules: [EffectFade]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "slider__active slider__active-13 swiper-container",
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    modules: $setup.modules
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_data, (item) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: item.id,
            class: "slider__item-13 slider__height-13 grey-bg-17 d-flex align-items-end"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="container"${_scopeId2}><div class="row align-self-end"${_scopeId2}><div class="col-xl-6 col-lg-6"${_scopeId2}><div class="slider__content-13"${_scopeId2}><span class="slider__title-pre-13"${_scopeId2}>${item.pre_title ?? ""}</span><h3 class="slider__title-13"${_scopeId2}>${item.title ?? ""}</h3><div class="slider__btn-13"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  href: "/shop",
                  class: "tp-btn-border"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Shop Now <span${_scopeId3}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><path d="M0.999969 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId3}></path><path d="M6.99997 1L13 7L6.99997 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId3}></path></svg></span>`);
                    } else {
                      return [
                        createTextVNode(" Shop Now "),
                        createVNode("span", null, [
                          (openBlock(), createBlock("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M0.999969 7H13",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }),
                            createVNode("path", {
                              d: "M6.99997 1L13 7L6.99997 13",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ]))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div></div><div class="col-xl-6 col-lg-6"${_scopeId2}><div class="slider__thumb-13 text-end mr-40"${_scopeId2}><span class="slider__thumb-13-circle-1"${_scopeId2}></span><span class="slider__thumb-13-circle-2"${_scopeId2}></span><img${ssrRenderAttr("src", item.img)} alt="slider img"${_scopeId2}></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row align-self-end" }, [
                      createVNode("div", { class: "col-xl-6 col-lg-6" }, [
                        createVNode("div", { class: "slider__content-13" }, [
                          createVNode("span", {
                            class: "slider__title-pre-13",
                            innerHTML: item.pre_title
                          }, null, 8, ["innerHTML"]),
                          createVNode("h3", {
                            class: "slider__title-13",
                            innerHTML: item.title
                          }, null, 8, ["innerHTML"]),
                          createVNode("div", { class: "slider__btn-13" }, [
                            createVNode(_component_nuxt_link, {
                              href: "/shop",
                              class: "tp-btn-border"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Shop Now "),
                                createVNode("span", null, [
                                  (openBlock(), createBlock("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      d: "M0.999969 7H13",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }),
                                    createVNode("path", {
                                      d: "M6.99997 1L13 7L6.99997 13",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    })
                                  ]))
                                ])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-xl-6 col-lg-6" }, [
                        createVNode("div", { class: "slider__thumb-13 text-end mr-40" }, [
                          createVNode("span", { class: "slider__thumb-13-circle-1" }),
                          createVNode("span", { class: "slider__thumb-13-circle-2" }),
                          createVNode("img", {
                            src: item.img,
                            alt: "slider img"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_data, (item) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: item.id,
              class: "slider__item-13 slider__height-13 grey-bg-17 d-flex align-items-end"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row align-self-end" }, [
                    createVNode("div", { class: "col-xl-6 col-lg-6" }, [
                      createVNode("div", { class: "slider__content-13" }, [
                        createVNode("span", {
                          class: "slider__title-pre-13",
                          innerHTML: item.pre_title
                        }, null, 8, ["innerHTML"]),
                        createVNode("h3", {
                          class: "slider__title-13",
                          innerHTML: item.title
                        }, null, 8, ["innerHTML"]),
                        createVNode("div", { class: "slider__btn-13" }, [
                          createVNode(_component_nuxt_link, {
                            href: "/shop",
                            class: "tp-btn-border"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Shop Now "),
                              createVNode("span", null, [
                                (openBlock(), createBlock("svg", {
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 14 14",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M0.999969 7H13",
                                    stroke: "currentColor",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  }),
                                  createVNode("path", {
                                    d: "M6.99997 1L13 7L6.99997 13",
                                    stroke: "currentColor",
                                    "stroke-width": "1.5",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  })
                                ]))
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "col-xl-6 col-lg-6" }, [
                      createVNode("div", { class: "slider__thumb-13 text-end mr-40" }, [
                        createVNode("span", { class: "slider__thumb-13-circle-1" }),
                        createVNode("span", { class: "slider__thumb-13-circle-2" }),
                        createVNode("img", {
                          src: item.img,
                          alt: "slider img"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/ShopHeroBanner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ShopHeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  components: { SingleProduct },
  mixins: [productData],
  data() {
    return {
      tabs: ["Top Rated", "Best Selling", "Latest Products"],
      activeTab: "Top Rated",
      product_items: []
    };
  },
  methods: {
    handleTabProduct(value) {
      this.activeTab = value;
      if (value === "Top Rated") {
        this.product_items = this.productData.filter((item) => item.topRated);
      }
      if (value === "Best Selling") {
        this.product_items = this.productData.filter(
          (item) => item.bestSelling
        );
      }
      if (value === "Latest Products") {
        this.product_items = this.productData.filter(
          (item) => item.latestProduct
        );
      }
    }
  },
  created() {
    this.product_items = this.productData.filter((item) => item.topRated);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_product = resolveComponent("single-product");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__popular-area pb-20" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xl-6 col-lg-6 col-md-6"><div class="section__title-wrapper-13 mb-35"><h3 class="section__title-13">Popular Products</h3></div></div><div class="col-xl-6 col-lg-6 col-md-6"><div class="product__tab tp-tab mb-35"><ul class="nav nav-tabs justify-content-md-end" id="productTab" role="tablist"><!--[-->`);
  ssrRenderList($data.tabs, (tab, i) => {
    _push(`<li class="nav-item"><button class="${ssrRenderClass(`nav-link ${$data.activeTab === tab ? "active" : ""}`)}" id="top-tab" type="button">${ssrInterpolate(tab)}</button></li>`);
  });
  _push(`<!--]--></ul></div></div></div><div class="product__tab-wrapper"><div class="row"><!--[-->`);
  ssrRenderList($data.product_items, (item, i) => {
    _push(`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">`);
    _push(ssrRenderComponent(_component_single_product, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/PopularProduct.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PopularProduct = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const bg = "" + __buildAssetsURL("banner-1.BTJxCSjV.jpg");
const _sfc_main$1 = {
  data() {
    return {
      bg
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner__area" }, _attrs))}><div class="container"><div class="banner__inner include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"><div class="row"><div class="col-xl-5 col-lg-6 col-md-8"><div class="banner__content"><span>Apple iPhone 12 Pro</span><h3 class="banner__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/product-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`The wait is on: iphon 12 max pro`);
      } else {
        return [
          createTextVNode("The wait is on: iphon 12 max pro")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>Last call for up to <span>32%</span> off! </p><div class="banner__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/product-details",
    class: "tp-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Buy Now <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Buy Now "),
          (openBlock(), createBlock("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 7H13",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            createVNode("path", {
              d: "M7 1L13 7L7 13",
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
  _push(`</div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ShopBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ShopBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-shop",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Shop - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ShopHeroBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ShopCategory, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularProduct, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ShopBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ShopFeatures, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ShopCta, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ShopHeroBanner),
              createVNode(ShopCategory),
              createVNode(PopularProduct),
              createVNode(ShopBanner),
              createVNode(ShopFeatures),
              createVNode(ShopCta)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-shop-zd2Ah0jZ.js.map
