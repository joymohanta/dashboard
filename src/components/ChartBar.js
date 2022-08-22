import React from "react";
import "./ChartBar.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartBar = () => {
  const data = [
    {
      name: "Feb",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mar",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Apr",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "May",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jun",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jul",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-white mt-3 overview_bar">
      <div className="d-flex justify-content-between mx-2">
        <h6 className="mt-3">Overview</h6>
        <h6 className="d-flex align-items-center mt-3">
          <label className="me-2">Sort_By:</label>
          <select
            className="form-select form-select-sm option_bar"
            aria-label=".form-select-sm example"
          >
            <option defaultValue>Yearly</option>
            <option value="1">Monthly</option>
            <option value="2">Weekly</option>
          </select>
        </h6>
      </div>
      <div className="d-flex mt-2">
        <div className="me-4">
          <p className="d-flex mx-2 mb-0">
            <small>This Month</small> <p></p>
          </p>
          <span className="d-flex">
            <h4 className="ms-2 pe-4">$24,568</h4>
            <p>
              <small className="percentage ms-4">+2.65%</small>
            </p>
          </span>
          <div className="d-flex justify-content-between mx-2">
            <span>
              <p className="mb-0">
                <small>Orders</small>{" "}
              </p>
              <h6>5,643</h6>
            </span>
            <span>
              <p className="mb-0">
                <small className="ms-2">Sales</small>{" "}
              </p>
              <h6>16,273</h6>
            </span>
          </div>
          <hr className="mx-2 my-0" />
          <div className="d-flex justify-content-between mx-2">
            <span>
              <p className="mb-0">
                <small>Order Value</small>{" "}
              </p>
              <h6 className="me-4">12.03%</h6>
            </span>
            <span>
              <p className="mb-0">
                <small>Customers</small>{" "}
              </p>
              <h6 className="ms-3">21,456</h6>
            </span>
          </div>
          <hr className="mx-2 my-0" />
          <div className="d-flex justify-content-between mx-2">
            <span>
              <p className="mb-0">
                <small className="me-2">Income</small>{" "}
              </p>
              <h6>$35,652</h6>
            </span>
            <span>
              <p className="mb-0">
                <small>Expenses</small>{" "}
              </p>
              <h6>$12,248</h6>
            </span>
          </div>
        </div>
        <div className="ms-4">
          <BarChart width={600} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
