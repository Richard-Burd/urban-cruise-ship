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
        <div className="bg-amber-200 hidden lg:flex justify-between standard-font-1 text-yellow-900 text-lg top-navbar-shadow">
          <Link href="/">
            <a className="duration-100 hover:bg-gray-700 hover:text-gray-100 pl-5 pr-3 pt-2 pb-3 active:bg-gray-900 active:text-gray-200">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={navBarStyles}>About</a>
          </Link>

          <Link href="/standards">
            <a className={navBarStyles}>Standards</a>
          </Link>

          <Link href="/crew">
            <a className={navBarStyles}>Crew</a>
          </Link>

          <Link href="/associations">
            <a className={navBarStyles}>Associations</a>
          </Link>

          <Link href="/presentations">
            <a className={navBarStyles}>Presentations</a>
          </Link>

          <Link href="/publications">
            <a className={navBarStyles}>Publications</a>
          </Link>

          <Link href="/accomplishments">
            <a className="duration-100 hover:bg-gray-700 hover:text-gray-100 pl-5 pr-3 pt-2 pb-3 active:bg-gray-900 active:text-gray-200">
              Accomplishments
            </a>
          </Link>
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
