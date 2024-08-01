import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const award_img_1 = "" + __buildAssetsURL("award-1.CWR0ZyDy.jpg");
const award_img_2 = "" + __buildAssetsURL("award-2.CV4yGqKw.jpg");
const award_img_3 = "" + __buildAssetsURL("award-3.DAWvXkmy.jpg");
const award_img_4 = "" + __buildAssetsURL("award-4.C3zQAbGo.jpg");
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      award_data: [
        {
          id: "one",
          topic: "Art direction 2021",
          title: "Modern painting award jump",
          data_src: award_img_1,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".3s"
        },
        {
          id: "two",
          topic: "Main Developer 2020",
          title: "People's choice: best design",
          data_src: award_img_2,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".5s"
        },
        {
          id: "three",
          topic: "Art direction 2021",
          title: "Webby's, Site of the Year",
          data_src: award_img_3,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".7s"
        },
        {
          id: "four",
          topic: "CSS Design 2018",
          title: "Awwwards site of the day",
          data_src: award_img_4,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".7s"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `award__area pt-120 ${$props.style_2 ? "pb-120" : "pb-10"} white-bg`
  }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="${ssrRenderClass(`section__title-wrapper-9 ${$props.style_2 ? "text-center" : ""} mb-55`)}"><h3 class="section__title-9">Our Awards.</h3></div></div></div><div class="row"><div class="col-xxl-12"><div class="award__item-wrapper-9"><!--[-->`);
  ssrRenderList($data.award_data, (item) => {
    _push(`<div class="award__item-9 p-relative wow fadeInUp" data-sal="slide-up"${ssrRenderAttr("data-sal-delay", item.delay)} data-sal-duration="1000"><div class="row align-items-center"><div class="col-xl-3 col-lg-3 col-md-3"><div class="award__topic"><p>${ssrInterpolate(item.topic)}</p></div></div><div class="col-xl-7 col-lg-7 col-md-7"><div class="award__content-9"><h3 class="award__title-9">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/portfolio-details",
      class: "tp-img-reveal tp-img-reveal-item",
      "data-fx": "1"
    }, {
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
    _push(`</h3><p>${ssrInterpolate(item.subtitle)}</p></div></div><div class="col-xl-2 col-lg-2 col-md-2"><div class="award__btn-9 text-md-end">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      href: "/portfolio-details",
      class: "career-link-btn"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12.7334 1L21 9.00007L12.7334 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 8.99756H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              width: "22",
              height: "18",
              viewBox: "0 0 22 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M12.7334 1L21 9.00007L12.7334 17",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M0.999999 8.99756H21",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ]))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awards/PersonalPortAwards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PersonalPortAwards = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PersonalPortAwards as P
};
//# sourceMappingURL=PersonalPortAwards-9bhyWO1r.js.map
