import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, resolveComponent, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("services-shape-1.BlPomrHt.png");
const _imports_1 = "" + __buildAssetsURL("services-shape-2.D6ltu--M.png");
const _sfc_main$1 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    icon: String,
    title: String,
    desc: String,
    delay: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-xxl-3 col-xl-3 col-lg-4 col-md-6" }, _attrs))}><div class="services__item transition-3 mb-30 fix wow fadeInUp" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", $props.delay)} data-sal-duration="1000"><div class="services__shape"><img class="services__shape-1"${ssrRenderAttr("src", _imports_0)} alt=""><img class="services__shape-2"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="services__item-inner"><div class="services__icon"><span>${$props.icon ?? ""}</span></div><div class="services__content"><h3 class="services__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/service-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>${ssrInterpolate($props.desc)}</p><div class="services__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/service-details",
    class: "tp-btn-border"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Explore Section <i class="fa-regular fa-angle-right"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("Explore Section "),
          createVNode("i", { class: "fa-regular fa-angle-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/single-service/SingleService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SingleService = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    SingleService
  },
  props: {
    style_2: {
      type: Boolean,
      default: false
    },
    el_style: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_SingleService = resolveComponent("SingleService");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `services__area ${$props.style_2 ? "pt-100" : ""} ${$props.el_style ? "pt-110" : ""} pb-90`
  }, _attrs))}><div class="container">`);
  if (!$props.style_2 && !$props.el_style) {
    _push(`<div class="row align-items-end"><div class="col-xxl-7 col-xl-5 col-lg-8 col-md-8 col-sm-8"><div class="section__title-wrapper mb-60"><h3 class="section__title"> Services to help <span class="section__title-highlight">business <svg width="220" height="27" viewBox="0 0 220 27" fill="none"><path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"></path></svg></span> grow. </h3></div></div><div class="col-xxl-5 col-xl-7 col-lg-4 col-md-4 col-sm-4"><div class="services__more mb-70 text-md-end">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/services",
      class: "tp-link-btn-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` See All Service <span${_scopeId}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
        } else {
          return [
            createTextVNode(" See All Service "),
            createVNode("span", null, [
              (openBlock(), createBlock("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M1 7H13",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M7 1L13 7L7 13",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3"> Minimal &amp; Clean Design </span><h3 class="tp-section-title-3">Bordered Icon Box</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row">`);
  _push(ssrRenderComponent(_component_SingleService, {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                <path d="M37.67 22.5229L35.8725 20.7644L20.7302 35.8871L22.5473 37.7042C24.0713 39.2282 25.6539 39.9902 27.217 39.9902C28.7801 39.9902 30.3627 39.2282 31.8867 37.7042L37.67 31.9208C40.7766 28.7947 40.7766 25.649 37.67 22.5229Z" fill="currentColor"/>\r\n                <path d="M17.4478 2.30065C14.3803 -0.766883 11.1564 -0.766883 8.0889 2.30065L2.28599 8.08402C-0.761998 11.1516 -0.761998 14.3754 2.28599 17.4429L4.08353 19.2405L19.2258 4.09818L17.4478 2.30065Z" fill="currentColor"/>\r\n                <path opacity="0.2" d="M39.1746 4.27436C36.6151 10.6634 30.7731 19.0063 25.2046 24.4575C24.4035 19.4166 20.3786 15.4699 15.2986 14.7665C20.7694 9.1785 29.1709 3.25836 35.5795 0.679292C36.7127 0.249447 37.846 0.5816 38.5494 1.28498C39.2918 2.02744 39.6435 3.14113 39.1746 4.27436Z" fill="currentColor"/>\r\n                <path d="M25.2046 24.4574C24.2277 25.4148 23.2508 26.294 22.3129 27.0365L18.4638 30.1236C17.9754 30.4752 17.4869 30.7683 16.9398 31.0028C16.9398 30.6316 16.9008 30.2603 16.8617 29.8696C16.6468 28.2479 15.9043 26.7043 14.5952 25.3953C13.2471 24.0666 11.6449 23.3046 9.98416 23.0897C9.5934 23.0506 9.18309 23.0311 8.81186 23.0506C9.02678 22.445 9.35894 21.8783 9.76924 21.4094L12.8172 17.5603C13.5402 16.642 14.3803 15.7042 15.2986 14.7664C20.3786 15.4697 24.4035 19.4165 25.2046 24.4574Z" fill="currentColor"/>\r\n                <path opacity="0.2" d="M16.9398 31.003C16.9398 33.1522 16.1192 35.2038 14.5561 36.7473C13.3643 37.9587 11.7621 38.7793 9.80828 39.0138L5.02137 39.5413C2.40322 39.8344 0.156303 37.5875 0.449379 34.9498L0.976916 30.1433C1.44584 25.8644 5.02137 23.129 8.81182 23.0509C9.18305 23.0313 9.59336 23.0509 9.98413 23.09C11.6449 23.3049 13.247 24.0669 14.5952 25.3955C15.9043 26.7046 16.6467 28.2481 16.8617 29.8698C16.9007 30.2606 16.9398 30.6318 16.9398 31.003Z" fill="currentColor"/>\r\n              </svg>',
    title: "UX/UI Design",
    desc: "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    delay: "130"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleService, {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                <path d="M36.1334 26.6667H30.5334C28.1143 26.6667 26.6667 28.1144 26.6667 30.5334V36.1334C26.6667 38.5525 28.1143 40.0001 30.5334 40.0001H36.1334C38.5524 40.0001 40 38.5525 40 36.1334V30.5334C40 28.1144 38.5524 26.6667 36.1334 26.6667ZM36.5524 32.9715C36.3238 33.2001 36.0191 33.3144 35.7143 33.3144C35.4095 33.3144 35.1048 33.2001 34.8762 32.9715L34.5334 32.6287V36.8953C34.5334 37.562 34 38.0953 33.3334 38.0953C32.6667 38.0953 32.1334 37.562 32.1334 36.8953V32.6287L31.7905 32.9715C31.3334 33.4287 30.5714 33.4287 30.1143 32.9715C29.6572 32.5144 29.6572 31.7525 30.1143 31.2953L32.4953 28.9144C32.5905 28.8191 32.7238 28.7429 32.8572 28.6858C32.8953 28.6667 32.9334 28.6667 32.9714 28.6477C33.0667 28.6096 33.1619 28.5906 33.2762 28.5906C33.3143 28.5906 33.3524 28.5906 33.3905 28.5906C33.5238 28.5906 33.6381 28.6096 33.7714 28.6667C33.7905 28.6667 33.7905 28.6667 33.8095 28.6667C33.9429 28.7239 34.0572 28.8001 34.1524 28.8953C34.1714 28.9144 34.1715 28.9144 34.1905 28.9144L36.5715 31.2953C37.0286 31.7525 37.0286 32.5144 36.5524 32.9715Z" fill="currentColor"/>\r\n                <path opacity="0.2" d="M26.6667 36.1333V30.5333C26.6667 28.1143 28.1143 26.6667 30.5333 26.6667H36.1333C36.8952 26.6667 37.5429 26.819 38.0952 27.0857C38.0952 27.0667 38.0952 27.0476 38.0952 27.0095V11.0667C38.0952 4.13333 33.9619 0 27.0286 0H11.0667C4.13333 0 0 4.13333 0 11.0667V27.0095C0 33.9619 4.13333 38.0952 11.0667 38.0952H27.0095C27.0286 38.0952 27.0476 38.0952 27.0857 38.0952C26.819 37.5429 26.6667 36.8952 26.6667 36.1333Z" fill="currentColor"/>\r\n                <path d="M26.6666 15.5621C27.4476 15.5621 28.0952 14.9145 28.0952 14.1335C28.0952 13.3526 27.4476 12.705 26.6666 12.705H22.0761L22.5714 8.28591C22.6666 7.50496 22.0952 6.8002 21.3142 6.70496C20.5333 6.62877 19.8285 7.18115 19.7333 7.9621L19.2 12.705H16.0571L16.5523 8.28591C16.6476 7.50496 16.0761 6.8002 15.2952 6.70496C14.5142 6.60972 13.8095 7.18115 13.7142 7.9621L13.1809 12.705H8.60948C7.82852 12.705 7.18091 13.3526 7.18091 14.1335C7.18091 14.9145 7.82852 15.5621 8.60948 15.5621H12.8571L12.5142 18.724H7.619C6.83805 18.724 6.19043 19.3716 6.19043 20.1526C6.19043 20.9335 6.83805 21.5811 7.619 21.5811H12.2095L11.7142 26.0002C11.619 26.7811 12.1904 27.4859 12.9714 27.5811C13.0285 27.5811 13.0857 27.5811 13.1238 27.5811C13.8476 27.5811 14.4571 27.0478 14.5333 26.305L15.0666 21.5621H18.2095L17.7142 25.9811C17.619 26.7621 18.1904 27.4669 18.9714 27.5621C19.0285 27.5621 19.0857 27.5621 19.1238 27.5621C19.8476 27.5621 20.4571 27.0288 20.5333 26.2859L21.0666 21.5431H25.638C26.419 21.5431 27.0666 20.8954 27.0666 20.1145C27.0666 19.3335 26.419 18.6859 25.638 18.6859H21.3904L21.7333 15.524H26.6666V15.5621ZM18.5333 18.724H15.3904L15.7333 15.5621H18.8761L18.5333 18.724Z" fill="white"/>\r\n              </svg>',
    title: "Development",
    desc: "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    delay: "150"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleService, {
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                  <path opacity="0.2" d="M36.7442 1.39526V23.9069C36.7442 27.4418 34.8837 29.3022 31.3488 29.3022H8.65114C5.11625 29.3022 3.2558 27.4418 3.2558 23.9069V1.39526H36.7442Z" fill="currentColor"/>\r\n                  <path d="M38.6047 2.7907H1.39535C0.632558 2.7907 0 2.15814 0 1.39535C0 0.632558 0.632558 0 1.39535 0H38.6047C39.3674 0 40 0.632558 40 1.39535C40 2.15814 39.3674 2.7907 38.6047 2.7907Z" fill="currentColor"/>\r\n                  <path d="M28.6884 39.2371C28.4466 39.7208 27.9442 39.9999 27.4419 39.9999C27.2372 39.9999 27.014 39.9441 26.828 39.8511L20 36.4464L13.1721 39.8511C12.9861 39.9441 12.7628 39.9999 12.5582 39.9999C12.0558 39.9999 11.5535 39.7208 11.3116 39.2371C10.9581 38.5301 11.2373 37.6929 11.9442 37.358L18.6047 34.0278V29.3022H21.3954V34.0278L28.0558 37.358C28.7628 37.6929 29.0419 38.5301 28.6884 39.2371Z" fill="currentColor"/>\r\n                  <path d="M11.6278 19.5348C11.2371 19.5348 10.8278 19.3674 10.5488 19.0325C10.0464 18.4372 10.1394 17.5628 10.7348 17.0605L16.5953 12.1674C17.1348 11.7209 17.8231 11.5349 18.4743 11.6465C19.1441 11.7581 19.7208 12.1674 20.0743 12.7627L22.0278 16.0185L27.479 11.4791C28.0743 10.9767 28.9487 11.0697 29.451 11.6651C29.9534 12.2604 29.8604 13.1348 29.265 13.6371L23.4045 18.5302C22.865 18.9767 22.1767 19.1627 21.5255 19.0511C20.8557 18.9395 20.279 18.5302 19.9255 17.9349L17.972 14.6791L12.5209 19.2185C12.2604 19.4232 11.9441 19.5348 11.6278 19.5348Z" fill="currentColor"/>\r\n               </svg>',
    title: "Construction",
    desc: "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    delay: "170"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SingleService, {
    icon: '<svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n                  <path opacity="0.2" d="M37.8947 17.2421H31.8105C26.8211 17.2421 22.7579 13.1789 22.7579 8.18947V2.10526C22.7579 0.947368 21.8105 0 20.6526 0H11.7263C5.24211 0 0 4.21053 0 11.7263V30.3789C0 37.8947 5.24211 42.1053 11.7263 42.1053H28.2737C34.7579 42.1053 40 37.8947 40 30.3789V19.3474C40 18.1895 39.0526 17.2421 37.8947 17.2421Z" fill="currentColor"/>\r\n                  <path d="M28.0001 0.441962C27.1369 -0.421196 25.6422 0.168278 25.6422 1.36828V8.71565C25.6422 11.7893 28.2527 14.3367 31.4317 14.3367C33.4317 14.3578 36.2106 14.3578 38.5896 14.3578C39.7896 14.3578 40.4212 12.9472 39.5791 12.1051C36.5475 9.05249 31.1159 3.55775 28.0001 0.441962Z" fill="currentColor"/>\r\n                  <path d="M23.1579 24.737H10.5263C9.66318 24.737 8.94739 24.0212 8.94739 23.158C8.94739 22.2949 9.66318 21.5791 10.5263 21.5791H23.1579C24.0211 21.5791 24.7369 22.2949 24.7369 23.158C24.7369 24.0212 24.0211 24.737 23.1579 24.737Z" fill="currentColor"/>\r\n                  <path d="M18.9474 33.1579H10.5263C9.66318 33.1579 8.94739 32.4421 8.94739 31.5789C8.94739 30.7158 9.66318 30 10.5263 30H18.9474C19.8105 30 20.5263 30.7158 20.5263 31.5789C20.5263 32.4421 19.8105 33.1579 18.9474 33.1579Z" fill="currentColor"/>\r\n                </svg>',
    title: "Appointments",
    desc: "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    delay: "190"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/HomeServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HomeServices as H
};
//# sourceMappingURL=HomeServices-Bj4bslBR.js.map
