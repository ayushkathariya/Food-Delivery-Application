/*
  Warnings:

  - Added the required column `image` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodItem" ADD COLUMN     "image" TEXT NOT NULL;
