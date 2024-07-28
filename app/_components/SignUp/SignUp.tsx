import Link from "next/link";
import { SignUpForm } from "./SignUpForm";
import { getCurrentUser } from "@/lib/actions/auth/auth.actions";

export default async function SignUp() {
  const user = await getCurrentUser();
  console.log(user);
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
