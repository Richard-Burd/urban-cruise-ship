import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpecializedSiteButton from "../components/SpecializedSiteButton";
import { useMediaQuery } from "../components/UseMediaQuery";

export default function Home() {
  // https://stackoverflow.com/questions/72238021/how-to-apply-media-query-in-nextjs
  // this is a call to a custom React hook that detects the user's viewport width
  // the 'matches' value will return true or false
  // the mobile rendering settings will be displayed using a ternary operator
  const matches = useMediaQuery(768);
  // this should be deleted once the ternary operator is working
  console.log(matches)
  return (
    <>
      <div className="flex justify-between">
        <Image
          src={`/images/ucs-logo.svg`}
          alt={"UCS Logo"}
          height={300}
          width={510}
        />
        <div className="arial-rounded-mt-bold text-6xl text-gray-700">
          Welcome!
        </div>
      </div>
      <h1 className="arial-rounded-mt-bold text-6xl text-gray-700">
        Our specialized sites:
      </h1>
      <div className="grid grid-cols-3 gap-x-4">
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
