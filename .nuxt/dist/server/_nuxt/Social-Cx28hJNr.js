import { ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  data() {
    return {
      social_links: [
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fa-brands fa-facebook-f",
          name: "Facebook"
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fa-brands fa-twitter",
          name: "Twitter"
        },
        {
          link: "https://www.linkedin.com/",
          target: "_blank",
          icon: "fa-brands fa-linkedin-in",
          name: "Linkedin"
        },
        {
          link: "https://www.youtube.com/",
          target: "_blank",
          icon: "fa-brands fa-youtube",
          name: "Youtube"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($data.social_links, (item, i) => {
    _push(`<a${ssrRenderAttr("href", item.link)}${ssrRenderAttr("target", item.target)}><i class="${ssrRenderClass(item.icon)}"></i></a>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/social/Social.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Social-Cx28hJNr.js.map
