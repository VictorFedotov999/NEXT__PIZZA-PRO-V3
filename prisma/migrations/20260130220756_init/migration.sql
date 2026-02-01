/*
  Warnings:

  - You are about to drop the `ProductItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductItemSizeOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductItemTypeOption` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userBasketId,productId]` on the table `BasketItem` will be added. If there are existing duplicate values, this will fail.
  - Made the column `categoryId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `productId` to the `SizeOption` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `TypeOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_userBasketId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItemSizeOption" DROP CONSTRAINT "ProductItemSizeOption_productItemId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItemSizeOption" DROP CONSTRAINT "ProductItemSizeOption_sizeOptionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItemTypeOption" DROP CONSTRAINT "ProductItemTypeOption_productItemId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItemTypeOption" DROP CONSTRAINT "ProductItemTypeOption_typeOptionId_fkey";

-- AlterTable
ALTER TABLE "BasketItem" ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "userBasketId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "categoryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "SizeOption" ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TypeOption" ADD COLUMN     "productId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ProductItem";

-- DropTable
DROP TABLE "ProductItemSizeOption";

-- DropTable
DROP TABLE "ProductItemTypeOption";

-- CreateIndex
CREATE UNIQUE INDEX "BasketItem_userBasketId_productId_key" ON "BasketItem"("userBasketId", "productId");

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_userBasketId_fkey" FOREIGN KEY ("userBasketId") REFERENCES "UserBasket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeOption" ADD CONSTRAINT "SizeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeOption" ADD CONSTRAINT "TypeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
