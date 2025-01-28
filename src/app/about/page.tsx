import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
            <img
              src="/3d.jpg"
              alt="Car Rental Service"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-2">
          <h1 className="text-4xl font-[800]  text-gray-900 mb-8">
          About<span className="text-blue-500">!</span>
        </h1>
            <h2 className="lg:text-2xl text-[20px] font-[700] text-blue-500">
              Your Trusted Car Rental Partner
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to our car rental service, where we redefine your travel
              experience with comfort, convenience, and style. Whether you're
              planning a business trip, a family vacation, or just a weekend
              getaway, we have the perfect vehicle for you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a diverse fleet of well-maintained cars, competitive pricing,
              and unparalleled customer service, we aim to make your journey
              smooth and hassle-free. Trust us to deliver excellence on every
              mile of your journey.
            </p>
          </div>
         
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-[800] text-gray-800 mb-4">
            <span className="text-blue-500">Why</span> Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-gray-900"><span className="text-blue-500">Wide</span> Selection</h4>
              <p className="text-gray-700 mt-2">
                Choose from a variety of vehicles to match your needs and
                preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-gray-900"><span className="text-blue-500">Affordable</span> Rates</h4>
              <p className="text-gray-700 mt-2">
                Enjoy competitive pricing without compromising on quality or
                service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-gray-900"><span className="text-blue-500">24/7</span> Support</h4>
              <p className="text-gray-700 mt-2">
                We're always here to assist you, no matter the time or place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
