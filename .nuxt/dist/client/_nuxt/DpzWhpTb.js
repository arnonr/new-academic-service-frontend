import{f as $,g as E,i as n,z as N,A as D,j as T,u as V,c as l,b as e,k as I,v as R,l as a,q as S,x as _,F as C,d as z,e as k,B as j,a as A,m as F,y as i,o as c,D as p,E as H,w as L,p as M}from"./OmrnE3d5.js";import{u as O}from"./I6A_oj8C.js";import{b as U,S as Y}from"./BKZYPkvF.js";const q=A('<section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"><div class="container"><div class="row"><div class="col-xxl-12"><div class="breadcrumb__content p-relative z-index-1"><div class="breadcrumb__list"><span> จัดการข้อมูล </span><span class="dvdr"><i class="fa-solid fa-circle-small"></i></span><span> รายการหน่วยงาน </span></div></div></div></div></div></section>',1),G={class:"portfolio__area pt-40"},J={class:"container"},K={class:"mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey"},Q=e("h4",{class:"section-bg-primary mb-20"},[e("i",{class:"fa-solid fa-search"}),e("span",{class:"ml-10"},"ค้นหา")],-1),W={class:"col-12 col-lg-12 mb-20"},X=e("div",null,[e("button",{class:"btn btn-success"},"ค้นหา")],-1),Z={class:"portfolio__area pb-20"},ee={class:"container"},te={class:"mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey"},se=e("h4",{class:"section-bg-primary mb-20"},[e("i",{class:"fa-regular fa-list"}),e("span",{class:"ml-10"},"รายการหน่วยงาน")],-1),ae={class:"mb-20"},oe=e("i",{class:"fa-regular fa-plus"},null,-1),ne={class:"row gx-2 grid"},le={class:"col-12"},ie={class:"table-responsive"},ce={class:"table table-bordered table-striped table-admin"},re=e("thead",null,[e("tr",null,[e("th",{class:"text-center"},"ชื่อ (TH)"),e("th",{class:"text-center"},"ชื่อ (EN)"),e("th",{class:"text-center"},"ลำดับ"),e("th",{class:"text-center"},"สถานะ"),e("th",{class:"text-center"},"จัดการ")])],-1),de={key:0},ue={cla:"",ss:"text-center"},_e={class:"text-center"},pe={class:"text-center"},he={class:"text-center"},me={class:"text-center"},be=e("i",{class:"fa-regular fa-edit"},null,-1),ve=["onClick"],ge=e("i",{class:"fa-regular fa-trash"},null,-1),fe=[ge],Ce={class:"col-xxl-12"},ke={class:"tp-pagination mt-30"},$e={__name:"index",setup(xe){$.extend(E);const x=F(),{apiBase:v}=x.public,h=n([]),y=n(20),r=n(1),d=n(1),g=n(0),u=n({}),f=n({perPage:[{title:"20",value:20},{title:"40",value:40},{title:"60",value:60}],publishes:U.data().publishes}),m=async()=>{let t={...u.value,perPage:y.value,currentPage:r.value};i("user").value&&i("user").value.group_id==2&&(t.id=i("user").value.department_id);let s=await $fetch(`${v}/department`,{params:t}).catch(b=>b.data);h.value=s.data,d.value=s.totalPage,g.value=s.totalData};N([r,u],()=>{m()},{deep:!0}),D(()=>{r.value>d.value&&(r.value=d.value)}),T(()=>{m()});const w=async t=>{Y.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Cancle it!"}).then(s=>{s.isConfirmed&&P(t)})},P=async t=>{await $fetch(`${v}/department/${t}`,{method:"delete"}).then(s=>{if(s.msg=="success")O("ลบรายการเสร็จสิ้น","success"),m(),window.scrollTo({top:0,behavior:"smooth"});else throw new Error("ERROR")}).catch(s=>s.data)};return V({title:"รายการหน่วยงาน"}),(t,s)=>{const b=M;return c(),l(C,null,[q,e("section",G,[e("div",J,[e("div",K,[Q,e("div",W,[I(e("input",{class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>a(u).name_th=o),name:"title",type:"text",placeholder:"ชื่อหน่วยงาน"},null,512),[[R,a(u).name_th]])]),X])])]),e("section",Z,[e("div",ee,[e("div",te,[se,e("div",ae,[("useCookie"in t?t.useCookie:a(i))("user").value&&("useCookie"in t?t.useCookie:a(i))("user").value.group_id==1?(c(),l("button",{key:0,type:"button",class:"btn btn-primary",onClick:s[1]||(s[1]=()=>{t.$router.push({path:"/admin/department/add"})})},[oe,S(" เพิ่มข้อมูล ")])):_("",!0)]),e("div",ne,[e("div",le,[e("div",ie,[e("table",ce,[re,a(h).length!=0?(c(),l("tbody",de,[(c(!0),l(C,null,z(a(h),(o,B)=>(c(),l("tr",{key:B},[e("td",ue,p(o.name_th),1),e("td",_e,p(o.name_en),1),e("td",pe,p(o.level),1),e("th",he,[o.is_publish!=null?(c(),l("span",{key:0,class:H("badge rounded-pill bg-"+a(f).publishes[o.is_publish].color)},p(a(f).publishes[o.is_publish].name_th),3)):_("",!0)]),e("td",me,[k(b,{to:{name:"admin-department-edit-id",params:{id:o.id}},class:"btn btn-warning text-uppercase ml-5"},{default:L(()=>[be]),_:2},1032,["to"]),("useCookie"in t?t.useCookie:a(i))("user").value&&("useCookie"in t?t.useCookie:a(i))("user").value.group_id==1?(c(),l("button",{key:0,class:"btn btn-danger ml-5",onClick:ye=>w(o.id)},fe,8,ve)):_("",!0)])]))),128))])):_("",!0)])])])]),e("div",Ce,[e("div",ke,[k(j,{totalPage:a(d),currentPage:a(r),totalItems:a(g),"onUpdate:currentPage":s[2]||(s[2]=o=>r.value=o)},null,8,["totalPage","currentPage","totalItems"])])])])])])],64)}}};export{$e as default};