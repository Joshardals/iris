import Link from "next/link";
import { SignUpForm } from "./SignUpForm";

export default function SignUp() {
  return (
    <div className="bg-midnightGray p-5 w-full max-w-md space-y-8 rounded-lg">
      <div className="space-y-2">
        <h1 className="text-center text-lg">Sign Up</h1>
        <p className="text-center text-onyx/80">
          Already have an account?{" "}
          <span>
            <Link href="/" className="text-azure">
              Log in
            </Link>
          </span>
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}
