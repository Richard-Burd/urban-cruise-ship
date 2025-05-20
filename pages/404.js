import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Clear the timer upon component unmounting or dependency changes to
    // prevent memory leaks and avoid navigation attempts after component unmount.
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="not-found mt-20 mb-60">
      <h1>Oops...</h1>
      <h2 className="mb-4">That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/" legacyBehavior>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
