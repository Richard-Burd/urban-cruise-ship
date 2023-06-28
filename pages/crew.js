import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";
import Image from "next/image";

const Crew = () => {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";

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
            "Urban Cruise Ship is comprised of the following current and past crewmembers:"
          }
        />
      </div>

      <div className="px-4 lg:px-0">
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Michael Goff
        </div>
        <div className={crewDescriptionTestLayoutStyles}>
          <div>
            Michael Goff is the president and primary researcher of Urban Cruise
            Ship.
          </div>
          <div className="my-4"></div>
          <div>
            Michael&apos;s volunteer work in policy and advocacy includes the
            YIMBY (Yes In My Back Yard) movement in San Francisco; advocating
            for a carbon fee and dividend with Citizens Climate Lobby; the
            Advocacy Chair for the Nashville, Tennessee chapter of the United
            Nations Association; lobbying the Davidson County Metro Government
            to improve its recycling program; lobbying with Tennessians for Fair
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
            where he built a predictive model of usage of New York City&apos;s
            CitiBike program. His hobbies include game programming and urban
            hiking.
          </div>
        </div>
        <center className="link-icon-set">
          <a
            href="https://twitter.com/MichaelKGoff"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/twitter.svg`}
              alt={"Twitter icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelkgoff"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/linkedin.svg`}
              alt={"LinkedIn icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="mailto:michael@urbancruiseship.org"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/email.svg`}
              alt={"Email icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          John van der Harst
        </div>
        <div className={crewDescriptionTestLayoutStyles}>
          <div>
            John van der Harst manages research aims, graphic and language
            standards, human resources, and development for Urban Cruise Ship. Like most of Michael&apos;s and some of Lee&apos;s and Richard&apos;s work, virtually all of John&apos;s is seen but not credited, like the name, logo, most yellow navbar content, editing, and styling.
          </div>
          <div className="my-4"></div>
          <div>
            Since 1975, John has been a designer, draftsman and illustrator in
            the fields of architecture, landscape architecture, civil
            engineering and planning, which have included some interior and
            graphic design, and structural, mechanical, plumbing, and electrical
            drawings. Previously, a variety of health-threatening factory work
            and odd jobs brought gratefulness for often-scarce design work
            opportunities and sensitivity toward work opportunity and
            environmental safety.
          </div>
          <div className="my-4"></div>
          <div>
            Since 1992, John has been president of Recycling Advocates of Middle
            Tennessee, with accomplishments that include the world&apos;s only
            voluntary closure of a large, financially-viable waste-to-energy
            plant with up-to-date air pollution control equipment, banning
            treated WTE ash as a loose construction fill material in many U.S.
            states, and establishing the first statewide “soil-based” compost
            quality standards as an incentive class. Doing so involved economic
            comparative analysis, risk assessment, conducting four pilot wet/dry
            source separation/processing systems, and touring over 200
            facilities across the U.S. and Ontario. John has described how to
            achieve true zero-waste across entire municipal waste streams,
            including economic structures which enable this. Those include
            calculating and internalizing presently externalized disposal costs.
          </div>
          <div className="my-4"></div>
          <div>
            John&apos;s advocacy has included leadership on issues ranging from
            health care, peace, third party and bioregional politics, mass
            transit, scenery preservation and billboards, economic disparity,
            and human and animal rights. Since 2002, John&apos;s methods,
            successes, and personal lifestyle led to various published profiles,
            in two newspapers, two magazines, a 2004 documentary&nbsp;
            <a
              href="https://www.imdb.com/title/tt1863278/"
              target="_blank"
              rel="noreferrer"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <strong>
                <i>“Immaterial John”</i>
              </strong>
              <br></br>
            </a>
            produced by&nbsp;
            <a
              href="https://redclaypictures.com/"
              target="_blank"
              rel="noreferrer"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <strong>
                <i>Red Clay Pictures</i>
              </strong>
            </a>
            , and listings in Marquis Who&apos;s Who in America, Who&apos;s Who
            in the World, and Who&apos;s Who in Science and Engineering. John is
            among the 5% of their listees Marquis has given a &quot;Lifetime
            Achievement Award&quot; to. Hobbies include gardening, cartooning,
            and triathlons.
          </div>
        </div>
        <center className="link-icon-set">
          <a href={`/snail-mail`} target="_blank" rel="noreferrer">
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/email.svg`}
              alt={"Email icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Lee Nelson
        </div>
        <div className={crewDescriptionTestLayoutStyles}>
          <div>
            Lee Nelson is an Exhibit Producer and Researcher with Urban Cruise
            Ship. Lee also manages several internal structural matters.
          </div>
          <div className="my-4"></div>
          <div>
            He grew up on a large dairy and agriculture farm in central
            California. He has worked for over 12 years as an environmental
            chemist and while in that position was a member of the safety,
            financial, and wellness committees. He has also volunteered as 4-H
            camp counselor, church camp counselor, Master Gardener (in Tennessee
            and Michigan), garden club leader, Prayer Practitioner, Big Brother,
            and Vegfest Coordinator. Lee is a certified Holistic Wellness Counselor, Yoga and Tai Chi Instructor, and Reiki Practitioner. He also teaches meditation and dream interpretation based on his own training in metaphysics. Lee has also studied and endeavors continual practice of Non-violent Communication.
          </div>
          <div className="my-4"></div>
          <div>
            Lee currently lives in Lansing, Michigan with his wife and two sons. He
            has been an ethical vegan since January 2014. Lee was recruited by Urban Cruise Ship after his August 2018 presentation at a Vegan Peace meeting in Nashville, Tennessee. In February of 2019 Lee was elected to serve on the Board of Trustees of the Unity
            Spiritual Center of Lansing. In the fall of 2020 Lee graduated from
            the Lansing Citizens Academy, a program to learn about local
            government and the role of citizen involvement. Lee teaches yoga and
            tai chi at a local YMCA and enjoys seeing his students learn and
            grow through practice. Lee has always had a love for
            environmentalism and also enjoys trail running, yoga, tai chi, calisthenics,
            hiking, gardening, and reading.
          </div>
        </div>
        <center className="link-icon-set">
          <a
            href="https://www.linkedin.com/in/lee-nelson-b5701981"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/linkedin.svg`}
              alt={"LinkedIn icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="https://www.supremelifeforce.info/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/home.svg`}
              alt={"Home icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="mailto:lee@urbancruiseship.org"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/email.svg`}
              alt={"Email icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Richard Burd
        </div>
        <div className={crewDescriptionTestLayoutStyles}>
          <div>
            Richard Burd is an assistant researcher and software developer at
            Urban Cruise Ship. He is the current webmaster and built our current
            website with the design consultation of John van der Harst.
          </div>
          <div className="my-4"></div>
          <div>
            Richard has a B.A in Middle Eastern studies and a is a graduate of
            the Flatiron School&apos;s Full-Stack web development program. He
            began his career in California as an architectural draftsman where
            he helped design affordable housing projects built across the Los
            Angeles basin. He later worked as a technician and technical writer
            for drones used in agricultural surveys to improve crop yields and
            reduce input requirements.
          </div>
          <div className="my-4"></div>
          <div>
            Richard was commissioned as a U.S. Army 2nd Lieutenant in 2008 and
            served in Afghanistan as a logistics officer. There he worked on
            implementing the Afghan Transportation Network which employed local
            Afghan civilian truckers (instead of American military contractors)
            and awarded indegenious groups roughly $2 million in contracts.
          </div>
          <div className="my-4"></div>
          <div>
            Richard&apos;s volunteer work includes assisting Kurdish militias in
            northern Iraq during their war with the Islamic State (ISIS) in 2016
            where he served as an interpreter and drone pilot. More recently
            Richard has been coordinating medical relief efforts in southeastern
            Ukraine. His interests include rapid prototyping, blockchain
            technology, aviation, evolutionary psychology, and persuasion.
          </div>
        </div>
        <center className="link-icon-set">
          <a
            href="https://www.linkedin.com/in/richardburd/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/linkedin.svg`}
              alt={"LinkedIn icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="https://richard-burd.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/home.svg`}
              alt={"Home icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="https://github.com/Richard-Burd"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/github.svg`}
              alt={"GitHub icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="mailto:richard@urbancruiseship.org"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/email.svg`}
              alt={"Email icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          jye
        </div>
        <div className="my-7 standard-font-3 text-justify text-lg">
          <div>
            jye serves as a researcher, assistant webmaster, software developer, and design consultant at Urban Cruise Ship
          </div>
          <div className="my-4"></div>
          <div>
            jye is an artist, performer, environmentalist, and yoga student
          </div>
          <div className="my-4"></div>
          <div>
            more bio is coming soon
          </div>
        </div>
        <center className="link-icon-set">
          <a
            href="https://jyeartstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/home.svg`}
              alt={"Home icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href="mailto:jye@urbancruiseship.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/email.svg`}
              alt={"Email icon"}
              height={50}
              width={100}
            />
          </a>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Roseanne Morgan
        </div>
        <div className="my-7 standard-font-3 text-justify text-lg">
          <div>
            Roseanne Morgan is a new member of Urban Cruise Ship, her bio is coming soon.
          </div>
          <div className="my-4"></div>
          <div>
            
          </div>
          <div className="my-4"></div>
          <div>
        
          </div>
        </div>
        <center className="link-icon-set">
 
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center className="standard-font-1 standard-font-color-1 text-6xl">
          Past Crew
        </center>
        <br></br>
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Andrew Evans
        </div>
        <div className="my-7 standard-font-3 text-justify text-lg">
          <div>
            Andrew Evans was a researcher and exhibit producer with Urban Cruise
            Ship.
          </div>
          <div className="my-4"></div>
          <div>
            Andrew has an MS degree in sociology. He has participated in
            Nashville/Davidson County activities for Recycling Advocates of
            Middle Tennessee.
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Al-Fassi Jones
        </div>
        <div className="my-7 standard-font-3 text-justify text-lg">
          <div>
            Al-Fassi Jones was a part-time researcher and exhibit producer with
            Urban Cruise Ship.
          </div>
          <div className="my-4"></div>
          <div>
            Al has education in accounting and work experience in retail sales.
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
