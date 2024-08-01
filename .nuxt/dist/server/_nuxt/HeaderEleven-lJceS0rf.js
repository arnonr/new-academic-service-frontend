import { _ as _export_sfc, m as menus, a as __nuxt_component_0 } from "../server.mjs";
import HeaderInfo from "./HeaderInfo-Cgp-mq39.js";
import { O as OffCanvasSix } from "./OffCanvasSix-UeRQiqg5.js";
import Language from "./Language-DjIvJcaS.js";
import SearchPopup from "./SearchPopup-CwNKVdMc.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-MlJCTsTl.js";
const _imports_1 = "" + __buildAssetsURL("logo-red-black.DcK8gEtC.svg");
const _sfc_main = {
  data() {
    return {
      isSticky: false
    };
  },
  components: {
    menus,
    HeaderInfo,
    Language,
    SearchPopup,
    OffCanvasSix
  },
  methods: {
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
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
  const _component_language = resolveComponent("language");
  const _component_nuxt_link = __nuxt_component_0;
  const _component_menus = resolveComponent("menus");
  const _component_search_popup = resolveComponent("search-popup");
  const _component_off_canvas_six = resolveComponent("off-canvas-six");
  _push(`<!--[--><header><div class="header__area header__transparent"><div class="header__top-10 d-none d-md-block"><div class="container"><div class="row align-items-center"><div class="col-xxl-9 col-xl-9 col-lg-9 col-md-10"><div class="header__info header__info-10"><ul><li><a href="mailto:info@educal.com"><span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> info@example.com </a></li><li><a href="tel:964-742-44-763"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.979 12.431C14.979 12.683 14.923 12.942 14.804 13.194C14.685 13.446 14.531 13.684 14.328 13.908C13.985 14.286 13.607 14.559 13.18 14.734C12.76 14.909 12.305 15 11.815 15C11.101 15 10.338 14.832 9.533 14.489C8.728 14.146 7.923 13.684 7.125 13.103C6.32 12.515 5.557 11.864 4.829 11.143C4.108 10.415 3.457 9.652 2.876 8.854C2.302 8.056 1.84 7.258 1.504 6.467C1.168 5.669 1 4.906 1 4.178C1 3.702 1.084 3.247 1.252 2.827C1.42 2.4 1.686 2.008 2.057 1.658C2.505 1.217 2.995 1 3.513 1C3.709 1 3.905 1.042 4.08 1.126C4.262 1.21 4.423 1.336 4.549 1.518L6.173 3.807C6.299 3.982 6.39 4.143 6.453 4.297C6.516 4.444 6.551 4.591 6.551 4.724C6.551 4.892 6.502 5.06 6.404 5.221C6.313 5.382 6.18 5.55 6.012 5.718L5.48 6.271C5.403 6.348 5.368 6.439 5.368 6.551C5.368 6.607 5.375 6.656 5.389 6.712C5.41 6.768 5.431 6.81 5.445 6.852C5.571 7.083 5.788 7.384 6.096 7.748C6.411 8.112 6.747 8.483 7.111 8.854C7.489 9.225 7.853 9.568 8.224 9.883C8.588 10.191 8.889 10.401 9.127 10.527C9.162 10.541 9.204 10.562 9.253 10.583C9.309 10.604 9.365 10.611 9.428 10.611C9.547 10.611 9.638 10.569 9.715 10.492L10.247 9.967C10.422 9.792 10.59 9.659 10.751 9.575C10.912 9.477 11.073 9.428 11.248 9.428C11.381 9.428 11.521 9.456 11.675 9.519C11.829 9.582 11.99 9.673 12.165 9.792L14.482 11.437C14.664 11.563 14.79 11.71 14.867 11.885C14.937 12.06 14.979 12.235 14.979 12.431Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M12.5497 5.89986C12.5497 5.47986 12.2207 4.83586 11.7307 4.31086C11.2827 3.82786 10.6877 3.44986 10.0997 3.44986" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.9997 5.9C14.9997 3.191 12.8087 1 10.0997 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> +964 742 44 763 </a></li></ul></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-2"><div class="header__top-right d-flex justify-content-end align-items-center"><div class="header__social-10"><ul><li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li></ul></div><div class="header__lang header__lang-10 ml-20">`);
  _push(ssrRenderComponent(_component_language, null, null, _parent));
  _push(`</div></div></div></div></div></div><div class="${ssrRenderClass(`header__bottom-10 header__sticky ${$data.isSticky ? "header-sticky" : ""}`)}" id="header-sticky"><div class="container"><div class="mega-menu-wrapper p-relative"><div class="row align-items-center"><div class="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8"><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="logo-light"${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}><img class="logo-dark"${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "logo-light",
            src: _imports_0,
            alt: "logo"
          }),
          createVNode("img", {
            class: "logo-dark",
            src: _imports_1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block"><div class="main-menu main-menu-10 main-menu-ff-space"><nav id="mobile-menu">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"><div class="header__bottom-right d-flex justify-content-end align-items-center pl-30"><div class="header__action-10 d-none d-xl-block"><ul><li><a href="#" class="search-open-btn"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li></ul></div><div class="header__hamburger ml-50 d-xl-none"><button type="button" class="hamburger-btn hamburger-btn-red offcanvas-open-btn"><span></span><span></span><span></span></button></div><div class="header__btn-10 ml-30 d-none d-sm-block">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-header-btn-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donate`);
      } else {
        return [
          createTextVNode("Donate")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_search_popup, { ref: "SearchPopup" }, null, _parent));
  _push(ssrRenderComponent(_component_off_canvas_six, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderEleven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderEleven = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderEleven as default
};
//# sourceMappingURL=HeaderEleven-lJceS0rf.js.map
