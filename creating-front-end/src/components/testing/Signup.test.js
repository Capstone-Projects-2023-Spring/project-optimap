import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Signup from '../Signup';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Signup', () => {
  //Verify if the Signup form renders
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
    jest.mock('../../firebase/Firebase', () => ({
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
    jest.mock('../../firebase/Firebase', () => ({
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
});

