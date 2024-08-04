"use client";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";

const BASE_URL = "https://iris-rust-rho.vercel.app/";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      toast("Referral Link Copied");
    },
    (err) => {
      console.error("Failed to copy: ", err);
    }
  );
};

const Referral = ({ referralCode }: { referralCode: string }) => {
  const refLink = `${BASE_URL}signup?ref=${referralCode}`;
  const handleCopy = () => {
    copyToClipboard(refLink);
  };
  return (
    <div className="space-y-2 max-md:text-xs">
      <h1 className="text-lg md:text-xl font-semibold capitalize">
        YOUR REFERRAL LINK
      </h1>
      <div className="space-y-2">
        <p>To copy your referral link, click the button below.</p>
        <div className="w-full bg-snow py-2 px-5 rounded-lg cursor-pointer">
          <p>{refLink}</p>
        </div>
      </div>

      <Button variant={"iris"} onClick={handleCopy}>
        Copy Link
      </Button>

      <ToastContainer />
    </div>
  );
};

export default Referral;
