import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { J as JobArea } from "./JobArea-D1hzFYE8.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "klona";
import "devalue";
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "tp-section-area pt-120" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-5 text-center mb-85"><span class="tp-section-subtitle-5">Open Positions</span><h3 class="tp-section-title-5"> We’re looking for talented people </h3><p>We’re 100% remote team spread all across the world.Join us!</p></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/job/JobSectionTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + __buildAssetsURL("job-img-1.CKY1iVoV.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "job__bg-thumb-area job__box-145" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-xxl-12"><div class="job__bg-thumb m-img text-center"><img${ssrRenderAttr("src", _imports_0)} alt="job-img"></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/job/JobThumbArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    JobSectionTitle: __nuxt_component_0,
    JobThumbArea: __nuxt_component_1,
    JobArea,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Job - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_job_section_title = __nuxt_component_0;
  const _component_job_thumb_area = __nuxt_component_1;
  const _component_job_area = resolveComponent("job-area");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_job_section_title, null, null, _parent));
  _push(ssrRenderComponent(_component_job_thumb_area, null, null, _parent));
  _push(ssrRenderComponent(_component_job_area, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/job.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const job = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  job as default
};
//# sourceMappingURL=job-D2vWQWko.js.map
