import VueEasyLightbox from "vue-easy-lightbox";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  components: { VueEasyLightbox },
  props: {
    images: Array
  },
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_easy_lightbox = resolveComponent("vue-easy-lightbox");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_vue_easy_lightbox, {
    visible: $data.visible,
    imgs: $props.images,
    index: $data.index,
    onHide: $options.handleHide
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/modals/ImagePopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImagePopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ImagePopup as I
};
//# sourceMappingURL=ImagePopup-DYm5hHIZ.js.map
