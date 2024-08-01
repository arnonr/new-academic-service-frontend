import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./video-icon-play-1PuRorIu.js";
const video_bg = "" + __buildAssetsURL("video-bg.BnkxsdBj.jpg");
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: { VideoModal },
  data() {
    return {
      video_bg
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="${ssrRenderClass(`video__area pt-145 pb-125 include-bg ${$props.el_style ? "mb-120" : ""}`)}" data-overlay="dark" data-overlay-opacity="6" style="${ssrRenderStyle({ backgroundImage: `url(${$data.video_bg})` })}"><div class="container"><div class="row justify-content-center"><div class="col-xxl-10 col-xl-10"><div class="video__content text-center"><div class="video__play"><a href="#" class="video__play-btn tp-pulse-border popup-video"><span class="video-play-bg"></span><img${ssrRenderAttr("src", _imports_0)} alt=""></a></div><h3 class="video__title">The area where we practice Our lawyer</h3><div class="video__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-transparent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ask for Constitution <i class="fa-regular fa-arrow-right-long"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" Ask for Constitution "),
          createVNode("i", { class: "fa-regular fa-arrow-right-long" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/7e90gBu4pas"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/video-area/LawyerVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lawyerVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  lawyerVideo as l
};
//# sourceMappingURL=LawyerVideo-zRp8feJz.js.map
