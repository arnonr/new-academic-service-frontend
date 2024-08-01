import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { I as ImagePopup } from "./ImagePopup-DYm5hHIZ.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const img_1 = "" + __buildAssetsURL("portfolio-grid-1.CfqcHXLf.jpg");
const img_2 = "" + __buildAssetsURL("portfolio-grid-2.Cm40BZcX.jpg");
const img_3 = "" + __buildAssetsURL("portfolio-grid-3.DgdiuifI.jpg");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal, ImagePopup },
  props: {
    item: {},
    images: Array,
    index: Number
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
    handleImagePopup(indexNum) {
      this.$refs.image_popup.showImg(indexNum);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_video_modal = resolveComponent("video-modal");
  const _component_image_popup = resolveComponent("image-popup");
  _push(`<!--[--><div class="portfolio__grid-item mb-40" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="portfolio__grid-thumb w-img fix">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.item.img)} alt="thumb img"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.item.img,
            alt: "thumb img"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (!$props.item.video) {
    _push(`<div class="portfolio__grid-popup"><a href="#" class="popup-image"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1667 8.33341H0.833333C0.377778 8.33341 0 7.95564 0 7.50008C0 7.04453 0.377778 6.66675 0.833333 6.66675H14.1667C14.6222 6.66675 15 7.04453 15 7.50008C15 7.95564 14.6222 8.33341 14.1667 8.33341Z" fill="currentColor"></path><path d="M7.4974 15C7.04184 15 6.66406 14.6222 6.66406 14.1667V0.833333C6.66406 0.377778 7.04184 0 7.4974 0C7.95295 0 8.33073 0.377778 8.33073 0.833333V14.1667C8.33073 14.6222 7.95295 15 7.4974 15Z" fill="currentColor"></path></svg></a></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.video) {
    _push(`<div class="portfolio__grid-video"><a href="#" class="portfolio-play-btn popup-video"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor"></path></svg></a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="portfolio__grid-content"><h3 class="portfolio__grid-title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="portfolio__grid-bottom"><div class="portfolio__grid-category"><span><a href="#">${ssrInterpolate($props.item.category)}</a></span></div><div class="portfolio__grid-show-project">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-details",
    class: "portfolio-link-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Show project <span${_scopeId}><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createTextVNode(" Show project "),
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "26",
              height: "9",
              viewBox: "0 0 26 9",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M21.6934 1L25 4.20003L21.6934 7.4",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M0.999999 4.19897H25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": `https://www.youtube.com/embed/${$props.item.video_id}`
  }, null, _parent));
  _push(ssrRenderComponent(_component_image_popup, {
    ref: "image_popup",
    images: $props.images
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/ClassicSingleItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ClassicSingleItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ClassicSingleItem as C,
  img_2 as a,
  img_3 as b,
  img_1 as i
};
//# sourceMappingURL=ClassicSingleItem-D5QKGL0S.js.map
