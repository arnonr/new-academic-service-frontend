import { l as useRoute, b as useRouter, i as useAsyncData, r as refreshNuxtData, u as useHead, N as NewsListItem, n as _sfc_main$1, g as useRuntimeConfig, k as __nuxt_component_0 } from "../server.mjs";
import { ref, withAsyncContext, watch, watchEffect, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "dayjs";
import "dayjs/locale/th.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
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
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const config = useRuntimeConfig();
    const { apiBase } = config.public;
    const items = ref([]);
    const perPage = ref(12);
    const currentPage = ref(parseInt(route.query.page) || 1);
    const totalPage = ref(1);
    const totalItems = ref(0);
    const search = ref({
      department_id: null,
      service_category_id: null,
      title: "",
      created_year: null,
      created_month: null,
      is_publish: 1,
      text_all: ""
    });
    const selectOptionsFields = [
      {
        options: "service_categories",
        model: "service_category_id",
        label: "title",
        placeholder: "ประเภทงานบริการวิชาการ"
      },
      {
        options: "departments",
        model: "department_id",
        label: "title",
        placeholder: "หน่วยงาน"
      }
    ];
    const selectOptions = ref({
      news_types: [],
      perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 }
      ],
      service_categories: [],
      departments: []
    });
    const fetchOptions = async (endpoint, params = {}) => {
      try {
        const { data } = await $fetch(`${apiBase}/${endpoint}`, {
          params
        });
        return data.map((e) => {
          return { title: e.name_th, value: e.id };
        });
      } catch (error) {
        console.error("Error fetching ", error);
        return [];
      }
    };
    const mapItemToProps = (item) => ({
      link: "serve/",
      id: item.id,
      title: item.title,
      file: item.serve_file,
      created: item.created_serve,
      type_name: item.service_category.name_th,
      dep_name: item.department.name_th
    });
    const { data: departmentsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "departments",
      () => fetchOptions("department", { is_publish: 1 })
    )), __temp = await __temp, __restore(), __temp);
    selectOptions.value.departments = departmentsData.value;
    const { data: serviceCategoriesData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "service-categories",
      () => fetchOptions("service-category", { is_publish: 1 })
    )), __temp = await __temp, __restore(), __temp);
    selectOptions.value.service_categories = serviceCategoriesData.value;
    if (route.query.service_category_id != null) {
      search.value.service_category_id = selectOptions.value.service_categories.find((x) => {
        return x.value == route.query.service_category_id;
      });
    }
    if (route.query.page) {
      currentPage.value = route.query.page;
    }
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("serve", async () => {
      var _a, _b, _c, _d;
      let text_all = search.value.text_all.length > 3 ? search.value.text_all : "";
      let params = {
        ...search.value,
        text_all,
        service_category_id: (_a = search.value.service_category_id) == null ? void 0 : _a.value,
        department_id: (_b = search.value.department_id) == null ? void 0 : _b.value,
        created_year: (_c = search.value.created_year) == null ? void 0 : _c.value,
        created_month: (_d = search.value.created_month) == null ? void 0 : _d.value,
        perPage: perPage.value,
        currentPage: currentPage.value
      };
      let data = await $fetch(`${apiBase}/serve`, {
        params
      });
      items.value = data.data;
      totalPage.value = data.totalPage;
      totalItems.value = data.totalData;
      return data;
    })), __temp = await __temp, __restore(), __temp);
    items.value = res.value.data;
    totalPage.value = res.value.totalPage;
    totalItems.value = res.value.totalData;
    watch(
      [currentPage, search],
      () => {
        router.replace({
          name: "serve",
          query: { page: currentPage.value }
        });
        refreshNuxtData();
      },
      { deep: true }
    );
    watchEffect(() => {
      if (currentPage.value > totalPage.value)
        currentPage.value = totalPage.value;
    });
    useHead({
      title: "งานบริการวิชาการ มจพ."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-40 pb-40" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(selectOptionsFields, (select, index) => {
        _push(`<div class="col-md-4 mb-20">`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="col-md-4 mb-20"><input${ssrRenderAttr("value", unref(search).text_all)} class="form-control" type="text" placeholder="ค้นหางานบริการวิชาการ (พิมพ์ 3 ตัวอักษร)"></div></div></div>`);
      if (unref(items).length != 0) {
        _push(`<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-xl-12"><div class="blog__list-item-wrapper"><!--[-->`);
        ssrRenderList(unref(items), (it, i) => {
          _push(ssrRenderComponent(NewsListItem, {
            key: i,
            item: mapItemToProps(it)
          }, null, _parent));
        });
        _push(`<!--]--></div></div><div class="col-xxl-12"><div class="tp-pagination mt-30">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          totalPage: unref(totalPage),
          currentPage: unref(currentPage),
          totalItems: unref(totalItems),
          "onUpdate:currentPage": ($event) => currentPage.value = $event
        }, null, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/serve/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DSGkmWHn.js.map
