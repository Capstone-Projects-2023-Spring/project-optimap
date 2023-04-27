---
sidebar_position: 2
---
# Integration tests
Jest is used alongside React to mock objects

### Login.js 
```diff
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
#### Login.js test results
![](https://media.discordapp.net/attachments/1059991342266204242/1100474068194574447/image.png)
![](https://media.discordapp.net/attachments/1059991342266204242/1100474068408467587/image.png)

### Signup.js
```diff
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

#### Signup.js test results
![](https://media.discordapp.net/attachments/1059991342266204242/1100474068660129953/image.png)
![](https://media.discordapp.net/attachments/1059991342266204242/1100474068928577686/image.png)