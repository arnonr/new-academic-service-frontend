import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$2 = {
  props: {
    best: {
      type: Boolean,
      default: false
    },
    tag: String,
    price: String
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing__top-7 p-relative text-center" }, _attrs))}>`);
  if ($props.best) {
    _push(`<div class="pricing__popular-2"><span>Best Choice</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="pricing__tag-7"><span>${ssrInterpolate($props.tag)}</span></div><div class="pricing__title-wrapper-7"><h3 class="pricing__title-7">$${ssrInterpolate($props.price)}</h3><p> Free forever,! <br> No credit card required. </p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/StartUpPricing/PricingHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PricingHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    title: String,
    info_1: String,
    info_2: String,
    info_3: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing__feature-info-item" }, _attrs))}><div class="row gx-0 align-items-center"><div class="col-xl-4 col-4"><div class="pricing__feature-info-content d-flex align-items-center"><div class="pricing__feature-info-details"><span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5C4.99594 1.5 1.75 4.74594 1.75 8.75C1.75 12.7541 4.99594 16 9 16C13.0041 16 16.25 12.7541 16.25 8.75C16.25 4.74594 13.0041 1.5 9 1.5ZM0.25 8.75C0.25 3.91751 4.16751 0 9 0C13.8325 0 17.75 3.91751 17.75 8.75C17.75 13.5825 13.8325 17.5 9 17.5C4.16751 17.5 0.25 13.5825 0.25 8.75ZM9 7.75C9.55229 7.75 10 8.19771 10 8.75V11.95C10 12.5023 9.55229 12.95 9 12.95C8.44771 12.95 8 12.5023 8 11.95V8.75C8 8.19771 8.44771 7.75 9 7.75ZM9 4.5498C8.44771 4.5498 8 4.99752 8 5.5498C8 6.10209 8.44771 6.5498 9 6.5498H9.008C9.56028 6.5498 10.008 6.10209 10.008 5.5498C10.008 4.99752 9.56028 4.5498 9.008 4.5498H9Z" fill="currentColor"></path></svg></span><div class="pricing__feature-info-tooltip transition-3"><p> Add gradient heading, button, pricing table testimonial etc. </p></div></div><div class="pricing__feature-info-text"><p>${ssrInterpolate($props.title)}</p></div></div></div><div class="col-xl-8 col-8"><div class="pricing__feature-info-wrapper d-flex align-items-center"><div class="pricing__feature-info-available text-center"><p>${$props.info_1 ?? ""}</p></div><div class="pricing__feature-info-available text-center"><p>${$props.info_2 ?? ""}</p></div><div class="pricing__feature-info-available text-center"><p>${$props.info_3 ?? ""}</p></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/StartUpPricing/PricingItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PricingItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __buildAssetsURL("price-shape-1.miTipk23.png");
const _imports_1 = "" + __buildAssetsURL("price-icon-1.BM74BOKY.png");
const _imports_2 = "" + __buildAssetsURL("price-icon-2.D1ALPSLI.png");
const _sfc_main = {
  components: { PricingHeader, PricingItem },
  props: {
    style_2: {
      type: Boolean,
      default: false
    },
    el_style: {
      type: Boolean,
      default: false
    },
    hide_shape: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_pricing_header = resolveComponent("pricing-header");
  const _component_pricing_item = resolveComponent("pricing-item");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `pricing__area ${$props.style_2 ? "pt-110 pb-120" : $props.el_style ? "pt-130 pb-120" : "pt-130"} p-relative z-index-1`
  }, _attrs))}>`);
  if (!$props.hide_shape) {
    _push(`<div class="pricing__shape"><img class="pricing__shape-6"${ssrRenderAttr("src", _imports_0)} alt="pricing__shape"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container"><div class="row justify-content-center"><div class="${ssrRenderClass(`col-xl-7 col-lg-8 ${$props.style_2 ? "col-md-10" : ""}`)}">`);
  if (!$props.style_2) {
    _push(`<div class="section__title-wrapper-7 text-center mb-60"><span class="section__title-pre-7">Our Pricing</span><h3 class="section__title-7"> Simple <span class="section__title-7-highlight"> pricing <svg width="240" height="22" viewBox="0 0 240 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="currentColor"></path></svg></span> solutions for everyone. </h3></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.style_2) {
    _push(`<div class="tp-section-wrapper-2 mb-65 text-center"><span class="tp-section-subtitle-2">PRICING PAGE</span><h3 class="tp-section-title-2 font-70"> Pricing built to suits teams of all sizes. </h3></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="${ssrRenderClass(`pricing__table ${$props.style_2 ? "pricing__style-2" : ""} white-bg`)}"><div class="pricing__table-wrapper"><div class="pricing__header grey-bg-13"><div class="row gx-0"><div class="col-xl-4 col-4"><div class="pricing__header-content"><h3 class="pricing__header-title">Contact Us!</h3>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-11"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get Started`);
      } else {
        return [
          createTextVNode("Get Started")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (!$props.style_2) {
    _push(`<img class="pricing-header-shape"${ssrRenderAttr("src", _imports_1)} alt="pricing-header-shape">`);
  } else {
    _push(`<!---->`);
  }
  if ($props.style_2) {
    _push(`<img class="pricing-header-shape"${ssrRenderAttr("src", _imports_2)} alt="pricing-header-shape">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="col-xl-8 col-8"><div class="pricing__header-top-wrapper d-flex align-items-center">`);
  _push(ssrRenderComponent(_component_pricing_header, {
    tag: "Silver Plan",
    price: "94"
  }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_header, {
    best: true,
    tag: "Advanced",
    price: "59"
  }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_header, {
    tag: "Enterprise",
    price: "79"
  }, null, _parent));
  _push(`</div></div></div></div><div class="pricing__feature-item-wrapper">`);
  _push(ssrRenderComponent(_component_pricing_item, {
    title: "Unlimited project",
    info_1: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_2: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_3: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>'
  }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_item, {
    title: "Free Google Analysis",
    info_1: "$6/Year",
    info_2: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_3: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>'
  }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_item, {
    title: "Lifetime support & SEO Experts",
    info_1: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_2: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_3: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>'
  }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_item, {
    title: "Data Security & Backup",
    info_1: "100 GB",
    info_2: "1TB",
    info_3: "Unlimited"
  }, null, _parent));
  _push(ssrRenderComponent(_component_pricing_item, {
    title: "Auto Lifetime Upgrade",
    info_1: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_2: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>',
    info_3: '<span>\r\n                          <svg\r\n                            width="11"\r\n                            height="9"\r\n                            viewBox="0 0 11 9"\r\n                            fill="none"\r\n                            xmlns="http://www.w3.org/2000/svg"\r\n                          >\r\n                            <path\r\n                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"\r\n                              stroke="currentColor"\r\n                              stroke-width="2"\r\n                              stroke-linecap="round"\r\n                              stroke-linejoin="round"\r\n                            />\r\n                          </svg>\r\n                        </span>'
  }, null, _parent));
  _push(`<div class="pricing__footer"><div class="row gx-0"><div class="col-xl-4 col-4"><div class="pricing__footer-content"></div></div><div class="col-xl-8 col-8"><div class="pricing__btn-wrapper-7 d-flex align-items-center"><div class="pricing__btn-7 text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btnr-border-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Choose Plan `);
      } else {
        return [
          createTextVNode("Choose Plan ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="pricing__btn-7 price-active text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btnr-border-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Choose Plan `);
      } else {
        return [
          createTextVNode("Choose Plan ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="pricing__btn-7 text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btnr-border-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Choose Plan `);
      } else {
        return [
          createTextVNode("Choose Plan ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/StartUpPricing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StartUpPricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  StartUpPricing as S
};
//# sourceMappingURL=index-Bu_9HrqE.js.map
