import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    portfolio_data: {
      type: Array,
      default: [],
      required: true
    },
    handleImagePopup: {
      type: Function,
      required: true
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio__slider-5 p-relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    modules: $setup.modules,
    class: "portfolio__slider-active-5 swiper-container",
    navigation: {
      nextEl: ".portfolio-button-next-5",
      prevEl: ".portfolio-button-prev-5"
    },
    pagination: {
      el: ".portfolio-slider-dot-5",
      clickable: true
    },
    breakpoints: {
      1600: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      },
      0: {
        slidesPerView: 1
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.portfolio_data, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: item.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="portfolio__item-5 wow slideInDown" data-sal="slide-down"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"${_scopeId2}><div class="portfolio__thumb-5" style="${ssrRenderStyle({ backgroundImage: `url(${item.img})` })}"${_scopeId2}></div><div class="portfolio__content-5"${_scopeId2}><h3 class="portfolio__title-5"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(item.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</h3><div class="portfolio__tag-5"${_scopeId2}><a href="#"${_scopeId2}>${ssrInterpolate(item.tag)}</a></div></div><div class="portfolio__view-5"${_scopeId2}><a href="#" class="portfolio-plus-btn popup-image"${_scopeId2}><i class="fa-solid fa-plus"${_scopeId2}></i></a></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "portfolio__item-5 wow slideInDown",
                    "data-sal": "slide-down",
                    "data-sal-delay": item.delay,
                    "data-sal-duration": "1000"
                  }, [
                    createVNode("div", {
                      class: "portfolio__thumb-5",
                      style: { backgroundImage: `url(${item.img})` }
                    }, null, 4),
                    createVNode("div", { class: "portfolio__content-5" }, [
                      createVNode("h3", { class: "portfolio__title-5" }, [
                        createVNode(_component_nuxt_link, { href: "/portfolio-details" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "portfolio__tag-5" }, [
                        createVNode("a", { href: "#" }, toDisplayString(item.tag), 1)
                      ])
                    ]),
                    createVNode("div", { class: "portfolio__view-5" }, [
                      createVNode("a", {
                        onClick: withModifiers(($event) => $props.handleImagePopup(i), ["prevent"]),
                        href: "#",
                        class: "portfolio-plus-btn popup-image"
                      }, [
                        createVNode("i", { class: "fa-solid fa-plus" })
                      ], 8, ["onClick"])
                    ])
                  ], 8, ["data-sal-delay"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.portfolio_data, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: item.id
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "portfolio__item-5 wow slideInDown",
                  "data-sal": "slide-down",
                  "data-sal-delay": item.delay,
                  "data-sal-duration": "1000"
                }, [
                  createVNode("div", {
                    class: "portfolio__thumb-5",
                    style: { backgroundImage: `url(${item.img})` }
                  }, null, 4),
                  createVNode("div", { class: "portfolio__content-5" }, [
                    createVNode("h3", { class: "portfolio__title-5" }, [
                      createVNode(_component_nuxt_link, { href: "/portfolio-details" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode("div", { class: "portfolio__tag-5" }, [
                      createVNode("a", { href: "#" }, toDisplayString(item.tag), 1)
                    ])
                  ]),
                  createVNode("div", { class: "portfolio__view-5" }, [
                    createVNode("a", {
                      onClick: withModifiers(($event) => $props.handleImagePopup(i), ["prevent"]),
                      href: "#",
                      class: "portfolio-plus-btn popup-image"
                    }, [
                      createVNode("i", { class: "fa-solid fa-plus" })
                    ], 8, ["onClick"])
                  ])
                ], 8, ["data-sal-delay"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="portfolio__nav-5 d-none d-sm-block"><button type="button" class="portfolio-button-prev-5"><i class="fa-regular fa-arrow-left"></i></button><button type="button" class="portfolio-button-next-5"><i class="fa-regular fa-arrow-right"></i></button></div><div class="portfolio-slider-dot-5 tp-swiper-dot d-sm-none"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/AgencySliderItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AgencySliderItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AgencySliderItems as A
};
//# sourceMappingURL=AgencySliderItems-BOPI6xWQ.js.map
