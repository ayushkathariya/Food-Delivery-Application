import { getFoodsByCategory } from "@/actions/food.action";
import Food from "@/components/food";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { error, foods } = await getFoodsByCategory(params?.category);
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="mx-auto grid w-full max-w-7xl items-stretch space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {foods &&
          foods?.map((food) => (
            <Food
              id={food?.id}
              key={food?.id}
              name={food?.name}
              price={Number(food?.price)}
              description={food?.description}
              image={food?.image}
              category={food?.categoryId}
            />
          ))}
      </div>
    </div>
  );
}
