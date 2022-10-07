import Image from "next/image";
import Link from "next/link";
import FocusAreasNavbar from "./FocusAreasNavbar";
import SiteDescriptions from "./SiteDescriptions";
import Logos from "./Logos";
import FocusAreaButton from "./FocusAreaButton";

const SpecializedSite = (props) => {
  const focusAreas = props.focusAreas;

  return (
    <>
      <FocusAreasNavbar focusAreas={focusAreas} site={props.site} />
      <div className={`${props.site}-background-gradient pb-8`}>
        <div className="italic p-8 standard-font-3 text-zinc-800 tracking-wide text-6xl">
          <SiteDescriptions siteDescription={props.siteDescription} />
        </div>
        <Logos site={props.site} />
        <div className="standard-font-1 text-5xl text-zinc-700 mb-3">
          Our Focus Areas:
        </div>
        <div className="ml-8">
          {focusAreas.map((focusArea) => (
            <Link
              href={`/${props.site}/${focusArea.focus_area_url}`}
              key={focusArea.focus_area_url}
            >
              <FocusAreaButton
                site={props.site}
                focusAreaName={focusArea.focus_area_name}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecializedSite;
