import { _ as __nuxt_component_0 } from "./Social-Cx28hJNr.js";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import HeaderFourteen from "./HeaderFourteen-BeNQygwT.js";
import { useSSRContext, resolveComponent } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
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
import "./OffCanvasSix-UeRQiqg5.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$1 = {
  name: "Time",
  props: {
    endDateTime: String
  },
  data() {
    return {
      timeParts: {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      },
      interval: null
    };
  },
  mounted() {
    this.interval = setInterval();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    days() {
      return this.timeParts.days;
    },
    hours() {
      return this.timeParts.hours;
    },
    minutes() {
      return this.timeParts.minutes;
    },
    seconds() {
      return this.timeParts.seconds;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(_attrs)}><li><span data-days>${ssrInterpolate($options.days)}</span> Days</li><li><span data-hours>${ssrInterpolate($options.minutes)}</span> Hours</li><li><span data-minutes>${ssrInterpolate($options.hours)}</span> Minutes</li><li><span data-seconds>${ssrInterpolate($options.seconds)}</span> Seconds</li></ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Timer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Timer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "" + __buildAssetsURL("coming-image-2.CpBD5pZD.gif");
const _sfc_main = {
  components: {
    HeaderFourteen,
    Social: __nuxt_component_0,
    Timer
  },
  setup() {
    useHead({
      title: "Coming soon - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_fourteen = resolveComponent("header-fourteen");
  const _component_timer = resolveComponent("timer");
  const _component_social = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_header_fourteen, null, null, _parent));
  _push(`<section class="coming__area coming__height d-flex align-items-center"><div class="coming__shape"><img class="coming__shape-1"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="container"><div class="row align-items-center"><div class="col-xl-7 col-lg-6"><div class="coming__content pt-55"><div class="coming__countdown" data-countdown data-date="Sep 30 2024 20:20:22">`);
  _push(ssrRenderComponent(_component_timer, { endDateTime: "2025-05-31T23:59:59.999Z" }, null, _parent));
  _push(`</div><h3 class="coming__title"> Our website is <br> Under Consruction </h3><p> We will be here soon with something amazing technology and analytics. Subscribe to be notified. </p><div class="coming__form"><form action="#"><div class="coming__input"><input type="email" placeholder="Enter Your Email"><button type="submit" class="tp-btn">Subscribe</button></div></form></div><div class="coming__social">`);
  _push(ssrRenderComponent(_component_social, null, null, _parent));
  _push(`</div></div></div><div class="col-xl-5 col-lg-6"><div class="coming__thumb"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coming-soon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const comingSoon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  comingSoon as default
};
//# sourceMappingURL=coming-soon-Ced-5KZR.js.map
