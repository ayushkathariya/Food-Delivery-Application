import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Review from "@/components/review";
import { getFoodById } from "@/actions/food.action";

export default async function Page({ params }: { params: { food: string } }) {
  const { error, food } = await getFoodById(params?.food);
  if (error) {
    console.log(error);
  }

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={food?.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="my-4 text-3xl font-semibold text-black">
              {food?.name}
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  {`${food?.reviews.length} Reviews`}
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{food?.description}</p>

            <div className="flex items-center justify-between mt-2">
              <span className="title-font text-xl font-bold text-gray-900">
                {`₹ ${food?.price}`}
              </span>
              <Button type="button">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3">
        <h1 className="text-3xl font-medium">Reviews</h1>
        <Review />
      </div>
      <div className="mt-4"></div>
    </section>
  );
}
