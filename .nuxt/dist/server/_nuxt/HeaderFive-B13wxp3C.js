import { _ as _export_sfc, m as menus, a as __nuxt_component_0 } from "../server.mjs";
import { O as OffCanvasFive } from "./OffCanvasFive-Cfw6fMGb.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
  components: { menus, OffCanvasFive },
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
  const _component_nuxt_link = __nuxt_component_0;
  const _component_menus = resolveComponent("menus");
  const _component_off_canvas_five = resolveComponent("off-canvas-five");
  _push(`<!--[--><header><div class="header__area"><div class="${ssrRenderClass(`header__bottom header__bottom-3 header__border-3 header-box-plr-245 header__sticky 
        header__sticky-black ${$data.isSticky ? "header-sticky" : ""}`)}" id="header-sticky"><div class="container-fluid"><div class="mega-menu-wrapper p-relative"><div class="row align-items-center"><div class="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8"><div class="logo">`);
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
  _push(`</div></div><div class="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block"><div class="main-menu main-menu-2 main-menu-3 main-menu-ff-space"><nav id="mobile-menu">`);
  _push(ssrRenderComponent(_component_menus, null, null, _parent));
  _push(`</nav></div></div><div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4"><div class="header__bottom-right d-flex justify-content-end align-items-center pl-30"><div class="header__social d-none d-xl-block"><ul><li><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li></ul></div><div class="header__btn d-none d-lg-block">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-header-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`contact`);
      } else {
        return [
          createTextVNode("contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__hamburger ml-50 d-lg-none"><button type="button" class="hamburger-btn offcanvas-open-btn"><span></span><span></span><span></span></button></div></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_off_canvas_five, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderFive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderFive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderFive as default
};
//# sourceMappingURL=HeaderFive-B13wxp3C.js.map
