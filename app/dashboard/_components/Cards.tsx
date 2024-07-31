import { convertAmount } from "@/lib/utils";

export function Cards({ data }: { data: any }) {
  console.log("Cards Data: ", data);
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <CardItem
        label="account balance"
        value={convertAmount(data?.accountBalance || 0)}
      />
      <CardItem label="earned" value={convertAmount(data?.earned || 0)} />
      <CardItem label="withdrawn" value={convertAmount(data?.withdrawn || 0)} />
      <CardItem label="invested" value={convertAmount(data?.invested || 0)} />
      <CardItem
        label="active deposits"
        value={convertAmount(data?.activeDeposit || 0)}
      />
    </div>
  );
}

function CardItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-snow rounded-lg p-5 space-y-4">
      <h1 className="font-semibold uppercase">{label}</h1>
      <p className="font-bold">{value}</p>
    </div>
  );
}
