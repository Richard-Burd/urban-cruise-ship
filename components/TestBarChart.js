import React from 'react';
import { Bar, CartesianGrid, LabelList, Tooltip, XAxis, YAxis, BarChart } from 'recharts';

const data = [
  { name: 'Test Row A', value: 4000 },
  { name: 'Test Row B', value: 1200 },
  { name: 'Test Row C', value: 500 },
  { name: 'Test Row D', value: 120 },
  { name: 'Test Row E', value: 20 },
];

const TestBarChart = () => {
  return (
    <>
      <h2>This chart is a test under construction</h2>
      <BarChart
        width={600}
        height={300}
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={100} />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" minPointSize={5}>
          <LabelList dataKey="value" position="right" offset={10} />
        </Bar>
      </BarChart>
    </>
  );
};

export default TestBarChart;
