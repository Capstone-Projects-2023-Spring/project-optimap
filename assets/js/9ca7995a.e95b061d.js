"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:2},i="Integration tests",o={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration tests",description:"Jest will be used alongside React to mock objects",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-optimap/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"benjaminrittenhouse",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit tests",permalink:"/project-optimap/docs/testing/unit-testing"},next:{title:"acceptence-testing",permalink:"/project-optimap/docs/testing/acceptence-testing"}},c={},l=[{value:"Add Location Test (Use Case #1)",id:"add-location-test-use-case-1",level:3},{value:"Access Saved Route Test (Use Case #2)",id:"access-saved-route-test-use-case-2",level:3},{value:"Transportation Mode Test (Use Case #3)",id:"transportation-mode-test-use-case-3",level:3},{value:"Set Time Arival Test (Use Case #4)",id:"set-time-arival-test-use-case-4",level:3},{value:"Reroute on Traffic Test (Use Case #5)",id:"reroute-on-traffic-test-use-case-5",level:3}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,a.kt)("p",null,"Jest will be used alongside React to mock objects"),(0,a.kt)("h3",{id:"add-location-test-use-case-1"},"Add Location Test (Use Case #1)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"Test: Verify user can add a list of routes into a text field followed by clicking on submit, which calculates the best routes by reordering the destinations for the \nshortest time\n\nResult: Pass if user can correctly add a list of routes and after clicking on submit, their route is correctly calculated and trip begins\n")),(0,a.kt)("h3",{id:"access-saved-route-test-use-case-2"},"Access Saved Route Test (Use Case #2)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"Test: Verify user can view previously saved routes and begin their trip upon clicking a saved route\n\nResult: Pass if user can correctly view their saved routes and begin their trip upon clicking a saved route\n")),(0,a.kt)("h3",{id:"transportation-mode-test-use-case-3"},"Transportation Mode Test (Use Case #3)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"Test: Verify user can change their transportation mode to either walking, driving, or biking\n\nResult: Pass if user can correctly change their transportation mode and starting a trip will have the updated transportation mode\n")),(0,a.kt)("h3",{id:"set-time-arival-test-use-case-4"},"Set Time Arival Test (Use Case #4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"Test: Verify user can set an arrival time on locations being added onto a trip\n\nResult: Pass if user can correctly set an arrival time on locations\n")),(0,a.kt)("h3",{id:"reroute-on-traffic-test-use-case-5"},"Reroute on Traffic Test (Use Case #5)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"Test: Verify user can rearrange their route \n\nResult: Pass if user can correctly rearrange their route\n")))}d.isMDXComponent=!0}}]);