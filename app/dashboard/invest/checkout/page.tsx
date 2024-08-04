import { Checkout } from "../../_components/Invest/Checkout/Checkout";

export default function CheckoutPage() {
  return (
    <div className="space-y-5 md:space-y-14 flex flex-col justify-center min-h-screen">
      <h2 className="font-medium text-xl">
        Transfer your funds to the Wallet Address
      </h2>
      <Checkout />
    </div>
  );
}
