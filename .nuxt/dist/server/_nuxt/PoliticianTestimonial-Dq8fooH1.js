import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const bg = "" + __buildAssetsURL("testimonial-shape-1.Pjufztk5.png");
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAToSURBVHgB7VptUttIEO2ZkbMssLW+wXr/B2JOgDgB5gSGE4D/J1hO8j9wAuwTxDkB3hOg4D2A9gaqypplY8/0dusDvK7EluSxUVJ5VdRIRhrPm4/uN28M8APfFwQUwFb7zysAPE5uQ/rzwWBv9Ga3CyVFMaLe7THo+BoF1oSQ+3TpUnWBFuODe28vgJKhENEv4RfvtqER3gmQUEayEizhk7fbN0IfIBhQ6FxByWCNKINHUQpxQpfu1iua3iWCVaKMv72dARUDkKIJJYJ1ogwhoEOFu/3yxoWSYCVEeVQRMEDltKEkWAnRqOJ0rUY59+kxN71UvZvq6HOlpuS4yvf3b/cGkANRvkVxxfkVjOk8paCYS3SzPXxPDzRmXulSnuxkzZMb3k1NoroWIGqQqigC0r0ArCV18md+nnrzQixqZHrtgFNDAw1SQofcaGNM6583Ly4gI7a9oUvvuEKI3/geEf8SKAIjsSpR1FHAPteLCN7d650OWEZuZcTklVEehdZmXrKLQJ3hEdE2z5pR5/kJWERhCbh1ftslsodaTPZsTrd0XdvuxMJRtyL1GZfKOGdgESNvtysQLqWUbQ6GYAmFiYbeXkjr6pLmRNNmgxiOnHhc/qvlMVjCUnn0GUx4alU/G2l1VKNORPNBSnUKlrAUUW4QTzPaj55OR2gboKnbpdhc+/nVRyuduLQy4mlGci9UWLm2SZZlZLJW39kgG0VdbqDQskFivErhnaeNn0cF/V8UkKDQ496GAz6P+LS6Sj+DHEiiezOvUJlFRHTz/CNVpvbjDx7USkBJvZs1eTOhCThnBrGZqKCvfWVuOcj59bFeVlEYdVairqpUhlQG83wr8ZWKXTRkfsU96VfIGskzEtH7Ou4wqSAcg/YV9QUlozoZEG5Sby5/iTtyDKoBRtRB4K8RUVJXD0SmfCupTevT290+LCKagn0gQ8kbaSN919k5Akt4nOp2/aVItaHzni7rtH06HrWf99L/LVRGDzsQgyc2dx9T6zoYdXYOwCK+pNoWRl1WKrACa2TaX7LtRLBqizPBo0mXKb2syhpJ/SVUymoncjxRAlp06aaqLRPRpEH+KqwRA+YDdWXDtuBQoAeUJjtpEM0sGETSQ5vnQ6tkfxKmOzvNbIAJ3r1+4aX3ubZp2+fDCxLyp7Y3x1E6QrhmUUCprJVXVGRB7v3o1OY4oNs+avOHAR1KUNX4HIbypRG+cbSfJ23M+kta6UH6Pq+z+ygPx0EMCqDQxnvKZTiEpAEJwpn7AYX4kzz+UjKF3XnPUV7vGz25zCNTlz5kSoPIBpFMp1zUYFA8HdtFfCB+v0Iqyui401hdsczja42mTnWeJnLwgiyXFpQBnLy32kO0td1KwUuI683qG1s7NpyHxDZ1K2Lyu81Ak8dfWplTP41ntE65tO1ERKoNsZfFX1oL0WgU0fTYiQDL0FJ7VFRHALV5z62FKENIydumqu21GmtmPBp7e/6859ayRlNQ8CBRAHXbXnAWrG1EGRSMjlJ/afPlbQPWiLWOKGPm0GnA9odGHWhTCSvSxMoKOF/qIO/p3TysnWiKJDVwcKrPeYxSkejbOGV7MqIpYi8IappITaurGd9q6d8vPTnRRbDlL601GBUBE7Px+6XSE2Uw2dQaKWrnfBNEGfzLNCpC4yirJ3elhO3jye8S/wGoxK2akZPFBwAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeCAYAAABwmH1PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJoSURBVHgB7ZlRbtNAEIZn14kEMUjhBJgDtE1uYE5AOAHhBAnvLd4A72lPgDlBwwliTuAmheeYEyQPpSBR7zLDrpVINB5TqW/7Sau143/smawt7eiHzuRbEiaXpvP2MgGGByqPULsOk6+rrsq7nN4YMzeWcQPtAMcax3kDbYRj5UavgT5xeSRSaK3oRyGATSrQkjRYqIl+l8GAeQglErvTF8AzsveGQYMi6Hrkxgh4VDVLYeCMjnD+xEUJKWc4bbCcogzKrFYrxAVOF+70C/B8dnPmYuvIcBQ2Fz5vZOLmM/B4PB6Px+Px3BMiVHnPaDnQUqe/VL/gAh6eLMYSxObH+8OU0+KeOAa7n05xu1gwWtpHD3EUqJ0BQ3iyJC00yYOaHqnlkGpsGdM+F8JEgQle4bVndYHYUSlsMv52VY+O8+LqQz+D/QVEOM3dKW32a5sNZAq2YIp9gkVv9gkfHy9xgcRHm9Miun53pOpuLE17bmuUIynAuDZPA4vcHupWwLWHuwmvgae75/gfTGv7ZwhZ/+ZYqtrMplWKm3613FzYtTpQoVoW9viw9rWjFcKVegm2hUuB5w2OBdhuqagTXqmDDPN4rfEz+KmOUmDQonxONQqp2U/F4/F4PB6Px3NncPs3rWyIBtrY2SEr191w+v+xWio7JOe01P100O4h2webmJjTh8lySnYSWkRTageqZBTwDMFu7CPY2ii3cgerpdL2MPZpnTAogxibnohyMbLFdWGIGLqsxlRwZUNM+EA4BWtx7Nootz/C2iXOmmlkcexaLd/rhO2gnBm0e+jepbw5BQZsaZ2dpCd/AC1sMbY+eP9cAAAAAElFTkSuQmCC";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    };
  },
  data() {
    return {
      bg,
      testimonial_data: [
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 17, 2022"
        },
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 18, 2022"
        },
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 19, 2022"
        },
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 20, 2022"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `testimonial__area ${$props.el_style ? "pt-120" : ""} pb-120`
  }, _attrs))}><div class="container"><div class="testimonial__inner-10 p-relative include-bg" data-sal="slide-up" data-sal-delay="140" data-sal-duration="1000" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"><div class="testimonial__shape"><img class="testimonial__shape-9"${ssrRenderAttr("src", _imports_0)} alt="testimonial__shape"><img class="testimonial__shape-10"${ssrRenderAttr("src", _imports_1)} alt="testimonial__shape"></div><div class="row"><div class="col-xxl-12"><div class="testimonial__slider-10">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "testimonial__slider-active-10 swiper-container",
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    modules: $setup.modules,
    loop: true,
    pagination: {
      el: ".testimonial-slider-dot-10",
      clickable: true
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonial_data, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "testimonial__item-10"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial__content-10 text-center"${_scopeId2}><div class="testimonial__icon-10"${_scopeId2}><span${_scopeId2}><i class="fa-brands fa-twitter"${_scopeId2}></i></span></div><p${_scopeId2}>${ssrInterpolate(item.desc)} <a${ssrRenderAttr("href", item.link)}${_scopeId2}>${ssrInterpolate(item.link_text)}</a></p><div class="testimonial__avater-10"${_scopeId2}><div class="testimonial__avater-thumb-10"${_scopeId2}></div><div class="testimonial__avater-info-10 d-sm-flex align-items-center justify-content-center"${_scopeId2}><h3 class="testimonial__avater-title-10"${_scopeId2}>${ssrInterpolate(item.name)}</h3><span class="testimonial__avater-designation-10"${_scopeId2}>${ssrInterpolate(item.title)}</span><div class="testimonial__avater-date"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.date)}</span></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial__content-10 text-center" }, [
                    createVNode("div", { class: "testimonial__icon-10" }, [
                      createVNode("span", null, [
                        createVNode("i", { class: "fa-brands fa-twitter" })
                      ])
                    ]),
                    createVNode("p", null, [
                      createTextVNode(toDisplayString(item.desc) + " ", 1),
                      createVNode("a", {
                        href: item.link
                      }, toDisplayString(item.link_text), 9, ["href"])
                    ]),
                    createVNode("div", { class: "testimonial__avater-10" }, [
                      createVNode("div", { class: "testimonial__avater-thumb-10" }),
                      createVNode("div", { class: "testimonial__avater-info-10 d-sm-flex align-items-center justify-content-center" }, [
                        createVNode("h3", { class: "testimonial__avater-title-10" }, toDisplayString(item.name), 1),
                        createVNode("span", { class: "testimonial__avater-designation-10" }, toDisplayString(item.title), 1),
                        createVNode("div", { class: "testimonial__avater-date" }, [
                          createVNode("span", null, toDisplayString(item.date), 1)
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
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonial_data, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "testimonial__item-10"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial__content-10 text-center" }, [
                  createVNode("div", { class: "testimonial__icon-10" }, [
                    createVNode("span", null, [
                      createVNode("i", { class: "fa-brands fa-twitter" })
                    ])
                  ]),
                  createVNode("p", null, [
                    createTextVNode(toDisplayString(item.desc) + " ", 1),
                    createVNode("a", {
                      href: item.link
                    }, toDisplayString(item.link_text), 9, ["href"])
                  ]),
                  createVNode("div", { class: "testimonial__avater-10" }, [
                    createVNode("div", { class: "testimonial__avater-thumb-10" }),
                    createVNode("div", { class: "testimonial__avater-info-10 d-sm-flex align-items-center justify-content-center" }, [
                      createVNode("h3", { class: "testimonial__avater-title-10" }, toDisplayString(item.name), 1),
                      createVNode("span", { class: "testimonial__avater-designation-10" }, toDisplayString(item.title), 1),
                      createVNode("div", { class: "testimonial__avater-date" }, [
                        createVNode("span", null, toDisplayString(item.date), 1)
                      ])
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
  _push(`<div class="testimonial-slider-dot-10 tp-swiper-dot tp-swiper-dot-2 text-center mt-50"></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/PoliticianTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PoliticianTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PoliticianTestimonial as P
};
//# sourceMappingURL=PoliticianTestimonial-Dq8fooH1.js.map
