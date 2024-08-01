import { _ as _export_sfc, m as menus, a as __nuxt_component_0 } from "../server.mjs";
import { O as OffCanvasTwo } from "./OffCanvasTwo-DLi45DwO.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("logo-green.Dws8hmKo.svg");
const _sfc_main = {
  components: { menus, OffCanvasTwo },
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
  const _component_NuxtLink = __nuxt_component_0;
  const _component_menus = resolveComponent("menus");
  const _component_off_canvas_two = resolveComponent("off-canvas-two");
  _push(`<!--[--><header><div class="header__area"><div class="${ssrRenderClass(`header__bottom-9 header__sticky ${$data.isSticky ? "header-sticky" : ""}`)}" id="header-sticky"><div class="container"><div class="mega-menu-wrapper p-relative"><div class="row align-items-center"><div class="col-xxl-3 col-xl-3 col-lg-2 col-md-4 col-sm-5 col-8"><div class="logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
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
  _push(`</div></div><div class="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block"><div class="main-menu main-menu-9 main-menu-ff-space"><nav id="mobile-menu">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"><div class="header__bottom-right-8 d-flex justify-content-end align-items-center"><div class="header__action-8 d-none d-xl-block"><ul><li><a href="#" class="search-open-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0004 17L15.4004 15.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li><li><button type="button" class="hamburger-btn-8 hamburger-btn-8-black offcanvas-open-btn">Menu</button></li></ul></div><div class="header__hamburger ml-50 d-xl-none"><button type="button" class="hamburger-btn-8 hamburger-btn-8-black offcanvas-open-btn">Menu</button></div></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_off_canvas_two, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderEight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderEight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderEight as default
};
//# sourceMappingURL=HeaderEight-CDvuu2sc.js.map
