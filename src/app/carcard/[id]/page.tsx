import { sanityFetch } from "@/sanity/lib/fetch";
import { carById } from "@/sanity/lib/queries";
import CarDetailsClient from "./CarDetailsClient";

type CarDetailsProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  const CarItems: { _id: string }[] = await sanityFetch({
    query: `*[_type == "car"]{id}`,
  });

  return CarItems.map((item) => ({ id: item._id }));
}

export default async function CarDetailsPage({ params }: CarDetailsProps) {
  const CarItem = await sanityFetch({
    query: carById,
    params: { id: params.id },
  });

  if (!CarItem || CarItem.length === 0) {
    return <div>Car not found</div>;
  }

  return <CarDetailsClient car={CarItem[0]} />;
}