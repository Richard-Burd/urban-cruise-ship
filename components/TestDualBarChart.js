import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'United States',
    value: 300,
    cost: 400,
  },
  {
    name: 'Japan',
    value: 200,
    cost: 240,
  },
  {
    name: 'Canada',
    value: 100,
    cost: 80,
  },
];

const SimpleBarChart = () => {
  return (
    <BarChart width={600} height={300} data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" barSize={30} />
      <Bar dataKey="cost" fill="#82ca9d" barSize={30} />
    </BarChart>
  );
};

export default SimpleBarChart;



// import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// const data = [
//   { country: "United States", value: 300 },
//   { country: "Japan", value: 200 },
//   { country: "Canada", value: 100 },
// ];

// const SimpleBarChart = () => {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       layout="vertical"
//       margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
//     >
//       <XAxis type="number" hide={true} />
//       <YAxis type="category" dataKey="country" />
//       <Tooltip />
//       <Bar dataKey="value" fill="#8884d8" barSize={30} />
//     </BarChart>
//   );
// };

// export default SimpleBarChart;