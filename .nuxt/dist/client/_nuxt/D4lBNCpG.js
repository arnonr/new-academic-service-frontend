import{_ as r,o as s,c,b as e,G as d,w as n,x as o,D as a,e as g,q as l,E as b,p as h,H as f,I as u}from"./OmrnE3d5.js";const x={props:{item:{},masonry:{type:Boolean,default:!1}}},m=i=>(f("data-v-dc653b1b"),i=i(),u(),i),y={class:"blog__item-10 white-bg transition-3 mb-30 fix"},k={class:"blog__thumb-10 w-img fix w-img-news"},v=["src"],w={class:"blog__content-10"},I={class:"blog__content-10-top"},N={key:0,class:"blog__tag-10"},B={href:"#"},S={class:"blog__title-10"},V={class:"blog__content-10-bottom d-flex align-items-center justify-content-between"},C={class:"blog__meta-author-10 d-flex align-items-center"},q={class:"blog__meta-author-content-10"},D=m(()=>e("i",{class:"fa fa-arrow-right news-link-view"},null,-1)),E={class:"blog__meta-10 blog-meta-10-2"},G=m(()=>e("i",{class:"fa-regular fa-tag",style:{"margin-right":"0px",color:"#bdbdc6"}},null,-1));function j(i,z,t,H,T,A){const _=h;return t.item?(s(),c("div",{key:0,class:b(`blog__grid-item ${t.masonry?"blog__masonary":""} ${t.item.file?"":"no-img"}`)},[e("div",y,[e("div",k,[t.item.file?(s(),d(_,{key:0,to:t.item.link+t.item.id},{default:n(()=>[e("img",{src:t.item.file,alt:"blog img",class:"img-news"},null,8,v)]),_:1},8,["to"])):o("",!0)]),e("div",w,[e("div",I,[t.item.file?o("",!0):(s(),c("div",N,[e("a",B,a(t.item.type_name),1)])),e("h3",S,[g(_,{to:t.item.link+t.item.id},{default:n(()=>[l(a(t.item.title),1)]),_:1},8,["to"])])]),e("div",V,[e("div",C,[e("div",q,[t.item.file?(s(),d(_,{key:0,to:t.item.link+t.item.id,class:"text-color-primary text-uppercase"},{default:n(()=>[l(a(t.item.link=="equipment-and-rate/"?"รายละเอียด":"อ่านต่อ")+" ",1),D]),_:1},8,["to"])):o("",!0)])]),e("div",E,[e("span",null,[G,l(" "+a(t.item.type_name),1)])])])])])],2)):o("",!0)}const J=r(x,[["render",j],["__scopeId","data-v-dc653b1b"]]);export{J as N};