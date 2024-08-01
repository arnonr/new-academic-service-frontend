import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { I as ImagePopup } from "./ImagePopup-DYm5hHIZ.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-red-DWnpzW8K.js";
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
const inst_img_1 = "" + __buildAssetsURL("insta-1.C5zZ6iXl.jpg");
const inst_img_2 = "" + __buildAssetsURL("insta-2.CnlxZMbw.jpg");
const inst_img_3 = "" + __buildAssetsURL("insta-3.BG49jBzG.jpg");
const inst_img_4 = "" + __buildAssetsURL("insta-4.NDWDAxhU.jpg");
const inst_img_5 = "" + __buildAssetsURL("insta-5.mXshH6es.jpg");
const inst_img_6 = "" + __buildAssetsURL("insta-6.C1SzJIYI.jpg");
const _sfc_main = {
  components: { Social: __nuxt_component_0, ImagePopup },
  data() {
    return {
      images: [
        inst_img_1,
        inst_img_2,
        inst_img_3,
        inst_img_4,
        inst_img_5,
        inst_img_6
      ]
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
  _push(`<!--[--><footer><div class="footer__area" data-bg-color="footer-bg-black-4"><div class="footer__top"><div class="container"><div class="row"><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-10 mb-50 footer-col-10-1"><div class="footer__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__widget-content"><div class="footer__info"><p>Lorem ipsum is simply dolor sit ametcn sectetur adipiscing elit. Phasellus vehic sagittis <br> euismod.</p><div class="footer__social-10">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-10 mb-50 footer-col-10-2"><h3 class="footer__widget-title">Contact Us</h3><div class="footer__widget-content"><div class="footer__info footer__info-10"><div class="footer__info-item-8 d-flex align-items-start"><div class="footer__info-icon-8 mr-20"><span><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 19H6C3 19 1 17.4118 1 13.7059V6.29412C1 2.58824 3 1 6 1H16C19 1 21 2.58824 21 6.29412V13.7059C21 17.4118 19 19 16 19Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.4" d="M16 6.82422L12.87 9.47128C11.84 10.3395 10.15 10.3395 9.12 9.47128L6 6.82422" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="footer__info-text-8"><h4>Email us:</h4><a href="mailto:Contact@harry.com">Contact@harry.com</a></div></div><div class="footer__info-item-8 d-flex align-items-start"><div class="footer__info-icon-8 mr-20"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9721 15.6963C18.9721 16.0203 18.9001 16.3533 18.7471 16.6772C18.5941 17.0012 18.3962 17.3072 18.1352 17.5952C17.6942 18.0812 17.2082 18.4322 16.6592 18.6571C16.1193 18.8821 15.5343 18.9991 14.9043 18.9991C13.9864 18.9991 13.0054 18.7831 11.9705 18.3422C10.9355 17.9012 9.90057 17.3072 8.87462 16.5602C7.83967 15.8043 6.85871 14.9673 5.92276 14.0404C4.99581 13.1044 4.15885 12.1235 3.41188 11.0975C2.67392 10.0716 2.07995 9.04561 1.64797 8.02866C1.21599 7.00271 1 6.02176 1 5.0858C1 4.47383 1.10799 3.88886 1.32398 3.34889C1.53997 2.79991 1.88196 2.29594 2.35893 1.84596C2.93491 1.27899 3.56488 1 4.23084 1C4.48283 1 4.73482 1.054 4.95981 1.16199C5.1938 1.26999 5.40079 1.43198 5.56278 1.66597L7.65068 4.60882C7.81267 4.83381 7.92966 5.0408 8.01066 5.23879C8.09165 5.42778 8.13665 5.61677 8.13665 5.78777C8.13665 6.00376 8.07366 6.21975 7.94766 6.42674C7.83067 6.63372 7.65968 6.84971 7.44369 7.0657L6.75972 7.77667C6.66072 7.87566 6.61573 7.99266 6.61573 8.13665C6.61573 8.20865 6.62473 8.27165 6.64273 8.34364C6.66972 8.41564 6.69672 8.46964 6.71472 8.52363C6.87671 8.82062 7.1557 9.2076 7.55168 9.67558C7.95666 10.1436 8.38864 10.6205 8.85662 11.0975C9.34259 11.5745 9.81057 12.0155 10.2875 12.4204C10.7555 12.8164 11.1425 13.0864 11.4485 13.2484C11.4935 13.2664 11.5475 13.2934 11.6105 13.3204C11.6825 13.3474 11.7545 13.3564 11.8355 13.3564C11.9885 13.3564 12.1055 13.3024 12.2045 13.2034L12.8884 12.5284C13.1134 12.3034 13.3294 12.1325 13.5364 12.0245C13.7434 11.8985 13.9504 11.8355 14.1754 11.8355C14.3463 11.8355 14.5263 11.8715 14.7243 11.9525C14.9223 12.0335 15.1293 12.1505 15.3543 12.3034L18.3332 14.4183C18.5671 14.5803 18.7291 14.7693 18.8281 14.9943C18.9181 15.2193 18.9721 15.4443 18.9721 15.6963Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path opacity="0.4" d="M15.8491 7.30024C15.8491 6.76026 15.4261 5.9323 14.7961 5.25734C14.2201 4.63637 13.4552 4.15039 12.6992 4.15039" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.4" d="M19.0009 7.29969C19.0009 3.81686 16.184 1 12.7012 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="footer__info-text-8"><h4>Call us:</h4><a href="tel:964-742-44-763">+964 742 44 763</a></div></div><div class="footer__info-item-8 d-flex align-items-start"><div class="footer__info-icon-8 mr-20"><span><svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M10.3776 12.931C12.1761 12.931 13.6341 11.473 13.6341 9.67447C13.6341 7.87596 12.1761 6.41797 10.3776 6.41797C8.57908 6.41797 7.12109 7.87596 7.12109 9.67447C7.12109 11.473 8.57908 12.931 10.3776 12.931Z" stroke="currentColor" stroke-width="1.5"></path><path d="M1.63033 7.77395C3.68652 -1.26494 17.0779 -1.2545 19.1236 7.78439C20.3239 13.0866 17.0257 17.5748 14.1345 20.3512C12.0365 22.376 8.7174 22.376 6.60903 20.3512C3.72827 17.5748 0.430016 13.0762 1.63033 7.77395Z" stroke="currentColor" stroke-width="1.5"></path></svg></span></div><div class="footer__info-text-8"><h4>Address:</h4><a target="_blank" href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885">4200, lorem street, <br> chicago, IL, 55</a></div></div></div></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-10 mb-50 footer-col-10-3"><h3 class="footer__widget-title">Quick Link</h3><div class="footer__widget-content"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`History`);
      } else {
        return [
          createTextVNode("History")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Leadership`);
      } else {
        return [
          createTextVNode("Leadership")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/event-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Events`);
      } else {
        return [
          createTextVNode("Events")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-politician" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donations`);
      } else {
        return [
          createTextVNode("Donations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-politician" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Press &amp; Media`);
      } else {
        return [
          createTextVNode("Press & Media")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/terms" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Teams`);
      } else {
        return [
          createTextVNode("Teams")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-10 mb-50 footer-col-10-4"><h3 class="footer__widget-title">Photo Gallery</h3><div class="footer__widget-content"><ul class="zoom-instagram-widget__items"><!--[-->`);
  ssrRenderList($data.images, (image, i) => {
    _push(`<li class="zoom-instagram-widget__item"><a href="#" class="popup-image"><img${ssrRenderAttr("src", image)} alt="image"></a></li>`);
  });
  _push(`<!--]--></ul></div></div></div></div></div></div><div class="footer__bottom-10 footer__bottom-line"><div class="container"><div class="footer__bottom-inner-10"><div class="row"><div class="col-md-6"><div class="footer__copyright-10"><p>Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} `);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-politician" }, {
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
  _push(`. All Rights Reserved.</p></div></div><div class="col-md-6"><div class="footer__link-10 text-md-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy`);
      } else {
        return [
          createTextVNode("Privacy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/terms" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms`);
      } else {
        return [
          createTextVNode("Terms")
        ];
      }
    }),
    _: 1
  }, _parent));
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/help" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Support`);
      } else {
        return [
          createTextVNode("Support")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-grid" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></footer>`);
  _push(ssrRenderComponent(_component_image_popup, {
    ref: "image_popup",
    images: $data.images
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/FooterTen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterTen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FooterTen as default
};
//# sourceMappingURL=FooterTen-38ShNsAZ.js.map
