(self.webpackChunksite=self.webpackChunksite||[]).push([[416],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1182:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),p={toc:"menu"},l={unversionedId:"api/ice-stark-app",id:"api/ice-stark-app",isDocsHomePage:!1,title:"@ice/stark-app",description:"\u4ee5\u4e0b api \u5747\u4ece @ice/stark-app \u5bfc\u51fa\u3002\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a",source:"@site/docs/api/ice-stark-app.md",sourceDirName:"api",slug:"/api/ice-stark-app",permalink:"/docs/api/ice-stark-app",editUrl:"https://github.com/ice-lab/icestark/tree/gh-pages/docs/api/ice-stark-app.md",version:"current",frontMatter:{toc:"menu"},sidebar:"api",previous:{title:"@ice/stark",permalink:"/docs/api/ice-stark"}},o=[{value:"isInIcestark",id:"isinicestark",children:[]},{value:"getBasename",id:"getbasename",children:[]},{value:"getMountNode",id:"getmountnode",children:[]},{value:"renderNotFound",id:"rendernotfound",children:[]},{value:"appHistory",id:"apphistory",children:[]},{value:"AppLink",id:"applink",children:[]},{value:"registerAppEnter",id:"registerappenter",children:[]},{value:"registerAppLeave",id:"registerappleave",children:[]},{value:"setLibraryName",id:"setlibraryname",children:[]}],u={toc:o};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ee5\u4e0b api \u5747\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"@ice/stark-app")," \u5bfc\u51fa\u3002\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { isInIcestark } from '@ice/stark-app';\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528\u975e React \u7684\u7528\u6237\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u76f4\u63a5\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," \u76ee\u5f55\u4e0b\u5bfc\u5165\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import isInIcestark from '@ice/stark-app/lib/isInIcestark';\n")),(0,i.kt)("h2",{id:"isinicestark"},"isInIcestark"),(0,i.kt)("p",null,"\u5224\u65ad\u5f53\u524d\u8fd0\u884c\u73af\u5883\uff0c\u662f\u5426\u8fd0\u884c\u5728 icestark \u73af\u5883\u4e2d\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\uff1aboolean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\u8be6\u89c1 ",(0,i.kt)("inlineCode",{parentName:"li"},"registerAppLeave"))),(0,i.kt)("h2",{id:"getbasename"},"getBasename"),(0,i.kt)("p",null,"\u914d\u7f6e\u5fae\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"React Router")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u53c2\u6570\u7684\u65b9\u6cd5\uff0c\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"AppRoute")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," \u914d\u7f6e\u751f\u6210\u6700\u7ec8\u7ed3\u679c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'() => basename || (Array.isArray(path) ? path[0] : path)) || "/"'))),(0,i.kt)("h2",{id:"getmountnode"},"getMountNode"),(0,i.kt)("p",null,"\u6839\u636e\u5fae\u5e94\u7528\u8fd0\u884c\u73af\u5883\uff0c\u8fd4\u56de\u5fae\u5e94\u7528\u6e32\u67d3\u8282\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'<div id="ice-container"></div>')),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u89c4\u5219\uff1a\u65b9\u6cd5\u652f\u6301\u4f20\u53c2\uff0c\u4f20\u53c2\u4ee3\u8868\u9ed8\u8ba4\u6e32\u67d3\u7684 DOM \u8282\u70b9\uff0c\u9ed8\u8ba4\u8282\u70b9\u53ea\u5728\u5fae\u5e94\u7528\u5355\u72ec\u542f\u52a8\u65f6\u751f\u6548\u3002\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"string | HTMLElement | function"),"\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u8868\u793a\u9ed8\u8ba4 DOM \u8282\u70b9\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"function")," \u652f\u6301\u51fd\u6570\u8fd4\u56de\u503c\u4f5c\u4e3a\u9ed8\u8ba4 DOM \u8282\u70b9")),(0,i.kt)("h2",{id:"rendernotfound"},"renderNotFound"),(0,i.kt)("p",null,"\u5fae\u5e94\u7528\u89e6\u53d1\u6e32\u67d3\u5168\u5c40 404 \u7684\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function"))),(0,i.kt)("h2",{id:"apphistory"},"appHistory"),(0,i.kt)("p",null,"\u63d0\u4f9b\u624b\u52a8\u5207\u6362\u4e0d\u540c\u5e94\u7528\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("h4",{id:"apphistorypush"},"appHistory.push"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u793a\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { appHistory } from '@ice/stark-app';\n\nexport default class SelfLink extends React.Component {\n  render() {\n    return (\n      <span\n        onClick={() => {\n          appHistory.push('/home');\n        }}\n      >\n        selfLink\n      </span>\n    );\n  }\n}\n")),(0,i.kt)("h4",{id:"apphistoryreplace"},"appHistory.replace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u793a\u4f8b\u53c2\u8003 ",(0,i.kt)("inlineCode",{parentName:"li"},"appHistory.push"))),(0,i.kt)("h2",{id:"applink"},"AppLink"),(0,i.kt)("p",null,"\u63d0\u4f9b\u58f0\u660e\u5f0f\u7684\uff0c\u53ef\u8bbf\u95ee\u7684\u5bfc\u822a\uff0c\u8868\u793a\u672c\u6b21\u8df3\u8f6c\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u9759\u6001\u8d44\u6e90\u3002\u5fae\u5e94\u7528\u5185\u90e8\u8df3\u8f6c\u4ecd\u7136\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")),(0,i.kt)("h4",{id:"to"},"to"),(0,i.kt)("p",null,"\u76ee\u6807\u8def\u5f84\uff0c\u540c ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," \u4fdd\u6301\u4e00\u81f4 \uff0c\u5fc5\u586b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"-"))),(0,i.kt)("h4",{id:"replace"},"replace"),(0,i.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u5219\u5355\u51fb\u94fe\u63a5\u5c06\u66ff\u6362\u5386\u53f2\u8bb0\u5f55\u4e2d\u7684\u5f53\u524d\u8bb0\u5f55\uff0c\u800c\u4e0d\u662f\u6dfb\u52a0\u65b0\u8bb0\u5f55\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h4",{id:"message"},"message"),(0,i.kt)("p",null,"\u8868\u793a\u5f53\u524d\u8df3\u8f6c\u9700\u8981\u5f39\u7a97\u786e\u8ba4\uff0cmessage \u4e3a\u63d0\u793a\u6587\u6848\u5185\u5bb9\uff0c\u9009\u586b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"-"))),(0,i.kt)("h4",{id:"hashtype"},"hashType"),(0,i.kt)("p",null,"\u5f53\u524d\u8df3\u8f6c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," \u8def\u7531\u5f62\u5f0f\u8fdb\u884c\u8df3\u8f6c\uff0c\u9009\u586b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Link } from 'react-router-dom';\nimport { AppLink } from '@ice/stark';\n\nexport default class SelfLink extends React.Component {\n  // \u5546\u5bb6\u5e73\u53f0\u4ee3\u7801\n  render() {\n    return (\n      <div>\n        <AppLink to=\"/waiter/list\">\u4f7f\u7528 AppLink \u8df3\u8f6c\u5230\u5c0f\u4e8c\u5e73\u53f0\u7684\u5217\u8868\u9875</AppLink>\n        <Link to=\"/detail\">\u8df3\u8f6c\u5230\u5546\u5bb6\u5e73\u53f0\u8be6\u60c5\u9875</Link>\n      </div>\n    );\n  }\n}\n")),(0,i.kt)("h2",{id:"registerappenter"},"registerAppEnter"),(0,i.kt)("p",null,"\u63d0\u4f9b\u5feb\u901f\u6ce8\u518c\u5f53\u524d\u5e94\u7528\u52a0\u8f7d\u524d\u7684\u56de\u8c03\u4e8b\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\u8be6\u89c1 ",(0,i.kt)("inlineCode",{parentName:"li"},"registerAppLeave"))),(0,i.kt)("h2",{id:"registerappleave"},"registerAppLeave"),(0,i.kt)("p",null,"\u63d0\u4f9b\u5feb\u901f\u6ce8\u518c\u5f53\u524d\u5e94\u7528\u5378\u8f7d\u524d\u7684\u56de\u8c03\u4e8b\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u793a\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/index.js\nimport ReactDOM from 'react-dom';\nimport { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';\nimport router from './router';\n\nif (isInIcestark()) {\n  const mountNode = getMountNode();\n  registerAppEnter(() => {\n    ReactDOM.render(router(), getMountNode());\n  });\n  // make sure the unmount event is triggered\n  registerAppLeave(() => {\n    ReactDOM.unmountComponentAtNode(getMountNode());\n  });\n} else {\n  ReactDOM.render(router(), document.getElementById('ice-container'));\n}\n")),(0,i.kt)("h2",{id:"setlibraryname"},"setLibraryName"),(0,i.kt)("p",null,"\u914d\u7f6e\u5fae\u5e94\u7528\u5bfc\u51fa\u7684 umd \u5168\u5c40\u53d8\u91cf\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u793a\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import ReactDOM from 'react-dom';\nimport { isInIcestark, setLibraryName } from '@ice/stark-app';\nimport App from './App';\n\nsetLibraryName('microApp');\n\nexport function mount(props) {\n  const { container, customProps } = props;\n  ReactDOM.render(<App {...customProps} />, container);\n}\n\nexport function unmount(props) {\n  const { container } = props;\n  ReactDOM.unmountComponentAtNode(container);\n}\n")))}s.isMDXComponent=!0}}]);