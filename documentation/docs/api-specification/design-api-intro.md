---
sidebar_position: 1
description: Design Document
---

Design Document - Part II API
=============================

## Front-end

### Class: LoginScreen
**Purpose:** The LoginScreen class is responsible for rendering the login screen and handling user input for authentication. It includes a handleSubmit() method that handles user authentication when the login button is clicked, and a handleChange() method that updates the component's state when user inputs change.

**Data Fields:**
- `username: string - Stores the user's username.`
- `password: string - Stores the user's password.`

**Methods:**
- `render(): void`
    - Purpose: Renders the login screen.
    - Pre-condition: None.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleSubmit(): void`
    - Purpose: Handles user authentication when the login button is clicked.
    - Pre-condition: The user must have entered valid login credentials.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleChange(): void`
    - Purpose: Updates the component's state when user inputs change.
    - Pre-condition: User inputs must have changed.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.


### Class: HomeScreen
**Purpose:** The HomeScreen class displays the user's history of routes, saved routes, and directions. It includes a handleDelete() method that deletes a route from the user's history, and a handleClick() method that handles user clicks on a route.

**Data Fields:**
- `routes: array - Stores the user's history of routes.`
- `savedRoutes: array - Stores the user's saved routes.`
- `directions: array - Stores the directions for a selected route.`

**Methods:**
- `render(): void`
    - Purpose: Renders the home screen.
    - Pre-condition: None.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleDelete(): void`
    - Purpose: Deletes a route from the user's history.
    - Pre-condition: The user must have selected a route to delete.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleClick(): void`
    - Purpose: Handles user clicks on a route.
    - Pre-condition: The user must have clicked on a valid route.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.


### Class: MapView
**Purpose:** The MapView class is responsible for displaying the map with the optimized route and allowing the user to interact with it. It includes a handleZoom() method that handles zooming in and out of the map, and a handleDrag() method that handles map dragging.

**Data Fields:**
- `map: object - Stores the map object.`
- `route: object - Stores the optimized route.`

**Methods:**
- `render(): void`
    - Purpose: Renders the map.
    - Pre-condition: None.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleZoom(): void`
    - Purpose: Handles zooming in and out of the map.
    - Pre-condition: The user must have interacted with the zoom controls.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleDrag(): void`
    - Purpose: Handles map dragging.
    - Pre-condition: The user must have dragged the map.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.


### Class: RouteInput
**Purpose:** The RouteInput class allows the user to enter a list of locations and the time expected to spend at each location. It includes a handleAddLocation() method that adds a new location to the list, a handleRemoveLocation() method that removes a location from the list, and a handleTimeChange() method that handles changes to the time expected to spend at a location.

**Data Fields:**
- `locations: array - Stores the list of locations.`
- `timeExpected: array - Stores the expected time at each location.`

**Methods:**
- `render(): void`
    - Purpose: Renders the RouteInput component.
    - Pre-condition: None.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleAddLocation(): void`
    - Purpose: Adds a new location to the list.
    - Pre-condition: The user must have entered a new location.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleRemoveLocation(): void`
    - Purpose: Removes a location from the list.
    - Pre-condition: The user must have selected a location to remove.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleTimeChange(): void`
    - Purpose: Handles changes to the time expected to spend at a location.
    - Pre-condition: The user must have changed the time expected to spend at a location.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.


### Class: NotificationPopup
**Purpose:** The NotificationPopup class is responsible for displaying a popup if the planned route is not possible.

**Data Fields:**
- `message: string - Stores the message to be displayed in the popup.`

**Methods:**
- `render(): void`
    - Purpose: Renders the NotificationPopup component.
    - Pre-condition: None.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.


### Class: Settings
**Purpose:** The Settings class allows the user to specify time constraints and other factors for the optimizer to consider. It includes a handleGasEfficiencyChange() method that handles changes to the user's vehicle's gas efficiency, and a handleTimeConstraintsChange() method that handles changes to the user's specified time constraints.

**Data Fields:**
- `timeConstraints: object - Stores the user's specified time constraints.`

Methods:

- `render(): void`
    - Purpose: Renders the Settings component.
    - Pre-condition: None.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `handleTimeConstraintsChange(): void`
    - Purpose: Handles changes to the user's specified time constraints.
    - Pre-condition: The user must have entered valid time constraints.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.


