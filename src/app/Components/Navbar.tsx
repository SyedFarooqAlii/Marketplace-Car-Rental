"use client";
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />
      <div className="flex items-center justify-between p-5">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-[800] text-gray-900">MO<span className="text-blue-500">RENT</span></h1>
          {/* Search Bar (Visible on Medium and Larger Screens) */}
          <div className="hidden md:block">
            <Searchbar width={"mid:w-[400px]"} />
          </div>
        </div>

        {/* Center Section */}
        <div className="hidden md:flex items-center space-x-12">
         <Link href="/" >
          <p  className="text-[#3D5278] hover:text-blue-500">
          <i className="fa-solid fa-house text-[18px]"></i> Home
          </p>
          </Link>
         <Link href="/cars" >
          <p  className="text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-car text-[18px]"></i> Cars
          </p>
          </Link>
          <a href="/about" className="text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-info-circle text-[18px]"></i> About
          </a>
          <Link href="/cart" >
          <p  className="text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-shopping-cart text-[18px]"></i> Cart
          </p>
          </Link>
          <a href="/order-history" className="text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-clock text-[18px]"></i> Order History
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <i className="fa-solid fa-heart text-[24px] text-[#3D5278]"></i>
            <div className="relative">
              <i className="fa-solid fa-bell text-[24px] text-[#3D5278]"></i>
              <div className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></div>
            </div>
            <i className="fa-solid fa-gear text-[24px] text-[#3D5278]"></i>
          </div>
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="/unsplash.png"
            alt="User"
          />
        </div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-500 text-[24px]"
          >
            <i className="fa-solid fa-car"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-4">
         <Link href="/" >
          <p  className="text-[#3D5278] hover:text-blue-500">
          <i className="fa-solid fa-house text-[18px]"></i> Home
          </p>
          </Link>
         <Link href="/cars">
          <p  className="block text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-car mr-2"></i> Cars
          </p>
          </Link>
          <Link href="/about">
          <p  className="block text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-info-circle mr-2"></i> About
          </p>
          </Link>
          <Link href="/cart">
          <p  className="block text-[#3D5278] hover:text-blue-500">
            <i className="fa-solid fa-shopping-cart mr-2"></i> Cart
          </p>
          </Link>
         <Link href="/order-history">
          <p
            
            className="block text-[#3D5278] hover:text-blue-500"
          >
            <i className="fa-solid fa-clock mr-2"></i> Order History
          </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;