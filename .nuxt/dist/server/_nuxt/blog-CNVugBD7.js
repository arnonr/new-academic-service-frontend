import { _ as _export_sfc, n as _sfc_main$3, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import Footer from "./Footer-85SZoxrw.js";
import { b as bg } from "./blog-breadcrumb-slider-3-BQp60m7l.js";
import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { B as BlogSidebar } from "./BlogSidebar-QbVal1hh.js";
import { S as SingleBlogPostBox } from "./SingleBlogPostBox-DG45UJaR.js";
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
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
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
const _sfc_main$2 = {
  data() {
    return { bg };
  },
  props: {
    title: String,
    subtitle: String
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area pt-130 pb-115 breadcrumb__style-10 black-bg p-relative z-index-1" }, _attrs))}><div class="breadcrumb__bg-4 breadcrumb__bg-overlay m-img include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row justify-content-center"><div class="col-xl-10"><div class="breadcrumb__content text-center"><h3 class="breadcrumb__title">${ssrInterpolate($props.title)}</h3><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>${ssrInterpolate($props.subtitle)}</span></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/BlogBreadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlogBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { BlogSidebar, SingleBlogPostBox, BlogPagination: _sfc_main$3 },
  mixins: [blogData]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_post_box = resolveComponent("single-blog-post-box");
  const _component_blog_pagination = resolveComponent("blog-pagination");
  const _component_blog_sidebar = resolveComponent("blog-sidebar");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "postbox__area grey-bg-4 pt-120 pb-120" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-8 col-lg-8"><div class="postbox__wrapper"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((b) => b.blog_post_box), (item, i) => {
    _push(ssrRenderComponent(_component_single_blog_post_box, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--><div class="tp-pagination tp-pagination-style-2 mt-20">`);
  _push(ssrRenderComponent(_component_blog_pagination, null, null, _parent));
  _push(`</div></div></div><div class="col-xxl-4 col-lg-4">`);
  _push(ssrRenderComponent(_component_blog_sidebar, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/BlogPostBoxArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogPostBoxArea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderOne, Footer, BlogBreadcrumb, BlogPostBoxArea, BackToTop },
  setup() {
    useHead({
      title: "Blog - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_blog_breadcrumb = resolveComponent("blog-breadcrumb");
  const _component_blog_post_box_area = resolveComponent("blog-post-box-area");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_blog_breadcrumb, {
    title: "Our Blog",
    subtitle: "Blog"
  }, null, _parent));
  _push(ssrRenderComponent(_component_blog_post_box_area, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blog as default
};
//# sourceMappingURL=blog-CNVugBD7.js.map
