"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Stanton",
      position: "CEO at Bukalapak",
      date: "21 July 2022",
      rating: 4,
      image: "/reviewthree.avif",
      review:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: 2,
      name: "Skylar Dias",
      position: "CEO at Amazon",
      date: "20 July 2022",
      rating: 4,
      image: "reviewtwo.avif",
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: 3,
      name: "Ella Foster",
      position: "Marketing Lead",
      date: "18 July 2022",
      rating: 5,
      image: "/reviewfive.avif",
      review:
        "The Morent app provided us with excellent service. The variety of cars and the smooth booking process impressed me a lot!. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: 4,
      name: "James Taylor",
      position: "Freelancer",
      date: "17 July 2022",
      rating: 5,
      image: "/reviewfour.avif",
      review:
        "Affordable and reliable car rental services. Loved the professional support from the staff. Highly recommended. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: 5,
      name: "Sophia Lee",
      position: "Designer",
      date: "16 July 2022",
      rating: 4,
      image: "/review6.avif",
      review:
        "User-friendly app and excellent support staff. The cars were in great condition and very comfortable!. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      id: 6,
      name: "Skylar Dias",
      position: "CEO at Amazon",
      date: "20 July 2022",
      rating: 4,
      image: "reviewtwo.avif",
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < reviews.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : reviews.length - 1));
  };

  return (
    <div className="lg:mt-16 mt-12 px-2 lg:px-4">
      <div className="relative max-w-[100%] lg:max-w-[1250px] mx-auto bg-[#F6F7F9] lg:p-8 p-3 rounded-lg">
        {/* Title */}
        <div className="flex  mb-4 lg:flex-row flex-col justify-between ">
        <h2 className="lg:text-4xl text-3xl font-[800] text-[#1A202C] mb-8"><span className="text-[#3563E9]">Client</span> Reviews!</h2>

        {/* Arrows */}
        <div className=" flex lg:space-x-4 space-x-2 ">
          <button
            onClick={handlePrev}
            className="bg-[#3563E9] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="bg-[#3563E9] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          >
            &#8594;
          </button>
        </div>
        </div>
        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100)}%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="bg-[#ffffff] mb-4 shadow-lg rounded-lg lg:px-6 px-3 py-8 lg:mx-4 flex-shrink-0 w-full sm:w-[calc(100%)] lg:w-[calc(92%/3)] h-[350px] flex flex-col justify-between"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A202C]">{review.name}</h3>
                    <p className="text-xs text-[#90A3BF]">{review.position}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 flex-grow mb-4">{review.review}</p>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;