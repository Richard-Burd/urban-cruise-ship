// Next.js image container
import Image from "next/image";

// We need to track what viewport the user has (useState)
// We also need to render the correct image on re-render (useEffect)
import { useState, useEffect } from "react";

// This is where the images are stored on the ucs-images repository
export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

const SolutionImages = ({
  mobileSrc,
  desktopSrc,
  mobileHeight = 500,  // Default height for mobile 'metrics-graphic'
  mobileWidth = 340,
  desktopHeight = 300, // Default height for desktop 'metrics-graphic'
  desktopWidth = 900,
}) => {
  // React useState hook to track the user's viewport width
  const [width, setWidth] = useState(window.innerWidth);

  // React useState hook to track if there's a desktop image or not
  // this whole thing crashes if there's no mobile image since we
  // should take a mobile-first approach
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
      <div className="flex justify-center px-4 pb-7">
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
