import { Checkbox } from "@/components/ui/checkbox";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

interface FormInputProps {
  form: any;
  name: string;
  type?: string;
  placeholder?: string;
  loading?: boolean;
}

export function FormInput({
  form,
  name,
  type,
  placeholder,
  loading,
}: FormInputProps) {
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>(type!);

  const toggleInputType = () => {
    setEyeOpen(!eyeOpen);
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                autoCapitalize="none"
                autoComplete={type === "password" ? "new-password" : "off"}
                autoCorrect="off"
                className={
                  name === "invitedBy" ? "cursor-not-allowed font-bold" : ""
                }
                id={name}
                placeholder={placeholder}
                type={inputType}
                {...field}
                onChange={(e: any) => {
                  form.setValue(name, e.target.value);
                }}
                disabled={name === "invitedBy" ? true : loading}
              />

              {type === "password" && (
                <div
                  className="absolute top-0 right-0 h-full flex items-center px-5 cursor-pointer bg-snow rounded-md select-none"
                  onClick={toggleInputType}
                >
                  {eyeOpen ? (
                    <FaEyeSlash className="text-onyx/50 text-lg" />
                  ) : (
                    <FaEye className=" text-onyx/50 text-lg" />
                  )}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-red-500 text-xs font-normal" />
        </FormItem>
      )}
    />
  );
}

export function CheckBoxInput({ form, name }: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div>
              {name === "marketingEmails" ? (
                <p>I would like to receive marketing e-mails</p>
              ) : (
                <p>
                  By signing up, I agree to the{" "}
                  <span>
                    <Link href="#" className="text-azure">
                      Privacy Policy
                    </Link>
                  </span>{" "}
                  and{" "}
                  <span>
                    <Link href="#" className="text-azure">
                      Terms of Service
                    </Link>
                  </span>
                </p>
              )}
            </div>
          </div>
          <FormMessage className="text-red-500 text-xs font-normal px-7" />
        </FormItem>
      )}
    />
  );
}
