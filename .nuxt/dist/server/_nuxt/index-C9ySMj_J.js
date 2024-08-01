import { _ as _export_sfc, a as __nuxt_component_0, l as useRoute, b as useRouter, i as useAsyncData, r as refreshNuxtData, u as useHead, n as _sfc_main$2, g as useRuntimeConfig, k as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, ref, withAsyncContext, watch, watchEffect, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main$1 = {
  props: {
    item: {},
    masonry: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  if ($props.item) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: `blog__grid-item ${$props.masonry ? "blog__masonary" : ""} ${!$props.item.file ? "no-img" : ""}`
    }, _attrs))} data-v-f089d84d><div class="blog__item-10 white-bg transition-3 mb-30 fix" data-v-f089d84d><div class="blog__thumb-10 w-img fix w-img-news" data-v-f089d84d>`);
    if ($props.item.file) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: $props.item.link + $props.item.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", $props.item.file)} alt="blog img" class="img-news" data-v-f089d84d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: $props.item.file,
                alt: "blog img",
                class: "img-news"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="blog__content-10" data-v-f089d84d><div class="blog__content-10-top" data-v-f089d84d>`);
    if (!$props.item.file) {
      _push(`<div class="blog__tag-10" data-v-f089d84d><a href="#" data-v-f089d84d>${ssrInterpolate($props.item.type_name)}</a></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<h3 class="blog__title-10" data-v-f089d84d>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: $props.item.link + $props.item.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString($props.item.title), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</h3></div><div class="blog__content-10-bottom d-flex align-items-center justify-content-between" data-v-f089d84d><div class="blog__meta-author-10 d-flex align-items-center" data-v-f089d84d><div class="blog__meta-author-content-10" data-v-f089d84d>`);
    if ($props.item.file) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: $props.item.link + $props.item.id,
        class: "text-color-primary text-uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` รายละเอียด <i class="fa fa-arrow-right news-link-view" data-v-f089d84d${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" รายละเอียด "),
              createVNode("i", { class: "fa fa-arrow-right news-link-view" })
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="blog__meta-10 blog-meta-10-2" data-v-f089d84d></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/DepartmentGridItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f089d84d"]]);
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
    const mapItemToProps = (it) => ({
      link: "department/",
      id: it.id,
      title: it.name_th,
      file: it.department_file
    });
    const { data: resDepartment } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("Department", async () => {
      let data = await $fetch(`${apiBase}/department`, {
        params: {
          is_publish: 1
        }
      });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    selectOptions.value.departments = resDepartment.value.data.map((e) => {
      return { title: e.name_th, value: e.id };
    });
    if (route.query.page) {
      currentPage.value = route.query.page;
    }
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("department", async () => {
      var _a, _b, _c;
      let params = {
        ...search.value,
        department_id: void 0,
        id: (_a = search.value.department_id) == null ? void 0 : _a.value,
        created_year: (_b = search.value.created_year) == null ? void 0 : _b.value,
        created_month: (_c = search.value.created_month) == null ? void 0 : _c.value,
        perPage: perPage.value,
        currentPage: currentPage.value
      };
      let data = await $fetch(`${apiBase}/department`, {
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
        router.replace({
          name: "department",
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
      title: "หน่วยงาน บริการวิชาการ"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-40 pb-40" }, _attrs))}><div class="container"><div class="row"><div class="col-md-4 mb-20">`);
      if (unref(selectOptions).departments.length != 0) {
        _push(`<div class="">`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (unref(items).length != 0) {
        _push(`<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-xl-12"><div class="blog__list-item-wrapper"><div class="row gx-2 grid"><!--[-->`);
        ssrRenderList(unref(items), (it, i) => {
          _push(ssrRenderComponent(ListItem, {
            key: i,
            class: "col-xxl-3 col-xl-3 col-lg-6 col-md-6",
            item: mapItemToProps(it)
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div><div class="col-xxl-12"><div class="tp-pagination mt-30">`);
        _push(ssrRenderComponent(_sfc_main$2, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/department/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C9ySMj_J.js.map
