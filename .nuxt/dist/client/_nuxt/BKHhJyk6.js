import{_ as C,h as b,ae as g,o as r,c as f,b as e,e as l,w as t,l as a,y as i,q as u,x as _,E as k,F as m,af as w,p as y,r as A}from"./OmrnE3d5.js";import{u as B}from"./I6A_oj8C.js";import{u as h}from"./CGJk4CRR.js";import"./D-HlV6Uy.js";const L={components:{},data(){return{isOffCanvasOpen:!1}},methods:{openOffcanvas(){this.isOffCanvasOpen=!0},closeOffcanvas(){this.isOffCanvasOpen=!1},logout(){b(),g(h());const{logUserOut:o}=h();o(),this.isOffCanvasOpen=!1,B("ออกจากระบบเสร็จสิ้น","success"),window.location.href="/"}}},N={class:"offcanvas__wrapper"},T=e("div",{class:"offcanvas__shape"},null,-1),S={class:"offcanvas__close"},q=e("i",{class:"fa-regular fa-xmark"},null,-1),E=[q],V={class:"offcanvas__content"},M={class:"offcanvas__top mb-40 d-flex justify-content-between align-items-center"},j={class:"offcanvas__logo logo"},z=e("img",{src:w,alt:"logo",style:{width:"50%"}},null,-1),D={class:"mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none"},F={class:"mean-bar"},I={key:0},R=e("li",{class:"text-secondary"},"จัดการข้อมูล",-1),U=e("hr",null,null,-1),W=e("hr",null,null,-1),Y=e("hr",null,null,-1),G=e("hr",null,null,-1),H={key:1},J=e("li",{class:"text-secondary"}," จัดการข้อมูล ADMIN ",-1),K=e("hr",null,null,-1),P=e("hr",null,null,-1),Q=e("hr",null,null,-1),X=e("hr",null,null,-1),Z=e("hr",null,null,-1),$=e("hr",null,null,-1),x={class:"offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block"},ee={key:0},oe=e("li",{class:"text-secondary"},"จัดการข้อมูล",-1),se=e("hr",null,null,-1),ne=e("hr",null,null,-1),le=e("hr",null,null,-1),ae=e("hr",null,null,-1),ie={key:1},te=e("li",{class:"text-secondary"},"จัดการข้อมูล ADMIN",-1),ue=e("hr",null,null,-1),ce=e("hr",null,null,-1),de=e("hr",null,null,-1),re=e("hr",null,null,-1),fe=e("hr",null,null,-1);function _e(o,c,p,O,v,s){const n=y;return r(),f(m,null,[e("div",{class:k(`offcanvas__area offcanvas__area-1 ${v.isOffCanvasOpen?"offcanvas-opened":""}`)},[e("div",N,[T,e("div",S,[e("button",{onClick:c[0]||(c[0]=(...d)=>s.closeOffcanvas&&s.closeOffcanvas(...d)),class:"offcanvas__close-btn offcanvas-close-btn"},E)]),e("div",V,[e("div",M,[e("div",j,[l(n,{href:"/"},{default:t(()=>[z]),_:1})])]),e("div",D,[e("div",F,[e("nav",null,[("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==1||("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==2?(r(),f("ul",I,[R,U,e("li",null,[l(n,{to:"/admin/department",onClick:s.closeOffcanvas},{default:t(()=>[u("- ข้อมูลหน่วยงาน")]),_:1},8,["onClick"])]),W,e("li",null,[l(n,{to:"/admin/serve",onClick:s.closeOffcanvas},{default:t(()=>[u("- ข้อมูลงานบริการวิชาการ")]),_:1},8,["onClick"])]),Y,e("li",null,[l(n,{to:"/admin/news",onClick:s.closeOffcanvas},{default:t(()=>[u("- ข้อมูลข่าว")]),_:1},8,["onClick"])]),G])):_("",!0),("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==1?(r(),f("ul",H,[J,K,e("li",null,[l(n,{to:"/admin/banner",onClick:s.closeOffcanvas},{default:t(()=>[u("- Banner")]),_:1},8,["onClick"])]),P,e("li",null,[l(n,{href:"/admin/news-type",onClick:s.closeOffcanvas},{default:t(()=>[u("- ประเภทข่าว")]),_:1},8,["onClick"])]),Q,e("li",null,[l(n,{href:"/admin/contact-us",onClick:s.closeOffcanvas},{default:t(()=>[u("- ติดต่อสอบถาม")]),_:1},8,["onClick"])]),X,e("li",null,[l(n,{to:"/admin/equipment",onClick:s.closeOffcanvas},{default:t(()=>[u("- ผู้ใช้งาน")]),_:1},8,["onClick"])])])):_("",!0)]),e("div",null,[Z,e("a",{onClick:c[1]||(c[1]=(...d)=>s.logout&&s.logout(...d))},"- ออกจากระบบ"),$])])]),e("div",x,[e("nav",null,[("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==1||("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==2?(r(),f("ul",ee,[oe,se,e("li",null,[l(n,{to:"/admin/department",onClick:s.closeOffcanvas},{default:t(()=>[u("- ข้อมูลหน่วยงาน")]),_:1},8,["onClick"])]),ne,e("li",null,[l(n,{to:"/admin/serve",onClick:s.closeOffcanvas},{default:t(()=>[u("- ข้อมูลงานบริการวิชาการ")]),_:1},8,["onClick"])]),le,e("li",null,[l(n,{to:"/admin/news",onClick:s.closeOffcanvas},{default:t(()=>[u("- ข้อมูลข่าว")]),_:1},8,["onClick"])]),ae])):_("",!0),("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==1?(r(),f("ul",ie,[te,ue,e("li",null,[l(n,{to:"/admin/banner",onClick:s.closeOffcanvas},{default:t(()=>[u("- Banner")]),_:1},8,["onClick"])]),ce,e("li",null,[l(n,{href:"/admin/news-type",onClick:s.closeOffcanvas},{default:t(()=>[u("- ประเภทข่าว")]),_:1},8,["onClick"])]),de,e("li",null,[l(n,{href:"/admin/contact-us",onClick:s.closeOffcanvas},{default:t(()=>[u("- ติดต่อสอบถาม")]),_:1},8,["onClick"])]),re,e("li",null,[l(n,{to:"/admin/equipment",onClick:s.closeOffcanvas},{default:t(()=>[u("- ผู้ใช้งาน")]),_:1},8,["onClick"])])])):_("",!0)]),e("div",null,[e("a",{onClick:c[2]||(c[2]=(...d)=>s.logout&&s.logout(...d)),style:{"font-weight":"700","font-size":"20px",color:"var(--tp-common-black)"}},"- ออกจากระบบ"),fe])])])])],2),e("div",{onClick:c[3]||(c[3]=(...d)=>s.closeOffcanvas&&s.closeOffcanvas(...d)),class:k(`body-overlay ${v.isOffCanvasOpen?"opened":""}`)},null,2)],64)}const ve=C(L,[["render",_e]]),ke={components:{OffCanvasAdminCustom:ve},methods:{handleAdminOpenSidebar(){this.$refs.off_canvas.openOffcanvas()}},mounted(){const o=document.querySelector(".scroll-top");o&&(document.addEventListener("scroll",()=>{window.scrollY>200?o.style.display="block":o.style.display="none"}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}},he=e("div",{class:"back-to-top-wrapper scroll-top"},[e("button",{id:"back_to_top",type:"button",class:"back-to-top-btn"},[e("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 6L6 1L1 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})])])],-1),Ce={class:"admin-wrapper"},me=e("i",{class:"fa fa-list"},null,-1),pe=[me];function Oe(o,c,p,O,v,s){const n=A("off-canvas-admin-custom");return r(),f(m,null,[he,e("div",Ce,[("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==1||("useCookie"in o?o.useCookie:a(i))("user").value&&("useCookie"in o?o.useCookie:a(i))("user").value.group_id==2?(r(),f("button",{key:0,id:"back_to_top",type:"button",class:"admin-btn",onClick:c[0]||(c[0]=(...d)=>s.handleAdminOpenSidebar&&s.handleAdminOpenSidebar(...d))},pe)):_("",!0),l(n,{ref:"off_canvas"},null,512)])],64)}const Ae=C(ke,[["render",Oe]]);export{Ae as default};