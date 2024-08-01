import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const bg = "" + __buildAssetsURL("breadcrumb-shape-1.C4jNqnKo.png");
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAtCAYAAABbAsDYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG1SURBVHgB7VgtcMIwGP062+miQVMNekyjV8/00MxPrx5NPWjQmy6a6U4P3b3XJgz6t7Tc7Sby7r6GS5P3cknue/0Q+QM4fKRpOkUTIFzEHvHqOM5nGyJweGjmiCEiQezAEWUieBkogXNw0ByDjmII8CzReIXuJTjWN/gxqZjTQ4zFXGBcIUBki6eIK9fDbeqnyKFmQCzmeGvioEiIKB7yqs3Bq7NbFboTxZ3fLgL7OkJzy1W1OfBzqBvmK4GPrjwWFhYWv0A7Y19yX2FqjpFzdtIB4CEHnZE5a62TLJ2RCW0hl56wxYBQWgA8MzTTQvcCPHum+pmUTWeCSUMxF/ArBIiTM/Zr5vbEHF5Nv69F6pwxEXMkTf0UiSpeHriXYgg1tsqu808iPrCnAzQPWgCx6eJq6nbdyc/tMl6ohYWFxX+DTpA0LSZJ+kLctijVUDws7Y7gOBVGjqopXuTSeCJdubYQKBa49JJnLph+8ihlZwvUx4WpgCflCprO+sQfFBnVzB2IOfymforUmdOXXI9G+02wl+9iDh5y1WXZ8qFvF633XtTtQoQd//bgGXCLsmoYHBu++wYw65KMfLuhtQAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAsCAYAAAB/nHhDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE0SURBVHgB7Ze9TsNAEITnIrpQQw11evrQJy3poeYteAqoTQu0mBpqqEMNfWjNjMgJy9lTtJcfKcp90tnKbDwr2daOL4A0TTPhaYQ/nkMId8jA8gkUL1tipGKxgoOUT4+Hc+P/I/gxfXrYMGpQG/or/Jg+alB1ijK/hZ91+RQKhcLuEXSYp5ECo8/1sEJkLvgcdHJUjKn9ZESm6bOVyDwyCn34MX3UYGoULG0Zpk+MzC6P8GP6xLdI92/INeOq+YDfkMG6fAqFwt4RZ5HGc0yiT86QnA1InEUxF7QJfFGiaY7foDXPqeVsAmV83ZIG1A41rq+wGBYTFgfwYaXgUA1OEhccw4flc6oGX4kLUnqKb8sjlWhTPoMP+LBSsI5v0Rn+7+E71xMbzOCEPhc8jec/9V10/wvc9nuW1rNGbgAAAABJRU5ErkJggg==";
const _sfc_main = {
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return { bg };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-7 breadcrumb__bg-3 p-relative z-index-1 include-bg pt-180 pb-100" }, _attrs))}><div class="breadcrumb__bg-shape include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="breadcrumb__shape"><img class="breadcrumb__shape-1"${ssrRenderAttr("src", _imports_0)} alt="shape"><img class="breadcrumb__shape-2"${ssrRenderAttr("src", _imports_1)} alt="shape"></div><div class="container"><div class="row justify-content-center"><div class="col-xxl-7 col-xl-8 col-lg-9"><div class="breadcrumb__content breadcrumb__content-2 p-relative z-index-1 text-center"><h3 class="breadcrumb__title">${ssrInterpolate($props.title)}</h3><div class="breadcrumb__list"><span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/" }, {
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
  _push(`</span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>${ssrInterpolate($props.subtitle)}</span></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/CommonBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TeamBreadcrumb as T
};
//# sourceMappingURL=CommonBreadcrumb-NhK14ET7.js.map
