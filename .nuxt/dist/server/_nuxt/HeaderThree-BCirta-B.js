import { _ as _export_sfc, a as __nuxt_component_0$1, m as menus } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { M as MobileMenus } from "./MobileMenus-CVq7gvQU.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_1 = "" + __buildAssetsURL("about-author-sign.m6RBSiSa.png");
const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_mobile_menus = resolveComponent("mobile-menus");
  const _component_social = __nuxt_component_0;
  _push(`<!--[--><div class="${ssrRenderClass(`offcanvas__area offcanvas__area-2 ${$data.isOffCanvasOpen ? "offcanvas-opened" : ""}`)}"><div class="offcanvas__wrapper"><div class="offcanvas__close"><button class="offcanvas__close-btn offcanvas__close-btn-2 offcanvas-close-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="offcanvas__content"><div class="offcanvas__top mb-60 d-flex justify-content-between align-items-center"><div class="offcanvas__logo logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mobile-menu-2 fix mb-40 menu-counter mean-container"><div class="mean-bar">`);
  _push(ssrRenderComponent(_component_mobile_menus, null, null, _parent));
  _push(`</div></div><div class="offcanvas__menu offcanvas__menu-ff-oswald d-none"><nav><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/home-freelancer" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio" }, {
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
  _push(`</li></ul></nav></div><div class="offcanvas__btn-2">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/job",
    class: "tp-btn-offcanvas-green"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`We Are Hiring`);
      } else {
        return [
          createTextVNode("We Are Hiring")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="offcanvas__text"><p>Im a UX Designer, Over the past 10+ years I’ve created well-crafted mobile and web apps by connecting Business goals with user needs.</p><div class="offcanvas__signature mb-40"><img${ssrRenderAttr("src", _imports_1)} alt="signature"></div></div><div class="offcanvas__link-btn mb-25">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact-2",
    class: "tp-link-btn-circle"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i><i class="fa-regular fa-arrow-right"${_scopeId}></i></span> Work <br${_scopeId}> With Us `);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-arrow-right" }),
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ]),
          createTextVNode(" Work "),
          createVNode("br"),
          createTextVNode(" With Us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="offcanvas__social"><h3 class="offcanvas__social-title">Follow :</h3>`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div><div class="${ssrRenderClass(`body-overlay ${$data.isOffCanvasOpen ? "opened" : ""}`)}"></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffCanvasThree.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OffCanvasThree = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { menus, OffCanvasThree },
  data() {
    return {
      isSticky: false
    };
  },
  methods: {
    handleSticky() {
      if ((void 0).scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleOpenSidebar() {
      this.$refs.off_canvas.openOffcanvas();
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleSticky);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_menus = resolveComponent("menus");
  const _component_off_canvas_three = resolveComponent("off-canvas-three");
  _push(`<!--[--><header><div class="header__area"><div class="${ssrRenderClass(`header__bottom header__padding-2 header-box-plr-55 header__sticky ${$data.isSticky ? "header-sticky" : ""}`)}" id="header-sticky"><div class="container-fluid"><div class="row align-items-center"><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8"><div class="logo logo-2">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block"><div class="main-menu pl-55 main-menu-ff-space"><nav id="mobile-menu-2" class="d-none">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"><div class="header__bottom-right d-flex justify-content-end align-items-center pl-30"><div class="header__intro"><p>Intro</p></div><div class="header__hamburger header__hamburger-2"><button type="button" class="hamburger-btn hamburger-btn-black offcanvas-open-btn"><span></span><span></span><span></span></button></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_off_canvas_three, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderThree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderThree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderThree as default
};
//# sourceMappingURL=HeaderThree-BCirta-B.js.map
