import Link from "next/link";

export function Header() {
  return (
    <div className="px-5 py-2 flex justify-between items-center absolute top-0 right-0 left-0">
      <div>LOGO</div>

      <div className="flex items-center space-x-4">
        {/* <Link
          href="/"
          className="py-2 px-4 rounded-md border border-transparent hover:border-emeraldGreen transition-all duration-300"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="capitalize bg-emeraldGreen py-2 px-4 rounded-md"
        >
          sign up
        </Link> */}
      </div>
    </div>
  );
}
