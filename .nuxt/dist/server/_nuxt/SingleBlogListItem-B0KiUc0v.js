import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  props: {
    item: {}
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog__list-item" }, _attrs))}><div class="blog__item-10 white-bg transition-3 fix"><div class="row"><div class="col-xl-5 col-lg-12 col-md-6"><div class="blog__thumb-10 w-img fix">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.item.img)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.item.img,
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xl-7 col-lg-12 col-md-6"><div class="blog__content-10"><div class="blog__content-10-top"><div class="blog__meta-10-wrapper d-flex align-items-center"><div class="blog__tag-10"><a href="#">${ssrInterpolate($props.item.tag)}</a></div><div class="blog__meta-10 has-date"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.item.date)}</span></div></div><h3 class="blog__title-10">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>${ssrInterpolate($props.item.sm_desc)}...</p></div><div class="blog__content-10-bottom d-flex align-items-center flex-wrap"><div class="blog__meta-author-10 d-flex align-items-center"><div class="blog__meta-author-thumb-10"><a href="#"><img${ssrRenderAttr("src", $props.item.author_img)} alt=""></a></div><div class="blog__meta-author-content-10"><span>By <a href="#">${ssrInterpolate($props.item.author_name)}</a></span></div></div><div class="blog__meta-10 blog-meta-10-2"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>${ssrInterpolate($props.item.comments)}</span><span><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>${ssrInterpolate($props.item.watch)}</span></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/SingleBlogListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleBlogListItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleBlogListItem as S
};
//# sourceMappingURL=SingleBlogListItem-B0KiUc0v.js.map
