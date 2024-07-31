import { Metadata } from "next";
import { TableInput } from "../_components/TableInput";

export const metadata: Metadata = {
  title: "Iris Investment | My Deposits",
};

export default function DepositsPage() {
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">My Deposits</h2>

      <TableInput
        caption="A list of your recent deposits"
        header={["Invoice", "Status", "Method", "Created", "Amount"]}
      />
    </div>
  );
}
