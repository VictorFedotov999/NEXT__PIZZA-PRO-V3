/*
  Warnings:

  - You are about to drop the column `sizeOptionId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `typeOptionId` on the `ProductItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_sizeOptionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_typeOptionId_fkey";

-- DropIndex
DROP INDEX "ProductItem_productId_sizeOptionId_typeOptionId_key";

-- AlterTable
ALTER TABLE "ProductItem" DROP COLUMN "sizeOptionId",
DROP COLUMN "typeOptionId";

-- CreateTable
CREATE TABLE "ProductItemTypeOption" (
    "id" SERIAL NOT NULL,
    "productItemId" INTEGER NOT NULL,
    "typeOptionId" INTEGER NOT NULL,

    CONSTRAINT "ProductItemTypeOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductItemSizeOption" (
    "id" SERIAL NOT NULL,
    "productItemId" INTEGER NOT NULL,
    "sizeOptionId" INTEGER NOT NULL,

    CONSTRAINT "ProductItemSizeOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductItemTypeOption_productItemId_typeOptionId_key" ON "ProductItemTypeOption"("productItemId", "typeOptionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductItemSizeOption_productItemId_sizeOptionId_key" ON "ProductItemSizeOption"("productItemId", "sizeOptionId");

-- AddForeignKey
ALTER TABLE "ProductItemTypeOption" ADD CONSTRAINT "ProductItemTypeOption_productItemId_fkey" FOREIGN KEY ("productItemId") REFERENCES "ProductItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItemTypeOption" ADD CONSTRAINT "ProductItemTypeOption_typeOptionId_fkey" FOREIGN KEY ("typeOptionId") REFERENCES "TypeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItemSizeOption" ADD CONSTRAINT "ProductItemSizeOption_productItemId_fkey" FOREIGN KEY ("productItemId") REFERENCES "ProductItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItemSizeOption" ADD CONSTRAINT "ProductItemSizeOption_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
