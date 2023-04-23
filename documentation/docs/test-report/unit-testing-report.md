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
// Test If Login Form Renders
  it('should render the Login form', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByTestId('login button');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

// Test If Email Field Renders
it('should display Email Field', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    expect(emailInput).toBeInTheDocument();
    });

// Test If Password Field Renders
it('should display Password Field', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    });

// Test if Login Button Renders
it('should display Login Button', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const loginButton = screen.getByTestId('login button');
    expect(loginButton).toBeInTheDocument();
    });

// Verify Email handler function responds to a change of event in the email field
it('should respond to a change of event in the email field', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    fireEvent.change(emailInput, { target: { value: ' ' } });
    expect(emailInput.value).toBe('');
    });

// Verify Password handler function responds to a change of event in the password field
it('should respond to a change of event in the password field', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: ' ' } });
    expect(passwordInput.value).toBe(' ');
    });

// Verify handler function responds to a change of event on form submission
it('should respond to a change of event on form submission', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const loginButton = screen.getByTestId('login button');
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument();
    });
// Verify if null entry displays an error
it('should display an error message if login fails with null entry', async () => {
    const mockSignInWithEmailAndPassword = jest.fn(() => {
        throw new Error('auth/invalid-email');
    });
    jest.mock('../firebase/Firebase', () => ({
        signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    }));

    render(<MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByTestId('login button');

    fireEvent.change(emailInput, { target: { value: ' ' } });
    fireEvent.change(passwordInput, { target: { value: ' ' } });
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Firebase: Error (auth/invalid-email).');
    expect(errorMessage).toBeInTheDocument();
    });

// Verify if invalid password displays an error
  it('should display an error message if login fails with password', async () => {
    const mockSignInWithEmailAndPassword = jest.fn(() => {
      throw new Error('auth/wrong-password');
    });
    jest.mock('../firebase/Firebase', () => ({
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    }));

    render( <MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByTestId('login button');

    fireEvent.change(emailInput, { target: { value: 'a@a.com' } });
    fireEvent.change(passwordInput, { target: { value: 'te1vwsed23' } }); // wrong password
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Incorrect password. Please try again.');
    expect(errorMessage).toBeInTheDocument();
  });

// Verify if invalid email displays an error
  it('should display an error message if login fails with email', async () => {
    const mockSignInWithEmailAndPassword = jest.fn(() => {
      throw new Error('auth/wrong-email');
    });
    jest.mock('../firebase/Firebase', () => ({
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    }));

    render( <MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByTestId('login button');

    fireEvent.change(emailInput, { target: { value: 'test@twefwewst.com' } }); // Wrong email
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Email does not exist. Please try again');
    expect(errorMessage).toBeInTheDocument();
  });

// Verify if successful login displays navbar options
  it('should display navbar options after successful login', async () => {
    const mockUser = {
      uid: '1234',
      displayName: 'testuser',
      email: 'te@email.com'
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
      callback(mockUser);
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render( <MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByTestId('login button');

    fireEvent.change(emailInput, { target: { value: 'te@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText('Logout')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Map')).toBeInTheDocument();
      expect(screen.getByText('Directions')).toBeInTheDocument();
      expect(screen.getByText('Create Route')).toBeInTheDocument();
      expect(screen.getByText('Saved Routes')).toBeInTheDocument();
    });
  });

```
- <b>Login.js Test Results</b>
```diff
<testsuite name="Login" errors="0" failures="0" skipped="0" timestamp="2023-04-22T21:22:51" time="2.902" tests="11">
    <testcase classname="Login should render the Login form" name="Login should render the Login form" time="0.125">
    </testcase>
    <testcase classname="Login should display Email Field" name="Login should display Email Field" time="0.016">
    </testcase>
    <testcase classname="Login should display Password Field" name="Login should display Password Field" time="0.012">
    </testcase>
    <testcase classname="Login should display Login Button" name="Login should display Login Button" time="0.012">
    </testcase>
    <testcase classname="Login should respond to a change of event in the email field" name="Login should respond to a change of event in the email field" time="0.019">
    </testcase>
    <testcase classname="Login should respond to a change of event in the password field" name="Login should respond to a change of event in the password field" time="0.015">
    </testcase>
    <testcase classname="Login should respond to a change of event on form submission" name="Login should respond to a change of event on form submission" time="0.074">
    </testcase>
    <testcase classname="Login should display an error message if login fails with null entry" name="Login should display an error message if login fails with null entry" time="0.205">
    </testcase>
    <testcase classname="Login should display an error message if login fails with password" name="Login should display an error message if login fails with password" time="0.238">
    </testcase>
    <testcase classname="Login should display an error message if login fails with email" name="Login should display an error message if login fails with email" time="0.2">
    </testcase>
    <testcase classname="Login should display navbar options after successful login" name="Login should display navbar options after successful login" time="0.035">
    </testcase>
  </testsuite>
```
- <b>Signup.js</b>
```diff
//Verify that the signup for renders
  it('should render the Signup form', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmInput = screen.getByLabelText('Confirm Password');
    const signupButton = screen.getByTestId('signup button');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });

// Test If Email Field Renders
it('should display Email Field', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    expect(emailInput).toBeInTheDocument();
    });

// Test If Password Field Renders
it('should display Password Field', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    });

// Test If Confirm Password Field Renders
it('should display Confirm Password Field', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const confirmInput = screen.getByLabelText('Confirm Password');
    expect(confirmInput).toBeInTheDocument();
    });

