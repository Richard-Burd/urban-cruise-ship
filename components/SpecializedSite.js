import Image from "next/image";

const SpecializedSite = (props) => {
  return (
    <>
      <div>This is the specialized site component on the {props.site} site</div>
      <a href={`/${props.site}`}>
        <Image
          src={`/images/specialized-site-buttons/${props.site}.svg`}
          alt={props.site}
          height={300}
          width={460}
        />
      </a>
    </>
  );
};

export default SpecializedSite;
