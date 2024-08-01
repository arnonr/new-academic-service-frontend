import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import layout from "./LayoutNine-Cb4OiWHd.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Controller, EffectFade, Pagination, Navigation } from "swiper";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { A as ArchitecturePortSliderItems } from "./ArchitecturePortSliderItems-BE6P2G4Z.js";
import { A as ArchSingleService, s as ser_icon_1, a as ser_icon_2, b as ser_icon_3, c as ser_icon_4 } from "./ArchSingleService-CIVTJwOT.js";
import { A as ArchitectureVideo } from "./ArchitectureVideo-BQQWAH2V.js";
import { A as ArchitectureTestimonial } from "./ArchitectureTestimonial-Acpg7BEL.js";
import { A as ArchitectureTeams } from "./ArchitectureTeams-CMmnTgjs.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
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
import "./HeaderNine-BY4nj4jl.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-MlJCTsTl.js";
import "./FooterNine-BiptAI3W.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "sal.js";
import "./video-icon-play-1PuRorIu.js";
import "vue3-carousel";
import "./user-2-CWDkkzb7.js";
import "./user-6-DCzgwACr.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./teamData-RHm96bod.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
const slider_bg_1 = "" + __buildAssetsURL("slider-1.DjCAt1ZO.jpg");
const slider_bg_2 = "" + __buildAssetsURL("slider-2.CGkcEdIr.jpg");
const slider_bg_3 = "" + __buildAssetsURL("slider-3.CdQDoOkS.jpg");
const slider_bg_4 = "" + __buildAssetsURL("slider-4.DBMP3bz3.jpg");
const slider_nav_1 = "" + __buildAssetsURL("slider-nav-1.FFV-q0XC.jpg");
const slider_nav_2 = "" + __buildAssetsURL("slider-nav-2.DFtl9HoC.jpg");
const slider_nav_3 = "" + __buildAssetsURL("slider-nav-3.Cwwo_SLs.jpg");
const slider_nav_4 = "" + __buildAssetsURL("slider-nav-4.CmESpX99.jpg");
const _sfc_main$7 = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slider_items: [
        {
          bg: slider_bg_1,
          title: `We are a fine
            <span class="slider-highlight">Architecture
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
           firm in New York`,
          subtitle: "Through a unique combination of engineering, construction and design disciplines and expertise."
        },
        {
          bg: slider_bg_2,
          title: `Commercial
            <span class="slider-highlight">building
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
          Concept in village`,
          subtitle: "Through a unique combination of engineering, construction and design disciplines and expertise."
        },
        {
          bg: slider_bg_3,
          title: `Premium
            <span class="slider-highlight">Real State
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
          Developers`,
          subtitle: "Through a unique combination of engineering, construction and design disciplines and expertise."
        },
        {
          bg: slider_bg_4,
          title: `Preparing for
            <span class="slider-highlight">Sustainable
              <svg width="309" height="28" viewBox="0 0 309 28" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 24C88.949 1.81947 186.908 -6.80627 304 24" stroke="#FF5A1B"
                    stroke-width="8" stroke-linecap="round" />
              </svg>
            </span>
          Future Architecture`,
          subtitle: "Through a unique combination of engineering, construction and design disciplines and expertise."
        }
      ],
      slider_nav_items: [
        {
          id: 1,
          title: `We are a fine Architecture <br /> firm in New York`,
          img: slider_nav_1
        },
        {
          id: 2,
          title: `Commercial building <br /> Concept in village`,
          img: slider_nav_2
        },
        {
          id: 3,
          title: `Commercial building <br /> Concept in village`,
          img: slider_nav_3
        },
        {
          id: 4,
          title: `We are a fine Architecture <br /> firm in New York`,
          img: slider_nav_4
        }
      ]
    };
  },
  methods: {
    renderBullet(index, cls) {
      return `<span class=${cls}>
                  <button>${index < 9 ? "0" : ""}${index + 1}</button>
            </span>`;
    }
  },
  setup() {
    let thumbsSwiper = ref();
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [
        FreeMode,
        Thumbs,
        Controller,
        EffectFade,
        Pagination,
        Navigation
      ]
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area p-relative" }, _attrs))}><div class="slider__social d-none d-lg-block"><ul><li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li><li><a href="#" class="tw"><i class="fa-brands fa-twitter"></i></a></li><li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li></ul><span>Follow Us</span></div><div class="slider__active swiper-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 0,
    "slides-per-view": 1,
    thumbs: { swiper: $setup.thumbsSwiper },
    modules: $setup.modules,
    loop: true,
    effect: "fade",
    pagination: {
      clickable: true,
      el: ".main-slider-dot-8",
      renderBullet: $options.renderBullet
    },
    navigation: {
      nextEl: ".slider-button-next, .slider-button-8-next",
      prevEl: ".slider-button-prev, .slider-button-8-prev"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_items, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "slider__item-8 p-relative z-index-1 slider__height-8 d-flex align-items-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="slider__bg-8 include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${item.bg})` })}"${_scopeId2}></div><div class="container"${_scopeId2}><div class="row justify-content-center"${_scopeId2}><div class="col-xxl-10 col-xl-8 col-lg-9"${_scopeId2}><div class="slider__content-8"${_scopeId2}><h3 class="slider__title-8"${_scopeId2}>${item.title ?? ""}</h3><p${_scopeId2}>${ssrInterpolate(item.subtitle)}</p><div class="slider__btn-8"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  href: "/portfolio-details-list",
                  class: "tp-btn-4 tp-style-border"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` See Project <i class="fa-regular fa-chevron-right"${_scopeId3}></i>`);
                    } else {
                      return [
                        createTextVNode(" See Project "),
                        createVNode("i", { class: "fa-regular fa-chevron-right" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "slider__bg-8 include-bg",
                    style: { backgroundImage: `url(${item.bg})` }
                  }, null, 4),
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row justify-content-center" }, [
                      createVNode("div", { class: "col-xxl-10 col-xl-8 col-lg-9" }, [
                        createVNode("div", { class: "slider__content-8" }, [
                          createVNode("h3", {
                            class: "slider__title-8",
                            innerHTML: item.title
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", null, toDisplayString(item.subtitle), 1),
                          createVNode("div", { class: "slider__btn-8" }, [
                            createVNode(_component_nuxt_link, {
                              href: "/portfolio-details-list",
                              class: "tp-btn-4 tp-style-border"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" See Project "),
                                createVNode("i", { class: "fa-regular fa-chevron-right" })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--><div class="main-slider-dot-8 d-none d-sm-flex"${_scopeId}></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_items, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "slider__item-8 p-relative z-index-1 slider__height-8 d-flex align-items-center"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "slider__bg-8 include-bg",
                  style: { backgroundImage: `url(${item.bg})` }
                }, null, 4),
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row justify-content-center" }, [
                    createVNode("div", { class: "col-xxl-10 col-xl-8 col-lg-9" }, [
                      createVNode("div", { class: "slider__content-8" }, [
                        createVNode("h3", {
                          class: "slider__title-8",
                          innerHTML: item.title
                        }, null, 8, ["innerHTML"]),
                        createVNode("p", null, toDisplayString(item.subtitle), 1),
                        createVNode("div", { class: "slider__btn-8" }, [
                          createVNode(_component_nuxt_link, {
                            href: "/portfolio-details-list",
                            class: "tp-btn-4 tp-style-border"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See Project "),
                              createVNode("i", { class: "fa-regular fa-chevron-right" })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode("div", { class: "main-slider-dot-8 d-none d-sm-flex" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="slider__nav d-none d-sm-block">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "slider__nav-active swiper-container",
    onSwiper: $setup.setThumbsSwiper,
    modules: $setup.modules,
    "space-between": 0,
    "slides-per-view": 1,
    "watch-slides-progress": true,
    loop: true,
    freeMode: false,
    "allow-touch-move": false,
    navigation: {
      nextEl: ".slider-8-button-next",
      prevEl: ".slider-8-button-prev"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_nav_items, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "slider__nav-item d-flex align-items-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="slider__nav-content"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.id <= 9 ? "0" : "")}${ssrInterpolate(item.id)}.</span><h3 class="slider-nav-title"${_scopeId2}>${item.title ?? ""}</h3></div><div class="slider__nav-thumb"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt="image"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "slider__nav-content" }, [
                    createVNode("span", null, toDisplayString(item.id <= 9 ? "0" : "") + toDisplayString(item.id) + ".", 1),
                    createVNode("h3", {
                      class: "slider-nav-title",
                      innerHTML: item.title
                    }, null, 8, ["innerHTML"])
                  ]),
                  createVNode("div", { class: "slider__nav-thumb" }, [
                    createVNode("img", {
                      src: item.img,
                      alt: "image"
                    }, null, 8, ["src"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_nav_items, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "slider__nav-item d-flex align-items-center"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "slider__nav-content" }, [
                  createVNode("span", null, toDisplayString(item.id <= 9 ? "0" : "") + toDisplayString(item.id) + ".", 1),
                  createVNode("h3", {
                    class: "slider-nav-title",
                    innerHTML: item.title
                  }, null, 8, ["innerHTML"])
                ]),
                createVNode("div", { class: "slider__nav-thumb" }, [
                  createVNode("img", {
                    src: item.img,
                    alt: "image"
                  }, null, 8, ["src"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="slider__nav-arrow d-flex flex-column"><button class="slider-button-8-next"><i class="fa-regular fa-chevron-right"></i></button><button class="slider-button-8-prev"><i class="fa-regular fa-chevron-left"></i></button></div></div><div class="mouse-scroll mouse-scroll-8"><a href="#tpabout" class="mouse-scroll-btn"></a></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/ArchitectureBanner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ArchitectureBanner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const bg = "" + __buildAssetsURL("about-img-2.BU7gGOX0.jpg");
const _imports_0 = "" + __buildAssetsURL("about-img-1.A7qga5H5.jpg");
const _sfc_main$6 = {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal },
  data() {
    return {
      bg
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section id="tpabout" class="about__area black-bg-12 pt-140"><div class="container"><div class="row"><div class="col-xxl-6 col-lg-6"><div class="about__thumb-wrapper-8 pr-100 pb-100 p-relative"><div class="about__thumb-8 w-img" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="about__thumb-8-right" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"><div class="about__thumb-bg include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"> 25 </div><div class="about__thumb-8-right-content"><p>Years <br>Experience</p></div><div class="about__thumb-8-right-year"><p>Start in <br>1982</p></div></div></div></div><div class="col-xxl-6 col-lg-6"><div class="about__wrapper-8 pt-30 pl-70" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="section__title-wrapper-8 mb-15"><span class="section__title-pre-8">Harry Stido.</span><h3 class="section__title-8">Influential <br> and <span class="section__title-highlight-8">Impactful. <svg width="206" height="24" viewBox="0 0 206 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 20.7505C47.375 13.8755 135.812 -15.4995 203 20.7505" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span></h3></div><p class="about-wrapper-8-paragraph">I would like to express my thanks for the work you done for me over the past years!</p><p>Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world class infrastructure solutions.</p><div class="about__call-8 d-flex align-items-center mb-50"><div class="about__call-icon-8 mr-20"><span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.973 15.697C18.973 16.021 18.901 16.354 18.748 16.678C18.595 17.002 18.397 17.308 18.136 17.596C17.695 18.082 17.209 18.433 16.66 18.658C16.12 18.883 15.535 19 14.905 19C13.987 19 13.006 18.784 11.971 18.343C10.936 17.902 9.901 17.308 8.875 16.561C7.84 15.805 6.859 14.968 5.923 14.041C4.996 13.105 4.159 12.124 3.412 11.098C2.674 10.072 2.08 9.046 1.648 8.029C1.216 7.003 1 6.022 1 5.086C1 4.474 1.108 3.889 1.324 3.349C1.54 2.8 1.882 2.296 2.359 1.846C2.935 1.279 3.565 1 4.231 1C4.483 1 4.735 1.054 4.96 1.162C5.194 1.27 5.401 1.432 5.563 1.666L7.651 4.609C7.813 4.834 7.93 5.041 8.011 5.239C8.092 5.428 8.137 5.617 8.137 5.788C8.137 6.004 8.074 6.22 7.948 6.427C7.831 6.634 7.66 6.85 7.444 7.066L6.76 7.777C6.661 7.876 6.616 7.993 6.616 8.137C6.616 8.209 6.625 8.272 6.643 8.344C6.67 8.416 6.697 8.47 6.715 8.524C6.877 8.821 7.156 9.208 7.552 9.676C7.957 10.144 8.389 10.621 8.857 11.098C9.343 11.575 9.811 12.016 10.288 12.421C10.756 12.817 11.143 13.087 11.449 13.249C11.494 13.267 11.548 13.294 11.611 13.321C11.683 13.348 11.755 13.357 11.836 13.357C11.989 13.357 12.106 13.303 12.205 13.204L12.889 12.529C13.114 12.304 13.33 12.133 13.537 12.025C13.744 11.899 13.951 11.836 14.176 11.836C14.347 11.836 14.527 11.872 14.725 11.953C14.923 12.034 15.13 12.151 15.355 12.304L18.334 14.419C18.568 14.581 18.73 14.77 18.829 14.995C18.919 15.22 18.973 15.445 18.973 15.697Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path opacity="0.4" d="M15.8492 7.30039C15.8492 6.76039 15.4262 5.93239 14.7962 5.25739C14.2202 4.63639 13.4552 4.15039 12.6992 4.15039" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.4" d="M18.9992 7.3C18.9992 3.817 16.1822 1 12.6992 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="about__call-content-8"><h4>Hotline 24/7</h4><p><a href="tel:964-742-44-763">+964 742 44 763</a></p></div></div><div class="about__btn-8 d-block d-sm-flex align-items-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/about",
    class: "tp-btn-border-8 mb-20 mr-30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`More About Us`);
      } else {
        return [
          createTextVNode("More About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="#" class="about-play-btn-2 mb-20 popup-video"><span><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7.56533L0.146194 14.9831L0.146194 0.147537L13 7.56533Z" fill="currentColor"></path></svg></span> View our <br>Story </a></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/K0D4uPmKkqY"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/ArchitectureAbout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ArchitectureAbout = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      counter_data: [
        {
          delay: ".3s",
          num: 99,
          text: "%",
          title: "Satisfaction <br /> Clients"
        },
        {
          delay: ".5s",
          num: 246,
          text: "",
          title: "Employees On <br /> Worldwide"
        },
        {
          delay: ".7s",
          num: 1824,
          text: "",
          title: "Project Completed <br /> On 40 Countries"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter__area counter__border-8 black-bg-12 pt-125 pb-80" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($data.counter_data, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="counter__item-8 mb-40" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="counter__content-8 d-flex align-items-center"><h4><span class="counter">${ssrInterpolate(item.num)}</span> ${ssrInterpolate(item.text)}</h4><p>${item.title ?? ""}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counters/ArchitectureCounter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ArchitectureCounter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  components: { ArchitecturePortSliderItems }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_architecture_port_slider_items = resolveComponent("architecture-port-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio_area pt-110 black-bg-13" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xl-6 col-lg-8 col-md-7"><div class="section__title-wrapper-8 mb-60"><span class="section__title-pre-8">Our projects</span><h3 class="section__title-8"> latest <span class="section__title-highlight-8">projects <svg width="206" height="24" viewBox="0 0 206 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 20.7505C47.375 13.8755 135.812 -15.4995 203 20.7505" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span></h3></div></div><div class="col-xl-6 col-lg-4 col-md-5"><div class="portfolio__more-8 text-md-end mb-70">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio",
    class: "tp-btn-border-7"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View all Projects <i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" View all Projects "),
          createVNode("i", { class: "fa-regular fa-chevron-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="container-fluid gx-0"><div class="row gx-0"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_architecture_port_slider_items, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/ArchitecturePortfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ArchitecturePortfolio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  components: { ArchSingleService },
  data() {
    return {
      service_data: [
        {
          icon: ser_icon_1,
          title: "Planning",
          subtitle: "There are many variations of passages of lorem Ipsum available.!",
          project: "350"
        },
        {
          icon: ser_icon_2,
          title: "Architecture",
          subtitle: "There are many variations of passages of lorem Ipsum available.!",
          project: "120"
        },
        {
          icon: ser_icon_3,
          title: "Design",
          subtitle: "There are many variations of passages of lorem Ipsum available.!",
          project: "240"
        },
        {
          icon: ser_icon_4,
          title: "Products",
          subtitle: "There are many variations of passages of lorem Ipsum available.!",
          project: "220"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_arch_single_service = resolveComponent("arch-single-service");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services__area pt-115 pb-105 black-bg-12" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-8 text-center mb-60"><span class="section__title-pre-8">Our Services</span><h3 class="section__title-8"> Our featured <span class="section__title-highlight-8">services <svg width="206" height="24" viewBox="0 0 206 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 20.7505C47.375 13.8755 135.812 -15.4995 203 20.7505" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span></h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.service_data, (item, i) => {
    _push(`<div class="col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_arch_single_service, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/ArchitectureServices.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ArchitectureServices = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const award_icon_1 = "" + __buildAssetsURL("award-1.Dbia6Q2W.png");
const award_icon_2 = "" + __buildAssetsURL("award-2.DSFJ6L5V.png");
const award_icon_3 = "" + __buildAssetsURL("award-3.DElHDgk1.png");
const award_icon_4 = "" + __buildAssetsURL("award-4.x3IN-wQs.png");
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      award_data: [
        { year: "2022", icon: award_icon_1, title: "Red dot design Award", subtitle: "Daniel Villa, Romania" },
        { year: "2021", icon: award_icon_2, title: "AAG winner 2021", subtitle: "Canbin wood in Forest" },
        { year: "2020", icon: award_icon_3, title: "BUILD architecture Awards", subtitle: "Architect Thiago Alcantara" },
        { year: "2018", icon: award_icon_4, title: "Art of year 2018", subtitle: "Daniel Villa, Romania" }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "award__area pt-130 pb-95 black-bg-13" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-8 text-center mb-60"><span class="section__title-pre-8">International Awards</span><h3 class="section__title-8"><span class="section__title-highlight-8">Awards <svg width="246" height="26" viewBox="0 0 246 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 23C56.25 15.2537 162.375 -17.8439 243 23" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span> &amp; Achievements </h3></div></div></div><div class="row"><div class="col-xxl-12"><!--[-->`);
  ssrRenderList($data.award_data, (item, i) => {
    _push(`<div class="award__item-8 transition-3" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="row align-items-center"><div class="col-xl-2 col-lg-2 col-md-2"><div class="award__year text-md-center pb-30 pl-10"><span>${ssrInterpolate(item.year)}</span></div></div><div class="col-xl-2 col-lg-2 col-md-2"><div class="award__icon-8 pl-15"><span><img${ssrRenderAttr("src", item.icon)} alt=""></span></div></div><div class="col-xl-5 col-lg-5 col-md-5"><div class="award__content-8"><h3 class="award__title-8">${ssrInterpolate(item.title)}</h3><p>${ssrInterpolate(item.subtitle)}</p></div></div><div class="col-xl-3 col-lg-3 col-md-3"><div class="award__btn-8 text-md-center">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/portfolio-details-list",
      class: "tp-link-btn-3"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` See Projects <span${_scopeId}><i class="fa-regular fa-chevron-right"${_scopeId}></i></span>`);
        } else {
          return [
            createTextVNode(" See Projects "),
            createVNode("span", null, [
              createVNode("i", { class: "fa-regular fa-chevron-right" })
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awards/ArchitectureAwards.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ArchitectureAwards = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  mixins: [blogData],
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area black-bg-12 pt-110 pb-100" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-8 col-xl-8 col-lg-8"><div class="section__title-wrapper-8 mb-70"><span class="section__title-pre-8">Blog &amp; Updates</span><h3 class="section__title-8"> Latest <span class="section__title-highlight-8">Articles <svg width="246" height="26" viewBox="0 0 246 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="wow" d="M3 23C56.25 15.2537 162.375 -17.8439 243 23" stroke="#FF5A1B" stroke-width="6" stroke-linecap="round"></path></svg></span> &amp; Tips </h3></div></div><div class="col-xxl-4 col-xl-4 col-lg-4"><div class="blog__more-8 text-lg-end mb-80">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-list-sidebar",
    class: "tp-btn-border-7"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View all Articles <i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" View all Articles "),
          createVNode("i", { class: "fa-regular fa-chevron-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="row"><div class="col-xxl-12"><div class="blog__slider-8">`);
  _push(ssrRenderComponent(_component_Swiper, {
    class: "blog__slider-active-8 swiper-container",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
    modules: $setup.modules,
    pagination: {
      el: ".blog-slider-dot-8",
      clickable: true
    },
    navigation: {
      nextEl: ".blog-8-button-next",
      prevEl: ".blog-8-button-prev"
    },
    breakpoints: {
      "992": {
        slidesPerView: 2,
        centeredSlides: false
      },
      "768": {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      "576": {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      "0": {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.blogData.filter(
          (item) => item.home_architecture
        ), (blog) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: blog.id,
            class: "blog__item-8 transition-3 p-relative fix"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="blog__thumb-8 transition-3" style="${ssrRenderStyle({ backgroundImage: `url(${blog.img})` })}"${_scopeId2}></div><div class="blog__tag-8"${_scopeId2}><span${_scopeId2}><a href="#"${_scopeId2}>${ssrInterpolate(blog.tag)}</a></span></div><div class="blog__content-8"${_scopeId2}><div class="blog__meta-8"${_scopeId2}><span class="blog-category"${_scopeId2}><a href="#"${_scopeId2}>${ssrInterpolate(blog.category)}</a></span><span${_scopeId2}>${ssrInterpolate(blog.date)}</span></div><h3 class="blog__title-8"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<span${_scopeId3}>${blog.title ?? ""}</span>`);
                    } else {
                      return [
                        createVNode("span", {
                          innerHTML: blog.title
                        }, null, 8, ["innerHTML"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</h3></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "blog__thumb-8 transition-3",
                    style: { backgroundImage: `url(${blog.img})` }
                  }, null, 4),
                  createVNode("div", { class: "blog__tag-8" }, [
                    createVNode("span", null, [
                      createVNode("a", { href: "#" }, toDisplayString(blog.tag), 1)
                    ])
                  ]),
                  createVNode("div", { class: "blog__content-8" }, [
                    createVNode("div", { class: "blog__meta-8" }, [
                      createVNode("span", { class: "blog-category" }, [
                        createVNode("a", { href: "#" }, toDisplayString(blog.category), 1)
                      ]),
                      createVNode("span", null, toDisplayString(blog.date), 1)
                    ]),
                    createVNode("h3", { class: "blog__title-8" }, [
                      createVNode(_component_nuxt_link, { href: "/blog-details" }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            innerHTML: blog.title
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.blogData.filter(
            (item) => item.home_architecture
          ), (blog) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: blog.id,
              class: "blog__item-8 transition-3 p-relative fix"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "blog__thumb-8 transition-3",
                  style: { backgroundImage: `url(${blog.img})` }
                }, null, 4),
                createVNode("div", { class: "blog__tag-8" }, [
                  createVNode("span", null, [
                    createVNode("a", { href: "#" }, toDisplayString(blog.tag), 1)
                  ])
                ]),
                createVNode("div", { class: "blog__content-8" }, [
                  createVNode("div", { class: "blog__meta-8" }, [
                    createVNode("span", { class: "blog-category" }, [
                      createVNode("a", { href: "#" }, toDisplayString(blog.category), 1)
                    ]),
                    createVNode("span", null, toDisplayString(blog.date), 1)
                  ]),
                  createVNode("h3", { class: "blog__title-8" }, [
                    createVNode(_component_nuxt_link, { href: "/blog-details" }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          innerHTML: blog.title
                        }, null, 8, ["innerHTML"])
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="blog-slider-dot-8 mt-40 tp-swiper-dot tp-swiper-dot-2 text-center"></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/ArchitectureBlogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArchitectureBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-architecture",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Architecture - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArchitectureBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureCounter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitecturePortfolio, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureServices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureAwards, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureVideo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureTeams, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ArchitectureBlogs, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ArchitectureBanner),
              createVNode(ArchitectureAbout),
              createVNode(ArchitectureCounter),
              createVNode(ArchitecturePortfolio),
              createVNode(ArchitectureServices),
              createVNode(ArchitectureAwards),
              createVNode(ArchitectureVideo),
              createVNode(ArchitectureTestimonial),
              createVNode(ArchitectureTeams),
              createVNode(ArchitectureBlogs)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-architecture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-architecture-opgsJZsR.js.map
