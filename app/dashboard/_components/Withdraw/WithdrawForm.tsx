"use client";
import { ButtonInput } from "@/app/_components/FormInput";
import { createWithdrawals } from "@/lib/actions/database/database.actions";
import { Input } from "@/components/ui/input";
import { SelectedWithdrawMethod } from "@/lib/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function WithdrawForm({ accountBalance }: { accountBalance: string }) {
  const [amount, setAmount] = useState<number>();
  const [error, setError] = useState<string | null>();
  const [error2, setError2] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { selectedValue } = SelectedWithdrawMethod();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset loading and error states
    setLoading(true);
    setError(null);
    setError2(null);

    try {
      const currentAmount = amount ? Number(amount) : 0;
      const balance = Number(accountBalance);

      if (currentAmount > balance) {
        setError2("Withdrawal amount exceeding portfolio balance");
        return;
      }

      if (!Number(amount)) {
        setError2("Enter amount");
        return;
      }

      if (currentAmount <= balance) {
        const result = await createWithdrawals({
          amount: currentAmount.toString(),
          method: selectedValue,
        });

        if (!result.success) {
          setError(result.msg);
        }

        alert(
          "Withdrawal request is successful, Kindly check your mail inbox."
        );
        router.push("/dashboard/my-withdrawals");
      }
    } catch (error: any) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4 items-center">
        <Input
          className={`w-max ${
            error2 &&
            "border border-red-500 placeholder:text-red-500 text-red-500"
          }`}
          placeholder="Amount to Withdraw"
          type="number"
          value={amount}
          min="1"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <p className="text-red-500 text-xs font-bold">{error2}</p>
      </div>

      <ButtonInput label="Withdraw" loading={loading} />
    </form>
  );
}
