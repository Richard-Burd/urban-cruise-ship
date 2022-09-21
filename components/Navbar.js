import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-amber-200 flex justify-between px-8 pt-2 pb-3 standard-font-1 text-yellow-900 text-lg top-navbar-shadow">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/standards">Standards</Link>
      <Link href="/crew">Crew</Link>
      <Link href="/associations">Associations</Link>
      <Link href="/presentations">Presentations</Link>
      <Link href="/accomplishments">Accomplishments</Link>
      <style jsx>{`
        .top-navbar-shadow {
          box-shadow: 8px 8px 4px rgb(150, 150, 150);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
