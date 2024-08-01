import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import Footer from "./Footer-85SZoxrw.js";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
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
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$1 = {
  components: { CommonBreadcrumb: TeamBreadcrumb, Social: __nuxt_component_0 }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_social = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our socials",
    subtitle: "Elements"
  }, null, _parent));
  _push(`<div class="tp-social-icon pt-90 pb-90"><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Social Icon Style</h3></div></div></div><div class="row"><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social black-bg-5 text-center pt-50 pb-50 mb-30">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-4 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-green">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-3 black-bg-5 text-center pt-50 pb-50 mb-30">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-2 text-center pt-50 pb-50 mb-30">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-9 text-center pt-50 pb-50 d-block mb-30" data-bg-color="footer-bg-grey">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-5 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-black">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-6 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-black-2">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__style-green text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-green-dark"><div class="footer__social">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-8 text-center pt-50 pb-50 black-bg-5 mb-30">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="footer__social-10 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-black-4">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="subscribe__social khaki-bg text-center pt-50 pb-50 mb-30">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div><div class="col-lg-3 col-md-6 col-sm-6"><div class="postbox__share text-center pt-50 pb-50 grey-bg-4 mb-30">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-social/ElSocialStyleMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElSocialStyleMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElSocialStyleMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Social - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_el_social_style_main = resolveComponent("el-social-style-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_social_style_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-social.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsSocial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsSocial as default
};
//# sourceMappingURL=elements-social-BXE4R5xP.js.map
