"use client";
import { checkMethod } from "@/lib/utils";
import { ExchangeBody } from "./ExchangeBody";
import { ExchangeLoading } from "./ExchangeLoading";
import { fetchConversionRate } from "@/lib/actions/crypto/crypto.action";
import { SelectedWithdrawMethod } from "@/lib/store/store";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

export function Exchange() {
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedValue } = SelectedWithdrawMethod();

  useEffect(() => {
    const getConversionRate = async () => {
      if (selectedValue) {
        try {
          setLoading(true);
          const rate = await fetchConversionRate({
            from: checkMethod(selectedValue)!.toUpperCase(),
            to: "USDT",
          });
          setConversionRate(rate);
        } catch (error: any) {
          console.log(`Error fetching conversion rate: ${error.message}`);
        } finally {
          setLoading(false);
        }
      }
    };
    getConversionRate();
  }, [selectedValue]);

  return (
    <div className="space-y-5">
      <ExchangeLoading />
      <div className="bg-snow rounded-lg  py-5 space-y-5 text-onyx/50">
        <div className="space-y-2 divide-y divide-onyx/50 max-sm:mx-5 sm:mx-8 border border-onyx/50 rounded-lg">
          <ExchangeBody />
        </div>

        <div className="px-2 sm:px-5">
          <p className="text-xs">
            Exchange rate:{" "}
            <span className="text-onyx">
              1 {checkMethod(selectedValue!)?.toUpperCase()} ={" "}
              {loading ? "Loading..." : conversionRate} USDT
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
