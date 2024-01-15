/*
  Warnings:

  - Made the column `brand_name` on table `Deal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Deal" ALTER COLUMN "brand_name" SET NOT NULL;
