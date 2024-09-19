import React from "react";
import { Badge, Descriptions } from "antd";
import ActionDropdown from "../../components/ActionDropdown";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const actionMenu = [
  {
    label: <a>Edit</a>,
    key: "0",
  },
  {
    label: <div>2nd menu item</div>,
    key: "1",
  },
  {
    type: "divider",
  },
];
const items = [
  {
    key: "1",
    label: "Name",
    children: "Abc Agency",
  },
  {
    key: "2",
    label: "Billing Mode",
    children: "Prepaid",
  },
  {
    key: "3",
    label: "Country",
    children: "USA",
  },
  {
    key: "4",
    label: "State",
    children: "New York",
  },
  {
    key: "5",
    label: "Address",
    children: "162-Cherry Road",
  },
  {
    key: "6",
    label: "Joining Date",
    children: "2018-04-24 18:00:00",
  },
  {
    key: "7",
    label: "Users",
    children: "32",
  },
  {
    key: "8",
    label: "Admins",
    children: "2",
  },
  {
    key: "9",
    label: "Automatic Renewal",
    children: "YES",
  },
  {
    key: "10",
    label: "Order time",
    children: "2018-04-24 18:00:00",
  },
  {
    key: "11",
    label: "Usage Time",
    children: "2019-04-24 18:00:00",
    span: 2,
  },
  {
    key: "12",
    label: "Status",
    children: <Badge status="processing" text="Running" />,
    span: 3,
  },
  {
    key: "13",
    label: "Negotiated Amount",
    children: "$80.00",
  },
  {
    key: "14",
    label: "Discount",
    children: "$20.00",
  },
  {
    key: "15",
    label: "Official Receipts",
    children: "$60.00",
  },
  {
    key: "16",
    label: "Config Info",
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const handleDelete = () => {
  console.log("delete");
};
const handleDisable = () => {
  console.log("disable");
};

const App = () => (
  <>
    <Descriptions title="Client Info" bordered items={items} />
    <ActionDropdown
      type="clients"
      handleDelete={handleDelete}
      handleDisable={handleDisable}
    />
  </>
);
export default App;
