import{b as X}from"./chunk-ONWBFXGN.js";import{a as Z}from"./chunk-SJXFQYTK.js";import{a as K}from"./chunk-KCN7NYIH.js";import{b as R,e as ee}from"./chunk-DQSCGVX4.js";import{a as H,c,e as i,f as L,h as y,i as W,n as Y,o as J}from"./chunk-ECKCXZDJ.js";import{d as U}from"./chunk-EWS3NXQH.js";import{d as C,i as B}from"./chunk-AQDAG4C2.js";import{i as Q}from"./chunk-WNVFIGRJ.js";import{b as S,c as F}from"./chunk-FJD4SS3V.js";import{a as V}from"./chunk-I2CW5RII.js";import{a as j}from"./chunk-M5TAP4VX.js";import{b as z,d as w}from"./chunk-CL7MNENB.js";import{a as p,b as g,c as _,f as xe,i as Se}from"./chunk-ORNWO27Z.js";var e=xe(Se());var Fe=e.default.lazy(()=>import("./Avatar-JSMTFSTI.js")),ke=ve=>{var O=ve,{orgId:k,onSubmit:ne,saving:ae,submitButtonText:le}=O,se=_(O,["orgId","onSubmit","saving","submitButtonText"]);let oe=z(),ie=(0,e.useRef)(),{currentUser:M,memberships:h}=V(),[v,D]=(0,e.useState)(),[m,b]=(0,e.useState)(se),{feedback:I,clearFeedback:te}=Z(),{tokenName:q,expiresIn:E,ipAddresses:P,permissions:o,lastUsed:re,createdBy:t,team:$}=m,[f,A]=(0,e.useState)([]);(0,e.useEffect)(()=>{k?T(k):D(h[0])},[k,h]);let T=n=>{let a=h.find(({organisation:l})=>l.slug===n);D(a)},{organisation:{slug:G},teams:pe}=v||{organisation:{},teams:[]},me=[{label:oe.formatMessage({id:"apiToken.noTeam"}),value:""},...pe.map(({name:n,slug:a})=>({label:n,value:a}))],{data:x,loading:de}=j(X,{variables:{role:v==null?void 0:v.role},fetchPolicy:"cache-and-network",onCompleted:()=>{let n=x.apiScopeCategories.map(a=>({name:a.name,selected:!1}));A(n)}}),ue=n=>{if(!n)return"Never";let a=ee(n),l=new Date;return l.setHours(0),l.setMinutes(0),l.setSeconds(0),a>=l?"Today":`${R(a)} ago`},ge=n=>{n.preventDefault(),ne({organisation:G,description:q,scopes:o,ipAllowlist:P,expiresIn:parseInt(E),team:$})},ce=[{label:"Never",value:0},{label:"1 day",value:86400},{label:"1 week",value:604800},{label:"1 month",value:2629746},{label:"3 months",value:7889238},{label:"6 months",value:15778476},{label:"1 year",value:31556952}],be=n=>{let a=f.map(s=>Object.assign({},s)),l=f.findIndex(s=>s.name==n);a[l].selected=!f[l].selected,A(a);let d=x.apiScopeCategories.findIndex(s=>s.name==n),r=a[l].selected?"select":"deselect";x.apiScopeCategories[d].scopes.forEach(s=>fe(s.tag,r))},fe=(n,a)=>{let l=o.indexOf(n);a==="select"&&l===-1&&o.push(n),a==="deselect"&&l>-1&&o.splice(l,1),b(g(p({},m),{permissions:o}))},he=n=>{let a=o.indexOf(n);a>-1?o.splice(a,1):o.push(n),b(g(p({},m),{permissions:o}))},N=n=>{if(f.length>0){let a=x.apiScopeCategories.filter(u=>u.name===n),l=0,d=!1;a[0].scopes.forEach(u=>{o.indexOf(u.tag)>-1&&l++}),d=l===a[0].scopes.length;let r=f.map(u=>Object.assign({},u)),s=r.findIndex(u=>u.name==n);return r[s].selected=d,r[s].selected!=f[s].selected&&A(r),d}else return!1};return e.default.createElement(e.default.Fragment,null,I&&I.location==="manageApiForm"&&e.default.createElement(K,p({onDismiss:()=>te()},I)),e.default.createElement("form",{onSubmit:ge,ref:ie,"data-qa":"pageForm"},e.default.createElement(C,{p:null,px:4,pt:4},e.default.createElement(B,{id:"apiManagement.new.tokenSettings",mb:0}),e.default.createElement(c,{mb:0},e.default.createElement(i,{labelid:"apiManagement.new.tokenSettings.label",span:2,helpid:"apiManagement.new.tokenName.help"},e.default.createElement(L,{name:"token_name",defaultValue:q,required:!0,maxLength:255,onChange:n=>b(g(p({},m),{tokenName:n})),placeholder:"General CLI Usage"}))),e.default.createElement(c,{mb:0},e.default.createElement(i,{labelid:"apiManagement.new.expiresIn.label",span:1,helpid:"apiManagement.new.expiresIn.help"},e.default.createElement(y,{value:E,name:"expires_in",options:ce,loading:!1,onChange:n=>b(g(p({},m),{expiresIn:n}))})),e.default.createElement(i,{labelid:"apiManagement.new.allowedIp.label",span:1,helpid:"apiManagement.new.allowedIp.help"},e.default.createElement(L,{name:"ip_addresses",defaultValue:P,required:!1,onChange:n=>b(g(p({},m),{ipAddresses:n})),placeholder:"52.15.247.160/27"}))),t&&e.default.createElement(c,{mb:0},e.default.createElement(i,{labelid:"apiManagement.new.lastUsed"},e.default.createElement(S,{as:"span",color:"grey400"},ue(re))),t.name&&e.default.createElement(i,{labelid:"apiManagement.new.createdBy"},e.default.createElement(S,{as:"span",color:"grey400"},t.avatar&&e.default.createElement(S,{as:"span",mr:"8px"},e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null)},e.default.createElement(Fe,{size:"small",name:t.name,url:t.avatar,variant:t.membership.role}))),e.default.createElement("span",null,(M==null?void 0:M.name)===t.name?"You":t.name))))),e.default.createElement(C,null,de?e.default.createElement(C,null,e.default.createElement(U,null)):e.default.createElement(e.default.Fragment,null,e.default.createElement(B,{id:"apiManagement.new.permissions",mb:0}),!k&&h.length>1?e.default.createElement(c,{mb:0},e.default.createElement(i,{labelid:"apiManagement.new.organisation.label",span:2},e.default.createElement(y,{value:G,name:"organisation",options:h.map(({organisation:{name:n,slug:a}})=>({label:n,value:a})),loading:!1,onChange:n=>T(n)}))):null,e.default.createElement(c,{mb:0},e.default.createElement(i,{labelid:"apiManagement.new.team.label",span:2,helpid:"apiManagement.new.team.help"},e.default.createElement(y,{key:`${G}-team`,value:$,name:"team",options:me,loading:!1,onChange:n=>b(g(p({},m),{team:n}))}))),x.apiScopeCategories.filter(({scopes:n})=>n.length).map(({name:n,scopes:a,label:l})=>e.default.createElement(c,{key:n,mb:0},e.default.createElement(i,{span:2,key:n,mb:0},e.default.createElement(S,{flexWrap:["wrap","nowrap"],alignItems:"center",mb:"15px"},e.default.createElement(F,{flex:1,mb:0},e.default.createElement(H,null,l)),a.length>1?e.default.createElement(F,{mb:0},e.default.createElement(W,{id:`selectAll${n}`,name:`selectAll${n}`,checked:N(n),onChange:()=>{be(n)},level:"sm"},e.default.createElement("span",{"data-qa":`selectAll${n}`},N(n)?e.default.createElement(w,{id:"apiManagement.new.permissions.deselect"}):e.default.createElement(w,{id:"apiManagement.new.permissions.select"})))):null),e.default.createElement(Y,{pb:1},a.map(({description:d,title:r,tag:s})=>e.default.createElement(F,{mb:"15px",key:s},e.default.createElement(J,{span:1,uuid:s,label:r,description:d,key:s,checkboxClick:he,checked:o==null?void 0:o.includes(s)})))))))),e.default.createElement(F,{mr:2,order:1},e.default.createElement(Q,{type:"submit",variant:"primary",loading:ae},e.default.createElement(w,{id:le}))))))},Pe=ke;export{Pe as a};
//# sourceMappingURL=chunk-UJTM3JYK.js.map