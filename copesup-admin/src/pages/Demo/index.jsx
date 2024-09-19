import React from 'react';

const index = () => {

  const showPhoneNumber = (phoneNumber) => {
    alert(phoneNumber);
  };

  // This function handles sending an email with credentials
  const sendCredentialEmail = (url) => {
    alert('Sending credentials...');
    // Simulate an API call
    fetch(url, {
      method: 'POST',
    })
      .then((res) => res.text())
      .then((result) => alert(result))
      .catch((error) => console.error('Error:', error));
  };

  // This function handles toggling live trade
  const toggleLiveTrade = (url, isChecked) => {
    alert('Toggling live trade...');
    // Simulate an API call
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ liveTrade: isChecked ? 1 : 0 }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Live trade updated successfully');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  // Mock data
  const data = [
    {
      id: 1,
      owner: 'Admin',
      clientName: 'Sangita Chaudhary',
      phone: '8181849777',
      loginId: 'C222',
      loginCode: '9198',
      liveTradeUrl: 'https://client.envisioninfo.tech/leads/updateLiveTrade/222',
      liveTrade: true,
      status: 'Running',
      loginTime: '12 Aug 11:26',
      dmat: 'Angel',
      dmatLogin: '12-Aug 11:32',
    },
    // Add more data as needed
  ];

  return (
    <div className="card card-body mb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {/* Status Filter */}
        <div className="form-group">
          <select
            name="status"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            id="1"
          >
            <option value="All" selected>
              All
            </option>
            <option value="Running">Running</option>
            <option value="Approved">Approved</option>
            <option value="Expired">Expired</option>
          </select>
        </div>

        {/* Source Filter */}
        <div className="form-group">
          <select
            name="source"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            id="2"
          >
            <option value="">Lead Source</option>
            <option value="1">Premium Lead</option>
            <option value="2">HNI Lead</option>
            <option value="3">Web Lead</option>
            <option value="4">Fresh Lead</option>
            <option value="5">SEO</option>
          </select>
        </div>

        {/* Profile Filter */}
        <div className="form-group">
          <select
            name="profile"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            id="3"
            onChange={(e) =>
              getOptions(`https://client.envisioninfo.tech/general/GEBP/${e.target.value}`, '', '', '', '', '4')
            }
          >
            <option value="">Profile</option>
            <option value="1">Admin</option>
            <option value="2">Sub-Admin</option>
          </select>
        </div>

        {/* Employee Filter */}
        <div className="form-group">
          <select
            name="employee"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            id="4"
          >
            <option value="">Employee</option>
          </select>
        </div>

        {/* Mobile Input */}
        <div className="form-group col-span-2 sm:col-span-1">
          <input
            type="text"
            name="mobile"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="Mobile"
            id="5"
          />
        </div>

        {/* From Date Input */}
        <div className="form-group col-span-2 sm:col-span-1">
          <input
            type="text"
            name="fDate"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="From Date"
            id="6"
            readOnly
            autoComplete="off"
          />
        </div>

        {/* To Date Input */}
        <div className="form-group col-span-2 sm:col-span-1">
          <input
            type="text"
            name="tDate"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="To Date"
            id="7"
            readOnly
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center my-4">
        <a
          href="#"
          onClick={() =>
            pageload('https://client.envisioninfo.tech/leads/addLead', 'params', 'paramid', 'content__inner')
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Add Leads
        </a>
        <a
          href="#"
          onClick={() =>
            pageload('https://client.envisioninfo.tech/leads/ftLeads', 'status=All', '', 'content__inner')
          }
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
        >
          All Demo
        </a>
        <a
          href="#"
          onClick={() =>
            pageload('https://client.envisioninfo.tech/leads/ftLeads', 'status=Running', '', 'content__inner')
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Running
        </a>
        <a
          href="#"
          onClick={() =>
            pageload('https://client.envisioninfo.tech/leads/ftLeads', 'status=Approved', '', 'content__inner')
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Approved
        </a>
        <a
          href="#"
          onClick={() =>
            pageload('https://client.envisioninfo.tech/leads/ftLeads', 'status=Expired', '', 'content__inner')
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Expired
        </a>
        <a
          href="#"
          onClick={() =>
            pageload('https://client.envisioninfo.tech/freeTrial/view', '', '', 'content__inner')
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          History
        </a>
      </div>

      <div className="overflow-x-auto">
        <table
          id="data-table"
          className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg text-gray-700"
        >
          <thead className="bg-yellow-600 text-white">
            <tr>
              <th className="p-4">S.No.</th>
              <th className="p-4">Owner</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">Mobile</th>
              <th className="p-4">Login Id</th>
              <th className="p-4">Trade</th>
              <th className="p-4">Status</th>
              <th className="p-4">Login Time</th>
              <th className="p-4">DMAT</th>
              <th className="p-4">DMAT Login</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="border-t">
              <td className="p-4">1</td>
              <td className="p-4">Admin</td>
              <td className="p-4">Sangita Chaudhary</td>
              <td className="p-4">81***</td>
              <td className="p-4">C222</td>
              <td className="p-4">
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    checked
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"
                  ></label>
                </div>
              </td>
              <td className="p-4">
                <span className="bg-green-500 text-white p-2 rounded">Running</span>
              </td>
              <td className="p-4">12 Aug 11:26</td>
              <td className="p-4">
                <a href="#" className="bg-green-500 text-white p-2 rounded">Angel</a>
              </td>
              <td className="p-4">12-Aug 11:32</td>
              <td className="p-4 space-x-2">
                <a href="#" className="bg-blue-500 text-white p-2 rounded"><i className="zmdi zmdi-edit"></i></a>
                <a href="#" className="bg-red-500 text-white p-2 rounded"><i className="zmdi zmdi-delete"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default index;
