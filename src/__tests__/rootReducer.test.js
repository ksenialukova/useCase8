import store, {rootReducer} from '../store';

describe('rootReducer', () => {
    it('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({ entries: [] });
    });

    it('should handle ADD_ENTRY action', () => {
        const entry = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello' };
        const action = {
            type: 'ADD_ENTRY',
            payload: entry
        };

        expect(rootReducer({ entries: [] }, action)).toEqual({ entries: [entry] });
    });
});

describe('store', () => {
    it('should handle adding an entry', () => {
        const entry = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', message: 'Hello' };
        
        store.dispatch({ type: 'ADD_ENTRY', payload: entry });

        const currentState = store.getState();
        expect(currentState.entries).toEqual([entry]);
    });

    // You can add more tests, e.g., if you add more action types in the future.
});