"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=o.createContext({}),p=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(r.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,u=d["".concat(r,".").concat(f)]||d[f]||m[f]||a;return t?o.createElement(u,s(s({ref:n},c),{},{components:t})):o.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=f;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const a={title:"Use local permissioning",sidebar_position:1,description:"Hyperledger Besu local permissioning",tags:["private networks"]},s="Use local permissioning",l={unversionedId:"private-networks/how-to/use-permissioning/local",id:"private-networks/how-to/use-permissioning/local",title:"Use local permissioning",description:"Hyperledger Besu local permissioning",source:"@site/docs/private-networks/how-to/use-permissioning/local.md",sourceDirName:"private-networks/how-to/use-permissioning",slug:"/private-networks/how-to/use-permissioning/local",permalink:"/development/private-networks/how-to/use-permissioning/local",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-permissioning/local.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1698373091,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{title:"Use local permissioning",sidebar_position:1,description:"Hyperledger Besu local permissioning",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Performance best practices",permalink:"/development/private-networks/how-to/use-privacy/performance-best-practices"},next:{title:"Use onchain permissioning",permalink:"/development/private-networks/how-to/use-permissioning/onchain"}},r={},p=[{value:"Node allowlisting",id:"node-allowlisting",level:2},{value:"Specify bootnodes in the allowlist",id:"specify-bootnodes-in-the-allowlist",level:3},{value:"Enable node allowlisting",id:"enable-node-allowlisting",level:3},{value:"Update the node allowlist",id:"update-the-node-allowlist",level:3},{value:"View the node allowlist",id:"view-the-node-allowlist",level:3},{value:"Account allowlisting",id:"account-allowlisting",level:2},{value:"Enable account allowlisting",id:"enable-account-allowlisting",level:3},{value:"Update the account allowlist",id:"update-the-account-allowlist",level:3},{value:"View the account allowlist",id:"view-the-account-allowlist",level:3},{value:"Permissions configuration file",id:"permissions-configuration-file",level:2}],c={toc:p};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-local-permissioning"},"Use local permissioning"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/permissioning/#local"},"Local permissioning")," supports node and account allowlisting."),(0,i.kt)("h2",{id:"node-allowlisting"},"Node allowlisting"),(0,i.kt)("p",null,"You can allow access to specified nodes in the ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file"),". With node allowlisting enabled, communication is only between nodes in the allowlist."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Node allowlists ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#domain-name-support"},"support domain names")," in enode URLs as an early access feature. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--Xdns-enabled")," option to enable domain name support."),(0,i.kt)("p",{parentName:"admonition"},"If using Kubernetes, enable domain name support and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--Xdns-update-enabled")," option to ensure that Besu can connect to a container after being restarted, even if the IP address of the container changes.")),(0,i.kt)("admonition",{title:"Nodes allowlist in the permissions configuration file",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},'nodes-allowlist=["enode://6f8a80d14311c39f35f516fa664deaaaa13e85b2f7493f37f6144d86991ec012937307647bd3b9a82abe2974e1407241d54947bbb39763a4cac9f77166ad92a0@192.168.0.9:4567","enode://6f8a80d14311c39f35f516fa664deaaaa13e85b2f7493f37f6144d86991ec012937307647bd3b9a82abe2974e1407241d54947bbb39763a4cac9f77166ad92a0@192.169.0.9:4568"]'))),(0,i.kt)("p",null,"Node allowlisting is at the node level. That is, each node in the network has a ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file")," file in the ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-path"},"data directory")," for the node."),(0,i.kt)("p",null,"Local permissioning doesn't check that the node using the permissions configuration file is listed in the allowlist, it only checks that the remote end of the connection is in the allowlist. Use ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/permissioning/onchain"},"onchain permissioning")," if you need to check both ends of the connection."),(0,i.kt)("h3",{id:"specify-bootnodes-in-the-allowlist"},"Specify bootnodes in the allowlist"),(0,i.kt)("p",null,"The nodes permissions list must include the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/bootnodes"},"bootnodes")," or Hyperledger Besu doesn't start with node permissions enabled."),(0,i.kt)("p",null,"If you start Besu with specified bootnodes and have node permissioning enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'--bootnodes="enode://7e4ef30e9ec683f26ad76ffca5b5148fa7a6575f4cfad4eb0f52f9c3d8335f4a9b6f9e66fcc73ef95ed7a2a52784d4f372e7750ac8ae0b544309a5b391a23dd7@127.0.0.1:30303","enode://2feb33b3c6c4a8f77d84a5ce44954e83e5f163e7a65f7f7a7fec499ceb0ddd76a46ef635408c513d64c076470eac86b7f2c8ae4fcd112cb28ce82c0d64ec2c94@127.0.0.1:30304","enode://7b61d5ee4b44335873e6912cb5dd3e3877c860ba21417c9b9ef1f7e500a82213737d4b269046d0669fb2299a234ca03443f25fe5f706b693b3669e5c92478ade@127.0.0.1:30305"\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes-allowlist")," in the ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file")," must contain the specified bootnodes."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your node has two different IP addresses for ingress and egress (for example, if you use Kubernetes implementing a load balancer for ingress and a NAT gateway IP address for egress), add both addresses to the allowlist, using the same public key for each IP address. This will allow the node to connect.")),(0,i.kt)("h3",{id:"enable-node-allowlisting"},"Enable node allowlisting"),(0,i.kt)("p",null,"To enable node allowlisting, specify the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-nodes-config-file-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-config-file-enabled"))," option when starting Besu."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PERM")," API methods are not enabled by default. To enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"PERM")," API methods, use the ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-api"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," options."),(0,i.kt)("h3",{id:"update-the-node-allowlist"},"Update the node allowlist"),(0,i.kt)("p",null,"To update the nodes allowlist while the node is running, use the following JSON-RPC API methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#perm_addnodestoallowlist"},"perm_addNodesToAllowlist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#perm_removenodesfromallowlist"},"perm_removeNodesFromAllowlist"))),(0,i.kt)("p",null,"You can also update the ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},(0,i.kt)("inlineCode",{parentName:"a"},"permissions_config.toml"))," file directly and then update the allowlist using the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#perm_reloadpermissionsfromfile"},(0,i.kt)("inlineCode",{parentName:"a"},"perm_reloadPermissionsFromFile"))," method."),(0,i.kt)("p",null,"Updates to the permissions configuration file persist across node restarts."),(0,i.kt)("h3",{id:"view-the-node-allowlist"},"View the node allowlist"),(0,i.kt)("p",null,"To view the nodes allowlist, use the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#perm_getnodesallowlist"},"perm_getNodesAllowlist")," method."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each node has a ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file"),", which means nodes can have different nodes allowlists. This means nodes might be participating in the network that are not on the allowlist of other nodes in the network. We recommend each node in the network has the same nodes allowlist.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"Example of different node allowlists",Example:!0,of:!0,different:!0,node:!0,allowlists:!0},"\nNode 1 Allowlist = [Node 2, Node 3]\n\nNode 2 Allowlist = [Node 3, Node 5]\n\nNode 5 is participating in the same network as Node 1 even though Node 1 does not have Node 5\non their allowlist.\n")),(0,i.kt)("h2",{id:"account-allowlisting"},"Account allowlisting"),(0,i.kt)("p",null,"You can specify accounts in the accounts allowlist in the ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file"),". A node with account permissioning accepts transactions only from accounts in the accounts allowlist."),(0,i.kt)("admonition",{title:"Accounts allowlist in the permissions configuration file",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},'accounts-allowlist=["0x0000000000000000000000000000000000000009"]'))),(0,i.kt)("p",null,"Account allowlisting is at the node level. That is, each node in the network has a ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file")," in the ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-path"},"data directory")," for the node."),(0,i.kt)("admonition",{title:"Using account permissioning and privacy",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Account permissioning is incompatible with ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/use-privacy/sign-pmts"},"random key signing")," for ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transactions"),"."),(0,i.kt)("p",{parentName:"admonition"},"If using account permissioning and privacy, a signing key must be specified using the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," command line option and the corresponding public key included in the accounts allowlist.")),(0,i.kt)("p",null,"Transaction validation against the accounts allowlist occurs at the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Submitted by JSON-RPC API method ",(0,i.kt)("a",{parentName:"li",href:"/development/public-networks/reference/api/#eth_sendrawtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction"))),(0,i.kt)("li",{parentName:"ul"},"Received via propagation from another node"),(0,i.kt)("li",{parentName:"ul"},"Added to a block by a mining node")),(0,i.kt)("p",null,"After adding transactions to a block, the transactions are not validated against the allowlist when received by another node. That is, a node can synchronize and add blocks containing transactions from accounts that are not on the accounts allowlist of that node."),(0,i.kt)("p",null,"The following diagram illustrates applying local and onchain permissioning rules."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Permissioning Flow",src:t(517).Z,width:"1656",height:"1134"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example of different account allowlists"',title:'"Example',of:!0,different:!0,account:!0,'allowlists"':!0},"\nNode 1 Allowlist = [Account A, Account B]\n\nNode 2 Allowlist = [Account B, Account C]\n\nMining Node Allowlist = [Account A, Account B]\n\nAccount A submits a transaction on Node 1. Node 1 validates and propagates the transaction. The\nMining Node receives the transaction, validates it is from an account in the Mining Node\naccounts allowlist, and includes the transaction in the block. Node 2 receives and adds\nthe block created by the Mining Node.\n\nNode 2 now has a transaction in the blockchain from Account A, which is not on the accounts\nallowlist for Node 2.\n\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each node has a ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},"permissions configuration file")," which means nodes in the network can have different accounts allowlists. This means a transaction can be successfully submitted by Node A from an account in the Node A allowlist but rejected by Node B to which it's propagated if the account is not in the Node B allowlist. We recommend each node in the network has the same accounts allowlist.")),(0,i.kt)("h3",{id:"enable-account-allowlisting"},"Enable account allowlisting"),(0,i.kt)("p",null,"To enable account allowlisting, specify the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-accounts-config-file-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-config-file-enabled"))," option when starting Besu."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PERM")," API methods are not enabled by default. To enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"PERM")," API methods, use the ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-api"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," options."),(0,i.kt)("h3",{id:"update-the-account-allowlist"},"Update the account allowlist"),(0,i.kt)("p",null,"To update the accounts allowlist when the node is running, use the JSON-RPC API methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#perm_addaccountstoallowlist"},(0,i.kt)("inlineCode",{parentName:"a"},"perm_addAccountsToAllowlist"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#perm_removeaccountsfromallowlist"},(0,i.kt)("inlineCode",{parentName:"a"},"perm_removeAccountsFromAllowlist")),".")),(0,i.kt)("p",null,"You can also update the ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},(0,i.kt)("inlineCode",{parentName:"a"},"permissions_config.toml"))," file directly and use the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#perm_reloadpermissionsfromfile"},(0,i.kt)("inlineCode",{parentName:"a"},"perm_reloadPermissionsFromFile"))," method to update the allowlists."),(0,i.kt)("p",null,"Updates to the permissions configuration file persist across node restarts."),(0,i.kt)("h3",{id:"view-the-account-allowlist"},"View the account allowlist"),(0,i.kt)("p",null,"To view the accounts allowlist, use the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#perm_getaccountsallowlist"},(0,i.kt)("inlineCode",{parentName:"a"},"perm_getAccountsAllowlist"))," method."),(0,i.kt)("h2",{id:"permissions-configuration-file"},"Permissions configuration file"),(0,i.kt)("p",null,"The permissions configuration file contains the nodes and accounts allowlists. If the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-accounts-config-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-config-file"))," and ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-nodes-config-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-config-file"))," options are not specified, the name of the permissions configuration file must be ",(0,i.kt)("a",{parentName:"p",href:"#permissions-configuration-file"},(0,i.kt)("inlineCode",{parentName:"a"},"permissions_config.toml"))," and must be in the ",(0,i.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-path"},"data directory")," for the node."),(0,i.kt)("p",null,"You can specify the accounts and nodes allowlists in the same file or in separate files for accounts and nodes."),(0,i.kt)("p",null,"To specify a permissions configuration file (or separate files for accounts and nodes) in any location, use the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-accounts-config-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-config-file"))," and ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-nodes-config-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-config-file"))," options."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-accounts-config-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-config-file"))," and ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#permissions-nodes-config-file"},(0,i.kt)("inlineCode",{parentName:"a"},"permissions-nodes-config-file"))," options are not used when running Besu from the ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/get-started/install/run-docker-image"},"Docker image"),". Use a bind mount to ",(0,i.kt)("a",{parentName:"p",href:"/development/private-networks/get-started/install/run-docker-image"},"specify a permissions configuration file with Docker"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Sample permissions configuration file"',title:'"Sample',permissions:!0,configuration:!0,'file"':!0},'accounts-allowlist=["0xb9b81ee349c3807e46bc71aa2632203c5b462032", "0xb9b81ee349c3807e46bc71aa2632203c5b462034"]\n\nnodes-allowlist=["enode://7e4ef30e9ec683f26ad76ffca5b5148fa7a6575f4cfad4eb0f52f9c3d8335f4a9b6f9e66fcc73ef95ed7a2a52784d4f372e7750ac8ae0b544309a5b391a23dd7@127.0.0.1:30303","enode://2feb33b3c6c4a8f77d84a5ce44954e83e5f163e7a65f7f7a7fec499ceb0ddd76a46ef635408c513d64c076470eac86b7f2c8ae4fcd112cb28ce82c0d64ec2c94@127.0.0.1:30304","enode://7b61d5ee4b44335873e6912cb5dd3e3877c860ba21417c9b9ef1f7e500a82213737d4b269046d0669fb2299a234ca03443f25fe5f706b693b3669e5c92478ade@127.0.0.1:30305"]\n')))}d.isMDXComponent=!0},517:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/PermissioningFlow-083dd4871a10fb66a7bf7a0e7de03a1d.png"}}]);