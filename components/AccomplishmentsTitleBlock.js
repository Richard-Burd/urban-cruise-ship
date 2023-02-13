// This controls the way the logo, title, and subtitle are displayed
// on the Accomplishments page.  The Accomplishments page is the oddball
// among the other pages listed in the site's top yellow navbar because
// the font size and location are slightly different.  All of the other
// pages use the <NavbarTitleBlock.js /> component.
import Image from "next/image";

const AccomplishmentsTitleBlock = (props) => {
  return (
    <>
      <div id="mobile-version" className="mt-2 px-4 lg:px-0">
        <div className="lg:hidden pb-4">
          <div className="standard-font-1 standard-font-color-1 text-3xl">
            {props.title}
          </div>
          <div className="standard-font-2 standard-font-color-1 text-xl">
            {props.subtitle}
          </div>
        </div>

        <div className="lg:hidden">
          <Image
            className="opacity-80"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={173}
            width={449}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
      </div>

      <div
        id="desktop-version"

        // the "gap" in this line below controls the space between the logo
        // and the "Accomplishments" title.
        className="lg:pt-16 lg:pb-11 lg:grid grid-cols-2 items-center"
      >
        <div className="hidden lg:inline">
          <Image
            className="opacity-80"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={173}
            width={449}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
        <div className="hidden lg:inline">
          <div className="standard-font-1 standard-font-color-1 accomplishments-title-block">
            {props.title}
          </div>
          <div className="standard-font-2 standard-font-color-1 text-2xl">
            {props.subtitle}
          </div>
        </div>
      </div>
      <style jsx>{`
        .accomplishments-title-block {
          font-size: 3.75rem;
          transform: translateX(-0.4rem)
        }
      `}</style>
    </>
  );
};

export default AccomplishmentsTitleBlock;
