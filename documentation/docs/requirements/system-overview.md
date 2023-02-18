---
sidebar_position: 1
---

# System Overview

## Project Abstract

This document proposes a mobile application that will ensure users get the most efficient route to any location they plug into maps. This can be determined by a few factors, such as miles per gallon, length of time spent at each location, and time restraints set by the user. A user may need to plug in 10 or more locations that they need to visit, as well as the amount of time they expect to spend at each location. Additionally, they may add a time they need to be all done by. Our application will let them know if this is possible, give them the most efficient path between locations, and allow them to properly plan their day of driving

## High Level Requirement

This application could be used by a plethora of users. A typical user will log in and plug in as many locations as they want into the app after creating an account. By default, the entire trip will be reordered in the most efficient manner in terms of time and distance from one location to the next. Users can further customize their trip by specifying the amount of time they expect to spend at each location. Our app will be able to update them on traffic times, create the most efficient route, and give them an overview of their trip in general. One of the main features is redirecting users to Google maps for the navigation itself. For example, a user may decide to use our app’s default feature of optimizing trip by time and distance on X locations. They will first enter X locations, followed by clicking “Start Trip”. The user will be prompted to navigate to their first destination after seeing the freshly computed route. Simply tapping "Go" will redirect them to Google Maps where they can begin their navigation. The user will switch between OptiMap and Google Maps after reaching each location until they have finished their entire trip. This works similar to the maps that Doordash uses.

## Conceptual Design

This application will be written in React Native. This will allow the app to be deployed on Android, iOS, and web. The backend for user authentication and storage may be created using Google Firebase. This is a free application where login and new account processes can be done using their API, as well as storage of individual records or previous routes that the user has gone through.

## Background

To be fully transparent, there are many apps out there that are for mapping routes, going from point A to point B, and overall figuring out the most efficient route for something like delivery. For example, the Doordash app will give you the routes from your location to the delivery location, even if you have many places to deliver to in a row. However, our app will offer a unique experience because you can now determine more specific details such as the amount of time you plan to spend on each location, and get the most efficient route between, say, 10 or more locations. We have not been able to find any mapping apps that offer what we are planning on offering. Furthermore, someone as big as Google maps only offers around 10 or so maximum destinations. We would like to offer more than this in an efficient manner and allow the user to plan their day so they can understand where they are headed at all moments and what time their day is expected to be “over”.

## Required Resources

The required resources for this project are all software related, and it will mainly rely on React Native to create the app itself. Then, for the database and user authentication, Google Firebase can allow users to sign in and store any information about their previous routes.

## Extra Challenge Requirement

To achieve the most efficient route, the app will take into account traffic, road closure, and wrong turns and reroute promptly.
