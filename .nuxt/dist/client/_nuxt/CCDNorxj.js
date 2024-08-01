import{_ as l,r as _,o as d,c as p,b as t,e as n,Z as f,w as r,q as o,a as v,p as C}from"./OmrnE3d5.js";import{N as w}from"./8Iiu1pld.js";const x={components:{NiceSelect:w},methods:{changeHandler(c){console.log(c)},submit(){console.log("submit")}}},g=t("div",{class:"contact__input-3 contact__input-2"},[t("input",{name:"name",type:"text",placeholder:"Full Name *"})],-1),k=t("div",{class:"contact__input-3 contact__input-2"},[t("input",{name:"email",type:"email",placeholder:"Your Email *"})],-1),b={class:"contact__input-3 contact__input-2"},y=t("div",{class:"contact__input-3 contact__input-2"},[t("textarea",{name:"message",placeholder:"Enter Message here..."})],-1),T=t("div",{class:"contact__btn-3 mt-10"},[t("button",{type:"submit",class:"tp-btn"},"Send Message")],-1);function $(c,i,h,u,m,s){const e=_("nice-select");return d(),p("form",{id:"contact-form",onClick:i[0]||(i[0]=f((...a)=>s.submit&&s.submit(...a),["prevent"]))},[g,k,t("div",b,[n(e,{options:[{value:"Choose Your Topic",text:"Choose Your Topic"},{value:"Topic one",text:"Topic one"},{value:"Topic two",text:"Topic two"},{value:"Topic three",text:"Topic three"},{value:"Topic four",text:"Topic four"}],"default-current":0,name:"Choose Your Topic",onOnChange:s.changeHandler},null,8,["onOnChange"])]),y,T])}const M=l(x,[["render",$]]),N={components:{HelpCenterForm:M}},j={class:"contact__area grey-bg-4 pb-120 pt-110"},L={class:"container"},S=t("div",{class:"row justify-content-center"},[t("div",{class:"col-xl-7 col-lg-8"},[t("div",{class:"tp-section-wrapper-2 text-center mb-70"},[t("h3",{class:"tp-section-title-2"},"Can’t find what you’re looking for?")])])],-1),V={class:"row"},B={class:"col-xl-4 col-lg-4"},H={class:"contact__wrapper-2"},Y=t("div",{class:"contact__content-2"},[t("h3",{class:"contact-title"},"Send Us a Mail"),t("p",null,"Do you have a query about your order, or need a hand with getting your products set up? If so, please fill in the form below.")],-1),Z={class:"contact__info-box"},q=t("h3",{class:"contact__info-box-title"},"Reach Out",-1),E=t("p",null,[o("Any confusion about your order? We "),t("br"),o(" are here to help 24/7")],-1),F={class:"contact__info-item-wrapper d-flex flex-wrap align-items-center"},O={class:"contact__info-item"},A=t("div",{class:"contact__info-icon"},[t("span",null,[t("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M22.415 20.2781L22.922 24.3859C23.052 25.4648 21.895 26.2187 20.9721 25.6598L15.5253 22.4229C14.9274 22.4229 14.3424 22.384 13.7704 22.306C14.7324 21.175 15.3043 19.7451 15.3043 18.1981C15.3043 14.5063 12.1065 11.5165 8.15468 11.5165C6.64675 11.5165 5.25583 11.9455 4.09888 12.6994C4.05989 12.3745 4.04688 12.0495 4.04688 11.7115C4.04688 5.79676 9.18163 1 15.5253 1C21.869 1 27.0038 5.79676 27.0038 11.7115C27.0038 15.2213 25.1969 18.3282 22.415 20.2781Z",stroke:"#03041C","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M15.2993 18.1982C15.2993 19.7451 14.7273 21.1751 13.7654 22.3061C12.4785 23.866 10.4375 24.8669 8.14966 24.8669L4.75682 26.8818C4.18485 27.2328 3.45688 26.7518 3.53487 26.0889L3.85986 23.528C2.11794 22.3191 1 20.3821 1 18.1982C1 15.9103 2.22195 13.8955 4.09386 12.6995C5.2508 11.9455 6.64173 11.5166 8.14966 11.5166C12.1015 11.5166 15.2993 14.5064 15.2993 18.1982Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])],-1),R={class:"contact__info-content"},D=v('<div class="contact__info-item"><div class="contact__info-icon"><span><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 23.1H7.5C3.6 23.1 1 21.15 1 16.6V7.5C1 2.95 3.6 1 7.5 1H20.5C24.4 1 27 2.95 27 7.5V16.6C27 21.15 24.4 23.1 20.5 23.1Z" stroke="#03041C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 8.15039L16.431 11.4004C15.092 12.4664 12.895 12.4664 11.556 11.4004L7.5 8.15039" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div><div class="contact__info-content has-fw-400"><p><a href="mailto:support@harry.com">support@harry.com</a></p></div></div>',1),I={class:"contact__info-box-refund"},P={class:"col-xl-8 col-lg-8"},Q={class:"contact__form-3 ml-70"},U=t("p",{class:"ajax-response"},null,-1);function W(c,i,h,u,m,s){const e=C,a=_("help-center-form");return d(),p("section",j,[t("div",L,[S,t("div",V,[t("div",B,[t("div",H,[Y,t("div",Z,[q,E,t("div",F,[t("div",O,[A,t("div",R,[t("p",null,[n(e,{href:"/contact"},{default:r(()=>[o("Start Chat")]),_:1})])])]),D]),t("div",I,[t("p",null,[o("See our Refund "),n(e,{href:"/policy"},{default:r(()=>[o("Policies")]),_:1}),o(" or "),n(e,{href:"/faq"},{default:r(()=>[o("FAQ")]),_:1})])])])])]),t("div",P,[t("div",Q,[n(a),U])])])])])}const J=l(N,[["render",W]]);export{J as _};
