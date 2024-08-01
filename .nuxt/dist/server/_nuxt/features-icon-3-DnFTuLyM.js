import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("counter-shape-1.DMPgg9_A.png");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAABmCAYAAADbLz1eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoJSURBVHgB7d1taF13HQfwb9pBY8Am6SvFdj3zjU47mr0Qx1RyCm52btqOghrf9PaFsBfDVgadDLQZFbE+NQWFgmBTlHUbjmWytZ0d7EY260TsHe26d3pSC9ur5mGUhFKS/b7noffmJrn35txzc/K/9/uBP/fmJrlpIN/+/k/nf7ogIs3wrPVZG6j4uNJU3IL4sVTrzbogIo1i8PZa22nNRxS+JHBJ0CaW+Z5eLA4uvzawNh4/LyZfrECK1OZbG0QURA9ReJIgsU1h9Qbi9/Lj907e93GIyBKsZEesXbL2P2vDiMLTKp61AkRkEc/acUQhHEFrQygiK/CsvWltElE17IOIrDkGjxVRQRTJ2UFEQWTXVEEUyYmHqHvKNgARyQ2rIidsDkFEcpOMFRlGDyKSGw/ReuIoNFYUyRXHiMnCvojU4KO1Sw1JGAsQkRUVEAWFs5wvWzuF7CVh1CyqyAqSkDCIfvwaqyPXAj1kR2EUaQCDOLzM63wtqyrpQWEUacgwlg9eVlXSg8aMIg2rFTyOJQtoDpc2hiEiDRvG4irpo7yNzUNztMYoskpJleTWtSSIPkQkNzwKg1XSh4iIiIiIuEbHQMoSfQblWcspgqwJBbKDxcEb2LBhw+DCwgJ3tyTnhS4nYOvq6irNz8/zXNKigpo9BbIDWQ59e9hv4eKMZzPrd0UL8ml7HFM4s6FAdhALYsFCyAOAPWSLlXPUKudpy2UASU2B7ACsiBYYrv15aK0wmDdu3HgWkooC2cY4RrTx4RHrVq71oU6B/cxdqpartxHSliyLA1atuDVtN9Zen/3sQ93d3dNzc3P/hDRMgWxDFsa9FgheQfEp5Mj+Dbt7enowOzs7DmmIAtlmLIycPX3ennZjffAVysYpkG0krozPY/1RKBukQLYJC6NnYTyH9VMZq/lNjCm5VjpX9fH3EM0af1j1OacpkG2As6kWxovIecxYD8eUFspxC2XQ4Lfw6P/ziK6f/Ly1dxGFkb+rZ+0Baz+OX2uL6rsB4jxb2uAx+R4cwPXQeMtePdzAULB2v7V+axMoHx15wtquisYtf5fQBlQhHcdxoz38Au7g2mi3jSdfR1TZnrD2dPzIdfGp+PURa48g2kNLRWv3IArfUMX78etfQNSFZXCdXmbRxgDH9ff3O3kDGQvkLuu6cvdQgKjiMVgFa4OIwkcHqr6NQR3Gynev6ovfx1kKpMPivamtOPm75W7evIlbt25xi91w1acYNnbBH7c2hg5zF8RZ8UbxNXP3tq3WPoPp6Y9w+b2raMbt27dhEzxFq5LVn2JXNUC5SnYUBdJR8SVUHtYAg/i7kV/ivh1fwOUrV9G7eTN6ezfj2K9P4MyLLyGN+fl52Nqkb4EsLvPpjquMCQXSUTYxsn9hYQGtxjD+9aXncPIPp/Dtfd+/8/oOC+ef/3gyDCY/t1obN25kleSyxjDkDo0hHWWTOTzftOWHA5f+9fewCrIaVmNYx994FQNf+hqmZz5CGvFVIUVISOuQDoq7qy0P49B394WPy4WRrv3/Oq5du27B3Ia0rNLvhdyhQLrJR5Oefupg2BW98cF/w8bnQ9/Zt+hr+PEzR47WfJ8r772PHV+8F2lZhdwJuUOBdJDNrqb+Iw67mRdexVce/DKO/eYEtnz6s7jncwPh8yd+cCAMZu/mT8Yzqltx9tyFmu+3zWZdr12/jibo1nEVFEg3eUghmaA5+/qFcILm7X+8E74+PTMTPh986DG8ffEd+5ozYWCTz9fCGdeZ6XTjxxh30m2HhBRIN6WqKoef+uGKEzQJfo4B/f3Ir/DWxdq70MIqevfWptckEW2JEyiQHYOV7NFHHsaZF+qvGz556HD4yEmbWhqtog3wICEF0jG87hEp3Lfj3nBRv17IiF/zrX1DdcP2zW88hNfO/w2SHQVSllUvjOyusuKePadAZkmBdE+qqxkuX3k/3PqWFXZX2f1NuyFAlqdAOibtkf2cqGGXtXqtMS2uYz734l+QkQASUiDdFCAFrjX+/OhPwu5mM7iDJ1kqyYjuCxJTIB20sLAQIAUGiBvB/8RN4bb4nxarbJoN5TUEkJAC6aZ3kRLXGS9fvRou/qcJZbKDp5HlkwaVdOesMgXSTSU04cmDh8MdOeNvvLbq7is3F7DrmxWr9k39Lu1GgXRT0xfwPvPTo+GuneU2la+E4f3qgw9kvdShw5Mr6NQ5B82Z7u5u3mLOQxM4pnzLKuVvj/0svGKDV25wsmYlvBiZG8n//Z9Mi9qP7NdRlzWmCumuV5CBK7YUMvj1xzBj64n1qiV38GQ4dmR39RXdsm4xBdJdo8houYBVkV1YXgHy6O6Hw1MCslqvrGMUsoiO8HBYX1/fcCtOnuMuHC78c8zIkDay/zWFYHJyUld5VFEgHRbf04MHJbfkOA8GskVhZHf1gHVXRyGLaFLHYfHkzicslD5aoNYET5MCC+MByBIaQ7ovOVjYGTxpDrIsBdJx3OXC7h8cYdX8Wc2srkxd1hzxYmPrcvZZC7ufSIn3W+TNUHn/Raxj9h9H0SZy1FWtQRUyJ1u2bDnFCZm4Tfb391+y146nPRHAqs6I/cFnt6ctewGW3s1KqqhC5mTTpk0cR3VbGHkL8qTxtuQFq3b91kqrrZr25ed7enqSeyiuJ0F8QnkAqUnLHm3IKu2oBWA/1geFcRVUIdvQ7OzsmFXYrlYthzSKY0Z7YBg/hDREgWxTvM2bhXLCQsnua8vvA1LNfu4Jm8AZamayqhMpkG3MslCyUHITen8czLVQsso4ZGE8CVk1jSE7RHzHrOMtDCbXQ7nGOAJJTYHsMHEwCxbMTCZ94nHiaWtjOoqjeQpkh4rXO31re+Kq6TX4rVPxsRvsCo9p9jRbCqSEeOUIovVLD0vDGSC69rKkAIqISO48ay8jhyULyY/2sq5PvrU3EZ2/qokSkZywGh63xlMAfIhIbnxEQVQ3VSRHSVWctLYXIpIbH6qKIrnzEIVQY0WRHLEK8hxVBnEYqooiuTmIaJzIGyt6EJFcFBBVRK4r+hCRNceu6CEoiCK5SsaI7JoqiCI58RGNDVkReYHuejv1TRxxFyQtVsOCtT3xc14feD+091QywDWxAjT7V08SQnZHkxlTHyIZ45atUZTHPgUonInKECaTNAVoDVHWSBJO/vFdQrTP0kdn/QH6iCZnkkqY9CAUQmmpekd4+IgmKPbEz4vWeJ7KePwYwH3J0RXJ78nHANHvOIbo99S4UNbEas/U8RH9wQ6iPHaqDmgJ61dl+HaifIYM/828GLgYNwVQctHsIVceFv+BJx8nVYWPEygfkhSgtVW1L25eRduOcvCAcvXjY7Hi3yaSu1adOpccX58EYTsWB2UK5YCi4mOaqPPe2yueeyiHMGlBRZtG9J9CqerniaxLeR0DWVnJKj8G6s/uBlXPp6qaiLM+BmFlRMvvXq1zAAAAAElFTkSuQmCC";
const _imports_3 = "" + __buildAssetsURL("counter-icon-shape-1.D991Bm-K.png");
const _sfc_main = {
  props: {
    el_style: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      counter_data: [
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M31.4834 57.9998H7.90788C4.65995 57.9998 2 55.3959 2 52.2039V10.6528C2 3.31695 7.45989 -0.0149813 14.1518 3.26095L26.5835 9.36483C29.2714 10.6808 31.4834 14.1807 31.4834 17.1487V57.9998Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M57.9989 38.5684V49.1522C57.9989 55.2001 55.1989 58 49.151 58H31.4834V25.5767L32.7994 25.8567L45.3991 28.6846L51.083 29.9446C54.7789 30.7566 57.8029 32.6605 57.9709 38.0364C57.9989 38.2044 57.9989 38.3724 57.9989 38.5684Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M11.8838 21.6003H21.5996" stroke="#2CAE76" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M11.8838 32.8H21.5996" stroke="#2CAE76" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M45.3995 28.6841V37.7C45.3995 41.1719 42.5716 43.9998 39.0997 43.9998C35.6277 43.9998 32.7998 41.1719 32.7998 37.7V25.8562L45.3995 28.6841Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M57.9712 38.0361C57.8032 41.3401 55.0592 44 51.6993 44C48.2274 44 45.3994 41.1721 45.3994 37.7001V28.6843L51.0833 29.9443C54.7792 30.7563 57.8032 32.6602 57.9712 38.0361Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,
          num: 98,
          text: "%",
          title: "Private Office"
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                    d="M32.6488 2.65255L50.9203 12.504C53.0534 13.6547 53.0534 16.9385 50.9203 18.0893L32.6488 27.9407C31.021 28.8108 29.1124 28.8108 27.4846 27.9407L9.21309 18.0893C7.08001 16.9385 7.08001 13.6547 9.21309 12.504L27.4846 2.65255C29.1124 1.78248 31.021 1.78248 32.6488 2.65255Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6.51875 24.7414L23.4991 33.2456C25.6042 34.3121 26.9514 36.4733 26.9514 38.8309V54.8851C26.9514 57.2146 24.5095 58.7022 22.4326 57.6637L5.45221 49.1594C3.34721 48.0929 2 45.9318 2 43.5742V27.52C2 25.1904 4.44181 23.7029 6.51875 24.7414Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M53.6142 24.7414L36.6339 33.2456C34.5288 34.3121 33.1816 36.4733 33.1816 38.8309V54.8851C33.1816 57.2146 35.6235 58.7022 37.7004 57.6637L54.6808 49.1594C56.7858 48.0929 58.133 45.9318 58.133 43.5742V27.52C58.133 25.1904 55.6912 23.7029 53.6142 24.7414Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,
          num: 10,
          text: "M+",
          title: "Coworking Desks"
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.7886 16.4463C46.6206 16.4183 46.4246 16.4183 46.2567 16.4463C42.3931 16.3063 39.3135 13.1427 39.3135 9.22315C39.3135 5.21963 42.5331 2 46.5366 2C50.5401 2 53.7598 5.24762 53.7598 9.22315C53.7318 13.1427 50.6521 16.3063 46.7886 16.4463Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M43.9033 36.8276C47.7389 37.4716 51.9664 36.7996 54.934 34.8119C58.8816 32.1802 58.8816 27.8687 54.934 25.237C51.9384 23.2493 47.6549 22.5773 43.8193 23.2492"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M13.1079 16.4463C13.2759 16.4183 13.4719 16.4183 13.6398 16.4463C17.5034 16.3063 20.583 13.1427 20.583 9.22315C20.583 5.21963 17.3634 2 13.3599 2C9.35634 2 6.13672 5.24762 6.13672 9.22315C6.16472 13.1427 9.24436 16.3063 13.1079 16.4463Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15.9913 36.8276C12.1558 37.4716 7.9283 36.7996 4.96065 34.8119C1.01312 32.1802 1.01312 27.8687 4.96065 25.237C7.9563 23.2493 12.2398 22.5773 16.0753 23.2492"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4"
                    d="M29.9966 37.3599C29.8286 37.3319 29.6326 37.3319 29.4647 37.3599C25.6011 37.2199 22.5215 34.0563 22.5215 30.1367C22.5215 26.1332 25.7411 22.9136 29.7446 22.9136C33.7482 22.9136 36.9678 26.1612 36.9678 30.1367C36.9398 34.0563 33.8601 37.2479 29.9966 37.3599Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4"
                    d="M21.8503 46.1784C17.9028 48.8101 17.9028 53.1215 21.8503 55.7532C26.3298 58.7489 33.6649 58.7489 38.1444 55.7532C42.0919 53.1215 42.0919 48.8101 38.1444 46.1784C33.6929 43.2107 26.3298 43.2107 21.8503 46.1784Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,
          num: 16,
          text: "K+",
          title: "Growth in revenue"
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.7716 25.3073V46.0628C46.7716 52.6694 41.4127 58 34.8344 58H13.9372C7.35899 58 2 52.641 2 46.0628V25.3073C2 18.7008 7.35899 13.3701 13.9372 13.3701H34.8344C41.4127 13.3701 46.7716 18.7291 46.7716 25.3073Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.34" d="M11.9238 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path opacity="0.34" d="M23.2656 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path opacity="0.34" d="M34.6074 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M58.7087 32.9345C58.7087 39.5128 53.3497 44.8717 46.7715 44.8717V20.9973C53.3497 20.9973 58.7087 26.3279 58.7087 32.9345Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.34" d="M2 29.6455H45.9777" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>`,
          num: 84,
          text: "%",
          title: "Cups of coffee"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "counter__area p-relative z-index-1 green-light-bg-4 pt-145 pb-110 fix" }, _attrs))}><div class="counter__border-animation"></div>`);
  if (!$props.el_style) {
    _push(`<div class="counter__shape"><img class="counter__shape-13"${ssrRenderAttr("src", _imports_0)} alt="counter__shape"><img class="counter__shape-14"${ssrRenderAttr("src", _imports_1)} alt="counter__shape"><img class="counter__shape-15"${ssrRenderAttr("src", _imports_2)} alt="counter__shape"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container">`);
  if (!$props.el_style) {
    _push(`<div class="row justify-content-center"><div class="col-xxl-8 col-xl-8 col-lg-9"><div class="section__title-wrapper-7 mb-60 text-center"><span class="section__title-pre-7">Join 0ur Community</span><h3 class="section__title-7"> Qu&#39;est-ce qui est inclus dans <span class="section__title-7-highlight"> Startup Harry <svg width="240" height="22" viewBox="0 0 240 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z" fill="currentColor"></path></svg></span> ? </h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.el_style) {
    _push(`<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3"> Minimal &amp; Clean Design </span><h3 class="tp-section-title-3">Icon Box with counter</h3></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><!--[-->`);
  ssrRenderList($data.counter_data, (item, i) => {
    _push(`<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6"><div class="counter__item-7 white-bg mb-30 text-center"><div class="counter__icon-7"><span><img class="counter__icon-7-shape"${ssrRenderAttr("src", _imports_3)} alt="counter__icon"><span>${item.icon ?? ""}</span></span></div><div class="counter__content-7"><h4><span class="counter">${ssrInterpolate(item.num)}</span>${ssrInterpolate(item.text)}</h4><p>${ssrInterpolate(item.title)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counters/StartUpCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StartUpCounter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const icon_1 = "data:image/png;base64,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";
const icon_2 = "data:image/png;base64,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";
const icon_3 = "" + __buildAssetsURL("features-icon-3.BfjmC40g.png");
export {
  StartUpCounter as S,
  icon_2 as a,
  icon_3 as b,
  icon_1 as i
};
//# sourceMappingURL=features-icon-3-DnFTuLyM.js.map
