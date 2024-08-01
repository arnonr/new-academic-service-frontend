import { b as useRouter, l as useRoute, u as useHead, d as useCookie, g as useRuntimeConfig, a as __nuxt_component_0, k as __nuxt_component_0$1 } from "../server.mjs";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { u as useFetch } from "./fetch-DNDFQiYI.js";
import "toastify-js";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import vSelect from "vue-select";
import "sweetalert2";
import { b as basic_data } from "./basicData-Bph90_S1.js";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "destr";
import "klona";
import buddhistEra from "dayjs/plugin/buddhistEra.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@vue/devtools-api";
import "@yeger/vue-masonry-wall";
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    dayjs.extend(buddhistEra);
    const configR = useRuntimeConfig();
    const { apiBase } = configR.public;
    useRouter();
    const route = useRoute();
    const item = ref({
      name_th: null,
      name_en: null,
      detail_th: "",
      contact_th: "",
      level: "",
      is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success"
      }
    });
    ref(null);
    const selectOptions = ref({
      publishes: basic_data.data().publishes,
      service_categories: []
    });
    (Math.random() + 1).toString(36).substring(7);
    const { data: res } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${apiBase}/department/${route.params.id}`,
      {
        server: true
      },
      "$nXO7kTBzng"
    )), __temp = await __temp, __restore(), __temp);
    item.value = { ...res.value.data };
    item.value.department_file_old = res.value.data.department_file;
    item.value.department_file = null;
    item.value.is_publish = selectOptions.value.publishes[Number(res.value.data.is_publish)];
    useHead({
      title: "แก้ไขหน่วยงาน"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_client_only = __nuxt_component_0$1;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"><div class="container"><div class="row"><div class="col-xxl-12"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span> จัดการข้อมูล </span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { href: "/admin/department" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` รายการหน่วยงาน `);
          } else {
            return [
              createTextVNode(" รายการหน่วยงาน ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span> แก้ไขข้อมูล </span></div></div></div></div></div></section><section class="portfolio__area pt-40 pb-40"><div class="container"><div class="row"><div class="col-12 mb-20"><h4>แบบฟอร์มแก้ไขข้อมูลหน่วยงาน</h4></div><div class="col-12"><div class=""><div class="">`);
      if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1) {
        _push(`<div class="form-group row mt-10"><label for="" class="label label-required">ลำดับ : </label><div><input type="number" class="form-control form-control-plaintext"${ssrRenderAttr("value", unref(item).level)}></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-group row mt-10"><label for="" class="label label-required">ชื่อหน่วยงาน TH : </label><div><input type="text" class="form-control form-control-plaintext"${ssrRenderAttr("value", unref(item).name_th)}></div></div><div class="form-group row mt-10"><label for="" class="label label-required">ชื่อหน่วยงาน EN : </label><div><input type="text" class="form-control form-control-plaintext"${ssrRenderAttr("value", unref(item).name_en)}></div></div><div class="form-group row mt-10"><label for="" class="label label-required">รูปภาพปก : </label><div class="col-sm-10"><input class="form-control" type="file" id="formFile"></div><div class="col-sm-2"><a${ssrRenderAttr("href", unref(item).department_file_old)} target="_blank" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"> View Old File </a></div></div><div class="form-group row mt-10"><label for="" class="label label-required">รายละเอียดหน่วยงาน : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">ข้อมูลติดต่อ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
      if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1) {
        _push(`<div class="form-group row mt-10"><label for="" class="label label-required">สถานะ : </label><div>`);
        _push(ssrRenderComponent(unref(vSelect), {
          label: "name_th",
          placeholder: "การเผยแพร่",
          options: unref(selectOptions).publishes,
          id: "slt-is_publish",
          modelValue: unref(item).is_publish,
          "onUpdate:modelValue": ($event) => unref(item).is_publish = $event,
          class: "v-select-no-border",
          clearable: true
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-md-12 mt-20"><div class="contact__btn-2 text-center"><button class="btn btn-primary"> บันทึก </button></div></div></div></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/department/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CAXLh_DQ.js.map
