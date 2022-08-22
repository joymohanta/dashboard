import React from "react";
import "./ChartPie.css";
import { PieChart, Pie } from "recharts";

const ChartPie = () => {
  const data01 = [
    {
      name: "Group A",
      value: 215,
    },
    {
      name: "Group B",
      value: 400,
    },
    {
      name: "Group C",
      value: 125,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
  ];

  return (
    <div className="bg-white mt-3 chart_pie">
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
        <h6>Order Stats</h6>
        <p>...</p>
      </div>
      <div>
        <PieChart width={270} height={200}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
        <span className="d-flex justify-content-between ms-2">
          <small>
            Completed <br />
            <span className="me-4 text-success">4567</span>
          </small>
          <small>
            Pending <br />
            <span className="me-3 text-primary">2400</span>
          </small>
          <small className="me-2">
            Cancel <br />
            <span className="me-2 text-danger">1398</span>
          </small>
        </span>
      </div>
    </div>
  );
};

export default ChartPie;
