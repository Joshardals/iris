import { ButtonInput } from "@/app/_components/FormInput";
import { createDeposit } from "@/lib/actions/database/database.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CheckoutForm({
  amount,
  method,
}: {
  amount: string;
  method: string;
}) {
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handlePaid = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await createDeposit({
        amount,
        method,
      });

      if (!result.success) {
        setError(result.msg);
        return;
      }

      alert("Deposit request is successful, Kindly check your mail inbox.");
      document.cookie = "hasCheckedOut=true; path=/;"; // Trying to set a flag to prevent the user from revisiting this page after checking out
      router.push("/dashboard/my-deposits");
    } catch (error: any) {
      console.log(`An unexpected error occured: ${error.message}`);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-md:space-y-2 md:flex md:items-center md:space-x-4">
      <div onClick={handlePaid}>
        <ButtonInput label="I have Paid" loading={loading} />
      </div>
      <div onClick={() => router.back()}>
        <ButtonInput
          label="Cancel Payment"
          loading={loading}
          variant="destructive"
        />
      </div>

      {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
    </div>
  );
}
