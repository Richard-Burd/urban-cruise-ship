import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SolutionDropdown = ({ problem, solution, children }) => {
  const [isVisible, setVisible] = useState(false);

  function convertToUrlSlug(text) {
    return encodeURIComponent(text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    );
  }

  return (
    <>
      <div className="solution-dropdown" id={convertToUrlSlug(solution)}>
        <div className="overflow-hidden pb-4">
          <motion.div onTap={() => setVisible(!isVisible)}>
            <div className="solution-dropdown-color cursor-pointer solution-dropdown-elliptical-geometry relative solution-dropdown-shadow-geometry mx-2 sm:mx-16 standard-font-3 text-center hover:text-gray-100 transition text-xl z-20">
              <div className="solution-dropdown-elliptical-geometry">
                <div className="sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3 px-8 md:px-8 py-3 lg:py-1">
                  <div className="sm:col-end-1 lg:col-end-2 font-semibold text-left sm:text-right">
                    Problem:
                  </div>
                  <div className="sm:col-start-1 lg:col-start-2 col-end-4 lg:col-end-7 text-left pb-8 sm:pb-0">
                    {problem}
                  </div>

                  <div className="sm:col-end-1 lg:col-end-2 font-semibold text-left sm:text-right">
                    Solution:
                  </div>
                  <div className="sm:col-start-1 lg:col-start-2 col-end-4 lg:col-end-7 text-left">
                    {solution}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
                duration: 0.2,
              }}
            >
              <div className="this-is-the-dropdown-that-needs-to-be-style bg-slate-100 border border-slate-900 mx-2 sm:mx-16 solution-dropdown-elliptical-geometry solution-dropdown-shadow-geometry -translate-y-20">
                <div className="solution-dropdown pt-20">{children}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        .solution-dropdown-elliptical-geometry {
          border-bottom-left-radius: 84px 38px;
          border-bottom-right-radius: 84px 38px;
          border-top-left-radius: 84px 38px;
          border-top-right-radius: 84px 38px;
        }
        .solution-dropdown-shadow-geometry {
          box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.5);
        }
        .solution-dropdown-color {
          background-color: #bfc4cdff;
        }
        .solution-dropdown-color:hover {
          background-color: #374151;
        }
      `}</style>
    </>
  );
};

export default SolutionDropdown;
