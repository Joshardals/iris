import { fetchReferredUsers } from "@/lib/actions/database/referrals.actions";
import { Metadata } from "next";
import { RefItem } from "../_components/Referrals/RefItem";
import { RefStatistics } from "../_components/Referrals/RefStatistics";

export const metadata: Metadata = {
  title: "Iris Investment | Referrals",
};

export default async function ReferralPage() {
  const referred = await fetchReferredUsers();
  const referredTotal = referred.total;
  const refCommission = ((referredTotal || 0) * 0.02).toFixed(2);
  return (
    <div className="md:space-y-14 space-y-5">
      {/* Your Referrals */}
      <div className="space-y-5 md:space-y-8">
        <h2 className="font-medium text-xl">Your Referrals:</h2>

        <div className="space-y-1">
          <RefItem title="Referrals:" value={referredTotal || 0} />
          <RefItem title="Active Referrals:" value={referredTotal || 0} />
          <RefItem title="Total Commission:" value={`${refCommission}%`} />
        </div>
      </div>

      {/* Referral Statistics */}
      <div className="space-y-8">
        <h2 className="font-medium text-xl">Referral Statistics:</h2>
        <RefStatistics />
      </div>
    </div>
  );
}
