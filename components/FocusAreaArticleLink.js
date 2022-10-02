const FocusAreaArticleLink = (props) => {
  // This is a global variable in the ".env.local" file located in the main directory...
  // ...it defines the legacy path to Michael's old version of the UCS Website so that we can
  // use all of his original article files until we import them into the new site
  const legacyPath = `${process.env.NEXT_PUBLIC_LEGACY_UCS_WEBSITE_URL}/${props.site}/${props.focusAreaUrl}`;

  return (
    <>
      <div className={`${props.site}-article-button-font-color standard-font-3 text-2xl`}>
        {props.text}{" "}
        <a
          className="text-blue-600 underline"
          href={props.urlPath}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </div>
    </>
  );
};

export default FocusAreaArticleLink;
