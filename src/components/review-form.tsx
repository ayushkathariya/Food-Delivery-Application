"use client";

import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { postReview } from "@/actions/review.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ReviewForm({ foodId }: { foodId: string }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(4);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { error, message } = await postReview(foodId, comment, rating);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success(message);
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Write your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="submit"> Submit</Button>
    </form>
  );
}
