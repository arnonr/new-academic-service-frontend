import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `features__item ${$props.item.color} transition-3 mb-30`,
    "data-sal": "slide-up",
    "data-sal-delay": $props.item.delay,
    "data-sal-duration": "1000"
  }, _attrs))}><div class="features__icon"><span>${$props.item.icon ?? ""}</span></div><div class="features__content"><h3 class="features__title">${ssrInterpolate($props.item.title)}</h3><p>${ssrInterpolate($props.item.subtitle)}</p><div class="features__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M43.999 22.1553H1.57262" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M33.6991 32.451L43.998 22.002L33.549 11.703" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "45",
            height: "44",
            viewBox: "0 0 45 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M43.999 22.1553H1.57262",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            createVNode("path", {
              d: "M33.6991 32.451L43.998 22.002L33.549 11.703",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/CreativeSingleFeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreativeSingleFeature = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CreativeSingleFeature as C
};
//# sourceMappingURL=CreativeSingleFeature-CQJoi3yw.js.map
