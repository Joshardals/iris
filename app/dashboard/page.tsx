import { Cards } from "./_components/Cards";
import Referral from "./_components/Referral";
import TradingViewWidget from "./_components/Chart";

export default async function page() {
  const code = "123456";
  return (
    <div className="space-y-5 md:space-y-14">
      <h1 className="text-2xl max-md:text-center">Welcome Joshua</h1>
      <Cards />
      <TradingViewWidget />

      {/* Referral Tab */}
      <Referral referralCode="123456" />
    </div>
  );
}
