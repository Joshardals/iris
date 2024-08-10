import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { customAlphabet } from "nanoid";
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to switch the current method address
export const checkAddress = (method: string) => {
  switch (method) {
    case "bitcoin":
      return "bc1qawc2l7yskju76k0hsscvwee43gq7zafk4et0eh";
    case "ethereum":
      return "0xEEb8265369554D2d8C37f47F7Def41999a394BBe";
    case "doge":
      return "DQNc61NWspPLXVpH12G7GPrREk8nhcfVQH";
    case "litecoin":
      return "ltc1qp0radjmja4a7ldugq44eraj8l97mtewkzp2q3j";
    case "tron":
      return "TK7iafCgECfK7ycsqYRVWcucBCumZGyjQU";
    case "shiba":
      return "0xEEb8265369554D2d8C37f47F7Def41999a394BBe";
    case "usdt":
      return "TK7iafCgECfK7ycsqYRVWcucBCumZGyjQU";
  }
};

// Utility function to check the current method
export const checkMethod = (method: string) => {
  switch (method) {
    case "bitcoin":
      return "Btc";
    case "ethereum":
      return "Eth";
    case "doge":
      return "Doge";
    case "litecoin":
      return "Ltc";
    case "tron":
      return "Trx";
    case "shiba":
      return "Shiba";
    case "usdt":
      return "Usdt";
  }
};

// Utility function to copy a text to the clipboard
export const copyToClipboard = (text: string, message: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      toast(`${message}`);
    },
    (err) => {
      console.error("Failed to copy: ", err);
    }
  );
};

// Utility Function to format currency
export const convertAmount = (amount: string | number) => {
  return Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

// Utility Function to format date only
export function formatDateOnly(date: Date | string): string {
  let dateObj: Date;

  if (typeof date === "string") {
    dateObj = new Date(date);
  } else if (date instanceof Date) {
    dateObj = date;
  } else {
    // Invalid date input
    return "";
  }

  // Check if the date is valid
  if (isNaN(dateObj.getTime())) {
    return "";
  }

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return `${day}-${month}-${year}`;
}

// Utility Function Numbers properly
export function formatNumberWithCommas(number: number | string): string {
  if (number === null || number === undefined) {
    return ""; // Return an empty string or a placeholder if the number is null
  }

  // Ensure the input is a string
  const numStr = number.toString();

  // Use a regular expression to add commas as thousand separators
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Utility Function to generate a referral code
export const generateReferralCode = (): string => {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const nanoid = customAlphabet(alphabet, 8); // You can adjust the length of the code as needed
  return nanoid();
};
