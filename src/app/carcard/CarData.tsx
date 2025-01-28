import { sanityFetch } from "@/sanity/lib/fetch";
import { allCars } from "@/sanity/lib/queries";

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
};
// Server component function to fetch data
export async function fetchCarData(): Promise<CarItem[]> {
  const carItems: CarItem[] = await sanityFetch({ query: allCars });
  return carItems;
}
