import { Metadata } from "next";
import { TableInput } from "../_components/TableInput";
import { fetchCurrentUserWithdrawals } from "@/lib/actions/database/database.actions";

export const metadata: Metadata = {
  title: "Iris Investment | My Withdrawals",
};

export default async function WithdrawalsPage() {
  const { withdrawals } = await fetchCurrentUserWithdrawals();
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">My Withdrawals</h2>

      <TableInput
        caption="A list of your recent withdrawals"
        withdrawals={withdrawals}
        header={["Invoice", "Status", "Method", "Created", "Amount"]}
      />
    </div>
  );
}
