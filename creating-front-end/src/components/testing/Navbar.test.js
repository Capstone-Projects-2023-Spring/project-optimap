import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../Navbar';
import { auth } from '../../firebase/Firebase';
import { MemoryRouter } from 'react-router-dom';

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