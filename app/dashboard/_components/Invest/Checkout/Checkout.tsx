"use client";
import { CheckoutForm } from "./CheckoutForm";
import { copyToClipboard, formatNumberWithCommas } from "@/lib/utils";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import Link from "next/link";
import { LuSend } from "react-icons/lu";
import { ToastContainer } from "react-toastify";
import { useSearchParams } from "next/navigation";

export function Checkout() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const amount = searchParams.get("amount");
  const method = searchParams.get("spend");
  const address = "0x12272772399999999999323";

  const handleCopy = () => {
    copyToClipboard(address, method!);
  };

  return (
    <div className="space-y-4">
      <div className="bg-snow rounded-lg p-5 space-y-4 w-full">
        <div className="flex space-x-4 lg:items-center ">
          <LuSend className="max-lg:mt-2" />
          <div className="lg:flex lg:items-center lg:space-x-4">
            <p className="max-md:text-xs">
              Send {formatNumberWithCommas(amount!)} {method?.toUpperCase()} to
              the deposit address:
            </p>
            <h2 className="font-semibold text-lg md:text-xl flex items-center text-wrap">
              {address}
            </h2>

            <HiOutlineClipboardDocument
              className="cursor-pointer text-onyx/50"
              onClick={handleCopy}
            />
          </div>
        </div>

        <p className="text-onyx/50 max-md:text-xs md:max-w-[30rem]">
          Use your wallet to transfer funds for this exchange. If you do not
          have a wallet yet, you can read about cryptocurrency wallets in{" "}
          <span className="inline-block">
            <Link href="#" className="text-azure">
              our article
            </Link>
          </span>
        </p>
      </div>

      <CheckoutForm amount={amount!} method={method!} />

      <ToastContainer />
    </div>
  );
}
