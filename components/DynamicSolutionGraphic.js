import { getCSSPropertyValue } from "../utils";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bar, LabelList, Tooltip, XAxis, YAxis, BarChart } from "recharts";

import Image from "next/image";

const customLabelRenderer = (props) => {
  const { x, y, width, value, labelText, labelAnchor } = props;
  const noWrapValue = value.replace(/\n|\r| /g, " ");

  return (
    <text
      x={x + width + labelText} // {-10} for negative values (labelText)
      y={y + 10} // controls vertical placement of string to right of bar
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
  titleText,
  titleAnchor,
  scale,
  data,
}) => {
  const [hovered, setHovered] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const textLength = payload.value.length;

  let approxCharWidth = 7;

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
        height={29.1} // using a +0.1 height to ensure no spacing visible when rendering
        fill={backgroundColor || "transparent"}
      />
      <text //controls the insert of the title to the bar, (payload)
        x={titleText - 1} // {460} for negative values, {0} for positive values
        y={-1}
        dy={5}
        textAnchor={titleAnchor} // "start" for negative values, "end" for positive values
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="bold"
      >
        {payload.value}
      </text>
      {/*       <Link href={link}> //commented out this clickable link functionality for the titles -jye
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
            fontSize="20px"
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
      </Link> */}
    </g>
  );
};

const DynamicSolutionGraphic = ({
  barChartTitle,
  barChartTitle2,
  scale = "positive",
  rightSide, //increasing this will provide more room to the right side of the bar for numbers
  leftSide, //decreasing this will push the bar start to the left
  titleText,
  staticData, // New prop for handling direct data entry inside of solution mdx file
  arrowText1,
  arrowText2,
  arrowText3,
  arrowText4,
  mastheadText1 = "urbancruiseship.org",
  mastheadText2 = "Exhibit constructed by",
  mastheadText3,
  chartType, // Prop for chart type, downArrow, mastheadOnly
  fetchDataFunc,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(staticData);
    setData(staticData);
  }, [staticData]);

  // Do something with these props
  console.log(barChartTitle);
  console.log(barChartTitle2);
  console.log(rightSide);
  console.log(leftSide);
  console.log(chartType);
  console.log(arrowText1);
  console.log(arrowText2);
  console.log(arrowText3);
  console.log(mastheadText3);
  console.log(data);

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

  const barHeight = 29; //determines spacing between bars, which affects row spacing. uses this value to determine the overall vertical.
  const totalChartHeight = filteredData.length * barHeight;

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
              paddingTop: "20px",
              paddingBottom: "15px",
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
              paddingTop: "0px",
              paddingBottom: "15px",
            }}
          >
            {barChartTitle2}
          </h2>
        )}
      </div>
      <div style={{ width: "100%", height: totalChartHeight }}>
        <BarChart
          width={895}
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
      

{/* this div allows you to put multiple elements side by side */}
<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "baseline" }}>
  {/* this is the down arrow code which will presently hide itself if chartType says hide*/}
  {imageSrc && chartType !== "hide" &&(
  <object style={{ display: "flex", justifyContent: "left", position: "relative", top: 0, left: 0,
  flexDirection: "row",
  alignItems: "center"}}>
    <img src={"/images/tag_arrow_down.svg"} alt="SVG Image" style={{ zIndex: 0}} />
    
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
  <object style={{ display: "flex", justifyContent: "right", position: "relative", top: 0, right: 0,
  flexDirection: "row",
  alignItems: "center"}}>
    <img src={"/images/masthead_only.svg"} alt="SVG Image" style={{ zIndex: 0}} />
    
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
