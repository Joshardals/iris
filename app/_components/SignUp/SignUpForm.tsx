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
import { SignUpValidation } from "@/lib/validations/form";
import { SignUpValidationType } from "@/typings/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../FormInput";

export function SignUpForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      bitCoinWallet: "",
      ethereumWallet: "",
      dogeWallet: "",
      litecoinWallet: "",
      tronWallet: "",
      shibaWallet: "",
      usdtWallet: "",
      invitedBy: "",
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
        <FormInput
          form={form}
          name="fullName"
          type="text"
          placeholder="Full Name"
          loading={loading}
        />
        <FormInput
          form={form}
          name="userName"
          type="text"
          placeholder="Username"
          loading={loading}
        />
        <FormInput
          form={form}
          name="email"
          type="email"
          placeholder="Email"
          loading={loading}
        />
        <FormInput
          form={form}
          name="password"
          type="password"
          placeholder="Password"
          loading={loading}
        />
        <FormInput
          form={form}
          name="bitCoinWallet"
          type="text"
          placeholder="Bitcoin Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="ethereumWallet"
          type="text"
          placeholder="Ethereum Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="dogeWallet"
          type="text"
          placeholder="Doge Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="litecoinWallet"
          type="text"
          placeholder="Litecoin Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="tronWallet"
          type="text"
          placeholder="Tron Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="shibaWallet"
          type="text"
          placeholder="Shiba Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="usdtWallet"
          type="text"
          placeholder="Usdt Wallet"
          loading={loading}
        />
        <FormInput
          form={form}
          name="invitedBy"
          type="text"
          placeholder="Invited By"
          loading={loading}
        />

        <Button variant={"iris"} disabled={loading} className="w-full">
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
}
