import Image from "next/image";

const Logos = (props) => {
  return (
    <>
      <Image
        src={`/images/specialized-site-buttons/${props.site}.svg`}
        alt={props.site}
        height={300}
        width={460}
        priority
      />

      <Image
        src={`/images/ucs-logo.svg`}
        alt={props.site}
        height={300}
        width={460}
      />
    </>
  );
};

export default Logos;
