import React from 'react';
import { EditOutlined, PhoneOutlined, LoginOutlined, SolutionOutlined } from '@ant-design/icons';
import Navigation from './Navigation';

const LeadTable = () => {
  const data = [
    {
      id: 1,
      company: 'Admin',
      name: 'Rajesh Kumar',
      phone: '7006297852',
      emailCode: 'C88',
      emailId: '1455',
      status: 'Running',
      accLogin: true,
      liveTrade: true,
      tag: 'Angel',
      date: '10-Aug 14:22'
    },
    {
      id: 2,
      company: 'Admin',
      name: 'Ramji Jaiswal',
      phone: '7885697852',
      emailCode: 'C88',
      emailId: '1455',
      status: 'Running',
      accLogin: true,
      liveTrade: true,
      tag: 'Angel',
      date: '1-Aug 20:22'
    },
    {
      id: 3,
      company: 'Admin',
      name: 'Rakesh Kumar',
      phone: '7555226202',
      emailCode: 'C88',
      emailId: '1455',
      status: 'Running',
      accLogin: true,
      liveTrade: true,
      tag: 'Angel',
      date: '2-Aug 18:22'
    },
    {
      id: 4,
      company: 'Admin',
      name: 'Ramesh Jatav',
      phone: '746468852',
      emailCode: 'C88',
      emailId: '1455',
      status: 'Running',
      accLogin: true,
      liveTrade: true,
      tag: 'Angel',
      date: '5-Aug 1:22'
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="container mx-auto p-4">
        <Navigation />
      </div>
      <div className="w-full">
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Company</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Account Login</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Live Trade</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Tag</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Date</th>
              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-2 py-4 text-xs sm:text-sm font-medium text-gray-900">{row.id}</td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">{row.company}</td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">{row.name}</td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600 flex items-center">
                  {row.phone}
                  <button className="ml-2 text-blue-500 hover:underline text-xs sm:text-sm" onClick={() => alert(row.phone)}>
                    <PhoneOutlined />
                  </button>
                </td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">
                  {row.emailCode}
                  <button className="ml-2 text-blue-500 hover:underline text-xs sm:text-sm" onClick={() => alert('Email functionality')}>
                    <SolutionOutlined />
                  </button>
                  <br />
                  {row.emailId}
                </td>
                <td className="px-2 py-4 text-xs sm:text-sm">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${row.status === 'Running' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">
                  <input type="checkbox" checked={row.accLogin} readOnly className="form-checkbox h-4 w-4 text-green-600" />
                </td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">
                  <input type="checkbox" checked={row.liveTrade} readOnly className="form-checkbox h-4 w-4 text-green-600" />
                </td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${row.tag === 'Angel' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                    {row.tag}
                  </span>
                </td>
                <td className="px-2 py-4 text-xs sm:text-sm text-gray-600">{row.date}</td>
                <td className="px-2 py-4 text-xs sm:text-sm font-medium flex flex-col space-y-2">
                  <button className="text-green-500 hover:underline text-xs sm:text-sm" onClick={() => alert('Edit functionality')}>
                    <EditOutlined />
                  </button>
                  <button className="text-blue-500 hover:underline text-xs sm:text-sm" onClick={() => alert('Phone functionality')}>
                    <PhoneOutlined />
                  </button>
                  <button className="text-blue-500 hover:underline text-xs sm:text-sm" onClick={() => alert('Login functionality')}>
                    <LoginOutlined />
                  </button>
                  <button className="text-blue-500 hover:underline text-xs sm:text-sm" onClick={() => alert('Broker Response functionality')}>
                    <SolutionOutlined />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
