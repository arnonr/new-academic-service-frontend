import { _ as _export_sfc, f as menuData, a as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
const _sfc_main = {
  name: "MobileMenus",
  mixins: [menuData],
  setup() {
    const navTitle = ref("");
    const subMenu = ref("");
    const openMobileMenu = (menu) => {
      navTitle.value = navTitle.value === menu ? "" : menu;
    };
    const openSubMobileMenu = (s_menu) => {
      subMenu.value = subMenu.value === s_menu ? "" : s_menu;
    };
    return {
      navTitle,
      subMenu,
      openMobileMenu,
      openSubMobileMenu
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "mean-nav" }, _attrs))}><ul><!--[-->`);
  ssrRenderList(_ctx.menuData, (menu, i) => {
    _push(`<!--[-->`);
    if (!menu.hasDropdown && !menu.megaMenu && !menu.pages) {
      _push(`<li class="has-dropdown">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: menu.link,
        onClick: ($event) => _ctx.$emit("close:Offcanvas", false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(menu.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(menu.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    } else {
      _push(`<!---->`);
    }
    if (menu.hasDropdown && !menu.megaMenu && !menu.pages) {
      _push(`<li class="has-dropdown">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: menu.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(menu.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(menu.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<ul class="submenu" style="${ssrRenderStyle({
        display: $setup.navTitle === menu.title ? "block" : "none"
      })}"><!--[-->`);
      ssrRenderList(menu.submenus, (sub, i2) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          href: sub.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(sub.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(sub.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><a class="${ssrRenderClass(`mean-expand ${$setup.navTitle === menu.title ? "mean-clicked" : ""}`)}" style="${ssrRenderStyle({ "font-size": "18px", "cursor": "pointer" })}"><i class="fal fa-plus"></i></a></li>`);
    } else {
      _push(`<!---->`);
    }
    if (menu.megaMenu && !menu.pages) {
      _push(`<li class="has-dropdown has-mega-menu">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: menu.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(menu.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(menu.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<ul class="mega-menu" style="${ssrRenderStyle({
        display: $setup.navTitle === menu.title ? "block" : "none"
      })}"><!--[-->`);
      ssrRenderList(menu.mega_menus, (mega_m, i2) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "mega-menu-title",
          href: mega_m.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(mega_m.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(mega_m.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<ul style="${ssrRenderStyle({
          display: $setup.subMenu === mega_m.title ? "block" : "none"
        })}"><!--[-->`);
        ssrRenderList(mega_m.submenus, (sub_m, i3) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            href: sub_m.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub_m.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub_m.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul><a class="${ssrRenderClass(`mean-expand ${$setup.subMenu === mega_m.title ? "mean-clicked" : ""}`)}" style="${ssrRenderStyle({ "font-size": "18px", "cursor": "pointer" })}"><i class="fal fa-plus"></i></a></li>`);
      });
      _push(`<!--]--></ul><a class="${ssrRenderClass(`mean-expand ${$setup.navTitle === menu.title ? "mean-clicked" : ""}`)}" style="${ssrRenderStyle({ "font-size": "18px", "cursor": "pointer" })}"><i class="fal fa-plus"></i></a></li>`);
    } else {
      _push(`<!---->`);
    }
    if (menu.pages) {
      _push(`<li class="has-dropdown has-mega-menu">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: menu.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(menu.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(menu.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<ul class="mega-menu" style="${ssrRenderStyle({
        display: $setup.navTitle === menu.title ? "block" : "none"
      })}"><!--[-->`);
      ssrRenderList(menu.mega_menus, (mega_m, i2) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          href: mega_m.link,
          class: "mega-menu-title"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(mega_m.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(mega_m.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<ul style="${ssrRenderStyle({
          display: $setup.subMenu === mega_m.title ? "block" : "none"
        })}"><!--[-->`);
        ssrRenderList(mega_m.submenus, (sub_m, i3) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            href: sub_m.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub_m.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub_m.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul><a class="${ssrRenderClass(`mean-expand ${$setup.subMenu === mega_m.title ? "mean-clicked" : ""}`)}" style="${ssrRenderStyle({ "font-size": "18px", "cursor": "pointer" })}"><i class="fal fa-plus"></i></a></li>`);
      });
      _push(`<!--]--></ul><a class="${ssrRenderClass(`mean-expand ${$setup.navTitle === menu.title ? "mean-clicked" : ""}`)}" style="${ssrRenderStyle({ "font-size": "18px", "cursor": "pointer" })}"><i class="fal fa-plus"></i></a></li>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></ul></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/off-canvas/MobileMenus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MobileMenus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MobileMenus as M
};
//# sourceMappingURL=MobileMenus-CVq7gvQU.js.map
