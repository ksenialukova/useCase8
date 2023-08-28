import React, { useState } from 'react';
import './App.css';
import validator from 'validator';
import {useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setMessage } from './actions/formActions';

const Form = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const validateFields = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else {
          delete newErrors[name];
        }
        break;

      case 'email':
        if (!validator.isEmail(value)) {
          newErrors.email = 'Invalid email format';
        } else {
          delete newErrors.email;
        }
        break;

      case 'message':
        if (value.trim().length < 10) {
          newErrors.message = 'Message should be at least 10 characters long';
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        dispatch(setFirstName(value));
        break;
      case 'lastName':
        dispatch(setLastName(value));
        break;
      case 'email':
        if (!validator.isEmail(value)) {
          setErrors({ ...errors, email: 'Invalid email format' });
        } else {
          setErrors({ ...errors, email: null });
          dispatch(setEmail(value));
        }
        break;
      case 'message':
        dispatch(setMessage(value));
        break;
      default:
        break;
    }
    setFormData(prevState => ({ ...prevState, [name]: value }));
    validateFields(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { firstName: formData.firstName, lastName:formData.lastName, email:formData.email, message:formData.message };
    dispatch({ type: 'ADD_ENTRY', payload: entry });
  };

  const isFormValid = () => {
    return Object.values(formData).every(val => val.trim() !== '') && Object.keys(errors).length === 0;
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />
      {errors.firstName && <p>{errors.firstName}</p>}

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      {errors.lastName && <p>{errors.lastName}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
      ></textarea>
      {errors.message && <p>{errors.message}</p>}

      <button type="submit" disabled={!isFormValid()}>Submit</button>
    </form>
    </div>
  );
}

export default Form;
