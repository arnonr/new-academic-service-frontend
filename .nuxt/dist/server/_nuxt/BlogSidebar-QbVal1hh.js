import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("sidebar-author.JEUfYYXR.jpg");
const _imports_1 = "" + __buildAssetsURL("blog-sm-1.Dn9Mk9wB.jpg");
const _imports_2 = "" + __buildAssetsURL("blog-sm-2.B1fCT0Ze.jpg");
const _imports_3 = "" + __buildAssetsURL("blog-sm-3.CtZZf_SZ.jpg");
const _sfc_main = {
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `sidebar__wrapper ${$props.style_2 ? "sidebar__widget-style-2" : ""} pl-40`
  }, _attrs))}><div class="sidebar__widget mb-20"><div class="sidebar__widget-content"><div class="sidebar__search"><form action="#"><div class="sidebar__search-input"><input type="text" placeholder="Enter your keywords..."><button type="submit"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></form></div></div></div><div class="sidebar__widget mb-45"><div class="sidebar__widget-content"><div class="sidebar__author"><div class="sidebar__author-thumb"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="sidebar__author-content"><h3 class="sidebar__author-title">Colene Landin</h3><p>Lorem ipsum dolor ametare elit consectetur adipiscing Aenean pellentesque.</p><div class="sidebar__author-social d-flex align-items-center justify-content-center"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div></div></div></div></div><div class="sidebar__widget mb-45"><h3 class="sidebar__widget-title">Category</h3><div class="sidebar__widget-content"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Business <span${_scopeId}>10</span>`);
      } else {
        return [
          createTextVNode("Business "),
          createVNode("span", null, "10")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cleaning <span${_scopeId}>08</span>`);
      } else {
        return [
          createTextVNode("Cleaning "),
          createVNode("span", null, "08")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Consultant <span${_scopeId}>24</span>`);
      } else {
        return [
          createTextVNode("Consultant "),
          createVNode("span", null, "24")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Creative <span${_scopeId}>37</span>`);
      } else {
        return [
          createTextVNode("Creative "),
          createVNode("span", null, "37")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Technology <span${_scopeId}>103</span>`);
      } else {
        return [
          createTextVNode("Technology "),
          createVNode("span", null, "103")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="sidebar__widget mb-45"><h3 class="sidebar__widget-title">Recent Post</h3><div class="sidebar__widget-content"><div class="sidebar__post"><div class="rc__post d-flex align-items-center"><div class="rc__post-thumb">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rc__post-content"><h3 class="rc__post-title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Business meeting 2021 in San Francisco`);
      } else {
        return [
          createTextVNode("Business meeting 2021 in San Francisco")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="rc__meta"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>July 21, 2022 </span></div></div></div><div class="rc__post d-flex align-items-center"><div class="rc__post-thumb">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rc__post-content"><h3 class="rc__post-title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Developing privacy user-centric apps`);
      } else {
        return [
          createTextVNode("Developing privacy user-centric apps")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="rc__meta"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>July 21, 2022 </span></div></div></div><div class="rc__post d-flex align-items-center"><div class="rc__post-thumb">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rc__post-content"><h3 class="rc__post-title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Starting and Growing Web Design in 2022`);
      } else {
        return [
          createTextVNode("Starting and Growing Web Design in 2022")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="rc__meta"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>July 21, 2022 </span></div></div></div></div></div></div><div class="sidebar__widget mb-40"><h3 class="sidebar__widget-title">Tags</h3><div class="sidebar__widget-content"><div class="tagcloud"><a href="#">Techology</a><a href="#">Food</a><a href="#">Personality</a><a href="#">Life Style</a><a href="#">Travel</a><a href="#">Nature</a></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/sidebar/BlogSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BlogSidebar as B
};
//# sourceMappingURL=BlogSidebar-QbVal1hh.js.map
