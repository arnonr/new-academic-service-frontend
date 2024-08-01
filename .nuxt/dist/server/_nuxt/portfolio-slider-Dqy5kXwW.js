import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext, resolveComponent, Fragment, renderList } from "vue";
import { ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
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
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const slider_bg_1 = "" + __buildAssetsURL("portfolio-slider-1.7bf62JTC.jpg");
const slider_bg_2 = "" + __buildAssetsURL("portfolio-slider-2.lIO9gRp3.jpg");
const slider_bg_3 = "" + __buildAssetsURL("portfolio-slider-3.wx_pydrg.jpg");
const slider_bg_4 = "" + __buildAssetsURL("portfolio-slider-4.S6MhWHCW.jpg");
const _sfc_main$2 = {
  components: {},
  props: {
    item: {},
    videoPopup: Function
  },
  methods: {
    handlePopup() {
      this.videoPopup();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<!--[--><div class="portfolio__horizontal-thumb include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$props.item.bg})` })}"></div><div class="portfolio__horizontal-inner"><div class="portfolio__horizontal-social"><span>Follow Us</span><a href="#">Fb.</a><a href="#">Be.</a><a href="#">Yt.</a></div><div class="container"><div class="row"><div class="col-xxl-9 col-xl-10"><div class="portfolio__horizontal-wrapper d-md-flex align-items-start"><div class="portfolio__horizontal-video"><a href="#" class="popup-video"><svg width="14" height="18" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor"></path></svg></a></div><div class="portfolio__horizontal-content"><div class="portfolio__horizontal-meta"><span><a href="#">${ssrInterpolate($props.item.category)}</a></span><span><a href="#">${ssrInterpolate($props.item.date)}</a></span></div><h3 class="portfolio__horizontal-title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${$props.item.title ?? ""}</span>`);
      } else {
        return [
          createVNode("span", {
            innerHTML: $props.item.title
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>${ssrInterpolate($props.item.subtitle)}</p><div class="portfolio__horizontal-btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-details",
    class: "tp-btn-border tp-link-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Show Project <span${_scopeId}><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
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
            ])),
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
  _push(`</div></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/SliderSinglePort.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SliderSinglePort = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { Swiper, SwiperSlide, SliderSinglePort, VideoModal },
  data() {
    return {
      slider_port_data: [
        {
          category: "Branding",
          date: "January 14, 2022",
          title: "Classic Custom <br/> Book Cover Prints",
          subtitle: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_1,
          video_id: "x7MgSKrNmn8"
        },
        {
          category: "Branding",
          date: "February 16, 2022",
          title: "Our Best Cover <br/> Designs & Concepts",
          subtitle: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_2,
          video_id: "x7MgSKrNmn8"
        },
        {
          category: "Branding",
          date: "March 12, 2022",
          title: "Easily make your <br/> own mockup design",
          subtitle: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_3,
          video_id: "x7MgSKrNmn8"
        },
        {
          category: "Branding",
          date: "April 12, 2022",
          title: "Unique Bowls <br/> From the South Pacific.",
          subtitle: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_4,
          video_id: "x7MgSKrNmn8"
        }
      ]
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  },
  setup() {
    const renderFraction = (index, cls) => {
      return `<span class="${cls}">
                <button>${index < 9 ? "0" : ""}${index + 1}</button>
            </span>`;
    };
    return {
      renderFraction,
      modules: [Mousewheel, Navigation, Pagination]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_slider_single_port = resolveComponent("slider-single-port");
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="portfolio__horizontal p-relative"><div class="portfolio__horizontal-slider">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "portfolio__horizontal-active swiper-container",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    mousewheel: true,
    modules: $setup.modules,
    pagination: {
      el: ".portfolio-horizontal-dot",
      clickable: true,
      renderBullet: $setup.renderFraction
    },
    navigation: {
      nextEl: ".portfolio-horizontal-button-next",
      prevEl: ".portfolio-horizontal-button-prev"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_port_data, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "portfolio__horizontal-item"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_slider_single_port, {
                  item,
                  videoPopup: $options.handleVideoPopup
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_slider_single_port, {
                    item,
                    videoPopup: $options.handleVideoPopup
                  }, null, 8, ["item", "videoPopup"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_port_data, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "portfolio__horizontal-item"
            }, {
              default: withCtx(() => [
                createVNode(_component_slider_single_port, {
                  item,
                  videoPopup: $options.handleVideoPopup
                }, null, 8, ["item", "videoPopup"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="portfolio-horizontal-dot d-none d-sm-flex"></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/EW4ZYb3mCZk"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/SliderPortfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SliderPortfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderOne, SliderPortfolio, BackToTop },
  setup() {
    useHead({
      title: "Portfolio Masonry - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_slider_portfolio = resolveComponent("slider-portfolio");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    header_solid: true,
    header_solid_2: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_slider_portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolioSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  portfolioSlider as default
};
//# sourceMappingURL=portfolio-slider-Dqy5kXwW.js.map
