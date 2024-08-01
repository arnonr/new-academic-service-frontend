import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    img: String,
    id: String,
    active: Boolean
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `tab-pane fade ${$props.active ? "show active" : ""}`,
    id: $props.id,
    role: "tabpanel",
    "aria-labelledby": `${$props.id}-tab`
  }, _attrs))}><div class="vision__item"><div class="vision__thumb m-img mb-30"><img${ssrRenderAttr("src", $props.img)} alt=""></div><div class="vision__content"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero. </p><div class="vision__list"><ul><li><span><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> 1x Lorem ipsum dolor sit </li><li><span><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> Eiusmod incididunt ut labore et </li></ul></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vision/SingleTabItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleTabItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleTabItem as S
};
//# sourceMappingURL=SingleTabItem-DsMnV-ax.js.map
