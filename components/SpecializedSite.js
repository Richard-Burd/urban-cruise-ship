import Image from "next/image";
import Link from "next/link";
import FocusAreaNavbar from "./FocusAreaNavbar";
import SiteDescriptions from "./SiteDescriptions";
import Logos from "./Logos";
import FocusAreaButton from "./FocusAreaButton";

const SpecializedSite = (props) => {
  const focusAreas = props.focusAreas;

  return (
    <>
      <FocusAreaNavbar focusAreas={focusAreas} site={props.site} />
      <div className={`${props.site}-background-gradient pb-8`}>
        <div className="italic p-1 standard-font-3 text-zinc-800 tracking-wide text-6xl">
          <SiteDescriptions siteDescription={props.siteDescription} />
        </div>
        <Logos site={props.site} />
        <div className="standard-font-1 text-5xl text-zinc-700 px-4 lg:px-0 mb-3">
          Our Focus Areas:
        </div>
        <div className="grid justify-items-center lg:flex lg:flex-wrap lg:justify-start lg:ml-8 scale-75 lg:scale-100 -translate-x-4 lg:-translate-x-0">
          {focusAreas.map((focusArea) => (
            <div key={focusArea.focus_area_url}>
              <FocusAreaButton
                site={props.site}
                focusAreaName={focusArea.focus_area_name}
                href={`/${props.site}/${focusArea.focus_area_url}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecializedSite;
