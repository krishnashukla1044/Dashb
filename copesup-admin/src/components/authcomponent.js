import React, { useState } from 'react';
import { login, register } from './Services/api';

const AuthComponent = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', role:'' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginData);
      console.log('Login successful:', response.data);
      // Handle successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    alert("Register Success")
    try {
      const response = await register(registerData);
      console.log('Registration successful:', response.data);
      // Handle successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          value={registerData.name}
          onChange={handleRegisterChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="role"
          value={registerData.role}
          onChange={handleRegisterChange}
          placeholder="role"
          required
        />
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AuthComponent;
