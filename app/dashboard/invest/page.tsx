import Invest from "../_components/Invest/Invest";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default async function InvestPage() {
  return (
    <div className="space-y-5 md:space-y-8 overflow-hidden">
      <h2 className="font-medium text-xl">Invest</h2>
      <div className="flex w-full justify-center">
        <ScrollArea className=" max-sm:w-[17rem] lg:w-[50rem] whitespace-nowrap rounded-lg border bg-snow shadown-md">
          <div className="flex w-max space-x-4 p-4">
            <Invest />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
