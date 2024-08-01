import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { resolveComponent, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import LayoutCustom from "./LayoutCustom-CKpPXCYI.js";
import { b as bg_1 } from "./slider-1-C06Jywby.js";
import { N as NiceSelect } from "./NiceSelect-Em7NpCoz.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { H as HomeServices } from "./HomeServices-Bj4bslBR.js";
import { H as HomeTeams } from "./HomeTeams-C-PAF4jB.js";
import { c as commonFaq } from "./commonFaq-BjwOp-Jz.js";
import { S as SingleFaq } from "./SingleFaq-CsPiM7Uv.js";
import { H as HomePortfolio } from "./HomePortfolio-lhyEoGzG.js";
import { H as HomeTestimonial } from "./HomeTestimonial-BR_t5WQ_.js";
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
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "sal.js";
import "./teamData-RHm96bod.js";
import "./SingleTeam-DtY4GY80.js";
import "./portfolio-3-DvsWHYw2.js";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./BrandSlider-DfDjinIV.js";
import "./user-6-DCzgwACr.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
const bg_2 = "" + __buildAssetsURL("slider-2.CZp5nh_h.jpg");
const bg_3 = "" + __buildAssetsURL("slider-3.C7uDN4zA.jpg");
const _sfc_main$9 = {
  components: {
    NiceSelect
  },
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        country: ""
      }
    };
  },
  methods: {
    changeHandler(item) {
      this.formValue.country = item.value;
    },
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NiceSelect = resolveComponent("NiceSelect");
  _push(`<form${ssrRenderAttrs(_attrs)}><div class="slider__form-wrapper flex-wrap"><div class="slider__form-input"><input${ssrRenderAttr("value", $data.formValue.name)} type="text" placeholder="Your Name"></div><div class="slider__form-input"><input${ssrRenderAttr("value", $data.formValue.email)} type="text" placeholder="Your Email"></div><div class="slider__form-input has-select">`);
  _push(ssrRenderComponent(_component_NiceSelect, {
    options: [
      { value: "Select Event", text: "Select Event" },
      { value: "Wedding", text: "Wedding" },
      { value: "Photography", text: "Photography" },
      { value: "Consulting", text: "Consulting" }
    ],
    "default-current": 0,
    name: "Select Event",
    onOnChange: $options.changeHandler
  }, null, _parent));
  _push(`</div><div class="slider__form-input"><button type="submit" class="slider-form-btn tp-link-btn-3"> Join the event <i class="fa-regular fa-arrow-right"></i></button></div></div></form>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/SliderForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SliderForm = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$8 = {
  components: {
    Swiper,
    SwiperSlide,
    SliderForm
  },
  data() {
    return {
      bg_1,
      bg_2,
      bg_3,
      slider_data: [
        {
          id: 1,
          pre_title: "Hello! Consulting",
          title: "Workshops Business Consulting",
          bg: bg_1
        },
        {
          id: 2,
          pre_title: "Hello! Consulting",
          title: "To This Template Than What You Can See",
          bg: bg_2
        },
        {
          id: 3,
          pre_title: "Hello! Consulting",
          title: "Digital Age Adventure <br /> In Marketing",
          bg: bg_3
        }
      ]
    };
  },
  methods: {
    renderBullet: function(index, className) {
      return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade]
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_SliderForm = resolveComponent("SliderForm");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area p-relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Swiper, {
    class: "slider__active swiper-container",
    slidesPerView: 1,
    loop: true,
    modules: $setup.modules,
    effect: "fade",
    pagination: {
      el: ".main-slider-dot",
      clickable: true,
      renderBullet: $options.renderBullet
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slider_data, (item, i) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: i,
            class: "slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="slider__bg p-relative include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${item.bg})` })}"${_scopeId2}></div><div class="container"${_scopeId2}><div class="row justify-content-center"${_scopeId2}><div class="col-xxl-12"${_scopeId2}><div class="slider__content text-center"${_scopeId2}><span class="slider__title-pre"${_scopeId2}>${ssrInterpolate(item.pre_title)}</span><h3 class="slider__title"${_scopeId2}>${item.title ?? ""}</h3><div class="slider__form"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_SliderForm, null, null, _parent3, _scopeId2));
                _push3(`</div></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "slider__bg p-relative include-bg",
                    style: { backgroundImage: `url(${item.bg})` }
                  }, null, 4),
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row justify-content-center" }, [
                      createVNode("div", { class: "col-xxl-12" }, [
                        createVNode("div", { class: "slider__content text-center" }, [
                          createVNode("span", { class: "slider__title-pre" }, toDisplayString(item.pre_title), 1),
                          createVNode("h3", {
                            class: "slider__title",
                            innerHTML: item.title
                          }, null, 8, ["innerHTML"]),
                          createVNode("div", { class: "slider__form" }, [
                            createVNode(_component_SliderForm)
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
        _push2(`<!--]--><div class="main-slider-dot d-none d-lg-flex"${_scopeId}></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slider_data, (item, i) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: i,
              class: "slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "slider__bg p-relative include-bg",
                  style: { backgroundImage: `url(${item.bg})` }
                }, null, 4),
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row justify-content-center" }, [
                    createVNode("div", { class: "col-xxl-12" }, [
                      createVNode("div", { class: "slider__content text-center" }, [
                        createVNode("span", { class: "slider__title-pre" }, toDisplayString(item.pre_title), 1),
                        createVNode("h3", {
                          class: "slider__title",
                          innerHTML: item.title
                        }, null, 8, ["innerHTML"]),
                        createVNode("div", { class: "slider__form" }, [
                          createVNode(_component_SliderForm)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode("div", { class: "main-slider-dot d-none d-lg-flex" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mouse-scroll"><a href="#tpabout" class="mouse-scroll-btn"></a></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/HomeHero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0$1 = "" + __buildAssetsURL("about-img-1.CTVt1neG.jpg");
const _imports_1$1 = "" + __buildAssetsURL("about-author-thumb.DQvWIUox.jpg");
const _sfc_main$7 = {
  mixins: [SalScrollAnimationMixin]
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "tpabout",
    class: "about__area pt-120 pb-120"
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="about__thumb-wrapper ml-70 pr-100"><div class="about__thumb w-img" data-sal="slide-right" data-sal-delay="130" data-sal-duration="1000"><div class="tp-thumb-overlay wow"></div><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="about__thumb-text"><h3 data-text="Expert">Expert</h3></div><div class="about__experience"><h4><span class="counter">12</span></h4><p> Years <br> Experience </p></div></div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="about__wrapper pr-95" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"><div class="section__title-wrapper mb-25"><span class="section__title-pre">Expert Guidance</span><h3 class="section__title"> What they think <span class="section__title-highlight"> about us <svg width="220" height="27" viewBox="0 0 220 27" fill="none"><path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"></path></svg></span></h3></div><p> The city and town name generator uses a database of over five million names across more than 150 countries. If you are looking for a random city or town name to spark a location for a book, game, or a script, millions of possibilities are at your finger tips. How you use the city or town name is up to you. </p><div class="about__author d-sm-flex align-items-center mb-40"><div class="about__author-inner d-flex align-items-center"><div class="about__author-thumb mr-10"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><div class="about__author-content d-sm-flex align-items-center"><h3 class="about__author-title"> Hi, I&#39;m <span>Robert Fox.</span></h3></div></div><div class="about__author-btn"><span class="about-author-link">let’s talk about ideas</span></div></div><div class="about__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/about",
    class: "tp-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Discover Now`);
      } else {
        return [
          createTextVNode("Discover Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/HomeAbout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HomeAbout = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = "" + __buildAssetsURL("counter-shape-1.CmCX7WaF.png");
const _imports_1 = "" + __buildAssetsURL("counter-shape-2.DsfYO4ye.png");
const _imports_2 = "" + __buildAssetsURL("counter-shape-3.1fpBYyyt.png");
const _imports_3 = "" + __buildAssetsURL("counter-shape-4.ByrEpS5D.png");
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBrZW/LyxRFMfPsO+tJ5Hn5SUaERINEQoKCZUfhSj8ATQ6nRKVRCfRS9RUOo2GAjUSJCLxI0REovF7GT92fc7OubJZxq4dJ/nkzM6c8/3ee+fuXE++iFQq1UzqghpoghI4NxY9z1v4qt8LEW0gDUIrxI2SjGuHmsxhMpGXOMIDpD4Te4EV2IZ9q6+CRtC6FjM5gw5MjiUsEB6BGZiGXskRWgM78ABHUBNW2AOTMA7/Jc+g9i+sQQIOoDy7oAHGYPTDw/wNVuEWprIf9sMwtEiBQW8VXMCNmum9Ii4qyDG44IVsSIFB7ylpFhIwlBaHCruxL9FjHh6g24nH7caJRI9dCQZa68RfTdyXiMHS3JIO1YDlrlTxZxN/kp8J3/SSKp4w/sjPRLHp3ekuuZZgtxRLxGApqiX4RBzrErmR6zTiEj3a4RHW9YeK+2agzgUb0PuPVGday2lxhp8i30kw+jKKPCksOqEUttDccyPXLfRkjrpzyr9rQH0bqR4uJfiXpiPmLjDwKdJZ/DaDa+4lc4j+kuCbrieWznyJnst3zU8aYmbgDgtfjbNq9JkeGrrGZRKswLpbjlBxay7KMHDZfSpKDXfs6b9yE+H7bB0vx7RjGYKZZ6n26Sa4QvQqrD/vF2ezUZK53oWLN1q1/cteP3nKAAAAAElFTkSuQmCC";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgBxZdvTxNBEMZnT0qBaFGjIkaLGI0v1EZj9J36BfykvpOvwBfw7wtDDIqaRkAFJChaejzP7SxMmyt3LXfHJJNt73Znfrs7M7frZAiJ49ihGYPWoKf0d6Qaa7e/VOdcJ69dl6cTnEfqNKj9P9b3P9Jnu9B1wOxk2c+E6AOgdIPCQVf70A5XZxx6BjptxmxC2+j7byQIA8B+neA0BziBzkEvQic5FrqM8ZtDQShAstcYvCcjCGxwZeYUhraWYOt7JoQubaTv9jAolmMKbDbRzItf1XewuWrfRyljXJEAiUHnVtCsKEQLUJMDIUwMFAZgQJbRtKF16INUCACEdOsWDWDkg/jMmoG/uR4IGwejBmEege3/aN6rr/keCDnM6dIADAhjg6sxi8nPJBCmFEfDlNpjypL4STcTCDksuWXFQZqsidmSUOcJkasaFiS/1G8DO1G3EKXHQxD9juyo3/GwHaFCVikdhajbmDgpiAmbopFUK2fFh8KWhahJtUIIloUEoqsQE1KRICOuqs8f/E+IP/qgIdXJLfW5lkBolWTK1EA4JdXIbYV4m0Dow5Czl6VkwUTvij/6/dbvyAEEz34sVtPodElKEtjmAfip+AkvhucJhH6+2/q/yVIq5cgT6HnoKny+7oFQEK7GT/Gp2ioaBPYIcF98/L2w7/oL1BfxNygG6EMMLCRtFeCZ+G1YwIQ37Pu00zYd8wx4Wqk/YtBXGc05Y+A59Lr46vgStl7193MDBnNACzqr9N8UZkPyOedWPoI+Fr+qyRZg/Ke0/lk3sBtoboq/2hFmS3wA8wKzDaPbxin7MLPuiU/1KR3DNFw4agJ57qI0dkf8qjSk92I86JJMZXwtwvnnLB9Dfb4BdA3NFfHXugviZ8ut4ymalZexsw59A+e7ee3uA1Jc3IvTMhxWAAAAAElFTkSuQmCC";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMSSURBVHgB3Zk5aFRRFIbPaDRxX7OYxAg2YiMINoKNYCNYiI2FYCM2NoIQUFCwESwsBBtFRERIYcAFEQ2EYFDBiIqIGJBA0EIx0ez7Nn6/7yCKWzKZee/d/PBx4FX349x77sx7GZsDyWazGyiNUGShB5kaaIUxaLeQg8B6eA2D8M47FWZc5iX0wNvQZaqhBTq9QzUWalh8FTyBj/BiLsg0w3t4pm1noYbFV0IjtHmHqi3UuMwDH88PQ5dZB3f98KtDVRZqWHwF3PbDf38uyNTDU+9QpYUaFl8OdfAIbmnbWahxmWvQBDdClymDK9DgHaqwUMPiS+GSnxd1qNxyyDxLQVj8WsppKIMOqM1kMp8thyQu5DInodQimRPIdFiOSVTIZY5bJNMJp2Yjo2QsoSCzhlILOvg9cAaZTptlEhFCZjXlGOjg98JZZL5YHhK7EDKrKEctGgCSOYfMV8tTYhVymSMWyfTB+XzKKLG99nGZw6Dt1gUXkOmyPCeWDiGzgnLIomnWDxcLIaMUXMhlDlokMwCXkem2AqWgQsgspxwA3TeSuYpMjxUwBRNymf2g+2YQrhdaRinIUEBmGWUfSEqjuQ6ZXoshee8QMkspey2aZkNQH5eMklchl9kDGtHDcBOZPosxeRNCZgllN6yEEbiDTL/FnLwIucwui2RG4V4SMsqshZBZTNkJum8k04DMgCWUWU05ZBZRdoCkJNGUpIySc4dcZrtFo3kMmpEZtISTU4eQKaFsA0lpND9GZshSkBl3yGW2gi7PcWhJi4wyIyFkiilbQPfNBDxHZthSlGlvOWQWUjaDpCTxCpkRS1mm1SFkFlA2ge6bSXiTRhnlv0Ius9EimSloRWbUUpp/CiGjLanP5bpnJNOWZhnlr0Iuow9MGs1ZaEdmzFKePwohM9+iF4Al/ugDMuMWQH4TQkavh/X/v9gffQpFRvllbLuMfmSq6p7pQGbCAsoPIZfRJNN2k0R3aDLKzx3SFpOU7pk+ZCYtwHwX8omm86TR3I/MlAWaImQkIjSaB5DJWuhRh1ws+HwDXKfZYBY0QB4AAAAASUVORK5CYII=";
const _imports_7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBxZY9LENRFMfPpYQQ4vubzWQxSow2g9FmsNkYxGA22UwmsWAQEgMxiIVEwiAMxCAMRIRS31Srfie9EgR9bV+vf/LLSV7y+js5997Xa+QfEovFGikrkCOug7wBduEFjsRlENbDFoTgAJrEVZDVwRqcwY5reS2swDFs2j3gTF4Di7BvJ1AvroKsGuZh207AqbwKZmDDTqBOXAVZJUzCKszpMoirIKuAcViC6UTyLPExyMopw1AJ5zBgjDkTFw0gL6MMQoWVDyE/T/SeER+CvJTSD7VwDyPIL7y8G5A0g7yE0gc6gSCMIr/0+n5aDSAvpvSCTkClY8iDyfxGykuAvIjSA1XwBOPIryTJpNSAlXdLfLc/wwTya0khSS8B8kJKF2gTIZhCHpIUk9QEkBdQOkHPexhmkd9IGvHcgJV3SHy3v8IC8ltJM56WAHk+pR20iTtYRn4nPiThBJDnUdpAz3sEVpHfi08xHuStVh6FdeQP4mPMH/JcSgvoxyYGm8gfxeeYX+R6X2+W+FFT+Q7yJ8lAAj/I9ZneWLUJ/cjsIX+RDCXwTZ5NqbbP9ZwfZlL+pQHkejfQP5VsKz9BHpYMJ2Dluhf0E6tN6G4/RR4RB/mYgK63sfKgK/nnBlT+BtfIo+I6eubtMjjPOxQ+G0hjo7L0AAAAAElFTkSuQmCC";
const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAiCAYAAAATQPRFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7Zg5SFxRGEb/yUZC9sUshqRIlSJdulRp0qWws7Ows7KxUgQrOysrQa2stNJKERVUUBQr7RQUl0ZE3Hcdz8e7MDqK68zofXMPHP7qweNw5947zyxwLslk8jtW4xsLnIUw33AC97DIAqdxgcZwDUfDSkqDIF9xCBdxMARKgyCF2Idz2IuvLZDCBerCSezEVxZIQZDP2IHj2B4CpUGQT9iGI26+tEAKF6gFB9wMgU5CkAJsxG5suizQA8szCPKBUYMfcQrLE4nE+kXP5FUkF6gKC3AaKwi0cdlzeROJQO8YFfgeZ7CSQJtXefaR5QEEessotyjQLNYSaOuqzycs5rhAZfgFF7HuOoFErFeS+2tRigo1j/XXDSRiu5LczbnEolNsGRsItG03IJaRXKBii06xFWwm0I7dkNj93Aj0gqEPZQqlPajlNoFErFYSgZ4z/qPuQ2vYSqBduyWxieQC/bPomNcNuj0TgUQsIhHoGeOvRaeYLoidmQokvI9EoKeMP6hPrTq9egi0ZxnE60gu0G+LAmlz7ifQvmUYb083Aj1h/EKF0iY9nI1AwsuV5AL9RH0HOsAxAh1YlvAuEoEeM36g7kOHOJHNQMKrnxuB9L6FFr23/oNNZjuQmUeRCKRvX7ok6p21Sc8Q6NBygBeRXCD9o9f76nhfINCR5QhfVpJOsIcWBVrKZSBx7yO5fUgrSXvPKoGSlmN8WEmKor1n8y4CeYH2I7zTq8oxY6Es+Kr9+PYAAAAASUVORK5CYII=";
const _sfc_main$6 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      startCounter: false,
      counterData: [
        { title: "Cups of Coffee", number: 914, text: "K" },
        { title: "Happy Clients", number: 123, text: "K" },
        { title: "Review", number: 76, text: "K" }
      ]
    };
  },
  methods: {}
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter__area counter__border pb-110" }, _attrs))}><div class="container"><div class="counter__inner black-bg fix"><div class="counter__shape"><img class="counter__shape-1" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000"${ssrRenderAttr("src", _imports_0)} alt=""><img class="counter__shape-2" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000"${ssrRenderAttr("src", _imports_1)} alt=""><img class="counter__shape-3" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"${ssrRenderAttr("src", _imports_2)} alt=""><img class="counter__shape-4" data-sal="slide-up" data-sal-delay="120" data-sal-duration="1000"${ssrRenderAttr("src", _imports_3)} alt=""><img class="counter__shape-5" data-sal="slide-left" data-sal-duration="1000"${ssrRenderAttr("src", _imports_4)} alt=""><img class="counter__shape-6" data-sal="slide-right" data-sal-duration="1000"${ssrRenderAttr("src", _imports_5)} alt=""><img class="counter__shape-7 wow fadeInUp" data-sal="slide-up" data-sal-duration="1000"${ssrRenderAttr("src", _imports_6)} alt=""><img class="counter__shape-8" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"${ssrRenderAttr("src", _imports_7)} alt=""><img class="counter__shape-9" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"${ssrRenderAttr("src", _imports_8)} alt=""></div><div class="row justify-content-center"><!--[-->`);
  ssrRenderList($data.counterData, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4"><div class="counter__item"><div class="counter__content"><p>${ssrInterpolate(item.title)}</p><h3 class="counter__title"> +<span class="counter">${ssrInterpolate(item.number)}</span>${ssrInterpolate(item.text)}</h3></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counters/HomeCounter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HomeCounter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    title: String,
    img_1: String,
    img_2: String,
    date: String
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "event__item white-bg transition-3 wow fadeInUp",
    "data-sal": "slide-up",
    "data-sal-delay": "150",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="row align-items-center"><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"><h3 class="event__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/event-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6"><div class="event__speaker"><ul><li><img${ssrRenderAttr("src", $props.img_1)} alt="speaker"></li><li><img${ssrRenderAttr("src", $props.img_2)} alt="speaker"></li></ul><span>Speaker</span></div></div><div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6"><div class="event__meta"><span>${ssrInterpolate($props.date)}</span></div></div><div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="event__more float-lg-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/event-details",
    class: "tp-btn-border-pink"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Buy Tickets <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" Buy Tickets "),
          (openBlock(), createBlock("svg", {
            width: "6",
            height: "10",
            viewBox: "0 0 6 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 9L5 5L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/single-event/SingleEvent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SingleEvent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const img_1 = "" + __buildAssetsURL("event-speaker-1.C4tGf-zD.jpg");
const img_2 = "" + __buildAssetsURL("event-speaker-2.Bus4b0Ti.jpg");
const img_3 = "" + __buildAssetsURL("event-speaker-3.CClnmJvF.jpg");
const img_4 = "" + __buildAssetsURL("event-speaker-4.BlQL0_k2.jpg");
const img_5 = "" + __buildAssetsURL("event-speaker-5.BrCYUM_g.jpg");
const img_6 = "" + __buildAssetsURL("event-speaker-6.CTGV5lpR.jpg");
const img_7 = "" + __buildAssetsURL("event-speaker-7._UVR7CDM.jpg");
const img_8 = "" + __buildAssetsURL("event-speaker-8.DgHjo0kV.jpg");
const img_9 = "" + __buildAssetsURL("event-speaker-3.CClnmJvF.jpg");
const img_10 = "" + __buildAssetsURL("event-speaker-1.C4tGf-zD.jpg");
const _sfc_main$4 = {
  components: {
    SingleEvent
  },
  data() {
    return {
      img_1,
      img_2,
      img_3,
      img_4,
      img_5,
      img_6,
      img_7,
      img_8,
      img_9,
      img_10
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SingleEvent = resolveComponent("SingleEvent");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "event__area grey-bg-4 pt-110 pb-115" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-9 col-xl-8"><div class="section__title-wrapper mb-50"><h3 class="section__title"> Event &amp; <span class="section__title-highlight">seminar <svg width="220" height="27" viewBox="0 0 220 27" fill="none"><path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"></path></svg></span> schedules for the year 2022/23. </h3></div></div></div><div class="row"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_SingleEvent, {
    title: "UX Design Conference",
    img_1: $data.img_1,
    img_2: $data.img_2,
    date: "October 16, 2022"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleEvent, {
    title: "Business Development",
    img_1: $data.img_3,
    img_2: $data.img_4,
    date: "March 10, 2022"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleEvent, {
    title: "Networking and Data Science",
    img_1: $data.img_5,
    img_2: $data.img_6,
    date: "July 17, 2022"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleEvent, {
    title: "Digital Marketing",
    img_1: $data.img_7,
    img_2: $data.img_8,
    date: "January 14, 2022"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleEvent, {
    title: "Webinar for Developers",
    img_1: $data.img_9,
    img_2: $data.img_10,
    date: "April 14, 2022"
  }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/HomeEvents.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HomeEvents = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  props: {
    parent_id: String
  },
  components: {
    SingleFaq
  },
  mixins: [commonFaq]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_faq = resolveComponent("single-faq");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq__area pb-120" }, _attrs))}><div class="container"><div class="faq__inner p-relative"><div class="faq__text d-none d-lg-block"><h3 data-text="faq">faq</h3></div><div class="row justify-content-end"><div class="col-xxl-9 col-xl-9 col-lg-9"><div class="faq__wrapper tp-accordion pt-65"><div class="accordion" id="faqaccordion"><!--[-->`);
  ssrRenderList(_ctx.faq_items, (item, i) => {
    _push(ssrRenderComponent(_component_single_faq, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faqs/HomeFaq.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HomeFaq = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    blog: {}
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog__item white-bg transition-3 mb-30 wow fadeInUp",
    "data-sal": "slide-up",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="row"><div class="col-xxl-5 col-xl-5"><div class="blog__thumb m-img fix"><div class="tp-thumb-overlay wow"></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.blog.img)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.blog.img,
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xxl-7 col-xl-7"><div class="blog__content"><div class="blog__tag"><a href="#">${ssrInterpolate($props.blog.tag)}</a></div><h3 class="blog__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.blog.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.blog.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="blog__meta"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.blog.date)}</span><span>${ssrInterpolate($props.blog.read)} Read</span></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/SingleBlog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SingleBlog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  mixins: [blogData],
  components: {
    SingleBlog
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SingleBlog = resolveComponent("SingleBlog");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area pt-50 pb-110" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xxl-6 col-xl-6 col-lg-8 col-md-8 col-sm-10"><div class="section__title-wrapper text-center mb-60"><h3 class="section__title"> Take a look at the latest <span class="section__title-highlight">articles<svg width="220" height="27" viewBox="0 0 220 27" fill="none"><path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"></path></svg></span></h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((blog) => blog.home), (item, i) => {
    _push(`<div class="col-xxl-6 col-xl-6 col-lg-6">`);
    _push(ssrRenderComponent(_component_SingleBlog, { blog: item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/HomeBlogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index-old",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "งานบริการวิชาการ มจพ."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(LayoutCustom, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomeHero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeCounter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeServices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeEvents, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeTeams, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeFaq, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomePortfolio, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HomeBlogs, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomeHero),
              createVNode(HomeAbout),
              createVNode(HomeCounter),
              createVNode(HomeServices),
              createVNode(HomeEvents),
              createVNode(HomeTeams),
              createVNode(HomeFaq),
              createVNode(HomePortfolio),
              createVNode(HomeTestimonial),
              createVNode(HomeBlogs)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index-old.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-old-Bz0AqU_Q.js.map
