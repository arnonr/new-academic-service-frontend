import{f as V,g as y,h as k,i as _,j as E,u as q,c as C,b as t,e as d,w as m,k as h,v as p,l as s,F as R,m as U,p as N,r as B,o as F,q as T,C as j}from"./OmrnE3d5.js";import{_ as z}from"./B-r68-ay.js";import{u as M}from"./I6A_oj8C.js";import{b as D}from"./BKZYPkvF.js";import{f}from"./C0vxPmJo.js";const H={class:"breadcrumb__area include-bg pb-40 pt-30 grey-bg-4"},O={class:"container"},S={class:"row"},$={class:"col-xxl-12"},L={class:"breadcrumb__content p-relative z-index-1"},A={class:"breadcrumb__list"},G=t("span",null," จัดการข้อมูล ",-1),I=t("span",{class:"dvdr"},[t("i",{class:"fa-solid fa-circle-small"})],-1),J=t("span",{class:"dvdr"},[t("i",{class:"fa-solid fa-circle-small"})],-1),K=t("span",null," เพิ่มข้อมูล ",-1),P={class:"portfolio__area pt-40 pb-40"},Q={class:"container"},W={class:"row"},X=t("div",{class:"col-12 mb-20"},[t("h4",null,"แบบฟอร์มเพิ่มข้อมูลหน่วยงาน")],-1),Y={class:"col-12"},Z={class:""},tt={class:""},et={class:"form-group row mt-10"},lt=t("label",{for:"",class:"label label-required"},"ลำดับ : ",-1),st={class:"form-group row mt-10"},ot=t("label",{for:"",class:"label label-required"},"ชื่อหน่วยงาน TH : ",-1),at={class:"form-group row mt-10"},nt=t("label",{for:"",class:"label label-required"},"ชื่อหน่วยงาน EN : ",-1),it={class:"form-group row mt-10"},ct=t("label",{for:"",class:"label label-required"},"รูปภาพปก : ",-1),dt={class:"form-group row mt-10"},rt=t("label",{for:"",class:"label label-required"},"รายละเอียดหน่วยงาน : ",-1),ut=t("div",{id:"detail-th"},null,-1),_t={class:"form-group row mt-10"},mt=t("label",{for:"",class:"label label-required"},"ข้อมูลติดต่อ : ",-1),ht=t("div",{id:"contact-th"},null,-1),pt={class:"form-group row mt-10"},ft=t("label",{for:"",class:"label label-required"},"สถานะ : ",-1),yt={__name:"add",setup(vt){V.extend(y);const v=U(),{apiBase:b}=v.public,g=k(),e=_({name_th:null,name_en:null,detail_th:"",contact_th:"",level:"",is_publish:{id:1,value:1,name_th:"publish",name_en:"publish",color:"success"}}),u=_(null),x=_({publishes:D.data().publishes});(Math.random()+1).toString(36).substring(7);let n={};n.detail_th=f.data().froala_config(),n.detail_th.events={keyup:function(o){e.value.detail_th=this.html.get()},click:function(o){e.value.detail_th=this.html.get()},"commands.after":function(o,l,i){e.value.detail_th=this.html.get()},"paste.after":function(o){e.value.detail_th=this.html.get()},initialized:function(){this.html.insert(e.value.detail_th)}},n.contact_th=f.data().froala_config(),n.contact_th.events={keyup:function(o){e.value.contact_th=this.html.get()},click:function(o){e.value.contact_th=this.html.get()},"commands.after":function(o,l,i){e.value.contact_th=this.html.get()},"paste.after":function(o){e.value.contact_th=this.html.get()},initialized:function(){this.html.insert(e.value.contact_th)}};const w=async()=>{let o={text_success:"เพิ่มรายการเสร็จสิ้น",method:"post",url:b+"/department/"},l={...e.value,department_file:u.value.files!=null?u.value.files[0]:null,is_publish:e.value.is_publish.value};var i=new FormData;for(var r in l)i.append(r,l[r]);await $fetch(o.url,{method:o.method,body:i}).then(c=>{if(c.msg=="success")M(o.text_success,"success"),g.push({path:"/admin/department/"});else throw new Error("ERROR")}).catch(c=>c.data)};return E(()=>{}),q({title:"เพิ่มหน่วยงาน"}),(o,l)=>{const i=N,r=B("froala"),c=z;return F(),C(R,null,[t("section",H,[t("div",O,[t("div",S,[t("div",$,[t("div",L,[t("div",A,[G,I,t("span",null,[d(i,{href:"/admin/department"},{default:m(()=>[T(" รายการหน่วยงาน ")]),_:1})]),J,K])])])])])]),t("section",P,[t("div",Q,[t("div",W,[X,t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[lt,t("div",null,[h(t("input",{type:"number",class:"form-control form-control-plaintext","onUpdate:modelValue":l[0]||(l[0]=a=>s(e).level=a)},null,512),[[p,s(e).level]])])]),t("div",st,[ot,t("div",null,[h(t("input",{type:"text",class:"form-control form-control-plaintext","onUpdate:modelValue":l[1]||(l[1]=a=>s(e).name_th=a)},null,512),[[p,s(e).name_th]])])]),t("div",at,[nt,t("div",null,[h(t("input",{type:"text",class:"form-control form-control-plaintext","onUpdate:modelValue":l[2]||(l[2]=a=>s(e).name_en=a)},null,512),[[p,s(e).name_en]])])]),t("div",it,[ct,t("div",null,[t("input",{ref_key:"file",ref:u,class:"form-control",type:"file",id:"formFile"},null,512)])]),t("div",dt,[rt,t("div",null,[d(c,null,{default:m(()=>[d(r,{tag:"textarea",config:s(n).detail_th,modelValue:s(e).detail_th,"onUpdate:modelValue":l[3]||(l[3]=a=>s(e).detail_th=a)},null,8,["config","modelValue"]),ut]),_:1})])]),t("div",_t,[mt,t("div",null,[d(c,null,{default:m(()=>[d(r,{tag:"textarea",config:s(n).contact_th,modelValue:s(e).contact_th,"onUpdate:modelValue":l[4]||(l[4]=a=>s(e).contact_th=a)},null,8,["config","modelValue"]),ht]),_:1})])]),t("div",pt,[ft,t("div",null,[d(s(j),{label:"name_th",placeholder:"การเผยแพร่",options:s(x).publishes,id:"slt-is_publish",modelValue:s(e).is_publish,"onUpdate:modelValue":l[5]||(l[5]=a=>s(e).is_publish=a),class:"v-select-no-border",clearable:!0},null,8,["options","modelValue"])])]),t("div",{class:"col-md-12 mt-20"},[t("div",{class:"contact__btn-2 text-center"},[t("button",{class:"btn btn-primary",onClick:w}," บันทึก ")])])])])])])])])],64)}}};export{yt as default};