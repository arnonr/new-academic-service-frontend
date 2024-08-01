import { _ as _export_sfc, i as useAsyncData, u as useHead, g as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
import { ref, withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    dayjs.extend(buddhistEra);
    const item = ref(null);
    const config = useRuntimeConfig();
    const { apiBase } = config.public;
    const { data: res } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("contact", async () => {
      try {
        let data = await $fetch(`${apiBase}/contact/1`, {
          params: {}
        });
        return data;
      } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
      }
    })), __temp = await __temp, __restore(), __temp);
    if (res.value) {
      item.value = res.value.data;
    } else {
      console.error("Error:", error.value);
    }
    useHead({
      title: item.value.title
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4" data-v-406f4d4f><div class="container" data-v-406f4d4f><div class="row" data-v-406f4d4f>`);
      if (unref(item) != null) {
        _push(`<div class="col-xxl-12" data-v-406f4d4f><div class="breadcrumb__content p-relative z-index-1" data-v-406f4d4f><div class="breadcrumb__list" data-v-406f4d4f><span data-v-406f4d4f>`);
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
        _push(`</span><span class="dvdr" data-v-406f4d4f><i class="fa-solid fa-circle-small" data-v-406f4d4f></i></span><span data-v-406f4d4f>${ssrInterpolate(unref(item).title)}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="postbox__area pt-40 pb-120" data-v-406f4d4f><div class="container" data-v-406f4d4f><div class="row" data-v-406f4d4f><div class="col-xxl-12" data-v-406f4d4f>`);
      if (unref(item)) {
        _push(`<div class="postbox__wrapper" data-v-406f4d4f><div class="postbox__main" data-v-406f4d4f><div class="row" data-v-406f4d4f><div class="col-sm-12 col-md-12 col-12" style="${ssrRenderStyle({ "border-left": "0.7em solid #f60" })}" data-v-406f4d4f><h2 data-v-406f4d4f>${ssrInterpolate(unref(item).title)}</h2><h2 style="${ssrRenderStyle({ "color": "#f60" })}" data-v-406f4d4f><span data-v-406f4d4f>งานบริการวิชาการ</span><br data-v-406f4d4f><span data-v-406f4d4f>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</span></h2></div></div><div class="row" data-v-406f4d4f><div class="col-lg-12" data-v-406f4d4f><div class="postbox__main-wrapper" data-v-406f4d4f><div class="postbox__details-content-wrapper mt-40" data-v-406f4d4f><div data-v-406f4d4f>${(unref(item).detail == null ? "" : unref(item).detail) ?? ""}</div></div></div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-406f4d4f"]]);
export {
  index as default
};
//# sourceMappingURL=index-no9Lhq9b.js.map
