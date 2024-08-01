import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    title: String,
    subtitle: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area grey-bg p-relative include-bg pt-100 pb-100" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-10"><div class="breadcrumb__content text-center p-relative z-index-1"><h3 class="breadcrumb__title">${ssrInterpolate($props.title)}</h3><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>${ssrInterpolate($props.subtitle)}</span></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/CartBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CartBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CartBreadcrumb as C
};
//# sourceMappingURL=CartBreadcrumb-B3rhhlcv.js.map
