import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import CreateRoutePage from '../CreateRoutePage';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Create Route Page', () => {
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
    test('renders List of locations component', () => {
        render(<MemoryRouter><CreateRoutePage /></MemoryRouter>);
        const profileElement = screen.getByTestId('listoflocations');
        expect(profileElement).toBeInTheDocument();
    });

    // Test if listgroup renders
    test('renders ListGroup component', () => {
        render(<MemoryRouter><CreateRoutePage /></MemoryRouter>);
        const profileElement = screen.getByTestId('listgroup');
        expect(profileElement).toBeInTheDocument();
    });

    // test if location input renders
    test('renders location input', () => {
        render(<MemoryRouter><CreateRoutePage /></MemoryRouter>);
        const profileElement = screen.getByTestId('locationinput');
        expect(profileElement).toBeInTheDocument();
    });

    // test if arrival time input renders
    test('renders arrival time input', () => {
        render(<MemoryRouter><CreateRoutePage /></MemoryRouter>);
        const profileElement = screen.getByTestId('arrivaltimeinput');
        expect(profileElement).toBeInTheDocument();
    });

    // test if time spent input renders
    test('renders time spent input', () => {
        render(<MemoryRouter><CreateRoutePage /></MemoryRouter>);
        const profileElement = screen.getByTestId('timespentinput');
        expect(profileElement).toBeInTheDocument();
    });

    // test if add button adds to list of locations
    test('add button adds to list of locations', async () => {
        const wrapper = shallow(<CreateRoutePage />);
        const input = wrapper.find('[data-testid="locationinput"]');

        /*const addbutton = wrapper.find('[data-testid="addbutton"]');
        fireEvent.click(addButton);*/

        input.simulate('change', { target: { value: 'Temple University' } });

        // jest click tab
        fireEvent.keyDown(input, { key: 'Tab', code: 'Tab' });

        expect(input.props().value).toEqual('Temple University');  
    });
});