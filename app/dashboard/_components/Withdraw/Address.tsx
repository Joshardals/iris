import Link from "next/link";

interface Params {
  label: string;
  address: string | undefined;
}

export function Address(address: Params) {
  return (
    <div className="grid md:grid-cols-3 md:gap-4 border-b border-b-onyx/50 max-md:py-2 max-md:px-5 max-md:space-y-2">
      <p className="md:border-r md:border-r-onyx/50 md:px-5 md:py-2">
        {address.label} Wallet:
      </p>
      <p className="font-semibold md:py-2 col-span-2">
        {!address.address ? (
          <Link
            href="/dashboard/edit-account"
            className="py-1 px-4 bg-azure text-snow rounded-lg"
          >
            Set
          </Link>
        ) : (
          address.address
        )}
      </p>
    </div>
  );
}
