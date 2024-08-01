import { _ as _export_sfc, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { b as bg } from "./breadcrumb-bg-5-DfSaIy-t.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
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
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const bg_1 = "" + __buildAssetsURL("services-overlay-1.DaTTD6O4.jpg");
const bg_2 = "" + __buildAssetsURL("services-overlay-2.Bg7VTRBE.jpg");
const bg_3 = "" + __buildAssetsURL("services-overlay-3.BdetNsUq.jpg");
const bg_4 = "" + __buildAssetsURL("services-overlay-4.BBBvPC_W.jpg");
const _sfc_main$3 = {
  props: {
    bg: String,
    title: String
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services__item-14 mb-30" }, _attrs))}><div class="services__thumb-14 transition-3 include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$props.bg})` })}"></div><div class="services__content-14"><h3 class="services__title-14">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>We are a creative company that focuses on establishing long <br> term relationships with customers.</p><div class="services__btn-14">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/service-details",
    class: "tp-link-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn More <span${_scopeId}><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createTextVNode(" Learn More "),
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "26",
              height: "9",
              viewBox: "0 0 26 9",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M21.6934 1L25 4.20003L21.6934 7.4",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M0.999999 4.19897H25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ])),
            (openBlock(), createBlock("svg", {
              width: "26",
              height: "9",
              viewBox: "0 0 26 9",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M21.6934 1L25 4.20003L21.6934 7.4",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M0.999999 4.19897H25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/single-service/SingleServiceTwoItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SingleServiceTwoItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { SingleServiceTwoItem },
  data() {
    return { bg_1, bg_2, bg_3, bg_4 };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_service_two_item = resolveComponent("single-service-two-item");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services__area pt-95 pb-90" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-3 col-lg-4"><div class="services__widget"><div class="services__widget-item"><h3 class="services__widget-title">Our Services</h3><div class="services__widget-content"><div class="services__widget-tab tp-tab"><ul class="nav nav-tabs flex-column" id="servicesTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="responsive-tab" data-bs-toggle="tab" data-bs-target="#responsive" type="button" role="tab" aria-controls="responsive" aria-selected="true">Responsive Design <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li><li class="nav-item" role="presentation"><button class="nav-link" id="speed-tab" data-bs-toggle="tab" data-bs-target="#speed" type="button" role="tab" aria-controls="speed" aria-selected="false">Speed Optimized <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li><li class="nav-item" role="presentation"><button class="nav-link" id="framework-tab" data-bs-toggle="tab" data-bs-target="#framework" type="button" role="tab" aria-controls="framework" aria-selected="false">Innovative Framework <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li><li class="nav-item" role="presentation"><button class="nav-link" id="pixel-tab" data-bs-toggle="tab" data-bs-target="#pixel" type="button" role="tab" aria-controls="pixel" aria-selected="false">Pixel Perfect <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></li></ul></div></div></div></div></div><div class="col-xl-9 col-lg-8"><div class="services__tab-right"><div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="responsive" role="tabpanel" aria-labelledby="responsive-tab"><div class="services__item-wrapper-14 pl-100">`);
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_1,
    title: "Responsive Design"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_2,
    title: "Speed Optimized"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_3,
    title: "Innovative Framework"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_4,
    title: "Pixel Perfect"
  }, null, _parent));
  _push(`</div></div><div class="tab-pane fade" id="speed" role="tabpanel" aria-labelledby="speed-tab"><div class="services__item-wrapper-14 pl-100">`);
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_1,
    title: "Responsive Design"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_2,
    title: "Speed Optimized"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_3,
    title: "Innovative Framework"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_4,
    title: "Pixel Perfect"
  }, null, _parent));
  _push(`</div></div><div class="tab-pane fade" id="framework" role="tabpanel" aria-labelledby="framework-tab"><div class="services__item-wrapper-14 pl-100">`);
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_1,
    title: "Responsive Design"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_2,
    title: "Speed Optimized"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_3,
    title: "Innovative Framework"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_4,
    title: "Pixel Perfect"
  }, null, _parent));
  _push(`</div></div><div class="tab-pane fade" id="pixel" role="tabpanel" aria-labelledby="pixel-tab"><div class="services__item-wrapper-14 pl-100">`);
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_1,
    title: "Responsive Design"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_2,
    title: "Speed Optimized"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_3,
    title: "Innovative Framework"
  }, null, _parent));
  _push(ssrRenderComponent(_component_single_service_two_item, {
    bg: $data.bg_4,
    title: "Pixel Perfect"
  }, null, _parent));
  _push(`</div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ServicesAreaTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-5 p-relative include-bg pt-170 pb-110 blue-bg" }, _attrs))}><div class="breadcrumb__bg bg-luminosity include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row align-items-end"><div class="col-xxl-7 col-lg-7"><div class="breadcrumb__content breadcrumb__content-2 p-relative z-index-1"><span class="breadcrumb__title-pre">Services</span><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span><a href="#">Business</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>Investment Trend Monitor: Top Trends in 2022 </span></div><h3 class="breadcrumb__title">Tech Solutions <br> for Business</h3></div></div><div class="col-xxl-5 col-lg-5"><div class="breadcrumb__content breadcrumb__content-2 p-relative z-index-1"><p>Harry IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.</p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/ServicesBreadcrumbTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicesBreadcrumbTwo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ServicesBreadcrumbTwo,
    ServicesAreaTwo: __nuxt_component_0,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Services 2 - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_services_breadcrumb_two = resolveComponent("services-breadcrumb-two");
  const _component_services_area_two = __nuxt_component_0;
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_services_breadcrumb_two, null, null, _parent));
  _push(ssrRenderComponent(_component_services_area_two, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  services2 as default
};
//# sourceMappingURL=services-2-Dnbhzjku.js.map
