// This controls the way the logo, title, and subtitle are displayed
// on the pages listed in the very top navbar in the UCS website.
import Image from "next/image";

const NavbarTitleBlock = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <Image
          className="opacity-90"
          src={`/images/ucs-logo.svg`}
          alt={"UCS Logo"}
          height={340}
          width={450}
          priority // https://nextjs.org/docs/basic-features/image-optimization#priority
        />
        <div>
          <div className="standard-font-1">{props.title}</div>
          <div className="standard-font-2">{props.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default NavbarTitleBlock;
