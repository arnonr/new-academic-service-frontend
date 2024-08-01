import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, n as _sfc_main$3, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import { b as blogData } from "./blogData-CZIVutvo.js";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
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
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./user-6-DCzgwACr.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$2 = {
  data() {
    return {
      searchVal: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.searchVal);
      this.searchVal = "";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "search__result-area grey-bg-4 pt-120 pb-80" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="search__result-wrapper"><div class="search__result-content text-center mb-40"><h3 class="search__result-title"> Search results for: <span> “hello”</span></h3><p>Harry found 46 results for your search query.</p></div><div class="search__result-form"><form><div class="search__result-input-box"><div class="search__result-input"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.0031 19.0002L17.2031 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><input${ssrRenderAttr("value", $data.searchVal)} type="text" placeholder="Search for articles..."></div><button type="submit" class="tp-btn">Search</button></div><div class="search__result-tags"><a href="#">Techology</a><a href="#">Business</a><a href="#">Travel</a><a href="#">Personality</a><a href="#">Nature</a><a href="#">Photographer</a><a href="#">Agency</a><a href="#">Life Style</a></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/SearchArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { BlogPagination: _sfc_main$3 },
  mixins: [blogData],
  data() {
    return {
      search_items: []
    };
  },
  created() {
    this.search_items = blogData.data().blogData.filter((b) => b.blog_grid).filter((b) => !b.blog_quote).slice(0, 6);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_blog_pagination = resolveComponent("blog-pagination");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "search__result-item-area pt-100 pb-120" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($data.search_items, (item, i) => {
    _push(`<div class="col-md-6"><div class="search__blog-item mb-30"><div class="search__blog-content"><div class="search__blog-meta-wrapper d-flex flex-wrap align-items-center"><div class="search__blog-tag mr-15"><a href="#">${ssrInterpolate(item.tag)}</a></div><div class="search__blog-meta"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(item.date)}</span></div></div><h3 class="search__blog-title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${_scopeId}>${item.title ?? ""}</a>`);
        } else {
          return [
            createVNode("a", {
              innerHTML: item.title
            }, null, 8, ["innerHTML"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3><p>Everybody needs to write content for personal or professional purposes. It can be anything.!</p><div class="search__blog-bottom d-flex flex-wrap align-items-center mb-20"><div class="search__blog-meta-author d-flex align-items-center mr-45"><div class="search__blog-meta-author-thumb"><a href="#"><img${ssrRenderAttr("src", item.author_img)} alt=""></a></div><div class="search__blog-meta-author-content"><span>By <a href="#">${ssrInterpolate(item.author_name)}</a></span></div></div><div class="search__blog-meta"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="#7A7E83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(item.comments)}</span><span><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="#7A7E83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="#7A7E83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(item.watch)}</span></div></div><div class="search__blog-btn">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/blog-details",
      class: "tp-btn-border"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read More <span${_scopeId}><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.1991H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
        } else {
          return [
            createTextVNode(" Read More "),
            createVNode("span", null, [
              (openBlock(), createBlock("svg", {
                width: "26",
                height: "9",
                viewBox: "0 0 26 9",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M21.6934 1L25 4.20003L21.6934 7.4",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M0.999999 4.1991H25",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="row"><div class="col-xxl-12"><div class="tp-pagination tp-pagination-style-2 mt-20">`);
  _push(ssrRenderComponent(_component_blog_pagination, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/SearchItems.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    SearchArea: __nuxt_component_0,
    SearchItems: __nuxt_component_1,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Search - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_search_area = __nuxt_component_0;
  const _component_search_items = __nuxt_component_1;
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_search_area, null, null, _parent));
  _push(ssrRenderComponent(_component_search_items, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  search as default
};
//# sourceMappingURL=search-CaJCqJ_2.js.map
