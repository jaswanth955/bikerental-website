import React, { useState } from 'react';
import './sign.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (event) => {
    event.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('userDetails')) || [];

    const userExists = storedUsers.some((user) => user.email === email && user.pass === password);

    if (userExists) {
      alert('Sign In Successful');
      window.location.href = 'uidproject.html';  // Redirect to uidproject.html
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input id="signIn" type="submit" value="Sign IN" />

        <p>
          Don't have an account? <a href="signUp.html" style={{ textDecoration: 'none' }}>Sign Up</a>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
