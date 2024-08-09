import { checkMethod, formatNumberWithCommas } from "@/lib/utils";
import Image from "next/image";

interface ExchangeProps {
  amount: string;
  method: string;
}

export function ExchangeBody(data: ExchangeProps) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="w-20">
        <p className="text-xs">You send</p>
        <p>{formatNumberWithCommas(data.amount)}</p>
      </div>

      <div className="flex items-center space-x-1 text-onyx w-20">
        <CryptoImg method={checkMethod(data.method)!} alt="Ethereum Logo" />

        <p className="uppercase">{checkMethod(data.method)}</p>
      </div>
    </div>
  );
}

function CryptoImg({ method, alt }: { method: string; alt?: string }) {
  return (
    <Image
      src={`/assets/crypto/${method}.svg`}
      width={50}
      height={50}
      className="size-4"
      alt={alt!}
    />
  );
}
