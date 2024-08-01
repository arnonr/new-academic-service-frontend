import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const bg_1 = "" + __buildAssetsURL("portfolio-1.dviggKVh.jpg");
const bg_2 = "" + __buildAssetsURL("portfolio-2.9B1FYWaf.jpg");
const bg_3 = "" + __buildAssetsURL("portfolio-3.CeUT0Dta.jpg");
const bg_4 = "" + __buildAssetsURL("portfolio-4.CFxzPV3h.jpg");
const bg_5 = "" + __buildAssetsURL("portfolio-5.BoCAZJ0P.jpg");
const bg_6 = "" + __buildAssetsURL("portfolio-6.wGanjlv4.jpg");
const _sfc_main = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      active_bg: "portfolio-img-2",
      bg_images: [
        { id: 1, bg: bg_1 },
        { id: 2, bg: bg_2 },
        { id: 3, bg: bg_3 },
        { id: 4, bg: bg_4 },
        { id: 5, bg: bg_5 },
        { id: 6, bg: bg_6 }
      ],
      slider_data: [
        {
          id: 1,
          year: 2022,
          meta: "Kiev, Ukraine",
          title: "Cubic Blockes Hotel"
        },
        {
          id: 2,
          year: 2022,
          meta: "Dawsbury, Hungery",
          title: "Spring Castle Hotel"
        },
        {
          id: 3,
          year: 2022,
          meta: "Drumchapel, New Town",
          title: "Tranquil Orb Resort"
        },
        {
          id: 4,
          year: 2022,
          meta: "Cape Town, China",
          title: "Pova Hotel & Spa"
        },
        {
          id: 5,
          year: 2022,
          meta: "Antertic, South Asia",
          title: "Nebula Resort"
        },
        {
          id: 6,
          year: 2022,
          meta: "City, America",
          title: "Sapphire Court Motel"
        }
      ]
    };
  },
  methods: {
    handleActiveBg(id) {
      this.active_bg = `portfolio-img-${id}`;
    }
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio__slider-8 p-relative fix" }, _attrs))}><div id="portfolio-bg-img" class="${ssrRenderClass($data.active_bg)}"><!--[-->`);
  ssrRenderList($data.bg_images, (item) => {
    _push(`<div class="${ssrRenderClass(`portfolio-bg portfolio-img-${item.id}`)}" style="${ssrRenderStyle({ backgroundImage: `url(${item.bg})` })}"></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_Swiper, {
    slidesPerView: 4,
    spaceBetween: 0,
    class: "portfolio__slider-active-8 swiper-container",
    loop: true,
    modules: $setup.modules,
    navigation: {
      nextEl: ".portfolio-button-next-8",
      prevEl: ".portfolio-button-prev-8"
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
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_data, (item, i) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: i,
            onMouseenter: ($event) => $options.handleActiveBg(item.id),
            class: `portfolio__item-8 ${$data.active_bg === `portfolio-img-${item.id}` ? "active" : ""}`,
            rel: "portfolio-img-1"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="portfolio__content-8"${_scopeId2}><div class="portfolio__meta-8"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.year)}</span><span${_scopeId2}>${ssrInterpolate(item.meta)}</span></div><h3 class="portfolio__title-8"${_scopeId2}>`);
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
                  createVNode("div", { class: "portfolio__content-8" }, [
                    createVNode("div", { class: "portfolio__meta-8" }, [
                      createVNode("span", null, toDisplayString(item.year), 1),
                      createVNode("span", null, toDisplayString(item.meta), 1)
                    ]),
                    createVNode("h3", { class: "portfolio__title-8" }, [
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
        _push2(`<!--]--><div class="portfolio__nav-8"${_scopeId}><button type="button" class="portfolio-button-prev-8"${_scopeId}><i class="fa-regular fa-chevron-left"${_scopeId}></i></button><button type="button" class="portfolio-button-next-8"${_scopeId}><i class="fa-regular fa-chevron-right"${_scopeId}></i></button></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_data, (item, i) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: i,
              onMouseenter: ($event) => $options.handleActiveBg(item.id),
              class: `portfolio__item-8 ${$data.active_bg === `portfolio-img-${item.id}` ? "active" : ""}`,
              rel: "portfolio-img-1"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "portfolio__content-8" }, [
                  createVNode("div", { class: "portfolio__meta-8" }, [
                    createVNode("span", null, toDisplayString(item.year), 1),
                    createVNode("span", null, toDisplayString(item.meta), 1)
                  ]),
                  createVNode("h3", { class: "portfolio__title-8" }, [
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
            }, 1032, ["onMouseenter", "class"]);
          }), 128)),
          createVNode("div", { class: "portfolio__nav-8" }, [
            createVNode("button", {
              type: "button",
              class: "portfolio-button-prev-8"
            }, [
              createVNode("i", { class: "fa-regular fa-chevron-left" })
            ]),
            createVNode("button", {
              type: "button",
              class: "portfolio-button-next-8"
            }, [
              createVNode("i", { class: "fa-regular fa-chevron-right" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/ArchitecturePortSliderItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArchitecturePortSliderItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ArchitecturePortSliderItems as A
};
//# sourceMappingURL=ArchitecturePortSliderItems-BE6P2G4Z.js.map
