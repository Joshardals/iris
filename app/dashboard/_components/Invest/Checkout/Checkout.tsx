"use client";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import Link from "next/link";
import { LuSend } from "react-icons/lu";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Checkout() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const amount = searchParams.get("amount");
  const method = searchParams.get("spend");
  const address = "0x12272772378888888888888323";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast(`${method?.toUpperCase()} Address Copied`);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  const handleCopy = () => {
    copyToClipboard(address);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-snow rounded-lg p-5  lg:w-max mx-auto space-y-4">
        <div className="flex space-x-4 items-center">
          <LuSend />
          <div>
            <h2>
              Send {amount} {method?.toUpperCase()} to the deposit address:
            </h2>
            <h2 className="text-xl font-semibold mb-2">{address}</h2>
            <HiOutlineClipboardDocument
              className="cursor-pointer"
              onClick={handleCopy}
            />
          </div>
        </div>

        <p className="text-onyx/50 max-w-md max-md:text-xs ">
          Use your wallet to transfer funds for this exchange. If you do not
          have a wallet yet, you can read about cryptocurrency wallets in{" "}
          <span className="inline-block">
            <Link href="#" className="text-azure">
              our article
            </Link>
          </span>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}
