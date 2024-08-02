"use client";
import { ButtonInput } from "@/app/_components/FormInput";
import { IoCheckmark } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { plan } from "@/lib/data";
import { PlansType } from "@/typings/form";
import Slider from "react-slick";
import { FormEvent, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Plans() {
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(plan[0]);

  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
    beforeChange: (current: any, next: any) => {
      setCurrentSlide(next);
      setSelectedPlan(plan[next]);
    },
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      window.alert(selectedPlan.plan);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Slider {...settings} className="">
        {plan?.map((item, index) => (
          <div
            key={index}
            className={`bg-snow px-5 py-10 space-y-20 ${
              currentSlide === index ? "slick-center" : "slick-slides"
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <MdVerifiedUser className="size-14 text-[#10B387]" />
              <p className=" uppercase">{item.plan} plan</p>
              <h1 className="text-2xl font-semibold">{item.percentage}%</h1>
            </div>

            <div className="space-y-4">
              <PlanInfo label="plan terms:" value={`${item.term} hours`} />
              <PlanInfo label="minimum/maximum:" value={item.amount} />
              <PlanInfo label="withdrawal:" value="intstant" />
              <PlanInfo
                label="referral commision"
                value={`${item.referralCommision}%`}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div>
        <ButtonInput label="Submit" loading={loading} />
      </div>
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
