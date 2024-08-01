import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  props: {
    item: {},
    team_p: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `team__item ${$props.team_p ? "mb-55" : ""}`
  }, _attrs))}><div class="team__thumb w-img fix transition-3"><div class="tp-thumb-overlay wow"></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/team-details" }, {
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
  _push(`<div class="team__action"><ul><li><a href="mailto:team@harry.com"><i class="far fa-envelope"></i></a></li><li><a href="#"><i class="far fa-share-alt"></i></a><div class="team__social"><ul><!--[-->`);
  ssrRenderList($props.item.social_links, (l, i) => {
    _push(`<li><a${ssrRenderAttr("href", l.link)}${ssrRenderAttr("target", l.target)}><i class="${ssrRenderClass(l.icon)}"></i></a></li>`);
  });
  _push(`<!--]--></ul></div></li></ul></div></div><div class="team__content"><h3 class="team__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/team-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><span class="team__designation">Founder-CO</span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/single-team/SingleTeam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleTeam as S
};
//# sourceMappingURL=SingleTeam-DtY4GY80.js.map
