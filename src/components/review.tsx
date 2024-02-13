import ReviewForm from "./review-form";
import UserReview from "./user-review";

export default function Review() {
  return (
    <div className="mt-2">
      <ReviewForm />
      <div className="mt-2 flex flex-col gap-4">
        <UserReview
          id="5"
          comment="This is ok"
          timeAgo="5 hrs ago"
          userImage="https://github.com/shadcn.png"
          userName="Ayush Kathariya"
        />
        <UserReview
          id="5"
          comment="This is ok"
          timeAgo="5 hrs ago"
          userImage="https://github.com/shadcn.png"
          userName="Ayush Kathariya"
        />
        <UserReview
          id="5"
          comment="This is ok"
          timeAgo="5 hrs ago"
          userImage="https://github.com/shadcn.png"
          userName="Ayush Kathariya"
        />
        <UserReview
          id="5"
          comment="This is ok"
          timeAgo="5 hrs ago"
          userImage="https://github.com/shadcn.png"
          userName="Ayush Kathariya"
        />
      </div>
    </div>
  );
}
