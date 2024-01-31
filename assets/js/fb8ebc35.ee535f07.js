"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51168],{19144:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(85893),i=t(11151);const a={title:"Flexible privacy groups",sidebar_position:3,description:"Flexible privacy groups"},o="Flexible privacy groups",s={id:"private-networks/concepts/privacy/flexible-privacy",title:"Flexible privacy groups",description:"Flexible privacy groups",source:"@site/docs/private-networks/concepts/privacy/flexible-privacy.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/flexible-privacy",permalink:"/development/private-networks/concepts/privacy/flexible-privacy",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/privacy/flexible-privacy.md",tags:[],version:"current",lastUpdatedAt:1706735552,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:3,frontMatter:{title:"Flexible privacy groups",sidebar_position:3,description:"Flexible privacy groups"},sidebar:"privateDocSidebar",previous:{title:"Privacy groups",permalink:"/development/private-networks/concepts/privacy/privacy-groups"},next:{title:"Multi-tenancy",permalink:"/development/private-networks/concepts/privacy/multi-tenancy"}},c={},p=[{value:"Group management contracts",id:"group-management-contracts",level:2},{value:"Flexible privacy group IDs",id:"flexible-privacy-group-ids",level:2},{value:"Multi-tenancy",id:"multi-tenancy",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"flexible-privacy-groups",children:"Flexible privacy groups"}),"\n",(0,n.jsxs)(r.p,{children:["Flexible ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/privacy-groups",children:"privacy groups"})," use smart contracts to store and maintain the group membership. You can ",(0,n.jsx)(r.a,{href:"/development/private-networks/how-to/use-privacy/flexible",children:"add and remove members to and from flexible privacy groups"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"Because group membership for flexible privacy groups is stored in a smart contract, flexible privacy groups are also known as onchain privacy groups."})}),"\n",(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(r.p,{children:"Flexible privacy groups are an early access feature. Don't use in production networks."}),(0,n.jsx)(r.p,{children:"The flexible privacy group interfaces might change between releases. There might not be an upgrade path from flexible privacy groups created using v1.5 or earlier to enable use of flexible privacy group functionality in future versions."}),(0,n.jsxs)(r.p,{children:["We don't recommended creating flexible privacy groups in a chain with existing ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/privacy-groups",children:"offchain privacy groups"}),"."]})]}),"\n",(0,n.jsx)(r.h2,{id:"group-management-contracts",children:"Group management contracts"}),"\n",(0,n.jsx)(r.p,{children:"The privacy group management contract bytecode is hard-coded into Besu and when you create a privacy group, the contract bytecode is part of the genesis state of the privacy group."}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:"All members of a flexible privacy group must be using the same version of Besu. If using different versions, the private state within the privacy group may become inconsistent."})}),"\n",(0,n.jsx)(r.p,{children:"In the default implementation of the group management contract, the signer of the private transaction that creates the privacy group is also the owner of the group. Only the owner can add and remove participants, and upgrade the management contract."}),"\n",(0,n.jsx)(r.p,{children:"The owner is identified by the signing key. Transactions to add and remove participants, or upgrade the management contract, must be signed by the same key that signed the group creation transaction."}),"\n",(0,n.jsx)(r.h2,{id:"flexible-privacy-group-ids",children:"Flexible privacy group IDs"}),"\n",(0,n.jsx)(r.p,{children:"When creating a flexible privacy group, generate the privacy group ID for the group outside of Besu and pass the ID as a parameter."}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/development/private-networks/how-to/use-privacy/flexible",children:"web3js-quorum library"})," generates a unique privacy group ID and passes the ID to Besu when creating a privacy group."]}),"\n",(0,n.jsxs)(r.admonition,{type:"caution",children:[(0,n.jsx)(r.p,{children:"When generating a privacy group ID, you must ensure the ID is unique across all network participants. If you create a privacy group with an existing privacy group ID, the existing privacy group is overwritten."}),(0,n.jsx)(r.p,{children:"To ensure unique privacy group IDs, we recommend using 256-bit SecureRandom."})]}),"\n",(0,n.jsx)(r.h2,{id:"multi-tenancy",children:"Multi-tenancy"}),"\n",(0,n.jsxs)(r.p,{children:["When using ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"})," with flexible privacy groups, each user provides a JSON Web Token (JWT) which allows Besu to check that the user has access to functionality and data associated with a privacy group."]}),"\n",(0,n.jsxs)(r.p,{children:["Using multi-tenancy with flexible privacy groups is more complex than with ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/privacy-groups",children:"offchain privacy groups"})," because users may be added and removed from flexible privacy groups. When a user is added to a privacy group, they get access to all existing data in the privacy group. After being removed from a privacy group, a user retains access to already existing data in the privacy group, up to the block containing the ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction (PMT)"})," that removed them (the removal block). A removed user doesn't have access to data in the privacy group that happens after they were removed."]}),"\n",(0,n.jsx)(r.p,{children:"In particular, when multi-tenancy is enabled and a user requests access to a privacy group they were once a member of but later removed from, Besu allows the user access to the following functionality and data associated with the privacy group:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Private transactions using ",(0,n.jsx)(r.code,{children:"priv_getTransaction"})," and private transaction receipts using ",(0,n.jsx)(r.a,{href:"/development/public-networks/reference/api/#priv_gettransactionreceipt",children:(0,n.jsx)(r.code,{children:"priv_getTransactionReceipt"})})," from blocks up to (and including) the removal block."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"A removed group member may have access to some private transactions after the removal PMT in the same block."})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Using ",(0,n.jsx)(r.a,{href:"/development/public-networks/reference/api/#priv_call",children:(0,n.jsx)(r.code,{children:"priv_call"})})," on blocks up to (and including) the removal block."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Private logs using ",(0,n.jsx)(r.a,{href:"/development/public-networks/reference/api/#priv_getlogs",children:(0,n.jsx)(r.code,{children:"priv_getLogs"})})," for blocks up to (and including) the removal block. When the ",(0,n.jsx)(r.code,{children:"toBlock"})," is greater than the removal block, ",(0,n.jsx)(r.code,{children:"priv_getLogs"})," still returns logs up to the removal block."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"When a user is removed from a privacy group, any log filters they've created are also removed and can't be accessed. A user can only create and access filters for a privacy group they are currently a member of."})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["All other ",(0,n.jsxs)(r.a,{href:"/development/public-networks/reference/api/#priv-methods",children:[(0,n.jsx)(r.code,{children:"PRIV"})," API methods"]})," fail for the removed group member."]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>o});var n=t(67294);const i={},a=n.createContext(i);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);