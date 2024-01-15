/*
  Warnings:

  - Added the required column `brand_name` to the `Deal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deal" ADD COLUMN     "brand_name" TEXT NULL;
