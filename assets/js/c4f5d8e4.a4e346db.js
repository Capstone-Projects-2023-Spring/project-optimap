"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4195],{9337:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return n.createElement("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{}},e.children,e.src?n.createElement("img",{src:e.src,alt:e.alt}):n.createElement(n.Fragment,null),n.createElement("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"}},e.caption),n.createElement("figcaption",{align:e.align?e.align:"center",style:{}},e.subcaption))}},8140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(7294),i=a(6010),r=a(9960),o=a(2263),s=a(782),l=a(7462),u=a(3905);const c={toc:[{value:"Website URL",id:"website-url",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2},{value:"Required Resources",id:"required-resources",level:2},{value:"Extra Challenge Requirement",id:"extra-challenge-requirement",level:2},{value:"Collaborators",id:"collaborators",level:2}]};function h(e){let{components:t,...a}=e;return(0,u.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118262"},(0,u.kt)("img",{parentName:"a",src:"https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg",alt:"Open in Codespaces"}))),(0,u.kt)("div",{align:"center"},(0,u.kt)("h1",{id:"optimap"},"OptiMap"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/OM/issues"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})),"\n",(0,u.kt)("a",{parentName:"p",href:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/deployments/activity_log?environment=github-pages"},(0,u.kt)("img",{parentName:"a",src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})),"\n",(0,u.kt)("a",{parentName:"p",href:"https://capstone-projects-2023-spring.github.io/project-optimap/"},(0,u.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})))),(0,u.kt)("h2",{id:"website-url"},"Website URL"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://stpaex.github.io/OptiMap/"},"OptiMap")),(0,u.kt)("h2",{id:"keywords"},"Keywords"),(0,u.kt)("p",null,"Section 002, React JS, FireBase, Node.js, Google Maps API, JEST Testing"),(0,u.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,u.kt)("p",null,"OptiMap is a React JS progressive web application that ensures users get the most efficient route to any list of locations they enter. This is determined by a few factors, such as location, arrival time and time spent at each location, and time or distance between locations. An example user may need to plug in 10 or more locations that they need to visit, as well as the amount of time they expect to spend at each location. Additionally, they may add a time they need to be all done by. Our application gives them the most efficient path between locations, and allows them to properly plan their day of driving."),(0,u.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,u.kt)("p",null,"This application can be used by a plethora of users. A typical user will log in and plug\nin as many locations as they want into the app after creating an account. By default, the entire\ntrip is reordered in the most efficient manner in terms of time and distance from one\nlocation to the next. Users can further customize their trip by specifying the amount of time they\nexpect to spend at each location or arrival time (or both). Our app is able to update the routes based on factors via Google Maps API such as traffic times, create the most efficient route, and give them an overview of their trip in general. One of the main features is redirecting users to Google Maps for the navigation itself. For example, a user may decide to use our app\u2019s default feature of optimizing trip by time and distance on X locations. They will first enter X locations, followed by clicking start. This will redirect them to Google Maps with our optimized directions, turn by turn. The user will follow these directions and can return to the app to re-optimize a route if needed. The stored route within our app can also be shared via the OptiMap friend system backed by Firebase. You can friend other users and share saved routes with them to plan a trip with one another."),(0,u.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,u.kt)("p",null,"This application is written in React JS as a progressive web app. This allows the app to be accesible on any platform. The backend for user authentication and storage uses Google Firebase. This is a free application where login and new account processes can be done using their services, as well as storage of individual records or previous routes that the user has gone through. "),(0,u.kt)("h2",{id:"background"},"Background"),(0,u.kt)("p",null,"To be fully transparent, there are many apps out there that are for mapping routes, going\nfrom point A to point B, and overall figuring out the most efficient route for something like\ndelivery. For example, the Doordash app will give you the routes from your location to the\ndelivery location, even if you have many places to deliver to in a row. However, our app will\noffer a unique experience because you can now determine more specific details such as the\namount of time you plan to spend on each location, and get the most efficient route between, say,\n10 or more locations. We have not been able to find any mapping apps that offer what we are\nplanning on offering, including the social media aspect and sharing routes. Furthermore, someone as big as Google maps only offers around 10 or so maximum destinations. We would like to offer more than this in an efficient manner and allow the user to plan their day so they can understand where they are headed at all moments and what time their day is expected to be \u201cover\u201d."),(0,u.kt)("h2",{id:"required-resources"},"Required Resources"),(0,u.kt)("p",null,"The required resources for this project are all software related, and it will mainly rely on\nReact JS to create the app itself. Then, for the database and user authentication, Google\nFirebase can allow users to sign in and store any information about their previous routes. Finally, the Google Maps API is used to get direction and traffic / time information between locations."),(0,u.kt)("h2",{id:"extra-challenge-requirement"},"Extra Challenge Requirement"),(0,u.kt)("p",null,"To achieve the most efficient route, the app will take into account traffic, road closure, and\nwrong turns and reroute promptly."),(0,u.kt)("h2",{id:"collaborators"},"Collaborators"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/benjaminrittenhouse"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/67079818?v=4",width:"100;",alt:"BenjaminRittenhouse"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Benjamin Rittenhouse")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/rickwu135"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/67079818?v=4",width:"100;",alt:"RickyWu"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Ricky Wu")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/stpaeX"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/97627069?v=4",width:"100;",alt:"StevenLin"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Steven Lin")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/AlexHarvey63"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/89492718?v=4",width:"100;",alt:"AlexHarvey"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Alex Harvey")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/PandaSwaqq"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/33043105?v=4",width:"100;",alt:"StevenLin"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Steven Lin")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/DatNguyen0512"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/97911087?v=4",width:"100;",alt:"DatNguyen"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Dat Nguyen")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/Endri2001"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/57300637?v=4",width:"100;",alt:"EndriPellumbi"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Endri Pellumbi")))),(0,u.kt)("td",{align:"center"},(0,u.kt)("a",{href:"https://github.com/kvphan7"},(0,u.kt)("img",{src:"https://avatars.githubusercontent.com/u/89526986?v=4",width:"100;",alt:"KennyPhan"}),(0,u.kt)("br",null),(0,u.kt)("sub",null,(0,u.kt)("b",null,"Kenny Phan")))))))}function d(){return n.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},n.createElement(h,null))}h.isMDXComponent=!0;const m="heroBanner_qdFl",p="buttons_AeoN";var g=a(6706);function b(){const{siteConfig:e}=(0,o.Z)();return n.createElement("header",{className:(0,i.Z)("hero hero--primary",m)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:p},n.createElement(r.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro"},"Docusaurus Tutorial - 5min \u23f1\ufe0f"))))}function A(){const{siteConfig:e}=(0,o.Z)();return n.createElement(s.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(b,null),n.createElement("main",null,n.createElement(g.Z,null,n.createElement(d,null))))}},6706:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(4912);function r(e){return n.createElement(n.Fragment,null,n.createElement(i.Z,e))}},6922:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),i=a(9337),r=a(9676);const o={React:n,...n,Figure:i.Z,dinosaur:r.Z}},9676:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);