import { _ as _export_sfc, a as __nuxt_component_0, u as useHead } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import layout from "./LayoutSeven-BeiX1D2Z.js";
import { _ as __nuxt_component_1 } from "./MouseMove-CNO7BuBA.js";
import { C as CreativeSingleFeature } from "./CreativeSingleFeature-CQJoi3yw.js";
import { V as VideoModal } from "./VideoModal-yOQUjk9s.js";
import { S as SalScrollAnimationMixin } from "./SalScrollAnimationMixin-DP9bLDx2.js";
import { _ as _imports_4$2, a as _imports_5$1 } from "./about-play-icon-mZF1qAhz.js";
import { C as CreativePortfolio } from "./CreativePortfolio-Dj2oL06v.js";
import { C as CreativeTeam } from "./CreativeTeam-CncHE0o7.js";
import { b as blogData } from "./blogData-CZIVutvo.js";
import { C as CreativeTestimonial } from "./CreativeTestimonial-CLbrc53d.js";
import { C as CreativeBrands } from "./CreativeBrands-BFRh7iS1.js";
import { C as CreativeCtaTwo } from "./CreativeCtaTwo-DLDNjFGv.js";
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
import "./HeaderSeven-DpaaHaNJ.js";
import "./OffCanvasSix-UeRQiqg5.js";
import "./Social-Cx28hJNr.js";
import "./MobileMenus-CVq7gvQU.js";
import "./logo-black-DNxRSU5J.js";
import "./FooterSeven-D-_cjTbZ.js";
import "./logo-MlJCTsTl.js";
import "./BackToTop-Dzk5hrJh.js";
import "./auth-Ds3h1m1J.js";
import "./fetch-DNDFQiYI.js";
import "parallax-js";
import "sal.js";
import "swiper/vue";
import "swiper";
import "./ImagePopup-DYm5hHIZ.js";
import "vue-easy-lightbox";
import "./teamData-RHm96bod.js";
import "./user-2-CWDkkzb7.js";
import "./user-3-BaW4QZ27.js";
import "./user-4-BaMCI89Q.js";
import "./user-6-DCzgwACr.js";
import "./user-7-f6QkD5sw.js";
import "./user-8-CWRtcVgm.js";
import "./user-9-BOQgWp3s.js";
import "./user-10-BkKNArKv.js";
import "./user-12-VtwPgTar.js";
import "./user-14-wrvREx19.js";
const hero_img_1 = "" + __buildAssetsURL("slider-1.OBW76okc.jpg");
const hero_img_2 = "" + __buildAssetsURL("slider-2.D_wxMme8.jpg");
const hero_img_3 = "" + __buildAssetsURL("slider-3.CW87ZKYV.jpg");
const _imports_0$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAtCAYAAAAuj3x7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgB7ZmPdaJAEMZnqcAO5CqIJgVIKoipIF4FmgqiFRxXwcUOkgqOa0C5CsQOrADyDcxGng+CAc2TML/39iHZZf98zM4yEyJFURRFURRFURSl2xg6MZvBwMVlgOI6jtPHtZckCf/NlSY9KUXs8sUYE8VxvJX7kK8/wjCkFtJIaIjKgg0g6B3EZHG57MiYMMkEiigTKZJCECqq6NOl/cvgwvcuRL+Sex4jxBgRxvjHv9FnQBfOp4UWcSdY+B3JoiHyK2UWx4ve0ZnBHNIdg+LJC/BQAvwOsQNeL1H4o4Q+FBfCLnF9oS8S9hgwRw+XwbsBGBPA4tkAgqpdVNLfGH1N3fX6lk6AqRisB7cwhbAzyix30YZtKobhoYxFeJ77EnN//kQ3FA2Ha5Mkfj8Ml9QQUzZREXgi1utfiuXWIbVOx3kgnCMQPoB7WRxj5XxeoP1faHBbZ1fkMYWTMuaX+N15mwU+RA5a9utPcmD/rtqheGaG9g8idm0tTK5DtmIWmH3wYxtcRBOw3kkqODxElUtEWx87ou+uVvdUEyMd2S3CJ/aMOoQVvMqlbIbDZ8eYpL9a/aQ6sCXD6W94QOowvH7WYXt9/VTaBmKj/g/VwFp07zv54rqID5/DukdlB2DqRvb1ndesEVXWjfq5eAGXlGawiPwdzV8dJfUzqZ+Q0hwJfsrq3Cq/bjl59q7N5F3BsQGKvAj/I7/OdFZozo0gbhglnBfJMo8uSYZRsJYcSabwP2WJs6goVWs/EyE2B0H+YX2nhM6nFigLVNI0K2XJsaioPUmaljhh5ThXtM+th/J8IM/vbDxS9E3eGaG3NzdTWOUcSaKXmGjZJPK1eXjKwvkR7dPFVnhPwvZ7a/2dEDq1NE4vxPFj0+TQB2N4lGULWXjrdtjC54gmF3oYnoH35BX+8wRXM+Zcigp9ZjSoURRFURRFURRFURRFUZRL5w3SopVrAhl4QQAAAABJRU5ErkJggg==";
const _imports_1$2 = "" + __buildAssetsURL("slider-shape-2.Bd9CTzO1.png");
const _imports_2$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHnSURBVHgBtVbBbcIwFP0O4U5UVYL2QjeADegEZYPSc6EtEwATVC3iXJgAmKDZoGzQ3EACKZyBxvV37MQmCeRgngT+2N/Pzy/fJgQuAH9004OA1iy4BChtAaEl4+Sbz3KLNdUAyNw4ecEiPWwtcnCNkkvV7OM5z+uFUXKm+jGMqIvfxsj90W2NNY2QO5gbJWcV8hrFh52LDcnK9d/LVWyd7sqDM+C5RfIrVnGd9uoeo2zlRavHJnzLRU7hryDsQAQwkeEJWyhO4Ir4iTsBWX7hSuDKMNUWLCk24UvrJDCDHe0e27QZVpoFAlMhKLIkU3lcUupGoMltGl3XtFyAOFexJJVceNxQSLfKcBWo/SNt4rmELSqhWJJKHtjQUn56TmfpBBQ+tCRK+/6oMuUPPe50jy1LkFtEsSSgA2yuOss3Fj+xcKvsiClmt1+Uq1uSIF8Pyw0I74ZQ9ctqLMd4vKd17Ic0HFmSILeJFaumNKEEt+20l3dsbKCPJC1JkLMk+XC2cIAxZMDprPrCJo93pFiikYvrsiQWmZ079sImrOlFmiUIWwYFQh6i3j0MIAeEgHrWOFeu1ysd57ms8oCTaxdPTtW5yZV/EGOqObl23A2q5uSxJWZVc3JRJZ5p1Qgb34zYPTExrRrxDyj4w5uaG+P7AAAAAElFTkSuQmCC";
const _imports_3$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAiCAYAAACuoaIwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKjSURBVHgBtVVBchJBFH3dQ6IpXRBzAKFKUOMm3AB2loWKoOvEE6AnkJxAj0DWJnEsqZhdyAkSNxZCLGfpwopjlValkOm2/zBDemAYJ1Xpt6D7D/Q83n///wYUio3qu0L94WsYBqcPCWQZkxu5WjkLg/DJIPBJfWYX+fUXMIixMgu2HzE0TarzyUajzLFaXJA6LJVhCD6ZY9uu8o0IlUqrCUPg4YZJHPorUL71tFqGAUzIBEd3QuyhBgNgeqD67adaqEDcofc779hdF5cIHomEfB/sslf4tQ1cMiJkksnuhJexx7gA7tTu5wrPHqwhLdlfsWiHeyqUQi35cAgiEXzhgAn+KjVZ0ALdCSHn/y2U241HTUVyoMo5p8Jy0lDg0w/CFhgHSOw5Gt4S4g3GRUVI9HqGTFrC1sJsXM/5/jSqR2p4z8zSJK9nyAZv98LR5UMpjfgw8QeI9ZO8ztfrN1OREaTAln449CHw5yjwR8exHixg+BypycJbIAD5oPmDKSmbQy9TgZYNMLYe916GOdCmCYIXTVeZKyV7Odj90PZ/X6+21NsmKRcMlZPtTlc/wDEP59MEs0TSGXqjUkhEGIpMRHXcfJ1LJizWjntOfTj0/pQce9/Rn8/2KNZTk2kXqvZ3sTnY6VTmDWipvtfCmbaZS6ZfqETqwXvS3+60kADyKKJuKpU86bDqga3Qn687H22kgX8mIJtKZSIZDeY4f5Iw2N1r4zz9kVRaSQfdXu/M7TlnuCBW7haXlL9lPxD4ddrr79OWwwCCNvDV6am0YACUEU3d1eV7xcPTz33HiDJCRF1QlcbIqHVUafpTiPHxtcNgEHTvCSvzjfbSEyUjnoX40TtxV1YLeaVpjTN8MZbGENzzWrTSDW5UGYHU3VgtLnMpv/8D6mENAxkkVWQAAAAASUVORK5CYII=";
const _imports_4$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASDSURBVHgBvVi/cxtFFH5v78D2DGHkhjA0XKg8mci5dBSe8dlyQek2ndLRSRQQmcZyZQWYsVxS2fkLSDqK2JJnYAYqRCwYOoku0KBUsfHdbt47/cjFul+7cvIVmpNud/Xde/veft9h6X7xP0AcAKg+KBgohSdS+e32t3924C3Cq93yhBQuololPi4oVQABgOtEEBEKMXP6ILAZyP8ftxt/9eENwKs6BTH/fgWVqkICByzVij26cNIWogdo+upi/6qIMjFr/toeXZbTR6q2oLRmplIpqFrwTmu9VizDjCjdX65Yc9d62eT4j/G5UEqeQD44CHCwXlveBkOsby3vAapmQjqn+QnZFkKgVjEgqDptiwOdOZzSja1bv4V7TQPSpxQ/aXTblMIB6KGsQ9JeeK9F3cEFDSgqEO4kgr8IVPugj/LGVnEvaxCnVZdcCMSQU0jQP7ObYAAuntJWcTPpPheVblrHkEo8gjHBdrPDjdokiowDr+pObXqvtsRFZVZQSlFL6/QnBBnBmV032Iu8WajZ+lNRorbE5BzQBO+9AF9ldEIwjKLAHTAAIlaiUeToQZ4+F4+dcfReI8g43n3aNEr1pSiOomewjNo5bpweRn8TlwcdNbpV6uDaQoGjGPnqgT4eHje69al140Zyuqw52aKur9UeAlBrNnAksAV6eHjUOC3H3bDifuz/8uys9/M/33+y8sEiPcOnkBMklX4ncksI6OWdwxV79KD7edJtK21u76d/f7yxcv1vunQp1JnnJyo8J3LXKS9LWWO5Y6CAu7SlUntwKsERyc7HKx89JtmzyERTByPM01/PUyg/hBRidHI9CM7tu63vnmbudQQNeDXXsSCoU69axbgeh6TIZagfCwnE9vnUGh4M+aBFMIoNkujExSMyt0GCQ3vPGRML00dkKecdFYgTIWSHRQkYQIAhfP6QYgCSnhFFIfqkfI3sc/iekAUfzKGX4iwPkZJiYI9DB1YAFzs61iEXwRzmZrSa6lCT5/tOxpKHeYlmVjHLKWHNtSgqnw2rNAUKf6XPZznajCvA2qQW9py7RNrA1D0YeggFP+T2EFwUmh4nS/QmprhUu02SXpZBA6ZHHRVUx38h1uLajw1XRC70EKNWQi8DBpgz6uFcpVx7QfJD3bl8byrFG6Gt1CPHoFS0J4saeBwmGZfu1wiyhyBNVgcDBGBNxO4sHof2fTWW4EwegtpGVAXP4nHId29H1fmE4EweIhK9MWbxOPZCsP2KMAyjRwR7YAAieO+yTB+j9BVZUkFtygDBmbXImRgZ93c3TRZhsZlEjnH0zekj01SPPU5IkI6wiu4CfKyREs405aHHIUkPmhh7HOF9eZNFqKMzmckFL+y1vMNHfkOPJO3F8K2rQA3/EE4kD7HbvaMjOhlMkipUy3dTP3WJn1jNM3goQuUXedKaBBKtrMbvqaH0ygRK4YmcQuBQnls3nuz+YdSAo+CikmDx9shOOan1xHfUph5CB+xxhLygViQqSR4nfMsfXl+RhzAm+/VNV/i2h5Zc5QIhRg4FqfASUkIFakh69GQAAAAASUVORK5CYII=";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAuCAYAAAC1ZTBOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVOSURBVHgB1Vg9UxtXFD2rXcHa+uDFHmaUEZnZUqVKFSlUUqSgSEHp0mV+TkpKSpWUFC4oVVCocLEzgXgzEOdFQsnCfuXcFbI1jqT9QI7ImbER1vPbs/fde869z8AT4TiOfTOFwg5apoFWEsE2DNgJ/yCGTkxoI4L3ehcu4aMEDJSA3XIcy4JjJHCSCkmF8IwKvISkzL/hzdcFVdgViy9goWPEXBvD5ffnWru6wOOKkay1na4J9BMwOsDoVRXDItF51XZ6EdCNY5xPPrgjfA0ox1FyvHgCZI9m2/lJ8YXxnCFE99rOW6UclWd9BVuAdl0pprOohqM867dCUqA915WfUoRZa7dGUhADQ1GJrHVbJVmNUg3NzMutksyLrZIMxRAqn8V/FSwURG3faYkFMp9sU6zvEWJ94jZF3KSSoFuZ4iRrXabjLFogF6vUbQy+fQJN9/jkNqlvJ2jJZymI6bU7XLevOnD6EfORzjNABpZGUlzlNkSPRDryO3PCrUQ4Vza8LBsUoUaEfuNbx2FTcbZsvZxGzCgy8ifIAWMZufQYDAyDe4ymN25mziwly0gxsp1vqjhZJCoEzR0cyzHnTY1PJCUCcYA3Qk5ZuCjbVi2ieeAc8uj9uyv3XH5ndDuVCvrGFKdFcteYEwwDHFu0qrkTbAQ8mWaAtxK1uI6e5Kw5xaBoq2bKX9WGOrQSXOpNt09ahztKtZIdHPJB7vjaHfi+LnxClrytEcDR19lVVgSiClWTRxtDxQYu9OORl4G1z9b/3kap4lgGyTvKQU8+m1SE2VNmKlEW1k0Nuh4gV1+3Cl+qAgvvdF540s0bC3paiiTHI99oO750yjpDgBchDet9DR2TIv/7PXzm9JBFdy7fLVYFq9kJAuTedzlJwqxiIPIjAhyHuPhSG/81EbJKmWfebogRBX79nMOc9J+oGMYCE1sF6MigJPY325/HJC0IWypGREcJvP0qRouk5AU8Hy3DRKvKqHLH1uPOSqwzHW9pkw98obJkS420Quy3AF0eQ0dIyajKXHTnI63ooGhvFOAofsCZjLWcw7tCuIxOFiI5LxDmYYcPHOGOebjigY2284baOFzMc0VZiihLQrys3a6FRKbOCY/jaC9rbeM756hO7161j0yKRUZjM+/C1JVCvPvzg3u5ao08OGqoH+Qz/fps2Rpfa//FnqrfxTh4GGsXOZCrM0/bL1bpOl+XNX9QIeTz5JcM97IwFE1FTuQbH3wIyZXJLhYoEhYxTzMJYjZ3p9WfE7nGB03bbCxxJTnejyH60hyzKR6M80qM9AthfhfKF0nqIgXcnxeNkHvBz7fSfzLOvLj6uUiLp6irlKTc6wtJkJCkMHeEsMUpb1lznLpTkEpUGnkagM87S6+1MHpI9YPinvdmrZSYL8P86MUyJUr8meZwSjamI9HDmRYez04uBOzxr+5p3r03RlK0j5tdrGtSpIlhcR2mZGfulOtCNbdOroO0Y2w4wsm1+27VmnREiXFocZQY37gXL/eUHe2gbzeVfT/RV+v238gNBjfpivat+l4kKuEMlTx89m2JuHRfvM5uiYWuu6vcSCR3m6prTXC5bH6RYmORfS8T4uSje7v4nbgPXWf0ssmGiXOQZaur4C99h69Bkkengh02t2P9fv5vcrzVmjpm4YSUqIHnuXer/r8/0d6L1+o9O6kflxHdWOGkshI/OlNlJj8y4xTST76YpEXItFjskjZGUiC3E5wQbXqJLtozzjEnWvQC4T+HSJUU0/z3jeTkpiE5ustytxtKiTw925veiQnpR3viZM8ykil4RcPm2PYj1PF/wD/gOoqckXMbWAAAAABJRU5ErkJggg==";
const _imports_6 = "" + __buildAssetsURL("slider-shape-7.XUifxBKZ.png");
const _imports_7 = "" + __buildAssetsURL("slider-shape-8.Dl15Vuk-.png");
const _imports_8 = "" + __buildAssetsURL("slider-shape-9.C69_vw18.png");
const _imports_9 = "" + __buildAssetsURL("slider-shape-10.CcfHlzNA.png");
const _imports_10 = "data:image/jpeg;base64,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";
const _imports_11 = "" + __buildAssetsURL("slider-user-2.Bq7a9ljA.jpg");
const _imports_12 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAoACgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+BtV65HsPy/8Ar+9AHrHw1+HE3jS6EksGqz2EUv76HSNPnvbp4II2ubyb9yjFUt7OK5njijElzeTQfYrdRPNGw87HY36taEeRSaXvTaUYuTtFW7t21taKd2elgcD9a9+XO4Jv3acW5SS1k1pay7XvJrlWrufUFr8JfhVImi6VD9kt18WxQ69oep+IyNOQeFbVLyPxNczObiefTdT0GTStWDI+taol5PpphGnaWuo2k03i1sdjoKrV5pOVFSjKFO0k6tr0Vy25JRq80FH3YytO95uDie5Ry7AzdKlyx5azjOMqqcP3WqrPm5vaQlS5JtrmabhblgpKb+Xviz4AtPA2vPYadOtxbmNXISdbmONnyTEk+7czw8xzRyAvG4ZC7ukqxetlmOqYul+/io1E2nZWvbq1sr9GvRpaX8bNMDDCVX7GTlTe12nbtr+Fmr9denkn+f8AP+eteqeUWhjk+n+Ix/X/AOtQB+23/BIn9l7V/wBrT4g6j4DtvFn/AAjXhSw0KyPjaFtLXU5ZtMuNfZY49ISeYWa6rqsi6jBPcXdtcpa2UZlgSO8Wxubf844ux08FiKcVD95Xq3o1lJ3VoQVnGKvy07wcVeznfmUlzJ/rvh5k1DOIYh163Jh8JhpSxFPl3vOfKoybspVPeUm03GHw2k4uP70/tB/8EFP2XvAOja14l0nxD8U9Vay02/mstKuNdS8t9NvPs8gubh7uS0ju8MkjvLHNcJGsEjxT+ZEoavjMXxBnGCly060JXaU5KhT5vdlflly01GyaTTcW07O99T9Ly7gzhjMYyqVKFenywlOEXipcjbhbnXNKU7vWNlPkd/hs0j+Pv9qj4XWnws8enRbDxBcarbTNdXK216Jftdkr3M6pEJifJuYJCk0qzwEqGdoZAJIyK/TuFMznmeCVSrSjGrTbpznBWjJq2vL0ly8l+97o/DONspp5Tmc6NGrKdCajUpRm7yUWnon1SlzelrM+XyAcnJx36fXj8D27Z65r6w+KHj/P5/rQB/Vx/wAEb/2dx4j8B61Z/DD4g6v4M8UfEv4dfD7xqNZk1PVbCxvtd0nXPiL4f8TaBbal4UvtB8QrZaVeQWUj2dnqitb6jeLHqK38HlWlfjnE2Nq4nN1RxdOkvqeMxdCEeVJ/V3HCVsPN86qx9pVpOSU3Bp8r5YLc/o/g/KMHgcipYjLsRiZQzbJMtx+Ik6kZf7dGtmWEx1Jeylhpxw+FxEIN0faxlrFzqu9l+h3/AAUI+Dnxq+Dn7M37Mfwqn+OHxF1XxT8QPH/jbR/il4gtvG3i68g8TadFpWljStMXWtZ1G61e0fTbW4MAs/tA07ULl7o3EQdInHgOpQw9ZYmvTdRWr1Gm6coJxnR5I8rpckuRSlGT5L67H0dahicVhPquExEqNNywuHVlUhWlCdHE+0m5qtOpBVKkIThCVRxt8TerP5fP2vfgtovhG8udP17xKfFGpeEPA/iXV5ddtL/Vbyxt9W1G88NWvhzRrm91YJeh4gb20S0KG3l1T7R5EcVu7bPq+F82xE60Y4SnCNPGZjg6Tp+zgpPDxp4qpipqMIwjeKdNyqWTUEubmaV/zrirIMHCni3mFec55ZkuYYmFX285R+uzrYOjgaLnUlUnJTn7RKk5WlOUuXlW35bE+o7fr0znGe3Q1+rn4kSBunPUDIHvj/Pt1PagD9hv+CRPx0+I/wAFfjXY+JdP1LUbnwJpEN7d6ppM1xd3Gm6Zpq6v4XtvE2p21gnmeQscWs6XqOpfZEhMkGmPqE7yvpcVvP8AAcdYOhLC4fGKMY4iNeFNzjFc1WPs61SCk9G3TdKSp35re0lFJc11+neG2Y42GOxOBjOdTCRwlXEujKpL2dFSrYejiJQg/djGqqtOVe3LdUYzbbgk/wBwP+CjnjDxjr+p+GNeufEsOo6/4attN+K+kf2Zot7afDfTtG1fRm0e98SWclpbGC/ivTZ6Ul5HreqSakU03SWs7qOdb6+P5jB0Z0G5QqVVXl7L2caVJSvOUJ2pv2nNBNJXq+zble0r3SP3TMJ4SlhaMqWYYqGY4alGu+eC+qWjzw9+fI/axjKUnGn7e6Si4Rp68v8AKf8AtL+NPE/jbxbdazq7XkNrqMg1KOzaSbyZYLqW5+w3LQkqAFjhd7fz4w4W+Mke1bkrX6/wlgsNhcFL2XJOpGbpSmoq8ZRjGVSKnbdymozUXa9NRd+S5/N/GWPxmKx8ViPaQhVprExpuUlGcJzqRoycOyhGUqfMr2qykrc7PmOvrj409h8JfCHWdZktrnW3Oh6bI7gh4zNqMjRpvMC2iZNrJIMIWutssAJnktWiRmGMqqV+X3n+HXr117feB+iX7N/jzRvgN4r8NeJLXS7W78O6VLNpfirSYJEubu90PU4/s+rCOGd4Eub5VMV+GkCi4urG3s71mbDxfP59l7zbL62GUuWteNbDybslWptuCb6KSbhdL3VK/Q+q4Oz+PDmeYbMKsHVwkozw2OpxScpYWulGo4J2UpU2o1YxdlJw5G1dtfo18fvB3wh8WeEovH/gmPUp/CdlpNtqupWljr+uz+F10p3jn0u2j0G91z+w9JiW4nigSxj0ixjglkWK5jQWgWH8hw0cy+sxwFKn7PEuvOnb2NJVVVl7s/3yh7TTVt89kuZ9z+gszpZDLCVc49pz4Knh4YqTVeu8P9X0nSSoOp7JKXNFRiqabk1Hokfg38QdRufFHjHxDeXUEMtqbxbVI7Qb4YbaGKOKCxjDIsrlYJI4NypETcTSHERkda/acqwEcswNDCRfPKMeapPX36snzTnte3M7R68qS3P5tz3NZ5zmeJx8o8kJtQoU9P3dCmuWlH1UVeVtOZyt2PIte+GurWjNPpEP22EeWJbSNw11bzvCJJIgG2mUJhsKSs4+WMpIxV29WFZPSWj79H/X3Hi+YP/Z";
const _sfc_main$6 = {
  data() {
    return {
      hero_img_1,
      hero_img_2,
      hero_img_3
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_mouse_move = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider__area slider__height-6 p-relative box-plr-6-245 d-flex align-items-center fix" }, _attrs))}><div class="slider__shape"><img class="slider__shape-9"${ssrRenderAttr("src", _imports_0$2)} alt="slider-shape"><img class="slider__shape-10"${ssrRenderAttr("src", _imports_1$2)} alt="slider-shape"><img class="slider__shape-11"${ssrRenderAttr("src", _imports_2$2)} alt="slider-shape"><img class="slider__shape-12"${ssrRenderAttr("src", _imports_3$2)} alt="slider-shape"><img class="slider__shape-13"${ssrRenderAttr("src", _imports_4$1)} alt="slider-shape"><img class="slider__shape-14"${ssrRenderAttr("src", _imports_5)} alt="slider-shape"><img class="slider__shape-15"${ssrRenderAttr("src", _imports_6)} alt="slider-shape"><img class="slider__shape-16"${ssrRenderAttr("src", _imports_7)} alt="slider-shape"><img class="slider__shape-17"${ssrRenderAttr("src", _imports_8)} alt="slider-shape"><img class="slider__shape-18"${ssrRenderAttr("src", _imports_9)} alt="slider-shape"></div><div class="container-fluid"><div class="row align-items-center"><div class="col-xxl-5 col-xl-6 col-lg-6"><div class="slider__content-6"><span class="slider__title-pre-6">WELCOME TO STARTUP.</span><h3 class="slider__title-6">We Build Good Startups.</h3><p>Elementum ipsum donec usodales porttitor mauris augue fermentum sagittis elementum.</p><div class="slider__btn-6">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-border-5 tp-link-btn-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get Started <span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" Get Started "),
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="slider__user"><ul><li><a href="#"><img${ssrRenderAttr("src", _imports_10)} alt=""></a></li><li><a href="#"><img${ssrRenderAttr("src", _imports_11)} alt=""></a></li><li><a href="#"><img${ssrRenderAttr("src", _imports_12)} alt=""></a></li></ul><p>Connect <br>More People</p></div></div></div><div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6"><div class="slider__thumb-wrapper-6 mb-10 pl-40 pr-30"><div class="slider__thumb-6 pl-20 one">`);
  _push(ssrRenderComponent(_component_mouse_move, {
    cls: "layer",
    dataDepth: ".2",
    imgSrc: $data.hero_img_1
  }, null, _parent));
  _push(`</div><div class="slider__thumb-6 two">`);
  _push(ssrRenderComponent(_component_mouse_move, {
    cls: "layer",
    dataDepth: ".3",
    imgSrc: $data.hero_img_2
  }, null, _parent));
  _push(`</div><div class="slider__thumb-6 three">`);
  _push(ssrRenderComponent(_component_mouse_move, {
    cls: "layer",
    dataDepth: ".4",
    imgSrc: $data.hero_img_3
  }, null, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero-banner/CreativeHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CreativeHero = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$1 = "" + __buildAssetsURL("features-shape-1.B7edRq9c.png");
const _imports_1$1 = "data:image/png;base64,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";
const _imports_2$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAlCAYAAADvLtGsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHmSURBVHgB7ZhLTsMwEIb/cdoFu0YCKbAKJ4AbUE4A3KAsWfA6AfQEpRTEFm7ADSg34AZkRyVAzgoh0tjYEaUR9EXq0qbyJ0V5yEk8+X/FMwMonhteGXMA8Zrno0h36rCJSFTd41aAvMMb3im/WJb8cuUEOYXSJ1olUcApI9qIhawuHrSukSOo10V+7lXA6MRab4rQsAF5st7QYDrwxvK2Gl2bR+vxWbTeyMqkmVXrZQqmg7XeBBlLmTR5X3B7oq2nVHp8VWphXuC1UgkWi8VisSh0GpI0NnIO4zW/JIRY1R2aF10u55jv3KzbckKISO6MmwF3enFL+60mJkyS4H681X8lmt1mBm5VUPWsQaXLg7YUN6aD0umScBYqjOEQkAEi7PbuzhjMgFMfJ1TPqjsxmuOorhUvEG1BogKSD2pfdb8+1MASwKT1VM1TFkCFQU2EEKhLzVjiXrB2UPyIAvc4DH/e83Tl+Y6IS05cKDOH1iCkUluGKoAbtN/Pft4zUj1jynrpwCBpHQ421MT8ZCPoLDtIDfMT+4DCRIEY9ygqVff6v3v07sw/FF/8qrs8DJp0P/5caZr+65kkc9ls2nomYMiIq20WyU0hpTsrC66RhsasWM9Yd0Yzbetltlkv0tYTBTqCJTufPFk5uZXswTUAAAAASUVORK5CYII=";
const _imports_3$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKsSURBVHgBxZfdbdswEMePQoA+Rs99qbqB7AxQZYN0gsQTJJnA9gRxJ4g9QbqBNUGkDUJPEHWBqP+zjvZZoCyJLZADCFEieT9+3AdF9EliKEDe0jQxxmy5Xtf15HtZVjRSIgqTDCWRckMBEgrWYilAQsGjt7YXvJtOn+xkUuMcH2gYuHMS0DWHrnd+9oJhLHsgjOdpl6a3HTqtq3wx5t0Lvbq6h64FqjGed0PAy0PdmBVWntIZ+VoUu/Y3jMnqj4+V0rnpBcM1Fuj4KK8xVv7C7tPq1rm94movrh90zVhnL1jgKwz4KYC9z2q48tvKA2X/jgV6jb5rH6PTqjHgNw+k5jwTWXmsulSkwAqa8BgJLGWX/rPuxAMVPFVb6MDWvUhbIlBeqT2nu9ePWYHAefYZu5sC7wXfnnliKLms1PbpHRyreZtNFD3DRG+wOjbADOVPFEUFuw1bLoB3Q/UZOTeOt5aOK6m6Zo3+C4DndFwx++nSZ7mi21dyg8jyRs3ZdIkzIttM1VRYdSYKmnZjcnyLlZ5YtfvEDonVTkGyrzeA03bftx65EMPJ3Ez007fdHHfrZsUsvBMcZPJvr6/Ldl/x/bg1eZZ81EWArZfjLp8pYD/YuHiSqN+jrAB/HKprUFpkI4EtbAX6yxkSYJeoP9REG04udjptB5lwsESkgprjKBkkTQm5LWwyWimuVnhi+ziwJwxeq+bD2XHslthuyRPbR4E5HcpKEzqGwcoHFrhtxfbtuZTqBSOJ3wpUZxnr6XpyngI/yWpdlwnf1WeOJL527z6o3sa2MUlimbmJ4TKx9l2jfDeQharPOlLbAYarz2W7UVLqwbUkxPaCN/JcdiVxGhCZ5DKx1Dq1hP5JZOpPgo8ip5ESeq9OVH1QwPhfYPpX8AWFSU7HhJJTgPwFesSTnjSjAJoAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,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";
const _sfc_main$5 = {
  components: { CreativeSingleFeature },
  data() {
    return {
      feature_data: [
        {
          id: 1,
          delay: "130",
          icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M14.1046 25.2803H4.92805C2.76655 25.2803 0.998047 27.0488 0.998047 29.2103V41.0003H14.1046V25.2803Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.2606 17.4199H18.014C15.8525 17.4199 14.084 19.1884 14.084 21.3499V41H27.1906V21.3499C27.1906 19.1884 25.4417 17.4199 23.2606 17.4199Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.368 31.1748H27.1914V40.9998H40.298V35.1048C40.298 32.9433 38.5295 31.1748 36.368 31.1748Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.671 1.83762L22.7124 3.92052C22.85 4.21527 23.2233 4.49036 23.5377 4.52966L25.4241 4.84407C26.6228 5.04057 26.9175 5.92478 26.0529 6.76974L24.5792 8.24349C24.3237 8.49894 24.1862 8.97056 24.2648 9.30461L24.6774 11.1124C25.0115 12.5469 24.2451 13.0971 22.9875 12.3504L21.219 11.3089C20.9046 11.1124 20.3741 11.1124 20.0597 11.3089L18.2912 12.3504C17.0336 13.0971 16.2672 12.5469 16.6013 11.1124L17.0139 9.30461C17.0925 8.97056 16.955 8.47929 16.6995 8.24349L15.2454 6.7894C14.3808 5.9248 14.6559 5.06018 15.8742 4.86368L17.7606 4.54933C18.075 4.49038 18.4484 4.21529 18.5859 3.94019L19.6274 1.85723C20.1972 0.717526 21.1011 0.717567 21.671 1.83762Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
          title: "Collect Website Leads With Embedded",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: ""
        },
        {
          id: 2,
          delay: "150",
          icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M17 5.99902V32.999C17 35.159 16.12 37.139 14.72 38.5789L14.64 38.659C14.46 38.839 14.26 39.019 14.08 39.159C13.48 39.679 12.8 40.0789 12.1 40.3589C11.88 40.4589 11.66 40.539 11.44 40.619C10.66 40.879 9.82 40.999 9 40.999C8.46 40.999 7.92002 40.939 7.40002 40.839C7.14002 40.779 6.87999 40.719 6.61999 40.639C6.29999 40.539 6.00001 40.4389 5.70001 40.2989C5.70001 40.2789 5.69999 40.2789 5.67999 40.2989C5.11999 40.0189 4.58002 39.699 4.08002 39.319L4.06 39.2989C3.8 39.0989 3.56003 38.899 3.34003 38.659C3.12003 38.419 2.89999 38.179 2.67999 37.919C2.29999 37.419 1.98001 36.879 1.70001 36.319C1.72001 36.299 1.72001 36.299 1.70001 36.299C1.70001 36.299 1.69999 36.279 1.67999 36.259C1.55999 35.979 1.45999 35.679 1.35999 35.379C1.27999 35.119 1.21997 34.859 1.15997 34.599C1.05997 34.079 1 33.539 1 32.999V5.99902C1 2.99902 3 0.999023 6 0.999023H12C15 0.999023 17 2.99902 17 5.99902Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41 29.999V35.999C41 38.999 39 40.999 36 40.999H9C9.82 40.999 10.66 40.879 11.44 40.619C11.66 40.539 11.88 40.459 12.1 40.359C12.8 40.079 13.48 39.679 14.08 39.159C14.26 39.019 14.46 38.839 14.64 38.659L14.72 38.579L28.32 24.999H36C39 24.999 41 26.999 41 29.999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.61938 40.6389C5.41938 40.2789 4.27941 39.6189 3.33942 38.6589C2.37942 37.7189 1.71937 36.5789 1.35938 35.3789C2.13937 37.8789 4.11938 39.8589 6.61938 40.6389Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.7388 19.5789L28.3188 24.9989L14.7188 38.5789C16.1187 37.1389 16.9988 35.1589 16.9988 32.9989V13.6789L22.4188 8.25894C24.5388 6.13895 27.3788 6.13895 29.4988 8.25894L33.7388 12.4989C35.8588 14.6189 35.8588 17.4589 33.7388 19.5789Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 34.999C10.1046 34.999 11 34.1036 11 32.999C11 31.8945 10.1046 30.999 9 30.999C7.89543 30.999 7 31.8945 7 32.999C7 34.1036 7.89543 34.999 9 34.999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
          title: "Product Design Event Development",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: "has-green"
        },
        {
          id: 3,
          delay: "170",
          icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none">
                    <path d="M1.99805 15V10C1.99805 5.02 6.01805 1 10.998 1H15.998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.998 1H32.998C37.978 1 41.998 5.02 41.998 10V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41.998 29V32C41.998 36.98 37.978 41 32.998 41H29.998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.998 41H10.998C6.01805 41 1.99805 36.98 1.99805 32V27" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.998 16V26C31.998 30 29.998 32 25.998 32H17.998C13.998 32 11.998 30 11.998 26V16C11.998 12 13.998 10 17.998 10H25.998C29.998 10 31.998 12 31.998 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.9981 21H7.99805" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
          title: "Website Leads Hire in Fixed Contracting",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: "has-pink"
        },
        {
          id: 4,
          delay: "190",
          icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path d="M25.0001 29C25.0001 32.54 23.4601 35.74 21.0001 37.92C18.8801 39.84 16.0801 41 13.0001 41C6.38003 41 1 35.62 1 29C1 23.4799 4.76002 18.7999 9.84004 17.4199C11.22 20.8999 14.1801 23.58 17.8401 24.58C18.8401 24.86 19.9001 25 21.0001 25C22.1001 25 23.1601 24.86 24.1601 24.58C24.7001 25.94 25.0001 27.44 25.0001 29Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M33.0001 13.0001C33.0001 14.5601 32.7001 16.0601 32.1601 17.4201C30.7801 20.9001 27.8201 23.5801 24.1601 24.5801C23.1601 24.8601 22.1001 25.0001 21.0001 25.0001C19.9001 25.0001 18.84 24.8601 17.84 24.5801C14.18 23.5801 11.22 20.9001 9.84 17.4201C9.3 16.0601 9 14.5601 9 13.0001C9 6.38003 14.38 1 21.0001 1C27.6201 1 33.0001 6.38003 33.0001 13.0001Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M41.0001 29C41.0001 35.62 35.6201 41 29 41C25.92 41 23.12 39.84 21 37.92C23.46 35.74 25 32.54 25 29C25 27.44 24.7 25.94 24.16 24.58C27.82 23.58 30.78 20.8999 32.1601 17.4199C37.2401 18.7999 41.0001 23.4799 41.0001 29Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
          title: "General are Consulting Process Embedded",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: "has-purple"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_creative_single_feature = resolveComponent("creative-single-feature");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "features__area p-relative z-index-1 grey-bg-7 pt-110 pb-90" }, _attrs))}><div class="features__shape"><img class="features__shape-1"${ssrRenderAttr("src", _imports_0$1)} alt="features__shape"><img class="features__shape-2"${ssrRenderAttr("src", _imports_1$1)} alt="features__shape"><img class="features__shape-3"${ssrRenderAttr("src", _imports_2$1)} alt="features__shape"><img class="features__shape-4"${ssrRenderAttr("src", _imports_3$1)} alt="features__shape"><img class="features__shape-5"${ssrRenderAttr("src", _imports_4)} alt="features__shape"></div><div class="container"><div class="row justify-content-center"><div class="col-xxl-6 col-xl-7 col-lg-7"><div class="section__title-wrapper-6 mb-60 text-center"><h3 class="section__title-6"> Put the Spotlight on the Main <span class="section__title-6-highlight"> Features. <svg width="201" height="11" viewBox="0 0 201 11" fill="none"><path class="wow" fill-rule="evenodd" clip-rule="evenodd" d="M9.05453 10.8839C6.20147 10.8982 3.21601 10.7537 1.01886 10.0285C0.864228 9.97744 0.711775 9.9189 0.581885 9.84837C0.517069 9.81318 0.434369 9.76251 0.354554 9.69171C0.281315 9.62675 0.155306 9.49652 0.0910472 9.29127C0.0147649 9.04755 0.05678 8.79832 0.178701 8.60172C0.281012 8.43673 0.415963 8.34474 0.491835 8.3C0.643502 8.21055 0.809844 8.16646 0.918957 8.14164C1.37074 8.03891 2.1664 7.9951 3.00131 7.96916C3.73866 7.94626 4.54731 7.93629 5.32252 7.92673C6.41386 7.91328 7.43888 7.90064 8.10528 7.85387C9.91746 7.72669 11.7311 7.59642 13.5455 7.4661C16.5831 7.24792 19.6228 7.02959 22.6612 6.82535C43.405 5.4309 64.1476 4.25838 84.9012 3.40104C73.7378 3.38875 62.5747 3.32145 51.4104 3.17052C51.416 3.1706 45.4792 3.12884 41.6005 3.07089C40.6265 3.05633 39.7745 3.04068 39.1697 3.02425C38.8685 3.01607 38.6225 3.00754 38.4517 2.99856C38.3692 2.99422 38.2904 2.98909 38.2282 2.98236C38.2053 2.97988 38.1474 2.97354 38.0855 2.95857L38.0844 2.95832C38.0711 2.95532 37.9518 2.92851 37.83 2.84812C37.7811 2.81585 37.5529 2.66179 37.4919 2.34084C37.4176 1.94937 37.6477 1.69174 37.7462 1.60578C37.8448 1.51977 37.941 1.48022 37.9717 1.46789C38.0145 1.4507 38.0506 1.44057 38.0712 1.43521C38.1129 1.42438 38.1486 1.41857 38.1675 1.41571C38.2082 1.40953 38.2494 1.40565 38.2822 1.40297C38.3513 1.39733 38.4421 1.39245 38.5506 1.38795C38.7702 1.37884 39.0963 1.36992 39.5405 1.36112C40.4307 1.34349 41.8145 1.32598 43.8129 1.30893C95.6756 0.866429 147.552 0.567935 199.42 0.727011C199.851 0.728333 200.199 1.07875 200.198 1.50969C200.197 1.94063 199.846 2.28891 199.415 2.28758C194.258 2.27177 189.1 2.26047 183.942 2.2534L183.92 3.66106L182.192 3.63353C181.25 3.61854 180.309 3.60364 179.368 3.58906C174.167 3.51003 168.967 3.45223 163.767 3.41078C163.222 3.408 162.677 3.4057 162.132 3.40394C115.603 3.25364 69.1944 5.26138 22.7659 8.38241C19.7301 8.58648 16.6978 8.80429 13.6633 9.02224C12.2771 9.12181 10.8905 9.22141 9.50289 9.31974C10.7075 9.30671 11.9031 9.26775 13.0333 9.23091L13.1891 9.22583C14.4995 9.18319 15.7267 9.14481 16.7461 9.15881C58.3184 9.72964 100.063 9.23542 141.577 7.09843C146.003 6.8706 150.426 6.56528 154.842 6.18681C156.349 6.05767 157.848 5.91563 159.336 5.72905C159.15 5.72103 158.962 5.71357 158.773 5.70663C157.597 5.66334 156.414 5.64093 155.518 5.62906C154.984 5.62199 154.531 5.61862 154.252 5.61655C154.079 5.61526 153.973 5.61447 153.956 5.6136C153.526 5.5908 153.196 5.22345 153.219 4.79311C153.241 4.36277 153.609 4.03241 154.039 4.05521C154.027 4.05456 154.147 4.05519 154.44 4.05734C154.709 4.05932 155.087 4.06264 155.539 4.06862C156.441 4.08058 157.638 4.10319 158.831 4.14711C160.019 4.19086 161.222 4.25633 162.13 4.35581C162.578 4.4049 162.987 4.46567 163.296 4.5455C163.442 4.58343 163.621 4.63898 163.777 4.72855C163.868 4.78076 164.318 5.05276 164.259 5.6086C164.218 5.99372 164.011 6.2781 163.764 6.46085C163.541 6.62524 163.29 6.70676 163.099 6.75371C162.9 6.80253 162.695 6.82981 162.53 6.84953C162.478 6.85577 162.431 6.86117 162.388 6.86611C162.279 6.87869 162.195 6.88834 162.117 6.9014C159.742 7.29996 157.348 7.53838 154.976 7.74169C150.542 8.12163 146.102 8.42818 141.657 8.65695C100.102 10.796 58.3231 11.2904 16.7247 10.7192C15.7485 10.7058 14.5597 10.7426 13.2399 10.7856L13.0778 10.7909C11.8097 10.8322 10.4348 10.877 9.05453 10.8839Z" fill="currentColor"></path></svg></span></h3></div></div></div><div class="row"><!--[-->`);
  ssrRenderList($data.feature_data, (item) => {
    _push(`<div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">`);
    _push(ssrRenderComponent(_component_creative_single_feature, { item }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/features/CreativeFeature.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CreativeFeature = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgB5ddRToMwGAfwr8ULEBez7cUreJR5A3w26BEsR1Dm89wJ3FG4gi+OmCU9AdTSJUqhHV9bEpbsnywpW/f9WAPfCgGPHN7mSUTJphlXtXiYPZUf4BgKE+W84EO+WMFIsdXqwXy93EQEPvn78gUC09RQtWTNkzBXZycSdSAEC8HVd2WN45FIeH6zssJxut/JydnfG564jqo6WZz+7KzwES9ZCG5GS9adZ7y4fHEsaoV9cBe0CYGB8HzOgJB/kBBWVfVXu3NFEb11QVGwEQco5OvOMEahaNiC94NEFdw0fEBGLu8ztH+dnkIu+ysgQ/h6IWCCTPYncQXyqkTPHlhqcFlq7MTefWqsRlj8+J0BIqilNqCFcezQXgdhU0dqX71q7NFeqStquk99ejsNRX1xOgbqg9OxUFdcg9XGLAA9iXc2fRo8k1ufWsA2BDXiQmzVtsoGN7lO9wkIuA9BdVzVSrqfWbY++tmF4eZal/cI8wtnokFWi0wZiQAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVASURBVHgBrVdLbBtVFD1v7LRNSGAgQSotJNMFqEWF2JUqUSrA3rAoiyZIVcOCxJX4rCDOAhpBpCRSkdiRUCLYxaELYAGJkZCQUGRXqIRPVRvxK2KRSatCpSZ4RJyk4Hge9854XHs8/iTqlcaeeZ97z7v/J3AbSUVGbUKTBpgBEwpW0BprZJ8f2yAVG5ofm5oJEVCgdNGQJiBJMFQJqRNbg75DHVjvXkbLUD1+op4wH3IBCYWEiG5aTO9S420kRJcQafr+UcDU82hKG2jWeV871qbtcWWQ1o6toHlmWyA6kE2QkAC9JgG5pMBM56CkgTt0A8JADSIQmTyUIL/7IBO0t/cGWtPYCpFttXasLzKzDqyGtrK3HdlIB9bmSr+JzyL7S7U9itegDztGCX2c1NxLpphmUGiQSLUDZIoiCNs5zbgfO2exFbKRb2j8fg+yUTpZqtZJHHI06DXH5u3AxigaIVud64nSsXuRjdHYO+61ckHT5Nf3h6wnpanskPzAG6Bqm3hjwD3nEaLiuIRZ5s055KI+7EwRkKUbqYdjuGkOQooowVDh99mLbkrMT58wVrMtk0+8UsnVwN2GimyvD8osATpP33pRogstheTOxApa9qHiJByuZooEoXv/L3VMI2PYpQyJoF4RRaxpEjuax39BBsZjZY7pQ1OIGCS92Ga+O/BUfGpAPfXGhHr1r72oTSKCf2WCTeSe8XJUV3QIigo56d7ItkdeThw99AP6js2h//RZ1CWJADZMT0dcQRuZ0oTjqEUQdj4Q8E4qxEzAOtXrL0zh4EO/YWRyGHVJiKh1AA/ahO8UhTLlkH96/LeAK+S15rh7sUywSmWkdOxM9G2E+z9D5+4/8dLJD1GTTJP3jpUWN8rEGjl/l4UTvmnLMXmBHzsym1D2Ofm/CGJBCzEUN2/2i/DAp5h7L0KauVwyvgdXaI7nf/5jPy7+FNAv/foouLiR2g36T1ISXOLaY1plQbnL0gQ5ZI8EYm4A9knyGpTKxPrAfdfw7sib6B8+i6PB70ngAVy5vsea69x9DQcfvEzgfsfhR1JqZGQy6MWbEliKBAz5bZVwqs1XOCRr6Jv0i12Pk0N60bEn5/HqmbfADvty3zlL+J1tq+5lhjFSCYDTAbmASukg6bfrglUtrRRtl2zB/YHGKjz3+QmjGoiPv+ghLVxE3zNzqEG616BTn/jdr5ApLGDwDZDgJe4DgHx8s9AfvD9Mjimx6ERHKX1EIJ6rDYDcifl5UigHX9gC8TdaJ6hAEQAlvYzmiugQYd2Q33YlCUhP6Tg73tXre+tpgRgoE+4hzpqkbd3xE8vjKCp6OWar9g5SDBGIshT8wSfPkym8zVQkU46LI7rugaysPhVrhw1Amd20c3rFRgrVCP0WK+ShZ79CfCpiRYknCaTFY0tB97BXfSrG3jLakibkOOWLWa/egU4UI4300qt+4dJhdJLwagDi808b3ceTSa+5WvWpSO1YnajWEzBxGj555MvFmdOvZeRCl3Q9CU5uTu9ApT9ayX9tkfqTAGoRM+BOyotBYV6jecnrrKaGhMoLWsBdMbn0M5BSgWzyap2XhyCbgZejFhrX6Ub4uJtcu/PifqJBYgB04oy7yWWmW+nAae0Yt4sFDUund22Y3E0utWeBhtVZBoSb3LVUNQ2Kegy4yaUcn+HrnM1Enq93x/S6ucF6zDBH4ZZBFMo8lXIxQwltkG5WYc505f2BvxuF+6i0/kFlGulGb251Qdw6mZmyF4ukc/l17qNOf5BDUxLYZdS7Jm4LhANEQb7Hffm9HfQ/vL5sIvIX9bgAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACyCAYAAADrlOUvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA7lSURBVHgB7Z1/bhRHFsdf9YzZrEDayQkyrBRIVpGwFwcpfzGcYMkJYk4QcwLMCcAngJwAOAHDX5GwiR0pEgFWYThB/AcQZHu69r12l3cYpme6q6uqX02/j2T5BzOJPf2d6u+rb9UrAME7Pz/X/V/+0F+A4J0EBO90FVwfH8ENELzTBcE7qgM/gIYDELyjQPAK2Y2VDrymr5Mu9P/9T/UGBG+I5fDMmQ4MzNfjQ/geBK+IoD2jAe1GjkrgPyB4RSyHRybthqHzDj5fW1Pipz0hI7RHJu2G4fjvsAGCN0TQHpm0GwaxHX4Ry+GJWXbDILbDHzJCe2KW3TCI7fCHCNoTWhVbC7Ed/hDL4YG917qHUfefcx5ygLbjvNgO98gI7YH0CK4veEjv6OzCxwgWiKA9MM9uGJIZMyBCfUTQfhiUeMzq3p7ugeAUEbRjdl/o6zgBXUaovePPYBUEp4igXaPKz2AkHbEdrhFBu0aVL/YwSbwutsMtImiH7LzSg5J2wyC2wzEiaIcoXd1CKCXTdy5pVNDZiLZcDKAqyXL56KcvdaN3nGZH6GOcFXipX9NCHoic/M3Zh+r0dp7H/8amvx+v5V5ybPUaOKNRQX/7tRpiEdWjVWnPXuo7MRdINnbj9LkR2w66Zs9e6Tv49z+m+mH9X+ohNEjjHlqnsJ19Btgcn4U9vGVtQJwMwJZIbQeNynTNtIZN+j5N4TY0TOOC7p6BuxPf9vEXuoej9b2YbEgNu2GIynbQtUF78TgblSf+7jHAEBqmcUGvnc9WnA0nf4aj9QbakL2d3/UmRABe2NqWIRbbgUL+caULezB1R1IA97/7Wo2gYVhM2+nxzFtVTyVwJ5Kisfb6Zu5rpGn2gkZl/PLurLn2dAw/AQPYrIemChk/FU754Ai2lbyFbW5riOlC46iwBw7AN/a1rFBmBBV96Tm4ZXzyTDSM1i+q88AANsEKvmCPFvz7FseiEV/ADXBFUqOw9MB00VcEh2LQwEbQWXGoFvZ/41c0KrgKjkgUj9kOGpV3X+kH00VfERyKQQMbQVNxiO/0R2UemxeNj5serbM3lXa3FgP/rsbb7lLRNz4Hr6FkoculGDSwWsuhUrhf4eHZaN1k0dj1MDPRVNtdMxUHBUVfEVyKQQMrQecF0RCqkfW/wLTqFgRGeVjPrBxamDLkSd+tvIfIoMpzqRjkVsSyW22nS9qOT56HRSON1tmOkQC4thsTDELZjomibwss4FQMGtgJuvs3tB3Kujl4H5/7IETROK+RTF18t939aP2FfcJ5wKkYNLATdJYc6nq+LETRqD3u2vYZspiib9FU3CKwGHzIqRg0sGw0Q+sa0J8+BjcMj8Zww+WLP69vnStc97/Lf+d7AG7uLOkhrF35Ru0DM1juWLEsDosYuC4afdoNg8v+d1nRN2P9RQ32OYqZYLsFy7Y4LPzv5UXj09/q76jQAZrEuLAd+aL711nRV22v41xwqm4bmMK2t13WH+44m+B3vuifwoDDMdy2sSEh7IbB1naUWn9hC6N1G7NgO0K7KA6LqFM0hrAbBhvbQdOWLoq+InCefAiMYb3rW4/B53Yeq3UhWoVb5lnFdpwmfTht6eOuZjgc85t7noR9O908jh2AZ2h56uUv1dyLVaJNrmtKtd2loo+2sPkUcs5w/YK6Bozh35dDhylATNE4b7Qu0SbXNXPb7pqd1q6LviK4rduYBXtBd87AsEZyWJW+2YE+S9gh7YZhVtvdqaQvTB8MLAavfK3uA3PYC5qKQ7MzPBR0+y4oGgcQno/a7mZFX4lF967hXgwaojiSIuRU2TRmim8lwZGQCq4GoK1ZxwAjl0lfVTBtPc8x6p4mmjNWQhWHBZDlGQE01lhxRA15QvjkAtgXg4ZomjXqZqeLSEhNiZnoNyjmKIpBQ1SnYO2+0n82eWFbCfNkcJqo2umGLg6FrBj0GW45JypBT7UNEwJwyHgh0iyiEvSstmGCP2jFYwwzG5NEJWhCM19LsExU3IXPgiiPRpbiMACRFYOG6EZoQopD/3Dc0V2GKAUtxaF/OO7oLkOUgpbi0C/c2ntVIUpBE1Ic+iOmZHCaKItCw6Ke0oIFkRaDhmhHaGJRT2mhOrEWg4aoBV2yp7RQgViLQUPUgva5M7yNxFwMGqIWNOF5Z3iriLkYNERdFBoaXvy/HEReDBqiH6EJ123D2kjsxaBhKQRds6e0AHCw8mE5rFvUgqbd0D+/1v3xIdoNDSy7YUbC6PgcrNKZixA57D00ifboLPQ7GKDgbbGXJHBJ63yPn6p1vrZQhM425Y5QHKNUwxv8vJ/i9yvvYMTt4NNpWAj6I9Fq6CcKvtBGsLJMlBdk7ehuqOEAr9GvJHadwEH3LexzEHswQZM1WDmEVaUygV7Cj56Idsk4EfuIPkjsODCNaGQ/7sLou/Nh5redCtqIVtMom+AoqzNLsIpOvSeiFRCqcw4yC5PCG+jg6I4j/ZUL7k4DqCRosgYfetCbEK34WcEVH4ld5aN7VbF/IuiZRRgJloQrohWaIPftk0VqkW9Xz57rDRz6r4qfFaJkskhNYTu5TC1Sx/AkE7KIWYiNE9320U08otPTPrIcNFrjUH5LrIUQCTQq3/72K3W6x3RmUbjzQm8parQtwhZ4coCTEdvd93D3Ew9d9AzqydxNYAOrTWcHVgpCTQqFbFg4bUfC7iSwhZPk3g+bFIRCsODr/AVbi9LI0vPQImyhCaoeklo5KRRhC4EYUquK/Nz30lhH3zvP9UB1Mn89AEFwh5WQDbXXcshUn+CIWkI2OFucJMIWrNAYZ+NcsqszEJ0vHxVhCyX5JBRxgbf10Du/602cw/5RhC1MsXAuuQ5eF/hLOCNM4FXIhiA7VmSqr92gkG/7FrIh6J5CEXa7qBqKuKCRTbIi7KXHyRScDY3u+qY+EAnAHZBwZlloTMgGFm0MZKovehoXsoFVoxkRdmRQywKAm+sXFZs2YqwEbRBhs8dLKOICloI2SDjDjiBzyXVgLWjiNJxJUNiyibcp2AvZwF7QBpnqa4RohGyIRtCGfB32YxC8gzMX1zjMXFQhqv7QNEqjmO+BEAR6rek1h4iIynKsnIzMfRBCMjrCkTqW07GiGKGp3x6K+QGImJuABpIHdA0gAqIQ9PhcZjPkCOTmWB2fzQYU9rAX9LNX+g5O110HoWkGz15q9vULa0GjmG/htNEmCCzQABt0TYAxbIvCXMxbILAD09uty18qlucashT07kv9I35it05AmEDDxvpF9RMwg52gd15hcKIlOIkBjsELKw9NC/7xHRZFNS1kwcuDp7/xOqyTjaApOElIzLIAKSZ6yRl4wClNZGE5JAWMHjZpYuOCpgQKJ+33QMQcO/udd3Ct6VV5jVsOFLOMzMvBan4tG6VRQe+eJE8SaS8Pq02niY0JOk+cNkBYKppOExvx0JICLj9NpYnBBS0pYHvQKdwMvTM8qKB3/6t/gBTug9AeAkfkwQSdtf1SWAVLcNI2DtJDuHblG7UPAQjWTleCk1ZzgMHLWojgxfssh4hZQGgL3eMQEbn3Dv4iZmGCEaaJaz7TRG8jtGxsFWbQpzTR54Zbb4KWja1CAavp2awnuBe8CFo2tgrzyNLEl9qLqJ0LmvHG1gOsGB5mH21Bn/697PrSoag3fUTkTotCRpE2XcB9DHF+VRr2DwGGZsoIR4YNfDFb0U4sBbhx5cLJCa1ZgZ6gBdQwwGHsEjA5BsR1RN4FR1AKiFHnFjSBhhG+MMMUBawTGOJFLJzETzX0VXQtKu1Q6f9DrPwNTR+nd6hsy1sKA62AQi8SefCahwbA3Rd65CpNdCJoemECRtpkHehMjyco5P3uB9iPpdVrcNT8VDZ/45+++Wn24fgzFHUCA3zTX4UTgftPdhXc33mu37jYcFtb0NlewJNI2weF1kFwTz4wDPOPjGzJAt7VfFuVfMNt7Yi8lqBPgxNX6zMqWAdblGrPWhLl4LpMjOKnVoV6dOOouooivAo6yxlcWBWz4bbW3kRrQTtIAU+sA4oXR+BhMOtAF7ktHjqBf4AHcmtAH9nSUIdWpZ9H5NaithJ0trG1mphJqCMU7hOxDsuHY6ti2vdabbi1EnTeWrVf+IAp67DyDkZSuLWLmlbFtO+9BhWpfPPNN7ZuTPzotHAjC9F5D0PO4sXfn+4sA2gHw/ULqrIoQrHIqtDh95cvqBtQgUojdB6c0BTdtlgHoS6LrAre3S+R5qoEL5UEnbyFbfwlWLZRZQ3FzyczDgMQ5jLLqlSh0lqOpfDBoaftsJ44OoabnRX4Pj8bOxiqhUt3ozrWzQmB9zQepSc939bOq4NUoagVv4VCy0T7BB0Q2sY/WWPQ7RQje7FsHmmfoENZDiycZ/WkyH+2DYIXxHL4+X+M1r9Sm0X/jH56CyYWBfn7NcRDC3WhIjCdHwiQnz4ai5/2gQjaPTfLzM3TY/QxilpwSqsE7bsvBIZOt9cvqtLzp7TIh54DHvnlD/0FtAgZoV2B4cm3F9UWVCR/zhAEJ4igXZCHJ2BJE6HLstIqQXc6fmY4THgClvgMXY7fw+fQIlolaB+7VabDE1t8hS6q054dOoRYjjoUhCe2SOhSHxG0LQvCE1tchy6qZf24WyXoRDtKzkqEJ7a4Dl3SrghaWMxNnxsbJHSxRwRdkarhiS0hQpdlpFWCTutaDsvwxBYXoctkO7A2ICN0WWqGJ7bUDl1a1FiHEEGXpG54YovsdKmGBCslcBWe2FIndJFpu2XG5uI6Dk9ssQ1dfLUD44pYjnl4Ck9sCbXTJWbaJegqo5XH8MQW2emyGLEcxdzk2BWqaujStn2FYjlmECo8sUVCl2JE0J8yDBme2CI7XWbTLkEvmrYj3zyGSt0um6RM6NK2dmDioSdoKjyxRUKXTxHLkdN0eGKLtBf7GLEcBJPwxJZ5oYsGSQqXl1mWAz1o5y8Wp9/WYk7oIoJuDXl4sgx9ryV0OaHtHjpK31yE7HRpkaCn24BxD09smRW6tKkdWFtH6CjCE1vaHLq0sT90VOGJLW1tL9YaQXe7J4lZbOGJLaehC7SrHVirRuhYwxNbstAF/+a2tQMTlhw6sRVawv8AI48n0Xl2IJoAAAAASUVORK5CYII=";
const _sfc_main$4 = {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="about__area pt-110 pb-120 p-relative"><div class="about__shape"><img class="about__shape-3"${ssrRenderAttr("src", _imports_0)} alt="shape"><img class="about__shape-4"${ssrRenderAttr("src", _imports_1)} alt="shape"><img class="about__shape-5"${ssrRenderAttr("src", _imports_2)} alt="shape"><img class="about__shape-6"${ssrRenderAttr("src", _imports_3)} alt="shape"></div><div class="container"><div class="row"><div class="col-xxl-5 col-xl-7 col-lg-6"><div class="about__section-wrapper-6"><div class="section__title-wrapper-6 mb-125"><h3 class="section__title-6"> Discover the Power of Creative <span class="section__title-6-highlight"> Freedom. <svg width="201" height="11" viewBox="0 0 201 11" fill="none"><path class="wow" fill-rule="evenodd" clip-rule="evenodd" d="M9.05453 10.8839C6.20147 10.8982 3.21601 10.7537 1.01886 10.0285C0.864228 9.97744 0.711775 9.9189 0.581885 9.84837C0.517069 9.81318 0.434369 9.76251 0.354554 9.69171C0.281315 9.62675 0.155306 9.49652 0.0910472 9.29127C0.0147649 9.04755 0.05678 8.79832 0.178701 8.60172C0.281012 8.43673 0.415963 8.34474 0.491835 8.3C0.643502 8.21055 0.809844 8.16646 0.918957 8.14164C1.37074 8.03891 2.1664 7.9951 3.00131 7.96916C3.73866 7.94626 4.54731 7.93629 5.32252 7.92673C6.41386 7.91328 7.43888 7.90064 8.10528 7.85387C9.91746 7.72669 11.7311 7.59642 13.5455 7.4661C16.5831 7.24792 19.6228 7.02959 22.6612 6.82535C43.405 5.4309 64.1476 4.25838 84.9012 3.40104C73.7378 3.38875 62.5747 3.32145 51.4104 3.17052C51.416 3.1706 45.4792 3.12884 41.6005 3.07089C40.6265 3.05633 39.7745 3.04068 39.1697 3.02425C38.8685 3.01607 38.6225 3.00754 38.4517 2.99856C38.3692 2.99422 38.2904 2.98909 38.2282 2.98236C38.2053 2.97988 38.1474 2.97354 38.0855 2.95857L38.0844 2.95832C38.0711 2.95532 37.9518 2.92851 37.83 2.84812C37.7811 2.81585 37.5529 2.66179 37.4919 2.34084C37.4176 1.94937 37.6477 1.69174 37.7462 1.60578C37.8448 1.51977 37.941 1.48022 37.9717 1.46789C38.0145 1.4507 38.0506 1.44057 38.0712 1.43521C38.1129 1.42438 38.1486 1.41857 38.1675 1.41571C38.2082 1.40953 38.2494 1.40565 38.2822 1.40297C38.3513 1.39733 38.4421 1.39245 38.5506 1.38795C38.7702 1.37884 39.0963 1.36992 39.5405 1.36112C40.4307 1.34349 41.8145 1.32598 43.8129 1.30893C95.6756 0.866429 147.552 0.567935 199.42 0.727011C199.851 0.728333 200.199 1.07875 200.198 1.50969C200.197 1.94063 199.846 2.28891 199.415 2.28758C194.258 2.27177 189.1 2.26047 183.942 2.2534L183.92 3.66106L182.192 3.63353C181.25 3.61854 180.309 3.60364 179.368 3.58906C174.167 3.51003 168.967 3.45223 163.767 3.41078C163.222 3.408 162.677 3.4057 162.132 3.40394C115.603 3.25364 69.1944 5.26138 22.7659 8.38241C19.7301 8.58648 16.6978 8.80429 13.6633 9.02224C12.2771 9.12181 10.8905 9.22141 9.50289 9.31974C10.7075 9.30671 11.9031 9.26775 13.0333 9.23091L13.1891 9.22583C14.4995 9.18319 15.7267 9.14481 16.7461 9.15881C58.3184 9.72964 100.063 9.23542 141.577 7.09843C146.003 6.8706 150.426 6.56528 154.842 6.18681C156.349 6.05767 157.848 5.91563 159.336 5.72905C159.15 5.72103 158.962 5.71357 158.773 5.70663C157.597 5.66334 156.414 5.64093 155.518 5.62906C154.984 5.62199 154.531 5.61862 154.252 5.61655C154.079 5.61526 153.973 5.61447 153.956 5.6136C153.526 5.5908 153.196 5.22345 153.219 4.79311C153.241 4.36277 153.609 4.03241 154.039 4.05521C154.027 4.05456 154.147 4.05519 154.44 4.05734C154.709 4.05932 155.087 4.06264 155.539 4.06862C156.441 4.08058 157.638 4.10319 158.831 4.14711C160.019 4.19086 161.222 4.25633 162.13 4.35581C162.578 4.4049 162.987 4.46567 163.296 4.5455C163.442 4.58343 163.621 4.63898 163.777 4.72855C163.868 4.78076 164.318 5.05276 164.259 5.6086C164.218 5.99372 164.011 6.2781 163.764 6.46085C163.541 6.62524 163.29 6.70676 163.099 6.75371C162.9 6.80253 162.695 6.82981 162.53 6.84953C162.478 6.85577 162.431 6.86117 162.388 6.86611C162.279 6.87869 162.195 6.88834 162.117 6.9014C159.742 7.29996 157.348 7.53838 154.976 7.74169C150.542 8.12163 146.102 8.42818 141.657 8.65695C100.102 10.796 58.3231 11.2904 16.7247 10.7192C15.7485 10.7058 14.5597 10.7426 13.2399 10.7856L13.0778 10.7909C11.8097 10.8322 10.4348 10.877 9.05453 10.8839Z" fill="currentColor"></path></svg></span></h3></div></div></div><div class="col-xxl-6 offset-xxl-1 col-xl-5 offset-xl-0 col-lg-5 offset-lg-1"><div class="section__title-wrapper-6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit honcus a turpis sit amet Donec nec elementum ipsum elementum.</p></div></div></div><div class="row"><div class="col-xxl-3 col-xl-3 col-lg-4"><div class="about__features"><div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"><div class="about__features-icon"><span><svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M12.0037 23.7486C11.4037 23.7486 10.8137 23.6086 10.3337 23.3386L5.60367 20.6086C3.64367 19.2886 3.51367 19.0486 3.51367 16.9786V12.0186C3.51367 9.94859 3.64367 9.70859 5.56367 8.41859L10.3437 5.65859C11.2937 5.10859 12.7237 5.10859 13.6737 5.65859L18.4037 8.38859C20.3637 9.70859 20.4937 9.94859 20.4937 12.0186V16.9786C20.4937 19.0486 20.3637 19.2886 18.4437 20.5786L13.6637 23.3386C13.1937 23.6186 12.5937 23.7486 12.0037 23.7486ZM12.0037 6.74859C11.6637 6.74859 11.3237 6.81859 11.0837 6.95859L6.35367 9.68859C5.01367 10.5986 5.01367 10.5986 5.01367 12.0186V16.9786C5.01367 18.3986 5.01367 18.3986 6.40367 19.3386L11.0937 22.0386C11.5737 22.3186 12.4437 22.3186 12.9237 22.0386L17.6537 19.3086C18.9937 18.3986 18.9937 18.3986 18.9937 16.9786V12.0186C18.9937 10.5986 18.9937 10.5986 17.6037 9.65859L12.9137 6.95859C12.6837 6.81859 12.3437 6.74859 12.0037 6.74859Z" fill="currentColor"></path><path d="M17.502 9.37854C17.092 9.37854 16.752 9.03854 16.752 8.62854V5.99854C16.752 4.41854 16.082 3.74854 14.502 3.74854H9.50195C7.92195 3.74854 7.25195 4.41854 7.25195 5.99854V8.55854C7.25195 8.96853 6.91195 9.30854 6.50195 9.30854C6.09195 9.30854 5.75195 8.97854 5.75195 8.55854V5.99854C5.75195 3.57854 7.08195 2.24854 9.50195 2.24854H14.502C16.922 2.24854 18.252 3.57854 18.252 5.99854V8.62854C18.252 9.03854 17.912 9.37854 17.502 9.37854Z" fill="currentColor"></path><path d="M13.6302 18.6287C13.4202 18.6287 13.2002 18.5887 12.9802 18.4987L12.0002 18.1187L11.0202 18.5087C10.4902 18.7187 9.95024 18.6687 9.55024 18.3787C9.15024 18.0887 8.94024 17.5887 8.97024 17.0187L9.03024 15.9687L8.36024 15.1587C8.00024 14.7087 7.88024 14.1887 8.04024 13.7087C8.19024 13.2387 8.60024 12.8787 9.15024 12.7387L10.1702 12.4787L10.7402 11.5887C11.3502 10.6287 12.6602 10.6287 13.2702 11.5887L13.8402 12.4787L14.8602 12.7387C15.4102 12.8787 15.8202 13.2387 15.9702 13.7087C16.1202 14.1787 16.0002 14.7087 15.6402 15.1487L14.9702 15.9587L15.0302 17.0087C15.0602 17.5787 14.8502 18.0687 14.4502 18.3687C14.2102 18.5387 13.9302 18.6287 13.6302 18.6287ZM9.52024 14.1987L10.1902 15.0087C10.4202 15.2787 10.5502 15.7087 10.5302 16.0587L10.4702 17.1087L11.4502 16.7187C11.7802 16.5887 12.2202 16.5887 12.5502 16.7187L13.5302 17.1087L13.4702 16.0587C13.4502 15.7087 13.5802 15.2887 13.8102 15.0087L14.4802 14.1987L13.4602 13.9387C13.1202 13.8487 12.7602 13.5887 12.5702 13.2987L12.0102 12.4187L11.4402 13.2987C11.2502 13.5987 10.8902 13.8587 10.5502 13.9487L9.52024 14.1987Z" fill="currentColor"></path></svg></span></div><div class="about__features-content"><h3 class="about__features-title">Leadership</h3><p>Fully committed to the success company</p></div></div><div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"><div class="about__features-icon yellow-color"><span><svg class="center-icon" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M5.00195 15.9985V8.99854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.25195 22.9985C7.04688 22.9985 8.50195 21.5435 8.50195 19.7485C8.50195 17.9536 7.04688 16.4985 5.25195 16.4985C3.45703 16.4985 2.00195 17.9536 2.00195 19.7485C2.00195 21.5435 3.45703 22.9985 5.25195 22.9985Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.00195 8.99854C6.65881 8.99854 8.00195 7.65539 8.00195 5.99854C8.00195 4.34168 6.65881 2.99854 5.00195 2.99854C3.3451 2.99854 2.00195 4.34168 2.00195 5.99854C2.00195 7.65539 3.3451 8.99854 5.00195 8.99854Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.002 8.99854C20.6588 8.99854 22.002 7.65539 22.002 5.99854C22.002 4.34168 20.6588 2.99854 19.002 2.99854C17.3451 2.99854 16.002 4.34168 16.002 5.99854C16.002 7.65539 17.3451 8.99854 19.002 8.99854Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.13086 15.9985C5.58086 14.2485 7.18086 12.9485 9.07086 12.9585L12.5009 12.9685C15.1209 12.9785 17.3509 11.2985 18.1709 8.9585" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="about__features-content"><h3 class="about__features-title">Responsibility</h3><p>Employees will always be my top prioty</p></div></div><div class="about__features-item d-flex align-items-start" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"><div class="about__features-icon purple-color"><span><svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M9.10159 14.5344C9.10159 14.1202 8.76581 13.7844 8.35159 13.7844H4.64392C3.89249 13.7844 3.7619 13.5515 3.76116 13.5498C3.75967 13.5466 3.67207 13.2926 4.16481 12.7241L13.246 2.40728C13.2461 2.4072 13.2461 2.40712 13.2462 2.40705C13.5405 2.07296 13.7834 1.89024 13.9556 1.80534C14.0536 1.757 14.1081 1.74921 14.1301 1.74876C14.1462 1.76358 14.1814 1.80495 14.2224 1.90432C14.2954 2.08082 14.357 2.37782 14.357 2.82342V11.4627C14.357 11.8769 14.6928 12.2127 15.107 12.2127H18.8147C19.5715 12.2127 19.7048 12.4482 19.706 12.4508C19.7069 12.4527 19.7955 12.7065 19.2971 13.2692L19.2956 13.2709L10.2126 23.5898C9.91817 23.924 9.67521 24.1068 9.50303 24.1917C9.40502 24.2401 9.35053 24.2479 9.32853 24.2483C9.31242 24.2335 9.27723 24.1921 9.23617 24.0927C9.16324 23.9162 9.10159 23.6192 9.10159 23.1736V14.5344ZM14.1417 1.74959C14.1417 1.74969 14.1404 1.74959 14.1378 1.74894C14.1405 1.74916 14.1418 1.74948 14.1417 1.74959ZM14.1242 1.7438C14.1218 1.74257 14.1206 1.74173 14.1207 1.74162C14.1207 1.74151 14.1219 1.74212 14.1242 1.7438ZM9.31688 24.2475C9.31692 24.2474 9.31826 24.2475 9.32079 24.2481C9.3181 24.2479 9.31683 24.2476 9.31688 24.2475ZM9.33442 24.2533C9.33685 24.2545 9.33796 24.2553 9.33791 24.2554C9.33785 24.2556 9.33664 24.2549 9.33442 24.2533Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="about__features-content"><h3 class="about__features-title">Flexibility</h3><p>The ability to switch is an important skill</p></div></div></div></div><div class="col-xxl-9 col-xl-9 col-lg-8"><div class="about__video-wrapper" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"><div class="about__video-counter d-sm-flex align-items-center"><div class="about__video-counter-item d-flex align-items-center"><h4><span>16</span></h4><p>Years <br> Experinces</p></div><div class="about__video-counter-item d-flex align-items-center"><h4><span>250</span></h4><p>Types of <br> Courses</p></div></div><div class="about__video-thumb"><img${ssrRenderAttr("src", _imports_4$2)} alt=""><div class="about__play"><a href="#" class="about__play-btn popup-video tp-pulse-border"><span class="video-play-bg"></span><img${ssrRenderAttr("src", _imports_5$1)} alt=""></a></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": "https://www.youtube.com/embed/z4dQmpf5PLM"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/abouts/CreativeAbout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CreativeAbout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const cta_bg = "" + __buildAssetsURL("cta-bg-1.DezOwwil.jpg");
const _sfc_main$3 = {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      cta_bg
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta__area pb-140" }, _attrs))}><div class="container"><div class="cta__inner-6 p-relative include-bg" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000" style="${ssrRenderStyle({ backgroundImage: `url(${$data.cta_bg})` })}"><div class="row align-items-center"><div class="col-xl-6 col-lg-7"><div class="cta__content-6" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000"><h3 class="cta__title-6">About Your Next Projects.</h3></div></div><div class="col-xl-6 col-lg-5"><div class="cta__btn-6 text-lg-end" data-sal="slide-down" data-sal-delay="190" data-sal-duration="1000">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/contact",
    class: "tp-btn-white-2 tp-link-btn-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get Started <span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" Get Started "),
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cta/CreativeCta.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CreativeCta = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal },
  props: {
    blog: {
      type: Object,
      default: {},
      required: true
    }
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_video_modal = resolveComponent("video-modal");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog__item-6 wow fadeInUp scene",
    "data-sal": "slide-up",
    "data-sal-delay": "130",
    "data-sal-duration": "1000"
  }, _attrs))}><div class="blog__thumb-6">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="layer"${ssrRenderAttr("src", $props.blog.img)} alt="blog__thumb"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "layer",
            src: $props.blog.img,
            alt: "blog__thumb"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="row"><div class="col-md-2 col-sm-6"><div class="blog__tag-6"><a href="#"><span>${$props.blog.icon ?? ""}</span> ${ssrInterpolate($props.blog.tag)}</a></div></div><div class="col-md-3 col-sm-6"><h3 class="blog__title-6">`);
  _push(ssrRenderComponent(_component_nuxt_link, { href: "/blog-details" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${$props.blog.title ?? ""}</span>`);
      } else {
        return [
          createVNode("span", {
            innerHTML: $props.blog.title
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div><div class="col-md-6 col-sm-6"><div class="blog__content-6"><p>${ssrInterpolate($props.blog.sm_text)}</p><div class="blog__meta-6"><span><a href="#"><i class="fa-regular fa-user"></i>${ssrInterpolate($props.blog.author_name)}</a></span><span><i class="fa-regular fa-clock"></i>${ssrInterpolate($props.blog.date)}</span></div></div></div><div class="col-md-1 col-sm-6"><div class="blog__play text-lg-end mt-25"><a href="#" class="blog__play-btn popup-video"><i class="fas fa-play"></i></a></div></div></div>`);
  _push(ssrRenderComponent(_component_video_modal, {
    ref: "video_modal",
    "video-url": `https://www.youtube.com/embed/${$props.blog.video_id}`
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/single-blog/CreativeSingleBlog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CreativeSingleBlog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  mixins: [blogData],
  components: { CreativeSingleBlog }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_creative_single_blog = resolveComponent("creative-single-blog");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog__area pt-45 pb-140" }, _attrs))}><div class="container"><div class="row align-items-end"><div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7"><div class="section__title-wrapper-6 mb-60"><h3 class="section__title-6"> New and Latest <br><span class="section__title-6-highlight"> insights. <svg width="201" height="11" viewBox="0 0 201 11" fill="none"><path class="wow" fill-rule="evenodd" clip-rule="evenodd" d="M9.05453 10.8839C6.20147 10.8982 3.21601 10.7537 1.01886 10.0285C0.864228 9.97744 0.711775 9.9189 0.581885 9.84837C0.517069 9.81318 0.434369 9.76251 0.354554 9.69171C0.281315 9.62675 0.155306 9.49652 0.0910472 9.29127C0.0147649 9.04755 0.05678 8.79832 0.178701 8.60172C0.281012 8.43673 0.415963 8.34474 0.491835 8.3C0.643502 8.21055 0.809844 8.16646 0.918957 8.14164C1.37074 8.03891 2.1664 7.9951 3.00131 7.96916C3.73866 7.94626 4.54731 7.93629 5.32252 7.92673C6.41386 7.91328 7.43888 7.90064 8.10528 7.85387C9.91746 7.72669 11.7311 7.59642 13.5455 7.4661C16.5831 7.24792 19.6228 7.02959 22.6612 6.82535C43.405 5.4309 64.1476 4.25838 84.9012 3.40104C73.7378 3.38875 62.5747 3.32145 51.4104 3.17052C51.416 3.1706 45.4792 3.12884 41.6005 3.07089C40.6265 3.05633 39.7745 3.04068 39.1697 3.02425C38.8685 3.01607 38.6225 3.00754 38.4517 2.99856C38.3692 2.99422 38.2904 2.98909 38.2282 2.98236C38.2053 2.97988 38.1474 2.97354 38.0855 2.95857L38.0844 2.95832C38.0711 2.95532 37.9518 2.92851 37.83 2.84812C37.7811 2.81585 37.5529 2.66179 37.4919 2.34084C37.4176 1.94937 37.6477 1.69174 37.7462 1.60578C37.8448 1.51977 37.941 1.48022 37.9717 1.46789C38.0145 1.4507 38.0506 1.44057 38.0712 1.43521C38.1129 1.42438 38.1486 1.41857 38.1675 1.41571C38.2082 1.40953 38.2494 1.40565 38.2822 1.40297C38.3513 1.39733 38.4421 1.39245 38.5506 1.38795C38.7702 1.37884 39.0963 1.36992 39.5405 1.36112C40.4307 1.34349 41.8145 1.32598 43.8129 1.30893C95.6756 0.866429 147.552 0.567935 199.42 0.727011C199.851 0.728333 200.199 1.07875 200.198 1.50969C200.197 1.94063 199.846 2.28891 199.415 2.28758C194.258 2.27177 189.1 2.26047 183.942 2.2534L183.92 3.66106L182.192 3.63353C181.25 3.61854 180.309 3.60364 179.368 3.58906C174.167 3.51003 168.967 3.45223 163.767 3.41078C163.222 3.408 162.677 3.4057 162.132 3.40394C115.603 3.25364 69.1944 5.26138 22.7659 8.38241C19.7301 8.58648 16.6978 8.80429 13.6633 9.02224C12.2771 9.12181 10.8905 9.22141 9.50289 9.31974C10.7075 9.30671 11.9031 9.26775 13.0333 9.23091L13.1891 9.22583C14.4995 9.18319 15.7267 9.14481 16.7461 9.15881C58.3184 9.72964 100.063 9.23542 141.577 7.09843C146.003 6.8706 150.426 6.56528 154.842 6.18681C156.349 6.05767 157.848 5.91563 159.336 5.72905C159.15 5.72103 158.962 5.71357 158.773 5.70663C157.597 5.66334 156.414 5.64093 155.518 5.62906C154.984 5.62199 154.531 5.61862 154.252 5.61655C154.079 5.61526 153.973 5.61447 153.956 5.6136C153.526 5.5908 153.196 5.22345 153.219 4.79311C153.241 4.36277 153.609 4.03241 154.039 4.05521C154.027 4.05456 154.147 4.05519 154.44 4.05734C154.709 4.05932 155.087 4.06264 155.539 4.06862C156.441 4.08058 157.638 4.10319 158.831 4.14711C160.019 4.19086 161.222 4.25633 162.13 4.35581C162.578 4.4049 162.987 4.46567 163.296 4.5455C163.442 4.58343 163.621 4.63898 163.777 4.72855C163.868 4.78076 164.318 5.05276 164.259 5.6086C164.218 5.99372 164.011 6.2781 163.764 6.46085C163.541 6.62524 163.29 6.70676 163.099 6.75371C162.9 6.80253 162.695 6.82981 162.53 6.84953C162.478 6.85577 162.431 6.86117 162.388 6.86611C162.279 6.87869 162.195 6.88834 162.117 6.9014C159.742 7.29996 157.348 7.53838 154.976 7.74169C150.542 8.12163 146.102 8.42818 141.657 8.65695C100.102 10.796 58.3231 11.2904 16.7247 10.7192C15.7485 10.7058 14.5597 10.7426 13.2399 10.7856L13.0778 10.7909C11.8097 10.8322 10.4348 10.877 9.05453 10.8839Z" fill="currentColor"></path></svg></span></h3></div></div><div class="col-xxl-8 col-xl-7 col-lg-7 col-md-5"><div class="blog__more-6 text-md-end mb-70">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "/blog-grid-2",
    class: "tp-btn-blue-2 tp-link-btn-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` See all <span${_scopeId}><i class="fa-regular fa-arrow-right"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" See all "),
          createVNode("span", null, [
            createVNode("i", { class: "fa-regular fa-arrow-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="row"><div class="col-xxl-12"><!--[-->`);
  ssrRenderList(_ctx.blogData.filter((item) => item.home_creative), (blog, i) => {
    _push(ssrRenderComponent(_component_creative_single_blog, {
      key: i,
      blog
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogs/CreativeBlogs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CreativeBlogs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-creative",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home Creative - Creative Agency & Portfolio Vue Nuxt 3 Template"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CreativeHero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeFeature, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeCta, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativePortfolio, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeTeam, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeBlogs, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeTestimonial, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeBrands, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CreativeCtaTwo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CreativeHero),
              createVNode(CreativeFeature),
              createVNode(CreativeAbout),
              createVNode(CreativeCta),
              createVNode(CreativePortfolio),
              createVNode(CreativeTeam),
              createVNode(CreativeBlogs),
              createVNode(CreativeTestimonial),
              createVNode(CreativeBrands),
              createVNode(CreativeCtaTwo)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-creative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-creative-DDk4RJwx.js.map
