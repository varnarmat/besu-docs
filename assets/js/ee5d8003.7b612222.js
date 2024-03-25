"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[98878],{42517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(85893),a=t(11151),s=t(74866),o=t(85162);const i={title:"Private network subcommands",sidebar_position:2,description:"Hyperledger Besu command line interface subcommands",tags:["private networks"]},l="Private network subcommands",c={id:"private-networks/reference/cli/subcommands",title:"Private network subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/docs/private-networks/reference/cli/subcommands.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/subcommands",permalink:"/development/private-networks/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/reference/cli/subcommands.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1711401911,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{title:"Private network subcommands",sidebar_position:2,description:"Hyperledger Besu command line interface subcommands",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Private network options",permalink:"/development/private-networks/reference/cli/options"},next:{title:"Private network API methods",permalink:"/development/private-networks/reference/api/"}},d={},u=[{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-blockchain-config</code>",id:"generate-blockchain-config",level:3},{value:"<code>rlp</code>",id:"rlp",level:2},{value:"<code>encode</code>",id:"encode",level:3},{value:"IBFT 2.0 extra data",id:"ibft-20-extra-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"private-network-subcommands",children:"Private network subcommands"}),"\n",(0,r.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu private network command line interface (CLI) subcommands."}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,r.jsxs)(n.p,{children:["This reference contains subcommands that apply to only private networks. For subcommands that apply to both private and public networks, see the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/subcommands",children:"public network subcommands reference"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,r.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,r.jsx)(n.h2,{id:"operator",children:(0,r.jsx)(n.code,{children:"operator"})}),"\n",(0,r.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,r.jsx)(n.h3,{id:"generate-blockchain-config",children:(0,r.jsx)(n.code,{children:"generate-blockchain-config"})}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=<FILE> --to=<DIRECTORY> [--genesis-file-name=<FILE>] [--private-key-file-name=<FILE>] [--public-key-file-name=<FILE>]\n"})})}),(0,r.jsx)(o.Z,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=config.json --to=myNetworkFiles\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Generates an ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0"})," or ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT"})," genesis file."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,r.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 or QBFT genesis file, except for the ",(0,r.jsx)(n.code,{children:"extraData"})," string. The second is the ",(0,r.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,r.jsx)(n.h2,{id:"rlp",children:(0,r.jsx)(n.code,{children:"rlp"})}),"\n",(0,r.jsx)(n.p,{children:"Provides RLP related actions."}),"\n",(0,r.jsx)(n.h3,{id:"encode",children:(0,r.jsx)(n.code,{children:"encode"})}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu rlp encode [--from=<FILE>] [--to=<FILE>] [--type=<type>]\n"})})}),(0,r.jsx)(o.Z,{value:"File example",label:"File example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu rlp encode --from=ibft_extra_data.json --to=extra_data_for_ibft_genesis.txt --type=IBFT_EXTRA_DATA\n"})})}),(0,r.jsx)(o.Z,{value:"Standard input/output example",label:"Standard input/output example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat extra_data.json | besu rlp encode > rlp.txt\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Encodes the RLP hexadecimal string for use in an ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0"})," or ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT"})," genesis file. The default type is ",(0,r.jsx)(n.code,{children:"IBFT_EXTRA_DATA"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Supported types are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," - The IBFT 2.0 genesis file includes the ",(0,r.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," type in the ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft#extra-data",children:(0,r.jsx)(n.code,{children:"extraData"})})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"QBFT_EXTRA_DATA"})," - The QBFT genesis file includes the ",(0,r.jsx)(n.code,{children:"QBFT_EXTRA_DATA"})," type in the ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#extra-data",children:(0,r.jsx)(n.code,{children:"extraData"})})," property."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ibft-20-extra-data",children:"IBFT 2.0 extra data"}),"\n",(0,r.jsxs)(n.p,{children:["To generate the RLP encoded ",(0,r.jsx)(n.code,{children:"extraData"})," string, specify a JSON input that is an array of validator addresses in ascending order."]}),"\n",(0,r.jsxs)(n.admonition,{title:"JSON Schema for IBFT_EXTRA_DATA",type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use the following JSON Schema to validate that your JSON data is well formed. To validate your JSON content, use an online validation tool, such as ",(0,r.jsx)(n.a,{href:"https://www.jsonschemavalidator.net/",children:"JSON Schema Validator"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://org.hyperledger.besu/cli_rlp_ibft_extra_data.json",\n  "type": "array",\n  "definitions": {},\n  "title": "IBFT extra data",\n  "description": "JSON format used as input to generate an IBFT extra data RLP string",\n  "items": {\n    "$id": "#/address",\n    "type": "string",\n    "title": "Validator address",\n    "description": "The validator node address",\n    "default": "",\n    "examples": [\n      "be068f726a13c8d46c44be6ce9d275600e1735a4",\n      "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n    ],\n    "pattern": "^([0-9a-f]{40})$"\n  }\n}\n'})}),(0,r.jsx)(n.p,{children:"Example IBFT_EXTRA_DATA encoding"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"JSON input",label:"JSON input",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  "be068f726a13c8d46c44be6ce9d275600e1735a4",\n  "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n]\n'})})}),(0,r.jsx)(o.Z,{value:"RLP output",label:"RLP output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"0xf853a00000000000000000000000000000000000000000000000000000000000000000ea94be068f726a13c8d46c44be6ce9d275600e1735a4945ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193808400000000c0\n"})})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(67294),a=t(36905),s=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function T(e){const n=(0,b.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);