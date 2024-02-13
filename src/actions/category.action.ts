"use server";

import { cloudinaryConfig } from "@/utils/cloudinary";
import { v2 as cloudinary } from "cloudinary";
import prisma from "@/utils/prisma";

cloudinaryConfig();

export const getCategories = async () => {
  try {
    const categories = await prisma.foodCategory.findMany();

    return { categories };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const createCategory = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;

    const arrrayBuffer = await image.arrayBuffer();
    const imageBuffer = new Uint8Array(arrrayBuffer);

    cloudinary.uploader
      .upload_stream(
        {
          folder: "Food Categories",
          resource_type: "image",
        },
        async (err, result) => {
          if (err) {
            return { error: "Failed to upload image" };
          }
          try {
            await prisma.foodCategory.create({
              data: {
                name,
                image: result?.secure_url as string,
              },
            });
          } catch (error) {
            return { error: "Failed to store in database" };
          }
        }
      )
      .end(imageBuffer);

    return { message: "Category created successful" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
