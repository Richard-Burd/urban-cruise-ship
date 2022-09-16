import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpecializedSiteButton from "../components/SpecializedSiteButton";

export default function Home() {
  return (
    <>
      <Image
        src={`/images/ucs-logo.svg`}
        alt={"UCS Logo"}
        height={300}
        width={510}
      />
      <h1 className="arial-rounded-mt-bold text-6xl text-gray-700">
        Our specialized sites:
      </h1>
      <div className="grid grid-cols-3 gap-x-4">
        <SpecializedSiteButton site={"energy"} />
        <SpecializedSiteButton site={"matter"} />
        <SpecializedSiteButton site={"habitat"} />
        <SpecializedSiteButton site={"cities"} />
        <SpecializedSiteButton site={"waste"} />
        <SpecializedSiteButton site={"oceans"} />
        <SpecializedSiteButton site={"space"} />
        <SpecializedSiteButton site={"costs"} />
        <SpecializedSiteButton site={"history"} />
      </div>
    </>
  );
}
