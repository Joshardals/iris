"use client";
import { copyToClipboard } from "@/lib/utils";
import { ExchangeLoading } from "./ExchangeLoading";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { ToastContainer } from "react-toastify";
import { ExchangeBody } from "./ExchangeBody";

export function Exchange() {
  const exchangeId = "b12345";
  const handleCopy = () => {
    copyToClipboard(exchangeId, "Exchange Id Copied");
  };
  return (
    <div className="space-y-5">
      <ExchangeLoading />
      <div className="flex items-center space-x-2">
        <p className="text-onyx/50">
          Exchange ID: <span className="text-onyx">{exchangeId} </span>
        </p>
        <HiOutlineClipboardDocument
          className="cursor-pointer text-onyx/50"
          onClick={handleCopy}
        />
      </div>
      <div className="bg-snow rounded-lg  py-5 space-y-5 text-onyx/50">
        <div className="space-y-2 divide-y divide-onyx/50 max-sm:mx-5 sm:mx-8 border border-onyx/50 rounded-lg">
          <ExchangeBody message="You send" amount={2} method="Eth" />
        </div>

        <div className="px-2 sm:px-5">
          <p className="text-xs">
            Exchange rate:{" "}
            <span className="text-onyx">1 ETH = 0.04989405 BTC </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
