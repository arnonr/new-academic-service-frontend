import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: {
    videoUrl: {
      type: String,
      default: "https://www.youtube.com/embed/EW4ZYb3mCZk"
    }
  },
  methods: {
    playVideo() {
      const videoOverlay = (void 0).querySelector("#video-overlay");
      let iframeElement = (void 0).createElement("iframe");
      iframeElement.setAttribute("src", this.videoUrl);
      iframeElement.style.width = "60%";
      iframeElement.style.height = "80%";
      videoOverlay == null ? void 0 : videoOverlay.classList.add("open");
      videoOverlay.appendChild(iframeElement);
    },
    closeVideo() {
      const videoOverlay = (void 0).querySelector("#video-overlay.open"), iframeElement = (void 0).querySelector("#video-overlay.open iframe");
      videoOverlay == null ? void 0 : videoOverlay.classList.remove("open");
      iframeElement == null ? void 0 : iframeElement.remove();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "video-overlay",
    class: "video-overlay"
  }, _attrs))}><a class="video-overlay-close">×</a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/modals/VideoModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VideoModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  VideoModal as V
};
//# sourceMappingURL=VideoModal-yOQUjk9s.js.map
