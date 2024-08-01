import { _ as _export_sfc, b as useRouter, s as storeToRefs, c as _imports_0, d as useCookie, a as __nuxt_component_0 } from "../server.mjs";
import { withCtx, createVNode, unref, createTextVNode, useSSRContext, resolveComponent } from "vue";
import Toastify from "toastify-js";
import { u as useAuthStore } from "./auth-Ds3h1m1J.js";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
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
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./fetch-DNDFQiYI.js";
const useToast = (text, type) => {
  let style = {
    background: "linear-gradient(to right, #00b09b, #96c93d)"
  };
  Toastify({
    text,
    duration: 3e3,
    //   destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    // `top` or `bottom`
    position: "center",
    // `left`, `center` or `right`
    stopOnFocus: true,
    // Prevents dismissing of toast on hover
    style,
    onClick: function() {
    }
    // Callback after click
  }).showToast();
};
const _sfc_main$1 = {
  components: {},
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
    },
    logout() {
      useRouter();
      storeToRefs(useAuthStore());
      const { logUserOut } = useAuthStore();
      logUserOut();
      this.isOffCanvasOpen = false;
      useToast("ออกจากระบบเสร็จสิ้น");
      (void 0).location.href = "/";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<!--[--><div class="${ssrRenderClass(`offcanvas__area offcanvas__area-1 ${$data.isOffCanvasOpen ? "offcanvas-opened" : ""}`)}"><div class="offcanvas__wrapper"><div class="offcanvas__shape"></div><div class="offcanvas__close"><button class="offcanvas__close-btn offcanvas-close-btn"><i class="fa-regular fa-xmark"></i></button></div><div class="offcanvas__content"><div class="offcanvas__top mb-40 d-flex justify-content-between align-items-center"><div class="offcanvas__logo logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" style="${ssrRenderStyle({ "width": "50%" })}"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo",
            style: { "width": "50%" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none"><div class="mean-bar"><nav>`);
  if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1 || ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 2) {
    _push(`<ul><li class="text-secondary">จัดการข้อมูล</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/department",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ข้อมูลหน่วยงาน`);
        } else {
          return [
            createTextVNode("- ข้อมูลหน่วยงาน")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/serve",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ข้อมูลงานบริการวิชาการ`);
        } else {
          return [
            createTextVNode("- ข้อมูลงานบริการวิชาการ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/news",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ข้อมูลข่าว`);
        } else {
          return [
            createTextVNode("- ข้อมูลข่าว")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr></ul>`);
  } else {
    _push(`<!---->`);
  }
  if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1) {
    _push(`<ul><li class="text-secondary"> จัดการข้อมูล ADMIN </li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/banner",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- Banner`);
        } else {
          return [
            createTextVNode("- Banner")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/admin/news-type",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ประเภทข่าว`);
        } else {
          return [
            createTextVNode("- ประเภทข่าว")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/admin/contact-us",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ติดต่อสอบถาม`);
        } else {
          return [
            createTextVNode("- ติดต่อสอบถาม")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/equipment",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ผู้ใช้งาน`);
        } else {
          return [
            createTextVNode("- ผู้ใช้งาน")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</nav><div><hr><a>- ออกจากระบบ</a><hr></div></div></div><div class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block"><nav>`);
  if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1 || ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 2) {
    _push(`<ul><li class="text-secondary">จัดการข้อมูล</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/department",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ข้อมูลหน่วยงาน`);
        } else {
          return [
            createTextVNode("- ข้อมูลหน่วยงาน")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/serve",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ข้อมูลงานบริการวิชาการ`);
        } else {
          return [
            createTextVNode("- ข้อมูลงานบริการวิชาการ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/news",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ข้อมูลข่าว`);
        } else {
          return [
            createTextVNode("- ข้อมูลข่าว")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr></ul>`);
  } else {
    _push(`<!---->`);
  }
  if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1) {
    _push(`<ul><li class="text-secondary">จัดการข้อมูล ADMIN</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/banner",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- Banner`);
        } else {
          return [
            createTextVNode("- Banner")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/admin/news-type",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ประเภทข่าว`);
        } else {
          return [
            createTextVNode("- ประเภทข่าว")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/admin/contact-us",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ติดต่อสอบถาม`);
        } else {
          return [
            createTextVNode("- ติดต่อสอบถาม")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><hr><li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/admin/equipment",
      onClick: $options.closeOffcanvas
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`- ผู้ใช้งาน`);
        } else {
          return [
            createTextVNode("- ผู้ใช้งาน")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</nav><div><a style="${ssrRenderStyle({ "font-weight": "700", "font-size": "20px", "color": "var(--tp-common-black)" })}">- ออกจากระบบ</a><hr></div></div></div></div></div><div class="${ssrRenderClass(`body-overlay ${$data.isOffCanvasOpen ? "opened" : ""}`)}"></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffCanvasAdminCustom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OffCanvasAdminCustom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { OffCanvasAdminCustom },
  methods: {
    handleAdminOpenSidebar() {
      this.$refs.off_canvas.openOffcanvas();
    }
  },
  mounted() {
    const result = (void 0).querySelector(".scroll-top");
    if (result) {
      (void 0).addEventListener("scroll", () => {
        if ((void 0).scrollY > 200) {
          result.style.display = "block";
        } else {
          result.style.display = "none";
        }
      });
      result.addEventListener("click", () => {
        (void 0).scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_off_canvas_admin_custom = resolveComponent("off-canvas-admin-custom");
  _push(`<!--[--><div class="back-to-top-wrapper scroll-top"><button id="back_to_top" type="button" class="back-to-top-btn"><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div><div class="admin-wrapper">`);
  if (("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 1 || ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value && ("useCookie" in _ctx ? _ctx.useCookie : unref(useCookie))("user").value.group_id == 2) {
    _push(`<button id="back_to_top" type="button" class="admin-btn"><i class="fa fa-list"></i></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_off_canvas_admin_custom, { ref: "off_canvas" }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footers/component/BackToTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackToTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BackToTop as default
};
//# sourceMappingURL=BackToTop-Dzk5hrJh.js.map
