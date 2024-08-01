import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { B as BlogMasonryArea } from "./BlogMasonryArea-DIV1Qh5N.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { S as SingleBlogGridItem } from "./SingleBlogGridItem-D6ghcbk4.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { S as SingleBlogListItem } from "./SingleBlogListItem-B0KiUc0v.js";
import { S as SingleBlogPostBox } from "./SingleBlogPostBox-DG45UJaR.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import Footer from "./Footer-85SZoxrw.js";
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
import "swiper/vue";
import "swiper";
import "./VideoModal-yOQUjk9s.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$5 = {
  components: { SingleBlogGridItem },
  mixins: [blogData]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_grid_item = resolveComponent("single-blog-grid-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog__area pt-110 pb-90" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Blog Grid Bordered</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((b) => b.blog_grid).slice(0, 3), (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_single_blog_grid_item, {
      item,
      masonry: true
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-blog-post/BlogGridBordered.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BlogGridBordered = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: { SingleBlogGridItem },
  mixins: [blogData]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_grid_item = resolveComponent("single-blog-grid-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog__area pt-110 pb-90 grey-bg-4" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Blog Grid</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((b) => b.blog_grid).slice(0, 3), (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_single_blog_grid_item, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-blog-post/BlogGridPost.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BlogGridPost = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  components: { SingleBlogListItem },
  mixins: [blogData]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_list_item = resolveComponent("single-blog-list-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog__area pt-110 pb-90 grey-bg-4" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Blog List Classic</h3></div></div></div><div class="row justify-content-center"><div class="col-xl-8"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((b) => b.blog_grid).slice(0, 2), (item, i) => {
    _push(ssrRenderComponent(_component_single_blog_list_item, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-blog-post/BlogListClassic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BlogListClassic = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { SingleBlogPostBox },
  mixins: [blogData]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_post_box = resolveComponent("single-blog-post-box");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog__area pt-110 box-plr-55 pb-15" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Blog Standard</h3></div></div></div></div><div class="container-fluid"><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((b) => b.blog_post_box).slice(0, 2), (item, i) => {
    _push(`<div class="col-lg-6">`);
    _push(ssrRenderComponent(_component_single_blog_post_box, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-blog-post/BlogStandardPost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlogStandardPost = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    BlogStandardPost,
    BlogGridPost,
    BlogGridBordered,
    BlogListClassic,
    BlogMasonryArea
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_blog_standard_post = resolveComponent("blog-standard-post");
  const _component_blog_grid_post = resolveComponent("blog-grid-post");
  const _component_blog_grid_bordered = resolveComponent("blog-grid-bordered");
  const _component_blog_list_classic = resolveComponent("blog-list-classic");
  const _component_blog_masonry_area = resolveComponent("blog-masonry-area");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our blog post",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_blog_standard_post, null, null, _parent));
  _push(ssrRenderComponent(_component_blog_grid_post, null, null, _parent));
  _push(ssrRenderComponent(_component_blog_grid_bordered, null, null, _parent));
  _push(ssrRenderComponent(_component_blog_list_classic, null, null, _parent));
  _push(ssrRenderComponent(_component_blog_masonry_area, { el_style: true }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-blog-post/ElementsBlogPostMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsBlogPostMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsBlogPostMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Blog Post - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_blog_post_main = resolveComponent("elements-blog-post-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_blog_post_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-blog-post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsBlogPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsBlogPost as default
};
//# sourceMappingURL=elements-blog-post-Bs4jO9Mj.js.map
