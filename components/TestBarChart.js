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
  {
    name: "High Speed Rail, Hong Kong to China (2010 - 2060)",
    barlength: 4000,
    displayedValue: "Three Hundred",
  },
  {
    name: "Test Row B",
    barlength: 1200,
    displayedValue: "One Thousand Two Hundred",
    backgroundColor: "#FCD34D",
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
      y={y + 10}
      textAnchor="start"
      fill="black"
      fontFamily="Roboto"
      fontSize="14px"
    >
      {noWrapValue}
    </text>
  );
};

const CustomYAxisTick = ({ x, y, payload, backgroundColor }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={-300}
        y={-10}
        width={300}
        height={20}
        fill={backgroundColor || "transparent"}
      />
      <text
        x={0}
        y={0}
        dy={5}
        textAnchor="end"
        fill="#000"
        fontFamily="Roboto"
        fontSize="15px"
        fontWeight="bold"
      >
        {payload.value}
      </text>
    </g>
  );
};

const TestBarChart = () => {
  return (
    <>
      <h2>This chart is a test under construction</h2>
      <div style={{ width: "100%", height: 400 }}>
        <BarChart
          width={1000}
          height={400}
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 120,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis type="number" hide={true} />
          <YAxis
            type="category"
            dataKey="name"
            width={300}
            tickLine={false}
            axisLine={false}
            tick={(props) => {
              const entry = data.find((e) => e.name === props.payload.value);
              return (
                <CustomYAxisTick
                  {...props}
                  backgroundColor={
                    entry ? entry.backgroundColor : "transparent"
                  }
                />
              );
            }}
          />
          <Tooltip />
          <Bar dataKey="barlength" fill="#171717" barSize={12}>
            <LabelList
              dataKey="displayedValue"
              position="right"
              content={customLabelRenderer}
            />
          </Bar>
        </BarChart>
      </div>
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









// To wrap the text inside the CustomYAxisTick component after it exceeds 200 pixels in length, you can create a custom text-wrapping function. Here's an updated CustomYAxisTick component with a text-wrapping function:

// const CustomYAxisTick = ({ x, y, payload, backgroundColor }) => {
//   const wrapText = (text, maxWidth) => {
//     const words = text.split(" ");
//     const lines = [];
//     let line = [];

//     words.forEach((word) => {
//       const currentLine = line.join(" ");
//       const newLine = currentLine + (currentLine.length > 0 ? " " : "") + word;
//       const newLineWidth = newLine.length * 7; // 7px is an estimated width for each character in the 15px Roboto font

//       if (newLineWidth <= maxWidth) {
//         line.push(word);
//       } else {
//         lines.push(line.join(" "));
//         line = [word];
//       }
//     });

//     lines.push(line.join(" "));
//     return lines;
//   };

//   const wrappedText = wrapText(payload.value, 200);

//   return (
//     <g transform={`translate(${x},${y})`}>
//       <rect
//         x={-300}
//         y={-10}
//         width={300}
//         height={20}
//         fill={backgroundColor || "transparent"}
//       />
//       {wrappedText.map((line, index) => (
//         <text
//           key={`tick-text-${index}`}
//           x={0}
//           y={index * 20}
//           dy={5}
//           textAnchor="end"
//           fill="#000"
//           fontFamily="Roboto"
//           fontSize="15px"
//           fontWeight="bold"
//         >
//           {line}
//         </text>
//       ))}
//     </g>
//   );
// };
