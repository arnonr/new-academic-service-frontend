import { Carousel, Slide } from "vue3-carousel";
import { _ as _imports_0$1, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { u as user_4 } from "./user-14-wrvREx19.js";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const user_5 = "" + __buildAssetsURL("user-15.CYxF360i.jpg");
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEKSURBVHgB7Za7DoJAEEXHFQwENRbaUej//4+VmlgSCwtF3uAsSERhHzBUxpNAINxwdnZnAxOomIKYHI8C5EzwYJLnGQa2K3yPLc4YGcDxIpHhIHdrHI9ElMZMLilD+CLXEj/f2HJJOdiZIjAef9HPiJYZkGC5pmifA4kk0RCFvJoUSCSRhsiJgIynI2IhkKhmxFCHztSKfH5SVDTKtIUaotMdSEwfeMoUoiKsQ8OxgvpKskZzH0iU6xsrRJ+hYZi35p2hE+oPH6gXKETtUH/a3drRDAviBuW0u7VDdCA2wbulJaLuUD+szmn/WqMhG5Q1fsPE3YoVma+pcninDajGjStBgN8s7ypKPQGoslzxtug8uAAAAABJRU5ErkJggg==";
const _sfc_main = {
  components: { Carousel, Slide },
  data() {
    return {
      currentSlide: 1,
      slider_thumb_nav: [
        { id: 0, user: _imports_0$1 },
        { id: 1, user: _imports_1 },
        { id: 2, user: user_3 },
        { id: 3, user: user_4 },
        { id: 4, user: user_5 }
      ],
      testimonial_data: [
        {
          id: 1,
          heading: "Great Effort From Team",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Shahnewaz Sakil"
        },
        {
          id: 2,
          heading: "Happy to deal with them",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Steven Smith"
        },
        {
          id: 3,
          heading: "Awesome product features",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Jahanara Bibi"
        },
        {
          id: 4,
          heading: "Their support is so cool",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Jinny Carter"
        },
        {
          id: 5,
          heading: "Happy to deal with them",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Shanelle Blake"
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial__area pt-130 pb-135" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-9 is-center mb-60"><span class="section__title-pre-9">TESTIMONIAL</span><h3 class="section__title-9">People talk about us</h3></div></div></div><div class="row justify-content-center"><div class="col-xxl-12"><div class="testimonial__slider-9 p-relative">`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "slider_1",
    id: "gallery",
    class: "testimonial__slider-active-9",
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
            class: "testimonial__item-9"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__content-9 text-center"${_scopeId2}><div class="testimonial__shape-quote-9"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="quote"${_scopeId2}></div><h4 class="testimonial-heading"${_scopeId2}>${ssrInterpolate(item.heading)}</h4><p${_scopeId2}>${item.desc ?? ""}</p><div class="testimonial__avater-info-9"${_scopeId2}><h3 class="testimonial__avater-title-9"${_scopeId2}>${ssrInterpolate(item.name)}</h3></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__content-9 text-center" }, [
                    createVNode("div", { class: "testimonial__shape-quote-9" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "quote"
                      })
                    ]),
                    createVNode("h4", { class: "testimonial-heading" }, toDisplayString(item.heading), 1),
                    createVNode("p", {
                      innerHTML: item.desc
                    }, null, 8, ["innerHTML"]),
                    createVNode("div", { class: "testimonial__avater-info-9" }, [
                      createVNode("h3", { class: "testimonial__avater-title-9" }, toDisplayString(item.name), 1)
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
              class: "testimonial__item-9"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__content-9 text-center" }, [
                  createVNode("div", { class: "testimonial__shape-quote-9" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "quote"
                    })
                  ]),
                  createVNode("h4", { class: "testimonial-heading" }, toDisplayString(item.heading), 1),
                  createVNode("p", {
                    innerHTML: item.desc
                  }, null, 8, ["innerHTML"]),
                  createVNode("div", { class: "testimonial__avater-info-9" }, [
                    createVNode("h3", { class: "testimonial__avater-title-9" }, toDisplayString(item.name), 1)
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
  _push(`<div class="row justify-content-center"><div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-8">`);
  _push(ssrRenderComponent(_component_Carousel, {
    id: "thumbnails",
    autoplay: 8e3,
    "items-to-show": 3,
    "wrap-around": true,
    modelValue: $data.currentSlide,
    "onUpdate:modelValue": ($event) => $data.currentSlide = $event,
    ref: "carousel",
    class: "testimonial__slider-nav-9 mt-35 mb-15 ml-25 mr-25"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_thumb_nav, (item, i) => {
          _push2(ssrRenderComponent(_component_Slide, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__slider-9-thumb-nav"${_scopeId2}><div class="tp-border-loader"${_scopeId2}><svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><circle cx="58" cy="58" r="56.5" stroke-width="0"${_scopeId2}></circle><circle cx="58" cy="58" r="56.5" stroke-width="3" stroke-linecap="round" style="${ssrRenderStyle({ "stroke-dashoffset": "-356px", "stroke-dasharray": "0px, 366px" })}"${_scopeId2}></circle></svg></div><img${ssrRenderAttr("src", item.user)} alt="user"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "testimonial__slider-9-thumb-nav",
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
                          "stroke-width": "0"
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
                  class: "testimonial__slider-9-thumb-nav",
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
                        "stroke-width": "0"
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
  _push(`</div></div><div class="testimonial__slider-arrow-9 d-none d-md-block"><button type="button" class="slick-prev testimonial-9-button-prev slick-arrow"><i class="fa-regular fa-arrow-left"></i><span>Preview</span></button><button type="button" class="slick-next testimonial-9-button-next slick-arrow"><span>Next</span><i class="fa-regular fa-arrow-right"></i></button></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/PersonalPortTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PersonalPortTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PersonalPortTestimonial as P
};
//# sourceMappingURL=PersonalPortTestimonial-BsptoV2L.js.map
