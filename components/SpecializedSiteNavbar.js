import Link from "next/link";
import SpecializedSiteNavbarButton from "./SpecializedSiteNavbarButton";

const SpecializedSiteNavbar = () => {
  return (
    <div className="border-b-2 border-gray-300 grid grid-cols-3 content-start lg:grid:ignore lg:flex lg:justify-between py-3 lg:py-0">
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
