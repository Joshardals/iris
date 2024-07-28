"use client";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { SignInValidation } from "@/lib/validations/form";
import { SignInValidationType } from "@/typings/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<SignInValidationType>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  id="username"
                  placeholder="Username"
                  type="text"
                  {...field}
                  onChange={(e) => {
                    form.setValue("username", e.target.value);
                  }}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs font-normal" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="new-password"
                  autoCorrect="false"
                  id="password"
                  placeholder="Password"
                  type="password"
                  {...field}
                  onChange={(e) => {
                    // const processedValue = valueWithoutSpaces(e.target.value);
                    form.setValue("password", e.target.value);
                  }}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs font-normal" />
            </FormItem>
          )}
        />

        <Button variant={"iris"} disabled={loading} className="w-full">
          {loading ? "Logging in..." : "Login"}
        </Button>

        <div className="w-[fit-content] mx-auto text-azure">
          <Link href="#">Forgot your password?</Link>
        </div>
      </form>
    </Form>
  );
}
