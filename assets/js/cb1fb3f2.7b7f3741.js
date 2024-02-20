"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[29941],{90701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(85893),i=t(11151);const s={title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},r="Transaction pool",a={id:"public-networks/concepts/transactions/pool",title:"Transaction pool",description:"Transaction pool overview",source:"@site/versioned_docs/version-23.7.3/public-networks/concepts/transactions/pool.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/pool",permalink:"/23.7.3/public-networks/concepts/transactions/pool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/concepts/transactions/pool.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1708403199,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:2,frontMatter:{title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction types",permalink:"/23.7.3/public-networks/concepts/transactions/types"},next:{title:"Transaction validation",permalink:"/23.7.3/public-networks/concepts/transactions/validation"}},c={},p=[{value:"Dropping transactions when the transaction pool is full",id:"dropping-transactions-when-the-transaction-pool-is-full",level:2},{value:"Replacing transactions with the same sender and nonce",id:"replacing-transactions-with-the-same-sender-and-nonce",level:2},{value:"Size of the transaction pool",id:"size-of-the-transaction-pool",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"transaction-pool",children:"Transaction pool"}),"\n",(0,o.jsx)(n.p,{children:"All nodes maintain a transaction pool to store pending transactions before processing."}),"\n",(0,o.jsx)(n.p,{children:"Options and methods for configuring and monitoring the transaction pool include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#txpool_besutransactions",children:(0,o.jsx)(n.code,{children:"txpool_besuTransactions"})})," JSON-RPC API method to list transactions in the transaction pool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-max-size",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-size"})})," command line option to specify the maximum number of transactions in the transaction pool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," command line option to specify the price bump percentage to replace an existing transaction."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-retention-hours",children:(0,o.jsx)(n.code,{children:"--tx-pool-retention-hours"})})," command line option to specify the maximum number of hours to keep pending transactions in the transaction pool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/use-besu-api/rpc-pubsub#pending-transactions",children:(0,o.jsx)(n.code,{children:"newPendingTransactions"})})," and ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/use-besu-api/rpc-pubsub#dropped-transactions",children:(0,o.jsx)(n.code,{children:"droppedPendingTransactions"})})," RPC subscriptions to notify of transactions added to and dropped from the transaction pool."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["When submitting ",(0,o.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/privacy/private-transactions/#nonce-validation",children:"private transactions"}),", the ",(0,o.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction"})," is submitted to the transaction pool, not the private transaction itself."]})}),"\n",(0,o.jsx)(n.h2,{id:"dropping-transactions-when-the-transaction-pool-is-full",children:"Dropping transactions when the transaction pool is full"}),"\n",(0,o.jsx)(n.p,{children:"When the transaction pool is full, it accepts and retains local transactions in preference to remote transactions. If the transaction pool is full of local transactions, Besu drops the oldest local transactions first. That is, a full transaction pool continues to accept new local transactions by first dropping remote transactions and then by dropping the oldest local transactions."}),"\n",(0,o.jsx)(n.h2,{id:"replacing-transactions-with-the-same-sender-and-nonce",children:"Replacing transactions with the same sender and nonce"}),"\n",(0,o.jsx)(n.p,{children:"You can replace a pending transaction with a transaction that has the same sender and nonce but a higher gas price."}),"\n",(0,o.jsxs)(n.p,{children:["If sending a ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/concepts/transactions/types#frontier-transactions",children:"legacy transaction"}),", the old transaction is replaced if the new transaction has a gas price higher than the existing gas price by the percentage specified by ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If sending an ",(0,o.jsxs)(n.a,{href:"/23.7.3/public-networks/concepts/transactions/types#eip1559-transactions",children:[(0,o.jsx)(n.code,{children:"EIP1559"})," transaction"]}),", the old transaction is replaced if one of the following is true:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The new transaction's effective gas price is higher than the existing gas price by the percentage specified by ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," AND the new effective priority fee is greater than or equal to the existing priority fee."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The new transaction's effective gas price is the equal to the existing gas price AND the new effective priority fee is higher than the existing priority fee by the percentage specified by ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The default value for ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," is 10%."]}),"\n",(0,o.jsx)(n.h2,{id:"size-of-the-transaction-pool",children:"Size of the transaction pool"}),"\n",(0,o.jsx)(n.p,{children:"Decreasing the maximum size of the transaction pool reduces memory use. If the network is busy and there is a backlog of transactions, increasing the size of the transaction pool reduces the risk of removing transactions from the transaction pool."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);