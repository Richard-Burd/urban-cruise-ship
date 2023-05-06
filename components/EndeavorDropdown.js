import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const NoSsrAnimatePresence = dynamic(() => import("framer-motion").then((m) => m.AnimatePresence), {
  ssr: false,
});

const EndeavorDropdown = ({ title, children }) => {
  const [isVisible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes(`#${convertToUrlSlug(title)}`)) {
      setVisible(true);
    }
  }, [router.asPath, title]);

  function convertToUrlSlug(text) {
    return encodeURIComponent(
      text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
    );
  }

  const handleDropdownClick = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <div className="endeavor-dropdown" id={convertToUrlSlug(title)}>
        <div className="overflow-hidden pb-8">
          <motion.div onClick={handleDropdownClick}>
            <div className="endeavor-dropdown-color cursor-pointer endeavor-dropdown-elliptical-geometry font-bold relative endeavor-dropdown-shadow-geometry mx-2 sm:mx-16 standard-font-3 text-center hover:text-gray-100 tracking-wider transition text-3xl z-20">
              <div className="p-4">{title}</div>
            </div>
          </motion.div>
        </div>
        <NoSsrAnimatePresence>
          {isVisible && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: "auto", y: 0 },
                collapsed: { height: 0, y: "any-prefer-fixed" },
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className="this-is-the-dropdown-that-needs-to-be-style bg-slate-200 border border-slate-900 mx-2 sm:mx-16 endeavor-dropdown-elliptical-geometry endeavor-dropdown-shadow-geometry -translate-y-24">
                <div className="pt-20">{children}</div>
              </div>
            </motion.div>
          )}
        </NoSsrAnimatePresence>
      </div>
      <style jsx>{`
        .endeavor-dropdown-elliptical-geometry {
          border-bottom-left-radius: 110px 46px;
          border-bottom-right-radius: 110px 46px;
          border-top-left-radius: 110px 46px;
          border-top-right-radius: 110px 46px;
        }
        .endeavor-dropdown-shadow-geometry {
          box-shadow: 4px 6px 6px #86888f;
        }
        .endeavor-dropdown-color {
          background-color: #bfc4cdff;
        }
        .endeavor-dropdown-color:hover {
          background-color: #374151;
        }
      `}</style>
    </>
  );
};

export default EndeavorDropdown;
