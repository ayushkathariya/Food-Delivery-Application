"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type FoodProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

export default function Food({
  id,
  name,
  price,
  description,
  image,
  category,
}: FoodProps) {
  const router = useRouter();

  return (
    <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
      <img
        src={image}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover cursor-pointer"
      />
      <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <p className="mt-2 text-sm text-gray-300">{`₹ ${price}`}</p>
        <div className="flex justify-around">
          <Button
            variant={"secondary"}
            className="mt-2"
            onClick={() => {
              router.push(`/category/${category}/${id}`);
            }}
          >
            See Details
          </Button>
          <Button variant={"secondary"} className="mt-2">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
