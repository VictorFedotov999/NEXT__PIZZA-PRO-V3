/*
  Warnings:

  - You are about to drop the column `UserbasketId` on the `BasketItem` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientsId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the `Filters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `basketId` to the `BasketItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `BasketItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_UserbasketId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_ingredientsId_fkey";

-- AlterTable
ALTER TABLE "BasketItem" DROP COLUMN "UserbasketId",
ADD COLUMN     "basketId" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "categoryId" INTEGER;

-- AlterTable
ALTER TABLE "ProductItem" DROP COLUMN "categoryId",
DROP COLUMN "ingredientsId";

-- DropTable
DROP TABLE "Filters";

-- DropTable
DROP TABLE "Ingredients";

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductItemIngredient" (
    "id" INTEGER NOT NULL,
    "productItemId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "ProductItemIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filter" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Filter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "UserBasket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItemIngredient" ADD CONSTRAINT "ProductItemIngredient_productItemId_fkey" FOREIGN KEY ("productItemId") REFERENCES "ProductItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItemIngredient" ADD CONSTRAINT "ProductItemIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
