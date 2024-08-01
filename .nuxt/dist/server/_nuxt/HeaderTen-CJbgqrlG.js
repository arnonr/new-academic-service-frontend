import { _ as _export_sfc, m as menus, a as __nuxt_component_0 } from "../server.mjs";
import { O as OffCanvasFive } from "./OffCanvasFive-Cfw6fMGb.js";
import { u as useUtilsStore } from "./utils-Cinv2m6T.js";
import SearchPopup from "./SearchPopup-CwNKVdMc.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-black-solid-c5iWWNcd.js";
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
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
const _sfc_main = {
  components: { menus, OffCanvasFive, SearchPopup },
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
    },
    handleSearch() {
      this.$refs.SearchPopup.show();
    }
  },
  setup() {
    const utils = useUtilsStore();
    return { utils };
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleSticky);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_menus = resolveComponent("menus");
  const _component_search_popup = resolveComponent("search-popup");
  const _component_off_canvas_five = resolveComponent("off-canvas-five");
  _push(`<!--[--><header><div class="header__area header__transparent"><div class="${ssrRenderClass(`header__bottom-11 header__white ${$setup.utils.activeIndex === 1 ? "header__white-slider slider-pagination-11-white" : ""}`)}"><div class="mega-menu-wrapper p-relative"><div class="container-fluid"><div class="row align-items-center"><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8"><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="logo-dark"${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}><img class="logo-light"${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "logo-dark",
            src: _imports_0,
            alt: "logo"
          }),
          createVNode("img", {
            class: "logo-light",
            src: _imports_1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block"><div class="main-menu main-menu-11 main-menu-ff-syne"><nav id="mobile-menu">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xxl-4 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"><div class="header__bottom-right-8 d-flex justify-content-end align-items-center"><div class="header__info-8 header__info-11 mr-90 d-none d-xxl-block"><ul><li><span><a href="mailto:hello@harry.com"><span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> hello@harry.com </a></span></li></ul></div><div class="header__action-8 header__action-11 d-none d-xl-block"><ul><li><a href="#" class="search-open-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0004 17L15.4004 15.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li><li><button type="button" class="hamburger-btn hamburger-btn-text offcanvas-open-btn" data-menu-text="menu"><span></span><span></span><span></span></button></li></ul></div><div class="header__hamburger ml-50 d-xl-none"><button type="button" class="hamburger-btn hamburger-btn-text offcanvas-open-btn" data-menu-text="menu"><span></span><span></span><span></span></button></div></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_search_popup, { ref: "SearchPopup" }, null, _parent));
  _push(ssrRenderComponent(_component_off_canvas_five, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderTen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderTen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderTen as default
};
//# sourceMappingURL=HeaderTen-CJbgqrlG.js.map
