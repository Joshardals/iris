import { Metadata } from "next";
import { TableInput } from "../_components/TableInput";
import { fetchCurrentUserDeposits } from "@/lib/actions/database/database.actions";

export const metadata: Metadata = {
  title: "Iris Investment | My Deposits",
};

export default async function DepositsPage() {
  const { deposits } = await fetchCurrentUserDeposits();
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">My Deposits</h2>

      <TableInput
        caption="A list of your recent deposits"
        deposits={deposits}
        header={["Invoice", "Status", "Method", "Created", "Amount"]}
      />
    </div>
  );
}
