import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_1 } from "./logo-MlJCTsTl.js";
import { _ as _imports_0 } from "./logo-black-DNxRSU5J.js";
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
const _sfc_main = {
  components: { Social: __nuxt_component_0 },
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_social = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(`footer__area ${$props.style_2 ? "footer__style-3" : ""}`)}"${ssrRenderAttr("data-bg-color", `footer-bg-${$props.style_2 ? "grey-4" : "black"}`)}><div class="footer__top footer__top-5"><div class="container"><div class="row"><div class="col-xxl-4 col-xl-4 col-lg-5 col-md-6"><div class="footer__widget footer__widget-5 mb-50 footer-col-5-1"><div class="footer__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$props.style_2) {
          _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.style_2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          !$props.style_2 ? (openBlock(), createBlock("img", {
            key: 0,
            src: _imports_1,
            alt: "logo"
          })) : createCommentVNode("", true),
          $props.style_2 ? (openBlock(), createBlock("img", {
            key: 1,
            src: _imports_0,
            alt: "logo"
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__widget-content"><div class="footer__info"><p>We help our clients succeed by creating brand identities, experiences, and print materials.</p><div class="footer__opening d-flex align-items-start"><div class="footer__opening-icon mr-15"><span><svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.7646 9.18399L28.5562 30.095C28.1853 31.6559 26.7944 32.7378 25.187 32.7378H4.87881C2.54507 32.7378 0.875929 30.4503 1.57141 28.2093L8.07806 7.31396C8.52626 5.86117 9.87088 4.85645 11.3855 4.85645H30.3954C31.8637 4.85645 33.0846 5.75286 33.5947 6.98928C33.8883 7.65385 33.9501 8.41122 33.7646 9.18399Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M24.6006 32.7372H31.9882C33.9819 32.7372 35.5429 31.0525 35.4038 29.0588L33.8737 8.00879" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.832 8.59748L16.4394 1.9209" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.1865 8.61182L26.6393 1.9043" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7715 17.2822H24.1357" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.2266 23.4639H22.5908" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="footer__opening-content"><h4>Opening Hours</h4><p>Mon – Sat 8:00 – 17:30 Sunday – CLOSED</p></div></div></div></div></div></div><div class="col-xxl-4 col-xl-4 col-lg-7 col-md-6"><div class="footer__widget footer__widget-5 mb-50 footer-col-5-2"><h3 class="footer__widget-title">Company</h3><div class="footer__widget-content"><ul id="footer-float-link"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-agency" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-masonry" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Digital design`);
      } else {
        return [
          createTextVNode("Digital design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-metro" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Branding`);
      } else {
        return [
          createTextVNode("Branding")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-masonry" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfoilo`);
      } else {
        return [
          createTextVNode("Portfoilo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`App development`);
      } else {
        return [
          createTextVNode("App development")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="#">Testimonials</a></li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details-list" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Optimization`);
      } else {
        return [
          createTextVNode("Optimization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-grid" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News`);
      } else {
        return [
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Photography`);
      } else {
        return [
          createTextVNode("Photography")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get in touch`);
      } else {
        return [
          createTextVNode("Get in touch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="footer__widget footer__widget-5 mb-50 footer-col-5-3"><h3 class="footer__widget-title">Get in Touch</h3><div class="footer__widget-content"><div class="footer__info"><div class="footer__info-item d-flex align-items-start"><div class="footer__info-icon mr-20"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.979 12.431C14.979 12.683 14.923 12.942 14.804 13.194C14.685 13.446 14.531 13.684 14.328 13.908C13.985 14.286 13.607 14.559 13.18 14.734C12.76 14.909 12.305 15 11.815 15C11.101 15 10.338 14.832 9.533 14.489C8.728 14.146 7.923 13.684 7.125 13.103C6.32 12.515 5.557 11.864 4.829 11.143C4.108 10.415 3.457 9.652 2.876 8.854C2.302 8.056 1.84 7.258 1.504 6.467C1.168 5.669 1 4.906 1 4.178C1 3.702 1.084 3.247 1.252 2.827C1.42 2.4 1.686 2.008 2.057 1.658C2.505 1.217 2.995 1 3.513 1C3.709 1 3.905 1.042 4.08 1.126C4.262 1.21 4.423 1.336 4.549 1.518L6.173 3.807C6.299 3.982 6.39 4.143 6.453 4.297C6.516 4.444 6.551 4.591 6.551 4.724C6.551 4.892 6.502 5.06 6.404 5.221C6.313 5.382 6.18 5.55 6.012 5.718L5.48 6.271C5.403 6.348 5.368 6.439 5.368 6.551C5.368 6.607 5.375 6.656 5.389 6.712C5.41 6.768 5.431 6.81 5.445 6.852C5.571 7.083 5.788 7.384 6.096 7.748C6.411 8.112 6.747 8.483 7.111 8.854C7.489 9.225 7.853 9.568 8.224 9.883C8.588 10.191 8.889 10.401 9.127 10.527C9.162 10.541 9.204 10.562 9.253 10.583C9.309 10.604 9.365 10.611 9.428 10.611C9.547 10.611 9.638 10.569 9.715 10.492L10.247 9.967C10.422 9.792 10.59 9.659 10.751 9.575C10.912 9.477 11.073 9.428 11.248 9.428C11.381 9.428 11.521 9.456 11.675 9.519C11.829 9.582 11.99 9.673 12.165 9.792L14.482 11.437C14.664 11.563 14.79 11.71 14.867 11.885C14.937 12.06 14.979 12.235 14.979 12.431Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M12.5497 5.89986C12.5497 5.47986 12.2207 4.83586 11.7307 4.31086C11.2827 3.82786 10.6877 3.44986 10.0997 3.44986" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.9997 5.9C14.9997 3.191 12.8087 1 10.0997 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="footer__info-text"><h4>Call us:</h4><a href="tel:012-345-6789">+964 742 44 763</a></div></div><div class="footer__info-item d-flex align-items-start"><div class="footer__info-icon mr-20"><span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="footer__info-text"><h4>Email us:</h4><a href="mailto:support@gmail.com">harry@agency.com</a></div></div><div class="footer__info-item d-flex align-items-start"><div class="footer__info-icon mr-20"><span><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.1121 10.1466C9.53315 10.1466 10.6851 9.02879 10.6851 7.64994C10.6851 6.2711 9.53315 5.15332 8.1121 5.15332C6.69105 5.15332 5.53906 6.2711 5.53906 7.64994C5.53906 9.02879 6.69105 10.1466 8.1121 10.1466Z" stroke="currentColor" stroke-width="1.5"></path><path d="M1.2002 6.1933C2.82484 -0.736432 13.4057 -0.72843 15.022 6.2013C15.9704 10.2663 13.3644 13.7072 11.08 15.8357C9.42239 17.3881 6.79986 17.3881 5.13398 15.8357C2.85783 13.7072 0.251802 10.2583 1.2002 6.1933Z" stroke="currentColor" stroke-width="1.5"></path></svg></span></div><div class="footer__info-text"><h4>Office:</h4><a target="_blank" href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885">Orville Road Apt. California, UK</a></div></div></div></div></div></div></div></div></div><div class="footer__bottom-5"><div class="container"><div class="row align-items-center"><div class="col-sm-6"><div class="footer__copyright-5"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} `);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Harry`);
      } else {
        return [
          createTextVNode("Harry")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` Corporation. All rights reserved. </p></div></div><div class="col-sm-6"><div class="footer__social-5 text-sm-end">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/FooterFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterFour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FooterFour as default
};
//# sourceMappingURL=FooterFour-BdFMULq2.js.map
