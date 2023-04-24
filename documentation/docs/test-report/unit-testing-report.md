---
sidebar_position: 1
---
# Unit tests
Unit tests are written using the Jest framework as well as Enzyme to test our React js application

## Front-end
### index.js
```diff
describe('index', () => {
  //Verify that the index renders without throwing an error
  it('should render without crashing', () => {
    const div = document.createElement('div');
    createRoot(div).render(
      <Router>
        <Routes>
          <Route path = '/' element = {<App/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/map" element = {<MapView/>}/>
          <Route path = "/logout" element = {<Logout/>}/>
          <Route path = "/readWrite" element = {<ReadWrite/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = "/savedRoute" element = {<SavedRoute/>}/>
          <Route path = "/directions" element = {<Directions/>}/>
          <Route path = "/createRoutePage" element = {<CreateRoutePage/>}/>
          <Route path = "/settings" element = {<Settings/>}/>
        </Routes>
      </Router>);
  });

});
```
#### index.js Test Results
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099865112027865179/indexTest.PNG)

### App.js
```diff
describe('App component', () => {
//Verify that the App component renders without throwing an error
  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });

//Verify that the App component renders a Navbar component
  it('should render the Navbar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

//Verify that the App component renders the Home Page header
  it('should render the Home Page header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual('Home Page');
  });
});
```
#### App.js Test Results
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099865549984501791/AppTest.PNG)

### Login.js
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
#### Login.js Test Results
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099866206216929370/image.png)
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099866046002909184/image.png)

### Signup.js
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
#### Signup.js Test Results
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099866523935445012/image.png)
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099866632760852620/image.png)

### Navbar.js
```diff
describe('NavBar component', () => {

    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: 'te@email.com'
        };
        const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser);
        });
        jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    // Verify that the OptiMap logo renders on the Navbar
  test('renders OptiMap logo', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const logo = screen.getByAltText('My logo');
    expect(logo).toBeInTheDocument();
  });

  // Verify that the login link renders when a user is NOT logged in
  test('renders login link when not logged in', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const loginLink = screen.getByText('Login');
    expect(loginLink).toBeInTheDocument();
  });

  // Verify that the logout link renders when a user IS logged in
  test('renders logout link when logged in', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));
  
    const mockUser = {
      uid: '1234',
      displayName: 'testuser',
      email: 'te@email.com'
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
      callback(mockUser);
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);
  
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const logoutLink = screen.getByText('Logout');
    expect(logoutLink).toBeInTheDocument();
  });
// Verify that the directions link renders when a user IS logged in
    test('renders directions link when logged in', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: '',
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser); 
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const directionsLink = screen.getByText('Directions');
    expect(directionsLink).toBeInTheDocument();
});

// Verify that the Map link renders when a user IS logged in
test('renders MapView link when logged in', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: '',
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser); 
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const directionsLink = screen.getByText('Map');
    expect(directionsLink).toBeInTheDocument();
});

// Verify that the Create Route link renders when a user IS logged in
test('renders Create Route link when logged in', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: '',
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser); 
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const directionsLink = screen.getByText('Create Route');
    expect(directionsLink).toBeInTheDocument();
});

// Verify that the Profile link renders when a user IS logged in
test('renders Profile link when logged in', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: '',
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser); 
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const directionsLink = screen.getByText('Profile');
    expect(directionsLink).toBeInTheDocument();
});

// Verify that the Saved Routes link renders when a user IS logged in
test('renders Saved Routes link when logged in', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: '',
    };
    const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser); 
    });
    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const directionsLink = screen.getByText('Saved Routes');
    expect(directionsLink).toBeInTheDocument();
});

});
```
#### Navbar.js Test Results
![](https://cdn.discordapp.com/attachments/1059991342266204242/1099866962219257866/image.png)

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
