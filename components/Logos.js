import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Logos = (props) => {
  // We'll use Next.js's router to get the current page's path
  const router = useRouter();

  // First, we'll see if the current page is a specialized site or a subdirectory
  // of a specialized site.
  const isASubDirectory = router.pathname.includes(`/${props.site}/`);

  // If the current page is a subdirectory of a specialized site, the
  // specialized site's logo will be an active button with a link and motion
  // ...these will be spelled out in the TailwindCSS code

  // If the current page is site homepage, then the specialized site's logo
  // will just be an image with no user interactions.

  // below we will use the ternary operator to determine which logo to render

  return (
    <>
      <nav className="md:flex md:justify-between ml-4 mr-2 md:mx-8 md:overflow-visible">
        {isASubDirectory ? (
          <div className="active:scale-100 transition hover:-translate-y-1 hover:scale-105 duration-200">
            <a href={`/${props.site}`}>
              <Image
                src={`/images/specialized-site-buttons/${props.site}.svg`}
                alt={props.site}
                height={270}
                width={410}
                priority
              />
            </a>
          </div>
        ) : (
          <div>
            <a>
              <Image
                src={`/images/specialized-site-buttons/${props.site}.svg`}
                alt={props.site}
                height={270}
                width={410}
                priority
              />
            </a>
          </div>
        )}

        <div className="mr-2">
          <Image
            className={`opacity-80`}
            src={`/images/ucs-logo.svg`}
            alt={props.site}
            height={240}
            width={480}
          />
        </div>
      </nav>
    </>
  );
};

export default Logos;

/*

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Logos = (props) => {
  // We'll use Next.js's router to get the current page's path
  const router = useRouter();

  // First, we'll see if the current page is a specialized site or a subdirectory
  // of a specialized site.
  const isASubDirectory = router.pathname.includes(`/${props.site}/`);

  // If the current page is a subdirectory of a specialized site, the
  // specialized site's logo will be an active button with a link and motion
  // ...these will be spelled out in the TailwindCSS code

  // If the current page is site homepage, then the specialized site's logo
  // will just be an image with no user interactions.

  // below we will use the ternary operator to determine which logo to render

  return (
    <>
      <nav className="flex justify-between mx-8 overflow-visible">
        {isASubDirectory ? (
          <motion.div
            initial={{ x: -400, y: 10, scale: 1.4, opacity: 0, rotate: 3 }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="active:scale-100 transition hover:-translate-y-1 hover:scale-105 duration-200">
              <a href={`/${props.site}`}>
                <Image
                  src={`/images/specialized-site-buttons/${props.site}.svg`}
                  alt={props.site}
                  height={270}
                  width={410}
                  priority
                />
              </a>
            </div>
          </motion.div>
        ) : (
          <div>
            <a>
              <Image
                src={`/images/specialized-site-buttons/${props.site}.svg`}
                alt={props.site}
                height={270}
                width={410}
                priority
              />
            </a>
          </div>
        )}

        <div className="mr-2">
          <Image
            className={`opacity-80`}
            src={`/images/ucs-logo.svg`}
            alt={props.site}
            height={240}
            width={480}
          />
        </div>
      </nav>
    </>
  );
};

export default Logos;

*/
