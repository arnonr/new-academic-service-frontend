import { S as SingleFaq } from "./SingleFaq-CsPiM7Uv.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  components: { SingleFaq },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    id: String,
    faq_items: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_faq = resolveComponent("single-faq");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `tab-pane fade ${$props.active ? "show active" : ""}`,
    id: $props.id,
    role: "tabpanel",
    "aria-labelledby": `${$props.id}-tab`
  }, _attrs))}><div class="accordion"${ssrRenderAttr("id", `${$props.id}_accordion`)}><!--[-->`);
  ssrRenderList($props.faq_items, (item, i) => {
    _push(ssrRenderComponent(_component_single_faq, {
      key: i,
      item: { ...item, parent: `${$props.id}_accordion` }
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faqs/StartUpFaq/TabContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TabContent as T
};
//# sourceMappingURL=TabContent-C8LU6M_9.js.map
