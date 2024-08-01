import { mergeProps, useSSRContext, resolveComponent, withCtx, openBlock, createBlock, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_0$2 } from "../server.mjs";
import { S as SingleProduct, p as productData } from "./productData-D-fZVTZg.js";
import { N as NiceSelect } from "./NiceSelect-Em7NpCoz.js";
import { S as SingleListProduct } from "./SingleListProduct-QbQbZSkE.js";
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item" }, _attrs))}><h2 class="accordion-header" id="category__widget"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cagetory_widget_collapse" aria-expanded="true" aria-controls="cagetory_widget_collapse"> Categories </button></h2><div id="cagetory_widget_collapse" class="accordion-collapse collapse show" aria-labelledby="category__widget" data-bs-parent="#shop_category"><div class="accordion-body"><div class="shop__widget-list"><div class="shop__widget-list-item"><input type="checkbox" id="iphone" checked><label for="iphone">iPhone Cases (08)</label></div><div class="shop__widget-list-item"><input type="checkbox" id="android" checked><label for="android">Android Cases (04)</label></div><div class="shop__widget-list-item"><input type="checkbox" id="accessories"><label for="accessories">Accessories (02)</label></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/filter/ShopWidgetCategory.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ShopWidgetCategory = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item" }, _attrs))}><h2 class="accordion-header" id="color__widget"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#color_widget_collapse" aria-expanded="true" aria-controls="color_widget_collapse"> Color </button></h2><div id="color_widget_collapse" class="accordion-collapse collapse show" aria-labelledby="color__widget" data-bs-parent="#shop_color"><div class="accordion-body"><div class="shop__widget-list"><div class="shop__widget-list-item-2"><input type="checkbox" id="c-black" checked><label for="c-black">Black</label></div><div class="shop__widget-list-item-2 has-orange"><input type="checkbox" id="c-orange"><label for="c-orange">Orange</label></div><div class="shop__widget-list-item-2 has-green"><input type="checkbox" id="c-green"><label for="c-green">Green</label></div><div class="shop__widget-list-item-2 has-red"><input type="checkbox" id="c-red" checked><label for="c-red">Red</label></div><div class="shop__widget-list-item-2 has-yellow"><input type="checkbox" id="c-yellow"><label for="c-yellow">Yellow</label></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/filter/ShopWidgetColor.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ShopWidgetColor = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item" }, _attrs))}><h2 class="accordion-header" id="model__widget"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#model_widget_collapse" aria-expanded="true" aria-controls="model_widget_collapse"> Model </button></h2><div id="model_widget_collapse" class="accordion-collapse collapse show" aria-labelledby="model__widget" data-bs-parent="#shop_model"><div class="accordion-body"><div class="shop__widget-search pt-10 pb-25"><form action="#"><div class="shop__widget-search-input"><input type="text" placeholder="Search model"><button type="submit"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.64993 14.2999C11.3226 14.2999 14.2999 11.3226 14.2999 7.64993C14.2999 3.97727 11.3226 1 7.64993 1C3.97727 1 1 3.97727 1 7.64993C1 11.3226 3.97727 14.2999 7.64993 14.2999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0001 15L13.6001 13.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></form></div><div class="shop__widget-list"><div class="shop__widget-list-item"><input type="checkbox" id="iphone_12"><label for="iphone_12">iPhone 12</label></div><div class="shop__widget-list-item"><input type="checkbox" id="iphone_12_pro"><label for="iphone_12_pro">iPhone 12 Pro</label></div><div class="shop__widget-list-item"><input type="checkbox" id="iphone_11_pro"><label for="iphone_11_pro">iPhone 11 Pro</label></div><div class="shop__widget-list-item"><input type="checkbox" id="samsung" checked><label for="samsung">Samsung Galaxy S31</label></div><div class="shop__widget-list-item"><input type="checkbox" id="samsung_s20"><label for="samsung_s20">Samsung Galaxy S20</label></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/filter/ShopWidgetModel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ShopWidgetModel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item" }, _attrs))}><h2 class="accordion-header" id="price__widget"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#price_widget_collapse" aria-expanded="true" aria-controls="price_widget_collapse"> Price </button></h2><div id="price_widget_collapse" class="accordion-collapse collapse show" aria-labelledby="price__widget" data-bs-parent="#shop_price"><div class="accordion-body"><div class="shop__widget-list"><div class="shop__widget-list-item"><input type="checkbox" id="higher"><label for="higher">$10.00 - $49.00</label></div><div class="shop__widget-list-item"><input type="checkbox" id="high" checked><label for="high">$50.00 - $99.00</label></div><div class="shop__widget-list-item"><input type="checkbox" id="medium"><label for="medium">$100.00 - $199.00</label></div><div class="shop__widget-list-item"><input type="checkbox" id="low"><label for="low">$200.00 +</label></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/filter/ShopWidgetPrice.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ShopWidgetPrice = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  props: {
    right_side: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ShopWidgetModel,
    ShopWidgetPrice,
    ShopWidgetCategory,
    ShopWidgetColor
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_shop_widget_category = resolveComponent("shop-widget-category");
  const _component_shop_widget_model = resolveComponent("shop-widget-model");
  const _component_shop_widget_color = resolveComponent("shop-widget-color");
  const _component_shop_widget_price = resolveComponent("shop-widget-price");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `shop__sidebar on-${$props.right_side ? "right" : "left"}`
  }, _attrs))}><div class="shop__widget tp-accordion"><div class="accordion" id="shop_category">`);
  _push(ssrRenderComponent(_component_shop_widget_category, null, null, _parent));
  _push(`</div></div><div class="shop__widget tp-accordion"><div class="accordion" id="shop_model">`);
  _push(ssrRenderComponent(_component_shop_widget_model, null, null, _parent));
  _push(`</div></div><div class="shop__widget tp-accordion"><div class="accordion" id="shop_color">`);
  _push(ssrRenderComponent(_component_shop_widget_color, null, null, _parent));
  _push(`</div></div><div class="shop__widget tp-accordion"><div class="accordion" id="shop_price">`);
  _push(ssrRenderComponent(_component_shop_widget_price, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ShopSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tp-pagination tp-pagination-style-2" }, _attrs))}><nav><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/shop",
    class: "tp-pagination-prev prev page-numbers"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M14.3767 5.55249L1.75421 5.55249" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg> Prev `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "16",
            height: "11",
            viewBox: "0 0 16 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M6.17749 10.105L1.62499 5.55248L6.17749 0.999981",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            createVNode("path", {
              d: "M14.3767 5.55249L1.75421 5.55249",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])),
          createTextVNode(" Prev ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/shop" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`1`);
      } else {
        return [
          createTextVNode("1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><span class="current">2</span></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "/shop" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`3`);
      } else {
        return [
          createTextVNode("3")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/shop",
    class: "next page-numbers"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Next <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M9.82422 1L14.3767 5.5525L9.82422 10.105" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M1.625 5.55249H14.2475" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Next "),
          (openBlock(), createBlock("svg", {
            width: "16",
            height: "11",
            viewBox: "0 0 16 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M9.82422 1L14.3767 5.5525L9.82422 10.105",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            createVNode("path", {
              d: "M1.625 5.55249H14.2475",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ShopPagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { SingleProduct, SingleListProduct, ShopPagination: __nuxt_component_1, NiceSelect },
  mixins: [productData],
  props: {
    right_side: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeHandler(e) {
      console.log(e);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nice_select = resolveComponent("nice-select");
  const _component_shop_sidebar = __nuxt_component_0$1;
  const _component_single_product = resolveComponent("single-product");
  const _component_single_list_product = resolveComponent("single-list-product");
  const _component_shop_pagination = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "shop__area pb-60" }, _attrs))}><div class="container"><div class="shop__top mb-50"><div class="row align-items-center"><div class="col-lg-6 col-md-5"><div class="shop__result"><p>Showing 1–12 of 16 results</p></div></div><div class="col-lg-6 col-md-7"><div class="shop__sort d-flex flex-wrap justify-content-md-end align-items-center"><div class="shop__sort-item"><div class="shop__sort-tab tp-tab"><nav><div class="nav nav-tabs" id="nav-tab" role="tablist"><button class="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.65 6.868V2.782C19.65 1.513 19.074 1 17.643 1H14.007C12.576 1 12 1.513 12 2.782V6.859C12 8.137 12.576 8.641 14.007 8.641H17.643C19.074 8.65 19.65 8.137 19.65 6.868Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.65 17.643V14.007C19.65 12.576 19.074 12 17.643 12H14.007C12.576 12 12 12.576 12 14.007V17.643C12 19.074 12.576 19.65 14.007 19.65H17.643C19.074 19.65 19.65 19.074 19.65 17.643Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.65 6.868V2.782C8.65 1.513 8.074 1 6.643 1H3.007C1.576 1 1 1.513 1 2.782V6.859C1 8.137 1.576 8.641 3.007 8.641H6.643C8.074 8.65 8.65 8.137 8.65 6.868Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.65 17.643V14.007C8.65 12.576 8.074 12 6.643 12H3.007C1.576 12 1 12.576 1 14.007V17.643C1 19.074 1.576 19.65 3.007 19.65H6.643C8.074 19.65 8.65 19.074 8.65 17.643Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><button class="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 8H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 15H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></nav></div></div><div class="shop__sort-item"><div class="shop__sort-select">`);
  _push(ssrRenderComponent(_component_nice_select, {
    options: [
      { value: "Sort by latest", text: "Sort by latest" },
      { value: "Sort by best selling", text: "Sort by best selling" },
      { value: "Sort by top week", text: "Sort by top week" }
    ],
    "default-current": 0,
    name: "Sort by latest",
    onOnChange: $options.changeHandler
  }, null, _parent));
  _push(`</div></div></div></div></div></div><div class="shop__main"><div class="row">`);
  if (!$props.right_side) {
    _push(`<div class="col-lg-3">`);
    _push(ssrRenderComponent(_component_shop_sidebar, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(`col-lg-9 ${$props.right_side ? "" : "order-first order-lg-last"}`)}"><div class="shop__tab-content mb-40"><div class="tab-content" id="shop_tab_content"><div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab"><div class="row"><!--[-->`);
  ssrRenderList(_ctx.productData.slice(0, 9), (item, i) => {
    _push(`<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">`);
    _push(ssrRenderComponent(_component_single_product, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab"><div class="product__list-wrapper mb-30"><div class="row"><!--[-->`);
  ssrRenderList(_ctx.productData.slice(0, 5), (item, i) => {
    _push(`<div class="col-lg-12 col-md-6">`);
    _push(ssrRenderComponent(_component_single_list_product, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></div><div class="row"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_shop_pagination, null, null, _parent));
  _push(`</div></div></div></div>`);
  if ($props.right_side) {
    _push(`<div class="col-lg-3">`);
    _push(ssrRenderComponent(_component_shop_sidebar, { right_side: $props.right_side }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ShopArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-9 pt-13 pb-55 include-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-7"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list has-icon"><span class="breadcrumb-icon"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8125 7.90625L3 6.9375V14C3 14.2708 3.09375 14.5 3.28125 14.6875C3.48958 14.8958 3.72917 15 4 15H7C7.27083 15 7.5 14.8958 7.6875 14.6875C7.89583 14.5 8 14.2708 8 14V10H10V14C10 14.2708 10.0938 14.5 10.2812 14.6875C10.4896 14.8958 10.7292 15 11 15H14C14.2708 15 14.5 14.8958 14.6875 14.6875C14.8958 14.5 15 14.2708 15 14V6.9375L16.1875 7.90625C16.2708 7.96875 16.375 8 16.5 8C16.6667 8 16.8021 7.9375 16.9062 7.8125C17.0938 7.54167 17.0625 7.30208 16.8125 7.09375L9.3125 1.09375C9.10417 0.947917 8.89583 0.947917 8.6875 1.09375L6 3.25V2C6 1.72917 5.89583 1.5 5.6875 1.3125C5.5 1.10417 5.27083 1 5 1C4.72917 1 4.48958 1.10417 4.28125 1.3125C4.09375 1.5 4 1.72917 4 2V4.84375L1.1875 7.09375C0.9375 7.30208 0.90625 7.54167 1.09375 7.8125C1.30208 8.0625 1.54167 8.09375 1.8125 7.90625ZM9 2.125L14 6.125V14H11V9H7V14H4V6.15625L9 2.125Z" fill="currentColor"></path></svg></span><span>`);
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
  _push(`</span><span class="dvdr"><i class="fa-regular fa-angle-right"></i></span><span>Products</span></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/ShopBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShopBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ShopBreadcrumb as S,
  __nuxt_component_0 as _
};
//# sourceMappingURL=ShopBreadcrumb-B9BbiH6L.js.map
