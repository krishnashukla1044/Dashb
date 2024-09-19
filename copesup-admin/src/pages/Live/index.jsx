import React, { useState, useEffect } from 'react';

const Live = () => {
  const [count, setCount] = useState(0);
  const [demoAccount, setDemoAccount] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Live' // Default status
  });
  const [accounts, setAccounts] = useState([demoAccount]);
  const [newAccount, setNewAccount] = useState({ name: '', email: '', status: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddAccount = () => {
    if (newAccount.name && newAccount.email && newAccount.status) {
      setAccounts([...accounts, newAccount]);
      setNewAccount({ name: '', email: '', status: '' });
    }
  };

  const handleEditAccount = (index) => {
    setEditingIndex(index);
    setNewAccount(accounts[index]);
  };

  const handleSaveEdit = () => {
    const updatedAccounts = accounts.map((account, index) =>
      index === editingIndex ? newAccount : account
    );
    setAccounts(updatedAccounts);
    setEditingIndex(null);
    setNewAccount({ name: '', email: '', status: '' });
  };

  const handleDeleteAccount = (index) => {
    setAccounts(accounts.filter((_, i) => i !== index));
  };

  const statusClass = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-600 text-white';
      case 'Pending':
        return 'bg-yellow-600 text-white';
      case 'Waiting':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white overflow-x-hidden">
      <div className="flex-grow flex items-center justify-center p-10 bg-opacity-90 rounded-lg shadow-2xl max-w-3xl mx-auto transform scale-95 hover:scale-100 transition-transform duration-300 ease-out">
        <div className="w-full">
          <h1 className="text-5xl font-extrabold mb-4 text-center animate-pulse">Live Page</h1>
          <p className="text-2xl mb-4 text-center">Current Live Count:</p>
          <div className="text-6xl font-bold mb-6 text-center">
            {count}
          </div>
          <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg">
            Refresh
          </button>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-8 bg-opacity-90 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-10 overflow-x-auto">
        <div className="w-full">
          <h2 className="text-4xl font-semibold mb-4 text-center text-gray-800">Accounts Management</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Add New Account</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={newAccount.name}
                onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                className="mb-2 p-3 w-full rounded-lg border border-gray-300 text-black shadow-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={newAccount.email}
                onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
                className="mb-2 p-3 w-full rounded-lg border border-gray-300 text-black shadow-sm"
              />
              <input
                type="text"
                placeholder="Status"
                value={newAccount.status}
                onChange={(e) => setNewAccount({ ...newAccount, status: e.target.value })}
                className="mb-2 p-3 w-full rounded-lg border border-gray-300 text-black shadow-sm"
              />
            </div>
            {editingIndex === null ? (
              <button
                onClick={handleAddAccount}
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg mt-4"
              >
                Add Account
              </button>
            ) : (
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-lg mt-4"
              >
                Save Changes
              </button>
            )}
          </div>

          <table className="w-full text-left text-gray-800">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-3 px-4 text-lg font-medium">Name</th>
                <th className="py-3 px-4 text-lg font-medium">Email</th>
                <th className="py-3 px-4 text-lg font-medium">Status</th>
                <th className="py-3 px-4 text-lg font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-4">{account.name}</td>
                  <td className="py-3 px-4">{account.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full ${statusClass(account.status)}`}>
                      {account.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleEditAccount(index)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-lg mr-2 transition-transform transform hover:scale-105"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAccount(index)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg transition-transform transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Live;
