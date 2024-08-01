import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { _ as _imports_7 } from "./user-10-BkKNArKv.js";
import { _ as _imports_2 } from "./user-9-BOQgWp3s.js";
import { u as user_3 } from "./user-8-CWRtcVgm.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("testimonial-shape-1.tfMQVyWt.png");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      testimonial_data: [
        {
          id: 1,
          spacing: "",
          delay: "130",
          user: _imports_7,
          name: "Douglas Lyphe",
          designation: "Director at Kickstarter.",
          title: "“Working with Photo X was amazing”",
          desc: "Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis"
        },
        {
          id: 2,
          spacing: "mb-30",
          delay: "150",
          user: _imports_2,
          name: "Karen Hills",
          designation: "Fashion Designer",
          title: "“The services is awesome”",
          desc: "Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis"
        },
        {
          id: 3,
          spacing: "",
          delay: "170",
          user: user_3,
          name: "Jake Weary",
          designation: "Fashion Designer",
          title: "“Im very happy to work with them”",
          desc: "Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `testimonial__area p-relative z-index-1 black-bg-5 ${$props.el_style ? "pt-120 pb-90" : "pt-60 pb-90"}`
  }, _attrs))}><div class="testimoinal__shape"><img class="testimonial__shape-1"${ssrRenderAttr("src", _imports_0)} alt="testimonial__shape"></div><div class="container"><div class="row"><div class="col-xxl-6 col-lg-6"><div class="tesimonial__wrapper-3"><div class="section__title-wrapper-3 mb-50"><span class="section__title-pre-3">06 . testimonial</span><h3 class="section__title-3 has-gradient"> Client <span>Testimonials</span></h3></div><div class="testimonial__btn-3 mb-95">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact-2",
    class: "tp-btn-border-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact me`);
      } else {
        return [
          createTextVNode("Contact me")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="${ssrRenderClass(`testimonial__item-3 ${$data.testimonial_data[0].spacing} wow fadeInUp`)}" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="testimonial__avater-3 mb-35 d-sm-flex align-items-center"><div class="testimonial__avater-thumb-3"><img${ssrRenderAttr("src", $data.testimonial_data[0].user)} alt="user"></div><div class="tesimonial__avater-info-3"><h4 class="testimonial__avater-title-3">${ssrInterpolate($data.testimonial_data[0].name)}</h4><span class="testimonial__avater-designation-3">${ssrInterpolate($data.testimonial_data[0].designation)}</span></div></div><div class="testimonial__content-3"><h4>${ssrInterpolate($data.testimonial_data[0].title)}</h4><p>${ssrInterpolate($data.testimonial_data[0].desc)}</p></div></div></div></div><div class="col-xxl-6 col-lg-6"><div class="testimonial__item-wrapper-3"><!--[-->`);
  ssrRenderList($data.testimonial_data.slice(1, 3), (item) => {
    _push(`<div class="${ssrRenderClass(`testimonial__item-3 ${item.spacing} wow fadeInUp`)}" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="testimonial__avater-3 mb-35 d-sm-flex align-items-center"><div class="testimonial__avater-thumb-3"><img${ssrRenderAttr("src", item.user)} alt="user"></div><div class="tesimonial__avater-info-3"><h4 class="testimonial__avater-title-3">${ssrInterpolate(item.name)}</h4><span class="testimonial__avater-designation-3">${ssrInterpolate(item.designation)}</span></div></div><div class="testimonial__content-3"><h4>${ssrInterpolate(item.title)}</h4><p>${ssrInterpolate(item.desc)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testimonials/PhotographerTestimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PhotographerTestimonial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PhotographerTestimonial as P
};
//# sourceMappingURL=PhotographerTestimonial-CJdF0ZnV.js.map
