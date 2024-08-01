import { _ as _export_sfc, u as useHead } from "../server.mjs";
import { b as blogData } from "./blogData-CZIVutvo.js";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { S as SliderBreadcrumb } from "./SliderBreadcrumb-CxQ33HpC.js";
import { B as BlogGridTwoArea } from "./BlogGridTwoArea-D1XK9crf.js";
import Footer from "./Footer-85SZoxrw.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "swiper/vue";
import "swiper";
import "./blog-breadcrumb-slider-3-BQp60m7l.js";
import "./BlogSidebar-QbVal1hh.js";
import "./SingleBlogGridItem-D6ghcbk4.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main = {
  components: { HeaderOne, Footer, SliderBreadcrumb, BlogGridTwoArea, BackToTop },
  mixins: [blogData],
  setup() {
    useHead({
      title: "Blog Grid Sidebar - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_slider_breadcrumb = resolveComponent("slider-breadcrumb");
  const _component_blog_grid_two_area = resolveComponent("blog-grid-two-area");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_slider_breadcrumb, null, null, _parent));
  _push(ssrRenderComponent(_component_blog_grid_two_area, {
    blogItems: _ctx.blogData.filter((b) => b.blog_grid).filter((b) => !b.blog_quote).slice(0, 6),
    grid_sidebar: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-grid-sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogGridSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blogGridSidebar as default
};
//# sourceMappingURL=blog-grid-sidebar-DAnFOE8S.js.map
