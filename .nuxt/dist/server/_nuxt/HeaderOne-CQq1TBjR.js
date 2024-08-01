import { _ as _export_sfc, m as menus, a as __nuxt_component_0 } from "../server.mjs";
import HeaderInfo from "./HeaderInfo-Cgp-mq39.js";
import Language from "./Language-DjIvJcaS.js";
import SearchPopup from "./SearchPopup-CwNKVdMc.js";
import { u as useUtilsStore } from "./utils-Cinv2m6T.js";
import { O as OffCanvasMain } from "./OffCanvasMain-B2oGt6VK.js";
import { O as OffCanvasSix } from "./OffCanvasSix-UeRQiqg5.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
const _sfc_main = {
  data() {
    return {
      isSticky: false
    };
  },
  props: {
    header_solid: {
      type: Boolean,
      default: false
    },
    header_solid_2: {
      type: Boolean,
      default: false
    },
    header_black: {
      type: Boolean,
      default: false
    },
    top_bar: {
      type: Boolean,
      default: true
    },
    transparent: {
      type: Boolean,
      default: false
    },
    commonOffcanvas: {
      type: Boolean,
      default: false
    }
  },
  components: {
    menus,
    HeaderInfo,
    Language,
    SearchPopup,
    OffCanvasMain,
    OffCanvasSix
  },
  methods: {
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
    handleOffCanvas() {
      this.$refs.off_canvas.openOffcanvas();
    },
    handleSticky() {
      if ((void 0).scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
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
  const _component_header_info = resolveComponent("header-info");
  const _component_Language = resolveComponent("Language");
  const _component_nuxt_link = __nuxt_component_0;
  const _component_menus = resolveComponent("menus");
  const _component_SearchPopup = resolveComponent("SearchPopup");
  const _component_off_canvas_main = resolveComponent("off-canvas-main");
  const _component_off_canvas_six = resolveComponent("off-canvas-six");
  _push(`<!--[--><header><div class="${ssrRenderClass(`header__area ${$props.header_solid ? "header__white-solid" : "header__transparent"} ${$props.header_solid_2 ? "header__white-solid-2 header__transparent" : ""} 
      ${$props.header_black ? "header__black" : ""}`)}">`);
  if ($props.top_bar) {
    _push(`<div class="header__top header__border d-none d-lg-block"><div class="container"><div class="row align-items-center"><div class="col-xxl-9 col-xl-9 col-lg-9 col-md-10">`);
    _push(ssrRenderComponent(_component_header_info, null, null, _parent));
    _push(`</div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-2"><div class="header__top-right d-flex justify-content-end align-items-center"><div class="header__lang ml-30">`);
    _push(ssrRenderComponent(_component_Language, null, null, _parent));
    _push(`</div></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(`header__bottom header__sticky ${$props.header_solid ? "" : `header__bottom-border${$props.transparent ? "-3" : ""}`} ${$data.isSticky ? "header-sticky" : ""}`)}" id="header-sticky"><div class="container"><div class="mega-menu-wrapper p-relative"><div class="row align-items-center"><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8"><div class="logo logo-border">`);
  if (!$props.header_solid && !$props.header_black) {
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="logo-light"${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}><img class="logo-dark"${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: "logo-light",
              src: _imports_1,
              alt: "logo"
            }),
            createVNode("img", {
              class: "logo-dark",
              src: _imports_0,
              alt: "logo"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.header_solid) {
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
  } else {
    _push(`<!---->`);
  }
  if ($props.header_black) {
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
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block"><div class="main-menu pl-55 main-menu-ff-space"><nav id="mobile-menu">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"><div class="header__bottom-right d-flex justify-content-end align-items-center pl-30"><div class="header__action d-none d-xl-block"><ul><li><a href="#" class="search-open-btn"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li><li><button type="button" class="${ssrRenderClass(`hamburger-btn ${$props.header_solid || $props.header_black ? "hamburger-btn-black" : ""} offcanvas-open-btn`)}"><span></span><span></span><span></span></button></li></ul></div><div class="header__hamburger ml-50 d-xl-none"><button type="button" class="${ssrRenderClass(`hamburger-btn ${$props.header_solid || $props.header_black ? "hamburger-btn-black" : ""} offcanvas-open-btn`)}"><span></span><span></span><span></span></button></div></div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_SearchPopup, { ref: "SearchPopup" }, null, _parent));
  _push(`</header>`);
  if (!$props.commonOffcanvas) {
    _push(ssrRenderComponent(_component_off_canvas_main, { ref: "off_canvas" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.commonOffcanvas) {
    _push(ssrRenderComponent(_component_off_canvas_six, { ref: "off_canvas" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderOne as default
};
//# sourceMappingURL=HeaderOne-CQq1TBjR.js.map
