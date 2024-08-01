import { u as useHead, d as useCookie, n as _sfc_main$1, g as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
import { ref, watch, watchEffect, unref, withCtx, createVNode, useSSRContext } from "vue";
import "toastify-js";
import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import buddhistEra from "dayjs/plugin/buddhistEra.js";
import "sweetalert2";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "destr";
import "klona";
import { b as basic_data } from "./basicData-Bph90_S1.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    dayjs.extend(buddhistEra);
    const config = useRuntimeConfig();
    const { apiBase } = config.public;
    const items = ref([]);
    const perPage = ref(20);
    const currentPage = ref(1);
    const totalPage = ref(1);
    const totalItems = ref(0);
    const search = ref({});
    const selectOptions = ref({
      perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 }
      ],
      publishes: basic_data.data().publishes
    });
    const fetchItems = async () => {
      let params = {
        ...search.value,
        perPage: perPage.value,
        currentPage: currentPage.value
      };
      if (useCookie("user").value && useCookie("user").value.group_id == 2) {
        params["id"] = useCookie("user").value.department_id;
      }
      let data = await $fetch(`${apiBase}/department`, {
        params
      }).catch((error) => error.data);
      items.value = data.data;
      totalPage.value = data.totalPage;
      totalItems.value = data.totalData;
    };
    watch(
      [currentPage, search],
      () => {
        fetchItems();
      },
      { deep: true }
    );
    watchEffect(() => {
      if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
    });
    useHead({
      title: "รายการหน่วยงาน"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"><div class="container"><div class="row"><div class="col-xxl-12"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span> จัดการข้อมูล </span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span> รายการหน่วยงาน </span></div></div></div></div></div></section><section class="portfolio__area pt-40"><div class="container"><div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey"><h4 class="section-bg-primary mb-20"><i class="fa-solid fa-search"></i><span class="ml-10">ค้นหา</span></h4><div class="col-12 col-lg-12 mb-20"><input class="form-control"${ssrRenderAttr("value", unref(search).name_th)} name="title" type="text" placeholder="ชื่อหน่วยงาน"></div><div><button class="btn btn-success">ค้นหา</button></div></div></div></section><section class="portfolio__area pb-20"><div class="container"><div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey"><h4 class="section-bg-primary mb-20"><i class="fa-regular fa-list"></i><span class="ml-10">รายการหน่วยงาน</span></h4><div class="mb-20">`);
      if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1) {
        _push(`<button type="button" class="btn btn-primary"><i class="fa-regular fa-plus"></i> เพิ่มข้อมูล </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="row gx-2 grid"><div class="col-12"><div class="table-responsive"><table class="table table-bordered table-striped table-admin"><thead><tr><th class="text-center">ชื่อ (TH)</th><th class="text-center">ชื่อ (EN)</th><th class="text-center">ลำดับ</th><th class="text-center">สถานะ</th><th class="text-center">จัดการ</th></tr></thead>`);
      if (unref(items).length != 0) {
        _push(`<tbody><!--[-->`);
        ssrRenderList(unref(items), (it, idx) => {
          _push(`<tr><td cla ss="text-center">${ssrInterpolate(it.name_th)}</td><td class="text-center">${ssrInterpolate(it.name_en)}</td><td class="text-center">${ssrInterpolate(it.level)}</td><th class="text-center">`);
          if (it.is_publish != null) {
            _push(`<span class="${ssrRenderClass(
              "badge rounded-pill bg-" + unref(selectOptions).publishes[it.is_publish].color
            )}">${ssrInterpolate(unref(selectOptions).publishes[it.is_publish].name_th)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</th><td class="text-center">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: {
              name: "admin-department-edit-id",
              params: { id: it.id }
            },
            class: "btn btn-warning text-uppercase ml-5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="fa-regular fa-edit"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "fa-regular fa-edit" })
                ];
              }
            }),
            _: 2
          }, _parent));
          if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1) {
            _push(`<button class="btn btn-danger ml-5"><i class="fa-regular fa-trash"></i></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div></div></div><div class="col-xxl-12"><div class="tp-pagination mt-30">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        totalPage: unref(totalPage),
        currentPage: unref(currentPage),
        totalItems: unref(totalItems),
        "onUpdate:currentPage": ($event) => currentPage.value = $event
      }, null, _parent));
      _push(`</div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/department/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-U76Dnw62.js.map
