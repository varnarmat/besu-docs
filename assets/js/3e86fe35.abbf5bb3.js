"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[48570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var g=2;g<i;g++)a[g]=n[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var o=n(87462),r=(n(67294),n(3905));const i={title:"Configure logging",sidebar_position:3,description:"Hyperledger Besu log level setting and log formatting",path:"blob/master/besu/src/main/resources/",source:"log4j2.xml",tags:["public networks","private networks"]},a="Use logging",l={unversionedId:"public-networks/how-to/monitor/logging",id:"public-networks/how-to/monitor/logging",title:"Configure logging",description:"Hyperledger Besu log level setting and log formatting",source:"@site/docs/public-networks/how-to/monitor/logging.md",sourceDirName:"public-networks/how-to/monitor",slug:"/public-networks/how-to/monitor/logging",permalink:"/development/public-networks/how-to/monitor/logging",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/monitor/logging.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1698422478,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:3,frontMatter:{title:"Configure logging",sidebar_position:3,description:"Hyperledger Besu log level setting and log formatting",path:"blob/master/besu/src/main/resources/",source:"log4j2.xml",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Understand metrics",permalink:"/development/public-networks/how-to/monitor/understand-metrics"},next:{title:"High availability of JSON-RPC and RPC Pub/Sub APIs",permalink:"/development/public-networks/how-to/configure-ha/"}},s={},g=[{value:"Basic logging",id:"basic-logging",level:2},{value:"Advanced logging",id:"advanced-logging",level:2},{value:"Log rotation",id:"log-rotation",level:3}],p={toc:g};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-logging"},"Use logging"),(0,r.kt)("p",null,"Hyperledger Besu uses Log4J2 for logging and provides two methods to configure logging behavior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-logging"},"Basic")," - Changes the log level."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#advanced-logging"},"Advanced")," - Configures the output and format of the logs.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart"},"Quorum Developer Quickstart")," provides an ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/monitor/elastic-stack"},"example implementation using Elastic Stack")," for log management."),(0,r.kt)("h2",{id:"basic-logging"},"Basic logging"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#logging"},(0,r.kt)("inlineCode",{parentName:"a"},"--logging"))," command line option to specify logging verbosity. The ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#logging"},(0,r.kt)("inlineCode",{parentName:"a"},"--logging"))," option changes the volume of events displayed in the log. Valid log levels are ",(0,r.kt)("inlineCode",{parentName:"p"},"OFF"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),". The default level is ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,r.kt)("p",null,"For most use cases, the basic method provides enough configurability."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#admin_changeloglevel"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_changeLogLevel"))," API method to change the log level while Besu is running.")),(0,r.kt)("h2",{id:"advanced-logging"},"Advanced logging"),(0,r.kt)("p",null,"You can provide your own logging configuration using the standard Log4J2 configuration mechanisms. For example, the following Log4J2 configuration is the same as the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/besu/src/main/resources/log4j2.xml"},"default configuration")," except for the exclusion of logging of stack traces for exceptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="debug.xml"',title:'"debug.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="INFO">\n  <Properties>\n    <Property name="root.log.level">INFO</Property>\n  </Properties>\n\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT">\n      <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSSZZZ} | %t | %-5level | %c{1} | %msg %throwable{short.message}%n" />\n    </Console>\n  </Appenders>\n  <Loggers>\n    <Root level="${sys:root.log.level}">\n      <AppenderRef ref="Console" />\n    </Root>\n  </Loggers>\n</Configuration>\n')),(0,r.kt)("p",null,"To use your custom configuration, set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG4J_CONFIGURATION_FILE")," to the location of your configuration file."),(0,r.kt)("p",null,"If you have more specific requirements, you can create your own ",(0,r.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/manual/configuration.html"},"log4j2 configuration"),"."),(0,r.kt)("p",null,"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."),(0,r.kt)("p",null,"To set the debug logging and start Besu connected to the Goerli testnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"LOG4J_CONFIGURATION_FILE=./debug.xml besu --network=goerli\n")),(0,r.kt)("h3",{id:"log-rotation"},"Log rotation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart"},"Quorum Developer Quickstart")," logging configuration defines a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/besu/config/besu/log-config.xml"},"log rotation to restrict the size of the log files"),"."))}c.isMDXComponent=!0}}]);