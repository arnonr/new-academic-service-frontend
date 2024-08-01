import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("subscribe-shape-1.DdfkCXzr.png");
const _imports_1 = "" + __buildAssetsURL("subscribe-shape-2.CoLGu73A.png");
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
    class: `subscribe__area p-relative z-index-1 ${$props.el_style ? "pt-120 pb-120" : "pt-70 grey-bg-7"}`
  }, _attrs))}>`);
  if (!$props.el_style) {
    _push(`<div class="subscribe__overlay"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container"><div class="subscribe__inner p-relative z-index-1 theme-bg-6 fix"><div class="subscribe__shape"><img class="subscribe__shape-1"${ssrRenderAttr("src", _imports_0)} alt="subscribe__shape"><img class="subscribe__shape-2"${ssrRenderAttr("src", _imports_1)} alt="subscribe__shape"></div><div class="row justify-content-center"><div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11"><div class="subscribe__wrapper text-center"><h3 class="subscribe__title">Subscriber to Newsletter</h3><p>Uncover,analyze,track,and report on SEO data.</p><div class="subscribe__form text-start"><form><div class="subscribe__input"><input type="email" placeholder="Enter your email address..."><button type="submit">Subscribe</button></div></form><div class="subscribe__form-list text-sm-center"><ul><li><span><i class="fa-regular fa-check"></i> No credit card required </span></li><li><span><i class="fa-regular fa-check"></i> Cancel anytime </span></li></ul></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta/CreativeCtaTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreativeCtaTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CreativeCtaTwo as C
};
//# sourceMappingURL=CreativeCtaTwo-DLDNjFGv.js.map
