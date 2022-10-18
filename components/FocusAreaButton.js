import Link from "next/link";
import { motion } from "framer-motion";

const FocusAreaButton = (props) => {
  return (
    <>
      <Link href={props.href}>
        <a>
          {/* <motion.div
            initial={{ x: "-2vw", scale: 1.1, opacity: 0, rotate: -2 }}
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
            <button
              className={`border-current focus-area-button-shadow focus-area-button-border-width focus-area-button-elliptical-geometry ${props.site}-site-focus-area-button-border-n-font-color ${props.site}-site-button-color m-3 lg:m-5 py-1 px-8 standard-font-1 hover:scale-105 duration-100 active:scale-100 text-4xl`}
            >
              {props.focusAreaName}
            </button>
          {/* </motion.div> */}
        </a>
      </Link>
      <style jsx>{`
        .focus-area-button-border-width {
          border-width: 2px;
        }
        .focus-area-button-shadow {
          box-shadow: 9px 12px 7px rgb(150, 150, 150);
        }
        .focus-area-button-elliptical-geometry {
          border-bottom-left-radius: 64px 27px;
          border-bottom-right-radius: 64px 27px;
          border-top-left-radius: 64px 27px;
          border-top-right-radius: 64px 27px;
        }
      `}</style>
    </>
  );
};

export default FocusAreaButton;
