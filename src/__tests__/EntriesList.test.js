import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from '../store';
import EntriesList from '../EntriesList';
import '@testing-library/jest-dom'

describe('<EntriesList />', () => {
    const mockEntries = [
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', message: 'Hi there' }
    ];

    const store = createStore(rootReducer, { entries: mockEntries });

    it('displays the correct number of entries', () => {
        render(
            <Provider store={store}>
                <EntriesList />
            </Provider>
        );
        const rows = screen.getAllByRole('row');
        // +1 for the header row
        expect(rows).toHaveLength(mockEntries.length + 1);
    });

    it('renders the correct data in each row', () => {
        render(
            <Provider store={store}>
                <EntriesList />
            </Provider>
        );
        mockEntries.forEach(entry => {
            expect(screen.getByText(entry.firstName)).toBeInTheDocument();
            expect(screen.getByText(entry.lastName)).toBeInTheDocument();
            expect(screen.getByText(entry.email)).toBeInTheDocument();
            expect(screen.getByText(entry.message)).toBeInTheDocument();
        });
    });
});
