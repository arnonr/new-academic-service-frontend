import { C as CareerItems } from "./CareerItems-C2bRCDQQ.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const skill_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAhCAYAAADdy1suAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgBtZbBitNgEMf/M23qiojdW0GQCL5AnsA9iLgXz3rZdp+g7cWbtAXPkn0BbW8eFzx48dA3yCMYEKG3zUGkWvONM8ku7sI2/bJk/5C0+WbyZ/J1fp0QznX2ohe2g2AoRAO97OIa3X/yDFuU6rGEczOK5/YdbKefLx/1W51OoqajbaY7FOoxAHMi4+O+LZBVaqY+hhUVX1amlUfcCoIJblblNnWhT856OkDTIurbHodoXl0zztC8UhZggea1ZMcco9mqrStmvH+aprnIGM2YqynGBkkByP7n7/OcObJtkZKi+oYiJ9a/FH+Y20L7InK69w0twhlI+1Cuv/voPZF99r5ISB0MWWQgJQOZttgD92cNxIVvifTitfRbDKNvpKaVsDz8qrmBJCQykv9ghVrxgIM7SU/jtkAfX0lYmMpu+t4c4bGZSjWpmdv8VqQZEx/T4vE6mMhu/LsUdBRpwQF8JeKVS6iPtG9ul4X8+5c8e91a1raiBtLilatboUgLYt+q8w3HHlVrV6xnfPyJUqcY+pivDinNnRtXmGek8dXh3RJpNZ+reSSyG+nV8/Y831AkTi7nZnp9Yv37Q+O2QBc37CVTBYWH4rZP6V/RW4Kniv+Ke8m7vkBicc3NPrZKzRTNDlR9E6B201O6NBZPTGsb0+1MadSZ0ilqiLWhPZGmJWqIcxafKZ05/J2hjvE6mqYOlVM6I41bHmroCnmM1lQxfXr+g6qhW+Ta43VNTf8AXBnrdsf4kQAAAAAASUVORK5CYII=";
const skill_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJwSURBVHgBxZY/aFNBHMe/954ExAwliwW1BBqXgpLBf8UMVYztJAkKohRaJxcXKaiTtTgpii4dxMEECyJUdEzJEqEi6hIsdEpFS4VmEYV0Eex532t+4b0mL9GSvn7gknt3l/ve9/e7XxKFOmdwZMhV7qTpDqG7lNb1er6ITzk+uHw565yYdKA4EEf3iSulMv3OPizp729VGkfHHeU8Qwgo/eeUY8TGEBLapMxB93PWjqSDcOnZhW3g9um76I8lUK2t4kbhum+uSXAidROHe5O2/3D+Hj6vlhtze6O9uD/yyPaLlQJmyvmWgtFI1K5tRVNIuQkXs40m/feJzxznhsXKHLZCkyDDMFPO2T6dilsKpRMjtv968ZVdtxVa5pAbZgcuYI9xwhCPzV5quPUeSGC+MgPn7eGCQim0vKVrv2t4Xs+PhFbcbc5bOjGM6XNP7XwnsUBB8mZxtnFhRpPj9p0XhU2gwETqVuOQPAxv5ZcflaBt0bYs3i/PN3JIljZtxDAKD8yN5npSM+JBtC38jMmjFzplXgXmTgRErBOBglICRPLGcsh6XAlrbRz9kyCFsnV3GwWe8+VTDiKlwWdv6P9bkO4kdOLOeztZKhuHmfON0f1g30kbiSCaLg0/ICVAd+KCDtnky2CwL2XzxjVSElePXUMn3ITaf8c7cPHQZZsTCj35OO3LT7VWtRtzLrY7ZgTf2cZxumKLuBE7v2AO93LhBVZ+LfsE1bA6rhEiYf8e7oCghv6JEHEUVBlhoVFylFZTCAljLu9WsPL1IA6Y/vb+e1NaTxXw4bH9521ES0b0m+n2GOE4uokJo3FzxYjl+PgXoAzsLDPiYj4AAAAASUVORK5CYII=";
const skill_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBxVZNTxNRFD1vhhDGFPlwQ0uBBlNj4g6qW+sCN37EFWtNNMpOXbhTg/4A3KHRRJq4UJZG3bCBsESIGxdKIDZKayAUSicUSIbh3tfOhA60TcvwOMntvI/be949896bK+AgHItDiOdkcfgJ256k3wT+zoxxV5eD3ZeYaIwsAr/BMYW4hZZOILs0JdB18TYNvIcK7O5e0dHWNULNCNQgIkhOG+qwrkEtWlUToqHcRM/gUwTO9peM7WTSWJ39AnNhDjtrafhK2NgWIgt6xoK0iD5JNv96qC7SqpJa+RzSE2+lZX9OucQ9g89QDxqqOVhbJv5PvHP73ST1mdh1mane1EzzORihKMI3HqOxvaCII33m+9faCb3Ip367bd0ISDv/8EOJDyuwTXL7QngqdM5tW3kTHVfvFts5JMdfyqfRGS37/6qEelMAHQOFoM29/VJKxiqtnuXkedeXsuX3bC7OlY1X9qaJ3h91g3uxf5cGevsQfTBaMsdS8iZDPRky+Nw5wTbTv5CZ+Sazk3OUzWLiCcI3H8l3x8aK8DM5/qJ2QpnNm6GKPiwjW8uFyy5xe+wa/n0ecRfm4MhXG2fDwQ3aTLyDzYXZiv4171IvOJvgwL0D45yxN7uKhJvF81bt+sqn5mVmRvG4MMny9EesTH861F/19xDKP08nQWivQyE0CO0HVIFqVA2WNQx1SOjYSP2hIlVQJ47jxTBV368KlXd2aRKnQ0loWiv8rlG51LftO06pvwfTL90cmHRHgAAAAABJRU5ErkJggg==";
const skill_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARtSURBVHgBxVhraFxFFP7O3Ltp6ybrrsm63VTyABF8/NPqH5FqKvgArf2hVsVnCyKp4KOIUqiKoEKJyTYlUiqCWi1oLIrUiuIv/VHwj0X6Q9q6zcZoTW1Ko9n3TM/cfWQfc2/2bkP7sezee+acM9+cOXPOsAQPqAPhcGGw/xYS1EdS9cFCnKRYA6E6oSjOKr0KtIq6HwXkPNTcV9osA6WOEdFpKEgl1LRQ6ngRSCmIlN019xMNJjNuc9qehILqAyHERudFEAv4Qyh/lUCRDcCq60rPxQWoc9+vBNENyhGUdCU/UPm1+Nupcf7Z6jancBsoTmKHKhQ3wgMUWg8E1y4KQreXZF42UMOFSTwDP4Sy+3EtEbZDCG8yoTuaB1hGXetc7SAsHamd6c8wYBxuFKiDCNkBHFSKt9My7yh13momU8Hld9ZHrhaWpb/DgQC+UF/jsiUJcRok+GegNGo1+aPgzezuHniDcybyANDR1zxU9sk7cKMs4G1PQpw3W1nxiUbjKlZcDegkbhEU3QIE4kZCDhSeV5O4z0hI7cc1vLAxV+NAL6jnSfgCWWVSMbNPhgT2Mamr6gipjxGXAXzHjKlO2yobB6Ls+CmewD3JXSG4CvQ8zgXminqfi+jkEnFIfYRglZAM4i3AkPXa2I6ww6dZM4i2YbGPKJ90K2zMSyZ0PbocDiD1JZ6VChNGR/1rQf0vOA6XBflZqBPvADNHjcNcQx+053/HQ6pgtl9pZWBnP8RyIpeykDtmHqMAHqa/N2NQrMCPnD0DjQo271LopvZSxwSVB87+wili6mSE4wWJIbF6L/4QNjMDzjTqFP7nFc1i2ZCdNZPhHPq3mMf63t046ay9ZwyHedceMzlJnyxZXCh0dBxfjXJCtqMDQ/H3kdTv1c2Ij+Nb3pqXGg2KHKXMDC4Ymb/M0bEtDEdG8GvlvS47ogmMcDB2Nhqlp3glEm1DH5rMnwY58Eb3KPbWyprSNTaObSw9VCvTK8tMo23orWqKDiHBc73eqGs8Px15PMIjR2pleoXtREnmOJn/QSOZn6NZvGzSNxIKT2CumMP93GircXGilIJv6MjWRoevNUkrgE20B3m0SkhDZ70UuJdJVdenCakiWobMcnRqcodPVJKjPNQ9AteleZa82BiOlE+eU8tl3l+UtK6sdAHCPLfGLasncMLLZskazDXqEyXwSuU9XTuJB1SupFudSOC5nlH8sJRdS00hxuWANZ3bnT7C2RaitJBcfOa82aEXhhbQcpe6MoHXOOyf6+f0tHcu6dyp1B3e8vdiu/EmWoSvtsk3mc2c5EedQjflrpdOVskc5mL7InzAF6HuXTiXI9zNjTjllksyXWoT+njbAnfBJ3xfLNYkMGUXcBsf3/9MueQkskSSd3RdZBRn4RNt3XQiXKN4OzYtTCMra8pbkaOTnsEZPpUb9FUCbaDtq1d0DN9wlLZna3qcbsL8F8CrsV2L3fui4/Q2vJv/lK87+6BODTc3y0uChT04kJnAKJYB5wHNOX35xVUI/AAAAABJRU5ErkJggg==";
const company_icon_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAELSURBVHgB7ZU9TsNAEIXfW697gjjAigtkbxDT0pADhIKLIG5CRQ0FCInKN0k6pDSmQ4I4k1lH+ZXlH8UpIuVJ1o7Xb79Zr0azRAd6+oSbCTwjOwDEkUiIliqDQHCx76sET2+djw1c733yFt4fv6KsDFImuwq+h87FOZKI6IP0OhUehUiqYwFuCi3A2d31q65Y/o5BZ9IdyxBHUId7PHVwOONJjednE9Z6T1g0L9m40iBI81HvIcR/H2aMhrIUcTWere+s8651ruMdcCqyXavdyOajy5sQxM9TP7fGEUyE7OtUggNU2ehXyfL7q6Ifa7lluqRRT259Nf3q1WT+I68F7kkOwliWrDW4abIFvzdL4kfut30AAAAASUVORK5CYII=";
const company_icon_2 = "data:image/png;base64,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";
const company_icon_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgBtZbPTxNBFMffm92i/FBLUiGeXC/qzTXWxAQIA+rZGrwQD7ZXOAA3jRogxHiEPwClnsDESElMPAHLzYCx9eyB1cRAAtEFlIrdnXFmC3XT7pZa6ifp/pi38747r9+ZWYRDWKV6uImocYakE4HrokkrBBEywN3fUsvCSvKwXBgU2KBRyhUcFpcUKsNEjsnTC8uj/yS20X11nCMMQnWYjpPrOmNkzOKA6r2RJWtUQrO88tH4oSkihzhfLivWqIYWRf11OAKco8kYue0XK4ht3IgO8zJCHHgKOZsDpmQcUCxQbQ0Z6ATIACDXPEKihO9Mvxzuf7ZGdTn01QAZw3HURFACyXp3dBCFaDmhglj2eXjx55uzlG3VFY0GXrTOr8ShRmD2LWhqSF2VQkIQ7C9NeSFRktaF5XNQQwhR1bh7ceo3nLj7Ceo71twAYywBNUYlCJ3ehuPt66C0/Mo09G0aQZ3o2HaMEAhDhQgjWfOPT6akG0scqJ63lsp1VhQyIJxLoUI4QVOcUkQcSt6QcTdYQ/JTg/iFCGcW/AcIIjd9Wo+0igSh8nzJNG9jxo5cElM1sJPDYE68pekXEysNxaJ8Yr5mXDEm9iLhSHoQmNy9CM92L9DoNNL3va8Mv4TGo6YJCOD6kx9pXvoKn+VROBgMebHmNED/VpsUyscJH9enYhXbW0LHdij3cTcHTLkpQzdtI52LGP3bbfAhF/E+oSv1yjhUCH36XSOETPkGcznDFZOHPqt9VI6sGFH7ePRlT1qfjmlQhmtT9ylhdYsHFi8iaYw0m/v58lyZ6ZkQNwNBCUV5koDOHLHBVAhYwiRhBwklBG/JgRE7Ao1fHwDaEW8fk+dyXSVikuhMTxqg+s1TCh77FoPQTod7zwASxsOmZCHufdjOOl2wb9NqYOomZFsmYa95Vi5Do14hie8HT3T6zojYfYehCkTpLML50Erv62RxLPBTTppCAWUEEe5BhSLilHKyzlAmkfJd7vCwJFKUcBKTRhCrg4aA2t/k3CKAhsP4R7bHkkEiB/wBBCUtTOqRn6oAAAAASUVORK5CYII=";
const company_icon_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPpSURBVHgBjVZZUhNRFL2v0zEQEtMgispgnL7Np1WWJSzBDVi4A3eg7EB2AJ9+uQRiUX4b/xGjDCFM6ZCJkKSf99zOazuhA5yqVE/v3vPuucOLomuwmV1eJMt6Q0ovak1ZpSjb/+Tyr6C0KijPW39VXCtc5UddSRBTH/l2Mfw+Ho9Tr9cjz/OGTfLU0yuvi2v5GxFtZJedmGV9VEp/CL9PpVM0Ozc3sPb8/JyazSa5pxXqdDq+Q60+dzxvZam45o4kYpJs3FJftaKcZVl07/4MMSnt7e7J9/mFBUpOJCkK1WqVTo6OfUJNha6n3zJZ8RIRImGSDZCMjY3Rw7lZkQk4LB9S5fSUrFiMnj57SthEFECy8+dvmGzJRBZYQC5DMv9oISABpqenxbnHuTk+PKJRaLGMRkIOIRdnn+abECHxyAmcI5LhHVsxix48fCD3lUqFmo3mJRJEXNoviS02iqtmn5vPuKiCiPzqojt3pwciCSOVTlMy6efnoFQK3oMUckFe2IIE65BfgfZ9q43nyznbUz+w6AnrfxUgS3H7t5T21NRUUHXAODtH1OGNbm/98qVUesm2erSMkphkw+tIarUaxbggQHTKUgFwDCUymcwlm9tORiqRly/allIvREPWtF6rSzP2vB51O11JfrvdpouLi6gGFef3+7mLQprlBhFzvLH5OYeXYd2jkEgkuIcmWP9xlqslya/V63SPNzCq3GEDsGBZEDnoj3QqFSywWQ5U2i2+JrjchwskmZygqutKxIcHZekv3IsyfA9itAmusGXZhUi6/yoJDCCfywQNlthIiYlwE9g8kYtgvG5h1a1yCZcDAmng/n24wc3ARUW2uPTrLC/DtXnsF/kmi6qK6iEYlfb2jYGscaYmyXEc2tvZlfJun7eDHjM+8NzmnPbtCpan9TfcoeKGYfoGi2XIzsxIr6GH8DyR9vNa57KPQqPR8Der9U+sz0ctDg9IJDb75DH32uTAGifjyBVRRZU/jg9fFVqzXm/JQZXHYhMVjAxJiqtxeMgaoDKNZLWzwY0ip/0Bm+cJXvAbQOkVXJBsfCwflINIZufnRvYJMN4/n1rN5oAaJ8fHFPYtHvyo9KrJyRmXrJnk18FEZGYe1Njng9KPRq/2Fft/HnV79AmHldEas2/UJA9jLOE3JhyjpCE5rnLwwWcfARFOQhy/WIBnjJibNKOZIMAAiX+UB/8bYmGjdbfgvsvkvvAGxzmylygOyKjhkBvOtu0BEkSBymqxcyihtRa5uh69Z5KD8NrRf7dwMurov1uGZAh5JN7kZBgjiQy+88HoyZmlXvB+c2wgzYPRJVNFScPnRxEY/AOxSjd4LE4ZbQAAAABJRU5ErkJggg==";
const _sfc_main = {
  components: { CareerItems },
  data() {
    return {
      skill_data: [
        { icon: skill_1, title: "Figma", num: 90, text: "%" },
        { icon: skill_2, title: "XD", num: 66, text: "%" },
        { icon: skill_3, title: "Photoshop", num: 80, text: "%" },
        { icon: skill_4, title: "Sketch", num: 86, text: "%" }
      ],
      career_data: [
        {
          delay: "130",
          icon: company_icon_1,
          title: "Product designer",
          designation: "Microsoft Edge",
          year: "April 2020 - Present"
        },
        {
          delay: "150",
          icon: company_icon_2,
          title: "UX/UX designer",
          designation: "Amazon Inc",
          year: "April 2016 - March 2020"
        },
        {
          delay: "170",
          icon: company_icon_3,
          title: "Product designer",
          designation: "Google",
          year: "April 2012 - March 2016"
        },
        {
          delay: "190",
          icon: company_icon_4,
          title: "UI Designer",
          designation: "Dribbble",
          year: "April 2008 - March 2012"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_career_items = resolveComponent("career-items");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "skill__area pt-95 grey-bg-12 pb-125" }, _attrs))}><div class="container"><div class="row"><div class="col-xxl-5 col-xl-5 col-lg-5"><div class="skill__wrapper-9"><div class="section__title-wrapper-9 mb-55"><span class="section__title-pre-9">Experience</span><h3 class="section__title-9">Skills &amp; <br>Experience</h3></div><div class="skill__item-wrapper-9"><div class="row"><!--[-->`);
  ssrRenderList($data.skill_data, (item, i) => {
    _push(`<div class="col-xxl-6 col-md-6 col-sm-6 col-6"><div class="skill__item-9"><div class="skill__icon-9"><span><img${ssrRenderAttr("src", item.icon)} alt="icon"></span></div><div class="skill__content-9"><h4>${ssrInterpolate(item.title)} <span> (<span class="counter">${ssrInterpolate(item.num)}</span> ${ssrInterpolate(item.text)}) </span></h4></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div><div class="col-xxl-7 col-xl-7 col-lg-7">`);
  _push(ssrRenderComponent(_component_career_items, {
    style_2: "career__style-2",
    career_data: $data.career_data
  }, null, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skills/PersonalPortSkills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PersonalPortSkills = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PersonalPortSkills as P
};
//# sourceMappingURL=PersonalPortSkills-CnCRz4zr.js.map
