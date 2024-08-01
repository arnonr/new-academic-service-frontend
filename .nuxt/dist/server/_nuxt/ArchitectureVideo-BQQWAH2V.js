import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./video-icon-play-1PuRorIu.js";
import { _ as _export_sfc } from "../server.mjs";
const video_bg = "" + __buildAssetsURL("video-bg-1.BZsdlY63.jpg");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
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
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="${ssrRenderClass(`video__area video__overlay box-plr-145 black-bg-13 ${$props.el_style ? "mb-120" : ""}`)}"><div class="container-fluid"><div class="video__inner-8 pt-185 pb-155 include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.video_bg})` })}" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="row justify-content-center"><div class="col-xxl-7 col-xl-8 col-lg-10"><div class="video__content-8 text-center"><div class="video__play-8 mb-20"><a href="#" class="popup-video video__play-btn video__play-btn-8 tp-pulse-border"><span class="video-play-bg"></span><img${ssrRenderAttr("src", _imports_0)} alt=""></a></div><div class="section__title-wrapper-8 text-center"><h3 class="section__title-8">We are the leader in the <span class="section__title-highlight-8">architectural <svg width="306" height="33" viewBox="0 0 306 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 29.6258C69.5625 19.3132 202.219 -24.7493 303 29.6258" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span></h3></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/EW4ZYb3mCZk"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/video-area/ArchitectureVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArchitectureVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ArchitectureVideo as A
};
//# sourceMappingURL=ArchitectureVideo-BQQWAH2V.js.map
