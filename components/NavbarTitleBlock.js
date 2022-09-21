// This controls the way the logo, title, and subtitle are displayed
// on the pages listed in the very top navbar in the UCS website.
import Image from "next/image";

const NavbarTitleBlock = (props) => {
  return (
    <>
      <div>
        <Image
          className="opacity-90"
          src={`/images/ucs-logo.svg`}
          alt={"UCS Logo"}
          height={340}
          width={620}
          priority // https://nextjs.org/docs/basic-features/image-optimization#priority
        />
        <div>{props.title}</div>
        <div>
          <div>{props.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default NavbarTitleBlock;
