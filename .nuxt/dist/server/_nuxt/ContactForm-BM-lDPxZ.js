import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: ""
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ id: "contact-form" }, _attrs))}><div class="row"><div class="col-md-6"><div class="contact__input-2"><input name="name"${ssrRenderAttr("value", $data.formValue.name)} type="text" placeholder="Enter your name"></div></div><div class="col-md-6"><div class="contact__input-2"><input name="email"${ssrRenderAttr("value", $data.formValue.email)} type="email" placeholder="Enter your email"></div></div><div class="col-md-6"><div class="contact__input-2"><input name="phone"${ssrRenderAttr("value", $data.formValue.phone)} type="text" placeholder="Mobile no"></div></div><div class="col-md-6"><div class="contact__input-2"><input name="company"${ssrRenderAttr("value", $data.formValue.company)} type="text" placeholder="Company"></div></div><div class="col-md-12"><div class="contact__input-2"><textarea name="message" placeholder="Your message">${ssrInterpolate($data.formValue.msg)}</textarea></div></div><div class="col-md-12"><div class="contact__agree d-flex align-items-start mb-25"><input class="e-check-input" type="checkbox" id="e-agree"><label class="e-check-label" for="e-agree"> I am bound by the terms of the Service I accept Privacy Policy. </label></div></div><div class="col-md-5"><div class="contact__btn-2"><button type="submit" class="tp-btn">Send Message</button></div></div>`);
  if ($props.style_2) {
    _push(`<div class="col-md-7"><div class="contact__form-call float-md-end"><span>Call for Consultation</span><p><a href="tel:2236-384-870"><i class="fa-solid fa-phone-flip"></i> +2236 384 870 </a></p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContactForm as C
};
//# sourceMappingURL=ContactForm-BM-lDPxZ.js.map
