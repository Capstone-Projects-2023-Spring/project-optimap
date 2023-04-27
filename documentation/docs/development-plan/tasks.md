---
sidebar_position: 2
---

# Tasks

## Planning/Elaboration Phase (PP)
| # | Task                                                              | Design of Unit X | Estimated Effort  | Finish Data                             | Assigned Individual(s) | Successor Tasks                  |
| - | ----------------------------------------------------------------- | ---------------- | ----------------- | --------------------------------------- | ---------------------- | -------------------------------- |
| 1 | Brainstorming                                                     | None             | Everyone - 1 week | Ideas                                   | Everyone               | Any                              |
| 2 | Research on Firebase account Authentication                       | PP1              | 1 person - 1 week | Research                                |                        | Credentials storage Design Model |
| 3 | Research on Firebase Database                                     | PP1              | 1 person - 1 week | Research                                |                        | Route data storage Design Model  |
| 4 | Research on Google Maps APIs                                      | PP1              | 1 person - 1 week | Research                                |                        | Route Calculation Design Model   |
| 5 | Research on React JS (front-end)                              | PP1              | 1 person - 1 week | Research                                |                        | All coding tasks                 |
| 6 | Design Database/Authentication Model                              | PP2, PP3         | 1 person - 1 week | Flowcharts and System Block Diagram     |                        | Database Creation and Login page |
| 7 | Design Maps API call Model                                        | PP4              | 1 person - 1 week | Flowcharts and System Block Diagram     |                        | Maps API Configuration           |
| 8 | Create Firebase Database for “Hello world” sample app             | PP3              | 1 person - 1 day  | Database                                |                        | PP9                              |
| 9 | Create a React JS project connected to “Hello world” database | PP5              | 1 person - 1 week | accessible app with database connection |                        | Implementation phase             |

## Implementation Phase (IP)
| #  | Task                                                     | Design of Unit X | Estimated Effort  | Finish Data                                                        | Assigned Individual(s) | Successor Tasks                                                                          |
| -- | -------------------------------------------------------- | ---------------- | ----------------- | ------------------------------------------------------------------ | ---------------------- | ---------------------------------------------------------------------------------------- |
| 1  | Create new Firebase database for OptiMap                 | PP6              | 1 person - 1 day  | functional database                                                |                        | login page, save route feature                                                           |
| 2  | Implement login/signup page                              | PP6, IP1         | 1 person - 3 days | functional login page                                              |                        | Any                                                                                      |
| 3  | Implement front-end main page with options               | None             | 1 person - 1 week | All OptiMap pages                                                  |                        | sub pages ((list stops, previous trips, favorited trips)                                 |
| 4  | Implement destination list page                          | None             | 1 person - 1 week | functional user input list of stops                                |                        | route calculation functionality, timing at each location                                 |
| 5  | API integration                                          | PP4              | 2 people - 1 week | ability to make calls to Google Maps API & get back direction info |                        | nested API calls within app functionality (creating routes list, obtaining traffic info) |
| 6  | Implement route calculating functionality                | PP7, IP5         | 2 people - 1 week | Valid map route that can be displayed                              |                        | save route feature, rerouting feature                                                    |
| 7  | Implement Map UI                                         | IP6              | 2 people - 1 week | User friendly interactive map                                      |                        | visualize routes, directions                                                             |
| 8  | Implement rerouting feature                              | IP7, IP6, IP5    | 1 person - 3 days | auto reroute based on traffic or other                             |                        | notifications about rerouting, detailed route info                                       |
| 9  | Implement notifications feature                          | IP8              | 1 person - 3 days | app notifications based on urgent information                      |                        | Notifications popup incase route is not possible                                         |
| 10 | Implement ability to specify avoidance (of roads, areas) | IP8              | 2 people - 1 week | fully customizable route preferences                               |                        | pre-determine places to avoid in addition to auto-rerouting (traffic)                    |
| 11 | Implement route saving/favoriting feature                | IP1, IP2, IP6    | 1 person - 1 week | fully functional route saving ability                              |                        | favorited routes page                                                                    |

## Testing Phase (TP)
| # | Task                                        | Design of Unit X | Estimated Effort        | Finish Data                                              | Assigned Individual(s) | Successor Tasks                              |
| - | ------------------------------------------- | ---------------- | ----------------------- | -------------------------------------------------------- | ---------------------- | -------------------------------------------- |
| 1 | Unit Testing                                | All IPs          | 1 person - 1 day        | individual functionalities are error-free and functional |                        | Integration Testing                          |
| 2 | Integration                                 | All IPs          | 1 person - 1 week       | all functionalities work together and error-free         |                        | Any remaining testing tasks                  |
| 3 | Functionality                               | All IPs          | 1 person - several days | ensure everything is working as expected                 |                        | Any remaining testing tasks                  |
| 4 | User acceptance                             | All IPs          | 1 person - several days | successful real-world test                               |                        | Any remaining testing tasks                  |
| 5 | Performance                                 | All IPs          | 1 person - several days | responsive, resource efficient app                       |                        | Any remaining testing tasks                  |
| 6 | Usability                                   | All IPs          | 1 person - 1 day        | successful user test                                     |                        | Any remaining testing tasks                  |
| 7 | Connection to database through React JS | IP1              | 1 person - 1 day        | Successful database connection                           |                        | ability to login and read / write route data |