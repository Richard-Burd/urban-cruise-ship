import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutPageDropdown = (props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <motion.div onTap={() => setVisible(!isVisible)}>
          <div className="about-page-button-color cursor-pointer about-dropdown-elliptical-geometry mr-5 my-4 p-1.5 relative shadow-geometry standard-font-2 text-center hover:text-gray-100 transition text-xl z-20">
            {props.title}
          </div>
        </motion.div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: "auto", y: 0 },
                collapsed: { height: 0, y: "any-prefer-fixed" }, // https://www.framer.com/developers/guides/auto-sizing/
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <div className="border border-slate-900 about-dropdown-elliptical-geometry mr-5 pb-5 pt-14 px-8 relative shadow-geometry text-justify -translate-y-14 z-10">
                {props.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        .about-dropdown-elliptical-geometry {
          border-bottom-left-radius: 60px 21px;
          border-bottom-right-radius: 60px 21px;
          border-top-left-radius: 60px 21px;
          border-top-right-radius: 60px 21px;
        }
        .shadow-geometry {
          box-shadow: 4px 6px 6px #86888f;
        }
        .about-page-button-color {
          background-color: #bfc4cdff;
        }
        .about-page-button-color:hover {
          background-color: #374151;
        }
      `}</style>
    </>
  );
};

export default AboutPageDropdown;