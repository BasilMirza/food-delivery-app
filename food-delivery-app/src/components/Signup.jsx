import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Login from './Login';
import '../index.css';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  // const [profession, setProfession] = useState('');

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  // const [info, setInfo] = useState(true);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem('Email', email);
      localStorage.setItem('Password', password);
      localStorage.setItem('Username', name);

      setLogin(!login);
    }
  }
  
  // Directly to the login page
  function handleClick() {
    setLogin(!login);
  }
  return (
    <>
      <div className="register-div">
        {' '}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Phone No.</label>
              <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
            </div>
            <div>
            <button type="submit" className="btn login btn">
              Register
            </button>
            <span className="forgot-password text-right">
             <button className='login' onClick={handleClick}>Login</button>
            </span></div>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
        
      </div>
    </>
  );
}

export default Registration;
