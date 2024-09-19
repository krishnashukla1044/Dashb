import React from 'react';

const LeadActions = () => {
  return (
    <div className="mt-4 ml-4 flex flex-wrap gap-4">
      {/* Lead Upload Button */}
      <a
        href="#"
        onClick={() => pageload('https://client.envisioninfo.tech/configuration/uploadLead', '', '', 'content__inner')}
        className="bg-black hover:bg-gray-800 text-white font-medium rounded-full px-4 py-2 text-sm transition duration-200"
      >
        Lead Upload
      </a>

      {/* Lead Balance Button */}
      <a
        href="#"
        onClick={() => modal('https://client.envisioninfo.tech/configuration/leadBalance', 'modal-lg')}
        className="bg-black hover:bg-gray-800 text-white font-medium rounded-full px-4 py-2 text-sm transition duration-200"
      >
        Lead Balance
      </a>

      {/* Instant Add Button */}
      <a
        href="#"
        onClick={() => modal('https://client.envisioninfo.tech/leads/addInstantLead')}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-full px-4 py-2 text-sm transition duration-200 flex items-center space-x-2"
      >
        <span>Instant Add</span>
        <span id="instantLeadCount" className="bg-yellow-700 text-white font-bold rounded-full px-3 py-1">0</span>
      </a>

      {/* Hot Lead Button */}
      <a
        href="#"
        onClick={() => modal('https://client.envisioninfo.tech/leads/addHotLead')}
        className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-4 py-2 text-sm transition duration-200"
      >
        Hot Lead
      </a>
    </div>
  );
};

export default LeadActions;
