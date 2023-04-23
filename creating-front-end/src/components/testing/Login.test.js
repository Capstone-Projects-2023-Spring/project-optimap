import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from '../Login';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login', () => {
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

    fireEvent.change(emailInput, { target: { value: 'b@b.com' } });
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

});

