import{_ as r,o as s,c as n,b as t,e as i,w as _,F as m,d,E as l,q as h,D as u,p as f}from"./OmrnE3d5.js";const p={props:{item:{},team_p:{type:Boolean,default:!1}}},g={class:"team__thumb w-img fix transition-3"},v=t("div",{class:"tp-thumb-overlay wow"},null,-1),x=["src"],k={class:"team__action"},w=t("li",null,[t("a",{href:"mailto:team@harry.com"},[t("i",{class:"far fa-envelope"})])],-1),y=t("a",{href:"#"},[t("i",{class:"far fa-share-alt"})],-1),b={class:"team__social"},B=["href","target"],C={class:"team__content"},F={class:"team__title"},N=t("span",{class:"team__designation"},"Founder-CO",-1);function S(V,D,e,E,T,q){const o=f;return s(),n("div",{class:l(`team__item ${e.team_p?"mb-55":""}`)},[t("div",g,[v,i(o,{href:"/team-details"},{default:_(()=>[t("img",{src:e.item.img,alt:""},null,8,x)]),_:1}),t("div",k,[t("ul",null,[w,t("li",null,[y,t("div",b,[t("ul",null,[(s(!0),n(m,null,d(e.item.social_links,(a,c)=>(s(),n("li",{key:c},[t("a",{href:a.link,target:a.target},[t("i",{class:l(a.icon)},null,2)],8,B)]))),128))])])])])])]),t("div",C,[t("h3",F,[i(o,{href:"/team-details"},{default:_(()=>[h(u(e.item.name),1)]),_:1})]),N])],2)}const L=r(p,[["render",S]]);export{L as S};