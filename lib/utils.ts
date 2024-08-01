import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { customAlphabet } from "nanoid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility Function to format currency
export const convertAmount = (amount: string | number) => {
  return Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

// Utility Function to generate a referral code
export const generateReferralCode = (): string => {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const nanoid = customAlphabet(alphabet, 8); // You can adjust the length of the code as needed
  return nanoid();
};
