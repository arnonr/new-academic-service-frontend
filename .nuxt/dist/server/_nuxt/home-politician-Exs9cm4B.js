import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, resolveComponent, toDisplayString, ref, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import layout from "./LayoutEleven-C8c05Ulg.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { p as polity_ser_icon_1, a as polity_ser_icon_2, b as polity_ser_icon_3 } from "./features-3-D3-6gktW.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { P as PoliticianVision } from "./PoliticianVision-auPG9Y1w.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, FreeMode, Thumbs } from "swiper";
import { P as PolityTeams } from "./PolityTeams-DeA80MHc.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { P as PoliticianTestimonial } from "./PoliticianTestimonial-Dq8fooH1.js";
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
import "./HeaderEleven-lJceS0rf.js";
import "./HeaderInfo-Cgp-mq39.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./logo-red-DWnpzW8K.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "./FooterTen-38ShNsAZ.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
import "sal.js";
import "./SingleTabItem-DsMnV-ax.js";
import "./teamData-RHm96bod.js";
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
const bg$2 = "" + __buildAssetsURL("slider-1.DZPKJhTT.jpg");
const _imports_0$3 = "" + __buildAssetsURL("slider-2.CF3Z3LYJ.png");
const _sfc_main$9 = {
  data() {
    return {
      bg: bg$2
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area fix" }, _attrs))}><div class="slider__item-10 slider__height-10 d-flex align-items-center black-bg-17 p-relative z-index-1"><div class="slider__bg-10 include-bg jarallax" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="container"><div class="row align-items-center"><div class="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-8"><div class="slider__content-10 mb-60"><span class="slider__title-pre-10">Hello, I’m Justin Case</span><h3 class="slider__title-10"> How plan <br> form the party. </h3><p>Become a part of our team, sign up for updates.</p><div class="slider__btn-10">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/about",
    class: "tp-btn-7"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About Our Strategy <i class="fa-regular fa-angle-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" About Our Strategy "),
          createVNode("i", { class: "fa-regular fa-angle-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-4 order-first order-sm-last"><div class="slider__thumb-10 text-end"><span class="thumb-border"></span><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/HomePoliticianBanner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const HomePoliticianBanner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const bg$1 = "" + __buildAssetsURL("cta-shape.Cu209gGi.png");
const _imports_0$2 = "" + __buildAssetsURL("cta-features-bg.BpCKBqCx.jpg");
const _sfc_main$8 = {
  components: { VideoModal },
  data() {
    return {
      bg: bg$1
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="cta__area cta__translate pb-140"><div class="container"><div class="cta__inner-10 include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"><div class="row"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="cta__form-10"><h3 class="cta-form-title">Join our Movement!</h3><p>Our promise to make america great again!</p><form><div class="cta__input-wrapper-10 d-sm-flex align-items-center"><div class="cta__input-10"><input type="email" placeholder="E-mail*"></div><div class="cta__input-10 sm-input"><input type="text" placeholder="Zip code*"></div></div><div class="cta__btn-10"><button type="submit" class="tp-btn-8">Request</button></div></form></div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="cta__features-wrapper d-sm-flex"><div class="cta__features-item p-relative"><div class="cta__features-overlay"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="cta__features-video"><a href="#" class="popup-video"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9.00223V5.31839C0 0.564251 3.36026 -1.35234 7.46724 1.01228L10.6533 2.8542L13.8393 4.69612C17.9463 7.06075 17.9463 10.9437 13.8393 13.3083L10.6533 15.1503L7.46724 16.9922C3.36026 19.3568 0 17.4153 0 12.6861V9.00223Z" fill="currentColor"></path></svg></a><span>Watch Video</span></div><div class="cta__features-content"><h3 class="cta__features-title">Special Message</h3><p>Democracy arises out of the notion that those.</p></div></div><div class="cta__counter"><div class="cta__counter-icon"><span><svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4531 44.5001V50.8001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.3906 61H46.5109V58C46.5109 54.7 43.8001 52 40.4868 52H22.4147C19.1014 52 16.3906 54.7 16.3906 58V61V61Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M13.3828 61H49.5271" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.0002 43C19.3437 43 9.91602 33.61 9.91602 22V13C9.91602 6.37 15.3075 1 21.9641 1H40.0363C46.6928 1 52.0844 6.37 52.0844 13V22C52.0844 33.61 42.6567 43 31.0002 43Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.3312 29.9499C9.07223 29.2299 7.08429 27.9099 5.51804 26.3499C2.80722 23.3499 1 19.7499 1 15.5499C1 11.3499 4.31323 8.04987 8.53006 8.04987H10.4879C9.88547 9.42987 9.58427 10.9599 9.58427 12.5499V21.5499C9.58427 24.5499 10.2168 27.3699 11.3312 29.9499Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M50.6699 29.9499C52.9289 29.2299 54.9169 27.9099 56.4831 26.3499C59.1939 23.3499 61.0012 19.7499 61.0012 15.5499C61.0012 11.3499 57.6879 8.04987 53.4711 8.04987H51.5133C52.1157 9.42987 52.4169 10.9599 52.4169 12.5499V21.5499C52.4169 24.5499 51.7844 27.3699 50.6699 29.9499Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="cta__counter-content"><h4>+<span>223</span>K</h4><p>2021 Win Vote</p></div></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/NmPm9bS7bak"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta/PoliticianCta.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const PoliticianCta = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      service_items: [
        {
          delay: "130",
          icon: polity_ser_icon_1,
          sm_title: "Main Mission",
          title: "Core Principles",
          desc: "We are committed to restoring honesty, integrity, government. Explore our principles."
        },
        {
          delay: "150",
          icon: polity_ser_icon_2,
          sm_title: "What We Do",
          title: "Political Program",
          desc: "We are committed to restoring honesty, integrity, government. Explore our principles."
        },
        {
          delay: "170",
          icon: polity_ser_icon_3,
          sm_title: "Our Mission",
          title: "Our Members",
          desc: "We are committed to restoring honesty, integrity, government. Explore our principles."
        }
      ]
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features__area pb-100" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xxl-9 col-xl-10 col-lg-10"><div class="features__section-title-wrapper text-center mb-40"><h3 class="features__section-title"> A Canada that is healthier and safer, greener and more competitive. </h3></div></div></div><div class="row"><div class="col-xxl-12"><div class="features__more-10 text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-7 tp-btn-7-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Join Our Movement `);
      } else {
        return [
          createTextVNode(" Join Our Movement ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="features__wrapper-10"><div class="row"><!--[-->`);
  ssrRenderList($data.service_items, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="features__item-10 transition-3 mb-30" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="features__icon-10"><span><img${ssrRenderAttr("src", item.icon)} alt=""></span></div><div class="features__content-10"><span>${ssrInterpolate(item.sm_title)}</span><h3 class="features__title-10">${ssrInterpolate(item.title)}</h3><p>${ssrInterpolate(item.desc)}</p><div class="features__btn-10">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/service-details",
      class: "tp-btn-border-9"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Learn More <i class="fa-regular fa-angle-right"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode(" Learn More "),
            createVNode("i", { class: "fa-regular fa-angle-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/PoliticianFeature.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PoliticianFeature = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const bg = "" + __buildAssetsURL("counter-shape-1.D1lU_qBB.png");
const _sfc_main$6 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      bg,
      counter_data: [
        {
          delay: ".3s",
          num: 623,
          text: "k",
          title: "People lived in our city"
        },
        {
          delay: ".5s",
          num: 1820,
          text: "+",
          title: "Square kilometers region covers"
        },
        {
          delay: ".7s",
          num: 24,
          text: "%",
          title: "Private & domestic garden land"
        }
      ]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter__area counter__overlay-10" }, _attrs))}><div class="container"><div class="counter__inner-10"><div class="counter__inner-10-shape include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"></div><div class="row"><!--[-->`);
  ssrRenderList($data.counter_data, (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="counter__item-10 text-center mb-30" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="counter__content-10"><h4><span class="counter">${ssrInterpolate(item.num)}</span>${ssrInterpolate(item.text)}</h4><p>${ssrInterpolate(item.title)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counters/PoliticianCounter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PoliticianCounter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const polity_event_1 = "" + __buildAssetsURL("event-1.CD2MEKOT.jpg");
const polity_event_2 = "" + __buildAssetsURL("event-2.DfFfFHs0.jpg");
const polity_event_3 = "" + __buildAssetsURL("event-3.CX7uCM4e.jpg");
const _imports_0$1 = "" + __buildAssetsURL("event-shape-1.BBtZ4i4J.png");
const _sfc_main$5 = {
  data() {
    return {
      event_data: [
        {
          id: 1,
          img: polity_event_1,
          event_thumb_title: "Neal	Houston",
          event_thumb_subtitle: "City mayor",
          tag: "Conference",
          date: "July 17, 2022",
          title: "Cultural Festival & Concert",
          location: "42 nostrand ave, brooklyn. NY"
        },
        {
          id: 2,
          img: polity_event_2,
          event_thumb_title: "Neal	Houston",
          event_thumb_subtitle: "City mayor",
          tag: "Tourist Guide",
          date: "July 18, 2022",
          title: "Rising stars obscure heirs reality",
          location: "45 nostrand ave, brooklyn. NY"
        },
        {
          id: 3,
          img: polity_event_3,
          event_thumb_title: "Neal	Houston",
          event_thumb_subtitle: "City mayor",
          tag: "Celebration",
          date: "July 20, 2022",
          title: "BUILD architecture Awards",
          location: "48 nostrand ave, brooklyn. NY"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "event__area pt-110 pb-120" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-10 mb-60 text-center"><span class="section__title-pre-10">Campaign events</span><h3 class="section__title-10">Upcoming city events</h3></div></div></div><div class="row"><div class="col-xxl-12"><div class="event__item-wrapper-10"><!--[-->`);
  ssrRenderList($data.event_data, (item, i) => {
    _push(`<div class="event__item-10 transition-3 d-md-flex align-items-center"><div class="event__thumb-10 w-img mr-25">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/event-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", item.img)} alt=""${_scopeId}>`);
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
    }, _parent));
    _push(`<div class="event__thumb-10-overlay"><img class="event-thumb-shape"${ssrRenderAttr("src", _imports_0$1)} alt="shape"><h3>${ssrInterpolate(item.event_thumb_title)}</h3><span>${ssrInterpolate(item.event_thumb_subtitle)}</span></div></div><div class="event__item-10-inner d-lg-flex justify-content-between align-items-center"><div class="event__content-10"><div class="event__meta-10"><span class="event-tag"><a href="#">${ssrInterpolate(item.tag)}</a></span><span><i class="fa-light fa-clock"></i>${ssrInterpolate(item.date)}</span></div><h3 class="event__title-10">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/event-details" }, {
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
    _push(`</h3><p>${ssrInterpolate(item.location)}</p></div><div class="event__more-10 text-lg-end">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/contact",
      class: "tp-btn-border-9"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Book a Seat <i class="fa-regular fa-chevron-right"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode("Book a Seat "),
            createVNode("i", { class: "fa-regular fa-chevron-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/PoliticianEvents.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PoliticianEvents = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const bio_bg_1 = "" + __buildAssetsURL("biography-1.GjHdBdTc.jpg");
const bio_bg_2 = "" + __buildAssetsURL("biography-2.CJ0actGq.jpg");
const bio_bg_3 = "" + __buildAssetsURL("biography-3.DUNcNabO.jpg");
const bio_bg_4 = "" + __buildAssetsURL("biography-4.ZZL6NVHt.jpg");
const bio_bg_5 = "" + __buildAssetsURL("biography-5.CCfAPU8w.jpg");
const bio_bg_6 = "" + __buildAssetsURL("biography-6.b9x7lDKN.jpg");
const bio_bg_7 = "" + __buildAssetsURL("biography-7.BP-Akgeg.jpg");
const bio_bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA6CAYAAAB79J21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7dy7SgNRFEbhPeMFUnjDylgIVr7/09gqio2FBlHwFvc2cyAIoilnzVrwazJlvklCmhMxoZbL5UktJtR2TKQB9jjX5ePouu4uJtAkgNdwG+p8KshdwPuB+z5crht7nrunI6OBf8FtTQIZC/wHbguPjAT+J24LjYwD3hC3hUX+Bs4XZTf/neVmua0Yd2+xGW6rIRN+WTzmbvJmfe0G3Ivh4iL3GTbm+txe7jB3WcDnsbrrF2GkjnI7pX2QewqjVZ/Is3544scyrzLd6sPQCQxPYHgCwxMYnsDwBIYnMDyB4QkMT2B4AsMTGJ7A8ASGJzA8geEJDE9geALDExiewPAEhicwPIHhCQxPYHgCwxMYnsDwBIYnMDyB4QkMT2B4AsMTGJ7A8ASGJzA8geEV8EcITaxvf15idV6lsaoTZx8K+Cq3Hytk38njrwzrpNk6Tvh2/UDw0+Gijbv6yn3OXdeB4F9W3l3pXMdVpQAAAABJRU5ErkJggg==";
const solid_bg = "" + __buildAssetsURL("biography-solid-bg.Dr1jnCGd.png");
const _sfc_main$4 = {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      bio_bg,
      solid_bg,
      biography_items: [
        {
          bg: bio_bg_1,
          date: "01 April 2014",
          title: "Stand with our campaign for working political",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        },
        {
          bg: bio_bg_2,
          date: "22 June 2015",
          title: "Iranian Regime Thugs Fire on – Drive-By Killers",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        },
        {
          bg: bio_bg_3,
          date: "04 Jan 2016",
          title: "The Irony of information: Enduring Solutions",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        },
        {
          bg: bio_bg_4,
          date: "26 Sept 2017",
          title: "Combating information by Truth and Trust",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        },
        {
          bg: bio_bg_5,
          date: "14 Aug 2018",
          title: "'Truth Decay' in Europe Is Real, Advance Slowed",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        },
        {
          bg: bio_bg_6,
          date: "08 May 2019",
          title: "Supporting the People of Ukraine Through Cities",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        },
        {
          bg: bio_bg_7,
          date: "21 July 2020",
          title: "Homelessness in L.A., Russia Morale:",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis"
        }
      ],
      biography_year: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]
    };
  },
  setup() {
    const thumbsSwiper = ref();
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      modules: [Pagination, Navigation, FreeMode, Thumbs],
      setThumbsSwiper,
      thumbsSwiper
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "biography__area p-relative pb-110 fix" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    modules: $setup.modules,
    thumbs: { swiper: $setup.thumbsSwiper },
    class: "biography__slider-content-active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.biography_items, (item, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "biography__item biography__height p-relative z-index-1"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="biography__bg biography__bg-1" style="${ssrRenderStyle({ backgroundImage: `url(${item.bg})` })}"${_scopeId2}></div><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-xxl-7 col-xl-8 col-lg-9"${_scopeId2}><div class="biography__content p-relative z-index-1"${_scopeId2}><div class="biography__meta"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.date)}</span></div><h3 class="biography__title"${_scopeId2}>${ssrInterpolate(item.title)}</h3><p${_scopeId2}>${ssrInterpolate(item.subtitle)}</p><div class="biography__btn mb-50"${_scopeId2}><a href="#" class="tp-btn-border-9 tp-link-btn-3"${_scopeId2}> Continue Reading <span${_scopeId2}><i class="fa-regular fa-angle-right"${_scopeId2}></i></span></a></div></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "biography__bg biography__bg-1",
                    style: { backgroundImage: `url(${item.bg})` }
                  }, null, 4),
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-xxl-7 col-xl-8 col-lg-9" }, [
                        createVNode("div", { class: "biography__content p-relative z-index-1" }, [
                          createVNode("div", { class: "biography__meta" }, [
                            createVNode("span", null, toDisplayString(item.date), 1)
                          ]),
                          createVNode("h3", { class: "biography__title" }, toDisplayString(item.title), 1),
                          createVNode("p", null, toDisplayString(item.subtitle), 1),
                          createVNode("div", { class: "biography__btn mb-50" }, [
                            createVNode("a", {
                              href: "#",
                              class: "tp-btn-border-9 tp-link-btn-3"
                            }, [
                              createTextVNode(" Continue Reading "),
                              createVNode("span", null, [
                                createVNode("i", { class: "fa-regular fa-angle-right" })
                              ])
                            ])
                          ])
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.biography_items, (item, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "biography__item biography__height p-relative z-index-1"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "biography__bg biography__bg-1",
                  style: { backgroundImage: `url(${item.bg})` }
                }, null, 4),
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-xxl-7 col-xl-8 col-lg-9" }, [
                      createVNode("div", { class: "biography__content p-relative z-index-1" }, [
                        createVNode("div", { class: "biography__meta" }, [
                          createVNode("span", null, toDisplayString(item.date), 1)
                        ]),
                        createVNode("h3", { class: "biography__title" }, toDisplayString(item.title), 1),
                        createVNode("p", null, toDisplayString(item.subtitle), 1),
                        createVNode("div", { class: "biography__btn mb-50" }, [
                          createVNode("a", {
                            href: "#",
                            class: "tp-btn-border-9 tp-link-btn-3"
                          }, [
                            createTextVNode(" Continue Reading "),
                            createVNode("span", null, [
                              createVNode("i", { class: "fa-regular fa-angle-right" })
                            ])
                          ])
                        ])
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
  _push(`<div class="container"><div class="row"><div class="col-xxl-12"><div class="biography__slider">`);
  _push(ssrRenderComponent(_component_swiper, {
    onSwiper: $setup.setThumbsSwiper,
    modules: $setup.modules,
    "space-between": 0,
    "slides-per-view": 6,
    "watch-slides-progress": true,
    loop: true,
    "free-mode": false,
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      992: {
        slidesPerView: 4
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
    class: "biography__slider-nav"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.biography_year, (year, i) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: i,
            class: "biography__year"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p${_scopeId2}><span class="tp-biography-bg include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bio_bg})` })}"${_scopeId2}></span><span class="tp-biography-bg is-solid include-bg" style="${ssrRenderStyle({ backgroundImage: `url(${$data.solid_bg})` })}"${_scopeId2}></span> ${ssrInterpolate(year)}</p>`);
              } else {
                return [
                  createVNode("p", null, [
                    createVNode("span", {
                      class: "tp-biography-bg include-bg",
                      style: { backgroundImage: `url(${$data.bio_bg})` }
                    }, null, 4),
                    createVNode("span", {
                      class: "tp-biography-bg is-solid include-bg",
                      style: { backgroundImage: `url(${$data.solid_bg})` }
                    }, null, 4),
                    createTextVNode(" " + toDisplayString(year), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.biography_year, (year, i) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: i,
              class: "biography__year"
            }, {
              default: withCtx(() => [
                createVNode("p", null, [
                  createVNode("span", {
                    class: "tp-biography-bg include-bg",
                    style: { backgroundImage: `url(${$data.bio_bg})` }
                  }, null, 4),
                  createVNode("span", {
                    class: "tp-biography-bg is-solid include-bg",
                    style: { backgroundImage: `url(${$data.solid_bg})` }
                  }, null, 4),
                  createTextVNode(" " + toDisplayString(year), 1)
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
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/biography/PolityBiographyArea.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PolityBiographyArea = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "donate__area" }, _attrs))}><div class="container"><div class="donate__inner grey-bg-4"><div class="row"><div class="col-xxl-12"><div class="donate__wrapper"><div class="donate__content mb-45 text-center"><h3 class="donate__title"> Get involved with contribution, make yourself proud! </h3><p>Donate today to support lower taxes for middle class</p></div><div class="donate__form"><form><div class="donate__form-inner d-lg-flex align-items-center justify-content-center"><div class="donate__ammount-wrapper d-flex flex-wrap align-items-center mr-20"><div class="donate__ammount"><button type="submit">$10</button></div><div class="donate__ammount"><button type="submit">$15</button></div><div class="donate__ammount"><button type="submit">$20</button></div><div class="donate__ammount"><button type="submit">$25</button></div><div class="donate__ammount"><button type="submit">$30</button></div><div class="donate__ammount donate__ammount-more"><button type="button" id="donate_more">More</button></div></div><div class="donate__more mb-10">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-7"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donate Now`);
      } else {
        return [
          createTextVNode("Donate Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/donate-area/PolityDonateArea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PolityDonateArea = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  mixins: [blogData],
  data() {
    return {
      first_blog: {},
      big_blog: {},
      sm_blogs: []
    };
  },
  created() {
    this.first_blog = this.blogData.filter((blog) => blog.home_politician).find((b) => b.p_blog_1);
    this.big_blog = this.blogData.filter((blog) => blog.home_politician).find((b) => b.p_blog_big);
    this.sm_blogs = this.blogData.filter((blog) => blog.home_politician).find((b) => b.sm_blogs).sm_blogs;
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area pt-110 pb-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-10 text-center mb-45"><span class="section__title-pre-10">Our latest news</span><h3 class="section__title-10">Latest news &amp; articles</h3></div></div></div><div class="row"><div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6"><div class="blog__item-10 white-bg transition-3 mb-30 fix" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="blog__thumb-10 w-img fix">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $data.first_blog.img)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $data.first_blog.img,
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="blog__content-10"><div class="blog__content-10-top"><div class="blog__meta-10-wrapper d-flex align-items-center"><div class="blog__tag-10 mr-10"><a href="#">${ssrInterpolate($data.first_blog.tag)}</a></div><div class="blog__meta-10"><span>${ssrInterpolate($data.first_blog.date)}</span></div></div><h3 class="blog__title-10">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.first_blog.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.first_blog.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>${ssrInterpolate($data.first_blog.sm_desc)}</p></div><div class="blog__content-10-bottom d-flex align-items-center"><div class="blog__meta-author-10 d-flex align-items-center"><div class="blog__meta-author-thumb-10"><a href="#"><img${ssrRenderAttr("src", $data.first_blog.author_img)} alt=""></a></div><div class="blog__meta-author-content-10"><span>By <a href="#">${ssrInterpolate($data.first_blog.author_name)}</a></span></div></div><div class="blog__meta-10 blog-meta-10-2"><span>${ssrInterpolate($data.first_blog.comments)} Comments</span></div></div></div></div></div><div class="col-xxl-6 col-xl-4 col-lg-6 order-last order-lg-2"><div class="blog__item-10 blog__item-10-overlay white-bg transition-3 mb-30 fix order-last" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"><div class="blog__thumb-10 m-img fix transition-3" style="${ssrRenderStyle({ backgroundImage: `url(${$data.big_blog.img})` })}" data-background="~/assets/img/blog/10/blog-2.jpg"></div><div class="blog__content-10"><div class="blog__content-10-top"><div class="blog__meta-10-wrapper d-flex align-items-center"><div class="blog__tag-10 mr-10"><a href="#">${ssrInterpolate($data.big_blog.tag)}</a></div><div class="blog__meta-10"><span>${ssrInterpolate($data.big_blog.date)}</span></div></div><h3 class="blog__title-10">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.big_blog.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.big_blog.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div><div class="blog__content-10-bottom d-flex align-items-center"><div class="blog__meta-author-10 d-flex align-items-center"><div class="blog__meta-author-thumb-10"><a href="#"><img${ssrRenderAttr("src", $data.big_blog.author_img)} alt=""></a></div><div class="blog__meta-author-content-10"><span>By<a href="#">${ssrInterpolate($data.big_blog.author_name)}</a></span></div></div><div class="blog__meta-10 blog-meta-10-2"><span>${ssrInterpolate($data.big_blog.comments)} Comments</span></div></div></div></div></div><div class="col-xxl-3 col-xl-4 col-lg-12 col-md-6 order-lg-last"><div class="blog__item-10-wrapper d-lg-flex d-xl-block" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"><!--[-->`);
  ssrRenderList($data.sm_blogs, (item, i) => {
    _push(`<div class="blog__item-10 blog__item-10-sm white-bg transition-3 mb-30 fix"><div class="blog__content-10"><div class="blog__content-10-top"><div class="blog__meta-10-wrapper d-flex align-items-center"><div class="blog__tag-10 mr-10"><a href="#">${ssrInterpolate(item.tag)}</a></div><div class="blog__meta-10"><span>${ssrInterpolate(item.date)}</span></div></div><h3 class="blog__title-10">`);
    _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
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
    _push(`</h3></div><div class="blog__content-10-bottom d-flex align-items-center"><div class="blog__meta-author-10 d-flex align-items-center"><div class="blog__meta-author-thumb-10"><a href="#"><img${ssrRenderAttr("src", item.author_img)} alt=""></a></div><div class="blog__meta-author-content-10"><span>By <a href="#">${ssrInterpolate(item.author_name)}</a></span></div></div><div class="blog__meta-10 blog-meta-10-2"><span>${ssrInterpolate(item.comments)} Comments</span></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div><div class="row"><div class="col-xxl-12"><div class="blog__more-10 text-center mt-30" data-sal="slide-up" data-sal-delay="190" data-sal-duration="1000">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-grid",
    class: "tp-btn-border-9"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View More News <i class="fa-regular fa-angle-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("View More News "),
          createVNode("i", { class: "fa-regular fa-angle-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/PoliticianBlogs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PoliticianBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __buildAssetsURL("subscribe-shape-1.414rbu8L.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "subscribe__area fix p-relative black-bg-18" }, _attrs))}><div class="subscribe__shape"><img class="subscribe__shape-3"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="container"><div class="subscribe__inner-10 pt-70 pb-30 has-border"><div class="row align-items-end"><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="section__title-wrapper-10 is-white mb-45"><span class="section__title-pre-10">Subscribe our newsletter</span><h3 class="section__title-10">Get update every week</h3></div></div><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="subscribe__form-10 mb-55"><form><div class="subscribe__input-10 p-relative"><input type="email" placeholder="Enter your email"><button type="submit" class="tp-btn-7">Subscribe Now</button></div></form></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/subscribe/PoliticianSubscribe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PoliticianSubscribe = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-politician",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Politician - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomePoliticianBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianCta, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianFeature, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianVision, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianCounter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianEvents, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PolityBiographyArea, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PolityTeams, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PolityDonateArea, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianBlogs, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PoliticianSubscribe, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomePoliticianBanner),
              createVNode(PoliticianCta),
              createVNode(PoliticianFeature),
              createVNode(PoliticianVision),
              createVNode(PoliticianCounter),
              createVNode(PoliticianEvents),
              createVNode(PolityBiographyArea),
              createVNode(PolityTeams),
              createVNode(PolityDonateArea),
              createVNode(PoliticianBlogs),
              createVNode(PoliticianTestimonial),
              createVNode(PoliticianSubscribe)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-politician.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-politician-Exs9cm4B.js.map
