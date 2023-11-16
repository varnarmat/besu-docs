"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[77596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=f(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:f},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},32124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},l="Configure free gas networks",u={unversionedId:"private-networks/how-to/configure/free-gas",id:"version-23.7.3/private-networks/how-to/configure/free-gas",title:"Free gas network",description:"Configuring free gas networks",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/configure/free-gas.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/free-gas",permalink:"/23.7.3/private-networks/how-to/configure/free-gas",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/configure/free-gas.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700173508,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:2,frontMatter:{title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and remove validators without voting",permalink:"/23.7.3/private-networks/how-to/configure/consensus/add-validators-without-voting"},next:{title:"Bootnodes",permalink:"/23.7.3/private-networks/how-to/configure/bootnodes"}},c={},p=[{value:"Configure free gas in Besu",id:"configure-free-gas-in-besu",level:2},{value:"1. Set the block size",id:"1-set-the-block-size",level:3},{value:"2. Set the contract size",id:"2-set-the-contract-size",level:3},{value:"3. Start Besu with a minimum gas price of zero",id:"3-start-besu-with-a-minimum-gas-price-of-zero",level:3},{value:"4. Enable zero base fee if using London fork or later",id:"4-enable-zero-base-fee-if-using-london-fork-or-later",level:3},{value:"Configure free gas in Hardhat",id:"configure-free-gas-in-hardhat",level:2},{value:"Update <code>hardhat.config.js</code>",id:"update-hardhatconfigjs",level:3}],f={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-free-gas-networks"},"Configure free gas networks"),(0,r.kt)("p",null,"Transactions use computational resources so have an associated cost. Gas is the cost unit and the gas price is the price per gas unit. The transaction cost is the gas used ","*"," gas price."),(0,r.kt)("p",null,"In public networks, the account submitting the transaction pays the transaction cost, in Ether. The miner (or validator in PoA networks) that includes the transaction in a block receives transaction cost."),(0,r.kt)("p",null,"In many private networks, network participants run the validators and do not require gas as an incentive. Networks that don't require gas as an incentive usually configure the gas price to be zero (that is, free gas). Some private networks might allocate Ether and use a non-zero gas price to limit resource use."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We use the term ",(0,r.kt)("em",{parentName:"p"},"free gas network")," to refer to a network with a gas price of zero. A network with a gas price of zero is also known as a ",(0,r.kt)("em",{parentName:"p"},"zero gas network")," or ",(0,r.kt)("em",{parentName:"p"},"no gas network"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some pre-crafted transactions require the deployment account to have gas available. For example, the transaction that creates the smart contract in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1820"},"EIP-1820"),".")),(0,r.kt)("p",null,"In a free gas network, transactions still use gas but the gas price is zero, meaning the transaction cost is zero. Transaction cost = gas used ","*"," 0 (the gas price)."),(0,r.kt)("h2",{id:"configure-free-gas-in-besu"},"Configure free gas in Besu"),(0,r.kt)("p",null,"When gas is free, limiting block and contract sizes is less important. In free gas networks, we increase the block size limit and set the contract size limit to the maximum value."),(0,r.kt)("h3",{id:"1-set-the-block-size"},"1. Set the block size"),(0,r.kt)("p",null,"If you want to remove gas from consideration and don't mind blocks potentially taking longer to create, in the genesis file set the block size limit (measured in gas) to the maximum accepted by Hardhat (",(0,r.kt)("inlineCode",{parentName:"p"},"0x1fffffffffffff"),"). In the genesis file, specify ",(0,r.kt)("inlineCode",{parentName:"p"},"gasLimit")," following the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n  ....\n  },\n  ...\n  "gasLimit": "0x1fffffffffffff",\n  ....\n}\n')),(0,r.kt)("p",null,"If you are more concerned about blocks arriving on time and don't have expensive individual transactions, set ",(0,r.kt)("inlineCode",{parentName:"p"},"gasLimit")," to a value closer to the amount of gas your validators can process in the configured block time."),(0,r.kt)("h3",{id:"2-set-the-contract-size"},"2. Set the contract size"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," section of the genesis file, set the contract size limit to the maximum supported size (in bytes)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'(\n  "config": {\n    ...\n    "contractSizeLimit": 2147483647,\n    ...\n  }\n  ...\n}\n')),(0,r.kt)("h3",{id:"3-start-besu-with-a-minimum-gas-price-of-zero"},"3. Start Besu with a minimum gas price of zero"),(0,r.kt)("p",null,"When starting nodes, set the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#min-gas-price"},"minimum gas price")," to zero."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Command Line",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--min-gas-price=0\n"))),(0,r.kt)(i.Z,{label:"Configuration File",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"min-gas-price=0\n")))),(0,r.kt)("h1",{id:"command-line-1"},"Command Line"),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"In a free gas network, ensure the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/cli/options#min-gas-price"},"minimum gas price")," is set to zero for every node. Any node with a minimum gas price set higher than zero will silently drop transactions with a zero gas price. You can query a node's gas configuration using ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#eth_gasprice"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_gasPrice")),".")),(0,r.kt)("h3",{id:"4-enable-zero-base-fee-if-using-london-fork-or-later"},"4. Enable zero base fee if using London fork or later"),(0,r.kt)("p",null,"If your network is configured to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"londonBlock")," or a later hard fork, then you must also enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"zeroBaseFee")," configuration. You must set this on all your nodes. Once it is set, future blocks produced by that node will set a ",(0,r.kt)("inlineCode",{parentName:"p"},"baseFee")," of 0. This is required because the London hard fork (EIP-1559) introduced a non-zero ",(0,r.kt)("inlineCode",{parentName:"p"},"baseFee")," into the block which normally means transactions require gas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "londonBlock": 0,\n    "zeroBaseFee": true,\n    ...\n  },\n  ...\n}\n')),(0,r.kt)("h2",{id:"configure-free-gas-in-hardhat"},"Configure free gas in Hardhat"),(0,r.kt)("p",null,"If using Hardhat to develop on your free gas network, you also need to configure free gas in Hardhat."),(0,r.kt)("p",null,"Like setting block and contract size limits to their maximum values for Besu, set the transaction gas limit in Hardhat to the maximum possible."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Besu does not support private key management. To use Besu with Hardhat, you must configure a ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/develop/hardhat"},"Hardhat wallet"),".")),(0,r.kt)("h3",{id:"update-hardhatconfigjs"},"Update ",(0,r.kt)("inlineCode",{parentName:"h3"},"hardhat.config.js")),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the gas price to zero."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gasPrice: 0;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the gas limit for a transaction (that is, contract creation) to be the block gas limit - 1."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'gas: "0x1ffffffffffffe";\n')))))}m.isMDXComponent=!0}}]);