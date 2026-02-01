/*
  Warnings:

  - You are about to drop the column `basketId` on the `BasketItem` table. All the data in the column will be lost.
  - You are about to drop the column `productItemId` on the `BasketItem` table. All the data in the column will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductItemIngredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `BasketItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userBasketId` to the `BasketItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_basketId_fkey";

-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_productItemId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItemIngredient" DROP CONSTRAINT "ProductItemIngredient_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItemIngredient" DROP CONSTRAINT "ProductItemIngredient_productItemId_fkey";

-- AlterTable
ALTER TABLE "BasketItem" DROP COLUMN "basketId",
DROP COLUMN "productItemId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD COLUMN     "userBasketId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "ProductItemIngredient";

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_userBasketId_fkey" FOREIGN KEY ("userBasketId") REFERENCES "UserBasket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
