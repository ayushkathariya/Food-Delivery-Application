import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type SingleCommentProps = {
  id: string;
  userName: string;
  userImage: string;
  timeAgo: string;
  comment: string;
};

export default function UserReview({
  id,
  comment,
  timeAgo,
  userImage,
  userName,
}: SingleCommentProps) {
  return (
    <>
      <div className="border px-1 py-2 rounded-lg">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex items-center  gap-2">
            <Avatar>
              <AvatarImage src={userImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-semibold">{userName}</p>
          </div>
          <div>
            <p className="font-medium">{timeAgo}</p>
          </div>
        </div>
        <div className="mt-2">
          <div className="my-4 flex items-center">
            <span className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500" />
              ))}
            </span>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
}
