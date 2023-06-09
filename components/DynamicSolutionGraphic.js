import { getCSSPropertyValue } from "../utils";
import React, { useLayoutEffect, useState, useEffect } from "react";
import Link from "next/link";
import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";

import Image from "next/image";

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
      y={y +12} // controls vertical placement of string to right of bar
      textAnchor={labelAnchor} // {end} for negative values (labelAnchor)
      fill="#212121"
      fontFamily="Roboto"
      fontSize="18px"
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
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "20px Roboto"; // Set the font and size to be analyzed
  const metrics = context.measureText(payload.value);
  const textWidthLeft = metrics.width * 1.02; //sets the text width and increases by 4% to allow for buffer

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
      {windowWidth > windowWidthThreshold ? ( // check window width here
        <text //controls the insert of the title to the bar, (payload)
          x={- 1} // {460} for negative values, {0} for positive values !REMOVED titleText NaN fix -jye
          y={-1}
          dy={5}
          textAnchor={titleAnchor} // "start" for negative values, "end" for positive values
          fontFamily="Roboto"
          fontSize={`20px`} // Use the dynamic font size
          fontWeight="bold"
        >
          {payload.value}
        </text>
      ) : (
        <text //controls the insert of the title to the bar, (payload)
          x={textWidthLeft+9} // {460} for negative values, {0} for positive values
          y={-17}
          dy={5}
          textAnchor={titleAnchor} // "start" for negative values, "end" for positive values
          fontFamily="Roboto"
          fontSize={`20px`} // Use the dynamic font size {`${fontSize}px`}
          fontWeight="bold"
        >
          {payload.value}
        </text>
      )}
    </g>
  );
};

