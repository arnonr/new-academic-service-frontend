import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext, resolveComponent, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import layout from "./LayoutThree-1LUkpIAx.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { L as Link } from "./components-BjLpLPVr.js";
import { C as CareerItems } from "./CareerItems-C2bRCDQQ.js";
import { F as FreelancerAwards } from "./FreelancerAwards-Bv05_C13.js";
import { F as FreelancerTestimonial } from "./FreelancerTestimonial-DiTUMU3y.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { F as FreelancerCta } from "./FreelancerCta-InhucgAG.js";
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
import "./HeaderThree-BCirta-B.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./FooterThree-CyrzDqrG.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "sal.js";
import "vue3-carousel";
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
const _imports_0$1 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAABvCAYAAAAOsPt2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALsSURBVHgB7ZpPUhpBFMa/1yBWRVPxCBwBbwC7REky3EBPEKiKkJ24U7JQTiA5gVMVNdnJDTQnkCPMxlSiMC+v/4hDKlXpIbNK9W8BTE+/Nz1U9cd730Dce/MOSPsAT0CzFh1+ncAD/vCyCi6fyscamA9ocHGibCJsAFRDWt6BL3Zu3cQS7eshBcZkPkGlE/iyMJcTm0xNW/I+BKW7dHg5gidmrsTY2FkDgUCgSIj3tmpQal9LEB1ddPIEc7e5DxLlSNMOfby8kY1eOpPxSPK2ubvd9k60t7UjifrQMqTUlR4TPeMNLAOVMnFWgsqiZ7tyBVFbJLi/G8GX+9IIlYeaCOMLcPoJgUCgSIjb9Q1U1nakEpnQ4EucJ5jfN0UxWCRsFuvqSaGyfiWb9VhU4MzIim8iPbcEG2tLK5EgQvVpnarqm+y3ufXHZEN3rYlURCP4YuZKjEmMg/m4+d6W5F9iA4H/EG5H1WW2hY4xVZRDce/1MVant1hdv82e+Gsi3dVJjFRA19zbPjbJdH53XrozFfkmc12duxtqu2QYP82Y3cAXlY2DUWgyS+42IzmZ0OH5GDkwtwpVx4/vMZ2MEwQCAe6+iuzWyBknVZCOfTwm7jVdI6aP0PDdn64bvHaHYzo6b6h5Ik1qqxkvFuWqrl90MlcFSSOWpwriNDYxliGySy5CtgOBQGFNBTlzqC8fxdt+aOTztlfEA2J5R58G5wfKmUMwg7m9bYkxS7I5FqugXN52tgqyDZmsbLorFnzHqmweb1sUmdEysT/vNhEIBIok620nssc6vp2G0bHV5zpOHq/NhtqUKltvW0uJdD6VtW8y78QnGVaeRfMmjkq63ogXvW3F/v3PH7xtJfa7fjQ21uZQLgkafNZ3oEupGCm3EAgEioRMNZOWIvmZT+QR2ShPsH0qJk6ytEm6eiqbsohEgoj0SfgmNImUOrUH5bfyurkoQbm87awEwfRPSv8JwV0rp7f9ELtSKlnwtoviF4pHLz6LPblIAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAWCAYAAACR1Y9lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARaSURBVHgB5VhNctNYEO6WZFcobMq5gecGzg2cxRTObBJ2U8wEnBPEnCDmBBOfAGfiSrEj2RBTs7BzgvENECeIq+IAhSw13U960nuKHFzgBS6+jfWkfv3669+XIPyEmO23SD8/DJ06nr39AD8IB34R/DJE0Vxc7zVr5Ucbh0DUIMBa8vokCGDsedDWctXBsCu/s78edwhjubn3+XizP55qGfsb9Df7Q7/4DJoEAfY2X8ff1V4jdYmox2YqvYjgV06HfcvmP1v1chmea30INOXfi7xcSvTjs8eHEUEXMoKmkM8n1/WalWBi0HtI3udryfxGBNvsnLEyqgQjU1d6BkL34b/Dl3miFgjGlcFwOz3j+c4/EFGnSFTZHIZPKmf/TWStUvf2WesoIjwuIhnrv2vY96BUgqNFutgZ7et2swZL4j6SSp+c43qj2dPfG7L2xMukIpnCZ7FeROQ7iHUmfwgrIspopk9huBWU3ak3xw4i7QYubJupnxrM2eDNxaYMHPG2RZIjDUgXRDhhgm2H9cVBoxq67ht24JYnXjZ0+IH7ecs88LrdOi+FMFohWQX03F2uW0nVDhvSLSIpqETOe3ydGy9Eh5LrMUc8rw4unxhfx7OnfzTADUdCViLrzstNR4pYS0QUvcgfKE0kAngJKwH2Mluhe8t1LNFZRLIIKr0RU5vnLr3Iy1TO3k6InBO9dtHZdcxN1cj7v0h56HJqrACV08tjJpg6LanXV0JYSmgpJV9KqZw0HN3N8yCkSfpMUOdmRN/0JtdIHVYEGU1Sd6qutCFMWLrxUgq4rrN9uLB5ORFZ35gopsxv3QWtGnlOfQM3znzLfpMdhFFoOVNGTTImDrSjhezN361mIuLDAsQR1MGh2mx/p9hmRzXRWArgSsbLiWFcR0aNXslwV20cssuCCZ67V/rZRUydITM5G1U41bNM0pNrcqTTVIY6GzHODIriPZRl2cyJDuRXnKD3cXftGWYcqS5s2Hyzv/PGHGNyYdGDX9KmCZZL2KskUbmbHvrCIIdztEfZFh7SyLcYo8Ex+ix/oG5ElQcjrp1GLEvnpCKHWUR45IhTWG+X9R7ZtrDhiJPA+aQuDKVwQ/pJPTuGnaPOtstMeoKUi7ow8AwTr/kWG7UB7x3gkoIc1ZNsC++xSfK4SppPbaPGJGuZLO5ZJMUhSeQlAlbv0Mazbm++0ZEuLXPXtpltzZEU2/R1VRGVvGev/5Z0RN/my3dHO1UsPBoM22YnNTaO40tA3BXlV9amYzL91OP5nY4JtSd0LSIUE+/LnTqvj/INlVTfORDbUjdAAWTgkhPV5EbygC/bdopyzZ1ebhbtU3KRMw3KH/37ZqPMQo5MYxlZNfwZy8iZNue/IywBs4bZexfV03d7sGbw8i90ixfPcK3Uk6bQTAXU5X/9cIeog/BKmkpYuhtuqaXq4N0Y1hDWfxhkhi7+M0qR7MCawiIaRXCFhOeU3lZoqtbqD+f1JSn4CkVZU6jGAUoTAAAAAElFTkSuQmCC";
const _imports_4 = "" + __buildAssetsURL("slider-1._4F3qnON.png");
const _sfc_main$8 = {
  mixins: [SalScrollAnimationMixin]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area pt-100 slider__overlay-2 slider__overlay-2-2 p-relative z-index-1" }, _attrs))}><div class="slider__shape-2"><img class="slider__shape-2-1"${ssrRenderAttr("src", _imports_0$1)} alt=""><img class="slider__shape-2-2"${ssrRenderAttr("src", _imports_1)} alt=""><img class="slider__shape-2-3"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="slider__portfolio-btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-masonry",
    class: "slider-portfolio-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="12" height="12" viewBox="0 0 14 14" fill="none"${_scopeId}><path d="M3.5 2.25001C3.5 1.28351 2.7165 0.500001 1.75 0.500001C0.783502 0.500001 0 1.28351 0 2.25001C0 3.2165 0.783502 4 1.75 4C2.7165 4 3.5 3.2165 3.5 2.25001Z" fill="currentColor"${_scopeId}></path><path d="M3.5 12.25C3.5 11.2835 2.7165 10.5 1.75 10.5C0.783502 10.5 0 11.2835 0 12.25C0 13.2165 0.783502 14 1.75 14C2.7165 14 3.5 13.2165 3.5 12.25Z" fill="currentColor"${_scopeId}></path><path d="M13.5 2.25001C13.5 1.28351 12.7165 0.500002 11.75 0.500002C10.7835 0.500002 10 1.28351 10 2.25001C10 3.2165 10.7835 4 11.75 4C12.7165 4 13.5 3.2165 13.5 2.25001Z" fill="currentColor"${_scopeId}></path><path d="M13.5 12.25C13.5 11.2835 12.7165 10.5 11.75 10.5C10.7835 10.5 10 11.2835 10 12.25C10 13.2165 10.7835 14 11.75 14C12.7165 14 13.5 13.2165 13.5 12.25Z" fill="currentColor"${_scopeId}></path></svg> All Projects `);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 14 14",
            fill: "none"
          }, [
            createVNode("path", {
              d: "M3.5 2.25001C3.5 1.28351 2.7165 0.500001 1.75 0.500001C0.783502 0.500001 0 1.28351 0 2.25001C0 3.2165 0.783502 4 1.75 4C2.7165 4 3.5 3.2165 3.5 2.25001Z",
              fill: "currentColor"
            }),
            createVNode("path", {
              d: "M3.5 12.25C3.5 11.2835 2.7165 10.5 1.75 10.5C0.783502 10.5 0 11.2835 0 12.25C0 13.2165 0.783502 14 1.75 14C2.7165 14 3.5 13.2165 3.5 12.25Z",
              fill: "currentColor"
            }),
            createVNode("path", {
              d: "M13.5 2.25001C13.5 1.28351 12.7165 0.500002 11.75 0.500002C10.7835 0.500002 10 1.28351 10 2.25001C10 3.2165 10.7835 4 11.75 4C12.7165 4 13.5 3.2165 13.5 2.25001Z",
              fill: "currentColor"
            }),
            createVNode("path", {
              d: "M13.5 12.25C13.5 11.2835 12.7165 10.5 11.75 10.5C10.7835 10.5 10 11.2835 10 12.25C10 13.2165 10.7835 14 11.75 14C12.7165 14 13.5 13.2165 13.5 12.25Z",
              fill: "currentColor"
            })
          ])),
          createTextVNode(" All Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="slider__mouse-scroll smooth d-flex align-items-center"><a href="#about" class="mouse-scroll-icon"></a><p><a href="#about">Scroll Down</a></p></div><div class="container"><div class="row align-items-center"><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="slider__content-2"><span class="slider__title-pre-2" data-sal="slide-up" data-sal-delay="130" data-sal-duration="700"> Douglas Lyphe </span><h3 class="slider__title-2" data-sal="slide-up" data-sal-delay="140" data-sal-duration="900"> New Design Creation </h3><div class="slider__btn-2" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1100">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-green"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Let’s talk`);
      } else {
        return [
          createTextVNode("Let’s talk")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="slider__review"><span class="slider__review-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.38703 1.15089L10.7954 3.98714C10.9875 4.3739 11.4996 4.76066 11.9264 4.82512L14.4764 5.25485C16.1088 5.53418 16.4929 6.71595 15.3193 7.89772L13.3347 9.90673C13.004 10.2398 12.8119 10.8951 12.9186 11.3678L13.4841 13.8495C13.9322 15.8048 12.8973 16.5676 11.1795 15.547L8.78954 14.1181C8.35209 13.8603 7.64791 13.8603 7.21046 14.1181L4.80982 15.5363C3.09204 16.5569 2.0571 15.7941 2.50522 13.8388L3.0707 11.3571C3.17739 10.8951 2.98534 10.2398 2.65459 9.89599L0.680735 7.90846C-0.492909 6.72669 -0.108807 5.53418 1.52362 5.2656L4.07363 4.83586C4.50041 4.76066 5.01254 4.38464 5.2046 3.99788L6.61297 1.16163C7.3705 -0.385415 8.6295 -0.385415 9.38703 1.15089Z" fill="#008080"></path></svg></span><p><span>Excellent</span> 4.9 out of 5</p><span class="slider__review-client"><img${ssrRenderAttr("src", _imports_3)} alt=""></span></div></div></div><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="slider__thumb-wrapper-2 pt-20 ml-40" data-overlay="green" data-overlay-opacity="3"><div class="slider__thumb-2 m-img text-center" data-sal="slide-left" data-sal-delay="180" data-sal-duration="1200"><img${ssrRenderAttr("src", _imports_4)} alt=""></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/FreelancerHero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const FreelancerHero = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const brand_1 = "data:image/png;base64,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";
const brand_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAASCAYAAAA0YaI9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgB7Vg/b9tGFL+jHMDelC1baaBAlNRolU8QZctWUkFT24vtTyBr7GTrE1j+BLKX1nYCid7ayfKWTlGBANFmdsuorWpR8/r76Y7WkSJlKf0DucgDKJHHe+9+9+53772jFHdAPO+bsuMsVYRQXymlylLKw3b75EgsoHjeuou/iuMQqywD8y+dzuku3y2JBRYAr0ipDuBcgh614V4sqvj+t28Br6yfpNBQZRi/d8QCSxCcdMGKJ0qJrrgDorHKw7z3C+1sS34Vd0QQ5np57+6Ks/8X8snZ/6EkEiQS0jaC+pZJSEUE9wG3BdqOmf09zys6zvJBnrEoEg3E2VDb2kQFEdWS74f1IAgGxk4Ntj09FkUO0KMbRRFsvOqJOUUnU7E3xs4tLbox9sn+MQZRSepwvrJnzyVjLBfVBuYmPTy6tp+glytOrOz76xeOI1ocOIqUD4AS/3UYqKBLi5lWO0wc449t2+NLerp9OIgNB8H3Pd02AlThvXY0F2HlCm37GI/2VrEI9zHNQ/Z1nMLbanV9T8zsZK9osF8QaxRd72jskW8WsgV7V+wX67x4sbE1xqCKUfTbKnWAoW50tmHvqlrd2E2Pp3UlfCF3Y0fjn4sa4n+vUFA1Mc3ZMVDdpOqsArTDTo7i7EoQALjHd3DQTtIMWTHs0Zkp+6FhDFnSNYy4iFl0fS19sod6mOy+AU7ZJ1PFDCLlcmeMXTaD4CzQ2M8CsPbYdHPZjzfEABYeWRjqMe52+7SZqnz27EVK63J+IOSTdvsHkpOLDOI4l3lYHYYOMVohLXBkNzkZZTlQ7XJwOi5djmFLTrAAi0iGhvE2hlNa4+0qe+ltamdyhgRxi5iwVxlj//N4ir1Ktbr5WaEQlZNWhumQZVU+xLpSsWy0Un0b0+aQliXGaLtBb591kS+jwcmahj1RQKlhIZoxS8xJahvXTvxs98ciljGOyhslaTu3Twr7KARN0YieXV//EYAYodAEa2TsRpG0qclBkqUxzXuKXcowMNMRjexGrOxa4ado2L2vQSZZLazdY+SIW0/8DcHYrv3M2H+b84ys2g86Wa5sg5Vf26fVpCyndsQoRs8lE6Uft5qYUcjuZMuI3cX4+wCuRr6uLIt/XO658/T2vJeeTq4rV0pFLucDh5+Lf0no7DDZFM3MtsnYrdkNVo+2d2qbhbYuw4hZlI8WjB3azwgj3ix6rIhYoTiO09EVjHzGj0VxYZAjYerZtZPnLEJnHyebyM5sJ7BCSA+QxW6hY3WinYkknVQzEo411stbHQf9y/TY+dg3y/x6yHvU/6xMXIO/yzJV3CI6EcpEiMoqCqbJEuJcE0pb4iamkp3iAivfQM0KEAUO4I7ZGnRTICZiN34GWckjnVR1hbB+hZq4DuhmwhE+oTo1HhDELTIH9qfo7bbbr3bMYrhjDHK0w+hMk8SfThkRBJLWoU7WMNZNXqI+62yESHvO7k3vuBNBiskkZishZAz9rARExht944TIj+vdjL44MBCwmrYFG6y79S66Bwc4rfFJcwS7yTKPJ82Pwc44nVHthMY2zhXqINmuAtTTl5yT7280EQJTBxcy/qZEJklSZSv1Zb3A237/3eD9+3eHDx+uscZEiSPpiGV9DBVvkDxQ+J9+1+/3hyJDoB8+fvwFnCGho/BZ9Cw3MaJvD+Oc4panRjLrgTVZgBL1TkczpVT68rmUBQCXQ/M+vh5gAZ6XSp+fB8HrD9Oww6kN2Kvb2EulNYaf+/G3Z3NEP8VO2el0XncfPVojCV3awwUnOj8hph8Z/D9OjiU+0MnUV8pZBja2vcF1zpMz7P8sxO/9vwBY5um2zxpaogAAAABJRU5ErkJggg==";
const brand_3 = "data:image/png;base64,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";
const brand_4 = "data:image/png;base64,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";
const brand_5 = "data:image/png;base64,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";
const brand_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAOCAYAAAAMs69gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARLSURBVHgB7VnbcdNAFL2reAbnC9OBqQCnAkQFyGYgyRdOBbErsFNBQgUWXwQYbFEBpgLcQUQFMV84H9FyjlbCihLbeiVDmJwZxZZytXd379l7z65Vp7N3JgZHQSBTzzv1pQI4jtOwrO2u1vqlUtIMgsWO53lzecA/i5rW8h3BeovvI8tSc5DDAymOipLCkKB+KKJ6IrqBtgHlFSGC4+x1LUtGGc3dov1ut/fcaA4yA75ewNc0zzvw8w1+puPx6dEmW4y9CdsRLh/2B1IQaMe2LI14WDbjscqO47Emk1OsXvXOPAqNGYAzdhzE6EoOp3wHRDjH7TB2rJSeBcHvQoMBORs5zNnvbySj3DI4prxESGDY6exOGGxZ60OGuGwpAcRvwDlBa846IsTjqfFmMvnQw4tcuYNEZ2x82GxQVpSQZSkI3sK+lXaCrPM+CC56RcsDSOSK1L0MpnaUQZogIwYurhQAStpXLIzeZsuLkuVOOehvy3Fetz3v80xuAVHchqE3BPvyMlzw05utzXhq8S1SERi7x6+DlGVTwhISOghTschifrUUqGvNkwjMOlICEYmyTLz76tXuIQLZivpbCBjHOfrsy90AxN36gTkdZikbeWCyThgbYYn+8uW0neW9WvJmDSFiMBX/FNlGgPTQOLuOKohAmJRfz5L2m/AZZyZfCkM3NqVvoqzI5vxg/TwXQ9whyquNZwdViXfANmVBzYNA9+OH6+dzMa+lH5EQmBAfQW/e9ArLBZ1AlKxisw8iuFIBkH2Ysgc5XqHYcqUwwvTtZDGUEqAoxO6qp9Q2dIE+ZEnGBb3zpu95n7KUxQ3tM0Nqlr1ZkmBbW49GIN2K8dVdS/4TYJBTKmK5J2AJpFZDz/tcXBKWDWsS1fqKoH8l7yLdsBLXMkNSeNwEaocgCHxZs2I7nf1n4/GHvlQEaIEZWN5mKuMkplN5Vek1m4BcVHpWMh5/PMF4PKP647Kxy9Vb2A8zj/m0nrM0xAKeOwbcP0mWCmQmZCh1yO9XyLCeCGqOXcN7TJbLCdG6bifqXgqau5NGmf1xqr15MuAV1tYruGMB+RccD4K0sywbqiUlwF0YdnkD6gaU2mM8Olj6uirKo11kiNry4f4xg3i9aaYw/Q4OTlJbxC7/RAdDJFEz9WKXYhS1sV/+5DHXeUMJ3I2AvLnNcI568D/D+crxunOBLG3hLAOaju1It93eb2l9iXvtQzmkYqEfxxIo1AwI2ihNhLgGI90/oahcFVBMjIv/P6UtVXLq312lHlVwEKQrTc2rEQrIs00XD9fklsD5xA5gR0rtikz5wUco8pFtWtQj3Mqmx2K2oAaWyQhmlZtSwCxwuYN0meu4lbbcToIUTyNS+KYjqqVUfSIFQVJqbVWmP6oA1T8OjHKncuzASGoEe3Gyzo6ZhwtseTJcDFzEy3iojQtK8YcqGPsI2lfWmip/TGIJ4Zn/ww9V9wN/ALVZSf7o8JGLAAAAAElFTkSuQmCC";
const _sfc_main$7 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      brand_data: [
        { brand: brand_1 },
        { brand: brand_2 },
        { brand: brand_3 },
        { brand: brand_4 },
        { brand: brand_5 },
        { brand: brand_6 },
        { brand: brand_4 }
      ]
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand__area grey-bg-7 pt-70 pb-70" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="brand__slider">`);
  _push(ssrRenderComponent(_component_Swiper, {
    slidesPerView: 6,
    spaceBetween: 0,
    class: "brand__slider-active-2 swiper-container",
    loop: true,
    breakpoints: {
      "1200": {
        slidesPerView: 6
      },
      "992": {
        slidesPerView: 3
      },
      "768": {
        slidesPerView: 3
      },
      "576": {
        slidesPerView: 2
      },
      "0": {
        slidesPerView: 2
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.brand_data, (brand, i) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, {
            key: i,
            class: "brand__item-2"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", brand.brand)} alt="brand"${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: brand.brand,
                    alt: "brand"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.brand_data, (brand, i) => {
            return openBlock(), createBlock(_component_SwiperSlide, {
              key: i,
              class: "brand__item-2"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: brand.brand,
                  alt: "brand"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brands/FreelancerBrands.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FreelancerBrands = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {
  data() {
    return {
      counter_data: [
        {
          num: 25,
          text: "+",
          title: "Years Experience",
          subtitle: "Over 47 projects"
        },
        {
          num: 12,
          text: "+",
          title: "Features & Awards",
          subtitle: "From design community"
        },
        {
          num: 96,
          text: "%",
          title: "Clients Rating",
          subtitle: "30+ testimonials"
        }
      ]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about__counter-wrapper mb-50" }, _attrs))}><div class="row gx-1 gy-1 gy-lg-0"><!--[-->`);
  ssrRenderList($data.counter_data, (item, i) => {
    _push(`<div class="col-xxl-4 col-lg-4 col-md-6"><div class="about__counter-item d-flex justify-content-center align-items-center"><div class="about__counter-text mr-15"><h3><span class="counter">${ssrInterpolate(item.num)}</span> ${ssrInterpolate(item.text)}</h3></div><div class="about__counter-content"><h3>${ssrInterpolate(item.title)}</h3><p>${ssrInterpolate(item.subtitle)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counters/FreelancerCounter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FreelancerCounter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = "" + __buildAssetsURL("about-author-sign.m6RBSiSa.png");
const _sfc_main$5 = {
  mixins: [SalScrollAnimationMixin],
  components: { FreelancerCounter }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_freelancer_counter = resolveComponent("freelancer-counter");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about__area pt-80 pb-120 grey-bg-7"
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-2 text-center mb-40"><span class="section__title-pre-2">INTRODUCTION</span><h3 class="section__title-2">about me</h3><p>A brand today is all about how it makes your customers feel.</p></div></div></div>`);
  _push(ssrRenderComponent(_component_freelancer_counter, null, null, _parent));
  _push(`<div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-10"><div class="about__author-wrapper text-center" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="about__author-text"><p> Im a UX Designer, Over the past 10+ years I’ve created well-crafted mobile and web apps by connecting Business goals with user needs.Currently Service and Interaction Designer UIUXer office. </p></div><div class="about__author-info"><h3 class="about__author-title-2">Douglas Lyphe</h3><div class="about__author-sign"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/FreelancerAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FreelancerAbout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const shape_1 = "" + __buildAssetsURL("portfolio-shape-1.BYXc7Hv8.png");
const shape_2 = "" + __buildAssetsURL("portfolio-shape-2.D8GCeEv1.png");
const shape_3 = "data:image/png;base64,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";
const shape_4 = "" + __buildAssetsURL("portfolio-shape-4.rTsznzBp.png");
const portfolio_1 = "" + __buildAssetsURL("portfolio-1.C57JhWdm.jpg");
const portfolio_2 = "" + __buildAssetsURL("portfolio-2.B-wL-r2E.jpg");
const portfolio_3 = "" + __buildAssetsURL("portfolio-3.Bm7m9pLW.jpg");
const portfolio_4 = "" + __buildAssetsURL("portfolio-4.KG7ijMfP.jpg");
const portfolio_5 = "" + __buildAssetsURL("portfolio-5.DZa_R6Lp.jpg");
const portfolio_6 = "" + __buildAssetsURL("portfolio-6.Cq0-4-EG.png");
const _sfc_main$4 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      portfolio_data: [
        {
          id: 1,
          shapes: [{ id: 1, shape: shape_1 }],
          icon: `<svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.857 15.4446V22.1113H3.14274V4.33354H10.6427V2.11133H3.14274C2.57441 2.11133 2.02937 2.34545 1.62751 2.7622C1.22564 3.17895 0.999878 3.74418 0.999878 4.33354V22.1113C0.999878 22.7006 1.22564 23.2659 1.62751 23.6826C2.02937 24.0994 2.57441 24.3335 3.14274 24.3335H11.7142V28.7779H7.42845V31.0001H24.5713V28.7779H20.2856V24.3335H28.857C29.4253 24.3335 29.9704 24.0994 30.3722 23.6826C30.7741 23.2659 30.9999 22.7006 30.9999 22.1113V15.4446H28.857ZM18.1427 28.7779H13.857V24.3335H18.1427V28.7779Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.5"
                  />
                  <path
                    d="M18.1427 17.6667H18.132C17.9011 17.6642 17.6771 17.5844 17.4935 17.4392C17.3099 17.294 17.1764 17.0911 17.113 16.8609L15.1916 9.88899H10.6427V7.66677H15.9999C16.2327 7.66677 16.4592 7.74541 16.645 7.8908C16.8309 8.03618 16.9661 8.2404 17.0301 8.47254L18.181 12.6491L21.4047 1.78434C21.4742 1.5586 21.6105 1.36132 21.7943 1.22053C21.9781 1.07974 22.2 1.00262 22.4284 1.00012C22.6541 0.996656 22.8748 1.06869 23.0579 1.20554C23.241 1.3424 23.3767 1.53678 23.4449 1.7599L25.3435 7.66677H30.9999V9.88899H24.5713C24.3464 9.88899 24.1272 9.81561 23.9448 9.67925C23.7624 9.54289 23.6259 9.35045 23.5548 9.12921L22.4693 5.75144L19.1666 16.8825C19.0992 17.1096 18.9634 17.3083 18.7791 17.4494C18.5949 17.5905 18.3718 17.6667 18.1427 17.6667Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.5"
                  />
                </svg>`,
          tags: ["User Research", "UX Design"],
          title: "Harry website for <br /> Unique start-up brands.",
          image: [
            { id: 1, img: portfolio_1 },
            { id: 2, img: portfolio_2 }
          ],
          bg_color: "green"
        },
        {
          id: 2,
          shapes: [
            { id: 2, shape: shape_2 },
            { id: 3, shape: shape_3 }
          ],
          icon: `<svg
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                >
                  <path
                    d="M27.1873 13.4312V24.8333C27.1873 26.028 26.0657 27 24.6873 27H12.9372C11.5588 27 10.4372 26.028 10.4372 24.8333V3.16666C10.4372 1.97197 11.5588 1 12.9372 1H24.6873C26.0657 1 27.1873 1.97197 27.1873 3.16666V4.08749C27.1873 4.3268 26.9633 4.52082 26.6872 4.52082C26.4111 4.52082 26.1872 4.3268 26.1872 4.08749V3.16666C26.1872 2.44988 25.5143 1.86667 24.6873 1.86667H15.162L15.6421 2.61568C15.7743 2.82189 16.0255 2.95 16.2978 2.95H21.3266C21.6028 2.95 21.8267 3.14402 21.8267 3.38333C21.8267 3.62264 21.6028 3.81666 21.3266 3.81666H16.2978C15.6626 3.81666 15.0765 3.51772 14.7679 3.03656L14.018 1.86667H12.9372C12.1102 1.86667 11.4372 2.44988 11.4372 3.16666V24.8333C11.4372 25.5501 12.1102 26.1333 12.9372 26.1333H24.6873C25.5143 26.1333 26.1872 25.5501 26.1872 24.8333V13.4312C26.1872 13.1919 26.4111 12.9979 26.6872 12.9979C26.9633 12.9979 27.1873 13.1919 27.1873 13.4312ZM8.99974 1.43333C8.99974 1.19402 8.77587 1 8.49974 1H3.49975C2.12126 1 0.999756 1.97197 0.999756 3.16666V24.8333C0.999756 26.028 2.12126 27 3.49975 27H8.49974C8.77587 27 8.99974 26.8059 8.99974 26.5666C8.99974 26.3274 8.77587 26.1333 8.49974 26.1333H3.49975C2.67269 26.1333 1.99975 25.5501 1.99975 24.8333V3.16666C1.99975 2.44988 2.67269 1.86667 3.49975 1.86667H8.49974C8.77587 1.86667 8.99974 1.67264 8.99974 1.43333ZM5.56225 7.60832C5.56225 7.99659 5.19775 8.31249 4.74975 8.31249C4.30175 8.31249 3.93726 7.99659 3.93726 7.60832C3.93726 7.22006 4.30175 6.90415 4.74975 6.90415C5.19775 6.90415 5.56225 7.22 5.56225 7.60832ZM5.56225 4.35833C5.56225 4.74659 5.19775 5.06249 4.74975 5.06249C4.30175 5.06249 3.93726 4.74659 3.93726 4.35833C3.93726 3.97006 4.30175 3.65416 4.74975 3.65416C5.19775 3.65416 5.56225 3.97001 5.56225 4.35833ZM7.24975 5.27916C7.69774 5.27916 8.06225 5.59506 8.06225 5.98333C8.06225 6.37159 7.69774 6.68749 7.24975 6.68749C6.80175 6.68749 6.43725 6.37159 6.43725 5.98333C6.43725 5.59506 6.80175 5.27916 7.24975 5.27916ZM27.3716 10.4082C27.9622 10.92 27.5382 11.7952 26.7087 11.7952C25.8799 11.7952 25.4548 10.9204 26.0459 10.4082C26.4122 10.0906 27.0052 10.0905 27.3716 10.4082ZM24.4106 8.99098C24.2154 9.16018 24.2154 9.43457 24.4106 9.60379C24.606 9.773 24.9225 9.773 25.1177 9.60379C25.997 8.8417 27.4204 8.84164 28.2997 9.60379C28.3974 9.6884 28.5252 9.73066 28.6532 9.73066C29.0947 9.73066 29.3227 9.2647 29.0068 8.99092C27.7368 7.89021 25.681 7.89004 24.4106 8.99098ZM30.8631 7.38229C28.567 5.39237 24.8508 5.3922 22.5545 7.38229C22.3593 7.5515 22.3593 7.82586 22.5545 7.99507C22.7498 8.16429 23.0663 8.16429 23.2616 7.99507C25.1624 6.3477 28.2551 6.34781 30.1559 7.99507C30.3512 8.16434 30.6676 8.16429 30.863 7.99507C31.0583 7.82586 31.0583 7.5515 30.8631 7.38229Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.7"
                  />
                </svg>`,
          tags: ["User Research", "UX Design"],
          title: "Re-design for the app <br /> Made easy.",
          image: [
            { id: 3, img: portfolio_3 },
            { id: 4, img: portfolio_4 },
            { id: 5, img: portfolio_5 }
          ],
          bg_color: "purple",
          diff: true
        },
        {
          id: 3,
          shapes: [{ id: 4, shape: shape_4 }],
          icon: `<svg
                    width="32"
                    height="28"
                    viewBox="0 0 32 28"
                    fill="none"
                  >
                    <path
                      d="M27.1873 13.4312V24.8333C27.1873 26.028 26.0657 27 24.6873 27H12.9372C11.5588 27 10.4372 26.028 10.4372 24.8333V3.16666C10.4372 1.97197 11.5588 1 12.9372 1H24.6873C26.0657 1 27.1873 1.97197 27.1873 3.16666V4.08749C27.1873 4.3268 26.9633 4.52082 26.6872 4.52082C26.4111 4.52082 26.1872 4.3268 26.1872 4.08749V3.16666C26.1872 2.44988 25.5143 1.86667 24.6873 1.86667H15.162L15.6421 2.61568C15.7743 2.82189 16.0255 2.95 16.2978 2.95H21.3266C21.6028 2.95 21.8267 3.14402 21.8267 3.38333C21.8267 3.62264 21.6028 3.81666 21.3266 3.81666H16.2978C15.6626 3.81666 15.0765 3.51772 14.7679 3.03656L14.018 1.86667H12.9372C12.1102 1.86667 11.4372 2.44988 11.4372 3.16666V24.8333C11.4372 25.5501 12.1102 26.1333 12.9372 26.1333H24.6873C25.5143 26.1333 26.1872 25.5501 26.1872 24.8333V13.4312C26.1872 13.1919 26.4111 12.9979 26.6872 12.9979C26.9633 12.9979 27.1873 13.1919 27.1873 13.4312ZM8.99974 1.43333C8.99974 1.19402 8.77587 1 8.49974 1H3.49975C2.12126 1 0.999756 1.97197 0.999756 3.16666V24.8333C0.999756 26.028 2.12126 27 3.49975 27H8.49974C8.77587 27 8.99974 26.8059 8.99974 26.5666C8.99974 26.3274 8.77587 26.1333 8.49974 26.1333H3.49975C2.67269 26.1333 1.99975 25.5501 1.99975 24.8333V3.16666C1.99975 2.44988 2.67269 1.86667 3.49975 1.86667H8.49974C8.77587 1.86667 8.99974 1.67264 8.99974 1.43333ZM5.56225 7.60832C5.56225 7.99659 5.19775 8.31249 4.74975 8.31249C4.30175 8.31249 3.93726 7.99659 3.93726 7.60832C3.93726 7.22006 4.30175 6.90415 4.74975 6.90415C5.19775 6.90415 5.56225 7.22 5.56225 7.60832ZM5.56225 4.35833C5.56225 4.74659 5.19775 5.06249 4.74975 5.06249C4.30175 5.06249 3.93726 4.74659 3.93726 4.35833C3.93726 3.97006 4.30175 3.65416 4.74975 3.65416C5.19775 3.65416 5.56225 3.97001 5.56225 4.35833ZM7.24975 5.27916C7.69774 5.27916 8.06225 5.59506 8.06225 5.98333C8.06225 6.37159 7.69774 6.68749 7.24975 6.68749C6.80175 6.68749 6.43725 6.37159 6.43725 5.98333C6.43725 5.59506 6.80175 5.27916 7.24975 5.27916ZM27.3716 10.4082C27.9622 10.92 27.5382 11.7952 26.7087 11.7952C25.8799 11.7952 25.4548 10.9204 26.0459 10.4082C26.4122 10.0906 27.0052 10.0905 27.3716 10.4082ZM24.4106 8.99098C24.2154 9.16018 24.2154 9.43457 24.4106 9.60379C24.606 9.773 24.9225 9.773 25.1177 9.60379C25.997 8.8417 27.4204 8.84164 28.2997 9.60379C28.3974 9.6884 28.5252 9.73066 28.6532 9.73066C29.0947 9.73066 29.3227 9.2647 29.0068 8.99092C27.7368 7.89021 25.681 7.89004 24.4106 8.99098ZM30.8631 7.38229C28.567 5.39237 24.8508 5.3922 22.5545 7.38229C22.3593 7.5515 22.3593 7.82586 22.5545 7.99507C22.7498 8.16429 23.0663 8.16429 23.2616 7.99507C25.1624 6.3477 28.2551 6.34781 30.1559 7.99507C30.3512 8.16434 30.6676 8.16429 30.863 7.99507C31.0583 7.82586 31.0583 7.5515 30.8631 7.38229Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.7"
                    />
                  </svg>`,
          tags: ["User Research", "UX Design"],
          title: "A collaboration tool for brainstorming ideas",
          image: [{ id: 6, img: portfolio_6 }],
          bg_color: "pink"
        }
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = Link;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__area pt-150 pb-110" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-2 text-center mb-40"><span class="section__title-pre-2">All Creative Works</span><h3 class="section__title-2">Creative Works</h3><p>Featured projects, which my best projects be choice to show</p></div></div></div><div class="row"><div class="col-xxl-12"><!--[-->`);
  ssrRenderList($data.portfolio_data, (item) => {
    _push(`<div class="${ssrRenderClass(`portfolio__item-2 has-${item.bg_color} fix`)}"><div class="portfolio__shape"><!--[-->`);
    ssrRenderList(item.shapes, (s, i) => {
      _push(`<img class="${ssrRenderClass(`portfolio__shape-${s.id} wow fadeInDown`)}" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000"${ssrRenderAttr("src", s.shape)} alt="shape">`);
    });
    _push(`<!--]--></div>`);
    if (!item.diff) {
      _push(`<div class="row"><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="portfolio__content-2"><div class="portfolio__icon-2"><span>${item.icon ?? ""}</span></div><div class="portfolio__tag-2"><!--[-->`);
      ssrRenderList(item.tags, (t, i) => {
        _push(`<a href="#">${ssrInterpolate(t)}</a>`);
      });
      _push(`<!--]--></div><h3 class="portfolio__title-2">${item.title ?? ""}</h3><div class="portfolio__btn-2"><a href="portfolio-masonry" class="tp-btn-white"> See Projects </a></div></div></div><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="portfolio__thumb-wrapper-2 p-relative"><div class="portfolio__thumb-2"><!--[-->`);
      ssrRenderList(item.image, (img, i) => {
        _push(`<img class="${ssrRenderClass(`portfolio-2-${img.id} wow fadeInRightPortfolio${img.id}`)}" data-sal="slide-down" data-sal-delay="160" data-sal-duration="1000"${ssrRenderAttr("src", img.img)} alt="image">`);
      });
      _push(`<!--]--></div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.diff) {
      _push(`<div class="row"><div class="col-xxl-7 col-xl-7 col-lg-6"><div class="portfolio__thumb-wrapper-2 p-relative"><div class="portfolio__thumb-2 portfolio-thumb-2"><div class="row"><div class="col-md-5"><img class="${ssrRenderClass(`portfolio-2-${item.image[0].id} 
                           wow fadeInRightPortfolio${item.image[0].id}`)}"${ssrRenderAttr("src", item.image[0].img)} data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000" alt="image"></div><div class="col-md-5"><!--[-->`);
      ssrRenderList(item.image.slice(1, 3), (img, i) => {
        _push(`<img class="${ssrRenderClass(`portfolio-2-${img.id} wow fadeInRightPortfolio${img.id}`)}" data-sal="slide-down" data-sal-delay="180" data-sal-duration="1000"${ssrRenderAttr("src", img.img)} alt="image">`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="col-xxl-5 col-xl-5 col-lg-6"><div class="portfolio__content-2"><div class="portfolio__icon-2"><span>${item.icon ?? ""}</span></div><div class="portfolio__tag-2"><!--[-->`);
      ssrRenderList(item.tags, (t, i) => {
        _push(`<a href="#">${ssrInterpolate(t)}</a>`);
      });
      _push(`<!--]--></div><h3 class="portfolio__title-2">${item.title ?? ""}</h3><div class="portfolio__btn-2">`);
      _push(ssrRenderComponent(_component_Link, {
        href: "portfolio-masonry",
        class: "tp-btn-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` See Projects `);
          } else {
            return [
              createTextVNode(" See Projects ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/FreelancerPortfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FreelancerPortfolio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const skill_icon_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA2CAYAAACvHjsIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOSSURBVHgB3ZjLihNBFIb/U50eLyiMC2FEhRbcT/IGHfCO4CzVhWPewL0IA+JS8QUkGQR15wwIggpp1wqdR2hEYXBjo+At6Tqe6jFt4gTspErT+G2mppNT+VN1Tp0/RZjAp/NHQvbUKjNCAgKUYP/xEygFUQ/MPZDepNudjR0vj/7z4cxS4Pl+W4JCTElpQeMk0LpJdzvJ8IEqxJw7XPcWFuJZxFgQQKmYr12tY1RQvjI1ryvDRfx7FkVUV0QFhSBZmXmJ+SWKqG0G9PH80RUoegxLZsyhcSSflKT1BVQFpVYVEdVRHULFQJUEBQoVwwhKUBXkFDdb9hJVQVqK0lp3UBWINtWBJ28jGUSYPwndvreRJ3VG1JI/KeZHag5FM8gFHdhIkkypJuYjKh3t+EXZi6ieiGrwv6w6kypaN0RMr3g06X0fpL8pRSsyXKaSB+cUvSyRjxUh2boIiX5/sTYpYmPfm9STIhS5pR3AlTu048stPe+HimqrTOI8mYPtp5SaZWDOFnG3s2OesUnaFzmoEdqybSGm5MrDX4KWnnJAPtoEDv8Qluj+t+bW2T3J8EGRQ+3LXPcU4lnEjHL42fe653NcQowhUP6u+KDEjAkyKyNb1JVNsjJpZmWgal2ezuwt+hKz9PRLUAjyyF5MPpnP04opRJG/K3eM6v4lNtUUwJJDLwZW80gChnkRsCPHSORZz2MqUhG7MWhS1vbzELtzjE7m4f/aMRIlsERagzhGduMYOdPW80iliWMEOnAAk73zHGTYVK1HFEmlRbBk66QfSWJHmBFje96fpm3HOABach5ZmzPuU4tmM3kpS5M1g1yQrFIiW9e0FbV1VhJbD5pTikpJYoYdvyj71gPqaQ1rx/ju1EIv61OpecwWi/1omJjhs4mOsS39TU7MFUVYLnvgjfqhIXl/07RCipbxcx7ZhYSYIs2DdZN3v8dMFLT71VqoauL0xNOUvWP83LhBcMCYhd0drwUEr025SWM4+YRZBfnxrbqCnvdN2rYgszJVEGPIq0y2qRJiDLW9r286cYyuUKhRde4YYQS5cHoOMTlUOUGVQjm67ejBEfKrw97pycHhTpAm1YEt2WATjsjb1Z74Zpdmv2RIpLEegyPypGZks94xphpZEw7JBX1trCV9TH3HmJoYEwuHFGXfb1zvybct7/TkvSYGjploefbGeX/L7xgxdHrmHlnuBjV4/WvjRoS/xA8UdVDK6hPWGgAAAABJRU5ErkJggg==";
const skill_icon_2 = "data:image/png;base64,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";
const skill_icon_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP9SURBVHgB7Vo/TBNRGP/eSUyIHYyLTKSJTAxSBhGEAU2ATtJGR0xxgkQ3Bl2MUSZJjDpoTBws0VEDbFUS7YCBqInVgQmwYYKFMJQBo32+37XX3L1796+05I7wSy69e/fu+n7v+37f9727Y6TAMPWkGGMZsZsQW5xCAE58lxHLl3l5YZG+ZeXzzHwwRBcSGtPmKCSDd0GRcXY5RytFo0EzdoZP9GYEiR8UfhJAnDP+O0m9GaNBt4ho0E9QBCFcrVu4WkG3iCDxmSKKqhSICV2Mi4PXFGFw/jetMaaNUsTBqGVcuBYfpKiDUZcmYvNpij7iGh0RtFBIMdQxYjneLm3Tr62CY//QEpkauGs5XlzL1U/kfFtCbF2WttKfEs2vvne7TJ/Ns7E2aSAfxKxuUbPgSgR/nO6cplMnY5b2jZ11x9kBAXk2cZ+3hVlqJlzFjgHMrb6ztY8lMo7XqM69/Pqcmg3PqDUn3Eh2iYrLJWx9YY2hjqSlDb69vLlEzYYnkT2hicdLj2ztUwN3bG2yNXBts13KgK+oBT1gM1sBs5/qvFYTvsoaKmuqAA1eau+3BYgg8B1+YZUXV19ZhD+WGNejEWZetlBF4FnXeyIi4h4qNw0K35ldJfyYIJUWVsGA5ME8/HTP9X4TPbdoJvm0ISSAQCWKylVSnddpsue2pQ0CX99Zc7wPrJcW1zUSgTI7XAih9P6V6VobrBI701E79soZCAiylgBocHnzi55wAVUwcUPgEgWhVBa+GSDhJHBVQDCukfUUlEhd1a8qSRpwi1LQkr10yXkGBT+oi4isCTMwk3JJY6CvfcDW1qg8E5gIopRbvMc59FGhTboOemhUIRmISCUJWqMNNLNXFagB9FGRdbJUIxCICCKOPEBEMVV+UYlVJox+jSLnm0ifKCFUBWElUaoLS1kTqtwirwTrhW8issDN+cKpOJwU2ds84xsKIihRDlJjGfBFROVS8opPtRTFNTdMFfHHal1mBtxrJvlEd8VKqdOlWz8oPBMiBoNZM8OpIIRVZpLWRAnhgzTcCiTeiD6wlPwfcFtVsvQLT4uoVnxOsd8o92VMmAY+LwJDM9YorkQgRHmWYA24kRNUg4TwU6bcAmtiWeA3h6DfunhO4AY2wi5yp5MYgKwNCNatsgUQrWJSWEXyUy15K9Gtn86ZCk+4IPobDzm8/s+TSJRwZB6ZHhMJG46JhA0gUqTIg4u3upwWKOrgrIBXb/MUcTD6N6vlaCUv9vMUVXDK5uh7Xhc74+wmRVMrReFRD7BT+6im+hkHvoCIUzRg+bCmFn7RgBOc88N5D3AQcHq2z1u7zV8HMVU/WEf8DHIqj1J43sMXxfZzn1qzecrvyif/A9B5uRpoZM6SAAAAAElFTkSuQmCC";
const skill_icon_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB7ZpNTNNgGMefdqaKYZmMkACCLhC8QOJwaDz4AQe8iKIX9QYmGOWoiQcvJl69GE9oJBG8KCch4kUOTuFgwoeY6AUCLlEYgYAYFjBoV99/x1jbfbR1lrWEX9K07/s2Xf/v8/E+bcdRKsoDF4hcLcSRn7V8ZAukZZK4INv30bfhLu0op2rt9/vJJbwk29x8WkK0vt5Ac+OheAe/OXTgWAsT8ZHsLwL4SBC+yve8Qcwixf7YgBMRpVqaGR6PWUQQ3pJTcXEIBWaR8qOtxHFPyclI4kVmEb6ZnA7nauWJi9aT8znMLMLtI+fj42mbsCPEbuwyc7K37iwJBSWqvt0FpfJeXFuhP79WaG12ktZ/hNl+grYSU0IKA02UX3nE0LkQEx54Qksjr2krsMy1YLmDl+5SRct9cu1xk9VYHiOe6tNUdv4mWY0p19IC91kc6d9swwruykBSHCG2Fkf7KTI1RlaRnZClWZob6EzqL25so5LGa6q+ohNX0grJKz3EtqrNtrgWIZElDjPCsxKSDohzVwRUicFdkZwkYCkI1lpQyfSz2/Tz83vSwxIhYDU8oRLiylMHPATAcnoYTRQ5WRDzmXWMiDCDZRbZx7KVEiSGOIXMpbRj80PPWczNyW3BWyy7pkdzjUz8dyFwhZIzbUl+v6IIXGGjGlCOLQz2qPrQxjUQ+EbISojgLaWik5flH8OPolzx1JxK6ddLo4k0jXJGCSz0eyOVKy2nPNYjOyHs5svO3dI9b37whSqVIhF4atRug5hBFsN5KG3MiACWBztEzLx6oOpbGOpJeaOYGIipvtMrlzeZ0rIWy4REpkZp8lF7kggA18JYplmHoKobHYbFcOwll0QGqbreoVobtCUK2ogXuAdWZiPoLYq41uTjdt3rWFKimAFlPjasLRBVWNekGsfEoYTRe76xbB3JBLKa1mKR6TF5g1W1dZorL1/3mjkRgmcUCFn+8k52HWWscJr36kbJiRCAVTu+ckMUYgszr12DINJIFZwzIUpw8+mKQ6RvI+REiHZlT3kOs1L4TSdbc4wJMZV+4QrKByCY/V9eLmD2UcqgsMSx4E2kXmSnVbah1jKawoEpIXZm502j3dgRYje2lZAQOR4JX3WlPnI8PBMSlXrJ6UTFbp6+jwTZ5+kgORauCxpiwc5xV8mZsRIinruHg0Tx7zvuo2gU/4DwkTNgIvgGCn0IoZFIv+jAAFE32Z2o9JD4vbVxESD14xisI4r1zGzNtvkOL8H1xU/E53dRKLisHf4LEzpk+hqk4NMAAAAASUVORK5CYII=";
const skill_icon_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMeSURBVHgB7ZoxbNNAGIWfAwsIpEplKWIoS1nTZgIGHCG2RowIltKFSiwMsNONhQqxMLBQJsSIwoqaLjBQGjM2ExIIpkqRQDCV9F4cp+fzxfGdHclX5ZOi+M45657v/fdf7POgoQr4J4AHPXHoAfMoB13xaYk+vdsFNtWTnlwQAqpCwDNx6KPcfDsA6oH4jiqGQgYitsThDNygWxFiPgMBC30hQsS8ENGGOyIiumJkFjkyFZYcGwmZGdH3VzzwBoG9BYcRtqpXhIgVOI6YyVZorSrcx/dqfUHuU8Ex4dgIOYkScH4WeLwafv/cB9bFhPpr3+wahcTI3GzYCZUvHWSi+SS8xrDdHrC2ASMKGZG1BrB8JVm/8RZ48yG9LQXMKTehdgnGFBIjc+f09X6Gif3Pv2Sdqa1IbiG0VG1Bf4539uzp1Ob4/Tc5as2PMCa3tZYUEeyY3Pnly+PtRQsyLmixzvfssSWTe0QaV+PlVhAv+xnXDWxHwTYiSK4RUW1Fb7MzDSnwaS/e6TTfP70fH0WOCkfJhFxCVFvt7IWdUO1FYS+bo6/jF7Day2Ut1VbbA1u9/xSvHzUZFIm1EN1sFcVHqx2vp70mLcZaiGorufOdH6G9ZGySnAnWQhK2+np0TBHq7KPL/EViJURnKwa6jGqvtMRZBFazlmorTq1qJ3UZ3V+0zxPjsBJy50a8zDyxvjq+HbO8aX7IirG1aJGFC7CCozQpexkLuZYzedFek8BYiDpbmUJ7TQKjGNHZ6tGL5EJR5uEt4Pb1o3Jkr6KD3mhEdLYa1yF1GiaTyClGQhJL9nYyg6tQqPobLhLH/eEyJbMQna3kbJ6GuoikCNuZbxSZhejsoGbzUejsda+BQsn8OIgBKj/t4EODtCBXoZ3OnNK3TzuXlemz37IxFVI2pkLKRqUnvXR3mIBCtuE+Ad/qbsJxxOvp1/2dD7XwPbsPB2Fo7AIX+8F+APAfdxeOIUR0/wN1HveFDPZysMIZMZGIaIfQcPrlLhtuUHFkFmsNRAyXlp7uV0vAXXHiZo87Ckqy2YY3WPQlEJ/nO0KIev4QQ1XP/GgEBtIAAAAASUVORK5CYII=";
const skill_icon_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ3SURBVHgB7VprSFRpGH6+MzZua7Xa1lruJdvaDXc3GqlFVmS32SAoCCWxoj8VRBQUBEUEQY70x58JEdGNiKL+ZT+iIMqKiu5NZBldZ+ymFmkXsRk9c3pfv8bvjCbUd2ScE/OAzPd+73wz53nvxzkCvWD5lk5HhqcUMasMAvlILQQBEYQZqRLBPSG7QsQXlm9xNgxvJe2shhsgsBldUSbUJkV8JJHhrYMFH9wF8k7Uz2SMbpE94T4SDB85oJIXgryRD4/3EdwMEfMb8GRWwu2IiTKDMwRuhxClnCPuJwLkG/hKkCaSakgTSTUMDJGYBRT8AvyaJ9eDgAw4BV/4+oXAvOlS3n0U2HKITCSQTDj3SN73QPm/Sq74Dxg2FMmGcyJvO4AXbUp+9QboiCLZcB5a7USkej+Flh8wKcy21tLUE0OyIaypywYmO+OfktzU6IG+R7hCjR/Td7/+IfCSwstfSOR62egm6VooDH8cDcz5B/DS198OAyeuO/aiHhG+wBWldLGfmDcr6K5gMhWA6mWJ+51dwNyNwKKZwMryRM8dvQhs2OWo0ukle6YXKCrou9/YDNx/Dvz9CV24ibxQDKwq7xt+s4qA2UVwAk8gb2oAX4qRI4DX74Cz9WT98URsiNw/fhU4T3vDqfw2UMi0v6cQHCt1kU5g0s/AjiPAgROkiwB/jFOf2cqfdxO60AstLrf7jgO5I4E1FWq/PiRfT9+Qr6ttuh9ygPlVQKhJyhcbgOI/ZR9icO/hkBV64eWsj0z7XX1xlwlcv6d03PF9E5R8khL6UZOSI5Qz7zqU/LpdmwTDGRF7aLCln75Ucm6ODKU4rt1NzI0xpB+Xq+RwE5xAnwhX1ikTlXztHlQzIfhIN8QWuVfuJJ6fNknlFofUuXo4gT4RtujEPCU3hBL1dm81tshqZkfhb7azVBjCLXACfSJs8YyPFmeLcvLG4SVLF09W8mXyhscWV+y4Epv+wm2pH5E1CMn+02i1fkLWfNaKnotc8D8wYazS3wolnmUd51AcDY3y3Jp5wM610IH+iGKP/6GZwCjqLdlk0bISKrN+pTNp9Aje7/8s4xvyYMlfsilyWdeAPpHHtpgelU1jRjX515CV6ww1thmF6n2PXySevftEltvvsqRctUSW69a3wME66EA/tOrop4pjl9RgyCQ41lfVUOcfJjs5/3F+9B4I+cymvTRctqmzYRpv1m0Hml9BB87GeLYi9wLOl6dk9VCzTNac4egpxXyTFennRotntgLqNVFqjg+e9/++z8DA3Y8MMtL/Dko1pImkGtJEUg1pIqkGgxpwCK6HFeRfdQ/D9TCIiGHVwu0wRZUhruw8RV6pgWth1YjgtpBMdrMzgO5HiFyHIMysAC+6iXQ/KmRG/e7yDF2r+a1fBDerx5wS1L7l+fDEArScglR7KoIrrBCHIcxamRIKHwBAfEkHjgQJzgAAAABJRU5ErkJggg==";
const skill_icon_7 = "data:image/png;base64,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";
const company_icon_1 = "data:image/png;base64,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";
const company_icon_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASaSURBVHgBxVlNT1xVGH7fc+9QihCnsbYl6eISExMbjaOlpn4kvQPdd6pNjHEBrDWBrVHDsECXHf6AAyvSRAKuXAjlEl2opXbcqImLGU0UK1oGKeXj3nte33OZITMw92OmA/MkhJl7nnPm4f14zuEMQoNYMS8bunBSBPgiCEgAQZwfG+VxBCryWI5fFnhsyZW21W3lClAnsB5y3kzEO0XbMCGZ/NaE+mGx2Kkzt+9MRp0QSWBZGKAc4ajE4fGhojoWRWiowFWz1yQNs1CRviai4Lp2Mij1Imj26tXeURa3CEcjTsHQtNi9+/0XU34EX4F/91/KEmEajh5xBBz2G6wpcLXv0k3+NQjHAAJumoXlpN/4IYFeWhFGoLFPK4JqgMh0mDq7cGcwiFPVJPf7X0mxf81CHYIkwhTbzty205nrsaxieShvmvEObcPkGPCaMAANiKsSuGImVMFGawgWRoImHjmdmUpRflCmLjQ3XRYaVVyVQFV3UVLLjVOQUrA1fFuAOqG6lT/QPLNwN3IJeQK3vgSD8k/lH82fB7neFkTPbbodyShRaxa8JhG6Phh7dh263v0VtLNbNYkqcq4rrh+nOAUvgs68luctzCg/3P7mHGx93V1FdJGS3fPLFhwzdPsr3aQDjdH+xl8gntz1RJZSPtkKcQrCBUzUGmh74YGXciV014UJaBHQntfY99B3L2RfLOhX3R6IiL7xh4M86wo0BbSk82JGEEUCfgH1LEnSRBQD0ARw6SVUFxtBJMndCy0CHyLiSmDgARSlLEDLQIYIoyBCM07QDUMJPFbjrRcCkYohjAS0DkVBBLkgxoZsuwYtAndxQbgklvwIK24HvP/fa0bv9A0Toi7quCPS1nqi/HB9WyGr/aZrQDUjuLRzDsYfvgwbFONOoVGAsMX2YKVPqZKJVNd945uGFycfIKHlHRbseX0NKuwms/k83Np6pppNmFx+53MLmoS9HQeyQRwJ8JJnM5L29lqV0vfWXz8sDpTdUDYxnTKgCTA/XTN4xdEgjqo/68POnCewTXcy3+8+XRwomvCDfdpvAt/FaLPNEClIv6lMOIiDpZLyBGISisPrr0549RYEgkQMtcVGRZrptXjfJxuzXC6pMK607bF9gQrOtswQn1zCJnqRRC3fe+vNUagDvdMpc+f8Z/dI+zdUHGOSm62gXmD1ImwnSIsQETy5wIVsIblTzjbkckNz+92byKbiejtfywlxpRQxz/CFcxqe+OMDQMe3lApk28maAksi0yVbaQR8J0hF3LsBC9zDTzxIwYm164ee8x88xM0xWX6vHST8OfOT1f3WBWWijWxx7SVx7WFE9+QvIGP/gL71HMejVPuSxhY/6spU8rRak1dmfp7rvnHhFIf3Mhwh5Infwen6DmKbFznlJ8duf9yVPsgJvB98zHRHB+EYbwLpWkOhF5iqcQhlllNnQJNBaktEGLr79sycHyfyHbWKJgsdaJZQkjDh7rjpys6vhbou0ZVBCxAmHyLVhWPdTaQixgeACWfbyYQJa0hgJfbFCrymvoJQ/4FhhbUo0+dos+VAzpX0o0CRa+Sw8T/Vkd/rpyQ/CAAAAABJRU5ErkJggg==";
const company_icon_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHfSURBVHgBzZjNUcMwEIUfhAu3dICu3EwFiBtHqACXkA5iKggdxB0wVOB0kFw5OVSQcIOT0WKZEYl+jLC9/mbejEc/9vNKWskG+kcozZXWSgVGwFRpoVQZam3sDP0gtAlxUP4ORoRSid+RapSCEZcpKhdgIoXdFCkDI75osZFghENIpDg2RblLIIJTdIcwrvdKj0pXSltEcNKiDSVKqR9M1xutLY6NSV2+0eaofaJ1odu9GffYIwKJOkm6VhnNnTnsQ0V9l0o7T/9KtxFoCb3lc+CGtrm0aGnGpkXIlIB7yfettQ7KqEx5k/CS2ZQ1taTMpnI4WDOaKl2mEkZTJGEzRZn/DnzkcOwMZOwafLy4KsjYFHysXBW0V1bgw7lXd3m66BRuY85pRMaijh4dkbgquI1JX2UOvuRKRyTrcFLENuCDTM1dlRK8WxLpweU65tTZtWamqYnSh9IlPCtkIG5RB+kVxoKU4I9YIzqC/STYFXjThsn3YpwYBecI5JWBuMdBkMawCIrGjBkxWgSfqCchFzfwTCmu8/8SAShtDD2kJVr+KpgNbOxPOTQfyFSGCPqebxkioRTyFLh5gXro6TNQamXw/8L6lymT1HjQzjAT+sISqF+s0P1K1L+4ZKAfvgC1hoLZWVJLyAAAAABJRU5ErkJggg==";
const company_icon_4 = "data:image/png;base64,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";
const _sfc_main$3 = {
  components: { CareerItems },
  data() {
    return {
      skill_data: [
        {
          skill_items: [
            { icon: skill_icon_1, num: 98, text: "%" },
            { icon: skill_icon_2, num: 86, text: "%" }
          ]
        },
        {
          skill_items: [
            { icon: skill_icon_3, num: 92, text: "%" },
            { icon: skill_icon_4, num: 73, text: "%" },
            { icon: skill_icon_5, num: 65, text: "%" }
          ]
        },
        {
          skill_items: [
            { icon: skill_icon_6, num: 50, text: "%" },
            { icon: skill_icon_7, num: 67, text: "%" }
          ]
        }
      ],
      career_data: [
        {
          delay: "130",
          icon: company_icon_1,
          title: "Amazon inc",
          designation: "Senior Product Designer",
          year: "April 2016 - March 2020"
        },
        {
          delay: "150",
          icon: company_icon_2,
          title: "Google",
          designation: "UI/UX Web Designer",
          year: "January 2018 - March 2019"
        },
        {
          delay: "170",
          icon: company_icon_3,
          title: "Apple",
          designation: "Internship Graphic designer",
          year: "April 2012 - March 2016"
        },
        {
          delay: "190",
          icon: company_icon_4,
          title: "Dribble",
          designation: "Ui Designer",
          year: "April 2008 - March 2012"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_career_items = resolveComponent("career-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "skill__area grey-bg-7 pt-145 pb-120" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-2 text-center mb-65"><span class="section__title-pre-2"> Skill &amp; Experiences </span><h3 class="section__title-2">Skill &amp; Experiences</h3><p> At vero eos censes aut reiciendis voluptatibus maiores alias consequatur. </p></div></div></div><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-5"><div class="skill__item-wrapper"><!--[-->`);
  ssrRenderList($data.skill_data, (skill, i) => {
    _push(`<div class="skill__item d-flex align-items-center"><!--[-->`);
    ssrRenderList(skill.skill_items, (item, i2) => {
      _push(`<div class="skill__single text-center mb-20 mr-20"><div class="skill__icon"><img${ssrRenderAttr("src", item.icon)} alt="icon"></div><div class="skill__content"><h4><span class="counter">${ssrInterpolate(item.num)}</span>${ssrInterpolate(item.text)}</h4></div></div>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div></div><div class="col-xxl-7 col-xl-7 col-lg-7">`);
  _push(ssrRenderComponent(_component_career_items, { career_data: $data.career_data }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skills/FreelancerSkills.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FreelancerSkills = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    blog: {}
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog__item-2 white-bg transition-3 mb-30",
    "data-sal": "slide-up",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="blog__thumb-2 p-relative w-img fix">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.blog.img)} alt="blog img"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.blog.img,
            alt: "blog img"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="blog__meta-2"><h4>${ssrInterpolate($props.blog.date.split(" ")[0])} <span>${ssrInterpolate($props.blog.date.split(" ")[1])}</span></h4></div></div><div class="blog__content-2"><div class="blog__tag-2"><a href="#">${ssrInterpolate($props.blog.tag)}</a></div><h3 class="blog__title-2">`);
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
  _push(`</h3><p>${ssrInterpolate($props.blog.sm_text)}</p><div class="blog__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-details",
    class: "tp-btn-border-green-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`read more`);
      } else {
        return [
          createTextVNode("read more")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/FreelanceSingleBlog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FreelanceSingleBlog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  components: { FreelanceSingleBlog },
  mixins: [blogData]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_freelance_single_blog = resolveComponent("freelance-single-blog");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area pb-95 grey-bg-7 pt-175" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-2 text-center mb-60"><span class="section__title-pre-2">Articles &amp; News</span><h3 class="section__title-2">Articles &amp; News</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((item) => item.home_freelancer), (blog) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_freelance_single_blog, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/FreelancerBlogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FreelancerBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-freelancer",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Freelancer - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FreelancerHero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerPortfolio, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerSkills, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerAwards, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerBlogs, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FreelancerCta, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(FreelancerHero),
              createVNode(FreelancerBrands),
              createVNode(FreelancerAbout),
              createVNode(FreelancerPortfolio),
              createVNode(FreelancerSkills),
              createVNode(FreelancerAwards),
              createVNode(FreelancerTestimonial),
              createVNode(FreelancerBlogs),
              createVNode(FreelancerCta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-freelancer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-freelancer-BjwVKPIN.js.map
