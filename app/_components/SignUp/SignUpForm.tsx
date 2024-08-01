"use client";
import { ButtonInput, CheckBoxInput, FormInput } from "../FormInput";
import { Form } from "@/components/ui/form";
import { SignUpValidation } from "@/lib/validations/form";
import { SignUpValidationType } from "@/typings/form";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { signUpUser } from "@/lib/actions/auth/auth.actions";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignUpFormComponent() {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const referralParams = useSearchParams();
  const router = useRouter();

  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      bitcoinWallet: "",
      ethereumWallet: "",
      dogeWallet: "",
      litecoinWallet: "",
      tronWallet: "",
      shibaWallet: "",
      usdtWallet: "",
      // invitedBy: "",
      marketingEmails: false,
      terms: false,
    },
  });

  const onSubmit = async (values: SignUpValidationType) => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors

      const result = await signUpUser({
        email: values.email,
        name: values.fullName,
        password: values.password,
        username: values.userName,
        referredBy: referralParams.get("ref") || "none",
        bitcoinWallet: values.bitcoinWallet,
        ethereumWallet: values.ethereumWallet,
        dogeWallet: values.dogeWallet,
        litecoinWallet: values.litecoinWallet,
        tronWallet: values.tronWallet,
        shibaWallet: values.shibaWallet,
        usdtWallet: values.usdtWallet,
      });

      if (!result.success) {
        setError(result.msg);
        return;
      }
      router.push("/dashboard");
    } catch (error: any) {
      console.log(`Error signing up: ${error.message}`);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
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
          name="bitcoinWallet"
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
          placeholder="Usdt (TRC 20) Wallet"
          loading={loading}
        />

        <CheckBoxInput form={form} name="marketingEmails" />
        <CheckBoxInput form={form} name="terms" />

        {error && <p className="text-red-500 font-bold">{error}</p>}

        <ButtonInput loading={loading} label="Sign Up" />
      </form>
    </Form>
  );
}

export function SignUpForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpFormComponent />
    </Suspense>
  );
}
