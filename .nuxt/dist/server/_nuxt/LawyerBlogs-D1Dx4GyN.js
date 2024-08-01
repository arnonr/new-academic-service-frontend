import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, resolveComponent, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main$1 = {
  props: {
    blog: {}
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-lg-5 col-md-5 col-sm-6"><div class="blog__thumb-4 m-img">`);
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
  _push(`</div></div><div class="col-lg-7 col-md-7 col-sm-6"><div class="blog__content-4"><div class="blog__tag-4"><a href="#">${ssrInterpolate($props.blog.tag)}</a></div><h3 class="blog__title-4">`);
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
  _push(`</h3><p>${ssrInterpolate($props.blog.sm_text)}</p><div class="blog__author d-flex align-items-center mb-30"><div class="blog__author-thumb"><a href="#"><img${ssrRenderAttr("src", $props.blog.author_img)} alt=""></a></div><div class="blog__author-content"><h3 class="blog__author-title"><a href="#">${ssrInterpolate($props.blog.author_name)}</a></h3></div></div><div class="blog__meta-4 d-flex align-items-center justify-content-between"><span><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.33325 1V3" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66675 1V3" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33374 5.72656H12.6671" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 5.33285V10.9995C13 12.9995 12 14.3328 9.66667 14.3328H4.33333C2 14.3328 1 12.9995 1 10.9995V5.33285C1 3.33285 2 1.99951 4.33333 1.99951H9.66667C12 1.99951 13 3.33285 13 5.33285Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.46297 8.79964H9.46896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.46297 10.8001H9.46896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.99691 8.79964H7.0029" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.99691 10.8001H7.0029" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.52938 8.79964H4.53537" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.52938 10.8001H4.53537" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.blog.date)}</span><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5291 11.381L12.8021 13.5929C12.8721 14.1739 12.2491 14.5799 11.7521 14.2789L8.81916 12.5359C8.49716 12.5359 8.18217 12.515 7.87417 12.473C8.39216 11.864 8.70016 11.0939 8.70016 10.2609C8.70016 8.27295 6.97817 6.66299 4.85018 6.66299C4.03818 6.66299 3.28919 6.89397 2.66619 7.29997C2.64519 7.12497 2.63818 6.94997 2.63818 6.76797C2.63818 3.58298 5.40317 1 8.81916 1C12.2351 1 15.0001 3.58298 15.0001 6.76797C15.0001 8.65796 14.0271 10.331 12.5291 11.381Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.69997 10.261C8.69997 11.094 8.39197 11.8641 7.87397 12.4731C7.18098 13.313 6.08198 13.852 4.84998 13.852L3.02299 14.937C2.71499 15.126 2.32299 14.867 2.36499 14.51L2.53999 13.131C1.602 12.4801 1 11.437 1 10.261C1 9.02904 1.658 7.94406 2.666 7.30006C3.28899 6.89407 4.03799 6.66309 4.84998 6.66309C6.97797 6.66309 8.69997 8.27305 8.69997 10.261Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.blog.comment)} Comments </span></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/LawyerSingleBlog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LawyerSingleBlog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  mixins: [blogData],
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    LawyerSingleBlog
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_LawyerSingleBlog = resolveComponent("LawyerSingleBlog");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `blog__area fix pb-70 ${$props.style_2 ? "blog__style-2 pt-90" : "pt-100"}`
  }, _attrs))}><div class="container">`);
  if (!$props.style_2) {
    _push(`<div class="row align-items-center"><div class="col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-8"><div class="section__title-wrapper-4 mb-60"><span class="section__title-pre-4">OUR archive</span><h3 class="section__title-4">Our latest news and update.</h3></div></div><div class="col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-4"><div class="blog__nav text-sm-end d-none d-sm-block"><button class="blog-slider-button-prev"><i class="fa-light fa-angle-left"></i></button><button class="blog-slider-button-next"><i class="fa-light fa-angle-right"></i></button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.style_2) {
    _push(`<div class="row align-items-center"><div class="col-xxl-8 col-xl-8 col-lg-5 col-md-7 col-sm-8"><div class="tp-section-title-wrapper-4 mb-60"><span class="tp-section-subtitle-2 is-uppercase subtitle-mb-2">OUR archive</span><h3 class="tp-section-title-2">Moira baxter’s blog posts</h3></div></div><div class="col-xxl-4 col-xl-4 col-lg-7 col-md-5 col-sm-4"><div class="blog__nav text-sm-end d-none d-sm-block"><button class="blog-slider-button-prev"><i class="fa-light fa-angle-left"></i></button><button class="blog-slider-button-next"><i class="fa-light fa-angle-right"></i></button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><div class="col-xxl-12"><div class="blog__slider">`);
  _push(ssrRenderComponent(_component_Swiper, {
    slidesPerView: 3,
    class: "blog__slider-active swiper-container",
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    modules: $setup.modules,
    autoplay: {
      delay: 3e3
    },
    pagination: {
      el: ".blog-slider-4"
    },
    navigation: {
      nextEl: ".blog-slider-button-next",
      prevEl: ".blog-slider-button-prev"
    },
    breakpoints: {
      1400: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 2,
        centeredSlides: false
      },
      992: {
        slidesPerView: 2,
        centeredSlides: false
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false
      },
      576: {
        slidesPerView: 1,
        centeredSlides: false
      },
      0: {
        slidesPerView: 1,
        centeredSlides: false
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.blogData.filter((item) => item.home_lawyer), (blog) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: blog.id,
            class: "blog__item-4"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_LawyerSingleBlog, { blog }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_LawyerSingleBlog, { blog }, null, 8, ["blog"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.blogData.filter((item) => item.home_lawyer), (blog) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: blog.id,
              class: "blog__item-4"
            }, {
              default: withCtx(() => [
                createVNode(_component_LawyerSingleBlog, { blog }, null, 8, ["blog"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="blog-slider-4 tp-swiper-dot text-center d-sm-none"></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/LawyerBlogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LawyerBlogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LawyerBlogs as L
};
//# sourceMappingURL=LawyerBlogs-D1Dx4GyN.js.map
