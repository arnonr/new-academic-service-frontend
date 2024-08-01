import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const price_icon_1 = "" + __buildAssetsURL("price-icon-1.aJ93FOVp.png");
const price_icon_2 = "" + __buildAssetsURL("price-icon-2.rECO125Q.png");
const price_icon_3 = "" + __buildAssetsURL("price-icon-3.kHEv3RIF.png");
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJJSURBVHgBtVRLaFNBFL13Ju8lLx+NjRIQsaCgIEjBjehCIn5iFFSQ7rQIGiQG3LuydSeIK0Waal2oC91KrVbQgLjMQnDhQohYXYmtrcl7mfcyc71ZqKj95nNWd96bmTPn3DMD0EMMDpKEYRKtWkAPQESYuUXx2gmIne0Hm78gQpeRGaZIPO2lhE1kmtoXIaXmp9d7IegiDozV0raupYxjNd3AUxE7afSPwC9fAd0VRXtuTDvr4untQjadoEnKRpaBxvX9yNdyEWutOR0rOnS3vlFquRPQGEOopAUGG1T/JiOfK0UMfs1rW9GOx2Rv/u4O8BZbUcgGB8BHoIYGqE7lneq/89siyo25m/j0+6UwYUOiIZiEFc1q1JXn59fOLLRm1dYdKdWyYGBASlSkwUcJJtD0fgZjbysX/ljVNlH2zlyfoPAQ34k+AvA5vATC8hqBflkuxD4ut35FRNmSdxANZRGMZLMV30eDgFWIWk/Kp+35leyxJFFunDagdi+ygi2AbJUhhUR1NM0Xk4U1b2AVWDQMx0ruXoN4iZNk8VDxu6IIxQeD/u3FGr4U/lN0/BolgqR3zgCc5CHHlknYMyZ5+izvPIA28Zeiw6PubilwhBue4l8tm7jp9Ekbc32qkHgHHeC3olzJG+En9gyXivOk2DJCEI9STnj8/hDWoUOEjt70+ikMD7neZrgPnCZOFMyJQF+eKEZfQZcgICL3IcEutstCRIuAKlLDqYliomskLYT4Wr/GEHzhOspEVyfzzij0Epl7s0noIX4CFagEwji2FJ8AAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgBlZDNccIwEIXf8w9nSqEDMmkEJpkwSQU5cECmCm6YGX7acAnQCQ1Yy5Ms23BEGs1Ku9/uWy2Rlv39zFF4h7KdyU5RWoPc19yeDiHOCK1WGxTmkLdA6U1gsJQPmJjj+lzRvn6XytwraF1QUHdMkN6tIcdnBo9F1CYJ004iMuzb0m2TyXx0TapCpGxoKVFK8TOBdk+xvoaF65hj0uFUIK8D0AuZ4aUi2ATpavA9qwaYKYOsM9a7Rv25SERJGwuFL7Ws+H85cBz49wIFlhrHHBN/13huKFHRHRu8sx78P1bpFNjl/AAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgBlZJNaxNRFIbPnWRVFKJ/oOPKlTRZigsTNN0ad6JCggsXgiWhq66aoqCgkBRFUrowG0FiwfQXTGYvGBFcCZ38glZcOJnz5ZmhhNLvvnAHLof3nOe8d9ynnd5HEi6S4Cihf9txPB23Su09OIdc//f7QEEWiOkKCoIoK3ISssgQJfmxUno9OsmcJ8aJgPhPry9ffffzVZkAa2a8LUodVXUvvi3vJpQ24xEqhm9ubY5nZmQCdZxdnt9YSadkk9rfm4Wc5MokdM+al42oZs2gFTYiUhwR4XbeJkSiUj+M1C51072H+weaQcP3cmDNcJWU6gxS9ERk19Dh7a+X83CKupV+lHAyz8q+MIdzf6mSTzT+o2LVGE80NoNaAWGuY4QN2319o7rVzHZmoh0GBWK4ZvfJUeMDH9X7ajsXQaC1Uf3SnQXGTidsoTmnR7CfBQ+LxpMaCypc6VW3Rgfr3jSOwRKFKSbuYGEpeFT3wAUixuVNS4eNmbl9s2vRkzLwbPJS+HhVQPvCGHmA5V5lGMExyqcfw56Iqp8Go3C5YyR1FVn/cHfQhFOUme3t7Igv7lJgFAuGuta7M1iDM5SZUTgSobL9lntA+qS3OOjDObSPjZE9foTOu7+5+HkMF1W6L1xQ/wG7b0Mtx2Kc6QAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJuSURBVHgBnZS/axRBFMe/b37s3uUu5494imBAAtHCStNYWES7EEghnIWVVf6O/BU2WqSKRSCRFEasrhOsBCEWQqIiSiLkLr/c3dudeb7dYGIgP27zYGZg5s1n33vzfUs4w3h83KDZrAH1ACmn9Hq2e5o/nQwZHobyV8CqCaUMmAy01mD2gP0JuFV69XL9TCBPTQ3CDtyGpxqstfBOFUBlZXgD5FBZVaCh+Cvizgean+8dC+SJVhNVdbO4AKPlrqwsF00MIgeNyxJxVVw1oLTsGRgVIdJvaf75bs4wRyKDv47MZzD5tqxk1/D7+zq129mBX2v6AnQ0KmcjAiR4HkDoH8nR0pEIefLxCBRVZUciMyni7VVaXk5wgvHTZ6MS7d2DSIFPNPfiI+1/tVXHbnoNVlK11uOz+kYrh3U5FUrm3n5ZlEfcXVDFSZLUwLFDAocttdEPrEhvbvaLlGhb0s6QV9jWbyjO004SBR86BOzw4M4OypjyazK7Akr6qsHYmGhMQBTLtk5pZsaXAobo4o93IiESrVYNBgdZipoJNE/doazt7fWgqhm8ynOVud32cM4V0PNYVslf2BWDESt5Zo9OJy2gWscob0PwuWZlpLx5qENmkSlxGRJPTISoXLwv7SGyCQyizvuDTikNa7Wk/YJbkmiWJ4nUdWlpaUfhHMbT0xaRH0USh1KqDLkKG2alCKxviJQED5/UUI8qyNQQwjAofiImb/z0Fy0s/CgHnJy8JNQGqKKlAYw8hEEqtQvVOi0ubvzzM/0CkQ0QbCT16jF6QX4zQhZt0pt3e/+79Q9sYAudqoPdZUSNHrVnj5XYX2jzCNGoH9XNAAAAAElFTkSuQmCC";
const _sfc_main = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      pricing_data: [
        {
          id: "nav-monthly",
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support"
              ]
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 150,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet"
              ]
            },
            {
              icon: price_icon_3,
              price: 220,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet"
              ]
            }
          ]
        },
        {
          id: "nav-yearly",
          active: true,
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support"
              ]
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 198,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet"
              ]
            },
            {
              icon: price_icon_3,
              price: 298,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet"
              ]
            }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing__area pt-110 pb-140 p-relative z-index-1" }, _attrs))}><div class="pricing__shape"><img class="pricing__shape-2"${ssrRenderAttr("src", _imports_0)} alt="shape"><img class="pricing__shape-3"${ssrRenderAttr("src", _imports_1)} alt="shape"><img class="pricing__shape-4"${ssrRenderAttr("src", _imports_2)} alt="shape"><img class="pricing__shape-5"${ssrRenderAttr("src", _imports_3)} alt="shape"></div><div class="container"><div class="row"><div class="col-xxl-12"><div class="section__title-wrapper-5 mb-50 text-center"><span class="section__title-pre-5">Pricing Plan</span><h3 class="section__title-5">Plans for Everyone</h3></div></div></div><div class="row justify-content-center"><div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9"><div class="pricing__tab-nav tp-tab mb-50 mx-auto"><nav><div class="nav nav-tabs price-tab-slide justify-content-center" id="nav-tab" role="tablist"><label for="price-tab-check" class="nav justify-content-center"><span class="nav-link" id="nav-monthly-tab" data-bs-toggle="tab" data-bs-target="#nav-monthly" role="tab" aria-controls="nav-monthly" aria-selected="true">Billed monthly</span><input type="checkbox" id="price-tab-check"><i></i><span class="nav-link active" id="nav-yearly-tab" data-bs-toggle="tab" data-bs-target="#nav-yearly" role="tab" aria-controls="nav-yearly" aria-selected="false">Billed yearly <span>-35%</span></span></label></div></nav></div></div></div><div class="row"><div class="col-xxl-12"><div class="tab-content" id="nav-tabContent" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><!--[-->`);
  ssrRenderList($data.pricing_data, (item, i) => {
    _push(`<div class="${ssrRenderClass(`tab-pane fade ${item.active ? "show active" : ""}`)}"${ssrRenderAttr("id", `${item.id}`)} role="tabpanel"${ssrRenderAttr("aria-labelledby", `${item.id}-tab`)} tabIndex="0"><div class="row"><!--[-->`);
    ssrRenderList(item.pricing_items, (item_box, i2) => {
      _push(`<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><div class="${ssrRenderClass(`pricing__item-5 d-flex flex-column ${item_box.has_popular ? "has-popular" : ""} mb-40`)}">`);
      if (item_box.has_popular) {
        _push(`<div class="pricing__popular"><p>MOST POPULAR</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pricing__top-5 grey-bg-10 p-relative"><div class="pricing__icon-5"><img${ssrRenderAttr("src", item_box.icon)} alt="icon"></div><div class="pricing__title-wrapper"><h3 class="pricing__title-5"> $${ssrInterpolate(item_box.price)} <span>/${ssrInterpolate(item_box.price_text)}</span></h3><p>${ssrInterpolate(item_box.text)}</p></div><div class="pricing__tag-5"><span>${ssrInterpolate(item_box.tag)}</span></div></div><div class="pricing__content-5"><div class="pricing__content-5-inner d-flex flex-column justify-content-between"><div class="pricing__feature-5"><p>${ssrInterpolate(item_box.feature_text)}</p><ul><!--[-->`);
      ssrRenderList(item_box.lists, (l, i3) => {
        _push(`<li>${ssrInterpolate(l)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="pricing__btn-5">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: "/contact",
        class: "tp-btn-grey w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Choose Plan `);
          } else {
            return [
              createTextVNode(" Choose Plan ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pricing/AgencyPricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AgencyPricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AgencyPricing as A
};
//# sourceMappingURL=AgencyPricing-BnNNhlQr.js.map
