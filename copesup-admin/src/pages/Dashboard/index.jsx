import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt, FaRegCommentDots, FaTrash, FaEdit } from "react-icons/fa";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { getJobPostings, createJobPosting, updateJobPosting, deleteJobPosting } from '../../Services/api';

export default function Index() {
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, text: "Task completed: Update user profile", time: "10 minutes ago", icon: <FaRegCalendarAlt /> },
    { id: 2, text: "New comment on task: 'Design dashboard'", time: "1 hour ago", icon: <FaRegCommentDots /> },
    { id: 3, text: "Server maintenance scheduled for tonight", time: "2 hours ago", icon: <FaRegCalendarAlt /> },
  ]);

  // Job postings state
  const [jobPostings, setJobPostings] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', department: '', location: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await getJobPostings();
        setJobPostings(response.data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchJobPostings();
  }, []);

  const handleCreateJobPosting = async () => {
    try {
      await createJobPosting(form);
      setForm({ title: '', description: '', department: '', location: '' });
      setEditingId(null);
      const response = await getJobPostings();
      setJobPostings(response.data);
    } catch (error) {
      console.error('Error creating job posting:', error);
    }
  };

  const handleUpdateJobPosting = async () => {
    try {
      await updateJobPosting(editingId, form);
      setForm({ title: '', description: '', department: '', location: '' });
      setEditingId(null);
      const response = await getJobPostings();
      setJobPostings(response.data);
    } catch (error) {
      console.error('Error updating job posting:', error);
    }
  };

  const handleDeleteJobPosting = async (id) => {
    try {
      await deleteJobPosting(id);
      const response = await getJobPostings();
      setJobPostings(response.data);
    } catch (error) {
      console.error('Error deleting job posting:', error);
    }
  };
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 bg-gray-100">
      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">Total Target</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600">₹ 0</h1>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">Achieved Target</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-green-600">₹ 0</h1>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">Today's Payment</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-purple-600">₹ 0</h1>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">Leads Modified</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-orange-600">₹ 36</h1>
        </div>
      </div>

      {/* License Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">License Available</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-teal-600">0.0</h1>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">License Active</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">69</h1>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-md md:text-lg font-semibold mb-2">Active Trials</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-red-600">21</h1>
        </div>
      </div>

      {/* Recent Activities and Calendar Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center">
            <FaRegCalendarAlt className="mr-2 text-blue-500" /> Recent Activities
          </h3>
          <ul className="space-y-4">
            {recentActivities.map(activity => (
              <li key={activity.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
                <div className="text-gray-600">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-gray-700">{activity.text}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center">
            <FaRegCalendarAlt className="mr-2 text-blue-500" /> Calendar
          </h3>
          <Calendar className="w-full" />
        </div>
      </div>

      {/* Job Postings Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="font-bold mb-4 text-lg md:text-xl">Job Postings</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editingId ? handleUpdateJobPosting() : handleCreateJobPosting();
          }}
          className="mb-6"
        >
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Title"
            className="border p-2 rounded mb-2 w-full"
            required
          />
          <input
            type="text"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="border p-2 rounded mb-2 w-full"
            required
          />
          <input
            type="text"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            placeholder="Department"
            className="border p-2 rounded mb-2 w-full"
            required
          />
          <input
            type="text"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            placeholder="Location"
            className="border p-2 rounded mb-4 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {editingId ? 'Update Job Posting' : 'Create Job Posting'}
          </button>
        </form>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="p-2 border-b">Title</th>
              <th className="p-2 border-b">Description</th>
              <th className="p-2 border-b">Department</th>
              <th className="p-2 border-b">Location</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobPostings.map((job) => (
              <tr key={job._id}>
                <td className="p-2 border-b">{job.title}</td>
                <td className="p-2 border-b">{job.description}</td>
                <td className="p-2 border-b">{job.department}</td>
                <td className="p-2 border-b">{job.location}</td>
                <td className="p-2 border-b flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingId(job._id);
                      setForm({ title: job.title, description: job.description, department: job.department, location: job.location });
                    }}
                    className="bg-yellow-500 text-white p-1 rounded"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteJobPosting(job._id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
 



  );
}
