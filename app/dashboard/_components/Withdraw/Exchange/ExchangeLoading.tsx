import { IoCheckmark } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { PiCircle } from "react-icons/pi";
import { PiCircleNotch } from "react-icons/pi";

export function ExchangeLoading() {
  return (
    // Loading Animations Whatever
    <div className="flex items-center max-sm:space-x-3 md:space-x-4">
      <div className="bg-snow p-1 rounded-full">
        <IoCheckmark className="text-azure" />
      </div>
      <IoRemoveOutline />
      <div className="bg-snow p-1 rounded-full">
        <PiCircleNotch className="text-azure animate-spin" />
      </div>

      <p>Withdrawal in Progress</p>
      <IoRemoveOutline />
      <div className="bg-snow p-1 rounded-full">
        <PiCircle className="text-onyx/50" />
      </div>
    </div>
  );
}
