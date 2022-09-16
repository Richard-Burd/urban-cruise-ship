import Link from "next/link";

const Navbar = () => {
  return (
    <div className="arial-rounded-mt-bold bg-amber-200 flex justify-between px-8 pt-2 pb-3 text-yellow-900 text-lg top-navbar-shadow">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/standards">Standards</Link>
      <Link href="/crew">Crew</Link>
      <Link href="/associations">Associations</Link>
      <Link href="/presentations">Presentations</Link>
      <Link href="/accomplishments">Accomplishments</Link>
    </div>
  );
};

export default Navbar;
