"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[54309],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,i(i({ref:e},p),{},{components:a})):n.createElement(m,i({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10330:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Attestations",sidebar_position:1,description:"Proof of stake attestations"},i="Attestations",s={unversionedId:"public-networks/concepts/proof-of-stake/attestations",id:"version-23.4.0/public-networks/concepts/proof-of-stake/attestations",title:"Attestations",description:"Proof of stake attestations",source:"@site/versioned_docs/version-23.4.0/public-networks/concepts/proof-of-stake/attestations.md",sourceDirName:"public-networks/concepts/proof-of-stake",slug:"/public-networks/concepts/proof-of-stake/attestations",permalink:"/23.4.0/public-networks/concepts/proof-of-stake/attestations",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/concepts/proof-of-stake/attestations.md",tags:[],version:"23.4.0",lastUpdatedAt:1698870831,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:1,frontMatter:{title:"Attestations",sidebar_position:1,description:"Proof of stake attestations"},sidebar:"publicDocSidebar",previous:{title:"Proof of stake consensus",permalink:"/23.4.0/public-networks/concepts/proof-of-stake/"},next:{title:"Data storage formats",permalink:"/23.4.0/public-networks/concepts/data-storage-formats"}},l={},c=[{value:"What are attestations?",id:"what-are-attestations",level:2},{value:"Attestation rewards",id:"attestation-rewards",level:2},{value:"Incorrect attestations",id:"incorrect-attestations",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],p={toc:c};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"attestations"},"Attestations"),(0,o.kt)("p",null,"Ethereum's move to ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/proof-of-stake/"},"proof of stake consensus")," has brought many changes to the way the network operates. An important aspect of proof of stake is the need for validators to provide attestations in a timely and accurate manner. However, missed attestations have become a common occurrence among validators, leading to a loss of rewards and earnings. This page explores the context behind missing attestations."),(0,o.kt)("h2",{id:"what-are-attestations"},"What are attestations?"),(0,o.kt)("p",null,"Every epoch (6.4 minutes), a validator proposes an attestation to the network. The attestation is for a specific slot (every 12 seconds) in the epoch. The attestation votes in favor of the validator's view of the chain, in particular, the most recent justified block and the first block in the current epoch (known as ",(0,o.kt)("em",{parentName:"p"},"source")," and ",(0,o.kt)("em",{parentName:"p"},"target")," checkpoints). This information is collected for all participating validators, enabling the network to reach consensus about the state of the blockchain."),(0,o.kt)("p",null,"Honest nodes have 1/3 ","*"," ",(0,o.kt)("inlineCode",{parentName:"p"},"SECONDS_PER_SLOT")," (4 seconds) from the start of the slot to either receive the block or decide there was no block produced and attest to an \u201cempty\u201d or \u201cskip\u201d slot. Once this time has elapsed, attesters should broadcast their attestation reflecting their local view of the chain."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md#attesting"},"official specification")," for more information about attestations."),(0,o.kt)("h2",{id:"attestation-rewards"},"Attestation rewards"),(0,o.kt)("p",null,"Around 85% of validators' rewards come from making attestations. Although committee and slot assignments for attesting are randomized, every active validator will be selected to make exactly one attestation each epoch."),(0,o.kt)("p",null,"Attestations receive rewards only if they're included in Beacon Chain blocks. An attestation contains three votes. Each vote is eligible for a reward, subject to the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getting attestations included with the correct source checkpoint within 5 slots"),(0,o.kt)("li",{parentName:"ul"},"Getting attestations included with the correct target checkpoint within 32 slots"),(0,o.kt)("li",{parentName:"ul"},"Getting attestations included with the correct head within 1 slot immediately")),(0,o.kt)("p",null,'Each of these duties carries a reward rate, a portion of the entire "weight denominator," or the sum of weighted rewards for each attestation. The remaining weights relate to participating in sync committees and proposing blocks (excluding any tips/MEV, the bulk of block rewards). The following table (from ',(0,o.kt)("a",{parentName:"p",href:"https://eth2book.info/bellatrix/part2/incentives/rewards/"},"Upgrading Ethereum"),") breaks down these weights for cumulative rewards:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Percentage"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TIMELY_SOURCE_WEIGHT")),(0,o.kt)("td",{parentName:"tr",align:null},"21.9%"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"uint64(14)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TIMELY_TARGET_WEIGHT")),(0,o.kt)("td",{parentName:"tr",align:null},"40.6%"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"uint64(26)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TIMELY_HEAD_WEIGHT")),(0,o.kt)("td",{parentName:"tr",align:null},"21.9%"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"uint64(14)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SYNC_REWARD_WEIGHT")),(0,o.kt)("td",{parentName:"tr",align:null},"3.1%"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"uint64(2)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PROPOSER_WEIGHT")),(0,o.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"uint64(8)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"WEIGHT_DENOMINATOR")),(0,o.kt)("td",{parentName:"tr",align:null},"100%"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"uint64(64)"))))),(0,o.kt)("h2",{id:"incorrect-attestations"},"Incorrect attestations"),(0,o.kt)("p",null,"If you have attestations with incorrect head votes, your node might be experiencing slow block imports. However, block producers can also be slow to publish blocks, resulting in a majority of validators getting the head vote wrong. A <100% head vote doesn't necessarily imply a problem with your node."),(0,o.kt)("p",null,"In case of a slowdown, identify whether the issue is with the beacon node or the execution client. Block timing logs can be helpful in determining this."),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/"},"Teku")," as a consensus layer client, identify late blocks (the block didn't get to Teku in time) with the following kind of log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Late Block Import *** Block: c2b911533a8f8d5e699d1a334e0576d2b9aa4caa726bde8b827548b579b47c68 (4765916) proposer 6230 arrival 3475ms, pre-state_retrieved +5ms, processed +185ms, execution_payload_result_received +1436ms, begin_importing +0ms, transaction_prepared +0ms, transaction_committed +0ms, completed +21ms\n")),(0,o.kt)("p",null,"The time of arrival indicates how much time elapsed after the start of the slot before your node received the block. In this example, the block arrived after 3475ms, which is slower than optimal, but still enough time for Teku to create an attestation 4 seconds into the slot."),(0,o.kt)("p",null,"Typically, delayed arrivals occur when the block producer is slow in generating the block. It's also possible that the block was published on time but took longer to propagate to your node through peer-to-peer gossip. If delayed arrivals are a recurring issue, it might be a problem with your node, such as an incorrect system clock, network issues, or a reduction in the number of peers."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Attestations are complicated. Rewards can be impacted by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The contents of a block (how long it takes to compute)."),(0,o.kt)("li",{parentName:"ul"},"The hardware processing that block (execution speed)."),(0,o.kt)("li",{parentName:"ul"},"How long it takes for the block to arrive to Besu from the consensus layer."),(0,o.kt)("li",{parentName:"ul"},"The arrival time of the block from other consensus layer peers. Besu and your consensus layer client have no control over how late into a slot they receive blocks."),(0,o.kt)("li",{parentName:"ul"},"General network latency."),(0,o.kt)("li",{parentName:"ul"},"The status of either Besu or the consensus layer client.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/monitor/"},"Monitoring")," your validator carefully for uptime, execution speed, and a valid consensus layer connection will help you explore attestation performance for your node."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eth2book.info/bellatrix/part2/incentives/rewards/"},"Upgrading Ethereum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.symphonious.net/2022/09/25/understanding-attestation-misses/"},"Understanding Attestation Misses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/DaWh-02HQ4qftum1xdphkg?view#Broadcast-attestation"},"Block production in Ethereum after the Merge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md#attesting"},"Ethereum Consensus Specs"))))}d.isMDXComponent=!0}}]);