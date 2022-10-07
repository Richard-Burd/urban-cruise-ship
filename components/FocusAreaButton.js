const FocusAreaButton = (props) => {
  return (
    <>
      <button
        className={`border-current focus-area-button-shadow focus-area-button-border-width focus-area-button-elliptical-geometry ${props.site}-site-focus-area-button-border-n-font-color ${props.site}-site-button-color m-5 py-1 px-8 standard-font-1 text-4xl`}
      >
        {props.focusAreaName}
      </button>
      <style jsx>{`
        .focus-area-button-border-width {
          border-width: 2px;
        }
        .focus-area-button-shadow {
          box-shadow: 9px 12px 7px rgb(150, 150, 150);
        }
        .focus-area-button-elliptical-geometry {
          border-bottom-left-radius: 64px 27px;
          border-bottom-right-radius: 64px 27px;
          border-top-left-radius: 64px 27px;
          border-top-right-radius: 64px 27px;
        }
      `}</style>
    </>
  );
};

export default FocusAreaButton;
