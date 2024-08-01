import { _ as __nuxt_component_0$1 } from "./ContactTopArea-COTUPh6_.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import { C as ContactForm } from "./ContactForm-BM-lDPxZ.js";
import { _ as _imports_1, a as _imports_0, b as _imports_2 } from "./contact-location-3-CJJ7DDnC.js";
import { _ as _imports_0$1, a as _imports_1$1, b as _imports_2$1 } from "./contact-icon-2-Ci3HWRNX.js";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import "./contact-bg-SfnorwoL.js";
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
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$2 = {
  props: {
    title: String,
    icon: String,
    location: String,
    tel: String
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact__location-item" }, _attrs))}><div class="row align-items-center"><div class="col-lg-9 col-md-8 col-sm-7"><div class="contact__location-content d-lg-flex align-items-center"><h3 class="contact__location-title">${ssrInterpolate($props.title)}</h3><div class="contact__location-info d-sm-flex flex-wrap align-items-center"><div class="contact__location-icon mr-45"><img${ssrRenderAttr("src", $props.icon)} alt="icon"></div><div class="contact__location-content"><p><a href="mailto:contact.location@website.com">${ssrInterpolate($props.location)}</a></p><p><a href="tel:686-324-6838">${ssrInterpolate($props.tel)}</a></p></div></div></div></div><div class="col-lg-3 col-md-4 col-sm-5"><div class="contact__location-btn text-sm-end"><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank" class="tp-btn-border"> view location </a></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactLocationItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { ContactTopArea: __nuxt_component_0$1, ContactForm, ContactLocationItem: __nuxt_component_1 },
  data() {
    return { location_icon_1: _imports_1, location_icon_2: _imports_0, location_icon_3: _imports_2 };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_contact_top_area = __nuxt_component_0$1;
  const _component_contact_form = resolveComponent("contact-form");
  const _component_contact_location_item = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_contact_top_area, {
    title: "GET TO KNOW US",
    subtitle: "Have a project in mind? Let’s talk."
  }, null, _parent));
  _push(`<div class="contact__item-area contact__translate-2"><div class="container"><div class="row"><div class="col-xl-4 col-lg-4 col-md-6"><div class="contact__item text-center mb-30 transition-3 white-bg"><div class="contact__icon"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="contact__content"><span class="contact-item-subtitle">Contact</span><p><a href="mailto:location@website.com">location@website.com</a></p><p><a href="tel:602-762-472-96">+(602) 762 472 96</a></p></div></div></div><div class="col-xl-4 col-lg-4 col-md-6"><div class="contact__item text-center mb-30 transition-3 white-bg"><div class="contact__icon"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="contact__content"><span class="contact-item-subtitle">Location</span><p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">88 New South Head Rd, Triple, New York</a></p></div></div></div><div class="col-xl-4 col-lg-4 col-md-6"><div class="contact__item text-center mb-30 transition-3 white-bg"><div class="contact__icon"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="contact__content"><span class="contact-item-subtitle">Social Media</span><p>Follow on social media</p><div class="contact__social"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div></div></div></div></div></div></div><section class="contact__form-area pt-90"><div class="container"><div class="row"><div class="col-xl-12"><div class="contact__form-2"><h3 class="contact__form-2-title">Send a message</h3>`);
  _push(ssrRenderComponent(_component_contact_form, null, null, _parent));
  _push(`<p class="ajax-response"></p></div></div></div></div></section><section class="contact__location-area pb-130 pt-110"><div class="container"><div class="row"><div class="col-xl-5 col-lg-7 offset-xl-1 col-md-8"><div class="tp-section-wrapper-2 mb-35"><span class="tp-section-subtitle-2 subtitle-mb-9">LOCATIONS</span><h3 class="tp-section-title-2 font-40">Come and visit our offices around the world</h3></div></div></div><div class="row justify-content-center"><div class="col-xl-10"><div class="contact__location-wrapper">`);
  _push(ssrRenderComponent(_component_contact_location_item, {
    title: "Australia Office",
    icon: $data.location_icon_1,
    location: "contact.location@website.com",
    tel: "686-324-6838"
  }, null, _parent));
  _push(ssrRenderComponent(_component_contact_location_item, {
    title: "San Francisco Office",
    icon: $data.location_icon_2,
    location: "contact.location@website.com",
    tel: "686-324-6810"
  }, null, _parent));
  _push(ssrRenderComponent(_component_contact_location_item, {
    title: "Egpyt Office",
    icon: $data.location_icon_3,
    location: "contact.location@website.com",
    tel: "786-324-6810"
  }, null, _parent));
  _push(`</div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ContactArea: __nuxt_component_0,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Contact - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_contact_area = __nuxt_component_0;
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_contact_area, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-eOOn3kVa.js.map
