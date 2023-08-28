import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Form from '../Form';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({
    // Your initial state mock here, for example:
    entries: []
});

describe('Form', () => {
  it('validates first_name and last_name presence', () => {
    render(<Provider store={store}><Form /></Provider>);

    const firstNameInput = screen.getByTestId('firstName');
    const lastNameInput = screen.getByTestId('lastName');
    fireEvent.change(firstNameInput, { target: { value: 'agd' } });
    fireEvent.change(lastNameInput, { target: { value: 'adg' } });
    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.change(lastNameInput, { target: { value: '' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
  });

  it('validates correct email', () => {
    render(<Provider store={store}><Form /></Provider>);

    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'notanemail' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
  });

  it('validates message length', () => {
    render(<Provider store={store}><Form /></Provider>);

    const messageInput = screen.getByTestId('message');
    fireEvent.change(messageInput, { target: { value: 'Short' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(screen.getByText('Message should be at least 10 characters long')).toBeInTheDocument();
  });

  it('validates and sets first name on change', () => {
    render(<Provider store={store}><Form /></Provider>);
    const input = screen.getByTestId('firstName');
    fireEvent.change(input, { target: { value: 'John' } });
    
    expect(input.value).toBe('John');
    // Add more expectations based on validations or dispatched actions
});

it('validates and sets last name on change', () => {
    render(<Provider store={store}><Form /></Provider>);
    const input = screen.getByTestId('lastName');
    fireEvent.change(input, { target: { value: 'Doe' } });

    expect(input.value).toBe('Doe');
    // Add more expectations
});

it('validates email format and sets email on change', () => {
    render(<Provider store={store}><Form /></Provider>);
    const input = screen.getByTestId('email');
    
    fireEvent.change(input, { target: { value: 'invalid_email' } });
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'john.doe@example.com' } });
    expect(input.value).toBe('john.doe@example.com');
    expect(screen.queryByText('Invalid email format')).toBeNull();
});

it('validates and sets message on change', () => {
    render(<Provider store={store}><Form /></Provider>);
    const textarea = screen.getByTestId('message');
    fireEvent.change(textarea, { target: { value: 'Short' } });
    
    expect(screen.getByText('Message should be at least 10 characters long')).toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: 'A long enough message' } });
    expect(textarea.value).toBe('A long enough message');
    expect(screen.queryByText('Message should be at least 10 characters long')).toBeNull();
});
});
