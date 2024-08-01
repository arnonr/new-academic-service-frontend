import { _ as _export_sfc, H as HeaderCustom, F as FooterCustom, o as useSkin } from "../server.mjs";
import { resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main = {
  components: {
    HeaderCustom,
    FooterCustom,
    BackToTop
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderCustom = resolveComponent("HeaderCustom");
  const _component_FooterCustom = resolveComponent("FooterCustom");
  const _component_BackToTop = resolveComponent("BackToTop");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "fix " + ("useSkin" in _ctx ? _ctx.useSkin : unref(useSkin))().value
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderCustom, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_FooterCustom, null, null, _parent));
  _push(ssrRenderComponent(_component_BackToTop, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-DI_aPGoE.js.map
