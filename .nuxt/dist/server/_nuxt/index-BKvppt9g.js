import { _ as _export_sfc, a as __nuxt_component_0, l as useRoute, b as useRouter, i as useAsyncData, r as refreshNuxtData, u as useHead, n as _sfc_main$2, g as useRuntimeConfig, k as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, ref, withAsyncContext, watch, watchEffect, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import "destr";
import "klona";
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
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "vue-select";
import "cookie-es";
import "ohash";
const _sfc_main$1 = {
  props: {
    item: {}
  },
  setup() {
    dayjs.extend(buddhistEra);
  },
  data() {
    return {
      dayjs
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog__list-item" }, _attrs))} data-v-2a10e62e><div class="blog__item-10 white-bg transition-3 fix" data-v-2a10e62e><div class="row" data-v-2a10e62e><div class="col-xl-2 col-lg-2 col-md-3" data-v-2a10e62e>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: $props.item.link + $props.item.id
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="blog__thumb-10 w-img fix" data-v-2a10e62e${_scopeId}><img${ssrRenderAttr("src", $props.item.file)} alt="" data-v-2a10e62e${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "blog__thumb-10 w-img fix" }, [
            createVNode("img", {
              src: $props.item.file,
              alt: ""
            }, null, 8, ["src"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-xl-10 col-lg-10 col-md-9" data-v-2a10e62e>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: $props.item.link + $props.item.id
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="blog__content-10" data-v-2a10e62e${_scopeId}><div class="blog__content-10-top" data-v-2a10e62e${_scopeId}><h3 class="blog__title-10 mt-20" style="${ssrRenderStyle({ "min-height": "60px" })}" data-v-2a10e62e${_scopeId}>${ssrInterpolate($props.item.title)}</h3></div><div class="blog__content-10-bottom d-flex align-items-center flex-wrap" data-v-2a10e62e${_scopeId}><div class="blog__meta-author-10 d-flex align-items-center" data-v-2a10e62e${_scopeId}><div class="blog__meta-author-content-10" data-v-2a10e62e${_scopeId}><span data-v-2a10e62e${_scopeId}><i class="fa-regular fa-calendar" data-v-2a10e62e${_scopeId}></i> ${ssrInterpolate($data.dayjs($props.item.created).locale("th").format(
          "DD MMM BB"
        ))}</span></div><div class="blog__meta-author-content-10 pl-20" data-v-2a10e62e${_scopeId}><span data-v-2a10e62e${_scopeId}><i class="fa-regular fa-tag" data-v-2a10e62e${_scopeId}></i> ${ssrInterpolate($props.item.type_name)}</span></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "blog__content-10" }, [
            createVNode("div", { class: "blog__content-10-top" }, [
              createVNode("h3", {
                class: "blog__title-10 mt-20",
                style: { "min-height": "60px" }
              }, toDisplayString($props.item.title), 1)
            ]),
            createVNode("div", { class: "blog__content-10-bottom d-flex align-items-center flex-wrap" }, [
              createVNode("div", { class: "blog__meta-author-10 d-flex align-items-center" }, [
                createVNode("div", { class: "blog__meta-author-content-10" }, [
                  createVNode("span", null, [
                    createVNode("i", { class: "fa-regular fa-calendar" }),
                    createTextVNode(" " + toDisplayString($data.dayjs($props.item.created).locale("th").format(
                      "DD MMM BB"
                    )), 1)
                  ])
                ]),
                createVNode("div", { class: "blog__meta-author-content-10 pl-20" }, [
                  createVNode("span", null, [
                    createVNode("i", { class: "fa-regular fa-tag" }),
                    createTextVNode(" " + toDisplayString($props.item.type_name), 1)
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/ListItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a10e62e"]]);
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
      news_type: null,
      created_year: null,
      created_month: null,
      is_publish: 1,
      text_all: ""
    });
    const selectOptionsFields = [
      {
        options: "news_types",
        model: "news_type",
        label: "title",
        placeholder: "ประเภทข่าว"
      },
      {
        options: "years",
        model: "created_year",
        label: "title",
        placeholder: "ปี"
      },
      {
        options: "months",
        model: "created_month",
        label: "title",
        placeholder: "เดือน"
      }
    ];
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
    const mapItemToProps = (it) => ({
      link: "news/",
      id: it.id,
      title: it.title,
      file: it.news_file,
      created: it.created_news,
      type_name: it.news_type.name
    });
    const { data: resNewsType } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("newsType", async () => {
      let data = await $fetch(`${apiBase}/news-type`, {
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
      var _a, _b, _c;
      let text_all = search.value.text_all.length > 3 ? search.value.text_all : "";
      let params = {
        ...search.value,
        text_all,
        news_type_id: (_a = search.value.news_type) == null ? void 0 : _a.value,
        created_year: (_b = search.value.created_year) == null ? void 0 : _b.value,
        created_month: (_c = search.value.created_month) == null ? void 0 : _c.value,
        perPage: perPage.value,
        currentPage: currentPage.value
      };
      let data = await $fetch(`${apiBase}/news`, {
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
      title: "ข่าวและประกาศ งานบริการวิชาการ มจพ."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-40 pb-40" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
      ssrRenderList(selectOptionsFields, (select, index) => {
        _push(`<div class="col-md-2 mb-20">`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="col-md-6 mb-20"><div class=""><input class="form-control"${ssrRenderAttr("value", unref(search).text_all)} type="text" placeholder="ค้นหาข่าว (พิมพ์ 3 ตัวอักษร)"></div></div></div></div>`);
      if (unref(items).length != 0) {
        _push(`<div class="container"><div class="row"><div class="col-lg-12"><div class="row"><div class="col-xl-12"><div class="blog__list-item-wrapper"><!--[-->`);
        ssrRenderList(unref(items), (it, i) => {
          _push(ssrRenderComponent(NewsListItem, {
            key: i,
            item: mapItemToProps(it)
          }, null, _parent));
        });
        _push(`<!--]--></div></div><div class="col-xxl-12"><div class="tp-pagination mt-30">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BKvppt9g.js.map
