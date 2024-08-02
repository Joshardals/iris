import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { method } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";

export function Spend() {
  const [amount, setAmount] = useState<string | number>("");
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="space-y-6">
      <Input
        className="w-max"
        placeholder="Amount to Spend"
        type="number"
        value={amount}
        min="1"
        onChange={(e) => setAmount(e.target.value)}
      />
      <RadioGroup
        defaultValue={selectedValue}
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
        className="space-y-4"
      >
        {method.map((item, index) => (
          <SpendItem key={index} value={item.method} />
        ))}
      </RadioGroup>
    </div>
  );
}

function SpendItem({ value }: { value: string }) {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value}>Spend funds from {value}</Label>
    </div>
  );
}
