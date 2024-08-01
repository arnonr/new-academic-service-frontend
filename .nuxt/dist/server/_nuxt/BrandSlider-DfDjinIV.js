import { Swiper, SwiperSlide } from "swiper/vue";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAWCAYAAAAFH+TSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAThSURBVHgB7VmBdeM2DGX6bgBtUG1Q3wTVTVBvEHaCeAMrE8Q3gdQJnE4gdwLfTSBvYHcClIhAC4RASkpj133n/x6eLRIEQPAbgmRjrgAAKJxsnZTmjh8bjgSZk5WTBnoU5o7JoBxaJ0snC/N/BlWHFydHCNEm1lgiUGNuDHQ4JUlurgTKocT2mjH8a0SqAxJjz65tYn3plcyNAQ/i2hVPkGIv8npzP54BEtVBbgZSTL9xYiDpK5KLl3NBRMvGCzb+s7k1RKoDR6XMVSM2b5YY1waSz0mt5Qz6CmzNhfFpqiJ0ZfQ3J9ZJpqgcnDw7WTvJxdxXMxPO35L8HJx8E37rh4eHA4srx+9urB6xFeggycnuL05OTv5y869iLeos6fLVzZ/EfGG6vGRk43siDu7PkP5XvxeKz+9Vg9//IRJDTjp/ONkxOzX3weL4lcX9ZyxudSMj1cED57FzbrW5CX4GFYP5xM+jYnftk8LGlhH7Lc1XbOwpYhd1c6an9hg03oCOwAbpP0b8IV7MeI6emO2Mja8TMcTibmFi3DKIWO+gYUX6MV1rxjedIgaQ7YqkBbFhptsoti3Tz5Vk4toNdB0/95ezRAb+aLwVNkpho43YaKB/BK3Z+CqRnxz6/JZsfM3W421mRba53XPcEJLiSPv2+kcWd8adT60OfONIiKeUjpkASBMD/eSRJFU0VsgkKAdYsfUepXIAXr8xEWJASDYbOcQGqFmFvjfQ+oYNzeGaTJnnMW1NeF6DcTZvlbgr5iuPxN3lBeZVB48tBbYe0Us2nSyoFDFSydyzsdbHxsYGhIGO/Ig2EsuKrcE9asRo6Po1YmMhEu6B+7RCuL+FYstXoRbCH8iSrcsjcci421hORV5bvKghfs+RQPKsyEg1QV8NWAloLjHK8wb6seBAZVKZXh2zS/MBEUAnhv8RRcs/s1fAdBRi7Toxd64ICd8ybg8b0T/b/OQ6Ues3YLpO9THi5+Dki5MTdGW2MGnseCd8BdSmeyJCUiBJ8No3o89M7zRiJzPjOE3U87oeSKS/E7oH/4XOo6TLZ5fLXWyR083k01IillTcGdMbOoH+FbXHBvqy2sI0WDMR8AEVQ4zjL3ob0bFMR7un855p7FaiPnGRj5zlM1iv6Gfimuc5dsvjdl+U+ffEvU/NS+O+gVrAdFJMajqZn48iBiZL9ko2oVNB+OhXwLCx1RLMbw9rYf9J0a99vBD2CbxPW7PxVtNX8rBhviqKqyCbx7G4ISTvSyxnScD0p5V5hs3HEUNJ1qD7Jp1C6KCvlo3hd9+nDIhB47Vigx8Gb4xlpd0r+iXpWmG3VWRJuhmE/0eBWKvFXQq9VlyXZubhNQnHEvlM2x9JjAWLo0r4jFXACsIqohKDxaHlYQP67aFWdM8NvdhbClbYRjI10BPp7V/YRNwWhnsP4ngwEwFhw4nNyWf6RPY+sjl8/fq7mQHoiJS/BURNFnS3sLdX4rKJZfoneoUs7RX09dtYU0Z+crrcafrQE/2kvBLHGLmN15RPsnXem4yR7I01tqcJ+0IbR7r8ojWvLE9qHicBwophlfmcmLgwd/znAOWN76UceWKU5o6bAP8xQtdv+KeoNYgm+pJBIDG25o6bgagKGtr3VoufZuh+dzKrd7jj4sA+Y2fCv+H9GL7U+/zel4z/AEiZ6Cj8nQR2AAAAAElFTkSuQmCC";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAASCAYAAADbo8kDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM9SURBVHgB7VfrcdswDKZz/R9tEGaCagRtUHcCqxPEncDuBHYnkDuBs4GygbuBvIG6AQpUoAXBICU3vZ7S63eHo2Xi8RF8gc7NHACQoRQoa5QKpaFvN0Mw11xxLanvnZsxkOQSm6N7A+DJ36HkVv+dmzEWi8UzNo8oP9zMgVxfsPmI8t3qn3WiCTiAs3sDiSakuM4+0f8K/if6L2FwGfINuXLdgZ65bhvQmfMNt8WBblXXHfgxfOHtEy6HlezEvk/c57mvRPHcTXYv0sdUMK8nlCLG3bAh3Q8oS9aXNiRfYzzY9oljecndjRD1KDV0aEP5xGVKQC1KrQaGOHFZk8nBsy7IkgzbFccgHFmP4h+Ev5Xip+MVintjxJHcd8rfRvTtmUPGv0H48kaudooLjaXisbTQjy2gjA2kVI6Pom/L/5VGsCwygZfEQJ/4YOPVxEjkEX7Snx/hXou+tcG9VfqaQ52YIELY5S7Cp+cE10nzLj6Dl4QaDrdGoitJVtk8G/pyNewjdoRC+L/A8CcXScv/yZ1TGzaN5RP6RRPQgL3ia6VXxjrGUEQmaLCqIb2ap6CZkOgGbsMD9Ecf8V3ekGg93quFMpZosBxPASRWNfC5lSC6f0UcSpbe5o37TUC3KDZgL7qwg/exsSpftZXoO0Mxc9Ohb9mnQNx1FcXnhO29ex2yke8keKLowqTj44SycN3L7qxU7/9EvDvDcekmgsumswzOM7hBOajy6KzMlzdOqo59dsNX2K8qZ4ot6tGCoB1A1YhHeUR/W5TUC1Q/rd+7W0BbQC31QTWgdAudHONIaLj1Si+D69InWpPDsIRrlF3B/x+M2D7ib8mtTx0BRqwHMfbRPEHijM4M5/RNCcyZGAWpIHKuGs6riN4arlGxf89COicYln6NsilE0toJ3GvoS9Ol0pdVUWH4e0iMU/O07EuZAKv+0zi4COB6tn1CdzsSpw3koH/0aPI0GTnr5BO4b0V8a2eFhwbtEH3p1dCVuGEhNIb/hu1rsC/UjU5CyYqtIEDfhRsBdDUrBRytJqB/CZ4UWRqkN/hYUil/pRpky5wKI34uYocxlmIiDtAnn/pyNVHrhD2NoeJ2zbzyn34iwJEex6yhAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAMCAYAAACOefjtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOGSURBVHgBtVj/ddMwEFZ5/I83qJigYQI8QjaIN8AbxEwQb+AwQcsEaidImUBhgpQJDl39qb7IJ9k84N5TXd3PT9/JthxDRPdhuDBak5Fg28PnIHR1GEMYnka5IFddyLPhHGGcwtgmtho1Lsjnkd9m/JxWC/nZNmQwbFM7cLkUE2wV1n+iSfj/xiwIYwceLzhypdik3sCKTgRXmSJRGuj2VJa9kmeX+DTCNizka5Nc99B7iTnBZRUM0e5INIPGpl9hEmv3sHHNDkPWtxmiv9DIKY9exMZ8hwzXXmDcx45dNIAIig30mDeChBPmNa5e2PZJYRKLauPCaNxhJEjYZvJJQitJHHQb4dtlFs/SK7ZZgwRZnvRmS3uV2CJHR9I3fQv7kOgdjb3YpAFxRzglmYftkMxnvrAfBVEVdD1NzbEKMTlSuRHx0eITm4w9rMA1UP4poTVogM6ajIi4zsw586YggpMac5ti0Aq9BUC/FXqbzjOF5R3ZQucwf0h8B438NdiSRUbxBVyu0DytQbyGwSwI8vpSrkxc5KnHPHJ7dfe84z83NzeP4fIInXxR7nA9Bp9zuMpgT4oE/SWMuEvvElzPydzi+t1kBNheMN0ktjbJ+RU4NWFMv8wKQZPZ/2mFO/vw5q0SjA+loICT13Q2E0cW14v0ey/+Z5LqMHY03rJcMDbrm1LjbJblZ1L8nwqItEJ1p/h0EgNdP44eAlHP5v/IBzNtrJxIe6U5yAYdw9jDsTHTYs/Yxa//C/9P2AV/Iz/MuCnucg645SP4lEwH2wuu/PJ9Crjk7o1PAbZbMY/5Zg3iuzDk4ZwbsyyfzcjRi8jJ8tFMG3QmuONqM/K+TsQz3dH00m1kUpreL6XvjCaJi7m6xFe+X7SjuTytpYeEPfSMxwrsF9JPXb6AWXsH9blcwsdm1sW1nCmIwF9j3mF+WwqShEWxiU8rbK8fnIiLH4CUgs41SBARZUAu7ZjdiJhG6ONBRDYzdxr9kwbFfJ6Wj9k2ky9Xbwd7L3RvDUJtzrHRgp0kLFOgo7L0Zk4OS5fJ1y/kaxViZvho/BaKd/hBwbC6QVotGjcnjzUfqq3w4c+ABjoH/dHonN6ibkOZI3fcuTxqkxEkOQpC4s8YteLrkK/0c1JD8596eprvziNsJ9J3divwb4T+PlcfjWX/bWadLV3/1ONAaGUKIjjyKziKuG9p+qTZ/ga7veCQUq45NgAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAQCAYAAADH/1trAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARYSURBVHgB7ViLUdtAEF3PUIA74FIBTgUoFdhUYKcCnArsVBBcgUUFQAUWFeBUILkCnAouu2iXezrOkgJkJvHwZm4k3e3vTvuTiD7w1+G9v+RR+oBHHg88bugD/xf4pc19O4Z0rODNTXjMeGR0JNBINNzI3nTkGrUjOlZoKhKs6Ujgm6l2Fq05GfSOOKF/BLqxY0w/Wx4utTAYDCp6Z5yo1ziYu2VFW3vQlDCJ+GIaeRFzWK94Pdf5GY8zCi+r4rGyzWh6HSudYcTzS3jO1UanslY8hO9c5d6rTZXaOwKdqPeeaW4juzOlEfrvyjvVuYatwGc2o/w9jx3VL3CrckbUdNJxFJG52pxFNu91TwXqVjrXdgZPm4JUJ5hHxk8ShTymGUXrUgenkdwYC+Vd+m64SNZDguaxp6zSayPi670j1gd4prDXhe+G2Jd30Dz2kFfymIDuzjMYKOEVXy6VT7ziCwiRejYDL5TDuGMaVCTrVvcqHsL/QME7C/UgR7X3G77qdUohAk2PZYA967qQzVEzk2yVLgMd12rHXp93ei9858AvUTdX2z01Uait08ieT7qfEmhz1UEUotyanBXoNDmVDrxfgo5rvYqcCepme/c9z6AOZXzLHlpp8AS5btC7gGYD/BKda3heR7QzWNvA/PIQj66XqXVfR2+p/BO9DhP8jT3CvD8gN85cmX95To4SUDrLAhipy5Y9TVrOdJ6g/5E6g6emiN9+wQ8FhXoiwnM12DxOvLYyGjFa+RwFD7HaeQm2uWgjeNivbdmv7UZrkGQEB/sQpxEvd1R78E+S+gI28Pop0+8iuSuQKxEhEZDplMgqUAaPUvWZDqGXDFdQB3xd6x1Mjf3hT5izxNwd2Pp8BqjgReREc5l6guEqQbPUudL3BOj/kwjNKH1IU99etxGnyvNiDuRtYG2WsPMQMHqSEeqb0d6Fdd8zwM8W8WAxRDxPmhy5jil4QaFCrY6a1yxARp7QIZ1jRWk4eieovUt6WbdND9bQV4PPQV5oTnXkWqcbd7Pyd2jHtFctovbR/beetK04AUMlxUjKWVBIu5YCCuCRUJeGIfOhjRbk0GJXMC+yc0rA9/ioZpop819TNzCF7bGxUzmyp0d6A1TGUPeZEziw7mVJoek76xBXwb3ILd7juzT+sSAeZRFn0Sq4A5qCgtH4c3kF9/ICMr1faCqzlyIyHdXeXVHodBEjH7715sDbhgrupUYK3xZ0juntwLp5T6HLtDVM2b/aBGkAFRTOacPPmM0sC854fO1Tl5PwzbphGMH6MLH+kJBz47txC/STFrpT36+Gbnx/vLaGlr4bzx2wb+9yXU95Kd1Z6gxSv/7u4gn8K6SeJS9i2MFzoYZINGON2VP4TsRu9dbXKd/+0ti3qHiteHtFTe9N4YLqiB5TKBemy8qJ4TPrG1CznAwiebtondQeke90xPuSs7iK0mcso1YWulOx+TwhT/b/9MfI1+m+oo4z+A30SDFCf5ElOQAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAOCAYAAADjccReAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALCSURBVHgB7ZmBcdswDADhXgbwBtUI6QbOBE0nqDpBvEHlCexOYI3QTmB3gnQDaoN6AxSowBhmKIkE5dwll7/D2ZZIAIRAEpQBEZ1ITbKEmWBdJN9JHkX/bLrfuQL0gFo885dkT1KBEep7S7IVXZ4GDAS+jeE46cCI9M/BQSbUZyV2qsT2DxJD8wRSk9FNjGfnO+wiNw8k9xlGV9InpAUjmJ4Ini0YwMukTaGGTCQ+KLbqibaVsvURbGPiCekSxsL+VLpjM9DQYb9tVBFjPuOGArmDAkR/lSDa9+wZpPrep9gDA3hOBM92yFfdFgyInw7PD5rjczswnmVMwVAyeIV7pSBc/kMaeEGU3RVkUtI3w8YqEiOH8QlWmgj7Mf0xbvSPxWLRiO3YfsuZU5P8JqlI1jDMhnVBIZKtKTP8QX3vwE7KjD/R2E5Qxgb6GFckXExzvIpWz4Da2yG9nb84MrbTTXhFkqETJ2P8ERmiIx0tzAMH52tG+x964Ab2CW1akm9QgMT4KPYqEl5duRbYSJKZE423APXzp7pew8j4PsDbgAPHQVzDK4F8PdLHHclRLrHvjzJrS1ecmL0WRibwsxUB+2NYA9MMHtc4u8nwBubjF/SB8gHS28UcS7XnC4yvdv/twUzI6nUn9dTTVgFqJhvooPfRb+U7Ze9TsD2sILZKSAE4Viw2qlhscbxYNJ/rlT/++NjAFcEXLhZH7rswiGBAxc2N1AVxn/BcaYY4SYBlRBEnRI3D59WiZFADStm7S+x4apw+Pppe8GDCSUD0H3QAwQBeHh+djCt2fPx8YWcgCQ6YMUPE2CGix/wQVSLMWVHH7ORSQyaYcSREdYwHI3iZDJOE28HT8g9GML5tWN/4sZ5DiT+Jdhzm4TBzZcA+EbgYTHpbK+2zX2UHOvhZrMXuZCI4CfYa5//TyW8bRQN65/r8A0RsiW8Xn6UcAAAAAElFTkSuQmCC";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAAQCAYAAADK4SssAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPxSURBVHgB7VjdcdswDEZ6ea82CDtBvUHVCepOEHWCOBNEnSDOBHYnsDuB0gmcDeROYHcClIgA6xNM+fyTBzfNd4eTCAEgfkga9AUBmDnEx3WkQaQs0jrSz4uLiynICP9eh9/jtyXtgahXxMcnsRl1bukERFvj+Hgf6Rf6pt9yamLog8Qzp9eKmIDrSCtOY6EFfC428PMD7E9Vp6YTITbU1iTxreDdKOnMEH2aaUxjOhKXaijEx1R5sgsfIi0j5dTuUEnaV/q3MIr0x/Ge6PwgmyRQc8ocj1jIynaLFhW/jWE1Z307Ut5hZYm9CdrCHRlpoDILLwe2Jiq7SNiq99yRVz3xBp2/cjHMlDfSWE1mGOkGYisSNocu/iKRY7N15/KwgtzIeLBnHgbKGxiD+xIDgQfuKaQ6lkJtE3NbyBW3hUC5DBLCIIvv4SUKCYkVVAk9i9dQ8TbuwdYdp1GBTMpW3qMnfJ8HzEWuNhc6rq2qhqErXu7IB5i7saxIK/YKg+G2kIKxyoyQB3I162+ZszU+sJB1gq7ALsZhNsvE91plJFcL4PuFPUr4PHSFXGncmE+zOed2w1TKW0BstuNtntHGZ+4vZMnbKHg7AZ2VDPp2JK/8juzZGbXjW5KGkJTJgYVM4Srlo/nA6aZuBDq5y0cJurjoZ87nLVuJHEyAhyeYFT6jHkizs4ZxgHdpCqb6XuhznbCx0XFXEWsqMu4ecb7Z+I0Dbs57ObZyOh3fqGnaCHzE+cpIN9Q0G4KH+D0V4xPoP0YfbWhNCumzSugGN07ZT6Gk5roWqL3uSX7k6nTrr32Xwogfl6rwJdJYHRaFuSa22OHEGibJIBG4erBzDE7fOrW1rriZyjxG+kFNEo8tbOUK5+Hvm5v4HYK9cLcxW1Mb/5KaheOxb+E60EJ94OaUlBpIUfNIMpY8fUb5d/p80Kd1SUGdFsWZOSqrMTEn7jA8Nm7su1vlgdsf66BOmh15Dzq+1cv+kraLfzJ0bvNX/qAQH/PU0UfdguO7+Pyo75Lc5xxpnj5SszACHeffnR61sjnKSFK4Ocxlx3/ZWVzcbUZSyEHZ82bAq7jbYQ2d/VWPnPxWZzBeqJPYXLzEb2SpchMd1zouwT/fxFinjb7MYM5N98jtFcZgOTIUCZ8xf2LjirvXvpn665s+m3fhDZa8fTWo2O4p/YXM3MQW/DCxUCruNlLPP+YgN3I+TNk1A3xiIV0M6GOtvHsn432quNvYBd7eCD5+Q5HwOTj70uD15bRM5DT9jxDDvZEOhOnuIZftkjt2/pcCdwtZ7OMTtzs50BHoy8kum8fO9d8gVchzxjt6w6vAJb2hD9LFWov/RGeOv4R7ECnPz0efAAAAAElFTkSuQmCC";
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(ssrRenderComponent(_component_Swiper, mergeProps({
    class: "brand__slider-active swiper-container",
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      "1200": {
        slidesPerView: 5
      },
      "992": {
        slidesPerView: 3
      },
      "768": {
        slidesPerView: 3
      },
      "576": {
        slidesPerView: 2
      },
      "0": {
        slidesPerView: 2
      }
    }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_4,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SwiperSlide, { class: "brand__thumb" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_5,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_1,
                alt: ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                alt: ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_3,
                alt: ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_4,
                alt: ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                alt: ""
              })
            ]),
            _: 1
          }),
          createVNode(_component_SwiperSlide, { class: "brand__thumb" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_5,
                alt: ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/brands/BrandSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BrandSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BrandSlider as B
};
//# sourceMappingURL=BrandSlider-DfDjinIV.js.map
