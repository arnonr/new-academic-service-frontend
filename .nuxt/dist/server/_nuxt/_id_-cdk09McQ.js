import { _ as _export_sfc, l as useRoute, i as useAsyncData, u as useHead, g as useRuntimeConfig, a as __nuxt_component_0, k as __nuxt_component_0$1 } from "../server.mjs";
import { ref, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "swiper";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { I as ImagePopup } from "./ImagePopup-DYm5hHIZ.js";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
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
import "vue-easy-lightbox";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    dayjs.extend(buddhistEra);
    const config = useRuntimeConfig();
    const { apiBase } = config.public;
    const route = useRoute();
    const image_popup = ref(null);
    const newsGallery = ref([]);
    ref(null);
    const item = ref(null);
    const { data: res1 } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("news-gallery", async () => {
      let data = await $fetch(`${apiBase}/news-gallery`, {
        params: {
          is_publish: 1,
          news_id: route.params.id
        }
      });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    newsGallery.value = [...res1.value.data];
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("news", async () => {
      let data = await $fetch(`${apiBase}/news/${route.params.id}`);
      return data;
    })), __temp = await __temp, __restore(), __temp);
    item.value = res.value.data;
    useHead({
      title: item.value.title
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4" data-v-ca6e19c5><div class="container" data-v-ca6e19c5><div class="row" data-v-ca6e19c5>`);
      if (unref(item) != null) {
        _push(`<div class="col-xxl-12" data-v-ca6e19c5><div class="breadcrumb__content p-relative z-index-1" data-v-ca6e19c5><div class="postbox__category" data-v-ca6e19c5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: "/news",
            query: { news_type_id: unref(item).news_type_id }
          },
          style: { "padding": "10px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(item).news_type.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(item).news_type.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="breadcrumb__list" data-v-ca6e19c5><span class="breadcrumb-item-1" data-v-ca6e19c5>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: {
          path: "/"
        } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` หน้าหลัก `);
            } else {
              return [
                createTextVNode(" หน้าหลัก ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span><span class="dvdr breadcrumb-item-1" data-v-ca6e19c5><i class="fa-solid fa-circle-small" data-v-ca6e19c5></i></span><span class="breadcrumb-item-1" data-v-ca6e19c5>`);
        _push(ssrRenderComponent(_component_NuxtLink, { href: "/news" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ข่าวทั้งหมด`);
            } else {
              return [
                createTextVNode(" ข่าวทั้งหมด")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span><span class="dvdr breadcrumb-item-1" data-v-ca6e19c5><i class="fa-solid fa-circle-small" data-v-ca6e19c5></i></span><span data-v-ca6e19c5>${ssrInterpolate(unref(item).title)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="postbox__area pt-40 pb-120" data-v-ca6e19c5><div class="container" data-v-ca6e19c5><div class="row" data-v-ca6e19c5><div class="col-xxl-12" data-v-ca6e19c5>`);
      if (unref(item)) {
        _push(`<div class="postbox__wrapper" data-v-ca6e19c5><div class="postbox__main" data-v-ca6e19c5><div class="row" data-v-ca6e19c5><div class="col-lg-12" data-v-ca6e19c5><div class="postbox__main-wrapper" data-v-ca6e19c5><div class="postbox__details-content-wrapper" data-v-ca6e19c5><h3 data-v-ca6e19c5>${ssrInterpolate(unref(item).title)}</h3><hr data-v-ca6e19c5></div><div class="postbox__meta-wrapper d-flex align-items-center flex-wrap" data-v-ca6e19c5><div class="postbox__meta-item" data-v-ca6e19c5><div class="postbox__meta-content" data-v-ca6e19c5><span class="postbox__meta-type" data-v-ca6e19c5><i class="fa-regular fa-calendar" data-v-ca6e19c5></i> ${ssrInterpolate(unref(dayjs)(
          unref(item).created_news
        ).locale("th").format(
          "DD MMM BB"
        ))}</span></div></div><div class="postbox__meta-item" data-v-ca6e19c5><div class="postbox__meta-content" data-v-ca6e19c5><span class="postbox__meta-type" data-v-ca6e19c5><i class="fa-regular fa-tag" data-v-ca6e19c5></i> ${ssrInterpolate(unref(item).news_type ? unref(item).news_type.name : "")}</span></div></div></div><div class="postbox__thumb m-img mt-20" data-v-ca6e19c5>`);
        if (unref(newsGallery).length != 0) {
          _push(`<div class="news_gallery mt-2" data-v-ca6e19c5><div class="container" data-v-ca6e19c5><div class="row justify-content-center" data-v-ca6e19c5><div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 mx-auto" data-v-ca6e19c5><div class="portfolio__slider-6" data-v-ca6e19c5>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
          _push(`</div></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="postbox__details-content-wrapper mt-60" data-v-ca6e19c5><div data-v-ca6e19c5>${(unref(item).detail == null ? "" : unref(item).detail) ?? ""}</div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(ImagePopup, {
        ref_key: "image_popup",
        ref: image_popup,
        images: unref(newsGallery).map((item2) => item2.news_gallery_file)
      }, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca6e19c5"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-cdk09McQ.js.map