## Back-end


### Class: User

**Purpose:** The User class represents a user of the app and allows for user-related functionality.

**Data Fields:**
- `username: string - The username of the user.`
- `password: string - The password of the user.`
- `routeHistory: array - An array of the user's previous routes.`
- `previousDirections: array - An array of the previous directions of the user.`
- `savedRoutes: array - An array of the user's saved routes.`
- `directions: array - An array of the directions for the current route.`

**Methods:**
- `login(username: string, password: string): void`
    - Purpose: Logs the user into the app.
    - Pre-condition: The username and password entered by the user must match an existing user in the database.
    - Parameters:
        - username: string - The username entered by the user.
        - password: string - The password entered by the user.
    - Return value: None.
    - Exception Thrown: None.
- `logout(): void`
    - Purpose: Logs the user out of the app.
    - Pre-condition: The user must be currently logged in.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.
- `createRoute(locations: array): void`
    - Purpose: Creates a new route for the user.
    - Pre-condition: The locations array must contain at least two valid locations.
    - Parameters:
        - locations: array - An array of locations for the new route.
    - Return value: None.
    - Exception Thrown: None.
- `saveRoute(): void`
    - Purpose: Saves the current route for the user.
    - Pre-condition: The user must have a current route.
    - Parameters: None.
    - Return value: None.
    - Exception Thrown: None.

### Class: Route

**Purpose:** The Route class represents a route and allows for route-related functionality.

**Data Fields:**
- `locations: array - An array of locations for the route.`
- `timeAtLocation: object - An object containing the time spent at each location.`

**Methods:**
- `addLocation(location: string): void`
    - Purpose: Adds a location to the route.
    - Pre-condition: The location entered by the user must be a valid location.
    - Parameters:
        - location: string - The location to be added to the route.
    - Return value: None.
    - Exception Thrown: None.
- `getTimeAtLocation(location: string): number`
    - Purpose: Returns the time spent at a specified location.
    - Pre-condition: The location entered by the user must be a valid location in the route.
    - Parameters:
        - location: string - The location to get the time spent for.
    - Return value: The time spent at the specified location.
    - Exception Thrown: None.


### Class: Optimizer

**Purpose:** The Optimizer class finds the optimal route based on various factors.

**Data Fields:**
- `dijkstra: object - An object containing the Dijkstra algorithm.`
- `timeConstraints: object - An object containing the user's specified time constraints.`
- `otherFactors: object - An object containing other factors to consider for the optimal route.`

**Methods:**
- `findOptimalRoute(): array`
    - Purpose: Finds the optimal route based on various factors.
    - Pre-condition: The user must have at least two valid locations for the route.
    - Parameters: None.
    - Return value: An array of the optimal route.
    - Exception Thrown: None.


### Class: TrafficAPI

**Purpose:** The TrafficAPI class retrieves traffic data.

**Data Fields:**
- `trafficData: object - An object containing the retrieved traffic data.`

**Methods:**
- `getTrafficData(): object`
    - Purpose: Retrieves traffic data from an external API.
    - Pre-condition: The API must be functioning properly.
    - Parameters: None.
    - Return value: An object containing the retrieved traffic data.
    - Exception Thrown: None.

### Class: NotificationService

**Purpose:** The NotificationService class sends notifications to the user.

**Data Fields:**
- None

**Methods:**
- `notifyUser(message: string): void`
    - Purpose: Sends a notification to the user.
    - Pre-condition: The user must have a valid notification service set up.
    - Parameters:
        - message: string - The message to be sent in the notification.
    - Return value: None.
    - Exception Thrown: None.


### Class: Database
**Purpose:** The Database class stores and retrieves data.

**Data Fields:**
- `data: object - An object containing all stored data.`

**Methods:**
- `storeData(key: string, value: any): void`
    - Purpose: Stores data in the database.
    - Pre-condition: The key and value must both be valid.
    - Parameters:
        - key: string - The key to store the data under.
        - value: any - The value to be stored in the database.
    - Return value: None.
    - Exception Thrown: None.
- `retrieveData(key: string): any`
    - Purpose: Retrieves data from the database.
    - Pre-condition: The key entered must be a valid key in the database.
    - Parameters:
        - key: string - The key to retrieve data for.
    - Return value: The data stored under the specified key.
    - Exception Thrown: None.