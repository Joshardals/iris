"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SignUpValidation } from "@/lib/validations/form";
import { SignUpValidationType } from "@/typings/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckBoxInput, FormInput } from "../FormInput";
import { signUpUser } from "@/lib/actions/auth/auth.actions";

export function SignUpForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      //   bitCoinWallet: "",
      //   ethereumWallet: "",
      //   dogeWallet: "",
      //   litecoinWallet: "",
      //   tronWallet: "",
      //   shibaWallet: "",
      //   usdtWallet: "",
      //   invitedBy: "",
      //   marketingEmails: false,
      //   terms: false,
    },
  });

  const onSubmit = async (values: SignUpValidationType) => {
    try {
      setLoading(true);
      await signUpUser({
        email: values.email,
        name: values.userName,
        password: values.password,
      });

      console.log("Signed Up successfull");
    } catch (error: any) {
      console.log(`Error signing up: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

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
        {/* <FormInput
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

        <CheckBoxInput form={form} name="marketingEmails" />
        <CheckBoxInput form={form} name="terms" /> */}

        <Button variant={"iris"} disabled={loading} className="w-full">
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
}
