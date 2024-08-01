import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const img_1 = "" + __buildAssetsURL("portfolio-masonary-1.CC2LRsLi.jpg");
const img_2 = "" + __buildAssetsURL("portfolio-masonary-2.D--xA593.jpg");
const img_3 = "" + __buildAssetsURL("portfolio-masonary-3.y5WcIBsJ.jpg");
const img_4 = "" + __buildAssetsURL("portfolio-masonary-4.COLR2I77.jpg");
const img_5 = "" + __buildAssetsURL("portfolio-masonary-5.DyiUJPWf.jpg");
const img_6 = "" + __buildAssetsURL("portfolio-masonary-6.Cz2T14zP.jpg");
const img_7 = "" + __buildAssetsURL("portfolio-masonary-7.PlSrEVIT.jpg");
const img_8 = "" + __buildAssetsURL("portfolio-masonary-8.DPLVwi4w.jpg");
const _sfc_main = {
  props: {
    item: {}
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio__grid-item mb-20" }, _attrs))}><div class="portfolio__grid-thumb w-img fix tp-img-reveal tp-img-reveal-item" data-fx="24" data-meta-tag="Creative" data-title="Visual Identity">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details-list" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.item.img)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.item.img,
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="portfolio__grid-content"><h3 class="portfolio__grid-title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/portfolio-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="portfolio__grid-bottom"><div class="portfolio__grid-category"><span><a href="#">${ssrInterpolate($props.item.category)}</a></span></div><div class="portfolio__grid-show-project">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/portfolio-details",
    class: "portfolio-link-btn"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Show project <span${_scopeId}><svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createTextVNode(" Show project "),
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "26",
              height: "9",
              viewBox: "0 0 26 9",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M21.6934 1L25 4.20003L21.6934 7.4",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }),
              createVNode("path", {
                d: "M0.999999 4.19897H25",
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
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolios/portfolio-page/MasonrySingleItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MasonrySingleItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MasonrySingleItem as M,
  img_2 as a,
  img_3 as b,
  img_8 as c,
  img_5 as d,
  img_6 as e,
  img_7 as f,
  img_4 as g,
  img_1 as i
};
//# sourceMappingURL=MasonrySingleItem-BJgN510q.js.map
