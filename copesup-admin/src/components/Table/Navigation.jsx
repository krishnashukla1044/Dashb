
import React from 'react';

const handlePageLoad = (url, status) => {
  // You can replace this with the actual logic to handle page loads
  console.log(`Loading page with URL: ${url} and status: ${status}`);
};

const Navigation = () => {
  return (
<div className="flex flex-wrap m-2 space-x-2 space-y-2 sm:space-y-0">
  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/leads/client', 'status=All')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-full">All</span>
  </a>
  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/leads/client', 'status=Running')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">Running</span>
  </a>

  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/leads/client', 'status=Approved')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">Approved</span>
  </a>

  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/leads/client', 'status=Expired')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">Expired</span>
  </a>

  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/paymentRaised/view', '')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-black rounded-full">Payments</span>
  </a>
  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/invoice/viewAll', '')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-black rounded-full">Invoice</span>
  </a>
  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/configuration/licenseView', 'status=All')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-full">License</span>
  </a>
  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/configuration/licenseView', 'status=All')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">Add Leads</span>
  </a>
  <a href="#" onClick={() => handlePageLoad('https://client.envisioninfo.tech/configuration/licenseView', 'status=All')}>
    <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full">Live</span>
  </a>
</div>

  );
};

export default Navigation;
