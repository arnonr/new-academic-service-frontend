import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_1 } from "./logo-MlJCTsTl.js";
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
const _imports_0 = "" + __buildAssetsURL("footer-shape-1.EXFdtfof.png");
const _imports_2 = "" + __buildAssetsURL("footer-sm-1.DEWqNNJO.jpg");
const _imports_3 = "" + __buildAssetsURL("footer-sm-2.DEg-9npf.jpg");
const _sfc_main = {
  components: { Social: __nuxt_component_0 },
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formValue: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_social = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(`footer__area ${$props.style_2 ? "footer__style-2" : ""}`)}"${ssrRenderAttr("data-bg-color", `${$props.style_2 ? "footer-bg-blue" : "footer-bg-dark"}`)}><div class="footer__top footer__top-3"><div class="footer__shape"><img class="footer__shape-3"${ssrRenderAttr("src", _imports_0)} alt="shape"></div><div class="container"><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-6 col-md-8"><div class="footer__widget footer__widget-3 mb-50 footer-col-3-1"><div class="footer__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__widget-content"><div class="footer__subscribe"><h3 class="footer__subscribe-title"> Let’s talk about your project. </h3><form><div class="footer__subscribe-box-3"><div class="footer__subscribe-input-3"><input${ssrRenderAttr("value", $data.formValue)} type="email" placeholder="Join my newsletter..."><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><button class="footer-sub-btn-3" type="submit"><i class="fa-regular fa-arrow-up-right"></i></button></div></form></div></div></div></div><div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6"><div class="footer__widget footer__widget-3 mb-50 footer-col-3-2"><h3 class="footer__widget-title">Navigation</h3><div class="footer__widget-content"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-photographer" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfolio`);
      } else {
        return [
          createTextVNode("Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-3 mb-50 footer-col-3-3"><h3 class="footer__widget-title">Pages</h3><div class="footer__widget-content"><ul><li>`);
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Faqs`);
      } else {
        return [
          createTextVNode("Faqs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/contact-2" }, {
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
  _push(`</li></ul></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6"><div class="footer__widget footer__widget-3 mb-50 footer-col-3-4"><h3 class="footer__widget-title">Recent Post</h3>`);
  if (!$props.style_2) {
    _push(`<div class="footer__widget-content"><div class="footer__blog"><div class="footer__blog-item d-flex align-items-center"><div class="footer__blog-thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: _imports_2,
              alt: ""
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="footer__blog-content"><h3 class="footer__blog-title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Designers Who Changed the Web`);
        } else {
          return [
            createTextVNode("Designers Who Changed the Web")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</h3><div class="footer__blog-meta"><span>July 26, 2022</span></div></div></div><div class="footer__blog-item d-flex align-items-center"><div class="footer__blog-thumb">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: _imports_3,
              alt: ""
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="footer__blog-content"><h3 class="footer__blog-title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` The History <br${_scopeId}> Of Photographer. `);
        } else {
          return [
            createTextVNode(" The History "),
            createVNode("br"),
            createTextVNode(" Of Photographer. ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</h3><div class="footer__blog-meta"><span>April 14, 2022</span></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.style_2) {
    _push(`<div class="footer__widget-content"><div class="footer__contact"><div class="footer__contact-call"><span><a href="tel:624-423-26-72"><i class="fa-solid fa-phone"></i> +624 423 26 72 </a></span></div><div class="footer__contact-mail"><span><a href="mailto:support@harry.com"> support@harry.com </a></span></div></div><div class="footer__social">`);
    _push(ssrRenderComponent(_component_social, null, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div>`);
  if (!$props.style_2) {
    _push(`<div class="footer__bottom-3"><div class="container"><div class="row align-items-center"><div class="col-sm-6"><div class="footer__copyright-3"><p> Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} by `);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Harry.`);
        } else {
          return [
            createTextVNode("Harry.")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(` All Rights Reserved. </p></div></div><div class="col-sm-6"><div class="footer__social-3 text-sm-end">`);
    _push(ssrRenderComponent(_component_social, null, null, _parent));
    _push(`</div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.style_2) {
    _push(`<div class="footer__bottom"><div class="container"><div class="footer__bottom-inner"><div class="row"><div class="col-sm-6"><div class="footer__copyright"><p>`);
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
    _push(`</div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/FooterFive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterFive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FooterFive as default
};
//# sourceMappingURL=FooterFive-DzJ5Gud-.js.map
