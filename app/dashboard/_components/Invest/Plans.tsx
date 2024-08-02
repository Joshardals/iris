"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

export default function Plans() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1, // Showing 3 slides at a time
    speed: 500,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
  };

  return (
    <Slider {...settings}>
      <div
        className={` bg-red-500 ${
          currentSlide === 0
            ? "slick-center transition-opacity duration-300"
            : "slick-slides"
        }`}
      >
        <h2>Hey</h2>
      </div>
      <div
        className={`bg-blue-500 h-[20rem] flex items-center justify-center ${
          currentSlide === 1 ? "slick-center" : "slick-slides"
        }`}
      >
        <h2>Hey</h2>
      </div>
      <div
        className={`bg-yellow-500 h-[20rem] flex items-center justify-center ${
          currentSlide === 2 ? "slick-center" : "slick-slides"
        }`}
      >
        <h2>Hey</h2>
      </div>
      <div
        className={`bg-green-500 h-[20rem] flex items-center justify-center ${
          currentSlide === 3 ? "slick-center" : "slick-slides"
        }`}
      >
        <h2>Hey</h2>
      </div>
    </Slider>
  );
}
