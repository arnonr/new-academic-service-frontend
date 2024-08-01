import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0$1, a as _imports_1$1 } from "./user-2-CWDkkzb7.js";
import { S as SingleProduct, p as productData } from "./productData-D-fZVTZg.js";
const _sfc_main$6 = {
  props: {
    item: {
      type: Object,
      required: true,
      default: {}
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__details-area pb-115" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-7 col-lg-6"><div class="product__details-thumb-tab mr-70"><div class="product__details-thumb-content w-img"><div style="${ssrRenderStyle({ "max-height": "575px", "overflow": "hidden" })}"><img${ssrRenderAttr("src", $data.active_img)} alt="prd image"></div></div><div class="product__details-thumb-nav tp-tab"><nav><div class="nav nav-tabs justify-content-sm-between"><!--[-->`);
  ssrRenderList($props.item.relatedImages, (img, i) => {
    _push(`<button class="${ssrRenderClass(`nav-link ${img.img === $data.active_img ? "active" : ""}`)}"><img${ssrRenderAttr("src", img.img)} alt="image" style="${ssrRenderStyle({ "width": "110px", "height": "110px" })}"></button>`);
  });
  _push(`<!--]--></div></nav></div></div></div><div class="col-xl-5 col-lg-6"><div class="product__details-wrapper"><div class="product__details-stock"><span>${ssrInterpolate($props.item.quantity)} In Stock</span></div><h3 class="product__details-title">${ssrInterpolate($props.item.title)}</h3><div class="product__details-rating d-flex align-items-center"><div class="product__rating product__rating-2 d-flex"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div><div class="product__details-rating-count"><span>(4 customer review)</span></div></div><p>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p><div class="product__details-price"><span class="product__details-ammount old-ammount">$${ssrInterpolate($props.item.price)}</span><span class="product__details-ammount new-ammount"> $${ssrInterpolate((Number($props.item.price) - Number($props.item.price) * Number($props.item.discount) / 100).toFixed(2))}</span><span class="product__details-offer">-${ssrInterpolate($props.item.discount)}%</span></div><div class="product__details-quantity"><div class="tp-product-quantity mt-10 mb-10"><span class="tp-cart-minus"><svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><input class="tp-cart-input" type="text" value="1"><span class="tp-cart-plus"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21924 7H13.3836" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.30176 13V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div></div><div class="product__details-action d-flex flex-wrap align-items-center"><button type="button" class="product-add-cart-btn product-add-cart-btn-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.54431 4.80484L4.08701 11.2487C4.12661 11.7447 4.53251 12.1167 5.02841 12.1167H5.03201H14.8519H14.8537C15.3227 12.1167 15.7232 11.7681 15.7898 11.3053L16.6448 5.41221C16.6646 5.27205 16.6295 5.13189 16.544 5.01868C16.4594 4.90457 16.3352 4.8309 16.1948 4.81113C16.0067 4.81832 8.20092 4.80754 3.54431 4.80484ZM5.02647 13.4642C3.84117 13.4642 2.83766 12.5405 2.74136 11.359L1.91696 1.57098L0.560653 1.33738C0.192551 1.27269 -0.0531497 0.924974 0.00985058 0.557495C0.0746508 0.190017 0.430152 -0.0489788 0.790154 0.00852392L2.66216 0.331977C2.96366 0.384987 3.19316 0.634765 3.21926 0.940248L3.43076 3.45689C16.2792 3.46228 16.3206 3.46857 16.3827 3.47576C16.884 3.54854 17.325 3.80999 17.6256 4.21251C17.9262 4.61413 18.0522 5.1092 17.9802 5.60516L17.1261 11.4974C16.965 12.6187 15.9894 13.4642 14.8554 13.4642H14.8509H5.03367H5.02647Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4079 8.12567H10.9131C10.5396 8.12567 10.2381 7.82379 10.2381 7.45181C10.2381 7.07984 10.5396 6.77795 10.9131 6.77795H13.4079C13.7805 6.77795 14.0829 7.07984 14.0829 7.45181C14.0829 7.82379 13.7805 8.12567 13.4079 8.12567Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63943 15.9048C4.91033 15.9048 5.12903 16.1235 5.12903 16.3944C5.12903 16.6653 4.91033 16.8849 4.63943 16.8849C4.36763 16.8849 4.14893 16.6653 4.14893 16.3944C4.14893 16.1235 4.36763 15.9048 4.63943 15.9048Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63859 16.2097C4.53689 16.2097 4.45409 16.2925 4.45409 16.3942C4.45409 16.5985 4.82399 16.5985 4.82399 16.3942C4.82399 16.2925 4.74029 16.2097 4.63859 16.2097ZM4.6386 17.5569C3.996 17.5569 3.474 17.0349 3.474 16.3933C3.474 15.7518 3.996 15.2307 4.6386 15.2307C5.28121 15.2307 5.80411 15.7518 5.80411 16.3933C5.80411 17.0349 5.28121 17.5569 4.6386 17.5569Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7918 15.9048C15.0627 15.9048 15.2823 16.1235 15.2823 16.3944C15.2823 16.6653 15.0627 16.8849 14.7918 16.8849C14.52 16.8849 14.3013 16.6653 14.3013 16.3944C14.3013 16.1235 14.52 15.9048 14.7918 15.9048Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7906 16.2098C14.6898 16.2098 14.607 16.2926 14.607 16.3943C14.6079 16.6004 14.9769 16.5986 14.976 16.3943C14.976 16.2926 14.8923 16.2098 14.7906 16.2098ZM14.7909 17.5569C14.1483 17.5569 13.6263 17.0349 13.6263 16.3933C13.6263 15.7518 14.1483 15.2307 14.7909 15.2307C15.4344 15.2307 15.9573 15.7518 15.9573 16.3933C15.9573 17.0349 15.4344 17.5569 14.7909 17.5569Z" fill="currentColor"></path></svg> Add to Cart </button><button type="button" class="product-action-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.60361 7.98635C2.83627 11.8048 7.70625 14.8923 9.00046 15.6565C10.2991 14.8844 15.2042 11.7628 16.3973 7.98985C17.1807 5.55102 16.4536 2.46177 13.5645 1.53473C12.1648 1.08741 10.5321 1.35966 9.4049 2.22804C9.16927 2.40837 8.8422 2.41187 8.60481 2.23329C7.41084 1.33952 5.85111 1.07778 4.42941 1.53473C1.5447 2.4609 0.82023 5.55014 1.60361 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2027 6.67485C13.8625 6.67485 13.5741 6.41486 13.546 6.07171C13.4879 5.35214 13.0044 4.74462 12.3159 4.52315C11.9686 4.4111 11.7787 4.04081 11.8904 3.69678C12.0038 3.35188 12.3722 3.16454 12.7204 3.27309C13.9187 3.65914 14.7584 4.71573 14.8613 5.96491C14.8903 6.32645 14.6204 6.64334 14.2572 6.67222C14.2388 6.67398 14.2212 6.67485 14.2027 6.67485Z" fill="currentColor"></path></svg><span class="product-action-tooltip">Add To Wishlist</span></button><button type="button" class="product-action-btn"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4144 6.16828L14 3.58412L11.4144 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.48883 3.58386L14 3.58386" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.07452 8.32166L1.4889 10.9058L4.07452 13.4899" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 10.906H1.48883" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="product-action-tooltip">Add To Compare</span></button></div><div class="product__details-sku product__details-more"><p>SKU:</p><span>29045-SB-8</span></div><div class="product__details-categories product__details-more"><p>Categories:</p><span><a href="#">iPhone Cases,</a></span><span><a href="#">Android Cases,</a></span><span><a href="#">Accessories</a></span></div><div class="product__details-tags"><span>Tags:</span><a href="#">iPhone</a><a href="#">Laptop</a><a href="#">Headphone</a></div><div class="product__details-share"><span>Share:</span><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a><a href="#"><i class="fa-brands fa-youtube"></i></a></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-details/ProductDetailsArea.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__details-additional" }, _attrs))}><div class="row"><div class="col-xl-9"><div class="product__details-additional-inner"><table><tbody><tr><th scope="row">Brand:</th><td>Apple</td></tr><tr><th scope="row">Style:</th><td>GPS</td></tr><tr><th scope="row">Screen Size:</th><td>41 Millimeters</td></tr><tr><th scope="row">Color:</th><td>Green Aluminum Case with Clover Sport Band</td></tr><tr><th scope="row">Compatible Devices:</th><td>Smartphone</td></tr><tr><th scope="row">Special Feature:</th><td> Activity Tracker, Heart Rate Monitor, Sleep Monitor, Blood Oxygen </td></tr><tr><th scope="row">Capacity:</th><td>32GB</td></tr></tbody></table></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-details/DetailsAdditional.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DetailsAdditional = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABHCAYAAABbGSRwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUCSURBVHgB7ZxdSFtnGMefcxQsWlcvphe21IjVtKmujk3Y1RYrDCaORdv5sQ+0u+g2JszBYFertuvFHOyDgugKQ8uolW3EdJaODZwVWmhnGW6aLBSGsa3ZjDdRSdZcJGfv/5BsSc6xa1w+3jfND5KTvOfk8P7O87zvCSfniUQ6WCyWkry8wm6ioFlRpHrWZCAxcEmSMh8Myjab7cI5vQ2k+AaLpd0iy3mjREpJWVkpmUwmKit7lERgaWmZlpeXyeNZI0UhFwvWQLx4jHBra9dn7Ai9ffCgiTo6jhCWIrK46KChoRFVnHHSap0YiKzLi7xoa+sckCR6r6PjKPX2vkGIrqig7y0tzxHiabc7zEZjXYnTufg91qnCTLaHLT6FbHv7EcoWamuRoRI5HI6njEbTL06n3ammNBNeYkfFMDx8RvOhQCBAt279rqbHvXsB4pEdOwrUqNbV6Q/BEyc+YJG2e0OhQGV+OLoGpHE8t2/fpcuXf6Bdux6hffuq2E4LiEcQCIzba9eus+A9rxmOyNr+fgc78xR057NJ6oXS0jLNBLW6ukZW65S6g7179xDvNDQ8rgZofPwbTZ+R2jgIHo/HLCuKbDAYKjQ7mJwURzYC+oo+IysxFKMxmQ6wZ6leZufb+njhhQWHmsYiyUZAn9F3zDvRhNPcIOt9CBNUdXUViQrmm/A5WIOuMCaBggI+J6gHAbP2VmcUmR4ycsLZTj4JwMqKm2zfTumu2280UtNhMz0oYkRY0jZN/3iFhobP0vTMFUoEISK8u7yc3nrz9X/eT16cohX3H/TqKy/R5uYmJYJwYxiyH370MY19cZYOGKspUYQSjpHdX0PbQRjhZMgCIYSTJQu4n7TuJ9vQ8CSVl++mROBa+L8ii9kbj0TgNqWTmcbRcCmcKlnAnXAqZQFXwqmWBdwIp0MWcCGcLlmQceF0yoKMC395fjxtsiDjXzysX12gdJK7ppXt5ISznZxwKsEFt5/mblImSZswZLtfO05zN3+mTJIW4Yhs0+FGdrn1OGWSlAvzJAtSKsybLEiZMI+yICXCvMqCpAvzLAuSKsy7LEiasAiyIGHhthe71J8qoxFFFiQsHP97rEiy4H+ltGiyYNvCIsqCbQlvbmwIKQu2Jdzb966QsiBh4eLiYnK73TQ0/DmZHnsi5hE/e/NIwpdprV+n97Jqssld4sl2csLZjq4wbrBeX98gUUHf4aCHKuz3+2Macfv/nTt3SVRQ0rNVCQOEXfH1AZHijqtXr5NooM8o6IgvUEEhpqJI80xYstntv2mi3Nz8rHqksAMR0htlO9PTs2qfm5qe0ay32x2EUtv8UEi56PP5+m7cmKPGxn83RClMV9dRtdprdPS8etTQxiOQRZFWTU0VHTv2sqZAZWZmVg0oi/CYeut1a2vnzM6dReaRkTNUWFio2SEiHHnwCAQrKvboVuJguKL2kC1dk5MTlepXS0WR3/H5/DNsRcmpU+9rpBFZXqN7P5gTDQ5+QmtragF1I9rUclqnc+FPo7F2dX3da5mf/5Xq6w9RUVERiQwie/r0ILlcLgqFpB6bbWIW7THVBBZLl0WWSS2HN5ufppaWZqqsrCCRgCjG7KVL37Fx+5c3FKK+6LJ4nf8A6DQw6X72sgfvkd4iSGNSQkVs1NlmjMmeZJF1RW8nbbWDsLiZRftQ+J8euEaSJC/rq1eS5Plg0H/OZrN59bb7G3MsUdE2kxLQAAAAAElFTkSuQmCC";
const _imports_1 = "" + __buildAssetsURL("product-description-1.BaQa0sNM.jpg");
const _imports_2 = "" + __buildAssetsURL("product-description-2.CQF5kl7g.jpg");
const _imports_3 = "" + __buildAssetsURL("product-description-3.ZBxhN0-m.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__details-description pt-95" }, _attrs))}><div class="row"><div class="col-lg-6"><div class="product__details-description-content"><h3 class="product-desc-title">Big Screen Huge impact.</h3><p> Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits) </p><div class="product-desc-feature mt-40 mb-40 d-sm-flex align-items-start"><div class="product-desc-feature-thumb mr-25"><img${ssrRenderAttr("src", _imports_0)} alt="shape"></div><div class="product-desc-feature-content"><p> The photo collection from your Memories is displayed in a unique mosaic grid, giving you a richer view of your library. </p></div></div></div></div><div class="col-lg-6"><div class="product__details-description-thumb m-img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="row"><div class="col-lg-12"><div class="product__details-description-content"><h3 class="product-desc-title">Smart home, smarter watch</h3></div></div><div class="col-lg-6"><div class="product__details-description-content pr-30 mb-40"><p> Put your favourite photos of friends and family front and centre. Featuringa dynamic, multilayered effect, this new watch face uses Portrait modephotos from your iPhone to give the people you care about a starring role.Photo highlights from your Memories and Featured Photos now automatically </p></div></div><div class="col-lg-6"><div class="product__details-description-content pr-30 mb-40"><p> The current status of all your devices is now conveniently <br> displayed at the top of the Home app screen. Instantly see if your lights or cameras are on, whether your batteries are charged, or if your software needs updating. </p></div></div></div><div class="row align-self-end"><div class="col-md-6"><div class="product__details-description-thumb m-img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div><div class="col-md-6"><div class="product__details-description-thumb m-img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-details/DetailsDesc.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DetailsDesc = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__details-review pt-60" }, _attrs))}><div class="row"><div class="col-xl-9"><div class="product__details-review-inner"><div class="product-rating"><h4 class="product-rating-title">Ratings and reviews</h4><div class="product-rating-wrapper d-flex flex-wrap align-items-center mb-50"><div class="product-rating-number mr-40"><h4 class="product-rating-number-title">4.5</h4><div class="product-rating-star"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div></div><div class="product-rating-bar-wrapper"><div class="product-rating-bar-item d-flex align-items-center"><div class="product-rating-bar-text"><span>5</span></div><div class="product-rating-bar"><div class="single-progress" data-width="70%"></div></div></div><div class="product-rating-bar-item d-flex align-items-center"><div class="product-rating-bar-text"><span>4</span></div><div class="product-rating-bar"><div class="single-progress" data-width="60%"></div></div></div><div class="product-rating-bar-item d-flex align-items-center"><div class="product-rating-bar-text"><span>3</span></div><div class="product-rating-bar"><div class="single-progress" data-width="40%"></div></div></div><div class="product-rating-bar-item d-flex align-items-center"><div class="product-rating-bar-text"><span>2</span></div><div class="product-rating-bar"><div class="single-progress" data-width="10%"></div></div></div><div class="product-rating-bar-item d-flex align-items-center"><div class="product-rating-bar-text"><span>1</span></div><div class="product-rating-bar"><div class="single-progress" data-width="25%"></div></div></div></div></div></div><div class="product__details-review-list mb-65"><div class="product-review-item"><div class="product-review-avater d-flex align-items-center"><div class="product-review-avater-thumb"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="product-review-avater-info"><h4 class="product-review-avater-title">Michelle Hunter</h4></div></div><div class="product-review-rating d-flex align-items-center"><div class="product-review-rating-wrapper d-flex"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div><div class="product-review-rating-date"><span>August 8, 2022</span></div></div><p> I’m upgrading from a series 1, so it is a completely different watch. I am very satisfied with this purchase. Most of the heart monitoring functions only work with people. </p></div><div class="product-review-item"><div class="product-review-avater d-flex align-items-center"><div class="product-review-avater-thumb"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="product-review-avater-info"><h4 class="product-review-avater-title">Sean Hathaway</h4></div></div><div class="product-review-rating d-flex align-items-center"><div class="product-review-rating-wrapper d-flex"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div><div class="product-review-rating-date"><span>August 10, 2022</span></div></div><p> I’m upgrading from a series 1, so it is a completely different watch. I am very satisfied with this purchase. Most of the heart monitoring functions only work with people. </p></div></div><div class="product-review-form"><h3 class="product-review-form-title">Add a review</h3><p> Your email address will not be published. Required fields are marked * </p><form action="#"><div class="product-review-form-rating mb-25"><h3 class="rate-title">Rate this product:</h3><div class="product-review-rating-wrapper d-flex"><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star"></i></span><span><i class="icon_star_alt"></i></span></div></div><div class="row"><div class="col-lg-12"><div class="product-review-input is-textarea"><textarea placeholder="Your Review Here..."></textarea></div></div><div class="col-lg-6"><div class="product-review-input"><input type="text" placeholder="Name*"></div></div><div class="col-lg-6"><div class="product-review-input"><input type="email" placeholder="Email*"></div></div><div class="col-lg-12"><div class="product-review-agree d-flex align-items-start mb-25"><input type="checkbox" id="p-agree"><label for="p-agree">Save my name, email, and website in this browser for the next time I comment</label></div></div><div class="col-lg-12"><div class="product-review-btn"><button class="tp-btn" type="submit">Submit Review</button></div></div></div></form></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-details/DetailsReview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DetailsReview = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { DetailsDesc, DetailsAdditional, DetailsReview },
  methods: {
    handleActiveMarker(e) {
      const marker = (void 0).getElementById("marker");
      if (e.target.classList.contains("active")) {
        marker.style.left = e.target.offsetLeft + "px";
        marker.style.width = e.target.offsetWidth + "px";
      }
    }
  },
  mounted() {
    const marker = (void 0).getElementById("marker");
    if (this.$refs.active.classList.contains("active")) {
      marker.style.left = this.$refs.active.offsetLeft + "px";
      marker.style.width = this.$refs.active.offsetWidth + "px";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_details_desc = resolveComponent("details-desc");
  const _component_details_additional = resolveComponent("details-additional");
  const _component_details_review = resolveComponent("details-review");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__details-tab-area pb-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="product__details-tab-nav"><nav><div class="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap" id="nav-tab-info" role="tablist"><button class="nav-link active" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">Description</button><button class="nav-link" id="nav-additional-tab" data-bs-toggle="tab" data-bs-target="#nav-additional" type="button" role="tab" aria-controls="nav-additional" aria-selected="false">Additional information</button><button class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews (02)</button><span id="marker" class="tp-tab-line d-none d-sm-inline-block"></span></div></nav></div><div class="product__details-tab-content"><div class="tab-content" id="nav-tabContent-info"><div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">`);
  _push(ssrRenderComponent(_component_details_desc, null, null, _parent));
  _push(`</div><div class="tab-pane fade" id="nav-additional" role="tabpanel" aria-labelledby="nav-additional-tab">`);
  _push(ssrRenderComponent(_component_details_additional, null, null, _parent));
  _push(`</div><div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">`);
  _push(ssrRenderComponent(_component_details_review, null, null, _parent));
  _push(`</div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-details/ProductDetailsTabArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-9 pt-75 include-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-7"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list has-icon"><span class="breadcrumb-icon"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8125 7.90625L3 6.9375V14C3 14.2708 3.09375 14.5 3.28125 14.6875C3.48958 14.8958 3.72917 15 4 15H7C7.27083 15 7.5 14.8958 7.6875 14.6875C7.89583 14.5 8 14.2708 8 14V10H10V14C10 14.2708 10.0938 14.5 10.2812 14.6875C10.4896 14.8958 10.7292 15 11 15H14C14.2708 15 14.5 14.8958 14.6875 14.6875C14.8958 14.5 15 14.2708 15 14V6.9375L16.1875 7.90625C16.2708 7.96875 16.375 8 16.5 8C16.6667 8 16.8021 7.9375 16.9062 7.8125C17.0938 7.54167 17.0625 7.30208 16.8125 7.09375L9.3125 1.09375C9.10417 0.947917 8.89583 0.947917 8.6875 1.09375L6 3.25V2C6 1.72917 5.89583 1.5 5.6875 1.3125C5.5 1.10417 5.27083 1 5 1C4.72917 1 4.48958 1.10417 4.28125 1.3125C4.09375 1.5 4 1.72917 4 2V4.84375L1.1875 7.09375C0.9375 7.30208 0.90625 7.54167 1.09375 7.8125C1.30208 8.0625 1.54167 8.09375 1.8125 7.90625ZM9 2.125L14 6.125V14H11V9H7V14H4V6.15625L9 2.125Z" fill="currentColor"></path></svg></span><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-regular fa-angle-right"></i></span><span><a href="#">Products</a></span><span class="dvdr"><i class="fa-regular fa-angle-right"></i></span><span><a href="#">Apple Watch</a></span><span class="dvdr"><i class="fa-regular fa-angle-right"></i></span><span>Apple Watch Series 7</span></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/ProductDetailsBreadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductDetailsBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { SingleProduct },
  mixins: [productData]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_product = resolveComponent("single-product");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "product__related-area pb-80" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="section__title-wrapper-13 mb-35"><h3 class="section__title-13">Related Products</h3></div></div></div><div class="row"><div class="col-xl-12"><div class="product__related-slider"><div class="row"><!--[-->`);
  ssrRenderList(_ctx.productData.slice(0, 4), (item, i) => {
    _push(`<div class="col-lg-3 col-md-6">`);
    _push(ssrRenderComponent(_component_single_product, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product-details/RelatedProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RelatedProducts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProductDetailsBreadcrumb as P,
  RelatedProducts as R,
  __nuxt_component_0 as _,
  __nuxt_component_1 as a
};
//# sourceMappingURL=RelatedProducts-BZbTLp68.js.map
