import React from 'react';

const ChiefAdministrator = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <main className="flex-1 p-8 bg-gray-100 text-gray-200 rounded-lg shadow-lg">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-black">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-800">Hello, Krishnamohan</span>
            <img
              src="https://templates.iqonic.design/calendify/html/assets/images/user/u-2.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-teal-400"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-purple-400  p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-2">Sales</h2>
            <p className="text-3xl font-semibold">₹50,000</p>
            <p className="text-sm">+8% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-500  p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-2">New Users</h2>
            <p className="text-3xl font-semibold">1,200</p>
            <p className="text-sm">+5% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-500 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-2">Total Orders</h2>
            <p className="text-3xl font-semibold">3,400</p>
            <p className="text-sm">+10% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-red-600 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-2">Revenue</h2>
            <p className="text-3xl font-semibold">₹1,20,000</p>
            <p className="text-sm">+12% from last month</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-700 p-6 shadow-lg rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Recent Transactions</h2>
            <div className="flex space-x-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-500">Filter</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-500">Export</button>
            </div>
          </div>
          <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-gray-400">
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Transaction ID</th>
                <th className="py-3 px-4 border-b">Amount</th>
                <th className="py-3 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800 text-gray-300">
                <td className="py-3 px-4 border-b">2024-08-20</td>
                <td className="py-3 px-4 border-b">TXN12345</td>
                <td className="py-3 px-4 border-b">₹10,000</td>
                <td className="py-3 px-4 border-b"><span className="text-green-400">Completed</span></td>
              </tr>
              <tr className="bg-gray-700 text-gray-300">
                <td className="py-3 px-4 border-b">2024-08-19</td>
                <td className="py-3 px-4 border-b">TXN12346</td>
                <td className="py-3 px-4 border-b">₹15,000</td>
                <td className="py-3 px-4 border-b"><span className="text-yellow-400">Pending</span></td>
              </tr>
              <tr className="bg-gray-800 text-gray-300">
                <td className="py-3 px-4 border-b">2024-08-18</td>
                <td className="py-3 px-4 border-b">TXN12347</td>
                <td className="py-3 px-4 border-b">₹8,000</td>
                <td className="py-3 px-4 border-b"><span className="text-red-400">Failed</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Customizable Widgets */}
        <div className="bg-gray-700 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Customizable Widgets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-red-600 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-500 text-white">
              <a href="#">Widget 1</a>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-red-600 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-500 text-white">
              <a href="#">Widget 2</a>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-red-600 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-500 text-white">
              <a href="#">Widget 3</a>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-red-600 p-4 rounded-lg cursor-pointer hover:shadow-xl hover:bg-gray-500 text-white">
              <a href="#">Widget 4</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChiefAdministrator;
