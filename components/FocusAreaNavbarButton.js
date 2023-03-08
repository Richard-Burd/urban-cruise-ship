// import { motion } from "framer-motion"; // currently not in use
import { useRouter } from "next/router";

const FocusAreaNavbarButton = (props) => {
  const router = useRouter();

  return (
    <>
      {/* <motion.div
        initial={{ x: "2vw", scale: 1.1, opacity: 0, rotate: 2 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotate: 0,
          transition: {
            delay: 0.1,
            stiffness: 70,
          },
        }}
        transition={{ duration: 0.5, type: "spring" }}
      > */}
      <div className={router.pathname.endsWith(`/${props.site}/${props.focusAreaURL}`) ? `bg-neutral-700 pt-1 pb-2` : `pt-1 pb-2`}>
        <button
          className={`
            focus-area-navbar-border-width 
            border-current 
            ${props.site}-site-button-color 
            ${props.site}-site-focus-area-button-border-n-font-color 
            focus-area-navbar-elliptical-geometry 
            focus-area-navbar-shadow 
            px-3.5 
            mx-2.5 
            my-1
            standard-font-1 
            hover:-translate-y-1 
            hover:scale-110 
            duration-100 
            active:scale-100 
            tracking-wide
          `}
        >
          {props.focusAreaName}
        </button>
      </div>
      {/* </motion.div> */}
      <style jsx>{`
        .focus-area-navbar-border-width {
          border-width: 1.6px;
        }
        .focus-area-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(0, 0, 0, 0.45);
        }
        .focus-area-navbar-elliptical-geometry {
          border-bottom-left-radius: 33px 14px;
          border-bottom-right-radius: 33px 14px;
          border-top-left-radius: 33px 14px;
          border-top-right-radius: 33px 14px;
        }
      `}</style>
    </>
  );
};

export default FocusAreaNavbarButton;
