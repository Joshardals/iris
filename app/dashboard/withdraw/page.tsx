import { convertAmount } from "@/lib/utils";
import {
  fetchCurrentUserAccountInfo,
  fetchCurrentUserWalletInfo,
} from "@/lib/actions/database/database.actions";
import { WithdrawForm } from "../_components/Withdraw/WithdrawForm";
import { Exchange } from "../_components/Withdraw/Exchange/Exchange";

export default async function WithdrawPage() {
  const { accountInfo } = await fetchCurrentUserAccountInfo();
  const accountBalance = accountInfo?.accountBalance;

  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">Withdraw your funds</h2>
      <div className="space-y-4">
        <p className="text-red-500">
          Note: Before making any withdrawals, kindly confirm your withdrawal
          address by getting in touch with support.
        </p>

        <Exchange />
        <div className="bg-onyx p-5 text-snow capitalize font-semibold rounded-lg">
          <p>Portfolio: {convertAmount(accountBalance)}</p>
        </div>
        <WithdrawForm accountBalance={accountBalance} />
      </div>
    </div>
  );
}
