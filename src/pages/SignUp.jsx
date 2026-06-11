import react from 'react';
import { Link } from 'react-router-dom'; 
import './signup.css';   
function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Create Account</h1>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">
            Create Account
          </button>
        </form>

        <p>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;

