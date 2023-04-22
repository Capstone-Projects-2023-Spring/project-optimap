import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../firebase/Firebase';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login', () => {
  it('should render the Login form', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByTestId('login button');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

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
    fireEvent.change(passwordInput, { target: { value: 'te1vwsedv23' } }); // wrong password
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Incorrect password. Please try again.');
    expect(errorMessage).toBeInTheDocument();
  });

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

    fireEvent.change(emailInput, { target: { value: 'test@twefwefwest.com' } }); // Wrong email
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText('Email does not exist. Please try again');
    expect(errorMessage).toBeInTheDocument();
  });

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

