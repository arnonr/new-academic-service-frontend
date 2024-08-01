import { b as bg } from "./contact-bg-SfnorwoL.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  data() {
    return { bg };
  },
  props: {
    title: String,
    subtitle: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "tp-section-area p-relative z-index-1 tp-section-spacing" }, _attrs))}><div class="tp-section-bg include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row justify-content-center"><div class="col-xl-7 col-lg-8"><div class="tp-section-wrapper-2 text-center"><h3 class="tp-section-title-2 font-70">${ssrInterpolate($props.title)}</h3><p>${$props.subtitle ?? ""}</p></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/policy-terms/SectionTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SectionTitle as S
};
//# sourceMappingURL=SectionTitle-BBWVmuyG.js.map
