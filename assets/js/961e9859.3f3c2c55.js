"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[49964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var f=r.createContext({}),l=function(e){var t=r.useContext(f),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,f=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=n,u=c["".concat(f,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var f in t)hasOwnProperty.call(t,f)&&(p[f]=t[f]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Use the web3js-quorum multi-node example",sidebar_position:3,description:"web3js-quorum client library multi-node example",tags:["private networks"]},i="Use the multi-node example in the web3js-quorum client library",p={unversionedId:"private-networks/tutorials/privacy/web3js-quorum",id:"version-23.7.2/private-networks/tutorials/privacy/web3js-quorum",title:"Use the web3js-quorum multi-node example",description:"web3js-quorum client library multi-node example",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/privacy/web3js-quorum.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/web3js-quorum",permalink:"/23.7.2/private-networks/tutorials/privacy/web3js-quorum",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/privacy/web3js-quorum.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1698373091,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:3,frontMatter:{title:"Use the web3js-quorum multi-node example",sidebar_position:3,description:"web3js-quorum client library multi-node example",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a multi-tenant network",permalink:"/23.7.2/private-networks/tutorials/privacy/multi-tenancy"},next:{title:"Create a privacy-enabled network using the Quorum Developer Quickstart",permalink:"/23.7.2/private-networks/tutorials/privacy/quickstart"}},f={},l=[],s={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-the-multi-node-example-in-the-web3js-quorum-client-library"},"Use the multi-node example in the web3js-quorum client library"),(0,n.kt)("p",null,"To use the examples provided in the web3js-quorum library with ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/privacy/"},"your privacy network"),":"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This example uses 3 of the 4 nodes configured in the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/tutorials/privacy/"},"privacy tutorial"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the ",(0,n.kt)("strong",{parentName:"p"},"ConsenSys/web3js-quorum")," repository:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ConsenSys/web3js-quorum\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"web3js-quorum")," directory:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"example")," directory, update the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys.js")," file to include:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chain ID"),(0,n.kt)("li",{parentName:"ul"},"Tessera node public keys"),(0,n.kt)("li",{parentName:"ul"},"Hyperledger Besu node RPC URLs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/23.7.2/public-networks/concepts/node-keys#node-private-key"},"Hyperledger Besu node private keys"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"example/multiNodeExample")," directory, deploy the contract:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node deployContract.js\n")),(0,n.kt)("p",{parentName:"li"},"A private transaction receipt returns."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Transaction Hash  0x23b57ddc3ecf9c9a548e4401a411420ffc0002fd259a86d5656add7c6108beeb\nWaiting for transaction to be mined ...\nPrivate Transaction Receipt\n{ contractAddress: '0xfee84481da8f4b9a998dfacb38091b3145bb01ab',\n  from: '0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb',\n  to: null,\n  output:\n  '0x6080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633fa4f245811461005b5780636057361d1461008257806367e404ce146100ae575b600080fd5b34801561006757600080fd5b506100706100ec565b60408051918252519081900360200190f35b34801561008e57600080fd5b506100ac600480360360208110156100a557600080fd5b50356100f2565b005b3480156100ba57600080fd5b506100c3610151565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60025490565b604080513381526020810183905281517fc9db20adedc6cf2b5d25252b101ab03e124902a73fcb12b753f3d1aaa2d8f9f5929181900390910190a16002556001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b60015473ffffffffffffffffffffffffffffffffffffffff169056fea165627a7a72305820c7f729cb24e05c221f5aa913700793994656f233fe2ce3b9fd9a505ea17e8d8a0029',\n  logs: [] }\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you receive a ",(0,n.kt)("inlineCode",{parentName:"p"},"Method not enabled")," error, ensure you enabled the appropriate APIs using the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api"},(0,n.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the contract address from the private transaction receipt and set the ",(0,n.kt)("inlineCode",{parentName:"p"},"CONTRACT_ADDRESS")," environment variable:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<Contract Address from Private Transaction Receipt>\n")),(0,n.kt)("admonition",{parentName:"li",title:"example",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=0xfee84481da8f4b9a998dfacb38091b3145bb01ab\n")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Store a value in the contract from Node 1:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node storeValueFromNode1.js\n")),(0,n.kt)("p",{parentName:"li"},"Node 1 stores the value of 1000 (3e8 in hex) and is visible to Node 1 and Node 2."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Transaction Hash: 0xd9d71cc6f64675e1a48183ded8f08930af317eb883ebae4c4eec66ae68618d85\nWaiting for transaction to be mined ...\nEvent Emited: 0x0000000000000000000000009811ebc35d7b06b3fa8dc5809a1f9c52751e1deb00000000000000000000000000000000000000000000000000000000000003e8\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8545: 0x00000000000000000000000000000000000000000000000000000000000003e8\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8546: 0x00000000000000000000000000000000000000000000000000000000000003e8\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8547: 0x\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Store a value in the contract from Node 2:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node storeValueFromNode2.js\n")),(0,n.kt)("p",{parentName:"li"},"Node 2 stores the value of 42 (2a in hex) and is visible to Node 1 and Node 2."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Transaction Hash: 0xa025433aec47a71b0230f12f43708812fd38ff7b7c1dc89a715f71dcbd5fbdbf\nWaiting for transaction to be mined ...\nEvent Emited: 0x000000000000000000000000372a70ace72b02cc7f1757183f98c620254f9c8d000000000000000000000000000000000000000000000000000000000000002a\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8545: 0x000000000000000000000000000000000000000000000000000000000000002a\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8546: 0x000000000000000000000000000000000000000000000000000000000000002a\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8547: 0x\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As expected, log messages indicate that Node 3 Tessera cannot find payloads because Node 3 does not have access to the private transactions between Node 1 and Node 2.")))))}c.isMDXComponent=!0}}]);