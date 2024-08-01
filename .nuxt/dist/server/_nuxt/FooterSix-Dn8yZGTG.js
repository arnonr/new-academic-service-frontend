import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const bg_shape = "" + __buildAssetsURL("footer-shape-3.CijjqhqO.png");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgBtZVfSFNRHMe/5+7Shg/eO8tAU7uD1AX90ZdeNFo9FrRVDyEJ/fFBiEB9WvWySRAFgUJa2ItBhL1E+mAWBGUY/aGY4YOZkbcJCmbtbuTStXtv51x1bW7OmdsHLtx7fud8f/f8fr9zfgTpcD0SwVma7MUWRySqS19nfkv97j3YXyko1Dqs63qfBq3XarXKq0lwqQYvdvskHHv8HNymAKB5wxHVwcTjpoj0cRBC2kzENBEKhroDgYCUkYPGTl/TyZoin9tZ4mDfQh4P99FSXK1LuX4RHWeoI18wEGxeaeITvo4PeB68nvFuLzRj8seCMRQMR+GfXQBZmvLzSCOmZ7+kcsN21TaOCqEcn1uXB0nMfOJJE3S1HWtw72Un9qV2ELch0mLHmKFlhIjFr6rM4mXvLCSd53Zgd2lebIHbWYq6mq3IFALdMwpJYu9GiJ5+VDzbCszi8Lc5IyS1dgFDYyGMTIaNBbWV+fBvXkDPqxkU9HehqFJYywcLVzfE/IMErgEJnDbB/pyJp4LZGMy+VKbIBFVXrRw41cW2Hy9+uLogYeIuGi4hz4T1QsWb+YZDxc4bp2yYnJ03wlK2xYz7F+y4/WwKl3tk4+9vNZRjxD+H+o5P6aooCZqLA/zDt9+r3o0HY4PBsIq97g9x31HU3xxFfMFlCq0miVfmoiJ9EgRX5mI52f+BREJKSEcOYedARu5Qcu1gmA+c9w5q/mkHcoHF3EcmIIkRsGs5+2iI2DgbZIXW6wtkn7s7IctGcY/CLhX2dvjAm0RkAT0aVX69eV9tu3ZJjp0e1ixYh0IWoK20RbAK/65rBhughlZsEKaxLM5IOv9T17uaIwNDHrrNdYWL8LzCV0itJXeuJDStlBcMywlr9nR7p5GJOC0SFX/OsqQm29LAHNHFLg6ak15cVVhsJAyaPF1WQQbnEWmvppW4msZfBNYVjwJqEOIAAAAASUVORK5CYII=";
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
      bg_shape,
      open: false,
      formVal: ""
    };
  },
  methods: {
    handleToggle() {
      this.open = !this.open;
    },
    handleSubmit() {
      console.log(this.formVal);
      this.formVal = "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_social = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(`footer__area footer__style-${$props.style_2 ? "blue" : "green"} include-bg bg-luminosity`)}"${ssrRenderAttr("data-bg-color", `footer-bg-${$props.style_2 ? "blue" : "green-dark"}`)} style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg_shape})` })}"><div class="footer__top footer__top-7"><div class="container"><div class="row"><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-7 mb-50 footer-col-7-1"><div class="footer__logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} alt="footer__logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            alt: "footer__logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__widget-content"><div class="footer__info"><p> The home and elements needed to create beautiful products. </p><div class="footer__contact"><div class="footer__contact-call"><span><a href="tel:624-423-26-72"><i class="fa-solid fa-phone"></i> +624 423 26 72 </a></span></div><div class="footer__contact-mail"><span><a href="mailto:support@harry.com"> support@harry.com </a></span></div></div><div class="footer__social">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-7 mb-50 footer-col-7-2"><h3 class="footer__widget-title-7">Quick Link</h3><div class="footer__widget-content"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-startup" }, {
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-2" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
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
  _push(`</li></ul></div></div></div><div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-7 mb-50 footer-col-7-3"><h3 class="footer__widget-title-7">Resources</h3><div class="footer__widget-content"><ul><li>`);
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-2" }, {
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
        _push2(`Need Help`);
      } else {
        return [
          createTextVNode("Need Help")
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
  _push(`</li></ul></div></div></div><div class="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-6"><div class="footer__widget footer__widget-7 mb-50 footer-col-7-4"><h3 class="footer__widget-title-7">Newsletter</h3><div class="footer__widget-content"><div class="footer__subscribe-7"><p> Subscribe our newsletter to get the latest news &amp; updates. </p><form><div class="footer__subscribe-input-7"><input${ssrRenderAttr("value", $data.formVal)} type="email" placeholder="email@example.com..."><button type="submit"><i class="fa-regular fa-arrow-up-right"></i></button></div></form></div></div></div></div></div></div></div><div class="footer__bottom-7"><div class="container"><div class="footer__bottom-inner-7"><div class="row"><div class="col-md-4 col-sm-6"><div class="footer__link-7">`);
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
  _push(`</div></div><div class="col-md-4 col-sm-6"><div class="footer__copyright-7 text-sm-center"><p>`);
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
  _push(` All Rights Reserved. </p></div></div><div class="col-md-4"><div class="footer__lang d-flex align-items-center justify-content-md-end"><div class="footer__lang-img mr-15"><img${ssrRenderAttr("src", _imports_1)} alt="footer__lang-img"></div><div class="footer__lang-wrapper"><span class="footer__lang-selected-lang tp-lang-toggle-2" id="tp-footer-lang-toggle">English</span><ul class="${ssrRenderClass(`footer__lang-list tp-lang-list-2 ${$data.open ? "tp-lang-list-open-2" : ""}`)}"><li>Spanish</li><li>Portugese</li><li>American</li><li>Canada</li></ul></div></div></div></div></div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/FooterSix.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterSix = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FooterSix as default
};
//# sourceMappingURL=FooterSix-Dn8yZGTG.js.map
