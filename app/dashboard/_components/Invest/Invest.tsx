"use client";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCheckmark } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { ButtonInput } from "@/app/_components/FormInput";
import { plan } from "@/lib/data";
import { Spend } from "./Spend";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export function Invest() {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plan[0]);

  const handleSlideChange = (swiper: any) => {
    setSelectedPlan(plan[swiper.activeIndex]);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
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
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {plan.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-snow px-5 py-10 space-y-20 rounded-lg"
          >
            <div className="flex flex-col items-center space-y-2">
              <MdVerifiedUser className="size-14 text-[#10B387]" />
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
        {/* <p>Your account balance: {convertAmount(accountBalance)}</p> */}
        <p>account balance: $1000</p>
      </div>

      <Spend />

      <ButtonInput label="Spend" loading={loading} />
    </form>
  );
}

function PlanInfo({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center space-x-4">
      <IoCheckmark className="text-[#10B387]" />
      <p className="capitalize">
        {label} <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
}
