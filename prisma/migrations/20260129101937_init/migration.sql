/*
  Warnings:

  - You are about to drop the column `basketId` on the `BasketItem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `BasketItem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `userBasketId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `SizeOption` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `TypeOption` table. All the data in the column will be lost.
  - Added the required column `UserbasketId` to the `BasketItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productItemId` to the `BasketItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_basketId_fkey";

-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userBasketId_fkey";

-- DropForeignKey
ALTER TABLE "SizeOption" DROP CONSTRAINT "SizeOption_productId_fkey";

-- DropForeignKey
ALTER TABLE "TypeOption" DROP CONSTRAINT "TypeOption_productId_fkey";

-- AlterTable
ALTER TABLE "BasketItem" DROP COLUMN "basketId",
DROP COLUMN "productId",
ADD COLUMN     "UserbasketId" INTEGER NOT NULL,
ADD COLUMN     "productItemId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ingredients" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryId",
DROP COLUMN "price",
DROP COLUMN "userBasketId";

-- AlterTable
ALTER TABLE "SizeOption" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "TypeOption" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "ProductItem" (
    "id" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "ingredientsId" INTEGER NOT NULL,
    "typeOptionId" INTEGER NOT NULL,
    "sizeOptionId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "ProductItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_UserbasketId_fkey" FOREIGN KEY ("UserbasketId") REFERENCES "UserBasket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_productItemId_fkey" FOREIGN KEY ("productItemId") REFERENCES "ProductItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_ingredientsId_fkey" FOREIGN KEY ("ingredientsId") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_typeOptionId_fkey" FOREIGN KEY ("typeOptionId") REFERENCES "TypeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
