// This controls the way the logo, title, and subtitle are displayed
// on the pages listed in the very top navbar in the UCS website.
import Image from "next/image";

const NavbarTitleBlock = (props) => {
  return (
    <>
      <div className="pt-16 pb-11 grid grid-cols-2 gap-20 items-center">
        <Image
          className="opacity-90"
          src={`/images/ucs-logo.svg`}
          alt={"UCS Logo"}
          height={171}
          width={450}
          priority // https://nextjs.org/docs/basic-features/image-optimization#priority
        />
        <div>
          <div className="standard-font-1 standard-font-color-1 text-6xl">{props.title}</div>
          <div className="standard-font-2 standard-font-color-1 text-2xl">{props.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default NavbarTitleBlock;
