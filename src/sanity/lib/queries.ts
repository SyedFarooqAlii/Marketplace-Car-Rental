import { defineQuery } from "next-sanity";

// Query to fetch car details by ID
export const carById = defineQuery(`
  *[_type == "car" && _id == $id] {
    name,
    _id,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    available,
    description,
    "image": image.asset->url
  }
`);

// Query to fetch all cars
export const allCars = defineQuery(`
  *[_type == "car"]{
    _id,
    name,
    brand,
    type,
    available,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
        description,
    "image": image.asset->url
  }
`);