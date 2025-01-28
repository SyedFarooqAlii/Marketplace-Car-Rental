"use client";

import { useState, useEffect } from "react";
import { fetchCarData, CarItem } from "./CarData";
import Image from "next/image";
import Link from "next/link";

export default function CarPagetwo() {
  const [carItems, setCarItems] = useState<CarItem[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarItem[]>([]);
  const [isFiltersOpen, setFiltersOpen] = useState(false); // Define the state for filter visibility

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeType, setActiveType] = useState<string | null>(null); // For type filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 300]); // Price range slider
  const [transmission, setTransmission] = useState<string | null>(null); // Transmission filter

  useEffect(() => {
    async function loadData() {
      const data = await fetchCarData();
      setCarItems(data);
      setFilteredCars(data);
    }
    loadData();
  }, []);

  const filterByType = (type: string) => {
    if (type === "all") {
      // If "All" is selected, reset activeType to null
      setActiveType(null);
    } else {
      // Toggle the selected type
      setActiveType(type === activeType ? null : type);
    }
    
    // Apply filters after changing the type
    applyFilters(type === "all" ? null : type, transmission, priceRange);
    setCurrentIndex(0);  // Reset to the first index
  };
  const filterByTransmission = (transmissionType: string) => {
    // Transmission filter logic
    setTransmission(transmission === transmissionType ? null : transmissionType);
    applyFilters(activeType, transmissionType, priceRange);
    setCurrentIndex(0);  // Reset currentIndex when transmission filter is changed
  };
  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex - 3 + filteredCars.length) % filteredCars.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % filteredCars.length);
    }
  };


  const applyFilters = (type: string | null, transmission: string | null, priceRange: [number, number]) => {
    let filtered = carItems.filter((car) => {
      // Price filter
      const price = parseFloat(car.pricePerDay.replace('$', '').replace('/day', '').trim());
      const withinPriceRange = price >= priceRange[0] && price <= priceRange[1];

      // Type filter
      const matchesType = type ? car.type === type : true;

      // Transmission filter
      const matchesTransmission = transmission ? car.transmission.toLowerCase() === transmission.toLowerCase() : true;

      return withinPriceRange && matchesType && matchesTransmission;
    });

    setFilteredCars(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Update suggestions
    if (query.length > 0) {
      const matches = carItems
        .filter((car) =>
          car.name.toLowerCase().startsWith(query.toLowerCase())
        )
        .map((car) => car.name);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
      setFilteredCars(carItems);
    }
  };

  const handleSearchSubmit = () => {
    const filtered = carItems.filter((car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCars(filtered);
    setSuggestions([]);
    setCurrentIndex(0);  // Reset currentIndex to show the first set of filtered results
  };
  
  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    const filtered = carItems.filter(
      (car) => car.name.toLowerCase() === name.toLowerCase()
    );
    setFilteredCars(filtered);
    setSuggestions([]);
    setCurrentIndex(0);  // Reset currentIndex when selecting a suggestion
  };
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    const newRange = e.target.name === "min" 
      ? [value, priceRange[1]] 
      : [priceRange[0], value];
    setPriceRange(newRange);
    applyFilters(activeType, transmission, newRange);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 text-white">
     <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:mb-12 mb-6 lg:px-4 lg:items-center justify-between">
      <h1 className="lg:text-4xl text-[24px] font-[700]   tracking-wide text-gray-900">
        <span className="text-blue-500" >Explore Our Exclusive</span> Car Collection
      </h1>
       {/* Arrow buttons */}
       <div className="flex gap-4 animation-slide-right">
          <div className="flex items-center justify-center text-white">
            <button
              onClick={() => handleArrowClick("left")}
              className="bg-blue-600 px-3 py-2 rounded-full transition-transform transform hover:scale-110"
            >
              ←
            </button>
          </div>
          <div className="flex items-center justify-center text-white">
            <button
              onClick={() => handleArrowClick("right")}
              className="bg-blue-600 px-3 py-2 rounded-full transition-transform transform hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
</div>
      <div className="flex lg:flex-row space-y-8 lg:space-y-0 flex-col ">
      {/* Left Sidebar: Type Filter */}
<div className="w-full lg:w-[360px] bg-white rounded lg:pl-4 space-y-4 tracking-[-2%]">
  {/* Search Bar */}
  <div className="relative mb-4">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search cars by name..."
      className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={handleSearchSubmit}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Search
    </button>
    {/* Suggestions */}
    {suggestions.length > 0 && (
      <div className="absolute bg-white text-black border border-gray-300 mt-1 rounded-lg w-full z-10">
        {suggestions.map((name, index) => (
          <div
            key={index}
            onClick={() => handleSuggestionClick(name)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            {name}
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Filters Button (Visible on Small Screens Only) */}
  <button
    className="lg:hidden w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600 transition"
    onClick={() => setFiltersOpen(!isFiltersOpen)}
  >
    {isFiltersOpen ? "Hide Filters" : "Show Filters"}
  </button>

  {/* Filters Section (Collapsible on Small Screens) */}
  <div
    className={`transition-all space-y-4 duration-300 ${
      isFiltersOpen ? "block" : "hidden"
    } lg:block`}
  >
    {/* Type Filter */}
    <p className="text-[16px] font-[600] text-[#90A3BF] tracking-wider">T Y P E</p>
    <div
      className={`flex items-center gap-4 cursor-pointer ${
        activeType === null ? "bg-gray-200 rounded-lg" : ""
      }`}
      onClick={() => filterByType("all")}
    >
      <div
        className={`h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] ${
          activeType === null
            ? "bg-[#3563E9] text-white"
            : "border-black border-[1px]"
        }`}
      >
        {activeType === null && <i className="fa-solid fa-check"></i>}
      </div>
      <div className="flex">
        <p className="text-[18px] font-[600] text-[#596780]">All</p>
      </div>
    </div>

    {[
      "Sport",
      "SUV",
      "MPV",
      "Sedan",
      "Electric",
      "Coupe",
      "Hatchback",
      "Sports Car",
      "Luxury Sedan",
    ].map((type) => (
      <div
        key={type}
        className={`flex  items-center gap-4 cursor-pointer ${
          activeType === type ? "bg-gray-200 rounded-lg" : ""
        }`}
        onClick={() => filterByType(type)}
      >
        <div
          className={`h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] ${
            activeType === type
              ? "bg-[#3563E9] text-white"
              : "border-black border-[1px]"
          }`}
        >
          {activeType === type && <i className="fa-solid fa-check"></i>}
        </div>
        <div className="flex">
          <p className="text-[16px] font-[600] text-[#596780]">
            {type} <span className="text-[#90A3BF]">(3)</span>
          </p>
        </div>
      </div>
    ))}

    {/* Transmission Filter */}
    <p className="text-[16px] uppercase font-[600] text-[#90A3BF] tracking-wider">Transmission</p>
    {["Automatic", "Manual"].map((transmissionType) => (
      <div
        key={transmissionType}
        className={`flex items-center gap-4 cursor-pointer ${
          transmission === transmissionType ? "bg-gray-200 rounded-lg" : ""
        }`}
        onClick={() => filterByTransmission(transmissionType)}
      >
        <div
          className={`h-[22px] flex items-center justify-center rounded-[6px] w-[22px] text-[12px] ${
            transmission === transmissionType
              ? "bg-[#3563E9] text-white"
              : "border-black border-[1px]"
          }`}
        >
          {transmission === transmissionType && <i className="fa-solid fa-check"></i>}
        </div>
        <div className="flex">
          <p className="text-[16px] font-[600] text-[#596780]">
            {transmissionType} <span className="text-[#90A3BF]">(3)</span>
          </p>
        </div>
      </div>
    ))}

    {/* Price Range Slider */}
    <p className="text-[12px] font-[600] uppercase text-[#90A3BF] tracking-wider mt-4">Price Range</p>
    <div>
      <input
        type="range"
        name="min"
        min="0"
        max="200"
        step="1"
        value={priceRange[0]}
        onChange={handlePriceRangeChange}
        className="w-full"
      />
      <input
        type="range"
        name="max"
        min="0"
        max="200"
        step="1"
        value={priceRange[1]}
        onChange={handlePriceRangeChange}
        className="w-full"
      />
      <p className="text-black">
        <span className="text-blue-500">Price Range:</span> ${priceRange[0]} - ${priceRange[1]}
      </p>
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
flex flex-col w-[300px] rounded-[10px] pb-4 overflow-hidden border border-gray-100 bg-white shadow-md ${animationClass} transition-all duration-500 ease-in-out`}
            >
              {/* Header */}
              <div className="h-[48px] w-full flex items-center justify-center">
                <div className="flex justify-between items-center px-4 pt-4 w-full h-[48px]">
                  <div className="flex flex-col">
                    <p className="lg:text-[16px] text-[16px] md:text-[16px] font-[700] text-[#1A202C]">
                      {item.name}
                    </p>
                    <p className="lg:text-[10px] text-[14px] md:text-[14px] font-[700] text-[#90A3BF] tracking-[-.2%]">
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
                    <p className="lg:text-[12px] text-[#90A3BF]  text-[14px]">{item.fuelCapacity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                      src="/wheel.jpg"
                      alt=""
                    />
                    <p className="lg:text-[12px] text-[#90A3BF] text-[14px]">{item.transmission}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px]"
                      src="/profile.jpg"
                      alt=""
                    />
                    <p className="lg:text-[12px] text-[#90A3BF] text-[14px]">{item.seatingCapacity}</p>
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
                    <p className="lg:text-[10px] text-[12px] md:text-[14px] font-[700] text-[#90A3BF]">
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
    </div>
  );
}