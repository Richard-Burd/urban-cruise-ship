import { motion } from "framer-motion";

const ArticleButton = (props) => {
  return (
    <>
      {/* <motion.div
        initial={{ x: "2vw", scaleX: 0.8, opacity: 0, rotate: 2 }}
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
      > */}
        <button
          className={`${props.site}-article-button-background-color ${props.site}-article-button-font-color article-button-shadow m-4 px-4 py-2 rounded-2xl standard-font-1 text-3xl text-center hover:-translate-y-1 hover:scale-110 duration-100 active:scale-100`}
        >
          {props.articleTitle}
          {props.articleTitleTwo && <div>{props.articleTitleTwo}</div>}
        </button>
      {/* </motion.div> */}
      <style jsx>{`
        .article-button-shadow {
          box-shadow: 7px 14px 12px rgb(120, 120, 120);
        }
      `}</style>
    </>
  );
};

export default ArticleButton;
