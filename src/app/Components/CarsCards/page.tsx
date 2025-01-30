"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const [divsSwapped, setDivsSwapped] = useState(false);

  useEffect(() => {
    // Scroll animation logic
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    // Trigger animations on scroll and mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 
  return (
    <div className=" bg-[#f6f7f9] dark:bg-[#F6F7F9]">
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-6 mt-12 animate-on-scroll">
        {/* First Section */}
        <div className="h-[360px] rounded-[10px] relative bg-[#54A6FF] w-[100%] lg:w-[600px]">
          <div className="w-[90%] lg:w-[284px] space-y-4 text-white ml-4 lg:ml-8 pt-8 h-[160px]">
            <h1 className="text-[24px] lg:text-[32px] font-semibold">
              The Best Platform for Car Rental
            </h1>
            <p className="text-[14px] lg:text-[16px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="w-[120px] bg-[#3563E9] rounded-[4px] h-[44px] text-[16px] text-white">
              Rental Car
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex w-[90%] sm:h-[200px] lg:w-[406px] h-[116px] absolute bottom-3 ml-0 sm:ml-0 lg:ml-20 items-center justify-center">
              <Image
                className="object-contain"
                src="/car1.png"
                alt=""
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="h-[360px] hidden lg:block rounded-[10px] relative bg-[#3563E9] w-[100%] lg:w-[600px]">
          <div className="w-[90%] lg:w-[284px] space-y-4 text-white ml-4 lg:ml-8 pt-8 h-[160px]">
            <h1 className="text-[24px] lg:text-[32px] font-semibold">
              The Best Platform for Car Rental
            </h1>
            <p className="text-[14px] lg:text-[16px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="w-[120px] bg-[#54A6FF] rounded-[4px] h-[44px] text-[16px] text-white">
              Rental Car
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex w-[90%] ml-0 sm:ml-0 lg:ml-24 lg:w-[406px] sm:h-[200px] h-[116px] absolute bottom-5 items-center justify-center">
              <Image
                className="object-cover"
                src="/car2.png"
                alt=""
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col px-1 pb-6 lg:px-5 lg:flex-row items-center mt-10 justify-between animate-on-scroll">
        {/* Pick-Up Section */}
        <div
          className={`w-full lg:w-auto bg-[#FFFFFF] rounded-[10px] ${divsSwapped ? "order-2" : ""}`}
        >
          <div className="flex gap-4 pl-4 lg:pl-12 w-full lg:w-[522px] h-[56px] items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]"></div>
            <p className="text-[16px] text-[#1A202C] font-semibold">Pick - Up</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-12 pb-4 pl-4 lg:pl-12">
            <div>
              <p className="font-bold text-[#1A202C] text-[16px]">Location</p>
              <div className="flex justify-between items-center gap-6 lg:gap-16">
              <div className="flex">
                  <p className="text-[#90A3BF] lg:mt-0 lg:text-[12px] text-[12px] mt-2">Select Your Country</p>
                  <select name="Select Your Country" className="bg-[#FFFFFF] text-[#596780] text-[12px]">
                    <option className="text-[#596780]"  value="">Pakistan</option>
                    <option className="text-[#596780]"  value="">Iran</option>
                  </select>
                </div>
                <div className="flex">
                  <p className="text-[#90A3BF] lg:mt-0 lg:text-[12px] text-[12px] mt-2">Select Your City</p>
                  <select name="Select Your City" className="bg-[#FFFFFF] text-[#596780] text-[12px]">
                    <option className="text-[#596780]"  value="">Lahore</option>
                    <option className="text-[#596780]"  value="">Karachi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="h-[136px] flex items-center justify-center">
          <div
            onClick={() => setDivsSwapped(!divsSwapped)} // This will toggle swapping divs
            className="h-[60px] w-[60px] flex items-center justify-center gap-1 text-white rounded-[4px] bg-[#3563E9] cursor-pointer"
          >
            {/* Up and Down arrows */}
            <i className="text-[18px] fa-solid fa-arrow-up"></i>
            <i className="text-[18px] rotate-[90deg] fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {/* Drop-Off Section */}
        {/* Pick-Up Section */}
        <div
          className={`w-full lg:w-auto bg-[#FFFFFF] rounded-[10px] ${divsSwapped ? "order-2" : ""}`}
        >
          <div className="flex gap-4 pl-4 lg:pl-12 w-full lg:w-[522px] h-[56px] items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]"></div>
            <p className="text-[16px] text-[#1A202C] font-semibold">Drop - Off</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-12 pb-4 pl-4 lg:pl-12">
            <div>
              <p className="font-bold text-[#1A202C] text-[16px]">Location</p>
              <div className="flex justify-between items-center gap-6 lg:gap-16">
              <div className="flex">
                  <p className="text-[#90A3BF] lg:mt-0 lg:text-[12px]  text-[12px] mt-2">Select Your Country</p>
                  <select name="Select Your Country" className="bg-[#FFFFFF] text-[#596780] text-[12px]">
                    <option className="text-[#596780]" value="">Pakistan</option>
                    <option className="text-[#596780]" value="">Iran</option>
                  </select>
                </div>
                <div className="flex">
                  <p className="text-[#90A3BF] lg:mt-0 lg:text-[12px] text-[12px] mt-2">Select Your City</p>
                  <select name="Select Your City" className="bg-[#FFFFFF] text-[#596780] text-[12px]">
                    <option className="text-[#596780]"  value="">Lahore</option>
                    <option className="text-[#596780]"  value="">Karachi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        

    </div>
  );
};

export default Cards;