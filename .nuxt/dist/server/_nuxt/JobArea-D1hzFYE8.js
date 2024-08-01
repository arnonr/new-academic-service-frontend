import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main$1 = {
  mixins: [SalScrollAnimationMixin],
  props: {
    delay: String,
    title: String,
    time: String,
    location: String,
    tag: String,
    date: String,
    vacancy: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "job__item transition-3",
    "data-sal": "slide-up",
    "data-sal-delay": $props.delay,
    "data-sal-duration": "1000"
  }, _attrs))}><div class="row align-items-center"><div class="col-xl-6 col-lg-7 col-md-9"><div class="job__content"><h3 class="job__title">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/job-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="job__meta-wrapper d-sm-flex flex-wrap align-items-center"><div class="job__meta-item"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5826 10.2259L8.41256 8.93093C8.03456 8.70693 7.72656 8.16793 7.72656 7.72693V4.85693" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate($props.time)}</span><span><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.03611 9.003C8.2426 9.003 9.22065 8.02495 9.22065 6.81846C9.22065 5.61197 8.2426 4.63391 7.03611 4.63391C5.82962 4.63391 4.85156 5.61197 4.85156 6.81846C4.85156 8.02495 5.82962 9.003 7.03611 9.003Z" stroke="currentColor" stroke-width="1.5"></path><path d="M1.16997 5.54414C2.54932 -0.519378 11.5326 -0.512376 12.9049 5.55114C13.7101 9.10803 11.4976 12.1188 9.55807 13.9812C8.15072 15.3396 5.92416 15.3396 4.50981 13.9812C2.57732 12.1188 0.36477 9.10103 1.16997 5.54414Z" stroke="currentColor" stroke-width="1.5"></path></svg> ${ssrInterpolate($props.location)}</span></div><div class="job__tag"><span>${ssrInterpolate($props.tag)}</span></div></div></div></div><div class="col-xl-3 col-lg-3 col-md-3 col-sm-6"><div class="job__vacancies"><span>${ssrInterpolate($props.date)}</span><p>No of vacancies: ${ssrInterpolate($props.vacancy)}</p></div></div><div class="col-xl-3 col-lg-2 col-md-6 col-sm-6"><div class="job__btn text-xl-end">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/job-details",
    class: "tp-btn-border"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Apply`);
      } else {
        return [
          createTextVNode("Apply")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/job-position/JobItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JobItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAtCAYAAADRLVmZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAo4SURBVHgB7VlfjFRXGf+dc++dmZ2ZZXeW/cMCCwtWDAWDQKHaaGtiG9MKtSY2Gh9sbCJJYzAmJqhPPJnG6BMxqfZFXtpoX9qHQtWGAltEQUX+KBRsqqS7sLAM+39m7r9z/M65987cuXNnl04bn3o2d+/ce875vt/353zfd85l+Ggau3LmSl/PcGEDZ8ygy3YXF2u271dFJlNl9Mw5t0dHR236LfERNIYP0b6452D/lWsnf1gpj+/evnXTrhd/caBoWhlITVZq2pwZ+lH9I4HuPLznuz+YrYj356cuvo0P0Ux02KSUbGTLnj9609e3S9/BP86fh1tbBGk2GgClWgGnrhwfGKhUpl/ybQ9dPRsOVGf/83N02Dg6bLuf/PH9XvX2dtuxIVwbpUxFKi+Qwof0veAu1F3ELp/GVujukv69nzx98JUMOmwda9ywbxeFPSeVSxhm5i9PbZgZ++dvf7YpVygUDfC8YfEs51aWPD4ruJE3TIMV+4Yv2/bip7lRGJLS7714+vf9ROoGOmgdAy+X/wunOk8eIUDI5aGz3o8OnW1yW+3oyXnDo1vPVmbuDLlCIuvaHVu844lzt8bh2gtgUmqHTxmSGj0kDCmDObBM5/8PvDpXhu+50EtQkAPfa6sLKeAvuB3zr7vKqWef7Ub17OOZjGuZ3LCZb7gez7o+DJcz7gBdblem6HhG0bP9rPPCn08MHX9vAa7hKTDW8X0H8zt37nWxb6ev4LWL11zHSakt5blzBjps9VB14ptbfo3atX1WwYXJG2Ym+ozRMMY4KVcpyIAnOXN8V9Zcjyldc4PL3mJhinHuEiiHoDk0nszBSSrmEgnPk4bn2a5zYcreOV2xez3i8PmR4aMrsl23DbAaY6YrSVFCWD43skQj77Js3jGsbpdnu92a7V5/8JcvvNYE/K1nvvAVe/bs6xXXwcqcRHdfCDomYd2LZewmAwoqdDNWf4xJHd5IOM9THtVgypZKfTKkE87XYymaEp+xyS488eSLqGgf4974V2cGP4dPHHgd1uhuzc/MAlZ0UbTNZMMrR890ZcPf6p1JDmcYwcXVnQfCRJdhBuNyXTQvF8wzM8FlWEF/dPHwUk7MrOAuiaa0wHyOR4YdfqAu/JGvrSmXnnm+lB9YDXnzMpyj39fAlAQyqXG0arSN0hral62dyfftaMpWS5QHJNaa5/Y/3V/2rvfm+lfpCMEH7yPTUgrhlOXUQBlDEQoQWVmydGZAwtRJQVhrkGdIFzw+LnTHlRM16zOm52MN78o3ZpCPCKtI9poFE82MtMQsRlg2CxABrVsnNlZrOYYiruHUJBCTNLG8lOtuNT33Vt4cWhGbICG4BdcNFlVaW8rMccwti7TN+/gjiwvYxhUllwOmM3/JMPjDLHIBSTM9waAwp6WVNDD6niZIyrhUIMkXos2gyIK+Z5ouqkbUE0jMKCMK0jq0jycnywSttPf1PtkeaYv2l2uyOTyapy7WLm7euuGNbrDHozG3qgVYVhmML0H8XjR8D9qOazJ1cGJdqEc/9A6cP/Xmfl+KQ0GGBCbHDmNm7GUM9aXQlOm82zFeTugO9mBydh57da0iQmLKvylVY2jHl7Bw4xIm372EHkoaltXMcGIGGLtZqEvy2PoaVubFkviWhwO8O8UwXslQUSGxIiewbZXXPIRYzIniq984snAkKLIUz3rIozq5ewjrv/w93Bo5hvK5Y7Cm76KnGGREBebMhIFXJ/vgUh5XUaiUFXhstNY+GMu2WOvdKhAcvtKFd5xe+PSgFt7v+ie1u6owM4sS+La9WLHpgWN4bX9QHaq07IcxW7kKbVxQKK3B2h1PoWfdDkxdHcPti39CbnYO3QVodmoDEdXVQu0vZRurx2N7StaJx37Pl3WaVMfp4FATBfhbn0BhdBv6htZS2aABhGWt2g/qfXjAmnbmuiDJUvFg5goo9K3G3MYHSYCTuHHhDKaqgaalDvQSaSkcSwjRIlT4TwS6RxThZtY/iuLmhzC4ai0KK0qUeLrCVRgCj/u4Pksg+6gqVnWbFh0r0C7SzORRJAGuFdbg0rkjocYjJh/Im1MFiiiIkC4j3iOPfB1FBTibpwKOlKkUGuZps3l2aDtVgctAANVUxWeqBVoooWdgPVWDRgg6cJfFqtQLh3Wwn5Eh6LkqXU6QLgN3EVhRGoA6p+Fkea5ABC4anNfEYDeroO44yjh0cUNPNsiF1LPWuAiY3EAGV+8AswuA/ADKV2NdChw32RAOv2dhypH6GAOh1hU/2n2pg6TGJMNIarwZcGT+qMpjoQDqwIeF/i3DdPbJbQ9g5P5uTF89h7kbNynKSBQLSwNW+OZza1Ad3YruwWEMlN+EOVGm3VWocRqgFcZYiCkIe5GmzSTs6IcuXkL/rZelCrgeEGgb6tCHnnoGRrBuyw4Mb9yF6fELmPjbSdy5XsYgnZrk882gFeAFYyXsdbvQu3Ez1vYPkBUtlEp/hWmUw/CmNK7cNfjdqJ9VpEksTiVlYBIJ+/xLYLf+Tkz8IOJojLQrp7jNp+fRX5vFv/2uMLJQ5zt/oMLsmGbSSzv/Qn4OC+voJIASyowt9a5HrRFJ5Go1RlvDBQzeHYM5f1ovINpo4rO1Cl5xiEdw0AhTeph7+TuESW96g1pchUxH/HTs24PHgzhOw0VkQ5q4+K83YFXG69VhFK7UXSXI53YxPDS5qPszRGFXqQJWbdTqajuW66UfvcGirVGfKpPzvcpFFRW7QZiEUQFsHVnnV48C09UqgQX6qdL26bdgLfvTAqEdNCPzxV1FuYGQseSA5jg9Miixur/Rz3lrrVSfSC9z5C65dokonKSCxgDRXBkyi4NNLniP/swkk+hgSspmTccznPqptCITSJNbtVTGUUmbTFph5uXRfi1tbth8PxnHw4gi1JGNaNTjcQZpGVK2qwglWlNTqFGR8j6Ndipd2m+arTQDv/SDHNA6KQIqE31x07cTGCnz2qBbAr/ylWbg0eZXaZoLNLlLlFiRYnagVVupz0mAic1wSz/S+1Sx25qAZFCVKT+SbUDqx3txlzTmKUhSK0e0ccvwbsZn148ZyE90CE8Tt42GlhIk6SZLabgtj1jwaNK4rqnC5Rz5txRoqpnTGMm018u4SCqoBrbmeSm8aS/fAM7CGKX+dJ3jo320aENwOT+vg2vn10ismZQOffPSPqVIXYIEp1hxEO04YRkBU16knjMtsR5a6DWAN3YyCrE+M4wBj5swTii5eJuYpNo9ZoU2i5HJZkPVM3gY++mZub4nNXBPuKdn704ftSxziCZ+atFGkdcCWsptPKkLNeU9qqhR3/rUtydX6oupwzpb/dbvALUdcImOTVMdNZ7WjxP20cE/bSNFMFbfBXc9Keggn9ueEI4PevaptPGFR59DHOJl09dHj4i6NUl0fFR/cx1vtZQXzz/3rdLs5bfvExPvGy59fCBurluj71TExM/ANuZpcgbuVBXuTB5ulr5hndClEpZwpo9bvf0PEuWqDaqb1/YAAAAASUVORK5CYII=";
const _sfc_main = {
  props: {
    style_2: {
      type: Boolean,
      default: false
    }
  },
  components: { JobItem }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_job_item = resolveComponent("job-item");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: `job__area pb-140 ${$props.style_2 ? "" : "pt-35"}`
  }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="tp-section-wrapper-4 mb-50"><h3 class="tp-section-title-4"><img${ssrRenderAttr("src", _imports_0)} alt=""> Open Job Positions </h3></div></div></div><div class="row"><div class="col-xxl-12"><div class="job__item-wrapper">`);
  _push(ssrRenderComponent(_component_job_item, {
    delay: "130",
    title: "UX & UI Designer",
    time: "Full-Time",
    location: "Hawthorne, CA, United states",
    tag: "Design",
    date: "10 Jun, 2022",
    vacancy: "2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_job_item, {
    delay: "150",
    title: "Javascript Developer",
    time: "Full-Time",
    location: "Hawthorne, CA, United states",
    tag: "Developer",
    date: "15 Jul, 2022",
    vacancy: "5"
  }, null, _parent));
  _push(ssrRenderComponent(_component_job_item, {
    delay: "170",
    title: "Sales lead, Human Spaceflight",
    time: "Full-Time",
    location: "Hawthorne, CA, United states",
    tag: "Sales",
    date: "20 Aug, 2022",
    vacancy: "1"
  }, null, _parent));
  _push(ssrRenderComponent(_component_job_item, {
    delay: "190",
    title: "WordPress Developer",
    time: "Full-Time",
    location: "Hawthorne, CA, United states",
    tag: "Developer",
    date: "01 Jan, 2022",
    vacancy: "4"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/job-position/JobArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JobArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JobArea as J
};
//# sourceMappingURL=JobArea-D1hzFYE8.js.map
