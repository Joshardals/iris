import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { customAlphabet } from "nanoid";
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Utility function to copy a text to the clipboard
export const copyToClipboard = (text: string, method: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      toast(`${method?.toUpperCase()} Address Copied`);
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
