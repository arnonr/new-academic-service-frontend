import { _ as _export_sfc, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import { S as SingleFaq } from "./SingleFaq-CsPiM7Uv.js";
import { resolveComponent, mergeProps, useSSRContext, withCtx, createVNode, openBlock, createBlock, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
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
const _sfc_main$4 = {
  components: { SingleFaq },
  data() {
    return {
      faq_items: [
        {
          id: "One",
          title: "Can I cancel my account at any time?",
          show: true,
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion"
        },
        {
          id: "Two",
          title: "What happens after the license expires?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion"
        },
        {
          id: "Three",
          title: "Does Harry have any documentations?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion"
        },
        {
          id: "four",
          title: "How long do I get support & updates?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_faq = resolveComponent("single-faq");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services__details-faq faq__style-3 mt-60" }, _attrs))}><h3 class="services__details-faq-title">Any questions find here.</h3><div class="faq__tab-content tp-accordion"><div class="accordion" id="general_accordion"><!--[-->`);
  ssrRenderList($data.faq_items, (item, i) => {
    _push(ssrRenderComponent(_component_single_faq, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faqs/ServiceDetailsFaq.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ServiceDetailsFaq = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        msg: false
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ id: "contact-form" }, _attrs))}><div class="services__contact-input"><input name="name"${ssrRenderAttr("value", $data.formValue.name)} type="text" placeholder="Your Name"></div><div class="services__contact-input"><input name="email"${ssrRenderAttr("value", $data.formValue.email)} type="email" placeholder="Your Email Address"></div><div class="services__contact-input"><textarea name="message" placeholder="Your message">${ssrInterpolate($data.formValue.msg)}</textarea></div><div class="services__contact-btn"><button type="submit" class="tp-btn w-100">Send Email</button></div></form>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/ServiceDetailsForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ServiceDetailsForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + __buildAssetsURL("services-details-img-1.WIFo-h4B.jpg");
const _sfc_main$2 = {
  components: { ServiceDetailsFaq, ServiceDetailsForm }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_service_details_form = resolveComponent("service-details-form");
  const _component_service_details_faq = resolveComponent("service-details-faq");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services__area pt-120 pb-125" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="services__widget-2 pr-50"><div class="services__widget-item-2 mb-30"><div class="services__widget-tab-2 tp-tab"><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/service-details",
    class: "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21 7V19C21 23.8 19.75 25 14.75 25H7.25C2.25 25 1 23.8 1 19V7C1 2.2 2.25 1 7.25 1H14.75C19.75 1 21 2.2 21 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path opacity="0.4" d="M13.5117 5.20044H8.51172" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path opacity="0.4" d="M10.9961 21.5196C12.0661 21.5196 12.9336 20.6868 12.9336 19.6596C12.9336 18.6323 12.0661 17.7996 10.9961 17.7996C9.92604 17.7996 9.05859 18.6323 9.05859 19.6596C9.05859 20.6868 9.92604 21.5196 10.9961 21.5196Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span> Mobile App <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "22",
              height: "26",
              viewBox: "0 0 22 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M21 7V19C21 23.8 19.75 25 14.75 25H7.25C2.25 25 1 23.8 1 19V7C1 2.2 2.25 1 7.25 1H14.75C19.75 1 21 2.2 21 7Z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M13.5117 5.20044H8.51172",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M10.9961 21.5196C12.0661 21.5196 12.9336 20.6868 12.9336 19.6596C12.9336 18.6323 12.0661 17.7996 10.9961 17.7996C9.92604 17.7996 9.05859 18.6323 9.05859 19.6596C9.05859 20.6868 9.92604 21.5196 10.9961 21.5196Z",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ]),
          createTextVNode(" Mobile App "),
          (openBlock(), createBlock("svg", {
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 11L6 6L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.2222 1L1 15.6667H12L10.7778 25.4444L23 10.7778H12L13.2222 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span> Speed Optimized <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "24",
              height: "27",
              viewBox: "0 0 24 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M13.2222 1L1 15.6667H12L10.7778 25.4444L23 10.7778H12L13.2222 1Z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ]),
          createTextVNode(" Speed Optimized "),
          (openBlock(), createBlock("svg", {
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 11L6 6L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path opacity="0.4" d="M19.6906 7.6C21.5132 7.6 22.9906 6.12254 22.9906 4.3C22.9906 2.47746 21.5132 1 19.6906 1C17.8681 1 16.3906 2.47746 16.3906 4.3C16.3906 6.12254 17.8681 7.6 19.6906 7.6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path opacity="0.4" d="M6.5 13.1006H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path opacity="0.4" d="M6.5 17.5H16.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M14.2 1H8.7C3.2 1 1 3.2 1 8.7V15.3C1 20.8 3.2 23 8.7 23H15.3C20.8 23 23 20.8 23 15.3V9.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span> No Skills Needed <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                opacity: "0.4",
                d: "M19.6906 7.6C21.5132 7.6 22.9906 6.12254 22.9906 4.3C22.9906 2.47746 21.5132 1 19.6906 1C17.8681 1 16.3906 2.47746 16.3906 4.3C16.3906 6.12254 17.8681 7.6 19.6906 7.6Z",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M6.5 13.1006H12",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M6.5 17.5H16.4",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M14.2 1H8.7C3.2 1 1 3.2 1 8.7V15.3C1 20.8 3.2 23 8.7 23H15.3C20.8 23 23 20.8 23 15.3V9.8",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ]),
          createTextVNode(" No Skills Needed "),
          (openBlock(), createBlock("svg", {
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 11L6 6L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path opacity="0.4" d="M19.5202 11.652C22.4709 11.652 23.6966 10.5171 22.6071 6.79468C21.8694 4.28656 19.7131 2.13026 17.205 1.39258C13.4826 0.303087 12.3477 1.52877 12.3477 4.47949V7.74799C12.3477 10.5171 13.4825 11.652 15.7523 11.652H19.5202Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M21.4297 14.7162C20.3742 19.9708 15.3353 23.784 9.60407 22.8534C5.30283 22.1611 1.8414 18.6997 1.13777 14.3985C0.218507 8.68995 4.00905 3.65103 9.24091 2.58423" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span> Google Analytics <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                opacity: "0.4",
                d: "M19.5202 11.652C22.4709 11.652 23.6966 10.5171 22.6071 6.79468C21.8694 4.28656 19.7131 2.13026 17.205 1.39258C13.4826 0.303087 12.3477 1.52877 12.3477 4.47949V7.74799C12.3477 10.5171 13.4825 11.652 15.7523 11.652H19.5202Z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M21.4297 14.7162C20.3742 19.9708 15.3353 23.784 9.60407 22.8534C5.30283 22.1611 1.8414 18.6997 1.13777 14.3985C0.218507 8.68995 4.00905 3.65103 9.24091 2.58423",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ]),
          createTextVNode(" Google Analytics "),
          (openBlock(), createBlock("svg", {
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 11L6 6L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M23 18V4C23 2 21.8387 1 19.516 1H14.8707C12.548 1 11.3867 2 11.3867 4V18C11.3867 20 12.548 21 14.8707 21H19.516C21.8387 21 23 20 23 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><path opacity="0.4" d="M11.3867 5H17.1934" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><path opacity="0.4" d="M11.3867 17H16.032" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><path opacity="0.4" d="M11.3867 12.95L17.1934 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><path opacity="0.4" d="M11.3867 9H14.8707" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><path d="M4.43754 1C2.54457 1 1 2.33 1 3.95V16.91C1 17.36 1.22065 18.04 1.48776 18.43L2.44005 19.79C3.5317 21.36 5.33176 21.36 6.42342 19.79L7.37571 18.43C7.64281 18.04 7.86346 17.36 7.86346 16.91V3.95C7.86346 2.33 6.31889 1 4.43754 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path><path opacity="0.4" d="M7.86346 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"${_scopeId}></path></svg></span> Pixel Perfect <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "24",
              height: "22",
              viewBox: "0 0 24 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M23 18V4C23 2 21.8387 1 19.516 1H14.8707C12.548 1 11.3867 2 11.3867 4V18C11.3867 20 12.548 21 14.8707 21H19.516C21.8387 21 23 20 23 18Z",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M11.3867 5H17.1934",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M11.3867 17H16.032",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M11.3867 12.95L17.1934 13",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M11.3867 9H14.8707",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              }),
              createVNode("path", {
                d: "M4.43754 1C2.54457 1 1 2.33 1 3.95V16.91C1 17.36 1.22065 18.04 1.48776 18.43L2.44005 19.79C3.5317 21.36 5.33176 21.36 6.42342 19.79L7.37571 18.43C7.64281 18.04 7.86346 17.36 7.86346 16.91V3.95C7.86346 2.33 6.31889 1 4.43754 1Z",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              }),
              createVNode("path", {
                opacity: "0.4",
                d: "M7.86346 6H1",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round"
              })
            ]))
          ]),
          createTextVNode(" Pixel Perfect "),
          (openBlock(), createBlock("svg", {
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 11L6 6L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="services__widget-item-2 mb-30"><div class="services__contact"><h4 class="services__contact-title">Get a free quote</h4>`);
  _push(ssrRenderComponent(_component_service_details_form, null, null, _parent));
  _push(`<p class="ajax-response"></p></div></div><div class="services__widget-item-2 mb-30"><div class="services__contact-info"><div class="services__contact-info-item d-flex align-items-center"><div class="services__contact-info-icon"><span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.582 6.74489C20.9848 7.01859 22.2741 7.70466 23.2847 8.7153C24.2953 9.72594 24.9814 11.0152 25.2551 12.418M19.582 1C22.4965 1.32378 25.2143 2.62893 27.2891 4.70116C29.364 6.77339 30.6726 9.48953 31 12.4036M29.5638 23.8647V28.1733C29.5654 28.5733 29.4835 28.9693 29.3232 29.3357C29.163 29.7022 28.928 30.0312 28.6332 30.3016C28.3385 30.572 27.9905 30.7779 27.6116 30.9061C27.2327 31.0342 26.8312 31.0818 26.4328 31.0458C22.0133 30.5656 17.7681 29.0554 14.0382 26.6366C10.568 24.4315 7.62595 21.4894 5.42086 18.0192C2.99361 14.2724 1.48309 10.0065 1.01166 5.56719C0.975767 5.17003 1.02297 4.76974 1.15025 4.39182C1.27754 4.0139 1.48212 3.66662 1.75098 3.3721C2.01983 3.07757 2.34706 2.84226 2.71185 2.68113C3.07663 2.52 3.47096 2.4366 3.86974 2.43622H8.17841C8.87542 2.42936 9.55114 2.67619 10.0796 3.13068C10.6081 3.58518 10.9533 4.21635 11.0509 4.90653C11.2327 6.2854 11.57 7.63927 12.0562 8.94231C12.2494 9.45637 12.2913 10.0151 12.1767 10.5521C12.0622 11.0892 11.7961 11.5823 11.4099 11.9727L9.58591 13.7967C11.6305 17.3924 14.6076 20.3695 18.2033 22.4141L20.0273 20.5901C20.4177 20.2039 20.9108 19.9378 21.4478 19.8233C21.9849 19.7087 22.5436 19.7506 23.0577 19.9438C24.3607 20.43 25.7146 20.7673 27.0935 20.9491C27.7911 21.0476 28.4283 21.399 28.8838 21.9365C29.3392 22.4741 29.5813 23.1603 29.5638 23.8647Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="services__contact-info-content"><span>Toll Free Call Center:</span><h4><a href="tel:+964-742-44-763">+964 742 44 763</a></h4></div></div></div></div></div></div><div class="col-lg-8 order-first order-lg-last"><div class="services__details-wrapper"><h3 class="services__details-title">World best web <br>design service provider.</h3><p>We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise.</p><div class="services__details-thumb m-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="services__details-text mb-45"><h3 class="services__details-text-title">Speed Optimized</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula.</p></div><div class="row"><div class="col-md-6"><div class="services__details-list mb-45"><h3 class="services__details-list-title">Our Goal</h3><ul><li>Various analysis options.</li><li>Page Load (number of requests).</li><li>Global Data Analysis</li></ul></div></div><div class="col-md-6"><div class="services__details-text mb-45"><h3 class="services__details-text-title services__details-text-title-2">The Challange</h3><p>Harry web offers a complete lineup of features from any major Maecena quis interdum, orci at euis dapibus,ante pharetra tellus.</p></div></div></div>`);
  _push(ssrRenderComponent(_component_service_details_faq, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service-details/ServiceDetailsArea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-6 p-relative include-bg pt-200 pb-120" }, _attrs))}><div class="breadcrumb__bg-2 breadcrumb__overlay include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-10"><div class="breadcrumb__content text-center p-relative z-index-1"><h3 class="breadcrumb__title">Services Details</h3><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span><a href="#">Services</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>Speed Optimized</span></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/ServiceDetailsBreadcrumb.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceDetailsBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderOne,
    ServiceDetailsBreadcrumb,
    ServiceDetailsArea: __nuxt_component_0,
    FooterSix,
    BackToTop
  },
  setup() {
    useHead({
      title: "Services Details - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_service_details_breadcrumb = resolveComponent("service-details-breadcrumb");
  const _component_service_details_area = __nuxt_component_0;
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_service_details_breadcrumb, null, null, _parent));
  _push(ssrRenderComponent(_component_service_details_area, null, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const serviceDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  serviceDetails as default
};
//# sourceMappingURL=service-details-CCBqMmjK.js.map
