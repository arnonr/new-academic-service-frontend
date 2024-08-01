import { Carousel, Slide } from "vue3-carousel";
import { _ as _imports_0, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { u as user_4 } from "./user-4-BaMCI89Q.js";
import { u as user_5, a as user_6 } from "./user-6-DCzgwACr.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const bg = "" + __buildAssetsURL("testimonial-shape-1.BQR8ca2v.png");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { Carousel, Slide },
  data() {
    return {
      currentSlide: 1,
      // bg
      bg,
      // slider_thumb_nav
      slider_thumb_nav: [
        { id: 0, user: _imports_0 },
        { id: 1, user: _imports_1 },
        { id: 2, user: user_3 },
        { id: 3, user: user_4 },
        { id: 4, user: user_5 },
        { id: 5, user: user_6 }
      ],
      //  testimonial_data
      testimonial_data: [
        {
          id: 1,
          desc: "“ There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
          name: "Fleece Harrygold",
          designation: "Project Manager"
        },
        {
          id: 2,
          desc: "“ Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text There are many variations passages Lorem  ”",
          name: "Naim Ahmed",
          designation: "Developer"
        },
        {
          id: 3,
          desc: "“ Suffered alteration in some form by injected humour randomised There are many variations passages Lorem Ipsum available but the majority look embarrassing hidden in middle text ”",
          name: "Stiven Smith",
          designation: "Themepure Member"
        },
        {
          id: 4,
          desc: "“  Humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected hidden in middle text ”",
          name: "Gomz Itsa",
          designation: "Designer"
        },
        {
          id: 5,
          desc: "“ Injected humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by  hidden in middle text ”",
          name: "Unika Kala",
          designation: "UI/UX Designer"
        },
        {
          id: 6,
          desc: "“ Lorem Ipsum available but the majority suffered there are many variations passages alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
          name: "Helen Klintong",
          designation: "SEO Expert"
        }
      ]
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    handlePrev() {
      var _a;
      (_a = this.$refs.slider_1) == null ? void 0 : _a.prev();
    },
    handleNext() {
      var _a;
      (_a = this.$refs.slider_1) == null ? void 0 : _a.next();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `testimonial__area p-relative z-index-1 ${$props.el_style ? "pt-120 pb-140" : ""}`
  }, _attrs))}>`);
  if (!$props.el_style) {
    _push(`<div class="testimonial__bg"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-2 text-center mb-60"><span class="section__title-pre-2">TESTIMONIALS</span><h3 class="section__title-2">What My Clients Say</h3></div></div></div><div class="testimonial__inner-2 z-index-1 p-relative wow fadeInUp" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000" data-bg-color="theme-2" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"><div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-10 col-md-11"><div class="testimonial__slider-2"><div class="row justify-content-center"><div class="col-xxl-5 col-xl-5 col-lg-7 col-md-8 col-sm-8 col-8">`);
  _push(ssrRenderComponent(_component_Carousel, {
    id: "thumbnails",
    autoplay: 8e3,
    "items-to-show": 3,
    "wrap-around": true,
    modelValue: $data.currentSlide,
    "onUpdate:modelValue": ($event) => $data.currentSlide = $event,
    ref: "carousel",
    class: "testimonial__slider-nav"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_thumb_nav, (item, i) => {
          _push2(ssrRenderComponent(_component_Slide, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__slider-thumb-nav"${_scopeId2}><div class="tp-border-loader"${_scopeId2}><svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><circle cx="58" cy="58" r="56.5" stroke-width="1"${_scopeId2}></circle><circle cx="58" cy="58" r="56.5" stroke-width="3" stroke-linecap="round" style="${ssrRenderStyle({ "stroke-dashoffset": "-356px", "stroke-dasharray": "0px, 366px" })}"${_scopeId2}></circle></svg></div><img${ssrRenderAttr("src", item.user)} alt="user"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "testimonial__slider-thumb-nav",
                    onClick: ($event) => $options.slideTo(item.id)
                  }, [
                    createVNode("div", { class: "tp-border-loader" }, [
                      (openBlock(), createBlock("svg", {
                        width: "116",
                        height: "116",
                        viewBox: "0 0 116 116",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("circle", {
                          cx: "58",
                          cy: "58",
                          r: "56.5",
                          "stroke-width": "1"
                        }),
                        createVNode("circle", {
                          cx: "58",
                          cy: "58",
                          r: "56.5",
                          "stroke-width": "3",
                          "stroke-linecap": "round",
                          style: { "stroke-dashoffset": "-356px", "stroke-dasharray": "0px, 366px" }
                        })
                      ]))
                    ]),
                    createVNode("img", {
                      src: item.user,
                      alt: "user"
                    }, null, 8, ["src"])
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_thumb_nav, (item, i) => {
            return openBlock(), createBlock(_component_Slide, { key: i }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "testimonial__slider-thumb-nav",
                  onClick: ($event) => $options.slideTo(item.id)
                }, [
                  createVNode("div", { class: "tp-border-loader" }, [
                    (openBlock(), createBlock("svg", {
                      width: "116",
                      height: "116",
                      viewBox: "0 0 116 116",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("circle", {
                        cx: "58",
                        cy: "58",
                        r: "56.5",
                        "stroke-width": "1"
                      }),
                      createVNode("circle", {
                        cx: "58",
                        cy: "58",
                        r: "56.5",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        style: { "stroke-dashoffset": "-356px", "stroke-dasharray": "0px, 366px" }
                      })
                    ]))
                  ]),
                  createVNode("img", {
                    src: item.user,
                    alt: "user"
                  }, null, 8, ["src"])
                ], 8, ["onClick"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "slider_1",
    id: "gallery",
    class: "testimonial__slider-active-2",
    "items-to-show": 1,
    "wrap-around": true,
    modelValue: $data.currentSlide,
    "onUpdate:modelValue": ($event) => $data.currentSlide = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonial_data, (item, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "testimonial__item-2"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__content-2"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><div class="testimonial__avater-info-2"${_scopeId2}><h3 class="testimonial__avater-title-2"${_scopeId2}>${ssrInterpolate(item.name)}</h3><span class="testimonial__avater-designation-2"${_scopeId2}>${ssrInterpolate(item.designation)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__content-2" }, [
                    createVNode("p", null, toDisplayString(item.desc), 1),
                    createVNode("div", { class: "testimonial__avater-info-2" }, [
                      createVNode("h3", { class: "testimonial__avater-title-2" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "testimonial__avater-designation-2" }, toDisplayString(item.designation), 1)
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
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "testimonial__item-2"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__content-2" }, [
                  createVNode("p", null, toDisplayString(item.desc), 1),
                  createVNode("div", { class: "testimonial__avater-info-2" }, [
                    createVNode("h3", { class: "testimonial__avater-title-2" }, toDisplayString(item.name), 1),
                    createVNode("span", { class: "testimonial__avater-designation-2" }, toDisplayString(item.designation), 1)
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
  _push(`</div></div></div><div class="testimonial__slider-arrow-2"><button type="button" class="slick-prev testimonial-2-button-prev slick-arrow"><i class="fa-solid fa-arrow-left"></i></button><button type="button" class="slick-next testimonial-2-button-next slick-arrow"><i class="fa-solid fa-arrow-right"></i></button></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/FreelancerTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FreelancerTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FreelancerTestimonial as F
};
//# sourceMappingURL=FreelancerTestimonial-DiTUMU3y.js.map
