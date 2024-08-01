import { b as useRouter, l as useRoute, g as useRuntimeConfig, a as __nuxt_component_0, k as __nuxt_component_0$1 } from "../server.mjs";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "destr";
import "klona";
import { u as useFetch } from "./fetch-DNDFQiYI.js";
import "toastify-js";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import "sweetalert2";
import { b as basic_data } from "./basicData-Bph90_S1.js";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
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
import "vue-select";
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
      title_th: null,
      title_en: null,
      detail_th: "",
      detail_en: "",
      department_id: null,
      service_category_id: null,
      is_publish: {
        id: 1,
        value: 1,
        name_th: "publish",
        name_en: "publish",
        color: "success"
      },
      rates_th: "",
      rates_en: "",
      location_th: "",
      location_en: "",
      contact_th: "",
      contact_en: ""
    });
    ref(null);
    const selectOptions = ref({
      publishes: basic_data.data().publishes,
      departments: [],
      service_categories: []
    });
    (Math.random() + 1).toString(36).substring(7);
    const { data: res } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${apiBase}/serve/${route.params.id}`, {
      server: true
    }, "$eqZsQE3faT")), __temp = await __temp, __restore(), __temp);
    item.value = { ...res.value.data };
    item.value.serve_file_old = res.value.data.serve_file;
    item.value.department_id = {
      title: res.value.data.department.name,
      value: res.value.data.department_id
    };
    item.value.service_category_id = {
      title: res.value.data.service_category.name_th,
      value: res.value.data.service_category_id
    };
    item.value.is_publish = selectOptions.value.publishes[Number(res.value.data.is_publish)];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_client_only = __nuxt_component_0$1;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"><div class="container"><div class="row"><div class="col-xxl-12"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span> จัดการข้อมูล </span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { href: "/admin/serve" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` รายการงานบริการวิชาการ `);
          } else {
            return [
              createTextVNode(" รายการงานบริการวิชาการ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span> แก้ไขข้อมูล </span></div></div></div></div></div></section><section class="portfolio__area pt-40 pb-40"><div class="container"><div class="row"><div class="col-12"><h4>แบบฟอร์มแก้ไขข้อมูล</h4></div><div class="col-12"><div class=""><div class=""><div class="form-group row mt-10"><label for="" class="label label-required">หน่วยงาน : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">ประเภทการบริการวิชาการ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">รูปภาพปก : </label><div class="col-sm-10"><input class="form-control" type="file" id="formFile"></div><div class="col-sm-2"><a${ssrRenderAttr("href", unref(item).serve_file_old)} target="_blank" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"> View Old File </a></div></div><div class="form-group row mt-10"><label for="" class="label label-required">หัวข้อ : </label><div><input type="text" class="form-control form-control-plaintext"${ssrRenderAttr("value", unref(item).title_th)}></div></div><div class="form-group row mt-10"><label for="" class="label label-required">รายละเอียด : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">อัตราค่าใช้บริการ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">สถานที่ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">ข้อมูลติดต่อ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">สถานะ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="col-md-12 mt-20"><div class="contact__btn-2 text-center"><button class="btn btn-primary"> บันทึก </button></div></div></div></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/serve/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-U9zLzYvL.js.map
