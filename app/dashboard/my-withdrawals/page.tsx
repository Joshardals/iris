import { TableInput } from "../_components/TableInput";

export default function WithdrawalsPage() {
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">My Withdrawals</h2>

      <TableInput
        caption="A list of your recent withdrawals"
        header={["Invoice", "Status", "Method", "Created", "Amount"]}
      />
    </div>
  );
}
