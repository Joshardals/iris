"use client";
import Invest from "../_components/Invest/Invest";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Plans from "../_components/Invest/Plans";

export default function InvestPage() {
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">Invest</h2>
      <Plans />
      {/* <Invest /> */}
    </div>
  );
}
