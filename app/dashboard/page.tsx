import { Cards } from "./_components/Cards";
import Referral from "./_components/Referral";
import TradingViewWidget from "./_components/Chart";
import {
  fetchCurrentUserAccountInfo,
  fetchCurrentUserInfo,
} from "@/lib/actions/database/database.actions";

export default async function DashboardPage() {
  const { userInfo } = await fetchCurrentUserInfo();
  const { accountInfo } = await fetchCurrentUserAccountInfo();
  console.log(userInfo);

  return (
    <div className="space-y-5 md:space-y-14">
      <h1 className="text-2xl max-md:text-center">
        Welcome {userInfo?.username}
      </h1>
      <Cards data={accountInfo} />
      <TradingViewWidget />

      {/* Referral Tab */}
      <Referral referralCode={userInfo?.referralCode} />
    </div>
  );
}
