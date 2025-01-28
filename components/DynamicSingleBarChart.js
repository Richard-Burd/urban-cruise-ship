import { getCSSPropertyValue } from "../utils";
import React, { useLayoutEffect, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";


// mobile responsive code

//gets the window width of the whole page, which is usually 1023 if on desktop
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

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
      y={y + 9} // controls vertical placement of string to right of bar
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

  // Determine highlightOffset based on the scale. this will reverse the highlighted color for solutions.
  let highlightOffset;
  if (scale === "positive") {
    highlightOffset = 0; // Adjust this value as needed for positive scale
  } else if (scale === "negative") {
    highlightOffset = 765 // Adjust this value to move the highlight for negative scale to the right
  } else {
    highlightOffset = 0; // Default value if scale is not defined
  }

 //text measurement tool for the highlighting function
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = '14px Roboto'; // Set the font and size to be analyzed
  const metrics = context.measureText(payload.value);
  const textWidth = metrics.width*1.02; //sets the text width and increases by 4% to allow for buffer

  
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

  const windowWidthThreshold = 1023; // triggers the responsive changeover. use <=
  const windowWidth = useWindowWidth();
  //const fontSize = windowWidth <= 600 ? (20 * windowWidth) / 600 : 20; // change these values to suit your design

  //This area controls the color highlight for solutions as well as the text to the left of the bar
  return (
    <g transform={`translate(${x},${y})`}>
       {windowWidth > windowWidthThreshold ? ( // check window width here

      <><rect
          x={-textWidth - 6 + highlightOffset}
          y={-15}
          width={textWidth + 9}
          height={29.1} // using a +0.1 height to ensure no spacing visible when rendering
          fill={backgroundColor || "transparent"} /><Link href={link}>
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
          </Link></>
      ) : (
        <><rect
            x={0}
            y={-27}
            width={textWidth + 7}
            height={20} // using a +0.1 height to ensure no spacing visible when rendering
            fill={backgroundColor || "transparent"} /><Link href={link}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <text
                  x={titleText} // {460} for negative values, {0} for positive values
                  y={-18}
                  dy={5}
                  textAnchor={"start"} // "start" for negative values, "end" for positive values
                  fontFamily="Roboto"
                  fontSize="12px" 
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
            </Link></>
      )}
    </g>
  );
};


const DynamicSingleBarChart = ({
  maxWindowWidth = 1023, // used to trigger the resize of the chart to mobile friendly
  barChartTitle2,
  barChartTitle,
  barChartSubTitle,
  scale,
  rightSide, //POSITIVE: increasing this will provide more room to the right side of the bar for numbers NEGATIVE: reversed
  leftSide, //POSITIVE: decreasing this will push the bar start to the left NEGATIVE: reversed
  titleText,
  fetchDataFunc,
  subsetLink,
  subset
}) => {
  const [data, setData] = useState([]);
  console.log("The value of subset is1:", subset);
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetchDataFunc(subset);
      setData(fetchedData);
    }

    fetchData();
  }, [fetchDataFunc, subset]);

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


  const filteredData = useMemo(
    () => data.filter((item) => (scale === "positive" ? item.barlength >= 0 : item.barlength <= 0)),
    [data, scale]
  );



    /* responsive code for resizing NOTE: adjusted so that any window width below 1023 causes the graphic to resize to mobile configuration*/
    const windowWidth = useWindowWidth();
    const barChartWidth = 
      windowWidth > maxWindowWidth // sets mobile or desktop configuration based on windowwidth
        ? 900 
        : windowWidth;
    const barHeight = windowWidth > maxWindowWidth //sets bar height spacing based on window width
        ? 29 
        : 58;
const totalChartHeight = filteredData.length * barHeight; //sets total chart height
  rightSide =
    windowWidth <= maxWindowWidth // adds spacing for the right side that has already been dynamically calculated or removes it if mobile configuration
      ? rightSide +120 //mobile
      : rightSide + 120; //desktop
 
  leftSide =
    windowWidth <= maxWindowWidth //desktop config or mobile config
      ? -50 //mobile
      : leftSide; //desktop

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
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
          width={barChartWidth}
          height={totalChartHeight}
          data={filteredData}
          layout="vertical"
          margin={{
            top: 0,
            right: rightSide,
            left: leftSide,
            bottom: 0,
          }}
          minPointSize={2} // Set the desired minimum width for the bar
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
                  scale={scale} //passes scale prop to customYaxisTick for solution color highlight
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
            strokeWidth={0.1}
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
