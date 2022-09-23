const StandardsContainer = (props) => {
  return (
    <>
      <div className="elliptical-geometry -mb-10">
        <div className="border border-slate-900 standards-page-button-color elliptical-geometry my-4 p-1.5 relative shadow-geometry standard-font-2 text-center text-xl z-20">
          {props.title}
        </div>
        <div className="border border-slate-900 elliptical-geometry pb-4 pt-12 px-8 shadow-geometry standard-font-2 standards-page-panel-height text-lg text-zinc-800 -translate-y-14 z-10">
          {props.content}
        </div>
      </div>
      <style jsx>{`
        .elliptical-geometry {
          border-bottom-left-radius: 67px 21.7px;
          border-bottom-right-radius: 67px 21.7px;
          border-top-left-radius: 67px 21.7px;
          border-top-right-radius: 67px 21.7px;
        }
        .shadow-geometry {
          box-shadow: 4px 6px 6px #3e3e3e;
        }
        .standards-page-button-color {
          background-color: #bfc4cdff;
        }
        .standards-page-panel-height {
            min-height: 80%;
        }
      `}</style>
    </>
  );
};

export default StandardsContainer;
