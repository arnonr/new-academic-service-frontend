import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { S as SectionTitle } from "./SectionTitle-BBWVmuyG.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "./contact-bg-SfnorwoL.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "policy__area pb-120" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xl-10"><div class="policy__wrapper policy__translate p-relative z-index-1"><div class="policy__item mb-35"><h4 class="policy__meta">Effective date: May 25, 2023</h4><p> Harry knows that you care about how your personal information is used and shared, and Harry takes your privacy seriously. Please read the following to learn more about Harry Privacy Policy (“Privacy Policy”). This Privacy Policy also tells you about your rights and choices with respect to your Personal Information, and how you can reach us to update your contact information or get answers to questions you may have about our privacy practices. </p><p> By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that Harry will collect, use, and share your information in the following ways. Remember that your use of Services is at all times subject to the Terms as set forth at https://harry.com/legal/terms, which incorporate this Privacy Policy. Any terms Harry uses in this Privacy Policy without defining them have the definitions given to them in the Terms. </p></div><div class="policy__item policy__item-2 mb-35"><h3 class="policy__title">Information Collection</h3><p> You can visit and enjoy our Website without disclosing any Personal Information about yourself. However, for the Service to work properly we will need you to share with us certain Personal Information. </p><p> For the purposes of this Privacy Policy, “Personal Information” means information that identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, with a particular consumer, device or household. It does not include de-identified or aggregate information, or public information lawfully available from governmental records. </p></div><div class="policy__list mb-35"><h3 class="policy__title">Use of Personal Information</h3><ul><li>To provide and maintain the Service;</li><li>To detect, prevent and address technical issues;</li><li> To register you as a user and to provide the services you require; </li><li> To decide whether to offer you a Capchase product or service; </li><li>To notify you about changes to our Service;</li><li>To provide customer care and support;</li></ul></div><div class="policy__contact"><h3 class="policy__title policy__title-2">Contact us</h3><p>You may contact us at any time via:</p><ul><li> Email: <span><a href="mailto:harry.com">support@harry.com</a></span></li></ul><div class="policy__address"><p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">harry PTY LTD <br> 4270, Brisbane, Australia</a></p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/policy-terms/PolicyArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PolicyArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    SectionTitle,
    PolicyArea,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Policy - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_section_title = resolveComponent("section-title");
  const _component_policy_area = resolveComponent("policy-area");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_section_title, {
    title: "Privacy Policy",
    subtitle: "Your privacy is important to us. It is Harry’s policy to respect your privacy regarding <br> any  information we may collect from you across our website, https:// Harry.com, <br> and other sites we own and operate."
  }, null, _parent));
  _push(ssrRenderComponent(_component_policy_area, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const policy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  policy as default
};
//# sourceMappingURL=policy-CAh_eqTK.js.map
