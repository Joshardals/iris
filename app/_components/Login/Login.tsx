import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="bg-midnightGray p-5 w-full max-w-md space-y-8 rounded-lg">
      <div className="space-y-2">
        <h1 className="text-center text-lg">Log In</h1>
        <p className="text-center text-onyx/80">
          Not an Iris Investment customer yet?{" "}
          <span>
            <Link href="signup" className="text-azure">
              Sign Up
            </Link>
          </span>
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
