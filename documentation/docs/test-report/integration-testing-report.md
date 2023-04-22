---
sidebar_position: 2
---
# Integration tests
Jest will be used alongside React to mock objects

### Add Location Test (Use Case #1)
```diff
Test: Verify user can add a list of routes into a text field followed by clicking on submit, which calculates the best routes by reordering the destinations for the 
shortest time

Result: Pass if user can correctly add a list of routes and after clicking on submit, their route is correctly calculated and trip begins
```

### Access Saved Route Test (Use Case #2)
```diff
Test: Verify user can view previously saved routes and begin their trip upon clicking a saved route

Result: Pass if user can correctly view their saved routes and begin their trip upon clicking a saved route
```

### Transportation Mode Test (Use Case #3)
```diff
Test: Verify user can change their transportation mode to either walking, driving, or biking

Result: Pass if user can correctly change their transportation mode and starting a trip will have the updated transportation mode
```

### Set Time Arival Test (Use Case #4)
```diff
Test: Verify user can set an arrival time on locations being added onto a trip

Result: Pass if user can correctly set an arrival time on locations
```

### Reroute on Traffic Test (Use Case #5)
```diff
Test: Verify user can rearrange their route 

Result: Pass if user can correctly rearrange their route
```

