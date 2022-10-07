import Image from "next/image";

const Logos = (props) => {
  return (
    <>
      <nav className="flex justify-between mx-8">
        <div className="">
          <Image
            src={`/images/specialized-site-buttons/${props.site}.svg`}
            alt={props.site}
            height={270}
            width={410}
            priority
          />
        </div>
        <div className="mr-2">
          <Image
            src={`/images/ucs-logo.svg`}
            alt={props.site}
            height={240}
            width={480}
          />
        </div>
      </nav>
    </>
  );
};

export default Logos;
