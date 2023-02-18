---
sidebar_position: 1
---

# Activities

## Requirements Gathering
For OptiMap, it will be a mobile app which requires information from the Google Maps 
API. The application will be written using React Native using the VSCode IDE, allowing 
it to be deployed to Android and iOS. We need to figure out the correct algorithm to 
reroute the google maps api properly either using Dijkstra's Algorithm or finding a better 
alternative. The next step is to link to the FireBase in order to start with database 
creation and linking it with OptiMap in order to facilitate account creation and 
communication with the app itself. Lastly is creating a real time rerouter when traffic 
conditions and finding the best logic to reroute the routes again.

## Top Level Design
The top-level design for OptiMap will allow users to input multiple destinations and have 
the app automatically reorder the destinations to get the fastest route that hits all 
destinations. Any user who first uses OptiMap would be presented with a screen to 
create an account or login. It would then allow users to start inputting addresses they 
would like to visit and when ready they would press the start button to start the 
rerouting. OptiMap would also have the ability to switch transportation types when 
searching for routes such as bicycle or walking. OptiMap will also have the ability to 
reroute during the route when traffic problems arise that require a change while driving. 
OptiMap will also save routes to user accounts for easier reuse

## Detailed Design
The front-end design will be written with React Native which uses JavaScript and 
TypeScript. The backend will be Google Firebase, which provides user authentication 
and storage of, for example, coordinates. A user can enter a list of routes, and our app 
will optimize the trip for them based on the shortest and most efficient possible route 
between all entered locations (regardless of order entered). Our second main feature is 
the ability to plan out your trip with more specificity. For example, if you can specify that 
you are spending 1 hour at a location and 2 at a different one, our app will show you 
total time and distance, as well as other helpful information related to the trip. The 
routes will be stored in a list in the form of coordinates instead of location names for 
easier saving within the database. The tables within the database can be named for 
easier recognition. The front end design of the app will start with a login page/sign up
page. It will allow users to login and view their recent trips and favorite trips. The input 
page will be the page to input the locations that the user wants to travel to, with as many 
as they want. The current Google Maps only allows a certain amount, so we will allow 
our app to go past this limit and utilize API calls in the process. Users interact with the 
database when they hit the start route button and that list of locations will be transmitted 
to the Firebase database as a “recent” trip. Users can also select their trip as a favorite 
and reference it in the future. This will also have to include API interaction, using the 
coordinates and the Google Maps API to gain location information, plug in routes and 
run live directions, and provide the map interface itself so the user can visualize their 
routes. The map interface will be embedded into the app. That way we have a “Google 
map” in our app that can get realtime information such as traffic, location names, and an 
interactive map that users can scroll and click. This will avoid having to build and 
maintain our very own map from scratch. We will also add traffic and live updates via 
notifications if something has changed about the route or urgent information must be 
told to the user.

## Test/Bug Fixing
Developing OptiMap will mostly be writing tests for the front end and testing databases. 
We will utilize integration testing with Jest to make sure that database connection 
works. We will utilize functional testing, usability testing and interface testing. Functional 
testing for users to login and log out of their accounts. Usability testing to test whether 
users are able to add locations and that the rerouting is working properly. Interface 
testing is for the user interface and if navigation through the application is to test for 
easy navigation and ease of use. A large portion of testing will be ensuring the maps 
fully populate with the route and accurately reflects what the user entered. In addition 
we will have to test and handle traffic and route updates while a session is live.
