import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
const _sfc_main$1 = {
  data() {
    return {
      formValue: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ id: "contact-form" }, _attrs))}><div class="row"><div class="col-md-6"><div class="contact__input"><input name="name" type="text"${ssrRenderAttr("value", $data.formValue.firstName)} placeholder="First Name"></div></div><div class="col-md-6"><div class="contact__input"><input name="l_name" type="text"${ssrRenderAttr("value", $data.formValue.lastName)} placeholder="Last Name"></div></div><div class="col-md-6"><div class="contact__input"><input name="email" type="email"${ssrRenderAttr("value", $data.formValue.email)} placeholder="Email"></div></div><div class="col-md-6"><div class="contact__input"><input name="phone" type="text"${ssrRenderAttr("value", $data.formValue.phone)} placeholder="Phone"></div></div><div class="col-md-12"><div class="contact__input"><textarea name="message" placeholder="Case Details">${ssrInterpolate($data.formValue.message)}</textarea></div></div><div class="col-md-12"><div class="contact__btn"><button type="submit" class="tp-btn-brown">Send Message</button></div></div></div></form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/LawyerContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LawyerContactForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { LawyerContactForm }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_lawyer_contact_form = resolveComponent("lawyer-contact-form");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `contact__area ${$props.el_style ? "pt-120 pb-120" : "pt-140 pb-140"}`
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-5 col-xl-6 col-lg-5"><div class="contact__wrapper" data-sal="slide-right" data-sal-delay="130" data-sal-duration="1000"><div class="section__title-wrapper-4 mb-20"><span class="section__title-pre-4">Contact us now!</span><h3 class="section__title-4">Get Free Consultation</h3></div><p>Feel free to ask somthing we are here</p><div class="contact__list"><div class="contact__list-item d-flex align-items-center"><div class="contact__list-icon"><span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.9606 22.2287C26.9606 22.6966 26.8566 23.1776 26.6356 23.6456C26.4146 24.1136 26.1286 24.5556 25.7516 24.9716C25.1146 25.6736 24.4126 26.1806 23.6196 26.5056C22.8396 26.8306 21.9946 26.9996 21.0847 26.9996C19.7587 26.9996 18.3417 26.6876 16.8467 26.0506C15.3518 25.4136 13.8568 24.5556 12.3748 23.4766C10.8798 22.3847 9.46286 21.1757 8.11088 19.8367C6.7719 18.4847 5.56292 17.0677 4.48394 15.5858C3.41796 14.1038 2.55997 12.6218 1.93598 11.1528C1.31199 9.67086 1 8.25388 1 6.9019C1 6.01792 1.156 5.17293 1.46799 4.39294C1.77999 3.59996 2.27398 2.87197 2.96297 2.22198C3.79495 1.40299 4.70494 1 5.66692 1C6.03092 1 6.39491 1.078 6.7199 1.234C7.0579 1.38999 7.35689 1.62399 7.59089 1.96198L10.6068 6.21292C10.8408 6.53791 11.0098 6.8369 11.1268 7.1229C11.2438 7.3959 11.3088 7.66889 11.3088 7.91589C11.3088 8.22788 11.2178 8.53988 11.0358 8.83887C10.8668 9.13787 10.6198 9.44986 10.3078 9.76186L9.31986 10.7888C9.17686 10.9318 9.11186 11.1008 9.11186 11.3088C9.11186 11.4128 9.12486 11.5038 9.15086 11.6078C9.18986 11.7118 9.22886 11.7898 9.25486 11.8678C9.48886 12.2968 9.89185 12.8558 10.4638 13.5318C11.0488 14.2078 11.6728 14.8968 12.3488 15.5858C13.0508 16.2748 13.7268 16.9117 14.4158 17.4967C15.0918 18.0687 15.6508 18.4587 16.0927 18.6927C16.1577 18.7187 16.2357 18.7577 16.3267 18.7967C16.4307 18.8357 16.5347 18.8487 16.6517 18.8487C16.8727 18.8487 17.0417 18.7707 17.1847 18.6277L18.1727 17.6527C18.4977 17.3277 18.8097 17.0807 19.1087 16.9247C19.4077 16.7427 19.7067 16.6517 20.0317 16.6517C20.2787 16.6517 20.5387 16.7037 20.8247 16.8207C21.1107 16.9377 21.4097 17.1067 21.7347 17.3277L26.0376 20.3827C26.3756 20.6167 26.6096 20.8897 26.7526 21.2147C26.8826 21.5397 26.9606 21.8647 26.9606 22.2287Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.4501 10.0997C22.4501 9.31974 21.8391 8.12376 20.9291 7.14878C20.0971 6.25179 18.9921 5.5498 17.9001 5.5498" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27 10.0999C27 5.06893 22.9311 1 17.9001 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="contact__list-content"><h5>Call us at</h5><p><a href="tel:602-762-472-96">+(602) 762 472 96</a></p></div></div><div class="contact__list-item d-flex align-items-center"><div class="contact__list-icon"><span><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9767 25.814H8.02326C7.45116 25.814 6.97674 25.3395 6.97674 24.7674C6.97674 24.1953 7.45116 23.7209 8.02326 23.7209H21.9767C25.9674 23.7209 27.907 21.7814 27.907 17.7907V8.02326C27.907 4.03256 25.9674 2.09302 21.9767 2.09302H8.02326C4.03256 2.09302 2.09302 4.03256 2.09302 8.02326C2.09302 8.59535 1.6186 9.06977 1.04651 9.06977C0.474419 9.06977 0 8.59535 0 8.02326C0 2.93023 2.93023 0 8.02326 0H21.9767C27.0698 0 30 2.93023 30 8.02326V17.7907C30 22.8837 27.0698 25.814 21.9767 25.814Z" fill="currentColor"></path><path d="M14.9997 14.1207C13.8276 14.1207 12.6416 13.7579 11.7346 13.0183L7.36713 9.52997C6.92062 9.16718 6.8369 8.51136 7.1997 8.06485C7.56249 7.61833 8.21828 7.53462 8.66479 7.89741L13.0322 11.3858C14.0927 12.2369 15.8927 12.2369 16.9532 11.3858L21.3206 7.89741C21.7671 7.53462 22.4369 7.60438 22.7857 8.06485C23.1485 8.51136 23.0787 9.18113 22.6183 9.52997L18.2508 13.0183C17.3578 13.7579 16.1718 14.1207 14.9997 14.1207Z" fill="currentColor"></path><path d="M9.4186 20.2327H1.04651C0.474419 20.2327 0 19.7583 0 19.1862C0 18.6141 0.474419 18.1396 1.04651 18.1396H9.4186C9.9907 18.1396 10.4651 18.6141 10.4651 19.1862C10.4651 19.7583 9.9907 20.2327 9.4186 20.2327Z" fill="currentColor"></path><path d="M5.23256 14.6516H1.04651C0.474419 14.6516 0 14.1772 0 13.6051C0 13.033 0.474419 12.5586 1.04651 12.5586H5.23256C5.80465 12.5586 6.27907 13.033 6.27907 13.6051C6.27907 14.1772 5.80465 14.6516 5.23256 14.6516Z" fill="currentColor"></path></svg></span></div><div class="contact__list-content"><h5>Email us on</h5><p><a href="mailto:harry@lawyer.com">harry@lawyer.com</a></p></div></div><div class="contact__list-item d-flex align-items-center"><div class="contact__list-icon"><span><svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.996 18.0183C10.0439 18.0183 7.63232 15.6055 7.63232 12.6208C7.63232 9.63619 10.0439 7.2373 12.996 7.2373C15.9481 7.2373 18.3597 9.65014 18.3597 12.6348C18.3597 15.6195 15.9481 18.0183 12.996 18.0183ZM12.996 9.32936C11.1943 9.32936 9.71128 10.8077 9.71128 12.6348C9.71128 14.4619 11.1804 15.9402 12.996 15.9402C14.8116 15.9402 16.2808 14.4619 16.2808 12.6348C16.2808 10.8077 14.7978 9.32936 12.996 9.32936Z" fill="currentColor"></path><path d="M12.9957 30C10.9445 30 8.87939 29.219 7.27167 27.6709C3.18307 23.7099 -1.33518 17.3919 0.369556 9.87448C1.90798 3.05439 7.82606 0 12.9957 0C12.9957 0 12.9957 0 13.0096 0C18.1792 0 24.0973 3.05439 25.6357 9.88842C27.3266 17.4059 22.8084 23.7099 18.7198 27.6709C17.112 29.219 15.047 30 12.9957 30ZM12.9957 2.09205C8.96255 2.09205 3.77904 4.25384 2.40693 10.3347C0.910083 16.9038 5.01255 22.5662 8.72694 26.1506C11.1247 28.4798 14.8806 28.4798 17.2784 26.1506C20.9789 22.5662 25.0814 16.9038 23.6122 10.3347C22.2263 4.25384 17.0289 2.09205 12.9957 2.09205Z" fill="currentColor"></path></svg></span></div><div class="contact__list-content"><h5>Address</h5><p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">102 Thompson, New York</a></p></div></div></div></div></div><div class="col-xxl-7 col-xl-6 col-lg-7"><div class="contact__form ml-70" data-sal="slide-left" data-sal-delay="130" data-sal-duration="1000">`);
  _push(ssrRenderComponent(_component_lawyer_contact_form, null, null, _parent));
  _push(`<p class="ajax-response"></p></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/LawyerContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LawyerContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LawyerContact as L
};
//# sourceMappingURL=LawyerContact-C7Uaycad.js.map
