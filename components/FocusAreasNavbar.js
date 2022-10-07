import Link from "next/link";
import FocusAreaNavbarButton from "./FocusAreaNavbarButton";

const FocusAreasNavbar = (props) => {
  const focusAreas = props.focusAreas;
  return (
    <>
      <nav className="border-b-2 border-gray-300 flex flex-wrap px-2.5">
        {focusAreas.map((focusArea) => (
          <Link
            href={`/${props.site}/${focusArea.focus_area_url}`}
            key={focusArea.focus_area_url}
          >
            <a>
              <FocusAreaNavbarButton
                site={props.site}
                focusAreaName={focusArea.focus_area_name}
              />
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default FocusAreasNavbar;
