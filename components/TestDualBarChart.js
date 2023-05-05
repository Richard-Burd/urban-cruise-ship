// TODO:

// 3. create an initial prop that either accempt bar-chart values that are positive...or
//    negative; the negative values at the bottom will be in a seperate bat chart

// 4. create a function that imports both solution & endeavor data depending on prop values

// 5. look at creating seperate files for these components

// 6. create another table that has 2 bars

import { getCSSPropertyValue } from "../utils";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";

const data = [
  {
    name: "This is some placeholder text to see how it looks",
    link: "/history/endeavors#public-health-projects",
    barlength: 4000,
    barlengthTwo: 3500,
    displayedValue: "4-Thousand",
    displayedValueTwo: "Another value",
    site: "energy",
  },
  {
    name: "These bars don't refer to anything",
    link: "/history/endeavors#public-health-projects",
    barlength: 1200,
    barlengthTwo: 1400,
    displayedValue: "Twelve - Hundred",
    displayedValueTwo: "Fourteen - Hundred",
    backgroundColor: "#FCD34D",
    site: "otter",
  },
  {
    name: "These bars will eventualy display Cost & Efficiency Comparison",
    link: "/history/endeavors#public-health-projects",
    barlength: 300,
    barlengthTwo: 132,
    displayedValue: "Three Hundred and forty",
    displayedValueTwo: "asdfg",
    link: "/history/endeavors",
    site: "zaza",
  },
  {
    name: "solutions on our OCEANS site will look like this",
    link: "/history/endeavors#public-health-projects",
    barlength: 120,
    barlengthTwo: 90,
    displayedValue: "One Hundred Twenty",
    displayedValueTwo: "zxcv",
    backgroundColor: "#0f4085",
    site: "oceans",
  },
  {
    name: "Test Row E",
    link: "/history/endeavors",
    barlength: 90,
    barlengthTwo: 50,
    displayedValue: "Ninety",
    displayedValueTwo: "Fiftey",
  },
];

const customLabelRenderer = (props) => {
  const { x, y, width, value, labelText, labelAnchor } = props;
  const noWrapValue = value.replace(/\n|\r| /g, " ");

  return (
    <text
      x={x + width + labelText} // {-10} for negative values (labelText)
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

const CustomYAxisTick = ({
  x,
  y,
  payload,
  link,
  titleText,
  titleAnchor,
  solutionBackgroundWidth,
  solutionBackgroundOffset,
}) => {
  const [hovered, setHovered] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const entry = data.find((e) => e.name === payload.value);
    if (entry && entry.site) {
      const backgroundColor = getCSSPropertyValue(
        `${entry.site}-site-button-color`,
        "background-color"
      );
      setBgColor(backgroundColor);
    }
  }, [payload.value]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Update defaultTextColor based on the 'site' value of the entry
  const entry = data.find((e) => e.name === payload.value);
  const backgroundColor =
    entry && entry.site
      ? getCSSPropertyValue(`${entry.site}-site-button-color`, "background-color")
      : "transparent";
  const defaultTextColor =
    entry && (entry.site === "oceans" || entry.site === "space")
      ? "white"
      : "#1a1a1a";

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={solutionBackgroundOffset}
        y={-10}
        width={solutionBackgroundWidth}
        height={20}
        fill={backgroundColor || "transparent"}
      />
      <Link href={link}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <text
            x={titleText} // {460} for negative values, {0} for positive values
            y={0}
            dy={5}
            textAnchor={titleAnchor} // "start" for negative values, "end" for positive values
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="bold"
            fill={hovered ? "#e34b4b" : defaultTextColor}
            textDecoration={hovered ? "underline" : "none"}
            style={{
              cursor: "pointer",
            }}
          >
            {payload.value}
          </text>
        </a>
      </Link>
    </g>
  );
};

const TestDualBarChart = ({
  barChartTitle,
  scale,
  totalHeight,
  barHeight,
  rightSide,
  leftSide,
  totalWidth = 1000,
  solutionBackgroundWidth,
  solutionBackgroundOffset,
  labelText,
  labelAnchor,
  titleText,
  titleAnchor,
}) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {barChartTitle && <h2>{barChartTitle}</h2>}
      </div>
      <div style={{ width: "100%", height: totalHeight }}>
        <BarChart
          width={totalWidth}
          height={barHeight}
          data={data}
          layout="vertical"
          margin={{
            top: 0,
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
                  titleText={titleText}
                  titleAnchor={titleAnchor}
                  solutionBackgroundWidth={solutionBackgroundWidth}
                  solutionBackgroundOffset={solutionBackgroundOffset}
                />
              );
            }}
          />
          <Tooltip
            content={({ label }) => (
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid transparent",
                  padding: "5px",
                }}
              >
                <span>{label}</span>
              </div>
            )}
          />
          <Bar 
            dataKey="barlength" 
            fill="#171717" 
            barSize={7}
            stroke="#1a1a1a"
            strokeWidth={2}
          >
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
          <Bar dataKey="" fill="transparent" barSize={-1}></Bar>
          <Bar
            dataKey="barlengthTwo"
            fill="#d9d9d9"
            barSize={7}
            stroke="#1a1a1a"
            strokeWidth={2}
          >
            <LabelList
              dataKey="displayedValueTwo"
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

export default TestDualBarChart;
