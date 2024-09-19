import React from 'react';
import ProfilePage from './ProfilePage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const navigate = useNavigate();

  // Logout function
  const logout = async () => {
    try {
      // Make an API request to log out
      await axios.delete('http://localhost:3000/api/logout', {
        withCredentials: true // Include cookies with the request
      });
      localStorage.removeItem('authToken'); // Clear the token from local storage
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div>
      {/* Pass the logout function as a prop */}
      <ProfilePage logout={logout} />
    </div>
  );
};

export default App;
