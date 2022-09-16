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
      <div className="flex justify-between">
        <Image
          src={`/images/ucs-logo.svg`}
          alt={"UCS Logo"}
          height={300}
          width={510}
        />
        <div className="arial-rounded-mt-bold pt-32 text-6xl text-gray-700">
          Welcome!
        </div>
      </div>
      <h1 className="arial-rounded-mt-bold sites-intro-font-size text-gray-700">
        Our specialized sites:
      </h1>
      {/* <--mobile view--> 770px <--tablet view--> 1025px <--desktop view--> */}
      {/* If the viewport is less than 770px, render mobile option */}
      {/* else if th viewport is less than 1025px, render tablet option */}
      {/* finally, if neither of those conditions are met, render desktop option */}
      <div
        className={
          mobile
            ? "grid grid-cols-1 gap-x-4" 
            : tablet
            ? "grid grid-cols-2 gap-x-4"
            : "grid grid-cols-3 gap-x-4"
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
