import React from "react";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function ClientList() {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Organization",
      dataIndex: "organization",
      sorter: {
        compare: (a, b) => a.organization - b.organization,
        multiple: 3,
      },
    },
    {
      title: "Users",
      dataIndex: "users",
      sorter: {
        compare: (a, b) => a.users - b.users,
        multiple: 2,
      },
    },
    {
      title: "Admins",
      dataIndex: "admins",
      sorter: {
        compare: (a, b) => a.admins - b.admins,
        multiple: 1,
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <Link to="/clients/details/1">View</Link>,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      organization: "ABC",
      users: 60,
      admins: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      organization: "ABC",
      users: 66,
      admins: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      organization: "ABC",
      users: 90,
      admins: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      organization: 88,
      users: 99,
      admins: 89,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table columns={columns} data={data} onChange={onChange} />
      <FloatButton
        icon={<PlusOutlined />}
        tooltip={<div>Add Client</div>}
        onClick={() => navigate("/clients/create")}
      />
    </div>
  );
}
