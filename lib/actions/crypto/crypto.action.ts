"use server";

const API_KEY = process.env.COINLIB_KEY;
export const fetchConversionRate = async ({
  from,
  to,
}: {
  from: string;
  to: string;
}) => {
  try {
    const response = await fetch(
      `https://coinlib.io/api/v1/coin?key=${API_KEY}&pref=${to}&symbol=${from}`
    );
    const data = await response.json();
    return data.price;
  } catch (error: any) {
    console.error("Error fetching conversion rate:", error.message);
    return null;
  }
};
