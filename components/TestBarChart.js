import React from "react";
import {
  Bar,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from "recharts";

const data = [
  { name: "Test Row A", value: 4000 },
  { name: "Test Row B", value: 1200 },
  { name: "Test Row C", value: 300 },
  { name: "Test Row D", value: 120 },
  { name: "Test Row E", value: 90 },
];

const TestBarChart = () => {
  return (
    <>
      <h2>This chart is a test under construction</h2>
      <BarChart
        width={800}
        height={300}
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis type="number" hide={true} />
        <YAxis
          type="category"
          dataKey="name"
          width={100}
          tick={{
            fill: "black",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />
        <Tooltip />
        <Bar dataKey="value" fill="#171717" minPointSize={5} barSize={20}>
          <LabelList
            dataKey="value"
            position="right"
            offset={10}
            style={{
              fill: "black",
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          />
        </Bar>
      </BarChart>
    </>
  );
};

export default TestBarChart;
