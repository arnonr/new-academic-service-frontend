import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext, resolveComponent, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import Layout from "./LayoutTwo-D2H2doBa.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { A as AwardSliderItems } from "./AwardSliderItems-Dlg5iUQX.js";
import { l as lawyerVideo } from "./LawyerVideo-zRp8feJz.js";
import { b as bg_law_3, a as bg_law_4, c as bg_law_5 } from "./services-5-B55th-jS.js";
import { L as LawyerBlogs } from "./LawyerBlogs-D1Dx4GyN.js";
import { L as LawyerTestimonial } from "./LawyerTestimonial-ByjCoHUH.js";
import { L as LawyerTeams } from "./LawyerTeams-jtu5KIxZ.js";
import { L as LawyerContact } from "./LawyerContact-C7Uaycad.js";
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
import "./HeaderTwo-d61kK-g-.js";
import "./OffCanvasTwo-DLi45DwO.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./FooterTwo-D7XjoHLt.js";
import "./logo-MlJCTsTl.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "sal.js";
import "swiper/vue";
import "./VideoModal-yOQUjk9s.js";
import "./video-icon-play-1PuRorIu.js";
import "swiper";
import "./blogData-CZIVutvo.js";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./user-6-DCzgwACr.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
import "./testimonial-bg-B4vCMsQ0.js";
import "./teamData-RHm96bod.js";
const _imports_0$3 = "" + __buildAssetsURL("slider-shape-1.BG9_1VUs.png");
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgBxVixbtswED3SSYcCBZQto7J2aNQvqPIFkbeiDVC5P5D2C+z8QfIFUoCk6Fb7C+J8QYSiu9UtW720Q2OLvSNPlm1YFgVb7gMIyjJ593h3PPIkoCa88K0L0ApAwjEo6eMrB0A55l8xxucUBKSQZQOAbJjEX1OoAWE70AvfhSDkB3z0oR6GoLLrJP4S2wyuJOSFZz4IEeHKXX41BqH6kMl7gGkC8CdN4v7YjA3QUs9pnIeiad4paAtqVSmo6UUVMVFOBIXLF11Q6pN5g65QcAXwO84J2MBYVnRRlWs0qkvI9pFYPLYmpONE7H0DvVK0iFIo4PYSNgBauofauqwWF/d0siq+xGoy+3fGRWSV6UndwCwnRbJbd8Zaq0nJxQnopoJMsk0yBC0LZdKj1oFe8MLQKSWkY6awTHubZBZJTdpaB4WEfOrO/z9zGW/rSP9Qk6MmyMyD4/QBaBcqQE/cDOl9YSHRMkwVXDRNhmAspS6MbhHNaBi2uXVUmkS3R7ZClVI+dvPJkrZyim0ghIhtZHid9yMd5CrrUI4yFjIZGGaMq4m42DD4gVqIzeVGaSLAFuH/I2xetTDKbQUHwb4c0eqS6Oagcr7SGfuOCZBFSGCfnx0m1eX/CSFa67pMnt5lYkL6HSEzFy0kfdbUh3pkSMkRKuthS7Cl3MfYyO25tS953krojK3UQMufirYEKU9Z3T1U45zJkHJaeekRQkTBWI+sFq0XK4f8cCzRh25OFqoRcN8GO/TAuNJHKznlw6ZGt5A+BbVrXj5LYQ14R9FYcosNeWALDvhnUD4y160cIqSZl52+c8hX+BPqIeXeLRswp9vZA3vkhH5BDXAs9arG4Q7XOZEsxJer0Kmaw311btkA0tyDCX/ddQM5bmisx/HUECGV5dvdZuVX3HehIZDL2BXijcV4ujWmYLZxBA0ACU1NhhYiqIoj3saUg6gP+bwKrc4sW0J81RiC3kVPYdUEjqXXYCzlgsnCD9uymDntsW4y2uS5zSQ+t+i86oA5WFPYEoob4+xeoj5vWmFsguLGqERH91hDmXL5/6CVPzwm39ND79UB2gwrzlZw6L0cPCY/rAvCbWGx6oC9HiyUKLu3VEmhuL6YaxJy+UVRzFHdpC018j6eNZaZl7HmYwMlyQnV45wK7L5eNEaoILb09YIOY5Hh5xh95V34HLMTQovEyj9Y5feZnRHKYXae9HVxoGb1mLMtQv8AK8qZE9ggeSwAAAAASUVORK5CYII=";
const _imports_2$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA+CAYAAAAbMip8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB7ZdBTsJAGIXfP63CshvBZXcmJsZyAsMJwBOAJxBOIJwAPIFwAvUEU06AJgruxJ0mJuKOEtPffypsO3Rb+5Imk8n/Ml18efOGqi+TAZg78nU/jutDpKgy000ouiHQSCUmI6IGrKIWMTzjcQncZ6LT+If7NhvH3CeHjPEehfIjb6r9rLOqOg91qUyv1Znu2EyV+eQqmRWPYkKQ7O7CKvNmFoGLmC+E1YbQbmVVEXeZ8UbAHQrlQiTsea6L4POkHu5iOHjSgeNgqYS9qeOSrjzrns1kMlg5NBXSbg2rXnL0ltkUSTz6fwt4rmKuCX/NKMLIZjSsxjEeZb5gNSeiw7n2Y0awjhAua/Vl2rDhem8PTWE1dBmkBTe/VEpu2Waacb9MA0m4NgMLtd0UcL9g+z3m7+1aSQeoM/P5esVdm1FaScfMRiuuoVAuRBJ5l8JNm4iG70dn47RhUztlbsCb2jmUuAsk+tqwnUIkh8AX2noGOXOFLwSla6sRPJYcfjClGIX+tyjTE0lqp8FN2BsqxobRLLXTPJFM7ZSQbGV9Iv0CtLPGn/nopGoAAAAASUVORK5CYII=";
const _imports_3$1 = "" + __buildAssetsURL("slider-thumb-1.DH_EUgJ1.jpg");
const _sfc_main$8 = {
  mixins: [SalScrollAnimationMixin]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "slider__area slider-mt-50 p-relative z-index-1",
    "data-bg-color": "green-dark"
  }, _attrs))}><div class="slider__mouse-scroll slider__mouse-scroll-4 smooth d-flex align-items-center"><a href="#cases" class="mouse-scroll-icon mouse-scroll-icon-4"></a><p><a href="#cases">Scroll Down</a></p></div><div class="slider__shape"><img class="slider__shape-4-1"${ssrRenderAttr("src", _imports_0$3)} alt=""><img class="slider__shape-4-2 jarallax"${ssrRenderAttr("src", _imports_1$1)} alt=""><img class="slider__shape-4-3 jarallax"${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="container"><div class="row align-items-center"><div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6"><div class="slider__content-4"><span class="slider__title-pre-4">Since 1975</span><h3 class="slider__title-4">We&#39;re Certified Law Professionals</h3><p> We support businesses through periods of expansion, Succession, and all other important transitions. </p><div class="slider__btn-4">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-brown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get In Touch`);
      } else {
        return [
          createTextVNode("Get In Touch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6"><div class="slider__thumb-4 m-img"><img data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"${ssrRenderAttr("src", _imports_3$1)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/LawyerBanner.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const LawyerBanner = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  components: {
    AwardSliderItems
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_award_slider_items = resolveComponent("award-slider-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "award__area pt-30 pb-30" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-2 col-xl-2 col-lg-10 col-md-3"><div class="award__wrapper-4"><h3 class="award__title-4">Awards &amp; Recognitions</h3></div></div><div class="col-xxl-4 col-xl-4 col-lg-5 col-md-9"><div class="award__slider"><div class="award__slider-active swiper-container">`);
  _push(ssrRenderComponent(_component_award_slider_items, null, null, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awards/LawyerAwards.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const LawyerAwards = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const case_1 = "" + __buildAssetsURL("case-1.C2BcjXZx.jpg");
const case_2 = "" + __buildAssetsURL("case-2.CbOP4rug.jpg");
const _sfc_main$6 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      case_data: [
        {
          id: 1,
          bg: case_1,
          price: "247.00",
          title: "Personal Injury Claims and Gun What You Need to Know",
          text: "If you are looking for a random city or town name to spark a location for a book, game, or a script millions.",
          delay: "130"
        },
        {
          id: 2,
          bg: case_2,
          price: "176.00",
          title: "Do Injured Workers Have to Be Treated the Same?",
          text: "If you are looking for a random city or town name to spark a location for a book, game, or a script millions.",
          delay: "150"
        }
      ]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "case__area pt-110",
    id: "cases"
  }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-7 col-xl-8 col-lg-8 col-md-7"><div class="section__title-wrapper-4 pr-5 mb-60"><span class="section__title-pre-4">Case Results</span><h3 class="section__title-4"> We are a professional law firm located in Berlin. </h3></div></div><div class="col-xxl-5 col-xl-4 col-lg-4 col-md-5"><div class="case__more text-md-end mb-70">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio",
    class: "tp-btn-border-brown"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Browse Case Results `);
      } else {
        return [
          createTextVNode(" Browse Case Results ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.case_data, (item) => {
    _push(`<div class="col-xxl-6 col-lg-6"><div class="case__item mb-50" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="case__thumb w-img fix"><img${ssrRenderAttr("src", item.bg)} alt=""></div><div class="case__content transition-3"><div class="case__price"><span>${ssrInterpolate(item.price)}</span></div><h3 class="case__title">`);
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
    _push(`</h3><p>${ssrInterpolate(item.text)}</p><div class="case__btn">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/portfolio-details",
      class: "tp-btn-border-brown-sm"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read More <i class="fa-regular fa-arrow-right-long"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode(" Read More "),
            createVNode("i", { class: "fa-regular fa-arrow-right-long" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/LawyerCases.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const LawyerCases = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$2 = "" + __buildAssetsURL("about-img-1.CUDbjmug.png");
const _imports_1 = "" + __buildAssetsURL("about-shape-1.t8Pms7yH.png");
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "data:image/png;base64,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";
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about__area grey-bg-8 pt-200 pb-200"
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="about__thumb-wrapper-4 p-relative"><div class="about__thumb-4"><img class="about-thumb-main"${ssrRenderAttr("src", _imports_0$2)} alt=""><img class="about__thumb-shape-1"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="about__experience-4 d-none d-sm-flex align-items-start"><div class="about__experience-icon-4 mr-15"><span><svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.9708 15.1069C34.9708 18.029 34.1126 20.7094 32.6356 22.9463C30.48 26.1707 27.0671 28.448 23.0952 29.0324C22.4166 29.1533 21.7181 29.2138 20.9996 29.2138C20.281 29.2138 19.5825 29.1533 18.9039 29.0324C14.9321 28.448 11.5191 26.1707 9.36351 22.9463C7.88655 20.7094 7.02832 18.029 7.02832 15.1069C7.02832 7.30779 13.2755 1 20.9996 1C28.7237 1 34.9708 7.30779 34.9708 15.1069Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.462 34.1914L36.1688 34.9773C35.4303 35.1587 34.8515 35.723 34.6918 36.4686L33.9933 39.4311C33.614 41.0433 31.5782 41.527 30.5204 40.2574L21 29.2137L11.4796 40.2775C10.4218 41.5471 8.38597 41.0634 8.00675 39.4512L7.30819 36.4887C7.12856 35.7431 6.54975 35.1587 5.83123 34.9975L2.53801 34.2115C1.02113 33.8488 0.482239 31.9342 1.57998 30.8258L9.36395 22.9663C11.5195 26.1907 14.9325 28.468 18.9043 29.0525C19.5829 29.1734 20.2815 29.2338 21 29.2338C21.7185 29.2338 22.4171 29.1734 23.0957 29.0525C27.0675 28.468 30.4805 26.1907 32.636 22.9663L40.42 30.8258C41.5178 31.9141 40.9789 33.8286 39.462 34.1914Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.1574 9.0208L23.335 11.3988C23.4946 11.7212 23.9138 12.0437 24.293 12.1042L26.4286 12.4669C27.7858 12.6886 28.1051 13.6962 27.1271 14.6837L25.4706 16.3563C25.1911 16.6385 25.0315 17.1826 25.1313 17.5857L25.6103 19.6614C25.9895 21.2938 25.1313 21.9386 23.6942 21.0721L21.6983 19.8831C21.3391 19.6614 20.7403 19.6614 20.381 19.8831L18.3851 21.0721C16.9481 21.9185 16.0899 21.2938 16.4691 19.6614L16.9481 17.5857C17.0279 17.2028 16.8882 16.6385 16.6088 16.3563L14.9522 14.6837C13.9742 13.6962 14.2936 12.7087 15.6508 12.4669L17.7864 12.1042C18.1456 12.0437 18.5648 11.7212 18.7244 11.3988L19.902 9.0208C20.4808 7.73102 21.5187 7.73102 22.1574 9.0208Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="about__experience-content-4"><h4><span>16</span>+</h4><p>Yours of experience <br> in this field.</p></div></div><div class="about__thumb-shape-2 p-relative"><img class="about__thumb-shape-logo"${ssrRenderAttr("src", _imports_2)} alt=""><img class="about__thumb-shape-logo-icon"${ssrRenderAttr("src", _imports_3)} alt=""></div></div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="about__wrapper-4 pr-70"><div class="section__title-wrapper-4 pr-5 mb-15"><span class="section__title-pre-4">About Jake Weary</span><h3 class="section__title-4-2">We are a professional law firm located in Berlin, Germany.</h3></div><p>The city name generator uses real world names rather than an algorithm to assemble unusual names. plus you can select from many different countries to immediately flavor the resulting random town names to what you desire.</p><p>How you use the city or town name is up to you. all results may be freely used in any work.</p><div class="about__btn-4 mt-45 d-sm-flex align-items-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-brown mr-30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Schedule Constitution`);
      } else {
        return [
          createTextVNode("Schedule Constitution")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="about__call d-flex align-items-center"><div class="about__call-icon"><span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.9609 22.2289C26.9609 22.6969 26.8569 23.1779 26.6359 23.6459C26.4149 24.1139 26.1289 24.5559 25.7519 24.9719C25.1149 25.6739 24.4129 26.1809 23.6199 26.5059C22.8399 26.8309 21.9949 26.9999 21.0849 26.9999C19.7589 26.9999 18.3419 26.6879 16.8469 26.0509C15.352 25.4139 13.857 24.5559 12.375 23.4769C10.88 22.3849 9.46297 21.1759 8.11098 19.8369C6.77198 18.4849 5.56298 17.0679 4.48399 15.586C3.41799 14.104 2.55999 12.622 1.936 11.153C1.312 9.67097 1 8.25398 1 6.90198C1 6.01798 1.156 5.17299 1.468 4.39299C1.78 3.59999 2.274 2.87199 2.96299 2.222C3.79499 1.403 4.70499 1 5.66698 1C6.03098 1 6.39498 1.078 6.71998 1.234C7.05798 1.39 7.35698 1.624 7.59098 1.962L10.607 6.21298C10.841 6.53798 11.01 6.83698 11.127 7.12298C11.244 7.39598 11.309 7.66898 11.309 7.91598C11.309 8.22798 11.218 8.53998 11.036 8.83897C10.867 9.13797 10.62 9.44997 10.308 9.76197L9.31997 10.789C9.17697 10.932 9.11197 11.101 9.11197 11.309C9.11197 11.413 9.12497 11.504 9.15097 11.608C9.18997 11.712 9.22897 11.79 9.25497 11.868C9.48897 12.297 9.89197 12.856 10.464 13.532C11.049 14.208 11.673 14.897 12.349 15.586C13.051 16.275 13.727 16.9119 14.416 17.4969C15.092 18.0689 15.651 18.4589 16.0929 18.6929C16.1579 18.7189 16.2359 18.7579 16.3269 18.7969C16.4309 18.8359 16.5349 18.8489 16.6519 18.8489C16.8729 18.8489 17.0419 18.7709 17.1849 18.6279L18.1729 17.6529C18.4979 17.3279 18.8099 17.0809 19.1089 16.9249C19.4079 16.743 19.7069 16.652 20.0319 16.652C20.2789 16.652 20.5389 16.704 20.8249 16.821C21.1109 16.9379 21.4099 17.1069 21.7349 17.3279L26.0379 20.3829C26.3759 20.6169 26.6099 20.8899 26.7529 21.2149C26.8829 21.5399 26.9609 21.8649 26.9609 22.2289Z" stroke="#03A291" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.4501 10.0998C22.4501 9.31979 21.8391 8.1238 20.9291 7.1488C20.0971 6.2518 18.9921 5.5498 17.9001 5.5498" stroke="#03A291" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.0001 10.1C27.0001 5.06899 22.9311 1 17.9001 1" stroke="#03A291" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="about__call-content"><h4>Call us at</h4><p><a href="tel:602-762-472-96">+(602) 762 472 96</a></p></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/LawyerAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LawyerAbout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const fact_bg = "" + __buildAssetsURL("fact-banner-bg.D59KCw6v.jpg");
const _sfc_main$4 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      fact_bg
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "fact__area fact__translate" }, _attrs))}><div class="container"><div class="row gx-2 gy-2 gy-lg-0"><div class="col-xxl-4 col-lg-4 col-md-6"><div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000"><div class="fact__icon"><p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65196 0.000139197C6.21895 0.0173827 6.76794 0.116382 7.29984 0.29728H7.35294C7.38894 0.31438 7.41594 0.333279 7.43394 0.350379C7.63283 0.414279 7.82093 0.486278 8.00093 0.585277L8.34293 0.738275C8.47793 0.810274 8.63993 0.944373 8.72992 0.999272C8.81992 1.05237 8.91892 1.10727 8.99992 1.16937C9.99981 0.405279 11.2139 -0.00871701 12.4649 0.000139197C13.0328 0.000139197 13.5998 0.0803821 14.1389 0.26128C17.4607 1.34127 18.6577 4.98623 17.6578 8.1722C17.0908 9.80028 16.1638 11.2862 14.9498 12.5003C13.2119 14.1832 11.3048 15.6772 9.25192 16.9642L9.02692 17.1001L8.79292 16.9552C6.73284 15.6772 4.81496 14.1832 3.06088 12.4913C1.8549 11.2772 0.927005 9.80028 0.351011 8.1722C-0.665978 4.98623 0.53101 1.34127 3.88887 0.24238C4.14987 0.152381 4.41897 0.089382 4.68897 0.0542823H4.79696C5.04986 0.0173827 5.30096 0.000139197 5.55296 0.000139197H5.65196ZM13.6709 2.84425C13.3019 2.71735 12.8969 2.91625 12.7619 3.29425C12.6359 3.67224 12.8339 4.08624 13.2119 4.22034C13.7888 4.43634 14.1749 5.00423 14.1749 5.63332V5.66122C14.1578 5.86732 14.2199 6.06622 14.3459 6.21922C14.4719 6.37222 14.6609 6.46131 14.8589 6.48021C15.2279 6.47031 15.5429 6.17422 15.5699 5.79532V5.68822C15.5969 4.42734 14.8328 3.28525 13.6709 2.84425Z" fill="#AB6C56"></path></svg><span>7628</span></p></div><div class="fact__content"><h4>Trusted Clients</h4><p>Number Of Clients</p></div></div></div><div class="col-xxl-4 col-lg-4 col-md-6"><div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000"><div class="fact__icon"><p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.781 5.634L18 6.543L13.5 10.926L14.562 17.118L9 14.193L3.438 17.118L4.5 10.926L0 6.543L6.219 5.634L9 0Z" fill="#AB6C56"></path></svg><span>95%</span></p></div><div class="fact__content"><h4>Successful Cases</h4><p>Largest Winning Value</p></div></div></div><div class="col-xxl-4 col-lg-4 col-md-6"><div class="fact__banner fact__banner-overlay p-relative z-index-1" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000"><div class="fact__banner-bg include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.fact_bg})` })}"></div><div class="fact__banner-content"><h5>17,642+</h5><p>Criminal Cases and <br> Defense</p></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/fun-facts/LawyerFunFact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LawyerFunFact = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const thumb_bg = "" + __buildAssetsURL("history-2.BcAv7nKS.jpg");
const _imports_0$1 = "" + __buildAssetsURL("history-1.B1xypNus.jpg");
const _sfc_main$3 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      thumb_bg,
      history_lists: [
        {
          delay: ".3s",
          year: "2007 - 2012",
          title: "Together We Build",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Family Law"
        },
        {
          delay: ".5s",
          year: "2012 - 2016",
          title: "Completed 1000 Cases",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Criminal Law"
        },
        {
          delay: ".7s",
          year: "2016 - 2018",
          title: "We Are Number One",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Business Law"
        },
        {
          delay: ".9",
          year: "2018 - 2022",
          title: "Intellectual Property",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Car Accident"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "history__area pt-30 pb-140" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="section__title-wrapper-4 mb-60"><span class="section__title-pre-4">Out History</span><h3 class="section__title-4">We are top lawyers and history</h3></div></div></div><div class="row"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="history__thumb-wrapper d-sm-flex pr-70"><div class="history__thumb"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="history__thumb-right-wrapper"><div class="history__thumb-right p-relative include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.thumb_bg})` })}"> 76+ </div><div class="history-thumb-text"><p>Winning Awards</p></div></div></div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="history__list pl-65 pr-90"><!--[-->`);
  ssrRenderList($data.history_lists, (item, i) => {
    _push(`<div class="history__list-item d-flex align-items-start"><div class="history__year" data-sal="slide-right" data-sal-delay="130" data-sal-duration="1000"><h5 class="history__year-title">${ssrInterpolate(item.year)}</h5></div><div class="history__list-content"><div class="history__list-dot"><span></span></div><div class="history__list-content-inner" data-sal="slide-left" data-sal-delay="130" data-sal-duration="1000"><h4 class="history__list-title">${ssrInterpolate(item.title)}</h4><p>${ssrInterpolate(item.text)}</p><div class="history__list-meta"><span>${ssrInterpolate(item.meta)}</span></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/history/LawyerHistory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LawyerHistory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const bg_law_1 = "" + __buildAssetsURL("services-1.qetZMPXN.jpg");
const bg_law_2 = "" + __buildAssetsURL("services-2.B1p12lNN.jpg");
const bg_law_6 = "" + __buildAssetsURL("services-6.Cy_ru2SW.jpg");
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      services_data: [
        {
          id: 1,
          delay: "130",
          bg: bg_law_1,
          icon: `<svg width="52" height="48" viewBox="0 0 52 48" fill="none">
                  <path
                    d="M26.8414 1.13636L47.2959 9.31813C48.0914 9.63631 48.7277 10.5908 48.7277 11.4317V18.9772C48.7277 20.2272 47.705 21.2499 46.455 21.2499H5.54592C4.29592 21.2499 3.27319 20.2272 3.27319 18.9772V11.4317C3.27319 10.5908 3.90957 9.63631 4.70502 9.31813L25.1596 1.13636C25.6141 0.954545 26.3868 0.954545 26.8414 1.13636Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M48.7277 46.2496H3.27319V39.4314C3.27319 38.1814 4.29592 37.1587 5.54592 37.1587H46.455C47.705 37.1587 48.7277 38.1814 48.7277 39.4314V46.2496Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.81836 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9087 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.0903 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1819 37.1591V21.25" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 46.25H51" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9999 15.5682C27.8827 15.5682 29.409 14.0419 29.409 12.1591C29.409 10.2763 27.8827 8.75 25.9999 8.75C24.1171 8.75 22.5908 10.2763 22.5908 12.1591C22.5908 14.0419 24.1171 15.5682 25.9999 15.5682Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>`,
          title: "This is war, and in war the only crime is to lose",
          subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was."
        },
        {
          id: 2,
          delay: "150",
          bg: bg_law_2,
          icon: `<svg width="51" height="52" viewBox="0 0 51 52" fill="none">
                  <path
                    d="M15.377 51H35.377C45.427 51 47.227 46.975 47.752 42.075L49.627 22.075C50.302 15.975 48.552 11 37.877 11H12.877C2.20201 11 0.452008 15.975 1.12701 22.075L3.00201 42.075C3.52701 46.975 5.32701 51 15.377 51Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M15.3774 11V9C15.3774 4.575 15.3774 1 23.3774 1H27.3774C35.3774 1 35.3774 4.575 35.3774 9V11"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M30.3774 28.5V31C30.3774 31.025 30.3774 31.025 30.3774 31.05C30.3774 33.775 30.3524 36 25.3774 36C20.4274 36 20.3774 33.8 20.3774 31.075V28.5C20.3774 26 20.3774 26 22.8774 26H27.8774C30.3774 26 30.3774 26 30.3774 28.5Z"
                    stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M49.5024 23.5C43.7274 27.7 37.1274 30.2 30.3774 31.05" stroke="currentColor" stroke-width="2"
                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.92651 24.1748C7.55151 28.0248 13.9015 30.3498 20.3765 31.0748" stroke="currentColor"
                    stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
          title: "Is your business ready for Integration",
          subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was."
        },
        {
          id: 3,
          delay: "170",
          bg: bg_law_3,
          icon: `<svg width="62" height="60" viewBox="0 0 62 60" fill="none">
                  <path
                    d="M39.4183 35.377L39.0769 35.7183C38.5728 36.2223 38.2956 36.8942 38.2956 37.6102C38.2956 38.326 38.5728 38.998 39.0769 39.5019L41.7142 42.1392C42.2357 42.6607 42.9209 42.9218 43.6061 42.9218C44.2913 42.9218 44.9765 42.661 45.498 42.1394L58.2788 29.3582C59.3213 28.3151 59.3213 26.618 58.2788 25.5752L55.641 22.9376C55.1375 22.4337 54.4654 22.1561 53.7491 22.1561C53.0328 22.1561 52.3614 22.4335 51.8577 22.9374L51.5164 23.2788C43.6395 17.6715 42.3886 16.4208 36.7808 8.54395L37.1222 8.20258C37.6264 7.69868 37.9035 7.02672 37.9035 6.31071C37.9035 5.59469 37.6264 4.92262 37.1222 4.41883L34.4849 1.78152C33.9808 1.27762 33.3093 1 32.593 1C31.8768 1 31.2053 1.27762 30.7012 1.78152L17.9208 14.562C17.4166 15.0659 17.1395 15.7379 17.1395 16.4539C17.1395 17.1699 17.4166 17.842 17.9208 18.3458L20.5581 20.9835C21.0796 21.5048 21.7648 21.7655 22.45 21.7655C23.1352 21.7655 23.8204 21.5048 24.3419 20.9832L24.6832 20.6418C26.8174 22.1613 28.4691 23.3631 29.8481 24.4606L2.01808 50.9872C1.40155 51.575 1.05152 52.322 1.00511 53.1478C0.957648 54.0011 1.24159 54.761 1.82601 55.3453L4.71503 58.2338C5.25714 58.7768 5.95078 59.0602 6.73101 59.0602C6.79125 59.0602 6.85136 59.0586 6.91265 59.0552C7.73824 59.0088 8.48519 58.6585 9.07324 58.0416L35.5991 30.2118C36.6966 31.5909 37.8987 33.2425 39.4183 35.377ZM53.7491 23.7779C54.032 23.7779 54.2965 23.8866 54.4945 24.0843L57.1322 26.7219C57.5429 27.1326 57.5429 27.801 57.1322 28.212L44.3514 40.9926C43.9412 41.4034 43.2719 41.4038 42.8607 40.9926L40.2233 38.3553C39.8126 37.9443 39.8126 37.2758 40.2233 36.8649L53.0043 24.0841C53.2016 23.8866 53.4661 23.7779 53.7491 23.7779ZM21.7045 19.8369L19.0672 17.1993C18.8698 17.0016 18.7606 16.7369 18.7606 16.454C18.7606 16.1711 18.8698 15.9066 19.0672 15.7089L31.8476 2.9282C32.0529 2.72289 32.3233 2.61988 32.5929 2.61988C32.8626 2.61988 33.1329 2.72277 33.3382 2.9282L35.9755 5.56551C36.173 5.76321 36.2822 6.02793 36.2822 6.31082C36.2822 6.59372 36.173 6.85821 35.9755 7.0559L24.042 18.9898C24.0413 18.9904 24.0407 18.9912 24.04 18.9918L23.1953 19.8365C22.7845 20.2477 22.1153 20.2475 21.7045 19.8369ZM35.6181 9.7068C41.1367 17.4459 42.6142 18.9233 50.3535 24.4417L40.5809 34.2144C35.0618 26.4751 33.5843 24.9976 25.8458 19.4793L35.6181 9.7068ZM7.89914 56.9229C7.59246 57.2449 7.23984 57.4127 6.8223 57.4363C6.42586 57.4574 6.12129 57.3471 5.8616 57.0876L2.97257 54.1988C2.71288 53.9391 2.60249 53.634 2.62476 53.2381C2.64796 52.82 2.81531 52.4677 3.13734 52.1613L31.1076 25.5009C32.3895 26.6013 33.4587 27.6705 34.5592 28.9525L7.89914 56.9229ZM60.9672 58.021L59.543 53.1693C59.203 52.0109 58.1631 51.2323 56.9554 51.2323H36.5922C35.3844 51.2323 34.3445 52.0109 34.0046 53.1693L32.5804 58.021C32.5085 58.2659 32.5561 58.5307 32.7092 58.7353C32.8622 58.9399 33.1029 59.0602 33.3585 59.0602H60.1892C60.4447 59.0602 60.6854 58.9399 60.8385 58.7353C60.9915 58.5307 61.039 58.2659 60.9672 58.021ZM34.4415 57.4385L35.5607 53.6257C35.6979 53.1569 36.1028 52.8539 36.5922 52.8539H56.9554C57.4448 52.8539 57.8497 53.1569 57.9869 53.6259L59.106 57.4385H34.4415Z"
                    fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                </svg>`,
          title: "Do injured workers have to be treated",
          subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was."
        },
        {
          id: 4,
          delay: "190",
          bg: bg_law_4,
          icon: ` <svg width="66" height="47" viewBox="0 0 66 47" fill="none">
                  <path
                    d="M65.807 21.4782L58.576 2.00975C58.2901 1.23979 57.7196 0.626714 56.9697 0.28292C56.2195 -0.0602287 55.3831 -0.092455 54.6132 0.192944L49.7733 1.99029C48.18 2.58222 47.365 4.36023 47.9567 5.95351L48.0352 6.16492C46.8902 6.59959 45.6122 6.12483 43.6587 5.30666C40.742 4.08553 36.786 2.44584 31.7639 5.5869C27.6879 3.0499 24.4896 3.67574 21.6571 4.2397C20.2184 4.52562 18.848 4.79477 17.4327 4.64834C17.3929 4.27644 17.2909 3.90996 17.115 3.56617C16.7387 2.83166 16.1011 2.28819 15.3199 2.03618L10.4067 0.451272C9.62511 0.19926 8.79019 0.267838 8.05594 0.643213C7.32168 1.01949 6.77822 1.65706 6.52646 2.43824L0.149075 22.2032C-0.37261 23.8208 0.518907 25.5613 2.13668 26.083L7.04982 27.6684C7.35984 27.7686 7.67811 27.8182 7.99509 27.8182C8.47759 27.8182 8.95725 27.7033 9.4003 27.4765C9.67397 27.3363 9.91051 27.1495 10.1259 26.9427C10.1562 27.0922 10.1968 27.2401 10.2334 27.3886L9.0034 29.6881C8.47591 30.6749 8.37369 31.8714 8.72354 32.9705C9.06411 34.0407 9.78238 34.8953 10.7244 35.366C11.5454 35.8053 12.4498 35.9426 13.3086 35.816C13.0633 36.6295 13.0679 37.5217 13.3339 38.3577C13.6745 39.4279 14.3927 40.2828 15.3348 40.7535C16.3201 41.2804 17.4544 41.3904 18.5292 41.0653C18.9586 40.935 19.3575 40.7416 19.7151 40.4931C20.0601 41.5466 20.7728 42.3875 21.7042 42.8528C22.6893 43.3798 23.8235 43.4898 24.8983 43.1647C25.1369 43.0921 25.3664 43.0003 25.5841 42.8904C25.9073 44.1878 26.8299 45.3433 27.9798 45.9585C28.5291 46.252 29.176 46.4412 29.8474 46.4412C31.0677 46.4412 32.3688 45.8159 33.3101 44.0564L33.4937 43.713C33.5652 43.7504 33.6364 43.7879 33.7017 43.8221L34.1926 44.0781C34.7938 44.3876 35.3815 44.524 35.934 44.524C37.3124 44.524 38.4702 43.6745 39.0622 42.5463C39.4698 41.77 39.6133 40.8471 39.4155 39.9512C39.9128 39.9769 40.4157 39.9178 40.9072 39.7689C42.011 39.4344 42.9169 38.6933 43.4578 37.682C43.8948 36.865 44.0529 35.948 43.9212 35.0436C44.8444 35.4268 45.8655 35.4767 46.8392 35.1818C47.9526 34.8444 48.8663 34.0965 49.4118 33.0766C49.8577 32.2424 50.016 31.305 49.8743 30.3824C51.3791 30.9822 52.8309 30.7079 53.839 29.6035C54.861 28.4842 55.2046 26.7693 54.8224 25.2391C54.9014 25.2107 54.9815 25.182 55.0704 25.15L55.0846 25.145L55.1877 25.4224C55.6488 26.663 56.829 27.4314 58.0808 27.4314C58.4367 27.4314 58.7981 27.3695 59.1506 27.2387L63.9902 25.4413C65.5838 24.8494 66.3987 23.0718 65.807 21.4782ZM9.23259 25.1336C9.12663 25.4617 8.89757 25.7299 8.58716 25.8888C8.27624 26.0476 7.92497 26.0768 7.59742 25.9713L2.68402 24.3855C2.00236 24.1657 1.6266 23.4323 1.84639 22.7507L8.22403 2.98583C8.32973 2.65802 8.5588 2.38977 8.86908 2.23095C9.05664 2.13492 9.25954 2.08606 9.46308 2.08606C9.59611 2.08606 9.72901 2.10669 9.85856 2.14845C9.85882 2.14845 9.85882 2.14845 9.85882 2.14871L14.7722 3.73387C15.1 3.83958 15.3683 4.06864 15.5271 4.37892C15.6859 4.68933 15.7152 5.0406 15.6096 5.36867L10.5182 21.1491C10.4959 21.1922 10.4743 21.2363 10.459 21.284C10.4143 21.4219 10.3797 21.5615 10.3404 21.7003L9.23259 25.1336ZM11.5439 33.7818C11.0143 33.5173 10.6163 33.0371 10.4233 32.4297C10.2186 31.7866 10.2744 31.094 10.5763 30.5295L11.9659 27.9314C11.9662 27.9312 11.9666 27.9309 11.9667 27.9305L12.6304 26.6894C13.2488 25.5339 14.6816 25.0873 15.8443 25.6741C16.6071 26.2074 17.7511 27.3414 16.8831 28.9641L16.4101 29.8484L14.8273 32.8077C14.1992 33.9771 12.7372 34.4207 11.5439 33.7818ZM19.4395 38.1916C19.1376 38.7566 18.6304 39.1709 18.0114 39.3585C17.3928 39.546 16.7406 39.4827 16.1542 39.1695C15.6247 38.905 15.2266 38.4245 15.0336 37.8171C14.8289 37.1744 14.885 36.4816 15.1869 35.9173L16.4002 33.6493L17.983 30.69C18.2849 30.1253 18.7922 29.7111 19.4108 29.5235C20.0298 29.3355 20.6813 29.399 21.2465 29.7012C21.8113 30.0031 22.2255 30.5103 22.413 31.1293C22.6006 31.7479 22.5373 32.4001 22.235 32.9651L21.7905 33.7965C21.7903 33.7974 21.7896 33.7982 21.7891 33.7991L19.9833 37.1753C19.9833 37.1755 19.9833 37.1755 19.983 37.1758L19.4395 38.1916ZM24.3808 41.4577C23.7618 41.6453 23.1103 41.582 22.5236 41.2687C21.9941 41.0042 21.5963 40.524 21.403 39.9167C21.199 39.2745 21.2541 38.5833 21.5549 38.0192L21.5563 38.0167L23.3622 34.6405C23.3623 34.6401 23.3624 34.6397 23.3625 34.6393L23.3636 34.6376C23.6659 34.0741 24.1725 33.661 24.7902 33.4737C25.4085 33.2853 26.0607 33.349 26.6255 33.6514C27.7978 34.2785 28.2415 35.7426 27.6146 36.9149L26.7118 38.6032L25.9114 40.0995C25.9111 40.1 25.9108 40.1007 25.9105 40.1012L25.8089 40.2911C25.507 40.8556 24.9995 41.2701 24.3808 41.4577ZM28.8211 44.3855C27.6519 43.7602 26.8153 42.1916 27.4845 40.9405L28.2848 39.4442L28.2857 39.4421C28.5978 38.8604 29.1526 38.3929 29.8085 38.16C30.4632 37.9272 31.1205 37.9583 31.6599 38.2468C32.8351 38.8751 33.0247 39.4248 33.0647 39.7837C33.1257 40.3263 32.8959 41.0478 32.3209 42.1228C32.3205 42.1238 32.3202 42.1247 32.3199 42.1254L31.7371 43.2151C30.7499 45.0623 29.4868 44.7412 28.8211 44.3855ZM37.4828 41.7178C37.0622 42.5205 36.1343 43.0716 35.009 42.4927L34.5311 42.2432C34.4521 42.2015 34.3784 42.1628 34.3099 42.1271C34.6711 41.3238 34.9343 40.4508 34.8374 39.5853C34.7281 38.6094 34.1866 37.7955 33.204 37.109L36.7166 38.9953C37.8904 39.8195 37.8864 40.9489 37.4828 41.7178ZM52.5216 28.401C51.9473 29.0307 51.159 29.0841 50.178 28.5589L47.6342 27.1985C47.6324 27.1975 47.6307 27.1966 47.6289 27.1959C47.6029 27.182 47.5757 27.174 47.549 27.1629L39.3463 22.7103C38.9143 22.4748 38.3723 22.6357 38.1371 23.0688C37.9023 23.5017 38.0625 24.0428 38.4956 24.2779L46.8718 28.8247C47.4263 29.1498 47.838 29.6612 48.0275 30.2856C48.2267 30.9429 48.1596 31.6353 47.8385 32.2355C47.5177 32.8355 46.9788 33.2757 46.3215 33.4749C45.6631 33.6738 44.9713 33.607 44.3717 33.2862L41.8426 31.9334C41.7986 31.8976 41.7512 31.8649 41.6993 31.8371L35.5956 28.5736C35.1607 28.3408 34.6207 28.5057 34.3888 28.9397C34.1565 29.374 34.3202 29.9144 34.7549 30.1465L40.7052 33.3281C40.7493 33.3642 40.7971 33.397 40.8493 33.4249C41.4408 33.7411 41.8745 34.2718 42.0707 34.9198C42.2669 35.5676 42.2008 36.2497 41.8846 36.8409C41.5684 37.4323 41.0374 37.8657 40.3897 38.0623C39.7423 38.2582 39.0597 38.1924 38.4686 37.8762L37.1774 37.1857C37.1125 37.1511 37.0449 37.128 36.9767 37.1106L31.7656 34.3124C31.3315 34.0778 30.7906 34.2419 30.5581 34.6762C30.3249 35.11 30.4878 35.6508 30.9219 35.8837L32.0171 36.4717C31.2735 36.1977 30.4591 36.1458 29.6441 36.3487C29.8744 34.6602 29.0548 32.9276 27.4667 32.0781C26.4908 31.5561 25.3679 31.4426 24.3021 31.7576C24.2945 31.3744 24.2342 30.9895 24.1199 30.6118C23.7941 29.5367 23.0721 28.6547 22.0873 28.128C21.0973 27.599 19.9883 27.5078 18.9846 27.7877C18.9675 26.2725 18.0057 25.0125 16.8604 24.2083C16.8212 24.1782 16.7794 24.1511 16.7349 24.1274C15.025 23.2132 12.9584 23.6083 11.6917 24.9612C11.6712 24.0337 11.7981 23.1023 12.0558 22.1908L17.1462 6.41358C18.8669 6.61274 20.4591 6.29705 22.0045 5.98896C24.5739 5.47798 27.0141 4.99226 30.1673 6.71097C29.4803 7.25792 28.7894 7.88208 28.1024 8.57599C27.5587 9.1259 26.9995 9.67491 26.454 10.2105C24.4652 12.1638 22.7477 13.8508 22.2565 15.0481C22.1378 15.3375 22.1793 15.6679 22.366 15.9188C25.9158 20.6928 30.2178 19.0728 33.6731 17.7717C36.2636 16.7958 38.5009 15.9528 40.2832 17.3631C40.3168 17.3898 40.3523 17.4139 40.3894 17.4355C41.2406 17.9287 42.413 18.5076 43.7705 19.178C47.0526 20.7992 51.5477 23.0193 52.7092 24.7848C53.4898 25.9704 53.2421 27.6116 52.5216 28.401ZM54.0608 23.6178C52.5038 21.5062 48.1146 19.3341 44.5608 17.5792C43.2608 16.937 42.134 16.3808 41.3367 15.9229C38.7767 13.9443 35.8632 15.0412 33.0448 16.1026C29.7043 17.3599 26.7997 18.4533 24.1464 15.2967C24.7697 14.3653 26.2579 12.9038 27.704 11.4836C28.2556 10.9418 28.8206 10.3867 29.3705 9.83102C30.3234 8.8686 31.2769 8.05907 32.2066 7.41931C36.6995 4.32968 40.0301 5.72174 42.9696 6.95189C44.344 7.52733 45.7469 8.11463 47.1346 8.11463C47.6443 8.11463 48.1512 8.02156 48.6548 7.83348L54.4634 23.4729C54.3281 23.5217 54.191 23.571 54.0608 23.6178ZM63.3695 23.7692L58.5299 25.5665C57.8563 25.815 57.1087 25.4724 56.8596 24.8012L49.6289 5.33206C49.509 5.00927 49.5229 4.6571 49.6681 4.33999C49.8135 4.02301 50.0713 3.78234 50.3942 3.66233L55.2339 1.86499C55.3793 1.81098 55.5306 1.78404 55.6818 1.78404C55.8671 1.78404 56.052 1.82438 56.2265 1.90418C56.5432 2.04933 56.7838 2.3074 56.9037 2.63056L64.1347 22.0992C64.3842 22.7708 64.0408 23.5197 63.3695 23.7692Z"
                    fill="currentColor" />
                </svg>`,
          title: "Nobis occaecati nobis Repudiamus andaeum.",
          subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was."
        },
        {
          id: 5,
          delay: "210",
          bg: bg_law_5,
          icon: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path
                    d="M26 0C24.5746 0 23.4034 1.17283 23.4034 2.59824V6.09205C22.4726 6.79758 21.8229 7.85743 21.6937 9.07625C19.6398 9.47747 18.0007 10.1084 16.3956 10.6844C14.7951 11.2587 13.1787 11.7613 11.0618 11.9928C10.6655 11.0617 9.73931 10.4034 8.67005 10.4034C7.65645 10.4034 6.77659 11.001 6.34766 11.8557C4.38011 11.4004 3.08073 10.5455 3.08073 10.5455C2.93675 10.4466 2.76623 10.3936 2.59154 10.3933C1.72695 10.3917 1.39331 11.5182 2.11927 11.9878C2.11927 11.9878 3.74243 13.0591 6.13776 13.5806C6.26704 14.134 6.57852 14.615 7.00104 14.972L0.0558612 33.4953C0.019096 33.5926 0.000176198 33.6958 2.59189e-06 33.7999C2.59189e-06 33.7999 -0.00929998 35.743 1.08672 37.6915C2.18276 39.64 4.50988 41.5999 8.66667 41.5999C12.8235 41.5999 15.1506 39.64 16.2466 37.6915C17.3426 35.743 17.3333 33.7999 17.3333 33.7999C17.3332 33.6958 17.3142 33.5926 17.2775 33.4953L10.3323 14.9737C10.7168 14.6487 11.0036 14.2194 11.1499 13.7261C13.5014 13.4785 15.3221 12.9116 16.9812 12.3162C18.5796 11.7426 20.0664 11.1758 21.8833 10.8062C22.4329 12.568 24.0629 13.8633 26 13.8633C27.9372 13.8633 29.5689 12.5681 30.1184 10.8062C31.9347 11.176 33.4204 11.7426 35.0187 12.3162C36.6781 12.9116 38.4997 13.4788 40.8518 13.7261C40.998 14.2192 41.2835 14.6488 41.6677 14.9737L34.7225 33.4953C34.6858 33.5926 34.6668 33.6958 34.6667 33.7999C34.6667 33.7999 34.6575 35.743 35.7534 37.6915C36.8494 39.64 39.1765 41.5999 43.3333 41.5999C47.4901 41.5999 49.8172 39.64 50.9133 37.6915C52.0093 35.743 52 33.7999 52 33.7999C51.9998 33.6958 51.981 33.5926 51.9441 33.4953L44.999 14.9737C45.4224 14.6165 45.7345 14.1348 45.8639 13.5806C48.2584 13.0589 49.8807 11.9878 49.8807 11.9878C50.6189 11.5113 50.2613 10.3653 49.3831 10.3933C49.2171 10.3998 49.0561 10.4515 48.9193 10.5455C48.9193 10.5455 47.6207 11.4003 45.654 11.8557C45.2252 11.0007 44.3455 10.4034 43.3316 10.4034C42.2624 10.4034 41.3362 11.0617 40.9398 11.9928C38.8223 11.7615 37.205 11.2587 35.6044 10.6844C33.9998 10.1086 32.3609 9.47764 30.308 9.07625C30.1789 7.85743 29.5291 6.79758 28.5983 6.09205V2.59824C28.5983 1.17283 27.4254 0 26 0H26ZM26 1.73496C26.4951 1.73496 26.8633 2.10313 26.8633 2.59824V5.28805C26.584 5.23105 26.2955 5.20148 26 5.20148C25.7021 5.20148 25.4113 5.23101 25.1299 5.28965V2.59824C25.1299 2.1031 25.5049 1.73496 26 1.73496ZM26 6.93504C27.4462 6.93504 28.5983 8.08707 28.5983 9.53328C28.5983 10.9795 27.4462 12.1299 26 12.1299C24.5538 12.1299 23.4034 10.9795 23.4034 9.53328C23.4034 8.08707 24.5538 6.93504 26 6.93504ZM8.67005 12.1299C9.15896 12.1299 9.53333 12.5111 9.53333 13C9.53333 13.4889 9.15896 13.8633 8.67005 13.8633C8.18114 13.8633 7.79831 13.4889 7.79831 13C7.79831 12.5111 8.18114 12.1299 8.67005 12.1299ZM43.3316 12.1299C43.8205 12.1299 44.2017 12.5111 44.2017 13C44.2017 13.4889 43.8205 13.8633 43.3316 13.8633C42.8427 13.8633 42.4684 13.4889 42.4684 13C42.4684 12.5111 42.8427 12.1299 43.3316 12.1299ZM24.2531 15.5847C23.7745 15.5946 23.394 15.9897 23.4034 16.4683V43.3316H17.3316C15.9062 43.3316 14.735 44.5096 14.735 45.935V46.7983C13.3096 46.7983 12.1299 47.9779 12.1299 49.4034V51.1299C12.1281 51.6112 12.5187 52.0018 13 52H39C39.4786 51.9981 39.8651 51.6085 39.8633 51.1299V49.4034C39.8633 47.9779 38.6921 46.7983 37.2667 46.7983V45.935C37.2667 44.5096 36.0955 43.3316 34.67 43.3316H28.5983V16.4683C28.6078 15.9791 28.2108 15.5789 27.7215 15.5847C27.2395 15.588 26.8539 15.9864 26.8633 16.4683V43.3316H25.1299V16.4683C25.1395 15.9791 24.7424 15.5789 24.2531 15.5847ZM8.62096 15.5945C8.63767 15.5949 8.65326 15.6011 8.67005 15.6011C8.68515 15.6011 8.69901 15.5978 8.71406 15.5945L15.2174 32.9363H2.11589L8.62096 15.5945ZM43.2876 15.5945C43.3027 15.5948 43.3164 15.6011 43.3316 15.6011C43.3477 15.6011 43.3627 15.5978 43.379 15.5945L49.8841 32.9363H36.7825L43.2876 15.5945ZM1.8349 34.6714H15.4984C15.4056 35.2269 15.2099 36.0019 14.7367 36.8431C13.8828 38.3613 12.3099 39.868 8.66667 39.868C5.02346 39.868 3.45058 38.3613 2.59662 36.8431C2.12347 36.0019 1.92776 35.2269 1.8349 34.6714ZM36.5016 34.6714H50.1651C50.0722 35.2269 49.8765 36.0019 49.4034 36.8431C48.5494 38.3613 46.9765 39.868 43.3333 39.868C39.6901 39.868 38.1172 38.3613 37.2633 36.8431C36.7901 36.0019 36.5944 35.2269 36.5016 34.6714ZM17.3316 45.0663C23.1696 45.1033 28.8122 45.0663 34.67 45.0663C35.1652 45.0663 35.5333 45.4412 35.5333 45.9363V46.7996H31.2017C30.045 46.7996 30.045 48.5347 31.2017 48.5347H37.2667C37.7618 48.5347 38.1299 48.9095 38.1299 49.4046V50.2679H13.8633V49.4046C13.8633 48.9095 14.2399 48.5347 14.735 48.5347H27.735C28.8917 48.5347 28.8917 46.7996 27.735 46.7996H16.4684V45.9363C16.4684 45.4412 16.8365 45.0663 17.3316 45.0663Z"
                    fill="currentColor" />
                </svg>`,
          title: "How Is equity determined in a divorce",
          subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was."
        },
        {
          id: 6,
          delay: "230",
          bg: bg_law_6,
          icon: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path
                    d="M14.6268 25.1875H13.0016C12.5528 25.1875 12.189 25.5513 12.189 26.0001C12.189 26.4489 12.5528 26.8127 13.0016 26.8127V28.4379C13.0016 28.8866 13.3654 29.2505 13.8142 29.2505C14.2629 29.2505 14.6268 28.8866 14.6268 28.4379V26.8127C15.0755 26.8127 15.4394 26.4489 15.4394 26.0001C15.4394 25.5513 15.0756 25.1875 14.6268 25.1875Z"
                    fill="currentColor" />
                  <path
                    d="M47.9604 22.7329C42.5742 17.3475 33.8104 17.3475 28.4242 22.7329C25.5371 25.6197 24.0916 29.5707 24.4244 33.6267L22.6511 35.3998C21.584 36.4668 20.9963 37.8853 20.9963 39.3942C20.9963 40.9031 21.5839 42.3216 22.6511 43.3886L23.2529 43.9904L22.6783 44.5649C21.9995 45.2437 21.8083 46.2259 22.0992 47.0786L19.2175 48.4205C18.8073 47.6506 17.9964 47.125 17.0647 47.125H15.4395C14.9069 47.125 14.4141 47.2971 14.0125 47.588L13.2373 45.2627C14.0582 44.8701 14.6268 44.0315 14.6268 43.0625V41.4375C14.6268 40.4685 14.0582 39.6299 13.2373 39.2372L14.4257 35.6722C15.4749 35.4002 16.252 34.4453 16.252 33.3125V32.5H17.1032C20.2183 32.5 22.7527 29.9659 22.7527 26.851V24.3437C25.8564 21.7108 27.6283 17.8949 27.6283 13.8125C27.6283 6.19634 21.4314 0 13.8142 0C6.19697 0 0 6.19634 0 13.8125C0 17.8949 1.77197 21.7109 4.87559 24.3437V26.851C4.87559 29.9659 7.40998 32.5 10.5252 32.5H11.3764V33.3125C11.3764 34.2815 11.9449 35.1201 12.7658 35.5127L11.5774 39.0778C10.5282 39.3498 9.75117 40.3046 9.75117 41.4375V43.0625C9.75117 44.1954 10.5282 45.1502 11.5774 45.4222L13.0063 49.7086C13.0824 50.9849 14.1444 52 15.4395 52H17.0647C18.2208 52 19.1907 51.191 19.4398 50.1095L23.1507 48.3814C23.525 48.606 23.9544 48.726 24.4021 48.726C25.0533 48.726 25.6655 48.4724 26.1258 48.0121L26.7004 47.4376L27.3023 48.0394C28.3694 49.1063 29.7881 49.6938 31.2971 49.6938C32.8062 49.6938 34.2249 49.1063 35.292 48.0394L37.0653 46.2663C37.4484 46.2978 37.83 46.3133 38.2105 46.3133C41.858 46.3131 45.3459 44.881 47.9603 42.2668C53.3465 36.8814 53.3465 28.1183 47.9604 22.7329ZM29.5735 23.882C34.0739 19.3819 41.2466 19.1442 46.0304 23.1669C45.1262 23.7863 44.3427 24.5778 43.7349 25.49C40.2294 22.7151 35.1087 22.9438 31.8718 26.1799C30.3749 27.6766 29.476 29.6111 29.291 31.6943C28.8722 31.3974 28.3735 31.2367 27.8498 31.2367C27.1822 31.2367 26.5546 31.4967 26.0826 31.9686L26.0106 32.0405C26.1213 28.9838 27.3727 26.0825 29.5735 23.882ZM43.3637 27.3291C46.2151 30.1802 46.2151 34.8195 43.3637 37.6705C41.9824 39.0518 40.1458 39.8124 38.1924 39.8124C36.2389 39.8124 34.4023 39.0518 33.021 37.6705C31.6396 36.2894 30.8789 34.453 30.8789 32.4998C30.8789 30.5466 31.6396 28.7101 33.021 27.3291C35.8724 24.478 40.5123 24.4778 43.3637 27.3291ZM26.0032 13.8124C26.0032 16.9244 24.8364 19.8607 22.7528 22.1003V21.9988C22.7528 20.7642 21.8525 19.7365 20.6739 19.536C21.971 17.9844 22.7528 15.9881 22.7528 13.8125C22.7528 9.2356 19.2939 5.45178 14.8527 4.93564C15.0678 3.86131 15.0734 2.74819 14.8721 1.67142C21.0996 2.20919 26.0032 7.44861 26.0032 13.8124ZM13.8143 6.49991C17.8469 6.49991 21.1276 9.78028 21.1276 13.8124C21.1276 17.8446 17.8469 21.1249 13.8143 21.1249C9.78165 21.1249 6.50088 17.8446 6.50088 13.8124C6.50088 9.78028 9.78165 6.49991 13.8143 6.49991ZM6.50088 26.851V23.9606C6.50088 23.714 6.38885 23.4807 6.19646 23.3266C3.29143 20.9986 1.6253 17.5309 1.6253 13.8124C1.6253 7.29637 6.7662 1.95833 13.2055 1.64014C13.4602 2.70695 13.4578 3.83105 13.1973 4.89654C8.55534 5.21464 4.87569 9.09169 4.87569 13.8124C4.87569 18.7406 8.88555 22.7499 13.8143 22.7499C15.7232 22.7499 17.494 22.1482 18.9476 21.1249H20.2537C20.7356 21.1249 21.1276 21.5169 21.1276 21.9988V26.851C21.1276 29.0699 19.3224 30.875 17.1033 30.875H10.5253C8.30627 30.875 6.50088 29.0699 6.50088 26.851ZM14.6269 32.5V33.3125C14.6269 33.7605 14.2623 34.125 13.8143 34.125C13.3662 34.125 13.0017 33.7605 13.0017 33.3125V32.5H14.6269ZM11.3765 41.4375C11.3765 40.9895 11.741 40.625 12.1891 40.625C12.6371 40.625 13.0017 40.9895 13.0017 41.4375V43.0625C13.0017 43.5105 12.6371 43.875 12.1891 43.875C11.741 43.875 11.3765 43.5105 11.3765 43.0625V41.4375ZM17.0647 50.375H15.4395C14.9914 50.375 14.6269 50.0105 14.6269 49.5625C14.6269 49.1145 14.9914 48.75 15.4395 48.75H17.0647C17.5127 48.75 17.8773 49.1145 17.8773 49.5625C17.8773 50.0105 17.5127 50.375 17.0647 50.375ZM24.9767 46.863C24.6598 47.1798 24.1443 47.1797 23.8276 46.8631C23.5108 46.5462 23.5108 46.0308 23.8276 45.714L24.4022 45.1395L25.5514 46.2885L24.9767 46.863ZM46.8112 41.1178C44.1817 43.7471 40.551 45.0219 36.8507 44.6133C36.6061 44.586 36.3615 44.6721 36.1871 44.8464L34.1428 46.8903C32.5739 48.4592 30.0207 48.4594 28.4516 46.8903L23.8003 42.2395C22.2312 40.6707 22.2312 38.1178 23.8003 36.549L27.2319 33.1179C27.3969 32.9527 27.6163 32.8618 27.8499 32.8618C28.0833 32.8618 28.3027 32.9527 28.4677 33.1178L29.3875 34.0375C29.6984 35.8398 30.5521 37.5001 31.8718 38.8197C33.5601 40.5078 35.8049 41.4374 38.1925 41.4374C40.58 41.4374 42.8247 40.5078 44.5131 38.8197C47.8511 35.4818 47.9896 30.1403 44.9329 26.6334C45.5022 25.6951 46.2959 24.8979 47.2309 24.3232C51.5591 29.101 51.4194 36.5101 46.8112 41.1178Z"
                    fill="currentColor" />
                  <path
                    d="M29.5737 39.9684C29.2563 39.6512 28.7419 39.6512 28.4245 39.9684C28.1071 40.2858 28.1071 40.8002 28.4245 41.1176L27.2753 42.2667C26.958 42.5841 26.958 43.0985 27.2753 43.4159C27.4341 43.5746 27.6419 43.6539 27.8499 43.6539C28.058 43.6539 28.2659 43.5746 28.4246 43.4159L29.5737 42.2668C29.7324 42.4255 29.9403 42.5048 30.1483 42.5048C30.3563 42.5048 30.5642 42.4255 30.7229 42.2668C31.0402 41.9494 31.0402 41.435 30.7229 41.1176L29.5737 39.9684Z"
                    fill="currentColor" />
                </svg>`,
          title: "Amet massa vel dolor deleni recusand",
          subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was."
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "servivces__area pt-110" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6"><div class="section__title-wrapper-4 mb-60"><span class="section__title-pre-4">Practice Areas</span><h3 class="section__title-4">The area where we practice our law</h3></div></div><div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-md-6"><div class="services__more-4 mb-65"><p>The city and town name generator uses a database of over five million names across modi tempora incidunt. </p></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.services_data, (item) => {
    _push(`<div class="col-xxl-4 col-lg-4 col-md-6"><div class="services__item-4 mb-30 transition-3 fix" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="services__thumb-4 include-bg transition-3" style="${ssrRenderStyle({ backgroundImage: `url(${item.bg})` })}"></div><div class="services__icon-4 mb-30 transition-3"><span>${item.icon ?? ""}</span></div><div class="services__content-4 transition-3"><h4 class="services__title-4">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
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
    _push(`</h4><p>${ssrInterpolate(item.subtitle)}</p></div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/service-details",
      class: "services-link-btn"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Learn More <i class="fa-regular fa-arrow-right"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode("Learn More "),
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/LawyerServices.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LawyerServices = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __buildAssetsURL("counter-shape-1.BhXcy7Ig.png");
const _sfc_main$1 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      counter_data: [
        { number: 726, text: "+", title: "Successfully" },
        { number: 426, text: "K", title: "Happy Clients" },
        { number: 176, text: "+", title: "Indictment" },
        { number: 1074, text: "+", title: "Lawsuits" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter__area counter__border-2" }, _attrs))}><div class="container"><div class="counter__inner-4" data-bg-color="green-dark-2"><div class="conter__shape"><img class="counter__shape-10"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="row"><!--[-->`);
  ssrRenderList($data.counter_data, (item, i) => {
    _push(`<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="counter__item-4-wrapper d-flex justify-content-center" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="counter__item-4"><h4 class="counter__title-4"><span class="counter">${ssrInterpolate(item.number)}</span>${ssrInterpolate(item.text)}</h4><div class="counter__content-4"><p>${ssrInterpolate(item.title)}</p></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counters/LawyerCounter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LawyerCounter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-lawyer",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Lawyer - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(LawyerBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerAwards, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerCases, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerFunFact, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerHistory, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(lawyerVideo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerServices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerBlogs, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerTeams, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerCounter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LawyerContact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(LawyerBanner),
              createVNode(LawyerAwards),
              createVNode(LawyerCases),
              createVNode(LawyerAbout),
              createVNode(LawyerFunFact),
              createVNode(LawyerHistory),
              createVNode(lawyerVideo),
              createVNode(LawyerServices),
              createVNode(LawyerBlogs),
              createVNode(LawyerTestimonial),
              createVNode(LawyerTeams),
              createVNode(LawyerCounter),
              createVNode(LawyerContact)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-lawyer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-lawyer-CjvmJsoe.js.map
