import { useState, useEffect } from "react";

export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

const SolutionImages = ({ mobileSrc, desktopSrc }) => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width === null) {
    return null;
  }

  const isMobile = width < 768;
  const currentSrc = isMobile ? mobileSrc : desktopSrc;

  return (
    <div className="flex justify-center px-4 pb-7">
      <img src={`${path}/${currentSrc}`} alt={`The image: "${currentSrc}" cannot be found!`} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default SolutionImages;
