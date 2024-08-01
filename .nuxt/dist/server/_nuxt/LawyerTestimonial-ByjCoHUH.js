import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { b as bg } from "./testimonial-bg-B4vCMsQ0.js";
import { _ as _imports_0, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    };
  },
  data() {
    return {
      bg,
      testimonial_data: [
        {
          userImg: _imports_0,
          ratings: [1, 2, 3, 4, 5],
          desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
          name: "Joss Sticks",
          title: "CEO at Fast Ventures"
        },
        {
          userImg: _imports_1,
          ratings: [1, 2, 3, 4],
          desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
          name: "Naim Ahmed",
          title: "Developer ThemePure"
        },
        {
          userImg: user_3,
          ratings: [1, 2, 3, 4, 5],
          desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
          name: "Steven Smith",
          title: "MD at Stark Ltd."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "testimonial__area pt-110 pb-120 black-bg include-bg p-relative z-index-1 jarallax",
    "data-overlay": "dark",
    "data-overlay-opacity": "6",
    style: { backgroundImage: `url(${$data.bg})` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-5"><div class="section__title-wrapper-4 mb-50"><span class="section__title-pre-4 section__title-pre-4-white">TESTIMONIALS</span><h3 class="section__title-4 section__title-4-white"> What our client say about Us </h3></div></div></div><div class="row"><div class="col-xxl-8 col-xl-8 col-lg-10"><div class="testimonial__slider-4"><div class="testimonial__slider-active-4 swiper-container">`);
  _push(ssrRenderComponent(_component_Swiper, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".testimonial-4-button-next",
      prevEl: ".testimonial-4-button-prev"
    },
    modules: $setup.modules
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonial_data, (item, i) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: i,
            class: "testimonial__item-4 d-sm-flex align-items-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__avater-thumb-4"${_scopeId2}><img${ssrRenderAttr("src", item.userImg)} alt="user img"${_scopeId2}></div><div class="testimonial__content-4"${_scopeId2}><div class="testimonial__icon"${_scopeId2}><span${_scopeId2}><svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="currentColor"${_scopeId2}></path></svg></span></div><div class="testimonial__rating"${_scopeId2}><!--[-->`);
                ssrRenderList(item.ratings, (r) => {
                  _push3(`<a href="#"${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></a>`);
                });
                _push3(`<!--]--></div><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><div class="testimonial__avater-info-4"${_scopeId2}><h4 class="testimonial__avater-title-4"${_scopeId2}>${ssrInterpolate(item.name)}</h4><span class="testimonial__avater-designation-4"${_scopeId2}>${ssrInterpolate(item.title)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__avater-thumb-4" }, [
                    createVNode("img", {
                      src: item.userImg,
                      alt: "user img"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", { class: "testimonial__content-4" }, [
                    createVNode("div", { class: "testimonial__icon" }, [
                      createVNode("span", null, [
                        (openBlock(), createBlock("svg", {
                          width: "44",
                          height: "38",
                          viewBox: "0 0 44 38",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z",
                            fill: "currentColor"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "testimonial__rating" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.ratings, (r) => {
                        return openBlock(), createBlock("a", {
                          key: r,
                          href: "#"
                        }, [
                          createVNode("i", { class: "fa-solid fa-star" })
                        ]);
                      }), 128))
                    ]),
                    createVNode("p", null, toDisplayString(item.desc), 1),
                    createVNode("div", { class: "testimonial__avater-info-4" }, [
                      createVNode("h4", { class: "testimonial__avater-title-4" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "testimonial__avater-designation-4" }, toDisplayString(item.title), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonial_data, (item, i) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: i,
              class: "testimonial__item-4 d-sm-flex align-items-center"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__avater-thumb-4" }, [
                  createVNode("img", {
                    src: item.userImg,
                    alt: "user img"
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "testimonial__content-4" }, [
                  createVNode("div", { class: "testimonial__icon" }, [
                    createVNode("span", null, [
                      (openBlock(), createBlock("svg", {
                        width: "44",
                        height: "38",
                        viewBox: "0 0 44 38",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z",
                          fill: "currentColor"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "testimonial__rating" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.ratings, (r) => {
                      return openBlock(), createBlock("a", {
                        key: r,
                        href: "#"
                      }, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]);
                    }), 128))
                  ]),
                  createVNode("p", null, toDisplayString(item.desc), 1),
                  createVNode("div", { class: "testimonial__avater-info-4" }, [
                    createVNode("h4", { class: "testimonial__avater-title-4" }, toDisplayString(item.name), 1),
                    createVNode("span", { class: "testimonial__avater-designation-4" }, toDisplayString(item.title), 1)
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
  _push(`</div></div></div><div class="col-xxl-2 col-xl-2 col-lg-2"><div class="testimonial__slider-nav-4 d-flex flex-lg-column"><button type="button" class="testimonial-4-button-prev"><i class="fa-regular fa-angle-left"></i></button><button type="button" class="testimonial-4-button-next"><i class="fa-regular fa-angle-right"></i></button></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/LawyerTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LawyerTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LawyerTestimonial as L
};
//# sourceMappingURL=LawyerTestimonial-ByjCoHUH.js.map
