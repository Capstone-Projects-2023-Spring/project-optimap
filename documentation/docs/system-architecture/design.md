---
sidebar_position: 1
---
# Sequence Diagrams
## Sequence Diagram 1 (Use Case #1)

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