// This controls the way the logo, title, and subtitle are displayed
// on the pages listed in the very top navbar in the UCS website.
// This is used on the Home, About, Standards, Crew, Associations,
// & Presentations pages.
import Image from "next/image";

const NavbarTitleBlock = (props) => {
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
        className="lg:pt-16 lg:pb-11 lg:grid grid-cols-2 gap-20 items-center"
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
          <div className="standard-font-1 standard-font-color-1 text-6xl">
            {props.title}
          </div>
          <div className="standard-font-2 standard-font-color-1 text-2xl">
            {props.subtitle}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTitleBlock;
