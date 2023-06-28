"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[39709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"global/config-options",id:"version-23.4.0/global/config-options",title:"config-options",description:"Optional configuration options",source:"@site/versioned_docs/version-23.4.0/global/config-options.md",sourceDirName:"global",slug:"/global/config-options",permalink:"/23.4.0/global/config-options",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/global/config-options.md",tags:[],version:"23.4.0",lastUpdatedAt:1687971949,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{}},l={},u=[{value:"Optional configuration options",id:"optional-configuration-options",level:3}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"optional-configuration-options"},"Optional configuration options"),(0,o.kt)("p",null,"Optional configuration options in the genesis file are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"messageQueueLimit")," - In large networks with limited resources, increasing the message queue limit might help with message activity surges. The default is 1000."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"duplicateMessageLimit")," - If the same node is retransmitting messages, increasing the duplicate message limit might reduce the number of retransmissions. A value of two to three times the number of validators is usually enough. The default is 100."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"futureMessagesLimit")," - The future messages buffer holds messages for a future chain height. For large networks, increasing the future messages limit might be useful. The default is 1000."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"futureMessagesMaxDistance")," - The maximum height from the current chain height for buffering messages in the future messages buffer. The default is 10.")))}f.isMDXComponent=!0}}]);