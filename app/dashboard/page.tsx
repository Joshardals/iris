"use client";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/auth/auth.actions";

export default function page() {
  const handleClick = async () => {
    await signOutUser();
  };
  return (
    <div>
      <p>Dashboard</p>
      <Button variant={"iris"} onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}
