import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";
export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

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
        <NavbarTitleBlock title={"Publications"} subtitle={""} />
      </div>

      <div className="px-4 lg:px-0">
        <div className="publications-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1"></div>
        <div className="my-2 standard-font-3 standard-font-color-1 text-lg">
          <div className="pb-6">
            <b>Handouts</b>, 2022.&nbsp; A series of handouts published by the
            Urban Cruise Ship Crew:
          </div>
          <div className="pb-6">
            <div>Health</div>
            <a
              href={`${path}/human_population.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Human Population</i>
                </b>
              </div>
            </a>
            <a
              href={`${path}/diet_choices_environmental.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Diet Choices - Environmental Impacts</i>
                </b>
              </div>
            </a>
            <a
              href={`${path}/diet_choices_ethical.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Diet Choices - Ethical Impacts</i>
                </b>
              </div>
            </a>
            {/* https://drive.google.com/file/d/1cZpCwDpGFlAtAt57wlo7bVt1x2CMIX4S/view?usp=sharing */}
            <a
              href={`${path}/personal_consumption_trends_8823.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Personal Consumption Trends</i>
                </b>
              </div>
            </a>

            <a
              href={`${path}/world_consumption_trends_8823.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>World Consumption Trends</i>
                </b>
              </div>
            </a>
          </div>
          <div className="pb-6">
            <div>Access</div>
            <a
              href={`${path}/residential_sprawl_impacts.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Residential Sprawl Impacts</i>
                </b>
              </div>
            </a>
            <a
              href={`${path}/transportation_option_impacts_vehicle_cargo.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Transportation Option Impacts</i>
                </b>
              </div>
            </a>
            <a
              href={`${path}/transportation_system_impacts.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Transportation System Impacts</i>
                </b>
              </div>
            </a>
          </div>
          <div className="pb-6">
            <div>Opportunities</div>
            <a
              href={`${path}/electricity_production_forecast.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Electricity Production Forecast</i>
                </b>
              </div>
            </a>
            <a
              href={`${path}/energy_production_forecast.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Energy Production Forecast</i>
                </b>
              </div>
            </a>
            <a
              href={`${path}/timelines.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <b>
                  <i>Historical Timelines</i>
                </b>
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
