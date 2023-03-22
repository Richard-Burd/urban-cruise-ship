import Head from "next/head";
import AccomplishmentsTitleBlock from "../components/AccomplishmentsTitleBlock";

// these are conveniently located in a file in the main directory
// and then imported here to update the Solutions metrics 
import { 
  totalCostInTrillions, 
  totalBenefitInTrillions, 
  totalMTCO2eInMillions, 
  totalHabitatPreservedMillionsKm2,
  dateOfLastChange 
} from "../solutionMetrics.js";

const Accomplishments = () => {

  // // this automatically displays the current date in the text below,
  // // currently, this is not being used, but it could be so we'll leave it here
  // const date = new Date();
  // const formattedDate = date.toLocaleDateString('default', {
  //   month: 'long',
  //   day: 'numeric',
  //   year: 'numeric'
  // });

  return (
    <>
      <Head>
        <title>UCS Accomplishments</title>
        <meta
          name="keywords"
          content="accomplishments, credentials, production, realization"
        />
      </Head>
      <div>
        <AccomplishmentsTitleBlock
          title={"Accomplishments"}
          subtitle={
            ""
          }
        />
      </div>
      <div className="presentations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1"></div>
      <div className="my-2 standard-font-3 standard-font-color-1 p-4 lg:p-0 text-justify text-lg">
        <div className="pb-6">
          <b>2023:</b>&nbsp;Broadness of both topic and solution coverage has reached the point where Urban Cruise Ship&apos;s web site is the best starting point we know of for students, counselors, and school administrators to use to select majors, curricula, and research topics in environmental fields.
        </div>
        <div className="pb-6">
          <b>2022-Present:</b>&nbsp;Produced nine exemplary handouts, which employ data
          presented graphically, and use no opinionated messaging in text form
          apart from labels and titles.
        </div>
        <div className="pb-6">
          <b>2022:</b>&nbsp;Produced the first trajectory-styled projection of
          progress toward producing energy without the use of fossil fuels (see
          <a
            href="https://drive.google.com/uc?export=view&id=1wnnDiXssh28NEW7uor97UMeRf7K3TuO7"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <b>
              <i>Electricity Production Forecast</i>
            </b>
            &nbsp;
          </a>

          and

          <a
            href="https://drive.google.com/uc?export=view&id=1GA3ys7FT6Z1ypRAKyS6YPAka5ydFhc27"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <b>
              <i>Energy Production Forecast</i>
            </b>
            &nbsp;
          </a> 
          
          handouts). This lessens the distractive clutter and lack of
          achievability rationale (and accompanying puzzlingly wide variations)
          associated with forecast (or scenario)-based presentations used
          extensively previously by numerous other organizations.
        </div>
        <div className="pb-6">
          <b>2021-Present:</b>&nbsp;As of { dateOfLastChange }, 23 of our over-200 solutions contain at-least-mostly-full sets of estimates.&nbsp;  The combined totals are 
          ${ totalCostInTrillions } trillion U.S. dollars per year in costs, ${ totalBenefitInTrillions } trillion U.S. dollars per year in benefits, { totalMTCO2eInMillions } &nbsp; billion tons of carbon dioxide-equivalents per year of greenhouse gas reduction, and { totalHabitatPreservedMillionsKm2 } million square kilometers of habitat preserved.
        </div>
        <div className="pb-6">
          <b>2020-Present:</b>&nbsp;Invented and developed
          <a
            href="/history"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <b>
              <i>Comparative Progress Studies</i>
            </b>
            &nbsp;
          </a>
          - a subfield of Progress Studies, as a tool for improving and
          verifying accuracy of cost-benefit metrics for solutions. This can
          also improve policymakers&apos; funding prioritization. By the end of
          2020, the number of human endeavors presented stood at 35. By the end
          of 2021, that number had grown to 78, and was broken down into 8
          categories in addition to being presented all together.
        </div>
        <div className="pb-6">
          <b>2018-Present:</b>&nbsp;Approximately 600 graphic exhibits have been
          constructed, with data and analysis sufficient to identify over 200
          problem-solution sets, for which Urban Cruise Ship believes it can
          calculate cost, benefit; and environmental impact estimates sufficient
          to properly prioritize them. Calculations for these remain under
          development. By presenting this data, along with analysis and
          tentative problem-solution sets, others can use this to independently
          develop high-quality solutions easier if they wish, in
          competition with Urban Cruise Ship&apos;s own solution development.
          Such competition should improve collective quality.
        </div>
      </div>
    </>
  );
};

export default Accomplishments;
