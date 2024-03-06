"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[25585],{20216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(85893),o=t(11151);const i={title:"The Merge",sidebar_position:1,description:"Learn about The Merge, and execution and consensus clients.",tags:["public networks"]},r="The Merge",c={id:"public-networks/concepts/the-merge",title:"The Merge",description:"Learn about The Merge, and execution and consensus clients.",source:"@site/docs/public-networks/concepts/the-merge.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/the-merge",permalink:"/development/public-networks/concepts/the-merge",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/the-merge.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1709703227,formattedLastUpdatedAt:"Mar 6, 2024",sidebarPosition:1,frontMatter:{title:"The Merge",sidebar_position:1,description:"Learn about The Merge, and execution and consensus clients.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Concepts",permalink:"/development/public-networks/concepts"},next:{title:"Proof of stake consensus",permalink:"/development/public-networks/concepts/proof-of-stake/"}},a={},l=[{value:"Execution and consensus clients",id:"execution-and-consensus-clients",level:2},{value:"Execution clients",id:"execution-clients",level:3},{value:"Consensus clients",id:"consensus-clients",level:3},{value:"What happened during The Merge",id:"what-happened-during-the-merge",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"the-merge",children:"The Merge"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The Merge was executed on ",(0,s.jsx)(n.strong,{children:"September 15, 2022"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/merge/",children:"The Merge"})," was an Ethereum upgrade that merged the\n",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/beacon-chain/",children:"Beacon Chain"})," into Ethereum Mainnet, turning Mainnet into a combination of an ",(0,s.jsx)(n.a,{href:"#execution-and-consensus-clients",children:"execution layer and\nconsensus layer"}),".\nThe Merge transitioned Mainnet from proof of work to ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/proof-of-stake/",children:"proof of stake consensus"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can run Besu as an execution client with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/get-started/connect/mainnet",children:"Any consensus client on Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/get-started/connect/testnet",children:"Any consensus client on a testnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/tutorials/besu-teku-mainnet",children:"Teku on Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/tutorials/besu-teku-testnet",children:"Teku on a testnet"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"execution-and-consensus-clients",children:"Execution and consensus clients"}),"\n",(0,s.jsxs)(n.p,{children:["After The Merge, a full Ethereum Mainnet node is a combination of an execution client (previously\ncalled an ",(0,s.jsx)(n.a,{href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/",children:"Ethereum 1.0"})," client) and\na consensus client (previously called an ",(0,s.jsx)(n.a,{href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/",children:"Ethereum\n2.0"})," client)."]}),"\n",(0,s.jsxs)(n.p,{children:["Execution and consensus clients communicate with each other using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Ethereum Merge node",src:t(25611).Z+"",width:"1512",height:"1164"})}),"\n",(0,s.jsx)(n.h3,{id:"execution-clients",children:"Execution clients"}),"\n",(0,s.jsxs)(n.p,{children:["Execution clients, such as Besu, manage the execution layer, including executing transactions and\nupdating the world state.\nExecution clients serve ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/engine-api/",children:"JSON-RPC API"})," requests and communicate\nwith each other in a peer-to-peer network."]}),"\n",(0,s.jsx)(n.h3,{id:"consensus-clients",children:"Consensus clients"}),"\n",(0,s.jsxs)(n.p,{children:["Consensus clients, such as ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"}),", contain beacon node and validator client implementations.\nThe beacon node is the primary link to the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/beacon-chain/",children:"Beacon Chain"})," (consensus layer).\nThe validator client performs ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/proof-of-stake/",children:"validator duties"})," on the consensus layer.\nConsensus clients serve ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/reference/rest",children:"REST API"})," requests and\ncommunicate with each other in a peer-to-peer network."]}),"\n",(0,s.jsx)(n.h2,{id:"what-happened-during-the-merge",children:"What happened during The Merge"}),"\n",(0,s.jsx)(n.p,{children:"Before The Merge, the execution and consensus clients' configurations were updated to listen for a\ncertain total terminal difficulty (TTD) to be reached."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The TTD is a specific value for the total difficulty, which is the sum of the proof-of-work mining\ndifficulty for all blocks up to some point in the blockchain."})}),"\n",(0,s.jsx)(n.p,{children:"The consensus layer enabled the Merge configuration (Bellatrix) before reaching the TTD.\nOnce the execution layer blocks reached the TTD, the Beacon Chain merged into Ethereum Mainnet, and\nEthereum transitioned to a proof of stake network."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["After The Merge, a Mainnet node operator must run both an execution client and a beacon node at the\nsame time.\nTo become a validator, you must also run a validator client (either ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/get-started/start-teku#start-the-clients-in-a-single-process",children:"in the same process as the\nbeacon node"}),"\nor ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/get-started/start-teku#run-the-clients-separately",children:"separately"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["After The Merge, validators earn ",(0,s.jsx)(n.a,{href:"https://www.blocknative.com/ethereum-staking-calculator",children:"rewards"}),"\nfor performing ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/proof-of-stake/",children:"validator duties"}),", and ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/reference/cli#validators-proposer-default-fee-recipient",children:"fee\nrecipients"}),"\nalso earn rewards for the inclusion of execution layer transactions."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},25611:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Execution-Consensus-Clients-fb025b4b0cea4f3e3efef43657540e27.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);