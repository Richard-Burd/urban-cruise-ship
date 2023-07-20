import { getCSSPropertyValue } from "../utils";
import React, { useLayoutEffect, useState, useEffect } from "react";
import Link from "next/link";
import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";


// mobile responsive code

//gets the window width of the whole page, which is usually 1024 if on desktop
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return windowWidth;
};

const customLabelRenderer = (props) => {
  const { x, y, width, value, labelText, labelAnchor } = props;
  const noWrapValue = value.replace(/\n|\r| /g, " ");

  return (
    <text
      x={x + width + labelText} // {-10} for negative values (labelText)
      y={y + 8} // controls vertical placement of string to right of bar
      textAnchor={labelAnchor} // {end} for negative values (labelAnchor)
      fill="#212121"
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
  titleText, //removed this to fix NaN
  titleAnchor,
  scale,
  data,
}) => {
  const [hovered, setHovered] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");



 //text measurement tool for the highlighting function
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = '14px Roboto'; // Set the font and size to be analyzed
  const metrics = context.measureText(payload.value);
  const textWidth = metrics.width*1.04; //sets the text width and increases by 4% to allow for buffer

  
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

  const windowWidthThreshold = 1024; // triggers the responsive changeover. use <=
  const windowWidth = useWindowWidth();
  //const fontSize = windowWidth <= 600 ? (20 * windowWidth) / 600 : 20; // change these values to suit your design

  //This area controls the color highlight for solutions as well as the text to the left of the bar
  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={-textWidth - 6}
        y={-15}
        width={textWidth + 9}
        height={29.1} // using a +0.1 height to ensure no spacing visible when rendering
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
  maxWindowWidth = 1024, // used to trigger the resize of the chart to mobile friendly

  barChartTitle2,
  barChartTitle,
  barChartSubTitle,
  scale,
  rightSide, //increasing this will provide more room to the right side of the bar for numbers
  leftSide, //decreasing this will push the bar start to the left
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

  let solutionBackgroundOffset;
  if (scale === "positive") {
    solutionBackgroundOffset = -605;
  } else if (scale === "negative") {
    solutionBackgroundOffset = 605;
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
              paddingBottom: "20px",
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
            justifyContent: "left",
            paddingLeft: "600px",
          }}
        >
          {barChartSubTitle}
        </div>
      )}
      <div style={{ width: "100%", height: totalChartHeight }}>
        <BarChart
          width={860}
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
            fill="#212121"
            barSize={6}
            stroke="#212121"
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
