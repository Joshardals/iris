"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PlansValidation } from "@/lib/validations/form";
import { PlansType } from "@/typings/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { plan } from "@/lib/data";

export default function Invest() {
  const form = useForm<PlansType>({
    resolver: zodResolver(PlansValidation),
  });
  //   return <div className="w-[20rem] bg-white h-[20rem] rounded-lg">

  //   </div>;

  const onSubmit = async (values: PlansType) => {};

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 rounded-lg"
                  >
                    {/* <div className=" relative">
                    {isLoading ? (
                      <div className="absolute bg-darkblue/20 cursor-not-allowed h-full w-full" />
                    ) : null}

                    <div className="flex items-center gap-4">
                      {plan.map((item, index) => (
                        <FormItem
                          className=" w-full space-y-0 rounded-lg border-2"
                          key={index}
                        >
                          <div
                            className="flex items-center space-x-4
                       bg-onyx/10 px-5 py-2"
                          >
                            <div className="flex items-center space-x-4 w-max">
                              <FormControl>
                                <RadioGroupItem value={item.plan} />
                              </FormControl>
                              <FormLabel className="max-md:text-xs">
                                {item.percentage}% in {item.term} Hours
                              </FormLabel>
                            </div>
                          </div>
                          <div className="space-y-4 w-[20rem] divide-y divide-onyx">
                            <InvestItem label="Plan" value={item.plan} />
                            <InvestItem label="Plan" value={item.amount} />
                            <InvestItem
                              label="Profit(%)"
                              value={item.percentage}
                            />
                          </div>
                        </FormItem>
                      ))}
                    </div>
                  </div> */}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

function InvestItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="py-2">
        <p className="font-semibold">{label}</p>
      </div>
      <div className=" w-full text-center py-2 capitalize font-bold">
        {value}
      </div>
    </div>
  );
}
