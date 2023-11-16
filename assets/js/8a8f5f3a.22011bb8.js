"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[11022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Use Java Flight Recorder",sidebar_position:3,description:"Using Java Flight Recorder with Hyperledger Besu",tags:["public networks","private networks"]},i="Use Java Flight Recorder",s={unversionedId:"public-networks/how-to/configure-jvm/java-flight-recorder",id:"version-23.7.1/public-networks/how-to/configure-jvm/java-flight-recorder",title:"Use Java Flight Recorder",description:"Using Java Flight Recorder with Hyperledger Besu",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/configure-jvm/java-flight-recorder.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/java-flight-recorder",permalink:"/23.7.1/public-networks/how-to/configure-jvm/java-flight-recorder",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/configure-jvm/java-flight-recorder.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"},{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1700173508,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:3,frontMatter:{title:"Use Java Flight Recorder",sidebar_position:3,description:"Using Java Flight Recorder with Hyperledger Besu",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Manage JVM memory",permalink:"/23.7.1/public-networks/how-to/configure-jvm/manage-memory"},next:{title:"Use Truffle",permalink:"/23.7.1/public-networks/how-to/develop/truffle"}},l={},c=[{value:"Enable Java Flight Recorder",id:"enable-java-flight-recorder",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-java-flight-recorder"},"Use Java Flight Recorder"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javacomponents/jmc-5-4/jfr-runtime-guide/about.htm#JFRUH170"},"Java Flight Recorder (JFR)")," is a monitoring tool that collects information about the Java Virtual Machine (JVM) when Hyperledger Besu is running. Use the JFR as a tool to analyze Besu performance."),(0,n.kt)("h2",{id:"enable-java-flight-recorder"},"Enable Java Flight Recorder"),(0,n.kt)("p",null,"To enable JFR, set ",(0,n.kt)("inlineCode",{parentName:"p"},"BESU_OPTS")," to the JFR tags as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export BESU_OPTS=-XX:StartFlightRecording=disk=true,delay=15s,dumponexit=true,\\\nfilename=/tmp/recording.jfr,maxsize=1024m,maxage=1d,\\\nsettings=profile,path-to-gc-roots=true\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When recording, cleanly exiting Besu results in better data. If not possible to cleanly exit, the file may be missing some information not flushed to disk.")),(0,n.kt)("p",null,"Inspect the file written to ",(0,n.kt)("inlineCode",{parentName:"p"},"/tmp/recording.jfr")," with tools such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javacomponents/jmc-5-5/jmc-user-guide/intro.htm#JMCCI109"},"Mission Control"),"."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"If providing the output file to ",(0,n.kt)("a",{parentName:"p",href:"https://consensys.net/quorum/support/"},"ConsenSys Quorum support"),", be aware that while JFR files don't contain secrets such as private keys, some details about the user configuration can be inferred from the JFR output.")))}d.isMDXComponent=!0}}]);