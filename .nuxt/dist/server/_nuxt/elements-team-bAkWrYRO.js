import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { T as TeamBreadcrumb } from "./CommonBreadcrumb-NhK14ET7.js";
import { A as ArchitectureTeams } from "./ArchitectureTeams-CMmnTgjs.js";
import { C as CreativeTeam } from "./CreativeTeam-CncHE0o7.js";
import { H as HomeTeams } from "./HomeTeams-C-PAF4jB.js";
import { L as LawyerTeams } from "./LawyerTeams-jtu5KIxZ.js";
import { P as PolityTeams } from "./PolityTeams-DeA80MHc.js";
import { T as TeamArea } from "./TeamArea-Ep1GQSma.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import Footer from "./Footer-85SZoxrw.js";
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
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./teamData-RHm96bod.js";
import "./SalScrollAnimationMixin-DP9bLDx2.js";
import "sal.js";
import "swiper/vue";
import "swiper";
import "./SingleTeam-DtY4GY80.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
const _sfc_main$1 = {
  components: {
    CommonBreadcrumb: TeamBreadcrumb,
    HomeTeams,
    TeamArea,
    LawyerTeams,
    CreativeTeam,
    ArchitectureTeams,
    PolityTeams
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common_breadcrumb = resolveComponent("common-breadcrumb");
  const _component_home_teams = resolveComponent("home-teams");
  const _component_team_area = resolveComponent("team-area");
  const _component_lawyer_teams = resolveComponent("lawyer-teams");
  const _component_creative_team = resolveComponent("creative-team");
  const _component_architecture_teams = resolveComponent("architecture-teams");
  const _component_polity_teams = resolveComponent("polity-teams");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_common_breadcrumb, {
    title: "Have a look to our Teams",
    subtitle: "Elements"
  }, null, _parent));
  _push(ssrRenderComponent(_component_home_teams, {
    style_2: true,
    el_style: true
  }, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_team_area, { el_style: true }, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_lawyer_teams, { el_style: true }, null, _parent));
  _push(`<div class="tp-separator"></div>`);
  _push(ssrRenderComponent(_component_creative_team, { el_style: true }, null, _parent));
  _push(ssrRenderComponent(_component_architecture_teams, null, null, _parent));
  _push(ssrRenderComponent(_component_polity_teams, { el_style: true }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("elements/elements-team/ElementsTeamMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ElementsTeamMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ElementsTeamMain,
    Footer,
    BackToTop
  },
  setup() {
    useHead({
      title: "Element Team - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_elements_team_main = resolveComponent("elements-team-main");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_elements_team_main, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/elements-team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elementsTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  elementsTeam as default
};
//# sourceMappingURL=elements-team-bAkWrYRO.js.map
