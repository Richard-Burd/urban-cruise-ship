import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Presentations = () => {
  return (
    <>
      <Head>
        <title>UCS Presentations</title>
        <meta
          name="keywords"
          content="presentations, exhibitions, talks, lecture"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Presentations"}
          subtitle={
            ""
          }
        />
      </div>

      <div className="px-4 lg:px-0">
        <div className="presentations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Presentations
        </div>
        <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg">
          <div className="pb-6">
            <b>Online</b>, November 2021.&nbsp;<b>Michael Goff</b>
            &nbsp;presented at the Overview Roundtable on the environmental
            impacts of space exploration.
          </div>
          <div className="pb-6">
            <b>Lansing, MI</b>, February 2020.&nbsp;<b>Lee Nelson</b>
            &nbsp;presented on the links between different dietary choices and
            their environmental consequences at an event called Sprouting, which
            was organized to spread environmental awareness and appreciation. It
            was held at The Fledge, a non-profit organization and space that
            helps local start-ups brainstorm and build their businesses.
          </div>
          <div className="pb-6">
            <b>Santa Fe, NM</b>, July 2019.&nbsp;<b>Michael Goff</b>
            &nbsp;presented an overview of current and forecasted world energy
            production at the Santa Fe Institute, as part of their
            Sustainability Summer School program.
          </div>
          <div className="pb-6">
            <b>Nashville, TN</b>, January 9, 11, and 23, 2018.&nbsp;
            <b> John van der Harst</b>&nbsp;and&nbsp;<b>Andrew Evans</b>
            &nbsp;presented handouts on mode and system efficiencies and system
            length/population comparisons at a public hearing and subsequent
            committee and full meetings of the Metropolitan Council of Nashville
            and Davidson County on a light rail plan tax referendum.
            &nbsp;presented an overview of current and forecasted world energy
            production at the Santa Fe Institute, as part of their
            Sustainability Summer School program.
          </div>
        </div>
      </div>
      <br></br>
      <style jsx>{`
        .presentations-custom-text-size {
          font-size: 2.4rem;
        }
      `}</style>
    </>
  );
};

export default Presentations;
