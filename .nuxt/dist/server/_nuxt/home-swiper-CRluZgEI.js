import { _ as __nuxt_component_0$1 } from "./Social-Cx28hJNr.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderThirteen from "./HeaderThirteen-Digth_Iz.js";
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
import "./OffCanvasSix-UeRQiqg5.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-solid-c5iWWNcd.js";
import "./logo-MlJCTsTl.js";
const slider_img_1 = "" + __buildAssetsURL("slider-1.BrZzo61d.jpg");
const slider_img_2 = "" + __buildAssetsURL("slider-2.C0RLa-7G.jpg");
const slider_img_3 = "" + __buildAssetsURL("slider-3.BvrdOhUe.jpg");
const slider_img_4 = "" + __buildAssetsURL("slider-4.DuImq86M.jpg");
const slider_img_5 = "" + __buildAssetsURL("slider-5.CBse2Yh7.jpg");
const slider_img_6 = "" + __buildAssetsURL("slider-6.BaxHo78G.jpg");
const _sfc_main$1 = {
  components: { Swiper, SwiperSlide, Social: __nuxt_component_0$1 },
  data() {
    return {
      slider_data: [
        {
          id: 1,
          img: slider_img_1,
          title: "Aristide",
          bg: ""
        },
        {
          id: 2,
          img: slider_img_2,
          title: "Rise",
          bg: "has-yellow-gradient"
        },
        {
          id: 3,
          img: slider_img_3,
          title: "Karcher",
          bg: "has-red-gradient"
        },
        {
          id: 4,
          img: slider_img_4,
          title: "Fashion",
          bg: "has-blue-gradient"
        },
        {
          id: 5,
          img: slider_img_5,
          title: "Design",
          bg: "has-purple-gradient"
        },
        {
          id: 6,
          img: slider_img_6,
          title: "Creative",
          bg: "slider__item-12-dark has-black-gradient"
        }
      ]
    };
  },
  setup() {
    const renderFraction = (currentClass, totalClass) => {
      return `<span class="${currentClass}"></span> 
            <span class="tp-swiper-fraction-divide"></span>
          <span class="${totalClass}"></span>`;
    };
    return {
      renderFraction,
      modules: [EffectFade, Mousewheel, Navigation, Pagination]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_social = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area p-relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    direction: "vertical",
    class: "slider__active-12 slider__height-12 swiper-container",
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    mousewheel: true,
    modules: $setup.modules,
    pagination: {
      el: ".slider-pagination-12",
      type: "fraction",
      renderFraction: $setup.renderFraction
    },
    navigation: {
      nextEl: ".slider-button-12-next",
      prevEl: ".slider-button-12-prev"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_data, (item) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: item.id,
            class: `slider__item-12 slider__bg-12 ${item.bg} d-flex align-items-center`
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-xl-12"${_scopeId2}><div class="slider__content-12-wrapper p-relative z-index-1"${_scopeId2}><div class="slider__thumb-12 p-relative"${_scopeId2}><div class="slider__thumb-12-shape"${_scopeId2}><svg width="343" height="542" viewBox="0 0 343 542" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M342.611 0.950439C298.64 96.4119 149.581 129.632 75.7749 186.568C-56.6496 288.697 5.60275 451.591 102.856 541.861C41.2282 466.059 12.5859 431.364 21.0735 334.2C37.6798 144.469 321.718 150.455 342.611 0.950439Z" fill="white"${_scopeId2}></path></svg><svg width="493" height="681" viewBox="0 0 493 681" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M492.405 0L478.524 1.41845C469.469 2.35462 456.155 3.77305 439.35 6.18441C422.545 8.59577 402.192 11.8582 379.057 16.1986C355.922 20.5391 330.033 26.4682 302.412 34.4683C273.046 42.9191 244.266 53.2866 216.258 65.5039C201.412 71.8302 186.85 79.2344 172.174 87.0359C157.565 95.0849 143.45 103.999 129.906 113.731C122.894 118.469 116.592 123.83 110.035 128.994C103.478 134.157 97.0337 139.604 91.3564 145.476C79.2872 156.833 68.1785 169.168 58.1438 182.356C48.2326 195.172 39.4024 208.789 31.744 223.065C24.5035 237.162 18.4367 251.831 13.6049 266.923C11.0216 274.328 9.54555 281.931 7.5017 289.42C6.13913 297.023 4.35076 304.456 3.41399 312.115C1.13967 327.138 0.000986929 342.311 0.00758029 357.505C-0.263245 387.711 6.72654 417.54 20.3893 444.485C34.2137 471.577 56.2702 494.272 78.6958 513.762C101.121 533.251 124.512 550.017 145.291 565.875C166.07 581.734 185.033 596.429 200.816 610.188C216.599 623.947 229.827 636.174 239.99 646.727C245.213 651.947 249.556 656.77 253.417 660.911C257.277 665.053 260.485 668.656 262.983 671.635L270.761 680.656L263.636 671.323C261.365 668.231 258.47 664.486 254.836 660.202C251.203 655.918 247.2 650.84 242.232 645.479C232.609 634.386 220.062 621.535 204.904 607.351C189.745 593.166 171.492 577.705 150.969 561.507C130.445 545.308 108.133 527.918 86.5022 508.457C64.8714 488.996 44.9155 466.669 31.886 440.939C19.0438 414.964 12.6745 386.272 13.321 357.307C13.4629 349.988 13.5765 342.64 14.3997 335.349C15.2229 328.059 16.0461 320.597 17.2384 313.136C18.4306 305.675 20.077 298.498 21.4396 291.179C23.5118 283.916 25.0447 276.569 27.5712 269.42C32.0675 254.846 37.7643 240.67 44.6033 227.037C51.7609 213.123 60.0793 199.837 69.4701 187.32C79.0377 174.545 89.6532 162.589 101.207 151.575C106.884 145.901 113.129 140.71 119.119 135.377C125.562 130.355 131.609 125.079 138.337 120.455C164.379 101.688 192.209 85.5338 221.425 72.2273C248.662 59.6694 276.715 48.9595 305.393 40.1704C332.417 31.83 357.738 25.1916 380.476 20.0568C403.214 14.922 423.255 10.9504 439.918 8.17023C456.581 5.39007 469.639 3.1773 478.666 1.92907L492.405 0Z" fill="white"${_scopeId2}></path></svg></div><img${ssrRenderAttr("src", item.img)} alt="slider img"${_scopeId2}></div><div class="slider__content-12 tp-slider-content-position-4"${_scopeId2}><h3 class="slider__title-12"${_scopeId2}>${ssrInterpolate(item.title)}</h3></div><div class="slider__content-12-branding"${_scopeId2}><p${_scopeId2}> BRANDING <br${_scopeId2}> 2022 </p></div></div></div></div></div><div class="slider__social-12"${_scopeId2}><span${_scopeId2}>Follow: </span>`);
                _push3(ssrRenderComponent(_component_social, null, null, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-xl-12" }, [
                        createVNode("div", { class: "slider__content-12-wrapper p-relative z-index-1" }, [
                          createVNode("div", { class: "slider__thumb-12 p-relative" }, [
                            createVNode("div", { class: "slider__thumb-12-shape" }, [
                              (openBlock(), createBlock("svg", {
                                width: "343",
                                height: "542",
                                viewBox: "0 0 343 542",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M342.611 0.950439C298.64 96.4119 149.581 129.632 75.7749 186.568C-56.6496 288.697 5.60275 451.591 102.856 541.861C41.2282 466.059 12.5859 431.364 21.0735 334.2C37.6798 144.469 321.718 150.455 342.611 0.950439Z",
                                  fill: "white"
                                })
                              ])),
                              (openBlock(), createBlock("svg", {
                                width: "493",
                                height: "681",
                                viewBox: "0 0 493 681",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  d: "M492.405 0L478.524 1.41845C469.469 2.35462 456.155 3.77305 439.35 6.18441C422.545 8.59577 402.192 11.8582 379.057 16.1986C355.922 20.5391 330.033 26.4682 302.412 34.4683C273.046 42.9191 244.266 53.2866 216.258 65.5039C201.412 71.8302 186.85 79.2344 172.174 87.0359C157.565 95.0849 143.45 103.999 129.906 113.731C122.894 118.469 116.592 123.83 110.035 128.994C103.478 134.157 97.0337 139.604 91.3564 145.476C79.2872 156.833 68.1785 169.168 58.1438 182.356C48.2326 195.172 39.4024 208.789 31.744 223.065C24.5035 237.162 18.4367 251.831 13.6049 266.923C11.0216 274.328 9.54555 281.931 7.5017 289.42C6.13913 297.023 4.35076 304.456 3.41399 312.115C1.13967 327.138 0.000986929 342.311 0.00758029 357.505C-0.263245 387.711 6.72654 417.54 20.3893 444.485C34.2137 471.577 56.2702 494.272 78.6958 513.762C101.121 533.251 124.512 550.017 145.291 565.875C166.07 581.734 185.033 596.429 200.816 610.188C216.599 623.947 229.827 636.174 239.99 646.727C245.213 651.947 249.556 656.77 253.417 660.911C257.277 665.053 260.485 668.656 262.983 671.635L270.761 680.656L263.636 671.323C261.365 668.231 258.47 664.486 254.836 660.202C251.203 655.918 247.2 650.84 242.232 645.479C232.609 634.386 220.062 621.535 204.904 607.351C189.745 593.166 171.492 577.705 150.969 561.507C130.445 545.308 108.133 527.918 86.5022 508.457C64.8714 488.996 44.9155 466.669 31.886 440.939C19.0438 414.964 12.6745 386.272 13.321 357.307C13.4629 349.988 13.5765 342.64 14.3997 335.349C15.2229 328.059 16.0461 320.597 17.2384 313.136C18.4306 305.675 20.077 298.498 21.4396 291.179C23.5118 283.916 25.0447 276.569 27.5712 269.42C32.0675 254.846 37.7643 240.67 44.6033 227.037C51.7609 213.123 60.0793 199.837 69.4701 187.32C79.0377 174.545 89.6532 162.589 101.207 151.575C106.884 145.901 113.129 140.71 119.119 135.377C125.562 130.355 131.609 125.079 138.337 120.455C164.379 101.688 192.209 85.5338 221.425 72.2273C248.662 59.6694 276.715 48.9595 305.393 40.1704C332.417 31.83 357.738 25.1916 380.476 20.0568C403.214 14.922 423.255 10.9504 439.918 8.17023C456.581 5.39007 469.639 3.1773 478.666 1.92907L492.405 0Z",
                                  fill: "white"
                                })
                              ]))
                            ]),
                            createVNode("img", {
                              src: item.img,
                              alt: "slider img"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "slider__content-12 tp-slider-content-position-4" }, [
                            createVNode("h3", { class: "slider__title-12" }, toDisplayString(item.title), 1)
                          ]),
                          createVNode("div", { class: "slider__content-12-branding" }, [
                            createVNode("p", null, [
                              createTextVNode(" BRANDING "),
                              createVNode("br"),
                              createTextVNode(" 2022 ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "slider__social-12" }, [
                    createVNode("span", null, "Follow: "),
                    createVNode(_component_social)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--><div class="slider-pagination-12 tp-swiper-fraction"${_scopeId}></div><div class="slider__nav-arrow-12 d-flex flex-column d-none d-md-block"${_scopeId}><button class="slider-button-12-next"${_scopeId}><i class="fa-regular fa-chevron-right"${_scopeId}></i></button><button class="slider-button-12-prev"${_scopeId}><i class="fa-regular fa-chevron-left"${_scopeId}></i></button></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_data, (item) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: item.id,
              class: `slider__item-12 slider__bg-12 ${item.bg} d-flex align-items-center`
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-xl-12" }, [
                      createVNode("div", { class: "slider__content-12-wrapper p-relative z-index-1" }, [
                        createVNode("div", { class: "slider__thumb-12 p-relative" }, [
                          createVNode("div", { class: "slider__thumb-12-shape" }, [
                            (openBlock(), createBlock("svg", {
                              width: "343",
                              height: "542",
                              viewBox: "0 0 343 542",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M342.611 0.950439C298.64 96.4119 149.581 129.632 75.7749 186.568C-56.6496 288.697 5.60275 451.591 102.856 541.861C41.2282 466.059 12.5859 431.364 21.0735 334.2C37.6798 144.469 321.718 150.455 342.611 0.950439Z",
                                fill: "white"
                              })
                            ])),
                            (openBlock(), createBlock("svg", {
                              width: "493",
                              height: "681",
                              viewBox: "0 0 493 681",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M492.405 0L478.524 1.41845C469.469 2.35462 456.155 3.77305 439.35 6.18441C422.545 8.59577 402.192 11.8582 379.057 16.1986C355.922 20.5391 330.033 26.4682 302.412 34.4683C273.046 42.9191 244.266 53.2866 216.258 65.5039C201.412 71.8302 186.85 79.2344 172.174 87.0359C157.565 95.0849 143.45 103.999 129.906 113.731C122.894 118.469 116.592 123.83 110.035 128.994C103.478 134.157 97.0337 139.604 91.3564 145.476C79.2872 156.833 68.1785 169.168 58.1438 182.356C48.2326 195.172 39.4024 208.789 31.744 223.065C24.5035 237.162 18.4367 251.831 13.6049 266.923C11.0216 274.328 9.54555 281.931 7.5017 289.42C6.13913 297.023 4.35076 304.456 3.41399 312.115C1.13967 327.138 0.000986929 342.311 0.00758029 357.505C-0.263245 387.711 6.72654 417.54 20.3893 444.485C34.2137 471.577 56.2702 494.272 78.6958 513.762C101.121 533.251 124.512 550.017 145.291 565.875C166.07 581.734 185.033 596.429 200.816 610.188C216.599 623.947 229.827 636.174 239.99 646.727C245.213 651.947 249.556 656.77 253.417 660.911C257.277 665.053 260.485 668.656 262.983 671.635L270.761 680.656L263.636 671.323C261.365 668.231 258.47 664.486 254.836 660.202C251.203 655.918 247.2 650.84 242.232 645.479C232.609 634.386 220.062 621.535 204.904 607.351C189.745 593.166 171.492 577.705 150.969 561.507C130.445 545.308 108.133 527.918 86.5022 508.457C64.8714 488.996 44.9155 466.669 31.886 440.939C19.0438 414.964 12.6745 386.272 13.321 357.307C13.4629 349.988 13.5765 342.64 14.3997 335.349C15.2229 328.059 16.0461 320.597 17.2384 313.136C18.4306 305.675 20.077 298.498 21.4396 291.179C23.5118 283.916 25.0447 276.569 27.5712 269.42C32.0675 254.846 37.7643 240.67 44.6033 227.037C51.7609 213.123 60.0793 199.837 69.4701 187.32C79.0377 174.545 89.6532 162.589 101.207 151.575C106.884 145.901 113.129 140.71 119.119 135.377C125.562 130.355 131.609 125.079 138.337 120.455C164.379 101.688 192.209 85.5338 221.425 72.2273C248.662 59.6694 276.715 48.9595 305.393 40.1704C332.417 31.83 357.738 25.1916 380.476 20.0568C403.214 14.922 423.255 10.9504 439.918 8.17023C456.581 5.39007 469.639 3.1773 478.666 1.92907L492.405 0Z",
                                fill: "white"
                              })
                            ]))
                          ]),
                          createVNode("img", {
                            src: item.img,
                            alt: "slider img"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "slider__content-12 tp-slider-content-position-4" }, [
                          createVNode("h3", { class: "slider__title-12" }, toDisplayString(item.title), 1)
                        ]),
                        createVNode("div", { class: "slider__content-12-branding" }, [
                          createVNode("p", null, [
                            createTextVNode(" BRANDING "),
                            createVNode("br"),
                            createTextVNode(" 2022 ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "slider__social-12" }, [
                  createVNode("span", null, "Follow: "),
                  createVNode(_component_social)
                ])
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 128)),
          createVNode("div", { class: "slider-pagination-12 tp-swiper-fraction" }),
          createVNode("div", { class: "slider__nav-arrow-12 d-flex flex-column d-none d-md-block" }, [
            createVNode("button", { class: "slider-button-12-next" }, [
              createVNode("i", { class: "fa-regular fa-chevron-right" })
            ]),
            createVNode("button", { class: "slider-button-12-prev" }, [
              createVNode("i", { class: "fa-regular fa-chevron-left" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/swipper-slider/SwipperSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderThirteen, SwipperSlider: __nuxt_component_0 },
  setup() {
    useHead({
      title: "Home Swiper - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_thirteen = resolveComponent("header-thirteen");
  const _component_swipper_slider = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_thirteen, null, null, _parent));
  _push(ssrRenderComponent(_component_swipper_slider, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-swiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeSwiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  homeSwiper as default
};
//# sourceMappingURL=home-swiper-CRluZgEI.js.map
