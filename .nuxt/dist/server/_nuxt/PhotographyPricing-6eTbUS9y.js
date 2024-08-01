import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("price-shape-1.Bpyz8NIH.png");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pricing_data: [
        {
          category: "Basic",
          category_class: "",
          price: "169",
          delay: "130",
          features: [
            {
              position: "left",
              lists: [
                { denied: false, list: "1-4 persons" },
                { denied: false, list: "24 hours turnaround" }
              ]
            },
            {
              position: "right",
              lists: [
                { denied: true, list: "Photo shoot session" },
                { denied: true, list: "All photos delivered on usb" }
              ]
            }
          ]
        },
        {
          category: "Standard",
          category_class: "standard",
          price: "253",
          delay: "150",
          features: [
            {
              position: "left",
              lists: [
                { denied: false, list: "1-4 persons" },
                { denied: false, list: "24 hours turnaround" }
              ]
            },
            {
              position: "right",
              lists: [
                { denied: false, list: "Photo shoot session" },
                { denied: true, list: "All photos delivered on usb" }
              ]
            }
          ]
        },
        {
          category: "Premium",
          category_class: "premium",
          price: "364",
          delay: "170",
          features: [
            {
              position: "left",
              lists: [
                { denied: false, list: "1-4 persons" },
                { denied: false, list: "24 hours turnaround" }
              ]
            },
            {
              position: "right",
              lists: [
                { denied: false, list: "Photo shoot session" },
                { denied: false, list: "All photos delivered on usb" }
              ]
            }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `pricing__area p-relative z-index-1 black-bg-5 ${$props.el_style ? "pt-110 pb-120" : "pt-80 pb-120"}`
  }, _attrs))}><div class="pricing__shape"><img class="pricing__shape-1"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="container"><div class="row justify-content-center"><div class="col-xxl-6 col-xl-6"><div class="section__title-wrapper-3 text-center mb-60"><span class="section__title-pre-3 has-center">03 . PROFESSIONAL</span><h3 class="section__title-3 has-gradient"> Simple, transparent <span> Pricing.</span></h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.pricing_data, (item, i) => {
    _push(`<div class="col-lg-12 col-md-6"><div class="pricing__item mb-20" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="row align-items-center"><div class="col-xxl-3 col-xl-3 col-lg-3"><div class="pricing__content text-center text-lg-start"><div class="pricing__category"><span class="{category_class}">${ssrInterpolate(item.category)}</span></div><h3 class="pricing__title"> $${ssrInterpolate(item.price)} <span class="pricing-currency"> USD</span></h3></div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="pricing__feature d-lg-flex align-items-center justify-content-between"><!--[-->`);
    ssrRenderList(item.features, (f, i2) => {
      _push(`<div class="${ssrRenderClass(`pricing__feature-${f.position}`)}"><ul><!--[-->`);
      ssrRenderList(f.lists, (l, i3) => {
        _push(`<li class="${ssrRenderClass(`${l.denied ? "has-denied" : ""}`)}">${ssrInterpolate(l.list)}</li>`);
      });
      _push(`<!--]--></ul></div>`);
    });
    _push(`<!--]--></div></div><div class="col-xxl-3 col-xl-3 col-lg-3"><div class="pricing__btn text-center text-lg-end">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/contact-2",
      class: "tp-btn-border-3"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Choose Plan `);
        } else {
          return [
            createTextVNode(" Choose Plan ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/PhotographyPricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PhotographyPricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PhotographyPricing as P
};
//# sourceMappingURL=PhotographyPricing-6eTbUS9y.js.map
