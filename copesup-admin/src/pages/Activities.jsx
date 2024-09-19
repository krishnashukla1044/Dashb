import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ text: '', time: '', icon: '' });

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/recent-activities');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/log-activity', newActivity);
      setNewActivity({ text: '', time: '', icon: '' });
      // Refresh activities list
      const response = await axios.get('http://localhost:3000/api/recent-activities');
      setActivities(response.data);
    } catch (error) {
      console.error('Error creating activity:', error);
    }
  };

  return (
    <div>
      <h1>Recent Activities</h1>

      {/* Form to Add New Activity */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="text"
          value={newActivity.text}
          onChange={handleInputChange}
          placeholder="Activity Text"
          className="border p-2 rounded mb-2 w-full"
          required
        />
        <input
          type="text"
          name="time"
          value={newActivity.time}
          onChange={handleInputChange}
          placeholder="Time"
          className="border p-2 rounded mb-2 w-full"
          required
        />
        <input
          type="text"
          name="icon"
          value={newActivity.icon}
          onChange={handleInputChange}
          placeholder="Icon (Optional)"
          className="border p-2 rounded mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Activity
        </button>
      </form>

      {/* List of Recent Activities */}
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="border-b py-2">
            <p>{activity.text}</p>
            <span>{activity.time}</span>
            {/* Optionally include an icon */}
            {activity.icon && <span className="ml-2">{activity.icon}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
