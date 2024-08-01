import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { c as cart_img_1, p as p_img_2, a as p_img_3 } from "./product-3-BNor14_6.js";
const _sfc_main$1 = {
  props: {
    modal_id: {
      type: String,
      default: "productModal"
    },
    item: {
      type: Object,
      default: {},
      required: true
    }
  },
  data() {
    return {
      active_img: this.item.image
    };
  },
  methods: {
    handleActiveImg(img) {
      this.active_img = img;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "product__modal modal fade",
    id: $props.modal_id,
    tabindex: "-1",
    "aria-labelledby": "productModal",
    "aria-hidden": "true"
  }, _attrs))}><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="product__modal-wrapper"><div class="product__modal-close"><button class="product__modal-close-btn" type="button" data-bs-toggle="modal"${ssrRenderAttr("data-bs-target", `#${$props.modal_id}`)}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><path d="M21 1L1 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button></div><div class="row"><div class="col-lg-6"><div class="product__modal-thumb-wrapper"><div class="product__details-thumb-tab mr-40"><div class="product__details-thumb-content w-img"><div class="tab-content" id="nav-tabContent"><div class="active-img"><img${ssrRenderAttr("src", $data.active_img)} alt="img"></div></div></div><div class="product__details-thumb-nav tp-tab"><nav><div class="nav nav-tabs justify-content-sm-between"><!--[-->`);
  ssrRenderList($props.item.relatedImages, (img, i) => {
    _push(`<button class="${ssrRenderClass(`nav-link ${img.img === $data.active_img ? "active" : ""}`)}"><img${ssrRenderAttr("src", img.img)} alt="image" style="${ssrRenderStyle({ "width": "90px", "height": "90px" })}"></button>`);
  });
  _push(`<!--]--></div></nav></div></div></div></div><div class="col-lg-6"><div class="product__details-wrapper"><h3 class="product__details-title">${ssrInterpolate($props.item.title)}</h3><div class="product__details-rating d-flex align-items-center"><div class="product__rating product__rating-2 d-flex"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div><div class="product__details-rating-count"><span>(4 customer review)</span></div></div><p>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p><div class="product__details-price"><span class="product__details-ammount old-ammount">$82.00</span><span class="product__details-ammount new-ammount">$54.00</span><span class="product__details-offer">-12%</span></div><div class="product__details-quantity"><div class="tp-product-quantity mt-10 mb-10"><span class="tp-cart-minus"><svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><input class="tp-cart-input" type="text" value="1"><span class="tp-cart-plus"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21924 7H13.3836" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.30176 13V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div></div><div class="product__details-action d-flex flex-wrap align-items-center"><button type="button" class="product-add-cart-btn product-add-cart-btn-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.54431 4.80484L4.08701 11.2487C4.12661 11.7447 4.53251 12.1167 5.02841 12.1167H5.03201H14.8519H14.8537C15.3227 12.1167 15.7232 11.7681 15.7898 11.3053L16.6448 5.41221C16.6646 5.27205 16.6295 5.13189 16.544 5.01868C16.4594 4.90457 16.3352 4.8309 16.1948 4.81113C16.0067 4.81832 8.20092 4.80754 3.54431 4.80484ZM5.02647 13.4642C3.84117 13.4642 2.83766 12.5405 2.74136 11.359L1.91696 1.57098L0.560653 1.33738C0.192551 1.27269 -0.0531497 0.924974 0.00985058 0.557495C0.0746508 0.190017 0.430152 -0.0489788 0.790154 0.00852392L2.66216 0.331977C2.96366 0.384987 3.19316 0.634765 3.21926 0.940248L3.43076 3.45689C16.2792 3.46228 16.3206 3.46857 16.3827 3.47576C16.884 3.54854 17.325 3.80999 17.6256 4.21251C17.9262 4.61413 18.0522 5.1092 17.9802 5.60516L17.1261 11.4974C16.965 12.6187 15.9894 13.4642 14.8554 13.4642H14.8509H5.03367H5.02647Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4079 8.12567H10.9131C10.5396 8.12567 10.2381 7.82379 10.2381 7.45181C10.2381 7.07984 10.5396 6.77795 10.9131 6.77795H13.4079C13.7805 6.77795 14.0829 7.07984 14.0829 7.45181C14.0829 7.82379 13.7805 8.12567 13.4079 8.12567Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63943 15.9048C4.91033 15.9048 5.12903 16.1235 5.12903 16.3944C5.12903 16.6653 4.91033 16.8849 4.63943 16.8849C4.36763 16.8849 4.14893 16.6653 4.14893 16.3944C4.14893 16.1235 4.36763 15.9048 4.63943 15.9048Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63859 16.2097C4.53689 16.2097 4.45409 16.2925 4.45409 16.3942C4.45409 16.5985 4.82399 16.5985 4.82399 16.3942C4.82399 16.2925 4.74029 16.2097 4.63859 16.2097ZM4.6386 17.5569C3.996 17.5569 3.474 17.0349 3.474 16.3933C3.474 15.7518 3.996 15.2307 4.6386 15.2307C5.28121 15.2307 5.80411 15.7518 5.80411 16.3933C5.80411 17.0349 5.28121 17.5569 4.6386 17.5569Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7918 15.9048C15.0627 15.9048 15.2823 16.1235 15.2823 16.3944C15.2823 16.6653 15.0627 16.8849 14.7918 16.8849C14.52 16.8849 14.3013 16.6653 14.3013 16.3944C14.3013 16.1235 14.52 15.9048 14.7918 15.9048Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7906 16.2098C14.6898 16.2098 14.607 16.2926 14.607 16.3943C14.6079 16.6004 14.9769 16.5986 14.976 16.3943C14.976 16.2926 14.8923 16.2098 14.7906 16.2098ZM14.7909 17.5569C14.1483 17.5569 13.6263 17.0349 13.6263 16.3933C13.6263 15.7518 14.1483 15.2307 14.7909 15.2307C15.4344 15.2307 15.9573 15.7518 15.9573 16.3933C15.9573 17.0349 15.4344 17.5569 14.7909 17.5569Z" fill="currentColor"></path></svg> Add to Cart </button><button type="button" class="product-action-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.60361 7.98635C2.83627 11.8048 7.70625 14.8923 9.00046 15.6565C10.2991 14.8844 15.2042 11.7628 16.3973 7.98985C17.1807 5.55102 16.4536 2.46177 13.5645 1.53473C12.1648 1.08741 10.5321 1.35966 9.4049 2.22804C9.16927 2.40837 8.8422 2.41187 8.60481 2.23329C7.41084 1.33952 5.85111 1.07778 4.42941 1.53473C1.5447 2.4609 0.82023 5.55014 1.60361 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2027 6.67485C13.8625 6.67485 13.5741 6.41486 13.546 6.07171C13.4879 5.35214 13.0044 4.74462 12.3159 4.52315C11.9686 4.4111 11.7787 4.04081 11.8904 3.69678C12.0038 3.35188 12.3722 3.16454 12.7204 3.27309C13.9187 3.65914 14.7584 4.71573 14.8613 5.96491C14.8903 6.32645 14.6204 6.64334 14.2572 6.67222C14.2388 6.67398 14.2212 6.67485 14.2027 6.67485Z" fill="currentColor"></path></svg><span class="product-action-tooltip">Add To Wishlist</span></button><button type="button" class="product-action-btn"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4144 6.16828L14 3.58412L11.4144 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.48883 3.58386L14 3.58386" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.07452 8.32166L1.4889 10.9058L4.07452 13.4899" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 10.906H1.48883" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="product-action-tooltip">Add To Compare</span></button></div><div class="product__details-sku product__details-more"><p>SKU:</p><span>29045-SB-8</span></div><div class="product__details-categories product__details-more"><p>Categories:</p><span><a href="#">iPhone Cases,</a></span><span><a href="#">Android Cases,</a></span><span><a href="#">Accessories</a></span></div><div class="product__details-tags"><span>Tags:</span><a href="#">iPhone</a><a href="#">Laptop</a><a href="#">Headphone</a></div><div class="product__details-share"><span>Share:</span><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a><a href="#"><i class="fa-brands fa-youtube"></i></a></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/modals/ProductModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: { ProductModal },
  props: {
    item: {}
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_product_modal = resolveComponent("product-modal");
  _push(`<!--[--><div class="product__item p-relative transition-3 mb-50" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="product__thumb w-img p-relative fix">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: `/product-details/${$props.item.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.item.image)} alt="product-details img"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.item.image,
            alt: "product-details img"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.item.badge) {
    _push(`<div class="product__badge d-flex flex-column flex-wrap"><span class="${ssrRenderClass(`product__badge-item ${$props.item.badge === "new" ? "has-new" : ""}`)}">${ssrInterpolate($props.item.badge)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="product__action d-flex flex-column flex-wrap"><button type="button" class="product-action-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.60361 7.98635C2.83627 11.8048 7.70625 14.8923 9.00046 15.6565C10.2991 14.8844 15.2042 11.7628 16.3973 7.98985C17.1807 5.55102 16.4536 2.46177 13.5645 1.53473C12.1648 1.08741 10.5321 1.35966 9.4049 2.22804C9.16927 2.40837 8.8422 2.41187 8.60481 2.23329C7.41084 1.33952 5.85111 1.07778 4.42941 1.53473C1.5447 2.4609 0.82023 5.55014 1.60361 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2027 6.67485C13.8625 6.67485 13.5741 6.41486 13.546 6.07171C13.4879 5.35214 13.0044 4.74462 12.3159 4.52315C11.9686 4.4111 11.7787 4.04081 11.8904 3.69678C12.0038 3.35188 12.3722 3.16454 12.7204 3.27309C13.9187 3.65914 14.7584 4.71573 14.8613 5.96491C14.8903 6.32645 14.6204 6.64334 14.2572 6.67222C14.2388 6.67398 14.2212 6.67485 14.2027 6.67485Z" fill="currentColor"></path></svg><span class="product-action-tooltip">Add To Wishlist</span></button><button type="button" class="product-action-btn" data-bs-toggle="modal"${ssrRenderAttr("data-bs-target", `#productModal-${$props.item.id}`)}><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.49943 5.34978C8.23592 5.34978 7.20896 6.37595 7.20896 7.63732C7.20896 8.89774 8.23592 9.92296 9.49943 9.92296C10.7629 9.92296 11.7908 8.89774 11.7908 7.63732C11.7908 6.37595 10.7629 5.34978 9.49943 5.34978M9.49941 11.3456C7.45025 11.3456 5.78394 9.68213 5.78394 7.63738C5.78394 5.59169 7.45025 3.92725 9.49941 3.92725C11.5486 3.92725 13.2158 5.59169 13.2158 7.63738C13.2158 9.68213 11.5486 11.3456 9.49941 11.3456" fill="currentColor"></path><path d="M1.49145 7.63683C3.25846 11.5338 6.23484 13.8507 9.50001 13.8517C12.7652 13.8507 15.7416 11.5338 17.5086 7.63683C15.7416 3.7408 12.7652 1.42386 9.50001 1.42291C6.23579 1.42386 3.25846 3.7408 1.49145 7.63683V7.63683ZM9.50173 15.2742H9.49793H9.49698C5.56775 15.2714 2.03943 12.5219 0.0577129 7.91746C-0.0192376 7.73822 -0.0192376 7.53526 0.0577129 7.35601C2.03943 2.75248 5.5687 0.00306822 9.49698 0.000223018C9.49888 -0.000725381 9.49888 -0.000725381 9.49983 0.000223018C9.50173 -0.000725381 9.50173 -0.000725381 9.50268 0.000223018C13.4319 0.00306822 16.9602 2.75248 18.942 7.35601C19.0199 7.53526 19.0199 7.73822 18.942 7.91746C16.9612 12.5219 13.4319 15.2714 9.50268 15.2742H9.50173Z" fill="currentColor"></path></svg><span class="product-action-tooltip">Quick view</span></button><button type="button" class="product-action-btn"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4144 6.16828L14 3.58412L11.4144 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.48883 3.58386L14 3.58386" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.07452 8.32166L1.4889 10.9058L4.07452 13.4899" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 10.906H1.48883" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="product-action-tooltip">Add To Compare</span></button></div><div class="product__add transition-3"><button type="button" class="product-add-cart-btn w-100"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.54431 4.80484L4.08701 11.2487C4.12661 11.7447 4.53251 12.1167 5.02841 12.1167H5.03201H14.8519H14.8537C15.3227 12.1167 15.7232 11.7681 15.7898 11.3053L16.6448 5.41221C16.6646 5.27205 16.6295 5.13189 16.544 5.01868C16.4594 4.90457 16.3352 4.8309 16.1948 4.81113C16.0067 4.81832 8.20092 4.80754 3.54431 4.80484ZM5.02647 13.4642C3.84117 13.4642 2.83766 12.5405 2.74136 11.359L1.91696 1.57098L0.560653 1.33738C0.192551 1.27269 -0.0531497 0.924974 0.00985058 0.557495C0.0746508 0.190017 0.430152 -0.0489788 0.790154 0.00852392L2.66216 0.331977C2.96366 0.384987 3.19316 0.634765 3.21926 0.940248L3.43076 3.45689C16.2792 3.46228 16.3206 3.46857 16.3827 3.47576C16.884 3.54854 17.325 3.80999 17.6256 4.21251C17.9262 4.61413 18.0522 5.1092 17.9802 5.60516L17.1261 11.4974C16.965 12.6187 15.9894 13.4642 14.8554 13.4642H14.8509H5.03367H5.02647Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4079 8.12567H10.9131C10.5396 8.12567 10.2381 7.82379 10.2381 7.45181C10.2381 7.07984 10.5396 6.77795 10.9131 6.77795H13.4079C13.7805 6.77795 14.0829 7.07984 14.0829 7.45181C14.0829 7.82379 13.7805 8.12567 13.4079 8.12567Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63943 15.9048C4.91033 15.9048 5.12903 16.1235 5.12903 16.3944C5.12903 16.6653 4.91033 16.8849 4.63943 16.8849C4.36763 16.8849 4.14893 16.6653 4.14893 16.3944C4.14893 16.1235 4.36763 15.9048 4.63943 15.9048Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63859 16.2097C4.53689 16.2097 4.45409 16.2925 4.45409 16.3942C4.45409 16.5985 4.82399 16.5985 4.82399 16.3942C4.82399 16.2925 4.74029 16.2097 4.63859 16.2097ZM4.6386 17.5569C3.996 17.5569 3.474 17.0349 3.474 16.3933C3.474 15.7518 3.996 15.2307 4.6386 15.2307C5.28121 15.2307 5.80411 15.7518 5.80411 16.3933C5.80411 17.0349 5.28121 17.5569 4.6386 17.5569Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7918 15.9048C15.0627 15.9048 15.2823 16.1235 15.2823 16.3944C15.2823 16.6653 15.0627 16.8849 14.7918 16.8849C14.52 16.8849 14.3013 16.6653 14.3013 16.3944C14.3013 16.1235 14.52 15.9048 14.7918 15.9048Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7906 16.2098C14.6898 16.2098 14.607 16.2926 14.607 16.3943C14.6079 16.6004 14.9769 16.5986 14.976 16.3943C14.976 16.2926 14.8923 16.2098 14.7906 16.2098ZM14.7909 17.5569C14.1483 17.5569 13.6263 17.0349 13.6263 16.3933C13.6263 15.7518 14.1483 15.2307 14.7909 15.2307C15.4344 15.2307 15.9573 15.7518 15.9573 16.3933C15.9573 17.0349 15.4344 17.5569 14.7909 17.5569Z" fill="currentColor"></path></svg> Add to Cart </button></div></div><div class="product__content"><div class="product__rating d-flex"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div><h3 class="product__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: `/product-details/${$props.item.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="product__price"><span class="product__ammount">$${ssrInterpolate($props.item.price)}</span></div></div></div>`);
  _push(ssrRenderComponent(_component_product_modal, {
    item: $props.item,
    modal_id: `productModal-${$props.item.id}`
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/SingleProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleProduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const p_img_4 = "" + __buildAssetsURL("product-4.5Pb00Kcm.jpg");
const p_img_5 = "" + __buildAssetsURL("product-5.D0i52dVL.jpg");
const p_img_6 = "" + __buildAssetsURL("product-6.BsxTqbNm.jpg");
const p_img_7 = "" + __buildAssetsURL("product-7.BY99dxPD.jpg");
const p_img_8 = "" + __buildAssetsURL("product-8.COhzf37N.jpg");
const p_img_9 = "" + __buildAssetsURL("product-9.C8C6UzeN.jpg");
const p_img_10 = "" + __buildAssetsURL("product-10.B6V9TuU7.jpg");
const p_img_11 = "" + __buildAssetsURL("product-11.xJiiqVJW.jpg");
const p_img_12 = "" + __buildAssetsURL("product-12.Bzz3W2LV.jpg");
const productData = {
  data() {
    return {
      productData: [
        {
          id: 1,
          title: "Level Bolt Smart Lock",
          slug: "Level Bolt Smart Lock",
          parent: "Call Phone &Tablets",
          children: "Call Phone",
          image: cart_img_1,
          originalPrice: "239.00",
          price: "239.00",
          discount: 0,
          quantity: 40,
          type: "Phones",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SB-1",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 4,
          relatedImages: [
            { img: cart_img_1 },
            { img: p_img_2 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 }
          ],
          topRated: true,
          badge: "sale"
        },
        {
          id: 2,
          title: "Trademil for younger",
          slug: "Trademil for younger",
          parent: "Call Phone &Tablets",
          children: "Call Phone",
          image: p_img_2,
          originalPrice: "899.00",
          price: "899.00",
          discount: 0,
          quantity: 50,
          type: "Phones",
          tag: ["iPhone", "Tablets", "Headphone"],
          SKU: "29045-SB-2",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 6,
          relatedImages: [
            { img: p_img_2 },
            { img: p_img_4 },
            { img: p_img_3 },
            { img: p_img_5 },
            { img: cart_img_1 }
          ],
          topRated: true
        },
        {
          id: 3,
          title: "OnePlus 10 Pro",
          slug: "OnePlus 10 Pro",
          parent: "Call Phone &Tablets",
          children: "Accessories",
          image: p_img_3,
          originalPrice: "969.99",
          price: "969.99",
          discount: 12,
          quantity: 50,
          type: "Tablets",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SB-3",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 6,
          relatedImages: [
            { img: p_img_3 },
            { img: p_img_8 },
            { img: p_img_7 },
            { img: p_img_6 },
            { img: p_img_5 }
          ],
          topRated: true,
          badge: "new"
        },
        {
          id: 4,
          title: "Gooseneck Kettle",
          slug: "Gooseneck Kettle",
          parent: "Call Phone &Tablets",
          children: "iPhone Cases",
          image: p_img_4,
          originalPrice: "114.00",
          price: "114.00",
          discount: 10,
          quantity: 20,
          type: "Tablets",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SB-4",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 8,
          relatedImages: [
            { img: p_img_4 },
            { img: p_img_7 },
            { img: p_img_5 },
            { img: p_img_9 },
            { img: p_img_10 }
          ],
          topRated: true
        },
        {
          id: 5,
          title: "Braun Electric Razor for Men",
          slug: "Braun Electric Razor for Men",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_5,
          originalPrice: "299.00",
          price: "299.00",
          discount: 8,
          quantity: 35,
          type: "Tablets",
          tag: ["Phone", "Tablets"],
          SKU: "29045-SB-5",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 8,
          relatedImages: [
            { img: p_img_5 },
            { img: p_img_4 },
            { img: p_img_3 },
            { img: p_img_6 },
            { img: p_img_8 }
          ],
          topRated: true
        },
        {
          id: 6,
          title: "ViewSonic VP2756-2K",
          slug: "ViewSonic VP2756-2K",
          parent: "Call Phone &Tablets",
          children: "Accessories",
          image: p_img_6,
          originalPrice: "559.00",
          price: "559.00",
          discount: 15,
          quantity: 40,
          type: "Tablets",
          tag: ["iPhone", "Laptop"],
          SKU: "29045-SB-6",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 12,
          relatedImages: [
            { img: p_img_6 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 },
            { img: p_img_9 }
          ],
          topRated: true
        },
        {
          id: 7,
          title: "Crux Indoor Fast and Easy",
          slug: "Crux Indoor Fast and Easy",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_7,
          originalPrice: "67.00",
          price: "67.00",
          discount: 0,
          quantity: 60,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SB-7",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 10,
          relatedImages: [
            { img: p_img_7 },
            { img: p_img_9 },
            { img: p_img_10 },
            { img: p_img_6 },
            { img: p_img_2 }
          ],
          topRated: true
        },
        {
          id: 8,
          title: "Karcher K 3 Follow Me",
          slug: "Karcher K 3 Follow Me",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_8,
          originalPrice: "137.00",
          price: "137.00",
          discount: 5,
          quantity: 65,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SB-8",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_8 },
            { img: p_img_5 },
            { img: cart_img_1 },
            { img: p_img_2 },
            { img: p_img_6 }
          ],
          topRated: true
        },
        {
          id: 9,
          title: "Apple Watch Series 7",
          slug: "Apple Watch Series 7",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_9,
          originalPrice: "799.00",
          price: "799.00",
          discount: 8,
          quantity: 70,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SB-9",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_9 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 },
            { img: p_img_6 }
          ],
          topRated: true
        },
        {
          id: 10,
          title: "Tempo Fishing Reels",
          slug: "Tempo Fishing Reels",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_10,
          originalPrice: "59.00",
          price: "59.00",
          discount: 0,
          quantity: 10,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SB-10",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_10 },
            { img: p_img_9 },
            { img: p_img_5 },
            { img: cart_img_1 },
            { img: p_img_3 }
          ],
          topRated: true
        },
        {
          id: 11,
          title: "Redmi 9 Poco M3",
          slug: "Redmi 9 Poco M3",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_11,
          originalPrice: "969.00",
          price: "969.00",
          discount: 25,
          quantity: 45,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SB-11",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_11 },
            { img: p_img_12 },
            { img: p_img_10 },
            { img: p_img_9 },
            { img: cart_img_1 }
          ],
          topRated: true
        },
        {
          id: 12,
          title: "PlayStation VR Marvel's",
          slug: "PlayStation VR Marvel's",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_12,
          originalPrice: "249.00",
          price: "249.00",
          discount: 30,
          quantity: 40,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SB-12",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_12 },
            { img: p_img_4 },
            { img: p_img_6 },
            { img: cart_img_1 },
            { img: p_img_7 }
          ],
          topRated: true
        },
        // best selling
        {
          id: 13,
          title: "Level Bolt Smart Lock",
          slug: "Level Bolt Smart Lock",
          parent: "Call Phone &Tablets",
          children: "Call Phone",
          image: p_img_12,
          originalPrice: "239.00",
          price: "239.00",
          discount: 0,
          quantity: 40,
          type: "Phones",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SC-1",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 4,
          relatedImages: [
            { img: p_img_12 },
            { img: p_img_4 },
            { img: p_img_6 },
            { img: cart_img_1 },
            { img: p_img_7 }
          ],
          bestSelling: true
        },
        {
          id: 14,
          title: "Trademil for younger",
          slug: "Trademil for younger",
          parent: "Call Phone &Tablets",
          children: "Call Phone",
          image: p_img_11,
          originalPrice: "899.00",
          price: "899.00",
          discount: 0,
          quantity: 50,
          type: "Phones",
          tag: ["iPhone", "Tablets", "Headphone"],
          SKU: "29045-SC-2",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 6,
          relatedImages: [
            { img: p_img_11 },
            { img: p_img_12 },
            { img: p_img_10 },
            { img: p_img_9 },
            { img: cart_img_1 }
          ],
          bestSelling: true
        },
        {
          id: 15,
          title: "OnePlus 10 Pro",
          slug: "OnePlus 10 Pro",
          parent: "Call Phone &Tablets",
          children: "Accessories",
          image: p_img_10,
          originalPrice: "969.99",
          price: "969.99",
          discount: 12,
          quantity: 50,
          type: "Tablets",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SC-3",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 6,
          relatedImages: [
            { img: p_img_10 },
            { img: p_img_9 },
            { img: p_img_5 },
            { img: cart_img_1 },
            { img: p_img_3 }
          ],
          bestSelling: true
        },
        {
          id: 16,
          title: "Gooseneck Kettle",
          slug: "Gooseneck Kettle",
          parent: "Call Phone &Tablets",
          children: "iPhone Cases",
          image: p_img_9,
          originalPrice: "114.00",
          price: "114.00",
          discount: 10,
          quantity: 20,
          type: "Tablets",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SC-4",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 8,
          relatedImages: [
            { img: p_img_9 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 },
            { img: p_img_6 }
          ],
          bestSelling: true
        },
        {
          id: 17,
          title: "Braun Electric Razor for Men",
          slug: "Braun Electric Razor for Men",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_8,
          originalPrice: "299.00",
          price: "299.00",
          discount: 8,
          quantity: 35,
          type: "Tablets",
          tag: ["Phone", "Tablets"],
          SKU: "29045-SC-5",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 8,
          relatedImages: [
            { img: p_img_8 },
            { img: p_img_5 },
            { img: cart_img_1 },
            { img: p_img_2 },
            { img: p_img_6 }
          ],
          bestSelling: true
        },
        {
          id: 18,
          title: "ViewSonic VP2756-2K",
          slug: "ViewSonic VP2756-2K",
          parent: "Call Phone &Tablets",
          children: "Accessories",
          image: p_img_7,
          originalPrice: "559.00",
          price: "559.00",
          discount: 15,
          quantity: 40,
          type: "Tablets",
          tag: ["iPhone", "Laptop"],
          SKU: "29045-SC-6",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 12,
          relatedImages: [
            { img: p_img_7 },
            { img: p_img_9 },
            { img: p_img_10 },
            { img: p_img_6 },
            { img: p_img_2 }
          ],
          bestSelling: true
        },
        {
          id: 19,
          title: "Crux Indoor Fast and Easy",
          slug: "Crux Indoor Fast and Easy",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_6,
          originalPrice: "67.00",
          price: "67.00",
          discount: 0,
          quantity: 60,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-7",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 10,
          relatedImages: [
            { img: p_img_6 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 },
            { img: p_img_9 }
          ],
          bestSelling: true
        },
        {
          id: 20,
          title: "Karcher K 3 Follow Me",
          slug: "Karcher K 3 Follow Me",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_5,
          originalPrice: "137.00",
          price: "137.00",
          discount: 5,
          quantity: 65,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-8",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_5 },
            { img: p_img_4 },
            { img: p_img_3 },
            { img: p_img_6 },
            { img: p_img_8 }
          ],
          bestSelling: true
        },
        {
          id: 21,
          title: "Apple Watch Series 7",
          slug: "Apple Watch Series 7",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_4,
          originalPrice: "799.00",
          price: "799.00",
          discount: 8,
          quantity: 70,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-9",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_4 },
            { img: p_img_7 },
            { img: p_img_5 },
            { img: p_img_9 },
            { img: p_img_10 }
          ],
          bestSelling: true
        },
        {
          id: 22,
          title: "Tempo Fishing Reels",
          slug: "Tempo Fishing Reels",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_3,
          originalPrice: "59.00",
          price: "59.00",
          discount: 0,
          quantity: 10,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-10",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_3 },
            { img: p_img_8 },
            { img: p_img_7 },
            { img: p_img_6 },
            { img: p_img_5 }
          ],
          bestSelling: true
        },
        {
          id: 23,
          title: "Redmi 9 Poco M3",
          slug: "Redmi 9 Poco M3",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_2,
          originalPrice: "969.00",
          price: "969.00",
          discount: 25,
          quantity: 45,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-11",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_2 },
            { img: p_img_4 },
            { img: p_img_3 },
            { img: p_img_5 },
            { img: cart_img_1 }
          ],
          bestSelling: true
        },
        {
          id: 24,
          title: "PlayStation VR Marvel's",
          slug: "PlayStation VR Marvel's",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: cart_img_1,
          originalPrice: "249.00",
          price: "249.00",
          discount: 30,
          quantity: 40,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-12",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: cart_img_1 },
            { img: p_img_2 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 }
          ],
          bestSelling: true,
          badge: "sale"
        },
        // latest products
        {
          id: 25,
          title: "Level Bolt Smart Lock",
          slug: "Level Bolt Smart Lock",
          parent: "Call Phone &Tablets",
          children: "Call Phone",
          image: p_img_6,
          originalPrice: "239.00",
          price: "239.00",
          discount: 0,
          quantity: 40,
          type: "Phones",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SC-1",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 4,
          relatedImages: [
            { img: p_img_6 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 },
            { img: p_img_9 }
          ],
          latestProduct: true
        },
        {
          id: 26,
          title: "Trademil for younger",
          slug: "Trademil for younger",
          parent: "Call Phone &Tablets",
          children: "Call Phone",
          image: p_img_5,
          originalPrice: "899.00",
          price: "899.00",
          discount: 0,
          quantity: 50,
          type: "Phones",
          tag: ["iPhone", "Tablets", "Headphone"],
          SKU: "29045-SC-2",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 6,
          relatedImages: [
            { img: p_img_5 },
            { img: p_img_4 },
            { img: p_img_3 },
            { img: p_img_6 },
            { img: p_img_8 }
          ],
          latestProduct: true
        },
        {
          id: 27,
          title: "OnePlus 10 Pro",
          slug: "OnePlus 10 Pro",
          parent: "Call Phone &Tablets",
          children: "Accessories",
          image: p_img_4,
          originalPrice: "969.99",
          price: "969.99",
          discount: 12,
          quantity: 50,
          type: "Tablets",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SC-3",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 6,
          relatedImages: [
            { img: p_img_4 },
            { img: p_img_7 },
            { img: p_img_5 },
            { img: p_img_9 },
            { img: p_img_10 }
          ],
          latestProduct: true
        },
        {
          id: 28,
          title: "Gooseneck Kettle",
          slug: "Gooseneck Kettle",
          parent: "Call Phone &Tablets",
          children: "iPhone Cases",
          image: p_img_3,
          originalPrice: "114.00",
          price: "114.00",
          discount: 10,
          quantity: 20,
          type: "Tablets",
          tag: ["Phone", "Tablets", "Headphone"],
          SKU: "29045-SC-4",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 8,
          relatedImages: [
            { img: p_img_3 },
            { img: p_img_8 },
            { img: p_img_7 },
            { img: p_img_6 },
            { img: p_img_5 }
          ],
          latestProduct: true
        },
        {
          id: 29,
          title: "Braun Electric Razor for Men",
          slug: "Braun Electric Razor for Men",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_2,
          originalPrice: "299.00",
          price: "299.00",
          discount: 8,
          quantity: 35,
          type: "Tablets",
          tag: ["Phone", "Tablets"],
          SKU: "29045-SC-5",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 8,
          relatedImages: [
            { img: p_img_2 },
            { img: p_img_4 },
            { img: p_img_3 },
            { img: p_img_5 },
            { img: cart_img_1 }
          ],
          latestProduct: true
        },
        {
          id: 30,
          title: "ViewSonic VP2756-2K",
          slug: "ViewSonic VP2756-2K",
          parent: "Call Phone &Tablets",
          children: "Accessories",
          image: cart_img_1,
          originalPrice: "559.00",
          price: "559.00",
          discount: 15,
          quantity: 40,
          type: "Tablets",
          tag: ["iPhone", "Laptop"],
          SKU: "29045-SC-6",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 12,
          relatedImages: [
            { img: cart_img_1 },
            { img: p_img_2 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 }
          ],
          latestProduct: true,
          badge: "sale"
        },
        {
          id: 31,
          title: "Crux Indoor Fast and Easy",
          slug: "Crux Indoor Fast and Easy",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_12,
          originalPrice: "67.00",
          price: "67.00",
          discount: 0,
          quantity: 60,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-7",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 10,
          relatedImages: [
            { img: p_img_12 },
            { img: p_img_4 },
            { img: p_img_6 },
            { img: cart_img_1 },
            { img: p_img_7 }
          ],
          latestProduct: true
        },
        {
          id: 32,
          title: "Karcher K 3 Follow Me",
          slug: "Karcher K 3 Follow Me",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_11,
          originalPrice: "137.00",
          price: "137.00",
          discount: 5,
          quantity: 65,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-8",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_11 },
            { img: p_img_12 },
            { img: p_img_10 },
            { img: p_img_9 },
            { img: cart_img_1 }
          ],
          latestProduct: true
        },
        {
          id: 33,
          title: "Apple Watch Series 7",
          slug: "Apple Watch Series 7",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_10,
          originalPrice: "799.00",
          price: "799.00",
          discount: 8,
          quantity: 70,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-9",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_10 },
            { img: p_img_9 },
            { img: p_img_5 },
            { img: cart_img_1 },
            { img: p_img_3 }
          ],
          latestProduct: true
        },
        {
          id: 34,
          title: "Tempo Fishing Reels",
          slug: "Tempo Fishing Reels",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_9,
          originalPrice: "59.00",
          price: "59.00",
          discount: 0,
          quantity: 10,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-10",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_9 },
            { img: p_img_3 },
            { img: p_img_4 },
            { img: p_img_5 },
            { img: p_img_6 }
          ],
          latestProduct: true
        },
        {
          id: 35,
          title: "Redmi 9 Poco M3",
          slug: "Redmi 9 Poco M3",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_8,
          originalPrice: "969.00",
          price: "969.00",
          discount: 25,
          quantity: 45,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-11",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_8 },
            { img: p_img_5 },
            { img: cart_img_1 },
            { img: p_img_2 },
            { img: p_img_6 }
          ],
          latestProduct: true
        },
        {
          id: 36,
          title: "PlayStation VR Marvel's",
          slug: "PlayStation VR Marvel's",
          parent: "Call Phone &Tablets",
          children: "Android Cases",
          image: p_img_7,
          originalPrice: "249.00",
          price: "249.00",
          discount: 30,
          quantity: 40,
          type: "Tablets",
          tag: ["iPhone", "Laptop", "Headphone"],
          SKU: "29045-SC-12",
          shortDesc: "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
          description: "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
          reviews: 3,
          relatedImages: [
            { img: p_img_7 },
            { img: p_img_10 },
            { img: p_img_7 },
            { img: p_img_6 },
            { img: p_img_2 }
          ],
          latestProduct: true
        }
      ]
    };
  }
};
export {
  ProductModal as P,
  SingleProduct as S,
  productData as p
};
//# sourceMappingURL=productData-D-fZVTZg.js.map
