"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[9735],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=n,k=c["".concat(p,".").concat(f)]||c[f]||u[f]||o;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={title:"Backup and restore",description:"Backing up and restoring Besu",sidebar_position:7},i="Backup and restore Besu",s={unversionedId:"private-networks/how-to/backup",id:"version-23.4.0/private-networks/how-to/backup",title:"Backup and restore",description:"Backing up and restoring Besu",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/backup.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/backup",permalink:"/23.4.0/private-networks/how-to/backup",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/backup.md",tags:[],version:"23.4.0",lastUpdatedAt:1700173508,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:7,frontMatter:{title:"Backup and restore",description:"Backing up and restoring Besu",sidebar_position:7},sidebar:"privateDocSidebar",previous:{title:"Use Ethstats network monitor",permalink:"/23.4.0/private-networks/how-to/deploy/ethstats"},next:{title:"Upgrade",permalink:"/23.4.0/private-networks/how-to/upgrade"}},p={},l=[{value:"Genesis file",id:"genesis-file",level:2},{value:"Data backups",id:"data-backups",level:2},{value:"Data restores",id:"data-restores",level:2},{value:"Corrupted data",id:"corrupted-data",level:2},{value:"Find peers after restarting",id:"find-peers-after-restarting",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backup-and-restore-besu"},"Backup and restore Besu"),(0,n.kt)("p",null,"In a decentralized blockchain, data replicates between nodes so it's not lost. But backing up configuration and data ensures a smoother recovery from corrupted data or other failures."),(0,n.kt)("h2",{id:"genesis-file"},"Genesis file"),(0,n.kt)("p",null,"The genesis file for a network must be accessible on every node. We recommend storing the genesis file under source control."),(0,n.kt)("h2",{id:"data-backups"},"Data backups"),(0,n.kt)("p",null,"If installed locally, the default data location is the Besu installation directory."),(0,n.kt)("p",null,"We recommend mounting a ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/get-started/install/run-docker-image"},"separate volume to store data"),". Use the ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#data-path"},(0,n.kt)("inlineCode",{parentName:"a"},"--data-path"))," command line option to pass the path to Besu."),(0,n.kt)("p",null,"The default data location is the Besu installation directory, or ",(0,n.kt)("inlineCode",{parentName:"p"},"/opt/besu/database")," if using the ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/get-started/install/run-docker-image"},"Besu Docker image"),"."),(0,n.kt)("p",null,"Having some data reduces the time to synchronize a new node. You can perform periodic backups of the data directory and send the data to your preferred backup mechanism. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"cron")," job and ",(0,n.kt)("inlineCode",{parentName:"p"},"rsync"),", archives to the cloud such as s3, or ",(0,n.kt)("inlineCode",{parentName:"p"},"tar.gz")," archives."),(0,n.kt)("h2",{id:"data-restores"},"Data restores"),(0,n.kt)("p",null,"To restore data:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the node is running, stop the node."),(0,n.kt)("li",{parentName:"ol"},"If required, move the data directory to another location for analysis."),(0,n.kt)("li",{parentName:"ol"},"Restore the data from your last known good backup to the same directory."),(0,n.kt)("li",{parentName:"ol"},"Ensure user permissions are valid so you can read from and write to the data directory."),(0,n.kt)("li",{parentName:"ol"},"Restart the node.")),(0,n.kt)("h2",{id:"corrupted-data"},"Corrupted data"),(0,n.kt)("p",null,"If log messages signify a corrupt database, the cleanest way to recover is:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop the node."),(0,n.kt)("li",{parentName:"ol"},"Restore the data from a ",(0,n.kt)("a",{parentName:"li",href:"#data-backups"},"previous backup"),"."),(0,n.kt)("li",{parentName:"ol"},"Restart the node.")),(0,n.kt)("h2",{id:"find-peers-after-restarting"},"Find peers after restarting"),(0,n.kt)("p",null,"The process for finding peers after restarting is the same as for ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/upgrade-node#find-peers-on-restarting"},"finding peers after upgrading and restarting"),"."))}u.isMDXComponent=!0}}]);