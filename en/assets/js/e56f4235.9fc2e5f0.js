(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,h=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2147:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"overview",title:"\u4ee3\u7801\u793a\u4f8b",description:"Kratos \u4ee3\u7801\u793a\u4f8b",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l={unversionedId:"example/overview",id:"example/overview",isDocsHomePage:!1,title:"\u4ee3\u7801\u793a\u4f8b",description:"Kratos \u4ee3\u7801\u793a\u4f8b",source:"@site/docs/example/overview.md",sourceDirName:"example",slug:"/example/overview",permalink:"/en/docs/example/overview",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/example/overview.md",version:"current",frontMatter:{id:"overview",title:"\u4ee3\u7801\u793a\u4f8b",description:"Kratos \u4ee3\u7801\u793a\u4f8b",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Ent",permalink:"/en/docs/guide/ent"},next:{title:"\u63d2\u4ef6",permalink:"/en/docs/plugin/overview"}},p=[{value:"\u7ec4\u4ef6\u4f7f\u7528",id:"\u7ec4\u4ef6\u4f7f\u7528",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u670d\u52a1\u53d1\u73b0&amp;\u670d\u52a1\u6ce8\u518c",id:"\u670d\u52a1\u53d1\u73b0\u670d\u52a1\u6ce8\u518c",children:[]},{value:"HTTP",id:"http",children:[]},{value:"RPC",id:"rpc",children:[]},{value:"Trace",id:"trace",children:[]},{value:"WebSocket",id:"websocket",children:[]}]},{value:"\u7efc\u5408\u9879\u76ee",id:"\u7efc\u5408\u9879\u76ee",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kratos\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u793a\u4f8b\u4ee3\u7801\u4f9b\u53c2\u8003"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u4f7f\u7528"},"\u7ec4\u4ef6\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/config"},"config")," \u4f7f\u7528config\u7ec4\u4ef6\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b")),(0,o.kt)("h3",{id:"\u670d\u52a1\u53d1\u73b0\u670d\u52a1\u6ce8\u518c"},"\u670d\u52a1\u53d1\u73b0&\u670d\u52a1\u6ce8\u518c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/registry/consul"},"consul")," \u4f7f\u7528consul\u63d2\u4ef6\uff0c\u5728server\u7aef\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u548c\u5728client\u7aef\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u7684\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/registry/etcd"},"etcd")," \u4f7f\u7528etcd\u63d2\u4ef6\uff0c\u5728server\u7aef\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u548c\u5728client\u7aef\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u7684\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/registry/nacos"},"kube")," \u4f7f\u7528kube(kubernetes)\u63d2\u4ef6\uff0c\u5728server\u7aef\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u548c\u5728client\u7aef\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u7684\u793a\u4f8b")),(0,o.kt)("h3",{id:"http"},"HTTP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/gin"},"gin")," \u5c06gin\u4f5c\u4e3arouter\u96c6\u6210\u8fdbKratos\u9879\u76ee\u7684\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/handler"},"handler")," \u6ce8\u518chandler\u63d0\u4f9bhttp\u63a5\u53e3\u7684\u6700\u5c0f\u5316\u5e94\u7528\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/blob/main/examples/http/health/main.go"},"health")," \u6dfb\u52a0\u5065\u5eb7\u68c0\u67e5\u63a5\u53e3\u7684\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/mux"},"mux")," \u5c06mux\u4f5c\u4e3arouter\u96c6\u6210\u8fdbKratos\u9879\u76ee\u7684\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/static"},"static")," \u901a\u8fc7http\u63d0\u4f9b\u9759\u6001\u6587\u4ef6\u670d\u52a1\u7684\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/upload"},"upload")," \u901a\u8fc7http\u4e0a\u4f20\u6587\u4ef6\u7684\u793a\u4f8b")),(0,o.kt)("h3",{id:"rpc"},"RPC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/helloworld"},"helloworld")," \u5206\u522b\u4f7f\u7528http\u548cgRPC\u8fdb\u884c\u8fdc\u7a0b\u8c03\u7528\u7684\u6837\u4f8b")),(0,o.kt)("h3",{id:"trace"},"Trace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/traces"},"traces")," \u4f7f\u7528jaeger\u5bf9\u4e24\u4e2a\u670d\u52a1\u8fdb\u884c\u5206\u5e03\u5f0f\u8ffd\u8e2a\u7684\u6837\u4f8b")),(0,o.kt)("h3",{id:"websocket"},"WebSocket"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/ws"},"ws")," \u63d0\u4f9bWebSocket\u63a5\u53e3\u7684\u6837\u4f8b")),(0,o.kt)("h2",{id:"\u7efc\u5408\u9879\u76ee"},"\u7efc\u5408\u9879\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/examples/blog"},"blog")," \u7b80\u5355\u7684CRUD\u5de5\u7a0b\uff0c\u5305\u542bMySQL\u548cRedis\u7684\u4f7f\u7528\uff0c\u5c55\u793a\u4f7f\u7528kratos-layout\u521b\u5efa\u7684\u9879\u76ee\u7684\u5b8c\u6574\u7ed3\u6784")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/beer-shop"},"beer-shop")," \u4e00\u4e2a\u6a21\u62df\u7535\u5546\u7684\u5b8c\u6574\u5fae\u670d\u52a1\u5e94\u7528\uff0c\u5c55\u793a\u5982\u4f55\u4f7f\u7528kratos\u6784\u5efa\u5927\u578b\u5fae\u670d\u52a1\u9879\u76ee"))))}c.isMDXComponent=!0}}]);