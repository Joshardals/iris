import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  form: any;
  name: string;
  type: string;
  placeholder: string;
  loading: boolean;
}

export function FormInput({
  form,
  name,
  type,
  placeholder,
  loading,
}: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              autoCapitalize="none"
              autoComplete={type === "password" ? "new-password" : "off"}
              autoCorrect="off"
              className={
                name === "invitedBy" ? " cursor-not-allowed font-bold" : ""
              }
              id={name}
              placeholder={placeholder}
              type={type}
              {...field}
              onChange={(e: any) => {
                form.setValue(name, e.target.value);
              }}
              disabled={name === "invitedBy" ? true : loading}
            />
          </FormControl>
          <FormMessage className="text-red-500 text-xs font-normal" />
        </FormItem>
      )}
    />
  );
}
