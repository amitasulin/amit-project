import React, { useState } from 'react';

const LoginRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login or registration logic here
    if (isLogin) {
      // Perform login
      console.log('Login:', username, password);
    } else {
      // Perform registration
      console.log('Register:', username, password);
    }

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLogin
          ? "Don't have an account? "
          : 'Already have an account? '}
        <button type="button" onClick={handleToggleForm}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginRegister;
