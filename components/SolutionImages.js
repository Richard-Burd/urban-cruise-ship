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
    <div className="flex justify-center px-4 pb-4">
      <img src={`${path}/${currentSrc}`} alt={`The image: "${currentSrc}" cannot be found!`} style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default SolutionImages;


// /* This is the old version of the code to be used in case the above ever breaks due to us using HTML as opposed to the react Image. It generates an error with the above code, but suits our needs better. If this breaks, we will need to add custom heights to the images again. */
// // Next.js image container
// import Image from "next/image";

// // We need to track what viewport the user has (useState)
// // We also need to render the correct image on re-render (useEffect)
// import { useState, useEffect } from "react";

// // This is where the images are stored on the ucs-images repository
// export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

// const SolutionImages = ({
//   mobileSrc,
//   desktopSrc,
//   mobileHeight = 350,  // Default height for mobile 'metrics-graphic'
//   mobileWidth = 340,
//   desktopHeight = 340, // Default height for desktop 'metrics-graphic'
//   desktopWidth = 900,
// }) => {
//   // React useState hook to track the user's viewport width
//   const [width, setWidth] = useState(window.innerWidth);

//   // React useState hook to track if there's a desktop image or not
//   // this whole thing crashes if there's no mobile image since we
//   // should take a mobile-first approach
//   const [image, setImage] = useState(desktopSrc);

//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // If there is a mobile image, use it in mobile view
//   // If there is a desktop image, use it in desktop view
//   // If there is no desktop image, use the mobile image in desktop view
//   return (
//     <>
//       <div className="flex justify-center px-4 pb-7">
//         {width < 768 ? (
//           <Image
//             src={`${path}/${mobileSrc}`}
//             alt={`The image: "${mobileSrc}" cannot be found!`}
//             height={mobileHeight}
//             width={mobileWidth}
//           />
//         ) : (
//           <Image
//             src={`${path}/${image}`}
//             alt={`The image: "${desktopSrc}" cannot be found!`}
//             height={desktopHeight}
//             width={desktopWidth}
//             onError={() => {
//               setImage(mobileSrc)
              
//             }}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default SolutionImages;
