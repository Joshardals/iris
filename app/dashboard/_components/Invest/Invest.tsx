// "use client";
// import { ButtonInput } from "@/app/_components/FormInput";
// import { IoCheckmark } from "react-icons/io5";
// import { MdVerifiedUser } from "react-icons/md";
// import { plan } from "@/lib/data";
// import { FormEvent, useState } from "react";
// import { Navigation, Pagination, FreeMode } from "swiper/modules";
// import { Swiper } from "swiper/bundle";
// import "swiper/swiper-bundle.css";

// export function Invest() {
//   const [loading, setLoading] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [selectedPlan, setSelectedPlan] = useState(plan[0]);

//   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     try {
//       e.preventDefault();
//       setLoading(true);
//       window.alert(selectedPlan.plan);
//     } catch (error: any) {
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="space-y-5">
//       <Swiper
//         slidesPerView={1}
//         centeredSlides={true}
//         spaceBetween={30}
//         grabCursor={true}
//         freeMode={true}
//         freeModeMomentum={true}
//         freeModeMomentumRatio={0.5}
//         onSlideChange={(swiper) => {
//           setCurrentSlide(swiper.activeIndex);
//           setSelectedPlan(plan[swiper.activeIndex]);
//         }}
//       >
//         {plan.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className={`bg-snow px-5 py-10 space-y-20 ${
//                 currentSlide === index ? "slick-center" : "slick-slides"
//               }`}
//             >
//               <div className="flex flex-col items-center space-y-2">
//                 <MdVerifiedUser className="size-14 text-[#10B387]" />
//                 <p className="uppercase">{item.plan} plan</p>
//                 <h1 className="text-2xl font-semibold">{item.percentage}%</h1>
//               </div>

//               <div className="space-y-4">
//                 <PlanInfo label="plan terms:" value={`${item.term} hours`} />
//                 <PlanInfo label="minimum/maximum:" value={item.amount} />
//                 <PlanInfo label="withdrawal:" value="instant" />
//                 <PlanInfo
//                   label="referral commission"
//                   value={`${item.referralCommision}%`}
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div>
//         <ButtonInput label="Submit" loading={loading} />
//       </div>
//     </form>
//   );
// }

// function PlanInfo({ label, value }: { label: string; value?: string }) {
//   return (
//     <div className="flex items-center space-x-4">
//       <IoCheckmark className="text-[#10B387]" />
//       <p className="capitalize">
//         {label} <span className="font-semibold">{value}</span>
//       </p>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCheckmark } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { ButtonInput } from "@/app/_components/FormInput";
import { plan } from "@/lib/data";
import { PlansType } from "@/typings/form";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

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
      window.alert(selectedPlan.plan);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 select-none cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        // touchRatio={5}
        // resistanceRatio={0.5}
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
