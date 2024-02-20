"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[66077],{12052:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(85893),i=t(11151);const r={title:"Transaction types",sidebar_position:1,description:"Description of the different transaction types",tags:["public networks","private networks"]},a="Transaction types",c={id:"public-networks/concepts/transactions/types",title:"Transaction types",description:"Description of the different transaction types",source:"@site/versioned_docs/version-23.10.2/public-networks/concepts/transactions/types.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/types",permalink:"/23.10.2/public-networks/concepts/transactions/types",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/concepts/transactions/types.md",tags:[{label:"public networks",permalink:"/23.10.2/tags/public-networks"},{label:"private networks",permalink:"/23.10.2/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1708403199,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:1,frontMatter:{title:"Transaction types",sidebar_position:1,description:"Description of the different transaction types",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Data storage formats",permalink:"/23.10.2/public-networks/concepts/data-storage-formats"},next:{title:"Transaction pool",permalink:"/23.10.2/public-networks/concepts/transactions/pool"}},o={},d=[{value:"<code>FRONTIER</code> transactions",id:"frontier-transactions",level:2},{value:"<code>ACCESS_LIST</code> transactions",id:"access_list-transactions",level:2},{value:"<code>EIP1559</code> transactions",id:"eip1559-transactions",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"transaction-types",children:"Transaction types"}),"\n",(0,n.jsxs)(s.p,{children:["You can interact with the Hyperledger Besu JSON-RPC API using different transaction types (specified by the ",(0,n.jsx)(s.code,{children:"transactionType"})," parameter)."]}),"\n",(0,n.jsxs)(s.p,{children:["The following API objects use a unique format for each ",(0,n.jsx)(s.code,{children:"transactionType"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/23.10.2/public-networks/reference/api/objects#pending-transaction-object",children:"Pending transaction object"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/23.10.2/public-networks/reference/api/objects#transaction-object",children:"Transaction object"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/23.10.2/public-networks/reference/api/objects#transaction-call-object",children:"Transaction call object"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/23.10.2/public-networks/reference/api/objects#transaction-receipt-object",children:"Transaction receipt object"})}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"frontier-transactions",children:[(0,n.jsx)(s.code,{children:"FRONTIER"})," transactions"]}),"\n",(0,n.jsxs)(s.p,{children:["Transactions with type ",(0,n.jsx)(s.code,{children:"FRONTIER"})," are ",(0,n.jsx)(s.em,{children:"legacy transactions"})," that use the transaction format existing before typed transactions were introduced in ",(0,n.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2718",children:"EIP-2718"}),". They contain the parameters ",(0,n.jsx)(s.code,{children:"chainId"}),", ",(0,n.jsx)(s.code,{children:"nonce"}),", ",(0,n.jsx)(s.code,{children:"gasPrice"}),", ",(0,n.jsx)(s.code,{children:"gasLimit"}),", ",(0,n.jsx)(s.code,{children:"to"}),", ",(0,n.jsx)(s.code,{children:"value"}),", ",(0,n.jsx)(s.code,{children:"data"}),", ",(0,n.jsx)(s.code,{children:"v"}),", ",(0,n.jsx)(s.code,{children:"r"}),", and ",(0,n.jsx)(s.code,{children:"s"}),". Legacy transactions don't use ",(0,n.jsx)(s.a,{href:"#access_list-transactions",children:"access lists"})," or incorporate ",(0,n.jsx)(s.a,{href:"#eip1559-transactions",children:"EIP-1559 fee market changes"}),"."]}),"\n",(0,n.jsxs)(s.h2,{id:"access_list-transactions",children:[(0,n.jsx)(s.code,{children:"ACCESS_LIST"})," transactions"]}),"\n",(0,n.jsxs)(s.p,{children:["Transactions with type ",(0,n.jsx)(s.code,{children:"ACCESS_LIST"})," are transactions introduced in ",(0,n.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2930",children:"EIP-2930"}),". They contain, along with the ",(0,n.jsx)(s.a,{href:"#frontier-transactions",children:"legacy parameters"}),", an ",(0,n.jsx)(s.code,{children:"accessList"})," parameter, which specifies an array of addresses and storage keys that the transaction plans to access (an ",(0,n.jsx)(s.em,{children:"access list"}),"). ",(0,n.jsx)(s.code,{children:"ACCESS_LIST"})," transactions must specify an access list, and they don't incorporate ",(0,n.jsx)(s.a,{href:"#eip1559-transactions",children:"EIP-1559 fee market changes"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.a,{href:"/23.10.2/public-networks/reference/api/#eth_createaccesslist",children:(0,n.jsx)(s.code,{children:"eth_createAccessList"})})," API to simulate a transaction which returns the addresses and storage keys that may be used to send the real transaction, and the approximate gas cost."]}),"\n",(0,n.jsxs)(s.h2,{id:"eip1559-transactions",children:[(0,n.jsx)(s.code,{children:"EIP1559"})," transactions"]}),"\n",(0,n.jsxs)(s.p,{children:["Transactions with type ",(0,n.jsx)(s.code,{children:"EIP1559"})," are transactions introduced in ",(0,n.jsx)(s.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md",children:"EIP-1559"}),". EIP-1559 addresses the network congestion and overpricing of transaction fees caused by the historical fee market, in which users send transactions specifying a gas price bid using the ",(0,n.jsx)(s.code,{children:"gasPrice"})," parameter, and miners choose transactions with the highest bids."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"EIP1559"})," transactions don't specify ",(0,n.jsx)(s.code,{children:"gasPrice"}),", and instead use an in-protocol, dynamically changing ",(0,n.jsx)(s.em,{children:"base fee"})," per gas. At each block, the base fee per gas is adjusted to address network congestion as measured by a gas target."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"EIP1559"})," transactions contain, along with the ",(0,n.jsx)(s.a,{href:"#access_list-transactions",children:(0,n.jsx)(s.code,{children:"accessList"})})," parameter and ",(0,n.jsx)(s.a,{href:"#frontier-transactions",children:"legacy parameters"})," except for ",(0,n.jsx)(s.code,{children:"gasPrice"}),", a ",(0,n.jsx)(s.code,{children:"maxPriorityFeePerGas"})," parameter, which specifies the maximum fee the sender is willing to pay per gas above the base fee (the maximum ",(0,n.jsx)(s.em,{children:"priority fee"})," per gas), and a ",(0,n.jsx)(s.code,{children:"maxFeePerGas"})," parameter, which specifies the maximum total fee (base fee + priority fee) the sender is willing to pay per gas."]}),"\n",(0,n.jsxs)(s.p,{children:["An ",(0,n.jsx)(s.code,{children:"EIP1559"})," transaction always pays the base fee of the block it's included in, and it pays a priority fee as priced by ",(0,n.jsx)(s.code,{children:"maxPriorityFeePerGas"})," or, if the base fee per gas + ",(0,n.jsx)(s.code,{children:"maxPriorityFeePerGas"})," exceeds ",(0,n.jsx)(s.code,{children:"maxFeePerGas"}),", it pays a priority fee as priced by ",(0,n.jsx)(s.code,{children:"maxFeePerGas"})," minus the base fee per gas. The base fee is burned, and the priority fee is paid to the miner that included the transaction. A transaction's priority fee per gas incentivizes miners to include the transaction over other transactions with lower priority fees per gas."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"EIP1559"})," transactions must specify both ",(0,n.jsx)(s.code,{children:"maxPriorityFeePerGas"})," and ",(0,n.jsx)(s.code,{children:"maxFeePerGas"}),". They must not specify ",(0,n.jsx)(s.code,{children:"gasPrice"}),"."]})]})}function l(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(67294);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);