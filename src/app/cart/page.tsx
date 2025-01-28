"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CarItem = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  image: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CarItem[]>([]);
  const router = useRouter();

  // Fetch cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Handle checkout
  const handleCheckout = () => {
    router.push("/checkout");
  };

  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(String(item.pricePerDay).replace("$", "").trim()) || 0;
    return total + price;
  }, 0);

  return (
    <div>
    
    <div className="container mx-auto px-6 py-8 animate-top">
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Your <span className="text-blue-500">Cart!</span>
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={item._id}
              className={`flex flex-col sm:flex-row justify-between items-center p-4 bg-white rounded-lg shadow-lg cart-item animate-slide}
              style={{
                animationDelay: ${index * 0.2}s,
              }`}
            >
              {/* Car Image */}
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Car Description */}
              <div className="flex-1 sm:ml-4 text-center sm:text-left">
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.type} | {item.brand}</p>
                <div className="text-sm mt-2 text-gray-500">
                  <p className="text-blue-500">
                    Fuel Capacity: <span className="text-gray-500">{item.fuelCapacity}</span>
                  </p>
                  <p className="text-blue-500">
                    Transmission: <span className="text-gray-500">{item.transmission}</span>
                  </p>
                  <p className="text-blue-500">
                    Seating Capacity: <span className="text-gray-500">{item.seatingCapacity}</span>
                  </p>
                </div>
              </div>

              {/* Car Price */}
              <div className="text-center sm:text-right">
                <div className="text-lg mt-2 font-bold text-gray-800 mb-4">
                  {item.pricePerDay}
                </div>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="flex justify-between px-4 items-center py-4 bg-gray-100 rounded-lg shadow-md animate-bottom">
            <div className="text-lg font-bold">Total Price</div>
            <div className="text-xl font-bold text-green-500">${totalPrice.toFixed(2)}</div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-6 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 w-full animate-bottom"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    
    </div>
  );
}