import Image from "next/image";
import { motion } from "framer-motion";

const HomepageSpecializedSiteButton = ({ site }) => {
  return (
    <>
{/*       <motion.div
        initial={{ x: -40, y: 400, scale: 1.4, opacity: 0, rotate: 10 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotate: 0,
          transition: {
            delay: 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          },
        }}
        whileHover={
          {
            
          }
        }
        whileTap={
          {
            
          }
        }
      > */}
        <div className="transition hover:-translate-y-1 hover:scale-110 duration-300 active:scale-100">
          <a href={`/${site}`}>
            <Image
              src={`/images/specialized-site-buttons/${site}.svg`}
              alt={site}
              height={300}
              width={568}
            />
          </a>
        </div>
      {/* </motion.div> */}
    </>
  );
};

export default HomepageSpecializedSiteButton;
