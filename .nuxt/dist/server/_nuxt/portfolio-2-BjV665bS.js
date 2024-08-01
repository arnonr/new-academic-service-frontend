import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import { b as bg } from "./breadcrumb-bg-5-DfSaIy-t.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { S as StartUpCta } from "./StartUpCta-BrbT3hsd.js";
import { i as img_1, a as img_2, b as img_3 } from "./portfolio-3-DvsWHYw2.js";
import FooterSix from "./FooterSix-Dn8yZGTG.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
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
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const _sfc_main$2 = {
  data() {
    return { bg };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadcrumb__area breadcrumb__style-5 p-relative include-bg pt-170 pb-110 blue-bg" }, _attrs))}><div class="breadcrumb__bg bg-luminosity include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row"><div class="col-xxl-8"><div class="breadcrumb__content breadcrumb__content-2 p-relative z-index-1"><span class="breadcrumb__title-pre">Case Studies</span><div class="breadcrumb__list"><span><a href="#">Home</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span><a href="#">Business</a></span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span>Investment Trend Monitor: Top Trends in 2022 </span></div><h3 class="breadcrumb__title"> We share our knowledge experience &amp; passion. </h3></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/breadcrumb/PortfolioBreadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PortfolioBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const img_4 = "" + __buildAssetsURL("portfolio-7.CG-w9fwF.jpg");
const img_5 = "" + __buildAssetsURL("portfolio-6.CazSbKgg.jpg");
const img_6 = "" + __buildAssetsURL("portfolio-8.znrgLmLx.jpg");
const _sfc_main$1 = {
  components: {},
  data() {
    return {
      categories: [],
      activeCategory: "All",
      portfolio_items: [],
      portfolio_data: [
        {
          id: 1,
          img: img_1,
          tag: "Business Consulting",
          title: "12 best blogs to follow about food design",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Case Studies"
        },
        {
          id: 2,
          img: img_2,
          tag: "Lost Saints",
          title: "Purpose-driven employers succeed",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Client Stories"
        },
        {
          id: 3,
          img: img_3,
          tag: "UI wireframe",
          title: "The 4 most effective incentives",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Inspiration"
        },
        {
          id: 4,
          img: img_4,
          tag: "Creativity",
          title: "Industrial Chemicals Manufacture Study",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Case Studies"
        },
        {
          id: 5,
          img: img_5,
          tag: "Business",
          title: "Case Study – Direct Sales Retailer",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Digital"
        },
        {
          id: 6,
          img: img_6,
          tag: "Client Stories",
          title: "Business Academy Consulting Client",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Inspiration"
        }
      ]
    };
  },
  methods: {
    handleCategoryItem(value) {
      this.activeCategory = value;
      if (value === "All") {
        this.portfolio_items = this.portfolio_data;
      } else {
        this.portfolio_items = this.portfolio_data.filter(
          (item) => item.category === value
        );
      }
    }
  },
  created() {
    this.categories = [
      "All",
      ...new Set(this.portfolio_data.map((item) => item.category))
    ];
    this.portfolio_items = this.portfolio_data;
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-60 pb-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="portfolio__masonary-btn-2 text-center mb-50"><div class="masonary-menu filter-button-group"><!--[-->`);
  ssrRenderList($data.categories, (cate, i) => {
    _push(`<button class="${ssrRenderClass(`${cate === $data.activeCategory ? "active" : ""}`)}">${ssrInterpolate(cate)}</button>`);
  });
  _push(`<!--]--></div></div></div></div><div class="row gx-2 grid"><!--[-->`);
  ssrRenderList($data.portfolio_items, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1"><div class="portfolio__item mb-8 fix transition-3"><div class="portfolio__thumb include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${item.img})` })}"></div><div class="portfolio__content"><div class="portfolio__tag"><span><a href="#">${ssrInterpolate(item.tag)}</a></span></div><h3 class="portfolio__title">`);
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
    _push(`</h3></div><div class="portfolio__text"><p>${ssrInterpolate(item.desc)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/GridThreeColumns.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridThreeColumns = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderOne, PortfolioBreadcrumb, GridThreeColumns, StartUpCta, FooterSix, BackToTop },
  setup() {
    useHead({
      title: "Portfolio 2 - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_portfolio_breadcrumb = resolveComponent("portfolio-breadcrumb");
  const _component_grid_three_columns = resolveComponent("grid-three-columns");
  const _component_start_up_cta = resolveComponent("start-up-cta");
  const _component_footer_six = resolveComponent("footer-six");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    top_bar: false,
    transparent: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_breadcrumb, null, null, _parent));
  _push(ssrRenderComponent(_component_grid_three_columns, null, null, _parent));
  _push(ssrRenderComponent(_component_start_up_cta, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_footer_six, { style_2: true }, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  portfolio2 as default
};
//# sourceMappingURL=portfolio-2-BjV665bS.js.map
