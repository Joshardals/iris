import { convertAmount } from "@/lib/utils";

export function Cards() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <CardItem label="account balance" value="0" />
      <CardItem label="earned" value="110" />
      <CardItem label="withdrawn" value="190" />
      <CardItem label="invested" value="0" />
      <CardItem label="active deposits" value="0" />
    </div>
  );
}

function CardItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-snow rounded-lg p-5 space-y-4">
      <h1 className="font-semibold uppercase">{label}</h1>
      {/* <p>{convertAmount(account1?.activeDeposit || "")}</p> */}
      <p className="font-bold">${value}</p>
    </div>
  );
}
