"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

type CartItem = {
  _id: string;
  name: string;
  brand: string;
  pricePerDay: string; // String containing "$" sign
  image: string;
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shipmentDetails, setShipmentDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
  });
  const [days, setDays] = useState<number>(1);
  const [pickupDate, setPickupDate] = useState<string>("");
  const [dropoffDate, setDropoffDate] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const parsePrice = (price: string): number => {
    const numericValue = price.replace(/[^\d.-]/g, "");
    return parseFloat(numericValue) || 0;
  };

  const subTotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.pricePerDay) * days,
    0
  );
  const discount = subTotal * 0.1;
  const tax = subTotal * 0.05;
  const total = subTotal - discount + tax;

  const handlePlaceOrder = () => {
    if (!shipmentDetails.firstName || !shipmentDetails.email || !pickupDate || !dropoffDate) {
      alert("Please fill all required fields!");
      return;
    }

    const orderDetails = {
      cartItems,
      shipmentDetails,
      pickupDate,
      dropoffDate,
      cars: cartItems.map((item) => ({
        name: item.name,
        brand: item.brand,
        pricePerDay: item.pricePerDay,
      })),
      days,
      total,
    };

    let orderHistory = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    orderHistory.push(orderDetails);
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

    alert("Order placed successfully!");
    router.push("/order-history");
  };

  const handleDateChange = () => {
    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);
    const timeDiff = dropoff.getTime() - pickup.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays > 0) {
      setDays(diffDays);
    }
  };

  return (
    <div className=" overflow-hidden">
      

      <div className="container text-gray-900 mx-auto px-6 py-8">
        <h1 className="text-4xl font-[800] mb-8 text-center animate-heading">
          <span className="text-blue-500">Check</span>out!
        </h1>

        <div className="grid  grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Shipment Details */}
          <div className="col-span-2 bg-gray-100 lg:p-6 p-3 rounded-lg shadow-lg animate-slide-right">
            <h2 className="lg:text-3xl text-[26px] font-[800] mb-4 animate-heading">
              <span className="text-blue-500">Shipment</span> Details
            </h2>
            <form className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
  {/* First Name and Last Name */}
  <div className="flex flex-col w-full">
    <input
      type="text"
      placeholder="First Name"
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.firstName}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, firstName: e.target.value })}
    />
  </div>
  <div className="flex flex-col w-full">
    <input
      type="text"
      placeholder="Last Name"
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.lastName}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, lastName: e.target.value })}
    />
  </div>

  {/* Email and Phone */}
  <div className="flex flex-col w-full">
    <input
      type="email"
      placeholder="Email"
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.email}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, email: e.target.value })}
    />
  </div>
  <div className="flex flex-col w-full">
    <input
      type="text"
      placeholder="Phone"
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.phone}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, phone: e.target.value })}
    />
  </div>

  {/* Address */}
  <div className="flex flex-col w-full md:col-span-2">
    <input
      type="text"
      placeholder="Address"
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.address}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, address: e.target.value })}
    />
  </div>

  {/* Country */}
  <div className="flex flex-col w-full">
    <select
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.country}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, country: e.target.value })}
    >
      <option value="">Choose Country</option>
      <option value="Pakistan">Pakistan</option>
      <option value="UAE">UAE</option>
    </select>
  </div>

  {/* City */}
  <div className="flex flex-col w-full">
    <select
      className="border p-3 w-full rounded-md"
      value={shipmentDetails.city}
      onChange={(e) => setShipmentDetails({ ...shipmentDetails, city: e.target.value })}
    >
      <option value="">Choose City</option>
      <option value="Karachi">Karachi</option>
      <option value="Dubai">Dubai</option>
    </select>
  </div>
</form>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Pickup Date and Time</label>
              <input
                type="datetime-local"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                onBlur={handleDateChange}
                className="border p-3 w-full rounded-md"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Drop-off Date and Time</label>
              <input
                type="datetime-local"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                onBlur={handleDateChange}
                className="border p-3 w-full rounded-md"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 lg:p-6 p-3 lg:mt-0 mt-16 rounded-lg shadow-lg animate-slide-left">
            <h2 className="text-2xl font-[800] mb-4 animate-heading">
              <span className="text-blue-500">Order</span> Summary
            </h2>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item._id} className="flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.brand}</p>
                      <p className="font-medium">
                        ${parsePrice(item.pricePerDay).toFixed(2)} x {days} days
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Sub-total</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CheckoutPage;