import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  const [isVisible, setVisible] = useState(false);

  // not used yet, would like to use it to have it "drop-down"
  // when the user scrolls up
  const { scrollYProgress } = useScroll();

  const navBarStyles =
    "active:bg-gray-900 active:text-gray-200 cursor-pointer duration-100 text-zinc-700 hover:bg-gray-700 hover:text-gray-100 px-8 py-1 standard-font-1";

  return (
    <>
      <div className="mobile-top-navbar-shadow">
        <div className="bg-amber-200 flex justify-between standard-font-1 lg:hidden overflow-hidden">
          <Link href="/">
            <a className="duration-100 hover:bg-gray-700 hover:text-gray-100 px-5 pt-2.5 active:bg-gray-900 active:text-gray-200 text-yellow-900 text-lg">
              Home
            </a>
          </Link>
          <motion.div onTap={() => setVisible(!isVisible)}>
            <div className="cursor-pointer pt-1 pr-1">
              <Image
                src={`/images/hamburgerMenuIcon.svg`}
                alt={`hamburger menu icon`}
                height={40}
                width={40}
              />
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
                open: { height: "auto", y: 0, transition: { duration: 0.6 } },
                collapsed: { height: 0, transition: { duration: 0.6 } }, // https://www.framer.com/developers/guides/auto-sizing/
              }}
              className="overflow-hidden"
            >
              <div className="bg-amber-100 border-t-2 border-stone-700 divide-y divide-stone-400">
                <Link href="/about">
                  <div className={navBarStyles}>About</div>
                </Link>
                <Link href="/standards">
                  <div className={navBarStyles}>Standards</div>
                </Link>
                <Link href="/crew">
                  <div className={navBarStyles}>Crew</div>
                </Link>
                <Link href="/associations">
                  <div className={navBarStyles}>Associations</div>
                </Link>
                <Link href="/presentations">
                  <div className={navBarStyles}>Presentations</div>
                </Link>
                <Link href="/publications">
                  <div className={navBarStyles}>Publications</div>
                </Link>
                <Link href="/accomplishments">
                  <div className={navBarStyles}>Accomplishments</div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <style jsx>{`
          .mobile-top-navbar-shadow {
            box-shadow: 8px 8px 4px rgb(150, 150, 150);
          }
        `}</style>
      </div>
    </>
  );
};

export default MobileNavbar;
