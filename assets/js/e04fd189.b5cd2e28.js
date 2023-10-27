"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[59800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,d=u["".concat(c,".").concat(f)]||u[f]||v[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},a="Configure alternative elliptic curves",s={unversionedId:"private-networks/how-to/configure/curves",id:"version-23.10.0/private-networks/how-to/configure/curves",title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",source:"@site/versioned_docs/version-23.10.0/private-networks/how-to/configure/curves.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/curves",permalink:"/23.10.0/private-networks/how-to/configure/curves",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/private-networks/how-to/configure/curves.md",tags:[{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1698373091,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:8,frontMatter:{title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Block proposal permissioning",permalink:"/23.10.0/private-networks/how-to/configure/block-proposal-permissioning"},next:{title:"Create and send transactions",permalink:"/23.10.0/private-networks/how-to/send-transactions/"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-alternative-elliptic-curves"},"Configure alternative elliptic curves"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Configuring alternative elliptic curves is an early access feature.")),(0,i.kt)("p",null,"By default, Besu uses the Ethereum standard ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic curve (EC). However, when running nodes in a private network, it is possible to configure an alternative elliptic curve."),(0,i.kt)("p",null,"The configuration for what elliptic curve Besu will use is done in the network configuration section of genesis file, using the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/genesis-items#Configuration_Items"},(0,i.kt)("inlineCode",{parentName:"a"},"ecCurve"))," key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "genesis": {\n    "config": {\n      "ecCurve": "secp256k1",\n    [...]\n  },\n  [...]\n}\n')),(0,i.kt)("admonition",{title:"Important",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"All nodes in the network ",(0,i.kt)("strong",{parentName:"p"},"MUST")," use the same elliptic curve. Nodes with different EC configuration from the network won't be able to send messages to other nodes or verify transactions and blocks.")),(0,i.kt)("p",null,"Besu supports the following elliptic curves:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secp256k1")," (Ethereum default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secp256r1"))))}u.isMDXComponent=!0}}]);