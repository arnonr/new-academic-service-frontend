import { b as useRouter, g as useRuntimeConfig, k as __nuxt_component_0, _ as _export_sfc, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import { ref, unref, useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode } from "vue";
import "hookable";
import "toastify-js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { L as LoginShapes } from "./LoginShapes-B-0xoJrj.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@vue/devtools-api";
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
const _sfc_main$3 = {
  __name: "RegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public;
    useRouter();
    const item = ref({
      department_id: null,
      username: "",
      email: "",
      isChecked: false
    });
    const selectOptionsFields = [
      {
        options: "departments",
        model: "department_id",
        label: "title",
        placeholder: "เลือกหน่วยงาน"
      }
    ];
    ref({
      departments: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="login__input-wrapper"><div class="login__input-item"><div class="login__input"><label for="form-control">ICIT Account</label><input type="text"${ssrRenderAttr("value", unref(item).username)} placeholder="ระบุ ICIT Account"></div></div><div class="login__input-item"><div class="login__input"><label for="form-control">Email</label><input type="text"${ssrRenderAttr("value", unref(item).email)} placeholder="ระบุ EMAIL"></div></div><div class="login__input-item"><!--[-->`);
      ssrRenderList(selectOptionsFields, (select, index) => {
        _push(`<div class=""><label for="form-control">หน่วยงาน</label>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="login__btn"><button type="submit" class="tp-btn w-100">ลงทะเบียน</button></div></form>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/RegisterForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login__social-item d-flex flex-wrap justify-content-sm-center" }, _attrs))}><a href="#"><span class="login-social-icon"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9978 9.69089C17.9978 9.04696 17.9472 8.39954 17.8393 7.76605H9.17969V11.4138H14.1386C13.9328 12.5903 13.2717 13.6311 12.3035 14.2924V16.6593H15.262C16.9993 15.0094 17.9978 12.5729 17.9978 9.69089Z" fill="#4285F4"></path><path d="M9.18072 18.9462C11.6568 18.9462 13.745 18.1074 15.2664 16.6594L12.3079 14.2925C11.4848 14.8703 10.4221 15.1975 9.1841 15.1975C6.78897 15.1975 4.75817 13.5302 4.02951 11.2886H0.976562V13.7286C2.53508 16.9274 5.70947 18.9462 9.18072 18.9462Z" fill="#34A853"></path><path d="M4.02618 11.2886C3.64161 10.1122 3.64161 8.83821 4.02618 7.66173V5.22174H0.976605C-0.325535 7.89841 -0.325535 11.0519 0.976605 13.7286L4.02618 11.2886Z" fill="#FBBC04"></path><path d="M9.18072 3.74937C10.4896 3.72849 11.7546 4.23668 12.7026 5.16951L15.3237 2.46499C13.664 0.856896 11.4612 -0.0272074 9.18072 0.00063836C5.70947 0.00063836 2.53508 2.01946 0.976562 5.22172L4.02613 7.6617C4.75142 5.41664 6.78559 3.74937 9.18072 3.74937Z" fill="#EA4335"></path></svg></span><span>Google</span></a><a href="#"><span class="login-social-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9C18 4.02944 13.9706 0 9 0C4.02943 0 0 4.02944 0 9C0 13.4921 3.29115 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93742 3.51563 10.9932 3.51563C11.9776 3.51563 13.0078 3.69141 13.0078 3.69141V5.90625H11.873C10.755 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z" fill="#4285F4"></path><path d="M12.4994 11.6016L12.8984 9H10.4023V7.3125C10.4023 6.60076 10.7511 5.90625 11.8691 5.90625H13.0039V3.69141C13.0039 3.69141 11.974 3.51562 10.9893 3.51562C8.93352 3.51562 7.58984 4.76156 7.58984 7.01719V9H5.30469V11.6016H7.58984V17.8907C8.52168 18.0364 9.47051 18.0364 10.4023 17.8907V11.6016H12.4994Z" fill="white"></path></svg></span><span>Facebook</span></a><a href="#"><span class="login-social-icon"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.7311C17.3382 2.02466 16.6255 2.22316 15.8789 2.313C16.6414 1.85542 17.227 1.13247 17.5023 0.270582C16.7886 0.693692 15.9986 1.00084 15.1567 1.1659C14.4832 0.448184 13.5238 0 12.4617 0C10.4222 0 8.76809 1.65274 8.76809 3.69203C8.76809 3.98246 8.80198 4.26349 8.86445 4.53407C5.79562 4.3805 3.07519 2.90954 1.25379 0.675932C0.935051 1.22127 0.753971 1.85542 0.753971 2.5324C0.753971 3.81322 1.40628 4.9436 2.3964 5.60491C1.79068 5.5861 1.22097 5.41999 0.72432 5.14314C0.72432 5.15881 0.72432 5.17449 0.72432 5.19016C0.72432 6.97871 1.99612 8.47057 3.6862 8.8101C3.37593 8.89472 3.05083 8.93965 2.71303 8.93965C2.47582 8.93965 2.24391 8.91666 2.01836 8.87279C2.48853 10.3396 3.85245 11.4073 5.46841 11.4376C4.20402 12.4269 2.61137 13.0172 0.881045 13.0172C0.58348 13.0172 0.289093 13.0005 0 12.966C1.63396 14.0138 3.57501 14.625 5.66114 14.625C12.4532 14.625 16.168 8.9992 16.168 4.12037C16.168 3.95948 16.1638 3.80173 16.1574 3.64293C16.8786 3.12266 17.5055 2.4718 18 1.73214V1.7311Z" fill="#387CFF"></path></svg></span><span>Twitter</span></a></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login-register/LoginWithSocial.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LoginWithSocial = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { LoginShapes, RegisterForm: _sfc_main$3, LoginWithSocial }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_login_shapes = resolveComponent("login-shapes");
  const _component_register_form = resolveComponent("register-form");
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "login__area pt-110 pb-110" }, _attrs))}><div class="container"><div class="login__inner p-relative z-index-1">`);
  _push(ssrRenderComponent(_component_login_shapes, null, null, _parent));
  _push(`<div class="row justify-content-center"><div class="col-xl-6 col-lg-8 col-md-10"><div class="login__wrapper"><div class="login__top mb-30 text-center"><h3 class="login__title"> ลงทะเบียนเข้าใช้งาน </h3></div><div class="login__form">`);
  _push(ssrRenderComponent(_component_register_form, null, null, _parent));
  _push(`<div class="login__register-now"><p> กลับไปหน้า `);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`เข้าสู่ระบบ`);
      } else {
        return [
          createTextVNode("เข้าสู่ระบบ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login-register/RegisterArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RegisterArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    RegisterArea
  },
  setup() {
    useHead({
      title: "สมัคใช้งานระบบจัดการเว็บไซต์งานบริการวิชาการ มจพ."
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_register_area = resolveComponent("register-area");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_register_area, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  register as default
};
//# sourceMappingURL=register-D97Hacsa.js.map
