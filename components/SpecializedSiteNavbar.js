import Link from "next/link";

const SpecializedSiteNavbar = () => {
  const standardSpecializedSiteNavbarValues = "elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide"
  return (
    <div className="border-b-2 border-gray-300 flex justify-between px-4 pt-2 pb-3 standard-font-1 text-lg text-black text-opacity-75">
      <button className={`energy-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/energy">ENERGY</Link>
      </button>
      <button className={`matter-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/matter">MATTER</Link>
      </button>
      <button className={`habitat-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/habitat">HABITAT</Link>
      </button>
      <button className={`cities-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/cities">CITIES</Link>
      </button>
      <button className={`waste-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/waste">WASTE</Link>
      </button>
      <button className={`oceans-site-button-color text-opacity-80 text-white ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/oceans">OCEANS</Link>
      </button>
      <button className={`space-site-button-color text-opacity-80 text-white ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/space">SPACE</Link>
      </button>
      <button className={`costs-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/costs">COSTS</Link>
      </button>
      <button className={`history-site-button-color ${standardSpecializedSiteNavbarValues}`}>
        <Link href="/history">HISTORY</Link>
      </button>
      <style jsx>{`
        .specialized-site-navbar-shadow {
          box-shadow: 5px 8px 4px rgb(150, 150, 150);
        }
        .elliptical-geometry {
          border-bottom-left-radius: 26px 10px;
          border-bottom-right-radius: 26px 10px;
          border-top-left-radius: 26px 10px;
          border-top-right-radius: 26px 10px;
        }
      `}</style>
    </div>
  );
};

export default SpecializedSiteNavbar;
