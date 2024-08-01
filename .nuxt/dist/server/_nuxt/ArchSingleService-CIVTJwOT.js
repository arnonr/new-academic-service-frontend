import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const ser_icon_1 = "" + __buildAssetsURL("services-1.BxgOjg9g.svg");
const ser_icon_2 = "" + __buildAssetsURL("services-2.CNw6Ft_J.svg");
const ser_icon_3 = "" + __buildAssetsURL("services-3.IjwCbnE7.svg");
const ser_icon_4 = "" + __buildAssetsURL("services-4.p-eyPKkJ.svg");
const _imports_0 = "" + __buildAssetsURL("services-shape-1.BfCYSLiK.png");
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
    class: "services__item-8 animate-border-2 d-lg-flex align-items-start transition-3 mb-30",
    "data-sal": "slide-down",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><span class="services-border-2"></span><div class="services__shape"><img class="services__shape-11"${ssrRenderAttr("src", _imports_0)} alt="services__shape"></div><div class="services__icon-8 mr-30"><span><img${ssrRenderAttr("src", $props.item.icon)} alt="icon"></span></div><div class="services__content-8"><h3 class="services__title-8">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>${ssrInterpolate($props.item.subtitle)}</p><div class="services__project-no"><span>${ssrInterpolate($props.item.project)} Project</span></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/single-service/ArchSingleService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArchSingleService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ArchSingleService as A,
  ser_icon_2 as a,
  ser_icon_3 as b,
  ser_icon_4 as c,
  ser_icon_1 as s
};
//# sourceMappingURL=ArchSingleService-CIVTJwOT.js.map
