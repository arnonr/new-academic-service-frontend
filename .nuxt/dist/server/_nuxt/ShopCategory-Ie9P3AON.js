import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const cate_1 = "" + __buildAssetsURL("product-cat-1.DPlqN8-p.jpg");
const cate_2 = "" + __buildAssetsURL("product-cat-2.CBhmsJ94.jpg");
const cate_3 = "" + __buildAssetsURL("product-cat-3.Bl2IZO7B.jpg");
const cate_4 = "" + __buildAssetsURL("product-cat-4.OiSY8vGP.jpg");
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      products_category: [
        {
          img: cate_1,
          title: "Call Phone &Tablets"
        },
        {
          img: cate_2,
          title: "Game & Video"
        },
        {
          img: cate_3,
          title: "Sport Watches"
        },
        {
          img: cate_4,
          title: "Computers & Laptop"
        },
        {
          img: cate_3,
          title: "Call Phone &Tablets"
        }
      ]
    };
  },
  setup() {
    return {
      modules: [Scrollbar]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__category pt-100 pb-100" }, _attrs))}><div class="container">`);
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Category Slider</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><div class="col-xxl-12"><div class="product__category-slider">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "product__category-slider-active swiper-container",
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    modules: $setup.modules,
    scrollbar: {
      el: ".tp-scrollbar",
      clickable: true
    },
    breakpoints: {
      1601: {
        slidesPerView: 4
      },
      1400: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
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
        ssrRenderList($data.products_category, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "product__category-item mb-20 text-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="product__category-thumb w-img"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, { href: "/shop" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", item.img)} alt="product__category-thumb"${_scopeId3}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: item.img,
                          alt: "product__category-thumb"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div><div class="product__category-content"${_scopeId2}><h3 class="product__category-title"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, { href: "/shop" }, {
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
                  createVNode("div", { class: "product__category-thumb w-img" }, [
                    createVNode(_component_nuxt_link, { href: "/shop" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.img,
                          alt: "product__category-thumb"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("div", { class: "product__category-content" }, [
                    createVNode("h3", { class: "product__category-title" }, [
                      createVNode(_component_nuxt_link, { href: "/shop" }, {
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.products_category, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "product__category-item mb-20 text-center"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "product__category-thumb w-img" }, [
                  createVNode(_component_nuxt_link, { href: "/shop" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: item.img,
                        alt: "product__category-thumb"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "product__category-content" }, [
                  createVNode("h3", { class: "product__category-title" }, [
                    createVNode(_component_nuxt_link, { href: "/shop" }, {
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
  _push(`<div class="tp-scrollbar"></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ShopCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShopCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ShopCategory as S,
  cate_2 as a,
  cate_3 as b,
  cate_1 as c,
  cate_4 as d
};
//# sourceMappingURL=ShopCategory-Ie9P3AON.js.map
