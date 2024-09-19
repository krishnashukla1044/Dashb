import React, { useState, lazy, Suspense } from "react";
import {
  FaUsers,
  FaDochub,
  FaTools,
  FaUserCog,
  FaUserCheck,
  FaTachometerAlt,
} from "react-icons/fa";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"));
const NotificationDrawer = lazy(() => import("../NotificatonDrawer"));

const { Header, Sider, Content } = Layout;

const Sidebar = ({ collapsed, selectedKey, onCollapseToggle }) => {
  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ padding: 0, background: "#fff" }}
      className="h-screen lg:h-auto"
    >
      <div className="flex justify-center font-serif text-xl lg:text-2xl my-5">
        {collapsed ? "Env" : "Envision"}
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
        items={[
          {
            key: "1",
            icon: <FaTachometerAlt style={{ fontSize: "22px" }} />,
            label: "Dashboard",
            onClick: () => navigate("/"),
          },
          {
            key: "2",
            icon: <FaUsers style={{ fontSize: "22px" }} />,
            label: "Clients",
            onClick: () => navigate("/clients"),
          },
          {
            key: "3",
            icon: <FaUserCog style={{ fontSize: "22px" }} />,
            label: "SubAdminDetails",
            children: [
              {
                key: "3-1",
                label: "Administrator",
                onClick: () => navigate("/SubAdminDetails/Administrator"),
              },
              {
                key: "3-2",
                label: "ChiefAdministrator",
                onClick: () => navigate("/SubAdminDetails/ChiefAdministrator"),
              },
              {
                key: "3-3",
                label: "ManagingDirector",
                onClick: () => navigate("/SubAdminDetails/ManagingDirector"),
              },
            ],
          },
          {
            key: "6",
            icon: <FaDochub style={{ fontSize: "22px" }} />,
            label: "ControlHub",
            onClick: () => navigate("/ControlHub"),
          },
          {
            key: "7",
            icon: <FaUserCheck style={{ fontSize: "22px" }} />,
            label: "Approval",
            onClick: () => navigate("/Approval"),
          },
          {
            key: "8",
            icon: <FaTools style={{ fontSize: "22px" }} />,
            label: "Configuration",
            onClick: () => navigate("/Configuration"),
          },
        ]}
      />
    </Sider>
  );
};

const App = ({ children, selectedKey }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const showProfile = () => setProfileOpen(true);
  const closeProfile = () => setProfileOpen(false);

  return (
    <Layout className="w-full min-h-screen flex flex-col lg:flex-row">
      <Sidebar
        collapsed={collapsed}
        selectedKey={selectedKey}
        onCollapseToggle={() => setCollapsed(!collapsed)}
      />
      <Layout className="flex-1 flex flex-col">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="px-4 lg:px-6"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
            className="lg:hidden"
          />
          <div className="flex items-center gap-2 w-full max-w-md lg:max-w-none">
            <input
              className="search-input w-full h-8 lg:h-10 bg-gray-200 rounded-lg outline-none pl-10 pr-4 py-2 shadow-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>

          <div className="flex items-center space-x-4 w-auto lg:w-60 justify-between lg:justify-around">
            <div
              className={`flex items-center space-x-2 cursor-pointer ${collapsed ? 'hidden' : 'flex'}`}
              onClick={showProfile}
              aria-label="Profile"
            >
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="w-10 lg:w-12 h-10 lg:h-12 rounded-full border-2 border-yellow-500"
              />
              <span className="text-base lg:text-lg">Profile</span>
            </div>

            <BellOutlined
              onClick={() => setOpenNotification(!openNotification)}
              style={{ fontSize: "20px", lg: "25px" }}
              aria-label="Notifications"  
            />

            {/* Profile Page Modal */}
            {profileOpen && (
              <div className="fixed inset-0 flex items-center w-full h-screen justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-red-200 p-4 rounded-lg shadow-lg relative w-[70%] h-[70%]  ">
                  <Suspense className="w-full h-screen bg-green-100" fallback={<div>Loading...</div>}>
                    <  ProfilePage/>
                  </Suspense>
                  <Button
                    onClick={closeProfile}
                    className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600"
                    type="link"
                  >
                    Close Profile
                  </Button>
                </div>
              </div>
            )}

            {/* Notification Drawer */}
            {openNotification && (
              <Suspense fallback={<div>Loading...</div>}>
                <NotificationDrawer
                  open={openNotification}
                  setOpen={setOpenNotification}
                />
              </Suspense>
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 8px",
            padding: 16,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="flex-1"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
