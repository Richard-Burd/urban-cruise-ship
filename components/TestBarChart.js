// TODO:

// 3. create an initial prop that either accempt bar-chart values that are positive...or
//    negative; the negative values at the bottom will be in a seperate bat chart

// 4. create a function that imports both solution & endeavor data depending on prop values

// 5. look at creating seperate files for these components

// 6. create another table that has 2 bars

import React, { useState } from "react";

import Link from "next/link";

import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";

const data = [
  {
    name: "High Speed Rail, Hong Kong to China (2010 - 2060)",
    link: "/history/endeavors#public-health-projects",
    barlength: 4000,
    displayedValue: "Three Hundred",
    site: "energy",
  },
  {
    name: "Test Row B",
    link: "/history/endeavors#public-health-projects",
    barlength: 1200,
    displayedValue: "One Thousand Two Hundred",
    backgroundColor: "#FCD34D",
    site: "matter",
  },
  {
    name: "Test Row C Links to a Place!",
    link: "/history/endeavors#public-health-projects",
    barlength: 300,
    displayedValue: "Three Hundred and forty",
    link: "/history/endeavors",
    site: "habitat",
  },
  {
    name: "From the OCEANS Site",
    link: "/history/endeavors#public-health-projects",
    barlength: 120,
    displayedValue: "One Hundred Twenty",
    backgroundColor: "#0f4085",
    site: "oceans",
  },
  {
    name: "Test Row E",
    link: "/history/endeavors",
    barlength: 90,
    displayedValue: "Ninety",
    site: "cities",
  },
  {
    name: "Negative Nancy",
    link: "/history",
    barlength: 1,
    displayedValue: "Negative One Twenty",
    site: "habitat",
  },
];

const customLabelRenderer = (props) => {
  const { x, y, width, value, labelText, labelAnchor } = props;
  const noWrapValue = value.replace(/\n|\r| /g, " ");

  return (
    <text
      x={x + width + props.labelText} // {-10} for negative values (labelText)
      y={y + 10}
      textAnchor={labelAnchor} // {end} for negative values (labelAnchor)
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
        width={305}
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

const TestBarChart = ({
  totalHeight,
  barHeight,
  rightSide,
  leftSide,
  totalWidth = 1000,
  labelText, 
  labelAnchor
}) => {
  return (
    <>
      <h2>This chart is a test under construction</h2>
      <div style={{ width: "100%", height: totalHeight }}>
        <BarChart
          width={totalWidth}
          height={barHeight}
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: rightSide,
            left: leftSide,
            bottom: 5,
          }}
        >
          <XAxis type="number" hide={true} />
          <YAxis
            type="category"
            dataKey="name"
            // width={300} // left side of graphic (duplicate)
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
              content={(props) =>
                customLabelRenderer({
                  ...props,
                  labelText: labelText,
                  labelAnchor: labelAnchor,
                })
              }
            />
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default TestBarChart;
