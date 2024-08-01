import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { A as ArchitectureVideo } from "./ArchitectureVideo-BQQWAH2V.js";
import { l as lawyerVideo } from "./LawyerVideo-zRp8feJz.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _imports_4, a as _imports_5 } from "./about-play-icon-mZF1qAhz.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import Footer from "./Footer-85SZoxrw.js";
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
import "./video-icon-play-1PuRorIu.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$2 = {
  components: { VideoModal },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="about__area pt-120 pb-120 p-relative"><div class="container"><div class="row"><div class="col-xxl-12"><div class="about__video-wrapper"><div class="about__video-thumb"><img${ssrRenderAttr("src", _imports_4)} alt="about img"><div class="about__play"><a href="#" class="about__play-btn popup-video tp-pulse-border"><span class="video-play-bg"></span><img${ssrRenderAttr("src", _imports_5)} alt="icon"></a></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/7e90gBu4pas"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-video/ElVideoStyleOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ElVideoStyleOne = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { CommonBreadcrumb: TeamBreadcrumb, ElVideoStyleOne, LawyerVideo: lawyerVideo, ArchitectureVideo }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_el_video_style_one = resolveComponent("el-video-style-one");
  const _component_lawyer_video = resolveComponent("lawyer-video");
  const _component_architecture_video = resolveComponent("architecture-video");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our video styles",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_video_style_one, null, null, _parent));
  _push(ssrRenderComponent(_component_lawyer_video, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_architecture_video, { el_style: true }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-video/ElVideoMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElVideoMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElVideoMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Video - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_el_video_main = resolveComponent("el-video-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_video_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsVideo as default
};
//# sourceMappingURL=elements-video-JueWaN5W.js.map
