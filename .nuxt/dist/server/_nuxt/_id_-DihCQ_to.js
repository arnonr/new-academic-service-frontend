import { P as ProductDetailsBreadcrumb, _ as __nuxt_component_0, a as __nuxt_component_1, R as RelatedProducts } from "./RelatedProducts-BZbTLp68.js";
import { _ as _export_sfc, u as useHead, l as useRoute } from "../server.mjs";
import { p as productData } from "./productData-D-fZVTZg.js";
import HeaderTwelve from "./HeaderTwelve-loT0VF7e.js";
import { S as ShopCta } from "./ShopCta-CDlI831p.js";
import FooterEleven from "./FooterEleven-DjayW-oB.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./user-2-CWDkkzb7.js";
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
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./product-3-BNor14_6.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main = {
  components: {
    HeaderTwelve,
    ProductDetailsBreadcrumb,
    ShopCta,
    ProductDetailsArea: __nuxt_component_0,
    ProductDetailsTabArea: __nuxt_component_1,
    RelatedProducts,
    FooterEleven,
    BackToTop
  },
  mixins: [productData],
  data() {
    return {
      item: {}
    };
  },
  setup() {
    useHead({
      title: "Product Details - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  },
  created() {
    const route = useRoute();
    this.item = productData.data().productData.find((p) => p.id == route.params.id);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_twelve = resolveComponent("header-twelve");
  const _component_product_details_breadcrumb = resolveComponent("product-details-breadcrumb");
  const _component_product_details_area = __nuxt_component_0;
  const _component_product_details_tab_area = __nuxt_component_1;
  const _component_related_products = resolveComponent("related-products");
  const _component_shop_cta = resolveComponent("shop-cta");
  const _component_footer_eleven = resolveComponent("footer-eleven");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_twelve, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_product_details_breadcrumb, null, null, _parent));
  _push(ssrRenderComponent(_component_product_details_area, { item: $data.item }, null, _parent));
  _push(ssrRenderComponent(_component_product_details_tab_area, null, null, _parent));
  _push(ssrRenderComponent(_component_related_products, null, null, _parent));
  _push(ssrRenderComponent(_component_shop_cta, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_eleven, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-DihCQ_to.js.map
