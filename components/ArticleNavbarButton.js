import { motion } from "framer-motion";

const ArticleNavbarButton = (props) => {
  return (
    <>
      <motion.div
        initial={{ x: "-2vw", scaleX: 0.3, opacity: 0, rotate: -2 }}
        animate={{
          x: 0,
          y: 0,
          scaleX: 1,
          opacity: 1,
          rotate: 0,
          transition: {
            delay: 0.1,
            stiffness: 70,
          },
        }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="pb-1.5">
          <button
            className={`article-navbar-elliptical-geometry article-navbar-height article-navbar-shadow ${props.site}-article-button-background-color ${props.site}-article-button-font-color p-1 standard-font-1 text-xs md:text-base text-center hover:-translate-y-1 hover:scale-110 my-1 duration-100 active:scale-100 lg:tracking-wide w-full`}
          >
            {props.articleTitle}
          </button>
        </div>
      </motion.div>
      <style jsx>{`
        .article-navbar-height {
          height: 55px;
        }
        .article-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(150, 150, 150);
        }
        .article-navbar-elliptical-geometry {
          border-bottom-left-radius: 33px 14px;
          border-bottom-right-radius: 33px 14px;
          border-top-left-radius: 33px 14px;
          border-top-right-radius: 33px 14px;
        }
      `}</style>
    </>
  );
};

export default ArticleNavbarButton;
