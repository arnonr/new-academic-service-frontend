import{_ as l,o as e,c as s,b as o,F as h,d as v,e as t,w as f,q as S,D as w,a as $,p as C,r,u as k}from"./OmrnE3d5.js";import D from"./CxfpdtQ1.js";import{c as P,a as E,b as T,d as B,S as b}from"./DwyxFGac.js";import{T as V}from"./SOpPrfBa.js";import{S as F,p as x}from"./CNTPuJ30.js";import{S as G}from"./_aMJ7E3T.js";import L from"./BKHhJyk6.js";import N from"./BHh0UZVu.js";import"./DiqBaI2Q.js";import"./B8mv32cn.js";import"./is6aRU74.js";import"./BQsWh4nP.js";import"./CW57vPoJ.js";import"./DwwnFRzY.js";import"./DR6FnRwu.js";import"./DeDvjckw.js";import"./DDx3tMbt.js";import"./DPfdXt1F.js";import"./DxzZJF1W.js";import"./BFgDA0qX.js";import"./CFABdoD6.js";import"./2AyXStO6.js";import"./DR37Xn3y.js";import"./I6A_oj8C.js";import"./CGJk4CRR.js";import"./D-HlV6Uy.js";import"./BaKbGmUB.js";const M={data(){return{products_category:[{img:P,title:"Call Phone &Tablets"},{img:E,title:"Game & Video"},{img:T,title:"Sport Watches"},{img:B,title:"Computers & Laptop"}]}}},H={class:"product__category pt-10 pb-100"},O={class:"container"},q=$('<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Category Grid</h3></div></div></div>',1),A={class:"row"},W={class:"product__category-item mb-20 text-center swiper-slide"},j={class:"product__category-thumb w-img"},z=["src"],I={class:"product__category-content"},J={class:"product__category-title"};function K(a,_,d,m,p,u){const c=C;return e(),s("section",H,[o("div",O,[q,o("div",A,[(e(!0),s(h,null,v(p.products_category,(n,i)=>(e(),s("div",{key:i,class:"col-xl-3 col-lg-3 col-md-6 col-sm-6"},[o("div",W,[o("div",j,[t(c,{href:"/shop"},{default:f(()=>[o("img",{src:n.img,alt:""},null,8,z)]),_:2},1024)]),o("div",I,[o("h3",J,[t(c,{href:"/shop"},{default:f(()=>[S(w(n.title),1)]),_:2},1024)])])])]))),128))])])])}const Q=l(M,[["render",K]]),R={components:{SingleProduct:F},mixins:[x]},U={class:"product__popular-area pt-110 pb-20"},X={class:"container"},Y=$('<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Product Grid</h3></div></div></div>',1),Z={class:"row"};function tt(a,_,d,m,p,u){const c=r("single-product");return e(),s("section",U,[o("div",X,[Y,o("div",Z,[(e(!0),s(h,null,v(a.productData.slice(0,8),(n,i)=>(e(),s("div",{key:i,class:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},[t(c,{item:n},null,8,["item"])]))),128))])])])}const ot=l(R,[["render",tt]]),et={components:{SingleListProduct:G},mixins:[x]},st={class:"product__popular-area pt-110 pb-90"},ct={class:"container"},nt=$('<div class="row"><div class="col-xxl-12"><div class="tp-section-wrapper-3 mb-60 text-center"><span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span><h3 class="tp-section-title-3">Shop Product List</h3></div></div></div>',1),rt={class:"row"};function it(a,_,d,m,p,u){const c=r("single-list-product");return e(),s("section",st,[o("div",ct,[nt,o("div",rt,[(e(!0),s(h,null,v(a.productData.slice(0,5),(n,i)=>(e(),s("div",{key:i,class:"col-lg-12 col-md-6"},[t(c,{item:n},null,8,["item"])]))),128))])])])}const at=l(et,[["render",it]]),pt={components:{CommonBreadcrumb:V,ShopCategory:b,ElShopCategoryGrid:Q,ElShopProductGrid:ot,ElShopProductList:at}},lt=o("div",{class:"tp-separator"},null,-1);function _t(a,_,d,m,p,u){const c=r("common-breadcrumb"),n=b,i=r("el-shop-category-grid"),g=r("el-shop-product-grid"),y=r("el-shop-product-list");return e(),s(h,null,[t(c,{title:"Have a look to our shop styles",subtitle:"Elements"}),t(n,{el_style:!0}),t(i),lt,t(g),t(y)],64)}const dt=l(pt,[["render",_t]]),mt={components:{HeaderOne:D,ElShopMain:dt,Footer:N,BackToTop:L},setup(){k({title:"Element Shop - Creative Agency & Portfolio Vue Nuxt 3 Template"})}};function ut(a,_,d,m,p,u){const c=r("header-one"),n=r("el-shop-main"),i=r("Footer"),g=r("back-to-top");return e(),s("div",null,[t(c,{top_bar:!1,commonOffcanvas:!0}),t(n),t(i),t(g)])}const Wt=l(mt,[["render",ut]]);export{Wt as default};
