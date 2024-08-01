import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const img_1 = "" + __buildAssetsURL("about-gallery-slider-1.CnoqT9tg.jpg");
const img_4 = "" + __buildAssetsURL("about-gallery-slider-2.BT_so7Vj.jpg");
const img_3 = "" + __buildAssetsURL("about-gallery-slider-3.Dpp2CmPb.jpg");
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      images: [img_1, img_4, img_3, img_4]
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `about__gallery-area fix ${$props.el_style ? "pt-120 pb-110" : ""}`
  }, _attrs))}><div class="container">`);
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Carousel With Arrow</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row justify-content-center"><div class="col-xl-10 col-lg-10"><div class="about__gallery-slider pl-50 pr-50 p-relative">`);
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
    class: "about__gallery-slider-active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.images, (img, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "about__gallery-item"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="about__gallery-thumb m-img"${_scopeId2}><img${ssrRenderAttr("src", img)} alt=""${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "about__gallery-thumb m-img" }, [
                    createVNode("img", {
                      src: img,
                      alt: ""
                    }, null, 8, ["src"])
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.images, (img, i) => {
            return openBlock(), createBlock(_component_Slide, {
              key: i,
              class: "about__gallery-item"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "about__gallery-thumb m-img" }, [
                  createVNode("img", {
                    src: img,
                    alt: ""
                  }, null, 8, ["src"])
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
  _push(`<div class="about__gallery-arrow d-none d-sm-block"><button type="button" class="about-button-prev slick-prev slick-arrow"><span><i class="fa-regular fa-arrow-left"></i></span></button><button type="button" class="about-button-next slick-next slick-arrow"><span><i class="fa-regular fa-arrow-right"></i></span></button></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/about-page-com/AboutGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AboutGallery as A
};
//# sourceMappingURL=AboutGallery-6wBMkzJo.js.map
