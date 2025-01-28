"use client";

import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Define types for order and its properties
interface Car {
  name: string;
  pricePerDay: string;
}

interface ShipmentDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

interface Order {
  pickupDate: string;
  dropoffDate: string;
  days: number;
  total: number;
  cars: Car[];
  shipmentDetails: ShipmentDetails;
}

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]); // Set state type as Order[]

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    setOrders(storedOrders); // Since we know it's an array of Order objects, TypeScript will know the structure
  }, []);

  const handleRemoveOrder = (index: number) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1); // Remove the order from the list

    // Update localStorage
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
    setOrders(updatedOrders); // Update the state
  };

  return (
    <div>
    
    <div className="container mx-auto px-3 lg:px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Order History</h1>
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-600">Order #{index + 1}</h2>

              <div className="mt-4">
                <h3 className="font-bold text-lg">Customer Details:</h3>
                <p>Name: {order.shipmentDetails.firstName} {order.shipmentDetails.lastName}</p>
                <p>Email: {order.shipmentDetails.email}</p>
                <p>Phone: {order.shipmentDetails.phone}</p>
                <p>Address: {order.shipmentDetails.address}</p>
                <p>City: {order.shipmentDetails.city}, {order.shipmentDetails.country}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-lg">Order Details:</h3>
                {order.cars && order.cars.length > 0 ? (
                  <ul className="space-y-4">
                    {order.cars.map((car, carIndex) => (
                      <li key={carIndex} className="flex items-center justify-between space-x-4">
                        <div>
                          <p className="text-blue-500">Car Name:</p>
                          <h4 className="font-semibold">{car.name}</h4>
                          <p className="text-gray-500">Price per day: ${parseFloat(car.pricePerDay.replace(/[^\d.-]/g, "")).toFixed(2)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No cars in this order</p>
                )}
                <p className="mt-2">Date & Time</p>
                <p className="mt-2">Pickup Date: {order.pickupDate}</p>
                <p>Drop-off Date: {order.dropoffDate}</p>
                <p className="mt-2">Days:</p>
                <p className="mt-2">Total Days: {order.days}</p>
                <p className="font-bold mt-2 text-lg">Total Amount: ${order.total.toFixed(2)}</p>
              </div>

              <button
                onClick={() => handleRemoveOrder(index)}
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Remove Order
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
    
    </div>
  );
};

export default OrderHistory;