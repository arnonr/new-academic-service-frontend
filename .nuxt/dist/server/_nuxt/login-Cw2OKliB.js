import { s as storeToRefs, b as useRouter, c as _imports_0, a as __nuxt_component_0, _ as _export_sfc, u as useHead } from "../server.mjs";
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext, resolveComponent } from "vue";
import "hookable";
import "toastify-js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { L as LoginShapes } from "./LoginShapes-B-0xoJrj.js";
import { u as useAuthStore } from "./auth-Ds3h1m1J.js";
import "ofetch";
import "#internal/nuxt/paths";
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
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./fetch-DNDFQiYI.js";
const _imports_1 = "" + __buildAssetsURL("bg-login.DblRRpJ5.jpeg");
const _sfc_main$1 = {
  __name: "LoginArea",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    storeToRefs(useAuthStore());
    useRouter();
    const login2 = ref({
      email: "",
      password: "",
      isChecked: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "login__area pt-180 pb-110" }, _attrs))}><div class="container"><div class="login__inner p-relative z-index-1">`);
      _push(ssrRenderComponent(LoginShapes, null, null, _parent));
      _push(`<div class="row justify-content-center"><div class="col-xl-6 col-lg-8 col-md-10"><div class="login__wrapper"><div class="login__top mb-30 text-center"><img${ssrRenderAttr("src", _imports_0)} alt="shape" style="${ssrRenderStyle({ "width": "60%" })}"><img class="offcanvas__shape-1"${ssrRenderAttr("src", _imports_1)} alt="shape"></div><div class="login__form"><form><div class="login__input-wrapper"><div class="login__input-item"><div class="login__input"><label for="email">Email</label><input${ssrRenderAttr("value", unref(login2).email)} type="text" placeholder="Email or Username"></div></div><div class="login__input-item"><div class="login__input"><label for="email">Password</label><input${ssrRenderAttr("value", unref(login2).password)} type="password" placeholder="Password"></div></div></div><div class="login__option mb-25 d-sm-flex justify-content-between"><div class="login__remember"><input${ssrIncludeBooleanAttr(Array.isArray(unref(login2).isChecked) ? ssrLooseContain(unref(login2).isChecked, null) : unref(login2).isChecked) ? " checked" : ""} type="checkbox" id="tp-remember"><label for="tp-remember">Remember me</label></div><div class="login__forgot">`);
      _push(ssrRenderComponent(_component_nuxt_link, { href: "/forgot" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ลืมรหัสผ่าน`);
          } else {
            return [
              createTextVNode("ลืมรหัสผ่าน")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="login__btn"><button type="submit" class="tp-btn w-100"> เข้าสู่ระบบ </button></div><div class="register">`);
      _push(ssrRenderComponent(_component_nuxt_link, { href: "/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ลงทะเบียนเข้าใช้งาน`);
          } else {
            return [
              createTextVNode("ลงทะเบียนเข้าใช้งาน")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login-register/LoginArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  components: {
    LoginArea: _sfc_main$1
  },
  setup() {
    useHead({
      title: "เข้าสู่ระบบจัดการเว็บไซต์งานบริการวิชาการ มจพ."
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_login_area = resolveComponent("login-area");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_login_area, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  login as default
};
//# sourceMappingURL=login-Cw2OKliB.js.map
