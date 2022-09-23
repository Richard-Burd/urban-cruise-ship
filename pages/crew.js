import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const Crew = () => {
  return (
    <>
      <Head>
        <title>UCS Crew</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"The Crew"}
          subtitle={
            "Urban Cruise Ship is comprised of the following current and past crewmembers."
          }
        />
      </div>
      <div>
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-24 -mb-2 standard-font-color-1">
          Michael Goff
        </div>
        <div className="my-7 standard-font-2 text-lg">
          <div>
            Michael Goff is the president and primary researcher of Urban Cruise
            Ship.
          </div>
          <div className="my-4"></div>
          <div>
            Michael's volunteer work in policy and advocacy includes the YIMBY
            (Yes In My Back Yard) movement in San Francisco; advocating for a
            carbon fee and dividend with Citizens Climate Lobby; the Advocacy
            Chair for the Nashville, Tennessee chapter of the United Nations
            Association; lobbying the Davidson County Metro Government to
            improve its recycling program; lobbying with Tennessians for Fair
            Taxation for a state income tax in Tennessee; and active work in the
            Democratic Party in Nashville, Washington County, OR, and Seattle.
            In 2014, Michael was a fellow in East-West: The Art of Dialogue, a
            program of the Shafik Gabr Foundation, to foster ties between the
            United States and Egypt.
          </div>
          <div className="my-4"></div>
          <div>
            Michael earned his Ph. D. in mathematics from the University of
            Washington in 2010. He is interested in machine learning and data
            science and in 2014 completed a programing at The Data Incubator,
            where he built a predictive model of usage of New York City’s
            CitiBike program. His hobbies include game programming and urban
            hiking.{" "}
          </div>
        </div>
      </div>
      <style jsx>{`
        .crew-member-custom-text-size {
          font-size: 2.4rem;
        }
      `}</style>
    </>
  );
};

export default Crew;
