import Image from "next/image";
import Link from "next/link";
import FocusAreasNavbar from "./FocusAreasNavbar";

const SpecializedSite = (props) => {
  const focusAreas = props.focusAreas;

  return (
    <>
      <FocusAreasNavbar
        focusAreas={focusAreas}
        site={props.site}
      />
      <div className={`${props.site}-background-gradient`}>
        <Image
          src={`/images/specialized-site-buttons/${props.site}.svg`}
          alt={props.site}
          height={300}
          width={460}
          priority
        />

        <Image
          src={`/images/ucs-logo.svg`}
          alt={props.site}
          height={300}
          width={460}
        />

        <div className="standard-font-1 standard-font-color-1 text-2xl">
          Our Focus Areas:
        </div>
        <div>
          {focusAreas.map((focusArea) => (
            <Link
              href={`/${props.site}/${focusArea.focus_area_url}`}
              key={focusArea.focus_area_url}
            >
              <button>
                <h3 className={`${props.site}-focus-area-button-background-color m-2 p-2`}>
                  {focusArea.focus_area_name}
                </h3>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecializedSite;
