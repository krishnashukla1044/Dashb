import React, { useState } from 'react';
import ApprovalPayment from './ApprovalPayment';
import ApprovalFreeTrial from './ApprovalFreeTrial';
import ApprovalLive from './ApprovalLive';
import ApprovalInvoice from './ApprovalInvoice';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('ApprovalPayment');

  const getAllChecked = (id, url, containerId) => {
    console.log(`Fetching all checked items with ID: ${id} and sending to URL: ${url}`);
    // Replace this with the actual implementation
  };

  const selectAll = (selectAllId, itemIds) => {
    console.log(`Selecting all items with ID: ${selectAllId}`);
    // Replace this with the actual implementation
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ApprovalPayment':
        return <ApprovalPayment getAllChecked={getAllChecked} selectAll={selectAll} />;
      case 'ApprovalFreeTrial':
        return <ApprovalFreeTrial />;
      case 'ApprovalLive':
        return <ApprovalLive />;
      case 'ApprovalInvoice':
        return <ApprovalInvoice />;
      default:
        return <ApprovalPayment getAllChecked={getAllChecked} selectAll={selectAll} />;
    }
  };

  return (
    <div className="w-full h-screen p-4">
      <div className="mt-2 flex flex-wrap justify-around space-y-4 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 p-4 rounded-lg">
        <button
          onClick={() => setCurrentPage('ApprovalPayment')}
          className="w-full sm:w-auto bg-white text-black rounded-[10px] px-4 py-2 text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Payment
        </button>
        <button
          onClick={() => setCurrentPage('ApprovalFreeTrial')}
          className="w-full sm:w-auto bg-white text-black rounded-[10px] px-4 py-2 text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Free Trial
        </button>
        <button
          onClick={() => setCurrentPage('ApprovalLive')}
          className="w-full sm:w-auto bg-white text-black rounded-[10px] px-4 py-2 text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Live
        </button>
        <button
          onClick={() => setCurrentPage('ApprovalInvoice')}
          className="w-full sm:w-auto bg-white text-black rounded-[10px] px-4 py-2 text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Invoice
        </button>
      </div>

      <div id="content__inner" className="content__inner p-4">
        {renderPage()}
      </div>
    </div>
  );
};

export default Index;
