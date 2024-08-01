import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const bg = "" + __buildAssetsURL("portfolio-breadcrumb-1.dGCHCC_t.jpg");
const _sfc_main = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "breadcrumb__area breadcrumb__style-3 breadcrumb__spacing-2 include-bg pt-200 pb-235 grey-bg-4",
    style: { backgroundImage: `url(${$data.bg})` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-7"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span><a href="#">Business</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>Investment Trend Monitor: Top Trends in 2022 </span></div><h3 class="breadcrumb__title"> Making the world a more beautiful place. </h3><p> We are here to help you create the best <br>project out there! </p></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/PortfolioDetailsBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioDetailsBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PortfolioDetailsBreadcrumb as P
};
//# sourceMappingURL=PortfolioDetailsBreadcrumb-DYfeDjR5.js.map
