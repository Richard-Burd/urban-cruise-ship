import Link from "next/link";
import SpecializedSiteNavBarButton from "./SpecializedSiteNavbarButton";

const SpecializedSiteNavbar = () => {
  const standardSpecializedSiteNavbarValues =
    "elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide";
  return (
    <div className="border-b-2 border-gray-300 flex justify-between px-4 pt-2 pb-3 standard-font-1 text-lg text-black text-opacity-75">
      <SpecializedSiteNavBarButton site={"energy"} />
      <SpecializedSiteNavBarButton site={"matter"} />
      <SpecializedSiteNavBarButton site={"habitat"} />
      <SpecializedSiteNavBarButton site={"cities"} />
      <SpecializedSiteNavBarButton site={"waste"} />
      <SpecializedSiteNavBarButton site={"oceans"} />
      <SpecializedSiteNavBarButton site={"space"} />
      <SpecializedSiteNavBarButton site={"costs"} />
      <SpecializedSiteNavBarButton site={"history"} />
    </div>
  );
};

export default SpecializedSiteNavbar;
