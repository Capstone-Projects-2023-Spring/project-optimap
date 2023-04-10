"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},a="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"OptiMap is a mobile application developed using React Native. It ensures users get the most efficient route, minimizing distance and time to any location they plug into Google Maps. The application is designed for mobile devices and is also accessible through the web.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/project-optimap/docs/intro",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Endri",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Requirements Specification",permalink:"/project-optimap/docs/category/requirements-specification"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"OptiMap is a mobile application developed using React Native. It ensures users get the most efficient route, minimizing distance and time to any location they plug into Google Maps. The application is designed for mobile devices and is also accessible through the web."),(0,i.kt)("p",null,"OptiMap takes users' login credentials and authenticates them before allowing access to the service. OptiMap uses a Firebase database to store important information such as a history of routes, previous directions, saved routes, and directions. This allows the app to quickly retrieve the data. The firebase platform\u2019s versatility and ease of application makes it the optimal choice to store and manage data for OptiMap."),(0,i.kt)("p",null,"With the rise of product delivery programs, finding the most efficient route in a long list of locations becomes exceedingly important. OptiMap targets this problem by allowing users to enter any number of locations as they would need and then finding the optimal path. The locations do not particularly have to be in \u201corder\u201d, as our app determines the best route based on all of the plugged-in locations."),(0,i.kt)("p",null,"The most efficient route depends on several key factors, such as gas efficiency, length of time spent at each location, and time restraints specified by the user. The app allows users to plug in any number of locations that they need to visit, as well as the amount of time they expect to spend at each location. Additionally, they may specify a time they need to finish the route. In order to assist users that plan on leaving on a specific time/day, OptiMap calls the API to find out traffic information. In doing so, the users can input the time they plan on leaving and get an optimal route in return. OptiMap will rearrange the order in which destinations are traveled to give users the most efficient path and to allow them to properly plan their travel. Once a route has been optimized and created, users may save that route for future use. "),(0,i.kt)("p",null,"Additionally, our app notifies the user if the route they are attempting to do is \u201cnot possible\u201d. For example, if they need to get to point X by 5pm, but the routes and times they plan to spend at 4 locations before that will exceed 5pm, OptiMap makes sure to inform them of this fact. By providing this information, we ensure that users have the most accurate information to plan their routes efficiently."),(0,i.kt)("p",null,"Overall, OptiMap is a powerful and user-friendly application that can help users optimize their travel routes quickly and efficiently."))}u.isMDXComponent=!0}}]);