import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  data() {
    return {
      open: false
    };
  },
  methods: {
    handleToggle() {
      this.open = !this.open;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(_attrs)}><span class="header__lang-selected-lang tp-lang-toggle" id="tp-header-lang-toggle">English </span><ul class="${ssrRenderClass(`header__lang-list tp-lang-list ${$data.open ? "tp-lang-list-open" : ""}`)}"><li>Spanish</li><li>English</li><li>Canada</li></ul></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/headers/component/Language.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Language = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Language as default
};
//# sourceMappingURL=Language-DjIvJcaS.js.map
