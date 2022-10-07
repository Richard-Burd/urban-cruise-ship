const FocusAreaNavbarButton = (props) => {
  return (
    <>
      <button
        className={`focus-area-navbar-border-width border-current ${props.site}-site-button-color ${props.site}-site-focus-area-button-border-n-font-color focus-area-navbar-elliptical-geometry focus-area-navbar-shadow mb-3.5 mt-2.5 px-3.5 mx-2.5 standard-font-1 tracking-wide`}
      >
        {props.focusAreaName}
      </button>
      <style jsx>{`
        .focus-area-navbar-border-width {
          border-width: 1.6px;
        }
        .focus-area-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(150, 150, 150);
        }
        .focus-area-navbar-elliptical-geometry {
          border-bottom-left-radius: 33px 14px;
          border-bottom-right-radius: 33px 14px;
          border-top-left-radius: 33px 14px;
          border-top-right-radius: 33px 14px;
        }
      `}</style>
    </>
  );
};

export default FocusAreaNavbarButton;
