---
sidebar_position: 1
---
# Unit tests
Unit tests will be written using the Jest framework to test our React js application

## Front-end
- <b>index.js</b>
```diff
testRenderSite() 
    - Test: Verify site renders  
    - Result: Pass if site renders successfully correctly
```

- <b>App.js</b>
```diff
testFireBaseTokenGeneration()
    - Test: Verify Firebase Authentication generate token
    - Result: Pass if user token is generated successfully

testRoutes() 
    - Test: Verify routing to different screen 
    - Result: Pass if routing to different screen correctly 

testSignupImport()
    - Test: Verify Sign up component imports 
    - Result: Pass if Sign up component is found successfully

testLoginImport()
    - Test: Verify Sign up component imports 
    - Result: Pass if Login component is found successfully
```

- <b>Login.js</b>
```diff
testNavBarComponentRender()
    - Test: Verify NavBar component Renders 
    - Result: Pass if NavBar component renders correctly 

testFormComponentRender()
    - Test: Verify Login form component renders 
    - Result: Pass if Login form component renders correctly 

testEmailFieldRender()
    - Test: Verify Email field renders 
    - Result: Pass if Email field renders 

testPasswordFieldRender()
    - Test: Verify Password field renders 
    - Result: Pass if Password field renders 

testLoginButtonRender()
    - Test: Verify Login button renders
    - Result: Pass if Login button renders correctly

testEmailHandler()
    - Test: Verify handler function responds to a change of event on email input field
    - Result: Pass if Email event triggers 

testPasswordHandler()
    - Test: Verify handler function responds to a change of event on password input field
    - Result: Pass if password event triggers

testFormSubmitHandler()
    - Test: Verify handler function responds to a change of event on form submission
    - Result: Pass if form submission event triggers

testNullLoginEntry()
    - Test: Verify if null entry displays an error 
    - Result: Pass if error display upon user login with null entry

testInvalidLoginEntry()
    - Test: Verify if invalid login credentials displays an error 
    - Result: Pass if error displays upon login with invalid credentials 
```

- <b>Signup.js</b>
```diff
testNavBarComponentRender()
    - Test: Verify NavBar component Renders 
    - Result: Pass if NavBar component renders correctly 

testFormComponentRender()
    - Test: Verify Sign up form component renders 
    - Result: Pass if Sign up form component renders correctly 

testEmailFieldRender()
    - Test: Verify Email field renders 
    - Result: Pass if Email field renders 

testPasswordFieldRender()
    - Test: Verify Password field renders 
    - Result: Pass if Password field renders 

testConfirmPasswordFieldRender()
    - Test: Verify Confirm Password field renders 
    - Result: Pass if Confirm Password field renders 

testSignupButtonRender()
    - Test: Verify Sign up buttom renders
    - Result: Pass if Sign up button renders correctly

testEmailHandler()
    - Test: Verify handler function responds to a change of event on email input field
    - Result: Pass if Email event triggers 

testPasswordHandler()
    - Test: Verify handler function responds to a change of event on password input field
    - Result: Pass if password event triggers

testConfirmPasswordHandler()
    - Test: Verify handler function responds to a change of event on confirm password input field
    - Result: Pass if confirm password event triggers

testFormSubmitHandler()
    - Test: Verify handler function responds to a change of event on form submission
    - Result: Pass if form submission event triggers

testNullSignupEntry()
    - Test: Verify if null entry displays an error 
    - Result: Pass if error display upon user login with null entry
    
testInvalidSignupEntry()
    - Test: Verify if invalid Sign up credentials displays an error 
    - Result: Pass if error displays upon Sign up with invalid credentials 
```

- <b>Navbar.js</b>
```diff
testNavbarLogo()
    - Test: Verify OptiMapLogo displays on navbar
    - Result: Pass if image displays correctly
```

## Back-end
- <b>DataBase.js</b>
```diff
testRouteRetrieval()
    - Test: Verify retrieval of routes 
    - Result: Pass is user routes are retrieved correctly

testSaveRoute()        
    - Test: Verify routes are saved 
    - Result: Pass if routes are saved correctly

testInvalidRoute() 
    - Test: Verify an invalid route cannot be saved 
    - Result: Pass if invalid route cannot be saved successfully

testUserInformation()
    - Test: Verify user information is saved to firebase
    - Result: Pass if user inforation is correctly saved to firebase
```

- <b>MapApi.js</b>
```diff
testAddress()
    - Test: Verify entering an address retrieve coordinate
    - Result: Pass if entering an address retrieves the correct coordinate

testInvalidAddress()
    - Test: Verify api request with invalid information returns error
    - Result: Pass if an invalid request correctly returns error

testGeolocation()
    - Test: Verify api request for geolocation return coordinate
    - Result: Pass if api request for geolocation returns correct coordinate

testTransportationMode()
    - Test: Verify change of tranportation 
    - Result: Pass if change of tranportation correctly changes the route direction based on mode
```

- <b>Algorithm.js</b>
```diff
testTimeOptimization()
    - Test: Verify route calculation optimizes route based on time
    - Result: Pass if route is correctly optimized based on time

testDistanceOptimization()
    - Test: Verify route calculation optimizes route based on distance
    - Result: Pass if route is correctly optimized based on distance
```
