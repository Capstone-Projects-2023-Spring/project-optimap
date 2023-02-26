---
sidebar_position: 2
---

# System Block Diagram

![Alt text](https://cdn.discordapp.com/attachments/610269056984940544/1079509642952056933/unnamed.png "Figure 1")

In **Figure 1**, we see the flow of the application from when a user first logs in. The client sees a login screen to enter username and password, which Firebase then authenticates, requiring a Firebase call. The user becomes authenticated and moves to the homescreen, where they can either logout or continue to use the app. Upon entering the app, the user may choose to either access a previous route, create a new one, or save their current route.. If the user chooses to create a route, the user enters their list of locations and submits them. These locations, stored as coordinates, are then passed to the Google Maps API as an API call. An example would be the very first API call and those successive API calls that follow, where the first coordinate is the user's current location, and the rest of the locations are plugged in and returned with distance and times. At that point, the shortests distance / time is determined and this location becomes the “current” location to then be plugged into the API again until all locations have been visited.

This can be considered as a modified Dijskstra’s algorithm with API calls. Once this algorithm is complete, the embedded & interactive maps UI is shown to the user with all of their locations plugged in. The term “embedded” is used because we are utilizing the Google Maps API to show a real-time map within our app using a “map view”. It is at this point that the user traverses through their trip and interacts with the map as needed, such as zooming in or out, to better understand their route. The user can then traverse through their trip and enjoy a seamless and efficient travel experience. 
