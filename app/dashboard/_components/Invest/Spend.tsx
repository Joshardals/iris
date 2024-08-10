import { Button } from "@/components/ui/button";
import { checkMethod } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { method } from "@/lib/data";
import { SelectedAmount, SelectedMethod } from "@/lib/store/store";

export function Spend({ error, error2 }: { error: string; error2: string }) {
  const { amount, setAmount } = SelectedAmount();
  const { selectedValue, setSelectedValue } = SelectedMethod();

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 items-center">
        <Input
          className={`w-max ${
            error &&
            "border border-red-500 placeholder:text-red-500 text-red-500"
          }`}
          placeholder="Amount to Spend"
          type="number"
          value={amount}
          min="1"
          onChange={(e) => setAmount(e.target.value)}
        />

        <p className="text-red-500 text-xs font-bold">{error}</p>
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`bg-snow space-x-2 flex items-center outline-none ${
                error2 && "border border-red-500 text-red-500 duration-300"
              }`}
            >
              <p>
                {selectedValue === ""
                  ? "Send from"
                  : `Send ${selectedValue.toUpperCase()}`}
              </p>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mx-5 rounded-lg">
            <DropdownMenuRadioGroup
              value={selectedValue}
              onValueChange={setSelectedValue}
            >
              {method.map((item, index) => (
                <DropdownMenuRadioItem value={item.method} key={index}>
                  <div className="flex items-center justify-between w-full">
                    <p>Send {item.method.toUpperCase()}</p>
                    <CryptoImg
                      method={checkMethod(item.method)!}
                      alt="Bitcoin Img"
                    />
                  </div>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-red-500 text-xs font-bold">{error2}</p>
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
