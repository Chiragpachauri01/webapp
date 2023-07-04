// Register.js
import React from 'react'; 
export const Register = () => (
  <div className="auth-container">
    <h2>Register</h2>
    <form>
      <label>
        Company Name:
        <input type="text" name="company" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);


