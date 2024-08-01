import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    career_data: {
      type: Array,
      default: []
    },
    style_2: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `career__wrapper ${$props.style_2 ? $props.style_2 : ""} pl-60`
  }, _attrs))}>`);
  if ($props.style_2) {
    _push(`<h4 class="career__title">Experience</h4>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.career_data, (info, i) => {
    _push(`<div class="career__item transition-3 white-bg d-sm-flex align-items-center justify-content-between" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", info.delay)} data-sal-duration="1000"><div class="career__info d-sm-flex align-items-center"><div class="career__logo mr-20"><span><img${ssrRenderAttr("src", info.icon)} alt="icon"></span></div><div class="career__info-content"><h3 class="career__info-title">${ssrInterpolate(info.title)}</h3><span class="career__info-designation">${ssrInterpolate(info.designation)}</span></div></div><div class="career__year text-sm-end"><div class="career__btn"><a href="portfolio" class="career-link-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1H11V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div><div class="career__year-info"><p>${ssrInterpolate(info.year)}</p></div></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skills/CareerItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CareerItems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CareerItems as C
};
//# sourceMappingURL=CareerItems-C2bRCDQQ.js.map
