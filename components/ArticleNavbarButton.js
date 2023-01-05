import { motion } from "framer-motion"; // currently not in use
import { useRouter } from "next/router";

const ArticleNavbarButton = (props) => {
  const router = useRouter();

  const longClasses = `
    article-navbar-elliptical-geometry 
    article-navbar-height article-navbar-shadow 
    ${props.site}-article-button-background-color 
    ${props.site}-article-button-font-color 
    p-1 
    standard-font-1 
    text-xs 
    md:text-base 
    text-center 
    hover:-translate-y-1 
    hover:scale-110 
    my-1 
    duration-100 
    active:scale-100 
    lg:tracking-wide 
    w-full
  `;

  const longClassesSelected = `
    article-navbar-elliptical-geometry 
    article-navbar-height article-navbar-shadow 
    bg-neutral-700
    text-neutral-100
    p-1 
    standard-font-1 
    text-xs 
    md:text-base 
    text-center 
    hover:-translate-y-1 
    hover:scale-110 
    my-1 
    duration-100 
    active:scale-100 
    lg:tracking-wide 
    w-full
  `;
  
  return (
    <>
      {/* <motion.div
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
      > */}
      <div className={
        router.pathname.startsWith(
          `/${props.site}/${props.focusAreaUrl}/${props.articleUrl}`
        ) ? 
          `this-is-where-the-'bg-neutral-700'-background-color-would-go` 
          : ``
      }>
        <div className="pb-1.5">
          <button className={
            router.pathname.startsWith(
              `/${props.site}/${props.focusAreaUrl}/${props.articleUrl}`
            ) ? longClassesSelected : longClasses
          }>
            {props.articleTitle}
          </button>
        </div>
      </div>
      {/* </motion.div> */}
      <style jsx>{`
        .article-navbar-height {
          height: 47px;
          line-height: .95rem;
          padding-bottom: 6px
        }
        .article-navbar-shadow {
          box-shadow: 5px 6px 4px rgb(0, 0, 0, 0.45);
        }
        .article-navbar-elliptical-geometry {
          border-bottom-left-radius: 30px 10px;
          border-bottom-right-radius: 30px 10px;
          border-top-left-radius: 30px 10px;
          border-top-right-radius: 30px 10px;
        }
      `}</style>
    </>
  );
};

export default ArticleNavbarButton;