const DynamicSolutionGraphic = ({
  maxWindowWidth = 1023, // used to trigger the resize of the chart to mobile friendly
  barChartTitle,
  barChartTitle2,
  scale = "positive",
  titleText,
  staticData,
  arrowText1,
  arrowText2,
  arrowText3,
  arrowText4,
  mastheadText1 = "urbancruiseship.org",
  mastheadText2 = "Exhibit constructed by",
  mastheadText3,
  chartType,
  fetchDataFunc, //data passed as props directly, UNUSED TRASH?
}) => {
  const [data, setData] = useState([]);

  //dynamically sized left and right sides. TODO mobile friendly
  const [leftSide, setLeftSide] = useState(0); // state variable
  const [rightSide, setRightSide] = useState(0); // state variable

  useEffect(() => {
    setData(staticData);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "20px Roboto"; //measures for characters at this size

    let maxLeftSide = 0;
    let minRightSide = 0;

    for (let i = 0; i < staticData.length; i++) {
      const item = staticData[i];
      //Computes the largest title to the left to make room
      const metricsName = context.measureText(item.name);
      const itemLeftSide = metricsName.width * 1.04;
      if (itemLeftSide > maxLeftSide) {
        maxLeftSide = itemLeftSide + 10;
      }

      // Only computes the right side for the first item
      if (i === 0) {
        const metricsValue = context.measureText(item.displayedValue);
        const itemRightSide = metricsValue.width * 1.04;
        minRightSide = itemRightSide ; //sets normal rightside
        console.log("metric width", metricsValue.width);
        console.log("item right side", itemRightSide);
      }
    }
    setLeftSide(maxLeftSide);
    setRightSide(minRightSide);
  }, [staticData]);

  //This is not used, but im leaving it here in case we need to figure out negative numbers
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

  let imageSrc;
  switch (chartType) {
    case "downArrow":
      imageSrc = "/images/tag_arrow_down.svg";
      break;
    case "mastheadOnly":
      imageSrc = "/images/masthead_only.svg";
      break;
    default:
      imageSrc = "/images/tag_arrow_down.svg";
  }

  const filteredData = data.filter((item) =>
    scale === "positive" ? item.barlength >= 0 : item.barlength <= 0
  );

  //determines spacing between bars, which affects row spacing. uses this value to determine the overall vertical.
  
  
  /* responsive code for resizing NOTE: adjusted so that any window width below 1024 causes the graphic to resize to mobile configuration*/
  const windowWidth = useWindowWidth();
  const barChartWidth = 
    windowWidth > maxWindowWidth // sets mobile or desktop configuration based on windowwidth
      ? 900 
      : 340;
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
              fontSize: "36px",
              fontWeight: 600,
              marginTop: "20px",
              lineHeight: 1.4,
              justifyContent: "center",
            }}
          >
            {barChartTitle}
          </h2>
        )}

        {barChartTitle2 && (
          <h2
            id="bar-chart-2"
            style={{
              fontFamily: "Roboto",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: 1.4,
              justifyContent: "center",
            }}
          >
            {barChartTitle2}
          </h2>
        )}
      </div>
      <div 
      style={{ 
        width: "100%", 
        height: totalChartHeight,
        marginTop: "20px",
        }}>
        <BarChart
          justifyContent= "center"
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
                  data={data}
                  backgroundColor={
                    entry ? entry.backgroundColor : "transparent"
                  }
                  link={entry ? entry.link : null}
                  titleText={titleText}
                  titleAnchor={titleAnchor}
                  // scale={windowWidth / maxWindowWidth} // TRASH? 
                />
              );
            }}
          />
          {/* this area defines the bar, barSize is the y axis thickness. strokeWidth creates a line around the bar. In effect, this makes a minimum size for the bars */}
          <Bar
            dataKey="barlength"
            fill="#212121"
            barSize={10}
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

      {/* END MAIN CHART, BEGIN LOWER GRAPHICS (ARROW LOGO)
this div allows you to put multiple elements side by side */}
      <div
        style={{
          display: "flex",
          justifyContent: window.innerWidth <= maxWindowWidth ? "center" : "space-evenly",
          alignItems: window.innerWidth <= maxWindowWidth ? "center" : "baseline",
          flexDirection: window.innerWidth <= maxWindowWidth ? "column" : "row",
          flexWrap: "wrap",
        }}
      >
        {/* this is the down arrow code which will presently hide itself if chartType says hide*/}
        {imageSrc && chartType !== "hide" && (
          <object
            style={{
              display: "flex",
              justifyContent: "left",
              position: "relative",
              top: 0,
              left: 0,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/tag_arrow_down.png"}
              alt="PNG Image"
              width="330"
              height="180"
              style={{ zIndex: 0 }}
            />

            {/* SVG image */}

            {/* Text elements*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="330"
              height="180"
              viewBox="0 0 330 180"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              {/* First line of text, like a text box*/}
              <foreignObject x="90" y="30" width="152" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {arrowText1}
                </div>
              </foreignObject>

              {/* Second text box */}
              <foreignObject x="90" y="55" width="152" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {arrowText2}
                </div>
              </foreignObject>

              {/* Third text box */}
              <foreignObject x="90" y="80" width="152" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {arrowText3}
                </div>
              </foreignObject>
              {/* Fourth text box */}
              <foreignObject x="90" y="105" width="152" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {arrowText4}
                </div>
              </foreignObject>
            </svg>
          </object>
        )}

        {/* Masthead, contains logo and 3 lines. Adjust right: to move the element*/}
        {imageSrc && (
          <object
            style={{
              display: "flex",
              justifyContent: "right",
              position: "relative",
              top: 0,
              right: 0,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/masthead_only.png"}
              alt="SVG Image"
              width="220"
              height="180"
              style={{ zIndex: 0 }}
            />

            {/* SVG image */}

            {/* Text elements */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220"
              height="180"
              viewBox="0 0 220 180"
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              {/* Masthead exhibit tag Line 1*/}
              <foreignObject x="20" y="95" width="200" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: "",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {mastheadText1}
                </div>
              </foreignObject>

              {/* Masthead line 2*/}
              <foreignObject x="20" y="115" width="200" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: "",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {mastheadText2}
                </div>
              </foreignObject>

              {/* Masthead line 3*/}
              <foreignObject x="20" y="135" width="200" height="24">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: "",
                    color: "#212121",
                    border: "",
                  }}
                >
                  {mastheadText3}
                </div>
              </foreignObject>
            </svg>
          </object>
        )}
      </div>
    </>
  );
};

export default DynamicSolutionGraphic;
