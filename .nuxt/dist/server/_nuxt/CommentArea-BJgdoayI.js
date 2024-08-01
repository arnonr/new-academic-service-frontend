import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _imports_0 } from "./user-2-CWDkkzb7.js";
import { a as _imports_9 } from "./user-12-VtwPgTar.js";
import { u as user_3 } from "./user-3-BaW4QZ27.js";
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
  _push(`<form${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6"><div class="postbox__comment-input"><input type="text"${ssrRenderAttr("value", $data.formValue.name)} placeholder="Name*"></div></div><div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6"><div class="postbox__comment-input"><input type="email"${ssrRenderAttr("value", $data.formValue.email)} placeholder="Email"></div></div><div class="col-xxl-4 col-xl-4 col-lg-12"><div class="postbox__comment-input"><input type="text"${ssrRenderAttr("value", $data.formValue.website)} placeholder="Website"></div></div><div class="col-xxl-12"><div class="postbox__comment-input"><textarea placeholder="Your Comment Here...">${ssrInterpolate($data.formValue.comment)}</textarea></div></div><div class="col-xxl-12"><div class="postbox__comment-agree d-flex align-items-start mb-25"><input${ssrIncludeBooleanAttr(Array.isArray($data.formValue.isChecked) ? ssrLooseContain($data.formValue.isChecked, null) : $data.formValue.isChecked) ? " checked" : ""} class="e-check-input" type="checkbox" id="e-agree"><label class="e-check-label" for="e-agree"> Save my name, email, and website in this browser for the next time I comment. </label></div></div><div class="col-xxl-12"><div class="postbox__comment-btn"><button type="submit" class="tp-btn">Submit Comment</button></div></div></div></form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/BlogCommentForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogCommentForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(_attrs)}><li><div class="postbox__comment-box d-sm-flex align-items-start"><div class="postbox__comment-info"><div class="postbox__comment-avater"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="postbox__comment-text"><div class="postbox__comment-name"><span class="post-meta"> July 14, 2022</span><h5><a href="#">Eleanor Fant</a></h5></div><p> One’s of the best template out of there. design, code quality, updates etc everything you needs guys, buy it you won’t regret it! </p><div class="postbox__comment-reply"><a href="#">Reply</a></div></div></div><ul class="children"><li><div class="postbox__comment-box d-sm-flex align-items-start"><div class="postbox__comment-info"><div class="postbox__comment-avater"><img${ssrRenderAttr("src", _imports_9)} alt=""></div></div><div class="postbox__comment-text"><div class="postbox__comment-name"><span class="post-meta"> July 14, 2022</span><h5><a href="#">Alexander Ljung</a></h5></div><p> This theme is super awesome! But I had one small issue with link option in parallax portfolio. The other day! </p><div class="postbox__comment-reply"><a href="#">Reply</a></div></div></div></li></ul></li><li><div class="postbox__comment-box d-sm-flex align-items-start"><div class="postbox__comment-info"><div class="postbox__comment-avater"><img${ssrRenderAttr("src", user_3)} alt=""></div></div><div class="postbox__comment-text"><div class="postbox__comment-name"><span class="post-meta"> July 14, 2022</span><h5><a href="#">Shahnewaz Sakil</a></h5></div><p> His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked </p><div class="postbox__comment-reply"><a href="#">Reply</a></div></div></div></li></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog-details/CommentArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommentArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BlogCommentForm as B,
  CommentArea as C
};
//# sourceMappingURL=CommentArea-BJgdoayI.js.map
