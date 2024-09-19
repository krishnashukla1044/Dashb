import React from 'react';
import { useRoutes, Outlet, Navigate } from 'react-router-dom'; // Added Outlet import
import Dashboard from './pages/Dashboard';
import Demo from './pages/Demo';
import ControlHub from './pages/ControlHub';
import Login from './pages/LoginSec/Login';
import Signup from './pages/LoginSec/Signup';
import ForgetPassword from './pages/LoginSec/ForgetPassword';
import Live from './pages/Live';
import Configuration from './pages/Configuration';
import Approval from './pages/Approval';
import subAdminRoutes from './pages/SubAdminDetails/subAdminRoutes';
import { ClientList, CreateClient, ClientDetails, EditClient } from './pages/Clients';
import Mainlayout from './components/Mainlayout';

function RoutesComponent() {
  const element = useRoutes([
    // Public Routes
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/forgetpassword', element: <ForgetPassword /> },

    // Redirect root path to dashboard if authenticated
    { path: '/', element: <Navigate to="/dashboard" /> },

    // Protected Routes
    {
      path: '/dashboard',
      element: (
        <Mainlayout selectedKey={'1'}>
          <Dashboard />
        </Mainlayout>
      ),
    },
    {
      path: '/subAdminDetails',
      element: (
        <Mainlayout selectedKey={'3'}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        { path: 'Administrator', element: <subAdminRoutes.Administrator /> },
        { path: 'ChiefAdministrator', element: <subAdminRoutes.ChiefAdministrator /> },
        { path: 'ManagingDirector', element: <subAdminRoutes.ManagingDirector /> },
      ],
    },
    {
      path: '/demo',
      element: (
        <Mainlayout selectedKey={'6'}>
          <Demo />
        </Mainlayout>
      ),
    },
    {
      path: '/controlHub',
      element: (
        <Mainlayout selectedKey={'4'}>
          <ControlHub />
        </Mainlayout>
      ),
    },
    {
      path: '/live',
      element: (
        <Mainlayout selectedKey={'5'}>
          <Live />
        </Mainlayout>
      ),
    },
    {
      path: '/configuration',
      element: (
        <Mainlayout selectedKey={'8'}>
          <Configuration />
        </Mainlayout>
      ),
    },
    {
      path: '/clients',
      element: (
        <Mainlayout selectedKey={'2'}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        { path: 'list', element: <ClientList /> },
        { path: 'create', element: <CreateClient /> },
        { path: ':clientId', element: <ClientDetails /> },
        { path: ':clientId/edit', element: <EditClient /> },
      ],
    },
    {
      path: '/approval',
      element: (
        <Mainlayout selectedKey={'7'}>
          <Approval />
        </Mainlayout>
      ),
    },

    // Catch-all Redirect
    { path: '*', element: <Navigate to="/dashboard" /> },
  ]);

  return element;
}

export default RoutesComponent;
