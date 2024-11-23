// LoginorRegister.js
import React, { useState } from 'react';

function LoginOrRegister({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false); // Track if it's sign-up or login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For sign-up

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Handle the registration logic (you might save to database or API call)
      console.log('User registered with:', { email, password, name });
    } else {
      // Handle the login logic (verify email and password)
      console.log('User logged in with:', { email, password });
      onLoginSuccess(); // Callback to indicate successful login
    }
  };

  return (
    <div className="login-register">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>

      <p>
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button onClick={() => setIsSignUp(false)}>Login</button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <button onClick={() => setIsSignUp(true)}>Sign Up</button>
          </>
        )}
      </p>
    </div>
  );
}

export default LoginOrRegister;

