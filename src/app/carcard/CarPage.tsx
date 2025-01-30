"use client";

import { useState, useEffect } from "react";
import { fetchCarData, CarItem } from "./CarData";
import Image from "next/image";
import Link from "next/link";

export default function CarPage() {
  const [carItems, setCarItems] = useState<CarItem[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<"All" | "popular" | "recommended">("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadData() {
      const data = await fetchCarData();
      setCarItems(data);
      setFilteredCars(data);
    }
    loadData();
  }, []);

  const applyFilter = (filter: "All" | "popular" | "recommended") => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredCars(carItems);
    } else {
      const filtered = carItems.filter((car) => car.tags.includes(filter));
      setFilteredCars(filtered);
    }
    setCurrentIndex(0); // Reset index on filter change
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex - 3 + filteredCars.length) % filteredCars.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % filteredCars.length);
    }
  };

  return (
    <div className="max-w-screen-xl  bg-[#F6F7F9] overflow-hidden mx-auto px-[19px] lg:px-20 py-12 text-white">
      {/* Heading animation */}
      <h1 className="text-4xl font-[800] text-left mb-6 tracking-wide text-[#3563E9] animation-slide-top">
        <span className="text-[#1A202C]">Our</span> Cars
      </h1>

      {/* Filter Navbar */}
      <div className="flex lg:flex-row flex-col justify-between gap-6 mb-8">
        <div className="gap-2 lg:gap-4 flex animation-slide-left">
          <button
            onClick={() => applyFilter("All")}
            className={`px-4 py-2 rounded-lg transition-all duration-500 ease-in-out ${
              activeFilter === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-[#1A202C]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => applyFilter("popular")}
            className={`px-4 py-2 rounded-lg transition-all duration-500 ease-in-out ${
              activeFilter === "popular" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => applyFilter("recommended")}
            className={`px-4 py-2 rounded-lg transition-all duration-500 ease-in-out ${
              activeFilter === "recommended" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Recommended
          </button>
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-4 animation-slide-right">
          <div className="flex items-center justify-center text-white">
            <button
              onClick={() => handleArrowClick("left")}
              className="bg-[#3563E9] px-3 py-2 rounded-full transition-transform transform hover:scale-110"
            >
              ←
            </button>
          </div>
          <div className="flex items-center justify-center text-white">
            <button
              onClick={() => handleArrowClick("right")}
              className="bg-[#3563E9] px-3 py-2 rounded-full transition-transform transform hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
      </div>

       {/* Car Display */}
       <div className="flex pb-8 flex-wrap overflow-hidden justify-center gap-7 w-full">
          {filteredCars.slice(currentIndex, currentIndex + 6).map((item, index) => {
          // Determine animation based on index
          const animationClass =
            index % 3 === 0
              ? "animation-slide-left"
              : index % 3 === 1
              ? "animation-slide-bottom"
              : "animation-slide-right";

          return (
            <div
              key={`${item._id}-${currentIndex}`} // Ensure animation triggers for each change
              className={`
                 sm:w-[280px] md:w-[304px] lg:w-[285px] max-w-xs  lg:h-[370px]
flex flex-col w-[300px] rounded-[10px] pb-4 overflow-hidden border border-gray-100 bg-[#ffffff] shadow-md ${animationClass} transition-all duration-500 ease-in-out`}
            >
              {/* Header */}
              <div className="h-[48px] w-full flex items-center justify-center">
                <div className="flex justify-between items-center px-4 pt-4 w-full h-[48px]">
                  <div className="flex flex-col">
                    <p className="lg:text-[16px] text-[16px] md:text-[16px] font-[700] text-[#1A202C]">
                      {item.name}
                    </p>
                    <p className="lg:text-[14px] text-[14px] md:text-[14px] font-[700] text-[#90A3BF] tracking-[-.2%]">
                      {item.type}
                    </p>
                  </div>
                  {item.tags.length > 0 && (
                    <div className="flex gap-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-500 text-white text-xs mb-3  px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Image */}
              <div className="h-[200px] w-full flex items-center justify-center">
                <Image
                  className="imge h-[200px] object-contain lg:object-contain w-[200px] sm:h-[230px] sm:w-[230px] md:h-[240px] md:w-[240px] lg:h-[190px] lg:w-[260px]"
                  height={200}
                  width={200}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              {/* Specifications */}
              <div className="h-[24px] w-full flex items-center justify-center">
                <div className="flex  justify-between w-[256px] h-[24px]">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-gas-pump text-[14px] sm:text-[16px] text-[#90A3BF]"></i>
                    <p className="lg:text-[14px] text-[#90A3BF]  text-[14px]">{item.fuelCapacity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                      src="/wheel.jpg"
                      alt=""
                    />
                    <p className="lg:text-[14px] text-[#90A3BF] text-[14px]">{item.transmission}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                      src="/profile.jpg"
                      alt=""
                    />
                    <p className="lg:text-[14px] text-[#90A3BF] text-[14px]">{item.seatingCapacity}</p>
                  </div>
                </div>
              </div>
              {/* Pricing and Button */}
              <div className="w-full flex items-center justify-between">
                <div className="mt-4 mx-4 w-full justify-between flex font-sans h-[48px]">
                  <a href="#">
                    <h5 className="lg:text-[16px] text-[16px] md:text-[18px] font-[700] text-gray-900">
                      {item.pricePerDay}
                    </h5>
                    <p className="lg:text-[14px] text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
                      {item.originalPrice}
                    </p>
                  </a>
                  <Link href={`/carcard/${item._id}`}>
                    <button className="w-[80px] sm:w-[100px] md:w-[116px] rounded-[4px] h-[36px] sm:h-[40px] md:h-[44px] bg-[#3563E9] text-[12px] sm:text-[14px] md:text-[16px] font-[600] tracking-[-2%] text-white">
                      View Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
  );
}
