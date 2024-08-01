import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { i as img_1, a as img_2, b as img_3 } from "./portfolio-3-DvsWHYw2.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      portfolio_items: [
        {
          id: 1,
          bg: img_1,
          tag: "Business Consulting",
          title: "12 best blogs to follow about food design",
          text: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          delay: "130",
          home: true
        },
        {
          id: 2,
          bg: img_2,
          tag: "Lost Saints",
          title: "Purpose-driven employers succeed",
          text: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          delay: "150",
          home: true
        },
        {
          id: 3,
          bg: img_3,
          tag: "UI wireframe",
          title: "The 4 most effective incentives",
          text: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          delay: "170",
          home: true
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `portfolio__area ${$props.style_2 ? "" : "black-bg"} pt-110 pb-100`
  }, _attrs))}><div class="container"><div class="row">`);
  if (!$props.style_2) {
    _push(`<div class="col-xxl-8 col-xl-7"><div class="section__title-wrapper mb-60"><h3 class="section__title section__title-white"> Some recent <span class="section__title-highlight"> works <svg width="220" height="27" viewBox="0 0 220 27" fill="none"><path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"></path></svg></span> we really proud of </h3></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.style_2) {
    _push(`<div class="col-xxl-7 col-xl-7 col-lg-7"><div class="tp-section-wrapper-2 mb-60"><span class="tp-section-subtitle-2">Case study</span><h3 class="tp-section-title-2"> Some recent works we really proud of </h3></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="row gx-2"><!--[-->`);
  ssrRenderList($data.portfolio_items, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="portfolio__item mb-30 fix transition-3" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="portfolio__thumb include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${item.bg})` })}"></div><div class="portfolio__content"><div class="portfolio__tag"><span><a href="#">${ssrInterpolate(item.tag)}</a></span></div><h3 class="portfolio__title">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3></div><div class="portfolio__text"><p>${ssrInterpolate(item.text)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/HomePortfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomePortfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HomePortfolio as H
};
//# sourceMappingURL=HomePortfolio-lhyEoGzG.js.map
