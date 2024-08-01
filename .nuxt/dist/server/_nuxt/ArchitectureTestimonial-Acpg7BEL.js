import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { _ as _imports_0$1 } from "./user-2-CWDkkzb7.js";
import { u as user_5 } from "./user-6-DCzgwACr.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { u as user_4 } from "./user-4-BaMCI89Q.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("testimonial-bg-1.DQd9tTgH.png");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgBrZaBUcMwDEV/MgGdgI5QNjAbsAGwQTcII7ACG7BBsgHZoN4AmMBIjSg+N1yt7767nOM0epEV106HFVJKN9JsrRu7rvuCE8ohQUGOMZ2j13aogHbIj0O6zHDh4ZyjMvCXx4aHnzuks00+PtPyfq/i6OUI8KGB++JagI+TQxOomlwF5WugHb1l40VLfpv1aYcmEMGxyc4jODaawASOvOwTOHa9rFBTg+BIi6O39hl8GdHiOCYgI4jS3OP/Ueg6/l5ci3mHdXTlXTIzA5b/tc7ybzlmC9R3Pma33slDZ6zgcaCWtGwyp5UMBGuOHhwz2pm9CYTs/A0cgXZIyQ5WugNI1hxVFZCAJ/x93VCjpx221TaNnnbonp0FKu5dj3ZY4EcWuIcT2mElywNf4IRyWMZDWj6ZkrUPcNDkkBtfs4xHHQWcNDmsbBoUQOJ1/AC05beuGt9++gAAAABJRU5ErkJggg==";
const _sfc_main = defineComponent({
  components: { Carousel, Slide },
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      currentSlide: 1,
      testimonial_items: [
        {
          id: 1,
          desc: "“Thank you guys for your excellent efforts and commitment in assisting us in our project! I would like to express my thanks for the work you have done!”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible"
        },
        {
          id: 2,
          desc: "“There are many variations passages Lorem Ipsum available the   majority suffered alteration in some form by injected humour look embarrassing in middle”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible"
        },
        {
          id: 3,
          desc: "“Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore est aliquid repellat.”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible"
        },
        {
          id: 4,
          desc: "“Quia dolore eosaut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible"
        }
      ],
      testimonial_thumbs: [
        { id: 0, thumb: _imports_0$1 },
        { id: 1, thumb: user_5 },
        { id: 2, thumb: user_3 },
        { id: 3, thumb: user_4 }
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
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial__area black-bg-12 pt-145 pb-100" }, _attrs))} data-v-b6c61f96><div class="container" data-v-b6c61f96><div class="row justify-content-center" data-v-b6c61f96><div class="col-xxl-12" data-v-b6c61f96><div class="testimonial__wrapper-8 z-index-1 p-relative pl-200 pr-200" data-v-b6c61f96><div class="testimonial__shape" data-v-b6c61f96><img class="testimonial__shape-8"${ssrRenderAttr("src", _imports_0)} alt="" data-v-b6c61f96></div><div class="testimonial__slider p-relative" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000" data-v-b6c61f96><div class="testimonial__slider-active-8 swiper-container" data-v-b6c61f96>`);
  _push(ssrRenderComponent(_component_Carousel, {
    ref: "slider_1",
    id: "gallery",
    "items-to-show": 1,
    "wrap-around": true,
    modelValue: _ctx.currentSlide,
    "onUpdate:modelValue": ($event) => _ctx.currentSlide = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.testimonial_items, (item, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "testimonial__item-8"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__content-8 text-center" data-v-b6c61f96${_scopeId2}><div class="testimonial__shape-quote-8" data-v-b6c61f96${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b6c61f96${_scopeId2}></div><p data-v-b6c61f96${_scopeId2}>${ssrInterpolate(item.desc)}</p><div class="testimonial__avater-info-8" data-v-b6c61f96${_scopeId2}><h3 class="testimonial__avater-title-8" data-v-b6c61f96${_scopeId2}>${ssrInterpolate(item.name)}</h3><span class="testimonial__avater-designation-8" data-v-b6c61f96${_scopeId2}>${ssrInterpolate(item.designation)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__content-8 text-center" }, [
                    createVNode("div", { class: "testimonial__shape-quote-8" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      })
                    ]),
                    createVNode("p", null, toDisplayString(item.desc), 1),
                    createVNode("div", { class: "testimonial__avater-info-8" }, [
                      createVNode("h3", { class: "testimonial__avater-title-8" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "testimonial__avater-designation-8" }, toDisplayString(item.designation), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.testimonial_items, (item, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "testimonial__item-8"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__content-8 text-center" }, [
                  createVNode("div", { class: "testimonial__shape-quote-8" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: ""
                    })
                  ]),
                  createVNode("p", null, toDisplayString(item.desc), 1),
                  createVNode("div", { class: "testimonial__avater-info-8" }, [
                    createVNode("h3", { class: "testimonial__avater-title-8" }, toDisplayString(item.name), 1),
                    createVNode("span", { class: "testimonial__avater-designation-8" }, toDisplayString(item.designation), 1)
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
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Carousel, {
    id: "thumbnails",
    "items-to-show": 3,
    "wrap-around": true,
    modelValue: _ctx.currentSlide,
    "onUpdate:modelValue": ($event) => _ctx.currentSlide = $event,
    ref: "carousel",
    class: "testimonial__slider-8-thumb"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.testimonial_thumbs, (item, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "testimonial__avater-8 text-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__avater-thumb-8" data-v-b6c61f96${_scopeId2}><img${ssrRenderAttr("src", item.thumb)} alt="thumb" data-v-b6c61f96${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", {
                    onClick: ($event) => _ctx.slideTo(item.id),
                    class: "testimonial__avater-thumb-8"
                  }, [
                    createVNode("img", {
                      src: item.thumb,
                      alt: "thumb"
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
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.testimonial_thumbs, (item, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "testimonial__avater-8 text-center"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  onClick: ($event) => _ctx.slideTo(item.id),
                  class: "testimonial__avater-thumb-8"
                }, [
                  createVNode("img", {
                    src: item.thumb,
                    alt: "thumb"
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
  _push(`<div class="testimonial-slider-dot-8 tp-swiper-dot tp-swiper-dot-2 text-center d-md-none" data-v-b6c61f96></div></div><div class="testimonial__slider-arrow-8 d-none d-md-block" data-v-b6c61f96><button class="testimonial-8-button-prev" data-v-b6c61f96><i class="fa-regular fa-chevron-left" data-v-b6c61f96></i></button><button class="testimonial-8-button-next" data-v-b6c61f96><i class="fa-regular fa-chevron-right" data-v-b6c61f96></i></button></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/ArchitectureTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArchitectureTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6c61f96"]]);
export {
  ArchitectureTestimonial as A
};
//# sourceMappingURL=ArchitectureTestimonial-Acpg7BEL.js.map
