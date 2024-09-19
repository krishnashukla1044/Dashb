import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FiSearch, FiBell } from 'react-icons/fi';
import { BsGearFill } from 'react-icons/bs';

const ManagingDirector = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8 space-y-8">
        {/* Header with notifications and search */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-md rounded-lg p-4">
          <h1 className="text-3xl font-extrabold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg shadow-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <FiBell className="text-gray-600 text-2xl cursor-pointer hover:text-indigo-500 transition-colors" />
            <img
              src="https://templates.iqonic.design/calendify/html/assets/images/user/u-2.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-indigo-500"
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-white hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Sales</h2>
            <p className="text-3xl font-bold">₹50,000</p>
            <p className="text-sm">+8% from last month</p>
          </div>
          <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">New Users</h2>
            <p className="text-3xl font-bold">1,200</p>
            <p className="text-sm">+5% from last month</p>
          </div>
          <div className="bg-yellow-600 p-6 rounded-lg shadow-lg text-white hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
            <p className="text-3xl font-bold">3,400</p>
            <p className="text-sm">+10% from last month</p>
          </div>
          <div className="bg-red-600 p-6 rounded-lg shadow-lg text-white hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Revenue</h2>
            <p className="text-3xl font-bold">₹1,20,000</p>
            <p className="text-sm">+12% from last month</p>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white p-6  shadow-md rounded-lg">
          <h2 className="text-xl font-semibold w-full mb-4 text-gray-800">Calendar</h2>
          <div className="h-80">
            <Calendar
              onChange={handleDateChange}
              value={date}
            />
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
                Filter
              </button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition-colors">
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="py-3 px-4 border-b">Date</th>
                  <th className="py-3 px-4 border-b">Transaction ID</th>
                  <th className="py-3 px-4 border-b">Amount</th>
                  <th className="py-3 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">2024-08-20</td>
                  <td className="py-2 px-4 border-b">TXN12345</td>
                  <td className="py-2 px-4 border-b">₹10,000</td>
                  <td className="py-2 px-4 border-b text-green-500">Completed</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2024-08-19</td>
                  <td className="py-2 px-4 border-b">TXN12346</td>
                  <td className="py-2 px-4 border-b">₹15,000</td>
                  <td className="py-2 px-4 border-b text-yellow-500">Pending</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2024-08-18</td>
                  <td className="py-2 px-4 border-b">TXN12347</td>
                  <td className="py-2 px-4 border-b">₹8,000</td>
                  <td className="py-2 px-4 border-b text-red-500">Failed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Customizable Widgets Area */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Customizable Widgets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-indigo-100 transition-colors">
              <a href="#" className="text-gray-800">Widget 1</a>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-indigo-100 transition-colors">
              <a href="#" className="text-gray-800">Widget 2</a>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-indigo-100 transition-colors">
              <a href="#" className="text-gray-800">Widget 3</a>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-indigo-100 transition-colors">
              <a href="#" className="text-gray-800">Widget 4</a>
            </div>
          </div>
        </div>

        {/* Settings Shortcut */}
        <div className="fixed bottom-4 right-4">
          <button className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors">
            <BsGearFill className="text-2xl" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ManagingDirector;
