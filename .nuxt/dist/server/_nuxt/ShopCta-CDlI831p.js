import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const bg = "" + __buildAssetsURL("cta-bg-1.DZiUCV_W.jpg");
const _sfc_main = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "cta__area pt-50 pb-50 p-relative include-bg jarallax",
    style: { backgroundImage: `url(${$data.bg})` }
  }, _attrs))}><div class="container"><div class="cta__inner-13 white-bg"><div class="row align-items-center"><div class="col-xl-6 col-lg-6"><div class="cta__content-13"><h3 class="cta__title-13">Subscribe for <br>Latest Trends &amp; Offers</h3></div></div><div class="col-xl-6 col-lg-6"><div class="cta__form-13"><form action="#"><div class="cta__input-13"><input type="email" placeholder="Enter Your Email"><button type="submit" class="tp-btn">Subscribe</button></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta/ShopCta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShopCta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ShopCta as S
};
//# sourceMappingURL=ShopCta-CDlI831p.js.map
