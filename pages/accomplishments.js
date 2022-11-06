import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Accomplishments = () => {
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
        <NavbarTitleBlock
          title={"Accomplishments"}
          subtitle={
            ""
          }
        />
      </div>
      <div className="presentations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1"></div>
      <div className="my-2 standard-font-3 standard-font-color-1 p-4 lg:p-0 text-justify text-lg">
        <div className="pb-6">
          <b>2022:</b>&nbsp;Produced nine exemplary handouts, which employ data
          presented graphically, and use no opinionated messaging in text form
          apart from labels and titles.
        </div>
        <div className="pb-6">
          <b>2022:</b>&nbsp;Produced the first trajectory-styled projection of
          progress toward producing energy without the use of fossil fuels (see
          Electricity Production Forecast and Energy Production Forecast
          handouts). This lessens the distractive clutter and lack of
          achievability rationale (and accompanying puzzlingly wide variations)
          associated with forecast (or scenario)-based presentations used
          extensively previously by numerous other organizations
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
          more easily develop high-quality solutions if they wish, in
          competition with Urban Cruise Ship&apos;s own solution development.
          Such competition should improve collective quality.
        </div>
      </div>
    </>
  );
};

export default Accomplishments;
