"use client"
import React, { useEffect } from "react";

const Cards = () => {
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

  return (
    <div>
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
              <img
                className="object-contain"
                src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od1UBAJf7E5O46664edEbxigGSpM3-JsBv04704PcK-9d~RrvEs6ppQdIFAuV5SO7DK4KdIOedl7rLfh~ZdB8p2H010WWUIxpXiNh9sQzC8FF~k9lq2soe-51CJOCWNOQ9uBXLpaV2LlgrPiSwu1sOYI0xh~8DBSlQU2flfi~ymjFBtsgzmBfOZ~JLvE2WnajtJi5we3G6HDB9TGun3wd~4ItGLCzi-d13QfTCKEnDG8TSJFZPpuhqdW7969joySadH-urF54-xyCZb73147LVY6vp7yqYicDPozXo-d2EmYfXV9MsNGO99O7z6K3K9ay3ZXZ4wiPTFv3OpE5E4otw__"
                alt=""
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
              <img
                className="object-cover"
                src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row items-center mt-10 justify-between animate-on-scroll">
        {/* Pick-Up Section */}
        <div className="w-full lg:w-auto bg-white rounded-[10px]">
          <div className="flex gap-4 pl-4 lg:pl-12 w-full lg:w-[522px] h-[56px] items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]"></div>
            <p className="text-[16px] font-semibold">Pick - Up</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-12 pb-4 pl-4 lg:pl-12">
          <div className=''>
        
        <p className='font-bold text-[16px]'>Location</p>
        <div className='flex justify-between items-center gap-12'>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        </div>
        </div>
        </div>
          
        </div>

        {/* Arrow */}
        <div className="h-[136px] flex items-center">
          <div className="h-[60px] w-[60px] flex items-center justify-center gap-1 text-white rounded-[4px] bg-[#3563E9]">
            <i className="text-[18px] fa-solid fa-arrow-up"></i>
            <i className="text-[18px] rotate-[90deg] fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="w-full lg:w-auto bg-white rounded-[10px]">
          <div className="flex gap-4 pl-4 lg:pl-12 w-full lg:w-[522px] h-[56px] items-center">
            <div className="w-[14px] h-[14px] rounded-full bg-[#3563E9] border-[#AEC8FC] border-[2px]"></div>
            <p className="text-[16px] font-semibold">Drop - Off</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-12 pb-4 pl-4 lg:pl-12">
          <div className=''>
        
        <p className='font-bold text-[16px]'>Location</p>
        <div className='flex justify-between items-center gap-12'>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
        </div>
        <div className='flex'>
          <p className='text-[#90A3BF]  lg:mt-0 text-[12px] mt-2'>Select Your City</p>
          <select name="Select Your City" className='bg-white' id=""></select>
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