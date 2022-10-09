import Link from "next/link";
import { motion, /* useScroll */ } from "framer-motion"; // useScroll is not currently in use but might be brought back

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
        <div className="bg-amber-200 flex justify-between px-8 pt-2 pb-3 standard-font-1 text-yellow-900 text-lg top-navbar-shadow">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/standards">Standards</Link>
          <Link href="/crew">Crew</Link>
          <Link href="/associations">Associations</Link>
          <Link href="/presentations">Presentations</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/accomplishments">Accomplishments</Link>
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
