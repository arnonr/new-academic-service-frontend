import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
const portfolio_img_1 = "" + __buildAssetsURL("portfolio-1.Cg4sQlru.jpg");
const portfolio_img_2 = "" + __buildAssetsURL("portfolio-2.bAHs-8Xj.jpg");
const portfolio_img_3 = "" + __buildAssetsURL("portfolio-3.8kVDxqhs.jpg");
const portfolio_img_4 = "" + __buildAssetsURL("portfolio-4.BpgS0l6d.jpg");
const portfolio_img_5 = "" + __buildAssetsURL("portfolio-5.kg77-PVQ.jpg");
const portfolio_img_6 = "" + __buildAssetsURL("portfolio-6.BOTum5fA.jpg");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      portfolio_data: [
        {
          id: 1,
          img: portfolio_img_1,
          tag: "BRANDING",
          title: "We build great things"
        },
        {
          id: 2,
          img: portfolio_img_2,
          tag: "BRANDING",
          title: "We build great things"
        },
        {
          id: 3,
          img: portfolio_img_3,
          tag: "BRANDING",
          title: "We build great things"
        },
        {
          id: 4,
          img: portfolio_img_4,
          tag: "BRANDING",
          title: "We build great things"
        },
        {
          id: 5,
          img: portfolio_img_5,
          tag: "BRANDING",
          title: "We build great things"
        },
        {
          id: 6,
          img: portfolio_img_6,
          tag: "BRANDING",
          title: "We build great things"
        },
        {
          id: 7,
          img: portfolio_img_3,
          tag: "BRANDING",
          title: "We build great things"
        }
      ]
    };
  },
  setup() {
    return {
      modules: [Navigation, Scrollbar]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio__slider-9 has-scrollbar p-relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Swiper, {
    class: "portfolio__slider-active-9 swiper-container",
    slidesPerView: 4,
    spaceBetween: 30,
    modules: $setup.modules,
    loop: false,
    navigation: {
      nextEl: ".portfolio-button-next-9",
      prevEl: ".portfolio-button-prev-9"
    },
    scrollbar: {
      el: ".tp-scrollbar",
      clickable: true
    },
    breakpoints: {
      1601: {
        slidesPerView: 4
      },
      1400: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.portfolio_data, (item) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: item.id,
            class: "portfolio__item-9 w-img",
            "data-sal": "slide-up",
            "data-sal-delay": "130",
            "data-sal-duration": "1000"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="portfolio__thumb-9" style="${ssrRenderStyle({ backgroundImage: `url(${item.img})` })}"${_scopeId2}></div><div class="portfolio__content-9"${_scopeId2}><div class="portfolio__tag-9"${_scopeId2}><span${_scopeId2}><a href="#"${_scopeId2}>${ssrInterpolate(item.tag)}</a></span></div><h3 class="portfolio__title-9"${_scopeId2}>`);
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
                _push3(`</h3></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "portfolio__thumb-9",
                    style: { backgroundImage: `url(${item.img})` }
                  }, null, 4),
                  createVNode("div", { class: "portfolio__content-9" }, [
                    createVNode("div", { class: "portfolio__tag-9" }, [
                      createVNode("span", null, [
                        createVNode("a", { href: "#" }, toDisplayString(item.tag), 1)
                      ])
                    ]),
                    createVNode("h3", { class: "portfolio__title-9" }, [
                      createVNode(_component_nuxt_link, { href: "/portfolio-details" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024)
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.portfolio_data, (item) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: item.id,
              class: "portfolio__item-9 w-img",
              "data-sal": "slide-up",
              "data-sal-delay": "130",
              "data-sal-duration": "1000"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "portfolio__thumb-9",
                  style: { backgroundImage: `url(${item.img})` }
                }, null, 4),
                createVNode("div", { class: "portfolio__content-9" }, [
                  createVNode("div", { class: "portfolio__tag-9" }, [
                    createVNode("span", null, [
                      createVNode("a", { href: "#" }, toDisplayString(item.tag), 1)
                    ])
                  ]),
                  createVNode("h3", { class: "portfolio__title-9" }, [
                    createVNode(_component_nuxt_link, { href: "/portfolio-details" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024)
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
  _push(`<div class="portfolio__nav-9 d-none d-sm-block"><button type="button" class="portfolio-button-prev-9"><i class="fa-regular fa-chevron-left"></i></button><button type="button" class="portfolio-button-next-9"><i class="fa-regular fa-chevron-right"></i></button></div><div class="tp-scrollbar mt-70 mb-50 grey-bg-12"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/PersonalPortSliderItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PersonalPortSliderItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PersonalPortSliderItems as P
};
//# sourceMappingURL=PersonalPortSliderItems-BF0WYz0g.js.map
