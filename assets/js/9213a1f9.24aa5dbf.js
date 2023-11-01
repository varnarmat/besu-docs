"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[99887],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},l="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=s(t),d=n,y=l["".concat(c,".").concat(d)]||l[d]||v[d]||p;return t?a.createElement(y,i(i({ref:r},u),{},{components:t})):a.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[l]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48131:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const p={title:"Create and manage privacy groups",description:"Create and manage privacy groups with Hyperledger Besu",sidebar_position:4,tags:["private networks"]},i="Create and manage privacy groups",o={unversionedId:"private-networks/how-to/use-privacy/privacy-groups",id:"private-networks/how-to/use-privacy/privacy-groups",title:"Create and manage privacy groups",description:"Create and manage privacy groups with Hyperledger Besu",source:"@site/docs/private-networks/how-to/use-privacy/privacy-groups.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/privacy-groups",permalink:"/development/private-networks/how-to/use-privacy/privacy-groups",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/privacy-groups.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1698870831,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:4,frontMatter:{title:"Create and manage privacy groups",description:"Create and manage privacy groups with Hyperledger Besu",sidebar_position:4,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Run Tessera with Besu",permalink:"/development/private-networks/how-to/use-privacy/tessera"},next:{title:"Use flexible privacy groups",permalink:"/development/private-networks/how-to/use-privacy/flexible"}},c={},s=[],u={toc:s};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-and-manage-privacy-groups"},"Create and manage privacy groups"),(0,n.kt)("p",null,"Hyperledger Besu-extended privacy provides JSON-RPC API methods for creating and managing privacy groups:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#priv_createprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#priv_findprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#priv_deleteprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_deletePrivacyGroup")),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can find and delete ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/privacy-groups"},"EEA-compliant privacy groups")," using ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_findprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup"))," and ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_deleteprivacygroup"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_deletePrivacyGroup")),".")))}l.isMDXComponent=!0}}]);