"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},o="Activities",s={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-optimap/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"Ivan Dat Nguyen",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-optimap/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-optimap/docs/development-plan/tasks"}},l={},p=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Test/Bug Fixing",id:"testbug-fixing",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"activities"},"Activities"),(0,a.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,a.kt)("p",null,"For OptiMap, it will be a mobile app which requires information from the Google Maps\nAPI. The application will be written using React Native using the VSCode IDE, allowing\nit to be deployed to Android and iOS. We need to figure out the correct algorithm to\nreroute the google maps api properly either using Dijkstra's Algorithm or finding a better\nalternative. The next step is to link to the FireBase in order to start with database\ncreation and linking it with OptiMap in order to facilitate account creation and\ncommunication with the app itself. Lastly is creating a real time rerouter when traffic\nconditions and finding the best logic to reroute the routes again."),(0,a.kt)("h2",{id:"top-level-design"},"Top Level Design"),(0,a.kt)("p",null,"The top-level design for OptiMap will allow users to input multiple destinations and have\nthe app automatically reorder the destinations to get the fastest route that hits all\ndestinations. Any user who first uses OptiMap would be presented with a screen to\ncreate an account or login. It would then allow users to start inputting addresses they\nwould like to visit and when ready they would press the start button to start the\nrerouting. OptiMap would also have the ability to switch transportation types when\nsearching for routes such as bicycle or walking. OptiMap will also have the ability to\nreroute during the route when traffic problems arise that require a change while driving.\nOptiMap will also save routes to user accounts for easier reuse"),(0,a.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,a.kt)("p",null,"The front-end design will be written with React Native which uses JavaScript and\nTypeScript. The backend will be Google Firebase, which provides user authentication\nand storage of, for example, coordinates. A user can enter a list of routes, and our app\nwill optimize the trip for them based on the shortest and most efficient possible route\nbetween all entered locations (regardless of order entered). Our second main feature is\nthe ability to plan out your trip with more specificity. For example, if you can specify that\nyou are spending 1 hour at a location and 2 at a different one, our app will show you\ntotal time and distance, as well as other helpful information related to the trip. The\nroutes will be stored in a list in the form of coordinates instead of location names for\neasier saving within the database. The tables within the database can be named for\neasier recognition. The front end design of the app will start with a login page/sign up\npage. It will allow users to login and view their recent trips and favorite trips. The input\npage will be the page to input the locations that the user wants to travel to, with as many\nas they want. The current Google Maps only allows a certain amount, so we will allow\nour app to go past this limit and utilize API calls in the process. Users interact with the\ndatabase when they hit the start route button and that list of locations will be transmitted\nto the Firebase database as a \u201crecent\u201d trip. Users can also select their trip as a favorite\nand reference it in the future. This will also have to include API interaction, using the\ncoordinates and the Google Maps API to gain location information, plug in routes and\nrun live directions, and provide the map interface itself so the user can visualize their\nroutes. The map interface will be embedded into the app. That way we have a \u201cGoogle\nmap\u201d in our app that can get realtime information such as traffic, location names, and an\ninteractive map that users can scroll and click. This will avoid having to build and\nmaintain our very own map from scratch. We will also add traffic and live updates via\nnotifications if something has changed about the route or urgent information must be\ntold to the user."),(0,a.kt)("h2",{id:"testbug-fixing"},"Test/Bug Fixing"),(0,a.kt)("p",null,"Developing OptiMap will mostly be writing tests for the front end and testing databases.\nWe will utilize integration testing with Jest to make sure that database connection\nworks. We will utilize functional testing, usability testing and interface testing. Functional\ntesting for users to login and log out of their accounts. Usability testing to test whether\nusers are able to add locations and that the rerouting is working properly. Interface\ntesting is for the user interface and if navigation through the application is to test for\neasy navigation and ease of use. A large portion of testing will be ensuring the maps\nfully populate with the route and accurately reflects what the user entered. In addition\nwe will have to test and handle traffic and route updates while a session is live."))}u.isMDXComponent=!0}}]);