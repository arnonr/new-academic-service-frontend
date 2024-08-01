import { b as blogData } from "./blogData-CZIVutvo.js";
import { S as SingleBlogGridItem } from "./SingleBlogGridItem-D6ghcbk4.js";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { SingleBlogGridItem },
  mixins: [blogData]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_masonry_wall = resolveComponent("masonry-wall");
  const _component_single_blog_grid_item = resolveComponent("single-blog-grid-item");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `${$props.el_style ? "blog__area pt-110 pb-90" : "blog__masonary pb-120"}`
  }, _attrs))}>`);
  if ($props.el_style) {
    _push(`<div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Blog Masonary</h3></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container-fluid gx-xl-5 gx-3"><div class="container-fluid">`);
  _push(ssrRenderComponent(_component_masonry_wall, {
    items: _ctx.blogData.filter((b) => b.blog_masonry),
    "column-width": 330,
    gap: 25
  }, {
    default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_single_blog_grid_item, {
          item,
          masonry: true
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_single_blog_grid_item, {
            item,
            masonry: true
          }, null, 8, ["item"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/BlogMasonryArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogMasonryArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BlogMasonryArea as B
};
//# sourceMappingURL=BlogMasonryArea-DIV1Qh5N.js.map
