/*
  Warnings:

  - You are about to drop the column `acressimos` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `acressimos` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "acressimos",
ADD COLUMN     "additions" TEXT[];

-- DropTable
DROP TABLE "acressimos";

-- CreateTable
CREATE TABLE "additions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "quantity" INTEGER NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "additions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "additions_id_idx" ON "additions"("id");
