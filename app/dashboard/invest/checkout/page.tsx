import { Checkout } from "../../_components/Invest/Checkout/Checkout";
import { Exchange } from "../../_components/Invest/Checkout/Exchange/Exchange";

export default function CheckoutPage() {
  return (
    <div className="space-y-5 md:space-y-14">
      <h2 className="font-medium text-xl">
        Transfer your funds to the Exhange Service
      </h2>
      <Exchange />
      <Checkout />
    </div>
  );
}
