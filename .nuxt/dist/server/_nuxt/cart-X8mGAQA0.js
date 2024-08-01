import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import HeaderTwelve from "./HeaderTwelve-loT0VF7e.js";
import { C as CartBreadcrumb } from "./CartBreadcrumb-B3rhhlcv.js";
import { S as SingleCartItem } from "./SingleCartItem-aNUbDxGm.js";
import { c as cart_img_1 } from "./product-3-BNor14_6.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
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
const _sfc_main$1 = {
  components: { SingleCartItem },
  data() {
    return { cart_img_1 };
  },
  methods: {
    handleSubmit() {
      console.log("submit");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_single_cart_item = resolveComponent("single-cart-item");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cart-area pt-100 pb-100" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><form><div class="table-content table-responsive"><div class="tp-continue-shopping"><p>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/shop" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Continue Shopping <i class="fal fa-reply"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" Continue Shopping "),
          createVNode("i", { class: "fal fa-reply" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><table class="table"><thead><tr><th class="product-thumbnail">Images</th><th class="cart-product-name">Product</th><th class="product-price">Unit Price</th><th class="product-quantity">Quantity</th><th class="product-subtotal">Total</th><th class="product-remove">Remove</th></tr></thead><tbody>`);
  _push(ssrRenderComponent(_component_single_cart_item, {
    img: $data.cart_img_1,
    title: "Level Bolt Smart Lock",
    price: "130.00"
  }, null, _parent));
  _push(`</tbody></table></div><div class="row"><div class="col-12"><div class="coupon-all"><div class="coupon"><input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text"><button class="tp-btn tp-btn-black" name="apply_coupon" type="submit"> Apply coupon </button></div><div class="coupon2"><button class="tp-btn tp-btn-black" name="update_cart" type="submit"> Update cart </button></div></div></div></div><div class="row justify-content-end"><div class="col-md-5 mr-auto"><div class="cart-page-total"><h2>Cart totals</h2><ul class="mb-20"><li>Subtotal <span>$250.00</span></li><li>Total <span>$250.00</span></li></ul>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "tp-btn",
    href: "/checkout"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Proceed to checkout`);
      } else {
        return [
          createTextVNode("Proceed to checkout")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></form></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart-wishlist/CartArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CartArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderTwelve,
    CartArea,
    CartBreadcrumb,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Cart - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_twelve = resolveComponent("header-twelve");
  const _component_cart_breadcrumb = resolveComponent("cart-breadcrumb");
  const _component_cart_area = resolveComponent("cart-area");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_twelve, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_cart_breadcrumb, {
    title: "My Cart",
    subtitle: "Cart"
  }, null, _parent));
  _push(ssrRenderComponent(_component_cart_area, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  cart as default
};
//# sourceMappingURL=cart-X8mGAQA0.js.map
