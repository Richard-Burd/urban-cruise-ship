import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Presentations = () => {
  return (
    <>
      <Head>
        <title>UCS Presentations</title>
        <meta
          name="keywords"
          content="presentations, exhibitions, talks, lecture, handouts, materials"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Presentations"}
          subtitle={
            "John will think of a good subtitle for this presentations page."
          }
        />
      </div>
      <div className="presentations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
        Presentations
      </div>
      <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg">
        <div className="pb-6">
          <b>Online</b>, November 2021.&nbsp;<b>Michael Goff</b>&nbsp;presented
          at the Overview Roundtable on the environmental impacts of space
          exploration.
        </div>
        <div className="pb-6">
          <b>Lansing, MI</b>, February 2020.&nbsp;<b>Lee Nelson</b>
          &nbsp;presented on the links between different dietary choices and
          their environmental consequences at an event called Sprouting, which
          was organized to spread environmental awareness and appreciation. It
          was held at The Fledge, a non-profit organization and space that helps
          local start-ups brainstorm and build their businesses.
        </div>
        <div className="pb-6">
          <b>Santa Fe, NM</b>, July 2019.&nbsp;<b>Michael Goff</b>
          &nbsp;presented an overview of current and forecasted world energy
          production at the Santa Fe Institute, as part of their Sustainability
          Summer School program.
        </div>
        <div className="pb-6">
          <b>Nashville, TN</b>, January 9, 11, and 23, 2018.&nbsp;
          <b> John van der Harst</b>&nbsp;and&nbsp;<b>Andrew Evans</b>
          &nbsp;presented handouts on mode and system efficiencies and system
          length/population comparisons at a public hearing and subsequent
          committee and full meetings of the Metropolitan Council of Nashville
          and Davidson County on a light rail plan tax referendum.
          &nbsp;presented an overview of current and forecasted world energy
          production at the Santa Fe Institute, as part of their Sustainability
          Summer School program.
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="presentations-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
        Publications
      </div>
      <div className="my-2 standard-font-3 standard-font-color-1 text-justify text-lg">
        <div className="pb-6">
          <b>Handouts</b>, 2022.&nbsp;
          <b>
            <i>A series of handouts published by the Urban Cruise Ship Crew</i>
          </b>
        </div>
        <div className="pb-6">
          <div>
            <b>Health</b>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=16Or2FPdUrkPRouD9dZSv_A6JlpXjAkTk"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Human Population</i>
            </div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1SJqsjDSDJnZm4g4vbV24hKhVbdK7Lm9N"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Diet Choices - Environmental Impacts</i>
            </div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1r-Z8e3U7TeGwxznlRgfNEHKTBtkmY_WI"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Diet Choices - Ethical Impacts</i>
            </div>
          </a>
        </div>
        <div className="pb-6">
          <div>
            <b>Access</b>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=17kWlKkQ98RwHGSzx1BDGgzlQC2_8YbLF"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Residential Sprawl Impacts</i>
            </div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1qDqH6ydR5BZoRsBWvMpH5AdqZFcM2hcz"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Transportation Choice Impacts</i>
            </div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1MToTkO5V0RVZXf9ZRgqUpp16rXi0BXZO"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Transportation System Impacts</i>
            </div>
          </a>
        </div>
        <div className="pb-6">
          <div>
            <b>Opportunities</b>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1oTeIJSdehMiTL-B5ok7_eQYZcH7DH9Jf"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Electricity Production Forecast</i>
            </div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1GA3ys7FT6Z1ypRAKyS6YPAka5ydFhc27"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Energy Production Forecast</i>
            </div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1C4GKdOgmMyw3cvFsmpsufMzb-eDnBSu1"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
          >
            <div>
              <i>Historical Timelines</i>
            </div>
          </a>
        </div>
        <div className="">
          <b>Human Space Program</b>, 2021.{" "}
          <a
            href="https://medium.com/@humanspaceprogram/orbital-debris-threatens-the-peaceful-use-of-space-bd6fc987df0b"
            className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            <b>
              <i>Orbital Debris Threatens the Peaceful Use of Space</i>
            </b>
          </a>
        </div>
      </div>
      <br></br>
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
