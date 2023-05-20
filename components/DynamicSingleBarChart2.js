import { getCSSPropertyValue } from "../utils";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";

const customLabelRenderer = (props) => {
  const { x, y, width, value, labelText, labelAnchor } = props;
  const noWrapValue = value.replace(/\n|\r| /g, " ");

  return (
    <text
      x={x + width + labelText} // {-10} for negative values (labelText)
      y={y + 8} // controls vertical placement of string to right of bar
      textAnchor={labelAnchor} // {end} for negative values (labelAnchor)
      fill="#313131"
      fontFamily="Roboto"
      fontSize="14px"
      fontWeight="bold"
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
  scale,
  data,
}) => {
  const [hovered, setHovered] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const textLength = payload.value.length;

  let approxCharWidth = 7

  const textWidth = textLength * approxCharWidth;

  useEffect(() => {
    const entry = data.find((e) => e.name === payload.value);
    if (entry && entry.site) {
      const backgroundColor = getCSSPropertyValue(
        `${entry.site}-site-button-color`,
        "background-color"
      );
      setBgColor(backgroundColor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    entry && entry.site && entry.site !== "history"
      ? getCSSPropertyValue(
          `${entry.site}-site-button-color`,
          "background-color"
        )
      : "transparent";
  const defaultTextColor =
    entry && (entry.site === "oceans" || entry.site === "space")
      ? "white"
      : "#1a1a1a";
//This area controls the color highlight for solutions
  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={-textWidth - 6}
        y={-15}
        width={textWidth + 9}
        height={29.1}
        // using a +0.1 height to ensure no spacing visible when rendering
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
            x={titleText - 1} // {460} for negative values, {0} for positive values
            y={-1}
            dy={5}
            textAnchor={titleAnchor} // "start" for negative values, "end" for positive values
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="bold"
            fill={hovered ? "blue" : defaultTextColor}
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

const DynamicSingleBarChart = ({
  barChartTitle,
  barChartSubTitle,
  scale,
  rightSide,
  leftSide,
  titleText,
  fetchDataFunc,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetchDataFunc();
      setData(fetchedData);
    }

    fetchData();
  }, [fetchDataFunc]);

  let labelText;
  if (scale === "positive") {
    labelText = 10;
  } else if (scale === "negative") {
    labelText = -10;
  }

  let labelAnchor, titleAnchor;
  if (scale === "positive") {
    labelAnchor = "start";
    titleAnchor = "end";
  } else if (scale === "negative") {
    labelAnchor = "end";
    titleAnchor = "start";
  }

  const filteredData = data.filter((item) =>
    scale === "positive" ? item.barlength >= 0 : item.barlength <= 0
  );

  const barHeight = 29; //determines spacing between bars, which affects row spacing. uses this value to determine the overall vertical.
  const totalChartHeight = filteredData.length * barHeight;

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {barChartTitle && (
          <h2
            id="bar-chart"
            style={{
              fontFamily: "Roboto",
              fontSize: "32px",
              fontWeight: 600,
              paddingTop: "20px",
              paddingBottom: "10px",
            }}
          >
            {barChartTitle}
          </h2>
        )}
      </div>
      {barChartTitle && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontStyle: "bold",
            fontWeight: "bold",
            paddingLeft: "210px",
            paddingBottom: "10px",
          }}
        >
          {barChartSubTitle}
        </div>
      )}
      <div style={{ width: "100%", height: totalChartHeight }}>
        <BarChart
          width={1000}
          height={totalChartHeight}
          data={filteredData}
          layout="vertical"
          margin={{
            top: 0,
            right: rightSide,
            left: leftSide,
            bottom: 0,
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
                  data={data}
                  backgroundColor={
                    entry ? entry.backgroundColor : "transparent"
                  }
                  link={entry ? entry.link : null}
                  titleText={titleText}
                  titleAnchor={titleAnchor}
                />
              );
            }}
          />
          {/* this area defines the bar, barSize is the y axis thickness. strokeWidth creates a line around the bar. In effect, this makes a minimum size for the bars */}
          <Bar
            dataKey="barlength"
            fill="#313131"
            barSize={6}
            stroke="#313131"
            strokeWidth={.1}
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
        </BarChart>
      </div>
    </>
  );
};

export default DynamicSingleBarChart;
