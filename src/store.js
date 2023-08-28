import { createStore } from 'redux';

const initialState = {
    entries: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return { ...state, entries: [...state.entries, action.payload] };
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;
