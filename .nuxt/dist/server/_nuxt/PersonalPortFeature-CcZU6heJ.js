import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./user-2-CWDkkzb7.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
import { _ as _export_sfc } from "../server.mjs";
const feature_thumb_1 = "" + __buildAssetsURL("features-1.CMzLrGo2.jpg");
const feature_thumb_2 = "" + __buildAssetsURL("features-2.CiCHQlZU.jpg");
const feature_thumb_3 = "" + __buildAssetsURL("features-3.CbZ1O7qr.jpg");
const feature_thumb_4 = "" + __buildAssetsURL("features-4.BtnZGfPt.jpg");
const _sfc_main = {
  data() {
    return {
      serviceActive: "features-img-2",
      feature_contents: [
        { id: 1, subtitle: "Strategy", title: "Concept" },
        { id: 2, subtitle: "Analysis", title: "Research" },
        { id: 3, subtitle: "Development", title: "Design" },
        { id: 4, subtitle: "Prototyping", title: "Animation" }
      ],
      feature_thumbs: [
        { ref: "features-img-1", img: feature_thumb_1 },
        { ref: "features-img-2", img: feature_thumb_2 },
        { ref: "features-img-3", img: feature_thumb_3 },
        { ref: "features-img-4", img: feature_thumb_4 }
      ]
    };
  },
  methods: {
    handleServiceActive(id) {
      this.serviceActive = `features-img-${id}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features__area pt-140 pb-140" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4 col-md-6"><div class="features__wrapper-9 mr-30"><!--[-->`);
  ssrRenderList($data.feature_contents, (list) => {
    _push(`<div class="${ssrRenderClass(`features__content-9 features-item-content ${$data.serviceActive === `features-img-${list.id}` ? "active" : ""}`)}"${ssrRenderAttr("rel", $data.serviceActive)}><span>${ssrInterpolate(list.subtitle)}</span><h3 class="features__title-9">${ssrInterpolate(list.title)}</h3></div>`);
  });
  _push(`<!--]--></div></div><div class="col-xl-8 col-lg-8 col-md-6 d-none d-md-block"><div class="features__thumb-wrapper-9 pl-20"><div id="features-item-thumb" class="${ssrRenderClass($data.serviceActive)}"><!--[-->`);
  ssrRenderList($data.feature_thumbs, (item, i) => {
    _push(`<div class="${ssrRenderClass(`features__thumb-9 transition-3 ${item.ref} ${$data.serviceActive === item.ref ? "active" : ""}`)}"><img${ssrRenderAttr("src", item.img)} alt="image"><div class="features__thumb-9-content"><p> “I design beautifully simple things,and i love what i do.” </p><div class="features-users"><img${ssrRenderAttr("src", _imports_0)} alt="user"><img${ssrRenderAttr("src", _imports_1)} alt="user"><img${ssrRenderAttr("src", user_3)} alt="user"></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/PersonalPortFeature.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PersonalPortFeature = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PersonalPortFeature as P
};
//# sourceMappingURL=PersonalPortFeature-CcZU6heJ.js.map
