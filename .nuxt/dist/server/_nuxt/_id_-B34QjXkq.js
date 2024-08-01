import { _ as _export_sfc, l as useRoute, i as useAsyncData, u as useHead, g as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
import { ref, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import buddhistEra from "dayjs/plugin/buddhistEra.js";
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
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    dayjs.extend(buddhistEra);
    const route = useRoute();
    const config = useRuntimeConfig();
    const { apiBase } = config.public;
    const item = ref(null);
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("serve", async () => {
      let data = await $fetch(`${apiBase}/serve/${route.params.id}`, {
        params: {}
      });
      return data;
    })), __temp = await __temp, __restore(), __temp);
    item.value = res.value.data;
    useHead({
      title: item.value.title
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4" data-v-fc30d475><div class="container" data-v-fc30d475><div class="row" data-v-fc30d475>`);
      if (unref(item) != null) {
        _push(`<div class="col-xxl-12" data-v-fc30d475><div class="breadcrumb__content p-relative z-index-1" data-v-fc30d475><div class="postbox__category" data-v-fc30d475>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: "/serve",
            query: {
              service_category_id: unref(item).service_category_id
            }
          },
          style: { "padding": "10px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(item).service_category.name_th)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(item).service_category.name_th), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="breadcrumb__list" data-v-fc30d475><span class="breadcrumb-item-1" data-v-fc30d475>`);
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
        _push(`</span><span class="dvdr breadcrumb-item-1" data-v-fc30d475><i class="fa-solid fa-circle-small" data-v-fc30d475></i></span><span class="breadcrumb-item-1" data-v-fc30d475>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: {
          path: "/serve"
        } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` งานบริการวิชาการ`);
            } else {
              return [
                createTextVNode(" งานบริการวิชาการ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span><span class="dvdr breadcrumb-item-1" data-v-fc30d475><i class="fa-solid fa-circle-small" data-v-fc30d475></i></span><span data-v-fc30d475>${ssrInterpolate(unref(item).title_th)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="postbox__area pt-40 pb-120" data-v-fc30d475><div class="container" data-v-fc30d475><div class="row" data-v-fc30d475><div class="col-xxl-12" data-v-fc30d475>`);
      if (unref(item)) {
        _push(`<div class="postbox__wrapper" data-v-fc30d475><div class="postbox__main" data-v-fc30d475><div class="row" data-v-fc30d475><div class="col-lg-12" data-v-fc30d475><div class="postbox__main-wrapper" data-v-fc30d475><div class="postbox__details-content-wrapper" data-v-fc30d475><h3 data-v-fc30d475>${ssrInterpolate(unref(item).title_th)}</h3><hr data-v-fc30d475></div><div class="postbox__meta-wrapper d-flex align-items-center flex-wrap" data-v-fc30d475><div class="postbox__meta-item" data-v-fc30d475><div class="postbox__meta-content" data-v-fc30d475><span class="postbox__meta-type" data-v-fc30d475><i class="fa-regular fa-home" data-v-fc30d475></i> ${ssrInterpolate(unref(item).department.name_th)}</span></div></div><div class="postbox__meta-item" data-v-fc30d475><div class="postbox__meta-content" data-v-fc30d475><span class="postbox__meta-type" data-v-fc30d475><i class="fa-regular fa-tag" data-v-fc30d475></i> ${ssrInterpolate(unref(item).service_category ? unref(item).service_category.name_th : "")}</span></div></div></div><div class="mt-10 pl-10 pt-15 pb-10 bg-grey" data-v-fc30d475><h4 class="section-bg-primary" data-v-fc30d475><i class="fas fa-info-circle" data-v-fc30d475></i><span class="ml-10" data-v-fc30d475> รายละเอียด </span></h4></div><div class="postbox__details-content-wrapper p-2" data-v-fc30d475><div data-v-fc30d475>${(unref(item).detail_th == null ? "" : unref(item).detail_th) ?? ""}</div></div><div class="mt-10 pl-10 pt-15 pb-10 bg-grey" data-v-fc30d475><h4 class="section-bg-primary" data-v-fc30d475><i class="fas fa-dollar-sign" data-v-fc30d475></i><span class="ml-10" data-v-fc30d475>อัตราค่าใช้บริการ/อบรม </span></h4></div><div class="postbox__details-content-wrapper p-2" data-v-fc30d475><div data-v-fc30d475>${(unref(item).rates_th == null ? "" : unref(item).rates_th) ?? ""}</div></div><div class="mt-10 pl-10 pt-15 pb-10 bg-grey" data-v-fc30d475><h4 class="section-bg-primary" data-v-fc30d475><i class="fas fa-map-marker-alt" data-v-fc30d475></i><span class="ml-10" data-v-fc30d475> สถานที่ </span></h4></div><div class="postbox__details-content-wrapper p-2" data-v-fc30d475><div data-v-fc30d475>${(unref(item).location_th == null ? "" : unref(item).location_th) ?? ""}</div></div><div class="mt-10 pl-10 pt-15 pb-10 bg-grey" data-v-fc30d475><h4 class="section-bg-primary" data-v-fc30d475><i class="fas fa-phone" data-v-fc30d475></i><span class="ml-10" data-v-fc30d475>ข้อมูลติดต่อ</span></h4></div><div class="postbox__details-content-wrapper p-2" data-v-fc30d475><div data-v-fc30d475>${(unref(item).contact_th == null ? "" : unref(item).contact_th) ?? ""}</div></div></div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/serve/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc30d475"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-B34QjXkq.js.map
