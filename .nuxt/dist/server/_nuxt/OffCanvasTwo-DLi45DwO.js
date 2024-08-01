import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { M as MobileMenus } from "./MobileMenus-CVq7gvQU.js";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("logo-white-solid.XODATERk.svg");
const _imports_1 = "" + __buildAssetsURL("offcanvas-img-1.B6s5AFDA.png");
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
  _push(`<!--[--><div class="${ssrRenderClass(`offcanvas__area offcanvas__area-4 ${$data.isOffCanvasOpen ? "offcanvas-opened" : ""}`)}"><div class="offcanvas__wrapper"><div class="offcanvas__close"><button class="offcanvas__close-btn offcanvas__close-btn-4 offcanvas-close-btn"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="offcanvas__content"><div class="offcanvas__top mb-10 d-flex justify-content-between align-items-center"><div class="offcanvas__logo logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="offcanvas__inner mb-80 d-none d-lg-block"><h4>We help to create visual strategies.</h4><p>We want to hear from you. Let us know how we can help.</p><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none"><div class="mean-bar">`);
  _push(ssrRenderComponent(_component_mobile_menus, null, null, _parent));
  _push(`</div></div><div class="offcanvas__inner-btn mb-80"><a href="#" class="tp-btn-offcanvas-white w-100">Say Hello1!</a></div><div class="offcanvas__contact mb-40"><p class="offcanvas__contact-call"><a href="tel:+964-742-44-763">+964 742 44 763</a></p><p class="offcanvas__contact-mail"><a href="mailto:info@harry.com">info@harry.com</a></p></div><div class="offcanvas__social-4">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div></div><div class="${ssrRenderClass(`body-overlay ${$data.isOffCanvasOpen ? "opened" : ""}`)}"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffCanvasTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OffCanvasTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  OffCanvasTwo as O
};
//# sourceMappingURL=OffCanvasTwo-DLi45DwO.js.map
