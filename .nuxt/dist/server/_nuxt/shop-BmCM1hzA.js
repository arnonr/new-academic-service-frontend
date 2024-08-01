import { S as ShopBreadcrumb, _ as __nuxt_component_0 } from "./ShopBreadcrumb-B9BbiH6L.js";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderTwelve from "./HeaderTwelve-loT0VF7e.js";
import { S as ShopCta } from "./ShopCta-CDlI831p.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./productData-D-fZVTZg.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./product-3-BNor14_6.js";
import "./NiceSelect-Em7NpCoz.js";
import "./SingleListProduct-QbQbZSkE.js";
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
import "./utils-Cinv2m6T.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./logo-MlJCTsTl.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main = {
  components: {
    HeaderTwelve,
    ShopBreadcrumb,
    ShopArea: __nuxt_component_0,
    ShopCta,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Shop - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_twelve = resolveComponent("header-twelve");
  const _component_shop_breadcrumb = resolveComponent("shop-breadcrumb");
  const _component_shop_area = __nuxt_component_0;
  const _component_shop_cta = resolveComponent("shop-cta");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_twelve, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_shop_breadcrumb, null, null, _parent));
  _push(ssrRenderComponent(_component_shop_area, null, null, _parent));
  _push(ssrRenderComponent(_component_shop_cta, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  shop as default
};
//# sourceMappingURL=shop-BmCM1hzA.js.map
