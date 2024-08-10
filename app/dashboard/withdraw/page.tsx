import { Address } from "../_components/Withdraw/Address";
import { convertAmount } from "@/lib/utils";
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

        {/* <div className="border-x border-x-onyx/50 border-t border-t-onyx/50 w-full overflow-x-auto rounded-lg">
          <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-onyx/50 max-md:py-2 max-md:px-5 max-md:space-y-2">
            <p className="md:border-r md:border-r-onyx/50 md:px-5 md:py-2">
              Portfolio:
            </p>
            <p className="font-semibold md:py-2 col-span-2">
              {convertAmount(accountInfo?.accountBalance)}
            </p>
          </div>

          <Address label="BITCOIN" address={walletInfo?.bitcoinWallet} />
          <Address label="ETHEREUM" address={walletInfo?.ethereumWallet} />
          <Address label="DOGECOIN" address={walletInfo?.dogeWallet} />
          <Address label="LITECOIN" address={walletInfo?.litecoinWallet} />
          <Address label="TRON" address={walletInfo?.tronWallet} />
          <Address label="SHIBA" address={walletInfo?.shibaWallet} />
          <Address label="USDT" address={walletInfo?.usdtWallet} />
        </div> */}

        <WithdrawForm accountBalance={accountInfo?.accountBalance} />
      </div>
    </div>
  );
}
