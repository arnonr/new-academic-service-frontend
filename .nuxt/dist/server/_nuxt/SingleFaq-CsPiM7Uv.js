import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item" }, _attrs))}><h2 class="accordion-header"${ssrRenderAttr("id", `heading${$props.item.id}`)}><button class="${ssrRenderClass(`accordion-button ${$props.item.show ? "" : "collapsed"}`)}" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#collapse${$props.item.id}`)}${ssrRenderAttr("aria-expanded", `${$props.item.show ? "true" : "false"}`)}${ssrRenderAttr("aria-controls", `collapse${$props.item.id}`)}>${ssrInterpolate($props.item.title)} <span class="accordion-btn"></span></button></h2><div${ssrRenderAttr("id", `collapse${$props.item.id}`)} class="${ssrRenderClass(`accordion-collapse collapse ${$props.item.show ? "show" : ""}`)}"${ssrRenderAttr("aria-labelledby", `heading${$props.item.id}`)}${ssrRenderAttr("data-bs-parent", `#${$props.item.parent}`)}><div class="accordion-body"><p>${ssrInterpolate($props.item.desc)}</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faqs/SingleFaq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleFaq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleFaq as S
};
//# sourceMappingURL=SingleFaq-CsPiM7Uv.js.map
