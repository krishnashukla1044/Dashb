import React from 'react';

const Administrator = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      <main className="flex-1 bg-white shadow-xl rounded-lg p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello, Krishnamohan</span>
            <img 
              src="https://templates.iqonic.design/calendify/html/assets/images/user/u-2.jpg" 
              alt="Profile" 
              className="w-12 h-12 rounded-full border-2 border-teal-500"
            />
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-teal-50 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Box 1</h2>
            <p className="text-gray-600">Some content...</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Box 2</h2>
            <p className="text-gray-600">Some content...</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Box 3</h2>
            <p className="text-gray-600">Some content...</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Box 4</h2>
            <p className="text-gray-600">Some content...</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table</h2>
          <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 border-b">Column 1</th>
                <th className="py-3 px-4 border-b">Column 2</th>
                <th className="py-3 px-4 border-b">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-800">
                <td className="py-3 px-4 border-b">Data 1</td>
                <td className="py-3 px-4 border-b">Data 2</td>
                <td className="py-3 px-4 border-b">Data 3</td>
              </tr>
              <tr className="bg-gray-50 text-gray-800">
                <td className="py-3 px-4 border-b">Data 4</td>
                <td className="py-3 px-4 border-b">Data 5</td>
                <td className="py-3 px-4 border-b">Data 6</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-teal-100 text-teal-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-teal-200 transition duration-300">
              <a href="#" className="text-lg font-semibold">Create New Report</a>
            </div>
            <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition duration-300">
              <a href="#" className="text-lg font-semibold">Manage Users</a>
            </div>
            <div className="bg-purple-100 text-purple-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-purple-200 transition duration-300">
              <a href="#" className="text-lg font-semibold">View Analytics</a>
            </div>
            <div className="bg-orange-100 text-orange-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-200 transition duration-300">
              <a href="#" className="text-lg font-semibold">Settings</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Administrator;
