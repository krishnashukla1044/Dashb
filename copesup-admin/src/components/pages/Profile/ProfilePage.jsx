import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, logout } from '../../../Services/api';
import Update from '../../../pages/LoginSec/update';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUserDetails();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
        if (error.response) {
          if (error.response.status === 403 || error.response.status === 401) {
            navigate('/login');
          }
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">User data not available.</div>;
  }

  return (
    <div className="h-full mb-20 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        {!isEditing ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">My Profile</h2>
              <button
                onClick={handleEditClick}
                className="text-blue-500 flex items-center hover:text-blue-600 transition"
              >
                <FaEdit className="mr-2" /> Edit Profile
              </button>
            </div>

            <div className="mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mb-2 text-xl"><strong>Name:</strong> {user.name}</p>
                <p className="mb-2 text-xl"><strong>Email:</strong> {user.email}</p>
                <p className="mb-2 text-xl"><strong>Role:</strong> {user.role}</p>
                <p className="text-xl"><strong>Password:</strong> ********</p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleLogout}
                className="py-2 px-4 rounded-lg bg-red-600 text-white flex items-center shadow-md hover:bg-red-700 transition duration-200"
              >
                <span>Logout</span>
              </button>
            </div>
          </>
        ) : (
          <Update user={user} setIsEditing={setIsEditing} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
