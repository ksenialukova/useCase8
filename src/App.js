import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setMessage, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input 
        value={user.firstName} 
        onChange={(e) => dispatch(setFirstName(e.target.value))} 
        placeholder="First Name"
      />
      <input 
        value={user.lastName} 
        onChange={(e) => dispatch(setLastName(e.target.value))} 
        placeholder="Last Name"
      />
      <input 
        value={user.email} 
        onChange={(e) => dispatch(setEmail(e.target.value))} 
        placeholder="Email"
      />
      <textarea 
        value={user.message} 
        onChange={(e) => dispatch(setMessage(e.target.value))} 
        placeholder="Message"
      />
      <div>
        <p>Name: {user.firstName} {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Message: {user.message}</p>
      </div>
    </div>
  );
}

export default App;
