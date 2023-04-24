"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"OptiMap is a React.JS application that will ensure users get the most efficient route minimizing distance and time to any location they plug into Google Maps. The application will be deployed on the web.",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-optimap/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"rickwu135",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-optimap/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-optimap/docs/requirements/system-block-diagram"}},l={},p=[{value:"Resources",id:"resources",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-overview"},"System Overview"),(0,n.kt)("p",null,"OptiMap is a React.JS application that will ensure users get the most efficient route minimizing distance and time to any location they plug into Google Maps. The application will be deployed on the web."),(0,n.kt)("p",null,"OptiMap will take user login credentials and authenticate them before using the service. OptiMap will utilize a Firebase database to store necessary information such as a history of routes and previous directions or saved routes or directions. It will make use of the versatility and ease of application that Firebase offers in order to save the most recent routes and other necessary information associated with the user."),(0,n.kt)("p",null,"With the rise of product delivery programs, finding the most efficient route in a large list of locations will become even more important. OptiMap will target this problem by allowing users to enter as many locations as they would need and then find the optimal path. These locations will not particularly have to be in \u201corder\u201d, as our app will determine the best route based on all of the plugged in locations."),(0,n.kt)("p",null,"The most efficient route will depend on a few key factors, such as miles per gallon, length of time spent at each location, and time restraints as specified by the user. The app will allow users to plug in any amount of locations that they need to visit, as well as the amount of time they expect to spend at each location. Additionally, they may specify a time they need to finish the route by. In order to assist users that plan on leaving on a specific time/day OptiMap will call the api to find out traffic information. In doing so the users can input the time they plan on leaving and get an optimal route off it. OptiMap will rearrange the order in which destinations are traveled to give users the most efficient path and to allow them to properly plan their travel. After a route has been optimized and created, users may save that route for future use. Additionally, our app will notify the user if the route they are attempting to do is \u201cnot possible\u201d. For example, if they need to get to point X by 5pm, but the routes and times they plan to spend on 4 locations before that will exceed 5pm, we will make sure they know."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,"Google Maps Platform | Google Developers, Google\n",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps"},"https://developers.google.com/maps")),(0,n.kt)("p",null,"\u201cFirebase Documentation.\u201d Google, Google.\n",(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs?authuser=0&hl=en"},"https://firebase.google.com/docs?authuser=0&hl=en"),"."),(0,n.kt)("p",null,"\u201cIntroduction React.JS.\u201d React.JS\n",(0,n.kt)("a",{parentName:"p",href:"https://react.dev/reference/react"},"https://react.dev/reference/react")))}u.isMDXComponent=!0}}]);