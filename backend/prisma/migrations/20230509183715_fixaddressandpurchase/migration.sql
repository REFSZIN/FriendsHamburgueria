/*
  Warnings:

  - The `address` column on the `purchase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "purchase" DROP COLUMN "address",
ADD COLUMN     "address" TEXT[];
