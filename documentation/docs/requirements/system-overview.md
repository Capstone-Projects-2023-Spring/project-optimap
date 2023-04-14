---
sidebar_position: 1
---

# System Overview

OptiMap is a React.JS application that will ensure users get the most efficient route minimizing distance and time to any location they plug into Google Maps. The application will be deployed on the web.

OptiMap will take user login credentials and authenticate them before using the service. OptiMap will utilize a Firebase database to store necessary information such as a history of routes and previous directions or saved routes or directions. It will make use of the versatility and ease of application that Firebase offers in order to save the most recent routes and other necessary information associated with the user.

With the rise of product delivery programs, finding the most efficient route in a large list of locations will become even more important. OptiMap will target this problem by allowing users to enter as many locations as they would need and then find the optimal path. These locations will not particularly have to be in “order”, as our app will determine the best route based on all of the plugged in locations.

The most efficient route will depend on a few key factors, such as miles per gallon, length of time spent at each location, and time restraints as specified by the user. The app will allow users to plug in any amount of locations that they need to visit, as well as the amount of time they expect to spend at each location. Additionally, they may specify a time they need to finish the route by. In order to assist users that plan on leaving on a specific time/day OptiMap will call the api to find out traffic information. In doing so the users can input the time they plan on leaving and get an optimal route off it. OptiMap will rearrange the order in which destinations are traveled to give users the most efficient path and to allow them to properly plan their travel. After a route has been optimized and created, users may save that route for future use. Additionally, our app will notify the user if the route they are attempting to do is “not possible”. For example, if they need to get to point X by 5pm, but the routes and times they plan to spend on 4 locations before that will exceed 5pm, we will make sure they know.


## Resources

Google Maps Platform | Google Developers, Google 
https://developers.google.com/maps

“Firebase Documentation.” Google, Google. 
 https://firebase.google.com/docs?authuser=0&hl=en.

“Introduction React.JS.” React.JS 
https://react.dev/reference/react
 
