/*
  Warnings:

  - Added the required column `quantity` to the `acressimos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "acressimos" ADD COLUMN     "quantity" INTEGER NOT NULL;
