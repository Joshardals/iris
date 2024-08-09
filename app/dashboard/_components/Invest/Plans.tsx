"use client";
import { convertAmount } from "@/lib/utils";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCheckmark } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { ButtonInput } from "@/app/_components/FormInput";
import { plan } from "@/lib/data";
import { Spend } from "./Spend";
import { SelectedAmount, SelectedMethod } from "@/lib/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export function Plans({ accountBalance }: { accountBalance: number }) {
  const { amount } = SelectedAmount();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>();
  const [error2, setError2] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState(plan[0]);
  const { selectedValue } = SelectedMethod();
  const router = useRouter();

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
    setSelectedPlan(plan[swiper.activeIndex]);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      document.cookie =
        "hasCheckedOut=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      e.preventDefault();
      setLoading(true);
      setError(null);
      setError2(null);

      if (Number(amount) >= selectedPlan.minAmount && selectedValue !== "") {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Trying to delay this for about a second to improve the user experience

        router.push(
          `/dashboard/invest/checkout?plan=${selectedPlan.plan}&amount=${amount}&method=${selectedValue}`
        );
      } else if (Number(amount) < selectedPlan.minAmount) {
        setError(
          `Minimum Amount Deposit: ${convertAmount(selectedPlan.minAmount)}`
        );
      } else if (selectedValue === "") {
        setError2("Select a method");
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 select-none cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={false}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {plan.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`bg-snow px-5 py-10 space-y-20 rounded-lg transition-all duration-700 ${
              currentIndex === index && "border-2 border-azure"
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <MdVerifiedUser className="size-14 text-jadeGreen" />
              <p className="uppercase">{item.plan} plan</p>
              <h1 className="text-2xl font-semibold">{item.percentage}%</h1>
            </div>

            <div className="space-y-4">
              <PlanInfo label="plan terms:" value={`${item.term} hours`} />
              <PlanInfo label="minimum/maximum:" value={item.amount} />
              <PlanInfo label="withdrawal:" value="instant" />
              <PlanInfo
                label="referral commission"
                value={`${item.referralCommision}%`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-onyx p-5 text-snow capitalize font-semibold rounded-lg">
        <p>Portfolio: {convertAmount(accountBalance)}</p>
      </div>

      <Spend error={error!} error2={error2!} />

      <ButtonInput label="Send" loading={loading} />
    </form>
  );
}

function PlanInfo({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center space-x-4">
      <IoCheckmark className="text-jadeGreen" />
      <p className="capitalize">
        {label} <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
}
