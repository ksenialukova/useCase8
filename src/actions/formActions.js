// actions/formActions.js
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message
});
