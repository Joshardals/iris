import { Invest } from "../_components/Invest/Invest";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function InvestPage() {
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">Select a Plan</h2>

      <Invest />
    </div>
  );
}
