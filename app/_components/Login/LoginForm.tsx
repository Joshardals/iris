"use client";
import { ButtonInput, FormInput } from "../FormInput";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInUser } from "@/lib/actions/auth/auth.actions";
import { SignInValidation } from "@/lib/validations/form";
import { SignInValidationType } from "@/typings/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginForm() {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<SignInValidationType>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: SignInValidationType) => {
    try {
      setLoading(true);
      setError(null);

      const result = await signInUser({
        email: values.email,
        password: values.password,
      });

      if (!result.success) {
        setError(result.msg);
        return;
      }
      router.push("/dashboard");
    } catch (error: any) {
      console.log(`An unexpected error occured: ${error.message}`);
      setError("An unexpected error occurred. Please try again.");
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
          name="email"
          type="text"
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

        {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

        <ButtonInput loading={loading} label="Login" />

        <div className="w-[fit-content] mx-auto text-azure">
          <Link href="#">Forgot your password?</Link>
        </div>
      </form>
    </Form>
  );
}
