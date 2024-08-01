import { N as NiceSelect } from "./NiceSelect-Em7NpCoz.js";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import HeaderTwelve from "./HeaderTwelve-loT0VF7e.js";
import { C as CartBreadcrumb } from "./CartBreadcrumb-B3rhhlcv.js";
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
import "./product-3-BNor14_6.js";
import "./logo-black-DNxRSU5J.js";
import "./logo-MlJCTsTl.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$6 = {
  components: { NiceSelect },
  methods: {
    changeHandler(e) {
      console.log(e);
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nice_select = resolveComponent("nice-select");
  _push(ssrRenderComponent(_component_nice_select, mergeProps({
    options: [
      { value: "Bangladesh", text: "Bangladesh" },
      { value: "Algeria", text: "Algeria" },
      { value: "Afghanistan", text: "Afghanistan" },
      { value: "Ghana", text: "Ghana" },
      { value: "Albania", text: "Albania" },
      { value: "Bahrain", text: "Bahrain" },
      { value: "Colombia", text: "Colombia" },
      { value: "Dominican Republic", text: "Dominican Republic" }
    ],
    "default-current": 0,
    name: "Bangladesh",
    onOnChange: $options.changeHandler
  }, _attrs), null, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/CountrySelect.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CountrySelect = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: { CountrySelect },
  data() {
    return {
      createAccount: false
    };
  },
  methods: {
    handleCreateAccount() {
      this.createAccount = !this.createAccount;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_country_select = resolveComponent("country-select");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-md-12"><div class="country-select"><label>Country <span class="required">*</span></label>`);
  _push(ssrRenderComponent(_component_country_select, null, null, _parent));
  _push(`</div></div><div class="col-md-6"><div class="checkout-form-list"><label>First Name <span class="required">*</span></label><input type="text" placeholder="First Name"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Last Name <span class="required">*</span></label><input type="text" placeholder="Last Name"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Company Name</label><input type="text" placeholder="example LTD."></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Address <span class="required">*</span></label><input type="text" placeholder="Street address"></div></div><div class="col-md-12"><div class="checkout-form-list"><input type="text" placeholder="Apartment, suite, unit etc. (optional)"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Town / City <span class="required">*</span></label><input type="text" placeholder="Town / City"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>State / County <span class="required">*</span></label><input type="text" placeholder="State / County"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Postcode / Zip <span class="required">*</span></label><input type="text" placeholder="Postcode / Zip"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Email Address <span class="required">*</span></label><input type="email" placeholder="Your Email"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Phone <span class="required">*</span></label><input type="text" placeholder="Phone number"></div></div><div class="col-md-12"><div class="checkout-form-list create-acc"><input id="cbox" type="checkbox"><label for="cbox">Create an account?</label></div>`);
  if ($data.createAccount) {
    _push(`<div id="cbox_info" class="checkout-form-list create-account"><p> Create an account by entering the information below. If you are a returning customer please login at the top of the page. </p><label>Account password <span class="required">*</span></label><input type="password" placeholder="password"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/BillingDetails.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BillingDetails = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: { NiceSelect, CountrySelect },
  data() {
    return {
      shipBox: false
    };
  },
  methods: {
    handleShipBox() {
      this.shipBox = !this.shipBox;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_country_select = resolveComponent("country-select");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "different-address" }, _attrs))}><div class="ship-different-title"><h3><label for="ship-box">Ship to a different address?</label><input id="ship-box" type="checkbox"></h3></div>`);
  if ($data.shipBox) {
    _push(`<div id="ship-box-info"><div class="row"><div class="col-md-12"><div class="country-select"><label>Country <span class="required">*</span></label>`);
    _push(ssrRenderComponent(_component_country_select, null, null, _parent));
    _push(`</div></div><div class="col-md-6"><div class="checkout-form-list"><label>First Name <span class="required">*</span></label><input type="text" placeholder="First Name"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Last Name <span class="required">*</span></label><input type="text" placeholder="Last Name"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Company Name</label><input type="text" placeholder="example LTD."></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Address <span class="required">*</span></label><input type="text" placeholder="Street address"></div></div><div class="col-md-12"><div class="checkout-form-list"><input type="text" placeholder="Apartment, suite, unit etc. (optional)"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Town / City <span class="required">*</span></label><input type="text" placeholder="Town / City"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>State / County <span class="required">*</span></label><input type="text" placeholder="State / County"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Postcode / Zip <span class="required">*</span></label><input type="text" placeholder="Postcode / Zip"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Email Address <span class="required">*</span></label><input type="email" placeholder="Your Email"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Phone <span class="required">*</span></label><input type="text" placeholder="Phone number"></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="order-notes"><div class="checkout-form-list"><label>Order Notes</label><textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/DifferentAddress.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DifferentAddress = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "your-order mb-30" }, _attrs))}><h3>Your order</h3><div class="your-order-table table-responsive"><table><thead><tr><th class="product-name">Product</th><th class="product-total">Total</th></tr></thead><tbody><tr class="cart_item"><td class="product-name"> Vestibulum suscipit <strong class="product-quantity"> × 1</strong></td><td class="product-total"><span class="amount">$165.00</span></td></tr><tr class="cart_item"><td class="product-name"> Vestibulum dictum magna <strong class="product-quantity"> × 1</strong></td><td class="product-total"><span class="amount">$50.00</span></td></tr></tbody><tfoot><tr class="cart-subtotal"><th>Cart Subtotal</th><td><span class="amount">$215.00</span></td></tr><tr class="shipping"><th>Shipping</th><td><ul><li><input id="flat_shipping" type="radio" name="shipping"><label for="flat_shipping"> Flat Rate: <span class="amount">$7.00</span></label></li><li><input id="free_shipping" type="radio" name="shipping"><label for="free_shipping">Free Shipping:</label></li></ul></td></tr><tr class="order-total"><th>Order Total</th><td><strong><span class="amount">$215.00</span></strong></td></tr></tfoot></table></div><div class="payment-method faq__wrapper tp-accordion"><div class="accordion" id="checkoutAccordion"><div class="accordion-item"><h2 class="accordion-header" id="checkoutOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne"> Direct Bank Transfer <span class="accordion-btn"></span></button></h2><div id="bankOne" class="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion"><div class="accordion-body"><p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="paymentTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment"> Cheque Payment <span class="accordion-btn"></span></button></h2><div id="payment" class="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion"><div class="accordion-body"><p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p></div></div></div></div><div class="order-button-payment mt-20"><button type="submit" class="tp-btn">Place order</button></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/OrderArea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OrderArea = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { OrderArea, BillingDetails, DifferentAddress },
  methods: {
    handleFormSubmit() {
      console.log("submit form");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_billing_details = resolveComponent("billing-details");
  const _component_different_address = resolveComponent("different-address");
  const _component_order_area = resolveComponent("order-area");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "checkout-area pb-85" }, _attrs))}><div class="container"><form><div class="row"><div class="col-lg-6"><div class="checkbox-form"><h3>Billing Details</h3>`);
  _push(ssrRenderComponent(_component_billing_details, null, null, _parent));
  _push(ssrRenderComponent(_component_different_address, null, null, _parent));
  _push(`</div></div><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_order_area, null, null, _parent));
  _push(`</div></div></form></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/CheckoutArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      checkoutLogin: false,
      checkoutCoupon: false,
      formValue: {
        name_or_email: "",
        password: "",
        isChecked: false
      },
      couponVal: ""
    };
  },
  methods: {
    handleCheckoutLogin() {
      this.checkoutLogin = !this.checkoutLogin;
    },
    handleCheckoutCoupon() {
      this.checkoutCoupon = !this.checkoutCoupon;
    },
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    },
    handleCouponSubmit() {
      console.log(this.couponVal);
      this.couponVal = "";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "coupon-area pt-120 pb-30" }, _attrs))}><div class="container"><div class="row"><div class="col-md-6"><div class="coupon-accordion"><h3> Returning customer? <span id="showlogin">Click here to login</span></h3>`);
  if ($data.checkoutLogin) {
    _push(`<div id="checkout-login" class="coupon-content"><div class="coupon-info"><p class="coupon-text"> Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus. </p><form><p class="form-row-first"><label>Username or email <span class="required">*</span></label><input type="text"${ssrRenderAttr("value", $data.formValue.name_or_email)}></p><p class="form-row-last"><label>Password <span class="required">*</span></label><input type="text"${ssrRenderAttr("value", $data.formValue.password)}></p><p class="form-row"><button class="tp-btn" type="submit">Login</button><label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.formValue.isChecked) ? ssrLooseContain($data.formValue.isChecked, null) : $data.formValue.isChecked) ? " checked" : ""}> Remember me </label></p><p class="lost-password">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/forgot" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Lost your password?`);
        } else {
          return [
            createTextVNode("Lost your password?")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="col-md-6"><div class="coupon-accordion"><h3> Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>`);
  if ($data.checkoutCoupon) {
    _push(`<div id="checkout_coupon" class="coupon-checkout-content"><div class="coupon-info"><form><p class="checkout-coupon"><input${ssrRenderAttr("value", $data.couponVal)} type="text" placeholder="Coupon Code"><button class="tp-btn" type="submit">Apply Coupon</button></p></form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/CouponArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CouponArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderTwelve,
    CartBreadcrumb,
    CouponArea,
    CheckoutArea: __nuxt_component_0,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Checkout - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_twelve = resolveComponent("header-twelve");
  const _component_cart_breadcrumb = resolveComponent("cart-breadcrumb");
  const _component_coupon_area = resolveComponent("coupon-area");
  const _component_checkout_area = __nuxt_component_0;
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_twelve, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_cart_breadcrumb, {
    title: "Checkout",
    subtitle: "Checkout"
  }, null, _parent));
  _push(ssrRenderComponent(_component_coupon_area, null, null, _parent));
  _push(ssrRenderComponent(_component_checkout_area, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-DYtAHPnF.js.map
