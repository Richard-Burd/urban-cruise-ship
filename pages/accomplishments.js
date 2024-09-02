import Head from "next/head";
import AccomplishmentsTitleBlock from "../components/AccomplishmentsTitleBlock";

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
        <AccomplishmentsTitleBlock title={"Accomplishments"} subtitle={""} />
      </div>
      <div className="presentations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1"></div>
      <div className="my-2 standard-font-3 standard-font-color-1 p-4 lg:p-0 text-justify text-lg">
        <div className="pb-6">
          <b>2023-present:</b>&nbsp;Constructed a web site for
          <a
            href="https://www.ramtn.org/"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <b>
              <i>Recycling Advocates of Middle Tennessee (RAM)</i>
            </b>
            &nbsp;
          </a>
          , to better utilize RAM&apos;s knowledge and experience in building
          Urban Cruise Ship&apos;s Waste site. RAM had the best methodology
          among environmental groups, but did not have its material online.
          Currently, RAM&apos;s web site is about half-complete. Mostly, it
          still lacks upgraded graphics and curated submissions.
        </div>
        <div className="pb-6">
          <b>2023-present:</b>&nbsp;Created
          <a
            href="https://www.urbanfootnotes.com/"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <b>
              <i>Urban Foot Notes</i>
            </b>
            &nbsp;
          </a>
          , a project of Urban Cruise Ship -- a first-of-its-kind comparative
          quantification of how easily a resident at a given address can live
          without a car. After 1 1/2 years of development, it is presently being
          tested, ranking a variety of addresses. Soon hopefully it will be used
          by clients to assess their own addresses&apos; pedestrian
          friendliness.
        </div>
        <div className="pb-6">
          <b>2023-present:</b>&nbsp;Broadness of both topic and solution
          coverage has reached the point where Urban Cruise Ship&apos;s web site
          is the best starting point we know of for students, counselors, and
          school administrators to use to select majors, curricula, and research
          topics in environmental fields.
        </div>
        <div className="pb-6">
          <b>2022-Present:</b>&nbsp;Produced eleven exemplary handouts, which
          employ data presented graphically, and use no opinionated messaging in
          text form apart from labels and titles. Our <a
            href="https://www.urbancruiseship.org/publications"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <b>
              <i>Publications</i>
            </b>
            &nbsp;
          </a> page has these, grouped, for viewing and/or printing.
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
        <div className="pb-6" id="metrics">
          <b>2021-Present:</b>&nbsp;As of August 25, 2024, 110 of our over-220
          solutions contain at-least-mostly-full sets of estimates.&nbsp; The
          combined totals are $7.89 trillion U.S. dollars per year in costs,
          $15.52 trillion U.S. dollars per year in benefits, 45.89 billion tons
          of carbon dioxide-equivalents per year of greenhouse gas reduction,
          and 82 million square kilometers of habitat preserved. For context, World annual GDP is roughly $100 trillion U.S. dollars per year, humans are likely currently emitting in the vicinity of 55 billion tons of carbon dioxide equivalents per year, and the entire earth&apos;s surface area is slightly more than 510 million square kilometers.
        </div>
        <div className="pb-6">
          <b>2020-Present:</b>&nbsp;Created and developed&nbsp;
          <a
            href="/history"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            <b>
              <i>Comparative Progress Studies</i>
            </b>
          </a>
          &nbsp;- a subfield of Progress Studies, as a contextual comparison for
          solutions&apos; cost-benefit metrics. These now-78 historic human
          endeavors are presented both together, and divided into 8 topical
          subcategories. They are also presented both alone, as a historical
          comparative record, and combined with Urban Cruise Ship&apos;s
          now-over 110 solutions. Each is presented both graphically, and in
          rankable interactive tables, on our History site. This can aid
          advocates&apos; choice-making and use of precedent, and
          policymakers&apos; funding prioritization.
        </div>
        <div className="pb-6">
          <b>2018-Present:</b>&nbsp;Over 750 graphic exhibits have been
          constructed, with data and analysis sufficient to identify over 220
          problem-solution sets, with details presented in a standardized
          format, in drop-down boxes. Others can use this to independently
          develop high-quality solutions easier as well. Such competition with
          Urban Cruise Ship&apos;s own solution development should improve
          collective quality.
        </div>
      </div>
    </>
  );
};

export default Accomplishments;
