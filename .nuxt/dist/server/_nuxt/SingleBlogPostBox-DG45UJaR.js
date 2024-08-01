import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main = {
  components: { Swiper, SwiperSlide, VideoModal },
  props: {
    item: {}
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><article class="${ssrRenderClass(`postbox__item format-${$props.item.video ? "video" : $props.item.blog_quote ? "quote" : $props.item.blog_audio ? "audio" : "image"} mb-50 transition-3`)}">`);
  if (!$props.item.video && !$props.item.blog_quote && !$props.item.blog_audio && !$props.item.blog_slider) {
    _push(`<div class="postbox__thumb w-img">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", $props.item.img)} alt="blog img"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: $props.item.img,
              alt: "blog img"
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.video) {
    _push(`<div class="postbox__thumb postbox__video w-img p-relative">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", $props.item.img)} alt="blog img"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: $props.item.img,
              alt: "blog img"
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="play-btn pulse-btn popup-video"><i class="fas fa-play"></i></a></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.blog_quote) {
    _push(`<div class="postbox__quote postbox__quote-style-3"><div class="blog__grid-quote mb-30"><div class="blog__grid-quote-icon"><span><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1161 0C19.2516 0 20.1806 0.232258 20.9032 0.696775C21.6258 1.16129 22.2194 1.75484 22.6839 2.47742C23.2516 3.30323 23.6129 4.20646 23.7677 5.1871C23.9226 6.16775 24 6.96775 24 7.5871C24 10.1161 23.3548 12.4129 22.0645 14.4774C20.7742 16.5419 18.7613 18.2194 16.0258 19.5097L15.329 18.1161C16.929 17.4452 18.2968 16.3871 19.4323 14.9419C20.6194 13.4968 21.2129 12.0258 21.2129 10.529C21.2129 9.90968 21.1355 9.36774 20.9806 8.90323C20.1548 9.5742 19.2 9.90968 18.1161 9.90968C16.7742 9.90968 15.6129 9.47097 14.6323 8.59355C13.6516 7.71613 13.1613 6.50323 13.1613 4.95484C13.1613 3.50968 13.6516 2.32258 14.6323 1.39355C15.6129 0.464517 16.7742 0 18.1161 0ZM4.95484 0C6.09032 0 7.01936 0.232258 7.74194 0.696775C8.46452 1.16129 9.05807 1.75484 9.52258 2.47742C10.0903 3.30323 10.4516 4.20646 10.6065 5.1871C10.7613 6.16775 10.8387 6.96775 10.8387 7.5871C10.8387 10.1161 10.1935 12.4129 8.90323 14.4774C7.6129 16.5419 5.6 18.2194 2.86452 19.5097L2.16774 18.1161C3.76774 17.4452 5.13548 16.3871 6.27097 14.9419C7.45806 13.4968 8.05161 12.0258 8.05161 10.529C8.05161 9.90968 7.97419 9.36774 7.81936 8.90323C6.99355 9.5742 6.03871 9.90968 4.95484 9.90968C3.6129 9.90968 2.45161 9.47097 1.47097 8.59355C0.490323 7.71613 0 6.50323 0 4.95484C0 3.50968 0.490323 2.32258 1.47097 1.39355C2.45161 0.464517 3.6129 0 4.95484 0Z" fill="currentColor"></path></svg></span></div><div class="blog__grid-quote-content"><span>Social distancing</span><p>${ssrInterpolate($props.item.desc)}...</p><cite>John smith</cite></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.blog_audio) {
    _push(`<div class="postbox__thumb postbox__audio w-img p-relative"><iframe allow="autoplay"${ssrRenderAttr("src", $props.item.audio_url)}></iframe></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.blog_slider) {
    _push(ssrRenderComponent(_component_swiper, {
      class: "postbox__thumb postbox__slider swiper-container w-img p-relative",
      slidesPerView: 1,
      spaceBetween: 0,
      modules: $setup.modules,
      loop: true,
      autoplay: {
        delay: 3e3
      },
      navigation: {
        nextEl: ".postbox-slider-button-next",
        prevEl: ".postbox-slider-button-prev"
      }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.item.slider_images, (img, i) => {
            _push2(ssrRenderComponent(_component_swiper_slide, {
              key: i,
              class: "postbox__slider-item"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", img)} alt="slider img"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: img,
                      alt: "slider img"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]--><div class="postbox__nav"${_scopeId}><button class="postbox-slider-button-next"${_scopeId}><i class="fa-regular fa-angle-right"${_scopeId}></i></button><button class="postbox-slider-button-prev"${_scopeId}><i class="fa-regular fa-angle-left"${_scopeId}></i></button></div>`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.item.slider_images, (img, i) => {
              return openBlock(), createBlock(_component_swiper_slide, {
                key: i,
                class: "postbox__slider-item"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: img,
                    alt: "slider img"
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1024);
            }), 128)),
            createVNode("div", { class: "postbox__nav" }, [
              createVNode("button", { class: "postbox-slider-button-next" }, [
                createVNode("i", { class: "fa-regular fa-angle-right" })
              ]),
              createVNode("button", { class: "postbox-slider-button-prev" }, [
                createVNode("i", { class: "fa-regular fa-angle-left" })
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!$props.item.blog_quote) {
    _push(`<div class="postbox__content"><div class="postbox__meta"><span><a href="#"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 13V11.6667C11.6667 10.9594 11.3857 10.2811 10.8856 9.78105C10.3855 9.28095 9.70724 9 9 9H3.66667C2.95942 9 2.28115 9.28095 1.78105 9.78105C1.28095 10.2811 1 10.9594 1 11.6667V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.33317 6.33333C7.80593 6.33333 8.99984 5.13943 8.99984 3.66667C8.99984 2.19391 7.80593 1 6.33317 1C4.86041 1 3.6665 2.19391 3.6665 3.66667C3.6665 5.13943 4.86041 6.33333 6.33317 6.33333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.item.author_name)}</a></span><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.item.date)}</span><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.item.comments)}</span></div><h3 class="postbox__title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
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
    _push(`</h3><div class="postbox__text"><p>${ssrInterpolate($props.item.desc)}...</p></div><div class="postbox__read-more">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/blog-details",
      class: "tp-btn"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` read more `);
        } else {
          return [
            createTextVNode(" read more ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</article>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/7e90gBu4pas"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/SingleBlogPostBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SingleBlogPostBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SingleBlogPostBox as S
};
//# sourceMappingURL=SingleBlogPostBox-DG45UJaR.js.map
