import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { M as MobileMenus } from "./MobileMenus-CVq7gvQU.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  components: { MobileMenus, Social: __nuxt_component_0 },
  data() {
    return {
      isOffCanvasOpen: false
    };
  },
  methods: {
    openOffcanvas() {
      this.isOffCanvasOpen = true;
    },
    closeOffcanvas() {
      this.isOffCanvasOpen = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mobile_menus = resolveComponent("mobile-menus");
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_social = __nuxt_component_0;
  _push(`<!--[--><div class="${ssrRenderClass(`offcanvas__full ${$data.isOffCanvasOpen ? "offcanvas-full-opened" : ""}`)}"><div class="offcanvas__full-wrapper d-flex flex-column justify-content-between"><div class="offcanvas__full-inner"><div class="offcanvas__close"><button class="offcanvas__full-close-btn offcanvas-close-btn"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M31 1L1 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L31 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button></div><div class="offcanvas__full-content"><div class="mobile-menu fix mb-40 menu-counter d-md-none mean-container"><div class="mean-bar">`);
  _push(ssrRenderComponent(_component_mobile_menus, null, null, _parent));
  _push(`</div></div><div class="offcanvas__full-menu menu-counter d-none d-md-block"><nav><ul><li class="has-dropdown">`);
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
  _push(`<ul class="submenu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Main Home`);
      } else {
        return [
          createTextVNode("Main Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Personal Portfolio`);
      } else {
        return [
          createTextVNode("Personal Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-freelancer" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Freelancer`);
      } else {
        return [
          createTextVNode("Freelancer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
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
  _push(`</li><li class="has-dropdown">`);
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
  _push(`<ul class="submenu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Classic Style`);
      } else {
        return [
          createTextVNode("Classic Style")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/services-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Creative Agency`);
      } else {
        return [
          createTextVNode("Creative Agency")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/services-3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`UI Service`);
      } else {
        return [
          createTextVNode("UI Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
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
  _push(`</li><li class="has-dropdown">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio" }, {
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
  _push(`<ul class="submenu"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Classic Style`);
      } else {
        return [
          createTextVNode("Classic Style")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-metro" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Metro Style`);
      } else {
        return [
          createTextVNode("Metro Style")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-slider" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Classic Slider`);
      } else {
        return [
          createTextVNode("Classic Slider")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
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
  _push(`</li></ul></nav></div></div></div><div class="offcanvas__full-footer"><div class="row align-items-center"><div class="col-xl-3"><div class="offcanvas__full-link">`);
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
        _push2(`Use of terms`);
      } else {
        return [
          createTextVNode("Use of terms")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xl-9 order-first order-xl-last"><div class="offcanvas__full-right d-lg-flex justify-content-xl-end align-items-center"><div class="offcanvas__info d-flex flex-wrap justify-content-lg-end align-items-center"><div class="offcanvas__info-item"><h4 class="offcanvas__info-item-title">Information</h4><p><a href="tel:964-742-44-763">+964 742 44 763</a></p><p><a href="mailto:support@harry.com">support@harry.com</a></p></div><div class="offcanvas__info-item"><h4 class="offcanvas__info-item-title">Address</h4><p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">32 East Trusel Court <br> North Tonawanda, NY 14120</a></p></div></div><div class="offcanvas__full-social offcanvas__social-3">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div></div></div></div><div class="body-overlay"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffCanvasMain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OffCanvasMain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  OffCanvasMain as O
};
//# sourceMappingURL=OffCanvasMain-B2oGt6VK.js.map
