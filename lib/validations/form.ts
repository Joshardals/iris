import * as z from "zod";
import { PlansType, SignInValidationType, SignUpValidationType } from "@/typings/form";

// Form Validation for the Edit Account in the dashboard

export const EditValidaton: z.ZodType<SignUpValidationType> = z.object({
  fullName: z.string().min(3, "Required").max(200),
  userName: z.string().min(3, "Required").max(200),
  email: z.string().email(),
  bitcoinWallet: z.string().max(100),
  ethereumWallet: z.string().max(100),
  dogeWallet: z.string().max(100),
  litecoinWallet: z.string().max(100),
  tronWallet: z.string().max(100),
  shibaWallet: z.string().max(100),
  usdtWallet: z.string().max(100),
});

// Form Validation for Sign In form.

export const SignInValidation: z.ZodType<SignInValidationType> = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required field").max(20),
});

// Form Validation for Sign Up Form.

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
  fullName: z
    .string()
    .min(3, "Fullname must be at least 3 characters long")
    .max(200, "Fullname cannot exceed 200 characters"),
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(200, "First name cannot exceed 200 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot exceed 20 characters"),
  bitcoinWallet: z.string().max(100),
  ethereumWallet: z.string().max(100),
  dogeWallet: z.string().max(100),
  litecoinWallet: z.string().max(100),
  tronWallet: z.string().max(100),
  shibaWallet: z.string().max(100),
  usdtWallet: z.string().max(100),
  marketingEmails: z.boolean().default(false).optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

// Dashboard/Invest
const planOptions = [
  "beginners",
  "advanced trade",
  "professional",
  "promo",
  "master trade",
  "retirement",
] as const;

const methodOptions = [
  "usdt",
  "bitcoin",
  "ethereum",
  "litecoin",
  "doge",
  "tron",
  "bnb",
  "shiba",
] as const;

export const PlansValidation: z.ZodType<PlansType> = z.object({
  plan: z.enum(planOptions),
  method: z.enum(methodOptions),
  amount: z.string().min(1, {
    message: "required",
  }),
});
