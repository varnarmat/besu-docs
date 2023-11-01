"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[49100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"Hyperledger Besu API",tags:["private networks"]},i="Access the Hyperledger Besu API",p={unversionedId:"public-networks/how-to/use-besu-api/index",id:"version-23.4.0/public-networks/how-to/use-besu-api/index",title:"Access the Hyperledger Besu API",description:"Hyperledger Besu API",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/index.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/",permalink:"/23.4.0/public-networks/how-to/use-besu-api/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/index.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1698870831,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{description:"Hyperledger Besu API",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Migrate to Besu",permalink:"/23.4.0/public-networks/get-started/migrate-to-besu"},next:{title:"Use JSON-RPC over HTTP, WS, and IPC",permalink:"/23.4.0/public-networks/how-to/use-besu-api/json-rpc"}},s={},l=[{value:"Enable API access",id:"enable-api-access",level:2},{value:"Service hosts",id:"service-hosts",level:2},{value:"Service ports",id:"service-ports",level:2},{value:"Socket path",id:"socket-path",level:2},{value:"Host allowlist",id:"host-allowlist",level:2},{value:"Not supported by Besu",id:"not-supported-by-besu",level:2},{value:"Account management",id:"account-management",level:3},{value:"Protocols",id:"protocols",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"access-the-hyperledger-besu-api"},"Access the Hyperledger Besu API"),(0,o.kt)("p",null,"Access the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/"},"Hyperledger Besu API")," using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC over HTTP, WebSocket, or IPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub over WebSockets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/how-to/use-besu-api/graphql"},"GraphQL over HTTP"),".")),(0,o.kt)("p",null,"The following sections provide information about JSON-RPC, RPC Pub/Sub, and GraphQL."),(0,o.kt)("h2",{id:"enable-api-access"},"Enable API access"),(0,o.kt)("p",null,"To enable API access, use the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled")),", ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--ws-http-enabled")),", ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#graphql-http-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--graphql-http-enabled")),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-enabled")," options."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-enabled")," is an early access option.")),(0,o.kt)("h2",{id:"service-hosts"},"Service hosts"),(0,o.kt)("p",null,"To specify the host the API service listens on, use the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-host")),", ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-ws-host")),", and ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#graphql-http-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--graphql-http-host"))," options. The default host is ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,o.kt)("p",null,"To allow remote connections, set the host to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Setting the host to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," exposes the API service connection on your node to any remote connection. In a production environment, ensure you use a firewall to avoid exposing your node to the internet.")),(0,o.kt)("h2",{id:"service-ports"},"Service ports"),(0,o.kt)("p",null,"To specify the port the API service listens on, use the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),", ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-ws-port")),", and ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#graphql-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--graphql-http-port"))," options."),(0,o.kt)("p",null,"The default ports are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"8545 for JSON-RPC over HTTP."),(0,o.kt)("li",{parentName:"ul"},"8546 for JSON-RPC over WebSocket."),(0,o.kt)("li",{parentName:"ul"},"8547 for GraphQL over HTTP.")),(0,o.kt)("p",null,"Ports must be ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/connect/configure-ports"},"exposed appropriately"),"."),(0,o.kt)("h2",{id:"socket-path"},"Socket path"),(0,o.kt)("p",null,"To specify the socket path for the IPC socket, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-path")," option. The default path is ",(0,o.kt)("inlineCode",{parentName:"p"},"besu.ipc")," in the Besu data directory."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-path")," is an early access option.")),(0,o.kt)("h2",{id:"host-allowlist"},"Host allowlist"),(0,o.kt)("p",null,"To prevent DNS rebinding attacks, Besu checks incoming HTTP request host headers, WebSocket connections, and GraphQL requests. Besu accepts requests only when hostnames specified using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#host-allowlist"},(0,o.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," option matches the request host headers. By default, Besu accepts requests and connections from ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This isn't a permissioning feature. To restrict access to the API, we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate"},"Besu authentication mechanism")," with username and password authentication or JWT public key authentication.")),(0,o.kt)("p",null,"If your application publishes RPC ports, specify the hostnames when starting Besu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"besu --host-allowlist=example.com\n")),(0,o.kt)("p",null,"Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"--host-allowlist")," to effectively disable host protection."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"--host-allowlist")," is not recommended for production code.")),(0,o.kt)("h2",{id:"not-supported-by-besu"},"Not supported by Besu"),(0,o.kt)("h3",{id:"account-management"},"Account management"),(0,o.kt)("p",null,"Account management relies on private key management in the client, which is not supported by Besu."),(0,o.kt)("p",null,"To send signed transactions, use ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#eth_sendrawtransaction"},(0,o.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," is not implemented."),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/send-transactions#use-wallets-for-key-management"},"account management"),", use third-party wallets."),(0,o.kt)("h3",{id:"protocols"},"Protocols"),(0,o.kt)("p",null,"Besu does not support the Whisper and Swarm protocols."))}u.isMDXComponent=!0}}]);