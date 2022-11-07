import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Publications = () => {
  return (
    <>
      <Head>
        <title>UCS Publications</title>
        <meta
          name="keywords"
          content="publications, documents, handouts, lecture, materials"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Publications"}
          subtitle={
            ""
          }
        />
      </div>

      <div className="px-4 lg:px-0">
        <div className="publications-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Publications
        </div>
        <div className="my-2 standard-font-3 standard-font-color-1 text-lg">
          <div className="pb-6">
            <b>Handouts</b>, 2022.&nbsp;
            <b>
              <i>
                A series of handouts published by the Urban Cruise Ship Crew
              </i>
            </b>
          </div>
          <div className="pb-6">
            <div>
              <b>Health</b>
            </div>
            <a
              href="https://drive.google.com/uc?export=view&id=16Or2FPdUrkPRouD9dZSv_A6JlpXjAkTk"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <div>
                <i>Human Population</i>
              </div>
            </a>
            <a
              href="https://drive.google.com/uc?export=view&id=1SJqsjDSDJnZm4g4vbV24hKhVbdK7Lm9N"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <div>
                <i>Diet Choices - Environmental Impacts</i>
              </div>
            </a>
            <a
              href="https://drive.google.com/uc?export=view&id=1r-Z8e3U7TeGwxznlRgfNEHKTBtkmY_WI"
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
              href="https://drive.google.com/uc?export=view&id=17kWlKkQ98RwHGSzx1BDGgzlQC2_8YbLF"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <div>
                <i>Residential Sprawl Impacts</i>
              </div>
            </a>
            <a
              href="https://drive.google.com/uc?export=view&id=1qDqH6ydR5BZoRsBWvMpH5AdqZFcM2hcz"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <div>
                <i>Transportation Choice Impacts</i>
              </div>
            </a>
            <a
              href="https://drive.google.com/uc?export=view&id=1MToTkO5V0RVZXf9ZRgqUpp16rXi0BXZO"
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
              href="https://drive.google.com/uc?export=view&id=1aKcXXDssLtD3UD8-uKmu4xpWHJiq8hmp"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <div>
                <i>Electricity Production Forecast</i>
              </div>
            </a>
            <a
              href="https://drive.google.com/uc?export=view&id=1GA3ys7FT6Z1ypRAKyS6YPAka5ydFhc27"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <div>
                <i>Energy Production Forecast</i>
              </div>
            </a>
            <a
              href="https://drive.google.com/uc?export=view&id=1C4GKdOgmMyw3cvFsmpsufMzb-eDnBSu1"
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
      </div>
      <br></br>
      <br></br>
      <style jsx>{`
        .publications-custom-text-size {
          font-size: 2.4rem;
        }
      `}</style>
    </>
  );
};

export default Publications;
