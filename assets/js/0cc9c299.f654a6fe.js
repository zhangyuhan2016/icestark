(self.webpackChunksite=self.webpackChunksite||[]).push([[551],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2654:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return i},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),p={},u={unversionedId:"guide/use-layout/react",id:"guide/use-layout/react",isDocsHomePage:!1,title:"React \u4e3b\u5e94\u7528\u63a5\u5165",description:"\u5bf9\u4e8e React \u4e3b\u5e94\u7528\uff0c\u63a8\u8350\u4f7f\u7528 AppRouter/AppRoute \u8fd9\u79cd React Component \u7684\u65b9\u5f0f\u3002",source:"@site/docs/guide/use-layout/react.md",sourceDirName:"guide/use-layout",slug:"/guide/use-layout/react",permalink:"/docs/guide/use-layout/react",editUrl:"https://github.com/ice-lab/icestark/tree/gh-pages/docs/guide/use-layout/react.md",version:"current",frontMatter:{},sidebar:"guide",previous:{title:"\u5fae\u5e94\u7528",permalink:"/docs/guide/concept/child"},next:{title:"Vue \u4e3b\u5e94\u7528\u63a5\u5165",permalink:"/docs/guide/use-layout/vue"}},i=[{value:"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa",id:"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa",children:[]},{value:"\u5df2\u6709\u5e94\u7528\u6539\u9020",id:"\u5df2\u6709\u5e94\u7528\u6539\u9020",children:[{value:"\u5fae\u5e94\u7528\u7ba1\u7406\u4e0e\u6ce8\u518c",id:"\u5fae\u5e94\u7528\u7ba1\u7406\u4e0e\u6ce8\u518c",children:[]},{value:"AppRouter \u914d\u7f6e\u9879",id:"approuter-\u914d\u7f6e\u9879",children:[]},{value:"AppRoute \u914d\u7f6e\u9879",id:"approute-\u914d\u7f6e\u9879",children:[]}]},{value:"\u8fdb\u9636\u6307\u5357",id:"\u8fdb\u9636\u6307\u5357",children:[{value:"\u4e3b\u5e94\u7528\u4e2d\u8def\u7531\u8df3\u8f6c",id:"\u4e3b\u5e94\u7528\u4e2d\u8def\u7531\u8df3\u8f6c",children:[]},{value:"\u4e3b\u5e94\u7528\u4e2d\u5982\u4f55\u5305\u542b\u8def\u7531\u9875\u9762",id:"\u4e3b\u5e94\u7528\u4e2d\u5982\u4f55\u5305\u542b\u8def\u7531\u9875\u9762",children:[]},{value:"\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u6ce8\u518c\u5fae\u5e94\u7528\u5217\u8868",id:"\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u6ce8\u518c\u5fae\u5e94\u7528\u5217\u8868",children:[]},{value:"\u5fae\u5e94\u7528\u7ea7\u522b\u6743\u9650\u6821\u9a8c",id:"\u5fae\u5e94\u7528\u7ea7\u522b\u6743\u9650\u6821\u9a8c",children:[]},{value:"\u4e0d\u540c\u9875\u9762 Layout \u4e0d\u540c",id:"\u4e0d\u540c\u9875\u9762-layout-\u4e0d\u540c",children:[]}]}],l={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5bf9\u4e8e React \u4e3b\u5e94\u7528\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppRouter/AppRoute")," \u8fd9\u79cd React Component \u7684\u65b9\u5f0f\u3002"),(0,o.kt)("h2",{id:"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa"},"\u901a\u8fc7\u5b98\u65b9\u811a\u624b\u67b6\u521b\u5efa"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8be5\u5b98\u65b9\u811a\u624b\u67b6\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://ice.work/"},"icejs")," \u6846\u67b6\uff0c\u5982\u9700\u4f7f\u7528\u5176\u4ed6\u6846\u67b6/\u5de5\u7a0b\u53ef\u6309 ",(0,o.kt)("a",{parentName:"p",href:"./react#%E5%B7%B2%E6%9C%89%E5%BA%94%E7%94%A8%E6%94%B9%E9%80%A0"},"\u5df2\u6709\u5e94\u7528\u6539\u9020")," \u7684\u65b9\u5f0f\u63a5\u5165\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init ice icestark-layout @icedesign/stark-layout-scaffold\n$ cd icestark-layout\n$ npm install\n$ npm start\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u591a\u6709\u5173\u5b98\u65b9\u811a\u624b\u67b6\u7684\u4f7f\u7528\u7ec6\u8282\uff0c\u8bf7\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/advanced/icestark"},"\u98de\u51b0 - \u5fae\u524d\u7aef icestark")))),(0,o.kt)("h2",{id:"\u5df2\u6709\u5e94\u7528\u6539\u9020"},"\u5df2\u6709\u5e94\u7528\u6539\u9020"),(0,o.kt)("h3",{id:"\u5fae\u5e94\u7528\u7ba1\u7406\u4e0e\u6ce8\u518c"},"\u5fae\u5e94\u7528\u7ba1\u7406\u4e0e\u6ce8\u518c"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppRouter/AppRoute")," \u6ce8\u518c\u5fae\u5e94\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport React from 'react';\nimport { AppRouter, AppRoute } from '@ice/stark';\nimport BasicLayout from '@/layouts/BasicLayout';\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <BasicLayout>\n        <AppRouter>\n          <AppRoute\n            title=\"\u5546\u5bb6\u5e73\u53f0\"\n            url={[\n              '//unpkg.com/icestark-child-seller/build/js/index.js',\n              '//unpkg.com/icestark-child-seller/build/css/index.css',\n            ]}\n          />\n          <AppRoute\n            path=\"/user\"\n            //...\n          />\n        </AppRouter>\n      </BasicLayout>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"\u901a\u8fc7 ReactDOM \u6e32\u67d3\u5e94\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/index.jsx\nimport ReactDOM from 'react-dom';\nimport React from 'react';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),(0,o.kt)("h3",{id:"approuter-\u914d\u7f6e\u9879"},"AppRouter \u914d\u7f6e\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"onRouteChange\uff1a\u8def\u7531\u53d8\u5316\u65f6\u89e6\u53d1"),(0,o.kt)("li",{parentName:"ul"},"NotFoundComponent\uff1a\u672a\u5339\u914d\u5230\u5fae\u5e94\u7528\u65f6\u6e32\u67d3\u7684\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"ErrorComponent\uff1a\u5fae\u5e94\u7528\u52a0\u8f7d\u5931\u8d25\u6e32\u67d3\u7684\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"LoadingComponent\uff1a\u5fae\u5e94\u7528\u52a0\u8f7d\u8fc7\u7a0b\u6e32\u67d3\u7684\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"basename\uff1a\u6574\u4e2a\u4e3b\u5e94\u7528\u90e8\u7f72\u5728\u67d0\u4e2a\u57fa\u7840\u8def\u7531\u4e0b")),(0,o.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/ice-stark#approuter"},"API \u4ecb\u7ecd AppRouter"),"\u3002"),(0,o.kt)("h3",{id:"approute-\u914d\u7f6e\u9879"},"AppRoute \u914d\u7f6e\u9879"),(0,o.kt)("h4",{id:"\u8def\u7531\u4e0e\u5fae\u5e94\u7528\u7684\u6620\u5c04\u5173\u7cfb"},"\u8def\u7531\u4e0e\u5fae\u5e94\u7528\u7684\u6620\u5c04\u5173\u7cfb"),(0,o.kt)("p",null,"\u901a\u8fc7 path \u548c exact \u4e24\u4e2a\u5c5e\u6027\u914d\u7f6e\u5fae\u5e94\u7528\u7684\u5339\u914d\u89c4\u5219\uff0c\u5efa\u7acb\u8def\u7531\u548c\u5fae\u5e94\u7528\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5339\u914d\u7b26\u5408 /seller/* \u7684\u6240\u6709\u8def\u7531\n<AppRoute\n  path=\"/seller\"\n/>\n\n// \u4ec5\u5b8c\u5168\u5339\u914d /seller \u8fd9\u4e00\u4e2a\u8def\u7531\n<AppRoute\n  path=\"/seller\"\n  exact\n/>\n\n// \u5339\u914d\u7b26\u5408 /seller/* \u4ee5\u53ca /user/* \u7684\u6240\u6709\u8def\u7531\n<AppRoute\n  path={['/seller', '/user']}\n/>\n\n// \u5339\u914d /seller \u8fd9\u4e00\u4e2a\u8def\u7531\u4ee5\u53ca\u7b26\u5408 /user/* \u7684\u6240\u6709\u8def\u7531\n<AppRoute\n  path={[\n    { path: '/seller', exact: true },\n    { path: '/user', exact: false },\n  ]}\n/>\n")),(0,o.kt)("h4",{id:"\u5fae\u5e94\u7528\u5165\u53e3-entryentrycontenturl"},"\u5fae\u5e94\u7528\u5165\u53e3 entry/entryContent/url"),(0,o.kt)("p",null,"\u5bf9\u4e8e entry/entryContent/url \u65b9\u5f0f\u7684\u4f7f\u7528\u8bf7\u53c2\u8003\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/concept/child#%E5%85%A5%E5%8F%A3%E8%A7%84%E8%8C%83"},"\u5fae\u5e94\u7528 - \u5165\u53e3\u89c4\u8303"),"\u3002\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u7ed3\u5408 React \u7684\u80fd\u529b AppRoute \u8fd8\u652f\u6301\u4e86\u66f4\u4e3a\u7075\u6d3b\u7684 component \u548c render \u65b9\u5f0f\u914d\u7f6e\u5fae\u5e94\u7528\u5165\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<AppRoute\n  path="/foo"\n  render={() => {\n    return <iframe src="" />;\n  }}\n  // \u6216\u8005\u76f4\u63a5\u4f20\u5165 component\n  // component={CustomComponent}\n/>\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 AppRoute \u6e32\u67d3\u4e00\u4e2a iframe \u6216\u8005\u4efb\u610f\u7684 React \u7ec4\u4ef6\uff08\u6bd4\u5982 ReactRouter\uff09\u3002"),(0,o.kt)("h4",{id:"\u5176\u4ed6\u53c2\u6570"},"\u5176\u4ed6\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"umd\uff1a\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u6807\u8bc6\u5fae\u5e94\u7528\u662f\u5426\u4e3a umd \u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"sandbox\uff1a\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u662f\u5426\u5f00\u542f js \u6c99\u7bb1\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"cache\uff1a\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5207\u6362\u540e\u662f\u5426\u7f13\u5b58\u5fae\u5e94\u7528\uff0c\u53ef\u80fd\u4f1a\u5f15\u8d77\u5185\u5b58\u5360\u7528\u8fc7\u5927\u95ee\u9898\uff0c\u4e0d\u5efa\u8bae\u5f00\u542f"),(0,o.kt)("li",{parentName:"ul"},"hashType\uff1a\u9ed8\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u6807\u8bc6\u5fae\u5e94\u7528\u7684\u8def\u7531\u662f\u5426\u4e3a hash \u6a21\u5f0f")),(0,o.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/ice-stark#approute"},"API \u4ecb\u7ecd AppRoute"),"\u3002"),(0,o.kt)("h2",{id:"\u8fdb\u9636\u6307\u5357"},"\u8fdb\u9636\u6307\u5357"),(0,o.kt)("h3",{id:"\u4e3b\u5e94\u7528\u4e2d\u8def\u7531\u8df3\u8f6c"},"\u4e3b\u5e94\u7528\u4e2d\u8def\u7531\u8df3\u8f6c"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u4e3b\u5e94\u7528\u91cc\u5b9a\u4e49\u4e86\u4e00\u4e9b\u8def\u7531\u9875\u9762\uff0c\u90a3\u4e48\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u7684\u5c42\u7ea7\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<FrameworkLayout>\n  <AppRouter>\n    <AppRoute path="/seller" url={[]} />\n    <AppRoute path="*" component={() => {\n      return <ReactRouter></ReactRouter>\n    }} />\n  </AppRouter>\n<FrameworkLayout>\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u9762\u53ef\u4ee5\u770b\u5230 FrameworkLayout \u662f\u5728 ReactRouter \u5916\u5c42\u7684\uff0c\u56e0\u6b64\u5728 FrameworkLayout \u91cc\u662f\u6ca1\u6cd5\u4f7f\u7528 react-router \u63d0\u4f9b\u7684 API\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"withRouter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Link"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," \u7b49\u3002\u5982\u679c\u8981\u505a\u8def\u7531\u8df3\u8f6c\u5efa\u8bae\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"appHistory")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppLink")," \u6765\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n+import { appHistory, AppLink } from '@ice/stark-app';\n\nexport default function FrameworkLayout() {\n  return (\n    <>\n      <span\n        onClick={() => {\n+          appHistory.push('/seller/list');\n        }}\n      >\n        seller\n      </span>\n+      <AppLink to=\"/waiter/list\">waiter</AppLink>\n    </>\n  );\n}\n")),(0,o.kt)("h3",{id:"\u4e3b\u5e94\u7528\u4e2d\u5982\u4f55\u5305\u542b\u8def\u7531\u9875\u9762"},"\u4e3b\u5e94\u7528\u4e2d\u5982\u4f55\u5305\u542b\u8def\u7531\u9875\u9762"),(0,o.kt)("p",null,"\u6211\u4eec\u4e0d\u63a8\u8350\u4e3b\u5e94\u7528\u91cc\u5305\u542b\u4e00\u4e9b\u5177\u4f53\u7684\u8def\u7531\u9875\u9762\uff0c\u4f46\u662f\u5982\u679c\u4e1a\u52a1\u6709\u8fd9\u79cd\u9700\u6c42\uff0c\u6bd4\u5982\u60f3\u628a\u767b\u5f55\u6ce8\u518c\u4e4b\u7c7b\u7684\u901a\u7528\u9875\u9762\u653e\u5728\u4e3b\u5e94\u7528\u91cc\uff0c\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f7f\u7528\u5b98\u65b9\u6a21\u677f\u521b\u5efa\u51fa\u6765\u7684 icejs \u4e3b\u5e94\u7528\u9ed8\u8ba4\u652f\u6301\u8be5\u80fd\u529b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"// src/App.jsx\nimport React from 'react';\nimport { AppRouter, AppRoute } from '@ice/stark';\n+import { Router, Switch, Route } from 'react-router';\nimport BasicLayout from '@/layouts/BasicLayout';\n+import Home from './pages/Home';\n+import Login from './pages/Login';\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <BasicLayout>\n        <AppRouter>\n          <AppRoute path=\"/seller\" />\n          <AppRoute path=\"/user\" />\n+          <AppRoute\n+            path=\"*\"\n+            render={() => {\n+              return (\n+                <Router>\n+                  <Switch>\n+                    <Route path=\"/login\" component={Login} />\n+                    <Route path=\"/\" exact component={Home} />\n+                    <Route path=\"*\" exact component={NotFound} />\n+                  </Switch>\n+                </Router>\n+              );\n+            }}\n+          />\n        </AppRouter>\n      </BasicLayout>\n    );\n  }\n}\n")),(0,o.kt)("h3",{id:"\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u6ce8\u518c\u5fae\u5e94\u7528\u5217\u8868"},"\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u6ce8\u518c\u5fae\u5e94\u7528\u5217\u8868"),(0,o.kt)("p",null,"\u5728\u5f88\u591a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u7684\u5fae\u5e94\u7528\u53ef\u80fd\u901a\u8fc7\u4e00\u4e9b\u914d\u7f6e\u5e73\u53f0\u6ce8\u518c\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u5c06\u6240\u6709\u5fae\u5e94\u7528\u7684\u4fe1\u606f\u901a\u8fc7\u5168\u5c40\u53d8\u91cf\u8f93\u51fa\u5230 html \u4e2d\uff0c\u7136\u540e\u524d\u7aef\u901a\u8fc7\u8be5\u6570\u636e\u6ce8\u518c\u5fae\u5e94\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport React from 'react';\nimport { AppRouter, AppRoute } from '@ice/stark';\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <AppRouter>\n        {\n          (window.appConfig || []).map((item) => {\n            return (\n              <AppRoute\n                key={idx}\n                path={item.path}\n                title={item.title}\n                url={item.url}\n              />\n            );\n          })\n        }\n      </AppRouter>\n    );\n  }\n}\n")),(0,o.kt)("h3",{id:"\u5fae\u5e94\u7528\u7ea7\u522b\u6743\u9650\u6821\u9a8c"},"\u5fae\u5e94\u7528\u7ea7\u522b\u6743\u9650\u6821\u9a8c"),(0,o.kt)("p",null,"icestark \u652f\u6301\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppRoute")," \u518d\u8fdb\u884c\u4e8c\u6b21\u5c01\u88c5\uff0c\u7edf\u4e00\u5904\u7406\u5bb9\u5668\u5b9a\u5236/\u6743\u9650\u6821\u9a8c\u7b49\u573a\u666f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/AuthAppRoute.js\nimport React, { useState, useEffect } from 'react';\nimport { AppRoute } from '@ice/stark';\n\nexport default function AuthAppRoute(props) {\n  const [loading, setLoading] = useState(true);\n  const [hasAuth, setHasAuth] = useState(false);\n\n  useEffect(() => {\n    setTimeout(() => {\n      setHasAuth(true);\n      setLoading(false);\n    }, 1000);\n  }, []);\n\n  if (loading) {\n    return <div>wait for a moment</div>;\n  }\n\n  if (!hasAuth) {\n    return <div>No access!</div>;\n  }\n\n  return (\n    <div>\n      //  \u6ce8\u610f\u8981\u5c06 ...others \u900f\u4f20\u7ed9 AppRoute\n      <AppRoute {...props} />\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"\u5c01\u88c5\u5b8c\u6210\u540e\u5373\u53ef\u5728 AppRouter \u4e0b\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport React from 'react';\nimport { AppRouter, AppRoute } from '@ice/stark';\nimport NotFound from '@/components/NotFound';\nimport PageLoading from '@/components/PageLoading';\nimport BasicLayout from '@/layouts/BasicLayout';\nimport AuthAppRoute from '@/components/AuthAppRoute';\n\nexport default class App extends React.Component {\n  render() {\n    return (\n      <BasicLayout>\n        <AppRouter\n          NotFoundComponent={NotFound}\n          LoadingComponent={PageLoading}\n        >\n          {/* \u6ce8\u610f\uff1apath/url/entry \u7b49\u914d\u7f6e\u4fe1\u606f\u914d\u7f6e\u5728\u7ec4\u4ef6\u5916\u5c42\uff0cAppRouter \u7684\u76f4\u63a5\u5b50\u5143\u7d20\u4e0a */}\n          <AuthAppRoute\n            path={['/', '/message', '/about']}\n            exact\n            title=\"\u4e3b\u9875\"\n            url={[\n              '//unpkg.com/icestark-child-common/build/js/index.js',\n              '//unpkg.com/icestark-child-common/build/css/index.css',\n            ]}\n          />\n        </AppRouter>\n      </BasicLayout>\n    );\n  }\n}\n")),(0,o.kt)("h3",{id:"\u4e0d\u540c\u9875\u9762-layout-\u4e0d\u540c"},"\u4e0d\u540c\u9875\u9762 Layout \u4e0d\u540c"),(0,o.kt)("p",null,"\u901a\u8fc7 AppRouter \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"onRouteChange")," \u5c5e\u6027\u53ef\u4ee5\u6355\u83b7\u5230\u6240\u6709\u7684\u8def\u7531\u53d8\u5316\uff0c\u6b64\u65f6\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u8def\u7531\u5bf9 Layout \u505a\u4e00\u4e9b\u72b6\u6001\u7684\u53d8\u5316\uff0c\u5b9e\u73b0\u4e0d\u540c\u9875\u9762\u4e0d\u540c\u5e03\u5c40\u7684\u80fd\u529b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/App.jsx\nimport React from 'react';\nimport { AppRouter, AppRoute } from '@ice/stark';\n\nexport default class App extends React.Component {\n  state = {\n    pathname: '',\n  }\n\n  handleRouteChange = (pathname) => {\n    console.log('route change', pathname);\n    // \u5982\u6709\u9700\u6c42\uff0c\u53ef\u6839\u636e pathname \u5207\u6362 layout \u7684\u5f62\u6001\n    this.setState({\n      pathname,\n    });\n  }\n\n  render() {\n    const { pathname } = this.state;\n\n    return (\n      \x3c!-- BasicLayout \u53ef\u6839\u636e pathname \u5c5e\u6027\u5207\u6362\u5c55\u73b0\u5f62\u5f0f --\x3e\n      <BasicLayout pathname={pathname}>\n        <AppRouter\n          onRouteChange={this.handleRouteChange}\n        >\n          <AppRoute />\n        </AppRouter>\n      </BasicLayout>\n    );\n  }\n}\n")))}c.isMDXComponent=!0}}]);