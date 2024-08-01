import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const brand_1 = "data:image/png;base64,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";
const brand_2 = "data:image/png;base64,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";
const brand_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAgCAYAAAD+Fz2gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXVSURBVHgB5VpNdttGDP7ouD+7qifI9ARhTmD2BHFOYHrTvrYLyyewfIK6i/5upJygzgmonMD2CcScQMqur63FAuTQGoKgSIqSRTffe0jEGWCAGcxgQNAeihgQnREFRL59ZtwSTYl+IopRhiEKnWfmv7bt+Xh5+6UY45joxOrj9jdWdoFq5HYeWx2b2lmHazumNg7bHNjfseWr0gtrq+88TyxvgGwu+fyZLrVxmGlOlNTQiaI8FDyRNXymyM8dQ8cVOlhuAB1N7JxX2Bmgfn4ujSr0r5P5EToiwRdaG6vmb1zhsKXhgVAu5SPoznENqNM5RhkXLe30hXzQUn60oX7N9kjwXNSsUZQLDhRG3oFX1sBZAwPChoZLHXX9LowiU2fnlRjDb2ljKPRrNvJa3NTIMiKUN2md/jSKHCsdxhl4gPLCzITysML4ke2rMobbh5Y0hz1fo2PWwM4blGEUuqqwzUWk9Lth+M+W8nL+2hqxb9J/IodhjDImaO+g0OkfQHegcXiGqHdQVzs1GOibwwge2T8U4wQKT+D0RzX9mnyIhpigvYNk/Jc7JBL9AdY7aBt2atAWbiR4tCgTCB5tE16t0TNrIB8eoowBVunrc/u/j/aQ6WmM4q6M0Q0G2SK9QGYzP7e1030FyDFF2UHauHKBF5YGwsYqxIp8Ca6DAmSZRYB+I8B27DQoJxG8SKcVvE0gHfRiDW+MBsgddIIsPGgKY6x26L7Bjhkp7ZvYGSlt6gviPnGAbEIT0R4TfU30JdFLonfYPwzKzuEwuomdFyg7coLyieqKBTqCT9CFMihPOka/IN/QY6LXaG+nQdnRMbLTU4UYzSCrH50dxCfoWLTdKgZ9gf0jEM93KNvZJOvTQhvP2bc6tBJTrLS9VNqk7B064kAZ9IPCJ7MYg+pa2a4g9WmVBl+RceW00MbgTcovmpEdl19wQ6f/WpHRykgSmlwrsIPkMTxCs0kNsV/worp2nqDsRH527QzQDLz4Y6wWmNdoKnjOhL4z0R8rMq3BDpLvK6yUd9AI2Y4aVciyQQaPh6l4bmNnvpAG7eCG9ssK/WOrX14V6+60xuAkgb+/BKLdoJg8xE57js4XYEtsaie38WJq9nLfre0zls+HjimyRb8Q+kOFl78LTbBFjKAXM/OSjEFm+Nxpc493qMhJyFLHWPQHqC/1XNXYORDjTFC088byhai+QwdY1f20hGK0xgZZ3nFRN38oY4We03lsKV+UGNmunTo8vuUZiYENijtpoRgqvyhOURxb3heAHrZColdYLXCs2JnrkvJVJ6kKVfzGjp2XmRhvkd1Z04qx6ubPGKK4cSYePkIkY1qEv2jBDmmBE/rN5JEjmJZ4533bPfvaFjZ2UPJr9j3e+267sXaXSB3zLyUNy9JOLWKJ077M6xCbI6YccJz8TpfmEpdPwlF/U9xPUsfwCflAv/PwZWguR+hHvbGATiGOThFPLEsiPIqn96mjpniCSCPCgU0K7vHa+74fYe4AHUDOiPEplTyWdEkn2QTpRM1osiF6Dg53yS8YppuM8cxJBjz1T632gk4OYninWJCjQvp5bpuMDX2z5A/6/+eNPvbtDHxSyK6Iwt2cnMIF2DDtuH+w8zbdeD3BVrO4Qsgrgu+ra7qg3z52CLQZm0+37Ss66SGKycE5ZWzp6wBvJooCYZ8SBMZO0uw0xB1U1vCyutY9fbvx0t06xRbhOOQoDbtJ4S9kLVOq/9z7YRXK6MTPU74lvvrfniAXNrazo05Qlx1xzE/SUxbjH7yn0BPTQuVfSatgUuKs7BN6uV4+VDvMGplYyzjJOVk1O+sboUfY+Ytq6qiEFuDZoxdXHSPoxCR4UxW6KLzxpwbjfaN+49krHrWSkIY+j+4Cr1T53QUW7BSi67owmvxGDvqM7p7TRy8A12IvpZ6HUgvS1Hx7L4hJ6oi7Jk55KuhFLc5mfz7dAT5ZtPo7N6/0RRTpXZWBL/j3JBOnd9jnlHD08AR0xX8t9AhvRsgHhgAAAABJRU5ErkJggg==";
const brand_4 = "data:image/png;base64,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";
const brand_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAeCAYAAAD6myZLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaUSURBVHgB7Vu9buNGEB7ZCpAq4QFJfby8QHxPEBoB0p6NPIDlKqV8f90Bluq7s6UnsAykt1ylNK9OYd0DBGaewEKqFP7J98mz8mhNSuIaSY5nfoDM5e7s7HJ2dmZ2SDf+2vjuWoLQ2N775Y/0elXOJABfrEr85kf5U2pUEitSo0YAasWpEYRacWoEoSk1agA7OzvR6upqwvLl5eW41+ul8+gfrOJAUAkEFUFIIwgpkweMFy9e7DcajR13D7nw0pjX55NWnJcvX57gkpiq9P379+tL9j3ApZXXF4JqQVBsl2azOcLlqTxQ+EqzLKoW4yS0FIuIQBPLrNL4iF3h+vp6jWZaHiAoJ6s0KHdhgZ9CJtuGJnn16tU+rmu2b+VcFczoBi7pPBpYkTYevrD96upquLKysgVBxbjtw1WN5QECMthwZcjrGBa5o7e0wgKFOeXGUlkez/SV6mFrkYXAgzqB5CoEFGW0t7f3BLvrCYRV2kx/RrByPPcbIcdCOVfJ4gzxo0JE2CktXHt5RIxf5NYVsU+riOEyQbG6vVhvR8tYJ+0zzqPVNrcgWQl+8bJzMPScw0j+BVRGcWhK4VomlgTXZ1KgOGjbMn0+4L7l08AEJ2g7UJoU1mfbttOiQTnb6v9ndh2C7mmQjfIRLs73P8fvMX4d7ZPit76IH+YyguvsYw4Df57gz+fdNWNMgM3RA/1zb84xxthVGUWGBy8DWNeu2yioo+yeWTr2Q33iTSF2BYQIR2ifKCx4bVbGVeHBeMJK9TY3SNad5uoHMh+kjTXOmeEBIZ2iviPeIruxTTlyfKCAP8iNMkdl+DGG4AkPyrBr67FIbVysYk4B+jWPdkvHaEn+nFtoP1NFtPOO8p7F/KSgPapUcKxWJ2E5L0hG3VT42BWH2IGxlAR4UEFjveUOO8S4E3PPsVVB7sCcToam7x1+oOs7fnLjere0fwcL+xHWzPW3sVcf7ZN6jd++dg26WazCjkDTx7NnsGRUsLbZHAegTzlH0GSo57MkOj4t37H3TG3Dl/N2LjJrXsrVUnmRHIzkSzD/W4L6v/mp/JtxPNhAlYMPwyC54/n7hH8oFGY+Nd5ZGl58NIbyrXsxwkAXKhc8ylp6y49zwvzXvbhqqOa/rfe8Dr2YJvMC+NQeDow8Jm1enou0AyjRqSoPXeaOnp6GmF/HbUTMjQeGjn0eWjLDex/t0zVrPvr5dwnCRTOS9UfZ9W8ShN0jiRqbsjAwtKCSICag5k+EZYNkb9G7EgDGIe4YD4EO8gLLOQH1HXobb6Gc5vWFsnWw+E5xEizWY6b8DUmMZ9vBovXMHGz7huHVzZnvGP37KO6bOXXknmhKo3kiIVi93IbSpDjQh/X/6ibql5K4uLgYOpdkg2S76Ng9qQSA8YYZ57BEV/b9mFMduwJdZ14/LiyUJXO0TBHQWjIIl1s3ss+YB2N0bRCtSbnI8ErzxmDeCjLb9+d0H1Quj6O7OtXbSZBMAZpFH4S8e/JdEAR9LuWQtwliWQJQjDt9oUDbdG+WF4NoKNCZOxgg0WmD20z+Q1Tyswqmxl2ZQbIx9YU7+3/CVCH4QrWIKC/RRuVnklLT/9YF8pR28vr16zVYRatwhfwXtAWhkorz7t27VG4XhT47YcEFxRIAtVLThQCvTbk/RobfWh6BFwjP9CHomhDM8iXspp0fNghjm8yQRkXv8eDG14r4h6KyH3LxWKtFl18ggoJig2PDv513girzQhQ8PiziB3ezZW4ZQI85hk+rx3Q7v0iD5NTV2XSEnS9op/U8qksYZr4gqOz3ODDTPU9QYwaBcg/oCcdlVCcuASeSLvhmdDUQ+vear3m0DD+do8uFRD4/1D0Dz5ajh2Vw2eAJLQNkdb2kp9WY5pBMbqmLcqLVib6Y5FvuMfNYemiItU9W8uDAMWIdZxdKOHbfMFXW4vi7DRje9y033RWEa1P5k4BUk3hHc7LJhXNkLkhuXcwMPzHv0bjYb9++nYll5Cbje8Ksr9LH2jZypyu6bRvzqUs8Yj+OZVwkN9ZmmYMDE66Wr5l3XOlvjq3AsEChJngGXBAeiaX4041USoCnQCYGUSwK2rnw617yzd8Utr6vyjgFlKeTE0TP8PKTk8uAsrAytmjIr+dh/1d1hePit98wjxP0f1VwknHjE/+/KsYZiEFi7FSa/AyuZ3Qfq8Z4A/xsrmguP0uvJ6iFb9PdnMv0KTNvN+dacWoEof73mBpBqBWnRhBqxakRhFpxagThH1une8JzI3pOAAAAAElFTkSuQmCC";
const brand_6 = "data:image/png;base64,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";
const brand_7 = "data:image/png;base64,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";
const brand_8 = "data:image/png;base64,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";
const _sfc_main = {
  components: { Swiper, SwiperSlide },
  props: {
    spacing: {
      type: Boolean,
      default: false
    },
    style_2: {
      type: Boolean,
      default: false
    },
    el_style: {
      type: Boolean,
      default: false
    },
    square: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      brand_1_data: [
        { brand: brand_1 },
        { brand: brand_2 },
        { brand: brand_3 },
        { brand: brand_4 },
        { brand: brand_5 },
        { brand: brand_6 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_4 },
        { brand: brand_6 },
        { brand: brand_1 }
      ],
      brand_2_data: [
        { brand: brand_1 },
        { brand: brand_3 },
        { brand: brand_6 },
        { brand: brand_5 },
        { brand: brand_8 },
        { brand: brand_2 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_5 },
        { brand: brand_1 },
        { brand: brand_6 }
      ]
    };
  },
  setup() {
    return {
      modules: [Autoplay]
    };
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `brand__area ${$props.spacing ? "pb-120" : ""} ${$props.el_style ? "pt-110 pb-120" : ""}`
  }, _attrs))}><div class="container-fluid g-0">`);
  if (!$props.style_2 && !$props.el_style) {
    _push(`<div class="row gx-0"><div class="col-xxl-12"><div class="brand__info text-center"><p>Join the <span>10.000+</span> companies trusting harry</p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.el_style) {
    _push(`<div class="row gx-0"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Modern &amp; Clean Design</span><h3 class="tp-section-title-3">Brand Rounded Slider</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row gx-0 gy-2"><div class="col-xxl-12"><div class="${ssrRenderClass(`brand__slider-5 ${$props.square ? $props.square : ""}`)}"><div class="brand__slider-5">`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "brand__slider-active-5",
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true
    },
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 4e3,
    modules: $setup.modules,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      "0": {
        slidesPerView: 1
      },
      "576": {
        slidesPerView: 2
      },
      "768": {
        slidesPerView: 4
      },
      "991": {
        slidesPerView: 5
      },
      "1200": {
        slidesPerView: 7
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.brand_1_data, (brand, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="brand__item-5"${_scopeId2}><img${ssrRenderAttr("src", brand.brand)} alt="brand"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "brand__item-5" }, [
                    createVNode("img", {
                      src: brand.brand,
                      alt: "brand"
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.brand_1_data, (brand, i) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: i }, {
              default: withCtx(() => [
                createVNode("div", { class: "brand__item-5" }, [
                  createVNode("img", {
                    src: brand.brand,
                    alt: "brand"
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
  _push(`</div></div></div><div class="col-xxl-12"><div class="${ssrRenderClass(`brand__slider-5-1 ${$props.square ? $props.square : ""}`)}"><div class="brand__slider-5">`);
  _push(ssrRenderComponent(_component_swiper, {
    ref: "swiper_slide",
    class: "brand__slider-active-5-1",
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
      reverseDirection: true
    },
    slidesPerView: 1,
    centeredSlides: true,
    speed: 5e3,
    modules: $setup.modules,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      "0": {
        slidesPerView: 1
      },
      "576": {
        slidesPerView: 2
      },
      "768": {
        slidesPerView: 4
      },
      "991": {
        slidesPerView: 5
      },
      "1200": {
        slidesPerView: 7
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.brand_2_data, (brand, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: i }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="brand__item-5"${_scopeId2}><img${ssrRenderAttr("src", brand.brand)} alt="brand"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "brand__item-5" }, [
                    createVNode("img", {
                      src: brand.brand,
                      alt: "brand"
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.brand_2_data, (brand, i) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: i }, {
              default: withCtx(() => [
                createVNode("div", { class: "brand__item-5" }, [
                  createVNode("img", {
                    src: brand.brand,
                    alt: "brand"
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
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brands/AgencyBrands.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AgencyBrands = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AgencyBrands as A
};
//# sourceMappingURL=AgencyBrands-DAitA-64.js.map
