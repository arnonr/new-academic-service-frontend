import { _ as _export_sfc, a as __nuxt_component_0$1, m as menus } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { M as MobileMenus } from "./MobileMenus-CVq7gvQU.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./logo-black-DNxRSU5J.js";
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
const insta_img_1 = "" + __buildAssetsURL("instagram-1.BttrY9pn.png");
const insta_img_2 = "" + __buildAssetsURL("instagram-2.CpqSddN3.png");
const insta_img_3 = "" + __buildAssetsURL("instagram-3.DrBm8Kaw.png");
const insta_img_4 = "" + __buildAssetsURL("instagram-4.B7aNdCx8.png");
const insta_img_5 = "" + __buildAssetsURL("instagram-5.D-vde-F3.png");
const insta_img_6 = "" + __buildAssetsURL("instagram-6.DC2rgeCA.png");
const _imports_0 = "" + __buildAssetsURL("offcanvas-shape-3.jIuzmEYD.png");
const _sfc_main$1 = {
  components: { MobileMenus, Social: __nuxt_component_0 },
  data() {
    return {
      isOffCanvasOpen: false,
      instagram_images: [
        { link: "https://www.instagram.com/", img: insta_img_1 },
        { link: "https://www.instagram.com/", img: insta_img_2 },
        { link: "https://www.instagram.com/", img: insta_img_3 },
        { link: "https://www.instagram.com/", img: insta_img_4 },
        { link: "https://www.instagram.com/", img: insta_img_5 },
        { link: "https://www.instagram.com/", img: insta_img_6 }
      ]
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
  _push(`<!--[--><div class="${ssrRenderClass(`offcanvas__area offcanvas__area-5 ${$data.isOffCanvasOpen ? "offcanvas-opened" : ""}`)}"><div class="offcanvas__wrapper offcanvas__wrapper-5"><div class="offcanvas__shape"><img class="offcanvas__shape-3"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="offcanvas__close"><button class="offcanvas__close-btn offcanvas__close-btn-5 offcanvas-close-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="offcanvas__content"><div class="offcanvas__top mb-40 d-flex justify-content-between align-items-center"><div class="offcanvas__logo logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none"><div class="mean-bar">`);
  _push(ssrRenderComponent(_component_mobile_menus, null, null, _parent));
  _push(`</div></div><div class="offcanvas__menu offcanvas__menu-5 offcanvas__menu-ff-inter d-none d-lg-block"><nav><ul><li>`);
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
  _push(`</li></ul></nav></div><div class="offcanvas__btn-5 mb-60">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/register",
    class: "tp-btn-offcanvas-blue"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register Now`);
      } else {
        return [
          createTextVNode("Register Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="offcanvas__instagram mb-55"><div class="offcanvas__instagram-top"><h4 class="offcanvas__instagram-title"> Instagram <svg width="80" height="10" viewBox="0 0 80 10" fill="none"><path d="M72.8579 5.56176C67.8371 4.53235 62.809 3.74659 57.7309 3.13993C62.3224 3.29995 66.914 3.3931 71.5008 3.37877C71.8275 3.37877 72.0947 3.10888 72.0947 2.78167C72.0923 2.45206 71.8252 2.18456 71.496 2.18456C57.8764 2.22755 29.6494 1.30083 16.0584 0.615354C12.4329 0.431446 8.88606 0.26901 5.26054 0.173473C4.33507 0.149589 3.40724 0.101835 2.48178 0.0683969C1.99997 0.0516779 0.754868 -0.010428 0.58075 0.00151414C0.0870056 0.0325636 0.0130844 0.46247 0.00592804 0.529346C-0.0131531 0.686981 -0.0012207 0.92347 0.275459 1.1026C0.29454 1.11693 0.401855 1.1838 0.642761 1.21246C14.1097 2.81748 42.2676 2.61444 55.7512 4.11197C61.4232 4.74491 67.0261 5.58568 72.617 6.73212C74.5705 7.13099 75.6844 7.38415 77.2444 7.79974C74.6731 8.47566 72.0374 8.85064 69.3755 9.05127C69.3755 9.05127 72.8579 9.99055 75.496 9.4286C78.1341 8.86665 78.1937 8.80763 79.5151 8.37533C79.8204 8.2774 79.9134 8.08635 79.9516 7.98365C80.035 7.76869 80.0255 7.53223 79.8037 7.31488C79.7441 7.25756 79.6296 7.17634 79.4507 7.11902C79.2169 7.04497 78.7327 6.96857 78.5157 6.90886C76.369 6.31653 75.2169 6.04422 72.8579 5.56176Z" fill="currentColor"></path></svg></h4></div><div class="offcanvas__instagram-wrapper"><div class="row gx-2 gy-2"><!--[-->`);
  ssrRenderList($data.instagram_images, (item, i) => {
    _push(`<div class="col-4"><div class="offcanvas__instagram-thumb w-img"><a${ssrRenderAttr("href", item.link)} target="_blank" class="popup-image"><img${ssrRenderAttr("src", item.img)} alt="instagram img"></a></div></div>`);
  });
  _push(`<!--]--></div></div></div><div class="offcanvas__social-5 mb-20"><h3 class="offcanvas__social-title-5">Follow :</h3>`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div><div class="${ssrRenderClass(`body-overlay ${$data.isOffCanvasOpen ? "opened" : ""}`)}"></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffcanvasFour.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OffcanvasFour = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { menus, OffcanvasFour },
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
  const _component_offcanvas_four = resolveComponent("offcanvas-four");
  _push(`<!--[--><header><div class="${ssrRenderClass(`header__area header-box-plr-5-245 header__padding-5 header__style-5 header__sticky header-sticky-blur ${$data.isSticky ? "header-sticky" : ""}`)}" id="header-sticky"><div class="header__gradient-bg"></div><div class="header__top-5"><div class="mega-menu-wrapper p-relative"><div class="container-fluid"><div class="row align-items-center"><div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-6"><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xl-6 col-lg-7 d-none d-lg-block"><div class="main-menu main-menu-5 main-menu-ff-space"><nav id="mobile-menu">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xl-4 col-lg-2 col-md-6 col-6"><div class="header__right-5 d-flex align-items-center justify-content-end"><div class="header__call d-none d-xl-flex align-items-center"><div class="header__call-icon"><span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.964 20.596C24.964 21.028 24.868 21.472 24.664 21.904C24.46 22.336 24.196 22.744 23.848 23.128C23.26 23.776 22.612 24.244 21.88 24.544C21.16 24.844 20.38 25 19.54 25C18.316 25 17.008 24.712 15.628 24.124C14.248 23.536 12.868 22.744 11.5 21.748C10.12 20.74 8.812 19.624 7.564 18.388C6.328 17.14 5.212 15.832 4.216 14.464C3.232 13.096 2.44 11.728 1.864 10.372C1.288 9.004 1 7.696 1 6.448C1 5.632 1.144 4.852 1.432 4.132C1.72 3.4 2.176 2.728 2.812 2.128C3.58 1.372 4.42 1 5.308 1C5.644 1 5.98 1.072 6.28 1.216C6.592 1.36 6.868 1.576 7.084 1.888L9.868 5.812C10.084 6.112 10.24 6.388 10.348 6.652C10.456 6.904 10.516 7.156 10.516 7.384C10.516 7.672 10.432 7.96 10.264 8.236C10.108 8.512 9.88 8.8 9.592 9.088L8.68 10.036C8.548 10.168 8.488 10.324 8.488 10.516C8.488 10.612 8.5 10.696 8.524 10.792C8.56 10.888 8.596 10.96 8.62 11.032C8.836 11.428 9.208 11.944 9.736 12.568C10.276 13.192 10.852 13.828 11.476 14.464C12.124 15.1 12.748 15.688 13.384 16.228C14.008 16.756 14.524 17.116 14.932 17.332C14.992 17.356 15.064 17.392 15.148 17.428C15.244 17.464 15.34 17.476 15.448 17.476C15.652 17.476 15.808 17.404 15.94 17.272L16.852 16.372C17.152 16.072 17.44 15.844 17.716 15.7C17.992 15.532 18.268 15.448 18.568 15.448C18.796 15.448 19.036 15.496 19.3 15.604C19.564 15.712 19.84 15.868 20.14 16.072L24.112 18.892C24.424 19.108 24.64 19.36 24.772 19.66C24.892 19.96 24.964 20.26 24.964 20.596Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M20.7996 9.4C20.7996 8.68 20.2356 7.576 19.3956 6.676C18.6276 5.848 17.6076 5.2 16.5996 5.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.9996 9.4C24.9996 4.756 21.2436 1 16.5996 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="header__call-content"><p>Consultation</p><h4><a href="tel:964-742-44-763">+964 742 44 763</a></h4></div></div><div class="header__btn-5 d-none d-xl-block ml-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-orange"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Start a Project`);
      } else {
        return [
          createTextVNode("Start a Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__hamburger header__hamburger-5 ml-50 d-xl-none"><button type="button" class="hamburger-btn hamburger-btn-blue hamburger-btn-black offcanvas-open-btn"><span></span><span></span><span></span></button></div></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_offcanvas_four, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderFour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderFour as default
};
//# sourceMappingURL=HeaderFour-oRVjEqBS.js.map
