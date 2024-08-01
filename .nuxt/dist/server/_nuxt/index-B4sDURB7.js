import { L as Link } from "./components-BjLpLPVr.js";
import { mergeProps, withCtx, createVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$2 = {
  props: {
    active: Boolean,
    id: String,
    icon: String,
    title: String,
    subtitle: String
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = Link;
  _push(`<li${ssrRenderAttrs(mergeProps({
    class: "nav-item",
    role: "presentation"
  }, _attrs))}><div class="${ssrRenderClass(`features__list-item white-bg transition-3 nav-link ${$props.active ? "active" : ""}`)}"${ssrRenderAttr("id", `${$props.id}-tab`)} data-bs-toggle="tab"${ssrRenderAttr("data-bs-target", `#${$props.id}`)} role="tab"${ssrRenderAttr("aria-controls", `${$props.id}`)}${ssrRenderAttr("aria-selected", $props.active ? "true" : "false")} tabIndex="-1"><div class="features__list-item-wrapper d-sm-flex align-items-center justify-content-between white-bg transition-3"><div class="features__list-item-inner d-sm-flex align-items-center"><div class="features__list-icon mr-20"><span>${$props.icon ?? ""}</span></div><div class="features__list-content"><h3 class="features__list-title">${ssrInterpolate($props.title)}</h3><p>${ssrInterpolate($props.subtitle)}</p></div></div><div class="features__list-btn">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "service-details",
    class: "tp-link-btn-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><i class="fa-regular fa-angle-right"${_scopeId}></i></span>`);
      } else {
        return [
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-angle-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></li>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/StartUpFeatureList/NavItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + __buildAssetsURL("features-img-1.Cj4h0FDd.png");
const _imports_1 = "" + __buildAssetsURL("features-img-2.By2qt4n7.png");
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + __buildAssetsURL("features-shape-1.D5Kjnhe0.png");
const _sfc_main$1 = {
  props: {
    active: Boolean,
    id: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `tab-pane fade ${$props.active ? "show active" : ""}`,
    id: $props.id,
    role: "tabpanel",
    "aria-labelledby": `${$props.id}-tab`
  }, _attrs))}><div class="features__list-thumb-wrapper"><img class="features__list-thumb-1"${ssrRenderAttr("src", _imports_0$1)} alt="features__list-thumb"><img class="features__list-thumb-2"${ssrRenderAttr("src", _imports_1)} alt="features__list-thumb"><img class="features__list-thumb-3"${ssrRenderAttr("src", _imports_2)} alt="features__list-thumb"><img class="features__shape-7"${ssrRenderAttr("src", _imports_3)} alt="features__shape"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/StartUpFeatureList/TabContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/png;base64,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";
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { NavItem, TabContent }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_item = resolveComponent("nav-item");
  const _component_tab_content = resolveComponent("tab-content");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `features__list-area ${$props.el_style ? "pt-120 pb-120" : ""}`
  }, _attrs))}><div class="container"><div class="features__list-inner green-light-bg-4 pt-110 pb-135 pl-100 pr-100 p-relative z-index-1"><img class="features__shape-8"${ssrRenderAttr("src", _imports_0)} alt="features__shape"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-7 mb-85"><span class="section__title-pre-7">Product Features</span><h3 class="section__title-7"> Growing is hard. <span class="section__title-7-highlight"> Let us help! <svg width="240" height="22" viewBox="0 0 240 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="currentColor"></path></svg></span></h3></div></div></div><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="features__list-wrapper tp-tab"><ul class="nav nav-tabs" id="featuresTab" role="tablist">`);
  _push(ssrRenderComponent(_component_nav_item, {
    active: true,
    id: "customer",
    icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none"\r\n                          xmlns="http://www.w3.org/2000/svg">\r\n                          <path\r\n                            d="M23.6264 10.1916L22.4986 15.0314C21.5319 19.2112 19.6216 20.9017 16.0312 20.5543C15.4558 20.508 14.8344 20.4038 14.1669 20.2417L12.2336 19.7785C7.43486 18.6323 5.95035 16.2471 7.07811 11.4073L8.20588 6.55597C8.43604 5.5718 8.71223 4.71499 9.05746 4.00871C10.4039 1.20673 12.6939 0.454127 16.5375 1.36882L18.4594 1.82038C23.2811 2.95507 24.7541 5.35181 23.6264 10.1916Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                          <path opacity="0.4"\r\n                            d="M16.0317 20.5544C15.3182 21.0407 14.4206 21.4459 13.3273 21.8049L11.5091 22.4069C6.94049 23.889 4.53536 22.6501 3.05085 18.0534L1.57785 13.48C0.104844 8.88331 1.32467 6.45184 5.89328 4.9698L7.71152 4.36772C8.18334 4.2172 8.63214 4.08984 9.05793 4.00879C8.7127 4.71507 8.43651 5.57188 8.20635 6.55605L7.07859 11.4074C5.95082 16.2472 7.43533 18.6324 12.2341 19.7786L14.1674 20.2418C14.8349 20.4039 15.4563 20.5081 16.0317 20.5544Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                          <path d="M13.2471 7.97949L18.8284 9.40364" stroke="currentColor" stroke-width="1.5"\r\n                            stroke-linecap="round" stroke-linejoin="round" />\r\n                          <path d="M12.1191 12.4609L15.4564 13.3177" stroke="currentColor" stroke-width="1.5"\r\n                            stroke-linecap="round" stroke-linejoin="round" />\r\n                        </svg>',
    title: "Customer Discovery",
    subtitle: "Test if users can find what look..!"
  }, null, _parent));
  _push(ssrRenderComponent(_component_nav_item, {
    id: "ideation",
    icon: '<svg width="20" height="24" viewBox="0 0 20 24" fill="none"\r\n                        xmlns="http://www.w3.org/2000/svg">\r\n                        <path\r\n                          d="M9.67754 7.48193L8.50078 9.52752C8.23683 9.97842 8.45679 10.3523 8.97368 10.3523H10.3704C10.8983 10.3523 11.1072 10.7263 10.8433 11.1772L9.67754 13.2228"\r\n                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"\r\n                          stroke-linejoin="round" />\r\n                        <path\r\n                          d="M5.60806 18.6449V17.3691C3.07858 15.8405 1 12.8601 1 9.69272C1 4.24883 6.00398 -0.0183023 11.6568 1.21345C14.1423 1.76333 16.3199 3.413 17.4526 5.68953C19.7512 10.3086 17.3317 15.2136 13.7794 17.3582V18.6339C13.7794 18.9528 13.9004 19.6897 12.7236 19.6897H6.66384C5.45409 19.7007 5.60806 19.2278 5.60806 18.6449Z"\r\n                          stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                        <path opacity="0.4" d="M5.82812 23C8.34661 22.2852 11.0081 22.2852 13.5266 23"\r\n                          stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                      </svg>',
    title: "Ideation",
    subtitle: "Test if users can find what look..!"
  }, null, _parent));
  _push(ssrRenderComponent(_component_nav_item, {
    id: "multiple",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\r\n                          xmlns="http://www.w3.org/2000/svg">\r\n                          <path\r\n                            d="M13.0122 1.25636L20.1732 5.12657C21.0092 5.57864 21.0092 6.86871 20.1732 7.32079L13.0122 11.191C12.3742 11.5328 11.6262 11.5328 10.9882 11.191L3.8272 7.32079C2.9912 6.86871 2.9912 5.57864 3.8272 5.12657L10.9882 1.25636C11.6262 0.914547 12.3742 0.914547 13.0122 1.25636Z"\r\n                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"\r\n                            stroke-linejoin="round" />\r\n                          <path opacity="0.4"\r\n                            d="M2.771 9.93398L9.426 13.2749C10.251 13.6939 10.779 14.5429 10.779 15.4692V21.7762C10.779 22.6913 9.822 23.2757 9.008 22.8678L2.353 19.5268C1.528 19.1078 1 18.2588 1 17.3326V11.0256C1 10.1104 1.957 9.52601 2.771 9.93398Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                          <path\r\n                            d="M21.2287 9.93398L14.5737 13.2749C13.7487 13.6939 13.2207 14.5429 13.2207 15.4692V21.7762C13.2207 22.6913 14.1777 23.2757 14.9917 22.8678L21.6467 19.5268C22.4717 19.1078 22.9997 18.2588 22.9997 17.3326V11.0256C22.9997 10.1104 22.0427 9.52601 21.2287 9.93398Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                        </svg>',
    title: "Software Development",
    subtitle: "Test if users can find what look..!"
  }, null, _parent));
  _push(ssrRenderComponent(_component_nav_item, {
    id: "software",
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"\r\n                          xmlns="http://www.w3.org/2000/svg">\r\n                          <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round"\r\n                            stroke-linejoin="round" />\r\n                          <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                          <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z"\r\n                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"\r\n                            stroke-linejoin="round" />\r\n                          <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                          <path opacity="0.4"\r\n                            d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z"\r\n                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />\r\n                        </svg>',
    title: "Customer Discovery",
    subtitle: "Test if users can find what look..!"
  }, null, _parent));
  _push(`</ul></div></div><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="tab-content" id="myTabContent">`);
  _push(ssrRenderComponent(_component_tab_content, {
    active: true,
    id: "customer"
  }, null, _parent));
  _push(ssrRenderComponent(_component_tab_content, { id: "ideation" }, null, _parent));
  _push(ssrRenderComponent(_component_tab_content, { id: "multiple" }, null, _parent));
  _push(ssrRenderComponent(_component_tab_content, { id: "software" }, null, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/StartUpFeatureList/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StartUpFeatureList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  StartUpFeatureList as S,
  _imports_0 as _
};
//# sourceMappingURL=index-B4sDURB7.js.map
