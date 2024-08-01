import { l as useRoute, b as useRouter, i as useAsyncData, r as refreshNuxtData, u as useHead, N as NewsListItem, n as _sfc_main$1, g as useRuntimeConfig } from "../server.mjs";
import { ref, withAsyncContext, watch, watchEffect, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "index-grid",
  __ssrInlineRender: true,
  props: {
    props_item: {
      type: Object,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const runtimeConfig = useRuntimeConfig();
    const items = ref([]);
    const perPage = ref(12);
    const currentPage = ref(1);
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
    const props = __props;
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
    const { data: resDepartment } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("Department", async () => {
      let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
        params: {
          is_publish: 1
        }
      });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    selectOptions.value.departments = resDepartment.value.data.map((e) => {
      return { title: e.name_th, value: e.id };
    });
    const { data: resServiceCategory } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "ServiceCategory",
      async () => {
        let data = await $fetch(
          `${runtimeConfig.public.apiBase}/service-category`,
          {
            params: {
              is_publish: 1
            }
          }
        );
        return data;
      }
    )), __temp = await __temp, __restore(), __temp);
    selectOptions.value.service_categories = resServiceCategory.value.data.map(
      (e) => {
        return { title: e.name_th, value: e.id };
      }
    );
    if (route.query.service_category_id != null) {
      search.value.service_category_id = selectOptions.value.service_categories.find((x) => {
        return x.value == route.query.service_category_id;
      });
    }
    if (route.query.page) {
      currentPage.value = route.query.page;
    }
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("serve", async () => {
      let params = {
        ...search.value,
        service_category_id: search.value.service_category_id == null ? void 0 : search.value.service_category_id.value,
        department_id: search.value.department_id == null ? void 0 : search.value.department_id.value,
        created_year: search.value.created_year == null ? void 0 : search.value.created_year.value,
        created_month: search.value.created_month == null ? void 0 : search.value.created_month.value,
        perPage: perPage.value,
        currentPage: currentPage.value,
        department_id: props.props_item.department_id
      };
      let data = await $fetch(`${runtimeConfig.public.apiBase}/serve`, {
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
      [currentPage, search.value],
      () => {
        console.log("FREDOM");
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
      title: "งานบริการวิชาการ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-40 pb-40" }, _attrs))}>`);
      if (unref(items).length != 0) {
        _push(`<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-xl-12"><div class="blog__list-item-wrapper"><!--[-->`);
        ssrRenderList(unref(items), (it, i) => {
          _push(ssrRenderComponent(NewsListItem, {
            key: i,
            item: {
              link: "/serve/",
              id: it.id,
              title: it.title,
              file: it.serve_file,
              created: it.created_serve,
              type_name: it.service_category.name_th,
              dep_name: it.department.name_th
            }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/serve/index-grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-grid-Aehx8Xvr.js.map
