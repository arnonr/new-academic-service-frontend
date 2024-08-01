import { _ as _export_sfc, k as __nuxt_component_0 } from "../server.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { _ as _imports_0, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { u as user_4 } from "./user-4-BaMCI89Q.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      testimonial_data: [
        {
          ratings: [1, 2, 3, 4, 5],
          title: "“Seriously amazing!”",
          subtitle: "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: _imports_0,
          name: "Sarah Smith",
          designation: "Lead Developer, Google"
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "“This office almost relaxing”",
          subtitle: "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: _imports_1,
          name: "Eleanor Pena",
          designation: "COO, Globex Corporation"
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "Awesome Support",
          subtitle: "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_3,
          name: "Carla Wildner",
          designation: "Design at Mailchimp"
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "“Seriously amazing!”",
          subtitle: "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_4,
          name: "Naim Ahmed",
          designation: "Developer at Theme_Pure"
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "Awesome Support",
          subtitle: "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_3,
          name: "Carla Wildner",
          designation: "Design at Mailchimp"
        }
      ]
    };
  },
  setup() {
    return {
      modules: [Pagination]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial__area green-light-bg-4 pt-110 pb-95 fix" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-xxl-9"><div class="section__title-wrapper-7 text-center mb-60"><span class="section__title-pre-7">Client Feedback</span><h3 class="section__title-7"> Trusted by global <span class="section__title-7-highlight"> companies. <svg width="240" height="22" viewBox="0 0 240 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="currentColor"></path></svg></span></h3><p> Install any demo or template with a single click. You can mix and <br> match all the demos. </p></div></div></div><div class="row"><div class="col-xxl-12"><div class="testimonial__slider-7">`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`<div class="testimonial-slider-dot-7 tp-swiper-dot text-center mt--30 p-relative z-index-1"></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/StartUpTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StartUpTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  StartUpTestimonial as S
};
//# sourceMappingURL=StartUpTestimonial-DphyGfCM.js.map
