import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext, toDisplayString, createVNode, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import layout from "./LayoutFour-Bm3TGxAw.js";
import { _ as __nuxt_component_1 } from "./MouseMove-CNO7BuBA.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { A as AgencyCounter } from "./AgencyCounter-CiZWE3sT.js";
import { I as ImagePopup } from "./ImagePopup-DYm5hHIZ.js";
import { A as AgencySliderItems } from "./AgencySliderItems-BOPI6xWQ.js";
import { a as agency_port_1, b as agency_port_2, c as agency_port_3, d as agency_port_4, e as agency_port_5, f as agency_port_6 } from "./portfolio-6-C9VyC7tr.js";
import { a as award_icon_1, b as award_icon_2, c as award_icon_3 } from "./award-3-DFy9LnO-.js";
import { A as AgencyPricing } from "./AgencyPricing-BnNNhlQr.js";
import { A as AgencyTestimonial } from "./AgencyTestimonial-Bfnm8e-Q.js";
import { A as AgencyBrands } from "./AgencyBrands-DAitA-64.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { A as AgencyCta } from "./AgencyCta-By1nB82S.js";
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
import "./HeaderFour-oRVjEqBS.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./FooterFour-BdFMULq2.js";
import "./logo-MlJCTsTl.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "parallax-js";
import "sal.js";
import "vue-easy-lightbox";
import "swiper/vue";
import "swiper";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./user-6-DCzgwACr.js";
import "./testimonial-quote-BDuefOco.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
const slider_img_1 = "" + __buildAssetsURL("slider-img-1.DwbSnVvR.png");
const slider_img_2 = "" + __buildAssetsURL("slider-img-2.5WyLvWZD.png");
const _imports_0$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBPZCvTgNBEMbnm4U2afnTpKqnSCCVpOEIGAQOh+YFeAI8IQgsD4DkEXgBBLJncFwQFaTncIijt/N1d+/SETvZ2W9+881Cuni+WkyGo/98Z5/j4e6qvzdyy8GgLs/vZmV813g8Xnzn5pprE2YU6wscG64ygpefL0WehA9nP9OQckIoziW60SNlBVT1ZPE6n+hfI9NYBAUakHGIdnYUShOD9exUnWcmEkhUa0kmm/CtN0DGakAda0GH2KBUirrOvo+ZYUxPYf53QwjvYRDMfLBiaIsW3VfqtjmPnbBA8omQWGm5Lsjelz4VB1XoKqDhU9LW1rlsVzKT4vBmVqbb/cdRQfLdN6y8RYmrAS630H87vs2LqFkDbzp2ECSdSJ4AAAAASUVORK5CYII=";
const _imports_1$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgBnVQxTxRREJ733t4CwjWCBVTXGIQcxgAF6hV2JCTaEEj0B/gTLLShNiYWJhbG1gZDgzZWhgTFwosJXEDRRMQEjHCKt3e77Htv5jnLcRckCHd8m83uezP77cz7ZkbACZguFPwvSqXbnPMjIfTdvr7icf7ifyTrigYcyB4hofuQOXbkvmmnPt3r7988kfDh8nI3enQNHKSdIAFOEigAwqov8YWUPJFvb7X49fvCo7Gx+EjCByuLQyjlUO3DBKhkjIRl/l5DCs46FC3IC6yaARHKAaRmH2ez5WTt1cimVj5kQglDNSoSLpAytVRcXft8MII7H+fTTp0ZJHK9mGwo6JAYjfLbTD3CKT4z4+O4c5R2AA6N/R2tb704SHQYtxffDsiUN1LNBgSHkX/aN5KXyUapzWZ20aZjIqgYrMBO/Oo4sgRPLl5ZCox9FyGJEA3EiAMThWl/j9BozEYcWcgHggrf38/lAmgAz5i0DCYIOcYKkG9td0ZOcLoRmq4IjNhVBD+xfQ2aAIuzmqQSslCRsj2e0jtdoS/4H9IR0q/n2axuhrDkyW1nE0oJTkCHp1vJsaRcZyTQQQxN4g+g9iDRmwuVpPCslGVNtmoVKg1Ngqve392vWbBWy9kLuYArtxiywhHhGjSJyFYyrDAkglY8sVXvlKvz8+k3DapbQ3/hdUdoolv1rmrVMwJOiX6uuZJuv47CdSZrI2hj+9KNlx6cAuc4sh86GHVOd5KQLCqJVCTnElvjhBxRS8XL+AK7QlM6z226NyQ4W247kze5yaApQk97l8ETvZWk/cns7/LpOVqA4cmlul+jhJbnowV0PBr3qo47dROcysPw+D9DtvGUIzUHLTHPSxWAwE0YvLlxlNtf6FVk+3KIs08AAAAASUVORK5CYII=";
const _imports_2$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgBtVTNbtNAEJ7ZjXFTqeByQSBArhCRegAcTj0gJVx7gT5BmycIfYI0T1D3CdIbxwIHuCBqiQM3UiGkSpFQwo9UqRwSfkRUx55h1lGRgP45cT7L1nq1O9/OfN8swATx+eug/KkbPTRjhAmg3WZHn6eaQqjKi0KyloOM0doPPcCowQweSx4kc4joKsgQH/bDqgbYZjAkwDScDkII65lktLvXdxF0gxhLEh6V1EuS6QFQ/erFcxtmzdgavf8SLiOSrxCdJL4oohF3FEVLc5fzncN1I2fUNILrcJ2ZVsw/y0OQkPg3Llmr/64fiehtu19i7G9KYBEZRY7k08GYKoUrdnDUnlSlaza7TuTYNdlUxaFtQUu9pGwbUWSvFeewd9zeM2e03ep6B9puALEngUENj9kjUCt3rtlPT9t/Jnu/bv2qWmi9IiIPOJmSNhHbMhaL108nMTgxoxfNrpvPW9J8VDZlMhyE3IMY6ws3p31IgWOJXu7+XEYmn5mdYeMZLWBHDQZLC/OzHUiJ/4i2RPBpK1fjmB4ZqzAmzkVW7N8rzKzCiPiL6Pm7HyW5nTaZYpeVGhIwfURUlVJhJoAx8McMz5rf1mOKAyJ2ScQgZpQ+8b8fUPH+/HgkBrnHb/bcKXtqS07uoUkAk97qEVNl8daFJ5ARlNZWWa5Z7zAL8W0QEhcXb89mRmKQi2Md5DR0ZOwIWf3BXSeVbVPDuA0miN+vAt/8ufNdZwAAAABJRU5ErkJggg==";
const _imports_3$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKqSURBVHgBrZRNSBVRFMfPvTNvptQnpBD5DFz5FuHOla5cJUHYImoRWKRLq01BaRJtLQuS2gS1iD4soUUIkVEtgly5eq1yoRC9B8mTevPUdz/OPZ2ZF33I84v6w8wwlzu/mfM//zMArPmJsyH8Bwl6P5wFQz1o3DIZm/d9twClL0VxfErDDiXo7aVOROwE5wCQVxyfDIBHlAdLBVCVvOi/W9ge7N2FDtCiGwQsGq2K0noZIGoBdD/BjsFSAWIx3gOl1YI486BYC+YDpjSiBs86FfRNzPHaHE0cCqH1wD6LttU5j8G6mdczTrsM+AHYO6cja2A59HEBxFpeDE2Vq1/25nwblrHXE5QXfbema72R7g2kFXotvCfjjM0IQw3xurSOHNsjyZU9m5rx4Xul7HkpfkIEG3oxeD/iS3x8SuC3h5pBRc2GqId9ZTdc2lidluDVa+4km+8C2K72fo24adnYTyBH5PzZ3VcnF6U4ci2KjUaFjdvhLI0NpHHRP+qQMgQUVSB4Hl55lEvKTnYYyZkiomfHNv06ujnY1Cj0YYeCS6KoJFemG0d+d9avmoKKgxvAajqehJphVdf7O4xZ6xZcmSTMLzSUXrefe6n+3FOFWShzqWkI/LhL0XqQHj/VKTnYca4tuo91o08/1HphArPWaInEWQv/KnOe87ZfNXcBmmwMIiFm60Ync7CBEpiHpASHXVn9a+Bjo/cYfZARTc6CToF8JS4/3HSsEhgZiIgHU3Jekns2Gp3q5fLT6FwU+CvT4uKLCLZQAksJUsbG1mFIN05m0VW6uPUhJ6jwuf7bzHqjN4UplFpyLYGR7QZcB3eW54xyu0aezMIOlMBCsxbx83F2w/hXFBsdDD/OwQ5VjUaKQ1vhgQVSnpMzWxm9pWj8RNvSWF8a/kE/AA85dv1psGgKAAAAAElFTkSuQmCC";
const _sfc_main$7 = {
  components: { MouseMove: __nuxt_component_1 },
  data() {
    return {
      slider_img_1,
      slider_img_2
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_mouse_move = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area box-plr-5-245 slider__height-5 d-flex align-items-center p-relative z-index-1 fix" }, _attrs))}><div class="slider__shape"><img class="slider__shape-5"${ssrRenderAttr("src", _imports_0$5)} alt="shape"><img class="slider__shape-6"${ssrRenderAttr("src", _imports_1$5)} alt="shape"><img class="slider__shape-7"${ssrRenderAttr("src", _imports_2$4)} alt="shape"><img class="slider__shape-8"${ssrRenderAttr("src", _imports_3$3)} alt="shape"></div><div class="container-fluid"><div class="row"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="slider__content-5"><span class="slider__title-pre-5">Digital Experience</span><h3 class="slider__title-5">Digital Agency with Excellence Services.</h3><p>The 3 golden rules professional graphic designer don’t want you to know about.</p>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/about",
    class: "tp-btn-blue-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`More About Us`);
      } else {
        return [
          createTextVNode("More About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="slider__thumb-5 text-end scene-2"><div class="slider-thumb-5 one">`);
  _push(ssrRenderComponent(_component_mouse_move, {
    cls: "slider__thumb-5-1 layer",
    dataDepth: ".2",
    imgSrc: $data.slider_img_1
  }, null, _parent));
  _push(`</div><div class="slider-thumb-5 two">`);
  _push(ssrRenderComponent(_component_mouse_move, {
    cls: "slider__thumb-5-2 layer",
    dataDepth: ".3",
    imgSrc: $data.slider_img_2
  }, null, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/AgencyHero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AgencyHero = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const agn_ser_1 = "" + __buildAssetsURL("services-1.Dg_UeG5Q.png");
const agn_ser_2 = "" + __buildAssetsURL("services-2.Deq7hgfU.png");
const agn_ser_3 = "" + __buildAssetsURL("services-3.B4EbnXsq.png");
const _imports_0$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgBnVQxTxRREJ733t4BwjWCBTReh1wOY4AC9Qo7EhJtCCT6A/wJFtpQGxMLEwtja4OhQRsrQ4Ji4cUELqBoImICRjjF27td9r0385y94y5IEO74Npvd92b225n3zYyAEzBTKCS/KJXqcC4ZCqHvDgwUj/MX/yPZUDToQPYJCb2HzJEj90079eleJrN1IuHDlZVe9OgaOEg5QQKcJFAAhDVf4gspfiLf3lrx6/fFR+Pj0ZGED1aXhlHK4fqHMVDJCAnL/L2GBJx1KNqQF1gzAyKUfUjMPc5my/Haq5NNr35IBxKG61QknC9lYrm4tv75YAR3Pi6knDozROT6Md5Q0CUxHOO32UaE03xmJokTzlHKATg09ne4sf3iINFh3F56OygT3mgtGxAcRv7pwGhexhulDpveQ5uKiKBisAK70avjyGI8uXhl2Tf2XYgkAjQQIQ5OFmaSVUKjMRtyZAEfCCp8fz+X86EJPGPSMhg/4BgrQElre9NyktMN0fSEYMSeIviJnevQAlictTiVgIUKle3zlN7tCZKC/yEdIf16ns3qVghLntxxNqaU4AR0ebqdHEvKdUYCHUTQIv4Aag9ivblQSQrPSlnWZGtWoVLQIrjqk3v7NQvWajl3Iedz5RYDVjgkXIcWEdpKmhWGWNCKJ7YbnXJ1YSH1pkl168gUXncFJrzV6Kp2PSvglMhwzZV053UUrjteG0GbO5duvPTgFDjHkf3Q/phzupuEZFFJJEI5H9uaJ+SI2ipeOiGxLzCl89ym1SHB2XLbmbzJTfktEXrauwye6A/i9iezv8un52gRRqaWG37NElqejxbQ8WisVh136hY4lYeRiX+GbPMph2oe2iKel8oHgVswdHPzKLe/6S5k/Egg9CQAAAAASUVORK5CYII=";
const _imports_1$4 = "" + __buildAssetsURL("services-shape-2.BYQg5b__.png");
const _imports_2$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBPZCvTgNBEMbnm4U2afnTpKqnSCCVpOEIGAQOh+YFeAI8IQgsD4DkEXgBBLJncFwQFaTncIijt/N1d+/SETvZ2W9+881Cuni+WkyGo/98Z5/j4e6qvzdyy8GgLs/vZmV813g8Xnzn5pprE2YU6wscG64ygpefL0WehA9nP9OQckIoziW60SNlBVT1ZPE6n+hfI9NYBAUakHGIdnYUShOD9exUnWcmEkhUa0kmm/CtN0DGakAda0GH2KBUirrOvo+ZYUxPYf53QwjvYRDMfLBiaIsW3VfqtjmPnbBA8omQWGm5Lsjelz4VB1XoKqDhU9LW1rlsVzKT4vBmVqbb/cdRQfLdN6y8RYmrAS630H87vs2LqFkDbzp2ECSdSJ4AAAAASUVORK5CYII=";
const _imports_3$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKhSURBVHgBpZM/aFNRFMbPuS95SdvEQqNDupgOpQ7dOnVzCjjUQWynqoggoiB1a4tCFxWpUBCq4Fr/VaGCFgp1qC52ytTNKXFIFlM1LyHvvXvPOd73RLGS/tF+8B7c9w6/+53vnouyMV0AhFEIqQ6KytAI6nhmsQ7/oQQg5kGbLIMckRAL4KbBvJ7yHAerYLAGxq/ixMPmwWCam8QMjpEvgI4HzDkCzlJIQ2jUCRHgYOnKtgKqJYxThZ66hb8Kd3GmAyAEYFXHsfn30UdZuZYD1ZUnDgaAsc8RzIHGHLEZhu+9II8uVnXItSRTFW88qf2CYXttqpAkp+gwl/H0wnqnHWXpcl773M8k/Yo5r4wIiyAQgeJkYIy/nfLNRiLd1l5kDBRkdssCzz2Odo+ekjw4lQLK9QnDAIoMsmm7SlQeEpRT4PTY/hlIUwoOILy+FsStKSXWaQqMiqyU8OZKJQFBdwDQsr1I5iAweTnuUtktsm/6rYcwqegjzix/iv4pnJgLHQOBHQOMCvcELY5nwkr6rIXkBcTzm4m3OPsTFCkRvQgkBGEXvGzUasdjl4XJPLVVEY2xNeK5qrWauvvG+7MmhkXO7KxlIWE6OpP5S8M68EdBDLKhcqW38WHQZvd3XQwzRrdQ8KgfdmftcsdVCu9fGNEUjNhMo2UpfWu5BLsohgFJYE8GkOS3syg/U+4+iUQFtjdEEDdT00+3YA/FMNHgKUX2ODgbrxevZuhza0xEZ4UwsNP+rmfuRRX2UQxLogRaMximVOPO+Ry1GkUWzioU76vTXD02tzPoPWEBqVAxgMvOcde1U605xSi1Ste39U5B79OmtqNBUXYZZpuOyFZ65vkm/KNiWDrJnraXIAJFQbuzz7bgMPLvTQ7J7ck8HEI/AE2wdSxDCumWAAAAAElFTkSuQmCC";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIhSURBVHgBtVTNbtNAEJ7ZjXFTqeByQSBArhCRegAcTj0gJVx7gT5BmycIfYI0T1D3CdIbxwIHuCBqiQM3UiGkSpFQwo9UqRwSfkRUx55h1lGRgP45cT7L1nq1O9/OfN8swATx+eug/KkbPTRjhAmg3WZHn6eaQqjKi0KyloOM0doPPcCowQweSx4kc4joKsgQH/bDqgbYZjAkwDScDkII65lktLvXdxF0gxhLEh6V1EuS6QFQ/erFcxtmzdgavf8SLiOSrxCdJL4oohF3FEVLc5fzncN1I2fUNILrcJ2ZVsw/y0OQkPg3Llmr/64fiehtu19i7G9KYBEZRY7k08GYKoUrdnDUnlSlaza7TuTYNdlUxaFtQUu9pGwbUWSvFeewd9zeM2e03ep6B9puALEngUENj9kjUCt3rtlPT9t/Jnu/bv2qWmi9IiIPOJmSNhHbMhaL108nMTgxoxfNrpvPW9J8VDZlMhyE3IMY6ws3p31IgWOJXu7+XEYmn5mdYeMZLWBHDQZLC/OzHUiJ/4i2RPBpK1fjmB4ZqzAmzkVW7N8rzKzCiPiL6Pm7HyW5nTaZYpeVGhIwfURUlVJhJoAx8McMz5rf1mOKAyJ2ScQgZpQ+8b8fUPH+/HgkBrnHb/bcKXtqS07uoUkAk97qEVNl8daFJ5ARlNZWWa5Z7zAL8W0QEhcXb89mRmKQi2Md5DR0ZOwIWf3BXSeVbVPDuA0miN+vAt/8ufNdZwAAAABJRU5ErkJggg==";
const _imports_5 = "" + __buildAssetsURL("services-shape-6.DnhBeYnj.png");
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAA0CAYAAAAniMLXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKuSURBVHgB7Z3hahNBEIAnKhWLRcFH8f1fRIhUGpo2ehIoKJGWONO7kxBbmlx2b2f2vg+G+5vsftmdnb3szrbb7WeZFhuNnxrNbDbbyAhoG1/o473GRRc1s9R2vZbCzCYk9p20jX4nBdH2fi2t3B+llf2t1IMLqY03Uj+NxrU2+B9xgH6OB32su+hHc5P8g8SW3I3URs0jto3MV9rYvyUI2hfn+vgk8SRfaDvfiiNqHLEtb/5WOuUYgn7mX/qwuAoi+b3GV49tXZvYK2nTjgcJzhOSWz5uop+LD0zmSy8p3j61iG0jh43Sa6mQHclXKvmZtDm5RYkKi7X1jbfUY58axLYOn3sdOVLTfU+bmXrJdyssOfvThP6ucRthRowudjWpxxA6yZsu9uvl7yRN/1rKYTNhE6mdI1dFXJWXPNLl5v2ofrYTzwlvC2+rItkPxmbCddRBI+qI7a685JGd3Py/tUe3UdT3/31ts15EsW2R+EPgJDqRq03hXkkskBoOIpLYSA0HE0XsBVLDMUQQe8lCEY7Fu9iU9GAQnsVeIzUMxavYtlFwKQAD8Si2vZPwZarb5JAGj2IvpvJCE+TDm9i2WGwE4EQ8ib1hsQip8CL2Y14tAInwIvYNeTWkxIPYDTuLkJrSYlu9mrwaklNa7CUpCOSgpNgrSnuQi1Jik4JAVkqIzZY5ZKeE2JT2IDtji82fBmAUxhS7YcscxmIssR8PVxSAkRhDbKuAsFiEUcktNlJDEXKK3UtNBQRGJ9cRZ5M62hf8kUNsO3Z2TvoBJUkttr3/QfUDipNSbI72BTekENsWifNI185B/Zwq9qSvygC/DBU77F2KMA2OFTvUzVEwXQ4VG6EhFC+JjdAQkufEttzZ/o8Y9jo0mDb/rkOT9n6/cBdVAjxJd8klAAB45y9t2OKsnDytlwAAAABJRU5ErkJggg==";
const _imports_7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAeCAYAAACBkybCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgB5Zghj8JAEIVfL+fudP15ToMGj8fj8eDRoMHj8fwLPBo8urxJpgluy8wuDOFLXjC7ZTvz9rVb4EU0TbOg5vgUeLM/VB9RkAXBCOdOqL3nGlnhQtYeO3HuX4cxQ6quUBi1ybWqqiMKwf/Y8eeACGhlV1Y7tfO+kAld0BQ2TtSF3bvCQDsv282QX6qGAS7mRC1T41isLTVGBGSTeqJW0y0ZCI9cULLf1AGparSonUm7YaRLIdqoRWnUKj0URKJWLIUIcCEDtZPJ39ltqP42Ra127+mVTUWzqUKMWXlm7FLjNGrD2Ek6MHU8uYe5o7Z2eHugm7V88nRBD0krFET33wiF+aY2XQaKlazvTuSfOiMCd1Ebw04edF8lX/A8rzrh8J4qs5IhantZo9ZDuKh9Bhq1MQ5Jd1hPmmKlGGeSj0QD4W32T8pmC8r6xSUWErPv1JkbesMvVikeXBkAAAAASUVORK5CYII=";
const _imports_8 = "data:image/png;base64,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";
const _imports_9 = "" + __buildAssetsURL("ticket-icon.DoQvwby8.png");
const _sfc_main$6 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      service_data: [
        {
          id: 1,
          delay: "130",
          img: agn_ser_1,
          title: "Strategy & Research.",
          subtitle: "Our design services starts and ends best in class experience."
        },
        {
          id: 2,
          delay: "150",
          img: agn_ser_2,
          title: "UI/UX Analysis",
          subtitle: "Our design services starts and ends best in class experience."
        },
        {
          id: 3,
          delay: "170",
          img: agn_ser_3,
          title: "Search Optimization",
          subtitle: "Our design services starts and ends best in class experience."
        }
      ]
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "services__area grey-bg-8 pt-110 pb-130 p-relative z-index-1" }, _attrs))}><div class="services__shape"><img class="services__shape-4"${ssrRenderAttr("src", _imports_0$4)} alt="shape"><img class="services__shape-5"${ssrRenderAttr("src", _imports_1$4)} alt="shape"><img class="services__shape-6"${ssrRenderAttr("src", _imports_2$3)} alt="shape"><img class="services__shape-7"${ssrRenderAttr("src", _imports_3$2)} alt="shape"><img class="services__shape-8"${ssrRenderAttr("src", _imports_4)} alt="shape"><img class="services__shape-9"${ssrRenderAttr("src", _imports_5)} alt="shape"></div><div class="container"><div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-10"><div class="services__section-title-5" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"><div class="section__title-wrapper-5 mb-70 text-center"><span class="section__title-pre-5">What We Create</span><h3 class="section__title-5"> We provide wide range of digital services </h3></div></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.service_data, (item) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="services__item-5 mb-30 white-bg wow fadeInUp" data-sal="slide-up" data-sal-delay="item.delay" data-sal-duration="1000"><div class="services__item-5-inner text-center transition-3 white-bg"><div class="services__content-5"><h3 class="services__title-5">`);
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
    _push(`</h3><p>${ssrInterpolate(item.subtitle)}</p><div class="services__btn-5">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/service-details",
      class: "tp-link-btn-circle justify-content-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` See More <span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i><i class="fa-regular fa-arrow-right"${_scopeId}></i></span>`);
        } else {
          return [
            createTextVNode(" See More "),
            createVNode("span", null, [
              createVNode("i", { class: "fa-regular fa-arrow-right" }),
              createVNode("i", { class: "fa-regular fa-arrow-right" })
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div><div class="services__thumb-5"><img${ssrRenderAttr("src", item.img)} alt=""></div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="row justify-content-center"><div class="col-lg-8 col-xl-8 col-lg-10"><div class="ticket__wrapper mt-50 d-md-flex align-items-center justify-content-between" data-bg-color="blue-bg-2"><div class="ticket__inner d-sm-flex align-items-center"><div class="ticket__shape"><img class="ticket__shape-1" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000"${ssrRenderAttr("src", _imports_6)} alt=""><img class="ticket__shape-2 wow fadeInDown" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000"${ssrRenderAttr("src", _imports_7)} alt=""><img class="ticket__shape-3 wow fadeInUp" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"${ssrRenderAttr("src", _imports_8)} alt=""></div><div class="ticket__icon mr-15"><img${ssrRenderAttr("src", _imports_9)} alt=""></div><div class="ticket__content"><h4 class="ticket__title">Contact us to</h4><p>Get a professional service.</p></div></div><div class="ticket__btn">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-white-sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Submit a Ticket`);
      } else {
        return [
          createTextVNode("Submit a Ticket")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services/AgencyServices.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AgencyServices = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgBrZRBaBNBFIb/2WwTtY1Cc0pAGj3UU065ePMWEHpVEBFBRCsFEUWKBGq9NFooiIJohIB4EQW9CGI9ebGneGkvitB6SKKHFDSp3c3uzPOfBEFt0kTpg112dme+97//PRbYoVAv8nJCgKgRfAkFqz5QP11QdfxjuATEtEFUa4xxPeby9viKNEKNmuOg2vRQnbqnmn1BCvA0FUHhfWgwYoAUFcZNhJfGeCQKFC9LncmsyrXgA2oXXyl/CygwCEBSOITKqTlVsy8fXZOEBEgqhRQTJcMQCW5JWLA+CCxMSjVwsK5DrOaLnTPqyVXJcVMaBq9PLqjP3WQ/uCRJz0dKE0zlSSZvhxaIFcF6VtxA0BKmjThc9ojzt9tZ7VW+c1Riaj9GPRcZKkwTDO0j7ZDaMMzww2AvBgjrz7dh+DyXtMLoXWPD4KXrKPh+CIiD2CCgm+ckYzZxmL4p7WBtvYK3dwl3xaCFDjnaD1K4IFmORdZ0PCrfKKryr29uQEXaflAY6QWYPSbRoVEc4awdsJCIi3fs1srve1zPQ9OJWE730m6dETtTOXqS4NJnUxbz9zst/wO0MYzWHo8edSltbkoSnPwc5yXO8Wh8p6nzJdXoltCZnlcNttGC4n8pOcTDE2GAEZZU+1rB816QtiJ7I8dn7bGn9OL4M9UqnJWscWiqTaCxfL2kltAn2iAeajF77NNuxAuTkqH54+33wNJMSS1jgOiA7HTbh12YIMSa7tP8xZniVlO3B4Vo0qOEsZ2jqUM0dXobP3qCqKb9WxBBdV8Fb7r9JgYCOS2UNyOozj5UH/Gf8RNwaSVIUFvrlwAAAABJRU5ErkJggg==";
const _imports_1$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgBXZA9TgMxEIXfzHqzEtJSQMcBQkUDB4AT5BArLQ3UFCDRcIuUCME1oEq1PaJBVDSkoyGsPTzbyZLEhceeefPND7B1rJnUdjWpt/0yCC7Pj6D+GGVfwQWDs29oeJO7x24QWtueMnCI0oNBJFvSOhU4/yq3Ty9i7cUY9ntGh6C0gJHJIB7RKq3Ds2LhWTJyGQ0U+bDZnBbxHlMS9hFjQlFBp4qhWJ+O/QoOlBk/mRiPzwk+CpaDJoAsKLE5ApFCUq612oelhIS3L+V0XS7BzOQMmbzSxHdfzVSm00/+ukz0GCi6rBDcTK7v5/8Lb5oaO3qCqt/jmiqY/8Au3uXmIYLwB5SfYz4FxTmyAAAAAElFTkSuQmCC";
const _imports_2$2 = "" + __buildAssetsURL("about-thumb-mockup.DvU9ZXcm.png");
const _imports_3$1 = "" + __buildAssetsURL("about-thumb-1.BLuKHamZ.jpg");
const _sfc_main$5 = {
  components: { VideoModal },
  mixins: [SalScrollAnimationMixin],
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="about__area pt-120 pb-95 p-relative z-index-1"><div class="about__shape"><img class="about__shape-1"${ssrRenderAttr("src", _imports_0$3)} alt=""><img class="about__shape-2"${ssrRenderAttr("src", _imports_1$3)} alt=""></div><div class="container"><div class="row align-items-center"><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="about__wrapper-5 pr-90 mb-10" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"><div class="section__title-wrapper-5 mb-35"><span class="section__title-pre-5">We are harry Agency</span><h3 class="section__title-5"> Great digital <br> Agency <span class="has-light">since 1985</span></h3></div><p> Since 1985 Reed has pioneered specialist recruitment, sourcing knowledgeable, skilled professionals for jobs across the UK looking finance. </p><div class="about__btn-5">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/about",
    class: "tp-btn-blue"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`More About Us`);
      } else {
        return [
          createTextVNode("More About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-xxl-6 col-xl-6 col-lg-6"><div class="about__thumb-5" data-sal="slide-right" data-sal-delay="170" data-sal-duration="1000"><div class="about__thumb-mockup wow"><img class="about-mockup-img"${ssrRenderAttr("src", _imports_2$2)} alt=""><img class="about-main-5"${ssrRenderAttr("src", _imports_3$1)} alt=""><a href="#" class="about-play-btn tp-pulse-border popup-video"><span class="video-play-bg"></span><svg width="17" height="17" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor"></path></svg></a></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/7e90gBu4pas"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/AgencyAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AgencyAbout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgBVZDdjcIwEIRn8sMzpdABp2sEdKdDRwU88IBDFbwRJH7aSAnQCQ3Ey9hxEkhkre35dme9RPps/TdH4R3KdqY4RWkNcl9zfzkFnRFarXYozCFvgdKbwBCpO2BijttrRfv5XyrzKNE6UVC3TJDOrSHHdwaPRfQmCdOfTBTYt6XdLlP46ppUhUjZ0FKilOJnAu2ZtL6Ghe2YY/LhVCDvA9AbmeGjItgE62q4e3cNMFMGWWesD436c5GIljYWCk9qWXFzO3Ec+O8CBZYaxxwT/9R4HihR0Z2boL8AECtW6RbVVa8AAAAASUVORK5CYII=";
const _imports_1$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHmSURBVHgBlZJNaxNRFIbPnWRVFKJ/oOPKlTRZigsTNN0ad6JCggsXgiWhq66aoqCgkBRFUrowG0FiwfQXTLIXjAiuhE5+QVNcOJnz1TNDCaXffWEGLof3nOe897ovO53PJJwnwUFM/7ejaDpqFJoTuIBc9+/HQEEWiOkaCoIoK3I8ZJE+SvxrpfB2cJo5S4xjAfGf31y+/uH3myIBVsx4V5Raqupe/VjejSlpxgNUHL67szmamZEJ1HF6eHlrJZmSTmr+rOcykimS0ANrXjSiijWDxrAWkuKACLezNiEUlepRpGahnezdP/igHtR8LwPWDFdJqcogeU9Edg0d3v95PQ9nqF3qhjHH86zsC/Nw7h+VsrFGeypWjfBUYz2o5BDmWkZYs93XN8pb9XRnJtphUCCGG3YeHzc+8lG977ZzHgQaG+Vv7Vlg7HTMFppzegz7RfA4bzyJMafCpU55a3C47k2jCCxRmGLsDheWgidVD1wgYlzetHDUmJqbt9sWPSkDzyYvDZ+uCmhXGEMPsNgp9UM4Qdnkx8x7FoafBKNwtWUkVRVZ/3S/V4czlJpJ4gmJ+OKuBEaxYKhrnXu9NThHqRmFQxEq2rOcAOmzzmKvCxfQATaGdvkhOu/h5uLXEVxWyb5wSe0DqmVELMQ/szcAAAAASUVORK5CYII=";
const _sfc_main$4 = {
  components: { AgencySliderItems, ImagePopup },
  data() {
    return {
      portfolio_data: [
        {
          id: 1,
          img: agency_port_1,
          tag: "Sports",
          title: "Stadium Sports Cards",
          delay: "130"
        },
        {
          id: 2,
          img: agency_port_2,
          tag: "Branding & Digital Platforms",
          title: "Aliens do 3D Automobile",
          delay: "150"
        },
        {
          id: 3,
          img: agency_port_3,
          tag: "Branding & Identity",
          title: "Gallery Portfolio",
          delay: "170"
        },
        {
          id: 4,
          img: agency_port_4,
          tag: "Custom Print",
          title: "Artboard Studio",
          delay: "190"
        },
        {
          id: 5,
          img: agency_port_5,
          tag: "Custom Print",
          title: "Artboard Studio",
          delay: "190"
        },
        {
          id: 6,
          img: agency_port_6,
          tag: "Branding & Identity",
          title: "Gallery Portfolio",
          delay: "190"
        }
      ]
    };
  },
  methods: {
    handleImagePopup(index) {
      this.$refs.image_popup.showImg(index);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_agency_slider_items = resolveComponent("agency-slider-items");
  const _component_image_popup = resolveComponent("image-popup");
  _push(`<!--[--><section class="portfolio__area portfolio__overlay-5 pt-110 pb-120 p-relative z-index-1"><div class="portfolio__shape"><img class="portfolio__shape-6"${ssrRenderAttr("src", _imports_0$2)} alt=""><img class="portfolio__shape-7"${ssrRenderAttr("src", _imports_1$2)} alt=""></div><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-5 mb-60 text-center"><span class="section__title-pre-5">SELECTED PROJECTS</span><h3 class="section__title-5">Digital Case Studies.</h3></div></div></div></div><div class="container-fluid g-0"><div class="row gx-0"><div class="col-xxl-12">`);
  _push(ssrRenderComponent(_component_agency_slider_items, {
    portfolio_data: $data.portfolio_data,
    handleImagePopup: $options.handleImagePopup
  }, null, _parent));
  _push(`</div></div></div></section>`);
  _push(ssrRenderComponent(_component_image_popup, {
    ref: "image_popup",
    images: $data.portfolio_data.map((item) => item.img)
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/AgencyPortfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AgencyPortfolio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgBtVRLaBNRFL33zSeZfrQapYsqBRcqbgRBRBcaP1iqooJkpyJokBhw78rWnSCuFGkqLaIudCu1WkED4jILwYULIWIVBKHFmMzkzcy715uFip/WNp+zum/mvTlzzj33AXQQmQxbMMKqUSvoAJgZ0ze5p3oMus8MgitPEKHNSI9wsqc/SCmXmWITKlvryuyawIY2Yv94td811RR5TuxHgU66fWS+RWHxMpi2KNp5fdZb1dO/SVmxF8WsbaIwsu1aGCa/FPNYbexpWdG+28GgS7gZkIgYteUAWXWn9pkSH0t5jH7sa1rRlofsDlSC7RbBelRWXQIQInDdAJRnsl75z/1NEQ2P++vk7/daihLEqq6ERBTNGzSlp+dWzv3rzLKsS09yMhnV9gDBVqU4ZAMaLaDI8Ns57H5dOv/LqqaJjtzxB0yoM4DWagYIG9MCyvHrkXlezHW//9/5JRENFYIDseYhJX0Ws7XMIyFgGbqcR8WTbmUp31iUaHiC16LxL4iCDYComVgjcw0pfjadW/EKloEFw3C44O8ixIuSJEeWWpzSjOodYXhroYYvhr8UHb3KvVFfcJYAjstSYiskCBIy9fhJ1rsHTeI3RQfH/B2WwlFpdEpeNWwKpR8fDMXXZnK9b6AF/FQ0XAhG5Yo9JaUmUSGWMYJ6kPISE3dPYw1ahH3oRjDICbgv9UaSPkiaJFHwVUXm0lS+6wW0CQqS1m5k2CZ2OYjoMHDJMnBiKt/bNpIGbBnrl2jDJ6m7hOjKdNYbg04iPTnfBx3Edw6oCLCN4lFOAAAAAElFTkSuQmCC";
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKmSURBVHgBnZTLS1VRFMb3Wnufc5++IEmjDLEmhQXZoGhiEPlAJ4EOQqfO+h/u/9CoRpbRoDvM8lVkk6BQCATFRJEwMsS8Xa/ec8/Ze6/WuT6w8HGv3+HAYe/N76xv7W9vECeo59UVN6bqK2xcubit/ecP3q8ftx6OgsTjjc0W4RwKqjcH5hBMgQiWCe23F+1jP08E9o221UuSrRYoiUy0wtL+YgQKH02Wdr5xwdtc+pLunfUPBfaNdt1gQgugJa6iCEIEzxizhUJwZbIGFDlgLNldOBLkjPQnhtrGt8L1ag/WP3GvgYy4LsAGRKE12rQyMru9Mb94sIL+sfsJI2SzMqIRuB8GKIrGvcNT4/sVDky1OPnVum6hKME/tQByw8ssvTsI+l8PX3ddRsdeg10nwoi5oa43cxh+51brLqCkCJLQYGRWkP/xOFiol93DC9LSVwAyTNRSyYutH1pVEYgONXHzNTckkKBn9vpxkp51jixqDVkQRlsIoCGHZzG0S9YmQSiNQuqZ2rUfogw5aL/zxmirQRsZqVJeprrSCQe4ftIqO31zOigH6Gv5x2FnoVV+XZXXilzuAbeWs2o9UaZ0zAuUVjtFWDQospV53im2CxqkcUS5MlJKxQ5Dl5xVTPem81xahvsYGHR+iTIVBaoyPmglMbDSbO6flEdvOyKPO0cKZbD4zPe4sWTuqt7NYrCVmAdxSqUohcvDU00B2igqIGlNbrBjdFmJU2jgSYuzMj593oCnrGKrPBarXS/GrWRgKpXChUufk34NxLelSaI2aHgjJEWpkC38ftq2E7eSgYu3P53hNFTylcb2OHhFGB/86mA93T6W3VtXMpCvM6kYEgY2bLwL5IkKPzN0a/Kf7JYMXIkU1mrzsZpELMLWMt7g3clDD8FflJph2A7GsDYAAAAASUVORK5CYII=";
const _imports_2$1 = "" + __buildAssetsURL("award-title.BNLZHJp6.png");
const _sfc_main$3 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      award_data: [
        {
          delay: "150",
          icon: award_icon_1,
          title: "2 x Pencils",
          subtitle: "Best Branded Editorial Experience",
          bg: ""
        },
        {
          delay: "170",
          icon: award_icon_2,
          title: "Creative Review Annual",
          subtitle: "Best Branded Editorial Experience",
          bg: "award__brown"
        },
        {
          delay: "190",
          icon: award_icon_3,
          title: "Webby Award",
          subtitle: "Best Branded Editorial Experience",
          bg: "award__purple"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "award__area pb-10 p-relative z-index-1" }, _attrs))}><div class="award__shape"><img class="award__shape-1"${ssrRenderAttr("src", _imports_0$1)} alt="shape"><img class="award__shape-2"${ssrRenderAttr("src", _imports_1$1)} alt="shape"></div><div class="container"><div class="row"><div class="col-xxl-12"><div class="award__stroke text-center"><img${ssrRenderAttr("src", _imports_2$1)} alt="award title"></div></div></div><div class="row gx-1"><!--[-->`);
  ssrRenderList($data.award_data, (item, i) => {
    _push(`<div class="col-lg-4 col-md-6"><div class="${ssrRenderClass(`award__item-5 ${item.bg} mb-30 wow fadeInUp`)}" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="award__icon-5"><img${ssrRenderAttr("src", item.icon)} alt=""></div><div class="award__content-5"><h4 class="award__title-5"><a href="#">${ssrInterpolate(item.title)}</a></h4><p>${ssrInterpolate(item.subtitle)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awards/AgencyAwards.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AgencyAwards = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    blog: {
      type: Object,
      default: {},
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog__item-5 mb-30",
    "data-sal": "slide-up",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="row align-items-center"><div class="col-xl-5 col-lg-12"><div class="blog__thumb-5">`);
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
  _push(`</div></div><div class="col-xl-7 col-lg-12"><div class="blog__content-5"><div class="blog__tag-5"><a href="#">${ssrInterpolate($props.blog.tag)}</a></div><h3 class="blog__title-5">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${$props.blog.title ?? ""}</span>`);
      } else {
        return [
          createVNode("span", {
            innerHTML: $props.blog.title
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="blog__meta-5"><span><i class="fa-regular fa-clock"></i>${ssrInterpolate($props.blog.date)}</span><span><i class="fa-regular fa-comment"></i> ${ssrInterpolate($props.blog.comment)} Comment</span></div><p>${ssrInterpolate($props.blog.sm_text)}</p><div class="blog__btn-5">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-details",
    class: "tp-link-btn-circle"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Read More <span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i><i class="fa-regular fa-arrow-right"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" Read More "),
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-arrow-right" }),
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/AgencySingleBlog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AgencySingleBlog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJNSURBVHgBtVRLaBNRFL33zSeZfrQapYsqBRcqbgRBRBcaP1iqooJkpyJokBhw78rWnSCuFGkqLaIudCu1WkED4jILwYULIWIVBKHFmMzkzcy715uFip/WNp+zum/mvTlzzj33AXQQmQxbMMKqUSvoAJgZ0ze5p3oMus8MgitPEKHNSI9wsqc/SCmXmWITKlvryuyawIY2Yv94td811RR5TuxHgU66fWS+RWHxMpi2KNp5fdZb1dO/SVmxF8WsbaIwsu1aGCa/FPNYbexpWdG+28GgS7gZkIgYteUAWXWn9pkSH0t5jH7sa1rRlofsDlSC7RbBelRWXQIQInDdAJRnsl75z/1NEQ2P++vk7/daihLEqq6ERBTNGzSlp+dWzv3rzLKsS09yMhnV9gDBVqU4ZAMaLaDI8Ns57H5dOv/LqqaJjtzxB0yoM4DWagYIG9MCyvHrkXlezHW//9/5JRENFYIDseYhJX0Ws7XMIyFgGbqcR8WTbmUp31iUaHiC16LxL4iCDYComVgjcw0pfjadW/EKloEFw3C44O8ixIuSJEeWWpzSjOodYXhroYYvhr8UHb3KvVFfcJYAjstSYiskCBIy9fhJ1rsHTeI3RQfH/B2WwlFpdEpeNWwKpR8fDMXXZnK9b6AF/FQ0XAhG5Yo9JaUmUSGWMYJ6kPISE3dPYw1ahH3oRjDICbgv9UaSPkiaJFHwVUXm0lS+6wW0CQqS1m5k2CZ2OYjoMHDJMnBiKt/bNpIGbBnrl2jDJ6m7hOjKdNYbg04iPTnfBx3Edw6oCLCN4lFOAAAAAElFTkSuQmCC";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgBlVDLTcNQEJxZMGdKoANaIJVgIqFwDOcI4VBBwgEJIUFO4cCFElKCS0gHSQGxN2O/j3PNs/atZ9/s7LxHnCx/GpcoeI+iuUPR7nHZ1vpfsvr9786ZiZPJD+wgsrtIEJkxK1Bxtp73ZB8/lrjgdyaEcFy5cOOhgSMLsvaqGYTri4MijohE0z6bl9NrubmBeyAEc0w9waqy4dZOasyq+SrMpxKDcbXYq7bNxY7hHolJuW+qk+fFMCHp+zCFAo3PezJXH0uYvw8PmRzEvbU3zv6iclf9/Jpqf1DU8TV2yhvhEV/WFc5dR/XCWHAaKGW3AAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH5SURBVHgBlVLNahNRFD4zGaVSIfEJHJe6abNx46Iz1XRr3bmoSBeCith0ZYub1I1FF52ClKkFacFFg0rGJ5hkodvEnaCQPIDgtETSzD0/nqlUaqw2/eCey7mX7/x851iv22GMgkCIrZR67+9dXKzDkLC2vr5oI3CeyZwzbICFxWDaIOGo3+81Hl9+3von+dWXIEZCONXr3ujmTntoGY+IJgjMmN4WCX1PNRhqMNmjxrIfdn6T1z8/qxGLe//So+LhqE+bCy6SGUfG63p7yOQSa3tMHWRT3zPpqmOYdkC4MFjSYnE5y5CdKPPLH+6M20JZsBXV6HYuB2ATYTsl48IxCK5stAxpK2wKSt4a2TXzDnK6wyJQaZYLlWKQHEUsx9MFA2dqSvK07KWN0rtK9u6ok6iy4MBoXv3kb+JN14gVM3BBkGdfTr3dPPiz+5hmAgDSjwuDxAfxjIdgN3V8wABeOPVm8/C/TYKJZgc0+IdoD+OZOQGOVaBE7L6/Pln9NBjcBoJEexGxKH/wOBffWtH5BswUjeymxdCPOnAErMwsfLwrTLiU4reA4GyNgSZ00Z6sXd2uwH/gZCYrjQXHGEab2sZ53dH5tWvVVTgG+2TdnETnPa2qJ9r+ZFiq1mEI7JMNYUszA1vgh6XtDgwJ55fpzmbdB36UwAnwE0efSjd5OytjAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ4SURBVHgBnZXPaxNBFMe/b2Z2k9BKa0vUgkFQCqLipRePxYv0KuQgngTp39G/QqQgFqpecvDgoQU9FAQPQnsRAlWxUkvxJzFYs0nmx/PNBqOibRPfMuzu7NvPfN+b93YJhxjPzhqUyyPAaIqia9Hy8veD/Gl/SKUC8hUgHYViAyYDpYw89kCyC6dfUO3W3qFAnquWUUrPQPkiVGrgnYbWGmSS/MxBoEruZQHoTXpw+/m+QL5ydQojycn8Ja0NgoqqWN63YA5I1FGwKglIQ4kPC1iZJjqfV6lW60aG+QWrTqAQyuhaD6MJgTvo8jb2dr7S2prr+1Xnx6DdNAJOC1RmwjgKE5flYrWvkGdmEpw4VYGiksxIiMai8eHV76C/UnP9xjkEutDLbRz8jO7dea3yp1NTY3BOgSXhSSGDCS8PguVK7t+ti8pNaPIgdpLji3G+B7Q2AXUdlHVo2o+SD49BbMzU4UMGL1AfSnzt5nHFswu9PIaCrEQdelJrYkCjxUULHbakknoqlTqm8O0RyQ7KRNshUx0MbbYhG+iE6WMFGGQZiTInUFFphgdmMkxUqEVymxXq9R49jkJLYWgrCkk2Mx5AO+ZPClc5BKkpIouhrTOZhxylZKHR7xRmJjEegiRtOlfA6PgliVnnfR5aT/udMjSsWtXw6rwMUcciLLyTcsv+I2cCm59P0A5n82awzkvIbZT0Vi5sYMjCgsLjjRFM4oiEMw42MToNI+csvKWV2qfoZwYFYmOjLJ1RlL2UXhdVFDszlXLrbtPKwy8/3QYHWitlIF+iGJRNCSm3sPPmPa2v/1EZgwOzrJH/CnZ3A6anLS0ttf/l9gOJbw6Wj9mCOAAAAABJRU5ErkJggg==";
const _sfc_main$1 = {
  mixins: [SalScrollAnimationMixin],
  components: { AgencySingleBlog },
  mixins: [blogData]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_agency_single_blog = resolveComponent("agency-single-blog");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area p-relative z-index-1 pt-150 pb-130" }, _attrs))}><div class="blog__shape"><img class="blog__shape-1"${ssrRenderAttr("src", _imports_0)} alt="shape"><img class="blog__shape-2"${ssrRenderAttr("src", _imports_1)} alt="shape"><img class="blog__shape-3"${ssrRenderAttr("src", _imports_2)} alt="shape"><img class="blog__shape-4"${ssrRenderAttr("src", _imports_3)} alt="shape"></div><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-5 mb-50 text-center"><span class="section__title-pre-5">Our Blogs</span><h3 class="section__title-5">Read the latest news.</h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((item) => item.home_agency), (blog, i) => {
    _push(`<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_agency_single_blog, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="row"><div class="col-xxl-12"><div class="blog__more-5 mt-30 text-center" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-grid",
    class: "tp-btn-round"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View our all News`);
      } else {
        return [
          createTextVNode("View our all News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/AgencyBlogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AgencyBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-agency",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Agency - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AgencyHero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyServices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyCounter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyPortfolio, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyAwards, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyPricing, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyBlogs, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AgencyCta, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AgencyHero),
              createVNode(AgencyServices),
              createVNode(AgencyAbout),
              createVNode(AgencyCounter),
              createVNode(AgencyPortfolio),
              createVNode(AgencyAwards),
              createVNode(AgencyPricing),
              createVNode(AgencyTestimonial),
              createVNode(AgencyBrands),
              createVNode(AgencyBlogs),
              createVNode(AgencyCta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-agency.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-agency-DbRckcqg.js.map
