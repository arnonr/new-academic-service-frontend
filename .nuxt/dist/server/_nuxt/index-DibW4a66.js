import { u as useHead, n as _sfc_main$1, g as useRuntimeConfig, d as useCookie, k as __nuxt_component_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { ref, watch, watchEffect, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import buddhistEra from "dayjs/plugin/buddhistEra.js";
import "sweetalert2";
import "toastify-js";
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
      publishes: basic_data.data().publishes,
      news_types: [],
      departments: []
    });
    const fetchDepartments = async () => {
      let data = await $fetch(`${apiBase}/department`, {
        params: {
          is_publish: 1
        }
      }).catch((error) => error.data);
      selectOptions.value.departments = data.data.map((e) => {
        return { title: e.name_th, value: e.id };
      }).filter((x) => {
        if (useCookie("user").value && useCookie("user").value.group_id == 2) {
          if (x.value == useCookie("user").value.department_id) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      });
    };
    const fetchItems = async () => {
      let params = {
        ...search.value,
        news_type_id: search.value.news_type_id == null ? void 0 : search.value.news_type_id.value,
        perPage: perPage.value,
        currentPage: currentPage.value
      };
      let data = await $fetch(`${apiBase}/news`, {
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
        fetchDepartments();
      },
      { deep: true }
    );
    watchEffect(() => {
      if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
    });
    useHead({
      title: "รายการข่าว"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"><div class="container"><div class="row"><div class="col-xxl-12"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span> จัดการข้อมูล </span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span> ข่าวประชาสัมพันธ์ </span></div></div></div></div></div></section><section class="portfolio__area pt-40"><div class="container"><div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey"><h4 class="section-bg-primary mb-20"><i class="fa-solid fa-search"></i><span class="ml-10">ค้นหา</span></h4><div class="row"><div class="col-12 col-lg-4"><input class="form-control"${ssrRenderAttr("value", unref(search).title_th)} name="title_th" type="text" placeholder="หัวข้อข่าว (TH)"></div>`);
      if (unref(selectOptions).news_types.length != 0) {
        _push(`<div class="col-12 col-lg-4">`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectOptions).departments.length != 0) {
        _push(`<div class="col-12 col-lg-4">`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section class="portfolio__area pt-40 pb-40"><div class="container"><div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey"><h4 class="section-bg-primary mb-20"><i class="fa-regular fa-news"></i><span class="ml-10">รายการข่าวประชาสัมพันธ์</span></h4><div class="mb-20"><button type="button" class="btn btn-primary"><i class="fa-regular fa-plus"></i> เพิ่มข้อมูล </button></div><div class="row gx-2 grid"><div class="col-12"><div class="table-responsive"><table class="table table-bordered table-striped table-admin"><thead><tr><th class="text-center"></th><th class="text-center">ชื่อ (TH)</th><th class="text-center">ประเภทข่าว</th><th class="text-center">หน่วยงาน</th><th class="text-center"> วันที่ลงข่าว </th><th class="text-center">สถานะ</th><th class="text-center">จัดการ</th></tr></thead>`);
      if (unref(items).length != 0) {
        _push(`<tbody><!--[-->`);
        ssrRenderList(unref(items), (it, idx) => {
          _push(`<tr><td><img${ssrRenderAttr("src", it.news_file)} alt="" class="img-thumbnail" style="${ssrRenderStyle({ "width": "100px" })}"></td><td>${ssrInterpolate(it.title_th)}</td><td>${ssrInterpolate(it.news_type.name)}</td><td>${ssrInterpolate(it.department.name_th)}</td><td>${ssrInterpolate(unref(dayjs)(it.created_news).locale("th").format("DD MMM BB"))}</td><th class="text-center">`);
          if (it.is_publish != null) {
            _push(`<span class="${ssrRenderClass(
              "badge rounded-pill bg-" + unref(selectOptions).publishes[it.is_publish].color
            )}">${ssrInterpolate(unref(selectOptions).publishes[it.is_publish].name_th)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</th><td class="text-center" style="${ssrRenderStyle({ "min-width": "8rem" })}">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: {
              name: "admin-news-id",
              params: { id: it.id }
            },
            class: "btn btn-warning text-uppercase"
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
          _push(`<a${ssrRenderAttr("href", `../news/${it.id}`)} class="btn btn-primary text-uppercase ml-10" target="_blank"><i class="fa-regular fa-eye"></i></a></td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DibW4a66.js.map
