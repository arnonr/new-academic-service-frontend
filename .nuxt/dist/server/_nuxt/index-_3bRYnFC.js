import { _ as _export_sfc, i as useAsyncData, d as useCookie, g as useRuntimeConfig, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, withAsyncContext, unref, toDisplayString, watch, createTextVNode } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Mousewheel, Navigation, Pagination, Autoplay } from "swiper";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { N as NewsGridItem } from "./GridItem-COh17Ezs.js";
import "toastify-js";
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
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
const _sfc_main$3 = {
  components: { Swiper, SwiperSlide },
  async setup() {
    const runtimeConfig = useRuntimeConfig();
    const renderFraction = (currentClass, totalClass) => {
      return `<span class="${currentClass}"></span>
                <span class="tp-swiper-fraction-divide"></span>
              <span class="${totalClass}"></span>`;
    };
    const items = ref([]);
    const { data: res } = await useAsyncData("banner", async () => {
      let data = await $fetch(`${runtimeConfig.public.apiBase}/banner`, {
        params: {
          is_publish: 1,
          lang: useCookie("lang").value
        }
      });
      return data;
    });
    items.value = res.value.data;
    return {
      items,
      renderFraction,
      modules: [EffectFade, Mousewheel, Navigation, Pagination, Autoplay]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  if ($setup.items.length != 0) {
    _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area p-relative" }, _attrs))} data-v-49f0b6f9>`);
    if ($setup.items.length != 0) {
      _push(ssrRenderComponent(_component_swiper, {
        class: "slider__active-12 slider__height-12 swiper-container",
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        loop: true,
        modules: $setup.modules,
        autoplay: {
          delay: 5e3,
          disableOnInteraction: true
        },
        pagination: {
          clickable: true
        },
        navigation: {
          nextEl: ".slider-button-12-next",
          prevEl: ".slider-button-12-prev"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList($setup.items, (it) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: it.id,
                class: `slider__item-12 slider__bg-12 ${it.bg} d-flex align-items-center`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a${ssrRenderAttr("href", it.banner_url)} data-v-49f0b6f9${_scopeId2}><img${ssrRenderAttr("src", it.banner_file)}${ssrRenderAttr("alt", it.title)} style="${ssrRenderStyle({ "width": "100%" })}" data-v-49f0b6f9${_scopeId2}></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        href: it.banner_url
                      }, [
                        createVNode("img", {
                          src: it.banner_file,
                          alt: it.title,
                          style: { "width": "100%" }
                        }, null, 8, ["src", "alt"])
                      ], 8, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="slider-pagination-12 tp-swiper-fraction" data-v-49f0b6f9${_scopeId}></div><div class="slider__nav-arrow-12 d-flex flex-column d-none d-md-block" data-v-49f0b6f9${_scopeId}><button class="slider-button-12-next" data-v-49f0b6f9${_scopeId}><i class="fa-regular fa-chevron-right" data-v-49f0b6f9${_scopeId}></i></button><button class="slider-button-12-prev" data-v-49f0b6f9${_scopeId}><i class="fa-regular fa-chevron-left" data-v-49f0b6f9${_scopeId}></i></button></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.items, (it) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: it.id,
                  class: `slider__item-12 slider__bg-12 ${it.bg} d-flex align-items-center`
                }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      href: it.banner_url
                    }, [
                      createVNode("img", {
                        src: it.banner_file,
                        alt: it.title,
                        style: { "width": "100%" }
                      }, null, 8, ["src", "alt"])
                    ], 8, ["href"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128)),
              createVNode("div", { class: "slider-pagination-12 tp-swiper-fraction" }),
              createVNode("div", { class: "slider__nav-arrow-12 d-flex flex-column d-none d-md-block" }, [
                createVNode("button", { class: "slider-button-12-next" }, [
                  createVNode("i", { class: "fa-regular fa-chevron-right" })
                ]),
                createVNode("button", { class: "slider-button-12-prev" }, [
                  createVNode("i", { class: "fa-regular fa-chevron-left" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</section>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-49f0b6f9"]]);
const _sfc_main$2 = {
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    el_style: {
      type: Boolean,
      default: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const items = ref([]);
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("serviceCategory", async () => {
      let data = await $fetch(`${runtimeConfig.public.apiBase}/service-category`, {
        params: {
          is_publish: 1,
          lang: useCookie("lang").value,
          orderBy: "created_at"
        }
      });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    items.value = res.value.data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `brand__area ${__props.el_style ? "pt-30" : ""} bg-grey`
      }, _attrs))} data-v-da309e3c><div class="container" data-v-da309e3c><div class="row" data-v-da309e3c><div class="col-xxl-12 mb-20" data-v-da309e3c><h3 data-v-da309e3c>${ssrInterpolate("ประเภทงานบริการวิชาการ")}</h3></div></div>`);
      if (unref(items).length != 0) {
        _push(`<div class="row" data-v-da309e3c><!--[-->`);
        ssrRenderList(unref(items), (it, idx) => {
          _push(`<div class="col-md-6" data-v-da309e3c>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/serve?service_category_id=${it.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", `images/icon/icon_${it.id}.jpg`)} style="${ssrRenderStyle({ "width": "70px" })}" alt="" data-v-da309e3c${_scopeId}><span class="ms-3" data-v-da309e3c${_scopeId}>${ssrInterpolate(it.name)}</span>`);
              } else {
                return [
                  createVNode("img", {
                    src: `images/icon/icon_${it.id}.jpg`,
                    style: { "width": "70px" },
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "ms-3" }, toDisplayString(it.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<hr style="${ssrRenderStyle({ "border-top": "dotted 1px" })}" data-v-da309e3c></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Category.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-da309e3c"]]);
const _sfc_main$1 = {
  __name: "News",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const runtimeConfig = useRuntimeConfig();
    const items = ref([]);
    const newsType = ref([]);
    const activeCategory = ref("news-all");
    const search = ref({
      news_type_id: void 0,
      is_publish: 1
    });
    const { data: resNewsType } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("newsType", async () => {
      let data = await $fetch(`${runtimeConfig.public.apiBase}/news-type`, {
        params: {
          is_publish: 1,
          lang: useCookie("lang").value,
          orderBy: "created_at"
        }
      });
      let d = data.data.map((e) => {
        e.category = "news-" + e.name;
        return e;
      });
      d.unshift({
        id: null,
        name: "ข่าวทั้งหมด",
        category: "news-all"
      });
      return { ...data, data: d };
    })), __temp = await __temp, __restore(), __temp);
    newsType.value = resNewsType.value.data;
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("news", async () => {
      let data = await $fetch(`${runtimeConfig.public.apiBase}/news`, {
        params: {
          ...search.value,
          news_type_id: search.value.news_type_id == null ? void 0 : search.value.news_type_id,
          perPage: 8,
          currentPage: 1,
          lang: useCookie("lang").value
        }
      });
      if (data) {
        return { data: data.data };
      } else {
        return { data: [] };
      }
    })), __temp = await __temp, __restore(), __temp);
    if (res.value != null) {
      items.value = res.value.data;
    } else {
      items.value = [];
    }
    watch([resNewsType], () => {
      newsType.value = resNewsType.value.data;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-40 pb-40" }, _attrs))} data-v-ae0d31f4><div class="container" data-v-ae0d31f4><div class="row" data-v-ae0d31f4><div class="col-xxl-12 mb-20" data-v-ae0d31f4><h3 data-v-ae0d31f4>${ssrInterpolate("ข่าว")}</h3></div>`);
      if (unref(newsType).length != 0) {
        _push(`<div class="col-xxl-12" data-v-ae0d31f4><div class="portfolio__masonary-btn-2 text-start mb-50" data-v-ae0d31f4>`);
        if (unref(newsType).length != 0) {
          _push(`<div class="masonary-menu filter-button-group" data-v-ae0d31f4><!--[-->`);
          ssrRenderList(unref(newsType), (nt, i) => {
            _push(`<button class="${ssrRenderClass(`${nt.category === unref(activeCategory) ? "active" : ""} text-uppercase`)}" data-v-ae0d31f4>${ssrInterpolate(nt.name)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="row gx-2 grid" data-v-ae0d31f4><!--[-->`);
      ssrRenderList(unref(items), (it, i) => {
        _push(`<div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6" data-v-ae0d31f4>`);
        _push(ssrRenderComponent(NewsGridItem, {
          item: {
            link: "news/",
            id: it.id,
            title: it.title,
            file: it.news_file,
            type_name: it.news_type.name
          }
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="div-btn-news" data-v-ae0d31f4><div class="col" data-v-ae0d31f4><div class="tp-button-demo text-end" data-v-ae0d31f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/news",
        class: "tp-btn-border-brown text-uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("ข่าวทั้งหมด")}`);
          } else {
            return [
              createTextVNode(toDisplayString("ข่าวทั้งหมด"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/News.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ae0d31f4"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "งานบริการวิชาการ มจพ.",
      meta: [
        {
          name: "งานบริการวิชาการ มจพ.",
          content: "งานบริการวิชาการ มจพ."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBanner = __nuxt_component_0;
      const _component_HomeCategory = __nuxt_component_1;
      const _component_HomeNews = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HomeBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeCategory, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeNews, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-_3bRYnFC.js.map
