import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { method } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectedAmount, SelectedMethod } from "@/lib/store/store";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
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
      {/* <RadioGroup
        defaultValue={selectedValue}
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
        className="space-y-4"
      >
        {method.map((item, index) => (
          <SpendItem key={index} value={item.method} />
        ))}
      </RadioGroup> */}

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`bg-snow space-x-2 flex items-center ${
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
                <DropdownMenuRadioItem key={index} value={item.method} className="">
                  <p>Send {item.method.toUpperCase()}</p>
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
// function SpendItem({ value }: { value: string }) {
//   return (
//     <div className="flex items-center space-x-2">
//       <RadioGroupItem value={value} id={value} />
//       <Label htmlFor={value} className=" cursor-pointer">
//         Spend funds from {value.toUpperCase()}
//       </Label>
//     </div>
//   );
// }
