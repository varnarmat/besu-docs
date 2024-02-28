"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[22338],{82303:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(85893),a=t(11151);const i={title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},r="Run Tessera with Besu",o={id:"private-networks/how-to/use-privacy/tessera",title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",source:"@site/docs/private-networks/how-to/use-privacy/tessera.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/tessera",permalink:"/development/private-networks/how-to/use-privacy/tessera",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/tessera.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1709127984,formattedLastUpdatedAt:"Feb 28, 2024",sidebarPosition:3,frontMatter:{title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Besu-extended privacy",permalink:"/development/private-networks/how-to/use-privacy/besu-extended"},next:{title:"Create and manage privacy groups",permalink:"/development/private-networks/how-to/use-privacy/privacy-groups"}},c={},l=[{value:"High availability",id:"high-availability",level:2},{value:"Separate instances",id:"separate-instances",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"run-tessera-with-besu",children:"Run Tessera with Besu"}),"\n",(0,n.jsxs)(s.p,{children:["To enable ",(0,n.jsx)(s.a,{href:"/development/private-networks/concepts/privacy/",children:"privacy functionality"})," in production systems, ",(0,n.jsx)(s.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"})," must be ",(0,n.jsx)(s.a,{href:"#high-availability",children:"highly available"})," and ",(0,n.jsx)(s.a,{href:"#separate-instances",children:"run in a separate instance"})," to Hyperledger Besu."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Besu-Tessera-High-Availability",src:t(27558).Z+"",width:"1512",height:"648"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"You can also configure Besu for high availability using load balancers."})}),"\n",(0,n.jsx)(s.h2,{id:"high-availability",children:"High availability"}),"\n",(0,n.jsxs)(s.p,{children:["Privacy requires you to ",(0,n.jsx)(s.a,{href:"https://consensys.net/docs/goquorum//en/stable/configure-and-manage/configure/high-availability/",children:"configure Tessera for high availability"}),". Besu also requires ",(0,n.jsxs)(s.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/Orion-Mode",children:[(0,n.jsx)(s.code,{children:"orion"})," mode"]})," to be enabled in Tessera."]}),"\n",(0,n.jsx)(s.p,{children:"To successfully distribute a private transaction, all private transaction participants must be online. If any participants are offline when submitting the private transaction, the transaction is not attempted and you need to resubmit the transaction."}),"\n",(0,n.jsx)(s.p,{children:"If a Tessera node is unavailable when Besu attempts to process a privacy marker transaction, the Besu node stops processing all new blocks until Tessera is available. The Besu node continually attempts to process the privacy marker transaction until Tessera is available again."}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"If Tessera becomes available but has lost data, Besu resumes processing blocks and the private states in the Besu nodes might become inconsistent."})}),"\n",(0,n.jsx)(s.h2,{id:"separate-instances",children:"Separate instances"}),"\n",(0,n.jsx)(s.p,{children:"For production systems, we recommend running Besu and Tessera in separate instances. If running Besu and Tessera in the same instance, restrict the amount of memory used by each JVM to ensure each has enough memory."})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},27558:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/Besu-Tessera-High-Availability-452df28ed69ccdc9a06250a617e5a477.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);