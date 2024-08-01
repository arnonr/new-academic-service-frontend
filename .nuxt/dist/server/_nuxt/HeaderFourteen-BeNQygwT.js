import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { O as OffCanvasSix } from "./OffCanvasSix-UeRQiqg5.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
  components: { OffCanvasSix },
  methods: {
    handleOpenSidebar() {
      this.$refs.off_canvas.openOffcanvas();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0;
  const _component_off_canvas_six = resolveComponent("off-canvas-six");
  _push(`<!--[--><header><div class="header__area header__simple header__transparent"><div class="header__bottom header__sticky"><div class="container"><div class="mega-menu-wrapper p-relative"><div class="row align-items-center"><div class="col-7"><div class="logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
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
  _push(`</div></div><div class="col-5"><div class="header__bottom-right d-flex justify-content-end align-items-center pl-30"><div class="header__btn d-none d-md-block">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn tp-btn-black"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Let’s talk <span${_scopeId}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.4492 6.00007L1 6.00007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M8.42969 1L13.4509 5.99958L8.42969 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createTextVNode(" Let’s talk "),
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "15",
              height: "12",
              viewBox: "0 0 15 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M13.4492 6.00007L1 6.00007",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M8.42969 1L13.4509 5.99958L8.42969 11",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__hamburger ml-50 d-xl-none"><button type="button" class="hamburger-btn hamburger-btn-black offcanvas-open-btn"><span></span><span></span><span></span></button></div></div></div></div></div></div></div></div></header>`);
  _push(ssrRenderComponent(_component_off_canvas_six, { ref: "off_canvas" }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/HeaderFourteen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderFourteen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HeaderFourteen as default
};
//# sourceMappingURL=HeaderFourteen-BeNQygwT.js.map
