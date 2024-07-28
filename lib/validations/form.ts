import * as z from "zod";
import { SignInValidationType, SignUpValidationType } from "@/typings/form";

export const SignInValidation: z.ZodType<SignInValidationType> = z.object({
  // username: z.string().min(1, "Required field").max(100),
  email: z.string().email(),
  password: z.string().min(1, "Required field").max(20),
});

export const SignUpValidation: z.ZodType<SignUpValidationType> = z.object({
  fullName: z
    .string()
    .min(3, "Fullname must be at least 3 characters long")
    .max(200, "Fullname cannot exceed 100 characters"),
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(200, "First name cannot exceed 100 characters"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot exceed 20 characters"),
  // bitCoinWallet: z.string().max(100),
  // ethereumWallet: z.string().max(100),
  // dogeWallet: z.string().max(100),
  // litecoinWallet: z.string().max(100),
  // tronWallet: z.string().max(100),
  // shibaWallet: z.string().max(100),
  // usdtWallet: z.string().max(100),
  // invitedBy: z.string().max(100),
  // marketingEmails: z.boolean().refine((val) => val === true, {
  //   message: "",
  // }),
  // terms: z.boolean().refine((val) => val === true, {
  //   message: "You must accept the terms and conditions",
  // }),
});
