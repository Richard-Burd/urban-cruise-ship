import React, { useState } from "react";
import Link from "next/link";
import { useTable, useSortBy } from "react-table";
import ReactMarkdown from "react-markdown";
import { solutionTableData } from "./SolutionTable";

const CustomLink = ({ node, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

function renderFootnotes(data) {
  const footnotesObj = {};

  data.forEach((row) => {
    if (row.sources) {
      row.sources.forEach((source) => {
        const matches = source.match(/\[\^(\d+)\]:\s(.*)/);
        if (!matches) return;
        const footnoteNumber = parseInt(matches[1], 10);
        const footnoteContent = matches[2];

        if (!footnotesObj[footnoteNumber]) {
          footnotesObj[footnoteNumber] = (
            <div key={`footnote-${footnoteNumber}`} id={`fn-${footnoteNumber}`} style={{ display: 'block' }}>
              <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
                {footnoteNumber}. <ReactMarkdown components={{a: CustomLink}}>{footnoteContent.trim()}</ReactMarkdown>
                <a href={`#fnref-${footnoteNumber}`} className="footnote-backref" style={{ marginLeft: '8px' }}>
                  ↩
                </a>
              </span>
            </div>
          );
        }
      });
    }
  });

  const sortedKeys = Object.keys(footnotesObj).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const footnotes = sortedKeys.map((key) => footnotesObj[key]);

  return (
    <div className="footnotes">
      <h2>References:</h2>
      {footnotes}
    </div>
  );
}


const siteOrder = {
  "energy": 1,
  "matter": 2,
  "habitat": 3,
  "cities": 4,
  "waste": 5,
  "oceans": 6,
  "space": 7,
  "costs": 8,
  "history": 9,
};

export const endeavorTableData = [
  {
    solution: "Polio Vaccination Campaign, U.S. (1955-2005)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 0.01239,
    benefit: 2.37,
    co2: null,
    habitat: null,
    sources: [
      `[^1]: Thompson, K., Tebbens, R. ["Retrospective cost-effectiveness analyses for polio vaccination in the United States"](https://doi.org/10.1111/j.1539-6924.2006.00831.x). Risk Analysis 26(6), pp. 1423-1440. December 2006.`
    ],
  },
  {
    solution: "Anti-Malaria Campaign, China (2005-2019)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 0.01239,
    benefit: 2.37,
    co2: null,
    habitat: null,
    sources: [
      `[^2]: Sudathip, P., Kongkasuriyachai, D., Stelmach, R., Bisanzio, D., Sine, J., Sawang, S., Kitchakarn, S., Sintasath, D., Reithinger, R. ["The Investment Case for Malaria Elimination in Thailand: A Cost–Benefit Analysis"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6553898/). The American journal of tropical medicine and hygiene 100(6), pp. 1445-1453. June 2019.`,
    ],
  },
  {
    solution: "Smallpox Eradication, World (1959-1977)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 1.48,
    benefit: 234.37,
    co2: null,
    habitat: null,
    sources: [
      `[^3]: Barrett, S. ["Economic considerations for the eradication endgame"](https://dx.doi.org/10.1098%2Frstb.2012.0149). Philosophical Transactions of the Royal Society B: Biological Sciences 368(1623): 20120149. August 2013.`,
    ],
  },
  {
    solution: "Human Genome Project, World (1990-2010)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 6.67,
    benefit: 947.66,
    co2: null,
    habitat: null,
    sources: [
      `[^4]: Tripp, S., Grueber, M. ["Economic Impact of the Human Genome Project"](https://www.battelle.org/docs/default-source/misc/battelle-2011-misc-economic-impact-human-genome-project.pdf). Batelle Memorial Institute. May 2011.`,
    ],
  },
  {
    solution: "Antibiotics Conservation, Canada (2005)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 0.0047,
    benefit: 0.36,
    co2: null,
    habitat: null,
    sources: [
      `[^5]: Manun, A., Zhao, B., McCabe, M., Dreher, K., Otterstatter, M., Smith, N., Blondel-Hill, E., Marra, F., Patrick. D. ["Cost-benefit analysis of a population-based education program on the wise use of antibiotics"](https://link.springer.com/article/10.17269/s41997-019-00245-w). Canadian Journal of Public Health 110, pp. 732-740. August 2019.`,
    ],
  },
  {
    solution: "Acid Rain Program, U.S. (2010)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 4.58,
    benefit: 186.45,
    co2: null,
    habitat: null,
    sources: [
      `[^6]: Chestnut, L., Mills, D. ["A fresh look at the benefits and costs of the US acid rain program"](https://www.sciencedirect.com/science/article/pii/S0301479705002124). Journal of Environmental Management 77(3), pp. 252-266. November 2005.`,
    ],
  },
  {
    solution: "Fruit & Vegetable Subsidy, Netherlands (2020-2050)",
    link: "/history/endeavors#public-health-campaigns",
    site: "history",
    cost: 0.12,
    benefit: 2.227,
    co2: null,
    habitat: null,
    sources: [
      `[^7]: Broeks, M., Biesbroek, S., Over, E., van Gils, P., Toxopeus, I., Beukers, M., Temme, H. ["A social cost-benefit analysis of meat taxation and a fruit and vegetables subsidy for a healthy and sustainable food consumption in the Netherlands"](https://pubmed.ncbi.nlm.nih.gov/32389120/). BMC Public Health 20, pp. 1-12. December 2020.`,
    ],
  },
  {
    solution: "MDMA Therapy for PTSD, U.S. (2021-2051)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 0.007,
    benefit: 0.111,
    co2: null,
    habitat: null,
    sources: [
      `[^8]: Marseille, E., Kahn, J., Yazar-Klosinski, B., Doblin, R. ["The cost-effectiveness of MDMA-assisted psychotherapy for the treatment of chronic, treatment-resistant PTSD"](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0239997). PLoS ONE 15(10), e0239997. October 2020.`,
    ],
  },
  {
    solution: "Phaseout of Lead in Gasoline, U.S. (1983 - 1986)",
    link: "/history/endeavors#pollution-regulations",
    site: "history",
    cost: 4.73,
    benefit: 64.58,
    co2: null,
    habitat: null,
    sources: [
      `[^9]: Newell, R., Rogers, K. ["The U.S. Experience with the Phasedown of Lead in Gasoline"](https://web.mit.edu/ckolstad/www/Newell.pdf). Resources for the Future. June 2003.`,
    ],
  },
  {
    solution: "River Restoration, Switzerland (35-Year Model)",
    link: "/history/endeavors#ecology-environment",
    site: "history",
    cost: 0.06346,
    benefit: 0.86253,
    co2: null,
    habitat: null,
    sources: [
      `[^10]: Logar, I., Brouwer, R., Paillex, A. ["Do the societal benefits of river restoration outweigh their costs? A cost-benefit analysis"](https://www.sciencedirect.com/science/article/pii/S030147971831363X). Journal of Environmental Management 232, pp. 1075-1085. February 2019.`,
    ],
  },
  {
    solution: "Weather Forecasting, U.S. (Annual)",
    link: "/history/endeavors#miscellaneous",
    site: "history",
    cost: 6.23,
    benefit: 67.7,
    co2: null,
    habitat: null,
    sources: [
      `[^11]: Lazo, J., Morss, R., Demuth, J. ["300 Billion Served: Sources, Perceptions, Uses, and Values of Weather Forecasts"](https://journals.ametsoc.org/bams/article/90/6/785/59633). Bulletin of the American Meteorological Society 90(6), pp. 785-798. June 2009.`,
    ],
  },
  {
    solution: "Violence Against Women Act, U.S. (1994-1999)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 2.86,
    benefit: 29.3,
    co2: null,
    habitat: null,
    sources: [
      `[^12]: Clark, K. A., Biddle, A. K., Martin, S. L. ["A Cost-Benefit Analysis of the Violence Against Women Act of 1994"](https://journals.sagepub.com/doi/abs/10.1177/10778010222183143). Violence Against Women 8(4), pp. 417-428. April 2002.`,
    ],
  },
  {
    solution: "Renewable Portfolio Standards, U.S. (2015-2050)",
    link: "/history/endeavors#pollution-regulations",
    site: "history",
    cost: 33.76,
    benefit: 280.93,
    co2: null,
    habitat: null,
    sources: [
      `[^13]: Mai, T., Wiser, R., Barbose, G., Bird, L., Heeter, J., Keyser, D., Krishnan, V., Macknick, J., Millstein, D. ["A Prospective Analysis of the Costs, Benefits, and Impacts of U.S. Renewable Portfolio Standards"](https://www.nrel.gov/docs/fy17osti/67455.pdf). National Renewable Energy Laboratory. December 2016.`,
    ],
  },
  {
    solution: "Interstate Corridor Extension, Central U.S. (20-Year Model)",
    link: "/history/endeavors#transportation-infrastructure",
    site: "history",
    cost: 2.18,
    benefit: 14.76,
    co2: null,
    habitat: null,
    sources: [
      `[^14]: Prepared by John Dunham & Associates New York, prepared for Colorado Department of Transportation. ["The Interstate 70 East Corridor Project Social Benefit-Cost Analysis"](https://www.codot.gov/programs/high-performance-transportation-enterprise-hpte/reports/i-70/final-draft-i-70-east-corridor-project-social-benefit-cost-analysis). October 2013.`,
    ],
  },
  {
    solution: "Montreal Protocol on Ozone, World (1987-2060)",
    link: "/history/endeavors#pollution-regulations",
    site: "history",
    cost: 381.04,
    benefit: 2540,
    co2: null,
    habitat: null,
    sources: [
      `[^15]: Markandya, A., Dale, N. ["The Montreal Protocol and the Green Economy: Assessing the contributions and co-benefits of a Multilateral Environmental Agreement"](https://www.unenvironment.org/ozonaction/resources/publication/montreal-protocol-and-green-economy-assessing-contributions-and-co-benefits). United Nations Environment Programme. 2012.`,
      `[^16]: Gåverud, H. ["Benefits from environmental taxation: a case study of the US tax on ozone depleting substances"](https://www.diva-portal.org/smash/get/diva2:1024029/FULLTEXT01.pdf). Luleå University of Technology, Masters Thesis. 2004.`,
    ],
  },
  {
    solution: "Building Energy Efficiency, Qatar (Annual)",
    link: "/history/endeavors#research-and-development",
    site: "history",
    cost: 2.05,
    benefit: 13.4,
    co2: null,
    habitat: null,
    sources: [
      `[^17]: Krarti, M., Ali, F., Alaidroos, A., Houchati, M. ["Macro-economic benefit analysis of large scale building energy efficiency programs in Qatar"](https://www.sciencedirect.com/science/article/pii/S2212609017301061). International Journal of Sustainable Built Environment 6(2), pp. 597-609. December 2017.`,
    ],
  },
  {
    solution: "Interstate Highway System, U.S. (1950-1989)",
    link: "/history/endeavors#transportation-infrastructure",
    site: "history",
    cost: 549.69,
    benefit: 3300,
    co2: null,
    habitat: null,
    sources: [
      `[^18]: Cox, W., Love, J. ["40 Years of the US Interstate Highway System: An Analysis The Best Investment A Nation Ever Made"](http://www.publicpurpose.com/freeway1.htm). Prepared for the American Highway Users Alliance. June 1996.`,
      `[^19]: Federal Highway Administration. ["Productivity and the Highway Network: A Look at the Economic Benefits to Industry from Investment in the Highway Network"](https://www.fhwa.dot.gov/policy/otps/060320b/). Publication No. FHWA-PL-96-016. 1996.`,
    ],
  },
  {
    solution: "truth® Anti-smoking Campaign, U.S. (2000-2002)",
    link: "/history/endeavors#public-health-campaigns",
    site: "history",
    cost: 0.391,
    benefit: 2.29,
    co2: null,
    habitat: null,
    sources: [
      `[^20]: Holtgrave, D., Wunderink, K., Vallone, D., Healton, C. ["Cost–Utility Analysis of the National truth® Campaign to Prevent Youth Smoking"](https://www.sciencedirect.com/science/article/abs/pii/S0749379709000750). American Journal of Preventive Medicine 36(5). May 2009.`,
    ],
  },
  {
    solution: "NASA Life Sciences R&D, select projects (1959-2002)",
    link: "/history/endeavors#research-and-development",
    site: "history",
    cost: 0.42,
    benefit: 2.39,
    co2: null,
    habitat: null,
    sources: [
      `[^21]: Hertzfeld, R. ["Measuring the economic returns from successful NASA life sciences technology transfers"](https://pubmed.ncbi.nlm.nih.gov/14983842/). Journal of Technology Transfer 27(4), pp. 311-320. December 2002.`,
    ],
  },
  {
    solution: "Industrial Energy Efficiency, U.S. (Annual)",
    link: "/history/endeavors#energy-production-efficiency",
    site: "history",
    cost: 0.09,
    benefit: 0.51,
    co2: null,
    habitat: null,
    sources: [
      `[^22]: Worrell, E., Laitner, J., Ruth, M., Finman, H. ["Productivity benefits of industrial energy efficiency measures"](https://www.sciencedirect.com/science/article/abs/pii/S0360544203000914). Energy 28(11), pp. 1081-1098. September 2003.`,
    ],
  },
  {
    solution: "Combustion Engine R&D, USDOE (1986-2007)",
    link: "/history/endeavors#research-and-development",
    site: "history",
    cost: 0.53,
    benefit: 2.823,
    co2: null,
    habitat: null,
    sources: [
      `[^24]: Link, A. ["Retrospective Benefit-Cost Evaluation of U.S. DOE Vehicle Combustion Engine R&D Program: Impacts of a Cluster of Energy Technologies"](https://www.energy.gov/eere/analysis/downloads/retrospective-benefit-cost-evaluation-us-doe-vehicle-combustion-engine-rd). Office of Energy Efficiency and Renewable Energy. May 2010.`,
    ],
  },
  {
    solution: "Wind Energy R&D, USDOE (1976-2008)",
    link: "/history/endeavors#research-and-development",
    site: "history",
    cost: 1.72,
    benefit: 8.72,
    co2: null,
    habitat: null,
    sources: [
      `[^25]: Pelsoci, T. ["Retrospective Benefit-Cost Evaluation of U.S. DOE Wind Energy R&D Program: Impact of Selected Energy Technology Investments"](https://www.energy.gov/eere/analysis/downloads/retrospective-benefit-cost-evaluation-us-doe-wind-energy-rd-program-impact). Office of Energy Efficiency and Renewable Energy, U. S. Department of Energy. June 2010.`,
    ],
  },
  {
    solution: "Geothermal R&D, USDOE, (1980-2008)",
    link: "/history/endeavors#research-and-development",
    site: "history",
    cost: 2.03,
    benefit: 9.87,
    co2: null,
    habitat: null,
    sources: [
      `[^26]: Gallaher, M., Rogozhin, A., Petrusa, J. ["Retrospective Benefit-Cost Analysis of U.S. DOE's Geothermal Technologies R&D Program Investments"](https://www.energy.gov/eere/analysis/downloads/retrospective-benefit-cost-analysis-us-does-geothermal-technologies-rd). RTI International, prepared for the Office of Energy Efficiency and Renewable Energy. August 2010.`,
    ],
  },
  {
    solution: "Path Network (Cycle & Walk), Norway (25-Year Model)",
    link: "/history/endeavors#transportation-infrastructure",
    site: "history",
    cost: 0.157,
    benefit: 0.756,
    co2: null,
    habitat: null,
    sources: [
      `[^27]: Sælensminde, K. ["Cost-benefit analyses of walking and cycling track networks taking into account insecurity, health effects and external costs of motorized traffic"](https://www.sciencedirect.com/science/article/abs/pii/S0965856404000539). Transportation Research Part A: Policy and Practice 38(8), pp. 593-606. October 2004.`,
    ],
  },
  {
    solution: "Manure Digester Bags, Vietnam (10-Year Model) per kiloton",
    link: "/history/endeavors#ecology-environment",
    site: "history",
    cost: 0.000424,
    benefit: 0.00195,
    co2: 424,
    habitat: null,
    sources: [
      `[^28]: Bentzen, J., Truc, N. T. T., Nam, T. S. ["A Social Cost-Benefit Analysis of Biogas Technologies using Rice Straw and Water Hyacinths as Feedstock"](http://203.159.5.126/index.php/reric/article/view/1825). International Energy Journal 18(4). December 2018.`,
    ],
  },
  {
    solution: "Universal Preschool, Spain (Annual)",
    link: "/history/endeavors#miscellaneous",
    site: "history",
    cost: 13.56,
    benefit: 58.42,
    co2: null,
    habitat: null,
    sources: [
      `[^29]: van Huizen, T., Dumhs, L., Plantenga, J. ["A Cost-Benefit Analysis of Universal Preschool Education: Evidence from a Spanish Reform"](https://dspace.library.uu.nl/handle/1874/342312). USE Discussion paper series 16(11). 2016.`,
    ],
  },
  {
    solution: "Building Technology R&D, U.S. (1976-2015)",
    link: "/history/endeavors#research-and-development",
    site: "history",
    cost: 0.36,
    benefit: 1.531,
    co2: null,
    habitat: null,
    sources: [
      `[^30]: Gallaher, M., Scott, T., Oliver, Z., Clark-Sutton, K., Anderson, B., Ruegg, R. ["Benefit-Cost Evaluation of U.S. Department of Energy Investment in HVAC, Water Heating, and Appliance Technologies"](https://www.energy.gov/eere/buildings/downloads/benefit-cost-evaluation-us-department-energy-investment-hvac-water-heating). RTI International and TIA Consulting, prepared for Building Technologies Office, Office of Energy Efficiency and Renewable Energy. September 2017.`,
    ],
  },
  {
    solution: "Irrigation Modernization, Spain (25-Year Model)",
    link: "/history/endeavors#ecology-environment",
    site: "history",
    cost: 1.43,
    benefit: 5.84,
    co2: null,
    habitat: null,
    sources: [
      `[^31]: Borrego-Marín, M., Berbel, J. ["Cost-benefit analysis of irrigation modernization in Guadalquivir River Basin"](https://www.sciencedirect.com/science/article/abs/pii/S0378377418303378). Agricultural Water Management 212, pp. 416-423. February 2019.`,
    ],
  },
  {
    solution: "Government Compensation for Kidney Donors, U.S. (Annual)",
    link: "/history/endeavors#public-health-projects",
    site: "history",
    cost: 18.3,
    benefit: 74,
    co2: null,
    habitat: null,
    sources: [
      `[^32]: Held, P. J., McCormick, F., Ojo, A., Roberts, J. P. "A Cost‐Benefit Analysis of Government Compensation of Kidney Donors". American Journal of Transplantation 16(3), pp. 877-885. October 2015.`,
    ],
  },
  {
    solution: "Anti-Bullying Campaign, Netherlands (2012-2014)",
    link: "/history/endeavors#public-health-campaigns",
    site: "history",
    cost: 0.000000241,
    benefit: 0.00000097,
    co2: null,
    habitat: null,
    sources: [
      `[^33]: Beckman, L., Svensson, M. ["The cost-effectiveness of the Olweus Bullying Prevention Program: Results from a modelling study"](https://www.sciencedirect.com/science/article/abs/pii/S0140197115002213). Journal of Adolescence 45, pp. 127-137. December 2015.`,
    ],
  },
  {
    solution: "Rural Broadband Service, U.S. (2018-2038)",
    link: "/history/endeavors#miscellaneous",
    site: "history",
    cost: 0.19422,
    benefit: 0.76872,
    co2: null,
    habitat: null,
    sources: [
      `[^34]: Grant, A., Tyner, W. ["Benefit-Cost Analysis for Implementation of Rural Broadband in the Tipmont Cooperative in Indiana"](https://pcrd.purdue.edu/wp-content/uploads/2018/12/005-RPINsights-Tipmont-Broadband.pdf). Purdue University, Research & Policy INsights. August 2018.`,
    ],
  },
  {
    solution: "National Parks, U.S. (Annual)",
    link: "/history/endeavors#miscellaneous",
    site: "history",
    cost: 3.62,
    benefit: 14.07,
    co2: null,
    habitat: null,
    sources: [
      `[^35]: Hardner, J., McKenney, B. ["The U.S. National Park System: An Economic Asset at Risk"](https://www.npca.org/resources/1109-the-u-s-national-park-system-an-economic-asset-at-risk). Prepared for the National Parks Conservation Association. May 2006.`,
    ],
  },
];

endeavorTableData.sort((a, b) => {
  if (siteOrder[a.site] === siteOrder[b.site]) {
    // If sites are the same, sort alphabetically by solution
    return a.solution.localeCompare(b.solution);
  }

  // Sort by site order
  return siteOrder[a.site] - siteOrder[b.site];
});

// This function grabs the data above and translates it into data for the table
function SolutionEndeavorTable() {
  // It uses the React "useMemo" hook that allows you to memoize the result of a function
  const columns = React.useMemo(
    () => [
      {
        // Creates a column with the title: "Solution / Endeavor"
        Header: "Solution / Endeavor",

        // React Table uses the "accessor" property to determine what data to display
        // In our case we want the "solution" property from the data above for our title
        // ...we also want the "link" property so we can inject it into each row
        accessor: (row) => ({ solution: row.solution, link: row.link }),

        // The first column in the table has both a title as well as a link,
        // ...therefore both the title (solution) and link (link) are passed into the
        // ... "Cell" property
        Cell: ({ value }) => (
          <Link href={value.link}>
            <a target="_blank" rel="noopener noreferrer">
              {value.solution}
            </a>
          </Link>
        ),
      },
      {
        // We want to display a number like this in out data: "1000"
        // ...like this in our table: "1,000"
        // We also want to keep our decimals when specified.
        // ...so we use .format() & other code below
        Header: "Cost (Billion USD/yr)",
        accessor: "cost",
        sortType: 'number',
        Cell: ({ value }) =>
          value !== null
            ? `$${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              }).format(value)}`
            : null,
      },
      {
        // Same as above re: number formatting
        Header: "Benefit (Billion USD/yr)",
        accessor: "benefit",
        sortType: 'number',
        Cell: ({ value }) =>
          value !== null
            ? `$${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              }).format(value)}`
            : null,
      },
      {
        // Same as above re: number formatting without the $ sign
        Header: "CO² Reduction megaTon/yr",
        accessor: "co2",
        sortType: 'number',
        Cell: ({ value }) =>
          value !== null
            ? `${Intl.NumberFormat(undefined, {
                minimumFractionDigits: 0,
              }).format(value)}`
            : null,
      },
      {
        // no formatting here. We don't care about sub-sections of square kilometers
        Header: "Habitat Preservation (km²)",
        accessor: "habitat",
        sortType: 'number',
        Cell: ({ value }) =>
          value !== null ? `${Intl.NumberFormat().format(value)}km²` : null,
      },
      {
        Header: "Sources",
        accessor: "sources",
        Cell: ({ value }) => {
          if (!value || value.length === 0) return null;
          return value.map((source, index) => {
            const matches = source.match(/\[\^(\d+)\]/);
            if (!matches) return null;
            const footnoteNumber = matches[1];
            return (
              <React.Fragment key={`fnref-${footnoteNumber}`}>
                {index > 0 && ", "}
                <a
                  href={`#fn-${footnoteNumber}`}
                  id={`fnref-${footnoteNumber}`}
                >
                  {footnoteNumber}
                </a>
              </React.Fragment>
            );
          });
        },
      },
    ],
    []
  );
 
  // This combines the data from the two tables into one array
  const combinedData = solutionTableData.concat(endeavorTableData);

  // In functional React components, useState is used to define state
  const [data, setData] = useState(combinedData);

  // This creates an instance of the React table
  const tableInstance = useTable({ columns, data }, useSortBy);

  // This line destructures the table instance to extract properties & methods
  // ...to prepare rows for rendering.
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // This is the actual JSX that gets rendered
  return (
    <>
      <table className="solution-table dynamic-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, hgIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`hg-${hgIndex}`}>
              {headerGroup.headers.map((column, colIndex) => {
                // This is the modified sorting that should limit the options to asc or desc
                const isSorted = column.isSorted;
                const isSortedDesc = column.isSortedDesc;
                const sortClass = isSorted
                  ? isSortedDesc
                    ? "sort-desc"
                    : "sort-asc"
                  : "";
                const sortTitle = isSorted
                  ? isSortedDesc
                    ? "Sorted Descending"
                    : "Sorted Ascending"
                  : "Not Sorted";
                const toggleSort = () => {
                  const sortDesc = isSorted ? !isSortedDesc : false;
                  tableInstance.setSortBy([{ id: column.id, desc: sortDesc }]);
                };
                return (
                  <th
                    {...column.getHeaderProps({
                      className: `sortable ${sortClass}`,
                      onClick: toggleSort,
                      title: sortTitle,
                    })}
                    key={`col-${colIndex}`}
                  >
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={rowStyle(row.original)}
                key={`row-${rowIndex}`}
              >
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td {...cell.getCellProps()} key={`cell-${cellIndex}`}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {renderFootnotes(data)}
    </>
  );
}

function rowStyle(row) {
  return row.site + "-article-button-background-color";
}

export default SolutionEndeavorTable;
