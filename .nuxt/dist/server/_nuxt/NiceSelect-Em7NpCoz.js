import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    options: "",
    defaultCurrent: {},
    placeholder: {},
    className: {},
    name: {}
  },
  name: "NiceSelect",
  data() {
    return {
      open: false,
      current: this.options[this.defaultCurrent]
    };
  },
  methods: {
    onClose() {
      this.open = false;
    },
    currentHandler(item, index) {
      this.current = this.options[index];
      this.$emit("onChange", item);
      this.onClose();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [`nice-select ${$props.className}`, { open: $data.open }],
    tabindex: "0",
    role: "button",
    ref: ""
  }, _attrs))}><span class="current">${ssrInterpolate(((_a = $data.current) == null ? void 0 : _a.text) || $props.placeholder)}</span><ul class="list" role="menubar"><!--[-->`);
  ssrRenderList($props.options, (item, index) => {
    _push(`<li class="${ssrRenderClass([`option`, { "selected focus": item.value === $data.current.value }])}" role="menuitem">${ssrInterpolate(item.text)}</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/select/NiceSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NiceSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  NiceSelect as N
};
//# sourceMappingURL=NiceSelect-Em7NpCoz.js.map
