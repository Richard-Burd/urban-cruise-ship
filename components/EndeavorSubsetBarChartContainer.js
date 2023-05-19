import {
  endeavorBenefitMinusCost,
  endeavorBenefitOverCost,
  endeavorCostEfficiencyComparison,
} from "/lib/dynamicBarCharts/endeavorProc";

import dynamic from "next/dynamic";

export const DynamicSingleBarChart = dynamic(
  () => import("/components/DynamicSingleBarChart"),
  { ssr: false }
);

export const DynamicDoubleBarChart = dynamic(
  () => import("/components/DynamicDoubleBarChart"),
  { ssr: false }
);

const shrinkage = {
  width: "1000px",
  transform: "scale(0.86)",
  transformOrigin: "top left",
};

const EndeavorSubsetBarChartContainer = ({ 
  title, 
  subsetLink,
  rightSide1,
  rightSide2,
  rightSide3,
  rightSide4,
  leftSide1,
  leftSide2,
  leftSide3,
  leftSide4,
  titleText1,
  titleText2,
  titleText3,
  titleText4,
  efficiencyMultiplier,
}) => {
  const endeavorSubsetUrl = subsetLink;

  return (
    <>
      <div className="ml-4 text-1xl">
        Total efficiency for these endeavors is as follows:
      </div>
      <div style={shrinkage}>
        <DynamicSingleBarChart
          barChartTitle={`${title} Endeavors - Benefit Over Cost Ratio`}
          barChartSubTitle={
            "values shown below are ratios of benefit over cost"
          }
          scale={"positive"}
          rightSide={rightSide1}
          leftSide={leftSide1}
          titleText={titleText1}
          fetchDataFunc={() => endeavorBenefitOverCost(endeavorSubsetUrl)}
        />
      </div>
      <div className="ml-4 text-1xl">
        Net returns on investment (ROI) for these endeavors is as follows:
      </div>
      <div style={shrinkage}>
        <DynamicSingleBarChart
          barChartTitle={`${title} Endeavors - Benefit minus Cost`}
          barChartSubTitle={
            "cost shown are billions (benefit - cost) - 2020 U.S. Dollars"
          }
          scale={"positive"}
          rightSide={rightSide2}
          leftSide={leftSide2}
          titleText={titleText2}
          fetchDataFunc={() => endeavorBenefitMinusCost(endeavorSubsetUrl)}
        />
        <DynamicSingleBarChart
          barChartTitle={""}
          scale={"negative"}
          rightSide={rightSide3}
          leftSide={leftSide3}
          solutionBackgroundOffset={605}
          titleText={titleText3}
          fetchDataFunc={() => endeavorBenefitMinusCost(endeavorSubsetUrl)}
        />
      </div>
      <div className="ml-4 text-1xl">
        Costs and efficiencies for these endeavors is as follows:
      </div>
      <div style={shrinkage}>
        <DynamicDoubleBarChart
          barChartTitle={`${title} Endeavors - Cost and Efficiency`}
          barChartSubTitle={
            "top value is cost in billions (2020 U.S. Dollars) bottom value is benefit / cost Ratio"
          }
          scale={"positive"}
          rightSide={rightSide4}
          leftSide={leftSide4}
          titleText={titleText4}
          fetchDataFunc={() =>
            endeavorCostEfficiencyComparison(efficiencyMultiplier, endeavorSubsetUrl)
          }
        />
      </div>
    </>
  );
};

export default EndeavorSubsetBarChartContainer;
