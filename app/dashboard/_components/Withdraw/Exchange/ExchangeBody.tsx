import { checkMethod, formatNumberWithCommas } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { method } from "@/lib/data";
import { SelectedAmount, SelectedWithdrawMethod } from "@/lib/store/store";

export function ExchangeBody() {
  const { selectedValue, setSelectedValue } = SelectedWithdrawMethod();

  return (
    <div className="flex items-center justify-between p-2">
      <div className="w-20">
        <p className="text-xs">Withdraw</p>
        {/* <p>{formatNumberWithCommas(data.amount) || 2}</p> */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-snow appearance-none">
              <Button
                variant="outline"
                className={` space-x-2 flex items-center p-0 outline-none`}
              >
                {/* ${
                  error2 && "border border-red-500 text-red-500 duration-300"
                } */}
                <p>{`Withdraw with ${selectedValue.toUpperCase()}`}</p>
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
                      <p>{item.method.toUpperCase()}</p>
                      <CryptoImg
                        method={checkMethod(item.method)!}
                        alt={`${item.method} Img`}
                      />
                    </div>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <p className="text-red-500 text-xs font-bold">{error2}</p> */}
        </div>
      </div>

      <div className="flex items-center space-x-1 text-onyx w-20">
        <CryptoImg method={checkMethod(selectedValue)!} alt="Ethereum Logo" />

        {/* <p className="uppercase">{checkMethod(data.method)}</p> */}
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
