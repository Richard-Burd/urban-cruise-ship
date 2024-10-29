import Head from "next/head";
import NavbarTitleBlock from "../components/NavbarTitleBlock";
import Image from "next/image";
export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

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
            Michael is a 2014 fellow in East-West: The Art of Dialogue, a
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
          <div className="my-4"></div>
          <div>
            Michael maintains a{" "}
            <a href="https://goff.substack.com/">weekly blog at Substack</a>,
            where he writes about environmental and related issues.
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
              src={`/images/external-link-icons/x.svg`}
              alt={"X icon"}
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
            standards, human resources, and development for Urban Cruise Ship.
            Unique creations of his include the name, logo, most yellow navbar
            compositions, button styling,{" "}
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
            ,{" "}
            <a
              href={`${path}/energy_production_forecast.pdf`}
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>trajectory-based energy forecasts</i>
              </b>
            </a>
            , and{" "}
            <a
              href="https://www.urbanfootnotes.com"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>Urban Foot Notes</i>
              </b>
            </a>
            .
          </div>
          <div className="my-4"></div>
          <div>
            Since 1975, John has been a designer, draftsman and illustrator in
            the fields of architecture, landscape architecture, civil
            engineering and planning, which have included some interior and
            graphic design, and structural, mechanical, plumbing, and electrical
            drawings. A variety of health-threatening factory work and odd jobs
            brought sensitivity toward work opportunity and safety.
          </div>
          <div className="my-4"></div>
          <div>
            After working through other organizations, John has been President
            of{" "}
            <a
              href="https://www.ramtn.org/"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>Recycling Advocates of Middle Tennessee</i>
              </b>
            </a>{" "}
            since 1992. Its website lists{" "}
            <a
              href="https://www.ramtn.org/successes/longer-history"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>23 significant accomplishments</i>
              </b>
            </a>
            , among them ones unique to the U.S. and world. Achieving{" "}
            <a
              href="https://www.ramtn.org/studies/zero-waste"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>zero-waste</i>
              </b>
            </a>{" "}
            is described. Many{" "}
            <a
              href="https://www.ramtn.org/outreach/handouts"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>handouts</i>
              </b>
            </a>
            . Extensive regulatory and compliance work. Display of all
            documents, with captions, is not yet complete.
          </div>
          <div className="my-4"></div>
          <div>
            John&apos;s advocacy has also included health care, peace, third
            party and bioregional politics, mass transit, scenery preservation
            and billboards, economic disparity, and human and animal rights. His
            methods, successes, and personal lifestyle led to profiles in two
            newspapers, two magazines, a 2004 documentary{" "}
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
            among the 5% of their listees Marquis has given a “Lifetime
            Achievement Award” to.
          </div>
          <div className="my-4"></div>
          <div>
            Hobbies: gardening, cartooning, and triathlon training. Studies:
            nature, history, perception, and choice. Strengths: circumspection,
            visualization, prioritization, and willingness to change and be
            unusual. Has: Asperger&apos;s syndrome and no car. Is: nocturnal and
            vegan. Likes: compact personal living space, preserving natural
            habitat, appropriate architecture, beauty, kindness, and creating
            unique, useful, and high-quality whatever. Hates: urban sprawl,
            waste, dishonesty, hypocrisy, cruelty, and opposition without
            supporting better viable alternatives.
          </div>
        </div>
        <center className="link-icon-set">
          <a
            href={`https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-684.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/recycle.svg`}
              alt={"recycle icon"}
              height={50}
              width={100}
            />
          </a>
          <a
            href={`https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-685.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/doc.svg`}
              alt={"Document icon"}
              height={50}
              width={100}
            />
          </a>
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
            and Vegfest Coordinator. Lee is a certified Holistic Wellness
            Counselor, Yoga and Tai Chi Instructor, and Reiki Practitioner. He
            also teaches meditation and dream interpretation based on his own
            training in metaphysics. Lee has also studied and endeavors
            continual practice of Non-violent Communication.
          </div>
          <div className="my-4"></div>
          <div>
            Lee currently lives in Lansing, Michigan with his wife and two sons.
            He has been an ethical vegan since January 2014. Lee was recruited
            by Urban Cruise Ship after his August 2018 presentation at a Vegan
            Peace meeting in Nashville, Tennessee. In February of 2019 Lee was
            elected to serve on the Board of Trustees of the Unity Spiritual
            Center of Lansing. In the fall of 2020 Lee graduated from the
            Lansing Citizens Academy, a program to learn about local government
            and the role of citizen involvement. Lee teaches yoga and tai chi at
            a local YMCA and enjoys seeing his students learn and grow through
            practice. Lee has always had a love for environmentalism and also
            enjoys trail running, yoga, tai chi, calisthenics, hiking,
            gardening, and reading.
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
            href="https://twitter.com/Richard_A_Burd"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
              src={`/images/external-link-icons/x.svg`}
              alt={"X icon"}
              height={50}
              width={100}
            />
          </a>
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
          Jye
        </div>
        <div className={crewDescriptionTestLayoutStyles}>
          <div>
            Jye serves as a graphic designer, researcher, and design consultant
            at Urban Cruise Ship. Some notable contributions include dynamic
            graphic-generating interactive tables on the History site, automated
            standardized estimates graphics for solutions, and concept
            distillation and search automation for Urban Foot Notes.
          </div>
          <div className="my-4"></div>
          <div>
            They are a non-binary artist and performer. Curiously-themed parties
            are a specialty. Their friends network includes many societal
            minorities. Multiple spectra are represented. Five years of college
            served an educational, not credentialing, purpose. Hobbies include
            gaming, history, architectural exploration and hiking. D&D played
            well. Trains, castles, cathedrals, old forests, mountains loved.
            Fairies too.
          </div>
          <div className="my-4"></div>
          <div>
            They consider themselves a yoga student, and environmentalist. They
            hope to learn more, to grow, and are always looking for ways to do
            both. Their webpage is below if you wish to see a sampling of their
            art.
          </div>
        </div>
        <center className="link-icon-set">
          <a
            href="https://instagram.com/jye.art.studio/"
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
            href="mailto:jye.art.studio@gmail.com"
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
          David Cater
        </div>
        <div className={crewDescriptionTestLayoutStyles}>
          <div>
            is a Legal Researcher with Urban Cruise Ship, and is working to
            produce complete address reports for its Urban Foot Notes project.
          </div>
          <div className="my-4"></div>
          <div>
            David has spent over a decade as a Legal Assistant. A graduate of
            Middle Tennessee State University with a degree in Business
            Administration, he brings a strong understanding of both legal
            processes and business operations.
          </div>
          <div className="my-4"></div>
          <div>
            Outside of work, he enjoys spending quality time with his family,
            collecting coins, playing video games, and immersing himself in
            music. You can find David and his family at farmer&apos;s markets
            and other events, where his spouse sells handmade jewelry and other
            accessories. As a father from a young age, David values the
            importance of balance, believing that a healthy work/life routine is
            key to long-term success and fulfillment.
          </div>
          <div>
            David&apos;s desire to do work for Urban Cruise Ship grew out of his
            friendships with Crew members Jye and John. He attended themed
            get-togethers organized by Jye for variously disenfranchised (and
            some accepted) members of the community. One evening, Jye screened
            the documentary{" "}
            <a
              href="https://www.imdb.com/title/tt1863278/"
              target="_blank"
              rel="noreferrer"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-900 transition"
            >
              <strong>
                <i>“Immaterial John,”</i>
              </strong>
            </a>{" "}
            to highlight one crew member&apos;s unusual path to success.
          </div>
          <div>
            David&apos;s volunteer activities also include assisting with a
            widely-known, established organization in Nashville, Tennessee that
            helps individuals experiencing homelessness. There are prior
            connections, as Urban Cruise Ship&apos;s John and Andrew have both
            experienced multiple periods of homelessness themselves.
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="crew-member-custom-text-size standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2 standard-font-color-1">
          Roseanne Morgan
        </div>
        <div className="my-7 standard-font-3 text-justify text-lg">
          <div>
            Roseanne Morgan is a new member of Urban Cruise Ship, her bio is
            coming soon.
          </div>
          <div className="my-4"></div>
          <div></div>
          <div className="my-4"></div>
          <div></div>
        </div>
        <center className="link-icon-set"></center>
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
