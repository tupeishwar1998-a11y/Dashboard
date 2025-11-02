import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 20 },
  { name: "Apr", value: 40 },
  { name: "May", value: 60 },
];

const GraphWidget = () => (
  <div>
    <h6 className="text-center mb-2">Sample Graph</h6>
    <LineChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#007bff" />
    </LineChart>
  </div>
);

export default GraphWidget;
