import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { t as teamData } from "./teamData-RHm96bod.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
const bg = "" + __buildAssetsURL("team-bg-1.b89jcq5M.png");
const _sfc_main = {
  mixins: [teamData, SalScrollAnimationMixin],
  data() {
    return { bg };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team__area team__border p-relative black-bg-12 pt-110 pb-100" }, _attrs))}><div class="team__bg-8" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-8 text-center mb-70"><span class="section__title-pre-8">Meet Our Team</span><h3 class="section__title-8"> Professional &amp; <span class="section__title-highlight-8">Friendly <svg width="246" height="26" viewBox="0 0 246 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 23C56.25 15.2537 162.375 -17.8439 243 23" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span></h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.teamData.filter((item) => item.home_architecture), (team, i) => {
    _push(`<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6"><div class="team__item-8 text-center black-bg-14 mb-30" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="team__thumb-8 mb-45">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/team-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", team.img)} alt=""${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: team.img,
              alt: ""
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="team__content-8"><h3 class="team__title-8">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/team-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(team.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(team.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3><span class="team__designation-8">${ssrInterpolate(team.title)}</span><div class="team__social-8 d-flex flex-wrap align-items-center justify-content-center"><!--[-->`);
    ssrRenderList(team.social_links, (l, i2) => {
      _push(`<a${ssrRenderAttr("href", l.link)}${ssrRenderAttr("target", l.target)}><i class="${ssrRenderClass(l.icon)}"></i></a>`);
    });
    _push(`<!--]--></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/ArchitectureTeams.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArchitectureTeams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ArchitectureTeams as A
};
//# sourceMappingURL=ArchitectureTeams-CMmnTgjs.js.map
