import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { t as teamData } from "./teamData-RHm96bod.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  mixins: [teamData],
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `team__area ${$props.el_style ? "pt-110" : ""} pb-100`
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-10 text-center mb-45"><span class="section__title-pre-10">Our team member</span><h3 class="section__title-10">Our expert volunteer</h3></div></div></div><div class="row"><div class="col-xxl-12"><div class="team__slider-10"><div class="team__slider-active-10 swiper-container">`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    loop: false,
    "slides-per-view": 4,
    "slides-per-group": 1,
    "space-between": 30,
    "loop-fill-group-with-blank": true,
    pagination: {
      el: ".team-slider-dot-10",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      },
      0: {
        slidesPerView: 1
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.teamData.filter(
          (team) => team.home_politician
        ), (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "team__item-10",
            "data-sal": "slide-up",
            "data-sal-delay": "140",
            "data-sal-duration": "1000"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="team__thumb-10 p-relative m-img"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, { href: "/team-details" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", item.img)} alt=""${_scopeId3}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`<div class="team__contact-overlay"${_scopeId2}><div class="team__contact-top"${_scopeId2}><span${_scopeId2}><svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path d="M42.1757 38.0741L43.1507 45.9738C43.4006 48.0488 41.1757 49.4987 39.4008 48.4237L28.926 42.1989C27.776 42.1989 26.6511 42.124 25.5511 41.974C27.4011 39.7991 28.501 37.049 28.501 34.0741C28.501 26.9743 22.3512 21.2246 14.7514 21.2246C11.8514 21.2246 9.17653 22.0495 6.95158 23.4994C6.87658 22.8744 6.85156 22.2494 6.85156 21.5995C6.85156 10.2247 16.7263 1 28.926 1C41.1257 1 51.0005 10.2247 51.0005 21.5995C51.0005 28.3493 47.5255 34.3242 42.1757 38.0741Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path d="M28.4993 34.0732C28.4993 37.0481 27.3994 39.7981 25.5494 41.9731C23.0745 44.973 19.1495 46.8979 14.7497 46.8979L8.22482 50.7727C7.12484 51.4477 5.72487 50.5228 5.87487 49.2478L6.49985 44.323C3.14994 41.9981 1 38.2731 1 34.0732C1 29.6733 3.34995 25.7984 6.94986 23.4985C9.17481 22.0485 11.8497 21.2236 14.7497 21.2236C22.3495 21.2236 28.4993 26.9734 28.4993 34.0732Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg></span><p${_scopeId2}>Get touch with me</p></div><div class="team__contact-wrapper"${_scopeId2}><p class="team-tel"${_scopeId2}><a href="tel:088-3579-523-45"${_scopeId2}>+088 3579 523 45</a></p><p${_scopeId2}><a href="mailto:harry@citygov.com"${_scopeId2}>harry@citygov.com</a></p></div><div class="team__social-10 d-flex justify-content-center"${_scopeId2}><!--[-->`);
                ssrRenderList(item.social_links, (l, i2) => {
                  _push3(`<a${ssrRenderAttr("href", l.link)}${ssrRenderAttr("target", l.target)}${_scopeId2}><i class="${ssrRenderClass(l.icon)}"${_scopeId2}></i></a>`);
                });
                _push3(`<!--]--></div></div></div><div class="team__content-10 text-center"${_scopeId2}><h3 class="team__title-10"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_nuxt_link, { href: "/team-details" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Jason Response`);
                    } else {
                      return [
                        createTextVNode("Jason Response")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</h3><span class="team__designation-10"${_scopeId2}>Party Leader</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "team__thumb-10 p-relative m-img" }, [
                    createVNode(_component_nuxt_link, { href: "/team-details" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "team__contact-overlay" }, [
                      createVNode("div", { class: "team__contact-top" }, [
                        createVNode("span", null, [
                          (openBlock(), createBlock("svg", {
                            width: "52",
                            height: "53",
                            viewBox: "0 0 52 53",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("path", {
                              d: "M42.1757 38.0741L43.1507 45.9738C43.4006 48.0488 41.1757 49.4987 39.4008 48.4237L28.926 42.1989C27.776 42.1989 26.6511 42.124 25.5511 41.974C27.4011 39.7991 28.501 37.049 28.501 34.0741C28.501 26.9743 22.3512 21.2246 14.7514 21.2246C11.8514 21.2246 9.17653 22.0495 6.95158 23.4994C6.87658 22.8744 6.85156 22.2494 6.85156 21.5995C6.85156 10.2247 16.7263 1 28.926 1C41.1257 1 51.0005 10.2247 51.0005 21.5995C51.0005 28.3493 47.5255 34.3242 42.1757 38.0741Z",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }),
                            createVNode("path", {
                              d: "M28.4993 34.0732C28.4993 37.0481 27.3994 39.7981 25.5494 41.9731C23.0745 44.973 19.1495 46.8979 14.7497 46.8979L8.22482 50.7727C7.12484 51.4477 5.72487 50.5228 5.87487 49.2478L6.49985 44.323C3.14994 41.9981 1 38.2731 1 34.0732C1 29.6733 3.34995 25.7984 6.94986 23.4985C9.17481 22.0485 11.8497 21.2236 14.7497 21.2236C22.3495 21.2236 28.4993 26.9734 28.4993 34.0732Z",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ]))
                        ]),
                        createVNode("p", null, "Get touch with me")
                      ]),
                      createVNode("div", { class: "team__contact-wrapper" }, [
                        createVNode("p", { class: "team-tel" }, [
                          createVNode("a", { href: "tel:088-3579-523-45" }, "+088 3579 523 45")
                        ]),
                        createVNode("p", null, [
                          createVNode("a", { href: "mailto:harry@citygov.com" }, "harry@citygov.com")
                        ])
                      ]),
                      createVNode("div", { class: "team__social-10 d-flex justify-content-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.social_links, (l, i2) => {
                          return openBlock(), createBlock("a", {
                            key: i2,
                            href: l.link,
                            target: l.target
                          }, [
                            createVNode("i", {
                              class: l.icon
                            }, null, 2)
                          ], 8, ["href", "target"]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "team__content-10 text-center" }, [
                    createVNode("h3", { class: "team__title-10" }, [
                      createVNode(_component_nuxt_link, { href: "/team-details" }, {
                        default: withCtx(() => [
                          createTextVNode("Jason Response")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("span", { class: "team__designation-10" }, "Party Leader")
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--><div class="tp-swiper-dot tp-swiper-dot-2 team-slider-dot-10 text-center mt-50"${_scopeId}></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.teamData.filter(
            (team) => team.home_politician
          ), (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "team__item-10",
              "data-sal": "slide-up",
              "data-sal-delay": "140",
              "data-sal-duration": "1000"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "team__thumb-10 p-relative m-img" }, [
                  createVNode(_component_nuxt_link, { href: "/team-details" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: item.img,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "team__contact-overlay" }, [
                    createVNode("div", { class: "team__contact-top" }, [
                      createVNode("span", null, [
                        (openBlock(), createBlock("svg", {
                          width: "52",
                          height: "53",
                          viewBox: "0 0 52 53",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            d: "M42.1757 38.0741L43.1507 45.9738C43.4006 48.0488 41.1757 49.4987 39.4008 48.4237L28.926 42.1989C27.776 42.1989 26.6511 42.124 25.5511 41.974C27.4011 39.7991 28.501 37.049 28.501 34.0741C28.501 26.9743 22.3512 21.2246 14.7514 21.2246C11.8514 21.2246 9.17653 22.0495 6.95158 23.4994C6.87658 22.8744 6.85156 22.2494 6.85156 21.5995C6.85156 10.2247 16.7263 1 28.926 1C41.1257 1 51.0005 10.2247 51.0005 21.5995C51.0005 28.3493 47.5255 34.3242 42.1757 38.0741Z",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }),
                          createVNode("path", {
                            d: "M28.4993 34.0732C28.4993 37.0481 27.3994 39.7981 25.5494 41.9731C23.0745 44.973 19.1495 46.8979 14.7497 46.8979L8.22482 50.7727C7.12484 51.4477 5.72487 50.5228 5.87487 49.2478L6.49985 44.323C3.14994 41.9981 1 38.2731 1 34.0732C1 29.6733 3.34995 25.7984 6.94986 23.4985C9.17481 22.0485 11.8497 21.2236 14.7497 21.2236C22.3495 21.2236 28.4993 26.9734 28.4993 34.0732Z",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ]),
                      createVNode("p", null, "Get touch with me")
                    ]),
                    createVNode("div", { class: "team__contact-wrapper" }, [
                      createVNode("p", { class: "team-tel" }, [
                        createVNode("a", { href: "tel:088-3579-523-45" }, "+088 3579 523 45")
                      ]),
                      createVNode("p", null, [
                        createVNode("a", { href: "mailto:harry@citygov.com" }, "harry@citygov.com")
                      ])
                    ]),
                    createVNode("div", { class: "team__social-10 d-flex justify-content-center" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.social_links, (l, i2) => {
                        return openBlock(), createBlock("a", {
                          key: i2,
                          href: l.link,
                          target: l.target
                        }, [
                          createVNode("i", {
                            class: l.icon
                          }, null, 2)
                        ], 8, ["href", "target"]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "team__content-10 text-center" }, [
                  createVNode("h3", { class: "team__title-10" }, [
                    createVNode(_component_nuxt_link, { href: "/team-details" }, {
                      default: withCtx(() => [
                        createTextVNode("Jason Response")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("span", { class: "team__designation-10" }, "Party Leader")
                ])
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode("div", { class: "tp-swiper-dot tp-swiper-dot-2 team-slider-dot-10 text-center mt-50" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/PolityTeams.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PolityTeams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PolityTeams as P
};
//# sourceMappingURL=PolityTeams-DeA80MHc.js.map
