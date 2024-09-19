import React from 'react';

const ApprovalPayment = () => {
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

      <div id="content__inner" className="content__inner p-4 bg-white rounded-lg shadow-md">
        <header className="content__title mb-4 flex flex-col sm:flex-row justify-between items-center border-b pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Approve Payment</h1>
          <div className="actions flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-0">
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

        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="card-body p-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      name="selectall"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      onChange={() => selectAll('selectall', 'prids[]')}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raised By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pan/DOB</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Id</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Broker</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Table rows go here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalPayment;
