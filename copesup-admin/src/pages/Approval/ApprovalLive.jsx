import React from 'react';

const ApprovalLive = () => {
  const getAllChecked = (id, url, containerId) => {
    console.log(`Fetching all checked items with ID: ${id} and sending to URL: ${url}`);
    // Replace this with the actual implementation
  };

  const selectAll = (selectAllId, itemIds) => {
    console.log(`Selecting all items with ID: ${selectAllId}`);
    // Replace this with the actual implementation
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="mt-4 mb-8 flex flex-wrap gap-4 justify-start">
        <a
          href="#"
          onClick={() => pageload('https://client.envisioninfo.tech/configuration/uploadLead', '', '', 'content__inner')}
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:from-blue-600 hover:to-teal-500 transition duration-300"
        >
          Lead Upload
        </a>
        <a
          href="#"
          onClick={() => modal('https://client.envisioninfo.tech/configuration/leadBalance', 'modal-lg')}
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:from-blue-600 hover:to-teal-500 transition duration-300"
        >
          Lead Balance
        </a>
        <a
          href="#"
          onClick={() => modal('https://client.envisioninfo.tech/leads/addInstantLead')}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:from-yellow-500 hover:to-yellow-700 transition duration-300 flex items-center space-x-2"
        >
          <span>Instant Add</span>
          <span id="instantLeadCount" className="bg-yellow-800 text-white rounded-full px-2">0</span>
        </a>
        <a
          href="#"
          onClick={() => modal('https://client.envisioninfo.tech/leads/addHotLead')}
          className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:from-red-600 hover:to-red-800 transition duration-300"
        >
          Hot Lead
        </a>
      </div>

      <div className="card-body p-4 bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <header className="content__title mb-4 flex flex-col sm:flex-row justify-between items-center border-b pb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Approve-Live</h1>
            <div className="actions space-y-2 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-0 flex flex-col sm:flex-row">
              <button
                onClick={() => getAllChecked('prids', 'https://client.envisioninfo.tech/paymentRaised/setApprove/1', 'content__inner')}
                className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
              >
                Approve
              </button>
              <button
                onClick={() => getAllChecked('prids', 'https://client.envisioninfo.tech/paymentRaised/setApprove/2', 'content__inner')}
                className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow-md hover:from-red-500 hover:to-red-700 transition duration-300"
              >
                Deny
              </button>
            </div>
          </header>
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="selectall"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      onChange={() => selectAll('selectall', 'ftids[]')}
                    />
                    <span className="ml-2 text-gray-700">Select All</span>
                  </label>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="ids[]" value="4" className="form-checkbox h-5 w-5 text-blue-600" />
                  </label>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19-Jul-24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Harish Reddy</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8553236585</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19-Jul-24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18-Aug-24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="ids[]" value="54" className="form-checkbox h-5 w-5 text-blue-600" />
                  </label>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12-Aug-24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sangita Chaudhary</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8181849777</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12-Aug-24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11-Sep-24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovalLive;
