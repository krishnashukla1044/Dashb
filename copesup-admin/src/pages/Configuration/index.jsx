import React from 'react';
import { FiSettings, FiBarChart2, FiDatabase, FiUsers, FiFolder, FiList } from 'react-icons/fi';
import LeadActions from './LeadActions';

const Index = () => {
  const handlePageLoad = (url) => {
    // Uncomment the line below to actually navigate to the URL
    // window.location.href = url;
    console.log(`Loading page: ${url}`);
  };

  const quickStatsItems = [
    { title: 'Company', subtitle: 'Details', url: 'https://client.envisioninfo.tech/configuration/viewCompany', icon: <FiSettings /> },
    { title: 'Product', subtitle: 'List', url: 'https://client.envisioninfo.tech/configuration/viewProduct', icon: <FiDatabase /> },
    { title: 'Product', subtitle: 'Groups', url: 'https://client.envisioninfo.tech/configuration/viewPG', icon: <FiFolder /> },
    { title: 'Sub Category', subtitle: 'List', url: 'https://client.envisioninfo.tech/configuration/viewSC', icon: <FiList /> },
    { title: 'Script', subtitle: 'Name', url: 'https://client.envisioninfo.tech/configuration/viewSN', icon: <FiList /> },
    { title: 'Instrument', subtitle: 'List', url: 'https://client.envisioninfo.tech/configuration/viewIN', icon: <FiDatabase /> },
    { title: 'Script', subtitle: 'Master', url: 'https://client.envisioninfo.tech/configuration/viewSM', icon: <FiSettings /> },
    { title: 'Template', subtitle: 'List', url: 'https://client.envisioninfo.tech/configuration/viewTemplate', icon: <FiFolder /> },
    { title: 'Payment', subtitle: 'Modes', url: 'https://client.envisioninfo.tech/configuration/viewPM', icon: <FiSettings /> },
    { title: 'Lead', subtitle: 'Response', url: 'https://client.envisioninfo.tech/configuration/viewLeadResponse', icon: <FiBarChart2 /> },
    { title: 'Lead', subtitle: 'Status', url: 'https://client.envisioninfo.tech/configuration/viewLeadStatus', icon: <FiBarChart2 /> },
    { title: 'Lead', subtitle: 'Source', url: 'https://client.envisioninfo.tech/configuration/viewLeadSource', icon: <FiBarChart2 /> },
    { title: 'Lead', subtitle: 'Upload', url: 'https://client.envisioninfo.tech/configuration/uploadLead', icon: <FiBarChart2 /> },
    { title: 'Lead', subtitle: 'Allot', url: 'https://client.envisioninfo.tech/configuration/viewAllotLead', icon: <FiBarChart2 /> },
    { title: 'Lead', subtitle: 'Fetch Limit', url: 'https://client.envisioninfo.tech/configuration/viewFetchLimit', icon: <FiBarChart2 /> },
    { title: 'Department', subtitle: 'List', url: 'https://client.envisioninfo.tech/department/depList', icon: <FiUsers /> },
    { title: 'Profile', subtitle: 'List', url: 'https://client.envisioninfo.tech/profile/proList', icon: <FiUsers /> },
    { title: 'Employee', subtitle: 'List', url: 'https://client.envisioninfo.tech/employee/empList', icon: <FiUsers /> },
    { title: 'Team', subtitle: 'List', url: 'https://client.envisioninfo.tech/employee/teamList', icon: <FiUsers /> },
    { title: 'Permissions', subtitle: 'Allotment', url: 'https://client.envisioninfo.tech/employee/permission', icon: <FiSettings /> },
    { title: 'Graph', subtitle: 'Sales', url: 'https://client.envisioninfo.tech/configuration/viewGraph', icon: <FiBarChart2 /> },
  ];

  return (
    <div id="content__inner" className="p-6 bg-gray-100">
      <header className="mb-10 sm:w-10 md:w-20">
        <h1 className="text-4xl font-bold text-gray-800">Configuration</h1>
      </header>


      {/* Lead Actions Component */}
      <LeadActions />

      {/* Configuration Items */}
      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {quickStatsItems.slice(0, 6).map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <a
                href="#"
                onClick={() => handlePageLoad(item.url)}
                className="block text-gray-800"
              >
                <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
                <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.subtitle}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* More Configuration Items */}
      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {quickStatsItems.slice(6, 9).map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <a
                href="#"
                onClick={() => handlePageLoad(item.url)}
                className="block text-gray-800"
              >
                <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
                <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.subtitle}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Leads Section */}
      <section className="mt-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Leads</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {quickStatsItems.slice(9, 15).map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <a
                href="#"
                onClick={() => handlePageLoad(item.url)}
                className="block text-gray-800"
              >
                <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
                <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.subtitle}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Employee Section */}
      <section className="mt-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Employee</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {quickStatsItems.slice(15, 21).map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <a
                href="#"
                onClick={() => handlePageLoad(item.url)}
                className="block text-gray-800"
              >
                <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
                <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.subtitle}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
