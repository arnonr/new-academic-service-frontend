import Parallax from "parallax-js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const mouseMoveAnimation = () => {
  let animatiedItem = (void 0).querySelectorAll(".tp_mousemove");
  if (animatiedItem) {
    animatiedItem.forEach((item, _) => {
      new Parallax(item);
    });
  }
};
const _sfc_main = {
  props: {
    cls: String,
    imgSrc: String,
    dataDepth: String
  },
  mounted() {
    mouseMoveAnimation();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "tp_mousemove" }, _attrs))}><img class="${ssrRenderClass($props.cls)}"${ssrRenderAttr("data-depth", $props.dataDepth)}${ssrRenderAttr("src", $props.imgSrc)} alt="img"></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mouse-move/MouseMove.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=MouseMove-CNO7BuBA.js.map
