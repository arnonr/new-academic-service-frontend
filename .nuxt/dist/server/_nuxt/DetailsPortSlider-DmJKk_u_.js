import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { i as img_1, a as img_2, b as img_3 } from "./portfolio-details-slider-3-C4_EA1HL.js";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  components: { Carousel, Slide, Pagination, Navigation },
  props: {
    spacing: {
      type: String,
      default: "120"
    }
  },
  data() {
    return {
      images: [img_1, img_2, img_3, img_2, img_1]
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
  },
  setup() {
    return {
      // modules: [Pagination,Navigation],
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `portfolio__area fix pb-${$props.spacing}`
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xl-12"><div class="portfolio__details-slider-2 p-relative pl-50 pr-50">`);
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
    class: "portfolio__details-slider-active-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.images, (img, i) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: i,
            class: "portfolio__details-slider-item-2 w-img"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", img)} alt="slider img"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: img,
                    alt: "slider img"
                  }, null, 8, ["src"])
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
              class: "portfolio__details-slider-item-2 w-img"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: img,
                  alt: "slider img"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="portfolio__details-arrow portfolio-details-slider-arrow-2 d-none d-md-block"><button type="button" class="portfolio-details-2-button-prev slick-prev slick-arrow"><i class="fa-regular fa-arrow-left"></i></button><button type="button" class="portfolio-details-2-button-next slick-next slick-arrow"><i class="fa-regular fa-arrow-right"></i></button></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/details-slider/DetailsPortSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DetailsPortSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  DetailsPortSlider as D
};
//# sourceMappingURL=DetailsPortSlider-DmJKk_u_.js.map
