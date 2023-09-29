"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[86634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Private networks",sidebar_position:1,sidebar_label:"Introduction",id:"index",description:"Private networks overview",tags:["private networks"]},i="Hyperledger Besu for private networks",s={unversionedId:"private-networks/index",id:"version-23.7.2/private-networks/index",title:"Private networks",description:"Private networks overview",source:"@site/versioned_docs/version-23.7.2/private-networks/index.md",sourceDirName:"private-networks",slug:"/private-networks/",permalink:"/23.7.2/private-networks/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/index.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1696026935,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:1,frontMatter:{title:"Private networks",sidebar_position:1,sidebar_label:"Introduction",id:"index",description:"Private networks overview",tags:["private networks"]},sidebar:"privateDocSidebar",next:{title:"Get started",permalink:"/23.7.2/private-networks/get-started"}},p={},c=[{value:"Architecture",id:"architecture",level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hyperledger-besu-for-private-networks"},"Hyperledger Besu for private networks"),(0,o.kt)("p",null,"You can use Besu to develop enterprise applications requiring secure, high-performance transaction processing in a private network."),(0,o.kt)("p",null,"A private network is a network not connected to Ethereum Mainnet or an Ethereum testnet. Private networks typically use a different ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/network-and-chain-id"},"chain ID")," and proof of authority consensus (",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/qbft"},"QBFT"),", ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0"),", or ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/configure/consensus/clique"},"Clique"),")."),(0,o.kt)("p",null,"You can also ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/ethash"},"create a local development network")," using proof of work (Ethash)."),(0,o.kt)("p",null,"Besu supports enterprise features including ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/privacy/"},"privacy")," and ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/permissioning/"},"permissioning"),"."),(0,o.kt)("p",null,"Get started with the ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/quickstart"},"Developer Quickstart")," to rapidly generate local blockchain networks."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The following diagram outlines the high-level architecture of Besu for private networks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Private architecture",src:r(68612).Z,width:"1656",height:"1054"})),(0,o.kt)("p",null,"If you have any questions about Besu for private networks, ask on the ",(0,o.kt)("strong",{parentName:"p"},"besu")," channel on\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/hyperledger"},"Hyperledger Discord"),"."))}u.isMDXComponent=!0},68612:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/private-architecture-5a4d514abd93e693a77b25cacdfc9ef7.jpeg"}}]);