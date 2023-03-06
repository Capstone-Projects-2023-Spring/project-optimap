"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,description:"Design Document"},i="Design Document - Part II API",o={unversionedId:"api-specification/design-api-intro",id:"api-specification/design-api-intro",title:"Design Document - Part II API",description:"Design Document",source:"@site/docs/api-specification/design-api-intro.md",sourceDirName:"api-specification",slug:"/api-specification/design-api-intro",permalink:"/project-optimap/docs/api-specification/design-api-intro",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/api-specification/design-api-intro.md",tags:[],version:"current",lastUpdatedBy:"rickwu135",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Design Document"},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-optimap/docs/category/api-specification"},next:{title:"API 1 - Swagger OptiMap",permalink:"/project-optimap/docs/api-specification/openapi-spec"}},s={},p=[{value:"Front-end",id:"front-end",level:2},{value:"Class: LoginScreen",id:"class-loginscreen",level:3},{value:"Class: HomeScreen",id:"class-homescreen",level:3},{value:"Class: MapView",id:"class-mapview",level:3},{value:"Class: RouteInput",id:"class-routeinput",level:3},{value:"Class: NotificationPopup",id:"class-notificationpopup",level:3},{value:"Class: Settings",id:"class-settings",level:3},{value:"Back-end",id:"back-end",level:2},{value:"Class: User",id:"class-user",level:3},{value:"Class: Route",id:"class-route",level:3},{value:"Class: Optimizer",id:"class-optimizer",level:3},{value:"Class: TrafficAPI",id:"class-trafficapi",level:3},{value:"Class: NotificationService",id:"class-notificationservice",level:3},{value:"Class: Database",id:"class-database",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design-document---part-ii-api"},"Design Document - Part II API"),(0,r.kt)("h2",{id:"front-end"},"Front-end"),(0,r.kt)("h3",{id:"class-loginscreen"},"Class: LoginScreen"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The LoginScreen class is responsible for rendering the login screen and handling user input for authentication. It includes a handleSubmit() method that handles user authentication when the login button is clicked, and a handleChange() method that updates the component's state when user inputs change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username: string - Stores the user's username.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password: string - Stores the user's password."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Renders the login screen."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: None."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleSubmit(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Handles user authentication when the login button is clicked."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have entered valid login credentials."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleChange(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Updates the component's state when user inputs change."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: User inputs must have changed."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-homescreen"},"Class: HomeScreen"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The HomeScreen class displays the user's history of routes, saved routes, and directions. It includes a handleDelete() method that deletes a route from the user's history, and a handleClick() method that handles user clicks on a route."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routes: array - Stores the user's history of routes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"savedRoutes: array - Stores the user's saved routes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directions: array - Stores the directions for a selected route."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Renders the home screen."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: None."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleDelete(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Deletes a route from the user's history."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have selected a route to delete."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleClick(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Handles user clicks on a route."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have clicked on a valid route."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-mapview"},"Class: MapView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The MapView class is responsible for displaying the map with the optimized route and allowing the user to interact with it. It includes a handleZoom() method that handles zooming in and out of the map, and a handleDrag() method that handles map dragging."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map: object - Stores the map object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"route: object - Stores the optimized route."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Renders the map."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: None."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleZoom(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Handles zooming in and out of the map."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have interacted with the zoom controls."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleDrag(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Handles map dragging."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have dragged the map."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-routeinput"},"Class: RouteInput"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The RouteInput class allows the user to enter a list of locations and the time expected to spend at each location. It includes a handleAddLocation() method that adds a new location to the list, a handleRemoveLocation() method that removes a location from the list, and a handleTimeChange() method that handles changes to the time expected to spend at a location."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locations: array - Stores the list of locations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeExpected: array - Stores the expected time at each location."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Renders the RouteInput component."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: None."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleAddLocation(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Adds a new location to the list."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have entered a new location."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleRemoveLocation(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Removes a location from the list."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have selected a location to remove."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleTimeChange(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Handles changes to the time expected to spend at a location."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have changed the time expected to spend at a location."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-notificationpopup"},"Class: NotificationPopup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The NotificationPopup class is responsible for displaying a popup if the planned route is not possible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message: string - Stores the message to be displayed in the popup."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Renders the NotificationPopup component."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: None."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-settings"},"Class: Settings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The Settings class allows the user to specify time constraints and other factors for the optimizer to consider. It includes a handleGasEfficiencyChange() method that handles changes to the user's vehicle's gas efficiency, and a handleTimeConstraintsChange() method that handles changes to the user's specified time constraints."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeConstraints: object - Stores the user's specified time constraints."))),(0,r.kt)("p",null,"Methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"render(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Renders the Settings component."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: None."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleTimeConstraintsChange(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Handles changes to the user's specified time constraints."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have entered valid time constraints."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h2",{id:"back-end"},"Back-end"),(0,r.kt)("h3",{id:"class-user"},"Class: User"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The User class represents a user of the app and allows for user-related functionality."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username: string - The username of the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password: string - The password of the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"routeHistory: array - An array of the user's previous routes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previousDirections: array - An array of the previous directions of the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"savedRoutes: array - An array of the user's saved routes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directions: array - An array of the directions for the current route."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"login(username: string, password: string): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Logs the user into the app."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The username and password entered by the user must match an existing user in the database."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"username: string - The username entered by the user."),(0,r.kt)("li",{parentName:"ul"},"password: string - The password entered by the user."))),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logout(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Logs the user out of the app."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must be currently logged in."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createRoute(locations: array): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Creates a new route for the user."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The locations array must contain at least two valid locations."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"locations: array - An array of locations for the new route."))),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saveRoute(): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Saves the current route for the user."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have a current route."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-route"},"Class: Route"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The Route class represents a route and allows for route-related functionality."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locations: array - An array of locations for the route.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeAtLocation: object - An object containing the time spent at each location."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addLocation(location: string): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Adds a location to the route."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The location entered by the user must be a valid location."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"location: string - The location to be added to the route."))),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTimeAtLocation(location: string): number"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Returns the time spent at a specified location."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The location entered by the user must be a valid location in the route."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"location: string - The location to get the time spent for."))),(0,r.kt)("li",{parentName:"ul"},"Return value: The time spent at the specified location."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-optimizer"},"Class: Optimizer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The Optimizer class finds the optimal route based on various factors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dijkstra: object - An object containing the Dijkstra algorithm.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeConstraints: object - An object containing the user's specified time constraints.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"otherFactors: object - An object containing other factors to consider for the optimal route."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"findOptimalRoute(): array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Finds the optimal route based on various factors."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have at least two valid locations for the route."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: An array of the optimal route."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-trafficapi"},"Class: TrafficAPI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The TrafficAPI class retrieves traffic data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trafficData: object - An object containing the retrieved traffic data."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTrafficData(): object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Retrieves traffic data from an external API."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The API must be functioning properly."),(0,r.kt)("li",{parentName:"ul"},"Parameters: None."),(0,r.kt)("li",{parentName:"ul"},"Return value: An object containing the retrieved traffic data."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-notificationservice"},"Class: NotificationService"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The NotificationService class sends notifications to the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"notifyUser(message: string): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Sends a notification to the user."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The user must have a valid notification service set up."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"message: string - The message to be sent in the notification."))),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))),(0,r.kt)("h3",{id:"class-database"},"Class: Database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:")," The Database class stores and retrieves data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data: object - An object containing all stored data."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storeData(key: string, value: any): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Stores data in the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The key and value must both be valid."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key: string - The key to store the data under."),(0,r.kt)("li",{parentName:"ul"},"value: any - The value to be stored in the database."))),(0,r.kt)("li",{parentName:"ul"},"Return value: None."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retrieveData(key: string): any"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Purpose: Retrieves data from the database."),(0,r.kt)("li",{parentName:"ul"},"Pre-condition: The key entered must be a valid key in the database."),(0,r.kt)("li",{parentName:"ul"},"Parameters:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key: string - The key to retrieve data for."))),(0,r.kt)("li",{parentName:"ul"},"Return value: The data stored under the specified key."),(0,r.kt)("li",{parentName:"ul"},"Exception Thrown: None.")))))}m.isMDXComponent=!0}}]);