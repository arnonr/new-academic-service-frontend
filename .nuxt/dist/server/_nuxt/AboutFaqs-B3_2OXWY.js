import { S as SingleFaq } from "./SingleFaq-CsPiM7Uv.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const bg = "" + __buildAssetsURL("faq-img.DZAijpqX.jpg");
const _sfc_main = {
  components: { SingleFaq, VideoModal },
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bg,
      faq_items: [
        {
          id: "about-one",
          title: "Can I cancel my account at any time?",
          show: true,
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "about-faqaccordion"
        },
        {
          id: "about-two",
          title: "What happens after the license expires?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "about-faqaccordion"
        },
        {
          id: "about-three",
          title: "Does Harry have any documentations?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "about-faqaccordion"
        }
      ]
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_faq = resolveComponent("single-faq");
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<!--[--><section class="faq__area p-relative"><div class="faq__video" style="${ssrRenderStyle({ backgroundImage: `url(${$data.bg})` })}"><div class="faq__video-btn"><a href="#" class="tp-pulse-border popup-video"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor"></path></svg></a></div></div><div class="container-fluid"><div class="row justify-content-end"><div class="col-xxl-7 col-xl-7 col-lg-7"><div class="faq__wrapper-2 faq__gradient-border faq__style-2 tp-accordion pl-160"><div class="faq__title-wrapper"><span class="faq__title-pre">${ssrInterpolate($props.el_style ? "Minimal Design" : "Get in touch with us to see how")}</span><h3 class="faq__title">${ssrInterpolate($props.el_style ? "Accordion with image" : "Provide smart and flexible digital services")}</h3></div><div class="accordion" id="about-faqaccordion"><!--[-->`);
  ssrRenderList($data.faq_items, (item, i) => {
    _push(ssrRenderComponent(_component_single_faq, {
      key: i,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/_RpLvsA1SNM"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faqs/AboutFaqs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutFaqs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AboutFaqs as A
};
//# sourceMappingURL=AboutFaqs-B3_2OXWY.js.map
