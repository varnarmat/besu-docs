"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78766],{34064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(85893),i=t(11151);const s={title:"Private transaction processing",sidebar_position:1,description:"Private transaction processing"},a="Private transaction processing",o={id:"private-networks/concepts/privacy/private-transactions/processing",title:"Private transaction processing",description:"Private transaction processing",source:"@site/docs/private-networks/concepts/privacy/private-transactions/processing.md",sourceDirName:"private-networks/concepts/privacy/private-transactions",slug:"/private-networks/concepts/privacy/private-transactions/processing",permalink:"/development/private-networks/concepts/privacy/private-transactions/processing",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/privacy/private-transactions/processing.md",tags:[],version:"current",lastUpdatedAt:1709853856,formattedLastUpdatedAt:"Mar 7, 2024",sidebarPosition:1,frontMatter:{title:"Private transaction processing",sidebar_position:1,description:"Private transaction processing"},sidebar:"privateDocSidebar",previous:{title:"Private transactions",permalink:"/development/private-networks/concepts/privacy/private-transactions/"},next:{title:"Privacy groups",permalink:"/development/private-networks/concepts/privacy/privacy-groups"}},c={},p=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"private-transaction-processing",children:"Private transaction processing"}),"\n",(0,r.jsxs)(n.p,{children:["Processing ",(0,r.jsx)(n.a,{href:"/development/private-networks/concepts/privacy/private-transactions/",children:"private transactions"})," involves the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Precompiled contract"}),": A smart contract compiled from the source language to EVM bytecode and stored by an Ethereum node for later execution."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Privacy marker transaction (PMT)"}),": A public Ethereum transaction with a payload of the enclave key. The enclave key is a pointer to the private transaction in Tessera. The ",(0,r.jsx)(n.code,{children:"to"})," attribute of the PMT is the ",(0,r.jsx)(n.a,{href:"/development/private-networks/reference/api/#priv_getprivacyprecompileaddress",children:"address of the privacy precompiled contract"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The PMT is ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/use-privacy/sign-pmts",children:"signed with a random key or the key specified on the command line"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Private transaction processing is illustrated and described in the following diagram."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Processing Private Transactions",src:t(49407).Z+"",width:"2244",height:"2062"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Submit a private transaction using ",(0,r.jsx)(n.a,{href:"/development/private-networks/reference/api/#eea_sendrawtransaction",children:(0,r.jsx)(n.code,{children:"eea_sendRawTransaction"})}),". The signed transaction includes transaction parameters specific to private transactions, including:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"privateFor"})," or ",(0,r.jsx)(n.code,{children:"privacyGroupId"}),", which specifies the list of recipients."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"privateFrom"}),", which specifies the sender."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"restriction"}),", which specifies the transaction is restricted to the transaction participants."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The JSON-RPC endpoint passes the private transaction to the Private Transaction Handler."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The Private Transaction Handler sends the private transaction to Tessera."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Tessera distributes the private transaction directly (that is, point-to-point) to the Tessera nodes specified in ",(0,r.jsx)(n.code,{children:"privateFor"})," or belonging to the privacy group identified by ",(0,r.jsx)(n.code,{children:"privacyGroupId"}),". All recipient Tessera nodes store the transaction. Tessera associates the stored transaction with the transaction hash and privacy group ID."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Tessera returns the transaction hash to the Private Transaction Handler."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The Private Transaction Handler creates a PMT for the private transaction. The Private Transaction Handler propagates the PMT using devP2P in the same way as any other public Ethereum transaction."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you want to sign the PMT outside of Besu, use ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/send-transactions/private-transactions#priv_distributerawtransaction",children:(0,r.jsx)(n.code,{children:"priv_distributeRawTransaction"})})," instead of ",(0,r.jsx)(n.a,{href:"/development/private-networks/reference/api/#eea_sendrawtransaction",children:(0,r.jsx)(n.code,{children:"eea_sendRawTransaction"})}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Besu mines the PMT into a block and the PMT is distributed to all Ethereum nodes in the network."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The Mainnet Transaction Processor processes the PMT in the same way as any other public transaction. On nodes containing the ",(0,r.jsx)(n.a,{href:"/development/private-networks/reference/api/#priv_getprivacyprecompileaddress",children:"privacy precompile contract"})," specified in the ",(0,r.jsx)(n.code,{children:"to"})," attribute of the PMT, the Mainnet Transaction Processor passes the PMT to the privacy precompile contract."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Nodes receiving the PMT that don't contain the privacy precompile contract ignore the PMT."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The privacy precompile contract queries Tessera for the private transaction and privacy group ID using the transaction hash."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The privacy precompile contract passes the private transaction to the Private Transaction Processor. The privacy group ID specifies the private world state to use."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The Private Transaction Processor executes the transaction. The Private Transaction Processor can read and write to the private world state, and read from the public world state."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Recommendations",type:"danger",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We recommend using a network with a consensus mechanism supporting transaction finality. For example, ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Tessera must be ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/use-privacy/tessera",children:"highly available and run in a separate instance to Besu"}),"."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["Using private transactions with ",(0,r.jsx)(n.a,{href:"/development/public-networks/concepts/data-storage-formats#pruning",children:"pruning"})," or ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#sync-mode",children:"fast sync"})," is not supported."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},49407:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/PrivateTransactionProcessing-777f8e3007f496f2e621e965fb54dcd0.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);