import Link from "next/link";

const SpecializedSiteNavbarButton = (props) => {
  return (
    <>
      <button className={`elliptical-geometry ${props.site}-site-button-color ${props.site}-site-button-font-color mt-4 mb-3 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide uppercase`}>
        <Link href={`/${props.site}`}>{props.site}</Link>
      </button>
      <style jsx>{`
        .specialized-site-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(140, 140, 140);
        }
        .elliptical-geometry {
          border-bottom-left-radius: 26px 10px;
          border-bottom-right-radius: 26px 10px;
          border-top-left-radius: 26px 10px;
          border-top-right-radius: 26px 10px;
        }
      `}</style>
    </>
  );
};

export default SpecializedSiteNavbarButton;
