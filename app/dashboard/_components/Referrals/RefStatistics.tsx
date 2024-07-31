import { fetchReferredUsers } from "@/lib/actions/database/referrals.actions";
import { TableInput } from "../TableInput";

export async function RefStatistics() {
  const referredUsers = await fetchReferredUsers();
  const data = referredUsers.data;
  return (
    <TableInput
      caption="A list of your referred users"
      header={["S/N", "Email", "Username"]}
      referredUsers={data}
    />
  );
}
