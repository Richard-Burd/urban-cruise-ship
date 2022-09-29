import Link from "next/link";

const FocusAreasNavbar = (props) => {
  const focusAreas = props.focusAreas;
  return (
    <>
      <nav>
        {focusAreas.map((focusArea) => (
          <Link
            href={`/${props.site}/${focusArea.focus_area_url}`}
            key={focusArea.focus_area_url}
          >
            <a>
              <button className={`${props.site}-focus-area-button-background-color m-4 p-4`}>{focusArea.focus_area_name}</button>
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default FocusAreasNavbar;