// Test if Signup Button Renders
it('should display Signup Button', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const signupButton = screen.getByTestId('signup button');
    expect(signupButton).toBeInTheDocument();
    });

// Verify Email handler function responds to a change of event in the email field
it('should respond to a change of event in the email field', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    fireEvent.change(emailInput, { target: { value: ' ' } });
    expect(emailInput.value).toBe('');
    });

// Verify Password handler function responds to a change of event in the password field
it('should respond to a change of event in the password field', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: ' ' } });
    expect(passwordInput.value).toBe(' ');
    });

// Verify Confirm Password handler function responds to a change of event in the confirm password field
it('should respond to a change of event in the confirm password field', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const confirmInput = screen.getByLabelText('Confirm Password');
    fireEvent.change(confirmInput, { target: { value: ' ' } });
    expect(confirmInput.value).toBe(' ');
    });

// Verify handler function responds to a click of the signup button
it('should respond to a click of the signup button', () => {
    render(<MemoryRouter><Signup /></MemoryRouter>);
    const signupButton = screen.getByTestId('signup button');
    fireEvent.click(signupButton);
    });

// Verify if null entry displays an error message
it('should display an error message if email is null', async () => {
    const mockSignInWithEmailAndPassword = jest.fn(() => {
        throw new Error('auth/invalid-email');
    });
    jest.mock('../firebase/Firebase', () => ({
        signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    }));

    render(<MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmInput = screen.getByLabelText('Confirm Password');
    const signupButton = screen.getByTestId('signup button');
    
    fireEvent.change(emailInput, { target: { value: ' ' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(confirmInput, { target: { value: 'test123' } });
    fireEvent.click(signupButton);
    
    const errorMessage = await screen.findByText('Firebase: Error (auth/missing-email).');
    expect(errorMessage).toBeInTheDocument();
    });

// Verify if invalid password displays an error message
  it('should display an error message if passwords do not match', async () => {
    const mockSignInWithEmailAndPassword = jest.fn(() => {
      throw new Error('auth/wrong-password');
    });
    jest.mock('../firebase/Firebase', () => ({
      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
    }));

    render( <MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmInput = screen.getByLabelText('Confirm Password');
    const signupButton = screen.getByTestId('signup button');

    fireEvent.change(emailInput, { target: { value: 'bee@b.com' } });
    fireEvent.change(passwordInput, { target: { value: 'te1vwsedv23' } });
    fireEvent.change(confirmInput, { target: { value: 'te1vwdv23' } }); // wrong password
    fireEvent.click(signupButton);

    const errorMessage = await screen.findByText('Passwords do not match');
    expect(errorMessage).toBeInTheDocument();
  });

// Verify if navbar options are displayed after successful signup
  it('should display navbar options after successful signup', async () => {
    const mockUser = {
      uid: '1234',
      displayName: 'testuser',
      email: 'tea@email.com'
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
      callback(mockUser);
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render( <MemoryRouter><Signup /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmInput = screen.getByLabelText('Confirm Password');
    const signupButton = screen.getByTestId('signup button');

    fireEvent.change(emailInput, { target: { value: 'tea@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(confirmInput, { target: { value: 'test123' } });
    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText('Logout')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Map')).toBeInTheDocument();
      expect(screen.getByText('Directions')).toBeInTheDocument();
      expect(screen.getByText('Create Route')).toBeInTheDocument();
      expect(screen.getByText('Saved Routes')).toBeInTheDocument();
    });
  });
```
- <b>Signup.js Test Results</b>
```diff
<testsuite name="Signup" errors="0" failures="0" skipped="0" timestamp="2023-04-22T21:22:51" time="2.554" tests="12">
    <testcase classname="Signup should render the Signup form" name="Signup should render the Signup form" time="0.128">
    </testcase>
    <testcase classname="Signup should display Email Field" name="Signup should display Email Field" time="0.018">
    </testcase>
    <testcase classname="Signup should display Password Field" name="Signup should display Password Field" time="0.014">
    </testcase>
    <testcase classname="Signup should display Confirm Password Field" name="Signup should display Confirm Password Field" time="0.019">
    </testcase>
    <testcase classname="Signup should display Signup Button" name="Signup should display Signup Button" time="0.01">
    </testcase>
    <testcase classname="Signup should respond to a change of event in the email field" name="Signup should respond to a change of event in the email field" time="0.01">
    </testcase>
    <testcase classname="Signup should respond to a change of event in the password field" name="Signup should respond to a change of event in the password field" time="0.019">
    </testcase>
    <testcase classname="Signup should respond to a change of event in the confirm password field" name="Signup should respond to a change of event in the confirm password field" time="0.018">
    </testcase>
    <testcase classname="Signup should respond to a click of the signup button" name="Signup should respond to a click of the signup button" time="0.075">
    </testcase>
    <testcase classname="Signup should display an error message if email is null" name="Signup should display an error message if email is null" time="0.237">
    </testcase>
    <testcase classname="Signup should display an error message if passwords do not match" name="Signup should display an error message if passwords do not match" time="0.03">
    </testcase>
    <testcase classname="Signup should display navbar options after successful signup" name="Signup should display navbar options after successful signup" time="0.042">
    </testcase>
</testsuite>
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
