import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { _ as _imports_0, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { u as user_4 } from "./user-4-BaMCI89Q.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const brand_1 = "data:image/png;base64,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";
const brand_2 = "data:image/png;base64,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";
const brand_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAMCAYAAACOefjtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYfSURBVHgBtVddbttGEJ4lqcJAC0R9SyEpYU4Q5wRVTlD3BFZPUPkEkk9g5wRWTmDnBHZOYOcEYRC7zZsJFCmMkrvTb2ZJaUmRttGfAWSa3N35n29mKU7Gp/idR4PRnHooScZL2ZMkk6Pg2zQeTE6iePQRaxwnk1vhJd/7+AwG6W4ymBxFyegyjic/tWRMRUbFh8H7o/Df2UnT7n2iz7asJBkd6Xo8OunSIf5msqfr4B3q5c80dRIaDtOh2K86q51j1v8Hz/bpARLd1d6mj87vO9uQJ/5loit8nxo2C1nuEoI9C9nD7K4qJy3x7ZyYZ8aY1O9kObsn32W9zWcwmMwcl5fMPDdkdoncWhacuVJ+kFHxwYNT4V+U5ccwecry+oLI5KqPMSehzl4vI3un1trDtg6ql+NTfXHlu/o7czn0st2wbfsfX+2l2A+dMzzF7qWhKCN2K0midgJt7H02L0p76RzPyNCZP8vHrHa5VZjsPfJyw5zhczrcZO12ZKNkvNCsQRaoM+HoMJMoHu1TMv4RTp5tMmXMYZBE8PoM9kTR+Feip6kPzvg4WDshyeIOfnH8w95Gq3QYrJ16h2gVVHqNF13GVzofdQRu6mWM9hv7EQBvt9e1SU9T1QF72old+0jt6Uh6SbhKXqPKFcni8S3RaJdaC6eVcedtZgo1gWH1e9deXUc11I6qlYuQLZsgb4xdO6bHqRqIZHxZQ164Ep5VWHtAr0qH2y6HdQVI4MXb0BWc5rm27pvA9lPtkxqm10kc6KD75I8helO9T0NcBybvKdSQIIJ9E77bsvylS7C1g3kFQciU7/Y9f9aMABwCIr9k9V5AlK6j7DNXXh9uc8tyKHjgN3Ma6iZQBzg71iWBNawLnz69Kh0gP8/pMcSAa+ZVqG+bPNzSBfy3hmDVEbpA3vw+9q6MD8VPjlj7XlFY9ZGN6EO4LwoF6cHqQGVV7cCVKMqGX9ZLcZJs4KfxK2/rPuJ7TWiz9rvggw+2YDTd6wQfcGfoZdPIzwchTzhq2edQKWc8Hhcc7Ss8NJVP7iP2e4Z1ZToTqY7W/vn+/pNZjp6U1T7iyDzXz/E3t+GuZC3IRGeG3RQHZhB2uLMzHKJB73mhZrWlmG9gD1FW7U1RPfRfk8ACGnGqbiKp0EiMfRvuqeEHdmHYcRTCUWz4XVHcXNH/QTvfP6G7+6vVhAnDbti1Zx0gV0Rv44SXkjkCTYX1JaeBsDeaDZgqPlHlaGe/vno0XPQQoOkKUDBtV1pI0vydn7IwgDUrEDqei77MlEOtITJyjmHivbW/byoSk6A+sY4sTPFhtraZWfhtB+guyyiZ5ECMrYC3yeh0K8nqfRGx+yDpkpTFi5LoU//JFDaVU49O/RRt/pWSI91sgL+kY2cNG57QX85quInjb4+6GEqfkglMfvQARcT1qDvtGs3lTuDI6pSmTiiv17Ch+7XvUO5s+aruR2Tixt3J2ZsX8pPzJjJn9bv8rP3tXZ9u4gtBk74xWqham4YQrb0RsqqrSS8lSak9qgudQoqaLxuHrYcBawMsRRCN883cmJlOWBh/dZrBUycog3sG7icYAJ7TA9Rs9LSQyUl4eX6jmdwJaj0MuYP6nIyxawdEvu9I061gV6D5hP4lVfxyqdKuICm8Ys0POPZNuBYZI4PKtO+yPKj0l3tRmHQ1VZfVqYzbSbggDoOTL6iqnq4pxhU3xwjME6MXNtpFxp5qBzDxeo8IduXNIT2CpNFj5CSdegBH4DXTBYFSlIdUiATBlR62Kscsav0gp3JOlsdR+rNjhT2tSNizpH9MGSrz6Wtk8HnBLPedlUCyqsY8lf6swbH2ddtH4kfcdQ5QgTL+A8JxUXWAvih+gj6/B2hVaEMVH3RJvrsDXCMx40HM0dYq81stURHeU34yEmOcFdhYqQP1mD4vLIILpzUEY0BQfujReTe/zwdgIFl3seEnMIFAA75ccb3O0L+KYgFjJQmu0Acbcooiu5IKV92Z92mwufBBhw9suXMgMCbJffVxS78vGgAMUHOs78K5x/LTvocE9X24e2qURFYfOXfhnNsTVCHnlrKmPrI3zesAfFMPXneIED7kaJL53zGvnjIbp9JgAAAAAElFTkSuQmCC";
const brand_4 = "data:image/png;base64,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";
const brand_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAOCAYAAADjccReAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASMSURBVHgB7VldctpIEO6ZkWp52K0lb9kySeQb7N4AbuA9AewJzJ7AcALjE5jcwD6B8QmIT2Bly67yW9gCV1HRjCZfjxABW4AkZFce8lUB+pkZjXq6+/t6IOW/u00+79v1elCnisBjeV6jJ73GmMfnK/QTPyw8iuNrEqJNZIfTmZ1g0S58pfrzeRhSCfh+8Kcl057OTAendYEva22PaDKhgsBcztG5s7OhEKGw9qPWdz0qAakOboUQQd72eJ8wNveHVAAIiqYV4hy2beWxre+/78bWnhg9PSxjOwYH42ymeZz2tvezZAfSmPuOJTFYXKqz4SOtb5XXuFLqjyPKCX5R7hNbPYahum4sckYbxvquTy8JawNLdOJ5706pBISQhbIVnLtHZYB5wrZjzr5b29WCILbxqbNh7c3vVAIckNNHM2a7bHUCS5NYmzORXkAKP8l8QUQbvnq+ktdPPTn1ODjScbrwaw+Bp8X6/l8qjXouQ0gdddK5Gz17UzSC4MDWHdj4yPi/fNrZYX77mQrCZQSiq/RcIPi0nvaz5rra1ug7QQVRgyNFxly5AMFC42GDWHiXpMSXZ43nX/7nOaw9ZKMzJFPnAR1t8Jk25hgP6WQ5AAMv0nvxTLCCdDENUZP03fVr9c2Lp47ggCDLoop9HSGl1ITCTIvoIdzVx1s94YWDM2xIfUwb1ImiaASuC9Cmu2nQqpyAM858TjvTdhTp73PRunC0plCIIL8WbO1fqyF8JmEpzk7B9nE2XlCF9A/6cXQ/oKqw0FXJOn53As4UWc35nbynF3kBlTr4jMX+kNVJSbqB/9wYq7Nuk0iE1EeqAOC403xiMflhKsrj/ZvHEUMszNYm0aMY4ucf2gNsY0T9NUTcOfO3sOIU+uZDShVCeBNrdamxWRvEi77GPF6m17GmrP3Os/pEM7BB5mgy+3IuSEWvDebBJAvto0deF6hwRknaphGfw4m7yv9t7Phd0V4ZJwsoCoaw0Ub98ywjcO0PbjnZREzG8h29WTnbmMc4LFvKbcCF8fxuImyAVQG5EDtUBfKIxXQOleAhNJpaS22WVhXWXiI7URlEEYXKg54DlUv/13YcTc7Se8hEf1HtcJnpVfS1hee4LLHmCEo1BvCa46wHLNWn1i7tS6UC5NIjzDejWuBSrkFVOYPz5FWlPp9UHjEMI+SkTEWwL55SRbKvUxYhaOXgAuOgkhJdZJjLNTG68n7Ca4R2cbx0BHDIEAv9bAKsPJk7YzM7W4282DBPvoWeUM2sWrVKZyiy2bMPXkssZoGpAvZsKc/jCG3SHgDl9BGoTeQUV0Zi36Inydwo5a/NO4pMHaLOHbv8kzjBMy8cGU5XOcspFiOLMZprN7ChBH4qJa6WZdDe+xE7npPuI+SFkB0T/VdIEBcpCVfL+DLlY4K3AZzhKm8QSaaD1AlS0WW0PsQEWkVqahYj3If78m6ioxIGUlTZHb8FRrzzRS8Il/WK9eiV+e8EDv2JrPl7VzumCqx+q/i8VvHg9hCskN1tInEJ3mfnrWEpG8fV/jFUr3OW4PH5Qz/xQ+MbluyKnfthnG8AAAAASUVORK5CYII=";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  components: { Swiper, SwiperSlide },
  data() {
    return {
      brands: [brand_1, brand_2, brand_3, brand_4, brand_5, brand_2],
      testimonial_data: [
        {
          id: 1,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: _imports_0,
          name: "Rodney Artichoke",
          designation: "Manager"
        },
        {
          id: 2,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: _imports_1,
          name: "Lurch Schpellchek",
          designation: "Developer"
        },
        {
          id: 3,
          ratings: [1, 2, 3, 4],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_3,
          name: "Pelican Steve",
          designation: "UI Designer"
        },
        {
          id: 4,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_4,
          name: "Nathaneal Down",
          designation: "Supporter"
        },
        {
          id: 5,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: _imports_1,
          name: "Lurch Schpellchek",
          designation: "Developer"
        }
      ]
    };
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial__area pt-110 pb-115 grey-bg-15 fix" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-7 col-xl-9 col-lg-9 col-md-9"><div class="tp-section-wrapper-2 mb-55"><span class="tp-section-subtitle-2">Some of Our Customer&#39;s Words</span><h3 class="tp-section-title-2"> Customers love the ease and simplicity </h3></div></div><div class="col-xxl-5 col-xl-3 col-lg-3 col-md-3"><div class="testimonial__slider-arrow-15 text-md-end mb-65"><button class="testimonial-15-button-prev"><i class="fa-regular fa-chevron-left"></i></button><button class="testimonial-15-button-next"><i class="fa-regular fa-chevron-right"></i></button></div></div></div><div class="row"><div class="col-xxl-12"><div class="testimonial__slider-15 testimonial__style-3" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">`);
  _push(ssrRenderComponent(_component_Swiper, {
    class: "testimonial__slider-active-15 swiper-container",
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    modules: $setup.modules,
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
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: ".testimonial-15-button-next",
      prevEl: ".testimonial-15-button-prev"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonial_data, (item) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: item.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__item-6 transition-3 mb-60"${_scopeId2}><div class="testimonial__rating testimonial__rating-6"${_scopeId2}><!--[-->`);
                ssrRenderList(item.ratings, (r) => {
                  _push3(`<a href="#"${_scopeId2}><i class="fa-solid fa-star"${_scopeId2}></i></a>`);
                });
                _push3(`<!--]--></div><div class="testimonial__content-6"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="testimonial__avater-6 d-flex align-items-center"${_scopeId2}><div class="testimonial__avater-thumb-6"${_scopeId2}><img${ssrRenderAttr("src", item.user)} alt="user"${_scopeId2}></div><div class="testimonial__avater-info-6"${_scopeId2}><h3 class="testimonial__avater-title-6"${_scopeId2}>${ssrInterpolate(item.name)}</h3><span class="testimonial__avater-designation-6"${_scopeId2}>${ssrInterpolate(item.designation)}</span></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__item-6 transition-3 mb-60" }, [
                    createVNode("div", { class: "testimonial__rating testimonial__rating-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.ratings, (r) => {
                        return openBlock(), createBlock("a", {
                          key: r,
                          href: "#"
                        }, [
                          createVNode("i", { class: "fa-solid fa-star" })
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "testimonial__content-6" }, [
                      createVNode("p", null, toDisplayString(item.desc), 1)
                    ]),
                    createVNode("div", { class: "testimonial__avater-6 d-flex align-items-center" }, [
                      createVNode("div", { class: "testimonial__avater-thumb-6" }, [
                        createVNode("img", {
                          src: item.user,
                          alt: "user"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "testimonial__avater-info-6" }, [
                        createVNode("h3", { class: "testimonial__avater-title-6" }, toDisplayString(item.name), 1),
                        createVNode("span", { class: "testimonial__avater-designation-6" }, toDisplayString(item.designation), 1)
                      ])
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonial_data, (item) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: item.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__item-6 transition-3 mb-60" }, [
                  createVNode("div", { class: "testimonial__rating testimonial__rating-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.ratings, (r) => {
                      return openBlock(), createBlock("a", {
                        key: r,
                        href: "#"
                      }, [
                        createVNode("i", { class: "fa-solid fa-star" })
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "testimonial__content-6" }, [
                    createVNode("p", null, toDisplayString(item.desc), 1)
                  ]),
                  createVNode("div", { class: "testimonial__avater-6 d-flex align-items-center" }, [
                    createVNode("div", { class: "testimonial__avater-thumb-6" }, [
                      createVNode("img", {
                        src: item.user,
                        alt: "user"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "testimonial__avater-info-6" }, [
                      createVNode("h3", { class: "testimonial__avater-title-6" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "testimonial__avater-designation-6" }, toDisplayString(item.designation), 1)
                    ])
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
  _push(`</div></div></div><div class="row align-items-center"><div class="col-xl-4 col-lg-4"><div class="brand__slider-7"><span>TRUSTED BY GLOBAL BRANDS:</span></div></div><div class="col-xl-8 col-lg-8"><div class="brand__slider-7">`);
  _push(ssrRenderComponent(_component_swiper, {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      576: {
        slidesPerView: 3
      },
      0: {
        slidesPerView: 2
      }
    },
    class: "brand__slider-active-7 swiper-container"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.brands, (brand, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "brand__item-7 text-center"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", brand)} alt="brand"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: brand,
                    alt: "brand"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.brands, (brand, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "brand__item-7 text-center"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: brand,
                  alt: "brand"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/PricingTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PricingTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PricingTestimonial as P
};
//# sourceMappingURL=PricingTestimonial-BcsmJleN.js.map
