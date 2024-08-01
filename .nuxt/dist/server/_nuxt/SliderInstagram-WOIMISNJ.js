import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const inst_1 = "" + __buildAssetsURL("instagram-1.BuLFzUs3.jpg");
const inst_2 = "" + __buildAssetsURL("instagram-2.D3Lrravd.jpg");
const inst_3 = "" + __buildAssetsURL("instagram-3.BjWLt07h.jpg");
const inst_4 = "" + __buildAssetsURL("instagram-4.dCFGgCKJ.jpg");
const inst_5 = "" + __buildAssetsURL("instagram-5.BowadBQP.jpg");
const inst_6 = "" + __buildAssetsURL("instagram-6.B6TogPuM.jpg");
const inst_7 = "" + __buildAssetsURL("instagram-7.C38cKiDG.jpg");
const inst_8 = "" + __buildAssetsURL("instagram-8.BcS_wM-U.jpg");
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      instagram_items: [
        { img: inst_1, link: "https://www.instagram.com/" },
        { img: inst_2, link: "https://www.instagram.com/" },
        { img: inst_3, link: "https://www.instagram.com/" },
        { img: inst_4, link: "https://www.instagram.com/" },
        { img: inst_5, link: "https://www.instagram.com/" },
        { img: inst_6, link: "https://www.instagram.com/" },
        { img: inst_7, link: "https://www.instagram.com/" },
        { img: inst_8, link: "https://www.instagram.com/" },
        { img: inst_2, link: "https://www.instagram.com/" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(ssrRenderComponent(_component_Swiper, mergeProps({
    slidesPerView: 6,
    spaceBetween: 12,
    class: "instagram__slider-active swiper-container",
    loop: false,
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      1200: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
    }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.instagram_items, (item, i) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: i,
            class: "instagram__item w-img"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", item.img)} alt="image"${_scopeId2}><div class="instagram__btn"${_scopeId2}><a${ssrRenderAttr("href", item.link)} target="_blank" rel="noreferrer" class="tp-instagram-btn popup-image"${_scopeId2}><i class="fa-brands fa-instagram"${_scopeId2}></i></a></div>`);
              } else {
                return [
                  createVNode("img", {
                    src: item.img,
                    alt: "image"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "instagram__btn" }, [
                    createVNode("a", {
                      href: item.link,
                      target: "_blank",
                      rel: "noreferrer",
                      class: "tp-instagram-btn popup-image"
                    }, [
                      createVNode("i", { class: "fa-brands fa-instagram" })
                    ], 8, ["href"])
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.instagram_items, (item, i) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: i,
              class: "instagram__item w-img"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: item.img,
                  alt: "image"
                }, null, 8, ["src"]),
                createVNode("div", { class: "instagram__btn" }, [
                  createVNode("a", {
                    href: item.link,
                    target: "_blank",
                    rel: "noreferrer",
                    class: "tp-instagram-btn popup-image"
                  }, [
                    createVNode("i", { class: "fa-brands fa-instagram" })
                  ], 8, ["href"])
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/instagram/SliderInstagram.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SliderInstagram = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SliderInstagram as S,
  inst_2 as a,
  inst_3 as b,
  inst_4 as c,
  inst_5 as d,
  inst_6 as e,
  inst_7 as f,
  inst_8 as g,
  inst_1 as i
};
//# sourceMappingURL=SliderInstagram-WOIMISNJ.js.map
