import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
const bg = "" + __buildAssetsURL("cta-bg.Bwmzw1Nd.png");
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bg
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `cta__area cta__style-2 p-relative z-index-1 ${$props.el_style ? "pb-120 pt-120" : ""}`
  }, _attrs))}>`);
  if (!$props.el_style) {
    _push(`<div class="cta__half-bg"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container"><div class="cta__inner-5" data-bg-color="blue-dark"><div class="cta__shape-bg include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="row align-items-center"><div class="col-xxl-8 col-xl-8 col-lg-8"><div class="cta__content-5"><span>Get to meet Your Next Agency</span><h3 class="cta__title-5"> Let’s talk about your next business challenge </h3></div></div><div class="col-xxl-4 col-xl-4 col-lg-4"><div class="cta__btn-5 text-lg-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-orange-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get in Touch`);
      } else {
        return [
          createTextVNode("Get in Touch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta/AboutCta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutCta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AboutCta as A
};
//# sourceMappingURL=AboutCta-BKFRSas-.js.map
