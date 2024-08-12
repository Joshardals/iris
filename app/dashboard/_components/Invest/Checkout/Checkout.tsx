"use client";
import { CheckoutForm } from "./CheckoutForm";
import {
  checkAddress,
  copyToClipboard,
  formatNumberWithCommas,
} from "@/lib/utils";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import Link from "next/link";
import { LuSend } from "react-icons/lu";
import { ToastContainer } from "react-toastify";
import { useSearchParams } from "next/navigation";

export function Checkout() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const amount = searchParams.get("amount");
  const method = searchParams.get("method");
  const address = checkAddress(method!);

  const handleCopy = () => {
    copyToClipboard(address!, `${method?.toUpperCase()} Address Copied`);
  };

  return (
    <div className="space-y-4">
      <div className="bg-snow rounded-lg sm:p-5 max-sm:px-2 max-sm:py-5 space-y-4 w-full">
        <div className="flex space-x-3 lg:items-center ">
          <LuSend className="max-lg:mt-2 text-onyx/50" />
          <div className="lg:flex lg:items-center lg:space-x-4">
            <p className="max-md:text-xs">
              Send {formatNumberWithCommas(amount!)} {method?.toUpperCase()} to
              the deposit address:
            </p>
            <h2 className="font-semibold md:text-xl flex items-center text-wrap">
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

        <p className="text-onyx/50 max-md:text-xs md:max-w-[30rem]">
          If you have any questions about the exchange process, contact suport.
        </p>
      </div>

      <CheckoutForm amount={amount!} method={method!} plan={plan!} />

      <ToastContainer />
    </div>
  );
}
