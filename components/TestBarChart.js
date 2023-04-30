import { ResponsiveContainer } from 'recharts';
import endeavorData from '../data/endeavorTestData';
import solutionData from '../data/solutionTestData';

import React from "react";
import {
  Bar,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from "recharts";

const data = [
  { name: "High Speed Rail, Hong Kong to China (2010 - 2060)", barlength: 4000, displayedValue: "Three Hundred" },
  {
    name: "Test Row B",
    barlength: 1200,
    displayedValue: "One Thousand Two Hundred",
  },
  {
    name: "Test Row C",
    barlength: 300,
    displayedValue: "Three Hundred and forty",
  },
  { name: "Test Row D", barlength: 120, displayedValue: "One Hundred Twenty" },
  { name: "Test Row E", barlength: 90, displayedValue: "Ninety" },
];

const customLabelRenderer = (props) => {
  const { x, y, width, value } = props;
  const noWrapValue = value.replace(/\n|\r| /g, " ");

  return (
    <text
      x={x + width + 10}
      y={y + 15}
      textAnchor="start"
      fill="black"
      fontFamily="Roboto"
      fontSize="14px"
    >
      {noWrapValue}
    </text>
  );
};

const TestBarChart = () => {
  return (
    <>
      <h2>This chart is a test under construction</h2>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={800}
        height={300}
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 120,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis type="number" hide={true} />
        <YAxis
          type="category"
          dataKey="name"
          width={400}
          tick={{
            fill: "black",
            fontFamily: "Roboto",
            fontSize: "15px",
            fontWeight: "bold",
            width: 200,
            lineHeight: 1.5
          }}
          axisLine={{ stroke: "#000", strokeWidth: 0 }}
          tickLine={{ stroke: "#000", strokeWidth: 0 }}
        />
        <Tooltip />
        <Bar dataKey="barlength" fill="#171717" minPointSize={5} barSize={20}>
          <LabelList
            dataKey="displayedValue"
            position="right"
            content={customLabelRenderer}
          />
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default TestBarChart;



// import { ResponsiveContainer } from 'recharts';
// import { endeavorData } from "../data/endeavorTestData";
// import { solutionData } from "../data/solutionTestData";

// import React from "react";
// import {
//   Bar,
//   LabelList,
//   Tooltip,
//   XAxis,
//   YAxis,
//   BarChart,
// } from "recharts";

// function processData(endeavorData, solutionData) {
//   const combinedData = endeavorData.concat(solutionData).map((item) => {
//     const name = item.endeavor || item.solution;
//     const barlength = item.benefit - item.cost;
//     const displayedValue = `${barlength} (${item.benefit} - ${item.cost})`;

//     return { name, barlength, displayedValue };
//   });

//   return combinedData;
// }

// const data = processData(endeavorData, solutionData);

// const customLabelRenderer = (props) => {
//   const { x, y, width, value } = props;
//   const noWrapValue = value.replace(/\n|\r| /g, " ");

//   return (
//     <text
//       x={x + width + 10}
//       y={y + 15}
//       textAnchor="start"
//       fill="black"
//       fontFamily="Roboto"
//       fontSize="14px"
//     >
//       {noWrapValue}
//     </text>
//   );
// };

// const TestBarChart = () => {
//   return (
//     <>
//       <h2>This chart is a test under construction</h2>
//       <ResponsiveContainer width="100%" height={300}>
//       <BarChart
//         width={800}
//         height={300}
//         data={data}
//         layout="vertical"
//         margin={{
//           top: 20,
//           right: 120,
//           left: 100,
//           bottom: 5,
//         }}
//       >
//         <XAxis type="number" hide={true} />
//         <YAxis
//           type="category"
//           dataKey="name"
//           width={100}
//           tick={{
//             fill: "black",
//             fontFamily: "Roboto",
//             fontSize: "15px",
//             fontWeight: "bold",
//           }}
//           axisLine={{ stroke: "#000", strokeWidth: 0 }}
//           tickLine={{ stroke: "#000", strokeWidth: 0 }}
//         />
//         <Tooltip />
//         <Bar dataKey="barlength" fill="#171717" minPointSize={5} barSize={20}>
//           <LabelList
//             dataKey="displayedValue"
//             position="right"
//             offset={10}
//             content={customLabelRenderer}
//           />
//         </Bar>
//       </BarChart>
//       </ResponsiveContainer>
//     </>
//   );
// };

// export default TestBarChart;
