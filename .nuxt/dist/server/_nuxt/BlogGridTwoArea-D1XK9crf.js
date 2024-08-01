import { _ as _export_sfc, n as _sfc_main$1 } from "../server.mjs";
import { B as BlogSidebar } from "./BlogSidebar-QbVal1hh.js";
import { S as SingleBlogGridItem } from "./SingleBlogGridItem-D6ghcbk4.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  components: { BlogSidebar, SingleBlogGridItem, BlogPagination: _sfc_main$1 },
  props: {
    grid_sidebar: {
      type: Boolean,
      default: false
    },
    blogItems: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_grid_item = resolveComponent("single-blog-grid-item");
  const _component_blog_sidebar = resolveComponent("blog-sidebar");
  const _component_blog_pagination = resolveComponent("blog-pagination");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `blog__grid ${$props.grid_sidebar ? "grey-bg-4" : ""} pt-90 pb-100`
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper section-title-sm mb-60"><h3 class="section__title"> Our latest <span class="section__title-highlight">articles <svg width="220" height="27" viewBox="0 0 220 27" fill="none"><path class="wow" d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"></path></svg></span></h3></div></div></div><div class="row"><div class="col-lg-8"><div class="row"><!--[-->`);
  ssrRenderList($props.blogItems, (item, i) => {
    _push(`<div class="col-xl-6 col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_single_blog_grid_item, {
      item,
      masonry: $props.grid_sidebar ? false : true
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="col-lg-4">`);
  _push(ssrRenderComponent(_component_blog_sidebar, {
    style_2: $props.grid_sidebar ? false : true
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-xxl-12"><div class="tp-pagination tp-pagination-style-2 mt-20">`);
  _push(ssrRenderComponent(_component_blog_pagination, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/BlogGridTwoArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogGridTwoArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BlogGridTwoArea as B
};
//# sourceMappingURL=BlogGridTwoArea-D1XK9crf.js.map
