import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { M as MobileMenus } from "./MobileMenus-CVq7gvQU.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1 } from "./logo-MlJCTsTl.js";
const _imports_0 = "" + __buildAssetsURL("offcanvas-shape-2.B3hXvvU6.png");
const _sfc_main = {
  components: { MobileMenus, Social: __nuxt_component_0 },
  data() {
    return {
      isOffCanvasOpen: false
    };
  },
  methods: {
    openOffcanvas() {
      this.isOffCanvasOpen = true;
    },
    closeOffcanvas() {
      this.isOffCanvasOpen = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_mobile_menus = resolveComponent("mobile-menus");
  const _component_social = __nuxt_component_0;
  _push(`<!--[--><div class="${ssrRenderClass(`offcanvas__area offcanvas__area-3 ${$data.isOffCanvasOpen ? "offcanvas-opened" : ""}`)}"><div class="offcanvas__shape"><img class="offcanvas__shape-2"${ssrRenderAttr("src", _imports_0)} alt="shape"></div><div class="offcanvas__wrapper offcanvas__wrapper-3"><div class="offcanvas__close"><button class="offcanvas__close-btn-3 offcanvas-close-btn"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M21 1L1 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button></div><div class="offcanvas__content"><div class="offcanvas__top mb-10 d-flex justify-content-between align-items-center"><div class="offcanvas__logo logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none"><div class="mean-bar">`);
  _push(ssrRenderComponent(_component_mobile_menus, null, null, _parent));
  _push(`</div></div><div class="offcanvas__menu offcanvas__menu-3 offcanvas__menu-ff-space d-none d-lg-block"><p>Portfolio</p><nav><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Photojournalism`);
      } else {
        return [
          createTextVNode("Photojournalism")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Fashion `);
      } else {
        return [
          createTextVNode("Fashion ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-masonry" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Still Life`);
      } else {
        return [
          createTextVNode("Still Life")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Architectural `);
      } else {
        return [
          createTextVNode("Architectural ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div><div class="offcanvas__btn-3">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/services",
    class: "tp-btn-offcanvas-pink"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` See All Features <i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" See All Features "),
          createVNode("i", { class: "fa-regular fa-chevron-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="offcanvas__info mb-50"><div class="offcanvas__info-item"><h4 class="offcanvas__info-item-title">Information</h4><p><a href="tel:964-742-44-763">+964 742 44 763</a></p><p><a href="mailto:support@harry.com">support@harry.com</a></p></div><div class="offcanvas__info-item"><h4 class="offcanvas__info-item-title">Address</h4><p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">32 East Trusel Court North Tonawanda, NY 14120</a></p></div></div><div class="offcanvas__social-3">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div><div class="${ssrRenderClass(`body-overlay ${$data.isOffCanvasOpen ? "opened" : ""}`)}"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffCanvasFive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OffCanvasFive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  OffCanvasFive as O
};
//# sourceMappingURL=OffCanvasFive-Cfw6fMGb.js.map
