import { _ as _export_sfc, l as useRoute, b as useRouter, u as useHead, g as useRuntimeConfig, a as __nuxt_component_0, k as __nuxt_component_0$1 } from "../server.mjs";
import { ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import "toastify-js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import "swiper";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import "sweetalert2";
import { b as basic_data } from "./basicData-Bph90_S1.js";
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
import "@yeger/vue-masonry-wall";
import "vue-select";
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    dayjs.extend(buddhistEra);
    const configR = useRuntimeConfig();
    configR.public;
    useRoute();
    useRouter();
    ref([]);
    ref(null);
    const item = ref(null);
    useHead({
      title: "ข่าวประชาสัมพันธ์"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4" data-v-a75907b7><div class="container" data-v-a75907b7><div class="row" data-v-a75907b7>`);
      if (unref(item) != null) {
        _push(`<div class="col-xxl-12" data-v-a75907b7><div class="breadcrumb__content p-relative z-index-1" data-v-a75907b7><div class="breadcrumb__list" data-v-a75907b7><span data-v-a75907b7> จัดการข้อมูล </span><span class="dvdr" data-v-a75907b7><i class="fa-solid fa-circle-small" data-v-a75907b7></i></span><span data-v-a75907b7>`);
        _push(ssrRenderComponent(_component_NuxtLink, { href: "/admin/news" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` รายการข่าว `);
            } else {
              return [
                createTextVNode(" รายการข่าว ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="postbox__area pt-40 pb-120" data-v-a75907b7><div class="container" data-v-a75907b7><div class="row" data-v-a75907b7><div class="col-xxl-12" data-v-a75907b7>`);
      if (unref(item) != null) {
        _push(`<div class="postbox__wrapper" data-v-a75907b7><div class="postbox__main" data-v-a75907b7><div class="row" data-v-a75907b7><div class="col-lg-12" data-v-a75907b7><div class="postbox__main-wrapper" data-v-a75907b7><div class="postbox__details-content-wrapper" data-v-a75907b7><div class="text-end" data-v-a75907b7>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            name: "admin-news-edit-id",
            params: { id: unref(item).id }
          },
          class: "btn btn-warning"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`แก้ไขข้อมูล`);
            } else {
              return [
                createTextVNode("แก้ไขข้อมูล")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="btn btn-danger ml-5" data-v-a75907b7> ลบ </button></div></div><div class="postbox__details-content-wrapper mt-20" data-v-a75907b7><div class="row" data-v-a75907b7><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>หัวข้อข่าว : </span><span data-v-a75907b7>${ssrInterpolate(unref(item).title_th)}</span><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>หน่วยงาน : </span><span data-v-a75907b7>${ssrInterpolate(unref(item).department.name_th)}</span><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>ประเภทข่าว : </span><span data-v-a75907b7>${ssrInterpolate(unref(item).news_type.name)}</span><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>ประเภทการบริการวิชาการ : </span><!--[-->`);
        ssrRenderList(unref(item).service_categories, (sc, idx) => {
          _push(`<span data-v-a75907b7>${ssrInterpolate(sc.service_category.name_th + ", ")}</span>`);
        });
        _push(`<!--]--><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>รูปภาพปกข่าว : </span><div data-v-a75907b7><img${ssrRenderAttr(
          "src",
          unref(item).news_file
        )} class="mt-20" style="${ssrRenderStyle({ "max-height": "400px" })}" data-v-a75907b7></div><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>เนื้อหาข่าว : </span><div data-v-a75907b7>${unref(item).detail_th ?? ""}</div><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>วันที่ลงข้อมูล : </span><span data-v-a75907b7>${ssrInterpolate(unref(dayjs)(unref(item).created_news).locale("th").format(
          "DD MMM BBBB"
        ))}</span><hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>สถานะ : </span>`);
        if (unref(item).is_publish != null) {
          _push(`<span class="${ssrRenderClass(
            "badge rounded-pill bg-" + unref(basic_data).data().publishes[unref(item).is_publish].color
          )}" data-v-a75907b7>${ssrInterpolate(unref(basic_data).data().publishes[unref(item).is_publish].name_th)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<hr data-v-a75907b7></div><div class="col-12" data-v-a75907b7><span class="fw-bold" data-v-a75907b7>แกลลอรี่ : </span><div class="mx-auto" data-v-a75907b7>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div><hr data-v-a75907b7></div></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a75907b7"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-DSdFmJlL.js.map
