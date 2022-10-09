import { motion } from "framer-motion";

const FocusAreaNavbarButton = (props) => {
  return (
    <>
      <motion.div
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
      >
        <button
          className={`focus-area-navbar-border-width border-current ${props.site}-site-button-color ${props.site}-site-focus-area-button-border-n-font-color focus-area-navbar-elliptical-geometry focus-area-navbar-shadow mb-3.5 mt-2.5 px-3.5 mx-2.5 standard-font-1 hover:-translate-y-1 hover:scale-110 duration-100 active:scale-100 tracking-wide`}
        >
          {props.focusAreaName}
        </button>
      </motion.div>
      <style jsx>{`
        .focus-area-navbar-border-width {
          border-width: 1.6px;
        }
        .focus-area-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(150, 150, 150);
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
