import Head from "next/head";
import AboutPageDropdown from "../components/AboutPageDropdown";
import NavbarTitleBlock from "../components/NavbarTitleBlock";

const About = () => {
  return (
    <>
      <Head>
        <title>About UCS</title>
        <meta name="keywords" content="about, about us, about UCS" />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"About Us"}
          subtitle={
            "Founded in 2014, Urban Cruise Ship presents environmental solutions:"
          }
        />
      </div>
      {/* This side-by-side display must dissapear for tablet & mobile views*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-4 lg:ml-0 mb-40">
        <div className="first-column">
          <AboutPageDropdown
            title={`Why the name "Urban Cruise Ship?"`}
            content={
              <>
                <div className="mb-4">
                  This comes from the concept of taking something that works
                  well now, due to good design, and applying that elsewhere to
                  solve problems. E.g. urban problems could be reduced if cities
                  were designed more like cruise ships: attractive and
                  enjoyable, but compact and with all residents&apos; needs met
                  within walking distance.
                </div>
                <div className="mb-4">
                  This is a classic application of design-approach transfer.
                  Urban Cruise Ship also explores other topics where this might
                  work well.{" "}
                </div>
                <div>
                  Like a real ship, Urban Cruise Ship is navigational. Its crew
                  takes visitors to numerous ports of entry into different ways
                  of solving problems.{" "}
                </div>
              </>
            }
          />
          <AboutPageDropdown
            title={`Why is Urban Cruise Ship Needed?`}
            content={
              <>
                <div className="mb-4">
                  Progress in the modern environmental movement has been uneven
                  in many key areas: biodiversity loss/species extinction,
                  habitat degradation, spreading invasive species, ocean
                  acidification, poor air quality, unhealthy water supplies,
                  insufficiently-tested chemical exposures, lack of adequate
                  sanitation, accelerating waste generation and disposal,
                  litter, urban sprawl, fossil fuel depletion, climate change,
                  storm/earthquake vulnerability, malnutrition, topsoil loss,
                  food shortages, obesity, unsheltered living conditions, forced
                  migration, cultural loss, and scenery defilement.
                </div>
                <div>
                  Education has spurred widespread desire for improvement in all
                  of these areas, but to date, current solutions have not kept
                  pace with increasing needs. Hence, better solutions are VERY
                  much desired and needed now.
                </div>
              </>
            }
          />
          <AboutPageDropdown
            title={`What does Urban Cruise Ship seek to be?`}
            content={
              <>
                <div>
                  We want to be a highly respected source of guidance, that
                  provides the most helpful and accurate data, practical and
                  sufficient analysis, and workable solutions for ecological
                  problems.
                </div>
              </>
            }
          />
        </div>
        <div className="second-column">
          <AboutPageDropdown
            title={`Who started Urban Cruise Ship and why?`}
            content={
              <>
                <div className="mb-4">
                  Mathematician Michael Goff and designer John van der Harst met
                  via the Nashville Peace and Justice Center, and worked
                  together in Recycling Advocates of Middle Tennessee. Both
                  continued to work in various other organizations as well --
                  some with each other, and others apart. Discussions continued
                  over what worked and didn&apos;t.
                </div>
                <div>
                  Both wanted to maximize their effect. Each had prior
                  preferences for future work, but conservatively chose to work
                  together first on fundamental analysis which would properly
                  prioritize choices systematically. That was, and is, Urban
                  Cruise Ship.
                </div>
              </>
            }
          />
          <AboutPageDropdown
            title={`What became Urban Cruise Ship's priorities?`}
            content={
              <>
                <div className="mb-4">
                  Initially, clean energy production was a top priority, due to
                  public interest, time urgency, and lack of progress to date.
                  Land conservation was already high on our agenda. However,
                  systematic analysis revealed an even wider array of needs and
                  solution &quot;best deals.&quot;
                </div>
                <div className="mb-4">
                  Our standards section shows what our attitude has been toward
                  analyzing our options. Rigorously applying these standards, we
                  reasoned, should result in the best set of priorities.
                </div>
                <div>
                  One type of priority emerged frequently: removal of
                  special-interest subsidies, and getting taxation and
                  regulation right, solve problems in many areas efficiently, as
                  they then allow markets to drive the right choices thereafter.
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default About;
