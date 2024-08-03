import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { method } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectedAmount, SelectedMethod } from "@/lib/store/store";

export function Spend({ error }: { error: string }) {
  const { amount, setAmount } = SelectedAmount();
  const { selectedValue, setSelectedValue } = SelectedMethod();

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 items-center">
        <Input
          className="w-max"
          placeholder="Amount to Spend"
          type="number"
          value={amount}
          min="1"
          onChange={(e) => setAmount(e.target.value)}
        />

        <p className="text-red-500 text-xs font-bold">{error}</p>
      </div>
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
      <Label htmlFor={value} className=" cursor-pointer">
        Spend funds from {value.toUpperCase()}
      </Label>
    </div>
  );
}
