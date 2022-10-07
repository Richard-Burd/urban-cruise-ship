import Link from "next/link";
import SpecializedSiteNavbarButton from "./SpecializedSiteNavbarButton";

const SpecializedSiteNavbar = () => {
  return (
    <div className="border-b-2 border-gray-300 flex justify-between px-4 pt-2 pb-3 standard-font-1 text-lg text-black text-opacity-75">
      <SpecializedSiteNavbarButton site={"energy"} />
      <SpecializedSiteNavbarButton site={"matter"} />
      <SpecializedSiteNavbarButton site={"habitat"} />
      <SpecializedSiteNavbarButton site={"cities"} />
      <SpecializedSiteNavbarButton site={"waste"} />
      <SpecializedSiteNavbarButton site={"oceans"} />
      <SpecializedSiteNavbarButton site={"space"} />
      <SpecializedSiteNavbarButton site={"costs"} />
      <SpecializedSiteNavbarButton site={"history"} />
    </div>
  );
};

export default SpecializedSiteNavbar;
