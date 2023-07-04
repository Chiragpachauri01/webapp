// Login.js
import React from 'react';
import './login.css';
export const Login = () => (
  <div className="auth-container">
    <h2>Login</h2>
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);


