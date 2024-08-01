import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = {
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        website: "",
        comment: "",
        isChecked: false
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-lg-4"><div class="portfolio__comment-input"><input type="text"${ssrRenderAttr("value", $data.formValue.name)} placeholder="Name *"></div></div><div class="col-lg-4"><div class="portfolio__comment-input"><input type="email"${ssrRenderAttr("value", $data.formValue.email)} placeholder="Email"></div></div><div class="col-lg-4"><div class="portfolio__comment-input"><input type="text"${ssrRenderAttr("value", $data.formValue.website)} placeholder="Website"></div></div><div class="col-lg-12"><div class="portfolio__comment-input"><textarea placeholder="Your Comment Here...">${ssrInterpolate($data.formValue.comment)}</textarea></div></div><div class="col-xxl-12"><div class="portfolio__comment-agree d-flex align-items-start mb-25"><input${ssrIncludeBooleanAttr(Array.isArray($data.formValue.isChecked) ? ssrLooseContain($data.formValue.isChecked, null) : $data.formValue.isChecked) ? " checked" : ""} class="e-check-input" type="checkbox" id="e-agree"><label class="e-check-label" for="e-agree"> Save my name, email, and website in this browser for the next time I comment. </label></div></div><div class="col-xxl-12"><div class="portfolio__comment-btn"><button type="submit" class="tp-btn">Submit Comment</button></div></div></div></form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/PostCommentForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PostCommentForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { PostCommentForm }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_post_comment_form = resolveComponent("post-comment-form");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio__comment grey-bg-7 pt-90 pb-105" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-12"><div class="portfolio__comment-top"><h3 class="portfolio__comment-title">Post a Comment</h3><p> Your email address will not be published. Required fields are marked * </p></div></div></div><div class="row"><div class="col-xxl-12"><div class="portfolio__comment-form">`);
  _push(ssrRenderComponent(_component_post_comment_form, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portfolio-details/classic-details/PortfolioCommentArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioCommentArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PortfolioCommentArea as P
};
//# sourceMappingURL=PortfolioCommentArea-DyU097Z3.js.map
