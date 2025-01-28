"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export type CarItem = {
  name: string;
  brand: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay?: number;
  originalPrice?: number;
  tags: string[];
  image: string;
  _id:any,
  description:string,
  available:boolean,
};


export default function CarDetailsClient({ car }: { car: CarItem }) {
  const router = useRouter();

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    cart.push(car);
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div>
    <div className="relative">
        <div className="bg-blue-500 w-full h-[200px]"></div>
          
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">
            {car.name}
          </h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-black">Car Details</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Section: Thumbnails */}
          <div className="flex flex-col space-y-2">
  {[...Array(4)].map((_, index) => (
    <div
      key={index}
      className="w-24 h-24 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
    >
      <Image
        src={car.image} // Ensure this has the correct image path
        alt={car.name}
        width={96}
        height={96}
        className="object-contain w-full h-full" // Ensure image fits well
      />
    </div>
  ))}
</div>
          {/* Main Image */}
          <div className="flex-1">
            <Image
              src={car.image}
              alt={car.name}
              width={920}
              height={800}
              className="w-full h-full object-contain rounded-md"
              style={{ height: "calc(5 * 5rem + 8px)" }}
            />
          </div>

          {/* Right Section: Product Details */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-sm px-2 py-1 rounded-md ${
                  car.available ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {car.available ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {car.description}
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 text-blue-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">5.0</span> | 22 reviews
              </p>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">
              {car.pricePerDay}
              {car.originalPrice && (
                <span className="text-lg text-red-500 line-through ml-2">
                  {car.originalPrice}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Category: <span className="font-medium">{car.type}</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <button onClick={handleAddToCart} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-2">Share:</p>
              <div className="flex space-x-4">
                <button className="text-gray-500 h-[20px] w-[20px]">
                  <i className="fab fa-facebook-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-twitter-square text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-instagram text-xl"></i>
                </button>
                <button className="text-gray-500">
                  <i className="fab fa-linkedin text-xl"></i>
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        
        
  );
}