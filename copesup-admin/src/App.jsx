import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesComponent from './Routes';
import Login from './pages/LoginSec/Login';
import Signup from './pages/LoginSec/Signup';
import ForgetPassword from './pages/LoginSec/ForgetPassword';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Private Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <RoutesComponent />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
