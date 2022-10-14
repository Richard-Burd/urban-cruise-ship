import Head from "next/head";
import Image from "next/image";
import NavbarTitleBlock from "../components/NavbarTitleBlock";
import StandardsContainer from "../components/StandardsContainer";

const Standards = () => {
  const standardsGridStyles =
    "md:grid grid-cols-1 md:grid-ignore max-w-sm md:max-w-none md:grid-cols-2 lg:grid-cols-3 gap-8";

  return (
    <>
      <Head>
        <title>UCS Standards</title>
        <meta
          name="keywords"
          content="standards, graphic standards, convention, criteria principles"
        />
      </Head>
      <div>
        <NavbarTitleBlock
          title={"Our Standards"}
          subtitle={
            "Urban Cruise Ship operates according to the following principles:"
          }
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="standard-font-1 border-b-2 border-zinc-700 -mb-2 standard-font-color-1 text-3xl">
          Content
        </div>
        <div className="flex justify-center">
          <div className={standardsGridStyles}>
            <StandardsContainer
              title={`Data-Driven`}
              content={
                <>
                  <div className="">
                    Our work is driven by data and science, not ideology,
                    opinion, and special interest
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Unconflicted`}
              content={
                <>
                  <div className="">
                    Urban Cruise Ship does not accept funding from corporate
                    entities which might skew our findings.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Revelatory`}
              content={
                <>
                  <div className="">
                    We reveal what ought to be known -- not necessarily what is
                    expected.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Comprehensive`}
              content={
                <>
                  <div className="">
                    Urban Cruise Ship analyzes the issues from engineering,
                    economic, social, and political perspectives.
                    Comprehensiveness should increase the likelihood that
                    solutions will be workable.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Effective`}
              content={
                <>
                  <div className="">
                    Urban Cruise Ship seeks to provide for policymakers,
                    business leaders, and individuals the most relevant and
                    effective solutions to today&apos;s most pressing ecological
                    challenges.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`ِApplicable`}
              content={
                <>
                  <div className="">
                    Widespread applicability is sought. Appropriate exceptions
                    should be clearly noted.
                  </div>
                </>
              }
            />
          </div>
        </div>
        <div className="standard-font-1 border-b-2 border-zinc-700 mt-24 -mb-2 standard-font-color-1 text-3xl">
          Content/Presentation
        </div>
        <div className="flex justify-center">
          <div className={standardsGridStyles}>
            <StandardsContainer
              title={`Concise `}
              content={
                <>
                  <div className="">
                    To prevent important facts from being buried or obscured,
                    Urban Cruise Ship presents only essential material. Links
                    are provided for further detail.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`On Point`}
              content={
                <>
                  <div className="">
                    To encourage reading the entire website, content is
                    topically limited. Further worthy material belongs on
                    separate web sites.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Self-motivated`}
              content={
                <>
                  <div className="">
                    As this guides Urban Cruise Ship&apos;s future direction
                    foremost, there is internal motivation to get it right and
                    save readers time.
                  </div>
                </>
              }
            />
          </div>
        </div>
        <div className="standard-font-1 border-b-2 border-zinc-700 mt-24 -mb-2 standard-font-color-1 text-3xl">
          Presentation
        </div>
        <div className="flex justify-center">
          <div className={standardsGridStyles}>
            <StandardsContainer
              title={`Readable`}
              content={
                <>
                  <div className="">
                    Urban Cruise Ship recognizes the importance of using correct
                    terminology, but also in making our findings understandable
                    to the widest possible audience.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Summary-led `}
              content={
                <>
                  <div className="">
                    To help the most readers, where possible, summary material
                    is placed first, ahead of more detailed background material
                    supporting it.{" "}
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Graphic`}
              content={
                <>
                  <div className="">
                    Where possible, metrics are portrayed graphically,
                    accompanied by numbers.{" "}
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Non-Color Dependent`}
              content={
                <>
                  <div className="">
                    To be most versatile, where possible, graphics are composed
                    well enough that color is not required.{" "}
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Substantive `}
              content={
                <>
                  <div className="">
                    Content quality must always exceed presentation polish.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`No Greenwashing`}
              content={
                <>
                  <div className="">
                    Profuse flowery / leafy / heartwarming images and jargon are
                    associated with so many polluting companies and
                    underperforming organizations that we avoid using them&nbsp;
                    Let readers judge quality based on content.
                  </div>
                </>
              }
            />
          </div>
        </div>
        <div className="standard-font-1 border-b-2 border-zinc-700 mt-24 -mb-2 standard-font-color-1 text-3xl">
          Reference
        </div>
        <div className="flex justify-center">
          <div className={standardsGridStyles}>
            <StandardsContainer
              title={`Footnoted`}
              content={
                <>
                  <div className="">
                    Cursor-activated reference appearance saves readers&apos;
                    time.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Referenced`}
              content={
                <>
                  <div className="">
                    Fully. This also gives Urban Cruise Ship grounds for
                    insisting proper credit is given to us in return.
                  </div>
                </>
              }
            />
            <StandardsContainer
              title={`Copyrighted`}
              content={
                <>
                  <div className="">
                    Urban Cruise Ship wants to be able to prevent misuse or
                    misrepresentation of its material.
                  </div>
                </>
              }
            />
            <div className="my-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Standards;
