"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},s="Feature List for Milestone Demos",l={unversionedId:"milestones/milestone_one",id:"milestones/milestone_one",title:"Feature List for Milestone Demos",description:"2023 Fall",source:"@site/docs/milestones/milestone_one.md",sourceDirName:"milestones",slug:"/milestones/milestone_one",permalink:"/project-optimap/docs/milestones/milestone_one",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/milestones/milestone_one.md",tags:[],version:"current",lastUpdatedBy:"Steven",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Milestones",permalink:"/project-optimap/docs/category/milestones"},next:{title:"System Architecture",permalink:"/project-optimap/docs/category/system-architecture"}},a={},c=[{value:"Milestone Demo 1 (3-20-2023)",id:"milestone-demo-1-3-20-2023",level:2},{value:"Milestone Demo 2 (4-3-2023)",id:"milestone-demo-2-4-3-2023",level:2},{value:"Milestone Demo 3 (4-17-2023)",id:"milestone-demo-3-4-17-2023",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feature-list-for-milestone-demos"},"Feature List for Milestone Demos"),(0,r.kt)("p",null,"2023 Fall"),(0,r.kt)("h1",{id:"sec-002-optimap"},"Sec. 002 OptiMap"),(0,r.kt)("h2",{id:"milestone-demo-1-3-20-2023"},"Milestone Demo 1 (3-20-2023)"),(0,r.kt)("p",null,"F: User accounts"),(0,r.kt)("p",null,"R: user can login / create an account "),(0,r.kt)("p",null,"F: Routes"),(0,r.kt)("p",null,"R: user can save routes, load saved routes"),(0,r.kt)("p",null,"F: Location and Directions verification"),(0,r.kt)("p",null,"R: entered addresses are verified via Maps API"),(0,r.kt)("p",null,"R: entered locations and desired directions are provided via Maps API"),(0,r.kt)("p",null,"R: successful continuous API calls to grab directions (Point A -> Point B)"),(0,r.kt)("h2",{id:"milestone-demo-2-4-3-2023"},"Milestone Demo 2 (4-3-2023)"),(0,r.kt)("p",null,"F: Map View and live directions"),(0,r.kt)("p",null,"R: interactive map view provides live directions & user location"),(0,r.kt)("p",null,"F: Location specific time constraints"),(0,r.kt)("p",null,"R: user can specify time spent at each location"),(0,r.kt)("p",null,"R: user can specify arrival time at each location"),(0,r.kt)("p",null,"F: Algorithm optimization based on time constraints"),(0,r.kt)("p",null,"R: update algorithm to account for time constraints"),(0,r.kt)("p",null,"R: algorithm tells user if route isn\u2019t possible based on time constraints"),(0,r.kt)("p",null,"F: Create and run route"),(0,r.kt)("p",null,"R: Optimization algorithm to organize locations"),(0,r.kt)("h2",{id:"milestone-demo-3-4-17-2023"},"Milestone Demo 3 (4-17-2023)"),(0,r.kt)("p",null,"F: Different modes of transportation"),(0,r.kt)("p",null,"R: user can select between car, walking, or bikes"),(0,r.kt)("p",null,"F: Gas efficiency specification"),(0,r.kt)("p",null,"R: user can input MPG, preference for gas efficiency toggle"),(0,r.kt)("p",null,"F: algorithm accounts for gas efficiency"),(0,r.kt)("p",null,"R: if gas efficiency is determined important, algorithm re-calculates"),(0,r.kt)("p",null,"F: Additional preferences (tolls, ferries, specific road avoidance)"),(0,r.kt)("p",null,"R: update algorithm based on these restraints"),(0,r.kt)("p",null,"R: user is notified if path is not possible based on restraints"))}u.isMDXComponent=!0}}]);