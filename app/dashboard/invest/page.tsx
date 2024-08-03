import { fetchCurrentUserAccountInfo } from "@/lib/actions/database/database.actions";
import { Plans } from "../_components/Invest/Plans";

export default async function InvestPage() {
  const { accountInfo } = await fetchCurrentUserAccountInfo();
  const accountBalance = accountInfo?.accountBalance;

  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">Select a Plan</h2>

      <Plans accountBalance={accountBalance} />
    </div>
  );
}
