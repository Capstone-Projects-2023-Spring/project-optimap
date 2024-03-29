[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10118262)
<div align="center">

# OptiMap
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/OM/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/Capstone-Projects-2023-Spring/project-optimap/deployments/activity_log?environment=github-pages)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-spring.github.io/project-optimap/)


</div>


## Website URL
[OptiMap](https://stpaex.github.io/OptiMap/)

## Keywords

Section 002, React JS, FireBase, Node.js, Google Maps API, JEST Testing

## Project Abstract

OptiMap is a React JS progressive web application that ensures users get the most efficient route to any list of locations they enter. This is determined by a few factors, such as location, arrival time and time spent at each location, and time or distance between locations. An example user may need to plug in 10 or more locations that they need to visit, as well as the amount of time they expect to spend at each location. Additionally, they may add a time they need to be all done by. Our application gives them the most efficient path between locations, and allows them to properly plan their day of driving.

## High Level Requirement

This application can be used by a plethora of users. A typical user will log in and plug 
in as many locations as they want into the app after creating an account. By default, the entire 
trip is reordered in the most efficient manner in terms of time and distance from one 
location to the next. Users can further customize their trip by specifying the amount of time they 
expect to spend at each location or arrival time (or both). Our app is able to update the routes based on factors via Google Maps API such as traffic times, create the most efficient route, and give them an overview of their trip in general. One of the main features is redirecting users to Google Maps for the navigation itself. For example, a user may decide to use our app’s default feature of optimizing trip by time and distance on X locations. They will first enter X locations, followed by clicking start. This will redirect them to Google Maps with our optimized directions, turn by turn. The user will follow these directions and can return to the app to re-optimize a route if needed. The stored route within our app can also be shared via the OptiMap friend system backed by Firebase. You can friend other users and share saved routes with them to plan a trip with one another.

## Conceptual Design

This application is written in React JS as a progressive web app. This allows the app to be accesible on any platform. The backend for user authentication and storage uses Google Firebase. This is a free application where login and new account processes can be done using their services, as well as storage of individual records or previous routes that the user has gone through. 

## Background

To be fully transparent, there are many apps out there that are for mapping routes, going 
from point A to point B, and overall figuring out the most efficient route for something like 
delivery. For example, the Doordash app will give you the routes from your location to the 
delivery location, even if you have many places to deliver to in a row. However, our app will 
offer a unique experience because you can now determine more specific details such as the 
amount of time you plan to spend on each location, and get the most efficient route between, say, 
10 or more locations. We have not been able to find any mapping apps that offer what we are 
planning on offering, including the social media aspect and sharing routes. Furthermore, someone as big as Google maps only offers around 10 or so maximum destinations. We would like to offer more than this in an efficient manner and allow the user to plan their day so they can understand where they are headed at all moments and what time their day is expected to be “over”.

## Required Resources

The required resources for this project are all software related, and it will mainly rely on 
React JS to create the app itself. Then, for the database and user authentication, Google 
Firebase can allow users to sign in and store any information about their previous routes. Finally, the Google Maps API is used to get direction and traffic / time information between locations.

## Extra Challenge Requirement

To achieve the most efficient route, the app will take into account traffic, road closure, and 
wrong turns and reroute promptly.

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/benjaminrittenhouse">
            <img src="https://avatars.githubusercontent.com/u/67079818?v=4" width="100;" alt="BenjaminRittenhouse"/>
            <br />
            <sub><b>Benjamin Rittenhouse</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/rickwu135">
            <img src="https://avatars.githubusercontent.com/u/67079818?v=4" width="100;" alt="RickyWu"/>
            <br />
            <sub><b>Ricky Wu</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/stpaeX">
            <img src="https://avatars.githubusercontent.com/u/97627069?v=4" width="100;" alt="StevenLin"/>
            <br />
            <sub><b>Steven Lin</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/AlexHarvey63">
            <img src="https://avatars.githubusercontent.com/u/89492718?v=4" width="100;" alt="AlexHarvey"/>
            <br />
            <sub><b>Alex Harvey</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/PandaSwaqq">
            <img src="https://avatars.githubusercontent.com/u/33043105?v=4" width="100;" alt="StevenLin"/>
            <br />
            <sub><b>Steven Lin</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/DatNguyen0512">
            <img src="https://avatars.githubusercontent.com/u/97911087?v=4" width="100;" alt="DatNguyen"/>
            <br />
            <sub><b>Dat Nguyen</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Endri2001">
            <img src="https://avatars.githubusercontent.com/u/57300637?v=4" width="100;" alt="EndriPellumbi"/>
            <br />
            <sub><b>Endri Pellumbi</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/kvphan7">
            <img src="https://avatars.githubusercontent.com/u/89526986?v=4" width="100;" alt="KennyPhan"/>
            <br />
            <sub><b>Kenny Phan</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )