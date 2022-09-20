import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutPageDropdown = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <div className="elliptical-geometry overflow-hidden w-1/2 z-0">
        <motion.div onTap={() => setVisible(!isVisible)}>
          <div className="bg-slate-400 cursor-pointer elliptical-geometry p-2 relative text-center text-2xl w-full z-20">
            This is a dropdown box using Framermotion
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
                duration: 0.8,
              }}
            >
              <div className="bg-slate-300 elliptical-geometry pt-12 relative -translate-y-11 z-10">
                <p className="p-4 text-base">
                  This is the Panel, there is some text inside of it just to
                  fill up some space for testing purposes...This is a really
                  long piece of text, it needs to be in order to see the
                  dropdown that is supposed to happen
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        .elliptical-geometry {
          border-bottom-left-radius: 70px 25px;
          border-bottom-right-radius: 70px 25px;
          border-top-left-radius: 70px 25px;
          border-top-right-radius: 70px 25px;
        }
      `}</style>
    </>
  );
};

export default AboutPageDropdown;
