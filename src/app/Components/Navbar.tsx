"use client";
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" ">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      />
      <div className="flex items-center bg-[#ffffff]  justify-between p-5">
        {/* Left Section (Morent Logo) */}
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl text-[#3563E9] font-[800]">
            MO<span className="text-[#3563E9]">RENT</span>
          </h1>
        </div>

        {/* Search Bar (Visible on Medium and Larger Screens) */}
        <div className="hidden md:block">
          <Searchbar width={"mid:w-[400px]"} />
        </div>

        {/* Desktop Navigation (Center) */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/">
            <p className="text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-house text-[18px]"></i> Home
            </p>
          </Link>
          <Link href="/cars">
            <p className="text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-car text-[18px]"></i> Cars
            </p>
          </Link>
          <Link href="/about">
            <p className="text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-info-circle text-[18px]"></i> About
            </p>
          </Link>
          <Link href="/cart">
            <p className="text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-shopping-cart text-[18px]"></i> Cart
            </p>
          </Link>
          <Link href="/order-history">
            <p className="text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-clock text-[18px]"></i> Order History
            </p>
          </Link>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <i className="fa-solid fa-heart text-[24px] text-[#3D5278]"></i>
          <div className="relative">
            <i className="fa-solid fa-bell text-[24px] text-[#3D5278]"></i>
            <div className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></div>
          </div>
          <i className="fa-solid fa-gear text-[24px] text-[#3D5278]"></i>

          {/* Clerk Profile Icon (ONLY HERE) */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Clerk Profile Icon (ONLY HERE) */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-500 text-[24px]"
          >
            <i className="fa-solid fa-car mr-2"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-4">
          <Link href="/">
            <p className="text-[#3D5278] mb-2 hover:text-blue-500">
              <i className="fa-solid fa-house text-[18px]"></i> Home
            </p>
          </Link>
          <Link href="/cars">
            <p className="block mb-2 text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-car mr-2"></i> Cars
            </p>
          </Link>
          <Link href="/about">
            <p className="block mb-2 text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-info-circle mr-2"></i> About
            </p>
          </Link>
          <Link href="/cart">
            <p className="block mb-2 text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-shopping-cart mr-2"></i> Cart
            </p>
          </Link>
          <Link href="/order-history">
            <p className="block mb-2 text-[#3D5278] hover:text-blue-500">
              <i className="fa-solid fa-clock mr-2"></i> Order History
            </p>
          </Link>

          {/* Clerk Sign In / Sign Out (Mobile) */}
          <div className="flex justify-start">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;