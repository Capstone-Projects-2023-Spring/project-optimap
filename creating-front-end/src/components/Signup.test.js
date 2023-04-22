import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Signup from './Signup';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../firebase/Firebase';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Signup', () => {
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

