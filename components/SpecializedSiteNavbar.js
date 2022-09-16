import Link from "next/link";

const SpecializedSiteNavbar = () => {
  return (
    <div className="arial-rounded-mt-bold border-b-2 border-gray-300 flex justify-between px-4 pt-2 pb-3 text-gray-900">
      <button className="energy-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/energy">ENERGY</Link>
      </button>
      <button className="matter-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/matter">MATTER</Link>
      </button>
      <button className="habitat-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/habitat">HABITAT</Link>
      </button>
      <button className="cities-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/cities">CITIES</Link>
      </button>
      <button className="waste-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/waste">WASTE</Link>
      </button>
      <button className="oceans-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow text-zinc-200 tracking-wide">
        <Link href="/oceans">OCEANS</Link>
      </button>
      <button className="space-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow text-zinc-200 tracking-wide">
        <Link href="/space">SPACE</Link>
      </button>
      <button className="costs-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/space">COSTS</Link>
      </button>
      <button className="history-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/space">HISTORY</Link>
      </button>
    </div>
  );
};

export default SpecializedSiteNavbar;
