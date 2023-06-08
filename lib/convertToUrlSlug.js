const convertToUrlSlug = (text) => {
  return encodeURIComponent(text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
  );
};

export default convertToUrlSlug;