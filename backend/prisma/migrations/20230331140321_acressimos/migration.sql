-- AlterTable
ALTER TABLE "product" ADD COLUMN     "acressimos" TEXT[];

-- CreateTable
CREATE TABLE "acressimos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "photoUrl" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "acressimos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "acressimos_id_idx" ON "acressimos"("id");
