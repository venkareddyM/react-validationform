import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: '',
    password: '',
    email: ''
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const MyEvent = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!data.name) {
      setNameError('name is required.');
      return;
    }
    

    if (!data.password) {
      setPasswordError('password is required.');
      return;
    }

    setNameError('');
    setPasswordError('');

    if (!validateEmail(data.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    console.log(data);
  };

  return (
    <div className="container">
      <h1>Register Form</h1>
      <div className='form-group'>
        <label>name</label>
        <input type='text' name='name' className="input-field" placeholder='Enter your name' onChange={MyEvent} />
        {nameError && <p className="error-message ">{nameError}</p>}
      </div>

      <div className='form-group'>
        <label>password</label>
        <input type='password' name='password' className="input-field" placeholder='Enter your password' onChange={MyEvent} />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>

      <div className='form-group'>
        <label>email</label>
        <input type='email' className="input-field" name='email' placeholder='Enter your email' onChange={MyEvent} />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <div className='submit-button'>
        <button onClick={handlesubmit}>submit</button>
      </div>
    </div>
  );
}

export default App;
