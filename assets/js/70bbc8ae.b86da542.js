"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={sidebar_position:1},a="Unit tests",i={unversionedId:"test-report/unit-testing-report",id:"test-report/unit-testing-report",title:"Unit tests",description:"Unit tests are written using the Jest framework as well as Enzyme to test our React js application",source:"@site/docs/test-report/unit-testing-report.md",sourceDirName:"test-report",slug:"/test-report/unit-testing-report",permalink:"/project-optimap/docs/test-report/unit-testing-report",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-optimap/edit/main/documentation/docs/test-report/unit-testing-report.md",tags:[],version:"current",lastUpdatedBy:"rickwu135",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Report",permalink:"/project-optimap/docs/category/test-report"},next:{title:"Integration tests",permalink:"/project-optimap/docs/test-report/integration-testing-report"}},c={},l=[{value:"Front-end",id:"front-end",level:2},{value:"index.js",id:"indexjs",level:3},{value:"index.js Test Results",id:"indexjs-test-results",level:4},{value:"App.js",id:"appjs",level:3},{value:"App.js Test Results",id:"appjs-test-results",level:4},{value:"Login.js",id:"loginjs",level:3},{value:"Login.js Test Results",id:"loginjs-test-results",level:4},{value:"Signup.js",id:"signupjs",level:3},{value:"Signup.js Test Results",id:"signupjs-test-results",level:4},{value:"Navbar.js",id:"navbarjs",level:3},{value:"Navbar.js Test Results",id:"navbarjs-test-results",level:4},{value:"Profile.js Test",id:"profilejs-test",level:3},{value:"Profile Testing Results",id:"profile-testing-results",level:4},{value:"Back-end",id:"back-end",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,o.kt)("p",null,"Unit tests are written using the Jest framework as well as Enzyme to test our React js application"),(0,o.kt)("h2",{id:"front-end"},"Front-end"),(0,o.kt)("h3",{id:"indexjs"},"index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'describe(\'index\', () => {\n  //Verify that the index renders without throwing an error\n  it(\'should render without crashing\', () => {\n    const div = document.createElement(\'div\');\n    createRoot(div).render(\n      <Router>\n        <Routes>\n          <Route path = \'/\' element = {<App/>}/>\n          <Route path = "/login" element = {<Login/>}/>\n          <Route path = "/signup" element = {<Signup/>}/>\n          <Route path = "/map" element = {<MapView/>}/>\n          <Route path = "/logout" element = {<Logout/>}/>\n          <Route path = "/readWrite" element = {<ReadWrite/>}/>\n          <Route path = "/profile" element = {<Profile/>}/>\n          <Route path = "/savedRoute" element = {<SavedRoute/>}/>\n          <Route path = "/directions" element = {<Directions/>}/>\n          <Route path = "/createRoutePage" element = {<CreateRoutePage/>}/>\n          <Route path = "/settings" element = {<Settings/>}/>\n        </Routes>\n      </Router>);\n  });\n\n});\n')),(0,o.kt)("h4",{id:"indexjs-test-results"},"index.js Test Results"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1059991342266204242/1099865112027865179/indexTest.PNG",alt:null})),(0,o.kt)("h3",{id:"appjs"},"App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"describe('App component', () => {\n//Verify that the App component renders without throwing an error\n  it('should render without throwing an error', () => {\n    const wrapper = shallow(<App />);\n    expect(wrapper.find('.App')).toHaveLength(1);\n  });\n\n//Verify that the App component renders a Navbar component\n  it('should render the Navbar component', () => {\n    const wrapper = shallow(<App />);\n    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);\n  });\n\n//Verify that the App component renders the Home Page header\n  it('should render the Home Page header', () => {\n    const wrapper = shallow(<App />);\n    expect(wrapper.find('h1')).toHaveLength(1);\n    expect(wrapper.find('h1').text()).toEqual('Home Page');\n  });\n});\n")),(0,o.kt)("h4",{id:"appjs-test-results"},"App.js Test Results"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1059991342266204242/1099865549984501791/AppTest.PNG",alt:null})),(0,o.kt)("h3",{id:"loginjs"},"Login.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"// Test If Login Form Renders\n  it('should render the Login form', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const loginButton = screen.getByTestId('login button');\n    expect(emailInput).toBeInTheDocument();\n    expect(passwordInput).toBeInTheDocument();\n    expect(loginButton).toBeInTheDocument();\n  });\n\n// Test If Email Field Renders\nit('should display Email Field', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    expect(emailInput).toBeInTheDocument();\n    });\n\n// Test If Password Field Renders\nit('should display Password Field', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const passwordInput = screen.getByLabelText('Password');\n    expect(passwordInput).toBeInTheDocument();\n    });\n\n// Test if Login Button Renders\nit('should display Login Button', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const loginButton = screen.getByTestId('login button');\n    expect(loginButton).toBeInTheDocument();\n    });\n\n// Verify Email handler function responds to a change of event in the email field\nit('should respond to a change of event in the email field', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    fireEvent.change(emailInput, { target: { value: ' ' } });\n    expect(emailInput.value).toBe('');\n    });\n\n// Verify Password handler function responds to a change of event in the password field\nit('should respond to a change of event in the password field', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const passwordInput = screen.getByLabelText('Password');\n    fireEvent.change(passwordInput, { target: { value: ' ' } });\n    expect(passwordInput.value).toBe(' ');\n    });\n\n// Verify handler function responds to a change of event on form submission\nit('should respond to a change of event on form submission', () => {\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const loginButton = screen.getByTestId('login button');\n    fireEvent.click(loginButton);\n    expect(loginButton).toBeInTheDocument();\n    });\n// Verify if null entry displays an error\nit('should display an error message if login fails with null entry', async () => {\n    const mockSignInWithEmailAndPassword = jest.fn(() => {\n        throw new Error('auth/invalid-email');\n    });\n    jest.mock('../firebase/Firebase', () => ({\n        signInWithEmailAndPassword: mockSignInWithEmailAndPassword,\n    }));\n\n    render(<MemoryRouter><Login /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const loginButton = screen.getByTestId('login button');\n\n    fireEvent.change(emailInput, { target: { value: ' ' } });\n    fireEvent.change(passwordInput, { target: { value: ' ' } });\n    fireEvent.click(loginButton);\n\n    const errorMessage = await screen.findByText('Firebase: Error (auth/invalid-email).');\n    expect(errorMessage).toBeInTheDocument();\n    });\n\n// Verify if invalid password displays an error\n  it('should display an error message if login fails with password', async () => {\n    const mockSignInWithEmailAndPassword = jest.fn(() => {\n      throw new Error('auth/wrong-password');\n    });\n    jest.mock('../firebase/Firebase', () => ({\n      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,\n    }));\n\n    render( <MemoryRouter><Login /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const loginButton = screen.getByTestId('login button');\n\n    fireEvent.change(emailInput, { target: { value: 'a@a.com' } });\n    fireEvent.change(passwordInput, { target: { value: 'te1vwsed23' } }); // wrong password\n    fireEvent.click(loginButton);\n\n    const errorMessage = await screen.findByText('Incorrect password. Please try again.');\n    expect(errorMessage).toBeInTheDocument();\n  });\n\n// Verify if invalid email displays an error\n  it('should display an error message if login fails with email', async () => {\n    const mockSignInWithEmailAndPassword = jest.fn(() => {\n      throw new Error('auth/wrong-email');\n    });\n    jest.mock('../firebase/Firebase', () => ({\n      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,\n    }));\n\n    render( <MemoryRouter><Login /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const loginButton = screen.getByTestId('login button');\n\n    fireEvent.change(emailInput, { target: { value: 'test@twefwewst.com' } }); // Wrong email\n    fireEvent.change(passwordInput, { target: { value: 'test123' } });\n    fireEvent.click(loginButton);\n\n    const errorMessage = await screen.findByText('Email does not exist. Please try again');\n    expect(errorMessage).toBeInTheDocument();\n  });\n\n")),(0,o.kt)("h4",{id:"loginjs-test-results"},"Login.js Test Results"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1059991342266204242/1100474927884275722/image.png",alt:null})),(0,o.kt)("h3",{id:"signupjs"},"Signup.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"//Verify that the signup for renders\n  it('should render the Signup form', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const confirmInput = screen.getByLabelText('Confirm Password');\n    const signupButton = screen.getByTestId('signup button');\n    expect(emailInput).toBeInTheDocument();\n    expect(passwordInput).toBeInTheDocument();\n    expect(confirmInput).toBeInTheDocument();\n    expect(signupButton).toBeInTheDocument();\n  });\n\n// Test If Email Field Renders\nit('should display Email Field', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    expect(emailInput).toBeInTheDocument();\n    });\n\n// Test If Password Field Renders\nit('should display Password Field', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const passwordInput = screen.getByLabelText('Password');\n    expect(passwordInput).toBeInTheDocument();\n    });\n\n// Test If Confirm Password Field Renders\nit('should display Confirm Password Field', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const confirmInput = screen.getByLabelText('Confirm Password');\n    expect(confirmInput).toBeInTheDocument();\n    });\n\n// Test if Signup Button Renders\nit('should display Signup Button', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const signupButton = screen.getByTestId('signup button');\n    expect(signupButton).toBeInTheDocument();\n    });\n\n// Verify Email handler function responds to a change of event in the email field\nit('should respond to a change of event in the email field', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    fireEvent.change(emailInput, { target: { value: ' ' } });\n    expect(emailInput.value).toBe('');\n    });\n\n// Verify Password handler function responds to a change of event in the password field\nit('should respond to a change of event in the password field', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const passwordInput = screen.getByLabelText('Password');\n    fireEvent.change(passwordInput, { target: { value: ' ' } });\n    expect(passwordInput.value).toBe(' ');\n    });\n\n// Verify Confirm Password handler function responds to a change of event in the confirm password field\nit('should respond to a change of event in the confirm password field', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const confirmInput = screen.getByLabelText('Confirm Password');\n    fireEvent.change(confirmInput, { target: { value: ' ' } });\n    expect(confirmInput.value).toBe(' ');\n    });\n\n// Verify handler function responds to a click of the signup button\nit('should respond to a click of the signup button', () => {\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const signupButton = screen.getByTestId('signup button');\n    fireEvent.click(signupButton);\n    });\n\n// Verify if null entry displays an error message\nit('should display an error message if email is null', async () => {\n    const mockSignInWithEmailAndPassword = jest.fn(() => {\n        throw new Error('auth/invalid-email');\n    });\n    jest.mock('../firebase/Firebase', () => ({\n        signInWithEmailAndPassword: mockSignInWithEmailAndPassword,\n    }));\n\n    render(<MemoryRouter><Signup /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const confirmInput = screen.getByLabelText('Confirm Password');\n    const signupButton = screen.getByTestId('signup button');\n    \n    fireEvent.change(emailInput, { target: { value: ' ' } });\n    fireEvent.change(passwordInput, { target: { value: 'test123' } });\n    fireEvent.change(confirmInput, { target: { value: 'test123' } });\n    fireEvent.click(signupButton);\n    \n    const errorMessage = await screen.findByText('Firebase: Error (auth/missing-email).');\n    expect(errorMessage).toBeInTheDocument();\n    });\n\n// Verify if invalid password displays an error message\n  it('should display an error message if passwords do not match', async () => {\n    const mockSignInWithEmailAndPassword = jest.fn(() => {\n      throw new Error('auth/wrong-password');\n    });\n    jest.mock('../firebase/Firebase', () => ({\n      signInWithEmailAndPassword: mockSignInWithEmailAndPassword,\n    }));\n\n    render( <MemoryRouter><Signup /></MemoryRouter>);\n    const emailInput = screen.getByLabelText('Email address');\n    const passwordInput = screen.getByLabelText('Password');\n    const confirmInput = screen.getByLabelText('Confirm Password');\n    const signupButton = screen.getByTestId('signup button');\n\n    fireEvent.change(emailInput, { target: { value: 'bee@b.com' } });\n    fireEvent.change(passwordInput, { target: { value: 'te1vwsedv23' } });\n    fireEvent.change(confirmInput, { target: { value: 'te1vwdv23' } }); // wrong password\n    fireEvent.click(signupButton);\n\n    const errorMessage = await screen.findByText('Passwords do not match');\n    expect(errorMessage).toBeInTheDocument();\n  });\n")),(0,o.kt)("h4",{id:"signupjs-test-results"},"Signup.js Test Results"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1059991342266204242/1100474928240787516/image.png",alt:null})),(0,o.kt)("h3",{id:"navbarjs"},"Navbar.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"describe('NavBar component', () => {\n\n    const mockUser = {\n        uid: '1234',\n        displayName: 'testuser',\n        email: 'te@email.com'\n        };\n        const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser);\n        });\n        jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n\n    // Verify that the OptiMap logo renders on the Navbar\n  test('renders OptiMap logo', () => {\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const logo = screen.getByAltText('My logo');\n    expect(logo).toBeInTheDocument();\n  });\n\n  // Verify that the login link renders when a user is NOT logged in\n  test('renders login link when not logged in', () => {\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const loginLink = screen.getByText('Login');\n    expect(loginLink).toBeInTheDocument();\n  });\n\n  // Verify that the logout link renders when a user IS logged in\n  test('renders logout link when logged in', () => {\n    const mockNavigate = jest.fn();\n    jest.mock('react-router-dom', () => ({\n      ...jest.requireActual('react-router-dom'),\n      useNavigate: () => mockNavigate,\n    }));\n  \n    const mockUser = {\n      uid: '1234',\n      displayName: 'testuser',\n      email: 'te@email.com'\n    };\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n      callback(mockUser);\n    });\n    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n  \n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const logoutLink = screen.getByText('Logout');\n    expect(logoutLink).toBeInTheDocument();\n  });\n// Verify that the directions link renders when a user IS logged in\n    test('renders directions link when logged in', () => {\n    const mockNavigate = jest.fn();\n    jest.mock('react-router-dom', () => ({\n        ...jest.requireActual('react-router-dom'),\n        useNavigate: () => mockNavigate,\n    }));\n\n    const mockUser = {\n        uid: '1234',\n        displayName: 'testuser',\n        email: '',\n    };\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser); \n    });\n    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const directionsLink = screen.getByText('Directions');\n    expect(directionsLink).toBeInTheDocument();\n});\n\n// Verify that the Map link renders when a user IS logged in\ntest('renders MapView link when logged in', () => {\n    const mockNavigate = jest.fn();\n    jest.mock('react-router-dom', () => ({\n        ...jest.requireActual('react-router-dom'),\n        useNavigate: () => mockNavigate,\n    }));\n\n    const mockUser = {\n        uid: '1234',\n        displayName: 'testuser',\n        email: '',\n    };\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser); \n    });\n    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const directionsLink = screen.getByText('Map');\n    expect(directionsLink).toBeInTheDocument();\n});\n\n// Verify that the Create Route link renders when a user IS logged in\ntest('renders Create Route link when logged in', () => {\n    const mockNavigate = jest.fn();\n    jest.mock('react-router-dom', () => ({\n        ...jest.requireActual('react-router-dom'),\n        useNavigate: () => mockNavigate,\n    }));\n\n    const mockUser = {\n        uid: '1234',\n        displayName: 'testuser',\n        email: '',\n    };\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser); \n    });\n    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const directionsLink = screen.getByText('Create Route');\n    expect(directionsLink).toBeInTheDocument();\n});\n\n// Verify that the Profile link renders when a user IS logged in\ntest('renders Profile link when logged in', () => {\n    const mockNavigate = jest.fn();\n    jest.mock('react-router-dom', () => ({\n        ...jest.requireActual('react-router-dom'),\n        useNavigate: () => mockNavigate,\n    }));\n\n    const mockUser = {\n        uid: '1234',\n        displayName: 'testuser',\n        email: '',\n    };\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser); \n    });\n    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const directionsLink = screen.getByText('Profile');\n    expect(directionsLink).toBeInTheDocument();\n});\n\n// Verify that the Saved Routes link renders when a user IS logged in\ntest('renders Saved Routes link when logged in', () => {\n    const mockNavigate = jest.fn();\n    jest.mock('react-router-dom', () => ({\n        ...jest.requireActual('react-router-dom'),\n        useNavigate: () => mockNavigate,\n    }));\n\n    const mockUser = {\n        uid: '1234',\n        displayName: 'testuser',\n        email: '',\n    };\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser); \n    });\n    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);\n\n    render(<MemoryRouter><NavBar /></MemoryRouter>);\n    const directionsLink = screen.getByText('Saved Routes');\n    expect(directionsLink).toBeInTheDocument();\n});\n\n});\n")),(0,o.kt)("h4",{id:"navbarjs-test-results"},"Navbar.js Test Results"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1059991342266204242/1099866962219257866/image.png",alt:null})),(0,o.kt)("h3",{id:"profilejs-test"},"Profile.js Test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'describe(\'Profile\', () => {\n    const mockUser = {\n        uid: \'1234\',\n        displayName: \'testuser\',\n        email: \'te@email.com\',\n    };\n\n    const mockOnAuthStateChanged = jest.fn((callback) => {\n        callback(mockUser);\n    });\n\n    jest.spyOn(auth, \'onAuthStateChanged\').mockImplementation(mockOnAuthStateChanged);\n\n    // Add your test cases here\n    // renders Profile component\n    test(\'renders Profile component\', () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n        const profileElement = screen.getByTestId(\'profile\');\n        expect(profileElement).toBeInTheDocument();\n    });\n\n    // renders User Email component\n    test(\'renders User Email component\', () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n        const displayNameElement = screen.getByTestId(\'displayName\');\n        expect(displayNameElement).toBeInTheDocument();\n    });\n\n    // clicking Saved Routes button calls to the navigateToSavedRoute fucntion\n    test("clicking the Saved Routes button navigates to the saved routes page", () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n        const savedRoutesButton = screen.getByTestId("saved-routes-button");\n        fireEvent.click(savedRoutesButton);\n        expect(mockNavigate).toHaveBeenCalledWith("/savedRoute");\n    });\n\n    // clicking the settings icon naivgates to the settings page\n    test("clicking the settings icon navigates to the settings page", () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n        const settingsIcon = screen.getByTestId("settings");\n        fireEvent.click(settingsIcon);\n        expect(mockNavigate).toHaveBeenCalledWith("/settings");\n    });\n\n    // Test case for friend request\n    test(\'sends a friend request\', async () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n\n        // Find the input element and type the friend\'s email\n        const friendEmailInput = screen.getByPlaceholderText("Enter Email");\n        fireEvent.change(friendEmailInput, { target: { value: \'friend@example.com\' } });\n\n        // Find the Add Friend button and click it\n        const addFriendButton = screen.getByText("Add Friend");\n        fireEvent.click(addFriendButton);\n\n        // Check input field if email was sent\n        expect(friendEmailInput.value).toBe(\'friend@example.com\');\n    });\n\n    // test case for clicking Friends tab\n    test("clicking the friends tab", async () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n\n        // Find and click the friends tab\n        const friendsTab = screen.getByText("Friends");\n        fireEvent.click(friendsTab);\n\n        // Expect the friends tab to become active\n        await waitFor(() => {\n            expect(friendsTab.getAttribute("aria-selected")).toBe("true");\n        });\n    });\n\n    // test case for clicking Friend Request tab\n    test("clicking the friends tab", async () => {\n        render(<MemoryRouter><Profile /></MemoryRouter>);\n\n        // Find and click the friends tab\n        const friendReqTab = screen.getByText("Friend Requests");\n        fireEvent.click(friendReqTab);\n\n        // Expect the friends tab to become active\n        await waitFor(() => {\n            expect(friendReqTab.getAttribute("aria-selected")).toBe("true");\n        });\n    });\n')),(0,o.kt)("h4",{id:"profile-testing-results"},"Profile Testing Results"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/707984984010522676/1099879057417576608/image.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/707984984010522676/1099879129211490314/image.png",alt:null})),(0,o.kt)("h2",{id:"back-end"},"Back-end"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"DataBase.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"testRouteRetrieval()\n    - Test: Verify retrieval of routes \n    - Result: Pass is user routes are retrieved correctly\n\ntestSaveRoute()        \n    - Test: Verify routes are saved \n    - Result: Pass if routes are saved correctly\n\ntestInvalidRoute() \n    - Test: Verify an invalid route cannot be saved \n    - Result: Pass if invalid route cannot be saved successfully\n\ntestUserInformation()\n    - Test: Verify user information is saved to firebase\n    - Result: Pass if user inforation is correctly saved to firebase\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"MapApi.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"testAddress()\n    - Test: Verify entering an address retrieve coordinate\n    - Result: Pass if entering an address retrieves the correct coordinate\n\ntestInvalidAddress()\n    - Test: Verify api request with invalid information returns error\n    - Result: Pass if an invalid request correctly returns error\n\ntestGeolocation()\n    - Test: Verify api request for geolocation return coordinate\n    - Result: Pass if api request for geolocation returns correct coordinate\n\ntestTransportationMode()\n    - Test: Verify change of tranportation \n    - Result: Pass if change of tranportation correctly changes the route direction based on mode\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Algorithm.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"testTimeOptimization()\n    - Test: Verify route calculation optimizes route based on time\n    - Result: Pass if route is correctly optimized based on time\n\ntestDistanceOptimization()\n    - Test: Verify route calculation optimizes route based on distance\n    - Result: Pass if route is correctly optimized based on distance\n")))}d.isMDXComponent=!0}}]);