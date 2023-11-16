"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[93291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Run Besu from Docker image",sidebar_position:1,description:"Run Hyperledger Besu using the official docker image",tags:["public networks"]},i="Run Besu from a Docker image",p={unversionedId:"public-networks/get-started/install/run-docker-image",id:"public-networks/get-started/install/run-docker-image",title:"Run Besu from Docker image",description:"Run Hyperledger Besu using the official docker image",source:"@site/docs/public-networks/get-started/install/run-docker-image.md",sourceDirName:"public-networks/get-started/install",slug:"/public-networks/get-started/install/run-docker-image",permalink:"/development/public-networks/get-started/install/run-docker-image",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/get-started/install/run-docker-image.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1700173508,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:1,frontMatter:{title:"Run Besu from Docker image",sidebar_position:1,description:"Run Hyperledger Besu using the official docker image",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Installation options",permalink:"/development/public-networks/get-started/install/"},next:{title:"Install binary distribution",permalink:"/development/public-networks/get-started/install/binary-distribution"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Default node for Mainnet",id:"default-node-for-mainnet",level:2},{value:"Expose ports",id:"expose-ports",level:2},{value:"Start Besu",id:"start-besu",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:3},{value:"Run a node on Goerli testnet",id:"run-a-node-on-goerli-testnet",level:3},{value:"Run a node on Ethereum Mainnet",id:"run-a-node-on-ethereum-mainnet",level:3},{value:"Stop Besu and clean up resources",id:"stop-besu-and-clean-up-resources",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-besu-from-a-docker-image"},"Run Besu from a Docker image"),(0,r.kt)("p",null,"Hyperledger Besu provides a Docker image to run a Besu node in a Docker container."),(0,r.kt)("p",null,"Use this Docker image to run a single Besu node without installing Besu."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MacOS or Linux"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Docker image doesn't run on Windows.")))),(0,r.kt)("h2",{id:"default-node-for-mainnet"},"Default node for Mainnet"),(0,r.kt)("p",null,"To run a Besu node in a container connected to the Ethereum Mainnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hyperledger/besu:latest\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/hyperledger/besu/tags"},"https://hub.docker.com/r/hyperledger/besu/tags")," lists the available tags for the image."),(0,r.kt)("p",{parentName:"admonition"},"If you previously pulled ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),", Docker runs the cached version."),(0,r.kt)("p",{parentName:"admonition"},"To ensure your image is up to date, pull the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version again using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull hyperledger/besu:latest"),".")),(0,r.kt)("h2",{id:"expose-ports"},"Expose ports"),(0,r.kt)("p",null,"Expose ports for P2P discovery, GraphQL, metrics, and HTTP and WebSocket JSON-RPC. You need to expose the ports to use the default ports or the ports specified using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-port")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#metrics-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--metrics-port")),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#graphql-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--graphql-http-port")),", and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#metrics-push-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--metrics-push-port"))," options."),(0,r.kt)("p",null,"To run Besu exposing local ports for access:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p <localportJSON-RPC>:8545 -p <localportWS>:8546 -p <localportP2P>:30303 hyperledger/besu:latest --rpc-http-enabled --rpc-ws-enabled\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The examples on this page expose TCP ports only. To expose UDP ports, specify ",(0,r.kt)("inlineCode",{parentName:"p"},"/udp")," at the end of the argument for the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," Docker subcommand option:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p <port>:<port>/udp\n")),(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose"},(0,r.kt)("inlineCode",{parentName:"a"},"docker run -p")," documentation"),".")),(0,r.kt)("p",null,"To enable JSON-RPC HTTP calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8545")," and P2P discovery on ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:13001"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8545:8545 -p 13001:30303 hyperledger/besu:latest --rpc-http-enabled\n")),(0,r.kt)("h2",{id:"start-besu"},"Start Besu"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Don't mount a volume at the default data path (",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/besu"),"). Mounting a volume at the default data path interferes with the operation of Besu and prevents Besu from safely launching."),(0,r.kt)("p",{parentName:"admonition"},"To run a node that maintains the node state (key and database), ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," must be set to a location other than ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/besu")," and a storage volume mounted at that location."),(0,r.kt)("p",{parentName:"admonition"},"When running in a Docker container, ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat"},(0,r.kt)("inlineCode",{parentName:"a"},"--nat-method"))," must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTO")," (default). Don't set ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat"},(0,r.kt)("inlineCode",{parentName:"a"},"--nat-method"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},"NONE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"UPNP"),".")),(0,r.kt)("p",null,"You can specify ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#specify-options"},"Besu environment variables")," with the Docker image instead of the command line options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},"docker run -p 30303:30303 -p 8545:8545 -e BESU_RPC_HTTP_ENABLED=true -e BESU_NETWORK=goerli hyperledger/besu:latest\n")),(0,r.kt)("admonition",{title:"Unsupported address type exception",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When running Besu from a Docker image, you might get the following exception:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Unsupported address type exception when connecting to peer {}, this is likely due to ipv6 not being enabled at runtime.\n")),(0,r.kt)("p",{parentName:"admonition"},"This happens when the IPv6 support in Docker is disabled while connecting to an IPv6 peer, preventing outbound communication. IPv6 is disabled by default in Docker."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/daemon/ipv6/"},"Enable IPv6 support in Docker")," to allow outbound IPv6 traffic and allow connection with IPv6 peers.")),(0,r.kt)("h3",{id:"run-a-node-for-testing"},"Run a node for testing"),(0,r.kt)("p",null,"To run a node that mines blocks at a rate suitable for testing purposes with WebSocket enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8546:8546 --mount type=bind,source=/<myvolume/besu/testnode>,target=/var/lib/besu hyperledger/besu:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-ws-enabled --network=dev --data-path=/var/lib/besu\n")),(0,r.kt)("h3",{id:"run-a-node-on-goerli-testnet"},"Run a node on Goerli testnet"),(0,r.kt)("p",null,"To run a node on Goerli:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 30303:30303 --mount type=bind,source=/<myvolume/besu/goerli>,target=/var/lib/besu hyperledger/besu:latest --network=goerli --data-path=/var/lib/besu\n")),(0,r.kt)("h3",{id:"run-a-node-on-ethereum-mainnet"},"Run a node on Ethereum Mainnet"),(0,r.kt)("p",null,"To run a node on Ethereum Mainnet with the HTTP JSON-RPC service enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8545:8545 --mount type=bind,source=/<myvolume/besu/mainnet>,target=/var/lib/besu  -p 30303:30303 hyperledger/besu:latest --rpc-http-enabled --data-path=/var/lib/besu\n")),(0,r.kt)("h2",{id:"stop-besu-and-clean-up-resources"},"Stop Besu and clean up resources"),(0,r.kt)("p",null,"When done running nodes, you can shut down the node container without deleting resources or you can delete the container after stopping it. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker container ls")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker volume ls")," to get the container and volume names."),(0,r.kt)("p",null,"To stop a container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop <container-name>\n")),(0,r.kt)("p",null,"To delete a container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm <container-name>\n")))}c.isMDXComponent=!0}}]);