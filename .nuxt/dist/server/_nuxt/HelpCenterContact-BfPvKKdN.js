import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { N as NiceSelect } from "./NiceSelect-Em7NpCoz.js";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = {
  components: { NiceSelect },
  methods: {
    changeHandler(e) {
      console.log(e);
    },
    submit() {
      console.log("submit");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nice_select = resolveComponent("nice-select");
  _push(`<form${ssrRenderAttrs(mergeProps({ id: "contact-form" }, _attrs))}><div class="contact__input-3 contact__input-2"><input name="name" type="text" placeholder="Full Name *"></div><div class="contact__input-3 contact__input-2"><input name="email" type="email" placeholder="Your Email *"></div><div class="contact__input-3 contact__input-2">`);
  _push(ssrRenderComponent(_component_nice_select, {
    options: [
      { value: "Choose Your Topic", text: "Choose Your Topic" },
      { value: "Topic one", text: "Topic one" },
      { value: "Topic two", text: "Topic two" },
      { value: "Topic three", text: "Topic three" },
      { value: "Topic four", text: "Topic four" }
    ],
    "default-current": 0,
    name: "Choose Your Topic",
    onOnChange: $options.changeHandler
  }, null, _parent));
  _push(`</div><div class="contact__input-3 contact__input-2"><textarea name="message" placeholder="Enter Message here..."></textarea></div><div class="contact__btn-3 mt-10"><button type="submit" class="tp-btn">Send Message</button></div></form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/HelpCenterForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HelpCenterForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HelpCenterForm }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_help_center_form = resolveComponent("help-center-form");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact__area grey-bg-4 pb-120 pt-110" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xl-7 col-lg-8"><div class="tp-section-wrapper-2 text-center mb-70"><h3 class="tp-section-title-2">Can’t find what you’re looking for?</h3></div></div></div><div class="row"><div class="col-xl-4 col-lg-4"><div class="contact__wrapper-2"><div class="contact__content-2"><h3 class="contact-title">Send Us a Mail</h3><p>Do you have a query about your order, or need a hand with getting your products set up? If so, please fill in the form below.</p></div><div class="contact__info-box"><h3 class="contact__info-box-title">Reach Out</h3><p>Any confusion about your order? We <br> are here to help 24/7</p><div class="contact__info-item-wrapper d-flex flex-wrap align-items-center"><div class="contact__info-item"><div class="contact__info-icon"><span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.415 20.2781L22.922 24.3859C23.052 25.4648 21.895 26.2187 20.9721 25.6598L15.5253 22.4229C14.9274 22.4229 14.3424 22.384 13.7704 22.306C14.7324 21.175 15.3043 19.7451 15.3043 18.1981C15.3043 14.5063 12.1065 11.5165 8.15468 11.5165C6.64675 11.5165 5.25583 11.9455 4.09888 12.6994C4.05989 12.3745 4.04688 12.0495 4.04688 11.7115C4.04688 5.79676 9.18163 1 15.5253 1C21.869 1 27.0038 5.79676 27.0038 11.7115C27.0038 15.2213 25.1969 18.3282 22.415 20.2781Z" stroke="#03041C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.2993 18.1982C15.2993 19.7451 14.7273 21.1751 13.7654 22.3061C12.4785 23.866 10.4375 24.8669 8.14966 24.8669L4.75682 26.8818C4.18485 27.2328 3.45688 26.7518 3.53487 26.0889L3.85986 23.528C2.11794 22.3191 1 20.3821 1 18.1982C1 15.9103 2.22195 13.8955 4.09386 12.6995C5.2508 11.9455 6.64173 11.5166 8.14966 11.5166C12.1015 11.5166 15.2993 14.5064 15.2993 18.1982Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="contact__info-content"><p>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Start Chat`);
      } else {
        return [
          createTextVNode("Start Chat")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div><div class="contact__info-item"><div class="contact__info-icon"><span><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 23.1H7.5C3.6 23.1 1 21.15 1 16.6V7.5C1 2.95 3.6 1 7.5 1H20.5C24.4 1 27 2.95 27 7.5V16.6C27 21.15 24.4 23.1 20.5 23.1Z" stroke="#03041C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 8.15039L16.431 11.4004C15.092 12.4664 12.895 12.4664 11.556 11.4004L7.5 8.15039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="contact__info-content has-fw-400"><p><a href="mailto:support@harry.com">support@harry.com</a></p></div></div></div><div class="contact__info-box-refund"><p>See our Refund `);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Policies`);
      } else {
        return [
          createTextVNode("Policies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` or `);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div></div></div><div class="col-xl-8 col-lg-8"><div class="contact__form-3 ml-70">`);
  _push(ssrRenderComponent(_component_help_center_form, null, null, _parent));
  _push(`<p class="ajax-response"></p></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/help-center/HelpCenterContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=HelpCenterContact-BfPvKKdN.js.map
