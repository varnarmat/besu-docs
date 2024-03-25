"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[55560],{57297:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=s(85893),l=s(11151),n=s(74866),a=s(85162);const i={title:"Peer-to-peer TLS",sidebar_position:2,description:"Configure P2P TLS communication",tags:["private networks"]},o="Configure P2P TLS",c={id:"private-networks/how-to/configure/tls/p2p",title:"Peer-to-peer TLS",description:"Configure P2P TLS communication",source:"@site/versioned_docs/version-24.3.0/private-networks/how-to/configure/tls/p2p.md",sourceDirName:"private-networks/how-to/configure/tls",slug:"/private-networks/how-to/configure/tls/p2p",permalink:"/private-networks/how-to/configure/tls/p2p",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/private-networks/how-to/configure/tls/p2p.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1711401911,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:2,frontMatter:{title:"Peer-to-peer TLS",sidebar_position:2,description:"Configure P2P TLS communication",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Client and server TLS",permalink:"/private-networks/how-to/configure/tls/client-and-server"},next:{title:"Block proposal permissioning",permalink:"/private-networks/how-to/configure/block-proposal-permissioning"}},d={},p=[{value:"Configure P2P TLS",id:"configure-p2p-tls-1",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"<code>Xp2p-tls-crl-file</code>",id:"xp2p-tls-crl-file",level:3},{value:"<code>Xp2p-tls-enabled</code>",id:"xp2p-tls-enabled",level:3},{value:"<code>Xp2p-tls-keystore-file</code>",id:"xp2p-tls-keystore-file",level:3},{value:"<code>Xp2p-tls-keystore-password-file</code>",id:"xp2p-tls-keystore-password-file",level:3},{value:"<code>Xp2p-tls-keystore-type</code>",id:"xp2p-tls-keystore-type",level:3},{value:"<code>Xp2p-tls-truststore-file</code>",id:"xp2p-tls-truststore-file",level:3},{value:"<code>Xp2p-tls-truststore-password-file</code>",id:"xp2p-tls-truststore-password-file",level:3},{value:"<code>Xp2p-tls-truststore-type</code>",id:"xp2p-tls-truststore-type",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"configure-p2p-tls",children:"Configure P2P TLS"}),"\n",(0,r.jsx)(t.p,{children:"You can configure TLS to secure the P2P communication between nodes by ensuring only authorized nodes can communicate with each other. Use certificates issued by a trusted authority to connect authorized nodes in the network."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"P2P TLS is an early access feature, and functionality and options may be updated between releases."})}),"\n",(0,r.jsx)(t.p,{children:"Besu supports PKCS11, PKCS12, and JKS keystore and truststore types for P2P TLS."}),"\n",(0,r.jsx)(t.h2,{id:"configure-p2p-tls-1",children:"Configure P2P TLS"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Prerequisites"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A configured network. For example, ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/qbft",children:"see steps 1 to 5 in the QBFT tutorial"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Each node requires a keystore that contains the node's certificate and key."}),"\n",(0,r.jsx)(t.li,{children:"A truststore containing all the trusted certificates for the network."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Start Besu and include the following command line options on the required nodes:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --Xp2p-tls-enabled=true \\\n--Xp2p-tls-keystore-type="PKCS12" \\\n--Xp2p-tls-keystore-file="keystore" \\\n--Xp2p-tls-keystore-password-file="keystore.password" \\\n--Xp2p-tls-crl-file="crl2.pem" \\\n--Xp2p-tls-truststore-type="JKS" \\\n--Xp2p-tls-truststore-file="truststore.jks" \\\n--Xp2p-tls-truststore-password-file="truststore_password.txt"\n'})}),"\n",(0,r.jsx)(t.p,{children:"In the command line:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Enable TLS for P2P communication using ",(0,r.jsx)(t.a,{href:"#xp2p-tls-enabled",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-enabled=true"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Specify the keystore type and keystore file using ",(0,r.jsx)(t.a,{href:"#xp2p-tls-keystore-type",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-keystore-type"})})," and ",(0,r.jsx)(t.a,{href:"#xp2p-tls-keystore-file",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-keystore-file"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Specify the text file containing the password to unlock the keystore file using ",(0,r.jsx)(t.a,{href:"#xp2p-tls-keystore-password-file",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-keystore-password-file"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Specify the optional ",(0,r.jsx)(t.a,{href:"https://www.securew2.com/blog/certificate-revocation-crl-explained",children:"certificate revocation list (CRL)"})," file using ",(0,r.jsx)(t.a,{href:"#xp2p-tls-crl-file",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-crl-file"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Specify the truststore type and truststore file using ",(0,r.jsx)(t.a,{href:"#xp2p-tls-truststore-type",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-truststore-type"})})," and ",(0,r.jsx)(t.a,{href:"#xp2p-tls-truststore-file",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-truststore-file"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Specify the text file containing the password to unlock the truststore file using ",(0,r.jsx)(t.a,{href:"#xp2p-tls-keystore-password-file",children:(0,r.jsx)(t.code,{children:"--Xp2p-tls-truststore-password-file"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"command-line-options",children:"Command line options"}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-crl-file",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-crl-file"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-crl-file=<FILE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-crl-file=/home/cert/cert.crl.pem\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_CRL_FILE=/home/cert/cert.crl.pem\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Path to the optional certificate revocation list (CRL) file."}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-enabled",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-enabled"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-enabled[=<true|false>]\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-enabled=true\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_ENABLED=true\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Enable TLS for P2P communication. The default is ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-keystore-file",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-keystore-file"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-keystore-file=<FILE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-keystore-file=/home/cert/keystore.jks\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_KEYSTORE_FILE=/home/cert/keystore.jks\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Keystore file containing the key and certificate to allow TLS for P2P communication."}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-keystore-password-file",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-keystore-password-file"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-keystore-password-file=<FILE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-keystore-password-file=/home/cert/password.txt\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_KEYSTORE_PASSWORD_FILE=/home/cert/password.txt\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Text file containing the password to unlock the keystore file."}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-keystore-type",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-keystore-type"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-keystore-type=<TYPE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-keystore-type=JKS\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_KEYSTORE_TYPE=JKS\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Keystore type that allows TLS for P2P communication. Valid options are ",(0,r.jsx)(t.code,{children:"JKS"}),", ",(0,r.jsx)(t.code,{children:"PKCS11"}),", and ",(0,r.jsx)(t.code,{children:"PKCS12"}),". The default is ",(0,r.jsx)(t.code,{children:"JKS"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-truststore-file",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-truststore-file"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-truststore-file=<FILE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-truststore-file=/home/cert/truststore.jks\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_TRUSTSTORE_FILE=/home/cert/truststore.jks\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Truststore containing the trusted certificates that allows TLS for P2P communication."}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-truststore-password-file",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-truststore-password-file"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-truststore-password-file=<FILE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-truststore-password-file=/home/cert/password.txt\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_TRUSTSTORE_PASSWORD_FILE=/home/cert/password.txt\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Text file containing the password to unlock the truststore file."}),"\n",(0,r.jsx)(t.h3,{id:"xp2p-tls-truststore-type",children:(0,r.jsx)(t.code,{children:"Xp2p-tls-truststore-type"})}),"\n",(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(a.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-truststore-type=<TYPE>\n"})})}),(0,r.jsx)(a.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"--Xp2p-tls-truststore-type=JKS\n"})})}),(0,r.jsx)(a.Z,{value:"Environment variable",label:"Environment variable",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"BESU_XP2P_TLS_TRUSTSTORE_TYPE=JKS\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Truststore type. Valid options are ",(0,r.jsx)(t.code,{children:"JKS"}),", ",(0,r.jsx)(t.code,{children:"PKCS11"}),", and ",(0,r.jsx)(t.code,{children:"PKCS12"}),". The default is ",(0,r.jsx)(t.code,{children:"JKS"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>a});s(67294);var r=s(36905);const l={tabItem:"tabItem_Ymn6"};var n=s(85893);function a(e){let{children:t,hidden:s,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,a),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>S});var r=s(67294),l=s(36905),n=s(12466),a=s(16550),i=s(20469),o=s(91980),c=s(67392),d=s(50012);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:l}}=e;return{value:t,label:s,attributes:r,default:l}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:s}=e;const l=(0,a.k6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(l.location.search);t.set(n,e),l.replace({...l.location,search:t.toString()})}),[n,l])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:l}=e,n=u(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[c,p]=x({queryString:s,groupId:l}),[f,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,n]=(0,d.Nk)(s);return[l,(0,r.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:l}),j=(()=>{const e=c??f;return h({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),m(e)}),[p,m,n]),tabValues:n}}var m=s(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(85893);function v(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.o5)(),d=e=>{const t=e.currentTarget,s=o.indexOf(t),l=i[s].value;l!==r&&(c(t),a(l))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:p,onClick:d,...n,className:(0,l.Z)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:l}=e;const n=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,l.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function S(e){const t=(0,m.Z)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(t))}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>a});var r=s(67294);const l={},n=r.createContext(l);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);