import Link from "next/link";
import { motion /* useScroll */ } from "framer-motion"; // useScroll is not currently in use but might be brought back

const navBarStyles =
  "duration-100 hover:bg-gray-700 hover:text-gray-100 px-3 pt-2 pb-3 active:bg-gray-900 active:text-gray-200";

const Navbar = () => {
  // const { scrollYProgress } = useScroll(); // this is not currently in use but might be brought back
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        // animate={{ y: scrollYProgress }} // this should make the navbar sticky but it doesn't for some reason.
        // animate={{ position: "fixed" }} // this works...
        // className="sticky top-0 z-10" // ...so does this TailwindCSS
      >
        <div className="bg-amber-200 flex justify-between standard-font-1 text-yellow-900 text-lg top-navbar-shadow">
          <div className="duration-100 hover:bg-gray-700 hover:text-gray-100 pl-5 pr-3 pt-2 pb-3 active:bg-gray-900 active:text-gray-200">
            <Link href="/">Home</Link>
          </div>
          <div className={navBarStyles}>
            <Link href="/about">About</Link>
          </div>
          <div className={navBarStyles}>
            <Link href="/standards">Standards</Link>
          </div>
          <div className={navBarStyles}>
            <Link href="/crew">Crew</Link>
          </div>
          <div className={navBarStyles}>
            <Link href="/associations">Associations</Link>
          </div>
          <div className={navBarStyles}>
            <Link href="/presentations">Presentations</Link>
          </div>
          <div className={navBarStyles}>
            <Link href="/publications">Publications</Link>
          </div>
          <div className="duration-100 hover:bg-gray-700 hover:text-gray-100 pl-3 pr-5 pt-2 pb-3 active:bg-gray-900 active:text-gray-200">
            <Link href="/accomplishments">Accomplishments</Link>
          </div>
          <style jsx>{`
            .top-navbar-shadow {
              box-shadow: 8px 8px 4px rgb(150, 150, 150);
            }
          `}</style>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
