import Link from "next/link";
import { useRouter } from "next/router";
// import { useState } from "react";                     // currently not in use
import { motion /* useScroll */ } from "framer-motion"; // useScroll() currently not in use

const SpecializedSiteNavbarButton = (props) => {
  // We are using the router to see what the current page is
  const router = useRouter();

  // if the current page matches the site passed down in the props,
  // we get "true"
  // console.log(router.pathname);
  // if (router.pathname == `/${props.site}`) {
  //   console.log(true);
  // }

  // We will track the current page & site passed down in the props
  // by tracking the current state
  // const [isCorrectSite, setCorrectSite] = useState(false);

  // https://www.framer.com/docs/scroll-animations/
  // const { scrollYProgress } = useScroll();

  return (
    <>
      <Link href={`/${props.site}`}>
        <a>
          {/* <motion.div
            initial={{ x: "-20vw", scale: 2, opacity: 0, rotate: -5 }}
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
          <div className={router.pathname.startsWith(`/${props.site}`) ? `bg-neutral-700 px-2 py-2 lg:py-5` : `px-2 py-2 lg:py-5`}>
            <button
              className={`elliptical-geometry ${props.site}-site-button-color ${props.site}-site-button-font-color lg:px-3 lg:py-0.5 specialized-site-navbar-shadow standard-font-1 text-lg tracking-wide transition hover:-translate-y-1 hover:scale-110 duration-100 active:scale-100 uppercase w-full`}
            >
              {props.site}
            </button>
          </div>
          {/* </motion.div> */}
        </a>
      </Link>
      <style jsx>{`
        .specialized-site-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(0, 0, 0, 0.45);
        }
        .elliptical-geometry {
          border-bottom-left-radius: 26px 10px;
          border-bottom-right-radius: 26px 10px;
          border-top-left-radius: 26px 10px;
          border-top-right-radius: 26px 10px;
        }
      `}</style>
    </>
  );
};

export default SpecializedSiteNavbarButton;
