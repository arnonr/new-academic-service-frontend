import { t as teamData } from "./teamData-RHm96bod.js";
import { S as SingleTeam } from "./SingleTeam-DtY4GY80.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { SingleTeam },
  mixins: [teamData]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_team = resolveComponent("single-team");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team__area pt-100 pb-40" }, _attrs))}><div class="container">`);
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-3 mb-50 text-center"><span class="tp-section-subtitle-3">Our Team</span><h3 class="tp-section-title-3">Team Grid Style</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><!--[-->`);
  ssrRenderList(_ctx.teamData.filter((t) => t.team_p), (item, i) => {
    _push(`<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">`);
    _push(ssrRenderComponent(_component_single_team, {
      item,
      team_p: true
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/TeamArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TeamArea as T
};
//# sourceMappingURL=TeamArea-Ep1GQSma.js.map
