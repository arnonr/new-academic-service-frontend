import { b as bg } from "./contact-bg-SfnorwoL.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return { bg };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "tp-section-area p-relative z-index-1 tp-section-spacing" }, _attrs))}><div class="tp-section-bg include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row justify-content-center"><div class="col-xl-8"><div class="tp-section-wrapper-2 text-center"><span class="tp-section-subtitle-2 subtitle-mb-9">${ssrInterpolate($props.title)}</span><h3 class="tp-section-title-2 font-70">${ssrInterpolate($props.subtitle)}</h3></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactTopArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ContactTopArea-COTUPh6_.js.map
