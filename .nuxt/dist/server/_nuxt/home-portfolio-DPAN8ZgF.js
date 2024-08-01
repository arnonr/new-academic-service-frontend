import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import Layout from "./LayoutEight-BvwF4fqQ.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { P as PersonalPortFeature } from "./PersonalPortFeature-CcZU6heJ.js";
import { P as PersonalPortServices } from "./PersonalPortServices-Dr9wNU-b.js";
import { P as PersonalPortSliderItems } from "./PersonalPortSliderItems-BF0WYz0g.js";
import { P as PersonalPortSkills } from "./PersonalPortSkills-CnCRz4zr.js";
import { P as PersonalPortAwards } from "./PersonalPortAwards-9bhyWO1r.js";
import { P as PersonalPortTestimonial } from "./PersonalPortTestimonial-BsptoV2L.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { P as PersonalPortContact } from "./PersonalPortContact-BQ0BNyyw.js";
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
import "./HeaderEight-CDvuu2sc.js";
import "./OffCanvasTwo-DLi45DwO.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./FooterEight-CeHSxLIP.js";
import "./logo-black-DNxRSU5J.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "sal.js";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "swiper/vue";
import "swiper";
import "./CareerItems-C2bRCDQQ.js";
import "vue3-carousel";
import "./user-14-wrvREx19.js";
import "./user-4-BaMCI89Q.js";
import "./user-6-DCzgwACr.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
const _imports_0 = "" + __buildAssetsURL("slider-shape-1.BvYDkJOP.png");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "" + __buildAssetsURL("slider-1.H_GqSD3y.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area pt-40 p-relative fix" }, _attrs))}><div class="slider__item-9"><div class="container"><div class="row align-items-end"><div class="col-xl-7 col-lg-6 col-md-7"><div class="slider__content-9"><span class="slider__title-pre-9">Hy ! I am Brian miller</span><h3 class="slider__title-9">Creative <br> UI/UX designer</h3><p>Hi! I&#39;m a UI/UX Designer - creating bold &amp; brave interface design for companies all across the world. </p><div class="slider__btn-9 mb-85">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-5 tp-link-btn-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Book a call <span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" Book a call "),
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="slider__social-9 d-flex flex-wrap align-items-center"><span>Check out my:</span><ul><li><a href="https://www.instagram.com/" target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.7992 7.55891C10.8856 8.14148 10.7861 8.73646 10.5148 9.25922C10.2436 9.78197 9.81441 10.2059 9.28835 10.4707C8.76228 10.7355 8.16612 10.8276 7.58466 10.7341C7.0032 10.6405 6.46604 10.366 6.0496 9.94952C5.63315 9.53307 5.35862 8.99592 5.26506 8.41445C5.17149 7.83299 5.26365 7.23683 5.52844 6.71077C5.79322 6.1847 6.21714 5.75552 6.7399 5.48427C7.26266 5.21303 7.85764 5.11352 8.44021 5.19991C9.03445 5.28803 9.5846 5.56493 10.0094 5.98972C10.4342 6.41451 10.7111 6.96466 10.7992 7.55891Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.8496 4.15009H11.8596" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li><li><a href="https://dribbble.com/" target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5516 2.95306C10.7316 6.13806 7.22455 7.96507 3.57055 7.63607L1.35156 7.43306" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.45215 13.159C5.27215 9.97401 8.77916 8.147 12.4332 8.476L14.6521 8.67901" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.94043 1.70007L7.16642 4.46508C8.65742 6.31308 9.71443 8.46208 10.2744 10.7651L11.1214 14.2581" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li><li><a href="https://www.behance.net/" target="_blank"><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.72744H7.30022C8.79428 6.72744 10.0003 8.00656 10.0003 9.59115C10.0003 11.1757 8.79428 12.4549 7.30022 12.4549H1.90003C1.40501 12.4549 1 12.0253 1 11.5003V1.95457C1 1.42956 1.40501 1 1.90003 1H6.40019C7.89425 1 9.10029 2.27913 9.10029 3.86372C9.10029 5.44831 7.89425 6.72744 6.40019 6.72744H1Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M11.7998 8.63659H19.0001C19.0001 6.52698 17.389 4.8183 15.3999 4.8183C13.4109 4.8183 11.7998 6.52698 11.7998 8.63659ZM11.7998 8.63659C11.7998 10.7462 13.4109 12.4549 15.3999 12.4549H16.903" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.7479 2.43195H14.0479" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li></ul></div></div></div><div class="col-xl-5 col-lg-6 col-md-5 order-first order-md-last"><div class="slider__thumb-9 p-relative scene"><div class="slider__shape"><div class="slider__shape-20"><img class="layer"${ssrRenderAttr("src", _imports_0)} alt="layer"></div><div class="slider__shape-21"><img class="layer"${ssrRenderAttr("src", _imports_1)} alt="layer"></div></div><img class="slider__thumb-9-main"${ssrRenderAttr("src", _imports_2)} alt="slider__thumb"></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/PersonalPortfolioHero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PersonalPortfolioHero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  mixins: [SalScrollAnimationMixin]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about__area about__space-145" }, _attrs))}><div class="about__inner-9 black-bg" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="container"><div class="row justify-content-center"><div class="col-xxl-10 col-xl-10 col-lg-11 col-md-10"><div class="about__wrapper-9"><span class="about-subtitle">ABOUT ME</span><h3 class="about-title">My name is <span>micael</span>, I’m a <span>Designer</span> based in <span>Australia</span> and this is a <span>selection</span> of my personal and <span>professional</span> work.</h3><p>Over the past 12 years, I&#39;ve worked with a diverse range of clients, from startups to fortune 500 companies. I love crafting interfaces that delight users and help businesses grow. lorem ipsum dolor sit amet, consectet adipiscing spendisse iperdiet.</p><div class="about__btn-9"><a href="https://weblearnbd.net/wp/bioxlab/wp-content/uploads/2022/09/demo-cv.pdf" target="_blank" class="tp-btn-5 tp-btn-5-white">Download CV</a></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/PersonalPortAbout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PersonalPortAbout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  components: { PersonalPortSliderItems }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_personal_port_slider_items = resolveComponent("personal-port-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area portfolio__overlay-9 fix" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-6 col-xl-6 col-lg-8 col-md-8"><div class="section__title-wrapper-9 mb-65"><span class="section__title-pre-9">Past Projects</span><h3 class="section__title-9">The work I did for client.</h3></div></div><div class="col-xxl-6 col-xl-6 col-lg-4 col-md-4"><div class="portfolio__more-9 mb-85 text-md-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-masonry",
    class: "tp-btn-5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`all projects`);
      } else {
        return [
          createTextVNode("all projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="container-fluid gx-0"><div class="row gx-0"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_personal_port_slider_items, null, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/PersonalPortPortfolio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PersonalPortPortfolio = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    item: {
      type: Object,
      default: {},
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog__item-9 mb-30",
    "data-sal": "slide-up",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="blog__thumb-9 w-img fix">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.item.img)} alt="blog image"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.item.img,
            alt: "blog image"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="blog__content-9"><div class="blog__meta-9"><span><a href="#">${ssrInterpolate($props.item.date)}</a></span><span><a href="#">${ssrInterpolate($props.item.tag)}</a></span></div><h3 class="blog__title-9">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${$props.item.title ?? ""}</span>`);
      } else {
        return [
          createVNode("span", {
            innerHTML: $props.item.title
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/PersonalPortSingleBlog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PersonalPortSingleBlog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  components: { PersonalPortSingleBlog },
  mixins: [blogData]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_personal_port_single_blog = resolveComponent("personal-port-single-blog");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area grey-bg-12 pt-115 pb-90 p-relative z-index-1" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7"><div class="section__title-wrapper-9 mb-65"><span class="section__title-pre-9">Latest blog posts</span><h3 class="section__title-9">What’s new? My blog and news.</h3></div></div><div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5"><div class="blog__more-9 mb-85 text-md-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-grid",
    class: "tp-btn-5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`VIEW ALL POST`);
      } else {
        return [
          createTextVNode("VIEW ALL POST")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((blog) => blog.home_portfolio), (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">`);
    _push(ssrRenderComponent(_component_personal_port_single_blog, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/PersonalPortBlogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PersonalPortBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Portfolio - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PersonalPortfolioHero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortFeature, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortServices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortPortfolio, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortSkills, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortAwards, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortBlogs, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PersonalPortContact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PersonalPortfolioHero),
              createVNode(PersonalPortAbout),
              createVNode(PersonalPortFeature),
              createVNode(PersonalPortServices),
              createVNode(PersonalPortPortfolio),
              createVNode(PersonalPortSkills),
              createVNode(PersonalPortAwards),
              createVNode(PersonalPortTestimonial),
              createVNode(PersonalPortBlogs),
              createVNode(PersonalPortContact)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-portfolio-DPAN8ZgF.js.map
