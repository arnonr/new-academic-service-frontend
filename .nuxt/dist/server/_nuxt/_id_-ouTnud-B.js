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
import _sfc_main$2 from "./index-grid-DpdpZZQl.js";
import _sfc_main$1 from "./index-grid-Aehx8Xvr.js";
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
import "./GridItem-COh17Ezs.js";
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
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("department", async () => {
      let data = await $fetch(`${apiBase}/department/${route.params.id}`, {});
      return data;
    })), __temp = await __temp, __restore(), __temp);
    item.value = res.value.data;
    useHead({
      title: item.value.name_th
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4" data-v-a7dff145><div class="container" data-v-a7dff145><div class="row" data-v-a7dff145>`);
      if (unref(item) != null) {
        _push(`<div class="col-xxl-12" data-v-a7dff145><div class="breadcrumb__content p-relative z-index-1" data-v-a7dff145><div class="postbox__category" data-v-a7dff145>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: "/department"
          },
          style: { "padding": "10px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(item).name_th)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(item).name_th), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="breadcrumb__list" data-v-a7dff145><span class="breadcrumb-item-1" data-v-a7dff145>`);
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
        _push(`</span><span class="dvdr breadcrumb-item-1" data-v-a7dff145><i class="fa-solid fa-circle-small" data-v-a7dff145></i></span><span class="breadcrumb-item-1" data-v-a7dff145>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: {
          path: "/department"
        } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` หน่วยงาน`);
            } else {
              return [
                createTextVNode(" หน่วยงาน")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span><span class="dvdr breadcrumb-item-1" data-v-a7dff145><i class="fa-solid fa-circle-small" data-v-a7dff145></i></span><span data-v-a7dff145>${ssrInterpolate(unref(item).name_th)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="postbox__area pt-40 pb-120" data-v-a7dff145><div class="container" data-v-a7dff145><div class="row" data-v-a7dff145><div class="col-xxl-12" data-v-a7dff145>`);
      if (unref(item)) {
        _push(`<div class="postbox__wrapper" data-v-a7dff145><div class="postbox__main" data-v-a7dff145><div class="row" data-v-a7dff145><div class="col-lg-12" data-v-a7dff145><div class="postbox__main-wrapper" data-v-a7dff145><div class="postbox__details-content-wrapper" data-v-a7dff145><h3 class="text-color-primary" data-v-a7dff145>${ssrInterpolate(unref(item).name_th)}</h3><h3 data-v-a7dff145>${ssrInterpolate(unref(item).name_en)}</h3><hr data-v-a7dff145></div><div class="mt-30 pl-10 pt-15 pb-10 bg-grey" data-v-a7dff145><h4 class="section-bg-primary" data-v-a7dff145><i class="fa-solid fa-home" data-v-a7dff145></i><span class="ml-10" data-v-a7dff145>ข้อมูลหน่วยงาน</span></h4></div><div class="postbox__details-content-wrapper p-2" data-v-a7dff145><div data-v-a7dff145>${(unref(item).detail_th == null ? "" : unref(item).detail_th) ?? ""}</div></div><div class="mt-30 pl-10 pt-15 pb-10 bg-grey" data-v-a7dff145><h4 class="section-bg-primary" data-v-a7dff145><i class="fas fa-chalkboard-teacher" data-v-a7dff145></i><span class="ml-10" data-v-a7dff145>${ssrInterpolate("งานบริการวิชาการ")}</span></h4></div><div class="postbox__details-content-wrapper mt-0 p-2" data-v-a7dff145>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          props_item: {
            department_id: unref(route).params.id
          }
        }, null, _parent));
        _push(`</div><div class="mt-30 pl-10 pt-15 pb-10 bg-grey" data-v-a7dff145><h4 class="section-bg-primary" data-v-a7dff145><i class="fa-solid fa-newspaper" data-v-a7dff145></i><span class="ml-10" data-v-a7dff145>${ssrInterpolate("ข่าวประชาสัมพันธ์")}</span></h4></div><div class="postbox__details-content-wrapper mt-0 p-2" data-v-a7dff145>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          props_item: {
            department_id: unref(route).params.id
          }
        }, null, _parent));
        _push(`</div><div class="mt-30 pl-10 pt-15 pb-10 bg-grey" data-v-a7dff145><h4 class="section-bg-primary" data-v-a7dff145><i class="fa-solid fa-phone" data-v-a7dff145></i><span class="ml-10" data-v-a7dff145>${ssrInterpolate("ติดต่อหน่วยงาน")}</span></h4></div><div class="postbox__details-content-wrapper p-2" data-v-a7dff145><div data-v-a7dff145>${(unref(item).contact_th == null ? "" : unref(item).contact_th) ?? ""}</div></div></div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/department/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7dff145"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-ouTnud-B.js.map
