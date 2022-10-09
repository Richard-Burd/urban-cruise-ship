import Image from "next/image";

const StandardsContainer = (props) => {
  return (
    <>
      <div className="standards-page-elliptical-geometry -mb-12">
        <div className="border border-slate-900 standards-page-button-color standards-page-elliptical-geometry my-4 p-1.5 relative shadow-geometry z-20">
          <div className="flex items-center justify-center text-zinc-900">
            <Image
              src={`/images/checkmark.svg`}
              alt={`a checkmark`}
              height={20}
              width={30}
            />
            <div className="standard-font-2 text-center text-xl">{props.title}</div>
          </div>
        </div>

        <div className="border border-slate-900 standards-page-elliptical-geometry pt-12 px-8 shadow-geometry standard-font-2 standards-page-panel-height text-lg text-zinc-800 -translate-y-14 z-10">
          {props.content}
        </div>
      </div>
      <style jsx>{`
        .standards-page-elliptical-geometry {
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
