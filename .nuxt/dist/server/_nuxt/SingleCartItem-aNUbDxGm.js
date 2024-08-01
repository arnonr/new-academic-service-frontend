import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  props: {
    img: String,
    title: String,
    price: String
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    handleIncrement() {
      this.count = this.count + 1;
    },
    handleDecrement() {
      if (this.count > 1) {
        this.count = this.count - 1;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<tr${ssrRenderAttrs(_attrs)}><td class="product-thumbnail">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/product-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.img)} alt="cart img"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.img,
            alt: "cart img"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td class="product-name">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/product-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td class="product-price"><span class="amount">$${ssrInterpolate($props.price)}</span></td><td class="product-quantity"><div class="tp-product-quantity mt-10 mb-10"><span class="tp-cart-minus"><svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><input class="tp-cart-input" type="text"${ssrRenderAttr("value", $data.count)}><span class="tp-cart-plus"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21924 7H13.3836" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.30176 13V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div></td><td class="product-subtotal"><span class="amount">$${ssrInterpolate($props.price)}</span></td><td class="product-remove"><button type="submit"><i class="fa fa-times"></i></button></td></tr>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart-wishlist/SingleCartItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleCartItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleCartItem as S
};
//# sourceMappingURL=SingleCartItem-aNUbDxGm.js.map
