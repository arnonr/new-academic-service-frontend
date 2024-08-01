import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = {
  props: {
    item: {},
    masonry: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  if ($props.item) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: `blog__grid-item ${$props.masonry ? "blog__masonary" : ""} ${!$props.item.file ? "no-img" : ""}`
    }, _attrs))} data-v-dc653b1b><div class="blog__item-10 white-bg transition-3 mb-30 fix" data-v-dc653b1b><div class="blog__thumb-10 w-img fix w-img-news" data-v-dc653b1b>`);
    if ($props.item.file) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: $props.item.link + $props.item.id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", $props.item.file)} alt="blog img" class="img-news" data-v-dc653b1b${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: $props.item.file,
                alt: "blog img",
                class: "img-news"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="blog__content-10" data-v-dc653b1b><div class="blog__content-10-top" data-v-dc653b1b>`);
    if (!$props.item.file) {
      _push(`<div class="blog__tag-10" data-v-dc653b1b><a href="#" data-v-dc653b1b>${ssrInterpolate($props.item.type_name)}</a></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<h3 class="blog__title-10" data-v-dc653b1b>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: $props.item.link + $props.item.id
    }, {
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
    _push(`</h3></div><div class="blog__content-10-bottom d-flex align-items-center justify-content-between" data-v-dc653b1b><div class="blog__meta-author-10 d-flex align-items-center" data-v-dc653b1b><div class="blog__meta-author-content-10" data-v-dc653b1b>`);
    if ($props.item.file) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: $props.item.link + $props.item.id,
        class: "text-color-primary text-uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate($props.item.link == "equipment-and-rate/" ? "รายละเอียด" : "อ่านต่อ")} <i class="fa fa-arrow-right news-link-view" data-v-dc653b1b${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(toDisplayString($props.item.link == "equipment-and-rate/" ? "รายละเอียด" : "อ่านต่อ") + " ", 1),
              createVNode("i", { class: "fa fa-arrow-right news-link-view" })
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="blog__meta-10 blog-meta-10-2" data-v-dc653b1b><span data-v-dc653b1b><i class="fa-regular fa-tag" style="${ssrRenderStyle({ "margin-right": "0px", "color": "#bdbdc6" })}" data-v-dc653b1b></i> ${ssrInterpolate($props.item.type_name)}</span></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/GridItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NewsGridItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dc653b1b"]]);
export {
  NewsGridItem as N
};
//# sourceMappingURL=GridItem-COh17Ezs.js.map
