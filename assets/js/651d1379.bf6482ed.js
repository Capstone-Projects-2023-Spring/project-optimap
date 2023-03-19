"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=s,m=u["".concat(p,".").concat(h)]||u[h]||l[h]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const o={sidebar_position:5},a="Use-case descriptions",i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Cases",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-optimap/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"benjaminrittenhouse",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-optimap/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-optimap/docs/category/software-development-plan"}},p={},c=[{value:"Use Cases",id:"use-cases",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,s.kt)("h2",{id:"use-cases"},"Use Cases"),(0,s.kt)("p",null,"I) User wants to add a list of as many destinations as possible so they can start running errands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User opens the application on their phone and log in to their account.\n2. User decides their destinations and inputs into the text box. \n3. They clicked on the submit button.\n4. The app starts to calculate the best routes by reordering the destinations for the \nshortest time.\n5. User clicks on the start button.\n6. User starts on their route\n7. User closes the app after the trip is complete\n")),(0,s.kt)("p",null,"II) User wants to access previous routes from saved trips to save time not reinputting the same route over and over again"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User is given a list of student addresses along with a route to follow\n2. User accidentally misplaced the sheet containing the route\n3. User opens OptiMap and logs onto their account.\n4. User opens their recent trip history\n5. Inside the list is their saved route\n6. User chooses that trip from the list and is ready to start driving\n")),(0,s.kt)("p",null,"III) User wants to change different transportation modes so they don't have to drive in a busy city"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User opens up OptiMap\n2. At the top, User sees three buttons with different images\n3. They are images of a car, a bicycle, and a person walking\n4. User clicks on the button with the bicycle\n5. User inputs the addresses for the route User wants to take\n6. User then presses start and OptiMap creates a route for they to take with a bicycle\n7. User is then ready to set off\n")),(0,s.kt)("p",null,"IV) User wants to set a time of arrival for each location as to finish priority jobs first"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User is given a list of addresses that they needs to deliver to\n2. Some addresses have a time next to them indicating that they need to be delivered \nbefore then\n3. User opens up the app and starts inputting all the addresses from the list\n4. User taps a field next to them that allows them to select what time to deliver by\n5. Once User is done inputting their list, User taps the start button\n6. OptiMap creates an optimized route that takes into account the restrictions that the user has \nplaced.\n")),(0,s.kt)("p",null,"V) User wants rerouting when a change in route happens so they don't get stuck in traffic or roadblocks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"1. User opens up OptiMap\n2. User inputs all they addresses into the text fields\n3. User presses start and OptiMap creates an optimized route for them\n4. User starts driving the route\n5. OptiMap receives an alert and is notified of a road closure and Optimap auto reroutes\n6. This makes it so one destination is now closer than the other\n7. Optimap notifies the user and rearranges the remaining route in order to make it \noptimized once again\n8. User continues driving the rest of the route\n")))}u.isMDXComponent=!0}}]);