import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `subscribe__area p-relative z-index-1 ${$props.el_style ? "pb-140" : ""}`
  }, _attrs))}>`);
  if (!$props.el_style) {
    _push(`<div class="subscribe__bg"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container"><div class="subscribe__inner-14"><div class="row gx-0 align-items-center"><div class="col-xl-5 col-lg-5"><h3 class="subscribe__title-14">Join our Newsletter</h3></div><div class="col-xl-7 col-lg-7"><div class="subscribe__form-14"><form><input type="email" placeholder="Your Email (required)"><button type="submit">Subscribe Me</button></form></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/subscribe/ServicesSubscribe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServicesSubscribe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ServicesSubscribe as S
};
//# sourceMappingURL=ServicesSubscribe-83MMWA9M.js.map
