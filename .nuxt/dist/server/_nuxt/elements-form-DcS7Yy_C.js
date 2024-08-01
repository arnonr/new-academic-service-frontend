import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { _ as __nuxt_component_2 } from "./HelpCenterContact-BfPvKKdN.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { L as LawyerContact } from "./LawyerContact-C7Uaycad.js";
import { P as PersonalPortContact } from "./PersonalPortContact-BQ0BNyyw.js";
import { V as VerticalSliderItemFive } from "./VerticalSliderItemFive-oDt9BQmI.js";
import { P as PortfolioCommentArea } from "./PortfolioCommentArea-DyU097Z3.js";
import { C as ContactForm } from "./ContactForm-BM-lDPxZ.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "./NiceSelect-Em7NpCoz.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$2 = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { ContactForm }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_contact_form = resolveComponent("contact-form");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact__form-area pt-120 pb-120" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="contact__form-2"><h3 class="contact__form-2-title">Send a message</h3>`);
  _push(ssrRenderComponent(_component_contact_form, {
    style_2: $props.el_style ? true : false
  }, null, _parent));
  _push(`<p class="ajax-response"></p></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-form/ContactFormArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactFormArea = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    LawyerContact,
    PersonalPortContact,
    VerticalSliderItemFive,
    ContactFormArea,
    PortfolioCommentArea,
    HelpCenterContact: __nuxt_component_2
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_lawyer_contact = resolveComponent("lawyer-contact");
  const _component_personal_port_contact = resolveComponent("personal-port-contact");
  const _component_vertical_slider_item_five = resolveComponent("vertical-slider-item-five");
  const _component_contact_form_area = resolveComponent("contact-form-area");
  const _component_portfolio_comment_area = resolveComponent("portfolio-comment-area");
  const _component_help_center_contact = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our form styles",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_lawyer_contact, { el_style: true }, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_personal_port_contact, { el_style: true }, null, _parent));
  _push(`<div class="contact__area grey-bg-18 pt-60 pb-120"><div class="container">`);
  _push(ssrRenderComponent(_component_vertical_slider_item_five, { el_style: true }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_contact_form_area, null, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_comment_area, null, null, _parent));
  _push(ssrRenderComponent(_component_contact_form_area, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_help_center_contact, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-form/ElementFormMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementFormMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementFormMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Form - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_element_form_main = resolveComponent("element-form-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_element_form_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsForm as default
};
//# sourceMappingURL=elements-form-DcS7Yy_C.js.map
