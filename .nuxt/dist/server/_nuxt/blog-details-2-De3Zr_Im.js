import { b as blogData } from "./blogData-CZIVutvo.js";
import { S as SingleBlogGridItem } from "./SingleBlogGridItem-D6ghcbk4.js";
import { B as BlogCommentForm, C as CommentArea } from "./CommentArea-BJgdoayI.js";
import { _ as _export_sfc, a as __nuxt_component_0$1, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_2 } from "./user-9-BOQgWp3s.js";
import { u as user_4 } from "./user-4-BaMCI89Q.js";
import HeaderOne from "./HeaderOne-CQq1TBjR.js";
import Footer from "./Footer-85SZoxrw.js";
import BackToTop from "./BackToTop-Dzk5hrJh.js";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-6-DCzgwACr.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
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
import "./HeaderInfo-Cgp-mq39.js";
import "./Language-DjIvJcaS.js";
import "./SearchPopup-CwNKVdMc.js";
import "./logo-MlJCTsTl.js";
import "./utils-Cinv2m6T.js";
import "./OffCanvasMain-B2oGt6VK.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./logo-black-DNxRSU5J.js";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
const thumb_bg = "" + __buildAssetsURL("blog-big-2.DwE9KGKC.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "postbox__more-navigation postbox__more-navigation-2 grey-bg-7 d-none d-sm-block" }, _attrs))}><div class="container"><div class="row"><div class="col-md-5"><div class="postbox__more-left d-flex align-items-center"><div class="postbox__more-icon">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M7 12.9718L2.06061 8.04401C1.47727 7.46205 1.47727 6.50975 2.06061 5.92778L7 1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "8",
            height: "14",
            viewBox: "0 0 8 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M7 12.9718L2.06061 8.04401C1.47727 7.46205 1.47727 6.50975 2.06061 5.92778L7 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="postbox__more-content"><p>Previous Article</p><h4>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Traveling Solo Is Awesome`);
      } else {
        return [
          createTextVNode("Traveling Solo Is Awesome")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4></div></div></div><div class="col-md-2"><div class="postbox__more-menu text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-masonry" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.6673 4.66662C12.9559 4.66662 14.0006 3.62196 14.0006 2.33331C14.0006 1.04466 12.9559 0 11.6673 0C10.3786 0 9.33398 1.04466 9.33398 2.33331C9.33398 3.62196 10.3786 4.66662 11.6673 4.66662Z" fill="currentColor"${_scopeId}></path><path d="M2.33331 4.66662C3.62196 4.66662 4.66662 3.62196 4.66662 2.33331C4.66662 1.04466 3.62196 0 2.33331 0C1.04466 0 0 1.04466 0 2.33331C0 3.62196 1.04466 4.66662 2.33331 4.66662Z" fill="currentColor"${_scopeId}></path><path d="M11.6673 13.9996C12.9559 13.9996 14.0006 12.955 14.0006 11.6663C14.0006 10.3777 12.9559 9.33301 11.6673 9.33301C10.3786 9.33301 9.33398 10.3777 9.33398 11.6663C9.33398 12.955 10.3786 13.9996 11.6673 13.9996Z" fill="currentColor"${_scopeId}></path><path d="M2.33331 13.9996C3.62196 13.9996 4.66662 12.955 4.66662 11.6663C4.66662 10.3777 3.62196 9.33301 2.33331 9.33301C1.04466 9.33301 0 10.3777 0 11.6663C0 12.955 1.04466 13.9996 2.33331 13.9996Z" fill="currentColor"${_scopeId}></path></svg></span>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", {
                d: "M11.6673 4.66662C12.9559 4.66662 14.0006 3.62196 14.0006 2.33331C14.0006 1.04466 12.9559 0 11.6673 0C10.3786 0 9.33398 1.04466 9.33398 2.33331C9.33398 3.62196 10.3786 4.66662 11.6673 4.66662Z",
                fill: "currentColor"
              }),
              createVNode("path", {
                d: "M2.33331 4.66662C3.62196 4.66662 4.66662 3.62196 4.66662 2.33331C4.66662 1.04466 3.62196 0 2.33331 0C1.04466 0 0 1.04466 0 2.33331C0 3.62196 1.04466 4.66662 2.33331 4.66662Z",
                fill: "currentColor"
              }),
              createVNode("path", {
                d: "M11.6673 13.9996C12.9559 13.9996 14.0006 12.955 14.0006 11.6663C14.0006 10.3777 12.9559 9.33301 11.6673 9.33301C10.3786 9.33301 9.33398 10.3777 9.33398 11.6663C9.33398 12.955 10.3786 13.9996 11.6673 13.9996Z",
                fill: "currentColor"
              }),
              createVNode("path", {
                d: "M2.33331 13.9996C3.62196 13.9996 4.66662 12.955 4.66662 11.6663C4.66662 10.3777 3.62196 9.33301 2.33331 9.33301C1.04466 9.33301 0 10.3777 0 11.6663C0 12.955 1.04466 13.9996 2.33331 13.9996Z",
                fill: "currentColor"
              })
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-md-5"><div class="postbox__more-right d-flex align-items-center justify-content-end"><div class="postbox__more-content"><p>Next Article</p><h4>`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`A Beautiful Sunday Morning`);
      } else {
        return [
          createTextVNode("A Beautiful Sunday Morning")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4></div><div class="postbox__more-icon">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 12.9718L5.93939 8.04401C6.52273 7.46205 6.52273 6.50975 5.93939 5.92778L1 1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "8",
            height: "14",
            viewBox: "0 0 8 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M1 12.9718L5.93939 8.04401C6.52273 7.46205 6.52273 6.50975 5.93939 5.92778L1 1",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog-details/PostboxNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PostboxNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_1 = "" + __buildAssetsURL("blog-big-3.IkpziH9K.jpg");
const _sfc_main$1 = {
  components: { SingleBlogGridItem, PostboxNavigation, BlogCommentForm, CommentArea },
  mixins: [blogData],
  data() {
    return { thumb_bg };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_single_blog_grid_item = resolveComponent("single-blog-grid-item");
  const _component_comment_area = resolveComponent("comment-area");
  const _component_blog_comment_form = resolveComponent("blog-comment-form");
  const _component_postbox_navigation = resolveComponent("postbox-navigation");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "postbox__area" }, _attrs))}><div class="postbox__wrapper postbox__style-2"><div class="postbox__top"><div class="container"><div class="row justify-content-center"><div class="col-xl-10"><div class="postbox__category"><a href="#">Business</a></div><h3 class="postbox__title">Fashion and interior design are one and the same</h3><div class="postbox__thumb postbox__thumb-overlay m-img mb-55" style="${ssrRenderStyle({ backgroundImage: `url(${$data.thumb_bg})` })}"></div><div class="postbox__meta-wrapper d-flex align-items-center justify-content-center flex-wrap"><div class="postbox__meta-item mb-30"><div class="postbox__meta-author d-flex align-items-center"><div class="postbox__meta-author-thumb"><a href="#"><img${ssrRenderAttr("src", _imports_2)} alt=""></a></div><div class="postbox__meta-content"><span class="postbox__meta-type">Author</span><p class="postbox__meta-name"><a href="#">Fig Nelson</a></p></div></div></div><div class="postbox__meta-item mb-30"><div class="postbox__meta-content"><span class="postbox__meta-type">Published</span><p class="postbox__meta-name">April 24, 2022</p></div></div><div class="postbox__meta-item mb-30"><div class="postbox__meta-content"><span class="postbox__meta-type">2 Comments</span><p class="postbox__meta-name"><a href="#tp-blog-details-comment">Join the Conversation</a></p></div></div><div class="postbox__meta-item mb-30"><div class="postbox__meta-content"><span class="postbox__meta-type">View</span><p class="postbox__meta-name">12,145 views</p></div></div></div></div></div></div></div><div class="postbox__main-wrapper pt-75"><div class="container"><div class="row"><div class="col-xl-2 col-lg-2 col-md-1"><div class="postbox__details-social d-flex flex-sm-column pt-5"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div></div><div class="col-xl-8 col-lg-9 col-md-11"><div class="postbox__details-content-wrapper"><h3 class="postbox__details-title-2">Using a Query</h3><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p><div class="postbox__details-content"><div class="row"><div class="col-md-4"><h5 class="postbox__details-title-3">Explore the city and new places</h5></div><div class="col-md-8"><p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently...!</p></div></div></div><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p></div></div></div><div class="row"><div class="col-xl-12"><div class="postbox__img-2 m-img mt-45 mb-70"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="row justify-content-center"><div class="col-xl-8 col-lg-10"><div class="postbox__details-content-2 pb-120"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><div class="postbox__quote postbox__quote-style-2"><blockquote><div class="postbox__quote-icon"><span><svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.6645 0C27.2731 0 28.5892 0.329033 29.6129 0.987098C30.6366 1.64516 31.4774 2.48602 32.1355 3.50968C32.9398 4.67957 33.4516 5.95915 33.671 7.34839C33.8903 8.73764 34 9.87097 34 10.7484C34 14.3312 33.086 17.585 31.2581 20.5097C29.4301 23.4344 26.5785 25.8108 22.7032 27.6387L21.7161 25.6645C23.9828 24.714 25.9204 23.2151 27.529 21.1677C29.2108 19.1204 30.0516 17.0366 30.0516 14.9161C30.0516 14.0387 29.9419 13.271 29.7226 12.6129C28.5527 13.5634 27.2 14.0387 25.6645 14.0387C23.7634 14.0387 22.1183 13.4172 20.729 12.1742C19.3398 10.9312 18.6452 9.21291 18.6452 7.01936C18.6452 4.97205 19.3398 3.29033 20.729 1.9742C22.1183 0.658065 23.7634 0 25.6645 0ZM7.01936 0C8.62796 0 9.94409 0.329033 10.9677 0.987098C11.9914 1.64516 12.8323 2.48602 13.4903 3.50968C14.2946 4.67957 14.8065 5.95915 15.0258 7.34839C15.2452 8.73764 15.3548 9.87097 15.3548 10.7484C15.3548 14.3312 14.4409 17.585 12.6129 20.5097C10.7849 23.4344 7.93333 25.8108 4.05806 27.6387L3.07097 25.6645C5.33763 24.714 7.27527 23.2151 8.88387 21.1677C10.5656 19.1204 11.4065 17.0366 11.4065 14.9161C11.4065 14.0387 11.2968 13.271 11.0774 12.6129C9.90753 13.5634 8.55484 14.0387 7.01936 14.0387C5.11828 14.0387 3.47312 13.4172 2.08387 12.1742C0.694624 10.9312 0 9.21291 0 7.01936C0 4.97205 0.694624 3.29033 2.08387 1.9742C3.47312 0.658065 5.11828 0 7.01936 0Z" fill="currentColor"></path></svg></span></div><p>“I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.”</p></blockquote></div><p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis dolorum fuga.</p><div class="postbox__features postbox__features-2"><ul><li>Get yourself comfortable.</li><li>Manage your workspace and organize your desk.</li><li>Keep In touch with your co-workers.</li></ul></div><p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><div class="postbox__share-wrapper mt-45 mb-25"><div class="row align-items-center"><div class="col-xl-7 col-lg-7"><div class="tagcloud tagcloud-style-2"><span>Tags:</span><a href="#">Blog</a><a href="#">Creative</a><a href="#">Portfoilo</a><a href="#">Harry</a></div></div><div class="col-xl-5 col-lg-5"><div class="postbox__share postbox__share-2 text-lg-end"><span>Share On:</span><a href="#"><i class="fa-brands fa-linkedin-in"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-facebook-f"></i></a></div></div></div></div><div class="postbox__author postbox__author-2 d-sm-flex align-items-start white-bg"><div class="postbox__author-thumb"><a href="#"><img${ssrRenderAttr("src", user_4)} alt=""></a></div><div class="postbox__author-content"><h3 class="postbox__author-title"><a href="#">Colene Landin</a></h3><p>Digital content wrangler | UX enthusiast | Recovering educator &amp; GIF hockey fan Oxford comma or death.!</p><div class="postbox__author-social d-flex align-items-center"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div></div></div></div></div></div></div></div><div class="postbox__related grey-bg-7 pb-90 pt-95"><div class="container"><div class="row"><div class="col-xl-12"><h3 class="postbox__related-title">You may also like</h3></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.blogData.slice(38, 41), (item, i) => {
    _push(`<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">`);
    _push(ssrRenderComponent(_component_single_blog_grid_item, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="postbox__comment-wrapper postbox__comment-style-2 pt-90 pb-65"><div class="container"><div class="row justify-content-center"><div class="col-xl-8 col-lg-10"><div class="postbox__comment mb-75" id="tp-blog-details-comment"><h3 class="postbox__comment-title">Comments (2)</h3>`);
  _push(ssrRenderComponent(_component_comment_area, null, null, _parent));
  _push(`</div><div class="postbox__comment-form"><h3 class="postbox__comment-form-title">Leave A Reply</h3><p>Your email address will not be published. Required fields are marked *</p>`);
  _push(ssrRenderComponent(_component_blog_comment_form, null, null, _parent));
  _push(`</div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_postbox_navigation, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog-details/BlogDetailsAreaTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { HeaderOne, Footer, BackToTop, BlogDetailsAreaTwo: __nuxt_component_0 },
  setup() {
    useHead({
      title: "Blog Details - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_one = resolveComponent("header-one");
  const _component_blog_details_area_two = __nuxt_component_0;
  const _component_Footer = resolveComponent("Footer");
  const _component_back_to_top = resolveComponent("back-to-top");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_header_one, {
    header_solid: true,
    commonOffcanvas: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_blog_details_area_two, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-details-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogDetails2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blogDetails2 as default
};
//# sourceMappingURL=blog-details-2-De3Zr_Im.js.map