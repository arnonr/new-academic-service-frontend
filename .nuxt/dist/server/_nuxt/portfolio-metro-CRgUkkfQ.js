import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import Footer from "./Footer-85SZoxrw.js";
import { i as img_1, a as img_2, b as img_3, c as img_4, d as img_5 } from "./portfolio-metro-5-PaQEgo7_.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext, mergeProps } from "vue";
import { ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "klona";
import "devalue";
import "toastify-js";
import "@yeger/vue-masonry-wall";
import "dayjs";
import "dayjs/locale/th.js";
import "vue-select";
import "dayjs/plugin/buddhistEra.js";
import "cookie-es";
import "ohash";
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$2 = {
  components: { VideoModal },
  props: {
    item: {}
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><div class="portfolio__metro-item tp-load-item pt-40 pb-40 p-relative z-index-1 mb-30"><div class="portfolio__metro-thumb" style="${ssrRenderStyle({ backgroundImage: `url(${$props.item.img})` })}">`);
  if ($props.item.video) {
    _push(`<div class="portfolio__grid-video"><a href="#" class="portfolio-play-btn popup-video"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor"></path></svg></a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6"><div class="portfolio__metro-content"><div class="portfolio__metro-category"><span><a href="#">${ssrInterpolate($props.item.category)}</a></span></div><h3 class="portfolio__metro-title">`);
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
  _push(`</h3><p>${ssrInterpolate($props.item.subtitle)}</p><div class="portfolio__metro-btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-details",
    class: "tp-btn-border"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Show Project <span${_scopeId}><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createTextVNode(" Show Project "),
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
  _push(`</div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": `https://www.youtube.com/embed/${$props.item.video_id}`
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/SingleMetroStyle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SingleMetroStyle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { SingleMetroStyle },
  data() {
    return {
      perView: 3,
      metro_data: [
        {
          img: img_1,
          category: "Original",
          title: "Original Coffee",
          subtitle: "Success needs hard work. Don’t listen to these ‘get rich quick’ schemes you need to build,..!",
          video: true,
          video_id: "1gyTUHP6ne8"
        },
        {
          img: img_2,
          category: "Branding",
          title: "Branding Design",
          subtitle: "Success needs hard work. Don’t listen to these ‘get rich quick"
        },
        {
          img: img_3,
          category: "Mockup",
          title: "Magazine Cover",
          subtitle: "Success needs hard work. Don’t listen to these ‘get rich quick"
        },
        {
          img: img_4,
          category: "Branding",
          title: "The Same Creation",
          subtitle: "Pink pastel business card paper mockups.",
          video: true,
          video_id: "Xm2VKy2a6aQ"
        },
        {
          img: img_5,
          category: "Creative",
          title: "Hancraft Art of paint",
          subtitle: "Pink pastel business card paper mockups."
        }
      ]
    };
  },
  methods: {
    // handleLoadMore
    handleLoadMore() {
      this.perView = this.perView + 1;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_single_metro_style = resolveComponent("single-metro-style");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pb-90 pt-110 p-relative fix" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="portfolio__section-title-wrapper text-center mb-130"><span class="portfolio__section-title-pre">CHECK OUT OUR LATEST WORK</span><h3 class="portfolio__section-title">Portfolio Sticky Metro</h3></div></div></div><div class="row"><div class="col-xxl-12 tp-load-item-count"><!--[-->`);
  ssrRenderList((_a = $data.metro_data) == null ? void 0 : _a.slice(0, $data.perView), (item, i) => {
    _push(ssrRenderComponent(_component_single_metro_style, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="row"><div class="col-xxl-12"><div class="portfolio__load-more text-center">`);
  if ($data.perView < $data.metro_data.length) {
    _push(`<button id="tp-load-more" type="button" class="tp-load-more-btn load-more mt-40 mb-50"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.5C1 4.36 4.33 1 8.5 1C13.5025 1 16 5.17 16 5.17M16 5.17V1.42M16 5.17H12.67" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9175 8.5C15.9175 12.64 12.5575 16 8.4175 16C4.2775 16 1.75 11.83 1.75 11.83M1.75 11.83H5.14M1.75 11.83V15.58" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Load more Post </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/MetroStyle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MetroStyle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderOne, Footer, MetroStyle, BackToTop },
  setup() {
    useHead({
      title: "Portfolio Metro - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_metro_style = resolveComponent("metro-style");
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_metro_style, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio-metro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolioMetro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  portfolioMetro as default
};
//# sourceMappingURL=portfolio-metro-CRgUkkfQ.js.map
