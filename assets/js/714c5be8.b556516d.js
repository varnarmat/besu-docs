"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=o,b=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},17969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2,title:"Use Ansible",description:"Deploying Hyperledger Besu with Ansible role on Galaxy",tags:["private networks"]},i="Deploy Besu with Ansible",s={unversionedId:"private-networks/how-to/deploy/ansible",id:"private-networks/how-to/deploy/ansible",title:"Use Ansible",description:"Deploying Hyperledger Besu with Ansible role on Galaxy",source:"@site/docs/private-networks/how-to/deploy/ansible.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/ansible",permalink:"/development/private-networks/how-to/deploy/ansible",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/deploy/ansible.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1696026935,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Use Ansible",description:"Deploying Hyperledger Besu with Ansible role on Galaxy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy to the cloud",permalink:"/development/private-networks/how-to/deploy/cloud"},next:{title:"Use Kubernetes",permalink:"/development/private-networks/how-to/deploy/kubernetes"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-besu-with-ansible"},"Deploy Besu with Ansible"),(0,o.kt)("p",null,"To deploy Besu using Ansible, use the ",(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/consensys/hyperledger_besu"},"Hyperledger Besu role")," published on Galaxy."),(0,o.kt)("p",null,'For more information, see the "Read Me" button on the ',(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/consensys/hyperledger_besu"},"Ansible Galaxy Besu page"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We strongly recommend automating network creation. Automating makes updates easier and ensures your configuration is synchronized across the network.")))}u.isMDXComponent=!0}}]);