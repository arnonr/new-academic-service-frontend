import { _ as _export_sfc, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
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
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const bg$2 = "" + __buildAssetsURL("newsletter-1.CrSvkl_z.jpg");
const _sfc_main$4 = {
  data() {
    return { bg: bg$2 };
  },
  methods: {
    handleSubmit() {
      console.log("submit");
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "newsletter-demo-wrapper pt-110 pb-120 grey-bg-4" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-50 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Newsletter Classic Style</h3></div></div></div></div><div class="newsletter__area newsletter-demo"><div class="newsletter__wrapper"><div class="newsletter__close"><button type="button" class="newsletter__close-btn newsletter-close-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="newsletter__thumb include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><h3 class="newsletter__title">Keep up with our daily and weekly newsletters</h3><form><div class="newsletter__input"><input type="email" placeholder="Email address"><button type="submit">Sign Up</button></div><div class="newsletter__agree d-flex align-items-start mb-35"><input class="e-check-input" type="checkbox" id="n-agree"><label class="e-check-label" for="n-agree">The city and town name generator uses a database of over five million names across more countries</label></div><div class="newsletter__option"><p>Please, don’t ask me again</p></div></form></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-subscribe/ElSubsStyleOne.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ElSubsStyleOne = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const bg$1 = "" + __buildAssetsURL("newsletter-3.D3FKM7Uz.jpg");
const _sfc_main$3 = {
  components: { Social: __nuxt_component_0 },
  data() {
    return { bg: bg$1 };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_social = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "newsletter-demo-wrapper pt-110 pb-120 grey-bg-4" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-50 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Newsletter Ecommerce Style</h3></div></div></div></div><div class="newsletter__area newsletter__area-3 newsletter-demo"><div class="newsletter__wrapper newsletter__wrapper-3"><div class="newsletter__close newsletter__close-3"><button type="button" class="newsletter__close-btn newsletter__close-btn-3 newsletter-close-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="newsletter__thumb newsletter__thumb-3 include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><span class="newsletter__title-pre">Harry Discount</span><h3 class="newsletter__title-3">Get 16% off</h3><p>Subscribe now and receive a discount on <br> your first order</p><form action="#"><div class="newsletter__input newsletter__input-2 newsletter__input-3"><input type="email" placeholder="Your email address"><button type="button">Submit <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.4 1H13.6C14.37 1 15 1.63 15 2.4V10.8C15 11.57 14.37 12.2 13.6 12.2H2.4C1.63 12.2 1 11.57 1 10.8V2.4C1 1.63 1.63 1 2.4 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 2.39999L8 7.29999L1 2.39999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></form><div class="newsletter__proposal"><p>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Signup`);
      } else {
        return [
          createTextVNode("Signup")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` for Exclusive Updates</p></div><div class="newsletter__social">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-subscribe/ElSubsStyleThree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ElSubsStyleThree = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const bg = "" + __buildAssetsURL("newsletter-2.DHOSk_2Z.jpg");
const _sfc_main$2 = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "newsletter-demo-wrapper pt-110 pb-120 grey-bg-4" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-50 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Newsletter Modern Style</h3></div></div></div></div><div class="newsletter__area newsletter__area-2 newsletter-demo"><div class="newsletter__wrapper newsletter__wrapper-2"><div class="newsletter__close"><button type="button" class="newsletter__close-btn newsletter__close-btn-2 newsletter-close-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="newsletter__thumb newsletter__thumb-2 include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><h3 class="newsletter__title-2">Subscribe <br>Our newsletters</h3><p>The city and town name generator uses.</p><form><div class="newsletter__input newsletter__input-2 d-sm-flex align-items-center"><input type="email" placeholder="Email address"><button type="button">Subscribe</button></div><div class="newsletter__agree newsletter__agree-2 d-flex align-items-start mb-35"><input class="e-check-input" type="checkbox" id="h-agree"><label class="e-check-label" for="h-agree">I agree to the `);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy.`);
      } else {
        return [
          createTextVNode("Privacy Policy.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</label></div></form></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-subscribe/ElSubsStyleTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ElSubsStyleTwo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    ElSubsStyleOne,
    ElSubsStyleTwo,
    ElSubsStyleThree
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_el_subs_style_one = resolveComponent("el-subs-style-one");
  const _component_el_subs_style_two = resolveComponent("el-subs-style-two");
  const _component_el_subs_style_three = resolveComponent("el-subs-style-three");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our newsletter",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_subs_style_one, null, null, _parent));
  _push(`<div class="tp-separator tp-separator-white"></div>`);
  _push(ssrRenderComponent(_component_el_subs_style_two, null, null, _parent));
  _push(`<div class="tp-separator tp-separator-white"></div>`);
  _push(ssrRenderComponent(_component_el_subs_style_three, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-subscribe/ElSubscribeMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElSubscribeMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElSubscribeMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Subscribe - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_el_subscribe_main = resolveComponent("el-subscribe-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_subscribe_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-subscribe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsSubscribe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsSubscribe as default
};
//# sourceMappingURL=elements-subscribe-DuDilENG.js.map
