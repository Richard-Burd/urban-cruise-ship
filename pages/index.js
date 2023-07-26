import Head from "next/head";
import Image from "next/image";
// This is the default Next.js styles file:
// import styles from "../styles/Home.module.css";
// ...but this app uses TailwindCSS instead.
import HomepageSpecializedSiteButton from "../components/HomepageSpecializedSiteButton";

// This tracks how many visitors come to the webpage
// https://vercel.com/docs/concepts/analytics/audiences/quickstart
import { Analytics } from "@vercel/analytics/react";
export const path = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Cruise Ship</title>
        <meta name="keywords" content="homepage, landing page" />
      </Head>
      {/* <div className="lg:hidden pl-4 pt-1 standard-font-1 standard-font-color-1 text-4xl">
        Welcome!
      </div> */}
      

      <div className="flex justify-between">
        <div className="hidden lg:block mt-8 relative"> {/* relative positioned container */}
          
          {/* This is the header text you want to add */}
          <div
            style={{
              position: 'absolute',
              top: '0%', // adjust these values
              right: '-0.5%',
              color: '#4c4c4c', // choose appropriate color
              fontFamily: "Arial Rounded MT Bold",
              fontSize: '3.95rem', // adjust as needed
              letterSpacing: '0.02em',
              fontWeight: 'normal', // optional
              zIndex: 2, //higher index to ensure placement above svg
            }}
          >
            Our Mission
          </div>
          <div
            style={{
              position: 'absolute',
              top: '19%', // adjust these values
              left: '66.5%', // adjust these values
              color: '#4c4c4c', // choose appropriate color
              fontFamily: 'Roboto',
              fontSize: '1.5rem', // adjust as needed
              lineHeight: '1.3', //controls spacing between word wrapped lines
              fontWeight: 'normal', // optional
              zIndex: 2, // higher index to ensure placement above svg
              maxWidth: '39%', // set max-width for text wrapping
              padding: '0px', // optional padding around text
              whiteSpace: 'normal', // ensure text can wrap
              wordWrap: 'break-word', // allow words to be broken if necessary to prevent overflow
              textAlign: 'justify'
            }}
          >
            Enabling informed choices through comparative analysis of 
            <Link href="/history/solutions/benefit-minus-cost"><a style={{ color: '#6699cc', textDecoration: 'underline' }}> environmental solutions</a></Link> 
            {' '}along-side historic human{' '}<Link href="/history/solutions-and-endeavors/benefit-minus-cost"><a style={{ color: '#6699cc', textDecoration: 'underline' }}>endeavors </a></Link>

              
          </div>
          <div className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '-10%', // adjust these values
              left: '0%', // adjust these values
            }}       
          >
            <Image
              className="opacity-70"
              src={`/images/ucs-logo.svg`}
              alt={"UCS Logo"}
              height={340}
              width={620}
              priority // https://nextjs.org/docs/basic-features/image-optimization#priority
            />
          </div>
          {/* The SVG Image */}
          <div className="transform translate-y-10 -translate-x-1">
            <Image
              className=""
              src={"/images/swoosh_29_web.svg"}
              alt={"UCS Logo"}
              height={440}
              width={1024}
              priority // https://nextjs.org/docs/basic-features/image-optimization#priority
            />
          </div>
        </div>

        <div className="hidden lg:block"
          style={{
            position: 'absolute',
            top: '35.8%', // adjust these values
            right: '16%',
            color: '#4c4c4c', // choose appropriate color
            fontFamily: "Arial Rounded MT Bold",
            fontSize: '3.6em', // adjust as needed
            fontWeight: 'normal', // optional
            zIndex: 2, //higher index to ensure placement above svg
          }}
        >
          Our Specialized Sites:
        </div>

        {/* Here is the code for the mobile version */}
        <div className="lg:hidden mx-4 mb-20 flex-row justify-center">
          <Image
            className="opacity-70"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={180}
            width={320}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
          <div className="standard-font-1 standard-font-color-1 text-5xl sm:text-6xl lg:text-6xl">Our Mission</div>
          <div className="standard-font-2 text-xl">
            Enabling informed choices through comparative analysis of environmental solutions alongside historic human endeavors 
          </div>
          
        </div>
      </div>




{/*       <div className="flex justify-between">
        <div className="hidden lg:block mt-8">
          <Image
            className=""
            src={"/images/swoosh_19_web.svg"}
            alt={"UCS Logo"}
            height={440}
            width={1024}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
        <div className="lg:hidden mx-4 mb-20">
          <Image
            className="opacity-70"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={180}
            width={320}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
      </div> */}

      {/* <--mobile view--> 770px <--tablet view--> 1025px <--desktop view--> */}
      {/* If the viewport is less than 770px, render mobile option */}
      {/* else if th viewport is less than 1025px, render tablet option */}
      {/* finally, if neither of those conditions are met, render desktop option */}
      <div
        className={
          "grid grid-cols-1 pl-4 lg:pl-0 md:grid-cols-2 lg:grid-cols-3 gap-x-2 mt-1 -translate-y-14"
        }
      >
        <HomepageSpecializedSiteButton site="history" />
        <HomepageSpecializedSiteButton site="energy" />
        <HomepageSpecializedSiteButton site="matter" />
        <HomepageSpecializedSiteButton site="habitat" />
        <HomepageSpecializedSiteButton site="cities" />
        <HomepageSpecializedSiteButton site="waste" />
        <HomepageSpecializedSiteButton site="oceans" />
        <HomepageSpecializedSiteButton site="space" />
        <HomepageSpecializedSiteButton site="costs" />
      </div>
      <Analytics />
    </>
  );
}