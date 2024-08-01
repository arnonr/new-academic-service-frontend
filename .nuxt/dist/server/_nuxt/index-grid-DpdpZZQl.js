import { l as useRoute, b as useRouter, i as useAsyncData, r as refreshNuxtData, u as useHead, n as _sfc_main$1, g as useRuntimeConfig } from "../server.mjs";
import { ref, withAsyncContext, watch, watchEffect, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import { N as NewsGridItem } from "./GridItem-COh17Ezs.js";
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
      news_type: null,
      created_year: null,
      created_month: null,
      is_publish: 1
    });
    const props = __props;
    const selectOptions = ref({
      news_types: [],
      perPage: [
        { title: "20", value: 20 },
        { title: "40", value: 40 },
        { title: "60", value: 60 }
      ],
      years: [],
      months: [
        { title: "มกราคม", title_en: "January", value: "01" },
        { title: "กุมภาพันธ์", title_en: "February", value: "02" },
        { title: "มีนาคม", title_en: "March", value: "03" },
        { title: "เมษายน", title_en: "April", value: "04" },
        { title: "พฤษภาคม", title_en: "May", value: "05" },
        { title: "มิถุนายน", title_en: "June", value: "06" },
        { title: "กรกฎาคม", title_en: "July", value: "07" },
        { title: "สิงหาคม", title_en: "August", value: "08" },
        { title: "กันยายน", title_en: "September", value: "09" },
        { title: "ตุลาคม", title_en: "October", value: "10" },
        { title: "ฑฤศจิกายน", title_en: "November", value: "11" },
        { title: "ธันวาคม", title_en: "December", value: "12" }
      ]
    });
    let year = dayjs().year();
    for (let i = 0; i <= 9; i++) {
      selectOptions.value.years.push({
        title: year - i + 543,
        title_en: year - i,
        value: year - i
      });
    }
    const { data: resNewsType } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("newsType", async () => {
      let data = await $fetch(`${runtimeConfig.public.apiBase}/news-type`, {
        params: {
          is_publish: 1
        }
      });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    selectOptions.value.news_types = resNewsType.value.data.map((e) => {
      return { title: e.name, value: e.id };
    });
    if (route.query.page) {
      currentPage.value = route.query.page;
    }
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("news", async () => {
      let params = {
        ...search.value,
        news_type_id: search.value.news_type == null ? void 0 : search.value.news_type.value,
        created_year: search.value.created_year == null ? void 0 : search.value.created_year.value,
        created_month: search.value.created_month == null ? void 0 : search.value.created_month.value,
        department_id: props.props_item.department_id,
        perPage: perPage.value,
        currentPage: currentPage.value
      };
      let data = await $fetch(`${runtimeConfig.public.apiBase}/news`, {
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
          name: "news",
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
      title: "ข่าวและประกาศ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-40 pb-40" }, _attrs))}>`);
      if (unref(items).length != 0) {
        _push(`<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-xl-12"><div class="blog__list-item-wrapper"><div class="row gx-2 grid"><!--[-->`);
        ssrRenderList(unref(items), (it, i) => {
          _push(ssrRenderComponent(NewsGridItem, {
            key: i,
            class: "col-xxl-3 col-xl-3 col-lg-6 col-md-6",
            item: {
              link: "/news/",
              id: it.id,
              title: it.title,
              file: it.news_file,
              created: it.created_news,
              type_name: it.news_type.name
            }
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div><div class="col-xxl-12"><div class="tp-pagination mt-30">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index-grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-grid-DpdpZZQl.js.map
