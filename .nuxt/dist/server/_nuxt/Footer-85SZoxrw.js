import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { I as ImagePopup } from "./ImagePopup-DYm5hHIZ.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_1$1 } from "./logo-MlJCTsTl.js";
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
import "vue-easy-lightbox";
const _imports_1 = "data:image/png;base64,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";
const _sfc_main = {
  components: { Social: __nuxt_component_0, ImagePopup },
  data() {
    return {
      qrcodeImg: [_imports_1]
    };
  },
  methods: {
    handleImagePopup(index) {
      this.$refs.image_popup.showImg(index);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_social = __nuxt_component_0;
  const _component_image_popup = resolveComponent("image-popup");
  _push(`<!--[--><footer><div class="footer__area" data-bg-color="footer-bg"><div class="footer__top"><div class="container"><div class="row"><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget mb-50 footer-col-1"><div class="footer__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__widget-content"><div class="footer__info"><p>The home and elements needed to create beautiful products.1</p><div class="footer__contact"><div class="footer__contact-call"><span><a href="tel:624-423-26-72"><i class="fa-solid fa-phone"></i> +624 423 26 72</a></span></div><div class="footer__contact-mail"><span><a href="mailto:support@harry.com">support@harry.com</a></span></div></div><div class="footer__social">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget mb-50 footer-col-2"><h3 class="footer__widget-title">Quick Link</h3><div class="footer__widget-content"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service`);
      } else {
        return [
          createTextVNode("Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="#">Testimonials</a></li><li>`);
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget mb-50 footer-col-3"><h3 class="footer__widget-title">Resources</h3><div class="footer__widget-content"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/job" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Careers`);
      } else {
        return [
          createTextVNode("Careers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/job" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Job Post`);
      } else {
        return [
          createTextVNode("Job Post")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Case Studies`);
      } else {
        return [
          createTextVNode("Case Studies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/help" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Help`);
      } else {
        return [
          createTextVNode("Help")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register`);
      } else {
        return [
          createTextVNode("Register")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/error" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Error 404`);
      } else {
        return [
          createTextVNode("Error 404")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget mb-50 footer-col-4"><h3 class="footer__widget-title">Downloads</h3><div class="footer__widget-content"><div class="footer__app mb-30"><div class="footer__app-item"><a href="#" class="tp-btn-app"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.72221 12.4448V14.7782C6.72221 15.206 6.3722 15.556 5.94442 15.556C5.51663 15.556 5.16663 15.206 5.16663 14.7782V12.4448H6.72221Z" fill="currentColor"></path><path d="M9.83329 12.4448V14.7782C9.83329 15.206 9.48328 15.556 9.0555 15.556C8.62772 15.556 8.27771 15.206 8.27771 14.7782V12.4448H9.83329Z" fill="currentColor"></path><path d="M11.3891 6.99992V10.8889C11.3891 11.7444 10.6891 12.4444 9.83352 12.4444H5.16679C4.31122 12.4444 3.61121 11.7444 3.61121 10.8889V6.99992C3.61121 6.14435 4.31122 5.44434 5.16679 5.44434H9.83352C10.6891 5.44434 11.3891 6.14435 11.3891 6.99992Z" fill="currentColor"></path><path d="M2.05558 6.99947V10.1106C2.05558 10.5384 1.70557 10.8884 1.27779 10.8884C0.850005 10.8884 0.5 10.5384 0.5 10.1106V6.99947C0.5 6.57169 0.850005 6.22168 1.27779 6.22168C1.70557 6.22168 2.05558 6.57169 2.05558 6.99947Z" fill="currentColor"></path><path d="M14.4999 6.99947V10.1106C14.4999 10.5384 14.1499 10.8884 13.7221 10.8884C13.2943 10.8884 12.9443 10.5384 12.9443 10.1106V6.99947C12.9443 6.57169 13.2943 6.22168 13.7221 6.22168C14.1499 6.22168 14.4999 6.57169 14.4999 6.99947Z" fill="currentColor"></path><path d="M5.63336 4.35563H9.36679C10.0512 4.35563 10.6112 3.79561 10.6112 3.11116C10.6112 1.39224 9.21899 0 7.50008 0C5.78116 0 4.38892 1.39224 4.38892 3.11116C4.38892 3.79561 4.94891 4.35563 5.63336 4.35563Z" fill="currentColor"></path></svg> Android</a></div><div class="footer__app-item"><a href="#" class="tp-btn-app"><svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.33685 0C9.50336 0.915787 9.08709 1.83157 8.58757 2.4976C8.08805 3.16363 7.17226 3.7464 6.25648 3.66315C6.08997 2.74736 6.50624 1.91483 7.00576 1.2488C7.58853 0.582774 8.50432 0.0832534 9.33685 0ZM12.001 14.4861C12.4172 13.8201 12.667 13.4038 13 12.6545C10.4191 11.6555 10.0029 7.99232 12.5837 6.66027C11.8345 5.66123 10.7522 5.16171 9.66987 5.16171C8.92059 5.16171 8.42107 5.32822 7.92155 5.49472C7.50528 5.66123 7.17227 5.74448 6.756 5.74448C6.25648 5.74448 5.92346 5.57798 5.42394 5.41147C4.92442 5.24496 4.4249 5.07846 3.84213 5.07846C2.67658 5.07846 1.42778 5.74448 0.678502 6.99328C-0.403791 8.65835 -0.237284 11.9052 1.51104 14.5693C2.26032 15.5684 3.09285 16.6507 4.17514 16.6507C4.67466 16.6507 4.92442 16.4842 5.25744 16.4009C5.6737 16.2344 6.08997 16.0679 6.756 16.0679C7.50528 16.0679 7.83829 16.2344 8.25456 16.4009C8.58757 16.5674 8.83733 16.6507 9.33685 16.6507C10.5024 16.6507 11.3349 15.4019 12.001 14.4861Z" fill="currentColor"></path></svg> Mac iOS</a></div></div><div class="footer__qrcode d-flex align-items-center"><div class="footer__qrcode-thumb mr-10"><a class="popup-image" href="#"><img${ssrRenderAttr("src", _imports_1)} alt=""></a></div><div class="footer__qrcode-content"><p><a class="popup-image" href="~/assets/img/icon/qrcode.png">Scan to Download The Themes</a></p></div></div></div></div></div></div></div></div><div class="footer__bottom"><div class="container"><div class="footer__bottom-inner"><div class="row"><div class="col-sm-6"><div class="footer__copyright"><p>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Harry`);
      } else {
        return [
          createTextVNode("© " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Harry", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` All Rights Reserved. </p></div></div><div class="col-sm-6"><div class="footer__link text-sm-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/terms" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms of Use`);
      } else {
        return [
          createTextVNode("Terms of Use")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></footer>`);
  _push(ssrRenderComponent(_component_image_popup, {
    ref: "image_popup",
    images: $data.qrcodeImg
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Footer as default
};
//# sourceMappingURL=Footer-85SZoxrw.js.map
