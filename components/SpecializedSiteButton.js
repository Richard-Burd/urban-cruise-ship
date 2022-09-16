import Image from "next/image";
import Link from "next/link";

const SpecializedSiteButton = (props) => {
  const { site } = props;
  return (
    <>
      <Link href={`/${site}`}>
        <Image
          src={`/images/specialized-site-buttons/${site}.svg`}
          alt={site}
          height={300}
          width={510}
        />
      </Link>
    </>
  );
};

export default SpecializedSiteButton;
