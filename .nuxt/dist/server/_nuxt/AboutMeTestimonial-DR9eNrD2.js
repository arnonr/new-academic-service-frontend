import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { _ as _imports_2 } from "./user-9-BOQgWp3s.js";
import { u as user_3 } from "./user-8-CWRtcVgm.js";
import { u as user_7 } from "./user-7-f6QkD5sw.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const text_bg = "" + __buildAssetsURL("testimonial-text-bg.A55Qx1gU.jpg");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: { Swiper, SwiperSlide },
  data() {
    return {
      text_bg,
      testimonial_items: [
        {
          user: _imports_2,
          ratings: [1, 2, 3, 4, 5],
          desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
          name: "Joss Sticks",
          title: "CEO at Fast Ventures"
        },
        {
          user: user_3,
          ratings: [1, 2, 3, 4, 5],
          desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
          name: "Naim Ahmed",
          title: "Developer at ThemePure"
        },
        {
          user: user_7,
          ratings: [1, 2, 3, 4, 5],
          desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
          name: "Steven Smith",
          title: "MD at Stark Ltd."
        }
      ]
    };
  },
  setup() {
    return {
      modules: [Pagination]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial__area pb-120" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-5 col-lg-5"><div class="testimonial__wrapper-14" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="testimonial__info"><div class="section__title-wrapper-9 mb-10"><span class="section__title-pre section__title-pre-1-3">Happy clients</span></div><h3 class="testimonial__info-title has-background" style="${ssrRenderStyle({ backgroundImage: `url(${$data.text_bg})` })}"> 220+ </h3><p>Customers that have Achieved Their Goals.</p><div class="testimonial__info-btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-2",
    class: "tp-btn tp-link-btn-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Explore Now <span${_scopeId}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createTextVNode(" Explore Now "),
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M1 7H13",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M7 1L13 7L7 13",
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
  _push(`</div></div></div></div><div class="col-xl-7 col-lg-7"><div class="testimonial__slider-14 testimonial__style-black p-relative" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000">`);
  _push(ssrRenderComponent(_component_swiper, {
    slidesPerView: 1,
    spaceBetween: 0,
    modules: $setup.modules,
    loop: true,
    pagination: {
      el: ".testimonial-slider-dot-14",
      clickable: true
    },
    class: "testimonial__slider-active-14 swiper-container"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonial_items, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "testimonial__item-4 d-sm-flex align-items-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__avater-thumb-4"${_scopeId2}><img${ssrRenderAttr("src", item.user)} alt="user"${_scopeId2}></div><div class="testimonial__content-4"${_scopeId2}><div class="testimonial__icon"${_scopeId2}><span${_scopeId2}><svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="currentColor"${_scopeId2}></path></svg></span></div><div class="testimonial__rating"${_scopeId2}><!--[-->`);
                ssrRenderList(item.ratings, (r, i2) => {
                  _push3(`<a href="#"${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></a>`);
                });
                _push3(`<!--]--></div><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><div class="testimonial__avater-info-4"${_scopeId2}><h4 class="testimonial__avater-title-4"${_scopeId2}>${ssrInterpolate(item.name)}</h4><span class="testimonial__avater-designation-4"${_scopeId2}>${ssrInterpolate(item.title)}</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__avater-thumb-4" }, [
                    createVNode("img", {
                      src: item.user,
                      alt: "user"
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
                      (openBlock(true), createBlock(Fragment, null, renderList(item.ratings, (r, i2) => {
                        return openBlock(), createBlock("a", {
                          href: "#",
                          key: i2
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonial_items, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "testimonial__item-4 d-sm-flex align-items-center"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__avater-thumb-4" }, [
                  createVNode("img", {
                    src: item.user,
                    alt: "user"
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
                    (openBlock(true), createBlock(Fragment, null, renderList(item.ratings, (r, i2) => {
                      return openBlock(), createBlock("a", {
                        href: "#",
                        key: i2
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
  _push(`<div class="testimonial-slider-dot-14 tp-swiper-dot"></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/AboutMeTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutMeTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AboutMeTestimonial as A
};
//# sourceMappingURL=AboutMeTestimonial-DR9eNrD2.js.map
