import HeaderSeven from "./HeaderSeven-DpaaHaNJ.js";
import FooterSeven from "./FooterSeven-D-_cjTbZ.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./OffCanvasSix-UeRQiqg5.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./logo-MlJCTsTl.js";
import "toastify-js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "ohash";
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
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
const _sfc_main = {
  components: {
    HeaderSeven,
    FooterSeven,
    BackToTop
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_seven = resolveComponent("header-seven");
  const _component_footer_seven = resolveComponent("footer-seven");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_seven, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_footer_seven, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/LayoutSeven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  layout as default
};
//# sourceMappingURL=LayoutSeven-BeiX1D2Z.js.map
