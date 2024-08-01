import { _ as __nuxt_component_0$1 } from "./ContactTopArea-COTUPh6_.js";
import { C as ContactForm } from "./ContactForm-BM-lDPxZ.js";
import { _ as _imports_1, a as _imports_0, b as _imports_2 } from "./contact-location-3-CJJ7DDnC.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
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
const _sfc_main$1 = {
  components: { ContactTopArea: __nuxt_component_0$1, ContactForm },
  data() {
    return {
      box_items: [
        {
          title: "Australia Office",
          icon: _imports_1,
          location: "contact.location@website.com",
          tel: "686-324-6838"
        },
        {
          title: "San Francisco Office",
          icon: _imports_0,
          location: "contact.location@website.com",
          tel: "888-324-6838"
        },
        {
          title: "Egpyt Office",
          icon: _imports_2,
          location: "contact.location@website.com",
          tel: "996-324-6838"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_contact_top_area = __nuxt_component_0$1;
  const _component_contact_form = resolveComponent("contact-form");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_contact_top_area, {
    title: "CONTACT US",
    subtitle: "Get in touch with us for more information"
  }, null, _parent));
  _push(`<section class="contact__form-area"><div class="container"><div class="row"><div class="col-xl-12"><div class="contact__form-2 contact__style-2 contact__translate"><h3 class="contact__form-2-title">Send a message</h3>`);
  _push(ssrRenderComponent(_component_contact_form, { style_2: true }, null, _parent));
  _push(`<p class="ajax-response"></p></div></div></div></div></section><section class="contact__loacation-box-area pt-120 pb-90"><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($data.box_items, (item, i) => {
    _push(`<div class="col-lg-4 col-md-6"><div class="contact__location-box text-center white-bg mb-30"><div class="contact__location-box-icon"><img${ssrRenderAttr("src", item.icon)} alt="icon"></div><div class="contact__location-box-content"><h3 class="contact__location-box-title">${ssrInterpolate(item.title)}</h3><div class="contact__location-box-info"><p><a href="mailto:location@website.com">${ssrInterpolate(item.location)}</a></p><p><a href="tel:686-324-6838">${ssrInterpolate(item.tel)}</a></p></div><div class="contact__location-box-btn"><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank" class="tp-btn-border"> View Location </a></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactAreaTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ContactAreaTwo: __nuxt_component_0,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Contact 2 - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_contact_area_two = __nuxt_component_0;
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_contact_area_two, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact2 as default
};
//# sourceMappingURL=contact-2-Cpnc3kID.js.map
