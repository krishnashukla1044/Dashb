import React from 'react';

const ApprovalInvoice = () => {

  const getAllChecked = (id, url, containerId) => {
    console.log(`Fetching all checked items with ID: ${id} and sending to URL: ${url}`);
    // Replace this with the actual implementation
  };

  const selectAll = (selectAllId, itemIds) => {
    console.log(`Selecting all items with ID: ${selectAllId}`);
    // Replace this with the actual implementation
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="mt-4 flex flex-wrap gap-4 mb-6">
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

      <header className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Approve Invoice</h1>
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

      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <div className="p-6">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="selectall"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      onClick={() => selectAll('selectall', 'invids[]')}
                    />
                    <span className="ml-2 text-gray-700">Select All</span>
                  </label>
                </th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Table rows will go here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovalInvoice;
