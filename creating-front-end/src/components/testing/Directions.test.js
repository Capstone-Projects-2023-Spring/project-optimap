import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Directions from '../Directions';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Directions', () => {
    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: 'te@email.com'
      };
      const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser);
      });
      jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

// Test If Directions Form Renders
  it('should render the Directions form', () => {
    render(<MemoryRouter><Directions /></MemoryRouter>);
    const startInput = screen.getByTestId('start');
    const endInput = screen.getByTestId('end');
    const directionsButton = screen.getByTestId('get directions');
    expect(startInput).toBeInTheDocument();
    expect(endInput).toBeInTheDocument();
    expect(directionsButton).toBeInTheDocument();
  });

// Test If Start Field Renders
it('should display Start Field', () => {
    render(<MemoryRouter><Directions /></MemoryRouter>);
    const startInput = screen.getByTestId('start');
    expect(startInput).toBeInTheDocument();
    });

// Test If End Field Renders
it('should display End Field', () => {
    render(<MemoryRouter><Directions /></MemoryRouter>);
    const endInput = screen.getByTestId('end');
    expect(endInput).toBeInTheDocument();
    });

// Test if Directions Button Renders
it('should display Directions Button', () => {
    render(<MemoryRouter><Directions /></MemoryRouter>);
    const directionsButton = screen.getByTestId('get directions');
    expect(directionsButton).toBeInTheDocument();
    });

// Verify Start handler function responds to a change of event in the start field
it('should respond to a change of event in the start field', () => {
    render(<MemoryRouter><Directions /></MemoryRouter>);
    const startInput = screen.getByTestId('start');
    fireEvent.change(startInput, { target: { value: ' ' } });
    expect(startInput.value).toBe(' ');
    });

// Verify End handler function responds to a change of event in the end field
it('should respond to a change of event in the end field', () => {
    render(<MemoryRouter><Directions /></MemoryRouter>);
    const endInput = screen.getByTestId('end');
    fireEvent.change(endInput, { target: { value: ' ' } });
    expect(endInput.value).toBe(' ');
    });

});

