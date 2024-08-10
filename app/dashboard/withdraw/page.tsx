import {
  fetchCurrentUserAccountInfo,
  fetchCurrentUserWalletInfo,
} from "@/lib/actions/database/database.actions";
import { WithdrawForm } from "../_components/Withdraw/WithdrawForm";
import { Exchange } from "../_components/Withdraw/Exchange/Exchange";

export default async function WithdrawPage() {
  const [{ accountInfo }, { walletInfo }] = await Promise.all([
    await fetchCurrentUserAccountInfo(),
    await fetchCurrentUserWalletInfo(),
  ]);

  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">Withdraw your funds</h2>
      <div className="space-y-4">
        <p className="text-red-500">
          Note: Before making any withdrawals, kindly confirm your withdrawal
          address by getting in touch with support.
        </p>

        <Exchange />
        <WithdrawForm accountBalance={accountInfo?.accountBalance} />
      </div>
    </div>
  );
}
