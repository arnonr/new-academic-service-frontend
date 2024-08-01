import { l as useRoute, b as useRouter, g as useRuntimeConfig, a as __nuxt_component_0, k as __nuxt_component_0$1 } from "../server.mjs";
import { ref, withAsyncContext, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from "vue";
import "destr";
import "klona";
import { u as useFetch } from "./fetch-DNDFQiYI.js";
import "toastify-js";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import "sweetalert2";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { f as froala_data } from "./froalaData-D68B4sdN.js";
import { b as basic_data } from "./basicData-Bph90_S1.js";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css               */
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
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
  async setup(__props) {
    let __temp, __restore;
    dayjs.extend(buddhistEra);
    const configR = useRuntimeConfig();
    const { apiBase } = configR.public;
    const route = useRoute();
    useRouter();
    const item = ref({
      id: null,
      title_th: null,
      title_en: null,
      detail_th: "",
      detail_en: "",
      news_type_id: null,
      is_publish: {}
    });
    ref(null);
    ref({
      publishes: basic_data.data().publishes,
      news_types: [],
      departments: [],
      service_categories: []
    });
    const format = (date) => {
      const day = dayjs(date).locale("th").format("DD");
      const month = dayjs(date).locale("th").format("MMM");
      const year = date.getFullYear() + 543;
      return `${day} ${month} ${year}`;
    };
    const r = (Math.random() + 1).toString(36).substring(7);
    const uppy = new Uppy({
      meta: {
        news_id: route.params.id,
        secret_key: r,
        news_gallery_id: null,
        table_name: "news"
      },
      debug: true,
      restrictions: {
        allowedFileTypes: ["image/*", "video/*"]
      }
    }).use(XHRUpload, {
      endpoint: `${apiBase}/froala/uppy`,
      fieldName: "file"
    });
    uppy.on("upload-success", (file, response) => {
      uppy.setFileMeta(file.id, {
        url: response.body.link,
        news_id: response.body.news_id,
        news_gallery_id: response.body.news_gallery_id
      });
    });
    uppy.on("file-removed", (file, reason) => {
      if (file.meta.news_gallery_id != null) {
        $fetch(`${apiBase}/news-gallery/${file.meta.news_gallery_id}`, {
          method: "DELETE"
        }).then((res2) => {
          if (res2.msg == "success") {
            console.log("success");
          } else {
            console.log("error");
          }
        }).catch((error) => error.data);
      }
    });
    let config = {};
    const initFroala = () => {
      config["detail_th"] = froala_data.data().froala_config();
      config["detail_th"]["events"] = {
        keyup: function(inputEvent) {
          item.value.detail_th = this.html.get();
        },
        click: function(clickEvent) {
          item.value.detail_th = this.html.get();
        },
        "commands.after": function(cmd, param1, param2) {
          item.value.detail_th = this.html.get();
        },
        "paste.after": function(pasteEvent) {
          item.value.detail_th = this.html.get();
        },
        initialized: function() {
          this.html.insert(item.value.detail_th);
        }
      };
    };
    const { data: res } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${apiBase}/news/${route.params.id}`, {
      server: true
    }, "$fJ9nbSCi0M")), __temp = await __temp, __restore(), __temp);
    item.value = { ...res.value.data };
    item.value.news_file_old = res.value.data.news_file;
    item.value.news_file = null;
    item.value.news_type_id = {
      title: res.value.data.news_type.name,
      value: res.value.data.news_type_id
    };
    item.value.department_id = {
      value: res.value.data.department_id,
      title: res.value.data.department.name_th
    };
    let test = res.value.data.service_categories.map((x) => {
      return { value: x.service_category.id, title: x.service_category.name_th };
    });
    item.value.service_category_id = test;
    initFroala();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_client_only = __nuxt_component_0$1;
      _push(`<!--[--><section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"><div class="container"><div class="row"><div class="col-xxl-12"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span> จัดการข้อมูล </span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>`);
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
      _push(`</span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span> แก้ไขข้อมูล </span></div></div></div></div></div></section><section class="portfolio__area pt-40 pb-40"><div class="container"><div class="row"><div class="col-12"><h4>แบบฟอร์มแก้ไขข้อมูลข่าว</h4></div><div class="col-12"><div class=""><div class=""><div class="form-group row mt-10"><label for="" class="label label-required">หน่วยงาน : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">ประเภทข่าว : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">ประเภทการบริการวิชาการ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">รูปภาพปก : </label><div class="col-sm-10"><input class="form-control" type="file" id="formFile"></div><div class="col-sm-2"><a${ssrRenderAttr("href", unref(item).news_file_old)} target="_blank" class="btn btn-primary" style="${ssrRenderStyle({ "width": "100%" })}"> View Old File </a></div></div><div class="form-group row mt-10"><label for="" class="label label-required">หัวข้อ : </label><div><input type="text" class="form-control form-control-plaintext"${ssrRenderAttr("value", unref(item).title_th)}></div></div><div class="form-group row mt-10"><label for="" class="label label-required">เนื้อหาข่าว : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">วันที่ลงข้อมูล : </label><div>`);
      _push(ssrRenderComponent(unref(VueDatePicker), {
        modelValue: unref(item).created_news,
        "onUpdate:modelValue": ($event) => unref(item).created_news = $event,
        "enable-time-picker": false,
        locale: "th",
        "auto-apply": "",
        format
      }, {
        "year-overlay-value": withCtx(({ text }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(parseInt(text) + 543)}`);
          } else {
            return [
              createTextVNode(toDisplayString(parseInt(text) + 543), 1)
            ];
          }
        }),
        year: withCtx(({ year }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(year + 543)}`);
          } else {
            return [
              createTextVNode(toDisplayString(year + 543), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label">รูปภาพเพิ่มเติม : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="form-group row mt-10"><label for="" class="label label-required">สถานะ : </label><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div><div class="col-md-12 mt-20"><div class="contact__btn-2 text-center"><button class="btn btn-primary"> บันทึก </button></div></div></div></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/news/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-Abx3eqbc.js.map
