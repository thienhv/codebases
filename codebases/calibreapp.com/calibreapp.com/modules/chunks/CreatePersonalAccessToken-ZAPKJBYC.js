import{a as P}from"./chunk-44TNTXG2.js";import{a as w}from"./chunk-6SHIXMZF.js";import"./chunk-UJTM3JYK.js";import"./chunk-ONWBFXGN.js";import{b as S}from"./chunk-X7WQVXMB.js";import{a as v}from"./chunk-HVWSZP6M.js";import"./chunk-KQFWUF4F.js";import"./chunk-IHNDKV3B.js";import{a as h}from"./chunk-SJXFQYTK.js";import"./chunk-2FC4P7GA.js";import"./chunk-KCN7NYIH.js";import"./chunk-YG5VU5UW.js";import"./chunk-DQSCGVX4.js";import"./chunk-CWNFCDZO.js";import"./chunk-DGXX4BQF.js";import{a as y}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-WEIYGZZI.js";import"./chunk-ECKCXZDJ.js";import"./chunk-5AD3ZUGZ.js";import{a as A}from"./chunk-YOWIORHC.js";import"./chunk-2OWL4LTV.js";import"./chunk-62V4AEVH.js";import{a as C}from"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import{a as d}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as F}from"./chunk-UJ4RDOBF.js";import"./chunk-EWS3NXQH.js";import{c as T,d as g}from"./chunk-AQDAG4C2.js";import"./chunk-TT3E6PQD.js";import{c as x}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{e as b}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{b as k,c as s}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as B}from"./chunk-I2CW5RII.js";import"./chunk-EHER635N.js";import"./chunk-D3V43LVN.js";import"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d as n}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as p,b as u,c,f as l,i as f}from"./chunk-ORNWO27Z.js";var e=l(f());var o=l(f());var j=({apiToken:i,tokenName:r})=>o.default.createElement(o.default.Fragment,null,o.default.createElement(T,null,o.default.createElement(g,null,o.default.createElement(k,{flexWrap:["wrap","nowrap"],alignItems:"center"},o.default.createElement(s,{flex:1,mb:[4,0]},o.default.createElement(v,null,o.default.createElement(b,{to:"/you/settings/tokens"},o.default.createElement(n,{id:"you.settings.accessTokens.heading"})),o.default.createElement(C,{label:r},o.default.createElement("div",null,A(r,25))))),o.default.createElement(s,{pr:1,width:[1,"auto"]},o.default.createElement(x,{href:"/docs/account-and-billing/manage-api-tokens"},o.default.createElement(n,{id:"you.settings.accessTokens.actions.guide"}))))),o.default.createElement(P,{apiToken:i,tokenName:r,returnToUrl:"/you/settings/tokens"}))),M=j;var z=()=>{let{memberships:i,currentUser:r}=B(),{feedback:U,setFeedback:E}=h(),[m,G]=(0,e.useState)(!1),[L,{loading:q,data:K}]=d(S,{onCompleted:()=>{G(!0)},onError:t=>{E({type:"error",message:y(t),location:"manageApiForm"})}}),I=D=>{var a=D,{organisation:t}=a,$=c(a,["organisation"]);L({variables:{organisation:t,attributes:u(p({},$),{user:r.uuid})}})},{createApiKey:{key:Q,description:W}}=K||{createApiKey:{}};return e.default.createElement(e.default.Fragment,null,e.default.createElement(F,{id:`you.settings.accessTokens.${m?"confirmation":"new"}.title`}),m?e.default.createElement(M,{apiToken:Q,tokenName:W}):e.default.createElement(w,{onSubmit:I,permissions:[],saving:q,action:"create",error:U,organisations:i.map(({organisation:t})=>t)}))},ao=z;export{ao as default};
//# sourceMappingURL=CreatePersonalAccessToken-ZAPKJBYC.js.map
