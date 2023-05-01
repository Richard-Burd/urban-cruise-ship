// TODO:
// 1. change the names of the keys in the fake data to match the keys in the real data

// 2. Find all the parameters that change the sizing of the chart and make them accessable
//    to the rest of the team by declaring them up fromt

// 3. create an initial prop that either accempt bar-chart values that are positive...or
//    negative; the negative values at the bottom will be in a seperate bat chart

// 4. create a function that imports both solution & endeavor data depending on prop values

// 5. look at creating seperate files for these components

import React, { useState } from 'react';

import Link from "next/link";

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
    site: "energy",
  },
  {
    name: "Test Row B",
    barlength: 1200,
    displayedValue: "One Thousand Two Hundred",
    backgroundColor: "#FCD34D",
    site: "matter",
  },
  {
    name: "Test Row C Links to a Place!",
    barlength: 300,
    displayedValue: "Three Hundred and forty",
    link: "/history/endeavors#public-health-projects",
    site: "habitat",
  },
  { name: "From the OCEANS Site", barlength: 120, displayedValue: "One Hundred Twenty", backgroundColor: "#0f4085", site: "oceans" },
  { name: "Test Row E", barlength: 90, displayedValue: "Ninety", site: "cities" },
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

const CustomYAxisTick = ({ x, y, payload, backgroundColor, link }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Find the corresponding entry for the tick
  const entry = data.find((e) => e.name === payload.value);

  // Update defaultTextColor based on the 'site' value of the entry
  const defaultTextColor =
    entry && (entry.site === "oceans" || entry.site === "space")
      ? "white"
      : "#1a1a1a";

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={-300}
        y={-10}
        width={300}
        height={20}
        fill={backgroundColor || "transparent"}
      />
      {link ? (
        <Link href={link}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <text
              x={0}
              y={0}
              dy={5}
              textAnchor="end"
              fontFamily="Roboto"
              fontSize="15px"
              fontWeight="bold"
              fill={hovered ? "#7d0e0e" : defaultTextColor}
              textDecoration={hovered ? "underline" : "none"}
              style={{
                cursor: "pointer",
              }}
            >
              {payload.value}
            </text>
          </a>
        </Link>
      ) : (
        <text
          x={0}
          y={0}
          dy={5}
          textAnchor="end"
          fill={defaultTextColor}
          fontFamily="Roboto"
          fontSize="15px"
          fontWeight="bold"
        >
          {payload.value}
        </text>
      )}
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
                  link={entry ? entry.link : null}
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