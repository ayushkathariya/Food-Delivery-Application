"use server";
import prisma from "@/utils/prisma";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "@/utils/cloudinary";

cloudinaryConfig();

export const createFoodItem = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File;
    const category = formData.get("category") as string;

    const arrrayBuffer = await image.arrayBuffer();
    const imageBuffer = new Uint8Array(arrrayBuffer);

    cloudinary.uploader
      .upload_stream(
        {
          folder: "Food Items",
          resource_type: "image",
        },
        async (err, result) => {
          if (err) {
            return { error: "Failed to upload image" };
          }
          try {
            await prisma.foodItem.create({
              data: {
                name,
                description,
                price: Number(price),
                image: result?.secure_url as string,
                categoryId: category,
              },
            });
          } catch (error) {
            return { error: "Failed to store in database" };
          }
        }
      )
      .end(imageBuffer);

    return { message: "Food Created Successful" };
  } catch (error) {
    return { error: "Somethin went wrong" };
  }
};
