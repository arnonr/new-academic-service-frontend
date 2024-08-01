import { _ as _export_sfc, c as _imports_0, a as __nuxt_component_0$1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { M as MobileMenus } from "./MobileMenus-CVq7gvQU.js";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
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
  _push(`</div></div><div class="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none"><div class="mean-bar"><nav><ul><li class="text-secondary">งานจัดการจอง</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/admin/booking",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- รายการจอง`);
      } else {
        return [
          createTextVNode("- รายการจอง")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr><li class="text-secondary">งานจัดการเครื่องมือ</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/admin/equipment",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- เครื่องมือ`);
      } else {
        return [
          createTextVNode("- เครื่องมือ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/equipment-department" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการหน่วยงาน`);
      } else {
        return [
          createTextVNode("- จัดการหน่วยงาน")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr><li class="text-secondary">งานประชาสัมพันธ์</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/banner",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการ Banner`);
      } else {
        return [
          createTextVNode("- จัดการ Banner")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/news",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการข่าว`);
      } else {
        return [
          createTextVNode("- จัดการข่าว")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/news-type",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการประเภทข่าว`);
      } else {
        return [
          createTextVNode("- จัดการประเภทข่าว")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr><li class="text-secondary">งานข้อมูลพื้นฐาน</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/user",
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/about-us",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- เกี่ยวกับเรา`);
      } else {
        return [
          createTextVNode("- เกี่ยวกับเรา")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/administrator",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- บุคลากร`);
      } else {
        return [
          createTextVNode("- บุคลากร")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/department",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- ฝ่ายงาน`);
      } else {
        return [
          createTextVNode("- ฝ่ายงาน")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/contact-us/1",
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
  _push(`</li></ul></nav></div></div><div class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block"><nav><ul><li class="text-secondary">งานจัดการจอง</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/admin/booking",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- รายการจอง`);
      } else {
        return [
          createTextVNode("- รายการจอง")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr><li class="text-secondary">งานจัดการเครื่องมือ</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/admin/equipment",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- เครื่องมือ`);
      } else {
        return [
          createTextVNode("- เครื่องมือ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/equipment-department" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการหน่วยงาน`);
      } else {
        return [
          createTextVNode("- จัดการหน่วยงาน")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr><li class="text-secondary">งานประชาสัมพันธ์</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/banner",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการ Banner`);
      } else {
        return [
          createTextVNode("- จัดการ Banner")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/news",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการข่าว`);
      } else {
        return [
          createTextVNode("- จัดการข่าว")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/news-type",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการประเภทข่าว`);
      } else {
        return [
          createTextVNode("- จัดการประเภทข่าว")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/direction",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- จัดการเนื้อหาอื่น ๆ`);
      } else {
        return [
          createTextVNode("- จัดการเนื้อหาอื่น ๆ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><hr><li class="text-secondary">งานข้อมูลพื้นฐาน</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/user",
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/about-us",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- เกี่ยวกับเรา`);
      } else {
        return [
          createTextVNode("- เกี่ยวกับเรา")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/administrator",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- บุคลากร`);
      } else {
        return [
          createTextVNode("- บุคลากร")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/department",
    onClick: $options.closeOffcanvas
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`- ฝ่ายงาน`);
      } else {
        return [
          createTextVNode("- ฝ่ายงาน")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/admin/contact-us/1",
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
  _push(`</li></ul></nav></div></div></div></div><div class="${ssrRenderClass(`body-overlay ${$data.isOffCanvasOpen ? "opened" : ""}`)}"></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/OffCanvasSix.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OffCanvasSix = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  OffCanvasSix as O
};
//# sourceMappingURL=OffCanvasSix-UeRQiqg5.js.map
