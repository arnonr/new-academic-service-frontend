import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { c as cate_1, a as cate_2, b as cate_3, d as cate_4, S as ShopCategory } from "./ShopCategory-Ie9P3AON.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { S as SingleProduct, p as productData } from "./productData-D-fZVTZg.js";
import { S as SingleListProduct } from "./SingleListProduct-QbQbZSkE.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import Footer from "./Footer-85SZoxrw.js";
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
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "swiper/vue";
import "swiper";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "./product-3-BNor14_6.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$4 = {
  data() {
    return {
      products_category: [
        {
          img: cate_1,
          title: "Call Phone &Tablets"
        },
        {
          img: cate_2,
          title: "Game & Video"
        },
        {
          img: cate_3,
          title: "Sport Watches"
        },
        {
          img: cate_4,
          title: "Computers & Laptop"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__category pt-10 pb-100" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Category Grid</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.products_category, (item, i) => {
    _push(`<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="product__category-item mb-20 text-center swiper-slide"><div class="product__category-thumb w-img">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/shop" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", item.img)} alt=""${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: item.img,
              alt: ""
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="product__category-content"><h3 class="product__category-title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/shop" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-shop/ElShopCategoryGrid.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ElShopCategoryGrid = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: { SingleProduct },
  mixins: [productData]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_product = resolveComponent("single-product");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__popular-area pt-110 pb-20" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Product Grid</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.productData.slice(0, 8), (item, i) => {
    _push(`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">`);
    _push(ssrRenderComponent(_component_single_product, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-shop/ElShopProductGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ElShopProductGrid = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { SingleListProduct },
  mixins: [productData]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_list_product = resolveComponent("single-list-product");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__popular-area pt-110 pb-90" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Product List</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.productData.slice(0, 5), (item, i) => {
    _push(`<div class="col-lg-12 col-md-6">`);
    _push(ssrRenderComponent(_component_single_list_product, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-shop/ElShopProductList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ElShopProductList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    ShopCategory,
    ElShopCategoryGrid,
    ElShopProductGrid,
    ElShopProductList
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_shop_category = ShopCategory;
  const _component_el_shop_category_grid = resolveComponent("el-shop-category-grid");
  const _component_el_shop_product_grid = resolveComponent("el-shop-product-grid");
  const _component_el_shop_product_list = resolveComponent("el-shop-product-list");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our shop styles",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_shop_category, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_el_shop_category_grid, null, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_el_shop_product_grid, null, null, _parent));
  _push(ssrRenderComponent(_component_el_shop_product_list, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-shop/ElShopMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElShopMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElShopMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Shop - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_el_shop_main = resolveComponent("el-shop-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_el_shop_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsShop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsShop as default
};
//# sourceMappingURL=elements-shop-C4rNMZmk.js.map
