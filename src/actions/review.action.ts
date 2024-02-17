"use server";
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const postReview = async (
  foodId: string,
  comment: string,
  rating: number
) => {
  try {
    const session = await getAuthSession();
    if (!session) {
      return { error: "Unauthorized" };
    }

    if (!foodId || !comment || !rating) {
      return { error: "All fields are requried" };
    }

    await prisma.review.create({
      data: {
        comment,
        rating,
        userId: session?.user?.id,
        foodItemId: foodId,
      },
    });

    return { message: "Review posted successful" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const getReviewByFoodId = async (foodId: string) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        foodItemId: foodId,
      },
      include: {
        user: true,
      },
    });

    return { reviews };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
