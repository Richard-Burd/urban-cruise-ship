import Head from "next/head";
import Image from "next/image";
// This is the default Next.js styles file:
// import styles from "../styles/Home.module.css";
// ...but this app uses TailwindCSS instead.
import HomepageSpecializedSiteButton from "../components/HomepageSpecializedSiteButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Cruise Ship</title>
        <meta name="keywords" content="homepage, landing page" />
      </Head>
      <div className="lg:hidden pl-4 pt-1 standard-font-1 standard-font-color-1 text-4xl">
        Welcome!
      </div>
      <div className="flex justify-between">
        <div className="hidden lg:block">
          <Image
            className="opacity-90"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={340}
            width={620}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
        <div className="lg:hidden mx-16">
          <Image
            className="opacity-90"
            src={`/images/ucs-logo.svg`}
            alt={"UCS Logo"}
            height={180}
            width={320}
            priority // https://nextjs.org/docs/basic-features/image-optimization#priority
          />
        </div>
        <div className="hidden lg:block pt-32 pr-4 standard-font-1 standard-font-color-1 text-6xl">
          Welcome!
        </div>
      </div>
      <div className="pb-6 pl-4 lg:pl-0 standard-font-1 standard-font-color-1 text-2xl sm:text-4xl lg:text-6xl">
        Our specialized sites:
      </div>
      {/* <--mobile view--> 770px <--tablet view--> 1025px <--desktop view--> */}
      {/* If the viewport is less than 770px, render mobile option */}
      {/* else if th viewport is less than 1025px, render tablet option */}
      {/* finally, if neither of those conditions are met, render desktop option */}
      <div className={"grid grid-cols-1 pl-4 lg:pl-0 md:grid-cols-2 lg:grid-cols-3 gap-x-2"}>
        <HomepageSpecializedSiteButton site="energy" />
        <HomepageSpecializedSiteButton site="matter" />
        <HomepageSpecializedSiteButton site="habitat" />
        <HomepageSpecializedSiteButton site="cities" />
        <HomepageSpecializedSiteButton site="waste" />
        <HomepageSpecializedSiteButton site="oceans" />
        <HomepageSpecializedSiteButton site="space" />
        <HomepageSpecializedSiteButton site="costs" />
        <HomepageSpecializedSiteButton site="history" />
      </div>
    </>
  );
}
