"use client";
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
import { useState } from "react";
import { ButtonInput } from "@/app/_components/FormInput";

export function WithdrawForm({ accountBalance }: { accountBalance: string }) {
  const [amount, setAmount] = useState<number>();
  const [error, setError] = useState<string | null>();
  const [error2, setError2] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset loading and error states
    setLoading(true);
    setError(null);
    setError2(null);

    try {
      if (!selectedValue) {
        setError("Select a method");
        return;
      }

      if (Number(amount) > Number(accountBalance)) {
        setError2("Withdrawal amount exceeding portfolio balance");
        return;
      }

      if (!Number(amount)) {
        setError2("Enter amount");
        return;
      }

      if (Number(amount) <= Number(accountBalance)) {
        alert("Hey");
      }
    } catch (error: any) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className={`bg-snow space-x-2 flex items-center ${
                error && "border border-red-500 text-red-500 duration-300"
              }`}
            >
              <p>
                {selectedValue === ""
                  ? "Withdraw with"
                  : `Withdraw with ${selectedValue.toUpperCase()}`}
              </p>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 mx-5 rounded-lg">
            <DropdownMenuRadioGroup
              value={selectedValue}
              onValueChange={setSelectedValue}
            >
              {method.map((item, index) => (
                <DropdownMenuRadioItem value={item.method} key={index}>
                  <div className="flex items-center justify-between w-full">
                    <p>Withdraw with {item.method.toUpperCase()}</p>
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
        <p className="text-red-500 text-xs font-bold">{error}</p>
      </div>

      <div className="flex space-x-4 items-center">
        <Input
          className={`w-max ${
            error2 &&
            "border border-red-500 placeholder:text-red-500 text-red-500"
          }`}
          placeholder="Amount to Spend"
          type="number"
          value={amount}
          min="1"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <p className="text-red-500 text-xs font-bold">{error2}</p>
      </div>

      <ButtonInput label="Withdraw" loading={loading} />
    </form>
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
