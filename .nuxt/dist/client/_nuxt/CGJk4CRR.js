import{ag as v,y as u,m as f}from"./OmrnE3d5.js";import{u as k}from"./D-HlV6Uy.js";const C=v("auth",{state:()=>({authenticated:!1,loading:!1}),actions:{async authenticateUser({email:n,password:s}){var o,t,i,l,a,r,c;const m=f(),{data:e,pending:p}=await k(`${m.public.apiBase}/user/login`,{method:"post",headers:{"Content-Type":"application/json"},body:{username:n,password:s}},"$L7GOUGH2Ei");if(this.loading=p,e.value){const g=u("token");g.value=(o=e==null?void 0:e.value)==null?void 0:o.token;const h=u("user");h.value={id:(t=e==null?void 0:e.value)==null?void 0:t.id,username:(i=e==null?void 0:e.value)==null?void 0:i.username,email:(l=e==null?void 0:e.value)==null?void 0:l.email,department_id:(a=e==null?void 0:e.value)==null?void 0:a.department_id,name:(r=e==null?void 0:e.value)==null?void 0:r.name,group_id:(c=e==null?void 0:e.value)==null?void 0:c.group_id},this.authenticated=!0}},logUserOut(){const n=u("token"),s=u("user");this.authenticated=!1,n.value=null,s.value=null,console.log("Logout Success")}}});export{C as u};