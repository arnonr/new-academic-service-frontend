import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _imports_0 = "data:image/png;base64,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";
const _sfc_main = {
  props: {
    style_2: {
      type: Boolean,
      default: false
    },
    el_style: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      service_data: [
        {
          icon: `<svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.06035 29.4262L12.5801 37.0285C17.8613 42.3677 19.6652 42.2798 24.8812 37.0285L36.9867 24.79C41.203 20.5275 42.2679 17.6931 36.9867 12.3539L29.467 4.75152C23.838 -0.939241 21.3821 0.488942 17.1659 4.75152L5.06035 16.99C-0.133935 22.2633 -0.568603 23.7354 5.06035 29.4262Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M38.5975 32.1286L37.1631 34.5236C35.1419 37.9292 36.7067 40.7197 40.6405 40.7197C44.5742 40.7197 46.139 37.9292 44.1178 34.5236L42.6834 32.1286C41.5533 30.239 39.7059 30.239 38.5975 32.1286Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M1.21484 22.1312C13.2986 18.8134 26.0344 18.7036 38.1616 21.8456L39.2483 22.1312" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          project: 86,
          title: "Website design"
        },
        {
          icon: `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 10.5V29.5C31 37.1 29.125 39 21.625 39H10.375C2.875 39 1 37.1 1 29.5V10.5C1 2.9 2.875 1 10.375 1H21.625C29.125 1 31 2.9 31 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M19.7637 7.65088H12.2637" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M15.9941 33.4891C17.5992 33.4891 18.9004 32.1706 18.9004 30.5441C18.9004 28.9176 17.5992 27.5991 15.9941 27.5991C14.3891 27.5991 13.0879 28.9176 13.0879 30.5441C13.0879 32.1706 14.3891 33.4891 15.9941 33.4891Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
          project: 63,
          title: "Mobile App Design"
        },
        {
          icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M33.2859 12.4C36.434 12.4 38.9859 9.84803 38.9859 6.7C38.9859 3.55198 36.434 1 33.2859 1C30.1379 1 27.5859 3.55198 27.5859 6.7C27.5859 9.84803 30.1379 12.4 33.2859 12.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M10.5 21.9009H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M10.5 29.5H27.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.8 1H14.3C4.8 1 1 4.8 1 14.3V25.7C1 35.2 4.8 39 14.3 39H25.7C35.2 39 39 35.2 39 25.7V16.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
          project: 75,
          title: "Dashboard"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `services__area ${$props.style_2 ? "pb-110" : $props.el_style ? "pt-110 pb-90" : "pb-120"}`
  }, _attrs))}><div class="container">`);
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3"> Minimal &amp; Clean Design </span><h3 class="tp-section-title-3">Gradient Overlay</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><!--[-->`);
  ssrRenderList($data.service_data, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="${ssrRenderClass(`services__item-9 ${$props.style_2 ? "services__item-style-2" : ""} mb-30 transition-3`)}"><div class="services__item-9-top d-flex align-items-start justify-content-between"><div class="services__icon-9"><span><span>${item.icon ?? ""}</span><img${ssrRenderAttr("src", _imports_0)} alt="shape"></span></div><div class="services__btn-9">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa-light fa-arrow-up-right"${_scopeId}></i>`);
        } else {
          return [
            createVNode("i", { class: "fa-light fa-arrow-up-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div><div class="services__content-9"><span class="services-project">${ssrInterpolate(item.project)} Project</span><h3 class="services__title-9">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/PersonalPortServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PersonalPortServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PersonalPortServices as P,
  _imports_0 as _
};
//# sourceMappingURL=PersonalPortServices-Dr9wNU-b.js.map
