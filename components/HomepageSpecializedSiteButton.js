import Image from "next/image";

const HomepageSpecializedSiteButton = ({ site }) => {
  return (
    <>
      <a href={`/${site}`}>
        <Image
          src={`/images/specialized-site-buttons/${site}.svg`}
          alt={site}
          height={300}
          width={568}
        />
      </a>
    </>
  );
};

export default HomepageSpecializedSiteButton;
