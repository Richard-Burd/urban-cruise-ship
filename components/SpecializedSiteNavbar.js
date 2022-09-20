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
        <Link href="/costs">COSTS</Link>
      </button>
      <button className="history-background-color elliptical-geometry my-4 px-3 py-0.5 specialized-site-navbar-shadow tracking-wide">
        <Link href="/history">HISTORY</Link>
      </button>
      <style jsx>{`
        .specialized-site-navbar-shadow {
          box-shadow: 5px 8px 4px rgb(150, 150, 150);
        }
        
        .energy-background-color {
          background-color: #f2bb56ff;
        }
        
        .matter-background-color {
          background-color: #adeb48ff;
        }
        
        .habitat-background-color {
          background-color: #8ee8ceff;
        }
        
        .cities-background-color {
          background-color: #ffb4b4ff;
        }
        
        .waste-background-color {
          background-color: #c1b698ff;
        }
        
        .oceans-background-color {
          background-color: #647fecff;
        }
        
        .space-background-color {
          background-color: #333333ff;
        }
        
        .costs-background-color {
          background-color: #b998d6ff;
        }
        
        .history-background-color {
          background-color: #bed0d8ff;
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
