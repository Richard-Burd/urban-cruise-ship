// In Michael's original JSON files, this was know as the "blurb" section
const SiteDescriptions = (props) => {
  return (
    <>
      <div className={`text-2xl`}>{props.siteDescription}</div>
    </>
  );
};

export default SiteDescriptions;
