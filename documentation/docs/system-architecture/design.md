---
sidebar_position: 1
---
# Design

## Front-end Class Diagram

[![](https://mermaid.ink/img/pako:eNqVU01Lw0AQ_SthT4rtH8hBECsqVJFGPEgu6-40HZqdCZvZSin976ZNpbEmaTOXXeY95s3nRhm2oGJlcl2WE9SZ1y6lqLK9J5pyhpQYD0DRpgZ2duOBLPir6zhaMdojMF5osjkk4cuhdML31ZPBX3ibUlP4iR0M151ADgLdujmaZa_siy4-EL6HaH4yu-6EvM56BWccBJ6pCDJE887aKRstyNTJmYHjFZylvaO7ZB6vLDjHOtYbF6E4m-5JgAREkLJySJmPunyYV6oIZNZtSZ7WwVSK10hS9pbU3Orx-LaxbDXeWL4dfFiKVuw4v1b4X9taWb-9USPlwDuNtjrJfZ9SJQtwkKq4-lrtl6lKaVvxdBBO1mRULD7ASIXCaoHDBdfO7Q8q0TQX?type=png)](https://mermaid.live/edit#pako:eNqVU01Lw0AQ_SthT4rtH8hBECsqVJFGPEgu6-40HZqdCZvZSin976ZNpbEmaTOXXeY95s3nRhm2oGJlcl2WE9SZ1y6lqLK9J5pyhpQYD0DRpgZ2duOBLPir6zhaMdojMF5osjkk4cuhdML31ZPBX3ibUlP4iR0M151ADgLdujmaZa_siy4-EL6HaH4yu-6EvM56BWccBJ6pCDJE887aKRstyNTJmYHjFZylvaO7ZB6vLDjHOtYbF6E4m-5JgAREkLJySJmPunyYV6oIZNZtSZ7WwVSK10hS9pbU3Orx-LaxbDXeWL4dfFiKVuw4v1b4X9taWb-9USPlwDuNtjrJfZ9SJQtwkKq4-lrtl6lKaVvxdBBO1mRULD7ASIXCaoHDBdfO7Q8q0TQX)

The LoginScreen class handles user's login credentials. The HomeScreen class shows the users the routes they have taken before and saved, along with directions. It then links to other classes such as MapView, RouteInput, NotificationPopup, and Settings. The MapView class shows the user the map of their route and allows them to interact with it, such as zooming in and out. The RouteInput class is where the user enters the locations they want to visit, and the time they plan to spend at each location. The NotifcationPopup class will allow the user to know if their planned route is not possible due to certain constraints such as traffic or time. The Settings class lets the user specify the time they plan to finish the route or other factors that would affect the route optimization. 

## Back-end Class Diagram

[![](https://mermaid.ink/img/pako:eNp9VE1PwzAM_StRTiDoH9gBaQwhkPgSjFsvJvFGWJtMrjs0pv13kqxN163bpaqfnfeeXTcbqZxGOZJZluWWDRc4EregFhlaLSYFVJW4MzAnKHMba1TAEvRZIYksuxHvrmbMrRCvSzal-TsPTwlmM6PGb4_HuRfHxueAjbMfSCujIsEAHMuDg5C_A4YvqM6AyUsPPSHXq0kGjzL9RuJsorjYhFiIrPaBhRKbcOkLfh3pJqRg6cFU7GjdVhCujKv9iAlVMFU1iQpWqGMPLaIPSnbPq8LNjb247CJ_JoWKEBgjTcIC8x6yDY-unZhJ_RRuN6rWgx8MjvmpQXs-QOsWT1Jz5GnvxKBktxCb1OrPomKCPdWJN-ERY7n14vgb6R6Un2Z_IjNjdeSE4nSf3adMqryDwhfv8YUuutQg29C6NrRXNuTWYU0Gj6YFS80f6od9wU7aI4RMBld74FZeyxKpBKP97x2pcukH5FdRjvyrBlrkMrehDmp2H2ur5IipxmtZL70kNj95C6I2XvZ5d13EW2P7Dx0xZEI?type=png)](https://mermaid.live/edit#pako:eNp9VE1PwzAM_StRTiDoH9gBaQwhkPgSjFsvJvFGWJtMrjs0pv13kqxN163bpaqfnfeeXTcbqZxGOZJZluWWDRc4EregFhlaLSYFVJW4MzAnKHMba1TAEvRZIYksuxHvrmbMrRCvSzal-TsPTwlmM6PGb4_HuRfHxueAjbMfSCujIsEAHMuDg5C_A4YvqM6AyUsPPSHXq0kGjzL9RuJsorjYhFiIrPaBhRKbcOkLfh3pJqRg6cFU7GjdVhCujKv9iAlVMFU1iQpWqGMPLaIPSnbPq8LNjb247CJ_JoWKEBgjTcIC8x6yDY-unZhJ_RRuN6rWgx8MjvmpQXs-QOsWT1Jz5GnvxKBktxCb1OrPomKCPdWJN-ERY7n14vgb6R6Un2Z_IjNjdeSE4nSf3adMqryDwhfv8YUuutQg29C6NrRXNuTWYU0Gj6YFS80f6od9wU7aI4RMBld74FZeyxKpBKP97x2pcukH5FdRjvyrBlrkMrehDmp2H2ur5IipxmtZL70kNj95C6I2XvZ5d13EW2P7Dx0xZEI)

The database class stores and retrieves data for other classes, such as, including user data, route data, notification service data, optimizer data, and traffic API data. TrafficAPI class handles traffic data which will then be sent to the optimizer class to optimize the route based on real-time traffic conditions.  Route class contains information regarding a specific route, such as the locations and time expected to spend at each location. The optimizer class handles finding the optimal route for the user's inputted location, time constraints, and any other factors. It uses Dijkstra's algorithm and references the TrafficAPI to get traffic data for better optimization. NotificationServices class is responsible to notify the user if their planned route is not possible or if their are any other issues such as traffic or road blockage. The User class contains user information such as, login credentials, saved routes, route history, and directions. It has methods for

## Entity-relation Diagram

![](/img/ER.png)

## Sequence Diagrams
### Sequence Diagram 1 (Use Case #1)

```mermaid

sequenceDiagram
    actor User
    participant HomeScreen
    participant CreateRouteScreen
    participant AddLocation
    participant DijkstrasAlgo
    participant GoogleMapsAPI
    participant MapView

    User->>HomeScreen: Navigates to Home Screen
    HomeScreen->>CreateRouteScreen: Selects 'Create Route'
    CreateRouteScreen->>AddLocation: Add location (addLocation())
    activate AddLocation
    AddLocation->>GoogleMapsAPI: Requests location search (requestLocation())
    GoogleMapsAPI-->>AddLocation: Returns search results
    AddLocation-->>CreateRouteScreen: Sends selected location
    deactivate AddLocation
    CreateRouteScreen->>MapView: Displays location on map (displayLocation())
    CreateRouteScreen->>AddLocation: Add location again (addLocation())
    activate AddLocation
    AddLocation->>GoogleMapsAPI: Requests location search (requestLocation())
    GoogleMapsAPI-->>AddLocation: Returns search results
    AddLocation-->>CreateRouteScreen: Sends selected location
    deactivate AddLocation
    CreateRouteScreen->>MapView: Displays location on map (displayLocation())
    CreateRouteScreen->>AddLocation: Add location again (addLocation())
    activate AddLocation
    AddLocation->>GoogleMapsAPI: Requests location search (requestLocation())
    GoogleMapsAPI-->>AddLocation: Returns search results
    AddLocation-->>CreateRouteScreen: Sends selected location
    deactivate AddLocation
    CreateRouteScreen->>MapView: Displays location on map (displayLocation())
    CreateRouteScreen->>DijkstrasAlgo: optimizeRoute()
    activate DijkstrasAlgo
    DijkstrasAlgo-->>CreateRouteScreen: Optimized Route
    deactivate DijkstrasAlgo
    CreateRouteScreen->>MapView: startRoute()
```
** *Use Case #1 Sequence Diagram: As a user, I would like to be able to add as many destinations as I want to my route* **

1. The User opens the OptiMap app
2. The User selects "Create Route"
3. The User types in a location and selects add
4. The User repeats this process until satisfied
5. The User selects Start Route

### Sequence Diagram 2 (Use Case #2)

```mermaid

sequenceDiagram
    title Accessing Previous Routes from Saved Trips
    actor User
    User->>OptiMap: Logs in
    OptiMap-->>User: Displays Dashboard
    User->>OptiMap: Clicks on "Recent Trips"
    OptiMap->>+Database: Requests the list of recent trips for the User
    Database-->>OptiMap: Returns the list of recent trips for the User
    OptiMap-->>User: Displays the list of recent trips
    User->>OptiMap: Selects a saved route from the list
    OptiMap->>+Database: Requests the details of the selected saved route
    Database-->>OptiMap: Returns the details of the selected saved route
    OptiMap-->>User: Displays the details of the selected saved route
    User->>OptiMap: Confirms to use the selected saved route
    OptiMap-->>User: Redirects to the selected saved route

```
** *Use Case #2 Sequence Diagram: As a user, I would like to be able to access previous routes that I have saved* **

### Sequence Diagram 3 (Use Case #3)

```mermaid

sequenceDiagram
    participant A as Actor
    participant H as HomeScreen
    participant C as CreateRouteScreen
    participant T as TransportationButton
    A ->> H: opens app
    H ->> C: selects "Create Route"
    C ->> T: chooses to change transportation mode
    T -->> C: changed to bicycle
```
** *Use Case #3 Sequence Diagram: As a user, I would like to be able to change the mode of transportation to further optimize my route* **
### Sequence Diagram 4 (Use Case #4)

### Sequence Diagram 5 (Use Case #5)
```mermaid

sequenceDiagram
    title Rerouting in special circumstances
    actor User
    User->>HomeScreen: Navigates to Home Screen
    HomeScreen->>CreateRouteScreen: Selects 'Create Route'
    loop i < numOfLocations
    note over CreateRouteScreen: Add every location
    CreateRouteScreen->>AddLocation:Add Location
    activate AddLocation
    AddLocation->>GoogleMapsAPI:Request Location
    GoogleMapsAPI -->>AddLocation:Return search results

    AddLocation -->>CreateRouteScreen: Sends Selected Location
    deactivate AddLocation
    end 
    CreateRouteScreen->>DijkstrasAlgo:optimizeRoute()
    activate DijkstrasAlgo
    DijkstrasAlgo-->>CreateRouteScreen:Optimized Route
    deactivate DijkstrasAlgo

    CreateRouteScreen->>MapView:startRoute()

    GoogleMapsAPI->>ExceptionHandler: Road is closed 
    ExceptionHandler ->>DijkstrasAlgo:optimizeRoute(different weights)
    DijkstrasAlgo -->>ExceptionHandler:Optimized Route
    ExceptionHandler ->>MapView: Update Route
```
** *Use Case #5 Sequence Diagram: As a user, I would like for my route to be rerouted on the basis of various road and traffic conditions* **