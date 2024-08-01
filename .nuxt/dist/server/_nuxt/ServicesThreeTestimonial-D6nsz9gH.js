import { Carousel, Slide } from "vue3-carousel";
import { _ as _imports_0, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { u as user_4 } from "./user-4-BaMCI89Q.js";
import { u as user_5, a as user_6 } from "./user-6-DCzgwACr.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0$1, a as _imports_1$1, b as _imports_2, c as _imports_3, d as _imports_5 } from "./testimonial-quote-BDuefOco.js";
import { _ as _export_sfc } from "../server.mjs";
const _imports_4 = "" + __buildAssetsURL("testimonial-shape.Ccleh3iO.png");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: { Carousel, Slide },
  data() {
    return {
      settings: {
        itemsToShow: 3,
        snapAlign: "center"
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 992px and up
        992: {
          itemsToShow: 3,
          snapAlign: "center"
        },
        // 768px and up
        768: {
          itemsToShow: 2,
          snapAlign: "center"
        },
        // 0 and up
        0: {
          itemsToShow: 1,
          snapAlign: "start"
        }
      },
      testimonial_data: [
        {
          user: _imports_0,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Elena Grigoras",
          title: "Co-founder at Mainblades"
        },
        {
          user: _imports_1,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Fatiha Laauich",
          title: "Strategic Marketing"
        },
        {
          user: user_3,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Jake Weary",
          title: "Head of Technology"
        },
        {
          user: user_4,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Hery Marky",
          title: "Head of Technology"
        },
        {
          user: user_5,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Wilis Megh",
          title: "Head of Technology"
        },
        {
          user: user_6,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Steaven Smit",
          title: "Head of Technology"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial__area p-relative z-index-1 pt-120 fix pb-125" }, _attrs))}><div class="testimonial__shape"><img class="testimonial__shape-4"${ssrRenderAttr("src", _imports_0$1)} alt="shape"><img class="testimonial__shape-5"${ssrRenderAttr("src", _imports_1$1)} alt="shape"><img class="testimonial__shape-6"${ssrRenderAttr("src", _imports_2)} alt="shape"><img class="testimonial__shape-7"${ssrRenderAttr("src", _imports_3)} alt="shape"></div><div class="container"><div class="row justify-content-center"><div class="col-xxl-6"><div class="tp-section-wrapper-3 mb-50 text-center"><span class="tp-section-subtitle-3">success Stories</span><h3 class="tp-section-title-3"> Why customers <br> love working with us </h3></div></div></div><div class="row"><div class="col-xxl-12"><div class="testimonial__slider-5 testimonial__style-2 p-relative" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="testimonial__gradient-bg-2 fix"><img class="testimonial__shape-11"${ssrRenderAttr("src", _imports_4)} alt=""></div>`);
  _push(ssrRenderComponent(_component_Carousel, {
    settings: $data.settings,
    breakpoints: $data.breakpoints,
    "wrap-around": true,
    autoplay: 5e3,
    class: "testimonial__slider-active-5 pt-50 pb-50"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonial_data, (item, i) => {
          _push2(ssrRenderComponent(_component_Slide, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__item-5"${_scopeId2}><img class="testimonial__shape-2"${ssrRenderAttr("src", _imports_5)} alt="quote"${_scopeId2}><div class="testimonial__avater-thumb-5"${_scopeId2}><img${ssrRenderAttr("src", item.user)} alt="user img"${_scopeId2}></div><div class="testimonial__content-5"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="testimonial__avater-info-5"${_scopeId2}><h3 class="testimonial__avater-title-5"${_scopeId2}>${ssrInterpolate(item.name)}</h3><span class="testimonial__avater-designation-5"${_scopeId2}>${ssrInterpolate(item.title)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__item-5" }, [
                    createVNode("img", {
                      class: "testimonial__shape-2",
                      src: _imports_5,
                      alt: "quote"
                    }),
                    createVNode("div", { class: "testimonial__avater-thumb-5" }, [
                      createVNode("img", {
                        src: item.user,
                        alt: "user img"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "testimonial__content-5" }, [
                      createVNode("p", null, toDisplayString(item.desc), 1)
                    ]),
                    createVNode("div", { class: "testimonial__avater-info-5" }, [
                      createVNode("h3", { class: "testimonial__avater-title-5" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "testimonial__avater-designation-5" }, toDisplayString(item.title), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonial_data, (item, i) => {
            return openBlock(), createBlock(_component_Slide, { key: i }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__item-5" }, [
                  createVNode("img", {
                    class: "testimonial__shape-2",
                    src: _imports_5,
                    alt: "quote"
                  }),
                  createVNode("div", { class: "testimonial__avater-thumb-5" }, [
                    createVNode("img", {
                      src: item.user,
                      alt: "user img"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "testimonial__content-5" }, [
                    createVNode("p", null, toDisplayString(item.desc), 1)
                  ]),
                  createVNode("div", { class: "testimonial__avater-info-5" }, [
                    createVNode("h3", { class: "testimonial__avater-title-5" }, toDisplayString(item.name), 1),
                    createVNode("span", { class: "testimonial__avater-designation-5" }, toDisplayString(item.title), 1)
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
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/ServicesThreeTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServicesThreeTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ServicesThreeTestimonial as S
};
//# sourceMappingURL=ServicesThreeTestimonial-D6nsz9gH.js.map
