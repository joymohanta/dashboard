import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Status.css";

const Status = () => {
  const data = [
    {
      name: "Sun",
      uv: 1500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tue",
      uv: 2000,
      pv: 3000,
      amt: 2290,
    },
    {
      name: "Wed",
      uv: 2580,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Thr",
      uv: 1890,
      pv: 3000,
      amt: 2181,
    },
    {
      name: "Fri",
      uv: 3390,
      pv: 1800,
      amt: 2500,
    },
    {
      name: "Sat",
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className=" mt-3 bg-white status">
      <div className="first_chart_container">
        <div className="first_chart mx-2 mt-2">
          <span>
            <h6>User Activity</h6>
          </span>
          <span>
            <select
              className="form-select form-select-sm option_bar"
              aria-label=".form-select-sm example"
            >
              <option defaultValue>Weekly</option>
              <option value="1">Monthly</option>
              <option value="2">Yearly</option>
            </select>
          </span>
        </div>
        <span className="d-flex">
          <span>
            <p className="mb-0">
              <small className="ms-2">This Month</small>
            </p>
            <h6 className="me-3">16,543</h6>
          </span>
          <p></p>
        </span>
        <div>
          <span className="d-flex justify-content-between">
            <small></small>
            <small>
              <span className="ball_green">c</span>Current{" "}
              <span className="ball_blue">p</span>Previous
            </small>
          </span>
          <AreaChart
            width={290}
            height={170}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Status;
