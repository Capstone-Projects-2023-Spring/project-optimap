import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { auth } from "../../firebase/Firebase";
import { MemoryRouter } from "react-router-dom";
import Profile from "../Profile";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Profile', () => {
    const mockUser = {
        uid: '1234',
        displayName: 'testuser',
        email: 'te@email.com',
    };

    const mockOnAuthStateChanged = jest.fn((callback) => {
        callback(mockUser);
    });

    jest.spyOn(auth, 'onAuthStateChanged').mockImplementation(mockOnAuthStateChanged);

    // Add your test cases here
    // renders Profile component
    test('renders Profile component', () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);
        const profileElement = screen.getByTestId('profile');
        expect(profileElement).toBeInTheDocument();
    });

    // renders User Email component
    test('renders User Email component', () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);
        const displayNameElement = screen.getByTestId('displayName');
        expect(displayNameElement).toBeInTheDocument();
    });

    // clicking Saved Routes button calls to the navigateToSavedRoute fucntion
    test("clicking the Saved Routes button navigates to the saved routes page", () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);
        const savedRoutesButton = screen.getByTestId("saved-routes-button");
        fireEvent.click(savedRoutesButton);
        expect(mockNavigate).toHaveBeenCalledWith("/savedRoute");
    });

    // clicking the settings icon naivgates to the settings page
    test("clicking the settings icon navigates to the settings page", () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);
        const settingsIcon = screen.getByTestId("settings");
        fireEvent.click(settingsIcon);
        expect(mockNavigate).toHaveBeenCalledWith("/settings");
    });

    // Test case for friend request
    test('sends a friend request', async () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);

        // Find the input element and type the friend's email
        const friendEmailInput = screen.getByPlaceholderText("Enter Email");
        fireEvent.change(friendEmailInput, { target: { value: 'friend@example.com' } });

        // Find the Add Friend button and click it
        const addFriendButton = screen.getByText("Add Friend");
        fireEvent.click(addFriendButton);

        // Check input field if email was sent
        expect(friendEmailInput.value).toBe('friend@example.com');
    });

    // test case for clicking Friends tab
    test("clicking the friends tab", async () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);

        // Find and click the friends tab
        const friendsTab = screen.getByText("Friends");
        fireEvent.click(friendsTab);

        // Expect the friends tab to become active
        await waitFor(() => {
            expect(friendsTab.getAttribute("aria-selected")).toBe("true");
        });
    });

    // test case for clicking Friend Request tab
    test("clicking the friends tab", async () => {
        render(<MemoryRouter><Profile /></MemoryRouter>);

        // Find and click the friends tab
        const friendReqTab = screen.getByText("Friend Requests");
        fireEvent.click(friendReqTab);

        // Expect the friends tab to become active
        await waitFor(() => {
            expect(friendReqTab.getAttribute("aria-selected")).toBe("true");
        });
    });
});