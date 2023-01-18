import Image from "next/image";
import { useState, useEffect } from "react";

// This is where the images are stored on the ucs-images repository
export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

const SolutionImages = ({
  mobileSrc,
  desktopSrc,
  mobileHeight,
  mobileWidth = 340,
  desktopHeight,
  desktopWidth = 900,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  // const [imageSrc, setImageSrc] = React.useState(src);
  const [image, setImage] = useState(desktopSrc);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If there is a mobile image, us it in mobile view
  // If there is a desktop image, use it in desktop view
  // If there is no desktop image, use the mobile image in desktop view
  return (
    <>
      <div className="flex justify-center px-4">
        {width < 768 ? (
          <Image
            src={`${path}/${mobileSrc}`}
            alt={`The image: "${mobileSrc}" cannot be found!`}
            height={mobileHeight}
            width={mobileWidth}
          />
        ) : (
          <Image
            src={`${path}/${image}`}
            alt={`The image: "${desktopSrc}" cannot be found!`}
            height={desktopHeight}
            width={desktopWidth}
            onError={() => {
              setImage(mobileSrc)
              
            }}
          />
        )}
      </div>
    </>
  );
};

export default SolutionImages;
