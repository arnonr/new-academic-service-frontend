import{_ as t,c as o,b as e,E as g,o as i}from"./OmrnE3d5.js";const d={data(){return{open:!1}},methods:{handleToggle(){this.open=!this.open}}},r=e("li",null,"Spanish",-1),_=e("li",null,"English",-1),c=e("li",null,"Canada",-1),p=[r,_,c];function h(u,l,f,m,s,n){return i(),o("span",null,[e("span",{onClick:l[0]||(l[0]=(...a)=>n.handleToggle&&n.handleToggle(...a)),class:"header__lang-selected-lang tp-lang-toggle",id:"tp-header-lang-toggle"},"English "),e("ul",{class:g(`header__lang-list tp-lang-list ${s.open?"tp-lang-list-open":""}`)},p,2)])}const k=t(d,[["render",h]]);export{k as default};