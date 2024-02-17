import { getReviewByFoodId } from "@/actions/review.action";
import ReviewForm from "./review-form";
import UserReview from "./user-review";

export default async function Review({ foodId }: { foodId: string }) {
  const { error, reviews } = await getReviewByFoodId(foodId);
  if (error) {
    console.log(error);
  }

  return (
    <div className="mt-2">
      <ReviewForm foodId={foodId} />
      <div className="mt-2 flex flex-col gap-4">
        {reviews &&
          reviews?.map((review) => (
            <UserReview
              key={review?.id}
              id={review?.id}
              comment={review?.comment as string}
              timeAgo={review?.createdAt.getTime()}
              userImage={review?.user?.image as string}
              userName={review?.user?.name}
            />
          ))}
      </div>
    </div>
  );
}
