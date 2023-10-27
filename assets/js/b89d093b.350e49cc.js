"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27130],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Transaction trace types",sidebar_position:6,description:"Transaction trace types reference",tags:["public networks","private networks"]},i="Transaction trace types",o={unversionedId:"public-networks/reference/trace-types",id:"version-23.7.3/public-networks/reference/trace-types",title:"Transaction trace types",description:"Transaction trace types reference",source:"@site/versioned_docs/version-23.7.3/public-networks/reference/trace-types.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/trace-types",permalink:"/23.7.3/public-networks/reference/trace-types",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/reference/trace-types.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1698373091,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:6,frontMatter:{title:"Transaction trace types",sidebar_position:6,description:"Transaction trace types reference",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"EVM tool options",permalink:"/23.7.3/public-networks/reference/evm-tool"},next:{title:"Projects using Besu",permalink:"/23.7.3/public-networks/reference/projects-using-besu"}},p={},d=[{value:"<code>trace</code>",id:"trace",level:2},{value:"<code>vmTrace</code>",id:"vmtrace",level:2},{value:"<code>stateDiff</code>",id:"statediff",level:2},{value:"Applicable API methods",id:"applicable-api-methods",level:2}],c={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-trace-types"},"Transaction trace types"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/troubleshoot/trace-transactions"},"tracing transactions"),", the trace type options are ",(0,r.kt)("a",{parentName:"p",href:"#trace"},(0,r.kt)("inlineCode",{parentName:"a"},"trace")),", ",(0,r.kt)("a",{parentName:"p",href:"#vmtrace"},(0,r.kt)("inlineCode",{parentName:"a"},"vmTrace")),", and ",(0,r.kt)("a",{parentName:"p",href:"#statediff"},(0,r.kt)("inlineCode",{parentName:"a"},"stateDiff")),"."),(0,r.kt)("h2",{id:"trace"},(0,r.kt)("inlineCode",{parentName:"h2"},"trace")),(0,r.kt)("p",null,"An ordered list of calls to other contracts, excluding precompiled contracts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="trace example"',title:'"trace','example"':!0},'"trace":[\n  {\n    "action":{\n      "callType":"call",\n      "from":"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n      "gas":"0xffadea",\n      "input":"0x",\n      "to":"0x0100000000000000000000000000000000000000",\n      "value":"0x0"\n    },\n    "result":{\n      "gasUsed":"0x1e",\n      "output":"0x"\n    },\n    "subtraces":0,\n    "traceAddress":[\n    ],\n    "type":"call"\n  }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"callType")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the transaction is ",(0,r.kt)("inlineCode",{parentName:"td"},"call")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"create"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the transaction sender.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gas")),(0,r.kt)("td",{parentName:"tr",align:null},"Gas provided by sender.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},"Target of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"Value transferred in the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gasUsed")),(0,r.kt)("td",{parentName:"tr",align:null},"Gas used by the transaction. Includes any refunds of unused gas.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output")),(0,r.kt)("td",{parentName:"tr",align:null},"Return value of the contract call. Contains only the actual value sent by a ",(0,r.kt)("inlineCode",{parentName:"td"},"RETURN")," operation. If a ",(0,r.kt)("inlineCode",{parentName:"td"},"RETURN")," was not executed, the output is empty bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subTraces")),(0,r.kt)("td",{parentName:"tr",align:null},"Traces of contract calls made by the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"traceAddress")),(0,r.kt)("td",{parentName:"tr",align:null},"Tree list address of where the call occurred, address of the parents, and order of the current sub call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the transaction is a ",(0,r.kt)("inlineCode",{parentName:"td"},"CALL")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"CREATE")," series operation.")))),(0,r.kt)("h2",{id:"vmtrace"},(0,r.kt)("inlineCode",{parentName:"h2"},"vmTrace")),(0,r.kt)("p",null,"An ordered list of EVM actions when processing the transaction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vmTrace")," only reports actual data returned from a ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," opcode and does not return the contents of the reserved output space for the call operations. As a result:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vmTrace")," reports ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," when a call operation ends because of a ",(0,r.kt)("inlineCode",{parentName:"li"},"STOP"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HALT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"REVERT"),", running out of instructions, or any exceptional halts."),(0,r.kt)("li",{parentName:"ul"},"When a ",(0,r.kt)("inlineCode",{parentName:"li"},"RETURN")," operation returns data of a different length to the space reserved by the call, ",(0,r.kt)("inlineCode",{parentName:"li"},"vmTrace")," reports only the data passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"RETURN")," operation and does not include pre-existing memory data or trim the returned data.")),(0,r.kt)("p",null,"For out of gas operations, ",(0,r.kt)("inlineCode",{parentName:"p"},"vmTrace")," reports the operation that caused the out of gas exception, including the calculated gas cost. ",(0,r.kt)("inlineCode",{parentName:"p"},"vmTrace")," does not report ",(0,r.kt)("inlineCode",{parentName:"p"},"ex")," values because the operation is not executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="vmTrace example"',title:'"vmTrace','example"':!0},'"vmTrace":{\n  "code":"0x7f3940be4289e4c3587d88c1856cc95352461992db0a584c281226faefe560b3016000527f14c4d2c102bdeb2354bfc3dc96a95e4512cf3a8461e0560e2272dbf884ef3905601052600851",\n  "ops":[\n    {\n    "cost":3,\n    "ex":{\n      "mem":null,\n      "push":[\n        "0x8"\n      ],\n      "store":null,\n      "used":16756175\n    },\n    "pc":72,\n    "sub":null\n    },\n    ...\n  ]\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"Code executed by the EVM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ops")),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence of EVM operations (opcodes) executed in the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cost")),(0,r.kt)("td",{parentName:"tr",align:null},"Gas cost of the opcode. Includes memory expansion costs but not gas refunds. For precompiled contract calls, reports only the actual cost.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ex")),(0,r.kt)("td",{parentName:"tr",align:null},"Executed operations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mem")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory read or written by the operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"push")),(0,r.kt)("td",{parentName:"tr",align:null},"Adjusted stack items. For swap, includes all intermediate values and the result. Otherwise, is the value pushed onto the stack.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"store")),(0,r.kt)("td",{parentName:"tr",align:null},"Account storage written by the operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"used")),(0,r.kt)("td",{parentName:"tr",align:null},"Remaining gas taking into account the all but 1/64th rule for calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pc")),(0,r.kt)("td",{parentName:"tr",align:null},"Program counter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sub")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub call operations.")))),(0,r.kt)("h2",{id:"statediff"},(0,r.kt)("inlineCode",{parentName:"h2"},"stateDiff")),(0,r.kt)("p",null,"State changes in the requested block for each transaction represented as a map of accounts to an object. Besu lists the balance, code, nonce, and storage changes from immediately before the transaction to after the transaction. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"key:value")," pairs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," indicates the field didn\u2019t exist before and now has the specified value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," indicates a deleted value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," has a ",(0,r.kt)("inlineCode",{parentName:"li"},"from")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"to")," value.")),(0,r.kt)("p",null,"An absent value is distinct from zero when creating accounts or clearing storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="stateDiff example"',title:'"stateDiff','example"':!0},'"stateDiff":{\n  "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73":{\n    "balance":{\n      "*":{\n        "from":"0xffffffffffffffffffffffffffffffffc3e12a20b",\n        "to":"0xffffffffffffffffffffffffffffffffc3dc5f091"\n      }\n    },\n    "code":"=",\n    "nonce":{\n      "*":{\n        "from":"0x14",\n        "to":"0x15"\n      }\n    },\n    "storage":{\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"balance")),(0,r.kt)("td",{parentName:"tr",align:null},"Change of balance event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"balance.from")),(0,r.kt)("td",{parentName:"tr",align:null},"Balance before the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"balance.to")),(0,r.kt)("td",{parentName:"tr",align:null},"Balance after the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes to code. None in this example.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonce")),(0,r.kt)("td",{parentName:"tr",align:null},"Change of nonce.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonce.from")),(0,r.kt)("td",{parentName:"tr",align:null},"Nonce before the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nonce.to")),(0,r.kt)("td",{parentName:"tr",align:null},"Nonce after the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"storage")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes to storage. None in this example.")))),(0,r.kt)("h2",{id:"applicable-api-methods"},"Applicable API methods"),(0,r.kt)("p",null,"The trace options ",(0,r.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vmTrace"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"stateDiff")," are available for the following ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/troubleshoot/trace-transactions#ad-hoc-tracing-apis"},"ad-hoc tracing API methods"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_call"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_call"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_callmany"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_callMany"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_rawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_rawTransaction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_replayblocktransactions"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_replayBlockTransactions")))),(0,r.kt)("p",null,"Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," option is available for the following ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/troubleshoot/trace-transactions#transaction-trace-filtering-apis"},"transaction-trace filtering API methods"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_block"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_block"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_filter"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_get"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_get"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/api/#trace_transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"trace_transaction")))))}s.isMDXComponent=!0}}]);