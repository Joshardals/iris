import { Cards } from "./_components/Cards";
import Referral from "./_components/Referral";
import TradingViewWidget from "./_components/Chart";
import { fetchCurrentUserInfo } from "@/lib/actions/database/database.actions";

export default async function DashboardPage() {
  const { data } = await fetchCurrentUserInfo();

  return (
    <div className="space-y-5 md:space-y-14">
      <h1 className="text-2xl max-md:text-center">Welcome {data?.username}</h1>
      <Cards />
      <TradingViewWidget />

      {/* Referral Tab */}
      <Referral referralCode={data?.referralCode} />
    </div>
  );
}
