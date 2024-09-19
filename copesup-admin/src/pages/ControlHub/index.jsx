import React from 'react';
import { Link } from 'react-router-dom';

const ControlHub = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Top Navigation Links */}
      <div className="flex flex-col sm:flex-row justify-between mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/Live"
          className="py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold uppercase tracking-wider hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg text-center"
        >
          Live
        </Link>
        <Link
          to="/Demo"
          className="py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold uppercase tracking-wider hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg text-center"
        >
          Demo
        </Link>
      </div>

      {/* Strategy Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Strategy 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 border border-green-200">
          <div className="p-6">
            <h4 className="text-xl md:text-2xl font-bold text-green-900 mb-4">Strategy 1</h4>
            <h6 className="text-lg text-green-500 mb-4">Tag: ST1</h6>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Another popular strategy.</li>
              <li>Used for different market conditions.</li>
              <li>Provides a balanced approach to trading.</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 text-center">
            <button
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
              onClick={() => window.location.href = 'https://your-component-page-link.com'}
            >
              View Scripts
            </button>
          </div>
        </div>

        {/* Strategy 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 border border-green-200">
          <div className="p-6">
            <h4 className="text-xl md:text-2xl font-bold text-green-900 mb-4">Strategy 2</h4>
            <h6 className="text-lg text-green-500 mb-4">Tag: ST2</h6>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Another popular strategy.</li>
              <li>Used for different market conditions.</li>
              <li>Provides a balanced approach to trading.</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 text-center">
            <button
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
              onClick={() => window.location.href = 'https://your-component-page-link.com'}
            >
              View Scripts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlHub;
