import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { t as teamData } from "./teamData-RHm96bod.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
const _sfc_main$1 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    item: {}
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "team__item-4 p-relative z-index-1 fix mb-40",
    "data-sal": "slide-up",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="team__thumb-4 w-img fix"><img${ssrRenderAttr("src", $props.item.img)} alt=""></div><div class="team__content-4 fix"><h3 class="team__title-4">`);
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
  _push(`</h3><span class="team__designation-4">${ssrInterpolate($props.item.title)}</span><p>${ssrInterpolate($props.item.sm_desc)}</p><div class="team__social-4"><!--[-->`);
  ssrRenderList($props.item.social_links, (l, i) => {
    _push(`<a${ssrRenderAttr("href", l.link)}${ssrRenderAttr("target", l.target)}><i class="${ssrRenderClass(l.icon)}"></i></a>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/single-team/LawyerSingleTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LawyerSingleTeam = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  mixins: [teamData],
  components: { LawyerSingleTeam }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_LawyerSingleTeam = resolveComponent("LawyerSingleTeam");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team__area pt-120 pb-80" }, _attrs))}><div class="container">`);
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-50 text-center"><span class="tp-section-subtitle-3">Our Team</span><h3 class="tp-section-title-3">Team Overlay Style</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$props.el_style) {
    _push(`<div class="row align-items-end"><div class="col-xxl-6 col-xl-6 col-lg-6 col-md-7"><div class="section__title-wrapper-4 mb-60"><span class="section__title-pre-4">Team member</span><h3 class="section__title-4">Meet our most talented attorneys</h3></div></div><div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5"><div class="team__more-4 mb-70 text-md-end">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/team",
      class: "tp-btn-border-brown"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`See all Attorneys `);
        } else {
          return [
            createTextVNode("See all Attorneys ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><!--[-->`);
  ssrRenderList(_ctx.teamData.filter((team) => team.home_lawyer), (item) => {
    _push(`<div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">`);
    _push(ssrRenderComponent(_component_LawyerSingleTeam, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/LawyerTeams.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LawyerTeams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LawyerTeams as L
};
//# sourceMappingURL=LawyerTeams-jtu5KIxZ.js.map
