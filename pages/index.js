import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpecializedSiteButton from "../components/SpecializedSiteButton";
import { useMediaQuery } from "../components/UseMediaQuery";

export default function Home() {
  // https://stackoverflow.com/questions/72238021/how-to-apply-media-query-in-nextjs
  // this is a call to a custom React hook that detects the user's viewport width
  // <--mobile view--> 770px <--tablet view--> 1025px <--desktop view-->
  const mobile = useMediaQuery(770);
  const tablet = useMediaQuery(1025);

  return (
    <>
      <Head>
        <title>Urban Cruise Ship</title>
        <meta name="keywords" content="homepage, landing page" />
      </Head>
      <div className="flex justify-between">
        <Image
          className="opacity-90"
          src={`/images/ucs-logo.svg`}
          alt={"UCS Logo"}
          height={340}
          width={620}
          priority // https://nextjs.org/docs/basic-features/image-optimization#priority
        />
        <div className="pt-32 pr-4 standard-font-1 standard-font-color-1 text-6xl">
          Welcome!
        </div>
      </div>
      <div className="pb-6 standard-font-1 standard-font-color-1 text-6xl">
        Our specialized sites:
      </div>
      {/* <--mobile view--> 770px <--tablet view--> 1025px <--desktop view--> */}
      {/* If the viewport is less than 770px, render mobile option */}
      {/* else if th viewport is less than 1025px, render tablet option */}
      {/* finally, if neither of those conditions are met, render desktop option */}
      <div
        className={
          mobile
            ? "grid grid-cols-1"
            : tablet
            ? "grid grid-cols-2 gap-x-2"
            : "grid grid-cols-3 gap-x-2"
        }
      >
        <SpecializedSiteButton site="energy" />
        <SpecializedSiteButton site="matter" />
        <SpecializedSiteButton site="habitat" />
        <SpecializedSiteButton site="cities" />
        <SpecializedSiteButton site="waste" />
        <SpecializedSiteButton site="oceans" />
        <SpecializedSiteButton site="space" />
        <SpecializedSiteButton site="costs" />
        <SpecializedSiteButton site="history" />
      </div>
    </>
  );
}
